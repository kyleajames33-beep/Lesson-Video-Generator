// Use this exporter for src/explainer videos. Output must be a new directory.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {explainerCaptionCues, toSrt, toVtt} from './lib/explainer-captions.mjs';
const [lessonPath, output] = process.argv.slice(2);
if (!lessonPath || !output) throw new Error('Usage: node scripts/export-explainer-captions.mjs <lesson.json> <new-output-directory>');
if (fs.existsSync(output)) throw new Error('Output already exists. Choose a new directory.');
const bytes = fs.readFileSync(lessonPath);
const lesson = JSON.parse(bytes.toString('utf8').replace(/^\uFEFF/, ''));
const result = explainerCaptionCues(lesson);
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const srt = toSrt(result.cues), vtt = toVtt(result.cues);
fs.mkdirSync(output, {recursive: true});
fs.writeFileSync(path.join(output, 'captions.srt'), srt, {flag: 'wx'});
fs.writeFileSync(path.join(output, 'captions.vtt'), vtt, {flag: 'wx'});
fs.writeFileSync(path.join(output, 'caption-export.json'), JSON.stringify({lessonPath, lessonSha256: sha(bytes), srtSha256: sha(srt), vttSha256: sha(vtt), cueCount: result.cues.length, timeline: result.timeline, status: 'exported-locally-playback-review-pending'}, null, 2) + '\n', {flag: 'wx'});
console.log(`${result.cues.length} cues exported to ${output}`);
