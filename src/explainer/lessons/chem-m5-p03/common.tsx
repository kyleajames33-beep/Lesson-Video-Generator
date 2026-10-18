import lesson from '../../../../docs/production/claude-pm/lessons/p03/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
export {GREEN, CROSS} from '../chem-m5-c06/common';
// one visual system with C11 and C13: positive ions amber, negative ions violet; precipitates in their real colours
export {CAT, CAT_INK, AN, AN_INK} from '../chem-m5-c11/common';
export {PPT_Y, PPT_Y_INK, PPT_W, PPT_W_INK, BROWN} from '../chem-m5-c13/common';
export {HAZ} from '../chem-m5-p01/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const PEN = '#b5730f';
