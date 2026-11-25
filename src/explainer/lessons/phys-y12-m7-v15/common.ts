// phys-y12-m7-v15 (Year 12 Physics M7 V15: relativistic momentum, why does ever more momentum fail to push mass to light speed?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video.
// The prepared narration matched the current design (Revision 3 with the root label edit of 21 November 2026, 6,010 characters, 18 scenes; checked scene by scene by
// script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with the
// unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v15/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {gamma} from '../../sims/relativity';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v15: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v15: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet. */
export const C = 3.0e8, M_P = 1.673e-27, M_E = 9.109e-31, Q_E = 1.602e-19;
export const g = gamma;
/** Momentum (in units of m₀c) to speed (fraction of c): v/c = k / √(1 + k²); γ = √(1 + k²). */
export const vOfK = (k: number) => k / Math.sqrt(1 + k * k), gOfK = (k: number) => Math.sqrt(1 + k * k);
/** Idealised probe: 1000 kg, 1.0 × 10⁴ N, a = 10 m s⁻²; classically c in 3.0 × 10⁷ s = 347 days. */
export const M0 = 1000, F = 1.0e4, A = F / M0, T_C = (M0 * C) / F, T_C_DAYS = T_C / 86400;
/** Two years of thrust (Earth frame): 6.31 × 10⁷ s; p = 2.10 m₀c; v = 0.90c; classical 2.1c. */
export const YEAR = 3.156e7, T2 = 2 * YEAR, K2 = (F * T2) / (M0 * C), V2 = vOfK(K2), CLASSICAL2 = (A * T2) / C;
/** Thrust clock and probe table (Earth-frame time t = k × 3.0 × 10⁷ s). */
export const STEPS = [0.5, 1, 1.5, 2] as const, TABLE = [1, 2, 3, 10] as const;
/** Worked proton (site value v): γ(0.758) = 1.533; p = 5.83e-19; classical 3.80e-19 (35% too small). */
export const B_P = 0.758, G_P = gamma(B_P), P_P = G_P * M_P * B_P * C, P_P_CL = M_P * B_P * C, P_P_SHORT = 1 - P_P_CL / P_P;
/** Electron at 0.99c and 0.999c: γ 7.09 and 22.4 (22.37 in the working row, so it gives the design's 6.11); p 1.92e-21 and 6.11e-21; ratio 3.18; speed +0.91%. */
export const B_E1 = 0.99, B_E2 = 0.999, G_E1 = gamma(B_E1), G_E2 = gamma(B_E2), P_E1 = Math.round(G_E1 * 100) / 100 * M_E * B_E1 * C, P_E2 = Math.round(G_E2 * 100) / 100 * M_E * B_E2 * C, P_RATIO = (G_E2 * B_E2) / (G_E1 * B_E1), V_UP = (B_E2 / B_E1 - 1) * 100;
/** LHC 6.5 TeV operating example: γ = 6.5e12 / 938.3e6 = 6.93e3; 1 − v/c = 1/(2γ²) (3.1 m s⁻¹ short); p = E/c; r = p/(eB) = 2.8 km at 7.74 T; classical m₀c/(eB) = 0.40 m. */
export const LHC_EV = 6.5e12, MP_EV = 938.272e6, G_LHC = LHC_EV / MP_EV, LHC_SHORT = 1 / (2 * G_LHC * G_LHC), LHC_SHORT_MS = LHC_SHORT * C, P_LHC = (LHC_EV * Q_E) / C, B_LHC = 7.74, R_LHC = P_LHC / (Q_E * B_LHC), R_CL = (M_P * C) / (Q_E * B_LHC);
/** Attempt 1: electron at 0.95c: γ = 3.20; p = 8.3e-22; classical 2.6e-22; ratio 3.2. */
export const A1_B = 0.95, A1_G = gamma(A1_B), A1_P = Math.round(A1_G * 100) / 100 * M_E * A1_B * C, A1_PCL = M_E * A1_B * C;
/** The Sun (handoff, from the next lesson): 3.8 × 10²⁶ W / c² = 4.2 × 10⁹ kg each second, about 4 million tonnes. */
export const SUN_W = 3.8e26, SUN_DM = SUN_W / (C * C);

export const HEAD = 'Why does ever more momentum fail to push mass to light speed?';
export const HEAD_NEXT = 'How does mass-energy accounting explain fusion, annihilation and combustion?';
export const HEAD_SIZE = 50;
export const ACCENT = '#8e3b78';
