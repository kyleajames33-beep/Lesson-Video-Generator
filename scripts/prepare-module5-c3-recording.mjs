import fs from 'node:fs';
import path from 'node:path';
import {sha256, canonical} from './lib/playback-assembly.mjs';
import {checkProductionBrief} from './lib/production-brief.mjs';
import {buildSpeechRequest} from './elevenlabs-request.mjs';

const source = 'docs/production/drafts/module5-chemistry-clear-layout-2026-10-10';
const output = 'docs/production/module5-c3-voiced-preparation-2026-10-10';
const lessonPath = `${source}/lesson.json`;
const lessonBytes = fs.readFileSync(lessonPath);
if(sha256(lessonBytes) !== '1596fa24436833162e4764fbc12e680f936e8269134559bedfd6badff21370ed') throw Error('Selected source changed.');
const lesson = JSON.parse(lessonBytes);
const segments = JSON.parse(fs.readFileSync(`${source}/narration-plan.json`)).segments;
const preflight = checkProductionBrief(process.cwd(), `${source}/production-brief.json`, {stage:'recording'});
if(!preflight.ready) throw Error('Recording brief is not ready.');
if(JSON.stringify(lesson).includes('\u2014')) throw Error('Prohibited punctuation in selected copy.');
const voiceSelection = {voiceName:'Simon - Australian male', voiceId:'cOEV2DrZBBGNLpE74kQu', modelId:'eleven_v4', requiredAccent:'Australian', selectionBasis:'Established narrator and conversational settings. New take pronunciation and delivery require listening.'};
const requestOptions = {stability:0.35,similarity:0.75};
const compositionId = 'Chemistry-Y12-M5-C3-clear-2026-10-10-take01';
const scenes = segments.map(segment => {
  if(sha256(segment.text) !== segment.textSha256) throw Error('Segment text changed.');
  const id = segment.kind === 'narration' ? segment.sceneId : `${segment.sceneId}-${segment.kind}`;
  const hash = sha256(segment.text).slice(0,12);
  const audioFile = `public/audio/${compositionId}/${id}.${hash}.mp3`;
  const request = buildSpeechRequest({text:segment.text,voiceId:voiceSelection.voiceId,modelId:voiceSelection.modelId,requestOptions});
  return {id,parentSceneId:segment.sceneId,role:segment.kind,text:segment.text,textSha256:segment.textSha256,hash,characterCount:segment.text.length,audioFile,alignmentFile:audioFile.replace('.mp3','.alignment.json'),generationFile:audioFile.replace('.mp3','.generation.json'),plannedRequestSha256:sha256(canonical(request.body)),status:'planned-fresh-recording'};
});
const playback = lesson.scenes.filter(s=>s.voiceover?.text).map(scene => {
  const selected = scenes.filter(s=>s.parentSceneId===scene.id);
  if(selected.map(s=>s.text).join(' ') !== scene.voiceover.text) throw Error(`Narration differs: ${scene.id}`);
  const items = selected.flatMap((segment,index)=>[...(index ? [{kind:'silence',seconds:12,frames:360}] : []),{kind:'audio',segmentId:segment.id,audioFile:segment.audioFile}]);
  if(selected.length>1 && (scene.type!=='quickCheck' || selected.map(s=>s.role).join(',')!=='prompt,feedback')) throw Error('Unexpected segment boundary.');
  return {sceneId:scene.id,items};
});
const bind = file=>({path:file,sha256:sha256(fs.readFileSync(file))});
const outputs = {
  [`${output}/request-options.json`]:requestOptions,
  [`${output}/recording-preflight.json`]:{...preflight,brief:bind(`${source}/production-brief.json`),scope:'Recording-stage exact source preflight. Not voiced/export approval.'},
  [`${output}/voice-manifest.json`]:{schemaVersion:1,compositionId,lessonPath,lessonSha256:sha256(lessonBytes),fps:lesson.fps,voiceSelection,sourceSegmentPlan:bind(`${source}/narration-plan.json`),recordingBrief:bind(`${source}/production-brief.json`),requestOptions,scenes},
  [`${output}/playback-plan.json`]:{schemaVersion:1,lessonPath,lessonSha256:sha256(lessonBytes),playback,silentTitles:lesson.scenes.filter(s=>!s.voiceover).map(s=>({id:s.id,durationInFrames:s.durationInFrames})),responseHoldFrames:360},
};
for(const file of Object.keys(outputs)) if(fs.existsSync(file)) throw Error(`Preserve existing preparation: ${file}`);
fs.mkdirSync(output,{recursive:true});
for(const [file,value] of Object.entries(outputs)) fs.writeFileSync(file,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
console.log(`Prepared ${scenes.length} fresh segments; ${scenes.reduce((n,s)=>n+s.characterCount,0)} characters. Recording preflight passed. Two separate12-second response holds.`);
