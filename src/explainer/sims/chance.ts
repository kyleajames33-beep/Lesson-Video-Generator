// Chance: the same random experiment repeated many times, with the exact answer beside it.
// Engine only (no drawing, no React). It covers the cases a probability or genetics
// lesson draws again and again:
//   - dice: roll one or more dice and add them (sample spaces, sums, expected value);
//   - coins: n yes-or-no tries with success chance p, counting the successes (binomial);
//   - weighted: one draw from labelled outcomes with given weights (spinners, lollies in a
//     bag, offspring from a cross such as 3 : 1).
//
// Every trial is drawn once from a seeded generator and stored, so the tally after any
// number of trials is a lookup. The dice on screen, the histogram, the running share and
// the readouts all read the same stored run, so they always agree. The exact probabilities
// are worked out alongside (`theory`), so a lesson can show the tally closing in on them.

export type Experiment =
	/** Roll `dice` dice with `sides` faces (defaults 2 and 6). The outcome is the total. */
	| {kind: 'dice'; dice?: number; sides?: number}
	/** `coins` independent tries, each a success with chance `p` (default 0.5). The outcome is the number of successes. */
	| {kind: 'coins'; coins: number; p?: number}
	/** One draw from labelled outcomes. Weights need not add to 1. */
	| {kind: 'weighted'; outcomes: readonly {label: string; weight: number}[]};

export type ChanceConfig = {seed: number; trials: number; experiment: Experiment};
export type ChanceRun = {
	config: ChanceConfig;
	trials: number;
	/** Every possible outcome, in order: the totals for dice, 0..n for coins, 0..k-1 for weighted. */
	values: number[];
	/** Label for each outcome (the number, or the given label for weighted). */
	labels: string[];
	/** Exact probability of each outcome. */
	theory: number[];
	/** Exact mean and standard deviation of the outcome value. */
	mean: number; sd: number;
	/** Index into `values` of each trial's outcome. */
	outcome: Int32Array;
	/** What each trial showed: `partsPer` numbers per trial (each die's face, each coin as 1 or 0, or the drawn index). */
	parts: Uint8Array; partsPer: number;
	/** tally[v][k]: how many of the first k trials gave outcome v. Length trials + 1. */
	tally: Uint32Array[];
	/** total[k]: sum of the outcome values of the first k trials. */
	total: Float64Array;
};

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
const choose = (n: number, k: number) => { let c = 1; for (let i = 1; i <= k; i++) c = (c * (n - k + i)) / i; return c; };

/** Exact outcomes and probabilities of an experiment, without running it. */
export const exactDistribution = (e: Experiment): {values: number[]; labels: string[]; theory: number[]} => {
	if (e.kind === 'dice') {
		const dice = e.dice ?? 2, sides = e.sides ?? 6;
		let dist = [1]; // dist[i] = chance of total i + (number of dice so far)
		for (let d = 0; d < dice; d++) {
			const next = new Array(dist.length + sides - 1).fill(0);
			for (let i = 0; i < dist.length; i++) for (let s = 0; s < sides; s++) next[i + s] += dist[i] / sides;
			dist = next;
		}
		const values = dist.map((_, i) => i + dice);
		return {values, labels: values.map(String), theory: dist};
	}
	if (e.kind === 'coins') {
		const p = e.p ?? 0.5, values = Array.from({length: e.coins + 1}, (_, k) => k);
		return {values, labels: values.map(String), theory: values.map(k => choose(e.coins, k) * p ** k * (1 - p) ** (e.coins - k))};
	}
	const sum = e.outcomes.reduce((s, o) => s + o.weight, 0);
	return {values: e.outcomes.map((_, i) => i), labels: e.outcomes.map(o => o.label), theory: e.outcomes.map(o => o.weight / sum)};
};

/** Run the experiment `trials` times and store every result. */
export const runTrials = (config: ChanceConfig): ChanceRun => {
	const {experiment: e, trials} = config;
	if (!(trials >= 1)) throw new Error('runTrials: trials must be at least 1.');
	const rand = mulberry(config.seed);
	const {values, labels, theory} = exactDistribution(e);
	const partsPer = e.kind === 'dice' ? e.dice ?? 2 : e.kind === 'coins' ? e.coins : 1;
	const outcome = new Int32Array(trials), parts = new Uint8Array(trials * partsPer);
	const tally = values.map(() => new Uint32Array(trials + 1)), total = new Float64Array(trials + 1);
	for (let k = 0; k < trials; k++) {
		let index = 0;
		if (e.kind === 'dice') {
			const sides = e.sides ?? 6;
			let sum = 0;
			for (let d = 0; d < partsPer; d++) { const face = 1 + Math.floor(rand() * sides); parts[k * partsPer + d] = face; sum += face; }
			index = sum - partsPer;
		} else if (e.kind === 'coins') {
			const p = e.p ?? 0.5;
			for (let c = 0; c < partsPer; c++) { const hit = rand() < p ? 1 : 0; parts[k * partsPer + c] = hit; index += hit; }
		} else {
			let u = rand(), i = 0;
			while (i < theory.length - 1 && u >= theory[i]) { u -= theory[i]; i++; }
			index = i;
			parts[k] = i;
		}
		outcome[k] = index;
		for (let v = 0; v < values.length; v++) tally[v][k + 1] = tally[v][k] + (v === index ? 1 : 0);
		total[k + 1] = total[k] + values[index];
	}
	const mean = values.reduce((s, v, i) => s + v * theory[i], 0);
	const sd = Math.sqrt(values.reduce((s, v, i) => s + (v - mean) ** 2 * theory[i], 0));
	return {config, trials, values, labels, theory, mean, sd, outcome, parts, partsPer, tally, total};
};

const whole = (run: ChanceRun, k: number) => Math.min(run.trials, Math.max(0, Math.floor(k)));
/** How many of the first k trials gave each outcome. */
export const tallyAfter = (run: ChanceRun, k: number): number[] => run.tally.map(t => t[whole(run, k)]);
/** Share of the first k trials that gave outcome number `index` (0 before any trial). */
export const shareAfter = (run: ChanceRun, index: number, k: number) => { const n = whole(run, k); return n ? run.tally[index][n] / n : 0; };
/** Mean outcome value of the first k trials. */
export const meanAfter = (run: ChanceRun, k: number) => { const n = whole(run, k); return n ? run.total[n] / n : 0; };
/** What trial number k (from 1) showed: each die's face, each coin as 1 or 0, or the drawn index. */
export const partsOf = (run: ChanceRun, k: number): number[] => { const i = whole(run, k) - 1; return i < 0 ? [] : Array.from(run.parts.subarray(i * run.partsPer, (i + 1) * run.partsPer)); };

/**
 * An event is a set of outcomes, for example "a total of 7" or "at least 8 heads".
 * Returns its exact probability and its running share after every trial (length trials + 1).
 */
export const eventOf = (run: ChanceRun, includes: (value: number, label: string) => boolean) => {
	const inEvent = run.values.map((v, i) => includes(v, run.labels[i]));
	const probability = run.theory.reduce((s, p, i) => s + (inEvent[i] ? p : 0), 0);
	const share = new Float32Array(run.trials + 1);
	let hits = 0;
	for (let k = 0; k < run.trials; k++) { if (inEvent[run.outcome[k]]) hits++; share[k + 1] = hits / (k + 1); }
	return {probability, share, inEvent};
};

export type TrialPace = {
	/** Scene frame of the first trial. */
	at: number;
	/** The first `slow` trials arrive one at a time, `every` frames apart, so each can be watched (defaults 6 and 24). */
	slow?: number; every?: number;
	/** Scene frame by which every trial has been shown. The rest speed up towards it. */
	until: number;
};
/** Number of trials shown at scene frame f: a few slow ones, then faster and faster. Never decreases. */
export const trialsShown = (run: ChanceRun, f: number, pace: TrialPace) => {
	const slow = Math.min(run.trials, pace.slow ?? 6), every = pace.every ?? 24;
	const local = f - pace.at;
	if (local < 0) return 0;
	const slowEnd = slow * every;
	if (local < slowEnd) return Math.min(slow, Math.floor(local / every) + 1);
	const span = Math.max(1, pace.until - pace.at - slowEnd);
	const u = Math.min(1, (local - slowEnd) / span);
	return Math.min(run.trials, slow + Math.round((run.trials - slow) * u ** 2.4));
};

/** Height of the normal curve with this mean and standard deviation (for laying a bell curve over a tally). */
export const normalDensity = (mean: number, sd: number, x: number) => Math.exp(-0.5 * ((x - mean) / sd) ** 2) / (sd * Math.sqrt(2 * Math.PI));
