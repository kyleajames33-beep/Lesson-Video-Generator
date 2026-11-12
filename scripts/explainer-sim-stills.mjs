// node scripts/explainer-sim-stills.mjs SimDemo-MagneticField:200 [SimDemo-Other:120 ...]
// Renders stills of the simulation kit demos (src/explainer/sims/demos.tsx) to
// out/explainer/sims-demos/. Holds the shared stills lock so only one render runs at a time.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {bundle} from '@remotion/bundler';
import {openBrowser, renderStill, selectComposition} from '@remotion/renderer';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const jobs = process.argv.slice(2).map(a => { const [id, frame] = a.split(':'); return {id, frame: Number(frame ?? 200)}; });
if (!jobs.length) { console.error('Give at least one Id:frame.'); process.exit(2); }
const out = path.join(ROOT, 'out/explainer/sims-demos'), lock = path.join(ROOT, 'out/explainer/.stills-lock');
fs.mkdirSync(out, {recursive: true});
const sleep = ms => new Promise(r => setTimeout(r, ms));
for (let waited = 0; ; waited += 10) {
	try { fs.mkdirSync(lock); fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify({tool: 'explainer-sim-stills', pid: process.pid, started: new Date().toISOString()})); break; }
	catch {
		let owner = null;
		try { owner = JSON.parse(fs.readFileSync(path.join(lock, 'owner.json'), 'utf8')); } catch { /* no owner file */ }
		let alive = true;
		if (owner?.pid) { try { process.kill(owner.pid, 0); } catch (e) { alive = e.code === 'EPERM'; } }
		if (owner?.pid && !alive) { fs.rmSync(lock, {recursive: true, force: true}); continue; }
		if (waited % 120 === 0) console.log('Waiting for the stills lock...', owner ?? '');
		if (waited > 3600) { console.error('Gave up waiting for the stills lock.'); process.exit(3); }
		await sleep(10000);
	}
}
const release = () => fs.rmSync(lock, {recursive: true, force: true});
process.on('SIGINT', () => { release(); process.exit(130); });
const bundleDir = path.join(out, `bundle-${process.pid}`);
let browser, code = 1;
try {
	// The demos need only the fonts from public/, so the bundle stays small.
	const emptyPublic = path.join(out, 'public-slim');
	fs.mkdirSync(emptyPublic, {recursive: true});
	fs.cpSync(path.join(ROOT, 'public/fonts'), path.join(emptyPublic, 'fonts'), {recursive: true});
	const serveUrl = await bundle({entryPoint: path.join(ROOT, 'src/explainer/sims/demos.tsx'), publicDir: emptyPublic, outDir: bundleDir});
	for (const job of jobs) {
		browser = await openBrowser('chrome');
		const composition = await selectComposition({serveUrl, id: job.id, puppeteerInstance: browser, timeoutInMilliseconds: 90000});
		const output = path.join(out, `${job.id}-${job.frame}.png`);
		await renderStill({serveUrl, composition, puppeteerInstance: browser, frame: job.frame, output, imageFormat: 'png'});
		await browser.close({silent: true}); browser = undefined;
		console.log('still', path.relative(ROOT, output));
	}
	code = 0;
} catch (e) { console.error(e); }
finally {
	if (browser) try { await browser.close({silent: true}); } catch { /* already closed */ }
	fs.rmSync(bundleDir, {recursive: true, force: true});
	release();
}
process.exit(code);
