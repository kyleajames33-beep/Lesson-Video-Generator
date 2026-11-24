// phys-y12-m5-v03 (Year 12 Physics M5 V03: height, flight time and landing velocity at the launch level).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken (cueFrame
// throws if a phrase is missing), never to a fixed frame, so the measured take below sets every time
// in the video. Every number on screen comes from the shared projectile maths
// (src/explainer/physics/projectile/flight.ts) and field-motion runs built from it, with g = 9.8 m s^-2.
// Measured timing: the recorded take (brief 259), switched from the provisional estimate on 22 November 2026.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v03/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {G, flightT, landT, maxH, peakT, range, runFlight, ux, uy} from '../../physics/projectile/flight';

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v03: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v03: no response hold in ' + id);
	return h;
};

// ---------- the case (site lesson 3 worked example 2): 25 m/s at 50 degrees, level ground ----------
export const U = 25, D = 50, D40 = 40;
export const RUN = runFlight({u: U, deg: D, drop: 0});
export const RUN40 = runFlight({u: U, deg: D40, drop: 0});
export const UX = ux(U, D); // 16.0697
export const UY = uy(U, D); // 19.1511
export const TUP = peakT(U, D); // 1.9542
export const T = flightT(U, D); // 3.9084
export const H = maxH(U, D); // 18.7125
export const R = range(U, D); // 62.8066
export const T40 = flightT(U, D40); // 3.2795
export const H40 = maxH(U, D40); // 13.2
/** Scene 8: the same angle at twice the speed. */
export const U2 = 50;
export const T2 = flightT(U2, D), H2 = maxH(U2, D);
/** Scene 9: a cliff (screen only) to show both shortcuts failing. */
export const CLIFF = 20;
export const TC = landT(U, D, CLIFF);
export const VYC = UY - G * TC;
/** Attempts: A1 14.0 m/s at 45 degrees; A2 19.6 m/s at 30 degrees. */
export const A1 = {u: 14.0, deg: 45}, A2 = {u: 19.6, deg: 30};
export const HEAD = 'What sets the height, the flight time and the landing velocity?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
/** The 40 degree partner path (dashed blue-grey, as in the v04 pilot). */
export const BLUE_GREY = '#566c82';
