// V2 patch: defuse list cadence, remove standalone discourse markers,
// replace hyphenated compounds, simplify repeated long numbers.
import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l1-mole-concept.json';

const NEW_VO = {
	// definition — break "atoms, molecules, ions, formula units" list into context
	'definition': "Alright, here's the actual definition you need to lock in. One mole is the amount of substance containing exactly six-point-zero-two-two times ten to the twenty-three particles. Those particles can be anything you're counting. Atoms, if you're dealing with an element. Molecules, if it's a compound. Or ions and formula units, depending on the substance. The number itself has a name: Avogadro's number. And its symbol is capital N with a little A subscript. You'll see that symbol everywhere in this module, so get comfortable with it now.",

	// concept-scale — use "Avogadro's number" instead of restating long number,
	// and add discourse markers between the comparisons
	'concept-scale': "Now let's actually appreciate how big Avogadro's number is, because the digits don't really land until you picture them. If you had Avogadro's number of grains of sand, they'd cover the entire continent of Australia to a depth of one hundred metres. Compare that to the number of stars in the observable universe? About ten to the twenty-three — still ten times smaller. And the number of seconds since the Big Bang? Only four times ten to the seventeen. Avogadro's number is genuinely one of the largest numbers you'll meet anywhere in science.",

	// concept-carbon12 — embed H/C/O numbers in fuller sentences with varied structure
	'concept-carbon12': "So a fair question — why this particular number? Why six-point-zero-two-two times ten to the twenty-three, and not say ten to the twenty-four? Well, it wasn't random. The mole was defined so that exactly one mole of carbon-twelve atoms weighs exactly twelve grams. That was a deliberate design choice — and it pays off massively. Because of it, the molar mass of any element in grams per mole equals its relative atomic mass straight from the periodic table. Take hydrogen — atomic mass one, so molar mass one gram per mole. Same logic for carbon: twelve on the table, twelve grams per mole. Same for oxygen: sixteen and sixteen. The pattern holds for every element. No conversion required.",

	// formula — break 3-quantity list into separate clauses, replace mol-inverse
	'formula': "OK, this is the formula that ties the whole module together. N equals n times Avogadro's number. There are three quantities here. Capital N — that's the number of particles, a raw count. Lowercase n — that's the amount in moles. And Avogadro's number is the bridge between them. The trick: know any two of these, and you can find the third just by rearranging. And notice the units. Moles times moles to the minus one gives you a pure number. That's why N has no units on its answer — it's just a count.",

	// worked-example-1 — streamline substitution, replace per-mole hyphen
	'worked-example-1': "Alright — let's work through our first example together. The question reads: how many atoms are in two-point-five moles of carbon? So how do we attack this? The first move I always make — and it honestly wins half the marks — is figure out what we've been given. We've got n, the moles, equal to two-point-five. And we know Avogadro's number, which is the constant six-point-zero-two-two times ten to the twenty-three per mole. Now what are we asked for? We want N — the number of atoms. So we need the formula that links them: N equals n times Avogadro's number. From here, it's pure substitution. We plug in our n value of two-point-five, multiply by Avogadro's, and the calculator gives us one-point-five times ten to the twenty-four atoms. Quick sanity check: that's about one-and-a-half times Avogadro's number — exactly what you'd expect from one-and-a-half moles. And notice how the moles cancel with the per mole on Avogadro — leaving just a count of atoms, no units. That's how you know the setup was right.",

	// worked-example-2 — remove "Bang on", streamline long substitution
	'worked-example-2': "Now let's flip the problem. The question reads: a sample contains three-point-zero-one times ten to the twenty-four molecules of water. How many moles is this? OK, so what's different here? Last time we knew n and wanted N. This time we know N and we want n. Same formula still applies — N equals n times Avogadro's — we just rearrange it. n equals N divided by Avogadro's number. Substitute the numbers in, and you get exactly five-point-zero moles. Quick unit check: particles divided by particles per mole leaves moles. That's exactly what we wanted. So the same formula works both directions — you just rearrange depending on what you're chasing.",

	// misconception-mistakes — remove standalone "Right", smooth list intro,
	// replace mol-inverse (appears twice)
	'misconception-mistakes': "So let's talk about two mistakes that'll cost you marks — fix them now and you save yourself in the exam. The first one: confusing capital N with lowercase n. We just talked about this — capital N is a raw count, no units. Lowercase n is in moles. Before you substitute anything, write down which quantity you're solving for. Literally just label it. Now the second mistake: dropping the units of Avogadro's number. It's measured in moles to the minus one — basically per mole. When you multiply moles by that, the units cancel beautifully and leave you with a pure count. But if you don't track them, you won't notice when something's off. So write units at every single step — they're your safety net.",

	// quick-check — replace "Right," opener, remove "Welcome back" exclamation,
	// streamline substitution
	'quick-check': "OK, time for you to try one. The question: a sample contains zero-point-seven-five moles of sodium chloride. How many formula units does it contain? Pause now, work it out, then come back when you're ready. So — we've got n equals zero-point-seven-five moles, and Avogadro's number is the usual constant. We want N, so the formula's N equals n times Avogadro's. Substitute the numbers in, and you get about four-point-five-two times ten to the twenty-three formula units. If you got that — you're set for this topic.",

	// summary — remove enumerated "One. Two. Three. Four. Five." cadence,
	// replace mol-inverse
	'summary': "OK, let's lock in what we've covered. Five things to take away. First, the mole is just a counting unit — one mole equals Avogadro's number of particles. Next, don't confuse capital N with lowercase n. Capital N is the count of particles, no units. Lowercase n is the amount in moles. The formula that links them is N equals n times Avogadro's, and you can rearrange it to find any of the three quantities. The units always cancel beautifully — moles times moles to the minus one leaves you with a pure count. And the reason the whole system works: Avogadro's number was defined using carbon-twelve, so the molar mass in grams per mole equals the atomic mass straight off the periodic table. That's the foundation the rest of the module builds on.",
};

const lesson = JSON.parse(readFileSync(PATH, 'utf8'));
let patched = 0;
for (const scene of lesson.scenes) {
	if (NEW_VO[scene.id]) {
		scene.voiceover.text = NEW_VO[scene.id];
		delete scene.voiceover.audioFile;
		patched++;
	}
}
writeFileSync(PATH, JSON.stringify(lesson, null, 2) + '\n');
console.log(`Patched ${patched} scenes (the 9 that needed list/marker/compound fixes)`);
