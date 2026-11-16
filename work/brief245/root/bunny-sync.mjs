// Root (16 Nov): upload released videos to Bunny Stream from work/brief245/root/bunny-plan.json, one at a time.
// Usage: node work/brief245/root/bunny-sync.mjs --pilot 3   (the 3 smallest not yet done)
//        node work/brief245/root/bunny-sync.mjs --all
//        node work/brief245/root/bunny-sync.mjs --verify      (poll Bunny for every uploaded record, rewrite the ledger)
// Resumable: skips anything whose out/bunny record is uploaded or finished, and any title already in the library.
// Captions upload only if the SRT's last cue ends within the master's length (and no more than 120 s before its end).
// Never prints the key. Ledger: docs/production/bunny/ledger.csv (no secrets).
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync, spawnSync} from 'node:child_process';

const mode = process.argv[2];
const n = Number(process.argv[3] || 0);
const read = (p) => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^﻿/, ''));
const plan = read('work/brief245/root/bunny-plan.json').plan;
const sec = read('secrets/bunny.json');
const API = `https://video.bunnycdn.com/library/${Number(sec.libraryId)}`;
const H = {AccessKey: sec.apiKey, Accept: 'application/json'};
const FFPROBE = path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffprobe.exe');
const recPath = (r) => `out/bunny/${r.lesson}.json`;
const rec = (r) => (fs.existsSync(recPath(r)) ? read(recPath(r)) : null);
const sleep = (ms) => new Promise((s) => setTimeout(s, ms));
async function api(u, opt = {}) {
	for (let a = 1; a <= 5; a++) {
		const r = await fetch(API + u, {...opt, headers: {...H, ...(opt.headers ?? {})}});
		if (r.status === 429 || r.status >= 500) { await sleep(3000 * a); continue; }
		const t = await r.text();
		if (!r.ok) throw Error(`${u.split('?')[0]} ${r.status} ${t.slice(0, 200)}`);
		return t ? JSON.parse(t) : null;
	}
	throw Error(`${u.split('?')[0]} kept failing`);
}
const duration = (f) => Number(execFileSync(FFPROBE, ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], {encoding: 'utf8'}).trim());
const lastCueEnd = (srt) => {
	const m = [...fs.readFileSync(srt, 'utf8').matchAll(/--> (\d\d):(\d\d):(\d\d)[,.](\d\d\d)/g)].at(-1);
	return m ? +m[1] * 3600 + +m[2] * 60 + +m[3] + +m[4] / 1000 : null;
};

async function upload(r) {
	const prior = rec(r);
	if (prior && ['uploaded', 'finished'].includes(prior.status)) return 'skip (record)';
	const found = await api(`/videos?page=1&itemsPerPage=100&search=${encodeURIComponent(r.title.slice(0, 60))}`);
	const dup = (found.items ?? []).find((v) => v.title === r.title);
	if (dup && !(prior && prior.videoId === dup.guid && prior.status === 'created')) {
		fs.mkdirSync('out/bunny', {recursive: true});
		fs.writeFileSync(recPath(r), JSON.stringify({lessonId: r.lesson, videoId: dup.guid, title: r.title, file: r.master, status: 'uploaded', note: 'found in library by title; not re-uploaded', youtubeId: r.videoId}, null, 2));
		return 'skip (already in library)';
	}
	const len = duration(r.master), end = r.captions ? lastCueEnd(r.captions) : null;
	const capOk = end != null && end <= len + 0.5 && len - end <= 120;
	const args = ['scripts/bunny-upload.mjs', '--video', r.master, '--title', r.title, '--id', r.lesson, '--record', recPath(r)];
	if (capOk) args.push('--srt', r.captions); else args.push('--no-captions');
	const t0 = Date.now();
	const p = spawnSync('node', args, {encoding: 'utf8', maxBuffer: 1 << 24});
	const out = (p.stdout + p.stderr).replace(new RegExp(sec.apiKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '[key]');
	if (p.status !== 0) return 'FAILED: ' + out.trim().split('\n').at(-1);
	const record = read(recPath(r));
	Object.assign(record, {youtubeId: r.videoId, masterSeconds: +len.toFixed(2), captionCheck: capOk ? `ok (last cue ${end.toFixed(1)} s)` : `held: last cue ${end} s vs ${len.toFixed(1)} s`});
	fs.writeFileSync(recPath(r), JSON.stringify(record, null, 2));
	return `uploaded in ${Math.round((Date.now() - t0) / 1000)} s${capOk ? '' : ' (captions held)'}`;
}

async function verify() {
	const rows = [];
	for (const r of plan) {
		const x = rec(r); if (!x) continue;
		let v = null; try { v = await api(`/videos/${x.videoId}`); } catch (e) { x.verify = 'error ' + e.message; }
		if (v) {
			const okLen = x.masterSeconds ? Math.abs(v.length - x.masterSeconds) <= 2 : null;
			x.bunny = {status: v.status, encodeProgress: v.encodeProgress, length: v.length, hasOriginal: v.hasOriginal, storageSize: v.storageSize, resolutions: v.availableResolutions, captions: (v.captions ?? []).map((c) => c.srclang)};
			x.status = v.status === 4 && v.hasOriginal && okLen !== false ? 'finished' : v.status === 5 || v.status === 6 ? 'failed' : x.status;
			fs.writeFileSync(recPath(r), JSON.stringify(x, null, 2));
		}
		const ver = (x.file.match(/-v(\d+)\.mp4$/) ?? [])[1] ?? '';
		rows.push([r.lesson, 'v' + ver, path.basename(x.file), (x.bytes / 1048576).toFixed(1), x.videoId, x.status, (x.bunny?.captions ?? []).join(' ') || 'none', r.videoId].join(','));
	}
	fs.mkdirSync('docs/production/bunny', {recursive: true});
	const csv = 'code,version,fileName,sizeMB,bunnyVideoId,status,captions,youtubeId\n' + rows.join('\n') + '\n';
	if (csv.includes(sec.apiKey)) throw Error('ledger would contain the key');
	fs.writeFileSync('docs/production/bunny/ledger.csv', csv);
	const c = {}; for (const l of rows) { const s = l.split(',')[5]; c[s] = (c[s] ?? 0) + 1; }
	console.log(JSON.stringify({ledgerRows: rows.length, byStatus: c}));
}

if (mode === '--verify') await verify();
else {
	const todo = plan.filter((r) => !['uploaded', 'finished'].includes(rec(r)?.status)).sort((a, b) => a.bytes - b.bytes);
	const list = mode === '--pilot' ? todo.slice(0, n || 3) : todo;
	console.log(`${list.length} to upload (${(list.reduce((t, r) => t + r.bytes, 0) / 2 ** 30).toFixed(2)} GB)`);
	let i = 0;
	for (const r of list) { i++; let res; try { res = await upload(r); } catch (e) { res = 'FAILED: ' + e.message.replace(sec.apiKey, '[key]'); } console.log(`[${i}/${list.length}] ${r.lesson}: ${res}`); }
}
