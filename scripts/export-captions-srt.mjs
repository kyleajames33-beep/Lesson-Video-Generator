#!/usr/bin/env node
// export-captions-srt — writes a lesson's word-level captions to BOTH SRT
// and WebVTT formats. SRT is what YouTube ingests for searchable closed
// captions; VTT is the modern web-video standard (used by Vimeo, HTML5
// players, hscscience.com.au).
//
// Groups word tokens into phrase-sized cues using a max-words-per-cue
// rule so a human can read each cue at a glance. The Remotion video
// keeps the per-word burned-in highlight; this export is for off-platform
// distribution where word-by-word would be visually noisy.
//
// Output: out/captions/<compositionId>.srt
//         out/captions/<compositionId>.vtt
//
// Usage:
//   node scripts/export-captions-srt.mjs src/data/<lesson>.json [...more]
//
// When multiple lessons are passed, each is exported as its own file
// AND a combined "<primary>-combined.srt/vtt" file is produced (for the
// notes-style Part A + Part B unification).

import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import {getCompositionId} from './lesson-utils.mjs';
import {INTRO_STINGER_FRAMES, TRANSITION_FRAMES} from './_yt-constants.mjs';

const args = process.argv.slice(2);
const lessonPaths = args.filter((a) => !a.startsWith('--'));
const maxWordsPerCue = Number(args.find((a) => a.startsWith('--max-words='))?.split('=')[1] ?? 8);
const maxCueDuration = Number(args.find((a) => a.startsWith('--max-duration='))?.split('=')[1] ?? 4.5);

if (lessonPaths.length === 0) {
	console.error('Usage: node scripts/export-captions-srt.mjs <lesson.json> [more.json ...] [--max-words=8] [--max-duration=4.5]');
	process.exit(1);
}

// Format a time as SRT-style "HH:MM:SS,mmm" or VTT-style "HH:MM:SS.mmm".
const fmtTime = (ms, separator) => {
	const total = Math.max(0, Math.floor(ms));
	const h = Math.floor(total / 3_600_000);
	const m = Math.floor((total % 3_600_000) / 60_000);
	const s = Math.floor((total % 60_000) / 1000);
	const mil = total % 1000;
	return (
		String(h).padStart(2, '0') + ':' +
		String(m).padStart(2, '0') + ':' +
		String(s).padStart(2, '0') + separator +
		String(mil).padStart(3, '0')
	);
};

// Group word tokens into readable cues. Rules:
//   - Hard split on sentence end (.!?)
//   - Soft split when cue reaches MAX_WORDS or MAX_DURATION
//   - Each cue's text concatenates the word tokens (which already include
//     their own leading spaces, so we just join).
const groupIntoCues = (captions) => {
	const cues = [];
	let buf = [];
	let bufStart = -1;

	const flush = (endMs) => {
		if (buf.length === 0) return;
		const text = buf.map((c) => c.text).join('').trim();
		cues.push({startMs: bufStart, endMs, text});
		buf = [];
		bufStart = -1;
	};

	for (let i = 0; i < captions.length; i++) {
		const c = captions[i];
		if (buf.length === 0) bufStart = c.startMs;
		buf.push(c);
		const endsSentence = /[.!?]$/.test(c.text.trim());
		const reachedMaxWords = buf.length >= maxWordsPerCue;
		const reachedMaxDuration = (c.endMs - bufStart) / 1000 >= maxCueDuration;
		const isLast = i === captions.length - 1;
		if (endsSentence || reachedMaxWords || reachedMaxDuration || isLast) {
			flush(c.endMs);
		}
	}
	return cues;
};

// Render to SRT format.
const toSrt = (cues, frameOffsetMs = 0) => {
	return cues
		.map((c, i) => {
			const start = fmtTime(c.startMs + frameOffsetMs, ',');
			const end = fmtTime(c.endMs + frameOffsetMs, ',');
			return `${i + 1}\n${start} --> ${end}\n${c.text}\n`;
		})
		.join('\n');
};

// Render to WebVTT format.
const toVtt = (cues, frameOffsetMs = 0) => {
	const body = cues
		.map((c) => {
			const start = fmtTime(c.startMs + frameOffsetMs, '.');
			const end = fmtTime(c.endMs + frameOffsetMs, '.');
			return `${start} --> ${end}\n${c.text}\n`;
		})
		.join('\n');
	return `WEBVTT\n\n${body}`;
};

const outDir = path.resolve('out/captions');
if (!existsSync(outDir)) mkdirSync(outDir, {recursive: true});

const stingerOffsetMs = (INTRO_STINGER_FRAMES / 30) * 1000;
const combinedCues = [];
let cumulativeOffsetMs = stingerOffsetMs;
let primaryCompositionId = null;

for (let lessonIdx = 0; lessonIdx < lessonPaths.length; lessonIdx++) {
	const lessonPath = lessonPaths[lessonIdx];
	const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
	const compositionId = getCompositionId(lesson);
	if (lessonIdx === 0) primaryCompositionId = compositionId;
	const fps = lesson.fps || 30;

	// Gather cues per scene, shifting each by the scene's start within the lesson
	const cuesForLesson = [];
	let sceneStartMs = stingerOffsetMs;
	for (let i = 0; i < lesson.scenes.length; i++) {
		const scene = lesson.scenes[i];
		if (Array.isArray(scene.captions) && scene.captions.length > 0) {
			const sceneCues = groupIntoCues(scene.captions);
			for (const c of sceneCues) {
				cuesForLesson.push({
					text: c.text,
					startMs: c.startMs + sceneStartMs,
					endMs: c.endMs + sceneStartMs,
				});
			}
		}
		const sceneDurationMs = (scene.durationInFrames / fps) * 1000;
		const transitionShift = i < lesson.scenes.length - 1 ? (TRANSITION_FRAMES / fps) * 1000 : 0;
		sceneStartMs += sceneDurationMs - transitionShift;
	}

	const srtPath = path.join(outDir, `${compositionId}.srt`);
	const vttPath = path.join(outDir, `${compositionId}.vtt`);
	writeFileSync(srtPath, toSrt(cuesForLesson));
	writeFileSync(vttPath, toVtt(cuesForLesson));
	console.log(`✓ ${compositionId}: ${cuesForLesson.length} cues → ${srtPath}, ${vttPath}`);

	// Append into combined (with running offset across lessons)
	if (lessonPaths.length > 1) {
		for (const c of cuesForLesson) {
			combinedCues.push({
				text: c.text,
				startMs: c.startMs - stingerOffsetMs + cumulativeOffsetMs,
				endMs: c.endMs - stingerOffsetMs + cumulativeOffsetMs,
			});
		}
		const lessonRawMs = lesson.scenes.reduce((t, s) => t + (s.durationInFrames / fps) * 1000, 0);
		const lessonTransMs = (lesson.scenes.length - 1) * (TRANSITION_FRAMES / fps) * 1000;
		cumulativeOffsetMs += (lessonRawMs - lessonTransMs);
	}
}

if (lessonPaths.length > 1 && primaryCompositionId) {
	const combinedSrt = path.join(outDir, `${primaryCompositionId}-combined.srt`);
	const combinedVtt = path.join(outDir, `${primaryCompositionId}-combined.vtt`);
	writeFileSync(combinedSrt, toSrt(combinedCues));
	writeFileSync(combinedVtt, toVtt(combinedCues));
	console.log(`✓ combined: ${combinedCues.length} cues → ${combinedSrt}, ${combinedVtt}`);
}

console.log('\nPaste the .srt into YouTube → CC menu → Add new subtitles → Upload file.');
console.log('Use the .vtt on your own site (HTML5 <track kind="captions" src="...vtt">).');
