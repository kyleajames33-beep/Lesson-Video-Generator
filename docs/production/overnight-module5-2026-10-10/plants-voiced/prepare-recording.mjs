import fs from 'node:fs';
import {sha256, canonical} from '../../../../scripts/lib/playback-assembly.mjs';
import {checkProductionBrief} from '../../../../scripts/lib/production-brief.mjs';
import {buildSpeechRequest} from '../../../../scripts/elevenlabs-request.mjs';

const sourceDir='docs/production/module5-plants-notes-2026-10-10';
const output='docs/production/overnight-module5-2026-10-10/plants-voiced';
const lessonPath=`${sourceDir}/lesson.json`, briefPath=`${sourceDir}/production-brief.json`;
const bytes=fs.readFileSync(lessonPath), lesson=JSON.parse(bytes);
if(sha256(bytes)!=='4ee66f2e08c917f5ced248f3cf45902ec12071e28ab88a4c726533f33c2067fd')throw Error('Selected source drift');
if(JSON.stringify(lesson).includes(String.fromCodePoint(0x2014)))throw Error('Prohibited punctuation');
const preflight=checkProductionBrief(process.cwd(),briefPath,{stage:'recording'});
if(!preflight.ready)throw Error(JSON.stringify(preflight.blockers));
const compositionId='Biology-Y12-M5-plants-2026-10-10-take01';
const voiceSelection={voiceName:'Simon - Australian male',voiceId:'cOEV2DrZBBGNLpE74kQu',modelId:'eleven_v4',requiredAccent:'Australian',selectionBasis:'Established accepted narrator/settings. Fresh take delivery and pronunciation require human listening.'};
const requestOptions={stability:0.35,similarity:0.75};
const scenes=lesson.scenes.filter(s=>s.voiceover?.text?.trim()).map(scene=>{
 const text=scene.voiceover.text, textSha256=sha256(text),hash=textSha256.slice(0,12);
 const audioFile=`public/audio/${compositionId}/${scene.id}.${hash}.mp3`;
 return {id:scene.id,parentSceneId:scene.id,role:scene.id==='b3-check-prompt'?'prompt':scene.id==='b3-check-feedback'?'feedback':'narration',text,textSha256,hash,characterCount:text.length,audioFile,alignmentFile:audioFile.replace('.mp3','.alignment.json'),generationFile:audioFile.replace('.mp3','.generation.json'),plannedRequestSha256:sha256(canonical(buildSpeechRequest({text,voiceId:voiceSelection.voiceId,modelId:voiceSelection.modelId,requestOptions}).body))};
});
const bind=path=>({path,sha256:sha256(fs.readFileSync(path))});
const outputs={
 'voice-manifest.json':{schemaVersion:1,compositionId,lessonPath,lessonSha256:sha256(bytes),fps:lesson.fps,voiceSelection,requestOptions,recordingBrief:bind(briefPath),scenes},
 'request-options.json':requestOptions,
 'recording-preflight.json':{...preflight,brief:bind(briefPath),scope:'Current independently reviewed source ready for fresh speech. No playback/listening pass.'},
 'playback-plan.json':{schemaVersion:1,lessonPath,lessonSha256:sha256(bytes),playback:scenes.map(s=>({sceneId:s.id,items:[{kind:'audio',segmentId:s.id,audioFile:s.audioFile}]})),responsePlan:{sceneId:'b3-check-prompt',feedbackSceneId:'b3-check-feedback',frames:360,seconds:12,method:'Append sample-exact silence after the whole prompt take, then a separate24-frame transition tail. Feedback mounts at the hold end. Preserve separate prompt and feedback scenes.'},notesPlan:{sceneId:'key-notes',minimumSpeechClearanceFrames:60,readingFrames:450}},
};
for(const file of Object.keys(outputs))if(fs.existsSync(`${output}/${file}`))throw Error('Preserve existing recording preparation');
fs.mkdirSync(output,{recursive:true});
for(const [file,value]of Object.entries(outputs))fs.writeFileSync(`${output}/${file}`,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({segments:scenes.length,characters:scenes.reduce((n,s)=>n+s.characterCount,0),recordingReady:preflight.ready,paidGeneration:false}));
