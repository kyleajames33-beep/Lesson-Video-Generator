#!/usr/bin/env node
// Faithful speech captions, separate from concise scene teaching text.
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import path from 'node:path';
import {getCompositionId} from './lesson-utils.mjs';
import {lessonCaptionCues, toSrt, toVtt} from './lib/caption-timeline.mjs';
const args = process.argv.slice(2);
const lessonPaths = args.filter(a => !a.startsWith('--'));
const keepCombinedIntros = args.includes('--combined-intros=all');
const options = {
  maxWords: Number(args.find(a => a.startsWith('--max-words='))?.split('=')[1] ?? 8),
  maxDurationSeconds: Number(args.find(a => a.startsWith('--max-duration='))?.split('=')[1] ?? 4.5),
};
if (!lessonPaths.length) {
  console.error('Usage: node scripts/export-captions-srt.mjs <lesson.json> [more.json] [--combined-intros=all] [--output-dir=out/captions]');
  process.exit(1);
}
const outDir = path.resolve(args.find(a => a.startsWith('--output-dir='))?.slice('--output-dir='.length) ?? 'out/captions');
const combined = [];
let offsetMs = 0, primaryId;
// Resolve all inputs before writing a multi-lesson export.
const resolved = lessonPaths.map(p => {
  const lesson = JSON.parse(readFileSync(p, 'utf8'));
  return {id: getCompositionId(lesson), ...lessonCaptionCues(lesson, options)};
});
mkdirSync(outDir, {recursive: true});
resolved.forEach(({id, cues, warnings, timeline}, index) => {
  primaryId ??= id;
  for (const warning of warnings) console.warn(id + ': ' + warning);
  writeFileSync(path.join(outDir, id + '.srt'), toSrt(cues));
  writeFileSync(path.join(outDir, id + '.vtt'), toVtt(cues));
  console.log(id + ': ' + cues.length + ' cues exported.');
  const keepIntro = index === 0 || keepCombinedIntros;
  const removedIntroMs = keepIntro ? 0 : timeline.introDurationMs;
  for (const cue of cues) {
    if (!keepIntro && cue.segment === 'intro') continue;
    combined.push({...cue, startMs: cue.startMs - removedIntroMs + offsetMs, endMs: cue.endMs - removedIntroMs + offsetMs});
  }
  offsetMs += timeline.durationMs - removedIntroMs;
});
if (resolved.length > 1) {
  writeFileSync(path.join(outDir, primaryId + '-combined.srt'), toSrt(combined));
  writeFileSync(path.join(outDir, primaryId + '-combined.vtt'), toVtt(combined));
  console.log('Combined: ' + combined.length + ' cues exported.');
}
