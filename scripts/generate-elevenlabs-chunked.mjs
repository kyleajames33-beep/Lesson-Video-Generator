#!/usr/bin/env node
// generate-elevenlabs-chunked — for long scenes that stutter, split the
// voiceover at sentence boundaries, generate each chunk separately
// (ElevenLabs resets prosody per request = no mid-read stutters), then
// concatenate the audio bytes + merge alignment with cumulative offsets.
//
// Output is a single MP3 + single alignment.json — identical shape to the
// regular gen script, so downstream auto-sync / Remotion work unchanged.
//
// Usage:
//   ELEVENLABS_API_KEY=... node scripts/generate-elevenlabs-chunked.mjs \
//     <manifest-json> <scene-id> --voice-id=<id> [--max-chars=400]

import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const positional = args.filter((a) => !a.startsWith('--'));
const manifestPath = positional[0];
const sceneId = positional[1];
const voiceIdArg = args.find((a) => a.startsWith('--voice-id='));
const maxCharsArg = args.find((a) => a.startsWith('--max-chars='));

const voiceId = voiceIdArg ? voiceIdArg.split('=')[1] : process.env.ELEVENLABS_VOICE_ID;
const maxChars = maxCharsArg ? Number(maxCharsArg.split('=')[1]) : 400;
const apiKey = process.env.ELEVENLABS_API_KEY;

if (!manifestPath || !sceneId || !voiceId || !apiKey) {
	console.error('Usage: node scripts/generate-elevenlabs-chunked.mjs <manifest> <scene-id> --voice-id=<id> [--max-chars=400]');
	console.error('Env: ELEVENLABS_API_KEY required');
	process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const scene = manifest.scenes.find((s) => s.id === sceneId);
if (!scene) {
	console.error(`Scene "${sceneId}" not found in manifest`);
	process.exit(1);
}

// Greedy chunker: split text at sentence boundaries, group sentences into
// chunks <= maxChars. Sentence boundary = period/!/? followed by space.
const chunkText = (text, max) => {
	const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
	const chunks = [];
	let buf = '';
	for (const s of sentences) {
		const trimmed = s.trim();
		if (buf.length + trimmed.length + 1 <= max) {
			buf = buf ? `${buf} ${trimmed}` : trimmed;
		} else {
			if (buf) chunks.push(buf);
			buf = trimmed;
		}
	}
	if (buf) chunks.push(buf);
	return chunks;
};

const chunks = chunkText(scene.text, maxChars);
console.log(`Scene "${sceneId}": ${scene.text.length} chars → ${chunks.length} chunks`);
chunks.forEach((c, i) => console.log(`  [${i}] ${c.length}c: "${c.slice(0, 60)}${c.length > 60 ? '...' : ''}"`));

const callElevenLabs = async (text) => {
	const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json', 'xi-api-key': apiKey},
		body: JSON.stringify({
			text,
			// Match the LOCKED production config (docs/lesson-build-checklist.md §2)
			// so chunked fallback audio is indistinguishable from batch audio.
			model_id: 'eleven_turbo_v2_5',
			voice_settings: {stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true, speed: 1.0},
		}),
	});
	if (!r.ok) throw new Error(`HTTP ${r.status}: ${await r.text()}`);
	return r.json();
};

const audioBuffers = [];
const mergedChars = [];
const mergedStarts = [];
const mergedEnds = [];
let timeOffset = 0;

for (let i = 0; i < chunks.length; i++) {
	process.stdout.write(`  chunk ${i + 1}/${chunks.length} ... `);
	const payload = await callElevenLabs(chunks[i]);
	const buf = Buffer.from(payload.audio_base64, 'base64');
	audioBuffers.push(buf);

	const a = payload.alignment || {};
	const chars = a.characters || [];
	const starts = a.character_start_times_seconds || [];
	const ends = a.character_end_times_seconds || [];

	for (let j = 0; j < chars.length; j++) {
		mergedChars.push(chars[j]);
		mergedStarts.push(starts[j] + timeOffset);
		mergedEnds.push(ends[j] + timeOffset);
	}

	// Insert a space char between chunks so word stream tokenisation works.
	// Its timestamp = last end time, no audible content but lets bullet
	// matching find word boundaries cleanly.
	if (i < chunks.length - 1 && ends.length > 0) {
		mergedChars.push(' ');
		mergedStarts.push(ends[ends.length - 1] + timeOffset);
		mergedEnds.push(ends[ends.length - 1] + timeOffset);
	}

	const chunkDur = ends.length > 0 ? ends[ends.length - 1] : 0;
	timeOffset += chunkDur;
	console.log(`OK (${buf.length}b, ${chunkDur.toFixed(2)}s)`);
}

const finalAudio = Buffer.concat(audioBuffers);
const outputPath = scene.audioFile;
mkdirSync(path.dirname(outputPath), {recursive: true});
writeFileSync(outputPath, finalAudio);

const alignmentPath = outputPath.replace(/\.mp3$/, '.alignment.json');
writeFileSync(alignmentPath, JSON.stringify({
	characters: mergedChars,
	character_start_times_seconds: mergedStarts,
	character_end_times_seconds: mergedEnds,
}, null, 2));

console.log(`\nWrote ${outputPath} (${finalAudio.length} bytes, ${timeOffset.toFixed(2)}s total)`);
console.log(`Wrote ${alignmentPath}`);
