// Shared lookups for scripts/bunny-upload.mjs and scripts/bunny-catalogue.mjs.
// Pure local file reads: no network, no secrets.
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '../..');
const rel = p => path.relative(ROOT, p).replace(/\\/g, '/');
const exists = p => { try { return fs.statSync(p).isFile(); } catch { return false; } };
const dirs = p => { try { return fs.readdirSync(p, {withFileTypes: true}).filter(e => e.isDirectory()).map(e => e.name); } catch { return []; } };
const num = s => Number((String(s).match(/\d+/) ?? ['0'])[0]);

// One Bunny collection per course. Order matters: first match wins.
const COURSES = [
	[/^bio-m[5-8]-/, 'Year 12 Biology'],
	[/^chem-m[5-8]-/, 'Year 12 Chemistry'],
	[/^phys-y12-/, 'Year 12 Physics'],
	[/^math-a12-/, 'Year 12 Maths Advanced'],
	[/^math-a11-/, 'Year 11 Maths Advanced'],
	[/^math-x1/, 'Maths Extension 1'],
	[/^math-s1[12]-/, 'Maths Standard'],
	[/^(chem-y11|c-y11)-/, 'Year 11 Chemistry'],
	[/^bio-y11-/, 'Year 11 Biology'],
	[/^phys-y11-/, 'Year 11 Physics'],
	[/^hms-/, 'Health and Movement Science'],
	[/^skills/, 'Exam Skills'],
];
export function courseFor(id) {
	for (const [re, name] of COURSES) if (re.test(id)) return name;
	return null;
}

// Composition folder name to lesson id: Explainer-math-a12-f01 -> math-a12-f01.
export const lessonIdFor = composition => composition.replace(/^Explainer-/, '');
export const lessonIdFromFile = file => lessonIdFor(path.basename(file).replace(/-v\d+\.mp4$/i, ''));

// Latest -vN.mp4 per composition under out/explainer.
export function latestMasters() {
	const base = path.join(ROOT, 'out/explainer');
	const out = [];
	for (const d of dirs(base).filter(n => n.startsWith('Explainer-')).sort()) {
		const files = fs.readdirSync(path.join(base, d)).filter(n => /-v\d+\.mp4$/.test(n));
		if (!files.length) continue;
		files.sort((a, b) => Number(a.match(/-v(\d+)\.mp4$/)[1]) - Number(b.match(/-v(\d+)\.mp4$/)[1]));
		const file = files.at(-1);
		const full = path.join(base, d, file);
		out.push({composition: d, id: lessonIdFor(d), version: Number(file.match(/-v(\d+)\.mp4$/)[1]), file: rel(full), bytes: fs.statSync(full).size});
	}
	return out;
}

// Captions, best source first. Anything other than the measured export should be
// checked against the master version before upload (a repair may predate a re-render).
export function findCaptions(id) {
	const measured = path.join(ROOT, 'docs/production/claude-pm/lessons', id, 'measured/captions/captions.srt');
	if (exists(measured)) return {file: rel(measured), source: 'measured export'};
	const briefs = dirs(path.join(ROOT, 'work')).filter(n => /^brief\d+$/.test(n)).sort((a, b) => num(b) - num(a));
	for (const b of briefs) {
		const f = path.join(ROOT, 'work', b, id, 'captions/captions.srt');
		if (exists(f)) return {file: rel(f), source: `${b} release work (check it matches the master version)`};
	}
	const repairs = dirs(path.join(ROOT, 'out/caption-repairs')).sort().reverse();
	for (const r of repairs) {
		const f = path.join(ROOT, 'out/caption-repairs', r, `${id}.srt`);
		if (exists(f)) return {file: rel(f), source: `caption repair ${r} (check it matches the master version)`};
	}
	return null;
}

// Titles already written for YouTube: brief release metadata first, then upload ledgers.
let ledgerTitles = null;
export function findTitle(id) {
	const briefs = dirs(path.join(ROOT, 'work')).filter(n => /^brief\d+$/.test(n)).sort((a, b) => num(b) - num(a));
	for (const b of briefs) {
		const f = path.join(ROOT, 'work', b, id, 'youtube-metadata.json');
		if (exists(f)) try { const t = JSON.parse(fs.readFileSync(f, 'utf8')).title; if (t) return {title: t, source: rel(f)}; } catch { /* unreadable: try the next source */ }
	}
	if (!ledgerTitles) {
		ledgerTitles = {};
		const dir = path.join(ROOT, 'docs/production/claude-pm/youtube');
		const walk = (o, file) => {
			if (Array.isArray(o)) return o.forEach(x => walk(x, file));
			if (!o || typeof o !== 'object') return;
			const lid = o.lessonId ?? o.lesson;
			const t = o.title ?? o.metadataFromPriorUpload?.title;
			if (typeof lid === 'string' && typeof t === 'string' && !ledgerTitles[lid]) ledgerTitles[lid] = {title: t, source: rel(file)};
			for (const v of Object.values(o)) walk(v, file);
		};
		for (const f of (fs.existsSync(dir) ? fs.readdirSync(dir) : []).filter(n => n.endsWith('.json'))) {
			try { walk(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')), path.join(dir, f)); } catch { /* skip unreadable ledger */ }
		}
	}
	return ledgerTitles[id] ?? null;
}

export function srtCueCount(text) {
	return (text.match(/^\d+\s*\r?\n\d\d:\d\d:\d\d[,.]\d{3} --> /gm) ?? []).length;
}

// Record written by bunny-upload.mjs, if any.
export function existingRecord(id) {
	const f = path.join(ROOT, 'out/bunny', `${id}.json`);
	if (!exists(f)) return null;
	try { return {...JSON.parse(fs.readFileSync(f, 'utf8')), recordFile: rel(f)}; } catch { return {recordFile: rel(f), unreadable: true}; }
}
