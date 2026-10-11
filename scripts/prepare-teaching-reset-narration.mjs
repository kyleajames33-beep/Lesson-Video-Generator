// Prepare only a source-reviewed selected reset. Never generates speech.
import fs from 'node:fs';
import path from 'node:path';
import {sha256,canonical} from './lib/playback-assembly.mjs';
import {checkProductionBrief} from './lib/production-brief.mjs';
import {buildSpeechRequest} from './elevenlabs-request.mjs';
const [source,briefPath,identity]=process.argv.slice(2);
if(!source||!briefPath||!/^[-A-Za-z0-9]+$/.test(identity??''))throw Error('Usage: node scripts/prepare-teaching-reset-narration.mjs lesson.json brief.json unique-take-id');
const report=checkProductionBrief(process.cwd(),briefPath,{stage:'recording',expectedLessonPath:source});
if(!report.ready)throw Error('Recording brief blocked: '+JSON.stringify(report.blockers));
const lesson=JSON.parse(fs.readFileSync(source,'utf8'));
for(const scene of lesson.scenes){
 const text=scene.voiceover?.text??'';
 const phrases=[...(scene.spokenCues??[]).map(item=>item.phrase),...(scene.teachingReset?.previewBeats??[]).filter(item=>item.spokenCue).map(item=>item.spokenCue)];
 for(const phrase of phrases){const at=text.indexOf(phrase);if(!phrase||at<0||text.indexOf(phrase,at+1)>=0)throw Error('Missing/nonunique spoken anchor before recording: '+scene.id+' / '+phrase);}
}
const parent=JSON.parse(fs.readFileSync('docs/production/module5-starters-2026-10-10/chemistry/voice-manifest.json','utf8'));
const voiceSelection=parent.voiceSelection,requestOptions=parent.requestOptions;
const manifest={schemaVersion:1,compositionId:identity,lessonPath:source,lessonSha256:sha256(fs.readFileSync(source)),fps:lesson.fps,voiceSelection,requestOptions,
 recordingBrief:{path:briefPath,sha256:sha256(fs.readFileSync(briefPath))},scenes:lesson.scenes.filter(scene=>scene.voiceover?.text?.trim()).map(scene=>{
 const text=scene.voiceover.text,hash=sha256(text).slice(0,12),audioFile=`public/audio/${identity}/${scene.id}.${hash}.mp3`;
 return {id:scene.id,parentSceneId:scene.id,text,hash,textSha256:sha256(text),audioFile,alignmentFile:audioFile.replace('.mp3','.alignment.json'),generationFile:audioFile.replace('.mp3','.generation.json'),plannedRequestSha256:sha256(canonical(buildSpeechRequest({text,voiceId:voiceSelection.voiceId,modelId:voiceSelection.modelId,requestOptions}).body))};
 })};
const directory=path.dirname(source),target=path.join(directory,'voice-manifest.json');
for(const [file,value] of [[target,manifest],[path.join(directory,'request-options.json'),requestOptions]]){
 if(fs.existsSync(file))throw Error('Preserve earlier preparation: '+file);
 fs.writeFileSync(file,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
}
console.log(JSON.stringify({manifest:target,scenes:manifest.scenes.length,characters:manifest.scenes.reduce((n,s)=>n+s.text.length,0),identity,mode:'prepared only, no paid generation'}));
