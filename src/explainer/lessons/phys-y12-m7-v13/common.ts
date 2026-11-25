// phys-y12-m7-v13 (Year 12 Physics M7 V13: time dilation, how can two observers measure different elapsed times?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,395 characters, 18 scenes; checked scene by scene by
// script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with the
// unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v13/lesson.json';
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
	if (!s) throw new Error('phys-y12-m7-v13: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v13: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet. */
export const C = 3.0e8;
export const g = gamma;
/** Muons (site): 15 km atmosphere, proper mean lifetime 2.2 μs, 0.995c. */
export const ATM_M = 15000, TAU0_US = 2.2, B_MU = 0.995, G_MU = gamma(B_MU);
/** 0.995c × 2.2 μs = 657 m (said "about six hundred and sixty"). */
export const RANGE_CLASS_M = B_MU * C * TAU0_US * 1e-6;
/** Dilated lifetime γt₀ = 22.0 μs; range 0.995c × 22.0 μs = 6.57 km. */
export const TAU_DIL_US = G_MU * TAU0_US, RANGE_DIL_M = B_MU * C * TAU_DIL_US * 1e-6;
/** 15 km / 0.995c = 50.3 μs = 2.28 dilated lifetimes; survival e^(−2.28) = 0.10; classically e^(−22.8) = 1.2e-10. */
export const TRIP_US = (ATM_M / (B_MU * C)) * 1e6, LIFETIMES = TRIP_US / TAU_DIL_US, SURV = Math.exp(-LIFETIMES), SURV_CLASS = Math.exp(-TRIP_US / TAU0_US);
/** Speed slider (scene 8): v/c 0, 0.6, 0.8, 0.9, 0.995 give γ 1.00, 1.25, 1.67, 2.29, 10.0. */
export const SLIDER = [0, 0.6, 0.8, 0.9, 0.995] as const;
/** Jet at 900 km/h = 250 m/s: γ − 1 ≈ ½(v/c)² = 3.47e-13 (said "about three times ten to the minus thirteen"). */
export const V_JET = 900 / 3.6, JET_GM1 = 0.5 * (V_JET / C) ** 2;
/** Hafele-Keating, October 1971 (Science 177, 1972): eastbound −59 ± 10 ns, westbound +273 ± 7 ns (measured). */
export const HK_EAST = -59, HK_EAST_U = 10, HK_WEST = 273, HK_WEST_U = 7;
/** CERN muon storage ring (Bailey et al., Nature 268, 1977): γ = 29.33, 29.33 × 2.197 μs = 64.4 μs. */
export const G_RING = 29.33, TAU_MU_US = 2.197, TAU_RING_US = G_RING * TAU_MU_US;
/** Trip: 12 ly at 0.8c: Earth 15 years; ship 15 / 1.67 = 9.0 years; 0.8 × 9 = 7.2 ly. Crossed slip 15 × 1.67 = 25. */
export const TRIP_LY = 12, B_TRIP = 0.8, G_TRIP = gamma(B_TRIP), T_EARTH = TRIP_LY / B_TRIP, T_SHIP = T_EARTH / G_TRIP, D_SHIP = B_TRIP * T_SHIP, T_SLIP = T_EARTH * G_TRIP;
/** Attempt 1: pions at 0.95c, t₀ = 26 ns: γ = 3.20, t = 83 ns, d = 24 m; slip 26 / 3.20 = 8.1 ns. */
export const A1_B = 0.95, A1_T0 = 26, A1_G = gamma(A1_B), A1_T = A1_G * A1_T0, A1_D = A1_B * C * A1_T * 1e-9, A1_SLIP = A1_T0 / A1_G;
/** Attempt 2: 6.0 ly at 0.60c: Earth 10 years; γ = 1.25; ship 8.0 years. */
export const A2_D = 6.0, A2_B = 0.6, A2_G = gamma(A2_B), A2_TE = A2_D / A2_B, A2_TS = A2_TE / A2_G;
/** Illustrative light-clock speed for the two panels (no number on screen); γ(0.6) = 1.25. */
export const B_CLOCK = 0.6;

export const HEAD = 'How can two observers measure different elapsed times?';
export const HEAD_NEXT = 'Why can a moving distance be shorter without an object being crushed?';
export const HEAD_SIZE = 50;
export const ACCENT = '#8e3b78';
