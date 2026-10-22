// G04 curves, computed from the chemistry with the C13 solver (full charge balance, 25 °C, Kw 1.0e-14, Kb(NH3) 1.8e-5;
// author notes a, b and d). Volumes in mL.
import {KB_NH3, KW, samples, solveH, volAt} from '../chem-m6-c13/curves';
import {fitLine} from '../chem-m6-c15/curves';

export {volAt};
const pH = (h: number) => -Math.log10(h);
/** Q1: 20.00 mL of 0.120 mol/L NH3 in the flask, 0.100 mol/L HCl added (equivalence 24.00 mL). */
export const phQ1 = (v: number) => pH(solveH({cl: (0.1 * v) / (20 + v), bases: [{c: 2.4 / (20 + v), kb: KB_NH3}]}));
export const XS1 = samples(40, 24);
/** Q2: 25.00 mL of 0.100 mol/L HCl in the flask, 0.120 mol/L NH3 from the burette (equivalence 20.83 mL). */
export const EQ2 = 2.5 / 0.12;
export const phQ2 = (v: number) => pH(solveH({cl: 2.5 / (25 + v), bases: [{c: (0.12 * v) / (25 + v), kb: KB_NH3}]}));
export const XS2 = samples(30, EQ2);
/** Q4: 50.00 mL of 0.0840 mol/L NH3 with 0.500 mol/L HCl, conductivity (relative), corrected by (50 + v) / 50. */
const LAM = {h: 349.8, oh: 198.6, nh4: 73.5, cl: 76.3};
export const condQ4 = (v: number) => {
	const V = 50 + v;
	const cl = (0.5 * v) / V, cb = 4.2 / V;
	const h = solveH({cl, bases: [{c: cb, kb: KB_NH3}]});
	const nh4 = (cb * h) / (h + KW / KB_NH3);
	return (h * LAM.h + (KW / h) * LAM.oh + nh4 * LAM.nh4 + cl * LAM.cl) * 1000 * (V / 50);
};
export const XS4 = Array.from({length: 17}, (_, i) => i);
const rng = (a: number, b: number) => Array.from({length: b - a + 1}, (_, i) => a + i);
export const L1 = fitLine(condQ4, rng(2, 7));
export const L2 = fitLine(condQ4, rng(10, 16));
export const XQ4 = (L2.b - L1.b) / (L1.m - L2.m);
