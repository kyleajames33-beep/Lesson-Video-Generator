import test from 'node:test';
import assert from 'node:assert/strict';
import {explainerCaptionCues, toSrt} from './lib/explainer-captions.mjs';
const scene = (id, frames = 120) => ({id, durationInFrames: frames, voiceover: {text: id, startFrame: 0}, captions: [{text: id, startMs: 0, endMs: 1000}]});
const lesson = () => ({fps: 30, introDurationInFrames: 0, scenes: [scene('question'), scene('feedback'), scene('ending')]});
test('feedback follows the complete question and its thinking pause', () => {
  const l = lesson(); l.scenes[0].responseHold = {startFrame: 30, endFrame: 120};
  const x = explainerCaptionCues(l);
  assert.deepEqual(x.cues.map(c => c.startMs), [0, 4000, 8000]);
  assert.equal(x.timeline.durationInFrames, 360);
  assert.match(toSrt(x.cues), /00:00:04,000 --> 00:00:05,000\nfeedback/);
});
test('a nonuniform scene sequence cannot accumulate transition drift', () => {
  const l = lesson(); l.scenes = [scene('a', 95), scene('b', 301), scene('c', 89)];
  const x = explainerCaptionCues(l);
  assert.deepEqual(x.timeline.scenes.map(s => s.startFrame), [0, 95, 396]);
  assert.equal(x.cues[2].startMs, 13200);
});
test('captions inside the local response hold fail', () => {
  const l = lesson(); l.scenes[0].responseHold = {startFrame: 15, endFrame: 90};
  assert.throws(() => explainerCaptionCues(l), /enters response hold/);
});
test('overlap and zero duration fail after output millisecond rounding', () => {
  const a = lesson();
  a.scenes[0].captions = [{text: 'One.', startMs: 0, endMs: 2000}, {text: 'Two.', startMs: 1000, endMs: 3000}];
  assert.throws(() => explainerCaptionCues(a), /output overlaps/);
  const b = lesson(); b.scenes[0].captions = [{text: 'One.', startMs: 0.1, endMs: 0.9}];
  assert.throws(() => explainerCaptionCues(b), /no output duration/);
});
test('unsupported timing assumptions and missing words fail', () => {
  const a = lesson(); a.fps = 60; assert.throws(() => explainerCaptionCues(a), /30 fps/);
  const b = lesson(); b.introDurationInFrames = 270; assert.throws(() => explainerCaptionCues(b), /separate intro/);
  const c = lesson(); c.scenes[1].voiceover.startFrame = 10; assert.throws(() => explainerCaptionCues(c), /audio starts/);
  const d = lesson(); d.scenes[0].captions = []; assert.throws(() => explainerCaptionCues(d), /Missing timed words/);
});
