import type {LessonData} from './types';

export const TRANSITION_FRAMES = 24;
// Extended to give students time to read all four sections: wordmark,
// NESA chips, inquiry question, syllabus dot points, and the objectives
// list. 270 frames = 9s at 30fps.
export const INTRO_STINGER_FRAMES = 270;

export const getLessonDurationInFrames = (lesson: LessonData) => {
  const raw = lesson.scenes.reduce((total, scene) => total + scene.durationInFrames, 0);
  const transitions = (lesson.scenes.length - 1) * TRANSITION_FRAMES;
  return INTRO_STINGER_FRAMES + raw - transitions;
};
