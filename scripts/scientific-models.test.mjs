import test from 'node:test';
import assert from 'node:assert/strict';
import {temperatureRate, phRate, substrateRate, enzymeInsetState, forkProcessingTimes,
  dnaSequence, complementaryBase, handDnaSchedule, newDnaBondAt} from '../src/slides/diagrams/scientific-models.mjs';

test('substrate curve approaches its limit without reaching it at finite concentration', () => {
  let previous = -1;
  for (const concentration of [0, 0.01, 0.1, 1, 1.6, 10, 100, 10000]) {
    const rate = substrateRate(concentration);
    assert.ok(rate > previous && rate < 1);
    assert.ok(Math.abs(substrateRate(concentration, 2) - 2 * rate) < 1e-12);
    previous = rate;
  }
  assert.equal(substrateRate(1.6), 0.5);
  assert.throws(() => substrateRate(-1));
  assert.throws(() => substrateRate(1, 0));
});
test('illustrative temperature and pH curves have the declared peaks and finite values', () => {
  assert.equal(temperatureRate(40), 1);
  assert.equal(temperatureRate(60), 0);
  assert.equal(phRate(7), 1);
  assert.equal(phRate(6), phRate(8));
  for (let value = 0; value <= 70; value++) assert.ok(Number.isFinite(temperatureRate(value)));
  assert.throws(() => temperatureRate(40, 40, 40));
});
test('a reduced rate does not automatically distort the enzyme or assert permanent damage', () => {
  for (let ph = 0; ph <= 14; ph++) assert.equal(enzymeInsetState('ph', ph).warp, 0);
  for (let temperature = 0; temperature <= 70; temperature++) assert.equal(enzymeInsetState('temperature', temperature).warp, 0);
  const assumed = enzymeInsetState('temperature', 55, 40, 60, true);
  assert.ok(assumed.warp > 0);
  assert.match(assumed.label, /assumed/u);
  assert.ok(enzymeInsetState('substrate', 10).bound < 1);
});
test('primer replacement follows completed fragments, and nick sealing follows replacement even with early cues', () => {
  for (const at of [{}, {leading: 900, lagging: 1000, primers: 2000, processing: 1, ligase: 0, rule: 2},
    {leading: 732, lagging: 801, primers: 1020, ligase: 1124, rule: 1182}]) {
    const times = forkProcessingTimes(at);
    assert.ok(times.replace >= (at.leading ?? 300) + 140);
    assert.ok(times.replace >= (at.lagging ?? 500) + 200);
    assert.ok(times.seal >= times.replace + 40);
    assert.ok(times.rule >= times.seal + 40);
  }
});
test('DNA pairing is reciprocal and rejects invalid or empty sequences instead of deleting bases', () => {
  for (const base of 'ATGC') assert.equal(complementaryBase(complementaryBase(base)), base);
  assert.deepEqual(dnaSequence('actg'), ['A', 'C', 'T', 'G']);
  for (const sequence of ['', 'A', 'ANNNT', 'A T', 'ATGCGTACCTGAA']) assert.throws(() => dnaSequence(sequence));
});
test('leading addition proceeds toward the fork, lagging addition away within each fragment', () => {
  for (let count = 2; count <= 12; count++) {
    const xs = Array.from({length: count}, (_, index) => 88 + index * 50 + (12 - count) * 25);
    const schedule = handDnaSchedule(xs);
    for (let index = 0; index < count; index++) {
      assert.ok(schedule.leading[index] > 30 + (xs[index] - 40) / 730 * 200);
      if (index + 1 < count) {
        assert.ok(schedule.leading[index] < schedule.leading[index + 1]);
        if (Math.floor(index / 3) === Math.floor((index + 1) / 3)) assert.ok(schedule.lagging[index] > schedule.lagging[index + 1]);
      }
    }
    assert.ok(schedule.processing > Math.max(...schedule.lagging, ...schedule.leading) + 6);
    assert.ok(schedule.joined > schedule.processing);
    assert.ok(schedule.end > schedule.joined + 6);
  }
  assert.throws(() => handDnaSchedule([1, 2], 0));
});
test('adjacent fragments never become continuous merely because both bases have arrived', () => {
  const schedule = handDnaSchedule(Array.from({length: 12}, (_, index) => 88 + index * 50));
  for (let index = 0; index < 11; index++) {
    const at = newDnaBondAt(schedule.lagging, index, schedule.joined, true);
    if (index % 3 === 2) {
      assert.ok(at > Math.max(schedule.lagging[index], schedule.lagging[index + 1]) + 6);
      assert.equal(at, schedule.joined);
    } else assert.equal(at, Math.max(schedule.lagging[index], schedule.lagging[index + 1]));
  }
});
