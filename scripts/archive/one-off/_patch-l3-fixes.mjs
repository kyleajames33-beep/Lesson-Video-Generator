// One-shot patch script: clear audioFile+captions for L3 scenes we are
// regenerating, rewrite the definition voiceover with cleaner sentence
// breaks, and unwire the mint-baked Codex images that we are dropping
// until ChatGPT transparent versions arrive.

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l3-empirical-molecular-formulas.json';

const REGEN_SCENES = new Set(['hook', 'concept', 'definition', 'formula']);

const NEW_DEFINITION_VO =
	"OK, let's lock in the vocabulary. First. Percentage composition. The mass of each element, written as a percentage of the total mass. So if a compound is forty percent carbon, that means in a hundred-gram sample, forty grams are carbon. Next. Empirical formula. The simplest whole-number ratio of atoms. The reduced form. And finally. Molecular formula. The actual count of each atom in one molecule. These three are connected. Percentage composition is what you measure. Empirical formula is the first step. Molecular formula is where we want to end up.";

const DROP_IMAGE_SCENES = new Set(['formula', 'worked-example']);

const d = JSON.parse(readFileSync(PATH, 'utf8'));

let cleared = 0;
let droppedImage = 0;

for (const scene of d.scenes) {
	if (REGEN_SCENES.has(scene.id)) {
		if (scene.voiceover) {
			delete scene.voiceover.audioFile;
		}
		delete scene.captions;
		cleared++;
	}

	if (scene.id === 'definition' && scene.voiceover) {
		scene.voiceover.text = NEW_DEFINITION_VO;
	}

	if (DROP_IMAGE_SCENES.has(scene.id) && scene.image) {
		delete scene.image;
		droppedImage++;
	}
}

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log(`Cleared audio/captions on ${cleared} scenes.`);
console.log(`Dropped mint-baked image on ${droppedImage} scenes.`);
console.log('Definition voiceover rewritten.');
