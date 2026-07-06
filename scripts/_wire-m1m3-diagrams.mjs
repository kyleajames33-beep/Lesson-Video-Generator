// Wire the 3 new M1/M3 coded diagrams into their best-fit scenes,
// replacing the image refs. Visual-only (audio-safe).
import {readFileSync, writeFileSync} from 'node:fs';

const SWAPS = [
	{file: 'chemistry-y11-m1-l14-isotopes-relative-atomic-mass.json', sceneId: 'concept-isotopes', diagram: 'isotopeAtoms'},
	{file: 'chemistry-y11-m1-l16-electron-configuration-subshells.json', sceneId: 'formula', diagram: 'aufbauStaircase'},
	{file: 'chemistry-y11-m3-l9-galvanic-cells.json', sceneId: 'definition', diagram: 'reductionPotentialLadder'},
];

for (const {file, sceneId, diagram} of SWAPS) {
	const path = `src/data/${file}`;
	const d = JSON.parse(readFileSync(path, 'utf8'));
	const s = d.scenes.find((x) => x.id === sceneId);
	if (!s) { console.log(`MISS ${file} :: ${sceneId}`); continue; }
	const had = s.image || '(none)';
	delete s.image;
	s.diagram = {type: diagram};
	writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
	console.log(`OK ${file.replace('chemistry-y11-', '').replace('.json', '')} :: ${sceneId}: image ${had} -> diagram ${diagram}`);
}
