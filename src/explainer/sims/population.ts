// Population engine: how a population changes over generations or over time. Plain
// TypeScript, no React. Four models, each worked out once and stored, so a graph, a "now"
// marker and a readout all read the same numbers:
//   - alleles: one gene with two alleles (A and a) in diploid individuals, with random
//     sampling each generation (Wright-Fisher drift), selection by genotype fitness, or both;
//   - logistic growth towards a carrying capacity K, in continuous or discrete form;
//   - predator and prey (Lotka-Volterra), stepped with fourth-order Runge-Kutta.
// Drift is seeded, so the same config always gives the same lines.

const mulberry = (seed: number) => {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) >>> 0;
		let t = a;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
};
/** Standard normal from two uniforms (Box-Muller). */
const gauss = (rand: () => number) => Math.sqrt(-2 * Math.log(Math.max(1e-300, rand()))) * Math.cos(2 * Math.PI * rand());

// ----------------------------------------------------------------------- alleles
/** Relative fitness of each genotype (how many offspring it leaves, compared with the others). */
export type Fitness = {AA: number; Aa: number; aa: number};
export type AlleleConfig = {
	/** Starting frequency of allele A, 0 to 1. */
	p0: number;
	/** Number of generations after the start. */
	generations: number;
	/**
	 * Number of diploid individuals (2N copies of the gene are drawn each generation).
	 * Leave out, or pass Infinity, for no drift: every line then follows the deterministic curve.
	 */
	n?: number;
	/** Seed for drift (default 1). */
	seed?: number;
	/** Number of separate populations run side by side with the same settings (default 1). */
	lines?: number;
	/** Selection. Leave out for none (all genotypes equally fit). */
	fitness?: Fitness;
};
export type AlleleRun = {
	config: AlleleConfig;
	generations: number;
	/** p[line][g]: frequency of allele A in that line at generation g (length generations + 1). */
	p: Float64Array[];
	/** The deterministic curve with the same selection and no drift (length generations + 1). */
	expected: Float64Array;
	/** Generation at which each line lost one allele (p reached 0 or 1), or null if it has not. */
	fixedAt: (number | null)[];
	/** Which allele each fixed line kept: 'A', 'a', or null if it has not fixed. */
	fixedTo: ('A' | 'a' | null)[];
};

/**
 * Frequency of A after one round of selection (before any drift), from the genotype
 * frequencies p², 2pq and q² in a randomly mating population.
 */
export const selectionStep = (p: number, w: Fitness) => {
	const q = 1 - p, mean = p * p * w.AA + 2 * p * q * w.Aa + q * q * w.aa;
	return mean > 0 ? (p * p * w.AA + p * q * w.Aa) / mean : p;
};
/** Mean fitness of the population at frequency p. */
export const meanFitness = (p: number, w: Fitness) => { const q = 1 - p; return p * p * w.AA + 2 * p * q * w.Aa + q * q * w.aa; };

/** Draw the number of A copies among `copies` gene copies when each is A with chance p. Exact for up to 4000 copies, normal approximation above. */
const binomial = (rand: () => number, copies: number, p: number) => {
	if (p <= 0) return 0;
	if (p >= 1) return copies;
	if (copies <= 4000) { let k = 0; for (let i = 0; i < copies; i++) if (rand() < p) k++; return k; }
	const k = Math.round(copies * p + gauss(rand) * Math.sqrt(copies * p * (1 - p)));
	return Math.min(copies, Math.max(0, k));
};

/** Run one or more populations for the given number of generations. */
export const runAlleles = (config: AlleleConfig): AlleleRun => {
	const {p0, generations} = config;
	if (!(p0 >= 0 && p0 <= 1)) throw new Error('runAlleles: p0 must be between 0 and 1');
	if (!(generations >= 1)) throw new Error('runAlleles: generations must be at least 1');
	const n = config.n ?? Infinity, lines = Math.max(1, Math.floor(config.lines ?? 1)), w = config.fitness;
	if (!(n > 0)) throw new Error('runAlleles: n must be positive');
	const copies = Number.isFinite(n) ? 2 * Math.round(n) : 0;
	const rand = mulberry(config.seed ?? 1);
	const step = (p: number) => (w ? selectionStep(p, w) : p);
	const expected = new Float64Array(generations + 1);
	expected[0] = p0;
	for (let g = 1; g <= generations; g++) expected[g] = step(expected[g - 1]);
	const p: Float64Array[] = [], fixedAt: (number | null)[] = [], fixedTo: ('A' | 'a' | null)[] = [];
	for (let l = 0; l < lines; l++) {
		const line = new Float64Array(generations + 1);
		line[0] = p0;
		let fixed: number | null = p0 === 0 || p0 === 1 ? 0 : null;
		for (let g = 1; g <= generations; g++) {
			const after = step(line[g - 1]);
			line[g] = copies ? binomial(rand, copies, after) / copies : after;
			if (fixed === null && (line[g] === 0 || line[g] === 1)) fixed = g;
		}
		p.push(line);
		fixedAt.push(fixed);
		fixedTo.push(fixed === null ? null : line[generations] === 1 ? 'A' : 'a');
	}
	return {config, generations, p, expected, fixedAt, fixedTo};
};

// ---------------------------------------------------------------------- logistic
export type LogisticConfig = {
	/** Starting population. */
	n0: number;
	/** Growth rate r: per unit time (continuous) or per generation (discrete). */
	r: number;
	/** Carrying capacity K. */
	k: number;
	/** End time (continuous) or number of generations (discrete). */
	to: number;
	/** 'continuous' (default): dN/dt = rN(1 - N/K), exact solution. 'discrete': N(t+1) = N(t) + rN(t)(1 - N(t)/K). */
	form?: 'continuous' | 'discrete';
	/** Points along a continuous curve (default 400). A discrete run has one point per generation. */
	steps?: number;
};
export type Series = {t: Float64Array; v: Float64Array};
export type LogisticRun = Series & {config: LogisticConfig; /** Growth rate rN(1 - N/K) at each point. */ rate: Float64Array};
/** Growth rate of a logistic population of size n: r n (1 - n / K). Largest at n = K / 2. */
export const logisticRate = (n: number, r: number, k: number) => r * n * (1 - n / k);
/** Size of a continuous logistic population at time t (the exact solution). */
export const logisticAt = (c: Pick<LogisticConfig, 'n0' | 'r' | 'k'>, t: number) => c.k / (1 + ((c.k - c.n0) / c.n0) * Math.exp(-c.r * t));
export const runLogistic = (config: LogisticConfig): LogisticRun => {
	const {n0, r, k, to} = config;
	if (!(n0 > 0 && k > 0 && to > 0)) throw new Error('runLogistic: n0, k and to must be positive');
	let t: Float64Array, v: Float64Array;
	if (config.form === 'discrete') {
		const gens = Math.round(to);
		t = new Float64Array(gens + 1); v = new Float64Array(gens + 1);
		v[0] = n0;
		for (let g = 1; g <= gens; g++) { t[g] = g; v[g] = Math.max(0, v[g - 1] + logisticRate(v[g - 1], r, k)); }
	} else {
		const steps = config.steps ?? 400;
		t = new Float64Array(steps + 1); v = new Float64Array(steps + 1);
		for (let i = 0; i <= steps; i++) { t[i] = (to * i) / steps; v[i] = logisticAt(config, t[i]); }
	}
	return {config, t, v, rate: v.map(n => logisticRate(n, r, k))};
};

// ------------------------------------------------------------- predator and prey
export type PredatorPreyConfig = {
	prey0: number; predators0: number;
	/** Prey birth rate (a): prey grow at a × prey when no predators are about. */
	preyGrowth: number;
	/** Predation rate (b): prey are eaten at b × prey × predators. */
	predation: number;
	/** Conversion rate (d): predators are born at d × prey × predators. */
	conversion: number;
	/** Predator death rate (g): predators die at g × predators. */
	predatorDeath: number;
	/** End time. */
	to: number;
	/** Fixed time step for the integrator (default to / 4000). */
	dt?: number;
	/** Points stored (default 400). */
	samples?: number;
};
export type PredatorPreyRun = {config: PredatorPreyConfig; t: Float64Array; prey: Float64Array; predators: Float64Array};
/**
 * The quantity Lotka-Volterra keeps constant along every cycle:
 * d·x − g·ln x + b·y − a·ln y (x prey, y predators). Useful as a check.
 */
export const lotkaInvariant = (c: PredatorPreyConfig, prey: number, predators: number) =>
	c.conversion * prey - c.predatorDeath * Math.log(prey) + c.predation * predators - c.preyGrowth * Math.log(predators);
/** Period of small cycles about the balance point: 2π / √(a g). Larger cycles take a little longer. */
export const lotkaSmallPeriod = (c: PredatorPreyConfig) => (2 * Math.PI) / Math.sqrt(c.preyGrowth * c.predatorDeath);
/** The balance point where neither population changes: prey g / d, predators a / b. */
export const lotkaBalance = (c: PredatorPreyConfig) => ({prey: c.predatorDeath / c.conversion, predators: c.preyGrowth / c.predation});
export const runPredatorPrey = (config: PredatorPreyConfig): PredatorPreyRun => {
	const {preyGrowth: a, predation: b, conversion: d, predatorDeath: g, to} = config;
	if (!(config.prey0 > 0 && config.predators0 > 0 && to > 0)) throw new Error('runPredatorPrey: starting sizes and `to` must be positive');
	const samples = config.samples ?? 400, inner = Math.max(1, Math.ceil(to / (config.dt ?? to / 4000) / samples)), h = to / (samples * inner);
	const fx = (x: number, y: number) => a * x - b * x * y, fy = (x: number, y: number) => d * x * y - g * y;
	const t = new Float64Array(samples + 1), prey = new Float64Array(samples + 1), predators = new Float64Array(samples + 1);
	let x = config.prey0, y = config.predators0;
	prey[0] = x; predators[0] = y;
	for (let s = 1; s <= samples; s++) {
		for (let i = 0; i < inner; i++) {
			const k1x = fx(x, y), k1y = fy(x, y);
			const k2x = fx(x + (h / 2) * k1x, y + (h / 2) * k1y), k2y = fy(x + (h / 2) * k1x, y + (h / 2) * k1y);
			const k3x = fx(x + (h / 2) * k2x, y + (h / 2) * k2y), k3y = fy(x + (h / 2) * k2x, y + (h / 2) * k2y);
			const k4x = fx(x + h * k3x, y + h * k3y), k4y = fy(x + h * k3x, y + h * k3y);
			x += (h / 6) * (k1x + 2 * k2x + 2 * k3x + k4x);
			y += (h / 6) * (k1y + 2 * k2y + 2 * k3y + k4y);
		}
		t[s] = (to * s) / samples; prey[s] = x; predators[s] = y;
	}
	return {config, t, prey, predators};
};

// ------------------------------------------------------------------ reading runs
/** Value of a sampled series at time `time`, by straight lines between samples; level outside the range. */
export const valueAt = (t: ArrayLike<number>, v: ArrayLike<number>, time: number) => {
	const n = t.length;
	if (!n) return NaN;
	if (time <= t[0]) return v[0];
	if (time >= t[n - 1]) return v[n - 1];
	let lo = 0, hi = n - 1;
	while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (t[mid] <= time) lo = mid; else hi = mid; }
	const u = (time - t[lo]) / Math.max(1e-12, t[hi] - t[lo]);
	return v[lo] + (v[hi] - v[lo]) * u;
};
/** Generation numbers 0..generations as a time axis for an allele run. */
export const generationAxis = (run: AlleleRun) => Float64Array.from({length: run.generations + 1}, (_, g) => g);
