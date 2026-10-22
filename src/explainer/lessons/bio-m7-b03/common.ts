import lesson from '../../../../docs/production/claude-pm/lessons/m7b03/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';

export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};
export const dur = (id: string) => S(id).durationInFrames;
