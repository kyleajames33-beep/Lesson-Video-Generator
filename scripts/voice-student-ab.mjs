// voice-student-ab — quick A/B for the student-character second voice.
// Tests each candidate with a representative dialogue line so we can pick
// the one that contrasts best with the narrator (voice 1, loQD…).
//
// Settings tuned for the "curious student" archetype: slightly lower
// stability + higher style than the narrator so the voice has more
// emotional range (better for short reactive lines like "Wait — really?").

import {mkdirSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
	console.error('Set ELEVENLABS_API_KEY first.');
	process.exit(1);
}

// Representative student line — short, question-like, has the cadence
// most of our planned dialogue insertions use.
const TEST_TEXT = "Wait — really? But what does that actually mean though?";

// Two settings profiles per voice — see which lands better.
const CURIOUS = {stability: 0.40, similarity_boost: 0.75, style: 0.45, use_speaker_boost: true, speed: 1.0};
const STEADY  = {stability: 0.55, similarity_boost: 0.75, style: 0.30, use_speaker_boost: true, speed: 1.0};

const TESTS = [
	{label: 'voiceA-56bWURjY-curious', voiceId: '56bWURjYFHyYyVf490Dp', settings: CURIOUS},
	{label: 'voiceA-56bWURjY-steady',  voiceId: '56bWURjYFHyYyVf490Dp', settings: STEADY},
	{label: 'voiceB-jyYV4jm5-curious', voiceId: 'jyYV4jm5Wq39qXvc4ERa', settings: CURIOUS},
	{label: 'voiceB-jyYV4jm5-steady',  voiceId: 'jyYV4jm5Wq39qXvc4ERa', settings: STEADY},
];

const outDir = path.resolve('out/voice-tests/student-comparison');
mkdirSync(outDir, {recursive: true});

console.log('Test line: "' + TEST_TEXT + '"\n');

let ok = 0, fail = 0;
for (const t of TESTS) {
	const outPath = path.join(outDir, `${t.label}.mp3`);
	process.stdout.write('  ' + t.label.padEnd(34) + ' ... ');
	try {
		const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${t.voiceId}`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json', 'xi-api-key': apiKey},
			body: JSON.stringify({
				text: TEST_TEXT,
				model_id: 'eleven_turbo_v2_5',
				voice_settings: t.settings,
			}),
		});
		if (!r.ok) {
			console.log(`FAIL (${r.status}): ${(await r.text()).slice(0, 100)}`);
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
