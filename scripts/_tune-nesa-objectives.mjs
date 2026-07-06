// Map each scene's confidenceCheck to a NESA-aligned outcome verb.
// Sources: NESA Chemistry Stage 6 Syllabus, Module 2 (Introduction to
// Quantitative Chemistry), pp. 591-630 of the official syllabus DOCX.
//
// We use NESA's exact action verbs (describe / relate / apply / calculate
// / manipulate / distinguish) so the intro-stinger "By the end you'll be
// able to" panel reads as authentic outcomes rather than paraphrase.

import {readFileSync, writeFileSync} from 'node:fs';

// L1A — Understanding the mole concept
// Aligned to CH11-9 (mole concept) + the dot point "explore the concept
// of the mole and relate this to Avogadro's constant to describe…"
const L1A_OBJECTIVES = {
	'definition':         "Describe the mole as a counting unit for elementary entities.",
	'concept-carbon12':   "Relate the mole to Avogadro's constant via the carbon-12 standard.",
	'misconception-nvn':  "Distinguish chemical amount (n) from number of particles (N).",
	'formula':            "Apply N = n × Nₐ to calculate particles from a chemical amount.",
};

// L1B — Applying the mole concept (calculation focus)
// Same dot point — emphasises "calculate and manipulate masses, chemical
// amounts and numbers of particles" sub-clause.
const L1B_OBJECTIVES = {
	'worked-example-1':   "Calculate the number of particles in a given chemical amount.",
	'worked-example-2':   "Calculate the chemical amount given a number of particles.",
	'misconception-mistakes': "Identify which quantity (N or n) a question is asking for.",
	'summary':            "Solve problems using the mole concept and Avogadro's constant.",
};

// Updated NESA dot points — these are the EXACT statements from the
// syllabus that the lesson addresses (verbatim from NESA Stage 6
// Chemistry, Module 2, "Mole Concept" section).
const NESA_DOT_POINTS = [
	"explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate numbers of particles, chemical amounts and masses",
];

// Lesson-level metadata also updated to show the NESA outcome codes.
const NESA_OUTCOMES = ["CH11-9", "CH11/12-4", "CH11/12-6"];

const patch = (file, map) => {
	const d = JSON.parse(readFileSync(file, 'utf8'));
	let n = 0;
	for (const scene of d.scenes) {
		if (map[scene.id]) {
			scene.confidenceCheck = map[scene.id];
			n++;
		}
	}
	d.syllabusDotPoints = NESA_DOT_POINTS;
	d.nesaOutcomes = NESA_OUTCOMES;
	d.inquiryQuestion = "How are measurements made in chemistry?";
	writeFileSync(file, JSON.stringify(d, null, 2) + '\n');
	console.log(`Patched ${n} scenes + lesson-level NESA fields in ${file}`);
};

patch('src/data/chemistry-y11-m2-l1a-mole-understanding.json', L1A_OBJECTIVES);
patch('src/data/chemistry-y11-m2-l1b-mole-applying.json', L1B_OBJECTIVES);
