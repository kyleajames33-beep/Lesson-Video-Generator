// phys-y12-m5-v02 (Year 12 Physics M5 V02: how launch angle sets the two initial velocity components).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken (cueFrame
// throws if a phrase is missing), never to a fixed frame, so the measured take below sets every time
// in the video. Every number on screen comes from the shared projectile maths
// (src/explainer/physics/projectile/flight.ts) and field-motion runs built from it, with g = 9.8 m s^-2.
// Measured timing: the recorded take (brief 259), switched from the provisional estimate on 22 November 2026.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v02/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {peakT, runFlight} from '../../physics/projectile/flight';

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v02: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v02: no response hold in ' + id);
	return h;
};

// ---------- the cases (design "Numbers used") ----------
/** Worked example 1 (site): 20 m/s at 30 degrees. */
export const U1 = 20, D1 = 30;
/** Worked example 2 (site): 25 m/s at 40 degrees above the horizontal; the trap and handoff: 25 m/s at 50 degrees. */
export const U2 = 25, D2 = 40, D3 = 50;
export const RUN_1 = runFlight({u: U1, deg: D1, drop: 0});
export const RUN_2 = runFlight({u: U2, deg: D2, drop: 0});
export const RUN_3 = runFlight({u: U2, deg: D3, drop: 0});
export const PEAK_1 = peakT(U1, D1);
export const PEAK_2 = peakT(U2, D2);
export const PEAK_3 = peakT(U2, D3);
export const HEAD = 'How does launch angle set the two initial velocity components?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
