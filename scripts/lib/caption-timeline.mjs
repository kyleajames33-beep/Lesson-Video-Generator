import {existsSync, readFileSync} from 'node:fs';
import path from 'node:path';
import {lessonTimeline} from '../../src/lesson/timeline.mjs';
export {lessonTimeline} from '../../src/lesson/timeline.mjs';

export const alignmentPathFor = audio => audio.replace(/\.(mp3|wav|m4a|ogg|flac)$/i, '.alignment.json');

export function alignmentToCaptions(alignment) {
  const chars = alignment.characters, starts = alignment.character_start_times_seconds, ends = alignment.character_end_times_seconds;
  if (!Array.isArray(chars) || !Array.isArray(starts) || !Array.isArray(ends) || !chars.length || chars.length !== starts.length || chars.length !== ends.length ||
    chars.some((c, i) => typeof c !== 'string' || !Number.isFinite(starts[i]) || !Number.isFinite(ends[i]) || starts[i] < 0 || ends[i] < starts[i] || i > 0 && (starts[i] < starts[i - 1] || ends[i] < ends[i - 1]))) {
    throw new Error('Invalid character alignment.');
  }
  const tokens = [];
  let text = '', first = 0, last = 0;
  const flush = () => {
    if (!text) return;
    const startMs = first * 1000, endMs = last * 1000;
    tokens.push({text: (tokens.length ? ' ' : '') + text, startMs, endMs, timestampMs: (startMs + endMs) / 2, confidence: null});
    text = '';
  };
  chars.forEach((c, i) => {
    if (/^\s+$/.test(c)) flush();
    else { if (!text) first = starts[i]; text += c; last = ends[i]; }
  });
  flush();
  return tokens;
}

export function groupCaptionCues(captions, {maxWords = 8, maxDurationSeconds = 4.5, maxGapMs = 500} = {}) {
  if (!Number.isInteger(maxWords) || maxWords < 1 || !Number.isFinite(maxDurationSeconds) || maxDurationSeconds <= 0 || !Number.isFinite(maxGapMs) || maxGapMs < 0) throw new Error('Invalid caption grouping limits.');
  const cues = [];
  let buf = [];
  const flush = () => {
    if (buf.length) cues.push({startMs: buf[0].startMs, endMs: buf.at(-1).endMs, text: buf.map(c => c.text).join('').trim()});
    buf = [];
  };
  captions.forEach((c, i) => {
    if (typeof c.text !== 'string' || !Number.isFinite(c.startMs) || !Number.isFinite(c.endMs) || c.startMs < 0 || c.endMs < c.startMs || i > 0 && c.startMs < captions[i - 1].startMs) throw new Error('Invalid timed caption token.');
    if (buf.length && c.startMs - buf.at(-1).endMs > maxGapMs) flush();
    buf.push(c);
    if (/[.!?]$/.test(c.text.trim()) || buf.length >= maxWords || (c.endMs - buf[0].startMs) / 1000 >= maxDurationSeconds) flush();
  });
  flush();
  return cues;
}

export function lessonCaptionCues(lesson, options = {}, root = process.cwd()) {
  const timeline = lessonTimeline(lesson);
  const warnings = [], cues = [];
  let intro = timeline.introFrames > 0 ? lesson.introCaptions : null;
  if (timeline.introFrames > 0 && !intro?.length && lesson.introVoiceover?.audioFile) {
    const relative = lesson.introVoiceover.audioFile.replace(/^public[\\/]/, '').replace(/\\/g, '/');
    const sidecar = alignmentPathFor(path.resolve(root, 'public', relative));
    if (existsSync(sidecar)) intro = alignmentToCaptions(JSON.parse(readFileSync(sidecar, 'utf8')));
  }
  if (intro?.length) {
    const introCues = groupCaptionCues(intro, options);
    if (introCues.some(c => c.endMs > timeline.introDurationMs)) throw new Error('Intro captions exceed the rendered stinger.');
    cues.push(...introCues.map(c => ({...c, segment: 'intro'})));
  } else if (timeline.introFrames > 0 && lesson.introVoiceover?.text?.trim()) warnings.push('Narrated intro has no timed caption coverage.');
  for (const item of timeline.scenes) {
    if (item.scene.captions?.length) {
      const local = groupCaptionCues(item.scene.captions, options);
      if (local.some(c => c.endMs + (item.scene.voiceover?.startFrame ?? 0) / timeline.fps * 1000 > item.scene.durationInFrames / timeline.fps * 1000)) throw new Error(`Captions exceed scene ${item.scene.id}.`);
      cues.push(...local.map(c => ({...c, startMs: c.startMs + item.audioStartMs, endMs: c.endMs + item.audioStartMs, segment: item.scene.id})));
    } else if (item.scene.voiceover?.text?.trim()) warnings.push(`Scene ${item.scene.id} has no timed caption coverage.`);
  }
  cues.sort((a, b) => a.startMs - b.startMs);
  return {cues, warnings, timeline};
}

export function captionTime(ms, separator = ',') {
  const total = Math.max(0, Math.round(ms));
  return `${String(Math.floor(total / 3600000)).padStart(2, '0')}:${String(Math.floor(total / 60000) % 60).padStart(2, '0')}:${String(Math.floor(total / 1000) % 60).padStart(2, '0')}${separator}${String(total % 1000).padStart(3, '0')}`;
}

// Start rounding must never expose a feedback caption before its audio cue.
export const toSrt = cues => cues.map((c, i) => `${i + 1}\n${captionTime(Math.ceil(c.startMs))} --> ${captionTime(Math.max(Math.ceil(c.startMs), Math.floor(c.endMs)))}\n${c.text}\n`).join('\n');
export const toVtt = cues => 'WEBVTT\n\n' + cues.map(c => `${captionTime(Math.ceil(c.startMs), '.')} --> ${captionTime(Math.max(Math.ceil(c.startMs), Math.floor(c.endMs)), '.')}\n${c.text}\n`).join('\n');
