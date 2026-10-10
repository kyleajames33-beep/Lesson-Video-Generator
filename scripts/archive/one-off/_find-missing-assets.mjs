import {readFileSync, readdirSync} from 'node:fs';
const files = readdirSync('src/data').filter((x) => x.endsWith('.json'));
const refs = new Set();
const byRef = {};
for (const f of files) {
	let d;
	try { d = JSON.parse(readFileSync('src/data/' + f, 'utf8')); } catch { continue; }
	if (!d.scenes) continue;
	for (const s of d.scenes) if (s.image) { refs.add(s.image); (byRef[s.image] ||= []).push(f.replace('chemistry-y11-', '').replace('.json', '')); }
}
const idx = readFileSync('src/assets/index.ts', 'utf8');
const missing = [...refs].filter((r) => !new RegExp('\\b' + r + '\\s*:').test(idx)).sort();
console.log('Total distinct image refs: ' + refs.size);
console.log('MISSING from registry (' + missing.length + '):');
for (const m of missing) console.log('  ' + m + '   <- ' + byRef[m].join(', '));
