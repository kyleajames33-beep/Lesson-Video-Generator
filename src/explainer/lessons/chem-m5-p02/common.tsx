import lesson from '../../../../docs/production/claude-pm/lessons/p02/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix, FE, FE_INK, SCN, SCN_INK, RED, RED_INK} from '../chem-m5-c03/common';
export {PLUS, MINUS, GREEN, CROSS} from '../chem-m5-c06/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

// P02 colour key (one visual system with C3, C5 and C6a): Fe3+ pale yellow, SCN- grey, FeSCN2+ red (C3 tints);
// the light beam blue; K teal; pen amber. Water pale blue-grey.
export const BEAM = '#3d6fd6';
export const BEAM_SOFT = '#b9cdf3';
export const WATER = '#dfeaf0';
export const SAMPLE = ['#f6c7b4', '#f0a083', '#e57a57', '#d9603d', '#cf4a2c'];
export const SAMPLE_UNKNOWN = '#dc6a46';

// ---------- the illustrative class data (design "Numbers used"); the fit is computed here, never hard-coded ----------
/** Standards: [FeSCN2+] in units of 1e-4 mol/L, and their absorbances. The blank is (0, 0). */
export const STD_C = [0.4, 0.8, 1.2, 1.6, 2.0];
export const STD_A = [0.191, 0.374, 0.566, 0.751, 0.939];
const PTS: [number, number][] = [[0, 0], ...STD_C.map((c, i) => [c, STD_A[i]] as [number, number])];
const n = PTS.length;
const mx = PTS.reduce((s, p) => s + p[0], 0) / n, my = PTS.reduce((s, p) => s + p[1], 0) / n;
/** Least squares slope (absorbance per 1e-4 mol/L) and intercept: 0.46907 and 0.0011 (design: 4690.7 L/mol, 0.0011). */
export const FIT_M = PTS.reduce((s, p) => s + (p[0] - mx) * (p[1] - my), 0) / PTS.reduce((s, p) => s + (p[0] - mx) ** 2, 0);
export const FIT_B = my - FIT_M * mx;
export const fitA = (c: number) => FIT_M * c + FIT_B;
export const fitC = (a: number) => (a - FIT_B) / FIT_M;
