import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createConductometricModel, conductometricAddedAt, conductometricIonArrival, validateQuantitativeDiagram} from '../src/slides/diagrams/quantitative-models.mjs';
import {quantitativeSources} from './lib/quantitative-corrections.mjs';
import {integratedQuantitativeDraft} from './lib/quantitative-lessons.mjs';

const diagram = (kind, props) => ({type: 'diorama', kind, props});
const conducto = (props) => diagram('chem12m6Conductometric', props);
const calorimetry = (props) => diagram('chem11m4Calorimetry', props);
const ladder = (props) => diagram('chem11m4EnergyLadder', props);

test('HCl/NaOH model conserves charge and chloride, consumes acid and adds excess hydroxide', () => {
  const model = createConductometricModel();
  for (let k = 0; k <= 20; k += 0.125) {
    const counts = model.ions(k);
    assert.equal(counts.H + counts.Na, counts.Cl + counts.OH);
    assert.equal(counts.Cl, 10);
    assert.equal(counts.Na, k);
    assert.ok(Object.values(counts).every((value) => value >= 0));
    assert.ok(counts.H === 0 || counts.OH === 0);
  }
  assert.deepEqual(model.ions(10), {H: 0, Cl: 10, Na: 10, OH: 0});
  assert.deepEqual(model.ions(20), {H: 0, Cl: 10, Na: 20, OH: 10});
});
test('independent conductivity sums include dilution and have a checked equivalence minimum', () => {
  const model = createConductometricModel();
  assert.equal(model.signal(0), (350 * 10 + 76 * 10) / 25);
  assert.equal(model.signal(10), (76 * 10 + 50 * 10) / (25 + 10 * 0.25));
  assert.equal(model.signal(20), (76 * 10 + 50 * 20 + 198 * 10) / (25 + 20 * 0.25));
  assert.equal(model.maximum, Math.max(model.signal(0), model.signal(20)));
  for (const volume of [5, 25, 100]) for (const perUnit of [0.1, 1, 10]) {
    const varied = createConductometricModel({vAcid: volume, vPerUnit: perUnit});
    for (let k = 0; k < 10; k += 0.25) assert.ok(varied.signal(k + 0.25) < varied.signal(k));
    for (let k = 10; k < 20; k += 0.25) assert.ok(varied.signal(k + 0.25) > varied.signal(k));
  }
});
test('unsupported parameters and added amounts fail rather than drawing invalid annotated curves', () => {
  for (const props of [{units: 0}, {units: 1.5}, {units: 81}, {vAcid: 0}, {vPerUnit: -1}, {vAcid: Infinity},
    {lambda: {H: 350, OH: NaN, Cl: 76, Na: 50}}, {lambda: {H: 350, OH: 198, Cl: 76, Na: 0}},
    {lambda: {H: 1, OH: 1, Cl: 100, Na: 1}, vAcid: 1, vPerUnit: 100}]) assert.throws(() => createConductometricModel(props));
  const model = createConductometricModel();
  for (const k of [-1, 21, Infinity, NaN]) assert.throws(() => model.signal(k));
});
test('model conductivity values are stable after caller mutation', () => {
  const lambda = {H: 350, OH: 198, Cl: 76, Na: 50};
  const model = createConductometricModel({lambda});
  const original = model.signal(0);
  lambda.H = 1;
  assert.equal(model.signal(0), original);
});
test('graph and discrete ion arrivals share both unequal titration phases', () => {
  const cues = {runAt: 10, epAt: 110, endAt: 410}, units = 10;
  assert.equal(conductometricAddedAt(-50, units, cues), 0);
  assert.equal(conductometricAddedAt(10, units, cues), 0);
  assert.equal(conductometricAddedAt(60, units, cues), 5);
  assert.equal(conductometricAddedAt(110, units, cues), 10);
  assert.equal(conductometricAddedAt(260, units, cues), 15);
  assert.equal(conductometricAddedAt(500, units, cues), 20);
  for (let index = 0; index < 20; index++) {
    const arrival = conductometricIonArrival('Na', index, units, cues);
    assert.equal(conductometricAddedAt(arrival, units, cues), index + 1);
  }
  for (let index = 0; index < 10; index++) {
    const arrival = conductometricIonArrival('OH', index, units, cues);
    assert.equal(conductometricAddedAt(arrival, units, cues), units + index + 1);
    assert.ok(arrival > cues.epAt);
  }
  assert.equal(conductometricIonArrival('Na', 10, units, cues), 140);
  assert.equal(conductometricIonArrival('OH', 0, units, cues), 140);
});
test('invalid cue order and early minimum annotations are rejected', () => {
  for (const props of [{runAt: 100, epAt: 100}, {epAt: 900, endAt: 800}, {minAt: 20}, {barsAt: NaN}, {delay: -1}]) {
    assert.throws(() => validateQuantitativeDiagram(conducto(props)));
  }
  assert.throws(() => conductometricIonArrival('OH', 10, 10, {runAt: 10, epAt: 100, endAt: 200}));
});
test('unvoiced custom cards can be inspected but cannot be treated as cue-ready', () => {
  const value = calorimetry({mode: 'neutralisation', cards: [{title: 'Water amount', eq: 'Use balanced ratios'}], note: {text: 'Assumptions'}});
  assert.deepEqual(validateQuantitativeDiagram(value, {requireCues: false}), ['cards[0].at', 'note.at']);
  assert.throws(() => validateQuantitativeDiagram(value), /Missing quantitative reveal cues/u);
  value.props.cards[0].at = 100;
  value.props.note.at = 120;
  assert.deepEqual(validateQuantitativeDiagram(value), []);
  for (const props of [{cards: []}, {cards: [{at: Infinity, title: 'x', eq: 'y'}]}, {mode: 'invalid'}, {note: {at: 1}},
    {mode: 'neutralisation', beats: [100, 20]}, {beats: [20, 40]}]) assert.throws(() => validateQuantitativeDiagram(calorimetry(props), {requireCues: false}));
});
test('ladder geometry and arrow references are checked separately from missing timed reveals', () => {
  const props = {panels: [{levels: [{key: 'solid', e: 0.2}, {key: 'gas', e: 0.9}],
    arrows: [{from: 'solid', to: 'gas', label: 'Lattice separation'}], heat: {dir: 'in'}}]};
  assert.deepEqual(validateQuantitativeDiagram(ladder(props), {requireCues: false}), ['panels[0].arrows[0].at', 'panels[0].heat.at']);
  assert.throws(() => validateQuantitativeDiagram(ladder(props)), /Missing quantitative reveal cues/u);
  props.panels[0].arrows[0].at = 100;
  props.panels[0].heat.at = 120;
  assert.deepEqual(validateQuantitativeDiagram(ladder(props)), []);
  for (const change of [(p) => p.panels[0].levels[0].e = NaN, (p) => p.panels[0].levels[0].e = 1.1,
    (p) => p.panels[0].levels[1].key = 'solid', (p) => p.panels[0].arrows[0].to = 'missing',
    (p) => p.panels[0].arrows[0].at = -1, (p) => p.panels[0].heat.dir = 'sideways']) {
    const changed = structuredClone(props); change(changed);
    assert.throws(() => validateQuantitativeDiagram(ladder(changed), {requireCues: false}));
  }
});
test('integrated lesson proposals remain structurally valid while missing custom cues are explicitly pending', async () => {
  let missingScenes = 0;
  for (const name of Object.keys(quantitativeSources)) {
    const {draft} = integratedQuantitativeDraft(name, await readFile(`src/data/${name}.json`));
    for (const scene of draft.scenes) {
      const missing = validateQuantitativeDiagram(scene.diagram, {requireCues: false});
      if (missing.length) {missingScenes++; assert.throws(() => validateQuantitativeDiagram(scene.diagram), /Missing quantitative reveal cues/u);}
    }
  }
  assert.ok(missingScenes >= 3, 'Removed custom reveal cues must remain visible as a production dependency');
});
