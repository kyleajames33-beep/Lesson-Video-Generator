// phys-y12-m8-v05 (Year 12 Physics M8 V05: fusion in main-sequence stars, why do main-sequence stars release energy by
// combining light nuclei?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its
// cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below
// to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root label edit) carry identical narration (6,309 characters, 17 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v05/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v05: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v05: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: 1 u = 931.5 MeV/c²; 1 MeV = 1.602 × 10⁻¹³ J; c = 3.00 × 10⁸ m s⁻¹. */
export const U_MEV = 931.5, MEV_J = 1.602e-13, C_LIGHT = 3.0e8;
/** AME2020 atomic masses (u), as on the question cards. */
export const M = {H1: 1.007825, H2: 2.014102, He3: 3.016029, He4: 4.002603, n: 1.008665, C12: 12.0, N13: 13.005739, C13: 13.003355, N14: 14.003074, O15: 15.003066, N15: 15.000109} as const;
/** Net pp chain with atomic masses: 4 × 1.007825 = 4.031300 u; Δm = 0.028697 u; 26.73 MeV (26.7); 4.282 × 10⁻¹² J; 0.712% (0.71%, "zero point seven"). */
export const FOUR_H = 4 * M.H1, DM_PP = FOUR_H - M.He4, E_PP = DM_PP * U_MEV, E_PP_J = E_PP * MEV_J, FRAC_PP = DM_PP / FOUR_H;
/** Sun: 3.83 × 10²⁶ W / 4.282 × 10⁻¹² J = 8.9 × 10³⁷ reactions per second ("about 9 × 10³⁷"). */
export const L_SUN = 3.83e26, PP_RATE = L_SUN / E_PP_J;
/** Helium-4 binding energy: 2(1.007825) + 2(1.008665) − 4.002603 = 0.030377 u = 28.30 MeV; 7.07 MeV per nucleon. */
export const DM_HE = 2 * M.H1 + 2 * M.n - M.He4, BE_HE = DM_HE * U_MEV, BE_HE_N = BE_HE / 4;
/** Scene 8 slip: 0.028697 × (3.00 × 10⁸)² = 2.58 × 10¹⁵ (u used as kg). */
export const SLIP_KG = DM_PP * C_LIGHT * C_LIGHT;
/** Curve marker (MeV per nucleon, AME2020): ¹H 0; ²H 1.11; ⁴He 7.07; ¹²C 7.68; ¹⁶O 7.98; ⁵⁶Fe 8.79; ²³⁸U 7.57. */
export const MARKER = [{A: 1, s: '¹H', B: 0}, {A: 2, s: '²H', B: 1.112}, {A: 4, s: '⁴He', B: 7.074}, {A: 12, s: '¹²C', B: 7.68}, {A: 16, s: '¹⁶O', B: 7.976}, {A: 56, s: '⁵⁶Fe', B: 8.79}, {A: 238, s: '²³⁸U', B: 7.57}] as const;
/** Attempt 1: ³He + ³He → ⁴He + 2 ¹H: reactants 6.032058 u; products 6.018253 u; Δm 0.013805 u; 12.86 MeV (12.9). Slip: 6.032058 − 4.002603 = 2.029455 u → 1890 MeV. */
export const A1_R = 2 * M.He3, A1_P = M.He4 + 2 * M.H1, A1_DM = A1_R - A1_P, A1_E = A1_DM * U_MEV, A1_SLIP_DM = A1_R - M.He4, A1_SLIP_E = A1_SLIP_DM * U_MEV;
/** Cores (author notes a, g): fusion from about 10⁷ K; Sun's core 1.5 × 10⁷ K; CNO dominant above 1.7 × 10⁷ K and about 1.3 M☉; Sun's life about 10 billion years; CNO about 1% of the Sun's energy (Borexino 2020). */
export const T_IGNITE = 1e7, T_SUN_CORE = 1.5e7, T_CNO = 1.7e7, M_CNO = 1.3, CNO_SHARE = 0.01;

export const HEAD = 'Why do main-sequence stars release energy by combining light nuclei?';
export const HEAD_NEXT = 'How does stellar mass change the elements a star can make?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
