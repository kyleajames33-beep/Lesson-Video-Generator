// Patch L2 with the 3 tightened scenes (worked-example, misconception,
// quick-check) AND clear audioFile + captions on every scene so the next
// gen pass re-renders everything with the new voice (loQD…/turbo_v2_5)
// instead of the old May-era voice + multilingual_v2 model.

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l2-molar-mass.json';

const TIGHTENED = {
	'worked-example':
		"Worked example. Calculate the molar mass of calcium dihydrogen phosphate, formula Ca H two P O four, with the H two P O four group in brackets and a subscript two outside. Half the class gets this wrong on the first try, so watch carefully. First, the calcium. Ca is forty-point-zero-eight grams per mole. Easy. Now the part inside the brackets. Two hydrogens at one-point-zero-zero-eight is two-point-zero-two. Plus phosphorus at thirty-point-nine-seven. Plus four oxygens at fifteen-point-nine-nine each, which is sixty-three-point-nine-nine. Total inside the bracket: ninety-six-point-nine-eight grams per mole. Now here's the trap. The subscript two outside the bracket means there are two of everything inside. So we multiply ninety-six-point-nine-eight by two. That gives one-hundred-ninety-three-point-nine-six. Add the calcium: forty-point-zero-eight plus one-hundred-ninety-three-point-nine-six equals two-hundred-thirty-four-point-zero-five grams per mole. If you got one-hundred-thirty-four, you forgot to multiply through the brackets. That's the most expensive mistake in this topic.",

	'misconception':
		"Two mistakes that cost the most marks in this topic. First: confusing molar mass, capital M, with mass, lowercase m. Molar mass is a property of the substance, the mass of exactly one mole. It never changes for a given compound. Mass, lowercase m, is the mass of the sample you're holding. Before every question, ask: am I finding the mass of one mole, or the mass of my sample? Second, even more expensive: forgetting to multiply through brackets. In a formula like Ca H two P O four with a subscript two outside the bracket, that subscript applies to every atom inside the bracket, not just the last one. Miss this and your molar mass will be wrong by a factor that costs you full marks. Always pause when you see brackets and ask: how many of each atom do I actually have?",

	'quick-check':
		"Quick check. How many moles are in seventy-one-point-zero grams of chlorine gas? Pause and try this yourself. First, the molar mass of chlorine gas. Chlorine gas is Cl two, two atoms per molecule. So molar mass is two times thirty-five-point-four-five, which is seventy-point-nine grams per mole. If you wrote just thirty-five-point-four-five, you forgot the subscript two. Now rearrange the formula. m equals n times M, so n equals m divided by M. Seventy-one divided by seventy-point-nine is approximately one-point-zero-zero moles. Check the units: grams divided by grams per mole leaves moles. Correct.",
};

const d = JSON.parse(readFileSync(PATH, 'utf8'));
let tightened = 0;
let cleared = 0;
for (const scene of d.scenes) {
	if (TIGHTENED[scene.id]) {
		scene.voiceover = scene.voiceover || {};
		scene.voiceover.text = TIGHTENED[scene.id];
		tightened++;
	}
	if (scene.voiceover) {
		delete scene.voiceover.audioFile;
		cleared++;
	}
	if (scene.captions) delete scene.captions;
}

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log(`Tightened ${tightened} scenes, cleared audio refs on ${cleared} scenes.`);
console.log('Next: delete old MP3s, re-export manifest, run gen-elevenlabs-audio.');
