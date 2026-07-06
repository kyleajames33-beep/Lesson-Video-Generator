#!/usr/bin/env node
// generate-elevenlabs-multilang — generates audio for a language variant
// using eleven_multilingual_v2 (the only ElevenLabs model that supports
// non-English natively). Reads translated narration from each scene's
// voiceover.translations[lang] and writes to a language-scoped folder.
//
// Audio path convention:
//   English:       public/audio/<CompositionId>/<sceneId>.<hash>.mp3
//   Translated:    public/audio/<lang>/<CompositionId>/<sceneId>.<hash>.mp3
//
// Resolved paths are written back to scene.voiceover.translatedAudioFiles
// so future render variants can swap in the correct audio.
//
// Usage:
//   ELEVENLABS_API_KEY=... node scripts/generate-elevenlabs-multilang.mjs \
//     <lesson-json> --lang=<code> --voice-id=<id>

import {mkdirSync, readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {createHash} from 'node:crypto';
import {getCompositionId} from './lesson-utils.mjs';

const args = process.argv.slice(2);
const lessonPath = args.find((a) => !a.startsWith('--'));
const lang = args.find((a) => a.startsWith('--lang='))?.split('=')[1];
const voiceId = args.find((a) => a.startsWith('--voice-id='))?.split('=')[1];
const dryRun = args.includes('--dry-run');
const apiKey = process.env.ELEVENLABS_API_KEY;

if (!lessonPath || !lang || !voiceId || !apiKey) {
	console.error('Usage: node scripts/generate-elevenlabs-multilang.mjs <lesson-json> --lang=<code> --voice-id=<id>');
	console.error('Env:   ELEVENLABS_API_KEY required');
	process.exit(1);
}

const hashText = (text) => createHash('sha256').update(text).digest('hex').slice(0, 12);

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const compositionId = getCompositionId(lesson);

// Find scenes with translations for the requested language
const scenes = lesson.scenes
	.filter((s) => s.voiceover?.translations?.[lang])
	.map((s) => ({
		id: s.id,
		original: s.voiceover.text,
		translated: s.voiceover.translations[lang],
		sceneRef: s,
	}));

if (scenes.length === 0) {
	console.error(`No scenes have translations for "${lang}". Run generate-translation-prompts.mjs first.`);
	process.exit(1);
}

console.log(`Multilingual gen: ${compositionId} → ${lang}`);
console.log(`Voice ID: ${voiceId}`);
console.log(`Scenes:   ${scenes.length}`);
console.log(`Mode:     ${dryRun ? 'DRY RUN' : 'LIVE'}\n`);

let generated = 0;
let skipped = 0;
let failed = 0;

for (const scene of scenes) {
	const hash = hashText(scene.translated);
	const outputPath = `public/audio/${lang}/${compositionId}/${scene.id}.${hash}.mp3`;
	const alignmentPath = outputPath.replace(/\.mp3$/, '.alignment.json');

	if (existsSync(outputPath)) {
		console.log(`  SKIP ${scene.id}: already exists`);
		scene.sceneRef.voiceover.translatedAudioFiles = scene.sceneRef.voiceover.translatedAudioFiles || {};
		scene.sceneRef.voiceover.translatedAudioFiles[lang] = outputPath;
		skipped++;
		continue;
	}

	console.log(`  GEN  ${scene.id}: "${scene.translated.slice(0, 50)}${scene.translated.length > 50 ? '...' : ''}"`);
	if (dryRun) {
		generated++;
		continue;
	}

	try {
		const response = await fetch(
			`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`,
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json', 'xi-api-key': apiKey},
				body: JSON.stringify({
					text: scene.translated,
					// multilingual_v2 is the model that handles non-English natively.
					// turbo_v2_5 (our English winner) does NOT support other languages.
					model_id: 'eleven_multilingual_v2',
					voice_settings: {
						stability: 0.55,
						similarity_boost: 0.72,
						style: 0.25,
						use_speaker_boost: true,
						speed: 1.0,
					},
				}),
			},
		);
		if (!response.ok) {
			console.error(`  FAIL ${scene.id}: HTTP ${response.status} — ${await response.text()}`);
			failed++;
			continue;
		}
		const payload = await response.json();
		const audioBuffer = Buffer.from(payload.audio_base64, 'base64');
		mkdirSync(path.dirname(outputPath), {recursive: true});
		writeFileSync(outputPath, audioBuffer);
		writeFileSync(alignmentPath, JSON.stringify({
			characters: payload.alignment?.characters ?? [],
			character_start_times_seconds: payload.alignment?.character_start_times_seconds ?? [],
			character_end_times_seconds: payload.alignment?.character_end_times_seconds ?? [],
		}, null, 2));

		scene.sceneRef.voiceover.translatedAudioFiles = scene.sceneRef.voiceover.translatedAudioFiles || {};
		scene.sceneRef.voiceover.translatedAudioFiles[lang] = outputPath;

		console.log(`  OK   ${scene.id}: ${audioBuffer.length} bytes`);
		generated++;
	} catch (e) {
		console.error(`  FAIL ${scene.id}: ${e.message}`);
		failed++;
	}
}

if (!dryRun && (generated > 0 || skipped > 0)) {
	writeFileSync(lessonPath, JSON.stringify(lesson, null, 2) + '\n');
	console.log(`\nWrote ${lessonPath} with translatedAudioFiles for "${lang}"`);
}

console.log('');
console.log(`Done. generated=${generated} skipped=${skipped} failed=${failed}`);
if (failed > 0) process.exit(1);
