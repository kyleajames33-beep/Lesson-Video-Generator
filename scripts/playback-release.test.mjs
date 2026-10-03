import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {resolvePlayback, writePlayback, sha256, publicPath} from './lib/playback-assembly.mjs';
import {captureRelease, verifyRelease} from './lib/release-snapshot.mjs';
import {verifyAssembly} from './lib/verify-assembly.mjs';
import {decodePcm, pcmWav, mediaTool} from './lib/media-tools.mjs';
import {lessonCaptionCues, toSrt, toVtt} from './lib/caption-timeline.mjs';
import {lessonTimeline} from '../src/lesson/timeline.mjs';
import {answerTiming} from '../src/lesson/answer-timing.mjs';
import {recordReview, verifyReview} from './lib/release-review.mjs';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
function fixture(fps = 30) {
  const root = mkdtempSync(path.join(os.tmpdir(), 'lesson-playback-'));
  const put = (name, data) => {const file = path.join(root, name); mkdirSync(path.dirname(file), {recursive: true}); writeFileSync(file, data);};
  const texts = ['Try Cl₂.', 'The answer is 1.00 mol.'];
  const scenes = texts.map((text, i) => {
    const hash = sha256(text).slice(0, 12), id = i ? 'answer' : 'prompt';
    const audioFile = `public/audio/${id}.${hash}.wav`;
    const pcm = Buffer.alloc(96000); for (let s = 0; s < 48000; s++) pcm.writeInt16LE(Math.round(6000 * Math.sin(s * Math.PI * 2 * 440 / 48000)), s * 2);
    put(audioFile, pcmWav(pcm));
    put(audioFile.replace('.wav', '.alignment.json'), JSON.stringify({characters: [...text], character_start_times_seconds: [...text].map((_, n) => n / [...text].length * 0.8), character_end_times_seconds: [...text].map((_, n) => (n + 1) / [...text].length * 0.8)}));
    put(audioFile.replace('.wav', '.generation.json'), JSON.stringify({modelId: 'fixture', voiceId: 'fixture', request: {text, settings: {stability: 0.5}}}));
    return {id, text, hash, audioFile, parentSceneId: 'quiz'};
  });
  const lesson = {title: 'Fixture', subject: 'Chemistry', yearLevel: 'Year 11', module: 'Module 2', lesson: 'Lesson 2', fps,
    width: 1920, height: 1080, scenes: [{id: 'quiz', type: 'quickCheck', question: 'Find the amount.', answerSteps: ['1.00 mol'], caption: 'Check the formula.', durationInFrames: 300,
      voiceover: {text: texts.join(' ')}}]};
  const manifest = {fps, scenes};
  const plan = {playback: [{sceneId: 'quiz', items: [{kind: 'audio', segmentId: 'prompt', audioFile: scenes[0].audioFile},
    {kind: 'silence', frames: fps * 5, seconds: 5}, {kind: 'audio', segmentId: 'answer', audioFile: scenes[1].audioFile}]}]};
  const resolve = () => resolvePlayback({lesson, manifest, plan, root, decode: file => decodePcm(file, repo)});
  return {root, put, lesson, manifest, plan, resolve};
}

test('decoded playback has exactly five seconds of PCM silence, matching captions and answer boundary', () => {
  const f = fixture(), result = f.resolve(), scene = result.lesson.scenes[0];
  writePlayback(result, f.root);
  const pcm = decodePcm(publicPath(f.root, scene.voiceover.audioFile), repo);
  assert.equal(pcm.length, 7 * 96000);
  assert.ok(pcm.subarray(96000, 6 * 96000).every(b => b === 0));
  assert.ok(pcm.subarray(0, 96000).some(b => b !== 0));
  assert.ok(pcm.subarray(6 * 96000).some(b => b !== 0));
  assert.deepEqual(scene.responseHold, {startFrame: 30, endFrame: 180});
  assert.equal(answerTiming(scene.revealDelays).fadeStart, 180);
  assert.equal(scene.captions.map(c => c.text).join(''), scene.voiceover.text);
  assert.deepEqual(verifyAssembly(scene, 30, f.root), []);
  const {cues, timeline} = lessonCaptionCues(result.lesson, {}, f.root);
  assert.equal(timeline.scenes[0].startFrame, 270);
  assert.equal(cues.at(-1).startMs >= 15000, true);
  assert.ok(toSrt(cues).includes('Cl₂.'));
  assert.ok(toVtt(cues).includes('00:00:15,') === false);
  assert.equal(f.lesson.scenes[0].voiceover.audioFile, undefined);
  assert.equal(f.lesson.scenes[0].captions, undefined);
});

test('frame padding uses decoded duration, not the last spoken alignment timestamp', () => {
  const f = fixture(60);
  const result = resolvePlayback({...f, decode: () => Buffer.alloc(Math.round(1.007 * 48000) * 2, 1)});
  const items = result.scenes[0].provenance.items;
  assert.equal(items[0].endFrame, 61);
  assert.equal(items[2].startFrame, 361);
  assert.equal(result.lesson.scenes[0].captions.find(c => c.text.trim() === 'The').startMs, 361 / 60 * 1000);
});

test('stale selected takes, generation settings, captions and early visual cues fail assembly verification', () => {
  const f = fixture(), result = f.resolve(); writePlayback(result, f.root);
  const scene = result.lesson.scenes[0];
  scene.revealDelays.answerVisibleStart--;
  assert.ok(verifyAssembly(scene, 30, f.root).some(e => e.includes('fade')));
  scene.revealDelays.answerVisibleStart++;
  scene.captions[0].text = 'Changed';
  assert.ok(verifyAssembly(scene, 30, f.root).some(e => e.includes('Captions')));
  scene.captions = result.scenes[0].alignment ? JSON.parse(JSON.stringify(f.resolve().lesson.scenes[0].captions)) : [];
  f.put(f.manifest.scenes[0].audioFile.replace('.wav', '.generation.json'), '{"settings":"changed"}');
  assert.ok(verifyAssembly(scene, 30, f.root).some(e => e.includes('settings')));
  f.put(f.manifest.scenes[1].audioFile, 'changed audio');
  assert.ok(verifyAssembly(scene, 30, f.root).some(e => e.includes('recording/alignment')));
});

test('assembly rejects changed text, contradictory gaps, unsupported fps and invalid alignment', () => {
  let f = fixture(); f.manifest.scenes[0].text += ' changed';
  assert.throws(f.resolve, /Changed segment text/);
  f = fixture(); f.plan.playback[0].items[1].seconds = 4;
  assert.throws(f.resolve, /Invalid gap/);
  f = fixture(29.97); assert.throws(f.resolve, /sample-exact/);
  f = fixture(); f.put(f.manifest.scenes[0].audioFile.replace('.wav', '.alignment.json'), '{"characters":[]}');
  assert.throws(f.resolve, /alignment/i);
});

test('worked example solution cues wait for the measured hold, including existing per-step overrides', () => {
  const f = fixture();
  Object.assign(f.lesson.scenes[0], {type: 'workedExample', steps: ['Count atoms.', 'Calculate.'], revealDelays: {stepAts: [0, 30]}});
  const result = f.resolve(), scene = result.lesson.scenes[0]; writePlayback(result, f.root);
  assert.equal(scene.revealDelays.stepsStart, 180);
  assert.equal(scene.revealDelays.coachNote, 180);
  assert.equal(scene.revealDelays.diagram, 180);
  assert.equal(scene.revealDelays.stepAts, undefined);
  assert.deepEqual(verifyAssembly(scene, 30, f.root), []);
});

test('timeline handles overlapping transitions, delayed audio and explicit hook-first opening', () => {
  const lesson = {fps: 60, introDurationInFrames: 0, scenes: [{id: 'a', durationInFrames: 120, voiceover: {startFrame: 30}}, {id: 'b', durationInFrames: 180}]};
  const timeline = lessonTimeline(lesson);
  assert.equal(timeline.scenes[0].audioStartMs, 500);
  assert.equal(timeline.scenes[1].startFrame, 96);
  assert.equal(timeline.durationInFrames, 276);
  assert.equal(timeline.introDurationMs, 0);
  assert.throws(() => lessonTimeline({...lesson, scenes: [lesson.scenes[0], lesson.scenes[0]]}), /duplicate/);
});

function releaseFixture() {
  const f = fixture(), result = f.resolve(); writePlayback(result, f.root);
  f.put('lesson.json', JSON.stringify(result.lesson));
  f.put('src/index.ts', '// render entry'); f.put('src/assets/index.ts', '');
  f.put('package.json', '{}'); f.put('package-lock.json', '{}'); f.put('remotion.config.ts', '// config');
  f.put('public/fonts/example.woff2', 'font');
  f.put('render.json', JSON.stringify({entryPoint: 'src/index.ts', compositionId: 'Fixture', codec: 'h264', scale: 0.5}));
  f.put('video.mp4', 'render fixture');
  const options = {lessonPath: 'lesson.json', renderConfig: 'render.json', artifacts: ['video.mp4'], inputs: []};
  return {...f, options, snapshot: captureRelease(f.root, options)};
}

test('release snapshot invalidates unchanged text when a voice setting, selected take, asset, config or render changes', () => {
  for (const change of ['settings', 'take', 'font', 'config', 'render', 'source-added']) {
    const f = releaseFixture(); assert.equal(verifyRelease(f.root, f.snapshot).valid, true);
    if (change === 'settings') f.put(f.manifest.scenes[0].audioFile.replace('.wav', '.generation.json'), '{"voice":"new"}');
    if (change === 'take') f.put(f.manifest.scenes[0].audioFile, 'new take');
    if (change === 'font') f.put('public/fonts/example.woff2', 'new font');
    if (change === 'config') f.put('render.json', JSON.stringify({entryPoint: 'src/index.ts', compositionId: 'Fixture', codec: 'h264', scale: 1}));
    if (change === 'render') f.put('video.mp4', 'new render');
    if (change === 'source-added') f.put('src/new.ts', '// new source');
    assert.equal(verifyRelease(f.root, f.snapshot).valid, false, change);
  }
});

test('release snapshot detects tampering and missing required media without treating a snapshot as approval', () => {
  const f = releaseFixture();
  assert.equal(f.snapshot.status, 'dependency-snapshot-unreviewed');
  f.snapshot.files[0].sha256 = 'changed';
  assert.equal(verifyRelease(f.root, f.snapshot).changes[0].code, 'SNAPSHOT_INVALID');
  const missing = captureRelease(f.root, {...f.options, artifacts: ['missing.mp4']});
  assert.deepEqual(missing.missingRequired, ['missing.mp4']);
  assert.equal(verifyRelease(f.root, missing).valid, false);
});

test('transcript CLI uses render offsets and aligned captions, preserving the documented lesson-first form', () => {
  const f = fixture(), result = f.resolve(); writePlayback(result, f.root);
  f.put('lesson.json', JSON.stringify(result.lesson));
  const run = spawnSync(process.execPath, [path.join(repo, 'scripts/export-transcript.mjs'), 'lesson.json'], {cwd: f.root, encoding: 'utf8'});
  assert.equal(run.status, 0, run.stderr);
  const transcript = JSON.parse(readFileSync(path.join(f.root, 'out/transcripts/Chemistry-Y11-M2-L2.json'), 'utf8'));
  assert.equal(transcript.cues[0].startFrame, 270);
  assert.equal(transcript.speechCues.at(-1).startMs >= 15000, true);
});

test('review evidence is tied to the exact release and becomes invalid after export or evidence changes', () => {
  const f = releaseFixture();
  f.put('snapshot.json', JSON.stringify(f.snapshot));
  f.put('review.md', 'Fixture boundary inspection: response gap preserved.');
  const record = recordReview(f.root, {snapshotPath: 'snapshot.json', evidence: 'review.md', reviewer: 'Test reviewer', scope: 'motion', outcome: 'pass'});
  assert.equal(verifyReview(f.root, record).valid, true);
  f.put('review.md', 'Changed evidence');
  assert.equal(verifyReview(f.root, record).valid, false);
  f.put('review.md', 'Fixture boundary inspection: response gap preserved.');
  f.put('video.mp4', 'Changed export');
  assert.equal(verifyReview(f.root, record).valid, false);
  assert.throws(() => recordReview(f.root, {snapshotPath: 'snapshot.json', evidence: 'review.md', reviewer: 'Test reviewer', scope: 'motion', outcome: 'pass'}), /stale/);
});

test('assembly CLI preserves source and refuses an existing output; assembled WAV passes physical preflight', () => {
  const f = fixture();
  f.put('lesson.json', JSON.stringify(f.lesson));
  f.manifest.lessonPath = f.plan.lessonPath = 'lesson.json';
  f.put('manifest.json', JSON.stringify(f.manifest)); f.put('plan.json', JSON.stringify(f.plan));
  f.put('src/assets/index.ts', '');
  const sourceHash = sha256(readFileSync(path.join(f.root, 'lesson.json')));
  const assembly = path.join(repo, 'scripts/assemble-lesson-playback.mjs');
  // Explicit local ffmpeg binary is passed because the fixture has no node_modules.
  const env = {...process.env, FFMPEG_PATH: mediaTool('ffmpeg', repo)};
  const run = spawnSync(process.execPath, [assembly, 'manifest.json', 'plan.json', '--output=assembled.json', '--hook-first'], {cwd: f.root, encoding: 'utf8', env});
  assert.equal(run.status, 0, run.stderr);
  assert.equal(sourceHash, sha256(readFileSync(path.join(f.root, 'lesson.json'))));
  const assembled = JSON.parse(readFileSync(path.join(f.root, 'assembled.json'), 'utf8'));
  assert.equal(assembled.introDurationInFrames, 0);
  const preflight = spawnSync(process.execPath, [path.join(repo, 'scripts/release-preflight.mjs'), 'assembled.json'], {cwd: f.root, encoding: 'utf8'});
  assert.equal(preflight.status, 0, preflight.stdout + preflight.stderr);
  const repeat = spawnSync(process.execPath, [assembly, 'manifest.json', 'plan.json', '--output=assembled.json'], {cwd: f.root, encoding: 'utf8', env});
  assert.notEqual(repeat.status, 0);
});

test('voice generator refuses changed request settings and prohibited narration before a provider call', () => {
  const f = fixture();
  const segment = {...f.manifest.scenes[0], audioFile: f.manifest.scenes[0].audioFile.replace('.wav', '.mp3')};
  f.put(segment.audioFile, 'existing recording');
  f.put(segment.audioFile.replace('.mp3', '.generation.json'), JSON.stringify({modelId: 'eleven_flash_v2_5', voiceId: 'fixture', request: {text: segment.text, model_id: 'eleven_flash_v2_5', voice_settings: {stability: 0.9}}}));
  f.put('manifest.json', JSON.stringify({compositionId: 'Fixture', scenes: [segment]}));
  const script = path.join(repo, 'scripts/generate-elevenlabs-audio.mjs');
  const env = {...process.env, ELEVENLABS_API_KEY: 'fixture-not-a-key'};
  const run = spawnSync(process.execPath, [script, 'manifest.json', '--voice-id=fixture', '--model=eleven_flash_v2_5'], {cwd: f.root, encoding: 'utf8', env});
  assert.equal(run.status, 1);
  assert.match(run.stderr, /request\/settings/);
  segment.text += String.fromCodePoint(0x2014);
  f.put('manifest.json', JSON.stringify({compositionId: 'Fixture', scenes: [segment]}));
  const copy = spawnSync(process.execPath, [script, 'manifest.json', '--dry-run'], {cwd: f.root, encoding: 'utf8'});
  assert.equal(copy.status, 1);
  assert.match(copy.stderr, /U\+2014/);
});

test('selected voice/model mismatch is rejected while immutable output names vary with settings', () => {
  const f = fixture();
  f.manifest.voiceSelection = {voiceId: 'different', modelId: 'fixture'};
  assert.throws(f.resolve, /voiceId differs/);
  delete f.manifest.voiceSelection;
  const first = f.resolve().scenes[0].audioFile;
  f.put(f.manifest.scenes[0].audioFile.replace('.wav', '.generation.json'), '{"settings":"new"}');
  assert.notEqual(f.resolve().scenes[0].audioFile, first);
});
