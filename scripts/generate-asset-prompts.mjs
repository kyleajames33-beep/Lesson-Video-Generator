#!/usr/bin/env node
// generate-asset-prompts — reads the asset catalog + style guide and
// emits one ready-to-paste prompt per asset, plus a combined markdown
// document for batch generation.
//
// Workflow:
//   1. Add entries to assets/asset-catalog.json
//   2. Run this script
//   3. Paste prompts into ChatGPT / DALL-E / Midjourney
//   4. Save resulting PNGs to public/assets/<id>.png
//   5. Wire into src/assets/index.ts so slides can reference by id
//
// Usage:
//   node scripts/generate-asset-prompts.mjs              # all assets
//   node scripts/generate-asset-prompts.mjs --id=<id>    # one asset
//   node scripts/generate-asset-prompts.mjs --used-by=<lesson-substring>

import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const idArg = args.find((a) => a.startsWith('--id='))?.split('=')[1];
const usedByArg = args.find((a) => a.startsWith('--used-by='))?.split('=')[1];

const catalog = JSON.parse(readFileSync('assets/asset-catalog.json', 'utf8'));
const styleGuide = readFileSync('assets/style-guide.md', 'utf8');

// Extract the preamble — everything inside the first "## House style preamble" section
// up to the next "---" rule. Strip leading "> " markdown blockquote markers.
const preambleMatch = styleGuide.match(/## House style preamble[^\n]*\n+([\s\S]*?)\n---/);
const preamble = preambleMatch
	? preambleMatch[1].trim().split('\n').map((line) => line.replace(/^> ?/, '')).join('\n').trim()
	: '(style-guide.md preamble missing — please update the heading match in scripts/generate-asset-prompts.mjs)';

const ACCENT_COLORS = {
	amber: '#f0a830',
	'teal-green': '#148a6f',
	violet: '#9b6dd9',
	'muted blue': '#3a8ad9',
	'muted orange': '#e07a3a',
};

const filterAssets = (assets) => {
	let out = assets;
	if (idArg) out = out.filter((a) => a.id === idArg);
	if (usedByArg) out = out.filter((a) => (a.usedBy || []).some((u) => u.includes(usedByArg)));
	return out;
};

const assets = filterAssets(catalog.assets);
if (assets.length === 0) {
	console.error('No assets matched the filter.');
	process.exit(1);
}

const outDir = path.resolve('out/asset-prompts');
if (!existsSync(outDir)) mkdirSync(outDir, {recursive: true});

const renderPrompt = (asset) => {
	const accentColor = ACCENT_COLORS[asset.accent] || '';
	const accent = `${asset.accent}${accentColor ? ` (${accentColor})` : ''}`;
	const filename = asset.filename || `${asset.id}.png`;
	return [
		'## Style preamble (DO NOT skip — this defines the brand)',
		'',
		preamble,
		'',
		'## Match the canonical exemplar',
		'',
		'Match the look of `public/assets/carbon-12-molar-mass-balance.png` exactly — same chunky isometric 3D forms, same soft palette, same hand-touched warmth, same shading style. If your output drifts from that reference, the asset is rejected. Treat that PNG as the design spec.',
		'',
		'## Subject',
		'',
		asset.subject,
		'',
		'## Primary accent',
		'',
		`**${accent}** — apply to the most important shape. Everything else in neutral ink + supporting greens from the palette.`,
		'',
		'## Hard requirements',
		'',
		'- 2048 × 2048 pixels',
		'- **Fully transparent PNG** (alpha channel — NOT a white background, NOT a dark background)',
		'- No readable English text, letters, numerals, or labels anywhere in the image',
		'- One hero subject, centred, ~70% of frame with comfortable padding',
		'- Slight 3/4 isometric perspective with soft directional key light from upper-left',
		'- Matte surfaces with hint of paper-grain texture inside flat shapes',
		'',
		`## Save as`,
		'',
		`\`public/assets/${filename}\``,
		'',
		'## Verification check before delivering',
		'',
		'1. Background is alpha-channel transparent (not white, not dark). If unsure, re-prompt: "same image but with a fully transparent alpha background, not white, not dark".',
		'2. Style matches `carbon-12-molar-mass-balance.png`. If too cartoonish or too photo-real, re-prompt: "match the chunky isometric 3D style of the reference image exactly".',
		'3. No text or numerals anywhere in the image.',
	].join('\n');
};

// Per-asset markdown files
for (const asset of assets) {
	const file = path.join(outDir, `${asset.id}.md`);
	const md = [
		`# Asset prompt — \`${asset.id}\``,
		'',
		asset.usedBy ? `_Used by:_ ${asset.usedBy.join(', ')}` : '',
		'',
		'---',
		'',
		renderPrompt(asset),
		'',
		'---',
		'',
		`Save the resulting PNG as \`public/assets/${asset.id}.png\` (or \`.webp\` for smaller file). Then register it in \`src/assets/index.ts\`.`,
	].join('\n');
	writeFileSync(file, md);
	console.log(`✓ ${file}`);
}

// Combined batch file
const combinedPath = path.join(outDir, '_ALL.md');
const combined = [
	`# Asset batch — ${assets.length} prompts`,
	'',
	'Paste each section into ChatGPT / DALL-E one at a time. Each prompt embeds the house-style preamble so the visual language stays consistent across all assets.',
	'',
	...assets.flatMap((a) => [
		'---',
		'',
		`## \`${a.id}\``,
		'',
		a.usedBy ? `_Used by:_ ${a.usedBy.join(', ')}` : '',
		'',
		renderPrompt(a),
		'',
		`→ save as \`public/assets/${a.id}.png\``,
		'',
	]),
].join('\n');
writeFileSync(combinedPath, combined);
console.log(`✓ ${combinedPath} (${assets.length} prompts)`);
