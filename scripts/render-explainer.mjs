import fs from 'node:fs';
import path from 'node:path';
import {execFileSync, spawnSync} from 'node:child_process';
import {bundle} from '@remotion/bundler';
import {renderMedia, selectComposition} from '@remotion/renderer';
import {FFMPEG, ROOT, buildSlimPublic, loadConfig, totalFrames, writeEntry} from './lib/explainer-common.mjs';

const id = process.argv[2];
if (!id || id.startsWith('--')) throw new Error('Usage: node scripts/render-explainer.mjs <explainerId> --confirm [--revision=vN]');
if (!process.argv.includes('--confirm')) throw new Error('Refusing to render without --confirm (full renders are heavy).');
const revision = process.argv.find((a) => a.startsWith('--revision='))?.slice(11) || 'v1';
const config = await loadConfig(id);
const base = path.join(ROOT, 'out/explainer', id);
const pub = path.join(base, 'public-slim');
const chunkDir = path.join(base, 'chunks');
const finalMp4 = path.join(base, `${id}-${revision}.mp4`);
if (fs.existsSync(finalMp4)) throw new Error(`${finalMp4} exists. Choose a new revision.`);
fs.rmSync(pub, {recursive: true, force: true});
buildSlimPublic(config, pub);
fs.mkdirSync(chunkDir, {recursive: true});
const entry = path.join(base, 'entry.tsx');
writeEntry(config, entry);
const serveUrl = await bundle({entryPoint: entry, publicDir: pub});
const run = (args) => execFileSync(FFMPEG, args, {stdio: 'inherit'});
export const LOUDNESS = {I: -14, TP: -1.5, LRA: 11};
function normaliseLoudness(inWav, outWav) {
	const target = `I=${LOUDNESS.I}:TP=${LOUDNESS.TP}:LRA=${LOUDNESS.LRA}`;
	const r = spawnSync(FFMPEG, ['-hide_banner', '-nostats', '-i', inWav, '-af', `loudnorm=${target}:print_format=json`, '-f', 'null', '-'], {encoding: 'utf8', maxBuffer: 64 * 1024 * 1024});
	const m = JSON.parse(r.stderr.slice(r.stderr.lastIndexOf('{'), r.stderr.lastIndexOf('}') + 1));
	run(['-y', '-i', inWav, '-af', `loudnorm=${target}:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true:print_format=summary`, '-ar', '48000', '-c:a', 'pcm_s16le', outWav]);
	console.log(`Loudness: input ${m.input_i} LUFS, normalised to ${LOUDNESS.I} LUFS`);
}
try {
	const composition = await selectComposition({serveUrl, id, timeoutInMilliseconds: 60000});
	const total = composition.durationInFrames, size = 150, files = [];
	for (let start = 0; start < total; start += size) {
		const end = Math.min(total - 1, start + size - 1);
		const out = path.join(chunkDir, `v-${String(start).padStart(5, '0')}.mp4`);
		files.push(out);
		if (fs.existsSync(out)) continue;
		for (let attempt = 1; attempt <= 4; attempt++) {
			try {
				await renderMedia({composition, serveUrl, codec: 'h264', crf: 20, concurrency: 2, muted: true, timeoutInMilliseconds: 45000, frameRange: [start, end], outputLocation: out});
				console.log('chunk', start, end, 'ok');
				break;
			} catch (e) {
				fs.rmSync(out, {force: true});
				console.log('chunk', start, 'attempt', attempt, 'failed:', String(e.message).slice(0, 90));
				if (attempt === 4) throw e;
			}
		}
	}
	// Narration track: each scene audio delayed to its scene start.
	let t = 0; const inputs = [], filters = []; let k = 0;
	for (const s of config.lesson.scenes) {
		if (s.voiceover?.audioFile) {
			inputs.push('-i', path.join(ROOT, 'public', s.voiceover.audioFile.replace(/^public\//, '')));
			const ms = Math.round((t / 30) * 1000);
			filters.push(`[${k}:a]aresample=48000,adelay=${ms}|${ms}[a${k}]`);
			k++;
		}
		t += s.durationInFrames;
	}
	const secs = (totalFrames(config) / 30).toFixed(3);
	const fc = filters.join(';') + ';' + Array.from({length: k}, (_, i) => `[a${i}]`).join('') + `amix=inputs=${k}:normalize=0,apad,atrim=0:${secs}[out]`;
	const wav = path.join(chunkDir, 'narration.wav');
	run(['-y', ...inputs, '-filter_complex', fc, '-map', '[out]', '-c:a', 'pcm_s16le', wav]);
	// Loudness: YouTube plays at about -14 LUFS and never turns quiet videos up, so raw narration
	// (about -28 LUFS) sounded too quiet. Two-pass loudnorm to -14 LUFS, true peak -1.5 dB.
	const normWav = path.join(chunkDir, 'narration-norm.wav');
	normaliseLoudness(wav, normWav);
	const list = path.join(chunkDir, 'list.txt');
	fs.writeFileSync(list, files.map((f) => `file '${f.split(path.sep).join('/')}'`).join('\n'));
	run(['-y', '-f', 'concat', '-safe', '0', '-i', list, '-i', normWav, '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-shortest', finalMp4]);
	console.log(`Output: ${finalMp4}`);
	console.log(`Duration: ${secs} s (${total} frames)`);
	try { fs.rmSync(chunkDir, {recursive: true, force: true, maxRetries: 10, retryDelay: 500}); } catch (e) { console.warn(`Could not remove ${chunkDir} (${e.code}); delete it later.`); }
} finally {
	try { fs.rmSync(serveUrl, {recursive: true, force: true, maxRetries: 10, retryDelay: 500}); } catch (e) { console.warn(`Could not remove bundle ${serveUrl} (${e.code}).`); }
	fs.rmSync(entry, {force: true});
}
