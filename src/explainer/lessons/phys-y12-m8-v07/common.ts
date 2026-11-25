// phys-y12-m8-v07 (Year 12 Physics M8 V07: discovering the electron, how did cathode rays and oil drops reveal the
// electron?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root label edit) carry identical narration (6,088 characters, 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v07/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v07: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v07: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; m_p = 1.673 × 10⁻²⁷ kg; g = 9.8 m s⁻². */
export const E_CH = 1.602e-19, M_E = 9.109e-31, M_P = 1.673e-27, G = 9.8;
/** Thomson stage 1 (illustrative): V = 300 V, d = 2.0 cm: E = 1.5 × 10⁴ V m⁻¹; B = 6.0 × 10⁻⁴ T; v = E/B = 2.5 × 10⁷ m s⁻¹. */
export const T_V = 300, T_D = 0.02, T_E = T_V / T_D, T_B = 6.0e-4, T_VEL = T_E / T_B;
/** Thomson stage 2 (illustrative): L = 5.0 cm; t = L/v = 2.0 × 10⁻⁹ s; y = 5.28 mm; q/m = 2yv²/(EL²) = 1.76 × 10¹¹ C kg⁻¹. */
export const T_L = 0.05, T_T = T_L / T_VEL, T_Y = 5.28e-3, Q_M = (2 * T_Y * T_VEL ** 2) / (T_E * T_L ** 2);
/** Scene 6 slip (v not squared): 2yv/(EL²) = 7.04 × 10³ (shown 7.0 × 10³). */
export const Q_M_SLIP = (2 * T_Y * T_VEL) / (T_E * T_L ** 2);
/** Ratio comparison: e/m_p = 9.58 × 10⁷ C kg⁻¹; m_p/m_e = 1836.6 (screen ≈ 1840, spoken "about eighteen hundred"). */
export const Q_M_P = E_CH / M_P, MASS_RATIO = M_P / M_E;
/** Worked drop: m = 1.96 × 10⁻¹⁵ kg, V = 600 V, d = 0.010 m: E = 6.0 × 10⁴ V m⁻¹; |q| = 3.20 × 10⁻¹⁹ C = 2.00 e. */
export const D_M = 1.96e-15, D_V = 600, D_D = 0.01, D_E = D_V / D_D, D_Q = (D_M * G) / D_E, D_N = D_Q / E_CH;
/** Millikan slider: mg = 1.92 × 10⁻¹⁴ N; V = 0, 300, 600, 900 V: qE = 0, 0.96, 1.92, 2.88 × 10⁻¹⁴ N (|q| = 2e). */
export const MG = D_M * G, SLIDER_V = [0, 300, 600, 900] as const, qE_at = (V: number) => 2 * E_CH * (V / D_D);
/** Charge axis (illustrative): 1e to 6e (× 10⁻¹⁹ C). */
export const AXIS_Q = [1, 2, 3, 4, 5, 6].map(n => (n * E_CH) / 1e-19);
/** Electron mass: m = e ÷ (e/m) = 1.602 × 10⁻¹⁹ / 1.76 × 10¹¹ = 9.10 × 10⁻³¹ kg. */
export const Q_M_SHOWN = 1.76e11, M_E_CALC = E_CH / Q_M_SHOWN;
/** Attempt 1: m = 4.9 × 10⁻¹⁵ kg, V = 1000 V, d = 0.010 m: E = 1.0 × 10⁵ V m⁻¹; |q| = 4.80 × 10⁻¹⁹ C; n = 3.00; slip mg/V = 4.80 × 10⁻¹⁷ C. */
export const A1_M = 4.9e-15, A1_V = 1000, A1_D = 0.01, A1_E = A1_V / A1_D, A1_Q = (A1_M * G) / A1_E, A1_N = A1_Q / E_CH, A1_SLIP = (A1_M * G) / A1_V;

export const HEAD = 'How did cathode rays and oil drops reveal the electron?';
export const HEAD_NEXT = 'Why did scattering require a tiny dense nucleus?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
