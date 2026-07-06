#!/usr/bin/env node
// generate-broll-prompts — reads assets/broll-catalog.json and emits a
// ready-to-paste Sora / Veo / Runway prompt per clip, with a consistent
// house-style preamble.
//
// The clips themselves are short (3–6s) cutaways that overlay or replace
// the slide visual for emphasis (e.g. atoms vibrating during the
// concept-problem narration).
//
// Once generated, drop the MP4s at public/video/broll/<id>.mp4 and use
// them via the existing LabFootageSlide (which already supports a video
// asset) or as a background layer on any concept scene.
//
// Usage:
//   node scripts/generate-broll-prompts.mjs
//   node scripts/generate-broll-prompts.mjs --id=<id>

import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const idArg = args.find((a) => a.startsWith('--id='))?.split('=')[1];

const catalog = JSON.parse(readFileSync('assets/broll-catalog.json', 'utf8'));
const styleGuide = readFileSync('assets/style-guide.md', 'utf8');

// Reuse the still-image preamble (just upgrade to "cinematic video clip")
const preambleMatch = styleGuide.match(/## House style[\s\S]*?\n([\s\S]*?)\n---/);
const stillPreamble = preambleMatch
	? preambleMatch[1].trim().replace(/^>\s?/gm, '').trim()
	: '';

const PREAMBLE = `${stillPreamble}

This is a CINEMATIC VIDEO CLIP (not a still). Camera moves should be deliberate, subtle, and confident — slow push-ins, slight orbits, no whip pans, no jump cuts. Avoid people unless explicitly described. Avoid on-screen text or readable labels — text will be composited in Remotion later.

The clip must loop cleanly OR fade smoothly from black at the start and end so it can be overlaid on top of a dark slide background without visible seams.`;

const ACCENT_COLORS = {
	amber: '#f0a830',
	'teal-green': '#148a6f',
	violet: '#9b6dd9',
	'muted blue': '#3a8ad9',
	'muted orange': '#e07a3a',
};

let clips = catalog.clips;
if (idArg) clips = clips.filter((c) => c.id === idArg);
if (clips.length === 0) {
	console.error('No clips matched filter.');
	process.exit(1);
}

const outDir = path.resolve('out/broll-prompts');
if (!existsSync(outDir)) mkdirSync(outDir, {recursive: true});

const renderPrompt = (clip) => {
	const accentColor = ACCENT_COLORS[clip.accent] || '';
	return [
		PREAMBLE,
		'',
		`**Subject:** ${clip.subject}`,
		'',
		`**Accent colour:** ${clip.accent}${accentColor ? ` (${accentColor})` : ''}.`,
		'',
		`**Duration:** ${clip.duration}.`,
		'',
		'**Aspect ratio:** 16:9, 1920×1080.',
		'',
		'**Style references (mood):** Kurzgesagt, Veritasium, modern A24 science docs — cinematic, premium, never stock-footage.',
	].join('\n');
};

for (const clip of clips) {
	const file = path.join(outDir, `${clip.id}.md`);
	const md = [
		`# B-roll prompt — \`${clip.id}\``,
		'',
		clip.usedBy ? `_Used by:_ ${clip.usedBy.join(', ')}` : '',
		'',
		'---',
		'',
		renderPrompt(clip),
		'',
		'---',
		'',
		`Save the result as \`public/video/broll/${clip.id}.mp4\`. Encode to H.264 yuv420p at the target 1920×1080. Use the clip from a \`labFootage\`-type scene or as a backdrop layer on a concept scene.`,
	].join('\n');
	writeFileSync(file, md);
	console.log(`✓ ${file}`);
}

// Combined
const combinedPath = path.join(outDir, '_ALL.md');
const combined = [
	`# B-roll batch — ${clips.length} clips`,
	'',
	'Paste each section into Sora / Veo / Runway. Once an MP4 is returned, save to `public/video/broll/<id>.mp4`.',
	'',
	...clips.flatMap((c) => [
		'---',
		'',
		`## \`${c.id}\``,
		'',
		c.usedBy ? `_Used by:_ ${c.usedBy.join(', ')}` : '',
		'',
		renderPrompt(c),
		'',
		`→ save as \`public/video/broll/${c.id}.mp4\``,
		'',
	]),
].join('\n');
writeFileSync(combinedPath, combined);
console.log(`✓ ${combinedPath} (${clips.length} clips)`);
