import lesson from '../../../../docs/production/claude-pm/lessons/c4b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {hexMix} from '../chem-m5-c03/common';

export {ChemH, ChemSvg, Heading, hexMix, kf} from '../chem-m5-c03/common';

const L = lesson as unknown as {scenes: (CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}})[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};

// Colour key (one visual system, as C2 to C4a): forward blue, reverse amber, equal teal.
export const I2C = '#8a4fc4', I2_INK = '#5f2f94';
export const I2_DEEP = '#6a2fa3', I2_PALE = '#f1e9f7';
export const H2C = '#eceae4', H2_INK = '#6b6358';
export const HIC = '#c9ccd2', HI_INK = '#4a4f57';
export const METAL = '#9aa0a6', METAL_DARK = '#6c7279', METAL_LIGHT = '#c9cdd1';
export const HEAT = '#c4582f';
export const GLASS = '#eef5fa';

/** Tube colour from the iodine amount (9 units deep purple, 2 units the settled pale shade). */
export const tubeColour = (i2: number) => hexMix(I2_PALE, I2_DEEP, Math.max(0, Math.min(1, i2 / 9)));

// ---------- the made-up kinetics model (as the design): forward = 0.05 [H2][I2], reverse = (0.05/49) [HI]^2 ----------
// Integrated once. Concentrations in units, time on the made-up clock. Reproduced from the design note:
// settles (within about 5 per cent) at clock 13.4 uncatalysed and 1.34 catalysed; HI is about 10.13 at clock 3.
const KF = 0.05, KR = 0.05 / 49, DT = 0.002, TMAX = 40;
type State = {h: number; i: number; hi: number; fwd: number; rev: number};
const TABLE: State[] = (() => {
	const out: State[] = [];
	let h = 9, i = 9, hi = 0;
	for (let n = 0; n <= TMAX / DT; n++) {
		const fwd = KF * h * i, rev = KR * hi * hi;
		out.push({h, i, hi, fwd, rev});
		const net = (fwd - rev) * DT;
		h -= net; i -= net; hi += 2 * net;
	}
	return out;
})();
/** Uncatalysed state at clock time t. */
export const modelA = (t: number): State => {
	const x = Math.max(0, Math.min(TMAX, t)) / DT;
	const a = Math.floor(x), b = Math.min(TABLE.length - 1, a + 1), u = x - a;
	const p = TABLE[a], q = TABLE[b];
	return {h: p.h + (q.h - p.h) * u, i: p.i + (q.i - p.i) * u, hi: p.hi + (q.hi - p.hi) * u, fwd: p.fwd + (q.fwd - p.fwd) * u, rev: p.rev + (q.rev - p.rev) * u};
};
/** Catalysed state at clock time t: the same path ten times faster, with rates ten times larger at the same mixture. */
export const modelB = (t: number): State => {
	const s = modelA(t * 10);
	return {...s, fwd: s.fwd * 10, rev: s.rev * 10};
};
export const SETTLE_A = 13, SETTLE_B = 1.3;
