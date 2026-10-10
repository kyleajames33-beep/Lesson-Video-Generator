// Fix three L4 audio issues:
//   1. Formula bullets out of sync — rewrite bullet text so anchor words
//      ("find V", "find n", "find Vm") match exactly what the speaker says
//      in the same order, so auto-sync-bullets lands each bullet at the
//      narration moment.
//   2. Intro "gases" mispronounced as "gayses" — phonetic respelling.
//   3. Clear worked-example-1 audio for a fresh single-roll regen
//      (no script change; just re-roll to clear the V=86.8 L stutter).

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l4-gases-molar-volume.json';
const d = JSON.parse(readFileSync(PATH, 'utf8'));

// 1. Formula scene: rewrite bullets to lead with "Find V", "Find n",
//    "Find Vₘ" so the auto-sync bullet anchors match the speaker's
//    "to find V... to find n... to find V m" cadence.
const formula = d.scenes.find((x) => x.id === 'formula');
formula.bullets = [
	{text: 'Find V → multiply n by Vₘ.'},
	{text: 'Find n → divide V by Vₘ.'},
	{text: 'Find Vₘ → divide V by n.'},
];

// 2. Intro: respell "gases" as "gasses" (alternate accepted English
//    spelling) — empirically nudges ElevenLabs to pronounce as /ˈɡæsɪz/
//    instead of the "gayses" reading.
d.introVoiceover.text = "Welcome to HSC Science. This is HSC Chemistry. Today, gasses and molar volume. Let's get into it.";
delete d.introVoiceover.audioFile;

// 3. Worked-example-1: clear audio refs for fresh regen (no script change).
const we1 = d.scenes.find((x) => x.id === 'worked-example');
delete we1.voiceover.audioFile;
delete we1.captions;

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('OK — formula bullets rewritten:', formula.bullets.length);
console.log('OK — intro text:', d.introVoiceover.text);
console.log('OK — worked-example-1 audio cleared');
