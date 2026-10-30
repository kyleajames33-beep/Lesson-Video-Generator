import test from 'node:test';
import assert from 'node:assert/strict';
import {parseTimedCaptions, compareTimedCaptions} from './lib/caption-provenance.mjs';
const srt = '1\n00:00:00,000 --> 00:00:01,001\nNH₃ is\nnot N₂.\n';
test('SBV reserialization preserves notation and one millisecond timing precision', () => {
  const a = parseTimedCaptions('0:00:00.000,0:00:01.000\nNH₃ is\nnot N₂.\n', 'sbv');
  const x = compareTimedCaptions(a, parseTimedCaptions(srt, 'srt'));
  assert.equal(x.equivalent, true); assert.equal(x.maxTimingDeltaMs, 1); assert.equal(x.lineBreakDifferences, 0);
});
test('notation changes, cue loss and timeline drift cannot pass identity', () => {
  const r = parseTimedCaptions(srt, 'srt');
  assert.equal(compareTimedCaptions([{...r[0], text:'NH₃ is not NO.'}], r).equivalent, false);
  assert.equal(compareTimedCaptions([], r).equivalent, false);
  assert.equal(compareTimedCaptions([{...r[0], startMs:2000,endMs:3001}], r).equivalent, false);
});
test('line wrapping differences are recorded separately from exact words', () => {
  const r = parseTimedCaptions(srt, 'srt');
  const x = compareTimedCaptions([{...r[0], text:'NH₃ is not N₂.'}], r);
  assert.equal(x.equivalent, true); assert.equal(x.lineBreakDifferences, 1);
});
test('malformed, empty and overlapping cues fail parsing', () => {
  assert.throws(()=>parseTimedCaptions('', 'sbv'), /Invalid/);
  assert.throws(()=>parseTimedCaptions('0:00:00.000,0:00:00.000\nX', 'sbv'), /empty/);
  assert.throws(()=>parseTimedCaptions(srt+'\n2\n00:00:00,500 --> 00:00:02,000\nX', 'srt'), /Overlapping/);
});
