// phys-y12-m5-v07 (Year 12 Physics M5 V07: two angles, one target).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken in the
// measured take (cueFrame throws if a phrase is missing), never to a fixed frame. Every number on screen comes
// from the shared projectile maths (src/explainer/physics/projectile/flight.ts) and field-motion runs built
// from it, g = 9.8 m s^-2.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v07/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {G, pos, runFlight, ux, uy} from '../../physics/projectile/flight';

export const PROVISIONAL = false;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v07: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v07: no response hold in ' + id);
	return h;
};

// ---------- the case (site lesson 4 Q13): 30 m/s to a target 72 m away on level ground ----------
const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;
export const U = 30, R0 = 72;
export const RMAX = (U * U) / G;
/** The two angles (low, high) for a level-ground range R at speed u; null when Rg ÷ u² > 1. */
export const angles = (R: number, u = U): [number, number] | null => {
	const s = (R * G) / (u * u);
	if (s > 1 + 1e-12) return null;
	const low = deg(Math.asin(Math.min(1, s))) / 2;
	return [low, 90 - low];
};
export const [LOW, HIGH] = angles(R0) as [number, number];
export const flightT = (deg_: number, u = U) => (2 * u * Math.sin(rad(deg_))) / G;
export const T_LOW = flightT(LOW), T_HIGH = flightT(HIGH);
export const UX_LOW = ux(U, LOW), UY_LOW = uy(U, LOW);
export const PEAK_LOW = UY_LOW ** 2 / (2 * G), PEAK_HIGH = UX_LOW ** 2 / (2 * G);
export const RUN_LOW = runFlight({u: U, deg: LOW, drop: 0});
export const RUN_HIGH = runFlight({u: U, deg: HIGH, drop: 0});
export {pos};
/** Worked example (site lesson 3 WE1): 45 m at 38 degrees. */
export const WE1 = {R: 45, deg: 38, u: Math.sqrt((45 * G) / Math.sin(rad(76)))};
/** Attempts. A1: 14.0 m/s, 10.0 m -> 15 and 75 degrees. A2: 20.0 m -> 14.0 m/s at 45 degrees. */
export const A1 = {u: 14, R: 10, ang: angles(10, 14) as [number, number]};
export const A2 = {R: 20, u: Math.sqrt(20 * G)};

export const HEAD = 'Why can two launch angles reach the same target?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
