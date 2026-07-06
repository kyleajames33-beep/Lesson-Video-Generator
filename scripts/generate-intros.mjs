#!/usr/bin/env node
// generate-intros — generate the welcome narration audio for one or more
// lessons via ElevenLabs. Saves to public/audio/<CompositionId>/intro.<hash>.mp3
// and writes the path back into the lesson JSON's introVoiceover field.
//
// Usage:
//   ELEVENLABS_API_KEY=... node scripts/generate-intros.mjs <lesson-json> [...]
//
// Voice + settings match the main narrator (loQD…/turbo_v2_5 V5-tuned).

import {readFileSync, writeFileSync, existsSync, mkdirSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {createHash} from 'node:crypto';
import {getCompositionId} from './lesson-utils.mjs';

const args = process.argv.slice(2);
const lessonPaths = args.filter((a) => !a.startsWith('--'));
const voiceIdArg = args.find((a) => a.startsWith('--voice-id='))?.split('=')[1];
const VOICE_ID = voiceIdArg ?? 'loQD3CIxowi7eCEHd4m9';

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
	console.error('ELEVENLABS_API_KEY not set.');
	process.exit(1);
}
if (lessonPaths.length === 0) {
	console.error('Pass one or more lesson JSON paths.');
	process.exit(1);
}

const hashText = (s) => createHash('sha256').update(s).digest('hex').slice(0, 12);

const callTTS = async (text) => {
	const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/with-timestamps`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json', 'xi-api-key': apiKey},
		body: JSON.stringify({
			text,
			model_id: 'eleven_turbo_v2_5',
			voice_settings: {stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true, speed: 1.0},
		}),
	});
	if (!r.ok) throw new Error(`TTS ${r.status}: ${await r.text()}`);
	return r.json();
};

let ok = 0, fail = 0;
for (const lessonPath of lessonPaths) {
	const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
	const text = lesson.introVoiceover?.text;
	if (!text) {
		console.log(`  skip ${path.basename(lessonPath)} — no introVoiceover.text`);
		continue;
	}
	const compositionId = getCompositionId(lesson);
	const hash = hashText(text);
	const outDir = `public/audio/${compositionId}`;
	mkdirSync(outDir, {recursive: true});
	const outPath = `${outDir}/intro.${hash}.mp3`;

	if (existsSync(outPath)) {
		console.log(`  skip ${compositionId} intro — already exists (${outPath})`);
		lesson.introVoiceover.audioFile = outPath;
		writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
		ok++;
		continue;
	}

	process.stdout.write(`  gen  ${compositionId} intro (${text.length}c) ... `);
	try {
		const payload = await callTTS(text);
		const buf = Buffer.from(payload.audio_base64, 'base64');
		writeFileSync(outPath, buf);

		// Save alignment sidecar too (so captions can include the intro later if wanted)
		const alignPath = outPath.replace(/\.mp3$/, '.alignment.json');
		writeFileSync(alignPath, JSON.stringify({
			characters: payload.alignment?.characters ?? [],
			character_start_times_seconds: payload.alignment?.character_start_times_seconds ?? [],
			character_end_times_seconds: payload.alignment?.character_end_times_seconds ?? [],
		}, null, 2));

		const dur = payload.alignment?.character_end_times_seconds?.slice(-1)[0] ?? 0;
		console.log(`OK ${(buf.length / 1024).toFixed(0)}KB ${dur.toFixed(2)}s`);

		lesson.introVoiceover.audioFile = outPath;
		writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
		ok++;
	} catch (e) {
		console.log(`FAIL: ${e.message}`);
		fail++;
	}
}

console.log(`\nDone. ${ok} ok, ${fail} failed.`);
if (fail > 0) process.exit(1);
