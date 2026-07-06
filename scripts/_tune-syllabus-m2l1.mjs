// Map each scene to the syllabus dot point it best addresses.
// L1A first dot points cover "using the mole as a counting unit",
// later ones move into "relating amount via Avogadro's constant".
import {readFileSync, writeFileSync} from 'node:fs';

const L1A = {
	hook: 0,
	'concept-problem': 0,
	definition: 0,
	'concept-scale': 0,
	'concept-carbon12': 0,
	'misconception-nvn': 1,
	formula: 1,
};

const L1B = {
	recap: 1,
	'worked-example-1': 1,
	'worked-example-2': 1,
	'misconception-mistakes': 1,
	'quick-check': 1,
	summary: 1,
};

for (const [file, map] of [
	['src/data/chemistry-y11-m2-l1a-mole-understanding.json', L1A],
	['src/data/chemistry-y11-m2-l1b-mole-applying.json', L1B],
]) {
	const d = JSON.parse(readFileSync(file, 'utf8'));
	let n = 0;
	for (const scene of d.scenes) {
		if (map[scene.id] !== undefined) {
			scene.syllabusDotPointIndex = map[scene.id];
			n++;
		}
	}
	writeFileSync(file, JSON.stringify(d, null, 2) + '\n');
	console.log(`Set syllabus index on ${n} scenes in ${file}`);
}
