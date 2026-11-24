// phys-y12-m5-v06 (Year 12 Physics M5 V06: clearing a wall).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken in the
// measured take (cueFrame throws if a phrase is missing), never to a fixed frame. Every number on screen comes
// from the shared projectile maths (src/explainer/physics/projectile/flight.ts) and field-motion runs built
// from it, g = 9.8 m s^-2.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v06/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {G, pos, runFlight, ux, uy} from '../../physics/projectile/flight';

export const PROVISIONAL = false;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v06: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v06: no response hold in ' + id);
	return h;
};

// ---------- the case (site lesson 3 worked example 3): 18 m/s at 35 degrees from a 15 m cliff; wall 25 m out, 8 m tall ----------
export const U = 18, DEG = 35, HC = 15, XW = 25, HW = 8;
/** Values at the wall for a launch at `deg` (the scene 8 slider reads these every frame). */
export const atWall = (deg: number) => {
	const t = XW / ux(U, deg);
	const rise = uy(U, deg) * t, drop = 0.5 * G * t * t;
	const sy = rise - drop;
	return {deg, t, rise, drop, sy, height: HC + sy, clear: HC + sy - HW, vy: uy(U, deg) - G * t};
};
export const C35 = {ux: ux(U, DEG), uy: uy(U, DEG), ...atWall(DEG)};
export const C0 = atWall(0);
/** Flight times to the sea (15 m below launch). */
const seaT = (deg: number) => {
	const v = uy(U, deg);
	return (v + Math.sqrt(v * v + 2 * G * HC)) / G;
};
export const T35 = seaT(DEG);
export const RUN35 = runFlight({u: U, deg: DEG, drop: HC});
/** The sideways flight runs only to the wall face (it stops there). */
export const RUN0 = runFlight({u: U, deg: 0, drop: HC});
export const PEAK_T = uy(U, DEG) / G;
export const PEAK = pos(U, DEG, PEAK_T);
/** Attempt cases. A1: 20.0 m/s at 30 degrees from a 2.0 m platform; wall 3.0 m high, 20.0 m away. A2: datum only. */
export const A1 = (() => {
	const u = 20, deg = 30, x = 20, hp = 2, hw = 3;
	const t = x / ux(u, deg);
	const rise = uy(u, deg) * t, drop = 0.5 * G * t * t, sy = rise - drop;
	return {u, deg, x, hp, hw, ux: ux(u, deg), uy: uy(u, deg), t, rise, drop, sy, height: hp + sy, clear: hp + sy - hw};
})();
export const A2 = {h: 12, sy: -2.6, hw: 9, height: 12 - 2.6, clear: 12 - 2.6 - 9};
/** Handoff: 30 m/s to a target 72 m away on level ground; the two angles (not shown on screen). */
export const HO = (() => {
	const u = 30, R = 72;
	const s2 = (R * G) / (u * u);
	const low = (Math.asin(s2) * 180) / Math.PI / 2;
	return {u, R, low, high: 90 - low};
})();

export const HEAD = 'Will a projectile clear a wall at a known horizontal position?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
/** Path colours: the 35 degree launch orange; the sideways launch dashed orange. */
export const PATH35 = {stroke: '#d0761c', ink: '#9c5a00'};
