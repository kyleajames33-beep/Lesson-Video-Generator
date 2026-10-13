// Re-mux an existing explainer MP4 with its audio normalised to -14 LUFS (true peak -1.5 dB); video is copied untouched.
// Usage: node scripts/loudnorm-mp4.mjs <in.mp4> <out.mp4>
import fs from 'node:fs';
import {execFileSync, spawnSync} from 'node:child_process';
import {FFMPEG} from './lib/explainer-common.mjs';
const [inp, out] = process.argv.slice(2);
if (!inp || !out) throw new Error('Usage: node scripts/loudnorm-mp4.mjs <in.mp4> <out.mp4>');
if (fs.existsSync(out)) throw new Error(`${out} exists`);
const target = 'I=-14:TP=-1.5:LRA=11';
const measure = (f) => { const r = spawnSync(FFMPEG, ['-hide_banner', '-nostats', '-i', f, '-vn', '-af', `loudnorm=${target}:print_format=json`, '-f', 'null', '-'], {encoding: 'utf8', maxBuffer: 1 << 26}); return JSON.parse(r.stderr.slice(r.stderr.lastIndexOf('{'), r.stderr.lastIndexOf('}') + 1)); };
const m = measure(inp);
execFileSync(FFMPEG, ['-y', '-hide_banner', '-loglevel', 'error', '-i', inp, '-map', '0:v', '-map', '0:a', '-c:v', 'copy', '-af', `loudnorm=${target}:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`, '-ar', '48000', '-c:a', 'aac', '-b:a', '192k', out], {stdio: 'inherit'});
const after = measure(out);
console.log(JSON.stringify({in: inp, before: m.input_i, after: after.input_i, truePeakAfter: after.input_tp}));
