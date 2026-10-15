import lesson from '../../../../docs/production/claude-pm/lessons/c9/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
export {HEAT, ICE, NO2C, NO2_INK, N2O4C, N2O4_INK} from '../chem-m5-c03/common';
export {H2C, H2_INK, HIC, HI_INK, I2C, I2_INK, GLASS, GREEN, CROSS} from '../chem-m5-c05/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;

// Colour key (one visual system, as C2 to C8): forward blue, reverse amber, equal teal, K marker teal, Q marker pen ink.
// N2O4 pale grey, NO2 brown; hot terracotta, cold pale blue.
export const QINK = '#3a2f6b';
export const PLUS = '#1f8a5b';
export const MINUS = '#c4432f';
export const N2O4_DOT = '#ece6d6';
/** Numbers used (single source, see the design "Numbers used"). */
export const K25 = 0.0061, K100 = 0.49, KR25 = 1 / 0.0061, KR100 = 1 / 0.49;
