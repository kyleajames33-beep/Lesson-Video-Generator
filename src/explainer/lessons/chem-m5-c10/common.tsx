import lesson from '../../../../docs/production/claude-pm/lessons/c10/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
export {NAVY, VIOLET} from '../chem-m5-c02/common';
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

// C10 colour key (design): H+ and H3O+ amber; the acid's anion violet; whole acid molecules navy; OH- green;
// NH4+ violet; water pale blue; K teal; anything left out of K grey in the "left out" tray.
export const HPLUS = '#e2a63b', HPLUS_INK = '#a8700e';
export const ANION = '#8a5cc2', ANION_INK = '#6a3fa3';
export const MOL = '#2b4a8f';
export const OHC = '#3f9a5a', OH_INK = '#2f7a45';
export const WATERC = '#bcdcf0', WATER_INK = '#4f86ad';
export const AGC = '#c9ccd2', AG_INK = '#5b626b';
export const CLC = '#6cb58a', CL_INK = '#3f7d5a';
export const LEFT = '#8a8378';
