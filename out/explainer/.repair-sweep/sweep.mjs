// Repair sweep (12 Nov 2026): 1 frame per second (or --nth), JPEG frames plus a text/card probe per frame.
//   node out/explainer/.repair-sweep/sweep.mjs <id> [--nth 30] [--from F --to F] [--out dir] [--scale 0.5] [--ink]
//   --ink (13 Nov 2026): render with all text hidden, PNG frames, for the line-through-text check (ink.py).
//   --textonly (13 Nov 2026): render text only (graphics hidden, white ground), PNG frames: the exact glyph mask.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderFrames, selectComposition} from '@remotion/renderer';
import {ROOT, buildSlimPublic, loadConfig, totalFrames} from '../../../scripts/lib/explainer-common.mjs';
for (const stream of [process.stdout, process.stderr]) {
	const write = stream.write.bind(stream);
	stream.write = (chunk, ...rest) => { if (String(chunk).includes('REPAIR_SWEEP::')) { const d = rest.find(a => typeof a === 'function'); if (d) d(); return true; } return write(chunk, ...rest); };
}
const args = process.argv.slice(2);
const flag = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const id = args[0];
const nth = Number(flag('nth', 30)), scale = Number(flag('scale', 0.5));
const ink = args.includes('--ink'), textOnly = args.includes('--textonly');
const outDir = path.resolve(flag('out', `C:/Users/kygs/AppData/Local/Temp/claude/maths-repair/${ink ? 'ink/' : textOnly ? 'text/' : ''}${id}`));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const posix = p => p.split(path.sep).join('/');
const config = await loadConfig(id);
const total = totalFrames(config);
const from = Number(flag('from', 0)), to = Math.min(Number(flag('to', total - 1)), total - 1);
fs.rmSync(outDir, {recursive: true, force: true}); fs.mkdirSync(path.join(outDir, 'frames'), {recursive: true});
const lock = path.join(ROOT, 'out/explainer/.stills-lock');
let locked = false;
const release = () => { if (locked) { locked = false; fs.rmSync(lock, {recursive: true, force: true}); } };
process.on('exit', release); process.on('SIGINT', () => { release(); process.exit(130); });
for (let w = 0; ; w++) {
	try { fs.mkdirSync(lock); locked = true; fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify({tool: 'maths-repair-agent sweep', id, pid: process.pid, started: new Date().toISOString()})); break; }
	catch {
		let owner = null; try { owner = JSON.parse(fs.readFileSync(path.join(lock, 'owner.json'), 'utf8')); } catch {}
		let alive = true; if (owner?.pid) { try { process.kill(owner.pid, 0); } catch { alive = false; } }
		if (owner?.pid && !alive) { fs.rmSync(lock, {recursive: true, force: true}); continue; }
		if (w % 6 === 0) console.log('waiting for stills lock', JSON.stringify(owner));
		await sleep(10000);
	}
}
const base = path.join(ROOT, 'out/explainer', id);
let bundleDir = null; // 13 Nov: every run's webpack bundle (~66 MB) is deleted at the end; they filled the disk
const entry = path.join(base, `sweep-entry-${process.pid}.tsx`);
try {
	while (os.freemem() < 0.9 * 2 ** 30) { console.log(`free ${(os.freemem() / 2 ** 30).toFixed(2)} GB, waiting`); await sleep(15000); }
	const pub = path.join(base, 'public-slim');
	buildSlimPublic(config, pub);
	const src = config.__entrySource;
	fs.mkdirSync(base, {recursive: true});
	fs.writeFileSync(entry, `import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {ExplainerVideo} from '${posix(path.join(ROOT, 'src/explainer/ExplainerVideo'))}';
import {${src.exportName} as config} from '${posix(src.modulePath)}';
import {SweepProbe} from '${posix(path.join(ROOT, 'out/explainer/.repair-sweep/sweep-probe'))}';
import {ExplainerAssetGuard} from '${posix(path.join(ROOT, 'scripts/lib/explainer-render-guard'))}';
const Wrapped: React.FC = () => <ExplainerAssetGuard><SweepProbe${ink ? ' hideText' : ''}${textOnly ? ' textOnly' : ''}><ExplainerVideo config={config} /></SweepProbe></ExplainerAssetGuard>;
registerRoot(() => <Composition id={config.id} component={Wrapped} durationInFrames={${total}} fps={30} width={1920} height={1080} />);
`);
	const t0 = Date.now();
	const serveUrl = await bundle({entryPoint: entry, publicDir: pub, enableCaching: false});
	bundleDir = serveUrl;
	const composition = await selectComposition({serveUrl, id, timeoutInMilliseconds: 90000});
	const probes = {};
	const onBrowserLog = log => { if (typeof log.text === 'string' && log.text.startsWith('REPAIR_SWEEP::')) { try { const a = JSON.parse(log.text.slice(14)); probes[a.frame] = a; } catch {} } };
	{
		// 2-minute chunks with retries (13 Nov: a busy 8 GB machine can time out font loading in a fresh tab);
		// frames are renamed to f<absolute frame, 6 digits>.png|jpeg so every tool maps them exactly.
		const chunk = nth * 120, tmp = path.join(outDir, 'frames-tmp');
		for (let a = from; a <= to; a += chunk) {
			const b = Math.min(to, a + chunk - 1);
			for (let attempt = 1; ; attempt++) {
				fs.rmSync(tmp, {recursive: true, force: true}); fs.mkdirSync(tmp, {recursive: true});
				const diskFree = () => {try {const st = fs.statfsSync(outDir); return st.bavail * st.bsize;} catch {return Infinity;}};
				while (diskFree() < 1.2 * 2 ** 30) { console.log(`disk free ${(diskFree() / 2 ** 30).toFixed(2)} GB, waiting`); await sleep(30000); }
				while (os.freemem() < 0.6 * 2 ** 30) { console.log(`free ${(os.freemem() / 2 ** 30).toFixed(2)} GB, waiting`); await sleep(15000); }
				try {
					await renderFrames({composition, serveUrl, outputDir: tmp, inputProps: {}, imageFormat: ink || textOnly ? 'png' : 'jpeg', ...(ink || textOnly ? {} : {jpegQuality: 85}), scale, everyNthFrame: nth, frameRange: [a, b], concurrency: 1, timeoutInMilliseconds: 120000, logLevel: 'error',
						imageSequencePattern: 'f[frame].[ext]', onStart: () => {}, onFrameUpdate: () => {}, onBrowserLog});
					const files = fs.readdirSync(tmp).sort((p, q) => Number(p.replace(/\D/g, '')) - Number(q.replace(/\D/g, '')));
					const want = []; for (let f = a; f <= b; f += nth) want.push(f);
					if (files.length !== want.length) throw new Error(`chunk ${a}-${b}: ${files.length} files for ${want.length} frames`);
					files.forEach((n, k) => fs.renameSync(path.join(tmp, n), path.join(outDir, 'frames', `f${String(want[k]).padStart(6, '0')}.${ink || textOnly ? 'png' : 'jpeg'}`)));
					console.log(`${id}: frames ${a}-${b} done`);
					break;
				} catch (error) {
					console.log(`${id}: chunk ${a}-${b} attempt ${attempt} failed: ${String(error?.message ?? error).slice(0, 160)}`);
					if (attempt >= 4) throw error;
					await sleep(20000);
				}
			}
		}
		fs.rmSync(tmp, {recursive: true, force: true});
	}
	fs.writeFileSync(path.join(outDir, 'probe.json'), JSON.stringify({id, total, nth, from, to, scale, ink, textOnly, scenes: config.lesson.scenes.map(s => ({id: s.id, d: s.durationInFrames})), probes}));
	console.log(`${id}: done ${Object.keys(probes).length} probes in ${Math.round((Date.now() - t0) / 1000)} s`);
} finally {
	release();
	fs.rmSync(entry, {force: true});
	if (bundleDir && fs.existsSync(bundleDir)) fs.rmSync(bundleDir, {recursive: true, force: true});
}
process.exit(0);
