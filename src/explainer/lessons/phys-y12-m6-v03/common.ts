// phys-y12-m6-v03 (Year 12 Physics M6 V03: work and energy in electric fields, W = qV, K = |q|V, v = √(2|q|V/m)).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v03/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {crossRun} from '../../physics/electromagnetism/plates';
import {runMotion} from '../../sims/field-motion';
import {MAIN as V02_MAIN} from '../phys-y12-m6-v02/common';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v03: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v03: no response hold in ' + id);
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
export const QE = 1.602e-19, ME = 9.109e-31, MP = 1.673e-27, C = 3.0e8, M_ALPHA = 6.64e-27;
/** Speed from rest through V volts for one elementary charge of mass m (classical). */
export const vFrom = (V: number, m = ME, q = QE) => Math.sqrt((2 * q * V) / m);
/** The 5,000 V gun. */
export const GUN = (() => {
	const V = 5000, KJ = QE * V, v = vFrom(V), v10 = vFrom(10000), vp = vFrom(V, MP);
	return {V, KJ, v, frac: v / C, v10, line10: 2 * v, vp, ratio: v / vp, slipKV: vFrom(5)};
})();
/** Scene 6's dial points (V, v) and the mass ratio. */
export const DIAL = [1000, 2500, 5000, 7500, 10000].map(V => ({V, v: vFrom(V)}));
export const RATIO = MP / ME;
/** Last time's electron: work along the force, starting and final kinetic energy (eV), final speed. */
export const LOOP = (() => {
	const W = QE * V02_MAIN.E * V02_MAIN.y, K0 = 0.5 * ME * V02_MAIN.vx ** 2, K = K0 + W;
	return {W, WeV: W / QE, K0eV: K0 / QE, KeV: K / QE, v: Math.sqrt((2 * K) / ME), wrongeV: (QE * V02_MAIN.E * V02_MAIN.L) / QE, y: V02_MAIN.y};
})();
/** The retarding example: a 100 eV electron against 60 V. */
export const RETARD = {K0: 100, V: 60, K: 40, v0: vFrom(100), v: vFrom(40)};
/** Attempt 1: 2.0 kV from rest. */
export const A1 = (() => { const V = 2000, K = QE * V, v = Math.sqrt((2 * K) / ME); return {V, K, v, v2: v * v}; })();
/** Attempt 2: alpha particle against proton through the same V. */
export const A2 = {ratio: Math.sqrt((2 * MP) / M_ALPHA), inverse: Math.sqrt(M_ALPHA / (2 * MP))};

// ---------------------------------------------------------------- field motion runs
/** Scene 2: a proton from rest at the top plate across the gap (a in arbitrary px units: d = 1). */
export const RUN_P = crossRun(1, 1);
/** Scene 9's retarding region, in screen units (px and frames): width 360 px, entry speed sqrt(K) scaled. */
export const RET_W = 360, RET_S = 0.6;
export const retRun = (K0: number) => {
	const a = (RETARD.V * RET_S * RET_S) / (2 * RET_W); // v^2 falls by (S^2 x 60) across the region
	return runMotion({field: {kind: 'custom', accel: x => [x >= 0 && x <= RET_W ? -a : 0, 0]}, start: {x: -160, y: 0, vx: RET_S * Math.sqrt(K0), vy: 0}, duration: 360, steps: 3600, stopWhen: s => s.x < -170});
};

export const HEAD = "How does a potential difference set a particle's speed?";
export const HEAD_NEXT = 'When does a magnetic field exert a force on a moving charge?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
/** The two retarding runs: 100 eV gets through with 40 eV; 50 eV stops and turns back. */
export const RET_A = retRun(RETARD.K0), RET_B = retRun(50);
