// phys-y12-m7-v10 (Year 12 Physics M7 V10: the photoelectric effect, why can bright low-frequency light fail to eject
// electrons?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,277 characters, 18 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v10/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v10: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v10: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: h, c and the electron volt. */
export const H = 6.626e-34, C = 3.0e8, EV = 1.602e-19;
/** Photon energy in joules and electron volts for a wavelength in nm (E = hc / λ). */
export const eJ = (nm: number) => (H * C) / (nm * 1e-9);
export const eV = (nm: number) => eJ(nm) / EV;
export const fOf = (nm: number) => C / (nm * 1e-9);
/** Zinc (site Activity 2): ϕ = 4.3 eV = 6.889e-19 J; f₀ = 1.040e15 Hz; λ₀ = 288.6 nm (shown 289 nm, 4.30 eV). */
export const PHI = 4.3, PHI_J = PHI * EV, F0 = PHI_J / H, L0 = ((H * C) / PHI_J) * 1e9;
/** Red 700 nm: 2.840e-19 J = 1.773 eV, f = 4.286e14 Hz. Ultraviolet 250 nm: 7.951e-19 J = 4.963 eV, f = 1.200e15 Hz. */
export const L_RED = 700, L_UV = 250;
/** Left over for the ultraviolet photon: 4.963 − 4.3 = 0.66 eV (said "about 0.7"). */
export const SPARE = eV(L_UV) - PHI;
/** Live bench stops (Revision 2): 700, 400, λ₀, 250, 200 nm; K_max = hf − ϕ or 0. */
export const BENCH = [L_RED, 400, L0, L_UV, 200] as const;
export const kmax = (nm: number) => Math.max(0, eV(nm) - PHI);
/** Delay estimate: I = 1 W m⁻², A = 1e-20 m²: P = 1e-20 W; t = 6.889e-19 / 1e-20 = 68.9 s ≈ 69 s; ratio 6.9e10. */
export const I_DIM = 1, A_ATOM = 1e-20, P_ATOM = I_DIM * A_ATOM, T_WAIT = PHI_J / P_ATOM, T_OBS = 1e-9, RATIO = T_WAIT / T_OBS;
/** Crossed slip: hc / 700 = 2.840e-28 J (nm not converted). */
export const SLIP = (H * C) / 700;
/** Attempt 1 (original): potassium 2.3 eV; 600 nm 3.313e-19 J = 2.068 eV; 400 nm 4.970e-19 J = 3.102 eV. */
export const PHI_K = 2.3, A1_O = 600, A1_V = 400;

export const HEAD = 'Why can bright low-frequency light fail to eject electrons?';
export const HEAD_NEXT = "How do photoelectric graphs reveal Planck's constant and work function?";
export const HEAD_SIZE = 48;
export const ACCENT = '#8e3b78';
