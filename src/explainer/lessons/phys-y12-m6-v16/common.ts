// phys-y12-m6-v16 (Year 12 Physics M6 V16: the split-ring DC motor, how does a split-ring motor keep turning?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration did NOT match the current design: the prepared lesson.json and the brief 259 source audit
// predate the 24 November coherence fix (scene 4 lacks "Cos is close, so the turning part of each force, opposite
// theta, takes sine."). The provisional file was therefore made from the CURRENT design narration (6,527 characters):
// the unchanged make-provisional script run on a scratch copy of the audit whose scene texts were replaced by the
// design's (only `torque-formula` differed). The brief 259 audit was not edited.
// The torque values are exact arithmetic (tau = nIAB sin theta); the turning coil (rocking without a split ring,
// spinning with one) is the kit's coil model with inertia and friction (physics/electromagnetism/motor.tsx).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v16/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v16: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v16: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

// ---------------------------------------------------------------- torque arithmetic
const rad = (d: number) => (d * Math.PI) / 180;
/** tau = nIAB sin theta (theta between the area normal and B). */
export const torque = (n: number, I: number, A: number, B: number, thetaDeg: number) => n * I * A * B * Math.sin(rad(thetaDeg));
/** Worked example (site lesson 09): 50 turns, 4.0 cm x 3.0 cm, 3.0 A, 0.20 T; plane at 30 degrees to B. */
export const WE = (() => {
	const n = 50, l = 0.040, w = 0.030, I = 3.0, B = 0.20, plane = 30;
	const A = l * w, theta = 90 - plane;
	return {n, l, w, I, B, A, plane, theta, max: torque(n, I, A, B, 90), at: torque(n, I, A, B, theta), side: n * I * l * B, r: w / 2, slip: n * I * (4.0 * 3.0) * B};
})();
/** Attempt 1: 120 turns, 4.0 cm x 2.5 cm, 1.5 A, 0.25 T; plane at 60 degrees to B. */
export const A1 = (() => {
	const n = 120, I = 1.5, B = 0.25, A = 0.040 * 0.025, plane = 60, theta = 90 - plane;
	return {n, I, B, A, plane, theta, max: torque(n, I, A, B, 90), at: torque(n, I, A, B, theta), slip: torque(n, I, A, B, plane)};
})();
/** Scene 5 angle drag: theta 90, 60, 30, 0 degrees; sin theta (= tau / tau_max). */
export const DRAG = [90, 60, 30, 0].map(t => ({t, s: Math.sin(rad(t))}));

export const HEAD = 'How does a split-ring motor keep turning?';
export const HEAD_NEXT = 'Why does a spinning DC motor draw less current?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
