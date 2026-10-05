import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {thermochemistrySources, thermochemistryDraft} from './lib/thermochemistry-lessons.mjs';
import {stringFields} from './lib/science-audit.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
import {heatLedgerModel, validateQuantitativeDiagram} from '../src/slides/diagrams/quantitative-models.mjs';

for (const name of Object.keys(thermochemistrySources)) {
  test(`${name}: isolated whole-lesson repair preserves structure, rejects drift and removes stale media/cues`, async () => {
    const bytes = await readFile(`src/data/${name}.json`), original = JSON.parse(bytes);
    const {draft, pacing} = thermochemistryDraft(name, bytes);
    assert.deepEqual(draft.scenes.map((scene) => [scene.id, scene.type, scene.image, scene.diagram?.kind ?? scene.diagram?.type]),
      original.scenes.map((scene) => [scene.id, scene.type, scene.image, scene.diagram?.kind ?? scene.diagram?.type]));
    const visit = (value) => {
      if (!value || typeof value !== 'object') return;
      for (const [key, child] of Object.entries(value)) {
        assert.ok(!/audio|alignment|backgroundMusic/iu.test(key), key);
        assert.ok(!['captions', 'responseHold', 'beats', 'at'].includes(key) && !/(?:At|Beat)$/u.test(key), key);
        visit(child);
      }
    };
    visit(draft);
    for (const scene of draft.scenes) {
      assert.equal(getVoiceoverBudget({text: scene.voiceover.text, durationInFrames: scene.durationInFrames, fps: draft.fps}).status, 'ok');
      if (scene.type === 'quickCheck') assert.ok(pacing.find((item) => item.scene === scene.id).response.minimumThinkingSeconds >= 50);
      if (scene.diagram) assert.doesNotThrow(() => validateQuantitativeDiagram(scene.diagram, {requireCues: false}));
    }
    assert.ok(!stringFields(draft).some(({text}) => text.includes('\u2014')));
    assert.throws(() => thermochemistryDraft(name, Buffer.concat([bytes, Buffer.from(' ')])), /Source changed/u);
  });
}
test('new copy distinguishes named molar basis, reference forms, accounting cycles and biological pathways', async () => {
  const drafts = {};
  for (const name of Object.keys(thermochemistrySources)) drafts[name] = thermochemistryDraft(name, await readFile(`src/data/${name}.json`)).draft;
  const formation = Object.values(drafts).find((draft) => draft.title === 'Enthalpy of Formation');
  assert.match(formation.scenes.find((scene) => scene.id === 'concept').body, /reference states/u);
  assert.ok(formation.scenes.find((scene) => scene.id === 'quick-check').answerSteps.some((text) => text.includes('−285.8 kJ mol⁻¹')));
  const bond = drafts['chemistry-y11-m4-l6-bond-energy'];
  assert.match(bond.scenes.find((scene) => scene.id === 'concept').voiceover.text, /not an observed transition state/u);
  const biological = drafts['chemistry-y11-m4-l9-hess-photosynthesis-respiration'];
  assert.match(biological.scenes.find((scene) => scene.id === 'hook').voiceover.text, /different biochemical pathways/u);
  assert.match(biological.scenes.find((scene) => scene.id === 'quick-check').voiceover.text, /does not prove feasibility/u);
  const comparison = drafts['chemistry-y12-m6-l10-neutralisation-enthalpy-strong-vs-weak'];
  assert.equal(comparison.scenes.find((scene) => scene.id === 'concept-baseline').diagram.props.floor, undefined);
  assert.ok(comparison.scenes.find((scene) => scene.id === 'quick-check').answerSteps.some((text) => text.includes('does not classify strength')));
  assert.ok(comparison.scenes.find((scene) => scene.id === 'concept-ranking').diagram.bars.every((bar) => /illustrative case/u.test(bar.label)));
});
test('independent arithmetic retains guard digits and does not infer acid strength from enthalpy alone', () => {
  assert.equal((436 + 243 - 2 * 432) / 2, -92.5);
  assert.equal((629 - 732) / 2, -51.5);
  assert.equal((-393.5 + 2 * -285.8 - (-74.8)).toFixed(1), '-890.3');
  assert.equal((-(100 * 4.18 * 6.5) / .0500 / 1000).toPrecision(2), '-54');
  assert.equal((-(80 * 4.18 * 6.4) / .0500 / 1000).toPrecision(2), '-43');
  const estimates = [6.8, 6.2, 6.6, 5.9].map((delta) => -(100 * 4.18 * delta) / .0500 / 1000);
  assert.ok(Math.abs(estimates[1] - estimates[0] - 5.016) < 1e-10);
  assert.ok(Math.abs(estimates[2] - estimates[0] - 1.672) < 1e-10);
  assert.ok(Math.abs(estimates[3] - estimates[0] - 7.524) < 1e-10);
  // Hypothetical standard ionisations at the same T: identical ΔH need not give identical Ka.
  const temperature = 298.15, enthalpy = 2000, gasConstant = 8.314462618;
  const ka = (entropy) => Math.exp(-(enthalpy - temperature * entropy) / (gasConstant * temperature));
  assert.ok(ka(-40) > ka(-70));
});
test('heat ledger conserves supplied release/cost values and permits comparisons beyond a reference', () => {
  const steps = [{label: 'reference', kind: 'release', value: 57.3, at: 0}, {label: 'supplied term', kind: 'cost', value: 2.1, at: 20}, {label: 'net', kind: 'net', value: 55.2, at: 40}];
  const model = heatLedgerModel({steps});
  assert.ok(Math.abs(model.blocks[1].top - 55.2) < 1e-10);
  assert.equal(model.blocks[2].bottom, 55.2);
  assert.doesNotThrow(() => heatLedgerModel({reference: {value: 57.3, label: 'comparison'}, markers: [{value: 59, label: 'supplied observation'}]}));
  assert.throws(() => heatLedgerModel({steps: [...steps.slice(0, 2), {...steps[2], value: 54}]}), /balance/u);
});
test('heat ledger rejects unsupported values/geometry and missing final reveal cues', () => {
  const diagram = {type: 'diorama', kind: 'chem12m6HeatLedger', props: {steps: [{label: 'release', kind: 'release', value: 57}]}};
  assert.deepEqual(validateQuantitativeDiagram(diagram, {requireCues: false}), ['steps[0].at']);
  assert.throws(() => validateQuantitativeDiagram(diagram), /Missing/u);
  for (const value of [NaN, Infinity, -1, 61]) assert.throws(() => heatLedgerModel({steps: [{label: 'bad', kind: 'release', value}]}));
  assert.throws(() => heatLedgerModel({markerRange: [62, 40], markers: [{value: 57, label: 'bad range'}]}));
  assert.throws(() => heatLedgerModel({markers: [{value: 70, label: 'outside range'}]}));
  assert.throws(() => heatLedgerModel({steps: [{label: 'release', kind: 'release', value: 5}, {label: 'outside supported sign', kind: 'cost', value: 7}]}));
  assert.throws(() => validateQuantitativeDiagram({...diagram, props: {steps: [{label: 'release', kind: 'release', value: 57, at: -1}]}}, {requireCues: false}));
});
