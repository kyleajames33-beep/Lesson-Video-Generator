// phys-y12-m5-v17 (Year 12 Physics M5 V17: Newton's law of universal gravitation and field strength).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame. The word times are the measured take.
// Keyframe lists go through `mono`, so sequences can never run backwards.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v17/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** False: the word times are the measured take. */
export const PROVISIONAL = false;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v17: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v17: no response hold in ' + id);
	return h;
};
/** Keyframes forced to strictly increasing frames (each at least `gap` after the last). */
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

// ---------------------------------------------------------------- constants (HSC data sheet values)
/** G (N m^2 kg^-2), Earth's mass (kg) and radius (m), as the design states them. */
export const Gc = 6.67e-11, ME = 6.0e24, RE = 6.371e6;
export const GM = Gc * ME;
export const gAt = (r: number) => GM / (r * r);

/** Hook: two 70 kg steel spheres, centres 1.0 m apart (steel 7850 kg m^-3). */
export const SPH = (() => {
	const m = 70, d = 1.0, F = (Gc * m * m) / (d * d);
	const rad = Math.cbrt(((m / 7850) * 3) / (4 * Math.PI));
	return {m, d, F, rad, gap: d - 2 * rad, sand: F / 9.8};
})();
/** Earth on one sphere, and the two ratios that settle the puzzle. */
export const HOOK = (() => {
	const F = (GM * SPH.m) / (RE * RE);
	const mass = ME / SPH.m, dist2 = (RE / SPH.d) ** 2;
	return {F, ratio: F / SPH.F, mass, dist2, net: mass / dist2, distRatio: RE / SPH.d};
})();
/** Worked example 1: g at Earth's surface (and the unsquared slip). */
export const SURF = {r: RE, r2: RE * RE, g: gAt(RE), noSq: GM / RE};
/** Worked example 2: 400 km up (and the altitude-for-r slip). */
export const ALT = (() => {
	const h = 4.0e5, r = RE + h, g = gAt(r);
	return {h, r, g, pct: g / SURF.g, wrong: GM / (h * h)};
})();
/** The probe: altitudes (m) and g at each. */
export const PROBE = [0, 4.0e5, 1.0e6, 3.0e6, RE, 2 * RE].map(h => ({h, r: RE + h, g: gAt(RE + h)}));
export const G2R = gAt(2 * RE), G3R = gAt(3 * RE);
/** Attempt 1: Mars. */
export const A1 = (() => {
	const M = 6.42e23, r = 3.4e6, top = Gc * M, r2 = r * r, g = top / r2;
	return {M, r, top, r2, g, pct: g / 9.8, unsq: top / r};
})();
/** Attempt 2: a quarter of g needs r = 2R, so h = R. */
export const A2 = {h: 2 * RE - RE, wrong: 2 * RE};

/** True-scale altitude in pixels for an Earth drawn `Rpx` px in radius. */
export const altPx = (h: number, Rpx: number) => (Rpx * h) / RE;

export const HEAD = 'How does gravity vary with mass and distance from a spherical body?';
export const HEAD_V16 = 'How can measurements test the circular-force relationship?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
