// Wire the new coded lineGraph into the four curve-canonical scenes, replacing
// two AI images and two weak table/empty visuals. revealDelays.diagram is set
// low so the curves draw in while the visual stage is visible.
import {readFileSync, writeFileSync} from 'node:fs';

const edits = [
	{
		file: 'chemistry-y12-m5-l3-collision-theory-equilibrium',
		id: 'concept-approach',
		diagram: {
			type: 'lineGraph', xLabel: 'Time', yLabel: 'Reaction rate',
			series: [
				{label: 'Forward rate', color: 'chem1', points: [[0, 0.92], [0.12, 0.72], [0.28, 0.56], [0.45, 0.45], [0.65, 0.385], [0.82, 0.36], [1, 0.35]]},
				{label: 'Reverse rate', color: 'bio', points: [[0, 0.02], [0.12, 0.16], [0.28, 0.26], [0.45, 0.31], [0.65, 0.34], [0.82, 0.348], [1, 0.35]]},
			],
			hLines: [{y: 0.35, label: 'rates equal'}],
			markers: [{x: 0.66, label: 'equilibrium'}],
		},
	},
	{
		file: 'chemistry-y12-m5-l1-static-dynamic-equilibrium',
		id: 'concept-conditions',
		diagram: {
			type: 'lineGraph', xLabel: 'Time', yLabel: 'Concentration',
			series: [
				{label: 'Reactants', color: 'chem1', points: [[0, 0.9], [0.12, 0.7], [0.28, 0.55], [0.45, 0.46], [0.65, 0.415], [0.82, 0.4], [1, 0.4]]},
				{label: 'Products', color: 'bio', points: [[0, 0.05], [0.12, 0.24], [0.28, 0.38], [0.45, 0.47], [0.65, 0.51], [0.82, 0.52], [1, 0.52]]},
			],
			markers: [{x: 0.66, label: 'constant from here'}],
		},
	},
	{
		file: 'chemistry-y12-m6-l16-titration-curves',
		id: 'concept-four-types',
		dropImage: true,
		diagram: {
			type: 'lineGraph', xLabel: 'Volume of base added', yLabel: 'pH',
			series: [
				{label: 'Strong acid–strong base', color: 'chem1', points: [[0, 0.07], [0.22, 0.11], [0.4, 0.17], [0.47, 0.26], [0.5, 0.5], [0.53, 0.74], [0.6, 0.85], [0.8, 0.9], [1, 0.92]]},
				{label: 'Weak acid–strong base', color: 'bio', points: [[0, 0.2], [0.13, 0.3], [0.25, 0.36], [0.4, 0.43], [0.48, 0.52], [0.52, 0.68], [0.6, 0.8], [0.8, 0.87], [1, 0.89]]},
				{label: 'Strong acid–weak base', color: 'math', points: [[0, 0.07], [0.2, 0.13], [0.38, 0.22], [0.46, 0.3], [0.5, 0.4], [0.54, 0.55], [0.62, 0.66], [0.8, 0.73], [1, 0.76]]},
				{label: 'Weak acid–weak base', color: 'phys', points: [[0, 0.22], [0.25, 0.33], [0.5, 0.5], [0.75, 0.66], [1, 0.76]]},
			],
			markers: [{x: 0.5, label: 'equivalence'}],
		},
	},
	{
		file: 'chemistry-y12-m6-l18-back-conductometric-titration',
		id: 'concept-conductometric',
		dropImage: true,
		diagram: {
			type: 'lineGraph', xLabel: 'Volume of titrant', yLabel: 'Conductivity',
			series: [
				{label: 'Conductivity', color: 'chem1', points: [[0, 0.85], [0.25, 0.5], [0.44, 0.24], [0.5, 0.15], [0.56, 0.24], [0.75, 0.5], [1, 0.78]]},
			],
			markers: [{x: 0.5, label: 'equivalence'}],
		},
	},
];

for (const e of edits) {
	const p = `src/data/${e.file}.json`;
	const d = JSON.parse(readFileSync(p, 'utf8'));
	const s = d.scenes.find((x) => x.id === e.id);
	if (!s) { console.log(`!! ${e.file}: scene ${e.id} not found`); continue; }
	const had = s.image ? `image:${s.image}` : s.diagram ? `diagram:${s.diagram.type}` : '(none)';
	if (e.dropImage) delete s.image;
	s.diagram = e.diagram;
	s.revealDelays = {...(s.revealDelays || {}), diagram: 6};
	writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
	console.log(`${e.file} :: ${e.id}  ${had} -> lineGraph (${e.diagram.series.length} series)`);
}
