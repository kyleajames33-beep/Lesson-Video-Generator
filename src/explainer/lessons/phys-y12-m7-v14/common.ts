// phys-y12-m7-v14 (Year 12 Physics M7 V14: length contraction, why can a moving distance be shorter without an object being crushed?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,423 characters, 17 scenes; checked scene by scene by
// script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with the
// unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v14/lesson.json';
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
	if (!s) throw new Error('phys-y12-m7-v14: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v14: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet. */
export const C = 3.0e8;
export const g = gamma;
/** Trip (from last time): 12 ly at 0.8c; Earth 15 years, ship 9 years; 0.8 × 9 = 7.2 ly = 12 / 1.67. */
export const TRIP_LY = 12, B_TRIP = 0.8, G_TRIP = gamma(B_TRIP), T_EARTH = TRIP_LY / B_TRIP, T_SHIP = T_EARTH / G_TRIP, D_SHIP = TRIP_LY / G_TRIP;
/** Worked ship (site predict): l₀ = 100 m at 0.80c: l = 60 m. Crossed slip 100 × 1.67 = 167 m. */
export const L0 = 100, B_SHIP = 0.8, G_SHIP = gamma(B_SHIP), L_SHIP = L0 / G_SHIP, L_SLIP = L0 * Math.round(G_SHIP * 100) / 100;
/** Speed slider (scene 7): v/c 0, 0.5, 0.8, 0.95, 0.99: γ 1.00, 1.15, 1.67, 3.20, 7.09; l 100, 86.6, 60.0, 31.2, 14.1 m. */
export const SLIDER = [0, 0.5, 0.8, 0.95, 0.99] as const;
/** Docking bay (site 80 m tunnel): γ = 100 / 80 = 1.25; 1/γ² = 0.64; v = c√0.36 = 0.60c. */
export const L_BAY = 80, G_BAY = L0 / L_BAY, INV_G2 = 1 / G_BAY ** 2, B_BAY = Math.sqrt(1 - INV_G2);
/** Site Stop and Check: 300 m to 180 m: γ = 1.67, v = 0.80c. */
export const SC_L0 = 300, SC_L = 180, SC_G = SC_L0 / SC_L, SC_B = Math.sqrt(1 - 1 / SC_G ** 2);
/** Muons: γ(0.995) = 10.0; 15 km / 10.0 = 1.50 km; 1.50 km / 0.995c = 5.0 μs = 2.3 lifetimes; Earth 50.3 μs / 22.0 μs = 2.3. */
export const ATM_KM = 15, B_MU = 0.995, G_MU = gamma(B_MU), TAU0_US = 2.2, ATM_MU_KM = ATM_KM / G_MU, T_MU_US = (ATM_MU_KM * 1000) / (B_MU * C) * 1e6, LIFE_MU = T_MU_US / TAU0_US;
export const TRIP_E_US = (ATM_KM * 1000) / (B_MU * C) * 1e6, TAU_DIL_US = G_MU * TAU0_US, LIFE_E = TRIP_E_US / TAU_DIL_US, SURV = Math.exp(-LIFE_E);
/** Attempt 1: 150 m long, 20 m wide at 0.90c: γ = 2.29, l = 65 m, width 20 m; slip 150 × 2.29 = 344 m. */
export const A1_L0 = 150, A1_W = 20, A1_B = 0.9, A1_G = gamma(A1_B), A1_L = A1_L0 / A1_G, A1_SLIP = A1_L0 * A1_G;
/** Attempt 2 (site reflect values): 10 km at 0.998c (γ = 15.8 given): 632 m (≈ 630 m); 632 / 0.998c = 2.1 μs ≈ 0.96 lifetimes; slip 15.8 × 2.2 = 35 μs. */
export const A2_KM = 10, A2_B = 0.998, A2_G = 15.8, A2_L = (A2_KM * 1000) / gamma(A2_B), A2_T_US = (A2_L / (A2_B * C)) * 1e6, A2_SLIP = A2_G * TAU0_US;

export const HEAD = 'Why can a moving distance be shorter without an object being crushed?';
export const HEAD_NEXT = 'Why does ever more momentum fail to push mass to light speed?';
export const HEAD_SIZE = 50;
export const ACCENT = '#8e3b78';
