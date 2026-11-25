// phys-y12-m6-v04 (Year 12 Physics M6 V04: magnetic force on a moving charge, F = qvB sin θ, its direction).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v04/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {runMotion} from '../../sims/field-motion';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v04: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v04: no response hold in ' + id);
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

// ---------------------------------------------------------------- constants (HSC data sheet values)
export const QE = 1.602e-19;
const RAD = Math.PI / 180;
/** F = qvB sin θ. */
export const force = (q: number, v: number, B: number, deg: number) => q * v * B * Math.sin(deg * RAD);
/** The worked example: an electron at 3.0 × 10⁶ m s⁻¹ in 0.050 T. */
export const WE = (() => {
	const v = 3.0e6, B = 0.05, F90 = force(QE, v, B, 90);
	return {v, B, F90, F30: force(QE, v, B, 30), F60: force(QE, v, B, 60), ratio: Math.sin(60 * RAD) / Math.sin(30 * RAD)};
})();
/** Scene 8's live dial: v⊥ and F at angle θ (degrees). */
export const dialAt = (deg: number) => ({s: Math.sin(deg * RAD), vPerp: WE.v * Math.sin(deg * RAD), F: force(QE, WE.v, WE.B, deg)});
/** Attempt 1: a proton at 5.0 × 10⁵ m s⁻¹, 30° to 0.40 T; the cosine slip. */
export const A1 = {v: 5.0e5, B: 0.4, F: force(QE, 5.0e5, 0.4, 30), cosSlip: QE * 5.0e5 * 0.4 * Math.cos(30 * RAD)};

// ---------------------------------------------------------------- field motion runs (screen units: px and frames)
/** A positive charge in a field into the page, starting at the origin moving +x: it turns anticlockwise (y up). */
export const turnRun = (R: number, speed: number, turns: number) => runMotion({field: {kind: 'magnetic', qOverM: 1, b: -speed / R}, start: {x: 0, y: 0, vx: speed, vy: 0}, duration: (2 * Math.PI * R * turns) / speed, steps: 1600});

export const HEAD = 'When does a magnetic field exert a force on a moving charge?';
export const HEAD_NEXT = 'Why does a perpendicular magnetic field bend a path without increasing speed?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
