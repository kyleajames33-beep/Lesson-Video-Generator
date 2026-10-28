// M7 C14 shared pieces: measured lesson lookups and the plates. Brief 106: five single polymer objects (LDPE squeeze
// bottle, HDPE crate, PVC pipe, polystyrene foam cup, PTFE pan; boxes measured 28 Oct, PIL alpha > 8). Reused: the
// polymer objects group plate (bag about (490, 810), pipe (1120, 710), foam cup (1160, 1210), PET bottle (1640, 1040),
// rope (550, 1330), plate pixels).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c14/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';

export {Heading} from '../chem-m5-c03/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C14 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
export const OBJ = mk('m7-polymer-objects-v1.png', N2, [200, 487, 1800, 1513]);
export const LDPE = mk('m7-ldpe-squeeze-bottle-v1.png', N2, [740, 401, 1260, 1599]);
export const HDPE = mk('m7-hdpe-crate-v1.png', N2, [402, 564, 1595, 1437]);
export const PVCP = mk('m7-pvc-pipe-v1.png', N2, [401, 629, 1599, 1371]);
export const CUP = mk('m7-ps-foam-cup-v1.png', N2, [544, 401, 1454, 1598]);
export const PAN = mk('m7-ptfe-pan-v1.png', N2, [402, 536, 1598, 1460]);
