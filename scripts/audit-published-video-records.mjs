// Read-only audit of recorded upload metadata, captions and measured timing.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const input = process.argv[2] || 'docs/production/claude-pm/youtube/wave5-uploads.json';
const output = process.argv[3] || 'docs/production/claude-pm/checks/codex-interim-published-metadata.json';
const read = p => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''));
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const seconds = s => s.split(':').reduce((a, n) => a * 60 + Number(n), 0);
const norm = s => s.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
const repairPath = process.argv[4];
const repairs = repairPath ? read(repairPath).videos : [];
const doc = read(input), rows = [], seen = new Set();
for (const v of doc.videos.filter(v => v.status === 'published')) {
  const findings = [];
  const flag = (code, detail = {}) => findings.push({code, ...detail});
  if (seen.has(v.videoId)) flag('duplicate-video-id');
  seen.add(v.videoId);
  if ([...v.title].length > 100) flag('title-too-long');
  if ([...v.description].length > 5000) flag('description-too-long');
  const chapters = v.chapters ?? [];
  const descChapters = v.description.split(/\r?\n/).map(s => s.trim()).filter(s => /^\d{1,2}:\d{2}(?::\d{2})?\s+/.test(s));
  if (JSON.stringify(chapters) !== JSON.stringify(descChapters)) flag('chapter-list-difference');
  const parsed = chapters.map(s => ({text: s, seconds: seconds(s.split(' ')[0])}));
  if (parsed.length && parsed[0].seconds !== 0) flag('first-chapter-not-zero');
  parsed.forEach((c, i) => {if (i && c.seconds - parsed[i - 1].seconds < 10) flag('short-chapter', {chapter: c.text});});
  const repair = repairs.find(r => r.lessonId === v.lessonId);
  if (repairPath && !repair) flag('missing-replacement-track');
  const captionPath = repair?.correctedSrtPath ?? v.captionFile;
  const lessonPath = path.join(path.dirname(v.captionFile), 'lesson.json');
  let captionHash = null, lessonHash = null, durationSeconds = null, cueCount = 0;
  const chapterMapping = [];
  if (!fs.existsSync(captionPath)) flag('missing-caption');
  else {
    captionHash = hash(captionPath);
    const expected = repair?.correctedSrtSha256 ?? v.captionSha256;
    if (expected && captionHash !== expected.toLowerCase()) flag('caption-hash-difference');
  }
  if (!fs.existsSync(lessonPath)) flag('missing-measured-lesson');
  else {
    const lesson = read(lessonPath), fps = lesson.fps ?? 30;
    lessonHash = hash(lessonPath);
    if (repair && lessonHash !== repair.lessonSha256) flag('repair-source-hash-difference');
    let frame = lesson.introDurationInFrames ?? 0;
    const starts = lesson.scenes.map(s => {const a = {id: s.id, frame, seconds: frame / fps, scene: s}; frame += s.durationInFrames; return a;});
    durationSeconds = (frame + (lesson.outroDurationInFrames ?? 0)) / fps;
    for (const c of parsed) {
      const nearest = starts.reduce((a, b) => Math.abs(a.seconds - c.seconds) <= Math.abs(b.seconds - c.seconds) ? a : b);
      const delta = c.seconds - nearest.seconds;
      chapterMapping.push({chapter: c.text, scene: nearest.id, deltaSeconds: Number(delta.toFixed(3))});
      if (Math.abs(delta) > 1.01) flag('chapter-away-from-scene-start', {chapter: c.text, nearestScene: nearest.id, deltaSeconds: delta});
      if (c.seconds >= durationSeconds) flag('chapter-after-lesson', {chapter: c.text});
    }
    if (parsed.length && durationSeconds - parsed.at(-1).seconds < 10) flag('short-last-chapter');
    if (captionHash) {
      const cues = fs.readFileSync(captionPath, 'utf8').replace(/^\uFEFF/, '').trim().split(/\r?\n\s*\r?\n/).map((b, i) => {
        const lines = b.split(/\r?\n/), ix = lines.findIndex(s => s.includes('-->'));
        const m = ix >= 0 && lines[ix].match(/(\d{2}:\d{2}:\d{2},\d{3})\s+-->\s+(\d{2}:\d{2}:\d{2},\d{3})/);
        if (!m) {flag('invalid-srt', {cue: i + 1}); return null;}
        return {index: i + 1, startMs: seconds(m[1].replace(',', '.')) * 1000, endMs: seconds(m[2].replace(',', '.')) * 1000, text: lines.slice(ix + 1).join(' ')};
      }).filter(Boolean);
      cueCount = cues.length;
      cues.forEach((c, i) => {
        if (c.endMs <= c.startMs || c.startMs < 0) flag('invalid-caption-interval', {cue: c.index});
        if (i && c.startMs < cues[i - 1].endMs - 1) flag('caption-overlap', {cue: c.index});
        if (c.endMs > durationSeconds * 1000 + 1) flag('caption-after-lesson', {cue: c.index});
      });
      for (const s of starts) {
        const hold = s.scene.responseHold;
        if (!hold) continue;
        const a = (s.frame + hold.startFrame) / fps * 1000, b = (s.frame + hold.endFrame) / fps * 1000;
        const overlap = cues.filter(c => c.startMs < b - 1 && c.endMs > a + 1);
        if (overlap.length) flag('caption-during-response-hold', {scene: s.id, startMs: a, endMs: b, cues: overlap});
      }
      const text = norm(cues.map(c => c.text).join(' '));
      if (text !== norm(lesson.scenes.map(s => s.voiceover?.text ?? '').join(' '))) flag('caption-narration-text-difference');
      if (text !== norm(lesson.scenes.flatMap(s => (s.captions ?? []).map(c => c.text)).join(' '))) flag('caption-timed-word-difference');
    }
  }
  rows.push({lessonId: v.lessonId, videoId: v.videoId, captionPath, captionHash, lessonPath, lessonHash, durationSeconds, cueCount, chapterMapping, findings});
}
const counts = {};
for (const r of rows) for (const f of r.findings) counts[f.code] = (counts[f.code] ?? 0) + 1;
const report = {date: '2026-10-25', timezone: 'Australia/Sydney', scope: 'Local metadata, caption files and measured timing only. Live YouTube state and listening were not checked.', repairPath: repairPath ?? null, input, inputSha256: hash(input), videoCount: rows.length, videosWithFindings: rows.filter(r => r.findings.length).length, findingCounts: counts, videos: rows};
fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({videoCount: report.videoCount, videosWithFindings: report.videosWithFindings, findingCounts: counts}));
for (const r of rows.filter(r => r.findings.length)) console.log(r.lessonId + ': ' + [...new Set(r.findings.map(f => f.code))].join(', '));
