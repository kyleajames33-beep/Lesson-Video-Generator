import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, mkdirSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {assessReleaseEvidence, checkReleaseEvidence, reviewScopes} from './lib/release-gate.mjs';
import {captureRelease} from './lib/release-snapshot.mjs';
import {sha256} from './lib/playback-assembly.mjs';

const facts = () => ({snapshotValid: true, inputValid: true, teachingBriefValid: true, packageSha256: 'package', inputPackageSha256: 'inputs',
  renderRecordTracked: true, videoSha256: 'video', captionsTracked: true, fps: 30, durationInFrames: 900,
  renderRecord: {status: 'full-render-unreviewed', inputDriftCheckPassed: true, inputPackageSha256: 'inputs', videoSha256: 'video', render: {fps: 30, frameRange: [0, 899]}},
  reviews: reviewScopes.map((scope) => ({valid: true, record: {packageSha256: 'package', scope, outcome: 'pass', reviewer: 'Named fixture reviewer', recordedAt: '2026-10-03T00:00:00Z'}}))});

test('verified full-package evidence covers every required scope', () => {
  const result = assessReleaseEvidence(facts());
  assert.equal(result.ready, true);
  assert.deepEqual(Object.keys(result.reviews).sort(), [...reviewScopes].sort());
});
test('scores and a video alone cannot replace named reviews', () => {
  const selected = {...facts(), reviews: [], scores: {science: 10, motion: 10}};
  const result = assessReleaseEvidence(selected);
  assert.equal(result.ready, false);
  assert.equal(result.blockers.filter((item) => item.code === 'REVIEW_MISSING').length, 5);
});

test('passing media and all review scopes cannot replace the teaching and exact-preview brief', () => {
  for (const teachingBriefValid of [false, undefined]) {
    const result = assessReleaseEvidence({...facts(), teachingBriefValid});
    assert.equal(result.ready, false);
    assert.ok(result.blockers.some(item => item.code === 'TEACHING_BRIEF_REQUIRED'));
  }
});
test('one reviewer can cover multiple scopes, but omissions and stale records fail', () => {
  const selected = facts();
  selected.reviews[0].record.packageSha256 = 'older-package';
  const result = assessReleaseEvidence(selected);
  assert.ok(result.blockers.some((item) => item.code === 'REVIEW_INVALID'));
  assert.ok(result.blockers.some((item) => item.code === 'REVIEW_MISSING' && item.detail === 'science'));
});
test('latest changes-required outcome overrides an earlier pass, independent of input order', () => {
  const selected = facts();
  const changed = {valid: true, record: {...selected.reviews[0].record, outcome: 'changes-required', recordedAt: '2026-10-03T01:00:00Z'}};
  for (const reviews of [[changed, ...selected.reviews], [...selected.reviews, changed]]) {
    const result = assessReleaseEvidence({...selected, reviews});
    assert.ok(result.blockers.some((item) => item.code === 'REVIEW_CHANGES_REQUIRED'));
  }
});
test('conflicting simultaneous records conservatively retain changes-required', () => {
  const selected = facts();
  selected.reviews.push({valid: true, record: {...selected.reviews[0].record, outcome: 'changes-required'}});
  assert.equal(assessReleaseEvidence(selected).ready, false);
});
test('preview, wrong video, timeline mismatch and stale inputs fail even with passing reviews', () => {
  for (const mutate of [
    (selected) => {selected.renderRecord.status = 'preview-unreviewed';},
    (selected) => {selected.renderRecord.videoSha256 = 'other';},
    (selected) => {selected.renderRecord.render.frameRange = [0, 898];},
    (selected) => {selected.inputValid = false;},
    (selected) => {selected.renderRecord.inputPackageSha256 = 'other';},
    (selected) => {selected.renderRecordTracked = false;},
    (selected) => {selected.captionsTracked = false;},
  ]) {
    const selected = facts(); mutate(selected);
    assert.equal(assessReleaseEvidence(selected).ready, false);
  }
});
test('invalid reviewers, dates, outcomes and verification results fail closed', () => {
  for (const mutate of [
    (review) => {review.record.reviewer = ' ';},
    (review) => {review.record.reviewer = 123;},
    (review) => {review.record.reviewer = {};},
    (review) => {review.record.recordedAt = 'invalid';},
    (review) => {review.record.recordedAt = null;},
    (review) => {review.record.outcome = 'maybe';},
    (review) => {review.valid = false;},
  ]) {
    const selected = facts(); mutate(selected.reviews[0]);
    assert.equal(assessReleaseEvidence(selected).ready, false);
  }
});
test('filesystem adapter rejects malformed packages and path escapes without any media fixture', (t) => {
  const prefix = path.join(path.resolve(tmpdir()), 'release-evidence-test-');
  const directory = mkdtempSync(prefix);
  t.after(() => {
    const resolved = path.resolve(directory);
    if (!resolved.startsWith(prefix) || path.dirname(resolved) !== path.resolve(tmpdir())) throw new Error('Unsafe temporary cleanup target');
    rmSync(resolved, {recursive: true, force: true});
  });
  for (const file of ['snapshot.json', 'inputs.json', 'record.json']) writeFileSync(path.join(directory, file), '{}');
  const config = {snapshotPath: 'snapshot.json', inputSnapshotPath: 'inputs.json', renderRecordPath: 'record.json', reviews: []};
  assert.equal(checkReleaseEvidence(directory, config).ready, false);
  assert.throws(() => checkReleaseEvidence(directory, {...config, snapshotPath: '../escape.json'}), /workspace/u);
  assert.throws(() => checkReleaseEvidence(directory, {...config, threshold: 9}), /threshold/u);
});

function videoSelectionFixture(t, options) {
  const {videos, untrackedVideos = []} = options;
  const recordedHash = Object.hasOwn(options, 'recordedHash') ? options.recordedHash : sha256('mastered fixture');
  const prefix = path.join(path.resolve(tmpdir()), 'release-video-selection-test-');
  const directory = mkdtempSync(prefix);
  t.after(() => {
    const resolved = path.resolve(directory);
    if (!resolved.startsWith(prefix) || path.dirname(resolved) !== path.resolve(tmpdir())) throw new Error('Unsafe temporary cleanup target');
    rmSync(resolved, {recursive: true, force: true});
  });
  const put = (file, contents) => {
    const target = path.join(directory, file);
    mkdirSync(path.dirname(target), {recursive: true});
    writeFileSync(target, contents);
  };
  const json = (file, value) => put(file, JSON.stringify(value));
  json('lesson.json', {fps: 30, introDurationInFrames: 0, scenes: [{id: 'concept', durationInFrames: 900}]});
  for (const file of ['package.json', 'package-lock.json']) json(file, {});
  put('remotion.config.ts', '// Fixture only. No encoded media or rendering.');
  put('src/entry.tsx', '// Fixture entry point.');
  json('render.json', {entryPoint: 'src/entry.tsx', compositionId: 'Fixture', codec: 'h264'});
  const captureOptions = {lessonPath: 'lesson.json', renderConfig: 'render.json'};
  const inputs = captureRelease(directory, captureOptions);
  json('inputs.json', inputs);
  json('record.json', {schemaVersion: 1, status: 'full-render-unreviewed', inputDriftCheckPassed: true,
    inputPackageSha256: inputs.packageSha256, videoSha256: recordedHash,
    render: {fps: 30, frameRange: [0, 899]}});
  put('captions.srt', 'Fixture caption');
  put('captions.vtt', 'WEBVTT\n\nFixture caption');
  // File contents are test markers, not playable media or listening evidence.
  for (const video of [...videos, ...untrackedVideos]) put(video.path, video.contents);
  const snapshot = captureRelease(directory, {...captureOptions,
    artifacts: ['record.json', 'captions.srt', 'captions.vtt', ...videos.map(video => video.path)],
    inputs: untrackedVideos.map(video => video.path)});
  json('snapshot.json', snapshot);
  const config = {snapshotPath: 'snapshot.json', inputSnapshotPath: 'inputs.json', renderRecordPath: 'record.json', reviews: []};
  return {directory, config, put, check: () => checkReleaseEvidence(directory, config)};
}

test('filesystem adapter selects the uniquely recorded mastered hash among preserved MP4 exports', (t) => {
  const fixture = videoSelectionFixture(t, {videos: [
    {path: 'a-silent.mp4', contents: 'silent fixture'},
    {path: 'b-unmastered.mp4', contents: 'unmastered fixture'},
    {path: 'c-selected.mp4', contents: 'mastered fixture'},
  ]});
  const result = fixture.check();
  assert.equal(result.ready, false);
  assert.ok(!result.blockers.some(item => item.code === 'RENDER_VIDEO_MISMATCH'));
  assert.ok(!result.blockers.some(item => ['PACKAGE_INVALID', 'INPUT_PACKAGE_INVALID'].includes(item.code)));
  assert.deepEqual(result.blockers.filter(item => item.code === 'REVIEW_MISSING').map(item => item.detail), reviewScopes);
  assert.ok(result.blockers.some(item => item.code === 'TEACHING_BRIEF_REQUIRED'));
});

test('filesystem adapter rejects absent, unmatched and ambiguous recorded MP4 hashes without guessing', (t) => {
  const scenarios = [
    {videos: [{path: 'only.mp4', contents: 'mastered fixture'}], recordedHash: undefined},
    {videos: [{path: 'only.mp4', contents: 'mastered fixture'}], recordedHash: null},
    {videos: [{path: 'only.mp4', contents: 'mastered fixture'}], recordedHash: ''},
    {videos: [{path: 'only.mp4', contents: 'mastered fixture'}], recordedHash: ' '},
    {videos: [{path: 'only.mp4', contents: 'unmastered fixture'}]},
    {videos: [{path: 'first.mp4', contents: 'mastered fixture'}, {path: 'second.mp4', contents: 'mastered fixture'}]},
    {videos: [{path: 'only.mp4', contents: 'unmastered fixture'}],
      untrackedVideos: [{path: 'input.mp4', contents: 'mastered fixture'}]},
  ];
  for (const scenario of scenarios) {
    const result = videoSelectionFixture(t, scenario).check();
    assert.equal(result.ready, false);
    assert.ok(result.blockers.some(item => item.code === 'RENDER_VIDEO_MISMATCH'));
    assert.equal(result.blockers.filter(item => item.code === 'REVIEW_MISSING').length, 5);
  }
});

test('filesystem adapter still rejects changed selected media after matching the recorded snapshot hash', (t) => {
  const fixture = videoSelectionFixture(t, {videos: [
    {path: 'silent.mp4', contents: 'silent fixture'},
    {path: 'selected.mp4', contents: 'mastered fixture'},
  ]});
  fixture.put('selected.mp4', 'changed fixture');
  const result = fixture.check();
  assert.equal(result.ready, false);
  assert.ok(result.blockers.some(item => item.code === 'PACKAGE_INVALID'));
});
