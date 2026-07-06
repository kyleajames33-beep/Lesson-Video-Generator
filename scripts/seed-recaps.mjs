#!/usr/bin/env node
// seed-recaps — auto-derive a one-line takeaway (`recapSeed`) for each
// scene that doesn't already have one. The heuristic is a best-guess
// summary the author can later tighten by hand for the highest-impact
// scenes (definition, formula, summary).
//
// Strategy per scene type:
//   definition  -> heading (it IS the takeaway)
//   formula     -> heading + "rearrange to find any of the three"
//   concept     -> first bullet text, or heading-as-question turned
//                  into a statement
//   misconception -> mistakeTag or "Don't confuse {X} and {Y}"
//   workedExample -> "Multiply by Nₐ to find N" or step[2] (the formula)
//   quickCheck  -> the final answer's right-hand side, or the question
//                  topic stated as a rule
//   summary     -> heading
//   hook        -> the callout
//   endCard     -> none (skip)
//   title       -> none (skip)
//
// Existing recapSeed values are preserved.

import {readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const lessonPath = args.find((a) => !a.startsWith('--'));
const dryRun = args.includes('--dry-run');
const force = args.includes('--force');

if (!lessonPath) {
	console.error('Usage: node scripts/seed-recaps.mjs <lesson-json> [--dry-run] [--force]');
	process.exit(1);
}

const stripPunct = (s) => s.replace(/[?!.]+$/, '');

const seedFor = (scene) => {
	switch (scene.type) {
		case 'title':
		case 'endCard':
			return undefined;
		case 'hook':
			return scene.callout || scene.heading;
		case 'concept':
			if (scene.bullets && scene.bullets.length > 0) {
				const first = typeof scene.bullets[0] === 'string' ? scene.bullets[0] : scene.bullets[0].text;
				return first;
			}
			return scene.heading;
		case 'definition':
			return scene.heading;
		case 'formula': {
			const h = stripPunct(scene.heading);
			return scene.callout || `${h} — rearrange to find any quantity.`;
		}
		case 'misconception':
			if (scene.mistakeTag) return scene.mistakeTag;
			return scene.callout || stripPunct(scene.heading);
		case 'workedExample': {
			const last = scene.steps?.[scene.steps.length - 1];
			if (last) return `Worked: ${stripPunct(last)}`;
			return scene.heading;
		}
		case 'quickCheck':
			return scene.heading || 'Quick check passed.';
		case 'summary':
			return scene.callout || stripPunct(scene.heading);
		case 'marginalia':
		case 'labFootage':
			return scene.heading;
		default:
			return scene.heading;
	}
};

const trim80 = (s) => {
	if (!s) return undefined;
	if (s.length <= 80) return s;
	return s.slice(0, 77).trimEnd() + '…';
};

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
let changed = 0;
let skipped = 0;
const log = [];

for (const scene of lesson.scenes) {
	if (scene.recapSeed && !force) {
		log.push(`  = ${scene.id.padEnd(24)} kept: "${scene.recapSeed}"`);
		skipped++;
		continue;
	}
	const seed = trim80(seedFor(scene));
	if (!seed) {
		log.push(`  · ${scene.id.padEnd(24)} (no recap — ${scene.type})`);
		continue;
	}
	scene.recapSeed = seed;
	changed++;
	log.push(`  + ${scene.id.padEnd(24)} "${seed}"`);
}

console.log(`Seed recaps for ${path.basename(lessonPath)}`);
log.forEach((l) => console.log(l));
console.log(`\n${changed} added, ${skipped} kept`);

if (!dryRun && changed > 0) {
	writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
	console.log(`Wrote ${lessonPath}`);
}
