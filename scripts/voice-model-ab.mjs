// Same voice, same text, different ElevenLabs models — to isolate whether
// the "AI gibberish words" are a model issue rather than a voice issue.
//
// Test text is the stutter-prone opener of worked-example-1: dense numbers
// + chemistry vocab + hyphenated compounds, all things known to trip TTS.

import {mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const apiKey = process.env.ELEVENLABS_API_KEY;
const VOICE = 'loQD3CIxowi7eCEHd4m9';

const TEST_TEXT = "Alright — let's work through our first example together. The question reads: how many atoms are in two-point-five moles of carbon? So how do we attack this? We've got n, the moles, equal to two-point-five. And we know Avogadro's number, which is the constant six-point-zero-two-two times ten to the twenty-three per mole.";

const TESTS = [
	{label: 'model-multilingual_v2-CURRENT', model: 'eleven_multilingual_v2', settings: {stability: 0.28, similarity_boost: 0.52, style: 0.5, use_speaker_boost: true, speed: 1.0}},
	{label: 'model-multilingual_v2-stable',  model: 'eleven_multilingual_v2', settings: {stability: 0.55, similarity_boost: 0.55, style: 0.3, use_speaker_boost: true, speed: 1.0}},
	{label: 'model-turbo_v2_5',              model: 'eleven_turbo_v2_5',     settings: {stability: 0.5,  similarity_boost: 0.75, style: 0.3, use_speaker_boost: true, speed: 1.0}},
	{label: 'model-v3-defaults',             model: 'eleven_v3',             settings: {stability: 0.5,  similarity_boost: 0.75, style: 0.3, use_speaker_boost: true, speed: 1.0}},
	{label: 'model-flash_v2_5',              model: 'eleven_flash_v2_5',     settings: {stability: 0.5,  similarity_boost: 0.75, style: 0.3, use_speaker_boost: true, speed: 1.0}},
];

const outDir = path.resolve('out/voice-tests/model-comparison');
mkdirSync(outDir, {recursive: true});

console.log(`Generating ${TESTS.length} model samples to ${outDir}\n`);

for (const t of TESTS) {
	const outPath = path.join(outDir, `${t.label}.mp3`);
	process.stdout.write(`  ${t.label} ... `);
	try {
		const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json', 'xi-api-key': apiKey},
			body: JSON.stringify({text: TEST_TEXT, model_id: t.model, voice_settings: t.settings}),
		});
		if (!r.ok) {
			console.log(`FAIL (${r.status}): ${(await r.text()).slice(0, 100)}`);
			continue;
		}
		const buf = Buffer.from(await r.arrayBuffer());
		writeFileSync(outPath, buf);
		console.log(`OK (${buf.length} bytes)`);
	} catch (e) {
		console.log(`FAIL: ${e.message}`);
	}
}

console.log(`\nListen: explorer.exe ${outDir.replace(/\\/g, '\\\\')}`);
