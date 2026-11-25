// phys-y12-m8-v11 (Year 12 Physics M8 V11: hydrogen energy levels and the Balmer series, how do hydrogen energy gaps
// predict Balmer wavelengths?). Lesson lookups and every displayed number. Every change is keyed to the frame at
// which its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the
// import below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3) carry identical narration (6,034 characters, 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v11/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v11: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v11: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: h = 6.626 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; k = 8.99 × 10⁹. */
// ---------------------------------------------------------------- numbers (design "Numbers used")
import {R_H, eVofNm, hE, invLambda, rydbergNm} from '../../physics/atom/bohr';
export {R_H, eVofNm, hE, invLambda, rydbergNm};
/** HSC data sheet: h = 6.626 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; 1 eV = 1.602 × 10⁻¹⁹ J; R = 1.097 × 10⁷ m⁻¹. */
export const H = 6.626e-34, C = 3.0e8, E_CH = 1.602e-19, HC = H * C;
/** Level values to two decimals as an exam diagram gives them: −13.6, −3.40, −1.51, −0.85, −0.54, −0.38 eV. */
export const LEVEL_EV: Record<number, number> = {1: -13.6, 2: -3.4, 3: -1.51, 4: -0.85, 5: -0.54, 6: -0.38};
/** Gap method for 3 → 2 with diagram values: 1.89 eV; 3.03 × 10⁻¹⁹ J (three figures); λ = hc/E = 6.56 × 10⁻⁷ m. */
export const GAP32 = LEVEL_EV[3] - LEVEL_EV[2], GAP32_J = Number((GAP32 * E_CH).toPrecision(3)), LAM_GAP = HC / GAP32_J;
/** Slip: λ = hc / 1.89 (eV not converted) = 1.05 × 10⁻²⁵ m. */
export const SLIP_EV = HC / GAP32;
/** R from 13.6 eV: 13.6 × 1.602 × 10⁻¹⁹ / hc = 1.096 × 10⁷ m⁻¹. */
export const R_FROM = (13.6 * E_CH) / HC;
/** Rydberg cases: 3 → 2 (5/36 = 0.1389; 1.524 × 10⁶ m⁻¹; 656 nm); 4 → 2 (3/16 = 0.1875; 2.057 × 10⁶ m⁻¹; 486 nm). */
export const INV32 = invLambda(2, 3), INV42 = invLambda(2, 4);
/** n_i slider: ΔE (eV) = hc/λ and λ (nm) for drops to n = 2 from 5 to 10 and ∞. */
export const SLIDE_N = [5, 6, 7, 8, 9, 10] as const;
/** Balmer limit: 1/λ = R/4 = 2.743 × 10⁶ m⁻¹; λ = 364.6 nm ("365"). */
export const INV_LIM = R_H / 4, LIM_NM = 1e9 / INV_LIM;
/** Visible photons, 750 to 380 nm: 1.65 to 3.27 eV. Lyman 2 → 1: 10.2 eV, 122 nm. Paschen ∞ → 3: 1.51 eV, 820 nm; 4 → 3: 0.66 eV, 1875 nm. */
export const VIS_LO = eVofNm(750), VIS_HI = eVofNm(380);
/** Attempt 1 (5 → 2): 1/λ = R × 0.21 = 2.304 × 10⁶ m⁻¹; λ = 4.34 × 10⁻⁷ m; E = hc/(4.34 × 10⁻⁷) = 4.58 × 10⁻¹⁹ J = 2.86 eV. */
export const A1_INV = invLambda(2, 5), A1_NM = rydbergNm(2, 5), A1_J = HC / 4.34e-7, A1_EV = A1_J / E_CH;
/** Attempt 2 (3 → 1): 1/λ = R × 8/9 = 9.751 × 10⁶ m⁻¹; λ = 1.03 × 10⁻⁷ m = 103 nm; ΔE = 13.6 × 8/9 = 12.1 eV. */
export const A2_INV = invLambda(1, 3), A2_NM = rydbergNm(1, 3), A2_EV = 13.6 * (8 / 9);

export const HEAD = 'How do hydrogen energy gaps predict Balmer wavelengths?';
export const HEAD_NEXT = 'What evidence shows that particles have wave behaviour?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
