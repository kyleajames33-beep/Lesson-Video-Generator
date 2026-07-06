#!/usr/bin/env node
// register-asset — adds a newly-saved PNG to src/assets/index.ts so
// slides can reference it. Reads the asset catalog to map filename →
// canonical asset id, and inserts a `staticFile()` entry in the right
// section if not already present.
//
// Usage:
//   node scripts/register-asset.mjs nVsLowercaseN
//   node scripts/register-asset.mjs --all       (register every asset
//                                                whose PNG now exists)
//
// After registering, you (or whoever) can drop the asset into a scene
// via `"image": "<assetId>"` in the lesson JSON.

import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const all = args.includes('--all');
const positional = args.filter((a) => !a.startsWith('--'));

const catalog = JSON.parse(readFileSync('assets/asset-catalog.json', 'utf8'));
const REGISTRY = 'src/assets/index.ts';

const assetsToRegister = all
	? catalog.assets
	: catalog.assets.filter((a) => positional.includes(a.id));

if (assetsToRegister.length === 0) {
	console.error('No assets matched. Pass --all or one or more asset ids.');
	console.error('Available ids: ' + catalog.assets.map((a) => a.id).join(', '));
	process.exit(1);
}

let registry = readFileSync(REGISTRY, 'utf8');
let added = 0;
let skipped = 0;
let missing = 0;

for (const asset of assetsToRegister) {
	const filename = asset.filename || `${asset.id}.png`;
	const fullPath = path.join('public/assets', filename);

	if (!existsSync(fullPath)) {
		console.log(`  ⚠ ${asset.id.padEnd(26)} no PNG at ${fullPath} — skipped`);
		missing++;
		continue;
	}

	if (registry.includes(`${asset.id}:`) || registry.includes(`${asset.id} `)) {
		console.log(`  · ${asset.id.padEnd(26)} already registered`);
		skipped++;
		continue;
	}

	// Insert after the existing M2 L1 custom illustrations block if it
	// exists, otherwise after the lesson title heroes block.
	const insertion = `\t${asset.id}: staticFile('assets/${filename}'),\n`;
	const anchorRe = /(\/\/ ── M2 L1 custom illustrations.*?\n(?:\t.+\n)+)/;
	const heroAnchorRe = /(\/\/ ── Lesson title heroes.*?\n(?:\t.+\n)+)/;
	if (anchorRe.test(registry)) {
		registry = registry.replace(anchorRe, (block) => block + insertion);
	} else if (heroAnchorRe.test(registry)) {
		registry = registry.replace(
			heroAnchorRe,
			(block) => block + '\n\t// ── M2 L1 custom illustrations ──────────────────────────────────────────\n' + insertion,
		);
	} else {
		console.log(`  ✗ ${asset.id.padEnd(26)} couldn't find an insertion anchor — please add manually`);
		continue;
	}

	console.log(`  + ${asset.id.padEnd(26)} registered → staticFile('assets/${filename}')`);
	added++;
}

if (added > 0) writeFileSync(REGISTRY, registry);

console.log('');
console.log(`Added: ${added}   Already-registered: ${skipped}   PNG-missing: ${missing}`);
if (added > 0) {
	console.log('');
	console.log('Next: drop "image": "<assetId>" into the relevant scene in src/data/<lesson>.json');
}
