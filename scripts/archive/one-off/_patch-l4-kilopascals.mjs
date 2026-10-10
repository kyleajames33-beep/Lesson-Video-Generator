// Respell "kilopascals" → "killopascals" in L4 voiceover text so
// ElevenLabs reads it with hard "i" (kill-oh-PAS-kals) instead of
// the long "e" (keel-oh-PAS-kals) reading it currently produces.

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l4-gases-molar-volume.json';
const d = JSON.parse(readFileSync(PATH, 'utf8'));

const AFFECTED = new Set(['definition', 'worked-example', 'summary']);

let scenesPatched = 0;
let replacements = 0;
for (const scene of d.scenes) {
	if (!AFFECTED.has(scene.id)) continue;
	if (!scene.voiceover?.text) continue;
	const before = scene.voiceover.text;
	const after = before.replace(/\bkilopascals\b/g, 'killopascals');
	if (after !== before) {
		scene.voiceover.text = after;
		delete scene.voiceover.audioFile;
		delete scene.captions;
		scenesPatched++;
		replacements += (before.match(/\bkilopascals\b/g) || []).length;
	}
}

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('Patched', scenesPatched, 'scenes,', replacements, 'kilopascals replacements.');
console.log('Audio + captions cleared for: definition, worked-example, summary.');
