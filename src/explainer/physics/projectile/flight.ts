// Projectile maths shared by the Module 5 projectile lessons (course-neutral: no lesson wording here).
// Idealised model: uniform g, no air resistance, +x in the launch direction, +y up, origin at the launch
// point. Every on-screen number in a lesson that uses this kit is computed here (or read from a field
// motion run built here), so the drawing, the clocks and the readouts cannot disagree.
// Added 21 November 2026 (generalised from the phys-y12-m5-v04 pilot's common.ts, which stays unchanged).
import {runMotion, stateAt, type MotionPath, type MotionState} from '../../sims/field-motion';

export const G = 9.8;
export const FPS = 30;

const rad = (deg: number) => (deg * Math.PI) / 180;
/** Horizontal launch component u cos θ. */
export const ux = (u: number, deg: number) => u * Math.cos(rad(deg));
/** Vertical launch component u sin θ (up positive). */
export const uy = (u: number, deg: number) => u * Math.sin(rad(deg));
/** Time of flight back to the launch level: T = 2u sin θ / g. */
export const flightT = (u: number, deg: number, g = G) => (2 * uy(u, deg)) / g;
/** Level-ground range: R = u² sin 2θ / g. */
export const range = (u: number, deg: number, g = G) => (u * u * Math.sin(rad(2 * deg))) / g;
/** Maximum height above the launch level: H = u² sin²θ / 2g. */
export const maxH = (u: number, deg: number, g = G) => uy(u, deg) ** 2 / (2 * g);
/** Time to the top of the flight: u sin θ / g. */
export const peakT = (u: number, deg: number, g = G) => uy(u, deg) / g;
/** Position (m) after t seconds, relative to the launch point (y up). */
export const pos = (u: number, deg: number, t: number, g = G): [number, number] => [ux(u, deg) * t, uy(u, deg) * t - 0.5 * g * t * t];
/** Velocity (m s^-1) after t seconds: [v_x, v_y], up positive. */
export const vel = (u: number, deg: number, t: number, g = G): [number, number] => [ux(u, deg), uy(u, deg) - g * t];
/**
 * Time to reach `drop` metres below the launch level (drop >= 0; 0 gives the level-ground flight time).
 * Positive root of s_y = u_y t − ½ g t² = −drop.
 */
export const landT = (u: number, deg: number, drop: number, g = G) => {
	const v = uy(u, deg);
	return (v + Math.sqrt(v * v + 2 * g * drop)) / g;
};
/** Fall time from rest (or a horizontal launch) through height h: t = √(2h / g). */
export const fallT = (h: number, g = G) => Math.sqrt((2 * h) / g);
/** Drop below the straight launch line after t seconds: ½ g t² (the parabola's bend). */
export const dropBelowLine = (t: number, g = G) => 0.5 * g * t * t;
/** Strobe instants k·dt (k = 1, 2, ...) up to and including T. */
export const strobeTimes = (dt: number, T: number, first = 1) => {
	const out: number[] = [];
	for (let k = first; k * dt <= T + 1e-9; k++) out.push(+(k * dt).toFixed(10));
	return out;
};

/** A launch: speed u (m s^-1), angle θ above the horizontal (degrees), landing `drop` metres below the launch level. */
export type Launch = {u: number; deg: number; drop: number; g?: number};
/**
 * The flight as a field-motion run (uniform field, ax = 0, ay = −g), from launch to landing exactly.
 * For constant acceleration fourth-order Runge-Kutta is exact, so the run agrees with pos() and vel().
 */
export const runFlight = (l: Launch, steps = 400): MotionPath => {
	const g = l.g ?? G;
	return runMotion({field: {kind: 'uniform', ax: 0, ay: -g}, start: {x: 0, y: 0, vx: ux(l.u, l.deg), vy: uy(l.u, l.deg)}, duration: landT(l.u, l.deg, l.drop, g), steps});
};
/** State of a flight at time t (clamped to launch and landing). */
export const flightAt = (path: MotionPath, t: number): MotionState => stateAt(path, t);

/**
 * Physical flight clock (s) for a flight that starts at scene frame `at`, played `slow` times slower than
 * real time (1 = real time, 8 = one eighth speed), held at 0 before and at T after.
 */
export const clockAt = (f: number, at: number, T: number, slow = 1, fps = FPS) => Math.max(0, Math.min(T, (f - at) / fps / slow));
/** Scene frames a flight of T seconds takes at a given slow-motion factor. */
export const playFrames = (T: number, slow = 1, fps = FPS) => Math.ceil(T * slow * fps);

/** Equal-scale mapping from metres (launch point at the origin, y up) to frame pixels. */
export type World = {x0: number; y0: number; ppm: number};
export const sx = (w: World, x: number) => w.x0 + x * w.ppm;
export const sy = (w: World, y: number) => w.y0 - y * w.ppm;

const MINUS = '−';
/** Fixed decimals with a true minus sign and no "−0.00". */
export const fx = (v: number, d = 1) => {
	const r = Math.abs(v) < 0.5 * 10 ** -d ? 0 : v;
	return (r < 0 ? MINUS : '') + Math.abs(r).toFixed(d);
};
/** Significant figures (for answers stated to the data's precision), true minus sign. */
export const sf = (v: number, n = 2) => {
	if (v === 0) return '0';
	const d = Math.max(0, n - 1 - Math.floor(Math.log10(Math.abs(v))));
	return fx(v, d);
};
