// Swap ChatGPT image refs for coded diagrams on the concept scenes of
// L6, L10, L13, L17, L18 — removing 5 image dependencies. The coded
// diagrams render deterministically and animate with the narration.

import {readFileSync, writeFileSync} from 'node:fs';

const WIRING = {
	'chemistry-y11-m2-l6-concentration.json': {sceneId: 'concept', diagram: 'concentrationCompare'},
	'chemistry-y11-m2-l10-volumetric-analysis-titration.json': {sceneId: 'concept', diagram: 'titrationSetup'},
	'chemistry-y11-m2-l13-limiting-reagents.json': {sceneId: 'concept', diagram: 'limitingExcess'},
	'chemistry-y11-m2-l17-back-calculations.json': {sceneId: 'concept', diagram: 'titrationSetup'},
	'chemistry-y11-m2-l18-working-scientifically.json': {sceneId: 'concept', diagram: 'errorDartboard'},
};

for (const [file, {sceneId, diagram}] of Object.entries(WIRING)) {
	const path = `src/data/${file}`;
	const d = JSON.parse(readFileSync(path, 'utf8'));
	const s = d.scenes.find((x) => x.id === sceneId);
	if (!s) {
		console.log(`SKIP ${file}: no scene ${sceneId}`);
		continue;
	}
	const had = s.image || '(none)';
	delete s.image;
	s.diagram = {type: diagram};
	writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
	console.log(`OK ${file}: ${sceneId} image ${had} -> diagram ${diagram}`);
}
