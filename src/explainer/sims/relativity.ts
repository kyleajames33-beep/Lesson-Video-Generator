// A small special-relativity kit: the Lorentz factor, time dilation, length contraction,
// momentum and energy, and a light clock seen from the frame it moves through. Plain
// TypeScript, no React. Speeds are given as beta = v / c (0.6 means 0.6c).
import {LIGHT_C} from './blackbody';

const checked = (beta: number) => { if (!(Math.abs(beta) < 1)) throw new RangeError('relativity: a speed must be below c (beta between -1 and 1)'); return beta; };
/** The Lorentz factor, gamma = 1 / sqrt(1 - v^2/c^2). */
export const gamma = (beta: number) => 1 / Math.sqrt(1 - checked(beta) ** 2);
/** The speed (as a fraction of c) that gives this gamma. */
export const betaFromGamma = (g: number) => Math.sqrt(1 - 1 / (g * g));
/** Time dilation: a time `proper` on the moving clock is this long in the frame it moves through, t = gamma x t0. */
export const dilatedTime = (proper: number, beta: number) => gamma(beta) * proper;
/** Length contraction: an object of rest length `proper` is this long, along its motion, in the frame it moves through, l = l0 / gamma. */
export const contractedLength = (proper: number, beta: number) => proper / gamma(beta);
/** Relativistic momentum in kg m/s: p = gamma m0 v. */
export const relativisticMomentum = (restMass: number, beta: number) => gamma(beta) * restMass * beta * LIGHT_C;
/** Rest energy m c^2, kinetic energy (gamma - 1) m c^2 and total energy gamma m c^2, in joules. */
export const restEnergy = (restMass: number) => restMass * LIGHT_C * LIGHT_C;
export const relativisticKineticEnergy = (restMass: number, beta: number) => (gamma(beta) - 1) * restEnergy(restMass);
export const totalEnergy = (restMass: number, beta: number) => gamma(beta) * restEnergy(restMass);
/** The speed (fraction of c) of a body with this momentum: it creeps towards c but never reaches it. */
export const betaFromMomentum = (momentum: number, restMass: number) => { const q = momentum / (restMass * LIGHT_C); return q / Math.sqrt(1 + q * q); };
/** Speeds do not simply add: something moving at `u` (fraction of c) inside a frame that itself moves at `v` moves at (u + v) / (1 + u v). */
export const addVelocities = (u: number, v: number) => (checked(u) + checked(v)) / (1 + u * v);
/** Mass lost when this much energy leaves a system: delta m = E / c^2. */
export const massFromEnergy = (joules: number) => joules / (LIGHT_C * LIGHT_C);

/** Gamma against speed, for a graph: `points` samples from 0 up to `maxBeta` (default 0.995). */
export const gammaCurve = (points = 200, maxBeta = 0.995) => {
	const beta = new Float64Array(points), g = new Float64Array(points);
	for (let i = 0; i < points; i++) { beta[i] = (maxBeta * i) / (points - 1); g[i] = gamma(beta[i]); }
	return {beta, gamma: g};
};

// ------------------------------------------------------------------ light clock
/** A pulse of light bouncing between two mirrors `height` metres apart, in a clock that moves sideways at `beta`. */
export type LightClock = {height: number; beta: number};
export type LightClockState = {
	/** How far the clock has moved sideways, and how high the pulse is above the lower mirror (m). */
	x: number; y: number;
	/** Whole ticks (there-and-back trips) the moving clock has completed, and how many a clock at rest beside the observer has completed. */
	ticks: number; restTicks: number;
	/** The pulse's path so far in the observer's frame, as corner points (m): a zigzag. */
	path: [number, number][];
};
/** Tick time of the clock in its own frame (2d / c), and as timed from the frame it moves through (gamma times longer). */
export const lightClockTicks = (clock: LightClock) => { const rest = (2 * clock.height) / LIGHT_C; return {rest, moving: gamma(clock.beta) * rest, gamma: gamma(clock.beta)}; };
/**
 * The clock at time t (seconds, measured in the frame the clock moves through). The pulse
 * always travels at c, so on its longer slanted path it takes longer between the mirrors.
 */
export const lightClockAt = (clock: LightClock, t: number): LightClockState => {
	const {rest, moving} = lightClockTicks(clock), time = Math.max(0, t), half = moving / 2, v = clock.beta * LIGHT_C;
	const done = Math.floor(time / half), u = time / half - done, up = done % 2 === 0;
	const path: [number, number][] = [];
	for (let k = 0; k <= done; k++) path.push([v * half * k, k % 2 === 0 ? 0 : clock.height]);
	const x = v * time, y = clock.height * (up ? u : 1 - u);
	path.push([x, y]);
	return {x, y, ticks: Math.floor(time / moving + 1e-9), restTicks: Math.floor(time / rest + 1e-9), path};
};
