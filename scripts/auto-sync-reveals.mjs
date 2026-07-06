#!/usr/bin/env node
// auto-sync-reveals — set each scene's revealDelays so each visual element
// appears when the narrator is actually talking about it.
//
// Two-step strategy per element:
//   1. ANCHOR MATCH — pick 2–3 distinctive words from the element's text,
//      search the alignment word stream, and reveal at that timestamp.
//   2. PROPORTIONAL FALLBACK — if no match (narration paraphrases too far),
//      use a slide-type-specific fraction of the audio duration.
//
// Result: a heading whose first words appear in the narration syncs exactly;
// a callout whose punchline is paraphrased still lands in the right ballpark.

import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const lessonPath = args.find((a) => !a.startsWith('--'));
const dryRun = args.includes('--dry-run');
const verbose = args.includes('--verbose');

if (!lessonPath) {
	console.error('Usage: node scripts/auto-sync-reveals.mjs <lesson-json> [--dry-run] [--verbose]');
	process.exit(1);
}

const STOP_WORDS = new Set([
	'a','an','and','or','the','is','are','was','were','be','been','to','of','in','on','at','for','with','by','as','it','its','this','that','these','those','we','you','your','our','i','s','ll','re','ve','t','d','m','no','not','if','do','does','did','can','will','from','one','what','when','where','how','why','so','then','than','now','up','out','about','into','any','also','like','just','only','very','some','more','most','other',
]);

const SYMBOL_MAP = [
	[/ΔH/g, 'delta h'],[/ΔS/g, 'delta s'],[/ΔG/g, 'delta g'],[/Δ/g, 'delta '],
	[/×/g, 'times'],[/÷/g, 'divided by'],[/→/g, 'gives'],[/⁻¹/g, ' to the minus one'],
	[/Nₐ/g, 'avogadros number'],[/N_?A/g, 'avogadros number'],
	[/H₂O/g, 'h two o'],[/CO₂/g, 'co two'],[/O₂/g, 'o two'],[/N₂/g, 'n two'],[/H₂/g, 'h two'],[/NH₃/g, 'n h three'],
];

const normalizeText = (s) => {
	let out = String(s ?? '');
	for (const [re, replacement] of SYMBOL_MAP) out = out.replace(re, replacement);
	out = out.toLowerCase();
	out = out.replace(/[^a-z0-9\s'-]/g, ' ');
	return out;
};

const tokenize = (s) => normalizeText(s).split(/\s+/).filter(Boolean);

const buildWordStream = (alignment) => {
	const chars = alignment.characters;
	const starts = alignment.character_start_times_seconds;
	const ends = alignment.character_end_times_seconds;
	if (!chars || !starts || !ends) return [];
	const words = [];
	let curr = '', currStart = -1;
	for (let i = 0; i < chars.length; i++) {
		const c = chars[i];
		const isWordChar = /[A-Za-z0-9'-]/.test(c);
		if (isWordChar) {
			if (curr === '') currStart = starts[i];
			curr += c;
		} else if (curr !== '') {
			words.push({word: normalizeText(curr), startTime: currStart, endTime: ends[i - 1]});
			curr = '';
		}
	}
	if (curr !== '') words.push({word: normalizeText(curr), startTime: currStart, endTime: ends[chars.length - 1]});
	return words;
};

const pickAnchors = (text, n = 3) => {
	const words = tokenize(text);
	const anchors = [];
	for (const w of words) {
		if (STOP_WORDS.has(w)) continue;
		if (w.length < 3 && !/^[a-z]\d/.test(w)) continue;
		anchors.push(w);
		if (anchors.length >= n) break;
	}
	return anchors;
};

const findAnchorSequence = (wordStream, anchors, searchFromIndex = 0) => {
	if (anchors.length === 0) return null;
	for (let i = searchFromIndex; i < wordStream.length; i++) {
		if (wordStream[i].word !== anchors[0]) continue;
		let lastMatch = i, allFound = true;
		for (let a = 1; a < anchors.length; a++) {
			let foundNext = -1;
			for (let j = lastMatch + 1; j < Math.min(wordStream.length, lastMatch + 8); j++) {
				if (wordStream[j].word === anchors[a]) {foundNext = j; break;}
			}
			if (foundNext === -1) {allFound = false; break;}
			lastMatch = foundNext;
		}
		if (allFound) return {wordIndex: i, startTime: wordStream[i].startTime};
	}
	// Loose fallback: just first anchor alone
	for (let i = searchFromIndex; i < wordStream.length; i++) {
		if (wordStream[i].word === anchors[0]) {
			return {wordIndex: i, startTime: wordStream[i].startTime, loose: true};
		}
	}
	return null;
};

// Slide-type → reveal fields. Each entry says:
//   - text(scene): function returning the text to anchor against, or null
//   - fraction: proportional fallback (0–1 of audio duration)
const PROFILES = {
	hook: [
		{field: 'heading',      text: () => null,                        fraction: 0.02},
		{field: 'glyph',        text: () => null,                        fraction: 0.05},
		{field: 'body',         text: () => null,                        fraction: 0.10},
		{field: 'bulletsStart', text: (s) => s.bullets?.[0]?.text ?? s.bullets?.[0],  fraction: 0.12},
		{field: 'annotation',   text: (s) => s.annotation,               fraction: 0.40},
		{field: 'callout',      text: (s) => s.callout,                  fraction: 0.78},
	],
	concept: [
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.04},
		{field: 'diagram',      text: () => null,                        fraction: 0.12},
		{field: 'body',         text: (s) => s.body,                     fraction: 0.10},
		{field: 'bulletsStart', text: (s) => s.bullets?.[0]?.text ?? s.bullets?.[0],  fraction: 0.12},
		{field: 'secondary',    text: (s) => s.secondary,                fraction: 0.45},
		{field: 'callout',      text: (s) => s.callout,                  fraction: 0.78},
	],
	definition: [
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.04},
		// bulletsStart must come right after heading so monotonic
		// enforcement doesn't push it past the first bullet's narration
		// timestamp via the chrome fields (circle/unitTable/diagram).
		{field: 'bulletsStart', text: (s) => s.bullets?.[0]?.text ?? s.bullets?.[0],  fraction: 0.06},
		{field: 'hero',         text: (s) => s.heading,                  fraction: 0.06},
		{field: 'circle',       text: () => null,                        fraction: 0.10},
		{field: 'unitTable',    text: () => null,                        fraction: 0.12},
		{field: 'diagram',      text: () => null,                        fraction: 0.12},
		{field: 'annotation',   text: (s) => s.annotation,               fraction: 0.18},
		{field: 'subheading',   text: (s) => s.subheading,               fraction: 0.20},
		{field: 'body',         text: (s) => s.body,                     fraction: 0.30},
		{field: 'highlight',    text: (s) => s.body,                     fraction: 0.45},
		{field: 'secondary',    text: (s) => s.secondary,                fraction: 0.55},
		{field: 'callout',      text: (s) => s.callout,                  fraction: 0.82},
	],
	formula: [
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.04},
		{field: 'diagram',      text: () => null,                        fraction: 0.12},
		{field: 'notes',        text: (s) => s.secondary,                fraction: 0.55},
		{field: 'callout',      text: (s) => s.callout,                  fraction: 0.78},
	],
	workedExample: [
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.04},
		{field: 'diagram',      text: () => null,                        fraction: 0.10},
		{field: 'coachNote',    text: (s) => s.coachNote,                fraction: 0.08},
		{field: 'stepsStart',   text: (s) => s.steps?.[0],               fraction: 0.12},
	],
	misconception: [
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.04},
		{field: 'diagram',      text: () => null,                        fraction: 0.12},
		{field: 'mistakeTag',   text: (s) => s.mistakeTag,               fraction: 0.08},
		{field: 'wrongCard',    text: (s) => s.body,                     fraction: 0.20},
		{field: 'rightCard',    text: (s) => s.secondary,                fraction: 0.50},
		{field: 'callout',      text: (s) => s.callout,                  fraction: 0.82},
	],
	quickCheck: [
		{field: 'pauseBadge',   text: () => null,                        fraction: 0.03},
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.05},
		{field: 'diagram',      text: () => null,                        fraction: 0.10},
		{field: 'pausePrompt',  text: (s) => s.pausePrompt ?? 'pause',   fraction: 0.20},
		{field: 'answerStart',  text: (s) => s.answerSteps?.[0],         fraction: 0.20},
	],
	summary: [
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.04},
		{field: 'diagram',      text: () => null,                        fraction: 0.12},
		{field: 'takeawaysStart',text: (s) => s.takeaways?.[0]?.text ?? s.takeaways?.[0], fraction: 0.10},
		{field: 'finalPrompt',  text: (s) => s.finalPrompt,              fraction: 0.85},
	],
	marginalia: [
		{field: 'card',         text: () => null,                        fraction: 0.04},
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.06},
		{field: 'body',         text: (s) => s.body,                     fraction: 0.12},
		{field: 'diagram',      text: () => null,                        fraction: 0.18},
	],
	labFootage: [
		{field: 'heading',      text: (s) => s.heading,                  fraction: 0.04},
		{field: 'body',         text: (s) => s.body,                     fraction: 0.12},
		{field: 'visual',       text: () => null,                        fraction: 0.08},
	],
	title: [],
};

const MIN_DELAY_FRAMES = 12;

const getAlignment = (audioFile) => {
	if (!audioFile) return null;
	const ap = audioFile.replace(/\.mp3$/, '.alignment.json');
	if (!existsSync(ap)) return null;
	return JSON.parse(readFileSync(ap, 'utf8'));
};

const computeIntervals = (scene, audioDur, fps, profile, wordStream) => {
	// Two special "interval" fields — gaps between repeated elements, not absolute times.
	const intervals = {};
	if (scene.type === 'workedExample' && scene.steps?.length > 1) {
		const stepsStartSec = (profile.find((p) => p.field === 'stepsStart')?.fraction ?? 0.12) * audioDur;
		const remainSec = Math.max(2, audioDur - stepsStartSec - 1);
		intervals.stepInterval = Math.max(30, Math.round((remainSec / scene.steps.length) * fps));

		// Per-step anchored timings — match each "Known:/Find:/Formula:/Substitute:/Answer:"
		// step to the moment the narrator works through it. Falls back to uniform
		// spacing for steps whose key words aren't said.
		if (wordStream.length > 0) {
			const ats = [];
			let searchFrom = 0;
			const uniformIntervalSec = remainSec / scene.steps.length;
			for (let i = 0; i < scene.steps.length; i++) {
				const stepText = scene.steps[i];
				const anchors = pickAnchors(stepText, 3);
				const uniformSec = stepsStartSec + i * uniformIntervalSec;
				let resolvedSec = uniformSec;

				if (anchors.length > 0) {
					const match = findAnchorSequence(wordStream, anchors, searchFrom);
					if (match) {
						const candidateSec = match.startTime;
						const disagreement = Math.abs(candidateSec - uniformSec) / audioDur;
						if (disagreement <= 0.25 || !match.loose) {
							resolvedSec = candidateSec;
							searchFrom = match.wordIndex + 1;
						}
					}
				}

				const prevSec = i > 0 ? ats[i - 1] / fps : 0;
				const monotonic = Math.max(resolvedSec, prevSec);
				ats.push(Math.max(MIN_DELAY_FRAMES, Math.round(monotonic * fps)));
			}
			intervals.stepAts = ats;
		}
	}
	if (scene.type === 'summary') {
		const points = scene.points || scene.takeaways || [];
		if (points.length > 0) {
			const takeawaysStartSec = (profile.find((p) => p.field === 'takeawaysStart')?.fraction ?? 0.10) * audioDur;
			const remainSec = Math.max(2, audioDur - takeawaysStartSec - 2);
			intervals.takeawayInterval = Math.max(36, Math.round((remainSec / points.length) * fps));

			// Per-takeaway anchored timings — anchor-match each point's first
			// distinctive words against the narration. Falls back to uniform
			// spacing if a point's anchors aren't said.
			if (wordStream.length > 0) {
				const ats = [];
				let searchFrom = 0;
				const uniformStartSec = takeawaysStartSec;
				const uniformIntervalSec = (audioDur - uniformStartSec - 1) / Math.max(1, points.length);
				for (let i = 0; i < points.length; i++) {
					const pointText = typeof points[i] === 'string' ? points[i] : points[i].text || points[i].title || '';
					const anchors = pickAnchors(pointText, 3);
					const uniformSec = uniformStartSec + i * uniformIntervalSec;
					let resolvedSec = uniformSec;

					if (anchors.length > 0) {
						const match = findAnchorSequence(wordStream, anchors, searchFrom);
						if (match) {
							const candidateSec = match.startTime;
							const disagreement = Math.abs(candidateSec - uniformSec) / audioDur;
							// Slightly looser tolerance than reveal sync since
							// summary points often paraphrase the rubric copy.
							if (disagreement <= 0.25 || !match.loose) {
								resolvedSec = candidateSec;
								searchFrom = match.wordIndex + 1;
							}
						}
					}

					// Maintain monotonic order — point i+1 must not appear before point i.
					const prevSec = i > 0 ? ats[i - 1] / fps : 0;
					const monotonic = Math.max(resolvedSec, prevSec);
					ats.push(Math.max(MIN_DELAY_FRAMES, Math.round(monotonic * fps)));
				}
				intervals.takeawayAts = ats;
			}
		}
	}
	return intervals;
};

const syncScene = (scene, fps) => {
	const profile = PROFILES[scene.type];
	if (!profile) return {status: 'no-profile', type: scene.type};
	if (profile.length === 0) return {status: 'profile-empty'};

	const alignment = getAlignment(scene.voiceover?.audioFile);
	if (!alignment) return {status: 'no-audio'};
	const ends = alignment.character_end_times_seconds || [];
	if (ends.length === 0) return {status: 'empty-alignment'};
	const audioDur = ends[ends.length - 1];

	const wordStream = buildWordStream(alignment);
	const sceneDurSec = scene.durationInFrames / fps;
	const usableSec = Math.max(2, Math.min(audioDur, sceneDurSec - 1));

	const newRd = {...(scene.revealDelays || {})};
	const changes = [];
	let searchFrom = 0;
	let lastTimeSec = 0;

	// Anchor sanity tolerance — distrust anchor matches that disagree with
	// the proportional placement by more than this fraction of audio length.
	// Common when the author phrases the slide differently from narration
	// (e.g. wrongCard says "swapping" but narrator says "confusing").
	const ANCHOR_TRUST_TOLERANCE = 0.20;

	for (const entry of profile) {
		const proportionalSec = entry.fraction * usableSec;

		const elementText = entry.text(scene);
		let matchedSec = null, matchKind = 'proportional';

		if (elementText && wordStream.length > 0) {
			const anchors = pickAnchors(elementText, 3);
			if (anchors.length > 0) {
				const match = findAnchorSequence(wordStream, anchors, searchFrom);
				if (match) {
					const candidateSec = match.startTime;
					const disagreement = Math.abs(candidateSec - proportionalSec) / audioDur;
					if (disagreement <= ANCHOR_TRUST_TOLERANCE || !match.loose) {
						// Trust this match. Strict (full-anchor-sequence) matches
						// always win; loose matches only win if they agree with
						// the proportional ballpark.
						matchedSec = candidateSec;
						matchKind = match.loose ? 'anchor-loose' : 'anchor';
						searchFrom = match.wordIndex + 1;
					} else {
						matchKind = 'anchor-distrusted';
					}
				}
			}
		}

		const useSec = matchedSec !== null ? matchedSec : proportionalSec;

		// Monotonic enforcement: never reveal earlier than the previous element.
		// The profile order encodes author-intended reveal sequence, so a
		// bad anchor on a later element shouldn't make it appear before its
		// predecessor.
		const monotonicSec = Math.max(useSec, lastTimeSec);
		const clampedSec = Math.max(0, Math.min(monotonicSec, usableSec));
		const frames = Math.max(MIN_DELAY_FRAMES, Math.round(clampedSec * fps));

		newRd[entry.field] = frames;
		changes.push({field: entry.field, frames, sec: clampedSec.toFixed(2), kind: matchKind, propSec: proportionalSec.toFixed(2)});
		lastTimeSec = monotonicSec;
	}

	// Intervals (gaps between repeated children)
	const intervals = computeIntervals(scene, audioDur, fps, profile, wordStream);
	for (const [k, v] of Object.entries(intervals)) {
		newRd[k] = v;
		changes.push({field: k, frames: v, kind: 'interval'});
	}

	scene.revealDelays = newRd;
	return {status: 'synced', audioDur, changes};
};

// ---------- main ----------

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const fps = lesson.fps || 30;
console.log(`Auto-syncing reveals in ${path.basename(lessonPath)} (fps=${fps})`);
console.log(`${dryRun ? '(dry run — no writes)' : '(writing changes)'}\n`);

let synced = 0, skipped = 0, anchorHits = 0, propFallbacks = 0;
const unknownTypes = new Set();

for (const scene of lesson.scenes) {
	const result = syncScene(scene, fps);
	if (result.status === 'synced') {
		synced++;
		console.log(`[${scene.id}] type=${scene.type} audio=${result.audioDur.toFixed(1)}s`);
		for (const c of result.changes) {
			if (c.kind === 'anchor') anchorHits++;
			else if (c.kind === 'anchor-loose') anchorHits++;
			else if (c.kind === 'proportional') propFallbacks++;
			const mark = c.kind === 'anchor' ? '✓' : c.kind === 'anchor-loose' ? '~' : c.kind === 'interval' ? '·' : ' ';
			const detail = c.sec !== undefined ? `${c.frames}f (${c.sec}s) [${c.kind}]` : `${c.frames}f [${c.kind}]`;
			if (verbose || c.kind !== 'proportional') console.log(`  ${mark} ${c.field.padEnd(18)} → ${detail}`);
		}
	} else if (result.status === 'no-profile') {
		skipped++;
		unknownTypes.add(result.type);
	} else {
		skipped++;
	}
}

console.log('');
console.log(`Synced:   ${synced} scenes`);
console.log(`Skipped:  ${skipped} scenes`);
console.log(`Anchor hits:        ${anchorHits}`);
console.log(`Proportional falls: ${propFallbacks}`);
if (unknownTypes.size > 0) console.log(`No profile for types: ${[...unknownTypes].join(', ')}`);

if (!dryRun && synced > 0) {
	writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
	console.log(`\nWrote ${lessonPath}`);
}
