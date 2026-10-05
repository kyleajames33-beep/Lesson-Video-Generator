import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {assessReleaseEvidence, checkReleaseEvidence, reviewScopes} from './lib/release-gate.mjs';

const facts = () => ({snapshotValid: true, inputValid: true, packageSha256: 'package', inputPackageSha256: 'inputs',
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
