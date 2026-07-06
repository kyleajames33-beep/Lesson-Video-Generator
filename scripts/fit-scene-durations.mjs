#!/usr/bin/env node
// fit-scene-durations — set each scene's durationInFrames to match its
// generated audio length + a small tail buffer for the last reveal to
// breathe before cutting. Solves both:
//   - scene ends before audio finishes (audio cut off)
//   - scene runs 10s past audio end (dead air)
//
// Usage:
//   node scripts/fit-scene-durations.mjs <lesson-json> [--tail-seconds=1.5] [--dry-run]

import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const lessonPath = args.find((a) => !a.startsWith('--'));
const dryRun = args.includes('--dry-run');
const tailArg = args.find((a) => a.startsWith('--tail-seconds='));
const TAIL = tailArg ? Number(tailArg.split('=')[1]) : 1.5;

if (!lessonPath) {
	console.error('Usage: node scripts/fit-scene-durations.mjs <lesson-json> [--tail-seconds=1.5]');
	process.exit(1);
}

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const fps = lesson.fps || 30;
console.log(`Fitting scene durations in ${path.basename(lessonPath)} (tail=${TAIL}s, fps=${fps})\n`);

let changed = 0;
for (const scene of lesson.scenes) {
	const audioPath = scene.voiceover?.audioFile;
	if (!audioPath) continue;
	const alignmentPath = audioPath.replace(/\.mp3$/, '.alignment.json');
	if (!existsSync(alignmentPath)) continue;

	const a = JSON.parse(readFileSync(alignmentPath, 'utf8'));
	const ends = a.character_end_times_seconds || [];
	if (ends.length === 0) continue;
	const audioDur = ends[ends.length - 1];

	const targetSec = audioDur + TAIL;
	const newFrames = Math.ceil(targetSec * fps);
	const oldFrames = scene.durationInFrames;
	const oldSec = (oldFrames / fps).toFixed(1);
	const newSec = (newFrames / fps).toFixed(1);

	const arrow = newFrames !== oldFrames ? (newFrames > oldFrames ? '⬆' : '⬇') : '=';
	console.log(`  ${arrow} ${scene.id.padEnd(24)} audio=${audioDur.toFixed(1)}s  scene ${oldSec}s → ${newSec}s  (${oldFrames}f → ${newFrames}f)`);

	if (newFrames !== oldFrames) {
		scene.durationInFrames = newFrames;
		changed++;
	}
}

if (!dryRun && changed > 0) {
	writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
	console.log(`\nWrote ${lessonPath} (${changed} scenes resized)`);
} else {
	console.log(`\n${changed} scenes would resize${dryRun ? ' (dry run)' : ' (no writes needed)'}`);
}
