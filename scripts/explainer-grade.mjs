// Automatic grade-A check for one explainer lesson.
//
//   node scripts/explainer-grade.mjs <explainerId> [--frames 16] [--out <dir>] [--no-lock]
//
// Renders the 16 evenly spaced contact-sheet frames (plus one frame inside every
// answer pause and one late in the key notes), measures the live page in each
// frame, and applies the measurable parts of the build gate in
// docs/production/claude-pm/maths-visual-standard.md. It writes:
//   <out>/<id>-grade.json        every measurement and finding
//   <out>/<id>-grade.md          the readable report
//   <out>/<id>-grade-sheet.jpg   the 16-frame sheet, failing frames boxed in red
// Exit code 0 = no failures, 1 = failures, 2 = the check itself could not run.
//
// A pass means "no measurable defect". It does not prove the teaching or the
// design is good: a person (or root) still looks at the sheet. See
// docs/production/claude-pm/grade-checker.md.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import {PNG} from 'pngjs';
import {FFMPEG, ROOT, buildSlimPublic, loadConfig, totalFrames} from './lib/explainer-common.mjs';

// The renderer echoes every browser console line. The probe's measurement lines are long
// (one per frame), so keep them out of the terminal and out of any log file.
for (const stream of [process.stdout, process.stderr]) {
	const write = stream.write.bind(stream);
	stream.write = (chunk, ...rest) => {
		if (String(chunk).includes('EXPLAINER_AUDIT::')) { const done = rest.find(a => typeof a === 'function'); if (done) done(); return true; }
		return write(chunk, ...rest);
	};
}
import {RULES, analyseFrame, analyseLesson, inkStats, changedFraction} from './lib/explainer-grade-rules.mjs';

const args = process.argv.slice(2);
const id = args.find(a => !a.startsWith('--'));
const flag = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
if (!id) { console.error('Usage: node scripts/explainer-grade.mjs <explainerId> [--frames 16] [--out <dir>] [--no-lock]'); process.exit(2); }
const sheetCount = Number(flag('frames', 16));
const useLock = !args.includes('--no-lock');
const AUDIT_PREFIX = 'EXPLAINER_AUDIT::';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const posix = p => p.split(path.sep).join('/');

const config = await loadConfig(id);
const base = path.join(ROOT, 'out/explainer', id);
const outDir = path.resolve(flag('out', path.join(base, 'grade')));
const stillDir = path.join(outDir, 'stills');
fs.rmSync(stillDir, {recursive: true, force: true});
fs.mkdirSync(stillDir, {recursive: true});

// ---- which frames to look at -------------------------------------------------
const scenes = config.lesson.scenes;
const total = totalFrames(config);
const starts = []; scenes.reduce((t, s) => (starts.push(t), t + s.durationInFrames), 0);
const sceneAt = f => { let i = 0; starts.forEach((s, k) => { if (f >= s) i = k; }); return i; };
/** Keep a sample clear of the cross-fade at each end of its scene. */
const settle = f => {
	const i = sceneAt(f), s0 = starts[i], s1 = s0 + scenes[i].durationInFrames;
	if (s1 - s0 < 80) return Math.round((s0 + s1) / 2);
	return Math.min(Math.max(f, s0 + 30), s1 - 20);
};
const plan = [];
for (let i = 0; i < sheetCount; i++) plan.push({frame: settle(Math.round(((i + 0.5) / sheetCount) * total)), role: 'sheet', slot: i + 1});
scenes.forEach((s, i) => {
	if (s.responseHold) plan.push({frame: starts[i] + Math.round((s.responseHold.startFrame + s.responseHold.endFrame) / 2), role: 'hold'});
	if (/key-?notes/i.test(s.id)) plan.push({frame: starts[i] + s.durationInFrames - 45, role: 'notes'});
});
for (const p of plan) {
	const i = sceneAt(p.frame);
	const s = scenes[i];
	const local = p.frame - starts[i];
	p.scene = s.id;
	p.local = local;
	p.inHold = Boolean(s.responseHold && local >= s.responseHold.startFrame && local <= s.responseHold.endFrame);
	const caps = s.captions ?? [];
	// A scene with no captions has no speech, so all of it counts as the quiet part.
	p.afterSpeech = caps.length ? local > (caps[caps.length - 1].endMs / 1000) * 30 + 15 : true;
	p.isNotes = /key-?notes/i.test(s.id);
	p.isQuestion = Boolean(s.responseHold) || /attempt|question|your-?turn/i.test(s.id);
}

// ---- machine safety: one render at a time, and only with memory to spare ------
const lock = path.join(ROOT, 'out/explainer/.stills-lock');
let locked = false;
const release = () => { if (locked) { locked = false; fs.rmSync(lock, {recursive: true, force: true}); } };
process.on('SIGINT', () => { release(); process.exit(130); });
if (useLock) {
	let waited = 0;
	for (;;) {
		try { fs.mkdirSync(lock); locked = true; fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify({tool: 'explainer-grade', id, pid: process.pid, started: new Date().toISOString()})); break; }
		catch {
			// A lock whose recorded owner has died (for example after a crash) is stale: clear it and try again.
			let owner = null;
			try { owner = JSON.parse(fs.readFileSync(path.join(lock, 'owner.json'), 'utf8')); } catch { /* a lock made with plain mkdir has no owner file */ }
			let alive = true;
			if (owner?.pid) { try { process.kill(owner.pid, 0); } catch (e) { alive = e.code === 'EPERM'; } }
			if (owner?.pid && !alive) { console.log(`Clearing a stale stills lock left by process ${owner.pid}.`); fs.rmSync(lock, {recursive: true, force: true}); continue; }
			if (waited % 300 === 0) {
				const mins = Math.round((Date.now() - fs.statSync(lock).mtimeMs) / 60000);
				console.log(`Waiting for the stills lock, held for ${mins} min${owner ? ` by ${JSON.stringify(owner)}` : ''}. If no render is running, delete out/explainer/.stills-lock.`);
			}
			waited += 10; await sleep(10000);
		}
	}
}
let exitCode = 2;
let serveUrl;
const entry = path.join(base, `grade-entry-${process.pid}.tsx`);
try {
	for (let waited = 0; os.freemem() < 0.8 * 2 ** 30; waited += 15) {
		if (waited === 0) console.log(`Free memory is ${(os.freemem() / 2 ** 30).toFixed(2)} GB; waiting for 0.8 GB...`);
		if (waited > 900) throw new Error('Not enough free memory after 15 minutes. Close something and run again.');
		await sleep(15000);
	}
	const pub = path.join(base, 'public-slim');
	buildSlimPublic(config, pub);
	const source = config.__entrySource;
	fs.mkdirSync(base, {recursive: true});
	fs.writeFileSync(entry, `import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {ExplainerVideo} from '${posix(path.join(ROOT, 'src/explainer/ExplainerVideo'))}';
import {${source.exportName} as config} from '${posix(source.modulePath)}';
import {AuditProbe} from '${posix(path.join(ROOT, 'scripts/lib/explainer-audit-probe'))}';
import {ExplainerAssetGuard} from '${posix(path.join(ROOT, 'scripts/lib/explainer-render-guard'))}';
// The asset guard (the same one full renders use) holds each frame until its pictures are decoded.
const Wrapped: React.FC = () => <ExplainerAssetGuard><AuditProbe><ExplainerVideo config={config} /></AuditProbe></ExplainerAssetGuard>;
registerRoot(() => <Composition id={config.id} component={Wrapped} durationInFrames={${total}} fps={30} width={1920} height={1080} />);
`);
	console.log(`Bundling ${id}...`);
	serveUrl = await bundle({entryPoint: entry, publicDir: pub});
	const composition = await selectComposition({serveUrl, id, timeoutInMilliseconds: 90000});

	// ---- render and measure ---------------------------------------------------
	const frames = [];
	for (const p of plan) {
		const output = path.join(stillDir, `${p.role}-${String(p.frame).padStart(5, '0')}.png`);
		let audit = null;
		await renderStill({composition, serveUrl, frame: p.frame, output, scale: 0.5, imageFormat: 'png', timeoutInMilliseconds: 90000, logLevel: 'error',
			onBrowserLog: log => { if (typeof log.text === 'string' && log.text.startsWith(AUDIT_PREFIX)) { try { const a = JSON.parse(log.text.slice(AUDIT_PREFIX.length)); if (a.frame === p.frame) audit = a; } catch { /* ignore a truncated line */ } } }});
		if (!audit || audit.error) throw new Error(`No measurement came back for frame ${p.frame}${audit?.error ? `: ${audit.error}` : ''}`);
		const png = PNG.sync.read(fs.readFileSync(output));
		frames.push({...p, audit, png, ink: inkStats(png), file: output});
		console.log(`  ${p.role} frame ${p.frame} (${p.scene}): ${audit.texts.length} text runs, ${audit.images.length} pictures`);
	}

	// ---- apply the rules ------------------------------------------------------
	const sheet = frames.filter(f => f.role === 'sheet');
	sheet.forEach((f, i) => { f.changedFromPrev = i ? changedFraction(sheet[i - 1].png, f.png) : null; });
	for (const f of frames) f.findings = analyseFrame(f);
	const lessonFindings = analyseLesson({config, scenes, sheet, frames, lessonDir: path.dirname(source.modulePath)});
	const all = [...frames.flatMap(f => f.findings.map(x => ({...x, frame: f.frame, slot: f.slot, scene: f.scene, role: f.role}))), ...lessonFindings];
	const fails = all.filter(x => x.level === 'fail');
	const warns = all.filter(x => x.level === 'warn');
	const result = fails.length ? 'FAIL' : warns.length ? 'PASS WITH WARNINGS' : 'PASS';

	// ---- sheet with failing frames boxed ---------------------------------------
	const cols = 4, rows = Math.ceil(sheet.length / cols), tw = 480, th = 270, sheetPng = new PNG({width: cols * tw, height: rows * th});
	sheetPng.data.fill(255);
	sheet.forEach((f, i) => {
		const ox = (i % cols) * tw, oy = Math.floor(i / cols) * th;
		const level = f.findings.some(x => x.level === 'fail') ? 'fail' : f.findings.some(x => x.level === 'warn') ? 'warn' : null;
		const edge = level === 'fail' ? [200, 40, 30] : [225, 150, 20];
		for (let y = 0; y < th; y++) for (let x = 0; x < tw; x++) {
			const o = ((oy + y) * sheetPng.width + ox + x) * 4;
			const border = level && (x < 6 || y < 6 || x >= tw - 6 || y >= th - 6);
			if (border) { sheetPng.data[o] = edge[0]; sheetPng.data[o + 1] = edge[1]; sheetPng.data[o + 2] = edge[2]; continue; }
			let r = 0, g = 0, b = 0;
			for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { const s = ((y * 2 + dy) * f.png.width + x * 2 + dx) * 4; r += f.png.data[s]; g += f.png.data[s + 1]; b += f.png.data[s + 2]; }
			sheetPng.data[o] = r >> 2; sheetPng.data[o + 1] = g >> 2; sheetPng.data[o + 2] = b >> 2;
		}
	});
	const sheetPngFile = path.join(outDir, `${id}-grade-sheet.png`), sheetJpg = path.join(outDir, `${id}-grade-sheet.jpg`);
	fs.writeFileSync(sheetPngFile, PNG.sync.write(sheetPng));
	try { execFileSync(FFMPEG, ['-y', '-loglevel', 'quiet', '-threads', '1', '-i', sheetPngFile, '-q:v', '3', sheetJpg], {stdio: 'ignore'}); fs.rmSync(sheetPngFile); } catch { /* low memory: keep the PNG sheet instead */ }

	// ---- reports ---------------------------------------------------------------
	const slim = frames.map(({png, audit, file, findings, ink, ...rest}) => ({...rest, still: path.relative(outDir, file), ink, findings,
		text: {runs: audit.texts.length, chars: audit.texts.reduce((n, t) => n + t.t.length, 0), largest: Math.max(0, ...audit.texts.map(t => t.size)), smallest: audit.texts.length ? Math.min(...audit.texts.map(t => t.size)) : 0},
		pictures: audit.images.map(i => ({src: i.src, height: i.box[3], stretch: i.stretch})), shapes: audit.shapes, countdown: audit.countdown, texts: audit.texts}));
	fs.writeFileSync(path.join(outDir, `${id}-grade.json`), JSON.stringify({id, result, checkedAt: new Date().toISOString(), rules: RULES, totalFrames: total, fails: fails.length, warnings: warns.length, lessonFindings, frames: slim}, null, 1));
	const line = x => `- ${x.slot ? `Frame ${x.slot} of ${sheet.length}` : x.role ? `${x.role === 'hold' ? 'Answer pause' : 'Key notes'} probe` : 'Whole lesson'}${x.scene ? ` (scene \`${x.scene}\`${x.frame !== undefined ? `, frame ${x.frame}` : ''})` : ''}: **${x.rule}**. ${x.detail}`;
	const md = [`# Grade check: ${id}`, '', `Result: **${result}** (${fails.length} failures, ${warns.length} warnings). Checked ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.`, '',
		`Sheet: \`${path.basename(fs.existsSync(sheetJpg) ? sheetJpg : sheetPngFile)}\` (red box = failing frame, amber box = warning).`, '',
		'A pass means no measurable defect was found. It is not design or teaching approval; look at the sheet.', '',
		'## Failures', '', ...(fails.length ? fails.map(line) : ['None.']), '', '## Warnings', '', ...(warns.length ? warns.map(line) : ['None.']), '',
		'## Frame measurements', '', '| Frame | Scene | Largest text | Smallest text | Empty | Changed from previous | Pictures |', '| --- | --- | --- | --- | --- | --- | --- |',
		...sheet.map(f => `| ${f.slot} | ${f.scene} | ${Math.round(Math.max(0, ...f.audit.texts.map(t => t.size)))} px | ${f.audit.texts.length ? Math.round(Math.min(...f.audit.texts.map(t => t.size))) : 0} px | ${Math.round(f.ink.empty * 100)}% | ${f.changedFromPrev === null ? '' : `${(f.changedFromPrev * 100).toFixed(1)}%`} | ${f.audit.images.length} |`), ''].join('\n');
	fs.writeFileSync(path.join(outDir, `${id}-grade.md`), md);
	console.log(`\n${result}: ${fails.length} failures, ${warns.length} warnings`);
	for (const x of fails) console.log('FAIL ' + line(x).slice(2).replace(/\*\*/g, ''));
	for (const x of warns) console.log('warn ' + line(x).slice(2).replace(/\*\*/g, ''));
	console.log(`\nReport: ${path.join(outDir, `${id}-grade.md`)}`);
	exitCode = fails.length ? 1 : 0;
} catch (error) {
	console.error(`Grade check could not run: ${error?.stack ?? error}`);
	exitCode = 2;
} finally {
	if (serveUrl) fs.rmSync(serveUrl, {recursive: true, force: true});
	fs.rmSync(entry, {force: true});
	release();
}
process.exit(exitCode);
