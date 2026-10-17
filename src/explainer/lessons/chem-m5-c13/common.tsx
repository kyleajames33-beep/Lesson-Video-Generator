import lesson from '../../../../docs/production/claude-pm/lessons/c13/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
export {GREEN, CROSS} from '../chem-m5-c06/common';
// one visual system with C11: positive ions amber, negative ions violet, water shells pale blue
export {CAT, CAT_INK, AN, AN_INK, WATERC, WATER_INK, LEFT} from '../chem-m5-c11/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

// precipitates keep their real colours
export const PPT_Y = '#f2cf3a', PPT_Y_INK = '#9a7d08';
export const PPT_W = '#f7f6f2', PPT_W_INK = '#6b6358';
export const CU_BLUE = '#8fc3e8', CU_INK = '#2f6f9e';
export const BROWN = '#8a5a2b';
