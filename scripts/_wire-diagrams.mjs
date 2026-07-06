// Reconcile L3 + L4 visual wiring after introducing coded diagrams.
//
// L4:
//   hook        — drop dead dozenMole diagram (HookSlide ignores diagrams)
//   concept     — image l4ThreeFlasksSameVolume -> coded gasVolumeComparison
//   formula     — drop l4FormulaTriangle image (bullets teach rearrangements)
//   worked-ex-2 — keep l4TwoConditionsCompare image (WorkedExampleSlide renders images)
//
// L3:
//   formula (four-step concept) — add coded massBreakdown diagram
//   worked-example              — ensure no diagram (slide can't render them)

import {readFileSync, writeFileSync} from 'node:fs';

function patch(path, fn) {
	const d = JSON.parse(readFileSync(path, 'utf8'));
	fn(d);
	writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
}

const get = (d, id) => d.scenes.find((s) => s.id === id);

// ---- L4 ----
patch('src/data/chemistry-y11-m2-l4-gases-molar-volume.json', (d) => {
	const hook = get(d, 'hook');
	if (hook?.diagram) delete hook.diagram; // hook slide ignores diagrams

	const concept = get(d, 'concept');
	delete concept.image;
	concept.diagram = {type: 'gasVolumeComparison'};

	const formula = get(d, 'formula');
	delete formula.image; // bullets carry the rearrangements

	// worked-example-2 keeps its image (renders fine on WorkedExampleSlide)
});

// ---- L3 ----
patch('src/data/chemistry-y11-m2-l3-empirical-molecular-formulas.json', (d) => {
	const fourStep = get(d, 'formula'); // type concept, renders diagrams
	delete fourStep.image;
	fourStep.diagram = {type: 'massBreakdown'};

	const we = get(d, 'worked-example');
	if (we?.diagram) delete we.diagram; // workedExample slide can't render diagrams
});

console.log('Wired. Verifying L4:');
const l4 = JSON.parse(readFileSync('src/data/chemistry-y11-m2-l4-gases-molar-volume.json', 'utf8'));
for (const s of l4.scenes) {
	if (s.image || s.diagram) console.log('  L4', s.id.padEnd(18), 'image=' + (s.image || '-'), 'diagram=' + (s.diagram ? s.diagram.type : '-'), 'type=' + s.type);
}
console.log('Verifying L3:');
const l3 = JSON.parse(readFileSync('src/data/chemistry-y11-m2-l3-empirical-molecular-formulas.json', 'utf8'));
for (const s of l3.scenes) {
	if (s.image || s.diagram) console.log('  L3', s.id.padEnd(18), 'image=' + (s.image || '-'), 'diagram=' + (s.diagram ? s.diagram.type : '-'), 'type=' + s.type);
}
