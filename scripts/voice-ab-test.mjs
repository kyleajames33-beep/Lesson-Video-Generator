// voice-ab-test — generate the same short scene through multiple voice/setting
// combos so we can listen back-to-back and pick a winner before committing
// credits to a full lesson regen.
//
// Edit the TEST_VOICES array below to add candidates. Then:
//   ELEVENLABS_API_KEY=... node scripts/voice-ab-test.mjs
//
// Outputs land in out/voice-tests/{label}.mp3 — open the folder and play
// each clip back-to-back.

import {mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
	console.error('Set ELEVENLABS_API_KEY first.');
	process.exit(1);
}

// Short, expressive scene — the hook. Good test because it has a rhetorical
// question, a beat, then a callback. Bad prosody = obvious immediately.
const TEST_TEXT = "OK, here's a question that sounds impossible at first. How do chemists count atoms — when a single atom is way too small to ever see? The answer's actually beautifully simple. It's a counting unit called the mole. By the end of this lesson, you'll be using it like second nature.";

// Each row = one MP3. We test each new voice at two settings profiles
// (defaults + V5-tuned) so we can hear how each handles prosody before
// committing.
const V5_TUNED = {stability: 0.28, similarity_boost: 0.52, style: 0.5, use_speaker_boost: true, speed: 1.0};
const DEFAULTS = {stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true, speed: 1.0};

const TEST_VOICES = [
	// Reference baseline — the M3/M4 setup that you said sounded good.
	{label: 'REFERENCE-ben-v5', voiceId: 'sai9UY7iXkRDSsXHR0bZ', settings: V5_TUNED},

	// New candidates — each tested at both default and V5-tuned settings.
	{label: 'voice1-loQD3CIx-defaults', voiceId: 'loQD3CIxowi7eCEHd4m9', settings: DEFAULTS},
	{label: 'voice1-loQD3CIx-v5tuned',  voiceId: 'loQD3CIxowi7eCEHd4m9', settings: V5_TUNED},

	{label: 'voice2-aGkVQvWU-defaults', voiceId: 'aGkVQvWUZi16EH8aZJvT', settings: DEFAULTS},
	{label: 'voice2-aGkVQvWU-v5tuned',  voiceId: 'aGkVQvWUZi16EH8aZJvT', settings: V5_TUNED},

	{label: 'voice3-YCxeyFA0-defaults', voiceId: 'YCxeyFA0G7yTk6Wuv2oq', settings: DEFAULTS},
	{label: 'voice3-YCxeyFA0-v5tuned',  voiceId: 'YCxeyFA0G7yTk6Wuv2oq', settings: V5_TUNED},
];

const outDir = path.resolve('out/voice-tests');
mkdirSync(outDir, {recursive: true});

console.log(`Generating ${TEST_VOICES.length} voice samples to ${outDir}\n`);

let ok = 0, fail = 0;
for (const t of TEST_VOICES) {
	const outPath = path.join(outDir, `${t.label}.mp3`);
	process.stdout.write(`  ${t.label} ... `);
	try {
		const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${t.voiceId}`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json', 'xi-api-key': apiKey},
			body: JSON.stringify({
				text: TEST_TEXT,
				model_id: 'eleven_multilingual_v2',
				voice_settings: t.settings,
			}),
		});
		if (!r.ok) {
			const err = await r.text();
			console.log(`FAIL (${r.status}): ${err.slice(0, 100)}`);
			fail++;
			continue;
		}
		const buf = Buffer.from(await r.arrayBuffer());
		writeFileSync(outPath, buf);
		console.log(`OK (${buf.length} bytes)`);
		ok++;
	} catch (e) {
		console.log(`FAIL: ${e.message}`);
		fail++;
	}
}

console.log(`\nDone: ${ok} ok, ${fail} failed`);
console.log(`Listen: explorer.exe ${outDir.replace(/\\/g, '\\\\')}`);
