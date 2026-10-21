// Conductivity data for M6 C15, computed from the chemistry (author notes c and d), relative units = sum of c x molar
// conductivity (S cm2 mol-1, 25 °C), corrected for dilution by (V0 + v) / V0 unless stated.
import {solveH} from '../chem-m6-c13/curves';

const KA = 1.8e-5;
const LAM = {h: 349.8, oh: 198.6, na: 50.1, ac: 40.9, ba: 127.2, so4: 160.0};
/** Vinegar: 10.00 mL of 0.820 mol/L CH3COOH (8.20 mmol) in V0 mL total, 1.00 mol/L NaOH; v in mL. */
const kVin = (v: number, V0: number, corrected: boolean) => {
	const V = V0 + v;
	const s = {na: (1.0 * v) / V, acids: [{c: 8.2 / V, ka: KA}]};
	const h = solveH(s);
	const k = h * LAM.h + (1e-14 / h) * LAM.oh + s.na * LAM.na + ((s.acids[0].c * KA) / (KA + h)) * LAM.ac;
	return corrected ? (k * V) / V0 : k;
};
/** The worked case: made up to 100.0 mL, corrected (scenes 8 to 10). */
export const condVin = (v: number) => kVin(v, 100, true);
/** Scene 9's sagging pair: 10.00 mL of vinegar, not topped up, not corrected (each portion is a big fraction). */
export const condVinRaw = (v: number) => kVin(v, 10, false);
export const VIN_XS = Array.from({length: 17}, (_, i) => i);

/** Attempt 2: 50.00 mL of 0.0250 mol/L Ba(OH)2 with 0.100 mol/L H2SO4 (2H+ + SO4 2-), corrected. */
export const condBa = (v: number) => {
	const nBa = Math.max(0, 1.25 - 0.1 * v), nOH = Math.max(0, 2.5 - 0.2 * v); // mmol
	const ex = Math.max(0, v - 12.5);
	const nH = 0.2 * ex, nSO4 = 0.1 * ex;
	return (nBa * LAM.ba + nOH * LAM.oh + nH * LAM.h + nSO4 * LAM.so4) / 50;
};
export const BA_XS = Array.from({length: 21}, (_, i) => i);

/** Least-squares line through the points of fn at xs: value at v. */
export const fitLine = (fn: (v: number) => number, xs: number[]) => {
	const n = xs.length, ys = xs.map(fn);
	const mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
	let sxy = 0, sxx = 0;
	xs.forEach((x, i) => { sxy += (x - mx) * (ys[i] - my); sxx += (x - mx) ** 2; });
	const m = sxy / sxx, b = my - m * mx;
	return {m, b, at: (v: number) => m * v + b};
};
const rng = (a: number, b: number) => Array.from({length: b - a + 1}, (_, i) => a + i);
export const VIN_L1 = fitLine(condVin, rng(2, 7));
export const VIN_L2 = fitLine(condVin, rng(10, 16));
export const VIN_X = (VIN_L2.b - VIN_L1.b) / (VIN_L1.m - VIN_L2.m);
export const BA_L1 = fitLine(condBa, rng(0, 10));
export const BA_L2 = fitLine(condBa, rng(14, 20));
export const BA_X = (BA_L2.b - BA_L1.b) / (BA_L1.m - BA_L2.m);
