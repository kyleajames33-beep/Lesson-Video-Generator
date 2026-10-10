// Revert the dialogue insertions: restore voiceover.text for the 6
// affected scenes to their pre-dialogue versions (reconstructed from the
// alignment-data on the still-on-disk old audio files). After this:
//   - Re-export manifests (text hash matches old audio file paths)
//   - Run sync-voiceover-assets (links the JSON back to old audio)
//   - No regen needed — old audio is still on disk.
//
// Also handles the title-card fix: drop "Understanding" from L1A's
// displayed title + voiceover ("The Mole Concept. Part A.").

import {readFileSync, writeFileSync} from 'node:fs';

const L1A_REVERT = {
	'hook':
		"OK, here's a question that sounds impossible at first. How do chemists count atoms — when a single atom is way too small to ever see? The answer's actually beautifully simple. It's a counting unit called the mole. By the end of this lesson, you'll be using it like second nature.",
	'definition':
		"Alright, here's the actual definition you need to lock in. One mole is the amount of substance containing exactly six-point-zero-two-two times ten to the twenty-three particles. Those particles can be anything you're counting. Atoms, if you're dealing with an element. Molecules, if it's a compound. Or ions and formula units, depending on the substance. The number itself has a name: Avogadro's number. And its symbol is capital N with a little A subscript. You'll see that symbol everywhere in this module, so get comfortable with it now.",
	'misconception-nvn':
		"Here's a trap that catches half the class on their first mole question. Students assume capital N and lowercase n are the same thing — both just 'how much you have'. They're not. Capital N is the raw count of particles — a huge number, no units. Lowercase n is the amount in moles. They're linked by N equals n times Avogadro's number, but they're completely different quantities. So before you do anything on any HSC question, read carefully. Does it want capital N, or lowercase n? Get that wrong, and the whole answer's wrong.",
};

const L1B_REVERT = {
	'recap':
		"Welcome back. Quick recap from Part A. A mole is six-point-zero-two-two times ten to the twenty-three particles — Avogadro's number. Capital N is the count of particles, lowercase n is the amount in moles, and they're linked by the formula N equals n times Avogadro's. Know any two, find the third. Right — now let's actually use it.",
	'worked-example-1':
		"Alright — let's work through our first example together. The question reads: how many atoms are in two-point-five moles of carbon? So how do we attack this? The first move I always make — and it honestly wins half the marks — is figure out what we've been given. We've got n, the moles, equal to two-point-five. And we know Avogadro's number, which is the constant six-point-zero-two-two times ten to the twenty-three per mole. Now what are we asked for? We want N — the number of atoms. So we need the formula that links them: N equals n times Avogadro's number. From here, it's pure substitution. We plug in our n value of two-point-five, multiply by Avogadro's, and the calculator gives us one-point-five times ten to the twenty-four atoms. Quick sanity check: that's about one-and-a-half times Avogadro's number — exactly what you'd expect from one-and-a-half moles. And notice how the moles cancel with the per mole on Avogadro — leaving just a count of atoms, no units. That's how you know the setup was right.",
	'misconception-mistakes':
		"So let's talk about two mistakes that'll cost you marks — fix them now and you save yourself in the exam. The first one: confusing capital N with lowercase n. We just talked about this — capital N is a raw count, no units. Lowercase n is in moles. Before you substitute anything, write down which quantity you're solving for. Literally just label it. Now the second mistake: dropping the units of Avogadro's number. It's measured in moles to the minus one — basically per mole. When you multiply moles by that, the units cancel beautifully and leave you with a pure count. But if you don't track them, you won't notice when something's off. So write units at every single step — they're your safety net.",
};

const patch = (file, edits) => {
	const d = JSON.parse(readFileSync(file, 'utf8'));
	let n = 0;
	for (const scene of d.scenes) {
		if (edits[scene.id]) {
			scene.voiceover = scene.voiceover || {};
			scene.voiceover.text = edits[scene.id];
			delete scene.voiceover.audioFile;
			delete scene.captions;
			n++;
		}
	}
	return {data: d, count: n};
};

// Revert L1A + drop "Understanding" from the title
{
	const {data, count} = patch('src/data/chemistry-y11-m2-l1a-mole-understanding.json', L1A_REVERT);
	// Title fixes
	data.title = "The Mole Concept, Part A";
	for (const scene of data.scenes) {
		if (scene.id === 'title') {
			// Narrator says only "The Mole Concept. Part A."
			scene.voiceover.text = "The Mole Concept. Part A.";
			delete scene.voiceover.audioFile;
			delete scene.captions;
			scene.caption = "The Mole Concept, Part A (Year 11 Chemistry, Module 2)";
		}
	}
	writeFileSync('src/data/chemistry-y11-m2-l1a-mole-understanding.json', JSON.stringify(data, null, 2) + '\n');
	console.log('L1A: reverted ' + count + ' dialogue scenes + simplified title.');
}

// Revert L1B + simplify title to "Part B"
{
	const {data, count} = patch('src/data/chemistry-y11-m2-l1b-mole-applying.json', L1B_REVERT);
	data.title = "The Mole Concept, Part B";
	for (const scene of data.scenes) {
		if (scene.id === 'title') {
			scene.voiceover.text = "The Mole Concept. Part B.";
			delete scene.voiceover.audioFile;
			delete scene.captions;
			scene.caption = "The Mole Concept, Part B (Year 11 Chemistry, Module 2)";
		}
	}
	writeFileSync('src/data/chemistry-y11-m2-l1b-mole-applying.json', JSON.stringify(data, null, 2) + '\n');
	console.log('L1B: reverted ' + count + ' dialogue scenes + simplified title.');
}

console.log('\nNext: re-export manifests + sync-voiceover-assets (links back to old audio).');
console.log('Title scenes need 1 short regen each (~25 chars × 2 = ~50 credits).');
