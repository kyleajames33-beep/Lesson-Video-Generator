// Titration and conductivity curves for M6 C13 and C14, computed from the chemistry (full charge balance, 25 °C):
// Kw 1.0e-14, Ka(CH3COOH) 1.8e-5, Kb(NH3) 1.8e-5. Volumes in mL, concentrations in mol/L. C14 imports this file, so the
// ethanoic acid curve is built once (C13 author note d; C14 author note a).
export const KW = 1.0e-14;
export const KA_ETH = 1.8e-5;
export const KB_NH3 = 1.8e-5;

type Sys = {cl?: number; na?: number; acids?: {c: number; ka: number}[]; bases?: {c: number; kb: number}[]};
/** [H3O+] from the charge balance h + Na+ + sum(BH+) = OH- + Cl- + sum(A-), by bisection on pH. */
export const solveH = (s: Sys) => {
	const F = (h: number) => {
		let pos = h + (s.na ?? 0), neg = KW / h + (s.cl ?? 0);
		for (const a of s.acids ?? []) neg += (a.c * a.ka) / (a.ka + h);
		for (const b of s.bases ?? []) pos += (b.c * h) / (h + KW / b.kb);
		return pos - neg;
	};
	let lo = -1, hi = 15; // pH bounds; F falls as pH rises
	for (let i = 0; i < 70; i++) {
		const mid = (lo + hi) / 2;
		if (F(10 ** -mid) > 0) lo = mid;
		else hi = mid;
	}
	return 10 ** (-(lo + hi) / 2);
};
const pH = (h: number) => -Math.log10(h);

// 25.00 mL of 0.100 mol/L acid in the flask, 0.100 mol/L titrant.
const sysHCl = (v: number): Sys => ({cl: 2.5 / (25 + v), na: (0.1 * v) / (25 + v)});
const sysEth = (v: number): Sys => ({na: (0.1 * v) / (25 + v), acids: [{c: 2.5 / (25 + v), ka: KA_ETH}]});
const sysNH3 = (v: number): Sys => ({cl: 2.5 / (25 + v), bases: [{c: (0.1 * v) / (25 + v), kb: KB_NH3}]});
/** HCl titrated with NaOH. */
export const phHCl = (v: number) => pH(solveH(sysHCl(v)));
/** CH3COOH titrated with NaOH. */
export const phEth = (v: number) => pH(solveH(sysEth(v)));
/** HCl titrated with NH3 (ammonia from the burette; C14 scene 7). */
export const phHClNH3 = (v: number) => pH(solveH(sysNH3(v)));
/** C14 attempt 1: 20.00 mL of 0.1000 mol/L HA (Ka 10^-4.57) with 0.1000 mol/L NaOH (C14 author note h). */
export const KA_A1 = 10 ** -4.57;
export const phA1 = (v: number) => pH(solveH({na: (0.1 * v) / (20 + v), acids: [{c: 2.0 / (20 + v), ka: KA_A1}]}));

// Conductivity (relative): sum of c x molar conductivity (S cm2 mol-1 at 25 °C), dilution included (C14 author note g).
const LAM = {h: 350, oh: 198, cl: 76, na: 50, ac: 41};
const kappa = (s: Sys) => {
	const h = solveH(s);
	let k = h * LAM.h + (KW / h) * LAM.oh + (s.cl ?? 0) * LAM.cl + (s.na ?? 0) * LAM.na;
	for (const a of s.acids ?? []) k += ((a.c * a.ka) / (a.ka + h)) * LAM.ac;
	return k;
};
export const condHCl = (v: number) => kappa(sysHCl(v));
export const condEth = (v: number) => kappa(sysEth(v));
/** C14 attempt 2: 20.00 mL of 0.0800 mol/L HCl with 0.100 mol/L NaOH (minimum at 16.0 mL). */
export const condA2 = (v: number) => kappa({cl: 1.6 / (20 + v), na: (0.1 * v) / (20 + v)});

/** Sample volumes, dense near the equivalence volume `eq` (so the vertical jump is drawn exactly). */
export const samples = (max: number, eq: number) => {
	const xs: number[] = [];
	for (let v = 0; v < eq - 1; v += 0.25) xs.push(v);
	for (let v = eq - 1; v < eq - 0.1; v += 0.02) xs.push(v);
	for (let v = eq - 0.1; v < eq + 0.1; v += 0.002) xs.push(v);
	for (let v = eq + 0.1; v < eq + 1; v += 0.02) xs.push(v);
	for (let v = eq + 1; v <= max + 1e-9; v += 0.25) xs.push(v);
	return xs.map(v => Math.round(v * 1000) / 1000);
};
export const XS25 = samples(50, 25);
/** Fine samples for a magnifier inset between a and b. */
export const fine = (a: number, b: number, n = 200) => Array.from({length: n + 1}, (_, i) => a + ((b - a) * i) / n);
/** Volume at which a rising (dir 1) or falling (dir -1) curve reaches pH p, between lo and hi. */
export const volAt = (fn: (v: number) => number, p: number, lo: number, hi: number) => {
	const up = fn(hi) > fn(lo);
	for (let i = 0; i < 60; i++) {
		const m = (lo + hi) / 2;
		if ((fn(m) < p) === up) lo = m;
		else hi = m;
	}
	return (lo + hi) / 2;
};
