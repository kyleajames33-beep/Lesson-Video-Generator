// Add background music to L1A + L1B (only for the intro stinger — see
// scripts/_patch-music notes if you ever want it across the whole video).
// We use a very low base volume (0.10) since narration is the priority.

import {readFileSync, writeFileSync} from 'node:fs';

for (const file of [
	'src/data/chemistry-y11-m2-l1a-mole-understanding.json',
	'src/data/chemistry-y11-m2-l1b-mole-applying.json',
]) {
	const d = JSON.parse(readFileSync(file, 'utf8'));
	d.backgroundMusic = 'audio/music/lofi-bed.mp3';
	d.backgroundMusicVolume = 0.10;
	writeFileSync(file, JSON.stringify(d, null, 2) + '\n');
	console.log(`Wired music into ${file}`);
}
