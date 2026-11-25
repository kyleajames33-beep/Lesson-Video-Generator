// phys-y12-m7-v12 (Year 12 Physics M7 V12: inertial frames and Einstein's postulates, why must observers agree on
// light speed?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,351 characters, 18 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v12/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v12: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v12: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet. */
export const holdIf = (id: string) => sc(id).responseHold;

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Hook (site Stop and Check): ship at 0.8c; Galilean 0.8c + c = 1.8c; measured c. */
export const BETA = 0.8, GALILEAN = BETA + 1;
/** Galilean addition (site warm-up re-staged): 20 + 10 = 30 km/s. */
export const V_SHIP = 20, V_PROBE = 10, V_EARTH = V_SHIP + V_PROBE;
/** Maxwell: 1 / √(μ₀ε₀) = 2.998e8 m/s ≈ 3.00e8 (data-sheet c). */
export const MU0 = 4 * Math.PI * 1e-7, EPS0 = 8.854e-12, C_MAXWELL = 1 / Math.sqrt(MU0 * EPS0);
/** Earth's orbital speed: 2π × 1.496e11 m / (365.25 × 86 400 s) = 2.98e4 m/s ≈ 30 km/s. */
export const V_ORBIT = (2 * Math.PI * 1.496e11) / (365.25 * 86400);
/** Michelson-Morley (site): expected ≈ 0.4 fringe, detectable ≈ 0.01 fringe (40 times smaller). */
export const MM_EXPECTED = 0.4, MM_DETECT = 0.01, MM_RATIO = MM_EXPECTED / MM_DETECT;
/** CERN 1964 (illustrative 30 m between gates): Galilean Δt = 30 / ((1 + β) × 3.00e8) = 100, 66.7, 52.6, 50.0 ns; measured 100 ns. */
export const GATE_M = 30, C = 3.0e8, PION_B = [0, 0.5, 0.9, 0.99975] as const;
export const dtGal = (b: number) => (GATE_M / ((1 + b) * C)) * 1e9;
export const DT_MEAS = (GATE_M / C) * 1e9;

export const HEAD = 'Why must observers agree on light speed?';
export const HEAD_NEXT = 'How can two observers measure different elapsed times?';
export const HEAD_SIZE = 50;
export const ACCENT = '#8e3b78';
