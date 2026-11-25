// phys-y12-m8-v08 (Year 12 Physics M8 V08: Rutherford scattering and the nucleus, why did scattering require a tiny
// dense nucleus?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3) carry identical narration (5,918 characters, 17 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v08/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v08: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v08: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Data sheet: e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; 1 u = 1.661 × 10⁻²⁷ kg; k = 8.99 × 10⁹ N m² C⁻². */
export const E_CH = 1.602e-19, M_E = 9.109e-31, U_KG = 1.661e-27, K_C = 8.99e9;
/** Alpha: 4.001506 u = 6.6465 × 10⁻²⁷ kg = 7297 m_e ("about seventy three hundred"); 7.7 MeV: v = 1.93 × 10⁷ m s⁻¹ ("around 2 × 10⁷"). */
export const M_ALPHA = 4.001506 * U_KG, ALPHA_ME = M_ALPHA / M_E, E_ALPHA = 7.7e6 * E_CH, V_ALPHA = Math.sqrt((2 * E_ALPHA) / M_ALPHA);
/** Largest deflection by one free electron: sin θ = m_e/m_α = 1.37 × 10⁻⁴ rad = 0.0079° (screen "< 0.01°"). */
export const E_DEFL_DEG = (Math.asin(M_E / M_ALPHA) * 180) / Math.PI;
/** Foil about 10⁻⁷ m; gold atom about 2.9 × 10⁻¹⁰ m across: about 345 atoms ("a few hundred"). */
export const FOIL = 1e-7, AU_ATOM = 2.9e-10, FOIL_ATOMS = FOIL / AU_ATOM;
/** Thin gold foil (Rutherford 1911): about 1 in 20 000 turned through about 90°. */
export const ONE_IN = 20000;
/** Arm readouts: relative count rate ∝ 1/sin⁴(θ/2), normalised to 1 at 150° (illustrative). */
export const relRate = (deg: number) => Math.sin((75 * Math.PI) / 180) ** 4 / Math.sin(((deg / 2) * Math.PI) / 180) ** 4;
export const ARM_ANGLES = [5, 15, 45, 90, 150] as const;
/** Closest approach of a 7.7 MeV alpha to gold: r = 2 × 79 × k e² / E = 2.96 × 10⁻¹⁴ m ("about 3 × 10⁻¹⁴"). */
export const R_CLOSE = (2 * 79 * K_C * E_CH * E_CH) / E_ALPHA, R_ATOM = 1e-10, R_SHOWN = 3e-14;
/** Ratio with the displayed distances: 10⁻¹⁰ / 3 × 10⁻¹⁴ = 3.3 × 10³; squared 1.1 × 10⁷ ("about ten million"); slip 3300. */
export const CLOSER = R_ATOM / R_SHOWN, STRONGER = CLOSER * CLOSER;
/** Head-on elastic collision: the alpha keeps ((M − m)/(M + m))² of its energy: gold (197, 4) 0.92. */
export const KEEP_GOLD = ((197 - 4) / (197 + 4)) ** 2;
/** Sizes: nuclei 10⁻¹⁵ to 10⁻¹⁴ m; gold nucleus 1.2 fm × 197^(1/3) = 7.0 fm, diameter 1.4 × 10⁻¹⁴ m; ratio 2.1 × 10⁴; 160 m oval → 7.6 mm. */
export const AU_NUC_D = 2 * 1.2e-15 * 197 ** (1 / 3), SIZE_RATIO = AU_ATOM / AU_NUC_D, OVAL_M = 160, PEA_MM = (OVAL_M / SIZE_RATIO) * 1000;
/** Gold: Z = 79, A = 197; the gap 197 − 79 = 118. */
export const AU_Z = 79, AU_A = 197, AU_GAP = AU_A - AU_Z;

export const HEAD = 'Why did scattering require a tiny dense nucleus?';
export const HEAD_NEXT = 'What evidence established an uncharged massive particle in the nucleus?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
