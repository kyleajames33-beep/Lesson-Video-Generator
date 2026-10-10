import fs from 'node:fs';
import {sha256, canonical, resolvePlayback, writePlayback} from './lib/playback-assembly.mjs';
import {alignmentPathFor, alignmentToCaptions, lessonCaptionCues, groupCaptionCues, toSrt, toVtt} from './lib/caption-timeline.mjs';
import {answerTiming} from '../src/lesson/answer-timing.mjs';
const directory = 'docs/production/module5-c3-voiced-preparation-2026-10-10';
const read = file => JSON.parse(fs.readFileSync(file,'utf8'));
const hash = file=>sha256(fs.readFileSync(file));
const bind = file=>({path:file,sha256:hash(file)});
const save = (file,value)=>fs.writeFileSync(file,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
const manifest = read(`${directory}/voice-manifest.json`), plan = read(`${directory}/playback-plan.json`);
if(hash(manifest.lessonPath)!==manifest.lessonSha256) throw Error('Selected narration source changed.');
const source = read(manifest.lessonPath);
const raw = manifest.scenes.map(segment=>{
  const generated = read(segment.generationFile);
  if(sha256(canonical(generated.request))!==segment.plannedRequestSha256) throw Error(`Request settings changed: ${segment.id}`);
  return {segmentId:segment.id,words:segment.text.split(/\s+/).length,textSha256:segment.textSha256,files:[segment.audioFile,segment.alignmentFile,segment.generationFile].map(bind)};
});
const voiced = {...source,scenes:source.scenes.filter(scene=>scene.voiceover?.text)};
const result = resolvePlayback({lesson:voiced,manifest,plan});
const lesson = {...source,scenes:source.scenes.map(scene=>result.lesson.scenes.find(item=>item.id===scene.id)??structuredClone(scene))};
const brief = read('docs/production/drafts/module5-chemistry-clear-layout-2026-10-10/production-brief.json');
const record = {schemaVersion:1,status:'measured-candidate-pending-independent-review-and-voiced-playback',source:bind(manifest.lessonPath),manifest:bind(`${directory}/voice-manifest.json`),rounding:'ceil aligned start seconds * fps, no reveal before the recorded phrase',scenes:[]};
for(const scene of lesson.scenes){
  if(!scene.voiceover) continue;
  const assembly = result.scenes.find(item=>item.sceneId===scene.id);
  const alignment = assembly.alignment, text = alignment.characters.join('');
  if(text!==scene.voiceover.text) throw Error(`Alignment text differs: ${scene.id}`);
  const entry = {sceneId:scene.id,audioFile:scene.voiceover.audioFile,audioSha256:assembly.provenance.audioSha256,alignmentPath:alignmentPathFor(scene.voiceover.audioFile),alignmentSha256:assembly.provenance.alignmentSha256,cues:[]};
  const cue = (phrase,purpose,extra={})=>{
    const index=text.indexOf(phrase);
    if(index<0 || text.indexOf(phrase,index+1)>=0) throw Error(`Missing or ambiguous phrase ${scene.id}: ${phrase}`);
    const alignedSeconds=alignment.character_start_times_seconds[index];
    const frame=Math.ceil(alignedSeconds*lesson.fps-1e-8);
    entry.cues.push({phrase,purpose,alignedSeconds,frame,...extra}); return frame;
  };
  const row=brief.scenes.find(item=>item.sceneId===scene.id);
  const descriptors=JSON.parse(row.narrationCue.match(/^(\[[\s\S]*\])(?: Estimated| Word)/)[1]);
  const rd=scene.revealDelays??={};
  for(const descriptor of descriptors){
    if(descriptor.key){
      const frame=cue(descriptor.phrase,'Measured model phase',{key:descriptor.key,mode:descriptor.mode});
      scene.diagram.props.at[descriptor.key]=frame;
      continue;
    }
    const frames=(descriptor.phrases??[descriptor.phrase]).map(phrase=>cue(phrase,descriptor.field));
    const parts=descriptor.field.replace(/\[(\d+)\]/g,'.$1').split('.');
    let target=scene;
    for(const part of parts.slice(0,-1)) target=target[part];
    target[parts.at(-1)]=descriptor.phrases?frames:descriptor.unit==='seconds'?frames[0]/lesson.fps:frames[0];
  }
  if(scene.id==='c3-hook') rd.callout=scene.diagram.props.at.response;
  const gap=assembly.provenance.items.find(item=>item.kind==='silence');
  if(gap){
    if(gap.endFrame-gap.startFrame!==360) throw Error('Response hold changed.');
    rd.responseHoldStart=gap.startFrame;
    rd.pausePrompt=cue('Pause here','Pause invitation before the protected interval');
    rd.stepAts=scene.calculationPresentation.stages.map(stage=>stage.lineAts[0]);
    rd.answerVisibleStart=rd.stepAts[0];
    if(rd.answerVisibleStart<gap.endFrame) throw Error('Answer enters response gap.');
    answerTiming(rd,scene.responseHold);
    if(groupCaptionCues(scene.captions).some(c=>c.endMs>gap.startFrame/lesson.fps*1000+1e-6 && c.startMs<gap.endFrame/lesson.fps*1000-1e-6)) throw Error('Caption enters response gap.');
    entry.responseHold={...scene.responseHold,silenceFrames:360,firstFeedbackFrame:rd.answerVisibleStart,captionsAbsent:true};
  }
  if(scene.id==='c3-summary') rd.finalPrompt=cue('Next, we will change the volume','C4 progression handoff');
  const at=scene.diagram?.props?.at;
  const mode=scene.diagram?.props?.mode;
  const settleFrame=at?.response!==undefined ? at.response+8*lesson.fps : mode==='associationHeat'?at.cooling+2*lesson.fps : 0;
  scene.durationInFrames=Math.max(assembly.provenance.durationFrames,settleFrame)+45+24;
  entry.mediaFrames=assembly.provenance.durationFrames;
  entry.settleFrame=settleFrame;
  entry.durationInFrames=scene.durationInFrames;
  entry.tailAndTransitionFrames=69;
  entry.diagramProps=scene.diagram?.props??null;
  entry.revealDelays=rd;
  entry.bulletCuesSeconds=scene.bullets?.map(b=>b.at)??[];
  entry.stageLines=scene.calculationPresentation?.stages.map(stage=>stage.lineAts)??[];
  record.scenes.push(entry);
}
const captions=lessonCaptionCues(lesson);
if(captions.warnings.length) throw Error(captions.warnings.join('; '));
record.durationInFrames=captions.timeline.durationInFrames;
record.durationSeconds=record.durationInFrames/lesson.fps;
record.scope='Measured speech alignment, lossless PCM assembly and response silence. No listening or continuous playback approval.';
const outputs=[`${directory}/lesson.json`,`${directory}/remotion-props.json`,`${directory}/measured-cue-report.json`,`${directory}/assembly-record.json`,`${directory}/generation-record.json`,`${directory}/captions.srt`,`${directory}/captions.vtt`];
if(outputs.some(file=>fs.existsSync(file))) throw Error('Preserve existing voiced candidates.');
writePlayback(result);
save(outputs[0],lesson); save(outputs[1],{lesson});
record.source=bind(manifest.lessonPath);
record.outputs=[bind(outputs[0]),bind(outputs[1])];
save(outputs[2],record);
save(outputs[3],{schemaVersion:1,source:bind(manifest.lessonPath),manifest:bind(`${directory}/voice-manifest.json`),scenes:result.scenes.map(({sceneId,audioFile,provenance})=>({sceneId,audioFile,provenance})),silentTitlePreserved:source.scenes.filter(scene=>!scene.voiceover)});
save(outputs[4],{schemaVersion:1,manifest:bind(`${directory}/voice-manifest.json`),segments:raw,scope:'Fresh Simon v4 audio, request provenance and provider timestamps. Take quality requires actual listening.'});
fs.writeFileSync(outputs[5],toSrt(captions.cues),{flag:'wx'});
fs.writeFileSync(outputs[6],toVtt(captions.cues),{flag:'wx'});
console.log(`Assembled ${result.scenes.length} scenes, ${record.durationSeconds.toFixed(2)} seconds, ${record.scenes.reduce((n,s)=>n+s.cues.length,0)} measured cues. Original words, source and raw recordings preserved.`);
