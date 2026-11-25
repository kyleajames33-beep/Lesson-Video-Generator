// phys-y12-m7-v07 (Year 12 Physics M7 V07: diffraction gratings, how does a grating let us measure wavelength?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,157 characters, 16 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v07/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {brightAngles, gratingSpacing, highestOrder} from '../../sims/waves';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v07: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v07: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
const deg = (r: number) => (r * 180) / Math.PI;
const rad = (d: number) => (d * Math.PI) / 180;

/** Worked example (site MC values): 400 lines per mm → N = 4.00e5 per m, d = 1/N = 2.5e-6 m. */
export const N400 = 400e3;
export const D = gratingSpacing(N400);
/** Screen: first-order spot x = 0.268 m at L = 1.00 m: θ = tan⁻¹(0.268) = 15.0° (to 3 s.f.). */
export const X1 = 0.268, L1 = 1.0;
export const TH1 = deg(Math.atan(X1 / L1));
export const TH1R = Math.round(TH1 * 10) / 10;
export const SIN15 = Math.sin(rad(15)), TAN15 = Math.tan(rad(15));
/** λ = d sin 15.0° / 1 = 6.47e-7 m = 647 nm; the tan slip 6.70e-7 m = 670 nm. */
export const LAM = D * Math.sin(rad(TH1R));
export const LAM_TAN = D * Math.tan(rad(TH1R));
/** Second order: sin θ₂ = 2λ/d = 0.518, θ₂ = 31.2°, x₂ = 0.605 m. */
export const S2 = (2 * LAM) / D;
export const TH2 = deg(Math.asin(S2));
export const X2 = Math.tan(Math.asin(S2)) * L1;
/** Highest order: d/λ = 3.86 → m = 3 (engine highestOrder); θ₃ = 50.9°, x₃ = 1.23 m. */
export const DL = D / LAM;
export const MMAX = highestOrder(D, LAM);
export const TH3 = deg(Math.asin((3 * LAM) / D));
export const X3 = Math.tan(Math.asin((3 * LAM) / D)) * L1;
/** Every order on the fan, from the waves engine (degrees). */
export const ORDERS = brightAngles(D, LAM).map(o => ({m: o.m, deg: deg(o.angle)}));
/** Wavelength slider: θ₁ = sin⁻¹(λ/d) for 450, 532, 647 nm: 10.4°, 12.3°, 15.0°. */
export const SLIDER_NM = [450, 532, 647] as const;
export const th1For = (nm: number) => deg(Math.asin((nm * 1e-9) / D));
/** Slit-count readouts: peak width relative to two slits ≈ 2/N. */
export const SLITS = [2, 6, 20, 1000] as const;
export const widthRel = (N: number) => 2 / N;
/** Tilt (author note f): grating turned α; θ_R = sin⁻¹(sin α + sin 15°) − α, θ_L = α − sin⁻¹(sin α − sin 15°). */
export const tilt = (a: number) => {
	const s = Math.sin(rad(15)), A = rad(a);
	const R = deg(Math.asin(Math.sin(A) + s)) - a, L = a - deg(Math.asin(Math.sin(A) - s));
	return {R, L, mean: (R + L) / 2};
};
/** Precision picture (illustrative): the same ± 0.05° reading error on a 0.145° two-slit angle and on 15°. */
export const ERR = 0.05, TWO_ANGLE = 0.145;
export const PCT_TWO = (100 * ERR) / TWO_ANGLE, PCT_GRAT = (100 * ERR) / 15;
/** White light (d sin θ terms, nm): second-order red 2 × 700 = 1400 beyond third-order violet 3 × 400 = 1200. */
export const RED2 = 2 * 700, VIO3 = 3 * 400;

/** Attempt 1 (original): 532 nm, 300 lines per mm: d = 3.33e-6 m, sin θ₂ = 0.319, θ₂ = 18.6°, d/λ = 6.27 → 6. */
export const A1 = {lambda: 532e-9, N: 300e3};
export const A1_D = gratingSpacing(A1.N);
export const A1_S2 = (2 * A1.lambda) / A1_D;
export const A1_TH2 = deg(Math.asin(A1_S2));
export const A1_DL = A1_D / A1.lambda;
export const A1_MMAX = highestOrder(A1_D, A1.lambda);
/** Attempt 2 (original): 500 lines per mm, L = 0.800 m, x = 0.280 m: θ = 19.3°, d = 2.00e-6 m, λ = 6.61e-7 m = 661 nm. */
export const A2 = {N: 500e3, L: 0.8, x: 0.28};
export const A2_TH = deg(Math.atan(A2.x / A2.L));
export const A2_D = gratingSpacing(A2.N);
export const A2_LAM = A2_D * Math.sin(Math.atan(A2.x / A2.L));

export const HEAD = 'How does a grating let us measure wavelength?';
export const HEAD_NEXT = 'Why does rotating a polariser change transmitted intensity?';
export const HEAD_SIZE = 48;
export const ACCENT = '#8e3b78';
