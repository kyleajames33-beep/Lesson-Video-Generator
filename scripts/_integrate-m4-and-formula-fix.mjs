// Integration patch:
// 1. Convert the 7 mis-used type:'formula' scenes to type:'concept'
//    (FormulaSlide is hardcoded for L1's counting equation; ConceptSlide is
//    generic AND renders coded diagrams). Leaves m2-l1 / m2-l1a as 'formula'
//    (they legitimately ARE the counting-equation lessons).
// 2. Move L12/L13 coded diagrams from their misconception scene (which can't
//    render them) onto the now-concept formula scene (which can).
// 3. L9: revert the definition scene to its image, and host
//    reductionPotentialLadder on the now-concept formula scene instead.

import {readFileSync, writeFileSync} from 'node:fs';

const conceptify = (file) => {
	const path = `src/data/${file}`;
	const d = JSON.parse(readFileSync(path, 'utf8'));
	let changed = 0;
	for (const s of d.scenes) {
		if (s.type === 'formula') { s.type = 'concept'; changed++; }
	}
	writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
	return {d, path, changed};
};

// 1. Convert the 7 misusing lessons.
const SEVEN = [
	'chemistry-y11-m2-l2-molar-mass.json',
	'chemistry-y11-m3-l9-galvanic-cells.json',
	'chemistry-y11-m4-l1-enthalpy-energy-profiles.json',
	'chemistry-y11-m4-l2-calorimetry-combustion.json',
	'chemistry-y11-m4-l7-enthalpy-of-formation.json',
	'chemistry-y11-m4-l12-calculating-entropy.json',
	'chemistry-y11-m4-l13-gibbs-free-energy.json',
];
for (const f of SEVEN) {
	const {changed} = conceptify(f);
	console.log(`conceptify ${f}: ${changed} formula scene(s) -> concept`);
}

// 2. L12/L13: move diagram misconception -> formula(now concept).
for (const [file, dia] of [
	['chemistry-y11-m4-l12-calculating-entropy.json', 'entropyDisorder'],
	['chemistry-y11-m4-l13-gibbs-free-energy.json', 'gibbsSpontaneity'],
]) {
	const path = `src/data/${file}`;
	const d = JSON.parse(readFileSync(path, 'utf8'));
	const misc = d.scenes.find((s) => s.type === 'misconception');
	const formula = d.scenes.find((s) => s.id === 'formula');
	if (misc?.diagram) delete misc.diagram;
	if (formula) formula.diagram = {type: dia};
	writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
	console.log(`${file}: moved ${dia} misconception -> formula(concept)`);
}

// 3. L9: revert definition to image; put reductionPotentialLadder on formula(concept).
{
	const path = 'src/data/chemistry-y11-m3-l9-galvanic-cells.json';
	const d = JSON.parse(readFileSync(path, 'utf8'));
	const def = d.scenes.find((s) => s.id === 'definition');
	if (def) { delete def.diagram; def.image = 'l9DefinitionReductionPotentials'; }
	const formula = d.scenes.find((s) => s.id === 'formula');
	if (formula) formula.diagram = {type: 'reductionPotentialLadder'};
	writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
	console.log('L9: definition -> image; reductionPotentialLadder -> formula(concept)');
}
