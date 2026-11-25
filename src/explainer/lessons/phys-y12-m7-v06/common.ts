// phys-y12-m7-v06 (Year 12 Physics M7 V06: double-slit interference, why do two slits produce regularly spaced bright
// and dark bands?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,253 characters, 16 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v06/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v06: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v06: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Fringe spacing (m) for wavelength, slit-to-screen distance and slit separation (m): Δx = λL / d. */
export const spacing = (lambda: number, L: number, d: number) => (lambda * L) / d;
const deg = (r: number) => (r * 180) / Math.PI;

/** Worked example (site): 632.8 nm, d = 0.25 mm, L = 2.4 m: Δx = 6.075 mm; the slip without mm conversion 6.075e-6 m. */
export const WE = {lambda: 632.8e-9, d: 0.25e-3, L: 2.4};
export const WE_DX = spacing(WE.lambda, WE.L, WE.d);
export const WE_SLIP = (WE.lambda * WE.L) / 0.25;
/** First bright band's angle: sin θ₁ = λ / d = 2.5312e-3, θ₁ = 0.14503 degrees; sin and tan agree there. */
export const WE_SIN1 = WE.lambda / WE.d;
export const WE_TH1 = deg(Math.asin(WE_SIN1));
export const WE_TAN1 = Math.tan(Math.asin(WE_SIN1));
/** The contrast row: 30 degrees. */
export const S30 = Math.sin(Math.PI / 6), T30 = Math.tan(Math.PI / 6);
/** Reverse (site): measured 3.8 mm with the same slits and screen: λ = Δx d / L = 3.958e-7 m. */
export const REV_DX = 3.8e-3;
export const REV_L = (REV_DX * WE.d) / WE.L;

/** Spacing sliders (λ m, L m, d m): 0.90, 1.30, 2.60, 5.20, then 2.60 mm. */
export const SLIDES: readonly (readonly [number, number, number])[] = [[450e-9, 1.0, 0.5e-3], [650e-9, 1.0, 0.5e-3], [650e-9, 2.0, 0.5e-3], [650e-9, 2.0, 0.25e-3], [650e-9, 2.0, 0.5e-3]];

/** Attempt 1 (original): 532 nm, d = 0.30 mm, L = 1.8 m: 3.192 mm; doubled d 1.596 mm; the wrong doubling 6.384 mm. */
export const A1 = {lambda: 532e-9, d: 0.3e-3, L: 1.8};
export const A1_DX = spacing(A1.lambda, A1.L, A1.d);
export const A1_DX2 = spacing(A1.lambda, A1.L, 2 * A1.d);
export const A1_WRONG = 2 * A1_DX;
/** Attempt 2 (original): 600 nm; second dark band: 1.5 λ = 900 nm. */
export const A2_L = 600e-9;
export const A2_PD = 1.5 * A2_L;
/** Reading error on one spacing (illustrative). */
export const READ_ERR = 0.5;

export const HEAD = 'Why do two slits produce regularly spaced bright and dark bands?';
export const HEAD_NEXT = 'How does a grating let us measure wavelength?';
export const HEAD_SIZE = 48;
export const ACCENT = '#8e3b78';
