// Confidence-check phrases for the M2 L1 teaching milestones. Phrased as
// action verbs so students can imagine doing the thing — "explain the
// scale of Avogadro's number" beats "understand Avogadro's number".
import {readFileSync, writeFileSync} from 'node:fs';

const CHECKS = {
	// L1A — concept-building milestones
	'definition':         "state what one mole is and what 6.022 × 10²³ counts.",
	'concept-carbon12':   "explain why a mole was defined using carbon-12.",
	'misconception-nvn':  "tell N from n in a question without guessing.",
	'formula':            "rearrange N = n × Nₐ to solve for any quantity.",
	// L1B — application milestones
	'worked-example-1':   "convert moles into number of particles.",
	'worked-example-2':   "convert number of particles into moles.",
	'misconception-mistakes': "spot the two N-vs-n errors before substituting.",
	'summary':            "apply the mole concept across every Module 2 question.",
};

for (const file of [
	'src/data/chemistry-y11-m2-l1a-mole-understanding.json',
	'src/data/chemistry-y11-m2-l1b-mole-applying.json',
]) {
	const d = JSON.parse(readFileSync(file, 'utf8'));
	let n = 0;
	for (const scene of d.scenes) {
		if (CHECKS[scene.id]) {
			scene.confidenceCheck = CHECKS[scene.id];
			n++;
		}
	}
	writeFileSync(file, JSON.stringify(d, null, 2) + '\n');
	console.log(`Added ${n} confidence checks to ${file}`);
}
