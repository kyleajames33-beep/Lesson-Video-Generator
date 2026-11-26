// Add an SRT caption track to an already-uploaded YouTube video (for uploads whose captions step failed).
// Usage: node scripts/youtube-captions-add.mjs --video VIDEO_ID --srt captions.srt [--record out/youtube/<lesson>-<rev>.json]
// Skips the upload if the video already has an English track, so it never makes a duplicate. Never prints a token.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
	if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true]);
	return acc;
}, []));
const videoId = args.video, srt = args.srt;
if (!videoId || videoId === true || !srt || srt === true) { console.error('Need --video and --srt'); process.exit(1); }
if (!fs.existsSync(srt)) { console.error(`No captions at ${srt}`); process.exit(1); }

const rawClient = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/youtube-client.json'), 'utf8'));
const client = rawClient.installed ?? rawClient.web;
const {refresh_token} = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/youtube-token.json'), 'utf8'));
const tr = await fetch(client.token_uri ?? 'https://oauth2.googleapis.com/token', {method: 'POST',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	body: new URLSearchParams({client_id: client.client_id, client_secret: client.client_secret ?? '', refresh_token, grant_type: 'refresh_token'})});
const tj = await tr.json();
if (!tr.ok) { console.error(`Could not refresh the access token (${tr.status}): ${tj.error}.`); process.exit(1); }
const auth = {Authorization: `Bearer ${tj.access_token}`};

const list = await fetch(`https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}`, {headers: auth});
const lj = await list.json();
if (!list.ok) { console.error(`Could not list captions: ${lj.error?.errors?.[0]?.reason ?? lj.error?.message}`); process.exit(1); }
let result;
if ((lj.items ?? []).some(t => t.snippet.language === 'en')) {
	result = 'uploaded (already had an English track)';
} else {
	const boundary = 'cap' + Date.now();
	const parts = Buffer.concat([
		Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify({snippet: {videoId, language: 'en', name: 'English', isDraft: false}})}\r\n--${boundary}\r\nContent-Type: application/octet-stream\r\n\r\n`),
		fs.readFileSync(srt), Buffer.from(`\r\n--${boundary}--\r\n`)]);
	const cr = await fetch('https://www.googleapis.com/upload/youtube/v3/captions?uploadType=multipart&part=snippet', {
		method: 'POST', headers: {...auth, 'Content-Type': `multipart/related; boundary=${boundary}`}, body: parts});
	if (cr.ok) result = 'uploaded';
	else { const j = await cr.json().catch(() => ({})); result = `failed: ${cr.status} ${j.error?.errors?.[0]?.reason ?? j.error?.message ?? 'unknown'}`; }
}
console.log(`Captions: ${result}`);
if (args.record && args.record !== true) {
	const rec = path.resolve(ROOT, args.record);
	const record = fs.existsSync(rec) ? JSON.parse(fs.readFileSync(rec, 'utf8')) : {videoId};
	record.captions = result;
	fs.writeFileSync(rec, JSON.stringify(record, null, 2));
}
if (result.startsWith('failed')) process.exit(1);
