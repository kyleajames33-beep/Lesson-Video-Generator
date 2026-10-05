import timing from './timing-constants.json' with {type: 'json'};

// Shared by the renderer and Node export tools. Frame coordinates are local
// to each scene until resolved here; transitions overlap adjacent scenes.
export function lessonTimeline(lesson) {
  const fps = lesson.fps ?? 30;
  const introFrames = lesson.introDurationInFrames ?? timing.INTRO_STINGER_FRAMES;
  if (!Number.isFinite(fps) || fps <= 0) throw new Error('Invalid lesson fps.');
  if (!Number.isInteger(introFrames) || introFrames < 0) throw new Error('Invalid intro duration.');
  if (!Array.isArray(lesson.scenes) || !lesson.scenes.length) throw new Error('A lesson needs scenes.');
  let cursor = introFrames;
  const ids = new Set();
  const scenes = lesson.scenes.map((scene, i) => {
    if (!scene.id || ids.has(scene.id)) throw new Error('Missing or duplicate scene ID.');
    ids.add(scene.id);
    if (!Number.isInteger(scene.durationInFrames) || scene.durationInFrames <= timing.TRANSITION_FRAMES) {
      throw new Error(`Invalid scene duration: ${scene.id}`);
    }
    const startFrame = cursor, endFrame = startFrame + scene.durationInFrames;
    cursor = endFrame - (i < lesson.scenes.length - 1 ? timing.TRANSITION_FRAMES : 0);
    return {scene, startFrame, endFrame, audioStartMs: (startFrame + (scene.voiceover?.startFrame ?? 0)) / fps * 1000};
  });
  return {fps, introFrames, introDurationMs: introFrames / fps * 1000,
    durationInFrames: cursor, durationMs: cursor / fps * 1000, scenes};
}
