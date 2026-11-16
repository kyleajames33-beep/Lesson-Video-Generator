// Root (16 Nov): build a queue-ready work folder for a first-release Module 8 master (no earlier version to reuse).
// Captions come from the exact playback lesson (config hold transform) used by the render; publication metadata comes
// from the design's "YouTube metadata" section. Output layout matches queue-any.py.
// Usage: node work/brief245/root/prep-new-v1.mjs bio-m8-b12 [rev]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {loadConfig, totalFrames} from '../../../scripts/lib/explainer-common.mjs';

const key = process.argv[2], rev = process.argv[3] || 'v1';
if (!/^(bio|chem)-m8-[a-z]\d\d[a-z]?$/.test(key)) throw new Error('lesson id');
const sha = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id = `Explainer-${key}`;
const master = `out/explainer/${id}/${id}-${rev}.mp4`;
if (!fs.existsSync(master) || fs.statSync(master).size < 1e6) throw new Error('no master ' + master);
const w = `work/brief245/root/bio/${key}`;
fs.mkdirSync(w, {recursive: true});

// 1. Playback lesson and captions.
const config = await loadConfig(id);
const frames = totalFrames(config);
fs.writeFileSync(`${w}/lesson.playback.json`, JSON.stringify(config.lesson, null, 2));
fs.rmSync(`${w}/captions-v1`, {recursive: true, force: true});
execFileSync('node', ['scripts/export-explainer-captions.mjs', `${w}/lesson.playback.json`, `${w}/captions-v1`], {stdio: 'inherit'});
const ff = path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffprobe.exe');
const probe = JSON.parse(execFileSync(ff, ['-v', 'error', '-count_packets', '-select_streams', 'v:0', '-show_entries', 'stream=nb_read_packets,width,height', '-of', 'json', master], {encoding: 'utf8'})).streams[0];
if (Number(probe.nb_read_packets) !== frames) throw new Error(`master frames ${probe.nb_read_packets} != playback lesson ${frames}`);
if (probe.width !== 1920 || probe.height !== 1080) throw new Error('size');
const exp = JSON.parse(fs.readFileSync(`${w}/captions-v1/caption-export.json`, 'utf8'));
if (exp.timeline?.durationInFrames && exp.timeline.durationInFrames !== frames) throw new Error('caption timeline length');

// 2. Publication metadata from the design.
const design = fs.readFileSync(`docs/production/claude-pm/lessons/${key}.md`, 'utf8');
const sec = design.slice(design.indexOf('## YouTube metadata'));
const title = sec.match(/Title:\**\s*"?(.+?)"?\s*\(\d+ characters/)[1].trim();
const dm = sec.match(/Description:\**\s*\n\s*\n\s*"([\s\S]*?#HSCScience)"/);
if (!dm) throw new Error('description not found');
const description = dm[1].split('\n').map((l) => l.replace(/^  /, '').trimEnd()).join('\n');
for (const t of [title, description]) if (/[—�]/.test(t)) throw new Error('em dash or bad char');
if (title.length > 100 || description.length > 5000) throw new Error('length');
if (!/Syllabus dotpoint/.test(description)) throw new Error('no dotpoint');
fs.writeFileSync(`${w}/publication-metadata.json`, JSON.stringify({lessonId: key, title, titleCharacters: title.length, description,
	metadataSource: `docs/production/claude-pm/lessons/${key}.md`, metadataSourceSha256: sha(`docs/production/claude-pm/lessons/${key}.md`)}, null, 2));

// 3. Master checks.
const cap = `${w}/captions-v1/captions.srt`;
fs.writeFileSync(`${w}/master-checks.json`, JSON.stringify({master, sha256: sha(master), frames, bytes: fs.statSync(master).size,
	sourceChangesSinceFreeze: [], captions: {sha256: sha(cap), source: `${w}/lesson.playback.json (config hold transform, export-explainer-captions)`, cues: exp.cueCount}}, null, 2));
console.log(JSON.stringify({lesson: key, frames, cues: exp.cueCount, title, descChars: description.length, workDir: w}));
