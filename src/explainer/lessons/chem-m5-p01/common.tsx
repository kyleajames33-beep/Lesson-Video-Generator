import lesson from '../../../../docs/production/claude-pm/lessons/p01/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix, FE_INK, SCN_INK, RED_INK, HEAT, ICE} from '../chem-m5-c03/common';
export {GREEN, CROSS} from '../chem-m5-c06/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

// P01 colour key (design): reference and controls teal, hazards terracotta, risk controls green; FeSCN2+ red,
// cobalt pink and blue (C3). Swatches are sampled from the painted tubes (PIL means, 18 Oct).
export const HAZ = '#b5502b';
export const SW_STOCK = '#f0d4c1', SW_DEEP = '#a82a22', SW_FADED = '#f8e6bd', SW_DIL = '#f4ddcd';
export const CO_PINK_INK = '#b04d79', CO_BLUE_INK = '#23479a', CO_PURPLE_INK = '#6a46a8';
export const WATER_DROP = '#bcd9ec';
