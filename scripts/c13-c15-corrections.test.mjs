// Bounded source regression tests for the C13/C15 correction candidate.
// No audio generation, rendering or network calls. This is not a release gate.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
const read = p => readFileSync(new URL('../' + p, import.meta.url), 'utf8');
const s3 = read('src/explainer/lessons/chem-m5-c13/s3.tsx');
const s4 = read('src/explainer/lessons/chem-m5-c13/s4.tsx');
const helper = read('src/explainer/lessons/chem-m5-c14/parts.tsx');
const c15 = read('src/explainer/lessons/chem-m5-c15/s4.tsx');
const status = JSON.parse(read('docs/production/claude-pm/checks/c13-c15-correction-status.json'));
const count = ions => Object.fromEntries([...new Set(ions.map(x => x.ion))].map(ion => [ion, ions.filter(x => x.ion === ion).length]));
const evalExpr = (expr, context) => vm.runInNewContext('(' + expr + ')', context);
test('C13 filtrate retains three neutral KNO3 pairs and adds one AgNO3 pair', () => {
  const base = evalExpr(s3.match(/export const FILT_BASE: LensIon\[\] = (\[.*?\]);/s)[1], {});
  const expr = s3.match(/const ions: LensIon\[\] = (\[.*?\]);/s)[1];
  const ions = evalExpr(expr, {FILT_BASE: base, grey: 0.75, ag: 1});
  assert.deepEqual(count(ions), {'K^{+}': 3, 'NO_3^{-}': 4, 'Ag^{+}': 1});
});
test('C13 excess NaCl enters as two neutral pairs on the chloride cue', () => {
  const expr = s4.match(/const ions: LensIon\[\] = (\[.*?\]);/s)[1];
  const ions = evalExpr(expr, {grey: 0.75, a: 1, cl: 1});
  assert.deepEqual(count(ions), {'Na^{+}': 5, 'NO_3^{-}': 3, 'Cl^{-}': 2});
  const before = evalExpr(expr, {grey: 0.75, a: 1, cl: 0}).filter(x => x.o > 0);
  assert.deepEqual(count(before), {'Na^{+}': 3, 'NO_3^{-}': 3});
});
// Execute the actual rain loop, replacing only JSX LIon creation with plain data.
const rainLoop = helper.slice(helper.indexOf('\tif (rain) {'), helper.indexOf('\tconst speckEls:'))
  .replace(/rainIons\.push\(<LIon key=\{(.*?)\} x=\{(.*?)\} y=\{(.*?)\} ion=\{(.*?)\}[^\n]*?\/>\);/g,
    'rainIons.push({key: $1, x: $2, y: $3, ion: $4});');
const rainAt = (rain, f) => vm.runInNewContext(rainLoop + '\nrainIons;', {
  rain, f, rainIons: [], cx: 0, cy: 0, r: 200, scale: 0.7,
  rng: () => () => 0.5, drift: () => [0, 0], smooth: x => x,
  clamp01: x => Math.max(0, Math.min(1, x)),
});
test('C15 caller asks for two sodium partners and produces five sulfate plus ten sodium', () => {
  const rain = evalExpr(c15.match(/rain=\{(\{at: 4, ion: 'SO_4\^\{2-\}'.*?\})\}/)[1], {});
  assert.equal(rain.partnerCount, 2);
  assert.equal(rainAt(rain, 3).length, 0);
  assert.deepEqual(count(rainAt(rain, 4)), {'SO_4^{2-}': 1, 'Na^{+}': 2});
  const ions = rainAt(rain, 62);
  assert.deepEqual(count(ions), {'SO_4^{2-}': 5, 'Na^{+}': 10});
  assert.equal(new Set(ions.map(x => x.key)).size, 15);
  assert.notEqual(ions[1].x, ions[2].x);
});
test('shared rain helper preserves default one partner, explicit one, and no-partner callers', () => {
  const rain = {at: 4, ion: 'Cl^{-}', n: 5, every: 8, partner: 'Na^{+}'};
  assert.deepEqual(count(rainAt(rain, 62)), {'Cl^{-}': 5, 'Na^{+}': 5});
  assert.equal(JSON.stringify(rainAt(rain, 62)), JSON.stringify(rainAt({...rain, partnerCount: 1}, 62)));
  assert.deepEqual(count(rainAt({...rain, partner: undefined}, 62)), {'Cl^{-}': 5});
});
test('pending narration stays unwired; recorded source, alignment and renderer config are unchanged', () => {
  assert.match(status.status, /narration-regeneration-pending/);
  assert.match(status.status, /release-held/);
  for (const [path, hash] of Object.entries(status.preservedSha256)) {
    // Git checkouts may use CRLF; stored base source is LF.
    assert.equal(createHash('sha256').update(read(path).replace(/\r\n/g, '\n')).digest('hex'), hash, path);
  }
  const n = status.narration;
  const scene = JSON.parse(read(n.sourcePath)).scenes.find(x => x.id === n.segment);
  assert.equal(scene.voiceover.text, n.oldText);
  assert.notEqual(n.oldText, n.proposedText);
  assert.ok(n.proposedText.includes('Copper(II) hydroxide is insoluble, so it precipitates'));
  assert.ok(s4.includes(n.currentCue));
  assert.ok(!s4.includes(n.proposedCue));
  assert.ok(n.applyTogetherAfterApproval.some(x => x.includes('K16.hyd')));
});
