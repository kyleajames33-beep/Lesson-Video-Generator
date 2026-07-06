// One-shot: hand-tuned recap seeds for M2 L1A + L1B. These are the values
// that flow forward as "previously…" callbacks at the top of the NEXT
// scene, so each one must read as a complete remembered fact.

import {readFileSync, writeFileSync} from 'node:fs';

const TUNED = {
	// L1A
	'hook':              "The mole is a counting shortcut for atoms.",
	'concept-problem':   "Atoms are too small to weigh — count them in groups.",
	'definition':        "1 mole = 6.022 × 10²³ particles. That's Avogadro's number.",
	'concept-scale':     "Avogadro's number is astronomically large.",
	'concept-carbon12':  "1 mole of carbon-12 weighs exactly 12 g.",
	'misconception-nvn': "Capital N counts particles. Lowercase n counts moles.",
	'formula':           "N = n × Nₐ. Rearrange to find any of the three.",
	// L1B
	'recap':             "N = n × Nₐ links count, moles, and Avogadro.",
	'worked-example-1':  "Multiply by Nₐ to convert moles → number of particles.",
	'worked-example-2':  "Divide by Nₐ to convert particles → moles.",
	'misconception-mistakes': "Always label N vs n, and track units to mol⁻¹.",
	'quick-check':       "0.75 mol × Nₐ = 4.52 × 10²³ formula units.",
	'summary':           "The mole bridges atoms to grams via Nₐ and the periodic table.",
};

for (const file of [
	'src/data/chemistry-y11-m2-l1a-mole-understanding.json',
	'src/data/chemistry-y11-m2-l1b-mole-applying.json',
]) {
	const d = JSON.parse(readFileSync(file, 'utf8'));
	let n = 0;
	for (const scene of d.scenes) {
		if (TUNED[scene.id]) {
			scene.recapSeed = TUNED[scene.id];
			n++;
		}
	}
	writeFileSync(file, JSON.stringify(d, null, 2) + '\n');
	console.log(`Tuned ${n} recaps in ${file}`);
}
