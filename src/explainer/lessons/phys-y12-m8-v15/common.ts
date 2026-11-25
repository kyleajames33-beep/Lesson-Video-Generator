// phys-y12-m8-v15 (Year 12 Physics M8 V15: half-life and radioactive decay, why does half-life predict a population but
// not one atom?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE
// is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root fix) carry identical narration (5,636 characters, 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v15/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v15: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v15: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
export const LN2 = Math.LN2;
/** Counters: seeded chance-engine throws (coins, p = 1/2) chosen so the run reads 200, 103, 49, 27 (seeds 2, 1, 11:
 *  97, 54 and 22 red-up counters removed); expected 200, 100, 50, 25. */
export const COUNTER_SEEDS = [2, 1, 11] as const;
export const COUNTS = [200, 103, 49, 27] as const, EXPECTED = [200, 100, 50, 25] as const;
/** Half-life ruler (author table): Po-214 1.64 × 10⁻⁴ s; I-131 8.02 days; C-14 5730 years; U-238 4.47 × 10⁹ years. */
const YR = 3.156e7, DAY = 86400;
export const RULER = [
	{label: 'polonium-214: 1.6 × 10⁻⁴ s', s: 1.64e-4},
	{label: 'iodine-131: 8.0 days', s: 8.02 * DAY},
	{label: 'carbon-14: 5730 years', s: 5730 * YR},
	{label: 'uranium-238: 4.5 × 10⁹ years', s: 4.47e9 * YR},
] as const;
/** Secondary data (author note e): t = 0 to 240 s; corrected 40.0, 22.4, 11.9, 6.9, 3.5 counts per second; background
 *  0.5, so measured = corrected + 0.5; model 40 × 2^(−t/70); halving read at 70 s from 40 → 20 and 20 → 10. */
export const DATA_T = [0, 60, 120, 180, 240] as const, CORRECTED = [40.0, 22.4, 11.9, 6.9, 3.5] as const, BACKGROUND = 0.5;
export const MEASURED = CORRECTED.map(c => Math.round((c + BACKGROUND) * 10) / 10);
export const DATA_HALF = 70, dataModel = (t: number) => 40 * 2 ** (-t / DATA_HALF);
/** Iodine-131: t½ = 8.0 days, A₀ = 640 Bq. 24 days: n = 3, A = 80 Bq. 10 days: λ = 0.08664 → 0.0866 day⁻¹; λt = 0.866;
 *  e^(−0.866) = 0.4206 → 0.421; A = 640 × 0.4206 = 269.2 → 269 Bq. Slider (unrounded λ): 640, 320, 269.1, 160, 80. */
export const I_HALF = 8.0, I_A0 = 640, I_T1 = 24, I_T2 = 10;
export const I_N = I_T1 / I_HALF, I_A1 = I_A0 * 0.5 ** I_N;
export const I_LAM = Math.round((LN2 / I_HALF) * 10000) / 10000, I_LT = Math.round(I_LAM * I_T2 * 1000) / 1000, I_EXP = Math.exp(-I_LT), I_A2 = I_A0 * I_EXP;
export const iAct = (t: number) => I_A0 * Math.exp((-LN2 / I_HALF) * t);
/** Crossed slips: 640/3 = 213.3 Bq; λ = ln2 × 8.0 = 5.55 day⁻¹ gives 640e^(−55.5) ≈ 5 × 10⁻²² Bq ("≈ 0"). */
export const SLIP9 = I_A0 / 3, SLIP10_LAM = LN2 * I_HALF;
/** Attempt 1, P-32: t½ = 14.3 days, N₀ = 8.0 × 10¹⁰, t = 30.0 days: λ = 0.04847 → 0.0485 day⁻¹ (5.61 × 10⁻⁷ s⁻¹);
 *  λt = 1.455; N = 8.0 × 10¹⁰ × e^(−1.455) = 1.867 × 10¹⁰ → 1.87 × 10¹⁰. */
export const P_HALF = 14.3, P_N0 = 8.0e10, P_T = 30.0;
export const P_LAM = Math.round((LN2 / P_HALF) * 10000) / 10000, P_LAM_S = LN2 / (P_HALF * DAY), P_LT = Math.round(P_LAM * P_T * 1000) / 1000, P_N = P_N0 * Math.exp(-P_LT);
/** Small samples: seeded particle-box runs of 20 (seeds 15, 2, 1) leave 7, 10 and 13 after one half-life. */
export const SMALL_SEEDS = [15, 2, 1] as const, SMALL_LEFT = [7, 10, 13] as const;

export const HEAD = 'Why does half-life predict a population but not one atom?';
export const HEAD_NEXT = 'How does missing mass measure nuclear binding energy?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
