#!/usr/bin/env node
// backup-media — incremental mirror of the large, un-gitted media directories
// (public/audio, public/assets) to a destination of your choice: an external
// drive, or a cloud-synced folder (OneDrive / Google Drive / Dropbox) which
// then gives you off-machine backup for free.
//
// It is incremental: a file is copied only if the destination copy is missing
// or a different size, so re-running is cheap. Nothing is deleted at the
// destination (add --prune to also remove dest files that no longer exist in
// source — off by default for safety).
//
// Usage:
//   node scripts/backup-media.mjs "D:/Backups/hscscience-media"
//   node scripts/backup-media.mjs "$HOME/OneDrive/hscscience-media" --prune
//
// Also available as: npm run backup:media -- "<destination>"

import {cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const SOURCES = ['public/audio', 'public/assets'];

const args = process.argv.slice(2);
const prune = args.includes('--prune');
const dest = args.find((a) => !a.startsWith('--'));

if (!dest) {
	console.error('Usage: node scripts/backup-media.mjs <destination-dir> [--prune]');
	process.exit(1);
}

let copied = 0;
let skipped = 0;
let pruned = 0;
let bytesCopied = 0;

// Recursively collect relative file paths under a directory.
const walk = (root, base = root) => {
	const out = [];
	if (!existsSync(root)) return out;
	for (const entry of readdirSync(root, {withFileTypes: true})) {
		const abs = path.join(root, entry.name);
		if (entry.isDirectory()) out.push(...walk(abs, base));
		else if (entry.isFile()) out.push(path.relative(base, abs));
	}
	return out;
};

for (const source of SOURCES) {
	if (!existsSync(source)) {
		console.warn(`  skip (missing): ${source}`);
		continue;
	}
	const destRoot = path.join(dest, source);
	const srcFiles = walk(source);
	console.log(`\n${source} -> ${destRoot}  (${srcFiles.length} files)`);

	for (const rel of srcFiles) {
		const srcPath = path.join(source, rel);
		const destPath = path.join(destRoot, rel);
		const srcSize = statSync(srcPath).size;
		const upToDate = existsSync(destPath) && statSync(destPath).size === srcSize;
		if (upToDate) {
			skipped++;
			continue;
		}
		mkdirSync(path.dirname(destPath), {recursive: true});
		cpSync(srcPath, destPath);
		copied++;
		bytesCopied += srcSize;
	}

	if (prune) {
		const destFiles = walk(destRoot);
		const srcSet = new Set(srcFiles.map((f) => f.split(path.sep).join('/')));
		for (const rel of destFiles) {
			if (!srcSet.has(rel.split(path.sep).join('/'))) {
				rmSync(path.join(destRoot, rel));
				pruned++;
			}
		}
	}
}

console.log(
	`\nDone. copied ${copied} (${(bytesCopied / 1048576).toFixed(1)} MB), ` +
		`unchanged ${skipped}${prune ? `, pruned ${pruned}` : ''}.`
);
