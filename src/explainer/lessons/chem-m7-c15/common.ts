// M7 C15 shared pieces: measured lesson lookups and the plates. Brief 109 delivered the three new single objects
// (PET bottle, nylon rope, polyester fabric; 2000 x 2000, alpha boxes measured 30 Oct, PIL alpha > 8). Reused: C14's
// polymer objects group plate (bag (490, 810), pipe (1120, 710), foam cup (1160, 1210), PET bottle (1640, 1040),
// rope (550, 1330), plate pixels) and the HDPE crate.
import lesson from '../../../../docs/production/claude-pm/lessons/m7c15/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {HDPE, OBJ} from '../chem-m7-c14/common';

export {Heading} from '../chem-m5-c03/common';
export {HDPE, OBJ};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C15 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
export const BOTTLE = mk('m7-pet-bottle-v1.png', N2, [794, 402, 1207, 1598]);
export const ROPE = mk('m7-nylon-rope-v1.png', N2, [400, 523, 1598, 1478]);
export const FABRIC = mk('m7-polyester-fabric-v1.png', N2, [403, 573, 1598, 1428]);
