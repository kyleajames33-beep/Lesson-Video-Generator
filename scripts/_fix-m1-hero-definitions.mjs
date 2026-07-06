// Convert the 4 M1 definition scenes flagged by sweep-lessons from the
// hero-word layout (giant comma-list heading, squashed multi-term text)
// to the bullets layout. Visual-only: voiceover.text is NOT touched, so
// existing audio + captions stay valid. Bullets are distilled from the
// existing body/secondary so they match what the narrator already says.
//
// After this, re-run auto-sync-reveals + auto-sync-bullets on each so the
// bullets land against the existing alignment data (no regen needed).

import {readFileSync, writeFileSync} from 'node:fs';

const FIXES = {
	'chemistry-y11-m1-l7-periodic-trends.json': {
		heading: 'Three periodic trends',
		bullets: [
			{text: 'Atomic radius: distance from the nucleus to the outer shell; smaller atoms hold electrons tighter.'},
			{text: "Electronegativity: an atom's pull on shared electrons; fluorine is the highest."},
			{text: 'Ionization energy: energy to remove electrons from gaseous atoms; noble gases are highest.'},
		],
	},
	'chemistry-y11-m1-l8-ionic-bonding.json': {
		heading: 'Three ionic-bonding terms',
		bullets: [
			{text: 'Cation: a positive ion formed when a metal atom loses electrons.'},
			{text: 'Anion: a negative ion formed when a non-metal atom gains electrons.'},
			{text: 'Crystal lattice: a repeating 3D grid of alternating cations and anions.'},
		],
	},
	'chemistry-y11-m1-l11-intermolecular-forces.json': {
		heading: 'Three intermolecular forces',
		bullets: [
			{text: 'Dispersion forces: weak, temporary attractions between all molecules.'},
			{text: 'Dipole-dipole: attractions between the permanent charges of polar molecules.'},
			{text: 'Hydrogen bonding: a strong dipole force when H bonds to N, O, or F.'},
		],
	},
	'chemistry-y11-m1-l12-module-summary.json': {
		heading: 'The bonding decision tree',
		bullets: [
			{text: 'Step 1: identify the elements — metal + non-metal is ionic, two non-metals covalent, metal only metallic.'},
			{text: 'Step 2: check periodic position to predict electrons gained or lost.'},
			{text: 'Step 3: determine the structure — lattice, small molecule, network, or metallic.'},
			{text: 'Step 4: predict properties from that structure.'},
		],
	},
};

for (const [file, fix] of Object.entries(FIXES)) {
	const path = `src/data/${file}`;
	const d = JSON.parse(readFileSync(path, 'utf8'));
	const s = d.scenes.find((x) => x.type === 'definition');
	if (!s) {
		console.log(`SKIP ${file}: no definition scene`);
		continue;
	}
	s.heading = fix.heading;
	delete s.body;
	delete s.secondary;
	s.bullets = fix.bullets;
	// voiceover.text + audioFile + captions are intentionally left untouched.
	writeFileSync(path, JSON.stringify(d, null, 2) + '\n');
	console.log(`OK ${file}: heading="${s.heading}", ${s.bullets.length} bullets, VO untouched`);
}
