"""Build additive, transcript-preserving calculation revisions from reviewed takes."""
from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
CODE = r'''
import fs from 'node:fs';
import path from 'node:path';
import {decodePcm,runMedia,pcmWav} from './scripts/lib/media-tools.mjs';
import {resolvePlayback,writePlayback,sha256,canonical,publicPath} from './scripts/lib/playback-assembly.mjs';
import {verifyAssembly} from './scripts/lib/verify-assembly.mjs';
import {alignmentToCaptions,alignmentPathFor} from './scripts/lib/caption-timeline.mjs';
import {checkProductionBrief} from './scripts/lib/production-brief.mjs';
import {lessonTimeline} from './src/lesson/timeline.mjs';

const root=process.cwd(), specPath=process.argv[2];
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const hash=p=>sha256(fs.readFileSync(p));
const write=(p,value)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(value,null,2)+'\n',{flag:'wx'});};
const spec=read(specPath), rate=spec.rate;
if(!(rate>=0.9&&rate<1))throw Error('This focused revision requires a modest reduction in pace.');
const outputs=[];
for(const entry of spec.lessons){
 const lesson=read(entry.source), brief=read(entry.brief), original=structuredClone(lesson);
 if(hash(entry.source)!==entry.sourceSha256)throw Error('Selected source drift: '+entry.source);
 const gate=checkProductionBrief(root,entry.brief,{stage:'recording'});
 if(!gate.ready)throw Error('Original source review failed: '+JSON.stringify(gate.blockers));
 if(JSON.stringify(lesson).includes(String.fromCodePoint(0x2014)))throw Error('Selected copy contains prohibited punctuation.');
 if(fs.existsSync(entry.output)&&fs.readdirSync(entry.output).length)throw Error('Preserve existing revision: '+entry.output);
 fs.mkdirSync(entry.output,{recursive:true});
 const inputFiles=new Set([specPath,'scripts/prepare-paced-feedback.py',entry.source]);
 const rows=[];
 for(const scene of lesson.scenes){
  const old=structuredClone(scene), errors=verifyAssembly(scene,lesson.fps,root);
  if(errors.length)throw Error(scene.id+': '+errors.join('; '));
  if(!entry.slowerScenes.includes(scene.id))continue;
  const assembly=read(publicPath(root,old.voiceover.audioFile).replace(/\.wav$/,'.assembly.json'));
  const selected=[],items=[],derivations=[];
  let index=0;
  for(const item of assembly.items){
   if(item.kind==='silence'){items.push({kind:'silence',frames:item.endFrame-item.startFrame});continue;}
   const dependency=assembly.dependencies[index++], source=publicPath(root,dependency.audioFile);
   const alignmentFile=alignmentPathFor(source), generationFile=source.replace(/\.[^.]+$/,'.generation.json');
   const raw=read(alignmentFile), generation=read(generationFile);
   const text=raw.characters.join('').replace(/\s+/g,' ').trim();
   const id=item.segmentId, slow=!id.endsWith('-prompt');
   let audioFile=dependency.audioFile;
   for(const p of [source,alignmentFile,generationFile])inputFiles.add(path.relative(root,p).replaceAll('\\','/'));
   if(slow){
    const pcm=decodePcm(source,root), oldSeconds=pcm.length/96000;
    const ends=raw.character_end_times_seconds;
    const firstPast=ends.findIndex(t=>t>oldSeconds);
    if(ends.at(-1)>oldSeconds&&(ends.at(-1)-oldSeconds>0.1+1e-9||raw.characters.slice(firstPast).some(c=>!/[.!?,;:\s]/.test(c))))throw Error('Substantive alignment exceeds source audio.');
    const samples=Math.ceil((pcm.length/2)/rate);
    const filter=`atempo=${rate},apad,atrim=end_sample=${samples}`;
    const encoded=runMedia('ffmpeg',['-v','error','-i',source,'-vn','-ac','1','-ar','48000','-af',filter,'-c:a','pcm_s16le','-f','wav','pipe:1'],root);
    let processed;
    for(let offset=12;offset+8<=encoded.length;){
     const size=encoded.readUInt32LE(offset+4);
     if(encoded.toString('ascii',offset,offset+4)==='data'){processed=encoded.subarray(offset+8,Math.min(encoded.length,offset+8+size));break;}
     offset+=8+size+(size%2);
    }
    if(!processed)throw Error('Derived decoder returned no PCM.');
    if(processed.length!==samples*2)throw Error('Derived PCM length mismatch.');
    const wav=pcmWav(processed), signature=sha256(canonical({sourceSha256:hash(source),alignmentSha256:hash(alignmentFile),rate,wavSha256:sha256(wav)}));
    audioFile=`public/audio/paced-feedback-2026-10-10/${entry.key}/${id}.${signature.slice(0,20)}.wav`;
    const target=publicPath(root,audioFile);
    const transformed={...raw,
     character_start_times_seconds:raw.character_start_times_seconds.map(t=>Math.min(t,oldSeconds)/rate),
     character_end_times_seconds:ends.map(t=>Math.min(t,oldSeconds)/rate)};
    alignmentToCaptions(transformed);
    const derivation={kind:'pitch-preserving-tempo-transform',rate,filter,sourceAudio:dependency.audioFile,
     sourceAudioSha256:hash(source),sourceAlignmentSha256:hash(alignmentFile),sourceGenerationSha256:hash(generationFile),
     sourceDecodedSamples:pcm.length/2,derivedSamples:samples,alignment:'Original character times divided by tempo factor; terminal punctuation bounded to original decoded media.',
     limitation:'Time-stretch alignment is derived, not a fresh provider measurement. Local waveform timing and audible quality require playback review.'};
    fs.mkdirSync(path.dirname(target),{recursive:true});
    fs.writeFileSync(target,wav,{flag:'wx'});
    write(alignmentPathFor(target),transformed);
    write(target.replace(/\.wav$/,'.generation.json'),{...generation,derivation,provenanceStatus:'Derived from preserved provider take; no new provider request.'});
    derivations.push({segmentId:id,audioFile,...derivation});
   }
   selected.push({id,parentSceneId:scene.id,text,hash:sha256(text).slice(0,12),audioFile});
   items.push({kind:'audio',segmentId:id,audioFile});
  }
  const partial={...lesson,scenes:[old]}, manifest={fps:lesson.fps,scenes:selected};
  const result=resolvePlayback({lesson:partial,manifest,plan:{playback:[{sceneId:scene.id,items}]},root,tailSeconds:0.5});
  writePlayback(result,root);
  const next=result.lesson.scenes[0], freshAssembly=result.scenes[0].provenance;
  const mapTime=t=>{
   for(let i=0;i<assembly.items.length;i++){
    const a=assembly.items[i],b=freshAssembly.items[i];
    if(t<=a.endFrame)return b.startFrame+(Math.max(a.startFrame,t)-a.startFrame)*(b.endFrame-b.startFrame)/(a.endFrame-a.startFrame);
   }
   return t+(next.voiceover.endFrame-old.voiceover.endFrame);
  };
  const mapCue=t=>{
   const i=old.captions.findIndex(c=>Math.abs(c.startMs*lesson.fps/1000-t)<=1.1);
   return i>=0?Math.ceil(next.captions[i].startMs*lesson.fps/1000-1e-8):Math.round(mapTime(t));
  };
  const duration=old.durationInFrames+next.voiceover.endFrame-old.voiceover.endFrame;
  Object.assign(scene,{voiceover:next.voiceover,captions:next.captions,durationInFrames:duration});
  scene.revealDelays=Object.fromEntries(Object.entries(old.revealDelays??{}).map(([k,v])=>[k,Array.isArray(v)?v.map(mapCue):typeof v==='number'?mapCue(v):v]));
  if(next.responseHold){
   scene.responseHold=next.responseHold;
   scene.revealDelays.responseHoldStart=next.responseHold.startFrame;
   scene.revealDelays.answerVisibleStart=next.responseHold.endFrame;
   if(next.responseHold.endFrame-next.responseHold.startFrame!==60)throw Error('Practice gap changed.');
  }
  for(const bullet of scene.bullets??[])if(typeof bullet.at==='number')bullet.at=mapCue(bullet.at*lesson.fps)/lesson.fps;
  if(scene.diagram){
   const oldDelay=old.diagram.delay??0;
   scene.diagram.delay=mapCue(oldDelay);
   if(Array.isArray(old.diagram.steps))scene.diagram.steps=old.diagram.steps.map(t=>Math.max(0,mapCue(oldDelay+t)-scene.diagram.delay));
   if(scene.diagram.props?.beats)scene.diagram.props.beats=Object.fromEntries(Object.entries(old.diagram.props.beats).map(([k,v])=>[k,Math.max(0,mapCue(oldDelay+v)-scene.diagram.delay)]));
  }
  for(const stage of scene.calculationPresentation?.stages??[])if(stage.lineAts)stage.lineAts=stage.lineAts.map(mapCue);
  rows.push({sceneId:scene.id,rate,oldFrames:old.voiceover.endFrame,newFrames:scene.voiceover.endFrame,derivations});
 }
 if(entry.key==='mole-ratios'){
  const acid=lesson.scenes.find(s=>s.id==='worked-example-2');
  acid.calculationPresentation.stages[1].lines=['n(HCl) = n(Ca(OH)₂) × (2 / 1)'];
  acid.calculationPresentation.stages[2].lines=['n(HCl) = 0.300 × (2 / 1)','n(HCl) = 0.600 mol'];
  acid.calculationPresentation.stages[2].summary='Required HCl: 0.600 mol';
  const phrase=['Going','the','other','way'].map(x=>x.toLowerCase());
  const norm=x=>x.toLowerCase().replace(/[^\w]/g,'');
  const i=acid.captions.findIndex((_,i)=>canonical(acid.captions.slice(i,i+4).map(c=>norm(c.text)))===canonical(phrase));
  if(i<0)throw Error('Missing reverse-comparison cue.');
  const cue=Math.ceil(acid.captions[i].startMs*lesson.fps/1000);
  acid.steps.push('Reverse comparison: n(Ca(OH)₂) = n(HCl) × (1 / 2)');
  acid.revealDelays.stepAts.push(cue);
  acid.calculationPresentation.stages.push({label:'Reverse the comparison',lines:['n(Ca(OH)₂) = n(HCl) × (1 / 2)'],summary:'Reverse direction: base wanted, acid known',lineAts:[cue]});
  const quiz=lesson.scenes.find(s=>s.id==='quick-check');
  quiz.calculationPresentation.stages[0].lines[0]='n(H₂O) = 4.00 × (2 / 2)';
  quiz.calculationPresentation.stages[1].lines[0]='n(O₂) = 4.00 × (1 / 2)';
 }
 for(let i=0;i<lesson.scenes.length;i++){
  const scene=lesson.scenes[i];
  if(scene.voiceover.text!==original.scenes[i].voiceover.text)throw Error('Transcript changed.');
  if(scene.calculationPresentation&&scene.calculationPresentation.stages.length!==(scene.steps??scene.answerSteps).length)throw Error('Stage count mismatch.');
  const errors=verifyAssembly(scene,lesson.fps,root);
  if(errors.length)throw Error(scene.id+': '+errors.join('; '));
 }
 const source=entry.output+'/narrated.lesson.json';
 write(source,lesson);write(entry.output+'/remotion-props.json',{lesson});
 write(entry.output+'/tempo-derivation.json',{source:entry.source,sourceSha256:entry.sourceSha256,rate,scenes:rows,transcriptsUnchanged:true,practiceGapFrames:60,humanListening:'pending'});
 const review=entry.output+'/source-review.md';
 fs.writeFileSync(review,'# Focused user-feedback revision\n\nOriginal source: '+entry.source+', SHA-256 '+entry.sourceSha256+'. Selected source: '+source+', SHA-256 '+hash(source)+'.\n\nAll spoken words, supplied values, reaction assumptions and learning boundaries are unchanged. The existing source-review evidence is '+brief.scriptReview.evidence.path+'. Hard calculation explanations use a pitch-preserving 0.94 tempo derivation from the preserved takes. Hooks and prompt segments retain their pace. Character times, captions, working cues and scene lengths are rebuilt together; the actual practice gap stays sixty frames. Mole-ratios display now preserves the explicit 2/1 multiplier and shows the reverse 1/2 comparison at its spoken cue. Existing native working layouts and teaching diagrams are retained.\n\nAssembly dependencies and transcript identity were checked. Derived timing is not freshly measured provider alignment. Actual listening, continuous playback, timing precision and device/caption clearance remain pending for this exact revision. No full export or publication is approved by this source check.\n',{flag:'wx'});
 brief.source={lessonPath:source,lessonSha256:hash(source)};
 brief.scriptReview={status:'pass',reviewer:'Coordinating agent (unchanged transcript and scoped display/source checks)',evidence:{path:review,sha256:hash(review)}};
 brief.voicedPreview={status:'pending',reviewer:'',mode:'',inputSnapshotPath:'',evidence:null,humanListening:{status:'pending',reviewer:'',mode:'human-listening',evidence:null}};
 brief.limitation='User accepts the previous general direction and requests the ratio display correction and gentler difficult explanations. New tempo-derived candidate requires exact playback/listening review before export/release.';
 const quiz=lesson.scenes.find(s=>s.type==='quickCheck');
 brief.teaching.understandingCheck+=' New revision: the measured practice gap is at local frames '+quiz.responseHold.startFrame+' to '+quiz.responseHold.endFrame+'; response instructions remain normal pace.';
 for(const item of brief.scenes){
  const s=lesson.scenes.find(s=>s.id===item.sceneId);
  item.narrationCue='Current recorded cues: '+JSON.stringify(s.revealDelays)+'; '+(entry.slowerScenes.includes(s.id)?'calculation explanation uses 0.94 tempo, with all captions and later result lines retimed.':'preserved normal-pace take.');
  if(entry.key==='mole-ratios'&&s.id==='worked-example-2'){
   item.visualDecision='Adjust the existing organised board: retain explicit 2/1 in substitution and add a separate reverse 1/2 comparison stage.';
   item.teachingReason='The displayed ratio must support the spoken direction of conversion; show the reversal when it is explained, after the forward result.';
  }
 }
 write(entry.output+'/production-brief.json',brief);
 const timeline=lessonTimeline(lesson);
 const config={lessonPath:source,entryPoint:'src/dev/release-entry.tsx',compositionId:'Lesson-release',codec:'h264',scale:1,crf:16,concurrency:1,audioMode:'alignedPcm',normalizeAudio:true,teachingBriefPath:entry.output+'/production-brief.json',inputs:[...inputFiles,entry.output+'/tempo-derivation.json']};
 write(entry.output+'/full-config.json',config);
 const pilot=timeline.scenes.find(s=>s.scene.id===entry.pilot);
 write(entry.output+'/worked-pilot-config.json',{...config,frameRange:[pilot.startFrame,pilot.startFrame+pilot.scene.durationInFrames-1]});
 write(entry.output+'/revision.json',{source,sourceSha256:hash(source),durationFrames:timeline.durationInFrames,changes:rows.map(r=>({sceneId:r.sceneId,oldFrames:r.oldFrames,newFrames:r.newFrames})),humanListening:'pending'});
 outputs.push({key:entry.key,source,sha256:hash(source),frames:timeline.durationInFrames});
}
console.log(JSON.stringify(outputs));
'''

if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise SystemExit('Usage: python scripts/prepare-paced-feedback.py batch-spec.json')
    subprocess.run(['node', '--input-type=module', '-', sys.argv[1]], input=CODE, text=True, encoding='utf-8', cwd=ROOT, check=True)
