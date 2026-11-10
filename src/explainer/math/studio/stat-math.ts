// Statistics maths for the studio kit (kit pass 2B, root decisions 45 and 54). No React.
// Normal probabilities are computed to about 1e-12 (series for |x| < 3, continued fraction beyond),
// well inside the 1e-6 the designs need. Every random number comes from a seeded generator, never
// Math.random, so every frame of every render is identical.

/** Seeded uniform generator on [0, 1) (mulberry32, the same generator as src/explainer/sims/chance.ts). */
export const seededRandom = (seed: number) => {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) >>> 0;
		let t = a;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
};
/** Seeded standard normal values (Box-Muller), n of them. */
export const seededNormals = (seed: number, n: number): number[] => {
	const r = seededRandom(seed), out: number[] = [];
	while (out.length < n) {
		const u = Math.max(1e-12, r()), v = r();
		const m = Math.sqrt(-2 * Math.log(u));
		out.push(m * Math.cos(2 * Math.PI * v));
		if (out.length < n) out.push(m * Math.sin(2 * Math.PI * v));
	}
	return out;
};
/** A seeded shuffle of exact counts: counts [28, 35, ...] become a roll order whose tallies end exactly on them. */
export const shuffledOutcomes = (counts: readonly number[], seed: number): number[] => {
	const out: number[] = [];
	counts.forEach((c, i) => {for (let k = 0; k < c; k++) out.push(i);});
	const r = seededRandom(seed);
	for (let i = out.length - 1; i > 0; i--) {const j = Math.floor(r() * (i + 1)); [out[i], out[j]] = [out[j], out[i]];}
	return out;
};
/** Tally of outcome indices among the first k entries of a sequence. */
export const tallyOf = (seq: readonly number[], k: number, bins: number): number[] => {
	const t = new Array(bins).fill(0), n = Math.max(0, Math.min(seq.length, Math.floor(k)));
	for (let i = 0; i < n; i++) if (seq[i] >= 0 && seq[i] < bins) t[seq[i]]++;
	return t;
};
/** Class counts of values for class edges [e0, e1, ..., en] (left-closed, the last class closed). */
export const classCounts = (values: readonly number[], edges: readonly number[], k = values.length): number[] => {
	const c = new Array(Math.max(0, edges.length - 1)).fill(0);
	for (let i = 0; i < Math.min(k, values.length); i++) {const j = classIndex(values[i], edges); if (j >= 0) c[j]++;}
	return c;
};
export const classIndex = (v: number, edges: readonly number[]) => {
	const n = edges.length - 1;
	if (v < edges[0] || v > edges[n]) return -1;
	for (let j = 0; j < n; j++) if (v < edges[j + 1] || j === n - 1) return j;
	return -1;
};
/** Running mean of a sequence after k values. */
export const runningMean = (seq: readonly number[], k: number) => {
	const n = Math.max(0, Math.min(seq.length, Math.floor(k)));
	if (!n) return NaN;
	let s = 0;
	for (let i = 0; i < n; i++) s += seq[i];
	return s / n;
};
/** Mean and standard deviation of a discrete distribution. */
export const discreteStats = (xs: readonly number[], ps: readonly number[]) => {
	const mu = xs.reduce((s, x, i) => s + x * ps[i], 0);
	const ex2 = xs.reduce((s, x, i) => s + x * x * ps[i], 0);
	const v = ex2 - mu * mu;
	return {mu, ex2, variance: v, sd: Math.sqrt(Math.max(0, v))};
};

// ---------- the normal distribution ----------
const SQRT2 = Math.SQRT2, SQRTPI = Math.sqrt(Math.PI);
/** erf(x) to about 1e-13 absolute. */
export const erf = (x: number): number => {
	if (!Number.isFinite(x)) return Number.isNaN(x) ? NaN : Math.sign(x);
	const ax = Math.abs(x);
	if (ax < 3) {
		// Maclaurin series: 2/√π Σ (−1)ⁿ x^(2n+1) / (n! (2n + 1)).
		let term = ax, sum = ax;
		for (let n = 1; n < 200; n++) {
			term *= -(ax * ax) / n;
			const add = term / (2 * n + 1);
			sum += add;
			if (Math.abs(add) < 1e-17 * Math.abs(sum)) break;
		}
		return Math.sign(x) * (2 / SQRTPI) * sum;
	}
	return Math.sign(x) * (1 - erfcLarge(ax));
};
/** erfc for x ≥ 3 by the Lentz continued fraction (relative accuracy about 1e-14). */
const erfcLarge = (x: number) => {
	// erfc(x) = exp(−x²)/√π · 1/(x + 1/2/(x + 1/(x + 3/2/(x + ...)))).
	const tiny = 1e-300;
	let f = x, C = x, D = 0;
	for (let n = 1; n < 300; n++) {
		const a = n / 2;
		D = x + a * D; D = Math.abs(D) < tiny ? tiny : D; D = 1 / D;
		C = x + a / C; C = Math.abs(C) < tiny ? tiny : C;
		const delta = C * D;
		f *= delta;
		if (Math.abs(delta - 1) < 1e-16) break;
	}
	return Math.exp(-x * x) / SQRTPI / f;
};
/** erfc(x) = 1 − erf(x), accurate in both tails. */
export const erfc = (x: number) => (x >= 3 ? erfcLarge(x) : x <= -3 ? 2 - erfcLarge(-x) : 1 - erf(x));
/** Standard normal CDF Φ(z). */
export const phi = (z: number) => 0.5 * erfc(-z / SQRT2);
/** Normal density at x for mean μ and standard deviation σ. */
export const normPdf = (x: number, mu = 0, sigma = 1) => Math.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
/** P(X ≤ x) for X ∼ N(μ, σ²). */
export const normCdf = (x: number, mu = 0, sigma = 1) => (x === Infinity ? 1 : x === -Infinity ? 0 : phi((x - mu) / sigma));
/** P(a < X < b) for X ∼ N(μ, σ²); either end may be ±Infinity. */
export const normBetween = (a: number, b: number, mu = 0, sigma = 1) => Math.max(0, normCdf(b, mu, sigma) - normCdf(a, mu, sigma));
/** Inverse of Φ: z with Φ(z) = p (Acklam's rational approximation, then two Newton steps on the accurate Φ). */
export const invPhi = (p: number): number => {
	if (!(p > 0 && p < 1)) {if (p === 0) return -Infinity; if (p === 1) return Infinity; return NaN;}
	const a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2, 1.38357751867269e2, -3.066479806614716e1, 2.506628277459239];
	const b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1];
	const c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
	const d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996, 3.754408661907416];
	const lo = 0.02425;
	let z: number;
	if (p < lo) {const q = Math.sqrt(-2 * Math.log(p)); z = (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);}
	else if (p > 1 - lo) {const q = Math.sqrt(-2 * Math.log(1 - p)); z = -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);}
	else {const q = p - 0.5, r = q * q; z = (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);}
	for (let i = 0; i < 2; i++) z -= (phi(z) - p) / normPdf(z);
	return z;
};
/** The value x with P(X ≤ x) = p for X ∼ N(μ, σ²). */
export const normQuantile = (p: number, mu = 0, sigma = 1) => mu + sigma * invPhi(p);
/** Table value Φ(z) rounded to 4 decimals, as in a printed standard normal table. */
export const zTableValue = (z: number) => Math.round(phi(z) * 1e4) / 1e4;

/** Solve F(x) = p for an increasing F on [a, b] by bisection (quantiles of any CDF). */
export const solveIncreasing = (F: (x: number) => number, p: number, a: number, b: number, iters = 80) => {
	let lo = a, hi = b;
	for (let i = 0; i < iters; i++) {const m = (lo + hi) / 2; if (F(m) < p) lo = m; else hi = m;}
	return (lo + hi) / 2;
};
/** Binomial coefficient n choose k (exact for the sizes used on screen). */
export const nCk = (n: number, k: number) => {let c = 1; for (let i = 1; i <= k; i++) c = (c * (n - k + i)) / i; return Math.round(c);};
