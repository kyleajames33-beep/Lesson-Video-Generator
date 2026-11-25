// phys-y12-m6-v01 (Year 12 Physics M6 V01: charged particles between parallel plates, E = V/d, F = qE, a = qE/m).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in
// the real take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v01/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {crossRun} from '../../physics/electromagnetism/plates';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v01: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v01: no response hold in ' + id);
	return h;
};
/** The response hold if the take has one (the hook's 3 s prediction hold is not in this take). */
export const holdIf = (id: string) => sc(id).responseHold;
/** Keyframes forced to strictly increasing frames (each at least `gap` after the last). */
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

// ---------------------------------------------------------------- constants (HSC data sheet values)
export const QE = 1.602e-19, ME = 9.109e-31, MP = 1.673e-27, G = 9.8;
/** Field between the plates (V/m) for voltage V (V) and gap d (m). */
export const field = (V: number, d: number) => V / d;
/** Size of the force (N) and acceleration (m/s²) on one elementary charge of mass m in field E. */
export const force = (E: number) => QE * E;
export const accel = (E: number, m: number) => (QE * E) / m;

/** Scene 4 (and the hook's live stage): 100 V across 2.0 cm; 200 V; 100 V across 4.0 cm. */
export const D1 = 0.02, D2 = 0.04, V1 = 100, V2 = 200;
export const E1 = field(V1, D1), E2 = field(V2, D1), E3 = field(V1, D2);
/** Scene 7: the electron in 5.0 x 10^3 V/m. */
export const F1 = force(E1), AE = accel(E1, ME), AP = accel(E1, MP);
/** Scene 8: a/g for the electron, and the mass ratio. */
export const AG = AE / G, RATIO = MP / ME;
/** Scene 9's three states for the proton (and the electron at the base state). */
export const STATES = {
	base: {V: V1, d: D1, E: E1, F: force(E1), a: accel(E1, MP)},
	twoV: {V: V2, d: D1, E: E2, F: force(E2), a: accel(E2, MP)},
	twoD: {V: V1, d: D2, E: E3, F: force(E3), a: accel(E3, MP)},
	electron: {V: V1, d: D1, E: E1, F: force(E1), a: accel(E1, ME)},
};
/** Attempt 1: 150 V across 2.5 cm, a proton. */
export const A1 = (() => {
	const V = 150, d = 0.025, E = V / d, F = QE * E, a = F / MP;
	return {V, d, E, F, a, slip: V / 2.5};
})();
/** Attempt 2: the oil drop held still. */
export const A2 = (() => {
	const m = 1.6e-14, q = 3.2e-19, d = 0.016, E = (m * G) / q;
	return {m, q, d, E, V: E * d};
})();

// ---------------------------------------------------------------- field motion runs (from rest across the gap)
/** Scene 6: a proton from rest at the top plate across 2.0 cm in 5.0 x 10^3 V/m (time across about 0.29 microseconds). */
export const RUN6 = crossRun(AP, D1);
/** The hook's looping proton (same run): the fraction of the gap covered at a fraction u of the crossing time. */
export const crossFrac = (u: number) => Math.min(1, Math.max(0, u)) ** 2;

export const HEAD = "How does the voltage between parallel plates set a charged particle's acceleration?";
export const HEAD_NEXT = "Why is a charged particle's path between plates like a projectile?";
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
