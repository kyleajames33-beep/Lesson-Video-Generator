// phys-y12-m8-v16 (Year 12 Physics M8 V16: mass defect and binding energy, how does missing mass measure nuclear
// binding energy?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root fix) carry identical narration (5,744 characters, 19 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v16/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v16: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v16: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Masses in micro-u (exact integer arithmetic, then shown to six decimals). Site values: m_p = 1.007276 u,
 *  m_n = 1.008665 u, m(¹²C nucleus) = 11.996709 u, m(⁷Li nucleus) = 7.014357 u; ¹H atom 1.007825 u; ¹²C atom 12 u. */
const MP = 1007276, MN = 1008665, MH = 1007825, MC_NUC = 11996709, MC_ATOM = 12000000, MLI = 7014357;
const u = (micro: number) => micro / 1e6;
/** HSC data sheet: 1 u = 931.5 MeV/c². */
export const U_MEV = 931.5;
export const M_P = u(MP), M_N = u(MN), M_H = u(MH), M_C = u(MC_NUC), M_C_ATOM = u(MC_ATOM), M_LI = u(MLI);
/** C-12: 6(1.007276) + 6(1.008665) = 12.095646 u; Δm = 0.098937 u; E_b = 92.160 → 92.2 MeV; E_b/A = 7.680 → 7.68. */
export const C_SUM = u(6 * MP + 6 * MN), C_DM = u(6 * MP + 6 * MN - MC_NUC), C_EB = C_DM * U_MEV, C_EBA = C_EB / 12;
/** Gap fraction 0.098937/12.095646 = 0.82%; 7.68 MeV / 13.6 eV = 5.65 × 10⁵ ("over half a million"). */
export const C_FRAC = C_DM / C_SUM, C_VS_H = (C_EBA * 1e6) / 13.6;
/** Trap: with bare protons 0.095646 u → 89.09 → 89.1 MeV; with ¹H atoms 0.098940 u → 92.16 → 92.2 MeV. */
export const TRAP_DM = u(6 * MP + 6 * MN - MC_ATOM), TRAP_EB = TRAP_DM * U_MEV, FIX_DM = u(6 * MH + 6 * MN - MC_ATOM), FIX_EB = FIX_DM * U_MEV;
/** Curve points (AME2020 E_b/A in MeV; totals = E_b/A × A): ⁴He 7.074 (28.3), ¹²C 7.680 (92.2), ¹⁶O 7.976 (127.6 → 128),
 *  ⁵⁶Fe 8.790 (492.2), ²⁰⁸Pb 7.867 (1636.3), ²³⁵U 7.591 (1783.9 → 1784). */
export const PTS = [
	{A: 4, s: '⁴He', b: 7.074}, {A: 12, s: '¹²C', b: 7.68}, {A: 16, s: '¹⁶O', b: 7.976}, {A: 56, s: '⁵⁶Fe', b: 8.79}, {A: 208, s: '²⁰⁸Pb', b: 7.867}, {A: 235, s: '²³⁵U', b: 7.591},
] as const;
export const total = (p: {A: number; b: number}) => p.A * p.b;
/** N/Z: ¹⁶O 8/8 = 1.00; ²⁰⁸Pb 126/82 = 1.54. */
export const NZ_O = 8 / 8, NZ_PB = 126 / 82;
/** Attempt 1 (Li-7): 3(1.007276) + 4(1.008665) = 7.056488 u; Δm = 0.042131 u; E_b = 39.2450265 → 39.245 (39.2 said);
 *  E_b/A = 39.245/7 = 5.606 → 5.61; slip 39.245/3 = 13.08 → 13.1. */
export const LI_SUM = u(3 * MP + 4 * MN), LI_DM = u(3 * MP + 4 * MN - MLI), LI_EB = LI_DM * U_MEV, LI_EBA = Math.round(LI_EB * 1000) / 1000 / 7, LI_SLIP = LI_EB / 3;

export const HEAD = 'How does missing mass measure nuclear binding energy?';
export const HEAD_NEXT = 'What determines the energy released in an artificial transmutation?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
