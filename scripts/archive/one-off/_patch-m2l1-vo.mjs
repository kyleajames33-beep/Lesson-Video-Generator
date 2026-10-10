// One-shot patcher: rewrite M2 L1 voiceovers from telegraph to presenter style.
import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l1-mole-concept.json';

const NEW_VO = {
	'title': "The Mole Concept. Year eleven Chemistry, Module two.",

	'hook': "OK, here's a question that sounds impossible at first. How do chemists count atoms — when a single atom is way too small to ever see? The answer's actually beautifully simple. It's a counting unit called the mole. By the end of this lesson, you'll be using it like second nature.",

	'concept-problem': "Let's start by appreciating just how small atoms are. A single carbon atom weighs about two times ten to the minus twenty-three grams. That's so tiny no lab balance on Earth could ever measure it. So chemists do what bakers do — they count in groups. A dozen eggs gets you twelve. A mole of atoms gets you six-point-zero-two-two times ten to the twenty-three. Same idea, just on a totally different scale. And it's that scale that bridges the atomic world to anything you can actually weigh out in the lab.",

	'definition': "Alright, here's the actual definition you need to lock in. One mole is the amount of substance containing exactly six-point-zero-two-two times ten to the twenty-three particles. Those particles can be anything you're counting — atoms, molecules, ions, formula units. The number itself has a name: Avogadro's number. And its symbol is capital N with a little A subscript. You'll see that symbol everywhere in this module, so get comfortable with it now.",

	'concept-scale': "Now let's actually appreciate how big Avogadro's number is, because the digits don't really land until you picture them. If you had six-point-zero-two-two times ten to the twenty-three grains of sand, they'd cover the entire continent of Australia to a depth of one hundred metres. The number of stars in the observable universe? About ten to the twenty-three — still ten times smaller. And the number of seconds since the Big Bang is only four times ten to the seventeen. Avogadro's number is genuinely one of the largest numbers you'll meet anywhere in science.",

	'concept-carbon12': "So a fair question — why this particular number? Why six-point-zero-two-two times ten to the twenty-three, and not say ten to the twenty-four? Well, it wasn't random. The mole was defined so that exactly one mole of carbon-twelve atoms weighs exactly twelve grams. That was a deliberate design choice — and it pays off massively. Because of it, the molar mass of any element in grams per mole equals its relative atomic mass straight from the periodic table. Hydrogen — one gram per mole. Carbon — twelve. Oxygen — sixteen. No conversion required.",

	'misconception-nvn': "Here's a trap that catches half the class on their first mole question. Students assume capital N and lowercase n are the same thing — both just 'how much you have'. They're not. Capital N is the raw count of particles — a huge number, no units. Lowercase n is the amount in moles. They're linked by N equals n times Avogadro's number, but they're completely different quantities. So before you do anything on any HSC question, read carefully. Does it want capital N, or lowercase n? Get that wrong, and the whole answer's wrong.",

	'formula': "OK, this is the formula that ties the whole module together. N equals n times Avogadro's number. Three quantities — capital N is the number of particles, lowercase n is the amount in moles, and Avogadro's number is the bridge between them. The trick: know any two of these, and you can find the third just by rearranging. And notice the units. Moles times mol-inverse gives you a pure number. That's why N has no units on its answer — it's just a count.",

	'worked-example-1': "Alright — let's work through our first example together. The question reads: how many atoms are in two-point-five moles of carbon? So how do we attack this? The first move I always make — and it honestly wins half the marks — is figure out what we've been given. We've got n, the moles, equal to two-point-five. And we know Avogadro's number is constant — six-point-zero-two-two times ten to the twenty-three per mole. Now what are we asked for? We want N, the number of atoms. So we need the formula that links them: N equals n times Avogadro's number. From here, it's pure substitution. Two-point-five times six-point-zero-two-two times ten to the twenty-three. Calculator gives you one-point-five times ten to the twenty-four atoms. Quick sanity check: that's about one-and-a-half times Avogadro's number, which is exactly what you'd expect from one-and-a-half moles. And notice how the moles cancel with the per-mole on Avogadro — leaving just a count of atoms, no units. That's how you know you set it up right.",

	'worked-example-2': "Now let's flip the problem. The question reads: a sample contains three-point-zero-one times ten to the twenty-four molecules of water. How many moles is this? OK, so what's different here? Last time we knew n and wanted N. This time we know N and we want n. Same formula still applies — N equals n times Avogadro's — we just rearrange it. n equals N divided by Avogadro's number. Substitute: three-point-zero-one times ten to the twenty-four, divided by six-point-zero-two-two times ten to the twenty-three. That gives us exactly five-point-zero moles. Quick unit check: particles divided by particles-per-mole leaves moles. Bang on. So the same formula works both directions — you just rearrange depending on what you're chasing.",

	'misconception-mistakes': "Right — two mistakes that'll cost you marks. Fix them now and you save yourself in the exam. First one: confusing capital N with lowercase n. We just talked about this — capital N is a raw count, no units. Lowercase n is in moles. Before you substitute anything, write down which quantity you're solving for. Literally just label it. Second mistake: dropping the units of Avogadro's number. It's mol-inverse — per mole. When you multiply moles by mol-inverse, the units cancel beautifully and leave you with a pure count. But if you don't track them, you won't notice when something's off. So write units at every single step — they're your safety net.",

	'quick-check': "Right, time for you to try one. The question: a sample contains zero-point-seven-five moles of sodium chloride. How many formula units does it contain? Pause now and work it out before I show you the answer. Welcome back. So we've got n equals zero-point-seven-five moles, and Avogadro's number is the usual six-point-zero-two-two times ten to the twenty-three per mole. We want N — so the formula's N equals n times Avogadro's. Substitute: zero-point-seven-five times six-point-zero-two-two times ten to the twenty-three. That gives you about four-point-five-two times ten to the twenty-three formula units. If you got that — you're set for this topic.",

	'summary': "Right, let's lock in what we've covered. Five takeaways. One — the mole is just a counting unit. One mole equals six-point-zero-two-two times ten to the twenty-three particles, called Avogadro's number. Two — capital N is the count of particles, no units. Lowercase n is the amount in moles. Don't mix them up. Three — the formula is N equals n times Avogadro's. Know any two, rearrange to find the third. Four — units always cancel. Moles times mol-inverse gives you a pure count. And five — Avogadro's number was defined using carbon-twelve, so the molar mass in grams per mole equals the atomic mass straight off the periodic table. That's the foundation the whole rest of the module builds on.",
};

const lesson = JSON.parse(readFileSync(PATH, 'utf8'));

let patched = 0;
let missing = [];
for (const scene of lesson.scenes) {
	if (NEW_VO[scene.id]) {
		scene.voiceover = scene.voiceover || {};
		scene.voiceover.text = NEW_VO[scene.id];
		// Clear stale audioFile — these will regenerate
		delete scene.voiceover.audioFile;
		patched++;
	} else {
		missing.push(scene.id);
	}
}

writeFileSync(PATH, JSON.stringify(lesson, null, 2) + '\n');
console.log(`Patched ${patched} scenes`);
if (missing.length) console.log(`Scenes not patched: ${missing.join(', ')}`);
