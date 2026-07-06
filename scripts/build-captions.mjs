#!/usr/bin/env node
// build-captions — compile each scene's character-level alignment data
// into the canonical @remotion/captions `Caption[]` format, baked into
// the lesson JSON as `scene.captions`.
//
// We emit ONE caption per WORD (not per phrase). The Remotion runtime
// pages these into screen-sized chunks via createTikTokStyleCaptions()
// and uses the per-word timestamps for spoken-word highlighting.
//
// Caption shape (matches @remotion/captions/Caption):
//   { text: " word ", startMs, endMs, timestampMs, confidence }
//
// Whitespace note: each word's `text` is prefixed with a single space so
// when tokens are concatenated they read as natural prose (per the skill's
// rule).
//
// Usage:
//   node scripts/build-captions.mjs src/data/<lesson>.json [--dry-run]

import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const lessonPath = args.find((a) => !a.startsWith('--'));
const dryRun = args.includes('--dry-run');

if (!lessonPath) {
	console.error('Usage: node scripts/build-captions.mjs <lesson-json> [--dry-run]');
	process.exit(1);
}

const buildWordStream = (alignment) => {
	const chars = alignment.characters || [];
	const starts = alignment.character_start_times_seconds || [];
	const ends = alignment.character_end_times_seconds || [];
	const words = [];
	let curr = '';
	let currStart = -1;
	for (let i = 0; i < chars.length; i++) {
		const c = chars[i];
		// Keep punctuation attached to the current word so captions read
		// naturally ("word," not "word" + "," as separate tokens).
		const isWordChar = /[A-Za-z0-9'\-]/.test(c);
		const isPunct = /[.,!?;:—–-]/.test(c);
		if (isWordChar) {
			if (curr === '') currStart = starts[i];
			curr += c;
		} else if (isPunct && curr !== '') {
			curr += c;
		} else if (curr !== '') {
			words.push({word: curr, startSec: currStart, endSec: ends[i - 1] ?? starts[i]});
			curr = '';
		}
	}
	if (curr !== '' && ends.length > 0) {
		words.push({word: curr, startSec: currStart, endSec: ends[ends.length - 1]});
	}
	return words;
};

const wordsToCaptions = (words) => {
	return words.map((w, i) => {
		const startMs = Math.round(w.startSec * 1000);
		const endMs = Math.round(w.endSec * 1000);
		// Leading space on every token except the first (skill recommends
		// including spaces in the text field so tokens concatenate cleanly).
		const text = (i === 0 ? '' : ' ') + w.word;
		return {
			text,
			startMs,
			endMs,
			// timestampMs is the canonical "when this word is said" anchor —
			// use the word midpoint so highlight switches feel even.
			timestampMs: Math.round((w.startSec + w.endSec) * 500),
			// ElevenLabs alignment doesn't expose per-word confidence — leave null.
			confidence: null,
		};
	});
};

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
console.log(`Building word-level captions for ${path.basename(lessonPath)}`);

let scenesWith = 0;
let totalWords = 0;

for (const scene of lesson.scenes) {
	const audioFile = scene.voiceover?.audioFile;
	if (!audioFile) continue;
	const alignmentPath = audioFile.replace(/\.mp3$/, '.alignment.json');
	if (!existsSync(alignmentPath)) continue;

	const alignment = JSON.parse(readFileSync(alignmentPath, 'utf8'));
	const words = buildWordStream(alignment);
	const captions = wordsToCaptions(words);
	scene.captions = captions;
	scenesWith++;
	totalWords += words.length;
	const lastEnd = captions.length > 0 ? captions[captions.length - 1].endMs : 0;
	console.log(`  [${scene.id.padEnd(24)}] ${words.length} words, ${(lastEnd / 1000).toFixed(1)}s`);
}

console.log(`\n${scenesWith} scenes captioned, ${totalWords} total word tokens`);

if (!dryRun && scenesWith > 0) {
	writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
	console.log(`Wrote ${lessonPath}`);
}
