// One-time YouTube sign-in for the release agent.
// Usage: node scripts/youtube-auth.mjs
// Needs secrets/youtube-client.json (an OAuth "Desktop app" client downloaded from Google Cloud).
// Opens the browser; the owner signs in and approves. Saves a refresh token to secrets/youtube-token.json.
// Never prints or logs a token.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import crypto from 'node:crypto';
import open from 'open';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const CLIENT = path.join(ROOT, 'secrets/youtube-client.json');
const TOKEN = path.join(ROOT, 'secrets/youtube-token.json');
const SCOPES = [
	'https://www.googleapis.com/auth/youtube.upload',
	'https://www.googleapis.com/auth/youtube',
	'https://www.googleapis.com/auth/youtube.force-ssl',
];

if (!fs.existsSync(CLIENT)) {
	console.error(`Missing ${CLIENT}. Download the OAuth client (Desktop app) JSON from Google Cloud and save it there.`);
	process.exit(1);
}
const raw = JSON.parse(fs.readFileSync(CLIENT, 'utf8'));
const c = raw.installed ?? raw.web;
if (!c?.client_id) { console.error('The client file has no client_id. Download a "Desktop app" OAuth client.'); process.exit(1); }

const verifier = crypto.randomBytes(48).toString('base64url');
const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');
const state = crypto.randomBytes(16).toString('hex');

const server = http.createServer();
await new Promise(r => server.listen(0, '127.0.0.1', r));
const redirect = `http://127.0.0.1:${server.address().port}`;

const url = new URL(c.auth_uri ?? 'https://accounts.google.com/o/oauth2/v2/auth');
url.search = new URLSearchParams({
	client_id: c.client_id, redirect_uri: redirect, response_type: 'code', scope: SCOPES.join(' '),
	access_type: 'offline', prompt: 'consent', code_challenge: challenge, code_challenge_method: 'S256', state,
}).toString();

console.log('Opening the browser to sign in. If it does not open, paste this address into it:\n' + url.toString());
await open(url.toString());

const code = await new Promise((resolve, reject) => {
	server.on('request', (req, res) => {
		const q = new URL(req.url, redirect).searchParams;
		if (q.get('state') !== state) { res.end('State mismatch. Close this tab and try again.'); return reject(new Error('state mismatch')); }
		if (q.get('error')) { res.end('Sign-in was cancelled. You can close this tab.'); return reject(new Error(q.get('error'))); }
		res.end('Signed in. You can close this tab and return to VS Code.');
		resolve(q.get('code'));
	});
});
server.close();

const resp = await fetch(c.token_uri ?? 'https://oauth2.googleapis.com/token', {
	method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	body: new URLSearchParams({code, client_id: c.client_id, client_secret: c.client_secret ?? '', redirect_uri: redirect,
		grant_type: 'authorization_code', code_verifier: verifier}),
});
const tok = await resp.json();
if (!resp.ok || !tok.refresh_token) { console.error(`Token exchange failed (${resp.status}): ${tok.error ?? 'no refresh token returned'}`); process.exit(1); }

fs.mkdirSync(path.dirname(TOKEN), {recursive: true});
fs.writeFileSync(TOKEN, JSON.stringify({refresh_token: tok.refresh_token, scope: tok.scope, saved: new Date().toISOString()}, null, 2), {mode: 0o600});

// Confirm which channel was authorised (name only).
const me = await fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true', {headers: {Authorization: `Bearer ${tok.access_token}`}}).then(r => r.json());
console.log(`Saved. Authorised channel: ${me.items?.[0]?.snippet?.title ?? '(could not read the channel name)'}`);
