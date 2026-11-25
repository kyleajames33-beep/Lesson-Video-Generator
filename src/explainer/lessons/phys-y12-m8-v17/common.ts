// phys-y12-m8-v17 (Year 12 Physics M8 V17: Q-values of artificial transmutations, what determines the energy released
// in an artificial transmutation?). Lesson lookups and every displayed number. Every change is keyed to the frame at
// which its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the
// import below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3) carry identical narration (5,908 characters, 19 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v17/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v17: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v17: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Atomic masses in micro-u (AME2020 to six decimals; exact integer arithmetic, then shown to six decimals). */
const HE4 = 4002603, N14 = 14003074, O17 = 16999132, H1 = 1007825, BE9 = 9012183, C12 = 12000000, NN = 1008665;
const AL27 = 26981538, P30 = 29978313, U235 = 235043930, BA141 = 140914403, KR92 = 91926173, PO210 = 209982874, PB206 = 205974465;
const u = (micro: number) => micro / 1e6;
/** HSC data sheet: 1 u = 931.5 MeV/c². */
export const U_MEV = 931.5;
export const M = {he: u(HE4), n14: u(N14), o17: u(O17), h1: u(H1), be9: u(BE9), c12: u(C12), n: u(NN), al: u(AL27), p30: u(P30), u235: u(U235), ba: u(BA141), kr: u(KR92)};
/** Rutherford: 18.005677 u against 18.006957 u; Δm = −0.001280 u; Q = −1.19232 → −1.19 MeV ("about one point two"). */
export const R_IN = u(HE4 + N14), R_OUT = u(O17 + H1), R_DM = u(HE4 + N14 - O17 - H1), R_Q = R_DM * U_MEV;
/** Slip: forgetting × 931.5 leaves −0.00128 "MeV". */
export const R_SLIP = R_DM;
/** Threshold −Q(1 + m_α/m_N) = 1.533 → "≈ 1.5"; Coulomb barrier about 4 MeV (design author note c, stated). */
export const THRESH = -R_Q * (1 + u(HE4) / u(N14));
/** Rutherford's alphas (radium C′, polonium-214): 7.69 MeV ("about seven point seven"); K_out = 7.69 + Q = 6.50. */
export const K_RUTH = 7.69, K_OUT_RUTH = K_RUTH + R_Q;
/** Scene 10 slider: K_in 5.0, 7.7, 9.0 MeV → K_out = K_in + Q = 3.81, 6.51, 7.81 MeV. */
export const K_STEPS = [5.0, 7.7, 9.0] as const;
/** Binding energies from atomic masses (Z ¹H atoms + N neutrons − atom), each rounded to three decimals for display:
 *  ⁴He 28.296, ¹⁴N 104.660 (104.6596; the design's 104.659 is truncated), ¹⁷O 131.763; sum 132.956 ("about one hundred
 *  and thirty three"); 131.763 − 132.956 = −1.193 → −1.19. */
const be = (Z: number, N: number, atom: number) => Math.round(((Z * H1 + N * NN - atom) * U_MEV) / 1e3) / 1e3;
export const BE_HE = be(2, 2, HE4), BE_N = be(7, 7, N14), BE_O = be(8, 9, O17);
export const BE_IN = Math.round((BE_HE + BE_N) * 1e3) / 1e3, BE_DIFF = BE_O - BE_IN;
/** Po-210 alpha decay: Δm = 0.005806 u; Q = 5.408 → +5.41 MeV. */
export const PO_DM = u(PO210 - PB206 - HE4), PO_Q = PO_DM * U_MEV;
/** Chadwick's source reaction: 13.014786 u against 13.008665 u; Δm = +0.006121 u; Q = 5.7017 → +5.70 MeV; with 5.30 MeV
 *  alphas K_out = 5.30 + 5.70 = 11.0 MeV. */
export const B_IN = u(HE4 + BE9), B_OUT = u(C12 + NN), B_DM = u(HE4 + BE9 - C12 - NN), B_Q = B_DM * U_MEV, B_KOUT = 5.3 + B_Q;
/** A1: 30.984141 u against 30.986978 u; Δm = −0.002837 u; Q = −2.6427 → −2.64 MeV; wrong order +2.64. */
export const A_IN = u(HE4 + AL27), A_OUT = u(P30 + NN), A_DM = u(HE4 + AL27 - P30 - NN), A_Q = A_DM * U_MEV;
/** Fission handoff: 236.052595 u against 235.866571 u; Δm = 0.186024 u ("zero point one eight six"); Q = 173.28 → 173. */
export const F_IN = u(NN + U235), F_OUT = u(BA141 + KR92 + 3 * NN), F_DM = u(NN + U235 - BA141 - KR92 - 3 * NN), F_Q = F_DM * U_MEV;

export const HEAD = 'What determines the energy released in an artificial transmutation?';
export const HEAD_NEXT = 'Why can one fission event trigger a controlled or uncontrolled chain?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
