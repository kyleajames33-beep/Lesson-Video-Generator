// For a module prefix, report how many referenced image PNGs actually
// exist on disk vs are phantom (registered path but no file).
import {readFileSync, readdirSync, existsSync} from 'node:fs';

const prefix = process.argv[2] || '-m3-';
const files = readdirSync('src/data').filter((x) => x.includes(prefix) && x.endsWith('.json'));
const refs = new Set();
for (const f of files) {
	const d = JSON.parse(readFileSync('src/data/' + f, 'utf8'));
	for (const s of d.scenes || []) if (s.image) refs.add(s.image);
}
const idx = readFileSync('src/assets/index.ts', 'utf8');
let exist = 0, missing = 0;
const miss = [];
for (const r of refs) {
	const m = idx.match(new RegExp(r + "\\s*:\\s*staticFile\\('([^']+)'"));
	if (!m) { missing++; miss.push(r + ' (unregistered)'); continue; }
	const p = 'public/' + m[1];
	if (existsSync(p)) exist++; else { missing++; if (miss.length < 6) miss.push(m[1]); }
}
console.log(`${prefix} image refs: ${refs.size} | PNG on disk: ${exist} | missing/phantom: ${missing}`);
miss.forEach((p) => console.log('   ' + p));
