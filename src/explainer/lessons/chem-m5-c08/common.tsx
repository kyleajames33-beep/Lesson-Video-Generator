import lesson from '../../../../docs/production/claude-pm/lessons/c8/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
export {NAVY, VIOLET, GREENP, GREEN_INK} from '../chem-m5-c02/common';
export {H2C, H2_INK, HIC, HI_INK, I2C, I2_INK, GLASS, GREEN, CROSS} from '../chem-m5-c05/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;

const norm = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, '');
/** Frame of word `k` (0-based) inside `phrase`, which is found as the `occ`-th run in the narration. */
export const cw = (id: string, phrase: string, k = 0, occ = 1, fps = 30): number => {
	const s = sc(id);
	const words = (s.captions ?? []).map(c => ({w: norm(c.text), ms: c.startMs}));
	const target = phrase.split(/\s+/).map(norm).filter(Boolean);
	let seen = 0;
	for (let i = 0; i + target.length <= words.length; i++) {
		if (target.every((t, j) => words[i + j].w === t)) {
			seen++;
			if (seen === occ) return Math.round((words[i + k].ms / 1000) * fps);
		}
	}
	throw new Error(`cw "${phrase}" (#${occ}) not found in ${id}`);
};

// Colour key (one visual system, as C2 to C7): forward blue, reverse amber, equal teal, K marker teal, Q marker pen ink.
export const PLUS = '#1f8a5b';
export const MINUS = '#c4432f';
export const QINK = '#3a2f6b';
export const N2C = '#2b4a8f';
export const NH3C = '#fbf4ea';
export const NH3_INK = '#8a6a50';

/** The H2 + I2 model. K = 49. Concentrations in mol/L. */
export const K49 = 49;
export const qOf = (h: number, i: number, hi: number) => (hi * hi) / (h * i);
/** Made-up rate units: forward = 500 [H2][I2], reverse = 500 [HI]^2 / 49 (a made-up scale for the bar heights only; never shown). */
export const fwdRate = (h: number, i: number) => 500 * h * i;
export const revRate = (hi: number) => (500 * hi * hi) / K49;
/** Mixture A extent x (0 to 0.10) to concentrations. */
export const mixA = (x: number) => ({h: 0.2 - x, i: 0.2 - x, hi: 0.5 + 2 * x});
/** Mixture B extent y (0 to 0.05) to concentrations. */
export const mixB = (y: number) => ({h: 0.05 + y, i: 0.05 + y, hi: 0.8 - 2 * y});
export const dots = (c: number) => Math.round(c / 0.05);
