// Register all Year 12 image assets: collect the image refs actually used by
// the y12 lesson JSONs, look up each one's save path from the y12 image-prompt
// files (basename of the Path: line == asset key), and insert staticFile
// entries into src/assets/index.ts before the closing `} as const;`.

import {readFileSync, writeFileSync, readdirSync} from 'node:fs';

// 1. Authoritative asset keys: image refs in y12 lesson JSONs not already registered.
const dataFiles = readdirSync('src/data').filter((f) => /chemistry-y12-/.test(f) && f.endsWith('.json'));
const refs = new Set();
for (const f of dataFiles) {
	const d = JSON.parse(readFileSync('src/data/' + f, 'utf8'));
	for (const s of d.scenes || []) if (s.image) refs.add(s.image);
}
const idx = readFileSync('src/assets/index.ts', 'utf8');
const missing = [...refs].filter((r) => !new RegExp('\\b' + r + '\\s*:').test(idx)).sort();

// 2. Build key -> path map from all y12 prompt files. Prompt files name the
// asset key in a backticked camelCase token, then give the save path (often a
// kebab-case filename) on a following line. So bind each `public/...png` path
// to the most recent camelCase key token seen above it.
const promptFiles = readdirSync('.').filter((f) => /^image-prompts-chem-y12-.*\.md$/.test(f));
const isKey = (t) => /^[a-z][a-zA-Z0-9]*[A-Z][a-zA-Z0-9]*$/.test(t); // camelCase, ≥1 capital
const pathByKey = {};
for (const pf of promptFiles) {
	const lines = readFileSync(pf, 'utf8').split(/\r?\n/);
	let currentKey = null;
	for (const line of lines) {
		// update current key if this line backticks a camelCase token
		const tokens = [...line.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
		for (const t of tokens) if (isKey(t)) currentKey = t;
		// bind a path to the current key
		const pm = line.match(/`(public\/[^`]+?\.png)`/);
		if (pm && currentKey) pathByKey[currentKey] = pm[1].replace(/^public\//, '');
	}
}

// 3. Resolve a path for each missing key.
const entries = [];
const unresolved = [];
for (const key of missing) {
	const p = pathByKey[key];
	if (!p) { unresolved.push(key); continue; }
	entries.push(`\t${key}: staticFile('${p}'),`);
}

console.log(`Missing keys: ${missing.length} | resolved paths: ${entries.length} | unresolved: ${unresolved.length}`);
if (unresolved.length) console.log('UNRESOLVED (no path found in prompt files):\n  ' + unresolved.join('\n  '));

// 4. Insert into index.ts before `} as const;`.
if (entries.length) {
	const block = `\n\t// ── Year 12 generated images (Modules 5–8) ────────────────────────────\n${entries.join('\n')}\n`;
	const out = idx.replace(/\n\} as const;/, block + '} as const;');
	writeFileSync('src/assets/index.ts', out);
	console.log(`Inserted ${entries.length} Y12 asset entries into src/assets/index.ts`);
}
