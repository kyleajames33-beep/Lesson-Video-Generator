// M7 C09 shared pieces: measured lesson lookups and the plates. Brief 106: the blue litmus strip (traced on the red
// strip's alpha, same box [200, 404, 1800, 1597], so the pair cross-fades in place; measured 28 Oct, PIL alpha > 8).
// Reused: the red litmus strip, the vinegar bottle and the baking soda beaker pair (Module 6), the ester fruit (C10
// imports FRUIT from here).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c09/measured/lesson.json';
import type {CueScene} from '../../cues';
import {LITMUS, SODA_CLIP, VINEGAR, mk} from '../chem-m6-c01/assets';

export {Heading} from '../chem-m5-c03/common';
export {SODA_CLIP, VINEGAR};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C09 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
export const LIT = {blue: mk('m7-litmus-blue-strip-v1.png', N2, [200, 404, 1800, 1597]), red: LITMUS.red};
/** Banana (left), pineapple (centre), pear (right), no background. Box [200, 460, 1800, 1539]. */
export const FRUIT = mk('m7-ester-fruit-v1.png', N2, [200, 460, 1800, 1539]);
