// Add "(RTP)" alongside every visible "SATP" mention in L4 — but ONLY
// in fields rendered on screen. Skip voiceover.text and captions[].text
// (those are tied to existing audio and would either trigger regen or
// drift out of sync with the spoken word).

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l4-gases-molar-volume.json';
const d = JSON.parse(readFileSync(PATH, 'utf8'));

// Replace "SATP" with "SATP (RTP)" but avoid double-replacing if already done.
const tag = (s) => {
	if (typeof s !== 'string') return s;
	if (s.includes('SATP (RTP)')) return s; // already tagged
	return s.replace(/SATP(?!\s*\(RTP\))/g, 'SATP (RTP)');
};

// Fields that are RENDERED on screen (per slide component review).
const visibleStringFields = [
	'heading', 'body', 'secondary', 'callout', 'caption', 'question',
	'coachNote', 'pausePrompt', 'mistakeTag', 'finalPrompt',
];

// Arrays of strings or {text} objects that are rendered.
const visibleArrayFields = ['steps', 'answerSteps', 'points'];

let touched = 0;
for (const scene of d.scenes) {
	for (const f of visibleStringFields) {
		if (scene[f] && typeof scene[f] === 'string') {
			const newV = tag(scene[f]);
			if (newV !== scene[f]) { scene[f] = newV; touched++; }
		}
	}
	for (const f of visibleArrayFields) {
		if (Array.isArray(scene[f])) {
			scene[f] = scene[f].map((item) => {
				if (typeof item === 'string') {
					const v = tag(item);
					if (v !== item) touched++;
					return v;
				}
				return item;
			});
		}
	}
	// Bullets: array of {text}
	if (Array.isArray(scene.bullets)) {
		for (const b of scene.bullets) {
			if (b && typeof b.text === 'string') {
				const v = tag(b.text);
				if (v !== b.text) { b.text = v; touched++; }
			}
		}
	}
}

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('Tagged', touched, 'SATP occurrences with (RTP) in visible fields.');
console.log('voiceover.text and captions[].text untouched (no audio regen needed).');
