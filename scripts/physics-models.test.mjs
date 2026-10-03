import test from 'node:test';
import assert from 'node:assert/strict';
import {validateSeriesCircuit, conventionalCurrentPosition, circuitMotion, validateShellOccupancy,
  shellElectronAngle} from '../src/slides/diagrams/physics-models.mjs';

test('series-only topology accepts an ammeter and rejects a voltmeter or unsupported component', () => {
  validateSeriesCircuit([{kind: 'battery'}, {kind: 'lamp'}, {kind: 'ammeter'}], true);
  assert.throws(() => validateSeriesCircuit([{kind: 'battery'}, {kind: 'voltmeter'}]), /parallel/u);
  assert.throws(() => validateSeriesCircuit([{kind: 'capacitor'}]), /Unsupported/u);
  assert.throws(() => validateSeriesCircuit([]));
});
test('animated current requires a source and load rather than illustrating a short circuit', () => {
  assert.throws(() => validateSeriesCircuit([{kind: 'lamp'}], true), /battery/u);
  assert.throws(() => validateSeriesCircuit([{kind: 'battery'}, {kind: 'ammeter'}], true), /load/u);
  assert.throws(() => validateSeriesCircuit([{kind: 'battery'}, {kind: 'battery'}, {kind: 'resistor'}], true), /exactly one/u);
});
test('current follows the direction out of the battery positive terminal and wraps around the loop', () => {
  assert.ok(conventionalCurrentPosition(1, 0.5) < conventionalCurrentPosition(0, 0.5));
  assert.ok(Math.abs(conventionalCurrentPosition(1, 0) - 0.915) < 1e-12);
  for (let second = 0; second < 100; second++) {
    const position = conventionalCurrentPosition(second);
    assert.ok(position >= 0 && position < 1);
  }
});
test('current appears only after the switch has fully closed, including delayed scenes', () => {
  for (const delay of [0, 30, 120]) for (let frame = 0; frame < 250; frame++) {
    const motion = circuitMotion(frame, delay, true);
    if (motion.currentOn > 0) assert.equal(motion.switchAngle, 0);
  }
  assert.deepEqual(circuitMotion(300, 0, false), {switchAngle: -28, currentOn: 0});
});
test('shell model validates supported shell indices and 2n² capacities without guessing ground-state filling', () => {
  assert.deepEqual(validateShellOccupancy([{label: 'e', shell: 1}, {label: 'e', shell: 2}]), [1, 1, 0]);
  assert.throws(() => validateShellOccupancy([{label: 'e', shell: 4}]));
  assert.throws(() => validateShellOccupancy([{label: 'e', shell: 1.5}]));
  assert.throws(() => validateShellOccupancy(Array.from({length: 3}, () => ({label: 'e', shell: 1}))));
});
test('electron markers use distinct stationary angles, including repeated object references', () => {
  const electron = {label: 'e', shell: 1};
  const electrons = [electron, electron];
  assert.equal(shellElectronAngle(electrons, 0), 0);
  assert.equal(shellElectronAngle(electrons, 1), Math.PI);
});
