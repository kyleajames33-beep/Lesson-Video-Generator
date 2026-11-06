import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';

// Keep one fixed asset origin for every chunk. Renderer proxy servers may use
// different ports between renderMedia calls; staticFile URLs must stay here.
export async function serveExplainerBundle(directory) {
	const root = path.resolve(directory);
	const mime = {'.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.wav': 'audio/wav', '.mp3': 'audio/mpeg'};
	const failures = [];
	const server = http.createServer((req, res) => {
		let relative;
		try { relative = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname).replace(/^\/+/, '') || 'index.html'; }
		catch { res.writeHead(400).end(); return; }
		const file = path.resolve(root, relative);
		if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
			failures.push(relative); res.writeHead(404).end(); return;
		}
		res.writeHead(200, {'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store'});
		fs.createReadStream(file).on('error', () => res.destroy()).pipe(res);
	});
	await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
	const origin = `http://127.0.0.1:${server.address().port}`;
	return {url: `${origin}/index.html`, failures,
		async checkFonts() {
			for (const name of ['caveat-latin-wght-normal.woff2', 'inter-tight-latin-wght-normal.woff2']) {
				const response = await fetch(`${origin}/public/fonts/${name}`);
				if (!response.ok) throw new Error(`Bundle font unavailable: ${name} (${response.status})`);
				const bytes = await response.arrayBuffer();
				if (bytes.byteLength < 1000) throw new Error(`Bundle font truncated: ${name}`);
			}
		},
		async close() { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); },
	};
}
