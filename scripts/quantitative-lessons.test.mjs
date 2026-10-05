import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {hash, numericChecks, stringFields} from './lib/science-audit.mjs';
import {quantitativeSources} from './lib/quantitative-corrections.mjs';
import {integratedQuantitativeDraft} from './lib/quantitative-lessons.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';

test('independent additional worked examples retain guard digits and the stated reporting precision', () => {
  const empiricalMass = 12.01 + 2 * 1.008 + 16.00;
  assert.equal(empiricalMass.toFixed(3), '30.026');
  assert.equal((180 / empiricalMass).toFixed(5), '5.99480');
  const sulfateMass = 137.33 + 32.06 + 4 * 15.999;
  assert.equal(sulfateMass.toFixed(3), '233.386');
  assert.equal((0.4660 / sulfateMass / 0.2500).toPrecision(4), '0.007987');
  assert.equal((2.330 / sulfateMass).toPrecision(4), '0.009983');
  const neutralisation = -(100 * 4.18 * (28.0 - 21.4) / 1000) / 0.0500;
  assert.equal(neutralisation.toPrecision(2), '-55');
  const coolingHeat = (100.0 + 4.00) * 4.18 * (17.6 - 21.0);
  assert.ok(coolingHeat < 0);
  const dissolution = -coolingHeat / 1000 / (4.00 / 80.04);
  assert.equal(dissolution.toPrecision(2), '30');
  assert.equal((Math.abs(-412 - (-726)) / 726 * 100).toFixed(1), '43.3');
  assert.ok(-412 > -726 && Math.abs(-412) < Math.abs(-726));
});

const geometry = (value) => {
  if (Array.isArray(value)) return value.map(geometry);
  if (!value || typeof value !== 'object') return {};
  const keep = new Set(['x', 'y', 'w', 'h', 'e', 'width', 'height', 'labelE', 'dir', 'mode', 'from', 'to', 'key', 'icon']);
  return Object.fromEntries(Object.entries(value).filter(([key, child]) => keep.has(key) || child && typeof child === 'object')
    .filter(([key]) => !['beats', 'at', 'revealDelays'].includes(key)).map(([key, child]) => [key, child && typeof child === 'object' ? geometry(child) : child]));
};

for (const name of Object.keys(quantitativeSources)) {
  test(`${name}: integrated draft retains scene structure, invalidates media and supplies separate response planning`, async () => {
    const bytes = await readFile(`src/data/${name}.json`), original = JSON.parse(bytes);
    const {draft, pacing, changes} = integratedQuantitativeDraft(name, bytes);
    assert.equal(hash(await readFile(`src/data/${name}.json`)), quantitativeSources[name]);
    assert.deepEqual(draft.scenes.map((scene) => [scene.id, scene.type, scene.image, scene.diagram?.type, scene.diagram?.kind]),
      original.scenes.map((scene) => [scene.id, scene.type, scene.image, scene.diagram?.type, scene.diagram?.kind]));
    for (const scene of draft.scenes) {
      const source = original.scenes.find((item) => item.id === scene.id);
      if (source.voiceover) assert.notEqual(scene.voiceover?.text, source.voiceover.text);
      if (scene.diagram?.props?.panels) assert.deepEqual(geometry(scene.diagram.props.panels), geometry(source.diagram.props.panels));
      assert.equal(getVoiceoverBudget({text: scene.voiceover?.text ?? '', durationInFrames: scene.durationInFrames, fps: draft.fps}).status, 'ok');
      const plan = pacing.find((item) => item.scene === scene.id);
      assert.equal(plan.proposedFrames, scene.durationInFrames);
      if (scene.type === 'quickCheck') {
        assert.ok(plan.response.minimumThinkingSeconds > 0);
        assert.ok(plan.response.promptText.length > 0 && plan.response.answerText.length > 0);
        assert.equal(scene.voiceover.text, `${plan.response.promptText} ${plan.response.answerText}`);
        assert.equal(scene.responseHold, undefined, 'Unmeasured silence must not be presented as a final boundary');
      }
    }
    const text = JSON.stringify(draft);
    for (const forbidden of ['audioFile', 'alignment', 'captions', 'introVoiceover', 'revealDelays', 'productionNotes', 'barsAt', 'beats', '\u2014']) assert.ok(!text.includes(forbidden), forbidden);
    const incompatible = stringFields(draft).flatMap(({text}) => numericChecks(text)).filter((check) => !check.compatible);
    assert.deepEqual(incompatible, []);
    assert.ok(changes.length > 20);
    assert.throws(() => integratedQuantitativeDraft(name, Buffer.concat([bytes, Buffer.from(' ')])), /Source changed/u);
  });
}

test('neutralisation whole-lesson copy removes the universal 1:1 water shortcut', async () => {
  const bytes = await readFile('src/data/chemistry-y11-m4-l3-calorimetry-neutralisation.json');
  const {draft} = integratedQuantitativeDraft('chemistry-y11-m4-l3-calorimetry-neutralisation', bytes);
  assert.ok(!JSON.stringify(draft).includes('c × V of limiting reactant'));
  assert.match(draft.scenes.find((scene) => scene.id === 'concept').voiceover.text, /balanced equation/u);
  assert.match(draft.scenes.find((scene) => scene.id === 'quick-check').answerSteps.join(' '), /0.100 mol H₂O/u);
});
test('carbonate back-titration proposal explicitly bounds dissolved CO2 interference in explanation and both questions', async () => {
  const name = 'chemistry-y12-m6-l18-back-conductometric-titration';
  const {draft, pacing} = integratedQuantitativeDraft(name, await readFile(`src/data/${name}.json`));
  for (const id of ['concept-back', 'worked-example', 'quick-check']) {
    const scene = draft.scenes.find(scene => scene.id === id);
    assert.match(scene.voiceover.text, /carbon dioxide/iu);
    assert.match(scene.voiceover.text, /without losing acid/u);
    assert.match(scene.voiceover.text, /does not contribute to the sodium hydroxide titre/u);
    if (scene.question) assert.match(scene.question, /CO₂ has been removed without acid loss/u);
  }
  const response = pacing.find(scene => scene.scene === 'quick-check').response;
  assert.match(response.promptText, /carbon dioxide/iu);
  assert.equal(draft.scenes.find(scene => scene.id === 'quick-check').voiceover.text, `${response.promptText} ${response.answerText}`);
  assert.match(draft.scenes.find(scene => scene.id === 'summary').points.join(' '), /CO₂/u);
});
