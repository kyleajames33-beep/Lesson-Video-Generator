// phys-y12-m6-v05 (Year 12 Physics M6 V05: charged particles in circles, zero work, r = mv/(qB), T = 2πm/(qB)).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v05/lesson.json';
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
	if (!s) throw new Error('phys-y12-m6-v05: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v05: no response hold in ' + id);
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
export const QE = 1.602e-19, ME = 9.109e-31, MP = 1.673e-27;
/** r = mv/(qB) and T = 2πm/(qB). */
export const radius = (m: number, v: number, B: number, q = QE) => (m * v) / (q * B);
export const period = (m: number, B: number, q = QE) => (2 * Math.PI * m) / (q * B);
/** The worked example: an electron and a proton at 4.0 × 10⁶ m s⁻¹ in 0.020 T. */
export const WE = (() => {
	const v = 4.0e6, B = 0.02, re = radius(ME, v, B);
	return {v, B, re, rp: radius(MP, v, B), ratio: MP / ME, Te: period(ME, B), Tp: period(MP, B), a: (QE * v * B) / ME, v2r: v ** 2 / re};
})();
/** Scene 4's and scene 7's sliders: a proton at speed v in field B (r in m, T in s). */
export const slider = (v: number, B: number) => ({r: radius(MP, v, B), T: period(MP, B)});
/** Attempt 1: a proton at 3.0 × 10⁶ m s⁻¹ in 0.25 T, and the electron-mass slip. Attempt 2: the speed doubled. */
export const A1 = {v: 3.0e6, B: 0.25, r: radius(MP, 3.0e6, 0.25), T: period(MP, 0.25), slip: radius(ME, 3.0e6, 0.25), r2: radius(MP, 6.0e6, 0.25), T2: period(MP, 0.25)};

// ---------------------------------------------------------------- field motion runs (screen units: px and frames, y up)
/** A charge (sign +1 or −1) in a field into the page, starting at the origin moving along (ux, uy) at `speed` px per frame, radius R. */
export const orbitRun = (R: number, speed: number, ux = 1, uy = 0, sign: 1 | -1 = 1, laps = 1) => runMotion({field: {kind: 'magnetic', qOverM: sign, b: -speed / R}, start: {x: 0, y: 0, vx: speed * ux, vy: speed * uy}, duration: (2 * Math.PI * R * laps) / speed, steps: 2400});

export const HEAD = 'Why does a perpendicular magnetic field bend a path without increasing speed?';
export const HEAD_NEXT = 'How can crossed fields select one particle speed?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
