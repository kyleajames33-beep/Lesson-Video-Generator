// Prepare additive corrected tracks. Existing captions and upload records stay intact.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {explainerCaptionCues, toSrt, toVtt} from './lib/explainer-captions.mjs';
import {lessonCaptionCues} from './lib/caption-timeline.mjs';
const input = process.argv[2] || 'docs/production/claude-pm/youtube/wave5-uploads.json';
const output = process.argv[3] || 'out/caption-repairs/wave5-2026-10-25';
if (fs.existsSync(output)) throw new Error('Output exists. Preserve it and choose a new output directory.');
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
const json = p => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''));
const uploads = json(input), prepared = [];
for (const v of uploads.videos.filter(v => v.status === 'published')) {
  const original = fs.readFileSync(v.captionFile);
  if (hash(original) !== v.captionSha256.toLowerCase()) throw new Error(`Recorded caption hash differs: ${v.lessonId}`);
  const lessonPath = path.join(path.dirname(v.captionFile), 'lesson.json');
  const lessonBytes = fs.readFileSync(lessonPath), lesson = json(lessonPath);
  const corrected = explainerCaptionCues(lesson);
  const srt = toSrt(corrected.cues), vtt = toVtt(corrected.cues);
  const legacySrt = toSrt(lessonCaptionCues(lesson).cues);
  const oldText = original.toString('utf8').replace(/\r\n/g, '\n');
  if (oldText !== legacySrt) throw new Error(`Original does not match the diagnosed timeline: ${v.lessonId}`);
  const capText = s => s.replace(/\r\n/g, '\n').split(/\n\s*\n/).filter(b => b.trim()).map(b => b.split('\n').slice(2).join(' ')).join(' ');
  if (capText(srt) !== capText(oldText)) throw new Error(`Caption text changed: ${v.lessonId}`);
  prepared.push({srt, vtt, record: {
    lessonId: v.lessonId, videoId: v.videoId, videoPath: v.file, recordedVideoSha256: v.sha256,
    originalCaptionPath: v.captionFile, originalCaptionSha256: hash(original),
    lessonPath, lessonSha256: hash(lessonBytes),
    correctedSrtPath: `${output}/${v.lessonId}.srt`, correctedSrtSha256: hash(srt),
    correctedVttPath: `${output}/${v.lessonId}.vtt`, correctedVttSha256: hash(vtt),
    cueCount: corrected.cues.length, sceneCount: lesson.scenes.length,
    responseHoldCount: lesson.scenes.filter(s => s.responseHold).length,
    durationInFrames: corrected.timeline.durationInFrames,
    textUnchanged: true, legacyTimelineReproduced: true,
  }});
}
fs.mkdirSync(output, {recursive: true});
for (const p of prepared) {
  fs.writeFileSync(p.record.correctedSrtPath, p.srt, {flag: 'wx'});
  fs.writeFileSync(p.record.correctedVttPath, p.vtt, {flag: 'wx'});
}
const manifest = {date: '2026-10-25', timezone: 'Australia/Sydney', status: 'prepared-local-only-awaiting-playback-and-caption-track-replacement', input, inputSha256: hash(fs.readFileSync(input)), reason: 'Legacy caption export subtracts 24 frames per preceding scene. Explainer scenes and narration use cumulative durations.', videos: prepared.map(p => p.record)};
fs.writeFileSync(`${output}/manifest.json`, JSON.stringify(manifest, null, 2) + '\n', {flag: 'wx'});
console.log(JSON.stringify({output, videos: prepared.length, cues: prepared.reduce((n, p) => n + p.record.cueCount, 0), responseHolds: prepared.reduce((n, p) => n + p.record.responseHoldCount, 0)}));
