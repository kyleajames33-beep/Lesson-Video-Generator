// L2 voiceover v2 patch: rewrite 7 scenes in conversational presenter
// style (same upgrade pattern we used on L1A v1+v2 patches).
//
// Fixes applied across all rewrites:
//   - Open with discourse markers ("OK,", "Alright,", "Here's...")
//   - Strip em-dashes (ElevenLabs honors them inconsistently)
//   - Defuse lists with context phrases instead of bare comma sequences
//   - Replace hyphenated compounds (grams-per-mole, mass-per-mole)
//   - Break parallel rhetorical closes ("X gives you Y. X gives you Y.")
//   - Add natural sentence-to-sentence connectives

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l2-molar-mass.json';

const REWRITES = {
	'hook':
		"OK, here's the problem. Last lesson we got the mole locked in. It's a count of particles, six-point-zero-two-two times ten to the twenty-three of them. But here's the thing. Chemists don't actually count atoms in a lab. They weigh them. And a dozen eggs and a dozen apples both contain twelve items, but they weigh totally different amounts. Same idea for moles. One mole of different substances has different masses. The mass per mole is what we call molar mass. And it's the bridge we've been missing.",

	'marginalia-molar-mass':
		"Molar mass is the bridge between the particle world and the lab world. On one side, moles, a count of particles. On the other side, grams, a mass we can actually measure on a balance. Molar mass connects them. It tells you how many grams one mole weighs. Without it, the mole is just an abstract number you can't really use.",

	'concept':
		"OK, so what is molar mass exactly? It's the mass of exactly one mole of a substance, in grams per mole. And here's the beautiful part. Because the mole was defined using carbon-twelve, the molar mass of any element equals its relative atomic mass straight from the periodic table. Take hydrogen. Atomic mass one-point-zero-zero-eight, so molar mass one-point-zero-zero-eight grams per mole. Same logic. Carbon, twelve-point-zero-one. Oxygen, sixteen-point-zero-zero. The periodic table gives you the answer directly. Think of molar mass like price per kilogram. It tells you the cost of one unit. Where the analogy breaks. Prices change. Molar mass is fixed by the periodic table.",

	'definition':
		"The unit for molar mass is grams per mole. Written as g, mol, to the minus one. This unit is your safety check. When you see those units, you know you're talking about the mass of one mole. Not the mass of your sample. Different thing. Molar mass links the atomic scale, where we count particles, to the lab scale, where we measure grams. It's the conversion factor that makes quantitative chemistry possible.",

	'lab-footage':
		"Here's how this works in a real lab. Nobody counts out six-point-zero-two-two times ten to the twenty-three molecules. That's impossible. Instead, you put a sample on a balance, read the mass in grams. Then use molar mass to turn that mass into moles. Mass on the balance gives you the number you measure. Molar mass turns that number into a chemical amount you can actually use.",

	'formula':
		"OK, here's the formula that ties everything together. m equals n times capital M. Three quantities here. Lowercase m. That's the mass of your sample, in grams. Lowercase n. That's the amount of substance, in moles. And capital M. That's the molar mass, in grams per mole. Now watch the units. Moles times grams per mole. The mole units cancel. You're left with grams. That unit cancellation is your proof that the formula is set up correctly.",

	'summary':
		"OK, let's lock in what we've covered. Five things to take away. First, molar mass is the mass of exactly one mole of a substance. Units, grams per mole. Next, you can read it straight from the periodic table for elements, or add atomic masses for compounds. Use m equals n times M to convert between mass and moles. Don't mix up capital M and lowercase m. Capital M is the molar mass, a fixed property of the substance. Lowercase m is just the mass of your sample. And always check that your units cancel to what you expect. That's the safety net.",
};

const d = JSON.parse(readFileSync(PATH, 'utf8'));
let rewritten = 0;
for (const scene of d.scenes) {
	if (REWRITES[scene.id]) {
		scene.voiceover = scene.voiceover || {};
		scene.voiceover.text = REWRITES[scene.id];
		delete scene.voiceover.audioFile;
		delete scene.captions;
		rewritten++;
	}
}

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log(`Rewrote ${rewritten} L2 scenes in conversational presenter style.`);
