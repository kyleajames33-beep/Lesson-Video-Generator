// phys-y12-m7-v09 (Year 12 Physics M7 V09: black-body radiation, how did thermal spectra challenge classical predictions?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,442 characters, 18 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v09/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {planck} from '../../sims/blackbody';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v09: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v09: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Wien's constant and Planck's constant from the HSC data sheet. */
export const B = 2.898e-3, H_PLANCK = 6.626e-34;
/** Peak wavelength (nm) from λ_max = b / T: 1000 K 2898, 3500 K 828.0, 5000 K 579.6, 5800 K 499.7, 10 000 K 289.8. */
export const peak = (T: number) => (B / T) * 1e9;
export const T_SUN = 5800, T_COOL = 3500, T_HOT = 10000, T_HEATER = 1000, T_TEA = 330;
export const SLIDER_T = [1000, 3500, 5000, 10000] as const;
/** Sun check: (2.898e-3) / 5800 = 5.0e-7 m = 500 nm. */
export const SUN_PEAK = B / T_SUN;
/** Worked example (site Q5 star): 290 nm = 2.90e-7 m; T = (2.898e-3) / (2.90e-7) = 9993 K ≈ 1.0e4 K. */
export const WE_L = 2.9e-7;
export const WE_T = B / WE_L;
/** Attempt 1 (original): 420 nm: T = (2.898e-3) / (4.20e-7) = 6900 K; the slip (2.898e-3) / 420 = 6.9e-6 K. */
export const A1_L = 4.2e-7;
export const A1_T = B / A1_L;
export const A1_SLIP = B / 420;
/** Mode count: halving λ multiplies the number of patterns by 2³ = 8 (a 3D box). */
export const MODE_FACTOR = 2 ** 3;
/** Display reference for the compressed plot: the 5800 K peak radiance. */
export const REF5800 = planck(B / T_SUN, T_SUN);

export const HEAD = 'How did thermal spectra challenge classical predictions?';
export const HEAD_NEXT = 'Why can bright low-frequency light fail to eject electrons?';
export const HEAD_SIZE = 48;
export const ACCENT = '#8e3b78';
