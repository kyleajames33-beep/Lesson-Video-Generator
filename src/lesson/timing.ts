import type {LessonData} from './types';

export const TRANSITION_FRAMES = 24;

export const getLessonDurationInFrames = (lesson: LessonData) => {
  const raw = lesson.scenes.reduce((total, scene) => total + scene.durationInFrames, 0);
  return raw - (lesson.scenes.length - 1) * TRANSITION_FRAMES;
};
