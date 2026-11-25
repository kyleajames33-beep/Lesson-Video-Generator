// phys-y12-m8-v09 (Year 12 Physics M8 V09: Chadwick's discovery of the neutron, what evidence established an uncharged
// massive particle in the nucleus?). Lesson lookups and every displayed number. Every change is keyed to the frame at
// which its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the
// import below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3, coherence audit fix of 24 November) carry identical narration (6,159 characters, 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v09/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {elasticTransfer} from '../../sims/collisions';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v09: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v09: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: m_p = 1.673 × 10⁻²⁷ kg; m_n = 1.675 × 10⁻²⁷ kg; e = 1.602 × 10⁻¹⁹ C; c = 3.00 × 10⁸ m s⁻¹. */
export const M_P = 1.673e-27, M_N = 1.675e-27, E_CH = 1.602e-19, C = 3.0e8;
/** Chadwick's fastest paraffin protons: v_p = 3.3 × 10⁷ m s⁻¹; K = ½mv² = 9.11 × 10⁻¹³ J = 5.69 MeV ("5.7"). Slip mv²: 11.4 MeV ("11"). */
export const V_P = 3.3e7, K_P = 0.5 * M_P * V_P * V_P, K_P_MEV = K_P / E_CH / 1e6, SLIP_MEV = (M_P * V_P * V_P) / E_CH / 1e6;
/** Photon bouncing straight back off a proton at rest: T = 2E²/(mc² + 2E); m_p c² = 939.9 MeV; T = 5.69 MeV → E = 54.6 MeV ("55"). */
export const MPC2_MEV = (M_P * C * C) / E_CH / 1e6;
export const photonFor = (T: number, mc2: number) => (2 * T + Math.sqrt(4 * T * T + 8 * T * mc2)) / 4;
export const E_GAMMA = photonFor(K_P_MEV, MPC2_MEV);
/** Share of the photon's energy the proton takes: 5.69 / 54.6 = 0.104 (the thin slice). */
export const PHOTON_SHARE = K_P_MEV / E_GAMMA;
/** Energy available: ⁹Be(α,γ)¹³C Q = 10.65 MeV plus the 5.30 MeV polonium alpha: 15.95 MeV ("at most about sixteen"). */
export const Q_AG = 10.65, E_ALPHA_PO = 5.3, E_AVAIL = Q_AG + E_ALPHA_PO;
/** Chadwick's own estimate of the photon energy for the fastest nitrogen recoils: about 90 MeV (author note b). */
export const E_GAMMA_N = 90;
/** Target-mass slider: recoil speed ÷ neutron speed = 2/(1 + M); energy share = 4M/(1 + M)² (collisions engine). */
export const SLIDER_M = [1, 4, 14, 197] as const;
export const recoil = (M: number) => elasticTransfer(1, M);
/** Two targets: v_p / v_N = 3.3 × 10⁷ / 4.7 × 10⁶ = 7.02; 7.02 m_n + 7.02 m_p = m_n + 14 m_p; 6.02 m_n = 6.98 m_p; m_n = 1.16 m_p. */
export const V_N = 4.7e6, M_NITRO = 14, RATIO = V_P / V_N, R2 = Math.round(RATIO * 100) / 100;
export const MN_FROM_R2 = (M_NITRO - R2) / (R2 - 1);
/** The site's direct formula with the unrounded speeds: (v_N m_N − v_p m_p) / (v_p − v_N) = 1.159 m_p. */
export const MN_SITE = (V_N * M_NITRO - V_P) / (V_P - V_N);
/** Nitrogen speed ± 10%: m_n from 0.911 to 1.415 m_p ("about 0.9 to 1.4"). */
export const mnFor = (vN: number) => (vN * M_NITRO - V_P) / (V_P - vN);
export const MN_LO = mnFor(0.9 * V_N), MN_HI = mnFor(1.1 * V_N);
/** Data sheet ratio: 1.675 / 1.673 = 1.0012 ("a tenth of a percent heavier"). */
export const MN_MP = M_N / M_P;
/** Gold: Z = 79, N = 118, A = 197; helium: Z = 2, A = 4. */
export const AU_Z = 79, AU_A = 197, AU_N = AU_A - AU_Z, HE_Z = 2, HE_A = 4;

export const HEAD = 'What evidence established an uncharged massive particle in the nucleus?';
export const HEAD_NEXT = "Why couldn't Rutherford's model explain stable atoms and line spectra?";
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
