// phys-y12-m8-v10 (Year 12 Physics M8 V10: limits of the Rutherford and Bohr models, why couldn't Rutherford's model explain
// stable atoms and line spectra?). Lesson lookups and every displayed number. Every change is keyed to the frame at
// which its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the
// import below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root edit) carry identical narration (6,029 characters, 21 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v10/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v10: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v10: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: h = 6.626 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; k = 8.99 × 10⁹. */
export const H = 6.626e-34, C = 3.0e8, E_CH = 1.602e-19, M_E = 9.109e-31, K_C = 8.99e9;
/** Classical collapse time for hydrogen from a₀: t = a₀³/(4 r_e² c) = 1.55 × 10⁻¹¹ s ("about ten to the minus eleven"). */
export const A0 = 5.29e-11, R_E = 2.818e-15, T_COLLAPSE = A0 ** 3 / (4 * R_E * R_E * C);
/** Classical circular orbit about a proton at radius r: f = √(ke²/(m r)) / (2πr); emitted λ = c/f.
 *  8a₀ 1031 nm, 6a₀ 670 nm, 5a₀ 509 nm, 4a₀ 365 nm, a₀ 45.6 nm. */
export const orbitF = (rA0: number) => { const r = rA0 * A0; return Math.sqrt((K_C * E_CH * E_CH) / (M_E * r)) / (2 * Math.PI * r); };
export const orbitNm = (rA0: number) => (C / orbitF(rA0)) * 1e9;
/** Hydrogen's four bright visible lines (n = 3, 4, 5, 6 to 2) and the faint 397 nm line (7 to 2), from 1/λ = R(1/4 − 1/n²). */
import {rydbergNm} from '../../physics/atom/bohr';
export {rydbergNm};
export const BRIGHT_N = [3, 4, 5, 6] as const;
export const lineNm = (ni: number) => rydbergNm(2, ni);
/** Ground state and ionisation energy: E₁ = −13.6 eV; 13.6 eV = 2.18 × 10⁻¹⁸ J. */
export const E1 = -13.6, ION_J = 13.6 * E_CH;
/** Helium lines (measured, nm) for the sketch in scene 12. */
export const HE_LINES = [447.1, 471.3, 492.2, 501.6, 587.6, 667.8] as const;

export const HEAD = "Why couldn't Rutherford's model explain stable atoms and line spectra?";
export const HEAD_NEXT = 'How do hydrogen energy gaps predict Balmer wavelengths?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
