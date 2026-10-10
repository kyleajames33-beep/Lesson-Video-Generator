// Register all Biology Y12 image assets. Same approach as the chem registrar:
// collect image refs actually used by the biology JSONs, bind each to its save
// path from the bio image-prompt files (the path basename is a slug, so bind to
// the most recent camelCase key token above each `public/...png` path), and
// insert staticFile entries into src/assets/index.ts before `} as const;`.
import {readFileSync, writeFileSync, readdirSync} from 'node:fs';

const dataFiles = readdirSync('src/data').filter((f) => /^biology-y12-/.test(f) && f.endsWith('.json'));
const refs = new Set();
for (const f of dataFiles) {
	const d = JSON.parse(readFileSync('src/data/' + f, 'utf8'));
	for (const s of d.scenes || []) if (s.image) refs.add(s.image);
}
const idx = readFileSync('src/assets/index.ts', 'utf8');
const missing = [...refs].filter((r) => !new RegExp('\\b' + r + '\\s*:').test(idx)).sort();

const promptFiles = readdirSync('.').filter((f) => /^image-prompts-bio-y12-.*\.md$/.test(f));
const isKey = (t) => /^[a-z][a-zA-Z0-9]*[A-Z][a-zA-Z0-9]*$/.test(t);
const pathByKey = {};
for (const pf of promptFiles) {
	const lines = readFileSync(pf, 'utf8').split(/\r?\n/);
	let currentKey = null;
	for (const line of lines) {
		for (const t of [...line.matchAll(/`([^`]+)`/g)].map((m) => m[1])) if (isKey(t)) currentKey = t;
		const pm = line.match(/`?(public\/[^`\s)]+?\.png)`?/);
		if (pm && currentKey) pathByKey[currentKey] = pm[1].replace(/^public\//, '');
	}
}

const entries = [];
const unresolved = [];
for (const key of missing) {
	const p = pathByKey[key];
	if (!p) { unresolved.push(key); continue; }
	entries.push(`\t${key}: staticFile('${p}'),`);
}
console.log(`Bio missing keys: ${missing.length} | resolved: ${entries.length} | unresolved: ${unresolved.length}`);
if (unresolved.length) console.log('UNRESOLVED:\n  ' + unresolved.join('\n  '));

if (entries.length) {
	const block = `\n\t// ── Biology Year 12 generated images (Modules 5–8) ─────────────────────\n${entries.join('\n')}\n`;
	writeFileSync('src/assets/index.ts', idx.replace(/\n\} as const;/, block + '} as const;'));
	console.log(`Inserted ${entries.length} Bio asset entries into src/assets/index.ts`);
}
