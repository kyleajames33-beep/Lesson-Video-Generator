import lesson from '../../../../docs/production/claude-pm/lessons/c4a/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix, ChemH, ChemSvg, CHEM_SPLIT, NO2C, NO2_INK, N2O4C, N2O4_INK, HEAT} from '../chem-m5-c03/common';

const L = lesson as unknown as {scenes: (CueScene & {durationInFrames: number})[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};

// Gas tints: NO2 shade scale (t 0 pale to 1 deep) and the iodine and hot cylinder tints.
export const PALE = '#f8f1e2', DEEP = '#cf9448';
export const IODINE = '#8a52b8', IODINE_INK = '#5e3585', IODINE_PALE = '#f3ecf8', IODINE_DEEP = '#a77cc9';
export const HI_C = '#e8e8e4', HI_INK = '#5b5b55';
export const NOC = '#d9dde0', NO_INK = '#59606a';
export const O2C = '#cfe3f1', O2_INK = '#3d6f95';
export const ARGON = '#ffffff', ARGON_INK = '#6b6358';
export const CARBON = '#3a3733';
export const CO_C = '#c9c9d6', CO_INK = '#555568';
