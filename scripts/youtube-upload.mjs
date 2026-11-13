// Upload one finished master to YouTube with its metadata, SRT captions and playlist slot.
// Usage:
//   node scripts/youtube-upload.mjs --video out/.../X-v1.mp4 --title "..." --description-file desc.txt
//     [--srt captions.srt] [--playlist PLxxxx --position 5] [--tags "a,b"] [--privacy private|unlisted|public]
//     [--record out/youtube/X.json] [--dry-run]
// Defaults: private, Education (27), en-AU, not made for kids, altered/synthetic content declared (AI voice).
// "public" is refused unless YT_PUBLISH_OK=1 is set: the owner grants publishing, not this script.
// Needs secrets/youtube-client.json and secrets/youtube-token.json (run scripts/youtube-auth.mjs once).
// Never prints or logs a token.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
	if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true]);
	return acc;
}, []));
const need = k => { if (!args[k] || args[k] === true) { console.error(`Missing --${k}`); process.exit(1); } return args[k]; };

const video = path.resolve(ROOT, need('video'));
const title = need('title');
const description = fs.readFileSync(path.resolve(ROOT, need('description-file')), 'utf8');
const privacy = args.privacy ?? 'private';
if (!['private', 'unlisted', 'public'].includes(privacy)) { console.error('Bad --privacy'); process.exit(1); }
if (privacy === 'public' && process.env.YT_PUBLISH_OK !== '1') { console.error('Refusing public upload: set YT_PUBLISH_OK=1 only with the owner\'s standing permission.'); process.exit(1); }
if (title.length > 100) { console.error(`Title is ${title.length} characters; YouTube allows 100.`); process.exit(1); }
if (description.length > 5000) { console.error(`Description is ${description.length} characters; YouTube allows 5000.`); process.exit(1); }
if (/—/.test(title + description)) { console.error('Em dash found in title or description (project rule).'); process.exit(1); }
if (!fs.existsSync(video)) { console.error(`No video at ${video}`); process.exit(1); }
const srt = args.srt ? path.resolve(ROOT, args.srt) : null;
if (srt && !fs.existsSync(srt)) { console.error(`No captions at ${srt}`); process.exit(1); }

const meta = {
	snippet: {title, description, categoryId: '27', defaultLanguage: 'en-AU', defaultAudioLanguage: 'en-AU',
		...(args.tags ? {tags: String(args.tags).split(',').map(s => s.trim()).filter(Boolean)} : {})},
	status: {privacyStatus: privacy, selfDeclaredMadeForKids: false, containsSyntheticMedia: true, embeddable: true},
};

const size = fs.statSync(video).size;
console.log(`Video ${path.basename(video)} (${(size / 1048576).toFixed(1)} MB), "${title}", ${privacy}${srt ? ', with captions' : ''}${args.playlist ? `, playlist ${args.playlist}` : ''}`);
if (args['dry-run']) { console.log('Dry run: nothing uploaded.'); process.exit(0); }

// ---- access token from the saved refresh token -----------------------------
const rawClient = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/youtube-client.json'), 'utf8'));
const client = rawClient.installed ?? rawClient.web;
const {refresh_token} = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/youtube-token.json'), 'utf8'));
const tr = await fetch(client.token_uri ?? 'https://oauth2.googleapis.com/token', {method: 'POST',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	body: new URLSearchParams({client_id: client.client_id, client_secret: client.client_secret ?? '', refresh_token, grant_type: 'refresh_token'})});
const tj = await tr.json();
if (!tr.ok) { console.error(`Could not refresh the access token (${tr.status}): ${tj.error}. Re-run scripts/youtube-auth.mjs.`); process.exit(1); }
const auth = {Authorization: `Bearer ${tj.access_token}`};
const apiError = async r => { const t = await r.text(); try { const j = JSON.parse(t); return `${r.status} ${j.error?.errors?.[0]?.reason ?? ''} ${j.error?.message ?? ''}`.trim(); } catch { return `${r.status} ${t.slice(0, 300)}`; } };

// ---- resumable upload -------------------------------------------------------
const init = await fetch('https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status', {
	method: 'POST', headers: {...auth, 'Content-Type': 'application/json; charset=UTF-8', 'X-Upload-Content-Type': 'video/mp4', 'X-Upload-Content-Length': String(size)},
	body: JSON.stringify(meta)});
if (!init.ok) { console.error(`Upload could not start: ${await apiError(init)}`); process.exit(1); }
const session = init.headers.get('location');

let offset = 0, result = null;
for (let attempt = 0; attempt < 6 && !result; attempt++) {
	try {
		const body = fs.createReadStream(video, {start: offset});
		const r = await fetch(session, {method: 'PUT', duplex: 'half', body,
			headers: {'Content-Length': String(size - offset), 'Content-Range': `bytes ${offset}-${size - 1}/${size}`}});
		if (r.ok) { result = await r.json(); break; }
		if (r.status !== 308 && r.status < 500) { console.error(`Upload failed: ${await apiError(r)}`); process.exit(1); }
	} catch (e) { console.warn(`Upload interrupted (${e.message}); resuming.`); }
	await new Promise(s => setTimeout(s, 5000 * (attempt + 1)));
	const q = await fetch(session, {method: 'PUT', headers: {'Content-Length': '0', 'Content-Range': `bytes */${size}`}});
	if (q.ok) { result = await q.json(); break; }
	const range = q.headers.get('range');
	offset = range ? Number(range.split('-')[1]) + 1 : 0;
}
if (!result?.id) { console.error('Upload did not complete after retries. Nothing to record; it is safe to run again.'); process.exit(1); }
const videoId = result.id;
console.log(`Uploaded: https://youtu.be/${videoId} (${result.status?.privacyStatus}; upload status ${result.status?.uploadStatus})`);
const record = {videoId, url: `https://youtu.be/${videoId}`, title, privacy: result.status?.privacyStatus, file: path.relative(ROOT, video), bytes: size, uploadedAt: new Date().toISOString()};

// ---- captions (SRT, not burned in) ------------------------------------------
if (srt) {
	const boundary = 'cap' + Date.now();
	const parts = Buffer.concat([
		Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify({snippet: {videoId, language: 'en', name: 'English', isDraft: false}})}\r\n--${boundary}\r\nContent-Type: application/octet-stream\r\n\r\n`),
		fs.readFileSync(srt), Buffer.from(`\r\n--${boundary}--\r\n`)]);
	const cr = await fetch('https://www.googleapis.com/upload/youtube/v3/captions?uploadType=multipart&part=snippet', {
		method: 'POST', headers: {...auth, 'Content-Type': `multipart/related; boundary=${boundary}`}, body: parts});
	record.captions = cr.ok ? 'uploaded' : `failed: ${await apiError(cr)}`;
	console.log(`Captions: ${record.captions}`);
}

// ---- playlist slot ------------------------------------------------------------
if (args.playlist) {
	const snippet = {playlistId: args.playlist, resourceId: {kind: 'youtube#video', videoId}, ...(args.position !== undefined ? {position: Number(args.position)} : {})};
	const pr = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet', {
		method: 'POST', headers: {...auth, 'Content-Type': 'application/json'}, body: JSON.stringify({snippet})});
	record.playlist = pr.ok ? `added to ${args.playlist}${args.position !== undefined ? ` at ${args.position}` : ''}` : `failed: ${await apiError(pr)}`;
	console.log(`Playlist: ${record.playlist}`);
}

if (args.record) {
	const rec = path.resolve(ROOT, args.record);
	fs.mkdirSync(path.dirname(rec), {recursive: true});
	fs.writeFileSync(rec, JSON.stringify(record, null, 2));
	console.log(`Record: ${path.relative(ROOT, rec)}`);
}
