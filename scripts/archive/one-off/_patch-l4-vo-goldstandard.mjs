// Rewrite all L4 scene voiceovers to match the L1A gold-standard
// conversational pacing (p/w ratio ~0.08-0.10, no stacked single-word
// "sentences" as a TTS pacing trick). Each rewrite is hand-tuned to
// preserve teaching content while letting sentences breathe.
//
// Drift was caught quantitatively: L4 was 2-3x L1A's period density.
// Worst was quick-check at 0.283 (vs L1A's ~0.08).

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l4-gases-molar-volume.json';

const REWRITES = {
	hook:
		"OK, here's the setup. You put one mole of helium gas in a balloon, and it weighs about four grams. Then you put one mole of carbon dioxide in another balloon, and that one weighs forty-four grams. Eleven times heavier. So the CO two balloon should be way bigger, right? Wrong. At the same temperature and pressure, both balloons take up exactly the same volume. One of the most surprising results in all of chemistry, and by the end of this video you'll know exactly why, and you'll be able to calculate the volume of any gas in three lines.",

	concept:
		"So what's actually going on here? The key insight is that in a gas, the molecules are so far apart that their actual size barely matters. The volume of a gas is almost entirely empty space between particles, so what really sets the volume is just two things, the number of particles and the temperature and pressure. The molecules themselves are basically irrelevant. Now think about what a mole is. It's always the same count, six-point-zero-two-two times ten to the twenty-three particles, no matter what the gas is. So if you have one mole of any gas, you've got the same number of particles, and at the same conditions, the same volume. That's Avogadro's law. Equal volumes of any ideal gas at the same temperature and pressure contain equal moles.",

	definition:
		"Quick vocabulary lock-in. Molar volume, written V subscript m, is the volume occupied by one mole of any gas, with units of litres per mole. Now this value depends on the conditions, and HSC uses two of them. The first is STP, standard temperature and pressure, which is zero degrees Celsius and one hundred kilopascals. At STP, V m equals twenty-two-point-seven-one litres per mole, which is the current NESA standard. Heads up, you might see twenty-two-point-four in older textbooks, but that's the value at one atmosphere, not one hundred kilopascals, and NESA doesn't use it anymore. The second is SATP, standard ambient temperature and pressure, which is twenty-five degrees Celsius and one hundred kilopascals. At SATP, V m equals twenty-four-point-eight litres per mole, and this is the current default for NSW HSC. So if a question doesn't tell you the conditions, just go with twenty-four-point-eight.",

	formula:
		"OK, here's the formula that does all the work. V equals n times V m, meaning volume equals moles times molar volume. It's the same shape as m equals n times capital M from lesson two, same triangle logic. To find V, multiply n by V m. To find n, divide V by V m. And to find V m itself, divide V by n. Three arrangements, one relationship. Now two safety rules to keep in mind. First, always check your units. V m is in litres per mole, so V has to be in litres, and if the question gives you millilitres, just divide by a thousand before you substitute. Five hundred millilitres becomes nought-point-five litres. Second, this formula is for gases only. One mole of liquid water does not occupy twenty-four-point-eight litres, it occupies about eighteen millilitres. So gases only.",

	'worked-example':
		"Right, let's work through an example. The question asks, what volume does three-point-five moles of nitrogen gas occupy at SATP? Step one is to pick the right V m. SATP means twenty-five degrees and one hundred kilopascals, so V m equals twenty-four-point-eight litres per mole. Step two, write down what you know. n equals three-point-five moles, V m equals twenty-four-point-eight, and V is what we're solving for. Step three, the formula. V equals n times V m. Step four, substitute. V equals three-point-five times twenty-four-point-eight. And step five, calculate. V equals eighty-six-point-eight litres at SATP. Done. Notice how the final answer always states the conditions you used, and you should always do that, because if the marker can't tell which V m you chose, you risk losing the mark even when your number is right.",

	'worked-example-2':
		"Here's a second example that shows why conditions matter. A four-point-nine-six litre sample of carbon dioxide is collected. How many moles, and does the answer change depending on conditions? Let's do both. First at SATP, V m equals twenty-four-point-eight, so n equals V over V m, which is four-point-nine-six divided by twenty-four-point-eight, giving nought-point-two-zero-zero moles. Now at STP, V m equals twenty-two-point-seven-one, so n equals four-point-nine-six divided by twenty-two-point-seven-one, which is nought-point-two-one-eight moles. Same volume, but different moles. Why? At lower temperature, the gas is more compressed, so more moles fit in the same volume. The lesson here is to always check the conditions before you pick a V m, because the wrong V m gives the wrong answer even when your method is perfect.",

	misconception:
		"OK, three traps that cost students marks every single year. Trap one is using the wrong V m for the conditions. The classic version, the question says SATP and the student grabs twenty-two-point-four out of habit, or the question says STP and the student uses twenty-four-point-eight. The setup is perfect, the number is wrong, and marks are gone. The fix is to underline the conditions in the question before you do anything else. Trap two is trying to use V equals n times V m on liquids or solids. One mole of liquid water is not twenty-four-point-eight litres, it's about eighteen millilitres, because the molar volume rule is for gases only. The fix, always check the state of matter. If it's solid or liquid, use n equals m over capital M. If it's a gas, use V equals n times V m. And trap three is forgetting to convert millilitres to litres. V m is in litres per mole, so if the question gives you millilitres, divide by a thousand first. Substituting five hundred millilitres directly gives you an answer one thousand times too big, so convert before you substitute, every time.",

	'quick-check':
		"Quick check. A balloon contains eight-point-four grams of methane gas at SATP, and the question asks for the volume. Pause and work it through. Right, let's check it. This is a two-step problem, mass first, then volume. Step one, work out the molar mass of methane, which is CH four. That's twelve-point-zero-one-one plus four times one-point-zero-zero-eight, giving sixteen-point-zero-four-three grams per mole. Step two, find the moles. n equals m over capital M, which is eight-point-four divided by sixteen-point-zero-four-three, giving nought-point-five-two-four moles. Step three, pick V m. SATP, so twenty-four-point-eight. Step four, V equals n times V m, which is nought-point-five-two-four times twenty-four-point-eight. And step five, V equals thirteen-point-zero litres. That's your answer.",

	summary:
		"OK, let's lock in what we've covered. Five things to take away. First, at the same temperature and pressure, one mole of any ideal gas occupies the same volume, no matter what the gas is. Second, the formula V equals n times V m rearranges three ways, so use whichever you need. Third, STP is zero degrees and one hundred kilopascals, with V m equal to twenty-two-point-seven-one litres per mole. Fourth, SATP is twenty-five degrees and one hundred kilopascals, with V m equal to twenty-four-point-eight, and this is your default for NSW HSC if the conditions aren't stated. And fifth, always convert millilitres to litres before substituting, and never apply this formula to liquids or solids. See you next lesson.",
};

const d = JSON.parse(readFileSync(PATH, 'utf8'));
let rewritten = 0;

for (const scene of d.scenes) {
	if (REWRITES[scene.id]) {
		scene.voiceover = scene.voiceover || {};
		scene.voiceover.text = REWRITES[scene.id];
		delete scene.voiceover.audioFile;
		delete scene.captions;
		rewritten++;
	}
}

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');

// Verify new p/w ratios
console.log('Rewritten ' + rewritten + ' scenes. New p/w ratios:');
for (const s of d.scenes) {
	const t = s.voiceover?.text || '';
	if (!t) continue;
	const w = t.split(/\s+/).length;
	const p = (t.match(/\./g) || []).length;
	console.log('  ' + s.id.padEnd(20) + ' words=' + String(w).padStart(3) + ' p/w=' + (p / w).toFixed(3));
}
