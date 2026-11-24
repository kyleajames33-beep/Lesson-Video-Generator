// phys-y12-m5-v05 (Year 12 Physics M5 V05: landing below the launch level).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken (cueFrame
// throws if a phrase is missing), never to a fixed frame, so the measured take below sets every time
// in the video. Every number on screen comes from the shared projectile maths
// (src/explainer/physics/projectile/flight.ts and height.ts) and field-motion runs built from it, g = 9.8 m s^-2.
// Measured timing: the recorded take (brief 259), switched from the provisional estimate on 22 November 2026.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v05/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {flightT, range, runFlight, ux, uy} from '../../physics/projectile/flight';
import {belowT, bestAngle, landRoots, rangeFrom} from '../../physics/projectile/height';

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v05: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v05: no response hold in ' + id);
	return h;
};

// ---------- the case (site lesson 2 worked example 3): 20 m/s from a 30 m cliff at 30, 45 and 60 degrees ----------
export const U = 20, HC = 30;
export const ANGLES = [30, 45, 60] as const;
export type Ang = (typeof ANGLES)[number];
export const CASE = Object.fromEntries(ANGLES.map(d => {
	const [t, tNeg] = landRoots(U, d, HC);
	return [d, {deg: d, ux: ux(U, d), uy: uy(U, d), t, tNeg, R: rangeFrom(U, d, HC), below: belowT(U, d, HC), T0: flightT(U, d), R0: range(U, d), run: runFlight({u: U, deg: d, drop: HC})}];
})) as Record<Ang, {deg: number; ux: number; uy: number; t: number; tNeg: number; R: number; below: number; T0: number; R0: number; run: ReturnType<typeof runFlight>}>;
export const BEST = bestAngle(U, HC);
/** Attempt cases: A1 horizontal 6.0 m/s from 5.0 m; A2 10.0 m/s at 30 degrees from 5.0 m. */
export const A1 = {u: 6.0, deg: 0, drop: 5.0}, A2 = {u: 10.0, deg: 30, drop: 5.0};
export const HEAD = 'Landing below the launch level: where does it land?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
/** Path colours as in last time's lesson: 30 degrees orange, 45 green-grey, 60 dashed blue-grey. */
export const PATH = {
	30: {stroke: '#d0761c', ink: '#9c5a00', dash: undefined as string | undefined},
	45: {stroke: '#6a8a70', ink: '#4f6e57', dash: undefined as string | undefined},
	60: {stroke: '#566c82', ink: '#566c82', dash: '16 11' as string | undefined},
} as const;
