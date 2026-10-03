import type {LessonData} from './types';
import timing from './timing-constants.json';
import {lessonTimeline} from './timeline.mjs';

export const TRANSITION_FRAMES = timing.TRANSITION_FRAMES;
// Extended to give students time to read all four sections: wordmark,
// NESA chips, inquiry question, syllabus dot points, and the objectives
// list. 270 frames = 9s at 30fps.
export const INTRO_STINGER_FRAMES = timing.INTRO_STINGER_FRAMES;

export const getLessonDurationInFrames = (lesson: LessonData) => {
  return lessonTimeline(lesson).durationInFrames;
};
