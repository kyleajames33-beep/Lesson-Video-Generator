import fs from 'node:fs';
import {sha256, canonical} from './lib/playback-assembly.mjs';
import {checkProductionBrief} from './lib/production-brief.mjs';
import {buildSpeechRequest} from './elevenlabs-request.mjs';

const base = 'docs/production/module5-starters-2026-10-10';
const bind = path => ({path, sha256:sha256(fs.readFileSync(path))});
const jobs = [];
for (const subject of ['chemistry', 'biology']) {
  const directory = `${base}/${subject}`;
  const lessonPath = `${directory}/lesson.json`;
  const lesson = JSON.parse(fs.readFileSync(lessonPath));
  const preflight = checkProductionBrief(process.cwd(), `${directory}/production-brief.json`, {stage:'recording'});
  if (!preflight.ready) throw Error(`${subject}: recording brief not ready`);
  if (JSON.stringify(lesson).includes('\u2014')) throw Error('Prohibited punctuation.');
  const plan = JSON.parse(fs.readFileSync(`${directory}/recording-segments.json`));
  const silenceSeconds = plan.responsePlan?.plannedSilentSeconds ?? plan.responseSilenceSeconds;
  if (!Number.isFinite(silenceSeconds) || silenceSeconds <= 0) throw Error('Missing response silence plan.');
  const compositionId = `${subject === 'chemistry' ? 'Chemistry' : 'Biology'}-Y12-M5-starter-2026-10-10-take01`;
  const voiceSelection = {voiceName:'Simon - Australian male', voiceId:'cOEV2DrZBBGNLpE74kQu', modelId:'eleven_v4',
    requiredAccent:'Australian', selectionBasis:'Established project narrator and accepted settings. Fresh take delivery requires human listening.'};
  const requestOptions = {stability:0.35, similarity:0.75};
  const scenes = plan.segments.map(segment => {
    const parentSceneId = segment.parentSceneId ?? segment.sceneId;
    const role = segment.id.endsWith('-prompt') ? 'prompt' : segment.id.endsWith('-feedback') ? 'feedback' : 'narration';
    const textSha256 = sha256(segment.text);
    const audioFile = `public/audio/${compositionId}/${segment.id}.${textSha256.slice(0,12)}.mp3`;
    return {id:segment.id, parentSceneId, role, text:segment.text, textSha256, characterCount:segment.text.length,
      hash:textSha256.slice(0,12), audioFile, alignmentFile:audioFile.replace('.mp3','.alignment.json'),
      generationFile:audioFile.replace('.mp3','.generation.json'),
      plannedRequestSha256:sha256(canonical(buildSpeechRequest({text:segment.text,voiceId:voiceSelection.voiceId,modelId:voiceSelection.modelId,requestOptions}).body))};
  });
  const playback = lesson.scenes.filter(scene=>scene.voiceover?.text).map(scene => {
    const selected = scenes.filter(segment=>segment.parentSceneId === scene.id);
    if (selected.map(segment=>segment.text).join(' ') !== scene.voiceover.text) throw Error(`Speech differs: ${subject}/${scene.id}`);
    if (selected.length > 1 && (scene.type !== 'quickCheck' || selected.map(s=>s.role).join(',') !== 'prompt,feedback')) throw Error('Unexpected split.');
    return {sceneId:scene.id, items:selected.flatMap((segment,index)=>[
      ...(index ? [{kind:'silence',seconds:silenceSeconds,frames:silenceSeconds*lesson.fps}] : []),
      {kind:'audio',segmentId:segment.id,audioFile:segment.audioFile}])};
  });
  const outputs = {
    [`${directory}/voice-manifest.json`]:{schemaVersion:1,compositionId,lessonPath,lessonSha256:bind(lessonPath).sha256,fps:lesson.fps,
      voiceSelection,requestOptions,sourceSegmentPlan:bind(`${directory}/recording-segments.json`),recordingBrief:bind(`${directory}/production-brief.json`),scenes},
    [`${directory}/request-options.json`]:requestOptions,
    [`${directory}/playback-plan.json`]:{schemaVersion:1,lessonPath,lessonSha256:bind(lessonPath).sha256,playback,
      silentScenes:lesson.scenes.filter(s=>!s.voiceover?.text).map(s=>({id:s.id,durationInFrames:s.durationInFrames})),
      responseSilenceSeconds:silenceSeconds,instructions:'Assemble narrated scenes only, restore quiet/title scenes. Measure all cues and preserve the 24-frame transition before notes.'},
    [`${directory}/recording-preflight.json`]:{...preflight,brief:bind(`${directory}/production-brief.json`),status:'ready-for-fresh-recording; no generation performed'}
  };
  jobs.push({subject,outputs,segments:scenes.length,characters:scenes.reduce((n,s)=>n+s.characterCount,0)});
}
// Validate both jobs and preserve prior manifests before writing anything.
for (const job of jobs) for (const file of Object.keys(job.outputs)) if (fs.existsSync(file)) throw Error(`Preserve existing recording preparation: ${file}`);
for (const job of jobs) {
  for (const [file,value] of Object.entries(job.outputs)) fs.writeFileSync(file,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
  console.log(`${job.subject}: ${job.segments} segments, ${job.characters} characters. Fresh recording prepared, no speech generated.`);
}
