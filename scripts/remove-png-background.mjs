#!/usr/bin/env node
// remove-png-background — strip near-white background from a PNG via flood-fill.
//
// Approach: BFS from all 4 edges. A pixel is "background" if it's near-white
// AND reachable from an edge through other near-white pixels. White INSIDE
// the artwork (e.g., highlights enclosed by darker artwork) is preserved.
//
// Anti-aliased edges get partial transparency so the artwork blends cleanly
// onto any slide colour.
//
// Usage:
//   node scripts/remove-png-background.mjs <input.png> [output.png]
//   node scripts/remove-png-background.mjs --batch <dir>      # process every PNG
//
// Originals are backed up to a sibling `_originals/` folder before overwrite.

import {readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync} from 'node:fs';
import {dirname, basename, join} from 'node:path';
import process from 'node:process';
import {PNG} from 'pngjs';

// Tunables
const FULL_BG_THRESHOLD = 245;  // pixel min(r,g,b) above this AND reachable from edge → fully transparent
const EDGE_BG_THRESHOLD = 225;  // pixel min(r,g,b) above this is treated as "potentially background" for flood-fill
const FADE_LOW = 220;           // min(r,g,b) between FADE_LOW and FULL_BG_THRESHOLD → partial alpha (anti-aliased edge)

const minChannel = (r, g, b) => Math.min(r, g, b);

const processImage = (inputBuffer) => {
	const png = PNG.sync.read(inputBuffer);
	const {width, height, data} = png; // RGBA, 4 bytes/pixel
	const isBackground = new Uint8Array(width * height);
	const stack = [];

	const considerSeed = (x, y) => {
		if (x < 0 || y < 0 || x >= width || y >= height) return;
		const i = y * width + x;
		if (isBackground[i]) return;
		const px = i * 4;
		const m = minChannel(data[px], data[px + 1], data[px + 2]);
		if (m >= EDGE_BG_THRESHOLD) {
			isBackground[i] = 1;
			stack.push(x, y);
		}
	};

	// Seed all 4 edges
	for (let x = 0; x < width; x++) {
		considerSeed(x, 0);
		considerSeed(x, height - 1);
	}
	for (let y = 0; y < height; y++) {
		considerSeed(0, y);
		considerSeed(width - 1, y);
	}

	// 4-connected flood fill (DFS via stack)
	while (stack.length > 0) {
		const y = stack.pop();
		const x = stack.pop();
		considerSeed(x + 1, y);
		considerSeed(x - 1, y);
		considerSeed(x, y + 1);
		considerSeed(x, y - 1);
	}

	let bgCount = 0;
	let fadeCount = 0;
	for (let i = 0; i < width * height; i++) {
		if (!isBackground[i]) continue;
		const px = i * 4;
		const m = minChannel(data[px], data[px + 1], data[px + 2]);
		if (m >= FULL_BG_THRESHOLD) {
			data[px + 3] = 0;
			bgCount++;
		} else if (m >= FADE_LOW) {
			const t = (m - FADE_LOW) / (FULL_BG_THRESHOLD - FADE_LOW);
			data[px + 3] = Math.round(255 * (1 - t));
			fadeCount++;
		}
		// else: leave alpha=255 — artwork pixel that was lightish but inside the artwork
	}

	const total = width * height;
	const stats = {
		width,
		height,
		bgPct: ((bgCount / total) * 100).toFixed(1),
		fadePct: ((fadeCount / total) * 100).toFixed(2),
	};
	const out = PNG.sync.write(png);
	return {out, stats};
};

const backupOriginal = (filePath) => {
	const dir = dirname(filePath);
	const name = basename(filePath);
	const backupDir = join(dir, '_originals');
	if (!existsSync(backupDir)) mkdirSync(backupDir, {recursive: true});
	const backupPath = join(backupDir, name);
	if (!existsSync(backupPath)) {
		writeFileSync(backupPath, readFileSync(filePath));
	}
	return backupPath;
};

const processFile = (filePath, outPath) => {
	if (!outPath) outPath = filePath;
	const backup = backupOriginal(filePath);
	const inputBuffer = readFileSync(backup); // always read from backup → idempotent re-runs
	const {out, stats} = processImage(inputBuffer);
	writeFileSync(outPath, out);
	console.log(`  ${basename(filePath)}: ${stats.width}x${stats.height} — bg ${stats.bgPct}%, edge fade ${stats.fadePct}%`);
};

const main = () => {
	const args = process.argv.slice(2);
	if (args.length === 0) {
		console.error('Usage: remove-png-background.mjs <input.png> [output.png]');
		console.error('       remove-png-background.mjs --batch <directory>');
		process.exit(1);
	}

	if (args[0] === '--batch') {
		const dir = args[1];
		if (!dir || !statSync(dir).isDirectory()) {
			console.error(`Not a directory: ${dir}`);
			process.exit(1);
		}
		const files = [];
		const collect = (d) => {
			for (const e of readdirSync(d)) {
				const p = join(d, e);
				const s = statSync(p);
				if (s.isDirectory()) {
					if (e !== '_originals') collect(p);
				} else if (e.toLowerCase().endsWith('.png')) {
					files.push(p);
				}
			}
		};
		collect(dir);
		console.log(`Processing ${files.length} PNG(s) in ${dir}\n`);
		for (const f of files) {
			processFile(f);
		}
		return;
	}

	const inputPath = args[0];
	const outputPath = args[1] || args[0];
	processFile(inputPath, outputPath);
};

main();
