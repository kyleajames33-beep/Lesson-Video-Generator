// Patch L2 with the modern lesson-level metadata (NESA outcomes, lesson
// count, inquiry question, NESA-exact dot points) and per-scene
// confidenceCheck values feeding the intro stinger's "By the end you'll
// be able to" panel. Verbs taken straight from NESA's Module 2 content
// statement so the panel reads as authentic curriculum mapping.

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l2-molar-mass.json';

// NESA Chemistry Stage 6 Syllabus, Module 2, Mole Concept content
// statement covers molar mass via "describe, calculate and manipulate
// masses, chemical amounts and numbers of particles".
const NESA_OUTCOMES = ['CH11-9', 'CH11/12-4', 'CH11/12-6'];
const NESA_DOT_POINTS = [
	"explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate numbers of particles, chemical amounts and masses",
	"conduct a practical investigation to demonstrate and calculate the molar mass (mass of one mole) of an element and a compound",
];

// NESA-aligned objectives per scene. Action verbs match the syllabus
// language (describe / calculate / relate / apply / distinguish).
const CONFIDENCE_CHECKS = {
	'concept':         "Describe molar mass and read it directly from the periodic table for any element.",
	'definition':      "Identify g mol⁻¹ as the unit signalling 'mass per one mole'.",
	'formula':         "Apply m = n × M to convert between mass and amount of substance.",
	'worked-example':  "Calculate the molar mass of a compound, including those with brackets.",
	'misconception':   "Distinguish molar mass (M) from sample mass (m) before substituting.",
	'quick-check':     "Rearrange m = n × M to solve for any of the three quantities.",
};

const d = JSON.parse(readFileSync(PATH, 'utf8'));
d.moduleLessonCount = 20;
d.nesaOutcomes = NESA_OUTCOMES;
d.inquiryQuestion = "How are measurements made in chemistry?";
d.syllabusDotPoints = NESA_DOT_POINTS;

let n = 0;
for (const scene of d.scenes) {
	if (CONFIDENCE_CHECKS[scene.id]) {
		scene.confidenceCheck = CONFIDENCE_CHECKS[scene.id];
		n++;
	}
}

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log(`Patched L2 lesson-level metadata + ${n} confidenceCheck values.`);
