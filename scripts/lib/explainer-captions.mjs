// ExplainerVideo and its audio mux start each scene after the previous duration.
import {groupCaptionCues, toSrt, toVtt} from './caption-timeline.mjs';
export {toSrt, toVtt};

export function explainerCaptionCues(lesson, options = {}) {
  const fps = lesson.fps ?? 30;
  if (fps !== 30) throw new Error('Explainer playback currently requires 30 fps.');
  if ((lesson.introDurationInFrames ?? 0) !== 0) throw new Error('Explainer playback does not schedule a separate intro.');
  if (!Array.isArray(lesson.scenes) || !lesson.scenes.length) throw new Error('An explainer needs scenes.');
  let cursor = 0;
  const ids = new Set(), cues = [], scenes = [];
  for (const scene of lesson.scenes) {
    if (!scene.id || ids.has(scene.id)) throw new Error('Missing or duplicate scene ID.');
    ids.add(scene.id);
    if (!Number.isInteger(scene.durationInFrames) || scene.durationInFrames <= 0) throw new Error(`Invalid duration: ${scene.id}`);
    if ((scene.voiceover?.startFrame ?? 0) !== 0) throw new Error(`Explainer audio starts with its scene: ${scene.id}`);
    if (scene.voiceover?.text?.trim() && !scene.captions?.length) throw new Error(`Missing timed words: ${scene.id}`);
    const local = groupCaptionCues(scene.captions ?? [], options);
    if (local.some(c => c.endMs > scene.durationInFrames / fps * 1000)) throw new Error(`Captions exceed scene: ${scene.id}`);
    if (scene.responseHold) {
      const h = scene.responseHold;
      if (!Number.isInteger(h.startFrame) || !Number.isInteger(h.endFrame) || h.startFrame < 0 || h.endFrame <= h.startFrame || h.endFrame > scene.durationInFrames) throw new Error(`Invalid response hold: ${scene.id}`);
      if (local.some(c => c.startMs < h.endFrame / fps * 1000 && c.endMs > h.startFrame / fps * 1000)) throw new Error(`Caption enters response hold: ${scene.id}`);
    }
    scenes.push({id: scene.id, startFrame: cursor, endFrame: cursor + scene.durationInFrames});
    cues.push(...local.map(c => ({...c, startMs: c.startMs + cursor / fps * 1000, endMs: c.endMs + cursor / fps * 1000, segment: scene.id})));
    cursor += scene.durationInFrames;
  }
  let previousEnd = 0;
  for (const cue of cues) {
    const start = Math.ceil(cue.startMs), end = Math.max(start, Math.floor(cue.endMs));
    if (end <= start) throw new Error(`Caption has no output duration: ${cue.segment}`);
    if (start < previousEnd) throw new Error(`Caption output overlaps: ${cue.segment}`);
    previousEnd = end;
  }
  return {cues, timeline: {fps, durationInFrames: cursor, scenes}};
}
