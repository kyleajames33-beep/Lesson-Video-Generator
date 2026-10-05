import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {buildPilotPackage} from './prepare-molar-mass-pilot-package.mjs';

const protocol = readFileSync(new URL('../docs/research/pilot-protocol.md', import.meta.url), 'utf8');
const voice = {voiceId: 'fixture-voice', voiceName: 'Simon', modelId: 'fixture-model'};

test('comparison varies only the middle speech while keeping the same held response and feedback', () => {
  const p = buildPilotPackage(protocol, voice);
  const [a, b] = p.variants;
  for (const id of ['introduction', 'prompt', 'feedback', 'response-hold']) {
    assert.deepEqual(a.segments.find(s => s.id === id), b.segments.find(s => s.id === id));
  }
  assert.notEqual(a.segments[1].text, b.segments[1].text);
  assert.equal(a.segments[3].durationFrames, p.controls.fps * a.segments[3].durationSeconds);
  assert.equal(a.segments[3].answerVisible, false);
  for (const v of p.variants) {
    assert.equal(v.render, null);
    for (const s of v.segments.filter(s => s.kind === 'speech')) assert.equal(s.selectedAudio, null);
  }
});

test('source changes cannot silently create mismatched or incomplete comparison scripts', () => {
  assert.throws(() => buildPilotPackage(protocol.replace('**Common feedback:**', '**Removed:**'), voice), /Missing source marker/);
  assert.throws(() => buildPilotPackage(protocol.replace('Each mole contributes', 'Additional '.repeat(12) + 'Each mole contributes'), voice), /word-matched/);
  assert.throws(() => buildPilotPackage(protocol.replace('Molar mass is mass per mole.', 'Molar mass' + String.fromCodePoint(0x2014) + 'mass per mole.'), voice), /prohibited punctuation/);
});

test('transfer answers follow supplied values and do not reuse the prompted sample', () => {
  const p = buildPilotPackage(protocol, voice);
  for (const form of p.assessment.forms) {
    assert.equal(form.primaryMassG / form.carbonMolarMass, Number(form.primaryAmountMol));
    // Exact supplied decimals avoid binary representation of the 6.005 tie.
    const atomicHundredths = Math.round(form.carbonMolarMass * 100);
    const moleThousandths = Math.round(Number(form.oppositeAmountMol) * 1000);
    const reportedCents = Math.floor((atomicHundredths * moleThousandths + 500) / 1000);
    assert.equal((reportedCents / 100).toFixed(2), form.oppositeMassG);
    assert.notEqual(form.primaryMassG, p.suppliedValues.promptMassG);
  }
});
