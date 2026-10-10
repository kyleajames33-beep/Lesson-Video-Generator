// One-shot patcher: apply the approved story hooks + 4 dialogue
// insertions to L1A and L1B. Voiceover.text is rewritten in place; the
// audioFile is cleared so re-export-manifest produces a new hash path
// and we know which scenes to regen.

import {readFileSync, writeFileSync} from 'node:fs';

const L1A_PATH = 'src/data/chemistry-y11-m2-l1a-mole-understanding.json';
const L1B_PATH = 'src/data/chemistry-y11-m2-l1b-mole-applying.json';

// ── L1A ──
const L1A_EDITS = {
	'hook':
		"A single teaspoon of water contains more molecules than there are stars in the entire observable universe. " +
		"[STUDENT]Wait, really?[/STUDENT] " +
		"Really. So how do chemists make sense of numbers that big? They use a tool called the mole. " +
		"By the end of this video, you'll be using it like second nature.",
	'definition':
		"Alright, here's the actual definition you need to lock in. " +
		"One mole is the amount of substance containing exactly six-point-zero-two-two times ten to the twenty-three particles. " +
		"Those particles can be anything you're counting. " +
		"Atoms, if you're dealing with an element. Molecules, if it's a compound. Or ions and formula units, depending on the substance. " +
		"The number itself has a name. Avogadro's number. " +
		"[STUDENT]Why six-point-zero-two-two specifically, why not a round number?[/STUDENT] " +
		"Great question, we'll get to that in the next scene. " +
		"Its symbol is capital N with a little A subscript. You'll see that symbol everywhere in this module, so get comfortable with it now.",
	'misconception-nvn':
		"Here's a trap that catches half the class on their first mole question. " +
		"Students assume capital N and lowercase n are the same thing, both just 'how much you have'. They're not. " +
		"[STUDENT]But they look identical to me.[/STUDENT] " +
		"They look identical, but they mean very different things. " +
		"Capital N is the raw count of particles, a huge number, no units. " +
		"Lowercase n is the amount in moles. " +
		"They're linked by N equals n times Avogadro's number, but they're completely different quantities. " +
		"So before you do anything on any HSC question, read carefully. Does it want capital N, or lowercase n? Get that wrong, and the whole answer's wrong.",
};

// ── L1B ──
const L1B_EDITS = {
	'recap':
		"Last year on the HSC, this question came up: how many oxygen atoms are in zero-point-two-five moles of carbon dioxide? " +
		"[STUDENT]Oh no.[/STUDENT] " +
		"Don't worry. By the end of Part B, that question is easy. " +
		"Quick recap from Part A: a mole is Avogadro's number, six-point-zero-two-two times ten to the twenty-three. " +
		"Capital N is the count of particles, lowercase n is the amount in moles, and they're linked by the formula N equals n times Avogadro's. " +
		"Know any two, find the third. Now let's apply it.",
	'worked-example-1':
		"Alright, let's work through our first example together. " +
		"The question reads: how many atoms are in two-point-five moles of carbon? " +
		"[STUDENT]Where do I even start?[/STUDENT] " +
		"Same place every time. So how do we attack this? " +
		"The first move I always make, and it honestly wins half the marks, is figure out what we've been given. " +
		"We've got n, the moles, equal to two-point-five. " +
		"And we know Avogadro's number, which is the constant six-point-zero-two-two times ten to the twenty-three per mole. " +
		"Now what are we asked for? We want N, the number of atoms. " +
		"So we need the formula that links them. N equals n times Avogadro's number. " +
		"From here, it's pure substitution. We plug in our n value of two-point-five, multiply by Avogadro's, and the calculator gives us one-point-five times ten to the twenty-four atoms. " +
		"Quick sanity check: that's about one-and-a-half times Avogadro's number, exactly what you'd expect from one-and-a-half moles. " +
		"And notice how the moles cancel with the per mole on Avogadro, leaving just a count of atoms, no units. That's how you know the setup was right.",
	'misconception-mistakes':
		"So let's talk about two mistakes that'll cost you marks. Fix them now and you save yourself in the exam. " +
		"The first one: confusing capital N with lowercase n. " +
		"We just talked about this, capital N is a raw count, no units. Lowercase n is in moles. " +
		"Before you substitute anything, write down which quantity you're solving for. Literally just label it. " +
		"[STUDENT]I always forget that part though.[/STUDENT] " +
		"Everyone does. That's why labelling fixes it, you can't forget what's written down. " +
		"Now the second mistake: dropping the units of Avogadro's number. " +
		"It's measured in moles to the minus one, basically per mole. " +
		"When you multiply moles by that, the units cancel beautifully and leave you with a pure count. " +
		"But if you don't track them, you won't notice when something's off. So write units at every single step, they're your safety net.",
};

const patch = (file, edits) => {
	const d = JSON.parse(readFileSync(file, 'utf8'));
	let n = 0;
	for (const scene of d.scenes) {
		if (edits[scene.id]) {
			scene.voiceover = scene.voiceover || {};
			scene.voiceover.text = edits[scene.id];
			// Clear stale audioFile + alignment so they regen.
			delete scene.voiceover.audioFile;
			// Clear captions (will rebuild after regen)
			delete scene.captions;
			n++;
		}
	}
	writeFileSync(file, JSON.stringify(d, null, 2) + '\n');
	console.log(`Patched ${n} scenes in ${file}`);
};

patch(L1A_PATH, L1A_EDITS);
patch(L1B_PATH, L1B_EDITS);

console.log('\nNext: re-export manifests, regen audio via generate-elevenlabs-dialogue.mjs, then sync + fit + captions.');
