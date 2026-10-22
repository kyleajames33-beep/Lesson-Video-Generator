// M7 C01 shared pieces: measured lesson lookups, the camping stove plate (alpha box measured 23 Oct, PIL alpha > 20)
// and the fixed board layout (rule chip top left, structure board centre, name builder strip at the bottom).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c01/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {builderW} from './molecules';

export {Heading} from '../chem-m5-c03/common';
export type {PDef};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C01 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

/** Lit blue camping stove on an unlabelled gas canister (2000 square). Flame about natural (990, 380); canister body
 *  centre about (980, 1400). */
export const BURNER = mk('m7-camping-gas-burner-v1.png', [2000, 2000], [399, 208, 1600, 1800]);
export const BURNER_UV = {flame: [(990 - 399) / 1201, (380 - 208) / 1592] as [number, number], flameR: [170 / 1201, 200 / 1592] as [number, number], can: [(980 - 399) / 1201, (1400 - 208) / 1592] as [number, number]};

// ---------- board layout ----------
export const BW: [number, number, number] = [400, 210, 240];
export const BX = (1920 - builderW(BW)) / 2, BY = 880;
