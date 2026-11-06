// Maths studio kit pilot (silent): 16 evenly spaced stills, then optionally the MP4.
// node scripts/render-maths-studio-pilot.mjs [--stills-only] [--video-only] [--frames=1,2,3]
// One browser, concurrency 1, shared stills lock. Output: out/explainer/maths-studio-pilot/.
import fs from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {openBrowser, renderMedia, renderStill, selectComposition} from '@remotion/renderer';
import {execFileSync} from 'node:child_process';
import {ROOT, FONTS, FFMPEG} from './lib/explainer-common.mjs';

const ID = 'MathsAdvanced-Studio-Kit-Pilot';
const base = path.join(ROOT, 'out/explainer/maths-studio-pilot');
const lock = path.join(ROOT, 'out/explainer/.stills-lock');
const publicDir = path.join(base, 'public');
const bundleDir = path.join(base, 'bundle');
fs.mkdirSync(base, {recursive: true});
const ASSETS = ['_placeholder-broth-flask.png', '_placeholder-broth-flask-cloudy.png', 'ma12-microscope-field-v1.png', 'ma12-rod-cell-v1.png', 'ma12-rod-cell-dividing-v1.png'].map(f => 'assets/maths/' + f);

try {fs.mkdirSync(lock);} catch (e) {if (e.code === 'EEXIST') throw new Error('Shared stills lock is occupied. Retry after the current render finishes.'); throw e;}
fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify({job: 'maths-studio-pilot', pid: process.pid, started: new Date().toISOString()}));
let browser;
try {
	fs.rmSync(publicDir, {recursive: true, force: true});
	for (const rel of [...FONTS, ...ASSETS]) {const dst = path.join(publicDir, rel); fs.mkdirSync(path.dirname(dst), {recursive: true}); fs.copyFileSync(path.join(ROOT, 'public', rel), dst);}
	const serveUrl = await bundle({entryPoint: path.join(ROOT, 'src/explainer/math/studio-pilot-entry.tsx'), publicDir, outDir: bundleDir});
	browser = await openBrowser('chrome');
	const composition = await selectComposition({serveUrl, id: ID, puppeteerInstance: browser});
	const total = composition.durationInFrames;
	const arg = process.argv.find(a => a.startsWith('--frames='));
	const frames = arg ? arg.slice(9).split(',').map(Number) : Array.from({length: 16}, (_, i) => Math.round(((i + 0.5) * total) / 16));
	if (!process.argv.includes('--video-only')) {
		const stills = path.join(base, 'stills'); fs.mkdirSync(stills, {recursive: true});
		for (const frame of frames) {
			await renderStill({serveUrl, composition, puppeteerInstance: browser, frame, output: path.join(stills, `f${String(frame).padStart(5, '0')}.png`), imageFormat: 'png'});
			console.log(`Still ${frame}`);
		}
	}
	if (!process.argv.includes('--stills-only')) {
		// The shared font loader can stall in a long-lived render tab: fresh browser per 180-frame chunk,
		// then join the silent H.264 chunks exactly (same pattern as render-maths-calculus-pilot.mjs).
		await browser.close({silent: true}); browser = undefined;
		const chunks = path.join(base, 'chunks'); fs.mkdirSync(chunks, {recursive: true});
		const outputs = [];
		for (let start = 0; start < total; start += 180) {
			const end = Math.min(start + 179, total - 1), out = path.join(chunks, `f${start}.mp4`);
			if (fs.existsSync(out) && process.argv.includes('--resume')) {outputs.push(out); continue;}
			for (let attempt = 1; attempt <= 3; attempt++) {
				try {
					browser = await openBrowser('chrome');
					await renderMedia({serveUrl, composition, puppeteerInstance: browser, codec: 'h264', crf: 20, concurrency: 1, muted: true, frameRange: [start, end], outputLocation: out});
					break;
				} catch (e) {console.log(`Chunk ${start} attempt ${attempt}: ${String(e.message).slice(0, 120)}`); if (attempt === 3) throw e;}
				finally {if (browser) {await browser.close({silent: true}); browser = undefined;}}
			}
			outputs.push(out); console.log(`Chunk ${start} to ${end} done`);
		}
		const list = path.join(chunks, 'concat.txt');
		fs.writeFileSync(list, outputs.map(f => `file '${f.replaceAll(path.sep, '/')}'`).join('\n'));
		const final = path.join(base, 'maths-studio-pilot.mp4');
		execFileSync(FFMPEG, ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-map', '0:v:0', '-an', '-c:v', 'copy', '-movflags', '+faststart', final], {windowsHide: true});
		console.log('Video done');
	}
} finally {
	if (browser) await browser.close({silent: true});
	fs.rmSync(lock, {recursive: true, force: true});
}
