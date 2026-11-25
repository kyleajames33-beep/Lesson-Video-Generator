// phys-y12-m6-v06 (Year 12 Physics M6 V06: crossed fields and the velocity selector, v = E/B).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v06/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {crossedRun} from '../../physics/electromagnetism/crossed';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v06: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v06: no response hold in ' + id);
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
/** The worked example: E = 4.0 × 10³ V m⁻¹ (80 V across 2.0 cm), B = 0.020 T, an electron at 2.0 × 10⁵ m s⁻¹. */
export const WE = (() => {
	const V = 80, d = 0.02, E = V / d, B = 0.02, vs = E / B;
	return {V, d, E, B, vs, FE: QE * E, FB: (v: number) => QE * v * B, slip: B / E};
})();
/** Scene 6's slider readouts at speed v (net force up positive for the electron: F_E up, F_B down). */
export const forcesAt = (v: number) => {
	const FE = WE.FE, FB = WE.FB(v), net = FE - FB;
	return {FE, FB, net, flag: Math.abs(net) < 1e-18 ? 'straight' : net > 0 ? 'up' : 'down'};
};
/** Attempt 1: 600 V across 2.0 cm, B = 0.050 T; the slip divides V by B. */
export const A1 = {V: 600, d: 0.02, B: 0.05, E: 600 / 0.02, v: 600 / 0.02 / 0.05, slip: 600 / 0.05};

// ---------------------------------------------------------------- schematic runs (screen units: px and frames, y up)
/** On screen the selected speed is VS px per frame and the field turns a charge at W rad per frame (schematic). */
export const VS = 4, W = 0.0038;
/** An electron at `ratio` × E/B (or a positive ion: sign +1, scaled by its charge-to-mass `k`) across `length` px. */
export const selRun = (ratio: number, length: number, sign: 1 | -1 = -1, k = 1, halfGap = 1e9) => crossedRun({v: VS * ratio, aE: -sign * W * k * VS, w: W * k, sign, length, halfGap});

export const HEAD = 'How can crossed fields select one particle speed?';
export const HEAD_NEXT = 'Why does a current-carrying wire feel a magnetic force?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
