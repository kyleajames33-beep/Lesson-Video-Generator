// Convert L4 definition scene from hero-word layout (which dominates with
// a giant title and squashes multi-term content into tiny bottom text)
// to the bullets layout, which gives each term its own visual row.
//
// Same fix as L3 definition — multi-term definitions ALWAYS use bullets.

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l4-gases-molar-volume.json';

const d = JSON.parse(readFileSync(PATH, 'utf8'));
const s = d.scenes.find((x) => x.id === 'definition');

s.heading = 'Three terms for gases';
delete s.body;
delete s.secondary;
s.bullets = [
	{text: 'Molar volume (Vₘ): the volume occupied by one mole of any gas, in litres per mole.'},
	{text: 'STP: 0°C and 100 kPa. Vₘ = 22.71 L mol⁻¹. The NESA standard.'},
	{text: 'SATP: 25°C and 100 kPa. Vₘ = 24.8 L mol⁻¹. The NSW HSC default if no conditions are stated.'},
];
s.callout = 'If no conditions are stated, default to 24.8 L mol⁻¹.';

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('L4 definition converted: heading=' + s.heading);
console.log('bullets:', s.bullets.length);
