// Synthetic tones validate timing only. They are not narrated lesson media.
import {mkdirSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import {resolvePlayback, writePlayback, sha256} from './lib/playback-assembly.mjs';
import {pcmWav, decodePcm} from './lib/media-tools.mjs';
const output = 'out/checks/playback-release-smoke';
if (existsSync(path.join(output, 'lesson.json'))) throw new Error('Smoke fixture already exists; preserve or move it before preparing another.');
mkdirSync(output, {recursive: true});
const voiceRoot = 'public/audio/playback-release-smoke';
mkdirSync(voiceRoot, {recursive: true});
const texts = ['Timing test. Attempt the calculation.', 'The feedback starts after five seconds.'];
const segments = texts.map((text, i) => {
  const id = i ? 'answer' : 'prompt', hash = sha256(text).slice(0, 12), audioFile = `${voiceRoot}/${id}.${hash}.wav`;
  const pcm = Buffer.alloc(96000);
  for (let s = 0; s < 48000; s++) pcm.writeInt16LE(Math.round(5000 * Math.sin(s * 2 * Math.PI * (i ? 660 : 440) / 48000)), s * 2);
  if (!existsSync(audioFile)) writeFileSync(audioFile, pcmWav(pcm), {flag: 'wx'});
  writeFileSync(audioFile.replace('.wav', '.alignment.json'), JSON.stringify({characters: [...text], character_start_times_seconds: [...text].map((_, n) => n / text.length * 0.8), character_end_times_seconds: [...text].map((_, n) => (n + 1) / text.length * 0.8)}));
  writeFileSync(audioFile.replace('.wav', '.generation.json'), JSON.stringify({kind: 'synthetic-tone-fixture', speechGenerated: false, text}));
  return {id, text, hash, audioFile, parentSceneId: 'quiz'};
});
const lesson = {title: 'Playback timing test', subtitle: 'Synthetic tones. No recorded narration.',
  subject: 'Chemistry', yearLevel: 'Year 11', module: 'Module 2', lesson: 'Lesson 2', fps: 30, width: 1920, height: 1080,
  introDurationInFrames: 0, scenes: [{id: 'quiz', type: 'quickCheck', caption: 'Timing fixture only.',
    question: 'TIMING TEST: 2.00 mol of carbon atoms. Find the mass using M = 12.01 g mol⁻¹.',
    pausePrompt: 'Five seconds of actual silence. Audio is test tones, not speech.',
    answerSteps: ['m = n × M', '2.00 × 12.01 = 24.02 g', '24.0 g (3 significant figures)'],
    durationInFrames: 450, voiceover: {text: texts.join(' ')}}]};
const manifest = {fps: 30, scenes: segments};
const plan = {playback: [{sceneId: 'quiz', items: [{kind: 'audio', segmentId: 'prompt', audioFile: segments[0].audioFile},
  {kind: 'silence', frames: 150, seconds: 5}, {kind: 'audio', segmentId: 'answer', audioFile: segments[1].audioFile}]}]};
const result = resolvePlayback({lesson, manifest, plan, decode: file => decodePcm(file)});
writePlayback(result);
writeFileSync(path.join(output, 'lesson.json'), JSON.stringify(result.lesson, null, 2) + '\n', {flag: 'wx'});
writeFileSync(path.join(output, 'render.json'), JSON.stringify({lessonPath: path.posix.join(output, 'lesson.json'), entryPoint: 'src/dev/release-entry.tsx', compositionId: 'Lesson-release', codec: 'h264', scale: 0.5, crf: 23}, null, 2) + '\n');
console.log('Prepared tone-only timing fixture. Response hold: frames 30 to 180; first answer boundary: 180.');
