import lesson from '../../../../docs/production/claude-pm/lessons/c11/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
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

// C11 colour key (design): positive ions amber, negative ions violet, water pale blue with a red delta minus on the
// oxygen; energy in warm red (bar up), energy out teal (bar down); radioactive (labelled) ions glow green.
export const CAT = '#e2a63b', CAT_INK = '#a8700e';
export const AN = '#8a5cc2', AN_INK = '#6a3fa3';
export const WATERC = '#bcdcf0', WATER_INK = '#4f86ad';
export const DELTA_M = '#c4432f', DELTA_P = '#4f86ad';
export const HOT = '#c4432f', HOT_SOFT = '#f6d6cf';
export const COOL = '#0d6b52', COOL_SOFT = '#cfe8dc';
export const GLOW = '#58c24a', GLOW_SOFT = '#c9f0bf';
export const LEFT = '#8a8378';
export const BLUE_CU = '#4a9fd8';
