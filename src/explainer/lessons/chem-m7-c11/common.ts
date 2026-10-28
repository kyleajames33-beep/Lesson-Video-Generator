// M7 C11 shared pieces: measured lesson lookups and the plates. Brief 107: the fish plate (box [250, 585, 1750, 1415],
// measured 28 Oct, PIL alpha > 8). Reused: the litmus strips (red, Module 6 red-to-blue, brief 106 blue), the lemon,
// the ammonia bottle and the soap bar (Module 5 and 6).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c11/measured/lesson.json';
import type {CueScene} from '../../cues';
import {AMMONIA, LEMON, LITMUS, SOAP, mk} from '../chem-m6-c01/assets';
import {LIT} from '../chem-m7-c09/common';

export {Heading} from '../chem-m5-c03/common';
export {AMMONIA, LEMON, SOAP};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C11 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

/** Litmus: red strip, the Module 6 red-to-blue result, and the plain blue strip (all on the same tile box). */
export const LT = {red: LITMUS.red, toBlue: LITMUS.blue, blue: LIT.blue};
export const FISH = mk('m7-fish-plate-v1.png', [2000, 2000], [250, 585, 1750, 1415]);
