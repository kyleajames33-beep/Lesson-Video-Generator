// Measured raw-take assembly. Thinking and copying holds follow speech, before next scene.
import fs from 'node:fs';
import path from 'node:path';
import {sha256,canonical} from './lib/playback-assembly.mjs';
import {decodePcm} from './lib/media-tools.mjs';
import {alignmentToCaptions,lessonCaptionCues,toSrt,toVtt} from './lib/caption-timeline.mjs';
import {buildSpeechRequest} from './elevenlabs-request.mjs';
const [source]=process.argv.slice(2);
if(!source)throw Error('Supply source-reviewed reset lesson.json.');
const directory=path.dirname(source),manifest=JSON.parse(fs.readFileSync(path.join(directory,'voice-manifest.json'),'utf8'));
if(manifest.lessonSha256!==sha256(fs.readFileSync(source)))throw Error('Recording source changed.');
const lesson=JSON.parse(fs.readFileSync(source,'utf8')),fps=lesson.fps;
const output=path.join(directory,'measured');if(fs.existsSync(output))throw Error('Preserve previous measured assembly.');
const report={source,sourceSha256:manifest.lessonSha256,manifestSha256:sha256(fs.readFileSync(path.join(directory,'voice-manifest.json'))),scope:'Measured audio lengths and exact character alignment; not listening approval.',scenes:[]};
for(const scene of lesson.scenes){
 scene.pilotOnly=false;
 if(scene.timingStatus)scene.timingStatus='Measured from this fresh take. Exact playback and human listening pending.';
 if(scene.teachingReset)scene.teachingReset.timingStatus='Measured from this fresh take. Exact playback and human listening pending.';
 const segment=manifest.scenes.find(item=>item.id===scene.id);
 if(!segment){if(scene.voiceover?.text?.trim())throw Error('Missing narration '+scene.id);continue;}
 const generation=JSON.parse(fs.readFileSync(segment.generationFile,'utf8'));
 const expected=buildSpeechRequest({text:segment.text,voiceId:manifest.voiceSelection.voiceId,modelId:manifest.voiceSelection.modelId,requestOptions:manifest.requestOptions}).body;
 if(canonical(generation.request)!==canonical(expected)||generation.voiceId!==manifest.voiceSelection.voiceId||generation.modelId!==manifest.voiceSelection.modelId)throw Error('Generation provenance mismatch '+scene.id);
 let alignment=JSON.parse(fs.readFileSync(segment.alignmentFile,'utf8'));
 if(alignment.characters.join('').replace(/\s+/g,' ').trim()!==segment.text.replace(/\s+/g,' ').trim())throw Error('Alignment/script mismatch '+scene.id);
 const seconds=decodePcm(segment.audioFile).length/96000,frames=Math.ceil(seconds*fps);
 const last=alignment.character_end_times_seconds.at(-1);
 let terminalPunctuationBounded;
 if(last>seconds){const first=alignment.character_end_times_seconds.findIndex(time=>time>seconds);if(last-seconds>.1||alignment.characters.slice(first).some(char=>!/[.!?,;:\s]/.test(char)))throw Error('Alignment exceeds media '+scene.id);terminalPunctuationBounded=last-seconds;alignment={...alignment,character_start_times_seconds:alignment.character_start_times_seconds.map(t=>Math.min(t,seconds)),character_end_times_seconds:alignment.character_end_times_seconds.map(t=>Math.min(t,seconds))};}
 scene.voiceover={...scene.voiceover,audioFile:segment.audioFile,startFrame:0,endFrame:frames};scene.captions=alignmentToCaptions(alignment);
 const cues=[];const cue=(phrase,key)=>{const text=alignment.characters.join(''),at=text.indexOf(phrase);if(at<0||text.indexOf(phrase,at+1)>=0)throw Error('Missing/nonunique cue '+scene.id+': '+phrase);const frame=Math.ceil(alignment.character_start_times_seconds[at]*fps);cues.push({key,phrase,frame});return frame;};
 if(lesson.teachingRenderer==='c1Bottle'){
  const map={
   'two-directions':{entering:'A molecule from the gas'},
   'name-and-rate':{memory:'Think of two-way traffic'},
   'why-steady':{leaving:'A molecule leaving',entering:'A molecule entering',balanced:'At equilibrium'},
   'static-and-chemical-bridge':{chemicalBridge:'Return to our drink'},
   'boundary':{openCap:'Now open the cap',netLoss:'So the drink loses'},
   'application-attempt':{interval:'In each of several ten-second intervals',departures:'sixty molecules',unchangedAmount:'one hundred and twenty',question:'How many molecules'},
   'application-feedback':{replacement:'So sixty must have entered',balancedExchange:'Both directions are continuing'}
  }[scene.id]??{};
  scene.revealDelays??={};for(const [key,phrase] of Object.entries(map))scene.revealDelays[key]=cue(phrase,key);
 }
 // Source-specific preview cues contain their exact spoken anchors when supplied.
 if(scene.teachingReset?.previewBeats)for(const beat of scene.teachingReset.previewBeats)if(beat.spokenCue)beat.at=cue(beat.spokenCue,beat.view);
 for(const item of scene.spokenCues??[]){
  const route=item.path.split('.');if(route.some(key=>['__proto__','prototype','constructor'].includes(key)))throw Error('Invalid cue path.');
  const at=cue(item.phrase,item.path);
  const offset=item.offsetPath?item.offsetPath.split('.').reduce((value,key)=>value?.[key],scene):0;
  if(!Number.isFinite(offset))throw Error('Invalid cue offset '+item.offsetPath);
  const resolved=Math.max(0,at-offset);
  let target=scene;for(const key of route.slice(0,-1)){if(!target[key]||typeof target[key]!=='object')throw Error('Cue parent missing '+item.path);target=target[key];}
  target[route.at(-1)]=item.unit==='seconds'?resolved/fps:resolved;
 }
 // This selected C2 model needs every causal stage measured, including defaults.
 if(scene.id==='c2-model'&&scene.diagram?.kind==='chem12m5Approach'){
  const offset=scene.diagram.delay??0;
  for(const [key,phrase] of Object.entries({forwardAt:'At the start there is A',runAt:'As soon as B',reverseAt:'As soon as B',limitAt:'the reverse reaction can begin too'}))scene.diagram.props[key]=Math.max(0,cue(phrase,key)-offset);
 }
 const pressureStages={
  'c4a-compress':[['Pushing the piston',285],['The same gas molecules',390]],
  'c4a-fewer':[['At constant temperature',1020],['A net forward reaction',1090],['reduces the total amount of gas',1210]],
  'c4a-response':[['Now hold the piston',1350],['The pressure rose',1380],['As more ammonia forms',1450],['The reaction partly offsets',1510]]
 }[scene.id];
 if(pressureStages&&scene.metadata?.teachingRenderer==='c4Pressure'){
  scene.metadata.visualCuePoints=pressureStages.map(([phrase,pilotFrame])=>({at:cue(phrase,'pressurePilot'+pilotFrame),pilotFrame}));
  scene.metadata.visualCuePoints.push({at:frames+59,pilotFrame:scene.metadata.visualEnd});
 }
 const plannedHold=scene.responseHold?scene.responseHold.endFrame-scene.responseHold.startFrame:0;
 if(plannedHold){
  scene.responseHold={startFrame:frames+12,endFrame:frames+12+plannedHold};scene.durationInFrames=scene.responseHold.endFrame+24;
  scene.revealDelays??={};scene.revealDelays.answerVisibleStart=scene.responseHold.endFrame;scene.revealDelays.responseHoldStart=scene.responseHold.startFrame;scene.revealDelays.pausePrompt=scene.responseHold.startFrame;
  if(scene.calculationPresentation?.responseQuestions)scene.calculationPresentation.responseQuestionsEndAt=scene.durationInFrames;
 }
 else if(scene.id==='key-notes'){const quiet=scene.teachingReset?.quietHoldStartFrame;scene.teachingReset&&(scene.teachingReset.quietHoldStartFrame=frames+12);scene.durationInFrames=frames+Math.max(600,scene.durationInFrames-(quiet??0))+24;}
 else scene.durationInFrames=frames+60;
 report.scenes.push({sceneId:scene.id,seconds,frames,cues,responseHold:scene.responseHold??null,terminalPunctuationBounded:terminalPunctuationBounded??null,files:[segment.audioFile,segment.alignmentFile,segment.generationFile].map(file=>({path:file,sha256:sha256(fs.readFileSync(file))}))});
}
lesson.productionRole='production';lesson.status='fresh-measured-preview-pending-full-review';lesson.timingStatus='Measured decoded speech and exact caption tokens. Named stage cues resolve from selected take; exact playback and listening pending.';
if(lesson.teachingReset){lesson.teachingReset.timingStatus=lesson.timingStatus;lesson.teachingReset.releaseStatus='Fresh measured narration assembled. Exact voiced review and human listening pending. Not released.';}
const captions=lessonCaptionCues(lesson);if(captions.warnings.length)throw Error(captions.warnings.join(';'));
for(const scene of lesson.scenes)if(scene.responseHold&&scene.captions?.some(token=>token.startMs<scene.responseHold.endFrame/fps*1000&&token.endMs>scene.responseHold.startFrame/fps*1000))throw Error('Caption crosses thinking hold '+scene.id);
fs.mkdirSync(output);const write=(file,value)=>fs.writeFileSync(path.join(output,file),JSON.stringify(value,null,2)+'\n',{flag:'wx'});
write('lesson.json',lesson);write('measured-report.json',report);fs.writeFileSync(path.join(output,'captions.srt'),toSrt(captions.cues),{flag:'wx'});fs.writeFileSync(path.join(output,'captions.vtt'),toVtt(captions.cues),{flag:'wx'});
const brief=JSON.parse(fs.readFileSync(manifest.recordingBrief.path,'utf8'));brief.source={lessonPath:path.join(output,'lesson.json').replaceAll('\\','/'),lessonSha256:sha256(fs.readFileSync(path.join(output,'lesson.json')))};brief.voicedPreview.status='pending';brief.voicedPreview.studentLearningReview.status='pending';brief.voicedPreview.humanListening.status='pending';brief.limitation='Same independently reviewed narration, new measured media and cues. Exact voiced source/timing, continuous playback, caption fit and human listening pending.';write('production-brief.json',brief);
console.log(JSON.stringify({measured:output,durationSeconds:captions.timeline.durationMs/1000,captionCues:captions.cues.length,scope:report.scope}));
