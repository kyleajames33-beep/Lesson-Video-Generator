// Lesson lookups and projectile physics for phys-y12-m5-v04 (Revision 2, measured narration).
// Every change is keyed to the frame at which its cue word is spoken (cueFrame throws if a phrase is
// missing). Every number on screen is computed here from g = 9.8 m s^-2, so flights, clocks and
// readouts can never disagree.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v04/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v04: no measured scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v04: no response hold in ' + id);
	return h;
};

// ---------- physics (level ground, uniform g, no air resistance) ----------
export const G = 9.8;
export const FPS = 30;
const rad = (deg: number) => (deg * Math.PI) / 180;
export const ux = (u: number, deg: number) => u * Math.cos(rad(deg));
export const uy = (u: number, deg: number) => u * Math.sin(rad(deg));
/** Time of flight to the launch level: T = 2u sin θ / g. */
export const flightT = (u: number, deg: number) => (2 * uy(u, deg)) / G;
/** Level-ground range: R = u² sin 2θ / g. */
export const range = (u: number, deg: number) => (u * u * Math.sin(rad(2 * deg))) / G;
/** Maximum height above the launch level: H = u² sin²θ / 2g. */
export const maxH = (u: number, deg: number) => (uy(u, deg) ** 2) / (2 * G);
/** Position (m) after t seconds, relative to the launch point (y up). */
export const pos = (u: number, deg: number, t: number): [number, number] => [ux(u, deg) * t, uy(u, deg) * t - 0.5 * G * t * t];
/** Flight clock (s) for a ball launched at frame `at`, played at one real-time rate, stopping on landing. */
export const clockAt = (f: number, at: number, T: number) => Math.max(0, Math.min(T, (f - at) / FPS));
/** Time to fall to `drop` metres below the launch level (cliff case). */
export const timeToDrop = (u: number, deg: number, drop: number) => {
	const vy = uy(u, deg);
	return (vy + Math.sqrt(vy * vy + 2 * G * drop)) / G;
};

/** Fixed decimals (no "-0.0"). */
export const fx = (v: number, d = 1) => (Math.abs(v) < 0.5 * 10 ** -d ? 0 : v).toFixed(d);
