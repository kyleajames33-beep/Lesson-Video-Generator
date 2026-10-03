import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtempSync, writeFileSync, mkdirSync, readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {assembleSpeech, sha256} from './lib/speech-assembly.mjs';
import {alignmentToCaptions, groupCaptionCues, lessonCaptionCues, toSrt} from './lib/caption-timeline.mjs';
import {answerTiming} from '../src/lesson/answer-timing.mjs';
import {verifyDependencies} from './resolve-pilot-timeline.mjs';
import {decodePcm} from './lib/media-tools.mjs';

function makeSpeech(id, text, count = 53921) {
  const textSha256 = sha256(text), characters = [...text];
  const pcm = Buffer.alloc(count * 2);
  for (let i = 0; i < count; i++) pcm.writeInt16LE(1000, i * 2);
  return {segment: {id, kind: 'speech', text, textSha256}, take: {textSha256, pcm, alignment: {characters, character_start_times_seconds: characters.map((_, i) => i / characters.length * count / 48000), character_end_times_seconds: characters.map((_, i) => (i + 1) / characters.length * count / 48000)}}};
}
function fixture() {
  const p = makeSpeech('prompt', 'Choose and explain'), f = makeSpeech('feedback', 'Divide to count moles.');
  return {segments: [p.segment, {id: 'response-hold', kind: 'silence', durationSeconds: 6, durationFrames: 180}, f.segment], takes: {[p.segment.textSha256]: p.take, [f.segment.textSha256]: f.take}};
}

test('non-frame-aligned prompt preserves six exact seconds of zero audio and delays the answer frame', () => {
  const {segments, takes} = fixture(), a = assembleSpeech(segments, takes);
  const gap = a.timeline[1], feedback = a.timeline[2];
  assert.equal(gap.endSample - gap.startSample, 6 * 48000);
  assert.equal(gap.endFrame - gap.startFrame, 180);
  assert.equal(a.pcm.subarray(gap.startSample * 2, gap.endSample * 2).some(b => b !== 0), false);
  assert.equal(a.pcm.readInt16LE((gap.startSample - 1) * 2), 1000);
  assert.equal(a.pcm.readInt16LE(gap.endSample * 2), 1000);
  assert.ok(a.revealDelays.answerVisibleStart / a.fps * 1000 >= feedback.startMs);
  assert.ok(a.revealDelays.answerVisibleStart / a.fps * 1000 - feedback.startMs < 1000 / a.fps);
  assert.equal(a.wav.readUInt32LE(40), a.pcm.length);
  assert.equal(a.pcm.length / 2 / a.sampleRate, a.durationInFrames / a.fps);
});

test('caption grouping cannot bridge silence even without sentence punctuation', () => {
  const {segments, takes} = fixture(), a = assembleSpeech(segments, takes), gap = a.timeline[1];
  const cues = groupCaptionCues(a.captions, {maxWords: 99});
  assert.equal(cues.length, 2);
  assert.ok(cues[0].endMs <= gap.startMs + 0.000001);
  assert.ok(cues[1].startMs >= gap.endMs);
  const srt = toSrt(cues);
  assert.ok(srt.includes('00:00:07,124')); // ceil(1123.354... + 6000) ms
  assert.equal(alignmentToCaptions(a.alignment).map(c => c.text).join('').trim(), a.text);
});

test('stale takes, wrong transcripts and out-of-bounds alignment fail before assembly', () => {
  const {segments, takes} = fixture();
  const stale = structuredClone(segments); stale[0].text += ' changed';
  assert.throws(() => assembleSpeech(stale, takes), /Stale script/);
  const wrong = fixture(); wrong.takes[wrong.segments[0].textSha256].alignment.characters[0] = 'X';
  assert.throws(() => assembleSpeech(wrong.segments, wrong.takes), /Alignment text differs/);
  const tooLong = fixture();
  const ends = tooLong.takes[tooLong.segments[0].textSha256].alignment.character_end_times_seconds;
  ends[ends.length - 1] = 20;
  assert.throws(() => assembleSpeech(tooLong.segments, tooLong.takes), /exceeds decoded/);
  assert.throws(() => assembleSpeech([{id: 'gap', kind: 'silence', durationSeconds: 6, durationFrames: 179}], {}), /does not match/);
});

test('opt-in answer has no exposure before its boundary while legacy midpoint timing is preserved', () => {
  assert.deepEqual(answerTiming({answerStart: 300}), {fadeStart: 276, fadeEnd: 324, pauseFadeStart: 272, pauseFadeEnd: 308, countdownEnd: 300});
  const t = answerTiming({answerStart: 100, answerVisibleStart: 300});
  const progress = frame => Math.max(0, Math.min(1, (frame - t.fadeStart) / (t.fadeEnd - t.fadeStart)));
  assert.equal(progress(299), 0); assert.equal(progress(300), 0); assert.ok(progress(301) > 0);
  assert.equal(t.pauseFadeStart, 300);
  assert.throws(() => answerTiming({answerVisibleStart: -1}));
  assert.equal(answerTiming({}, {startFrame: 120, endFrame: 300}).fadeStart, 300);
  assert.throws(() => answerTiming({answerVisibleStart: 299}, {startFrame: 120, endFrame: 300}), /during/);
});

test('intro and scene tokens resolve fps, narration delay and transition overlap together', () => {
  const token = text => [{text, startMs: 0, endMs: 500}];
  const lesson = {fps: 60, introVoiceover: {text: 'Welcome'}, introCaptions: token('Welcome'), scenes: [
    {id: 'one', durationInFrames: 600, voiceover: {text: 'First', startFrame: 60}, captions: token('First')},
    {id: 'two', durationInFrames: 300, voiceover: {text: 'Next'}, captions: token('Next')},
  ]};
  const r = lessonCaptionCues(lesson);
  assert.deepEqual(r.cues.map(c => c.startMs), [0, 5500, 14100]);
  assert.equal(r.timeline.durationMs, 19100);
  assert.equal(r.warnings.length, 0);
  const direct = lessonCaptionCues({...lesson, introDurationInFrames: 0});
  assert.deepEqual(direct.cues.map(c => c.startMs), [1000, 9600]);
});

test('Unicode scientific notation survives alignment conversion', () => {
  const {take} = makeSpeech('symbols', 'Cl₂ g mol⁻¹ × 2');
  assert.equal(alignmentToCaptions(take.alignment).map(c => c.text).join('').trim(), 'Cl₂ g mol⁻¹ × 2');
});

test('release dependency verification detects settings changes and missing final media', () => {
  const dir = mkdtempSync(path.join(os.tmpdir(), 'lesson-timeline-'));
  writeFileSync(path.join(dir, 'takes.json'), '{"settings":{"stability":0.5}}');
  const manifest = {files: [{path: 'takes.json', sha256: sha256(readFileSync(path.join(dir, 'takes.json')))}]};
  assert.deepEqual(verifyDependencies(manifest, dir), []);
  writeFileSync(path.join(dir, 'takes.json'), '{"settings":{"stability":0.7}}');
  assert.deepEqual(verifyDependencies(manifest, dir), ['takes.json']);
  assert.deepEqual(verifyDependencies({files: [{path: 'missing.wav', sha256: 'not-present'}]}, dir), ['missing.wav']);
});

test('combined caption export removes later intro cues instead of shifting them into prior content', () => {
  const dir = mkdtempSync(path.join(os.tmpdir(), 'lesson-captions-'));
  const lesson = {subject: 'Chemistry', yearLevel: 'Year 11', module: 'Module 2', lesson: 'Lesson 1', fps: 30, introVoiceover: {text: 'Intro'}, introCaptions: [{text: 'Intro', startMs: 0, endMs: 500}], scenes: [{id: 'scene', durationInFrames: 90, voiceover: {text: 'Content'}, captions: [{text: 'Content', startMs: 0, endMs: 500}]}]};
  writeFileSync(path.join(dir, 'a.json'), JSON.stringify(lesson));
  writeFileSync(path.join(dir, 'b.json'), JSON.stringify({...lesson, lesson: 'Lesson 2'}));
  const script = new URL('./export-captions-srt.mjs', import.meta.url);
  const run = spawnSync(process.execPath, [fileURLToPath(script), 'a.json', 'b.json'], {cwd: dir, encoding: 'utf8', windowsHide: true});
  assert.equal(run.status, 0, run.stderr);
  const srt = readFileSync(path.join(dir, 'out/captions/Chemistry-Y11-M2-L1-combined.srt'), 'utf8');
  assert.equal(srt.match(/Intro/g).length, 1);
  assert.ok(srt.includes('00:00:12,000 --> 00:00:12,500'));
});

test('WAV assembly sidecars support caption building, intro coverage and physical preflight', () => {
  const dir = mkdtempSync(path.join(os.tmpdir(), 'lesson-wav-preflight-'));
  mkdirSync(path.join(dir, 'public/audio'), {recursive: true});
  mkdirSync(path.join(dir, 'src/assets'), {recursive: true});
  writeFileSync(path.join(dir, 'src/assets/index.ts'), 'export const ASSETS = {};');
  const {segments, takes} = fixture(), a = assembleSpeech(segments, takes);
  const audioFile = `public/audio/example.${sha256(a.text).slice(0, 12)}.wav`;
  writeFileSync(path.join(dir, audioFile), a.wav);
  writeFileSync(path.join(dir, audioFile.replace('.wav', '.alignment.json')), JSON.stringify(a.alignment));
  const intro = makeSpeech('intro', 'Welcome to the timing fixture.');
  writeFileSync(path.join(dir, 'public/audio/intro.alignment.json'), JSON.stringify(intro.take.alignment));
  const lesson = {subject: 'Chemistry', yearLevel: 'Year 11', module: 'Module 2', lesson: 'Lesson 1', fps: 30, introVoiceover: {text: intro.segment.text}, scenes: [{id: 'test', type: 'quickCheck', durationInFrames: a.durationInFrames, voiceover: {text: a.text, audioFile}}]};
  // Exporter fallback reads actual intro alignment without modifying source.
  lesson.introVoiceover.audioFile = 'public/audio/intro.wav';
  const fallback = lessonCaptionCues({...lesson, scenes: [{id: 'silent', durationInFrames: 60}]}, {}, dir);
  assert.equal(fallback.cues[0].segment, 'intro');
  writeFileSync(path.join(dir, 'lesson.json'), JSON.stringify(lesson));
  const runScript = name => spawnSync(process.execPath, [fileURLToPath(new URL('./' + name, import.meta.url)), 'lesson.json'], {cwd: dir, encoding: 'utf8', windowsHide: true});
  const builder = runScript('build-captions.mjs');
  assert.equal(builder.status, 0, builder.stderr);
  const built = JSON.parse(readFileSync(path.join(dir, 'lesson.json'), 'utf8'));
  assert.equal(built.introCaptions.map(c => c.text).join('').trim(), intro.segment.text);
  assert.equal(built.scenes[0].captions.map(c => c.text).join('').trim(), a.text);
  // No actual intro audio was written, so remove its reference for the scene
  // physical check. This test does not fake evidence of intro decoding.
  delete built.introVoiceover;
  writeFileSync(path.join(dir, 'lesson.json'), JSON.stringify(built));
  const preflight = runScript('release-preflight.mjs');
  assert.equal(preflight.status, 0, preflight.stderr + preflight.stdout);
});

test('installed media decoder round-trips lossless assembly and preserves inserted silence', () => {
  const dir = mkdtempSync(path.join(os.tmpdir(), 'lesson-decoder-'));
  const {segments, takes} = fixture(), a = assembleSpeech(segments, takes);
  const file = path.join(dir, 'fixture.wav'); writeFileSync(file, a.wav);
  const decoded = decodePcm(file, fileURLToPath(new URL('..', import.meta.url)));
  assert.deepEqual(decoded, a.pcm);
  const gap = a.timeline[1];
  assert.equal(decoded.subarray(gap.startSample * 2, gap.endSample * 2).some(b => b !== 0), false);
});
