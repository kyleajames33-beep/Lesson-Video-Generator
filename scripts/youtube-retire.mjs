// Retire a superseded YouTube upload: set it private and remove it from the given playlists. Never deletes.
// Usage: node scripts/youtube-retire.mjs --id OLD_VIDEO_ID [--playlists PLaaa,PLbbb] [--dry-run]
// Run only after the replacement is live and confirmed. Never prints or logs a token.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) => {
	if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1] && !all[i + 1].startsWith('--') ? all[i + 1] : true]);
	return acc;
}, []));
const id = args.id;
if (!id || id === true) { console.error('Missing --id'); process.exit(1); }
const playlists = args.playlists && args.playlists !== true ? String(args.playlists).split(',').map(s => s.trim()).filter(Boolean) : [];

const rawClient = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/youtube-client.json'), 'utf8'));
const client = rawClient.installed ?? rawClient.web;
const {refresh_token} = JSON.parse(fs.readFileSync(path.join(ROOT, 'secrets/youtube-token.json'), 'utf8'));
const tr = await fetch(client.token_uri ?? 'https://oauth2.googleapis.com/token', {method: 'POST',
	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	body: new URLSearchParams({client_id: client.client_id, client_secret: client.client_secret ?? '', refresh_token, grant_type: 'refresh_token'})});
const tj = await tr.json();
if (!tr.ok) { console.error(`Could not refresh the access token (${tr.status}): ${tj.error}.`); process.exit(1); }
const auth = {Authorization: `Bearer ${tj.access_token}`};

const v = await (await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,status&id=${id}`, {headers: auth})).json();
const item = v.items?.[0];
if (!item) { console.error(`No video ${id} on this channel.`); process.exit(1); }
console.log(`Video ${id}: "${item.snippet.title}" (${item.status.privacyStatus})`);

const removals = [];
for (const pl of playlists) {
	const r = await (await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=id&maxResults=50&playlistId=${pl}&videoId=${id}`, {headers: auth})).json();
	for (const it of r.items ?? []) removals.push({pl, itemId: it.id});
}
console.log(`Playlist entries to remove: ${removals.length}`);
if (args['dry-run']) { console.log('Dry run: nothing changed.'); process.exit(0); }

for (const {pl, itemId} of removals) {
	const r = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?id=${itemId}`, {method: 'DELETE', headers: auth});
	console.log(`Removed from ${pl}: ${r.status}`);
}
const u = await fetch('https://www.googleapis.com/youtube/v3/videos?part=status', {method: 'PUT', headers: {...auth, 'Content-Type': 'application/json'},
	body: JSON.stringify({id, status: {privacyStatus: 'private', selfDeclaredMadeForKids: false, embeddable: item.status.embeddable ?? true}})});
console.log(`Set private: ${u.status}`);
if (!u.ok) process.exit(1);
