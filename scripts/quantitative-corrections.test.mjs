import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {hash, numericChecks, stringFields} from './lib/science-audit.mjs';
import {quantitativeSources, quantitativeRevision} from './lib/quantitative-corrections.mjs';

test('independent chemical amounts, heat balances and rounding agree with the selected proposals', () => {
  assert.equal((80 / 12.01).toFixed(2), '6.66');
  assert.equal((12.01 + 3 * 1.008).toFixed(2), '15.03');
  assert.equal(Math.round(30 / (12.01 + 3 * 1.008)), 2);
  const chloride = 1.435 * 35.453 / (107.87 + 35.453);
  assert.equal(chloride.toPrecision(4), '0.3550');
  assert.equal((chloride * 1000 / 0.5000).toPrecision(4), '709.9');
  const combustion = -(200.0 * 4.18 * (31.2 - 19.5) / 1000) / (0.72 / 46.07);
  assert.equal(combustion.toPrecision(2), '-6.3e+2');
  assert.equal((75.0 * 4.18 * 9.2 / 1000).toPrecision(2), '2.9');
  const solutionMass = 100.0 + 5.00;
  const dissolution = -(solutionMass * 4.18 * 9.5 / 1000) / (5.00 / 110.98);
  assert.equal(dissolution.toPrecision(2), '-93');
  assert.notEqual(dissolution.toPrecision(2), (dissolution * 100 / solutionMass).toPrecision(2));
  const carbonateMg = (0.500 * 0.02500 - 0.250 * 0.01840) / 2 * 100.1 * 1000;
  assert.equal(carbonateMg.toPrecision(3), '395');
  assert.equal((carbonateMg / 620 * 100).toPrecision(3), '63.8');
  assert.notEqual((395 / 620 * 100).toPrecision(3), '63.8');
});

for (const name of Object.keys(quantitativeSources)) {
  test(`${name}: proposal preserves the selected scene, invalidates media and refuses source drift`, async () => {
    const file = `src/data/${name}.json`, bytes = await readFile(file), original = JSON.parse(bytes);
    const proposal = quantitativeRevision(name, bytes), before = original.scenes.find((scene) => scene.id === proposal.scene.id);
    assert.equal(hash(await readFile(file)), quantitativeSources[name]);
    assert.deepEqual([proposal.scene.id, proposal.scene.type, proposal.scene.image, proposal.scene.diagram?.kind],
      [before.id, before.type, before.image, before.diagram?.kind]);
    assert.equal(proposal.scene.durationInFrames, before.durationInFrames);
    assert.notEqual(proposal.scene.voiceover.text, before.voiceover.text);
    assert.deepEqual(Object.keys(proposal.scene.voiceover), ['text']);
    assert.ok(proposal.changes.some((change) => change.field === '$.voiceover.text'));
    const serialised = JSON.stringify(proposal.scene);
    for (const forbidden of ['audioFile', 'alignment', 'captions', 'revealDelays', '\u2014']) assert.ok(!serialised.includes(forbidden));
    assert.throws(() => quantitativeRevision(name, Buffer.concat([bytes, Buffer.from(' ')])), /Source changed/u);
    const incompatible = stringFields(proposal.scene).flatMap(({text}) => numericChecks(text)).filter((check) => !check.compatible);
    assert.deepEqual(incompatible, [], 'No contradictory displayed decimal equalities');
  });
}
