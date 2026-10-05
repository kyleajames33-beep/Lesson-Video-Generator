import type {LessonData, SceneData} from './types';
export function lessonTimeline(lesson: LessonData): {
  fps: number; introFrames: number; introDurationMs: number;
  durationInFrames: number; durationMs: number;
  scenes: Array<{scene: SceneData; startFrame: number; endFrame: number; audioStartMs: number}>;
};
