#!/usr/bin/env node
// lint-pacing — guards against robotic TTS drift in voiceover scripts.
//
// Scores every scene's voiceover against the L1A gold-standard pacing
// (period/word ratio ~0.06-0.10) and flags two failure modes Kyle has
// repeatedly caught:
//   1. High period density (choppy "Subject. Verb. Object." cadence)
//   2. Stacked single-word sentences used as a fake pacing trick
//      ("Glucose. Molecular formula. C six.")
//
// Usage:
//   node scripts/lint-pacing.mjs <lesson.json>          # one lesson
//   node scripts/lint-pacing.mjs --all                  # every lesson in src/data
//   node scripts/lint-pacing.mjs --all --strict         # non-zero exit on any WARN
//
// Thresholds (per narrative scene; title scenes exempt):
//   p/w <= 0.12   OK
//   p/w  > 0.12   WARN (drifting choppy)
//   p/w  > 0.16   FAIL (robotic)
//   3+ consecutive sentences of <= 3 words => WARN (stacked fragments)

import {readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const all = args.includes('--all');
const strict = args.includes('--strict');
const explicit = args.find((a) => !a.startsWith('--'));

const WARN_PW = 0.12;
const FAIL_PW = 0.16;

const files = all
	? readdirSync('src/data').filter((f) => f.endsWith('.json')).map((f) => path.join('src/data', f))
	: explicit
		? [explicit]
		: [];

if (files.length === 0) {
	console.error('Usage: node scripts/lint-pacing.mjs <lesson.json> | --all [--strict]');
	process.exit(1);
}

const countWords = (t) => t.trim().split(/\s+/).filter(Boolean).length;
const countPeriods = (t) => (t.match(/\./g) || []).length;

// Detect runs of >=3 consecutive sentences each <=3 words.
const stackedFragments = (t) => {
	const sentences = t.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
	let run = 0;
	let worstRun = 0;
	for (const s of sentences) {
		const w = countWords(s);
		if (w > 0 && w <= 3) {
			run += 1;
			worstRun = Math.max(worstRun, run);
		} else {
			run = 0;
		}
	}
	return worstRun;
};

let totalWarn = 0;
let totalFail = 0;

for (const file of files) {
	let d;
	try {
		d = JSON.parse(readFileSync(file, 'utf8'));
	} catch {
		continue;
	}
	if (!Array.isArray(d.scenes)) continue;

	const findings = [];
	for (const s of d.scenes) {
		const text = s.voiceover?.text;
		if (!text || s.type === 'title') continue;
		const w = countWords(text);
		if (w < 8) continue; // too short to judge
		const pw = countPeriods(text) / w;
		const frag = stackedFragments(text);

		if (pw > FAIL_PW) {
			findings.push(`  FAIL ${s.id.padEnd(20)} p/w=${pw.toFixed(3)} (robotic — rewrite with comma-pauses)`);
			totalFail++;
		} else if (pw > WARN_PW) {
			findings.push(`  WARN ${s.id.padEnd(20)} p/w=${pw.toFixed(3)} (choppy — drifting from L1A ~0.08)`);
			totalWarn++;
		}
		if (frag >= 3) {
			findings.push(`  WARN ${s.id.padEnd(20)} ${frag} stacked single-word sentences (fake pacing trick)`);
			totalWarn++;
		}
	}

	if (findings.length > 0) {
		console.log(path.basename(file));
		findings.forEach((f) => console.log(f));
	}
}

console.log(`\nlint-pacing: ${totalFail} FAIL, ${totalWarn} WARN across ${files.length} lesson(s).`);
if (totalFail > 0 || (strict && totalWarn > 0)) process.exit(1);
