// phys-y12-m7-v02 (Year 12 Physics M7 V02: measuring the speed of light, how can a time-and-distance measurement
// reveal the speed of light?). Lesson lookups and every displayed number. Every change is keyed to the frame at which
// its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import
// below to the measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3, 6,123 characters, 14 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v02/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v02: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v02: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Defined speed of light (exact) and the rounded value. */
export const C_EXACT = 299792458;
export const C3 = 3.0e8;
/** Romer (site values): orbit diameter 3.0 x 10^11 m over 1000 s = 3.0 x 10^8; radius slip 1.5 x 10^8; 22 min = 1320 s -> 2.3 x 10^8. */
export const R_D = 3.0e11, R_T = 1000;
export const R_V = R_D / R_T;
export const R_WRONG = R_D / 2 / R_T;
export const R_MIN = 22, R_T22 = R_MIN * 60;
export const R_V22 = R_D / R_T22;
export const IO_H = 42.5;
/** Fizeau (1849 values): N = 720, f = 12.6 turns per second, d = 8633 m. t = 1 / (2Nf) = 5.51 x 10^-5 s; c = 2d / t = 3.13 x 10^8. */
export const FZ_N = 720, FZ_F = 12.6, FZ_D = 8633;
export const gapToTooth = (f: number, n = FZ_N) => 1 / (2 * n * f);
export const FZ_T = gapToTooth(FZ_F);
export const FZ_C = (2 * FZ_D) / FZ_T;
/** Slider: 6.3 turns per second gives 110 us; the round trip 2d / c is 55 us. Slip: a whole tooth period, c = 1.57 x 10^8. */
export const FZ_F0 = 6.3;
export const FZ_ROUND = (2 * FZ_D) / FZ_C;
export const FZ_WRONG = (2 * FZ_D) / (1 / (FZ_N * FZ_F));
/** Foucault (1862): about 2.98 x 10^8 m/s. */
export const FC_V = 2.98e8;
/** Time of flight (illustrative): mirror 15.0 m away, extra path 30.0 m, delay 101 ns -> 2.97 x 10^8; slip 30.0 / 101 = 0.297. */
export const TOF_D = 15.0, TOF_PATH = 2 * 15.0, TOF_DT = 101e-9;
export const TOF_V = TOF_PATH / TOF_DT;
export const TOF_WRONG = TOF_PATH / 101;
/** Gradient graph (illustrative): extra paths and delays scattered about path / c. */
export const TOF_PTS: [number, number][] = [[20, 6], [41, 12], [60, 18], [79, 24], [101, 30]];
/** Lunar ranging: t = 2.56 s round trip, d = ct / 2 = 3.84 x 10^8 m; slip d = ct = 7.67 x 10^8 m. */
export const LR_T = 2.56;
export const LR_D = (C_EXACT * LR_T) / 2;
export const LR_WRONG = C_EXACT * LR_T;
/** GPS: 1 us x c = 299.8 m, about 300 m. */
export const GPS_ERR = 1e-6 * C_EXACT;
/** Attempt 1: N = 500, d = 7.50 km, f = 20.0 turns per second: t = 5.00 x 10^-5 s, c = 15 000 / t = 3.00 x 10^8; slip 1.50 x 10^8. */
export const A1_N = 500, A1_D = 7500, A1_F = 20.0;
export const A1_T = gapToTooth(A1_F, A1_N);
export const A1_C = (2 * A1_D) / A1_T;
export const A1_WRONG = A1_D / A1_T;
/** Attempt 2: t = 2.51 s, d = ct / 2 = 3.76 x 10^8 m; slip 7.52 x 10^8 m. */
export const A2_T = 2.51;
export const A2_D = (C_EXACT * A2_T) / 2;
export const A2_WRONG = C_EXACT * A2_T;

export const HEAD = 'How can a time-and-distance measurement reveal the speed of light?';
export const HEAD_NEXT = 'How do different sources produce different spectral patterns?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
/** The exact defined value with thin spaces as printed: 299 792 458. */
export const C_TEXT = '299 792 458';
