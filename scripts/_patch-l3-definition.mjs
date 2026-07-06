// Convert L3 definition scene from hero-word layout to bullets layout
// (multi-term key-terms list). Routes through DefinitionListLayout
// instead of the single-hero-word layout, which gives each term its
// own visual row.

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l3-empirical-molecular-formulas.json';

const d = JSON.parse(readFileSync(PATH, 'utf8'));
const s = d.scenes.find((x) => x.id === 'definition');

s.heading = 'Three terms to lock in';
delete s.body;
delete s.secondary;
s.bullets = [
	{text: 'Percentage composition: the mass of each element as a percentage of the total mass.'},
	{text: 'Empirical formula: the simplest whole-number ratio of atoms.'},
	{text: 'Molecular formula: the actual count of each atom per molecule.'},
];
s.callout = 'Percentages add to one hundred. Ratios reduce to whole numbers.';

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('OK — heading:', s.heading);
console.log('OK — bullets:', s.bullets.length);
console.log('OK — body removed:', !s.body);
console.log('OK — secondary removed:', !s.secondary);
