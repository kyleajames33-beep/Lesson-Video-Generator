// phys-y12-m5-v18 (Year 12 Physics M5 V18: circular orbits, v = sqrt(GM/r) and r^3/T^2 = GM/4pi^2).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame. The word times are the measured take.
// Keyframe lists go through `mono`, so sequences can never run backwards.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v18/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {runMotion} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';

/** False: the word times are the measured take. */
export const PROVISIONAL = false;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v18: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v18: no response hold in ' + id);
	return h;
};
/** The response hold if the measured take has one (the hook's 3 s prediction hold is missing from this take). */
export const holdIf = (id: string) => sc(id).responseHold;
/** Keyframes forced to strictly increasing frames (each at least `gap` after the last). */
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

// ---------------------------------------------------------------- constants (HSC data sheet values)
export const Gc = 6.67e-11, ME = 6.0e24, RE = 6.371e6;
export const GM = Gc * ME;
export const vOrb = (r: number) => Math.sqrt(GM / r);
export const gAt = (r: number) => GM / (r * r);
export const period = (r: number) => (2 * Math.PI * r) / vOrb(r);
export const K = GM / (4 * Math.PI * Math.PI);
export const DAY = 86400;

/** Scene 2: the first second's fall and the curve over 8 km; the surface-level circular speed. */
export const FALL = {y1: 0.5 * 9.8 * 1 * 1, d: 8000, drop: 8000 ** 2 / (2 * RE), vSurf: vOrb(RE)};

/** Newton's mountain: launch height 1000 km (not to scale), horizontal launches on the field motion engine. */
export const R0 = RE + 1.0e6;
export const V_CIRC0 = vOrb(R0);
const mountainRun = (v: number, circle = false): MotionPath => runMotion({
	field: {kind: 'central', gm: GM},
	start: {x: 0, y: R0, vx: v, vy: 0},
	duration: circle ? period(R0) * 1.001 : 4000,
	steps: circle ? 1200 : 1600,
	stopWhen: circle ? undefined : s => Math.hypot(s.x, s.y) < RE,
});
/** The landing angle (rad, measured round Earth from below the launch point) and distance along the surface. */
const landing = (p: MotionPath) => {
	// Interpolate between the last step above the surface and the first below it.
	const a = p.n - 1, rA = Math.hypot(p.x[a], p.y[a]), rB = Math.hypot(p.x[p.n], p.y[p.n]);
	const u = rA > rB ? (rA - RE) / (rA - rB) : 1;
	const x = p.x[a] + u * (p.x[p.n] - p.x[a]), y = p.y[a] + u * (p.y[p.n] - p.y[a]);
	const ang = Math.atan2(x, y);
	return {ang, km: (RE * ang) / 1000};
};
export const LAUNCHES = [3000, 5000, 6500].map(v => {
	const path = mountainRun(v);
	return {v, path, ...landing(path)};
});
export const CIRCLE0 = mountainRun(V_CIRC0, true);
/** Round a distance to two significant figures for "about ... km". */
export const about = (km: number) => {
	const p = 10 ** (Math.floor(Math.log10(km)) - 1);
	return Math.round(km / p) * p;
};

/** 400 km: the worked speed and period (the lap clock is the run's own period). */
export const ISS = (() => {
	const h = 4.0e5, r = RE + h, v = vOrb(r), T = (2 * Math.PI * r) / v;
	return {h, r, gmr: GM / r, v, T, min: T / 60, perDay: DAY / T, g: gAt(r), k: r ** 3 / T ** 2};
})();
export const ISS_RUN = runMotion({field: {kind: 'central', gm: GM}, start: {x: ISS.r, y: 0, vx: 0, vy: -ISS.v}, duration: ISS.T * 1.001, steps: 1200});
/** Scene 7: the radius slider stops (m) and the four-times orbit. */
export const SLIDER = [ISS.r, 1.0e7, 1.5e7, 2.0e7, 4 * ISS.r].map(r => ({r, v: vOrb(r), g: gAt(r)}));
export const FOUR = {r: 4 * ISS.r, v: vOrb(4 * ISS.r), g: gAt(4 * ISS.r)};
/** The Moon (NASA Moon Fact Sheet): semimajor axis 384 400 km, sidereal period 27.3217 d. */
export const MOON = (() => {
	const r = 3.844e8, Td = 27.3217, T = Td * DAY;
	return {r, Td, T, k: r ** 3 / T ** 2, v: (2 * Math.PI * r) / T, pct: ((r ** 3 / T ** 2) / K - 1) * 100};
})();
/** Attempt 1: a space telescope at 547 km. */
export const A1 = (() => {
	const h = 5.47e5, r = RE + h, v = vOrb(r), T = (2 * Math.PI * r) / v;
	return {h, r, v, T, min: T / 60};
})();
/** Attempt 2: four times the radius: speed / 2, period x 8. */
export const A2 = {vRatio: 1 / Math.sqrt(4), tRatio: 4 ** 1.5};
/** Geostationary radius for the handoff circle (T = 24 h, sidereal day not taught here). */
export const GEO_R = Math.cbrt(K * DAY * DAY);

export const HEAD = 'How does gravity maintain a circular orbit?';
export const HEAD_V17 = 'How does gravity vary with mass and distance from a spherical body?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
