import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {calculate, numericChecks, auditCatalogue, hash} from './lib/science-audit.mjs';
import {sources, correctedDraft, removeMediaAndCues} from './lib/science-corrections.mjs';

test('restricted arithmetic respects precedence, signs, parentheses and scientific multiplication symbols', () => {
  assert.ok(Math.abs(calculate('40.08 + 2 × (2 × 1.008 + 30.97 + 4 × 15.999)') - 234.044) < 1e-10);
  assert.equal(calculate('-(2 + 3) ÷ 2 + 4'), 1.5);
});
test('arithmetic rejects executable content, ambiguous tokens, nonfinite values and malformed expressions', () => {
  for (const text of ['process.exit()', '2**3', '1/0', '1..2+3', '2(3)', '1e3', '(2+3', '', '1;2', '2+']) {
    assert.throws(() => calculate(text), undefined, text);
  }
});
test('decimal rounding checks distinguish a compatible approximation from a wrong final digit', () => {
  assert.equal(numericChecks('2.00 × 18.02 = 36.0 g')[0].compatible, true);
  assert.equal(numericChecks('40.08 + 193.96 = 234.05 g')[0].compatible, false);
  assert.equal(numericChecks('80 ÷ 12.01 ≈ 6.67 mol')[0].compatible, false);
  assert.equal(numericChecks('80 ÷ 12.01 ≈ 6.66 mol')[0].compatible, true);
});
test('scanner avoids partial thousands separators, implicit percent conversion and scientific notation', () => {
  assert.deepEqual(numericChecks('8,500 ÷ 5,000,000 × 100 = 0.17%'), []);
  assert.deepEqual(numericChecks('0.041 ÷ 0.500 = 8.2%'), []);
  assert.deepEqual(numericChecks('3 × 2 = 6.0 × 10⁻³'), []);
  assert.deepEqual(numericChecks('2 × 3 = 6'), []);
  assert.deepEqual(numericChecks('[0.003950 × 100.1 × 1000] ÷ 620 × 100 ≈ 63.7734%'), []);
  assert.deepEqual(numericChecks('mass ÷ 620 × 100 ≈ 63.7734%'), []);
  assert.equal(numericChecks('395 ÷ 620 × 100 = 63.8%')[0].compatible, false);
});
test('independent limiting-reagent calculations agree with draft results and capacity distinction', () => {
  const sodium = 10 / 22.99;
  const chlorine = 20 / (2 * 35.45);
  assert.ok(sodium / 2 < chlorine);
  assert.equal((sodium * 58.44).toFixed(1), '25.4');
  assert.equal(((chlorine - sodium / 2) * 70.90).toFixed(2), '4.58');
  assert.equal((2 * (32 / 31.998) * 18.015).toFixed(1), '36.0');
  assert.ok(Math.abs((4 / 2.016 / 2) / (16 / 31.998) - 1.9840029761904763) < 1e-12);
  assert.ok(Math.abs((4 / 2.016) / (16 / 31.998) - 3.9680059523809526) < 1e-12);
});
test('media removal preserves scientific content and geometry but removes stale timing and media references', () => {
  const cleaned = removeMediaAndCues({voiceover: {text: 'New text', audioFile: 'old.mp3'}, captions: [{text: 'Old'}],
    responseHold: {startFrame: 30, endFrame: 60}, durationInFrames: 100,
    diagram: {type: 'diorama', delay: 30, props: {at: {build: 100}, optimum: 40, notes: [{text: 'note', at: 90, x: 20}]}}});
  assert.deepEqual(cleaned, {voiceover: {text: 'New text'}, durationInFrames: 100,
    diagram: {type: 'diorama', props: {optimum: 40, notes: [{text: 'note', x: 20}]}}});
});
for (const name of Object.keys(sources)) {
  test(`${name}: isolated corrections preserve scenes/assets, invalidate media and reject changed source`, async () => {
    const bytes = await readFile(`src/data/${name}.json`);
    const original = JSON.parse(bytes);
    const {draft, changes} = correctedDraft(name, bytes);
    assert.equal(hash(await readFile(`src/data/${name}.json`)), hash(bytes));
    assert.deepEqual(draft.scenes.map((scene) => [scene.id, scene.type, scene.image, scene.diagram?.type, scene.diagram?.kind]),
      original.scenes.map((scene) => [scene.id, scene.type, scene.image, scene.diagram?.type, scene.diagram?.kind]));
    assert.ok(changes.length > 10);
    assert.ok(!JSON.stringify(draft).includes('\u2014'));
    assert.ok(!JSON.stringify(draft).includes('audioFile'));
    assert.ok(!JSON.stringify(draft).includes('revealDelays'));
    assert.ok(!JSON.stringify(draft).includes('captions'));
    assert.ok(draft.scenes.filter((scene) => scene.voiceover).every((scene) =>
      scene.voiceover.text !== original.scenes.find((item) => item.id === scene.id).voiceover?.text));
    assert.throws(() => correctedDraft(name, Buffer.concat([bytes, Buffer.from(' ')])), /Source changed/u);
  });
}
test('catalogue audit records actual source hashes, scene locations and diagnostic dispositions', async () => {
  const audit = await auditCatalogue(process.cwd());
  assert.ok(audit.totals.lessons > 0);
  assert.equal(audit.totals.lessons, audit.lessons.length);
  const chemistry = audit.lessons.find((lesson) => lesson.file.endsWith('chemistry-y11-m2-l2-molar-mass.json'));
  assert.equal(chemistry.sourceHash, hash(await readFile(chemistry.file)));
  assert.ok(chemistry.findings.some((finding) => finding.rule === 'numeric-equality' && finding.scene === 'worked-example'));
  assert.ok(audit.lessons.flatMap((lesson) => lesson.findings).every((finding) => finding.disposition === 'context-review-required'));
});
