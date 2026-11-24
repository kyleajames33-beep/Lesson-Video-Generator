// phys-y12-m5-v16 (Year 12 Physics M5 V16: testing F = mv^2/r with the whirling bung).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame. The word times are the measured take.
// Keyframe lists go through `mono`, so sequences can never run backwards.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v16/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** False: the word times are the measured take. */
export const PROVISIONAL = false;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v16: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v16: no response hold in ' + id);
	return h;
};
/** Keyframes forced to strictly increasing frames (each at least `gap` after the last). */
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

export const G = 9.8;
const deg = (r: number) => (r * 180) / Math.PI;

/** The illustrative apparatus: 25 g bung on 0.80 m of string. */
export const APP = {m: 0.025, L: 0.8};
/** Model (Mg = m omega^2 L) for hanging mass M (kg): weight, omega, omega squared, droop (sin alpha = m/M), ideal 20-turn time. */
export const model = (M: number) => {
	const Mg = M * G, w2 = Mg / (APP.m * APP.L), w = Math.sqrt(w2);
	return {M, Mg, w, w2, alpha: deg(Math.asin(Math.min(1, APP.m / M))), t20: (20 * 2 * Math.PI) / w, r: APP.L * Math.cos(Math.asin(Math.min(1, APP.m / M)))};
};
export const MASSES = [0.05, 0.1, 0.15, 0.2];
/** The illustrative results (mean 20-revolution times), one row per hanging mass. */
export const T20 = [25.5, 18.1, 14.8, 12.8];
export const ROWS = MASSES.map((M, i) => {
	const t20 = T20[i], T = t20 / 20, w = (2 * Math.PI) / T;
	return {M, Mg: M * G, t20, T, w, w2: w * w, pct: (2 * 0.2 * 100) / t20, ideal: model(M).w2};
});
/** Least-squares gradient through the origin of Mg against omega squared, and the inferred bung mass. */
export const FIT = (() => {
	const sxy = ROWS.reduce((a, r) => a + r.Mg * r.w2, 0), sxx = ROWS.reduce((a, r) => a + r.w2 * r.w2, 0);
	const k = sxy / sxx;
	return {k, m: k / APP.L, pred: APP.m * APP.L, diffPct: ((k / APP.L - APP.m) / APP.m) * 100, wrong: k * APP.L};
})();
/** Timing uncertainty: +/- 0.2 s in the 18.1 s run (period and omega), doubled by squaring; string length +/- 0.01 m. */
export const UNC = {dt: 0.2, perT: 0.2 / 20, pctT: (0.2 / 18.1) * 100, pctW2: 2 * (0.2 / 18.1) * 100, pctL: (0.01 / APP.L) * 100};
export const REPEATS = [18.0, 18.2, 18.1];
export const MEAN = REPEATS.reduce((a, b) => a + b, 0) / REPEATS.length;
/** Hook: four times the hanging mass turns sqrt(4) = 2 times as fast; the illustrative times give 25.5 / 12.8. */
export const RATIO = {model: Math.sqrt(4), data: T20[0] / T20[3]};

/** Attempt 1: 0.50 m, 20 g bung, 100 g hanging, 20 turns in 14.0 s. */
export const A1 = (() => {
	const L = 0.5, m = 0.02, M = 0.1, t20 = 14.0;
	const T = t20 / 20, w = (2 * Math.PI) / T, f = m * w * w * L, Mg = M * G;
	return {L, m, M, T, w, f, Mg, less: ((Mg - f) / Mg) * 100};
})();
/** Attempt 2: gradient 0.0080 kg m at L = 0.40 m. */
export const A2 = {k: 0.008, L: 0.4, m: 0.008 / 0.4, wrong: 0.008 * 0.4};

export const HEAD = 'How can measurements test the circular-force relationship?';
export const HEAD_V15 = 'Does the inward force do work in uniform circular motion?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
