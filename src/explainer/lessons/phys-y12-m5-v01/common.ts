// phys-y12-m5-v01 (Year 12 Physics M5 V01: projectile motion as two motions with one clock).
// Lesson lookups and the hook case. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so the measured take below sets
// every time in the video. Every number on screen comes from the shared projectile maths
// (src/explainer/physics/projectile/flight.ts) and field-motion runs built from it, with g = 9.8 m s^-2.
// Measured timing: the recorded take (brief 259), switched from the provisional estimate on 22 November 2026.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v01/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {fallT, runFlight, strobeTimes, type World} from '../../physics/projectile/flight';
import {dropLaunchGeom} from '../../physics/projectile/demonstrator';

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v01: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v01: no response hold in ' + id);
	return h;
};

// ---------- the hook case (design "Numbers used"): bench edge 1.2 m, B at 2.0 m/s, strobe every 0.1 s ----------
export const H = 1.2;
export const UB = 2.0;
export const UFAST = 4.0;
export const DT = 0.1;
/** Fall time from 1.2 m: √(2 × 1.2 / 9.8) = 0.4949 s. */
export const TLAND = fallT(H);
/** Ball B (2.0 m/s sideways) and ball A (dropped) as field-motion runs, launch to landing. */
export const RUN_B = runFlight({u: UB, deg: 0, drop: H});
export const RUN_A = runFlight({u: 0, deg: 0, drop: H});
export const RUN_FAST = runFlight({u: UFAST, deg: 0, drop: H});
/** Strobe instants 0.1 to 0.4 s. */
export const FLASHES = strobeTimes(DT, TLAND);

// ---------- one stage geometry for scenes 1 to 10 and 16 (author note e: 500 px per metre, equal scales) ----------
/** Ball size on screen: set by the demonstrator plate (60 native px balls), drawn at uniform scale 0.567. */
export const BALL_D = 34;
/** Ball B's centre at launch (its seat on the demonstrator ledge). */
export const W: World = {x0: 640, y0: 300, ppm: 500};
/** The demonstrator's geometry on screen: ball A's seat on the pin, the plate's bench stub. */
export const DL = dropLaunchGeom(W.x0, W.y0, BALL_D);
export const A_X = DL.aX;
/** The height scale (and the blue edge shadow) stands at this x, beside the drop. */
export const EDGE_X = Math.round(DL.aX - 60);
/** Top of the height scale: the bottom of the balls (1.2 m above the floor). */
export const BENCH_TOP = W.y0 + BALL_D / 2;
export const FLOOR_Y = W.y0 + H * W.ppm + BALL_D / 2;
/** Velocity arrows: 40 px per m s^-1 (author note e). */
export const VK = 40;
/** Slow-motion factor of the replays (one eighth speed). */
export const SLOW = 8;
