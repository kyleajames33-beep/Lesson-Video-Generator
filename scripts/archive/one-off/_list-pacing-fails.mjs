// List M3/M4 lessons with FAIL-level pacing scenes (p/w > 0.16), grouped.
import {readFileSync, readdirSync} from 'node:fs';

const files = readdirSync('src/data').filter((x) => /chemistry-y11-m[34]/.test(x) && x.endsWith('.json'));
const cw = (t) => t.trim().split(/\s+/).filter(Boolean).length;
const cp = (t) => (t.match(/\./g) || []).length;

let total = 0;
const rows = [];
for (const file of files) {
	const d = JSON.parse(readFileSync('src/data/' + file, 'utf8'));
	if (!Array.isArray(d.scenes)) continue;
	const fails = [];
	for (const s of d.scenes) {
		const t = s.voiceover?.text;
		if (!t || s.type === 'title') continue;
		const w = cw(t);
		if (w < 8) continue;
		const pw = cp(t) / w;
		if (pw > 0.16) fails.push(`${s.id}(${pw.toFixed(2)})`);
	}
	if (fails.length) {
		rows.push(`${file.replace('chemistry-y11-', '').replace('.json', '').padEnd(36)}${fails.join(', ')}`);
		total += fails.length;
	}
}
console.log(rows.join('\n'));
console.log(`--- ${rows.length} lessons, ${total} FAIL scenes`);
