import {alignmentToCaptions} from './lib/caption-timeline.mjs';
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
    scenes: [{id: 'concept', type: 'concept', durationInFrames: 180, voiceover: {text, audioFile}, captions: alignmentToCaptions(alignment)}]};
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

test('exact frame-boundary narration tolerates decimal addition noise but still rejects a millisecond of clipping', () => {
  const fixture = makeFixture();
  const scene = fixture.lesson.scenes[0];
  scene.voiceover.endFrame = Math.ceil(fixture.alignment.character_end_times_seconds.at(-1) * 30);
  const boundary = scene.voiceover.endFrame / 30;
  const alignmentPath = path.join(fixture.dir, scene.voiceover.audioFile.replace('.mp3', '.alignment.json'));
  fixture.alignment.character_end_times_seconds[fixture.alignment.characters.length - 1] = boundary + 4e-15;
  writeFileSync(alignmentPath, JSON.stringify(fixture.alignment));
  assert.ok(!runPreflight(fixture).report.errors.some(e => e.code === 'AUDIO_CLIPPED'));
  fixture.alignment.character_end_times_seconds[fixture.alignment.characters.length - 1] = boundary + 0.001;
  writeFileSync(alignmentPath, JSON.stringify(fixture.alignment));
  assert.ok(runPreflight(fixture).report.errors.some(e => e.code === 'AUDIO_CLIPPED'));
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
test('v4 records supported controls and rejects unversioned dictionaries and legacy controls', () => {
  const requestOptions = {stability: 0.65, similarity: 0.8, language_code: 'en', seed: 42,
    apply_text_normalization: 'off', pronunciation_dictionary_locators: [{pronunciation_dictionary_id: 'dict', version_id: 'version'}]};
  const input = {text: 'Two point zero zero moles.', voiceId: 'Simon', modelId: 'eleven_v4'};
  const request = buildSpeechRequest({...input, requestOptions});
  assert.deepEqual(request.body.settings, {stability: 0.65, similarity: 0.8});
  assert.equal(request.body.seed, 42);
  assert.deepEqual(request.body.pronunciation_dictionary_locators, requestOptions.pronunciation_dictionary_locators);
  for (const options of [{speed: 0.9}, {style: 0.3}, {similarity_boost: 0.8}, {stability: 1.01}, {similarity: NaN},
    {language_code: 'en-AU'}, {seed: -1}, {apply_text_normalization: 'yes'},
    {pronunciation_dictionary_locators: [{pronunciation_dictionary_id: 'dict'}]}]) {
    assert.throws(() => buildSpeechRequest({...input, requestOptions: options}));
  }
  assert.throws(() => buildSpeechRequest({...input, modelId: 'eleven_v3', requestOptions}));
});
test('generation honors the selected manifest voice and isolates alternate auditions', () => {
  const fixture = makeFixture();
  const manifestPath = path.join(fixture.dir, 'voice-manifest.json');
  writeFileSync(manifestPath, JSON.stringify({compositionId: 'test', voiceSelection: {voiceId: 'Simon', modelId: 'eleven_v4'},
    scenes: [{id: 'test', text: 'One mole.', audioFile: 'public/audio/test.mp3'}]}));
  const executable = path.join(root, 'scripts/generate-elevenlabs-audio.mjs');
  const env = {...process.env};
  delete env.ELEVENLABS_MODEL_ID; delete env.ELEVENLABS_VOICE_ID;
  const run = flags => spawnSync(process.execPath, [executable, manifestPath, '--dry-run', ...flags], {cwd: fixture.dir, env, encoding: 'utf8'});
  const selected = run([]);
  assert.equal(selected.status, 0, selected.stderr);
  assert.match(selected.stdout, /Voice ID: Simon/);
  assert.match(selected.stdout, /Model: eleven_v4/);
  assert.notEqual(run(['--model=eleven_flash_v2_5']).status, 0);
  assert.equal(run(['--model=eleven_flash_v2_5', '--output-dir=out/audition']).status, 0);
  assert.throws(() => buildSpeechRequest({text: 'Think. <break time="4s"/> Answer.', voiceId: 'Simon', modelId: 'eleven_v4'}));
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
test('authored diagrams on unsupported worked-example and summary hosts fail release preflight', () => {
  for (const type of ['workedExample', 'summary']) {
    const fixture = makeFixture();
    fixture.lesson.scenes[0].type = type;
    fixture.lesson.scenes[0].diagram = {type: 'table', headers: ['A', 'B'], rows: [['1', '2']]};
    const {run, report} = runPreflight(fixture);
    assert.equal(run.status, 1);
    assert.ok(report.errors.some(error => error.code === 'DIAGRAM_HOST_UNSUPPORTED'));
  }
});
test('legacy readiness JSON uses the current gate and never returns an old report after a failed input', () => {
  const fixture = makeFixture();
  writeFileSync(path.join(fixture.dir, 'lesson.json'), JSON.stringify(fixture.lesson));
  const wrapper = path.join(root, 'scripts/check-render-readiness.mjs');
  const good = spawnSync(process.execPath, [wrapper, 'lesson.json', '--json'], {cwd: fixture.dir, encoding: 'utf8'});
  assert.equal(good.status, 0, good.stderr);
  assert.equal(JSON.parse(good.stdout).lessons[0].mediaReady, true);
  const bad = spawnSync(process.execPath, [wrapper, 'missing.json', '--json'], {cwd: fixture.dir, encoding: 'utf8'});
  assert.notEqual(bad.status, 0);
  assert.equal(bad.stdout, '');
});
