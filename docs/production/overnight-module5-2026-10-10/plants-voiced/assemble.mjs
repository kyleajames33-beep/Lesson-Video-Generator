import fs from 'node:fs';
import {sha256,canonical,resolvePlayback,writePlayback} from '../../../../scripts/lib/playback-assembly.mjs';
import {pcmWav} from '../../../../scripts/lib/media-tools.mjs';
import {buildSpeechRequest} from '../../../../scripts/elevenlabs-request.mjs';
import {lessonCaptionCues,toSrt,toVtt} from '../../../../scripts/lib/caption-timeline.mjs';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';

const dir='docs/production/overnight-module5-2026-10-10/plants-voiced';
const revision2=process.argv.includes('--revision=2');
const measuredName=revision2?'measured-v2':'measured';
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const hash=file=>sha256(fs.readFileSync(file));
const manifest=read(`${dir}/voice-manifest.json`),plan=read(`${dir}/playback-plan.json`);
if(hash(manifest.lessonPath)!==manifest.lessonSha256)throw Error('Original source drift');
const source=read(manifest.lessonPath),parentBrief=read(manifest.recordingBrief.path);
if(hash(manifest.recordingBrief.path)!==manifest.recordingBrief.sha256)throw Error('Recording brief drift');
const raw=manifest.scenes.map(s=>{
 const generation=read(s.generationFile);
 const expected=buildSpeechRequest({text:s.text,voiceId:manifest.voiceSelection.voiceId,modelId:manifest.voiceSelection.modelId,requestOptions:manifest.requestOptions}).body;
 if(canonical(generation.request)!==canonical(expected)||sha256(canonical(expected))!==s.plannedRequestSha256)throw Error('Request drift '+s.id);
 return {segmentId:s.id,textSha256:sha256(s.text),requestSha256:sha256(canonical(expected)),files:[s.audioFile,s.alignmentFile,s.generationFile].map(path=>({path,sha256:hash(path)}))};
});
const spoken=structuredClone(source);
spoken.scenes=spoken.scenes.filter(s=>s.voiceover?.text);
spoken.scenes.forEach(s=>{s.durationInFrames=25;});
const result=resolvePlayback({lesson:spoken,manifest,plan,tailSeconds:2});
const record={schemaVersion:1,status:'measured-candidate-pending-independent-source-and-voiced-review',source:{path:manifest.lessonPath,sha256:manifest.lessonSha256},manifest:{path:`${dir}/voice-manifest.json`,sha256:hash(`${dir}/voice-manifest.json`)},rawGeneration:raw,cues:[],responseHolds:[],scope:'Measured provider alignment, lossless PCM assembly and protected response silence. No actual human listening or complete playback pass.'};
const modelBulletKeys={
 'b3-flower':['anther','pollenDetail','style','ovule'],
 'b3-delivery':['pollination','spermDelivery','fusion'],
 'b3-seed':['zygote','seed','fruit'],
 'b3-runner':['runner','node','rootsShoot','noFusion'],
 'b3-self-cross':['self','cross','conditionalFusion'],
};
for(const scene of result.lesson.scenes){
 const assembly=result.scenes.find(s=>s.sceneId===scene.id);
 const aligned=assembly.alignment.characters.join('');
 const cue=(phrase,field)=>{
  const at=aligned.indexOf(phrase);
  if(at<0||aligned.indexOf(phrase,at+1)>=0)throw Error(`Nonunique/missing cue ${scene.id}: ${phrase}`);
  const localFrame=Math.ceil(assembly.alignment.character_start_times_seconds[at]*source.fps-1e-8);
  record.cues.push({sceneId:scene.id,field,phrase,characterIndex:at,localFrame});
  return localFrame;
 };
 const row=parentBrief.scenes.find(s=>s.sceneId===scene.id);
 const match=row.narrationCue.match(/^(\[[\s\S]*\])(?: Estimated|$)/);
 const descriptors=match?JSON.parse(match[1]):[];
 scene.revealDelays??={};
 for(const d of descriptors){
  const descriptorField=revision2&&scene.id==='b3-check-feedback'&&d.field==='stages.0.lineAts.0'?'stages.0.lineAts.1':d.field;
  const frame=cue(d.phrase,d.key?`diagram.props.at.${d.key}`:descriptorField);
  if(d.key){scene.diagram.props.at[d.key]=frame;continue;}
  let field=descriptorField;
  if(field.startsWith('stepAts.')||field.startsWith('takeawayAts.'))field=`revealDelays.${field}`;
  if(field.startsWith('focusedContext.'))field=`calculationPresentation.${field}`;
  if(field.startsWith('stages.'))field=`calculationPresentation.${field}`;
  const parts=field.split('.');let target=scene;
  for(const part of parts.slice(0,-1)){if(target[part]===undefined)throw Error('Missing cue field '+field);target=target[part];}
  target[parts.at(-1)]=field.startsWith('bullets.')?frame/source.fps:frame;
 }
 const keys=modelBulletKeys[scene.id];
 if(keys)scene.bullets=scene.bullets.map((b,i)=>({...b,at:scene.diagram.props.at[keys[i]]/source.fps}));
 if(scene.id==='b3-check-feedback'){
  scene.revealDelays.stepAts[0]=cue('Pollination has happened','revealDelays.stepAts.0');
 }
 if(revision2&&scene.calculationPresentation){
  const exact=scene.id==='b3-worked'?[
   ['stages.1.lineAts.0','Fusion occurs, so that event is sexual'],
   ['stages.2.lineAts.0','Fusion makes this event sexual too.'],
  ]:[
   ['stages.0.lineAts.0','Pollination has happened'],
   ['stages.0.lineAts.1','pollen reached the stigma.'],
   ['stages.1.lineAts.0','But the tubes stop'],
   ['stages.1.lineAts.1','before delivering sperm'],
   ['stages.2.lineAts.0','Without that delivery'],
   ['stages.2.lineAts.1','No zygote forms'],
   ['stages.3.lineAts.0','The model also gives no basis'],
  ];
  for(const [field,phrase]of exact){const frame=cue(phrase,`calculationPresentation.${field}`);const parts=field.split('.');let target=scene.calculationPresentation;for(const part of parts.slice(0,-1))target=target[part];target[parts.at(-1)]=frame;}
 }
 const latest=Math.max(0,...record.cues.filter(c=>c.sceneId===scene.id).map(c=>c.localFrame));
 scene.durationInFrames=Math.max(scene.voiceover.endFrame+84,latest+84);
 if(scene.id==='b3-check-prompt'){
  const speechFrames=assembly.provenance.durationFrames, holdFrames=360;
  const pcm=Buffer.concat([assembly.wav.subarray(44),Buffer.alloc(holdFrames*1600*2)]);
  const wav=pcmWav(pcm),signature=sha256(canonical({originalSignature:assembly.provenance.signature,responseHoldFrames:holdFrames,wavSha256:sha256(wav)}));
  const audioFile=`public/audio/assembled/${scene.id}.${signature.slice(0,20)}.${sha256(scene.voiceover.text).slice(0,12)}.wav`;
  assembly.audioFile=audioFile;assembly.wav=wav;
  assembly.provenance={...assembly.provenance,signature,audioSha256:sha256(wav),items:[...assembly.provenance.items,{kind:'silence',startFrame:speechFrames,endFrame:speechFrames+holdFrames}],durationFrames:speechFrames+holdFrames,responseAssembly:'Append silence to separate prompt; feedback is the next scene, outside the transition-protected interval.'};
  scene.voiceover.audioFile=audioFile;scene.voiceover.endFrame=speechFrames+holdFrames;
  scene.responseHold={startFrame:speechFrames,endFrame:speechFrames+holdFrames};
  scene.revealDelays.responseHoldStart=speechFrames;
  scene.durationInFrames=speechFrames+holdFrames+24;
  if(scene.captions.some(c=>c.startMs<scene.responseHold.endFrame/30*1000&&c.endMs>speechFrames/30*1000))throw Error('Caption enters response hold');
  if(pcm.subarray(speechFrames*1600*2).some(b=>b!==0))throw Error('Nonzero response PCM');
  record.responseHolds.push({sceneId:scene.id,feedbackSceneId:'b3-check-feedback',...scene.responseHold,zeroSamples:holdFrames*1600,captionsAbsent:true});
 }
}
const lesson=structuredClone(source);
lesson.scenes=source.scenes.map(s=>result.lesson.scenes.find(v=>v.id===s.id)??structuredClone(s));
const timeline=lessonTimeline(lesson),prompt=timeline.scenes.find(s=>s.scene.id==='b3-check-prompt'),feedback=timeline.scenes.find(s=>s.scene.id==='b3-check-feedback');
if(feedback.startFrame!==prompt.startFrame+prompt.scene.responseHold.endFrame)throw Error('Feedback transition enters protected hold');
const summary=lesson.scenes.find(s=>s.id==='b3-summary'),notes=lesson.scenes.find(s=>s.id==='key-notes');
if(summary.durationInFrames-24-summary.voiceover.endFrame<60||notes.durationInFrames!==450)throw Error('Notes speech clearance');
if(source.scenes.some((s,i)=>s.voiceover?.text!==lesson.scenes[i].voiceover?.text))throw Error('Spoken words changed');
const captions=lessonCaptionCues(lesson);if(captions.warnings.length)throw Error(captions.warnings.join(';'));
record.durationInFrames=timeline.durationInFrames;record.durationSeconds=timeline.durationInFrames/30;
record.notesClearanceFrames=summary.durationInFrames-24-summary.voiceover.endFrame;
record.scenes=result.scenes.map(s=>({sceneId:s.sceneId,audioFile:s.audioFile,provenance:s.provenance}));
const bytes=JSON.stringify(lesson,null,2)+'\n';
const brief=structuredClone(parentBrief);
brief.source={lessonPath:`${dir}/${measuredName}/lesson.json`,lessonSha256:sha256(bytes)};
brief.scriptReview={status:'pending',reviewer:'',evidence:null};
brief.voicedPreview={status:'pending',reviewer:'',mode:'',inputSnapshotPath:'',evidence:null,humanListening:{status:'pending',reviewer:'',mode:'human-listening',evidence:null}};
brief.teaching.notesTiming=`Measured current summary audio end ${summary.voiceover.endFrame}, incoming notes at summary-local ${summary.durationInFrames-24}. ${record.notesClearanceFrames} frames clear of new spoken reasoning. Notes450 frames; stable copying shorter due to entrance. Optional pause supported.`;
brief.teaching.understandingCheck=`Complete unchanged prompt followed by a sample-exact12-second silent interval, frames${prompt.scene.responseHold.startFrame}..${prompt.scene.responseHold.endFrame}. Separate feedback mounts at the hold end under actual24-frame transition; captions absent in hold. Measured/source invariants only; actual playback and listening pending.`;
brief.teaching.conversationalApproach+=' Current assembly preserves every spoken word. Model phases, reasoning lines and recap rows now use selected take alignment; it supplies no listening approval.';
for(const row of brief.scenes){
 const cues=record.cues.filter(c=>c.sceneId===row.sceneId);
 if(cues.length)row.narrationCue=JSON.stringify(cues)+' Selected take measured character alignment, ceil seconds*fps.';
 row.motionPurpose=row.motionPurpose.replaceAll('All cue times are planning estimates until fresh alignment.','Current semantic cues measured from selected speech; native and continuous voiced review pending.');
 if(row.sceneId==='b3-check-prompt')row.holdPurpose=brief.teaching.understandingCheck;
 if(row.sceneId==='key-notes')row.holdPurpose=brief.teaching.notesTiming;
}
brief.limitation='Fresh measured plant candidate. Existing words, library models and notes unchanged. Exact measured source review, actual voiced preview, human listening, export and public release remain pending.';
if(revision2)record.correction='Resolve inherited feedback stage-line alias and align all remaining worked/feedback lineAts to existing spoken semantic cues. Words, media, captions, holds and model phase cues unchanged. Initial measured candidate preserved.';
const out=`${dir}/${measuredName}`;if(fs.existsSync(out))throw Error('Preserve existing measured package');
if(!process.argv.includes('--dry-run')){
 writePlayback(result);fs.mkdirSync(out,{recursive:true});
 const save=(name,value)=>fs.writeFileSync(`${out}/${name}`,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
 fs.writeFileSync(`${out}/lesson.json`,bytes,{flag:'wx'});save('remotion-props.json',{lesson});save('production-brief.json',brief);save('measured-report.json',record);
 fs.writeFileSync(`${out}/captions.srt`,toSrt(captions.cues),{flag:'wx'});fs.writeFileSync(`${out}/captions.vtt`,toVtt(captions.cues),{flag:'wx'});
}
console.log(JSON.stringify({mode:process.argv.includes('--dry-run')?'dry-run':'measured',durationSeconds:record.durationSeconds,cues:record.cues.length,responseHolds:record.responseHolds,notesClearanceFrames:record.notesClearanceFrames,sourceSha256:sha256(bytes)}));
