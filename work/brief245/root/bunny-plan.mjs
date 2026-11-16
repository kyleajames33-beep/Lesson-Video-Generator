// Root (16 Nov): plan the Bunny upload of every released video. "Released" = public on the YouTube channel now.
// Reads the channel's uploads list (read-only YouTube API), maps each public video to its master file and captions from
// the project's upload records, and writes work/brief245/root/bunny-plan.json. Calls no Bunny API.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const read = (p) => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^﻿/, ''));
const raw = read('secrets/youtube-client.json'), client = raw.installed ?? raw.web;
const {refresh_token} = read('secrets/youtube-token.json');
const tr = await fetch(client.token_uri ?? 'https://oauth2.googleapis.com/token', {method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	body: new URLSearchParams({client_id: client.client_id, client_secret: client.client_secret ?? '', refresh_token, grant_type: 'refresh_token'})});
const tok = await tr.json(); if (!tr.ok) throw Error('token ' + tr.status);
const H = {Authorization: 'Bearer ' + tok.access_token};
const get = async (u, q) => { const url = new URL('https://www.googleapis.com/youtube/v3/' + u); url.search = new URLSearchParams(q); const r = await fetch(url, {headers: H}); const j = await r.json(); if (!r.ok) throw Error(u + ' ' + r.status + ' ' + (j.error?.message ?? '')); return j; };
const ch = await get('channels', {part: 'contentDetails', mine: 'true'});
const uploads = ch.items[0].contentDetails.relatedPlaylists.uploads;
let next, items = [];
do { const j = await get('playlistItems', {part: 'snippet,status', playlistId: uploads, maxResults: '50', ...(next ? {pageToken: next} : {})}); items.push(...j.items); next = j.nextPageToken; } while (next);
const pub = items.filter((i) => i.status?.privacyStatus === 'public').map((i) => ({videoId: i.snippet.resourceId.videoId, title: i.snippet.title}));

// Map videoId -> master/captions from every record we keep.
const map = new Map();
const add = (v, o) => { if (!v || !/^[\w-]{11}$/.test(v)) return; const m = map.get(v) ?? {}; for (const [k, x] of Object.entries(o)) if (x && !m[k]) m[k] = x; map.set(v, m); };
// Root 17 Nov: manual overrides (recovered masters), applied first.
for (const [v, o] of Object.entries(read('work/brief245/root/bunny-plan-overrides.json'))) if (!v.startsWith('_')) map.set(v, {...o});
const walk = (o) => {
	if (Array.isArray(o)) return o.forEach(walk);
	if (!o || typeof o !== 'object') return;
	const v = o.videoId ?? o.newVideoId ?? (typeof o.url === 'string' && o.url.includes('youtu') ? o.url.split('/').pop().split('=').pop() : null);
	const file = [o.master, o.file, o.masterPath, o.mp4].find((x) => typeof x === 'string' && /\.mp4$/.test(x));
	const cap = [o.captionFile, o.srt, o.captions?.file, o.captionsFile].find((x) => typeof x === 'string' && /\.srt$/.test(x));
	if (v) add(v, {master: file, captions: cap, lesson: o.lessonId ?? o.lesson, sha256: o.masterSha256 ?? o.sha256});
	Object.values(o).forEach(walk);
};
const files = [];
const scan = (d, re) => { if (!fs.existsSync(d)) return; for (const e of fs.readdirSync(d, {withFileTypes: true})) { const p = path.join(d, e.name); if (e.isDirectory()) scan(p, re); else if (re.test(e.name)) files.push(p); } };
scan('out/youtube', /\.json$/); scan('docs/production/claude-pm/youtube', /\.json$/); scan('work/release-queue/done', /\.json$/);
for (const p of fs.readdirSync('work', {withFileTypes: true}).filter((d) => d.isDirectory() && /^brief\d/.test(d.name)).map((d) => d.name)) scan(path.join('work', p), /(upload|youtube|release|publish|ledger)[^/]*\.json$/i);
for (const f of files) { try { const j = read(f); walk(j); if (j.videoId && !j.lesson && /out[\\/]youtube/.test(f)) add(j.videoId, {lesson: path.basename(f).replace(/\.json$/, '').replace(/-v\d+$/, '')}); } catch {} }
// Release-chat records name the queue file; pull master/captions from it.
for (const f of fs.readdirSync('work/release-queue/done').filter((x) => x.endsWith('.json'))) { try { const q = read('work/release-queue/done/' + f); const yt = `out/youtube/${f}`; if (fs.existsSync(yt)) { const y = read(yt); add(y.videoId, {master: q.master, captions: q.captionFile, lesson: q.lesson, sha256: q.masterSha256}); } } catch {} }

const DRIVE = 'G:/My Drive/HSCScience video masters/';
const resolveFile = (f) => {
	if (!f) return null;
	f = f.replace(/\\/g, '/');
	const i = f.indexOf('out/explainer/'); if (i > 0) f = f.slice(i);
	if (fs.existsSync(f)) return f;
	if (fs.existsSync(DRIVE + f)) return DRIVE + f;
	return null;
};
const versions = (lesson) => {
	const out = new Map();
	for (const base of ['', DRIVE]) {
		const d = `${base}out/explainer/Explainer-${lesson}`;
		if (!fs.existsSync(d)) continue;
		for (const n of fs.readdirSync(d)) { const m = n.match(/^Explainer-.+-v(\d+)\.mp4$/); if (m && !out.has(n)) out.set(n, {file: `${d}/${n}`, v: +m[1]}); }
	}
	return [...out.values()].sort((a, b) => a.v - b.v);
};
const briefDirs = fs.readdirSync('work', {withFileTypes: true}).filter((d) => d.isDirectory() && /^brief\d/.test(d.name)).map((d) => d.name);
const allSrt = [];
const srtScan = (d) => { for (const e of fs.readdirSync(d, {withFileTypes: true})) { const p = `${d}/${e.name}`; if (e.isDirectory()) { if (!/chunks|isolated-bundle|public-slim|node_modules/.test(e.name)) srtScan(p); } else if (e.name === 'captions.srt') allSrt.push(p); } };
for (const b of briefDirs) srtScan(`work/${b}`);
const capFor = (lesson) => {
	const short = lesson.replace(/^math-a12-/, '');
	const c = allSrt.filter((f) => f.includes(`/${lesson}/`) || (short !== lesson && f.includes(`/${short}/`)));
	c.sort((x, y) => fs.statSync(y).mtimeMs - fs.statSync(x).mtimeMs);
	if (c[0]) return c[0];
	const k = lesson.replace(/^(bio|chem)-m(\d)-/, 'm$2').replace(/^math-a12-/, 'math-a12-');
	for (const f of [`docs/production/claude-pm/lessons/${lesson}/measured/captions/captions.srt`, `docs/production/claude-pm/lessons/${k}/measured/captions.srt`]) if (fs.existsSync(f)) return f;
	return null;
};
const plan = [], problems = [];
for (const p of pub) {
	const m = map.get(p.videoId) ?? {};
	let master = m.masterAbs && fs.existsSync(m.masterAbs) ? m.masterAbs : resolveFile(m.master), how = master ? (m.masterAbs ? 'override' : 'record') : null, why = 'no master file mapped';
	if (!master && m.lesson) {
		const vs = versions(m.lesson);
		if (vs.length === 1) { master = vs[0].file; how = 'only version'; }
		else if (vs.length > 1) why = 'several versions, record names none: ' + vs.map((x) => 'v' + x.v).join(' ');
		else why = 'no master on disk or Drive';
	}
	let captions = m.captions && fs.existsSync(m.captions) ? m.captions.replace(/\\/g, '/') : null;
	if (!captions && m.lesson) captions = capFor(m.lesson);
	const row = {videoId: p.videoId, title: p.title, lesson: m.lesson ?? null, master, how, captions, bytes: master ? fs.statSync(master).size : null};
	if (!master) problems.push({...row, why});
	else plan.push(row);
}
fs.writeFileSync('work/brief245/root/bunny-plan.json', JSON.stringify({readAt: new Date().toISOString(), publicOnYouTube: pub.length, ready: plan.length, problems, plan}, null, 2));
const gb = plan.reduce((t, r) => t + r.bytes, 0) / 2 ** 30;
console.log(JSON.stringify({publicOnYouTube: pub.length, mapped: plan.length, noCaptions: plan.filter((r) => !r.captions).length, unmapped: problems.length, GB: +gb.toFixed(2)}));
