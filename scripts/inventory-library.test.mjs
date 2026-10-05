import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {mkdtempSync, mkdirSync, writeFileSync, rmSync} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {inventoryLibrary, serialise} from './inventory-library.mjs';

const text = 'Each mole contributes twelve grams.';
const textHash = createHash('sha256').update(text).digest('hex').slice(0, 12);
const lesson = () => ({title: 'Molar mass', subject: 'Chemistry', yearLevel: 'Year 11', module: 'Module 2', lesson: 'Lesson 2', fps: 30,
  scenes: [{id: 'example', type: 'workedExample', durationInFrames: 90, voiceover: {text, audioFile: `public/audio/example.${textHash}.mp3`}, captions: [{text: 'Each', startMs: 0, endMs: 200}]}]});

function fixture(t) {
  const root = mkdtempSync(path.join(os.tmpdir(), 'lesson-library-test-'));
  const write = (file, value) => {mkdirSync(path.dirname(path.join(root, file)), {recursive: true}); writeFileSync(path.join(root, file), typeof value === 'string' ? value : JSON.stringify(value));};
  write('src/data/chemistry-test.json', lesson());
  write('src/lesson/timing-constants.json', {INTRO_STINGER_FRAMES: 270, TRANSITION_FRAMES: 24});
  t.after(() => {
    const resolved = path.resolve(root);
    const relative = path.relative(path.resolve(os.tmpdir()), resolved);
    assert.ok(!path.isAbsolute(relative) && !relative.startsWith('..') && path.basename(resolved).startsWith('lesson-library-test-'));
    rmSync(resolved, {recursive: true, force: true});
  });
  return {root, write};
}

test('present recording/render/retrospective never become scientific or release approval', t => {
  const {root, write} = fixture(t);
  write(`public/audio/example.${textHash}.mp3`, 'fixture, not decodable audio');
  write(`public/audio/example.${textHash}.alignment.json`, {characters: ['a'], character_start_times_seconds: [0], character_end_times_seconds: [0.2]});
  write('out/Chemistry-Y11-M2-L2.mp4', 'fixture, not decodable video');
  write('out/retrospectives/Chemistry-Y11-M2-L2.md', '# Empty review template');
  const result = inventoryLibrary(root), item = result.lessons[0];
  assert.equal(item.stages.audioFilesPresent, 1);
  assert.equal(item.stages.rendering, 'candidate-export-present');
  assert.equal(item.stages.review, 'record-present-unassessed');
  assert.equal(item.stages.release, 'unknown');
  assert.equal(item.curriculum.verification, 'pending-source-and-cohort-check');
  assert.equal(result.summaries.verifiedReleases, null);
});

test('stale speech and invalid alignment are surfaced even when files exist', t => {
  const {root, write} = fixture(t), source = lesson();
  source.scenes[0].voiceover.text = 'Changed explanation.';
  write('src/data/chemistry-test.json', source);
  write(`public/audio/example.${textHash}.mp3`, 'fixture');
  write(`public/audio/example.${textHash}.alignment.json`, {characters: ['a'], character_start_times_seconds: [0], character_end_times_seconds: [-1]});
  const result = inventoryLibrary(root);
  assert.ok(result.diagnostics.some(i => i.code === 'AUDIO_TEXT_HASH_MISMATCH'));
  assert.ok(result.diagnostics.some(i => i.code === 'ALIGNMENT_INVALID'));
  assert.equal(result.lessons[0].stages.matchingTextHashFiles, 0);
});

test('a path outside public is flagged without treating an outside file as media', t => {
  const {root, write} = fixture(t), source = lesson();
  source.scenes[0].voiceover.audioFile = '../outside.mp3';
  write('outside.mp3', 'exists outside public');
  write('src/data/chemistry-test.json', source);
  const result = inventoryLibrary(root);
  assert.equal(result.lessons[0].stages.audioFilesPresent, 0);
  assert.ok(result.diagnostics.some(i => i.code === 'PATH_OUTSIDE_PUBLIC'));
});

test('bad source JSON and duplicate composition IDs cannot disappear into counts', t => {
  const {root, write} = fixture(t);
  write('src/data/chemistry-duplicate.json', lesson());
  write('src/data/biology-broken.json', '{bad json');
  const result = inventoryLibrary(root);
  assert.equal(result.lessons.length, 3);
  assert.ok(result.diagnostics.some(i => i.code === 'JSON_INVALID'));
  assert.ok(result.diagnostics.some(i => i.code === 'COMPOSITION_ID_COLLISION'));
  assert.equal(result.lessons.find(l => l.contentStatus === 'invalid-json').disposition, 'hold');
});

test('prohibited source punctuation is preserved as escaped data and flagged by field', t => {
  const {root, write} = fixture(t), source = lesson();
  source.title = 'Mass' + String.fromCodePoint(0x2014) + 'moles';
  write('src/data/chemistry-test.json', source);
  const result = inventoryLibrary(root), saved = serialise(result);
  assert.ok(!saved.includes(String.fromCodePoint(0x2014)));
  assert.equal(JSON.parse(saved).lessons[0].title, source.title);
  assert.ok(result.diagnostics.some(i => i.code === 'COPY_PUNCTUATION' && i.field === 'title'));
});
