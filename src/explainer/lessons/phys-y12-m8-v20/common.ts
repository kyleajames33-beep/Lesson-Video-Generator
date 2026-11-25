// phys-y12-m8-v20 (Year 12 Physics M8 V20: evidence for quarks and new particles, what evidence shows that protons and
// neutrons have smaller constituents?). Lesson lookups and every displayed number. Every change is keyed to the frame at
// which its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the
// import below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root fix) carry identical narration (6,190 characters, 20 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v20/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v20: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v20: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, e = 1.602 × 10⁻¹⁹ C. */
export const H_PL = 6.626e-34, C_L = 3.0e8, E_CH = 1.602e-19;
/** Proton diameter about 1.7 fm (charge radius 0.84 fm; author note a). */
export const D_P = 1.7e-15;
/** Probe wavelength λ = hc/E with p ≈ E/c, E in GeV: 1, 5, 20 GeV give 1.241 × 10⁻¹⁵, 2.482 × 10⁻¹⁶, 6.204 × 10⁻¹⁷ m;
 *  proton diameter ÷ λ = 1.37, 6.85, 27.4 (shown 1.4, 6.9, 27; said "about thirty times"). */
export const lambdaAt = (eGeV: number) => (H_PL * C_L) / (eGeV * 1e9 * E_CH);
export const ratioAt = (eGeV: number) => D_P / lambdaAt(eGeV);
export const E_STEPS = [1, 5, 20] as const;
export const L20 = lambdaAt(20), R20 = ratioAt(20);
/** Quark charges in thirds of e: u +2, d −1. Sums: uud +3/3 = +1, udd 0, uuu +6/3 = +2. */
export const Q_U = 2 / 3, Q_D = -1 / 3;
export const Q_P = 2 * Q_U + Q_D, Q_N = Q_U + 2 * Q_D, Q_X = 3 * Q_U;
/** Muon mass 105.7 MeV/c² against the electron's 0.511: 206.8 ("about two hundred times", screen ≈ 207). */
export const M_MU = 105.7, M_E = 0.511, MU_RATIO = M_MU / M_E;
/** Muon mean life 2.2 μs (screen "about 2 μs"). Electron point-like below about 10⁻¹⁸ m (author note c). */
export const MU_LIFE = 2.2;

export const HEAD = 'What evidence shows that protons and neutrons have smaller constituents?';
export const HEAD_NEXT = 'How does the Standard Model organise particles and interactions?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
