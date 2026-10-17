import lesson from '../../../../docs/production/claude-pm/lessons/c14/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
export {GREEN, CROSS, PLUS, MINUS} from '../chem-m5-c06/common';
// one visual system with C11 and C13: positive ions amber, negative ions violet, water shells pale blue
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

// C14 colour key (design): s and every s-term teal; Ksp teal (with "no unit written"); the solid in its real colour
// (white for every salt in this video); a slip in red with a grey strike. C15 adds Qsp in coral (moving marker).
export const S_INK = '#0d6b52';
export const CORAL = '#e0704f', CORAL_INK = '#b04a2c';
export const WHITE_INK = '#6b6358';
export const GHOST = '#c4432f';
