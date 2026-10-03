import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {buildSpeechRequest, validateSpeechPayload} from './elevenlabs-request.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
mkdirSync(path.join(root, 'out/checks/preflight-tests'), {recursive: true});
const makeFixture = () => {
  const dir = mkdtempSync(path.join(root, 'out/checks/preflight-tests/run-'));
  mkdirSync(path.join(dir, 'src/assets'), {recursive: true});
  mkdirSync(path.join(dir, 'public/audio'), {recursive: true});
  writeFileSync(path.join(dir, 'src/assets/index.ts'), "export const ASSETS = {hero: staticFile('assets/hero.png')};");
  const text = 'One mole contains particles.';
  const hash = createHash('sha256').update(text).digest('hex').slice(0, 12);
  const audioFile = `public/audio/test.${hash}.mp3`;
  writeFileSync(path.join(dir, audioFile), 'fixture');
  const alignment = {characters: [...text], character_start_times_seconds: [...text].map((_, i) => i / 10), character_end_times_seconds: [...text].map((_, i) => (i + 1) / 10)};
  writeFileSync(path.join(dir, audioFile.replace('.mp3', '.alignment.json')), JSON.stringify(alignment));
  const lesson = {subject: 'Chemistry', yearLevel: 'Year 11', module: 'Module 2', lesson: 'Lesson 1', fps: 30,
    scenes: [{id: 'concept', type: 'concept', durationInFrames: 180, voiceover: {text, audioFile}, captions: [{text, startMs: 0, endMs: 2600}]}]};
  return {dir, lesson, alignment};
};
const runPreflight = fixture => {
  writeFileSync(path.join(fixture.dir, 'lesson.json'), JSON.stringify(fixture.lesson));
  const run = spawnSync(process.execPath, [path.join(root, 'scripts/release-preflight.mjs'), 'lesson.json'], {cwd: fixture.dir, encoding: 'utf8'});
  const report = JSON.parse(readFileSync(path.join(fixture.dir, 'out/audits/release-preflight.json'), 'utf8')).lessons[0];
  return {run, report};
};
test('valid media passes without requiring editorial score heuristics', () => {
  const {run, report} = runPreflight(makeFixture());
  assert.equal(run.status, 0, run.stderr);
  assert.equal(report.mediaReady, true);
  assert.equal(report.durationSeconds, 15);
});
test('missing media and unwired narration block publication', () => {
  const fixture = makeFixture();
  fixture.lesson.scenes[0].image = 'hero';
  delete fixture.lesson.scenes[0].voiceover.audioFile;
  const {run, report} = runPreflight(fixture);
  assert.equal(run.status, 1);
  assert.deepEqual(report.errors.map(e => e.code), ['MEDIA_MISSING', 'AUDIO_UNWIRED']);
});
test('changed narration and delayed playback detect stale and clipped audio', () => {
  const fixture = makeFixture();
  fixture.lesson.scenes[0].voiceover.text += ' Updated.';
  fixture.lesson.scenes[0].voiceover.startFrame = 150;
  const {report} = runPreflight(fixture);
  assert.ok(report.errors.some(e => e.code === 'AUDIO_STALE'));
  assert.ok(report.errors.some(e => e.code === 'AUDIO_CLIPPED'));
});
test('malformed alignment fails before publishing', () => {
  const fixture = makeFixture();
  fixture.alignment.character_end_times_seconds = [1];
  writeFileSync(path.join(fixture.dir, fixture.lesson.scenes[0].voiceover.audioFile.replace('.mp3', '.alignment.json')), JSON.stringify(fixture.alignment));
  assert.ok(runPreflight(fixture).report.errors.some(e => e.code === 'ALIGNMENT_INVALID'));
});
test('v4 uses dialogue endpoint and omits unsupported legacy settings', () => {
  const request = buildSpeechRequest({text: 'Hello', voiceId: 'voice', modelId: 'eleven_v4'});
  assert.ok(request.endpoint.endsWith('/text-to-dialogue/with-timestamps'));
  assert.deepEqual(request.body.inputs, [{text: 'Hello', voice_id: 'voice'}]);
  assert.equal(request.body.voice_settings, undefined);
  assert.throws(() => buildSpeechRequest({text: 'x'.repeat(2001), voiceId: 'voice', modelId: 'eleven_v4'}));
});
test('default narration uses Flash and rejects empty provider timestamps', () => {
  const request = buildSpeechRequest({text: 'Hello', voiceId: 'voice'});
  assert.equal(request.body.model_id, 'eleven_flash_v2_5');
  assert.throws(() => validateSpeechPayload({audio_base64: 'AA==', alignment: {characters: [], character_start_times_seconds: [], character_end_times_seconds: []}}));
  assert.throws(() => buildSpeechRequest({text: '[STUDENT]Why?[/STUDENT]', voiceId: 'voice'}));
});
test('caption offsets match fps, delayed narration and concatenated intros', () => {
  const fixture = makeFixture();
  fixture.lesson.fps = 60;
  fixture.lesson.scenes[0].durationInFrames = 600;
  fixture.lesson.scenes[0].voiceover.startFrame = 60;
  fixture.lesson.scenes[0].captions = [{text: 'Hello', startMs: 0, endMs: 500}];
  writeFileSync(path.join(fixture.dir, 'a.json'), JSON.stringify(fixture.lesson));
  fixture.lesson.lesson = 'Lesson 2';
  writeFileSync(path.join(fixture.dir, 'b.json'), JSON.stringify(fixture.lesson));
  const run = spawnSync(process.execPath, [path.join(root, 'scripts/export-captions-srt.mjs'), 'a.json', 'b.json', '--combined-intros=all'], {cwd: fixture.dir, encoding: 'utf8'});
  assert.equal(run.status, 0, run.stderr);
  const srt = readFileSync(path.join(fixture.dir, 'out/captions/Chemistry-Y11-M2-L1-combined.srt'), 'utf8');
  assert.ok(srt.includes('00:00:05,500 --> 00:00:06,000'));
  assert.ok(srt.includes('00:00:20,000 --> 00:00:20,500'));
  const firstIntroRun = spawnSync(process.execPath, [path.join(root, 'scripts/export-captions-srt.mjs'), 'a.json', 'b.json'], {cwd: fixture.dir, encoding: 'utf8'});
  assert.equal(firstIntroRun.status, 0, firstIntroRun.stderr);
  const firstIntroSrt = readFileSync(path.join(fixture.dir, 'out/captions/Chemistry-Y11-M2-L1-combined.srt'), 'utf8');
  assert.ok(firstIntroSrt.includes('00:00:15,500 --> 00:00:16,000'));
});
