#!/usr/bin/env node
// auto-sync-bullets — set each scene's bullet `at:` timestamps to the moment
// the narrator actually says them, using ElevenLabs' character-level
// alignment data saved alongside each MP3 by generate-elevenlabs-audio.mjs.
//
// Workflow:
//   1. Load a lesson JSON.
//   2. For each scene with bullets and an audioFile, load the .alignment.json
//      sidecar next to the MP3.
//   3. Build a word stream with word-level timestamps from the alignment.
//   4. For each bullet, extract 2–3 distinctive "anchor" words from the
//      bullet text and search the word stream for them in sequence.
//   5. The start time of the first matched word becomes the bullet's `at:`.
//   6. Write the updated lesson JSON back.
//
// Usage:
//   node scripts/auto-sync-bullets.mjs src/data/<lesson>.json
//   node scripts/auto-sync-bullets.mjs src/data/<lesson>.json --dry-run

import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const lessonPath = args.find((a) => !a.startsWith('--'));
const dryRun = args.includes('--dry-run');

if (!lessonPath) {
	console.error('Usage: node scripts/auto-sync-bullets.mjs <lesson-json> [--dry-run]');
	process.exit(1);
}

const STOP_WORDS = new Set([
	'a', 'an', 'and', 'or', 'the', 'is', 'are', 'was', 'were', 'be', 'been',
	'to', 'of', 'in', 'on', 'at', 'for', 'with', 'by', 'as', 'it', 'its',
	'this', 'that', 'these', 'those', 'we', 'you', 'your', 'our', 'i',
	's', 'll', 're', 've', 't', 'd', 'm', 'no', 'not',
]);

// Convert chemistry/math symbols to the words ElevenLabs reads them as,
// so the bullet text can be matched against the narrator's spoken word stream.
const SYMBOL_MAP = [
	[/ΔH/g, 'delta h'],
	[/ΔS/g, 'delta s'],
	[/ΔG/g, 'delta g'],
	[/ΔT/g, 'delta t'],
	[/Δn/g, 'delta n'],
	[/Δ/g, 'delta '],
	[/×/g, 'times'],
	[/÷/g, 'divided by'],
	[/→/g, 'gives'],
	[/⁻¹/g, ' to the minus one'],
	[/Nₐ/g, 'avogadros number'],
	[/Nₐ/g, 'avogadros number'],
	[/H₂O/g, 'h two o'],
	[/CO₂/g, 'co two'],
	[/O₂/g, 'o two'],
	[/N₂/g, 'n two'],
	[/H₂/g, 'h two'],
	[/NH₃/g, 'n h three'],
];

const normalizeText = (s) => {
	let out = s;
	for (const [re, replacement] of SYMBOL_MAP) out = out.replace(re, replacement);
	out = out.toLowerCase();
	// Strip punctuation except hyphen-inside-words and apostrophes
	out = out.replace(/[^a-z0-9\s'-]/g, ' ');
	return out;
};

const tokenize = (s) => normalizeText(s).split(/\s+/).filter(Boolean);

// Build a word stream from character-level alignment data.
// Each entry: {word, startTime, endTime, charStart, charEnd}
const buildWordStream = (alignment) => {
	const chars = alignment.characters;
	const starts = alignment.character_start_times_seconds;
	const ends = alignment.character_end_times_seconds;
	if (!chars || !starts || !ends) return [];

	const words = [];
	let curr = '';
	let currStart = -1;
	let currCharStart = -1;
	for (let i = 0; i < chars.length; i++) {
		const c = chars[i];
		const isWordChar = /[A-Za-z0-9'-]/.test(c);
		if (isWordChar) {
			if (curr === '') {
				currStart = starts[i];
				currCharStart = i;
			}
			curr += c;
		} else if (curr !== '') {
			words.push({
				word: normalizeText(curr),
				startTime: currStart,
				endTime: ends[i - 1],
				charStart: currCharStart,
				charEnd: i - 1,
			});
			curr = '';
		}
	}
	if (curr !== '') {
		words.push({
			word: normalizeText(curr),
			startTime: currStart,
			endTime: ends[chars.length - 1],
			charStart: currCharStart,
			charEnd: chars.length - 1,
		});
	}
	return words;
};

// Pick the first N "anchor" words from a bullet — non-stopword, length >= 3.
const pickAnchors = (bulletText, n = 3) => {
	const words = tokenize(bulletText);
	const anchors = [];
	for (const w of words) {
		if (STOP_WORDS.has(w)) continue;
		if (w.length < 3 && !/^[a-z]\d/.test(w)) continue;
		anchors.push(w);
		if (anchors.length >= n) break;
	}
	return anchors;
};

// Search the word stream for the anchor sequence starting at or after
// `searchFromIndex`. Returns {found, wordIndex, startTime} of the first
// matched anchor word, or null. Allows up to 6 intervening words between
// consecutive anchors (the narrator often paraphrases around bullet words).
const findAnchorSequence = (wordStream, anchors, searchFromIndex = 0) => {
	if (anchors.length === 0) return null;
	for (let i = searchFromIndex; i < wordStream.length; i++) {
		if (wordStream[i].word !== anchors[0]) continue;
		// Found anchor 0. Try to find the remaining anchors within a window.
		let lastMatch = i;
		let allFound = true;
		for (let a = 1; a < anchors.length; a++) {
			let foundNext = -1;
			for (let j = lastMatch + 1; j < Math.min(wordStream.length, lastMatch + 7); j++) {
				if (wordStream[j].word === anchors[a]) {
					foundNext = j;
					break;
				}
			}
			if (foundNext === -1) {
				allFound = false;
				break;
			}
			lastMatch = foundNext;
		}
		if (allFound) {
			return {found: true, wordIndex: i, startTime: wordStream[i].startTime};
		}
	}
	// Fall back to just the first anchor word alone (looser match).
	for (let i = searchFromIndex; i < wordStream.length; i++) {
		if (wordStream[i].word === anchors[0]) {
			return {found: true, wordIndex: i, startTime: wordStream[i].startTime, loose: true};
		}
	}
	return null;
};

const syncScene = (scene) => {
	if (!scene.bullets || scene.bullets.length === 0) return {status: 'no-bullets'};
	if (!scene.voiceover?.audioFile) return {status: 'no-audio'};

	const audioPath = scene.voiceover.audioFile;
	const alignmentPath = audioPath.replace(/\.mp3$/, '.alignment.json');
	if (!existsSync(alignmentPath)) {
		return {status: 'no-alignment', path: alignmentPath};
	}

	const alignment = JSON.parse(readFileSync(alignmentPath, 'utf8'));
	const wordStream = buildWordStream(alignment);
	if (wordStream.length === 0) return {status: 'empty-alignment'};

	const changes = [];
	let searchFrom = 0;

	for (let b = 0; b < scene.bullets.length; b++) {
		const bullet = scene.bullets[b];
		const text = typeof bullet === 'string' ? bullet : bullet.text;
		const oldAt = typeof bullet === 'object' ? bullet.at : null;

		const anchors = pickAnchors(text, 3);
		if (anchors.length === 0) {
			changes.push({bullet: b, status: 'no-anchors-extractable', text: text.slice(0, 40)});
			continue;
		}

		const match = findAnchorSequence(wordStream, anchors, searchFrom);
		if (!match) {
			changes.push({bullet: b, status: 'no-match', anchors, text: text.slice(0, 40)});
			continue;
		}

		// Snap forward — next bullet can't start before the current one's anchor.
		searchFrom = match.wordIndex + 1;

		const newAt = Math.max(0, Math.round(match.startTime * 100) / 100);

		// Replace bullet entry with object form including new at
		if (typeof bullet === 'string') {
			scene.bullets[b] = {text: bullet, at: newAt};
		} else {
			bullet.at = newAt;
		}

		changes.push({
			bullet: b,
			status: match.loose ? 'matched-loose' : 'matched',
			anchors,
			oldAt,
			newAt,
			text: text.slice(0, 40),
		});
	}

	return {status: 'synced', changes};
};

// ---------- main ----------

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
console.log(`Auto-syncing bullets in ${path.basename(lessonPath)}`);
console.log(`${dryRun ? '(dry run — no writes)' : '(writing changes)'}\n`);

let syncedScenes = 0;
let totalBullets = 0;
let totalMatched = 0;
let totalLoose = 0;

for (const scene of lesson.scenes) {
	const result = syncScene(scene);
	if (result.status === 'synced') {
		syncedScenes++;
		console.log(`[${scene.id}]`);
		for (const c of result.changes) {
			totalBullets++;
			if (c.status === 'matched' || c.status === 'matched-loose') totalMatched++;
			if (c.status === 'matched-loose') totalLoose++;
			const arrow = c.status === 'matched' ? '✓' : c.status === 'matched-loose' ? '~' : '✗';
			const at = c.newAt !== undefined ? `${c.oldAt ?? '-'} → ${c.newAt}s` : '(unchanged)';
			console.log(`  ${arrow} bullet ${c.bullet}: ${at}  — anchors: [${(c.anchors || []).join(', ')}]  "${c.text}"`);
		}
	} else if (result.status === 'no-alignment') {
		console.log(`[${scene.id}] no alignment file at ${result.path}`);
	} else if (result.status === 'no-bullets' || result.status === 'no-audio') {
		// silent — common case
	}
}

console.log('');
console.log(`Synced scenes:  ${syncedScenes}`);
console.log(`Bullets total:  ${totalBullets}`);
console.log(`Bullets matched: ${totalMatched} (${totalLoose} via loose match)`);
console.log(`Bullets failed:  ${totalBullets - totalMatched}`);

if (!dryRun && syncedScenes > 0) {
	writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
	console.log(`\nWrote ${lessonPath}`);
}
