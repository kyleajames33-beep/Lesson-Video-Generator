// M7 G04 shared pieces: measured lesson lookups and the plates (all reused, no new art): C14's polymer objects group
// plate and PVC pipe (tagged "a polymer pipe" in Q1) and C15's nylon rope (brief 109).
import lesson from '../../../../docs/production/claude-pm/lessons/m7g04/measured/lesson.json';
import type {CueScene} from '../../cues';
import {OBJ, PVCP} from '../chem-m7-c14/common';
import {ROPE} from '../chem-m7-c15/common';

export {Heading} from '../chem-m5-c03/common';
export {OBJ, PVCP, ROPE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 G04 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
