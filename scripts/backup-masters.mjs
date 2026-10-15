// Copy the files that git does not hold and that cost money or time to remake:
// final MP4s, the voice takes the lessons use now, and the painted art.
// Usage: node scripts/backup-masters.mjs "<destination folder>" [--dry-run]   (re-run any time; copies only new or changed files)
import fs from 'node:fs';
import path from 'node:path';

const dest = process.argv[2];
const dry = process.argv.includes('--dry-run');
if (!dest) throw new Error('Usage: node scripts/backup-masters.mjs "<destination folder>"');
const files = new Set();
const add = (f) => { if (f && fs.existsSync(f) && fs.statSync(f).isFile()) files.add(path.normalize(f)); };
const walk = (dir, fn) => { if (!fs.existsSync(dir)) return; for (const e of fs.readdirSync(dir, {withFileTypes: true})) { const p = path.join(dir, e.name); e.isDirectory() ? walk(p, fn) : fn(p); } };

// 1. Final renders (not chunks or stills), plus every MP4 named in a YouTube ledger.
for (const d of fs.existsSync('out/explainer') ? fs.readdirSync('out/explainer') : []) {
	if (!fs.statSync(path.join('out/explainer', d)).isDirectory()) continue;
	for (const f of fs.readdirSync(path.join('out/explainer', d)).filter((n) => /-v\d+\.mp4$/.test(n))) add(path.join('out/explainer', d, f));
}
walk('docs/production/claude-pm/youtube', (p) => {
	if (!p.endsWith('.json')) return;
	for (const m of fs.readFileSync(p, 'utf8').matchAll(/"(out\/[^"]+\.mp4)"/g)) add(m[1]);
});

// 2. Voice takes in use: every audio, alignment and generation file named by a current voice manifest.
walk('docs/production', (p) => {
	if (path.basename(p) !== 'voice-manifest.json' || p.includes('superseded')) return;
	let m; try { m = JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return; }
	for (const s of m.scenes ?? []) for (const k of ['audioFile', 'alignmentFile', 'generationFile']) add(s[k]);
});

// 3. All artwork (painted plates, Codex assets).
walk('public/assets', add);

if (dry) {
	const mb = [...files].reduce((n, f) => n + fs.statSync(f).size, 0) / 1e6;
	console.log(`dry run: ${files.size} files, ${mb.toFixed(0)} MB`);
	process.exit(0);
}
let copied = 0, skipped = 0, bytes = 0;
for (const f of [...files].sort()) {
	const to = path.join(dest, f);
	const st = fs.statSync(f);
	if (fs.existsSync(to) && fs.statSync(to).size === st.size) { skipped++; continue; }
	fs.mkdirSync(path.dirname(to), {recursive: true});
	fs.copyFileSync(f, to);
	copied++; bytes += st.size;
}
fs.writeFileSync(path.join(dest, 'backup-index.txt'), `Backed up ${new Date().toISOString()} from the lesson-video-generator repo.\nCode, lesson designs and measured timings are in GitHub; this folder holds the files git does not.\n\n${[...files].sort().join('\n')}\n`);
console.log(`files: ${files.size}, copied: ${copied} (${(bytes / 1e6).toFixed(0)} MB), already there: ${skipped}`);
