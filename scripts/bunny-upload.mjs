// Upload one finished master to a private Bunny Stream library, in its course collection, with SRT captions.
// Usage:
//   node scripts/bunny-upload.mjs --video out/explainer/X/X-v1.mp4 [--title "..."] [--collection "Year 12 Biology"]
//     [--srt docs/.../captions.srt | --no-captions] [--id lesson-id] [--lang en --label English]
//     [--resolutions 360p,480p,720p,1080p] [--record out/bunny/<id>.json] [--force-new] [--dry-run]
// Defaults: lesson id from the file name; title from the YouTube metadata already written for it; collection from the
// lesson id (one per course); captions from the measured export. Without captions it stops unless --no-captions is given.
// Steps (bunny.net Stream API, https://video.bunnycdn.com): find or create the collection, create the video object,
// PUT the MP4 bytes, add the captions (base64 JSON), then write the record. A rerun after a failed PUT reuses the same
// video object from the record instead of making a duplicate.
// Needs secrets/bunny.json: {"libraryId": 123, "apiKey": "...", "tokenAuthKey": "..."} (tokenAuthKey is for the site,
// not this script). Never prints or logs a key. --dry-run reads no secret and calls no API.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {ROOT, courseFor, lessonIdFromFile, findCaptions, findTitle, srtCueCount, existingRecord} from './lib/bunny-catalogue-lib.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
	if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true]);
	return acc;
}, []));
const fail = msg => { console.error(msg); process.exit(1); };
if (!args.video || args.video === true) fail('Missing --video');

const video = path.resolve(ROOT, args.video);
if (!fs.existsSync(video)) fail(`No video at ${video}`);
if (!/-v\d+\.mp4$/i.test(video)) fail('Expected a finished master named <Composition>-vN.mp4.');
const id = typeof args.id === 'string' ? args.id : lessonIdFromFile(video);

const foundTitle = typeof args.title === 'string' ? {title: args.title, source: '--title'} : findTitle(id);
if (!foundTitle) fail(`No title found for ${id}. Pass --title "...".`);
const title = foundTitle.title.trim();
if (!title) fail('Title is empty.');
if (/—/.test(title)) fail('Em dash found in title (project rule).');

const collection = typeof args.collection === 'string' ? args.collection.trim() : courseFor(id);
if (!collection) fail(`No course collection is known for "${id}". Pass --collection "...".`);
if (collection.length > 255) fail('Collection name is over 255 characters.');

let srt = null, srtSource = null;
if (args['no-captions'] !== true) {
	if (typeof args.srt === 'string') { srt = path.resolve(ROOT, args.srt); srtSource = '--srt'; }
	else { const c = findCaptions(id); if (c) { srt = path.resolve(ROOT, c.file); srtSource = c.source; } }
	if (!srt) fail(`No captions found for ${id}. Export them first, pass --srt, or pass --no-captions on purpose.`);
	if (!fs.existsSync(srt)) fail(`No captions at ${srt}`);
}
const srtText = srt ? fs.readFileSync(srt, 'utf8').replace(/^﻿/, '') : null;
const cues = srtText ? srtCueCount(srtText) : 0;
if (srt && cues === 0) fail(`Captions at ${srt} have no SRT cues.`);
const lang = typeof args.lang === 'string' ? args.lang : 'en';
const label = typeof args.label === 'string' ? args.label : 'English';
if (!/^[a-z]{2}(-[A-Za-z]{2})?$/.test(lang)) fail('Bad --lang (use an ISO 639-1 code such as en).');
const resolutions = typeof args.resolutions === 'string' ? args.resolutions : null;
if (resolutions && !/^(240p|360p|480p|720p|1080p|1440p|2160p)(,(240p|360p|480p|720p|1080p|1440p|2160p))*$/.test(resolutions)) fail('Bad --resolutions.');

const recordPath = path.resolve(ROOT, typeof args.record === 'string' ? args.record : `out/bunny/${id}.json`);
const size = fs.statSync(video).size;
const fileRel = path.relative(ROOT, video).replace(/\\/g, '/');
const prior = existingRecord(id);
const sameFile = prior && prior.file === fileRel && prior.bytes === size;
if (prior?.status === 'uploaded' && sameFile && args['force-new'] !== true) {
	fail(`Already uploaded: ${prior.recordFile} (video ${prior.videoId}). Pass --force-new to upload another copy.`);
}
const resumeId = prior?.status === 'created' && sameFile && args['force-new'] !== true ? prior.videoId : null;

console.log(`Lesson ${id}: ${path.basename(video)} (${(size / 1048576).toFixed(1)} MB)`);
console.log(`Title: "${title}" (from ${foundTitle.source})`);
console.log(`Collection: ${collection}`);
console.log(srt ? `Captions: ${path.relative(ROOT, srt).replace(/\\/g, '/')} (${cues} cues, ${lang} "${label}"; ${srtSource})` : 'Captions: none (--no-captions)');
if (srtText && /—/.test(srtText)) console.warn('Warning: the captions contain an em dash. Check the narration copy rule before release.');
if (resolutions) console.log(`Resolutions: ${resolutions}`);
console.log(`Record: ${path.relative(ROOT, recordPath).replace(/\\/g, '/')}${resumeId ? ` (resuming video ${resumeId})` : ''}`);
if (args['dry-run']) {
	const hasSecrets = fs.existsSync(path.join(ROOT, 'secrets/bunny.json'));
	console.log('Would call: GET/POST /library/{libraryId}/collections, ' + (resumeId ? '' : 'POST /library/{libraryId}/videos, ') +
		'PUT /library/{libraryId}/videos/{videoId}' + (srt ? `, POST /library/{libraryId}/videos/{videoId}/captions/${lang}` : '') + '.');
	console.log(`secrets/bunny.json ${hasSecrets ? 'is present (not read in a dry run)' : 'is missing: create it before a real upload'}.`);
	console.log('Dry run: nothing uploaded.');
	process.exit(0);
}

// ---- secrets (never printed) -------------------------------------------------
let secrets;
try { secrets = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/bunny.json'), 'utf8')); }
catch { fail('Could not read secrets/bunny.json. See the usage header for its shape.'); }
const libraryId = Number(secrets.libraryId);
if (!Number.isInteger(libraryId) || libraryId <= 0 || typeof secrets.apiKey !== 'string' || !secrets.apiKey) fail('secrets/bunny.json needs a numeric libraryId and the library apiKey.');
const API = `https://video.bunnycdn.com/library/${libraryId}`;
const auth = {AccessKey: secrets.apiKey, Accept: 'application/json'};
const apiError = async r => { const t = await r.text(); try { const j = JSON.parse(t); return `${r.status} ${j.message ?? j.Message ?? ''}`.trim(); } catch { return `${r.status} ${t.slice(0, 300)}`; } };
const saveRecord = rec => { fs.mkdirSync(path.dirname(recordPath), {recursive: true}); fs.writeFileSync(recordPath, JSON.stringify(rec, null, 2) + '\n'); };

// ---- collection: reuse an exact name match, else create ---------------------------
let collectionId = null;
const lr = await fetch(`${API}/collections?search=${encodeURIComponent(collection)}&itemsPerPage=100&page=1`, {headers: auth});
if (!lr.ok) fail(`Could not list collections: ${await apiError(lr)}`);
collectionId = ((await lr.json()).items ?? []).find(c => c.name === collection)?.guid ?? null;
if (!collectionId) {
	const cr = await fetch(`${API}/collections`, {method: 'POST', headers: {...auth, 'Content-Type': 'application/json'}, body: JSON.stringify({name: collection})});
	if (!cr.ok) fail(`Could not create collection: ${await apiError(cr)}`);
	collectionId = (await cr.json()).guid;
	console.log(`Created collection ${collection} (${collectionId})`);
}

// ---- video object --------------------------------------------------------------
const sha256 = crypto.createHash('sha256').update(fs.readFileSync(video)).digest('hex');
let videoId = resumeId;
if (!videoId) {
	const vr = await fetch(`${API}/videos`, {method: 'POST', headers: {...auth, 'Content-Type': 'application/json'}, body: JSON.stringify({title, collectionId})});
	if (!vr.ok) fail(`Could not create the video object: ${await apiError(vr)}`);
	videoId = (await vr.json()).guid;
}
const record = {lessonId: id, libraryId, videoId, collection, collectionId, title, file: fileRel, bytes: size, sha256,
	status: 'created', createdAt: prior?.createdAt ?? new Date().toISOString()};
saveRecord(record);

// ---- file bytes (direct PUT; a rerun reuses this video object) -------------------------
const q = resolutions ? `?enabledResolutions=${encodeURIComponent(resolutions)}` : '';
let uploaded = false;
for (let attempt = 1; attempt <= 3 && !uploaded; attempt++) {
	try {
		const r = await fetch(`${API}/videos/${videoId}${q}`, {method: 'PUT', duplex: 'half', body: fs.createReadStream(video),
			headers: {...auth, 'Content-Type': 'application/octet-stream', 'Content-Length': String(size)}});
		if (r.ok) { uploaded = true; break; }
		const err = await apiError(r);
		if (r.status === 400 && /already uploaded/i.test(err)) { uploaded = true; break; }
		if (r.status < 500) fail(`Upload failed: ${err}. Record kept at ${path.relative(ROOT, recordPath)}; rerun to retry this video object.`);
		console.warn(`Upload attempt ${attempt} failed (${err}).`);
	} catch (e) { console.warn(`Upload attempt ${attempt} interrupted (${e.message}).`); }
	if (!uploaded) await new Promise(s => setTimeout(s, 5000 * attempt));
}
if (!uploaded) fail(`Upload did not complete. Record kept at ${path.relative(ROOT, recordPath)}; rerun to retry the same video object.`);
Object.assign(record, {status: 'uploaded', uploadedAt: new Date().toISOString(), encoding: 'pending (check the library dashboard)',
	embedBase: `https://player.mediadelivery.net/embed/${libraryId}/${videoId}`});
console.log(`Uploaded: video ${videoId} in ${collection}. Encoding runs on Bunny now.`);

// ---- captions -------------------------------------------------------------------
if (srtText) {
	const cr = await fetch(`${API}/videos/${videoId}/captions/${lang}`, {method: 'POST', headers: {...auth, 'Content-Type': 'application/json'},
		body: JSON.stringify({captionsFile: Buffer.from(srtText, 'utf8').toString('base64'), label})});
	record.captions = cr.ok ? {status: 'uploaded', lang, label, file: path.relative(ROOT, srt).replace(/\\/g, '/'), cues} : {status: `failed: ${await apiError(cr)}`};
	console.log(`Captions: ${record.captions.status}`);
}
saveRecord(record);
console.log(`Record: ${path.relative(ROOT, recordPath).replace(/\\/g, '/')}`);
