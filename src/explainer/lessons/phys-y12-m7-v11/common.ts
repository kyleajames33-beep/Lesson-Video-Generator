// phys-y12-m7-v11 (Year 12 Physics M7 V11: photoelectric graphs, how do photoelectric graphs reveal Planck's constant
// and work function?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,158 characters, 17 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v11/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v11: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v11: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet. */
export const H = 6.626e-34, EV = 1.602e-19;
/** Site worked example (sodium): f (× 10¹⁴ Hz) and V_stop (V). */
export const DATA_F = [6.0, 7.0, 8.0, 9.0, 10.0] as const, DATA_V = [0.2, 0.61, 1.03, 1.44, 1.85] as const;
/** Gradient from the first and last points: 1.65 / (4.0e14) = 4.125e-15 V s (carried unrounded). */
export const RISE = DATA_V[4] - DATA_V[0], RUN = (DATA_F[4] - DATA_F[0]) * 1e14, GRAD = RISE / RUN;
/** h = gradient × e = 6.608e-34 J s (≈ 6.6e-34). */
export const H_MEAS = GRAD * EV;
/** Vertical intercept 0.20 − (4.125e-15)(6.0e14) = −2.275 V; f₀ = 6.0e14 − 0.20 / 4.125e-15 = 5.515e14 Hz. */
export const INTERCEPT = DATA_V[0] - GRAD * DATA_F[0] * 1e14, F0_NA = DATA_F[0] * 1e14 - DATA_V[0] / GRAD;
/** ϕ = 2.275 eV ≈ 2.28 eV; 2.275 × 1.602e-19 = 3.645e-19 J; check hf₀ = 3.645e-19 J. */
export const PHI_NA = -INTERCEPT, PHI_NA_J = PHI_NA * EV, CHECK_J = H_MEAS * F0_NA;
/** Frequency-marker model (scene 5): h = 6.626e-34 J s, ϕ = 2.28 eV; f₀ = 5.512e14 Hz. */
export const PHI_M = 2.28, F0_M = (PHI_M * EV) / H;
export const hfEV = (f14: number) => (H * f14 * 1e14) / EV;
export const kEV = (f14: number) => Math.max(0, hfEV(f14) - PHI_M);
/** Scene 3 light: 8.0e14 Hz on the model metal: K_max = 1.03 eV, so V_stop = 1.03 V. */
export const F_LIGHT = 8.0, VSTOP = kEV(F_LIGHT), F_HIGH = 10.0, VSTOP_HIGH = kEV(F_HIGH);
/** Attempt 1 (original): line from (7.0e14, 0) through (10.0e14, 2.0e-19 J): h = 6.67e-34 ≈ 6.7e-34 J s; ϕ = 4.67e-19 J = 2.9 eV. */
export const A1_F0 = 7.0e14, A1_F = 10.0e14, A1_K = 2.0e-19, A1_H = A1_K / (A1_F - A1_F0), A1_H3 = 6.67e-34, A1_PHI = A1_H3 * A1_F0, A1_PHI_EV = A1_PHI / EV;
/** Attempt 2: gradient h / e = 4.136e-15 V s, unchanged. */
export const H_OVER_E = H / EV;

export const HEAD = "How do photoelectric graphs reveal Planck's constant and work function?";
export const HEAD_NEXT = 'Why must observers agree on light speed?';
export const HEAD_SIZE = 46;
export const ACCENT = '#8e3b78';
