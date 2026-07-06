#!/usr/bin/env node
// sweep-lessons — catalogue-wide regression detector for the structural
// bugs Kyle has repeatedly caught. Reports everything; auto-fixes only
// what is safe (and never touches a scene whose audio is already locked).
//
// Detects:
//   [defn-hero]   definition scene with 2+ terms but NO bullets (renders
//                 in the giant hero-word layout — must use bullets)
//   [defn-head]   definition heading that is a comma-list of terms
//                 (e.g. "STP, SATP, and Vm") — renders at hero size
//   [title-vo]    title scene has voiceover AND lesson has introVoiceover
//                 (double topic announcement — the abrupt cut)
//   [vo-dash]     em/en dash in voiceover.text (ElevenLabs honours
//                 inconsistently) — AUTO-FIX to comma if scene unvoiced
//
// Usage:
//   node scripts/sweep-lessons.mjs            # report only, all lessons
//   node scripts/sweep-lessons.mjs --fix      # apply safe auto-fixes

import {readFileSync, writeFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const fix = process.argv.includes('--fix');

const files = readdirSync('src/data').filter((f) => f.endsWith('.json')).map((f) => path.join('src/data', f));

const termColonCount = (s) => (s ? (s.match(/[A-Za-z)][A-Za-z) ]*:\s/g) || []).length : 0);

let report = [];
let fixCount = 0;
const tally = {defnHero: 0, defnHead: 0, titleVo: 0, voDash: 0};

for (const file of files) {
	let d;
	try {
		d = JSON.parse(readFileSync(file, 'utf8'));
	} catch {
		continue;
	}
	if (!Array.isArray(d.scenes)) continue;
	const hasIntro = Boolean(d.introVoiceover?.text);
	const lines = [];
	let mutated = false;

	for (const s of d.scenes) {
		// [defn-hero] + [defn-head]
		if (s.type === 'definition') {
			const hasBullets = Array.isArray(s.bullets) && s.bullets.length > 0;
			const terms = termColonCount(s.secondary) + termColonCount(s.body);
			if (!hasBullets && terms >= 2) {
				lines.push(`  [defn-hero] ${s.id}: ${terms} terms in body/secondary, no bullets`);
				tally.defnHero++;
			}
			if (s.heading && (s.heading.match(/,/g) || []).length >= 2) {
				lines.push(`  [defn-head] ${s.id}: comma-list heading "${s.heading}"`);
				tally.defnHead++;
			}
		}

		// [title-vo]
		if (s.type === 'title' && s.voiceover?.text && hasIntro) {
			lines.push(`  [title-vo] ${s.id}: title VO + introVoiceover (double announce)`);
			tally.titleVo++;
		}

		// [vo-dash]
		const vt = s.voiceover?.text;
		if (vt && /[—–]/.test(vt)) {
			const unvoiced = !s.voiceover.audioFile;
			lines.push(`  [vo-dash] ${s.id}: em/en dash in VO${unvoiced ? '' : ' (VOICED — manual)'}`);
			tally.voDash++;
			if (fix && unvoiced) {
				s.voiceover.text = vt.replace(/\s*[—–]\s*/g, ', ');
				delete s.voiceover.audioFile;
				delete s.captions;
				mutated = true;
				fixCount++;
			}
		}
	}

	if (lines.length > 0) {
		report.push(path.basename(file));
		report = report.concat(lines);
	}
	if (mutated) writeFileSync(file, JSON.stringify(d, null, 2) + '\n');
}

console.log(report.join('\n'));
console.log(`\nsweep: defn-hero=${tally.defnHero} defn-head=${tally.defnHead} title-vo=${tally.titleVo} vo-dash=${tally.voDash}`);
if (fix) console.log(`auto-fixed ${fixCount} unvoiced em-dash scene(s).`);
else console.log('run with --fix to apply safe auto-fixes (unvoiced em-dashes only).');
