#!/usr/bin/env node
// Ad-hoc TTS variant generator — fires a single ElevenLabs call with
// custom text/model/settings and saves the MP3.
//
// Usage:
//   ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... node scripts/test-tts.mjs <preset> <output.mp3>
//
// Presets are defined inline below.

import {writeFileSync} from 'node:fs';
import process from 'node:process';

const apiKey = process.env.ELEVENLABS_API_KEY;
const voiceId = process.env.ELEVENLABS_VOICE_ID;

if (!apiKey || !voiceId) {
	console.error('Set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID');
	process.exit(1);
}

const HOOK_CURRENT = "Let's start with a question, because this whole lesson hinges on it. Ice melts. Iron rusts. Sugar dissolves. A match burns. All four look like change — but only two of them have actually made something new. And on every short-answer question that asks you to classify a change, your job is to know exactly which is which. The test, you'll see in a moment, is never about how the change looks. It's always about whether a new substance has been formed.";

const HOOK_SPOKEN = "OK, quick one to kick us off — and the whole lesson actually hinges on this. Ice melts. Iron rusts. Sugar dissolves. A match burns. All four LOOK like change, right? But only two of them have actually made something new. And every time HSC asks you to classify a change in a short-answer question? Your job's the same. Pick which is which. The test, you'll see, is never about how the change LOOKS — it's only ever about whether a new substance has actually been made.";

// Telegraph-style worked example — reads slide labels verbatim.
const WORKED_TELEGRAPH = "Example one. How many atoms are in two-point-five moles of carbon? Step one: identify what we know. n equals two-point-five mol. N-A equals six-point-zero-two-two times ten to the twenty-three mol-inverse. Step two: identify what we need. N — the number of carbon atoms. Step three: write the formula. N equals n times N-A. Step four: substitute. N equals two-point-five, multiplied by six-point-zero-two-two times ten to the twenty-three. Step five: calculate. N equals one-point-five-zero-six times ten to the twenty-four atoms. The mol units cancel. The answer is a pure count of particles, with no units.";

// Presenter-style worked example — frames the slide, asks the question,
// walks through with "we / let's" language, adds the reasoning context the
// slide can't fit, ends with a sanity check.
const WORKED_PRESENTER = "Alright — let's work through our first example together. The question reads: how many atoms are in two-point-five moles of carbon? OK, so how do we attack this? Well, the first move I always make — and honestly, it wins half the marks — is figure out what we've actually been given. We've got the moles, n, which is two-point-five. And we know Avogadro's number, that's constant — six-point-zero-two-two times ten to the twenty-three per mole. Now what are we being asked for? We want N — the number of atoms. So we need a formula that links the two. And that's N equals n times Avogadro's number. Once you've got the formula, the rest is just substitution. Two-point-five times six-point-zero-two-two times ten to the twenty-three. Throw that in your calculator — you get one-point-five times ten to the twenty-four atoms. Quick sanity check: that's roughly one-and-a-half times Avogadro's number, which is exactly what you'd expect from one-and-a-half moles. One last thing — notice how the mole units cancel with the per-mole on Avogadro? You're left with just a count of atoms, no units. That's how you know the formula was set up right.";

const PRESETS = {
	v2: {
		text: HOOK_CURRENT,
		model_id: 'eleven_multilingual_v2',
		voice_settings: {
			stability: 0.22,
			similarity_boost: 0.52,
			style: 0.70,
			use_speaker_boost: true,
			speed: 1.0,
		},
	},
	v3: {
		text: HOOK_SPOKEN,
		model_id: 'eleven_multilingual_v2',
		voice_settings: {
			stability: 0.22,
			similarity_boost: 0.52,
			style: 0.70,
			use_speaker_boost: true,
			speed: 1.0,
		},
	},
	v4: {
		// Spoken script + voice's recommended settings — preserves accent.
		text: HOOK_SPOKEN,
		model_id: 'eleven_multilingual_v2',
		voice_settings: {
			stability: 0.34,
			similarity_boost: 0.52,
			style: 0.50,
			use_speaker_boost: true,
			speed: 1.0,
		},
	},
	v5: {
		// Spoken script + slight stability drop for a touch more prosody.
		text: HOOK_SPOKEN,
		model_id: 'eleven_multilingual_v2',
		voice_settings: {
			stability: 0.28,
			similarity_boost: 0.52,
			style: 0.50,
			use_speaker_boost: true,
			speed: 1.0,
		},
	},
};

const [presetName, outputPath] = process.argv.slice(2);
const preset = PRESETS[presetName];
if (!preset) {
	console.error(`Unknown preset: ${presetName}. Options: ${Object.keys(PRESETS).join(', ')}`);
	process.exit(1);
}
if (!outputPath) {
	console.error('Output path required');
	process.exit(1);
}

const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
	method: 'POST',
	headers: {
		'xi-api-key': apiKey,
		'Content-Type': 'application/json; charset=utf-8',
	},
	body: JSON.stringify(preset),
});

if (!response.ok) {
	console.error(`HTTP ${response.status}: ${await response.text()}`);
	process.exit(1);
}

const buffer = Buffer.from(await response.arrayBuffer());
writeFileSync(outputPath, buffer);
console.log(`OK ${presetName}: ${outputPath} (${buffer.length} bytes)`);
