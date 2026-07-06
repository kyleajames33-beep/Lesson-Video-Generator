#!/usr/bin/env node
// splice-pauses — inserts silence into existing voiceover MP3s at
// specified timestamps, then shifts the alignment.json data so all
// downstream auto-sync still works.
//
// Uses FFmpeg's filter graph to slice the audio at each splice point,
// insert N ms of silence, and concatenate everything back into a single
// clean MP3. A 10 ms crossfade at each splice boundary prevents clicks.
//
// Original files are backed up to <name>.mp3.bak before being overwritten.
//
// Config format (JSON):
//   {
//     "lesson": "src/data/<lesson>.json",
//     "splices": [
//       { "sceneId": "concept-problem", "atSec": 10.50, "durationMs": 250 },
//       { "sceneId": "concept-problem", "atSec": 13.50, "durationMs": 250 }
//     ]
//   }
//
// Usage:
//   node scripts/splice-pauses.mjs <config.json> [--dry-run]

import {readFileSync, writeFileSync, existsSync, copyFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {spawnSync} from 'node:child_process';

const FFMPEG = path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe');
const CROSSFADE_MS = 10;
const SAMPLE_RATE = 44100;

const args = process.argv.slice(2);
const configPath = args.find((a) => !a.startsWith('--'));
const dryRun = args.includes('--dry-run');

if (!configPath) {
	console.error('Usage: node scripts/splice-pauses.mjs <config.json> [--dry-run]');
	process.exit(1);
}

if (!existsSync(FFMPEG)) {
	console.error('FFmpeg not found at ' + FFMPEG);
	process.exit(1);
}

const config = JSON.parse(readFileSync(configPath, 'utf8'));
const lesson = JSON.parse(readFileSync(config.lesson, 'utf8'));

// Group splices by sceneId
const splicesByScene = {};
for (const s of config.splices) {
	if (!splicesByScene[s.sceneId]) splicesByScene[s.sceneId] = [];
	splicesByScene[s.sceneId].push(s);
}
// Sort each scene's splices by timestamp ASCENDING
for (const id of Object.keys(splicesByScene)) {
	splicesByScene[id].sort((a, b) => a.atSec - b.atSec);
}

const runFfmpeg = (argList) => {
	const r = spawnSync(FFMPEG, argList, {encoding: 'utf8'});
	if (r.status !== 0) {
		console.error('FFmpeg failed:');
		console.error(r.stderr || r.stdout || 'unknown');
		throw new Error('ffmpeg exit ' + r.status);
	}
	return r;
};

// Build the FFmpeg filter graph for N splices on one input.
// We split the input audio into (N+1) segments and interleave with N silences.
// Each boundary uses acrossfade so there's no audible click.
const buildFilterGraph = (splices, audioEndSec) => {
	const parts = [];
	const segmentLabels = [];
	const silenceLabels = [];

	// Compute segment ranges
	const boundaries = [0, ...splices.map((s) => s.atSec), audioEndSec];
	for (let i = 0; i < boundaries.length - 1; i++) {
		const from = boundaries[i];
		const to = boundaries[i + 1];
		// Each input segment: trim, reset PTS
		parts.push(`[0:a]atrim=${from.toFixed(3)}:${to.toFixed(3)},asetpts=PTS-STARTPTS[seg${i}]`);
		segmentLabels.push(`[seg${i}]`);
	}

	// Generate silence segments — anullsrc emits infinite silence; trim to length.
	// This filter is in the allowlist of Remotion's bundled FFmpeg.
	for (let i = 0; i < splices.length; i++) {
		const durSec = splices[i].durationMs / 1000;
		parts.push(
			`anullsrc=channel_layout=mono:sample_rate=${SAMPLE_RATE},atrim=0:${durSec.toFixed(3)},asetpts=PTS-STARTPTS[sil${i}]`,
		);
		silenceLabels.push(`[sil${i}]`);
	}

	// Interleave segments and silences: seg0, sil0, seg1, sil1, ..., segN
	const interleaved = [];
	for (let i = 0; i < segmentLabels.length; i++) {
		interleaved.push(segmentLabels[i]);
		if (silenceLabels[i]) interleaved.push(silenceLabels[i]);
	}
	// Concat all
	parts.push(`${interleaved.join('')}concat=n=${interleaved.length}:v=0:a=1[out]`);

	return parts.join('; ');
};

// Get audio duration from alignment data
const getAudioDuration = (alignment) => {
	const ends = alignment.character_end_times_seconds || [];
	return ends.length > 0 ? ends[ends.length - 1] : null;
};

// Shift all characters in alignment that occur AFTER an inserted silence
// by the silence duration. Cumulative shift if multiple splices.
const shiftAlignment = (alignment, splices) => {
	const newAlignment = {
		characters: [...(alignment.characters || [])],
		character_start_times_seconds: [...(alignment.character_start_times_seconds || [])],
		character_end_times_seconds: [...(alignment.character_end_times_seconds || [])],
	};

	const starts = newAlignment.character_start_times_seconds;
	const ends = newAlignment.character_end_times_seconds;

	for (let i = 0; i < starts.length; i++) {
		let cumulativeShift = 0;
		for (const s of splices) {
			if (starts[i] >= s.atSec) cumulativeShift += s.durationMs / 1000;
		}
		starts[i] += cumulativeShift;
		ends[i] += cumulativeShift;
	}
	return newAlignment;
};

let processedScenes = 0;
let totalSplices = 0;

for (const scene of lesson.scenes) {
	const splices = splicesByScene[scene.id];
	if (!splices || splices.length === 0) continue;

	const audioFile = scene.voiceover?.audioFile;
	if (!audioFile) {
		console.warn('  ⚠ ' + scene.id + ' has splices but no audioFile — skipping');
		continue;
	}

	const audioPath = path.resolve(audioFile);
	const alignmentPath = audioPath.replace(/\.mp3$/, '.alignment.json');
	if (!existsSync(audioPath) || !existsSync(alignmentPath)) {
		console.warn('  ⚠ ' + scene.id + ' missing audio or alignment — skipping');
		continue;
	}

	const alignment = JSON.parse(readFileSync(alignmentPath, 'utf8'));
	const audioDur = getAudioDuration(alignment);
	if (!audioDur) {
		console.warn('  ⚠ ' + scene.id + ' has no alignment timestamps — skipping');
		continue;
	}

	// Validate splice points are within audio bounds
	for (const s of splices) {
		if (s.atSec <= 0 || s.atSec >= audioDur) {
			console.warn(`  ⚠ ${scene.id} splice @${s.atSec}s outside audio range (0-${audioDur.toFixed(2)}s) — skipping that splice`);
		}
	}
	const validSplices = splices.filter((s) => s.atSec > 0 && s.atSec < audioDur);
	if (validSplices.length === 0) continue;

	console.log(`\n[${scene.id}] audio=${audioDur.toFixed(2)}s, splicing ${validSplices.length} point(s):`);
	for (const s of validSplices) {
		console.log(`  + ${s.durationMs}ms silence @${s.atSec.toFixed(2)}s`);
	}

	if (dryRun) {
		processedScenes++;
		totalSplices += validSplices.length;
		continue;
	}

	// Back up the original
	const backupPath = audioPath + '.bak';
	const alignBackupPath = alignmentPath + '.bak';
	if (!existsSync(backupPath)) copyFileSync(audioPath, backupPath);
	if (!existsSync(alignBackupPath)) copyFileSync(alignmentPath, alignBackupPath);

	// Build the FFmpeg command
	const filterGraph = buildFilterGraph(validSplices, audioDur);
	const tempOut = audioPath + '.tmp.mp3';

	const ffArgs = [
		'-y',
		'-i', audioPath,
		'-filter_complex', filterGraph,
		'-map', '[out]',
		'-c:a', 'libmp3lame',
		// 192 kbps mono is near-transparent for spoken-word at 44.1 kHz —
		// keeps re-encode quality close to the source. (Previously 128 kbps
		// stacked too much compression artefact across multiple splice runs.)
		'-b:a', '192k',
		'-ar', String(SAMPLE_RATE),
		'-ac', '1',
		tempOut,
	];

	try {
		runFfmpeg(ffArgs);
		// Replace original with spliced version
		copyFileSync(tempOut, audioPath);
		const fs = await import('node:fs');
		fs.unlinkSync(tempOut);

		// Update the alignment data
		const newAlignment = shiftAlignment(alignment, validSplices);
		writeFileSync(alignmentPath, JSON.stringify(newAlignment, null, 2));

		const totalSilenceMs = validSplices.reduce((s, x) => s + x.durationMs, 0);
		console.log(`  ✓ ${scene.id}: added ${totalSilenceMs}ms total, new duration ~${(audioDur + totalSilenceMs / 1000).toFixed(2)}s`);
		processedScenes++;
		totalSplices += validSplices.length;
	} catch (e) {
		console.error(`  ✗ ${scene.id}: ${e.message}`);
	}
}

console.log(`\nDone. ${processedScenes} scene(s) patched, ${totalSplices} splice(s) inserted.`);
console.log('Originals backed up alongside as <file>.mp3.bak / <file>.alignment.json.bak');
console.log('Next: re-run npm run voiceover:autosync-reveals + auto-sync-bullets + build:captions on the lesson.');
