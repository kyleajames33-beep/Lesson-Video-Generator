// node analyse.mjs <probe.json> : overlap / edge / size findings, grouped into time runs.
import fs from 'node:fs';
const j = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const starts = []; j.scenes.reduce((t, s) => (starts.push(t), t + s.d), 0);
const sceneOf = f => { let i = 0; starts.forEach((s, k) => { if (f >= s) i = k; }); return `${j.scenes[i].id}@${f - starts[i]}`; };
const inter = (a, b) => { const w = Math.min(a[0] + a[2], b[0] + b[2]) - Math.max(a[0], b[0]), h = Math.min(a[1] + a[3], b[1] + b[3]) - Math.max(a[1], b[1]); return w > 0 && h > 0 ? w * h : 0; };
const area = b => b[2] * b[3];
const findings = new Map();
const small = new Map();
const add = (key, f, msg) => { if (!findings.has(key)) findings.set(key, {frames: [], msg}); findings.get(key).frames.push(f); };
for (const [fs_, p] of Object.entries(j.probes)) {
	const f = Number(fs_);
	if (p.error) { add('error', f, p.error); continue; }
	const T = p.texts.filter(t => t.op >= 0.6);
	for (let a = 0; a < T.length; a++) for (let b = a + 1; b < T.length; b++) {
		const A = T[a], B = T[b];
		if (A.k === B.k || /^∫$/.test(A.t) || /^∫$/.test(B.t)) continue;
		const I = inter(A.b, B.b);
		if (I / Math.min(area(A.b), area(B.b)) >= 0.12) add(`tt|${A.t}|${B.t}`, f, `text on text: "${A.t}" (${A.b}) x "${B.t}" (${B.b})`);
	}
	for (const c of p.cards) for (const t of T) {
		if (!(c.i > t.i) || (t.i >= c.i && t.i <= c.last)) continue;
		const I = inter(c.b, t.b);
		if (I / area(t.b) >= 0.2) add(`ct|${c.b}|${t.t}`, f, `card (${c.b}) over text "${t.t}" (${t.b})`);
	}
	for (const t of T) {
		const [x, y, w, h] = t.b;
		if (x < 30 || x + w > 1890 || y + h > 1072 || y < 0) add(`edge|${t.t}`, f, `near/over frame edge: "${t.t}" (${t.b})`);
		if (t.s < 29.5 && t.s > 3) small.set(t.t, Math.min(small.get(t.t) ?? 99, t.s));
	}
}
const runs = fr => { fr.sort((a, b) => a - b); const out = []; for (const x of fr) { const l = out[out.length - 1]; if (l && x - l[1] <= j.nth) l[1] = x; else out.push([x, x]); } return out; };
for (const [k, v] of findings) for (const [a, b] of runs(v.frames)) console.log(`${(a / 30).toFixed(1)}-${(b / 30).toFixed(1)}s [${sceneOf(a)}] ${v.msg}`);
if (small.size) console.log('SMALL TEXT:', [...small].map(([t, s]) => `"${t}" ${s}px`).join('; '));
