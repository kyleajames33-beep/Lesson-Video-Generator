// Add an existing YouTube video to extra playlists and note the result in its out/youtube record.
// Usage: node scripts/youtube-playlist-add.mjs --video VIDEO_ID --playlists PLaaa:2,PLbbb:5 --record out/youtube/<lesson>-<rev>.json
// Each playlist is ID or ID:position. Never prints or logs a token.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
	if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true]);
	return acc;
}, []));
const videoId = args.video;
if (!videoId || videoId === true || !args.playlists || args.playlists === true) { console.error('Need --video and --playlists'); process.exit(1); }

const rawClient = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/youtube-client.json'), 'utf8'));
const client = rawClient.installed ?? rawClient.web;
const {refresh_token} = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/youtube-token.json'), 'utf8'));
const tr = await fetch(client.token_uri ?? 'https://oauth2.googleapis.com/token', {method: 'POST',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	body: new URLSearchParams({client_id: client.client_id, client_secret: client.client_secret ?? '', refresh_token, grant_type: 'refresh_token'})});
const tj = await tr.json();
if (!tr.ok) { console.error(`Could not refresh the access token (${tr.status}): ${tj.error}.`); process.exit(1); }
const auth = {Authorization: `Bearer ${tj.access_token}`};

const results = [];
for (const spec of String(args.playlists).split(',').map(s => s.trim()).filter(Boolean)) {
	const [playlistId, position] = spec.split(':');
	const snippet = {playlistId, resourceId: {kind: 'youtube#video', videoId}, ...(position !== undefined ? {position: Number(position)} : {})};
	const r = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet', {
		method: 'POST', headers: {...auth, 'Content-Type': 'application/json'}, body: JSON.stringify({snippet})});
	let msg = `added to ${playlistId}${position !== undefined ? ` at ${position}` : ''}`;
	if (!r.ok) { const j = await r.json().catch(() => ({})); msg = `failed (${r.status}) ${playlistId}: ${j.error?.errors?.[0]?.reason ?? j.error?.message ?? 'unknown'}`; }
	console.log(`Playlist: ${msg}`);
	results.push(msg);
}
if (args.record && args.record !== true) {
	const rec = path.resolve(ROOT, args.record);
	const record = fs.existsSync(rec) ? JSON.parse(fs.readFileSync(rec, 'utf8')) : {videoId};
	record.alsoPlaylists = results;
	fs.writeFileSync(rec, JSON.stringify(record, null, 2));
	console.log(`Record: ${path.relative(ROOT, rec)}`);
}
