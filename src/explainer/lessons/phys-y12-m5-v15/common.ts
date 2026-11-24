// phys-y12-m5-v15 (Year 12 Physics M5 V15: work in circular motion).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in
// the real take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v15/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {runMotion, stateAt} from '../../sims/field-motion';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v15: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v15: no response hold in ' + id);
	return h;
};
/** Keyframes forced to strictly increasing frames (each at least `gap` after the last). */
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

export const G = 9.8;
const rad = (d: number) => (d * Math.PI) / 180;

/** Last time's car on the 80 m bend banked at 12 degrees, at the design speed (v14). */
export const CAR = (() => {
	const m = 1200, r = 80, bank = 12;
	const v = Math.sqrt(r * G * Math.tan(rad(bank)));
	const F = (m * v * v) / r;
	const lap = 2 * Math.PI * r;
	const wrongW = F * lap; // the hook's force-times-distance (wrong)
	const K = 0.5 * m * v * v;
	const ghostK = K + wrongW; // if 1.26 MJ really went in each lap
	const ghostV = Math.sqrt((2 * ghostK) / m);
	return {m, r, bank, v, F, lap, wrongW, K, ghostK, ghostV, times: ghostV / v, barTimes: ghostK / K, lapTime: lap / v};
})();
/** The car's lap as a central run on the field motion engine (inward pull v^2/r), two laps long. */
export const CAR_RUN = runMotion({field: {kind: 'central', gm: CAR.v * CAR.v * CAR.r}, start: {x: CAR.r, y: 0, vx: 0, vy: CAR.v}, duration: 2 * CAR.lapTime, steps: 4800});
/** Display frames per lap (a time-lapse: the real lap takes 38.9 s). */
export const LAP_FRAMES = 240;
/** The car's state at a display frame count `k` since it set off from 3 o'clock (wraps every lap). */
export const carState = (k: number, lapFrames = LAP_FRAMES) => {
	const t = (((k / lapFrames) % 1) + 1) % 1 * CAR.lapTime;
	return stateAt(CAR_RUN, t);
};
/**
 * Work done by the inward force over the first n of `steps` equal steps of a lap, summed from the run as
 * F . v dt (force from the run's acceleration times the car's mass). Zero to rounding at every step.
 */
export const stepWork = (n: number, steps: number) => {
	const dt = CAR.lapTime / steps;
	let w = 0;
	for (let i = 0; i < n; i++) {
		const s = stateAt(CAR_RUN, (i + 0.5) * dt);
		w += CAR.m * (s.ax * s.vx + s.ay * s.vy) * dt;
	}
	return w;
};

/** The sliding block (illustrative): F = 10 N, s = 2.0 m, W = Fs cos theta. */
export const BLOCK = {F: 10, s: 2.0, W: (th: number) => 10 * 2.0 * Math.cos(rad(th))};

/** The vertical circle (site lesson 9 worked example 1): 0.50 kg on 0.80 m, 4.0 m/s at the top; U zero at the bottom. */
export const VC = (() => {
	const m = 0.5, r = 0.8, vTop = 4.0;
	const E = 0.5 * m * vTop * vTop + m * G * 2 * r;
	/** phi: angle round from the bottom (0 bottom, pi top). */
	const at = (phi: number) => {
		const h = r * (1 - Math.cos(phi));
		const v2 = vTop * vTop + 2 * G * (2 * r - h);
		return {h, v: Math.sqrt(v2), K: 0.5 * m * v2, U: m * G * h, E};
	};
	const Wg = m * G * 2 * r;
	const vBottom = Math.sqrt(vTop * vTop + 4 * G * r);
	return {m, r, vTop, E, at, Wg, vBottom, vb2: vTop * vTop + 4 * G * r};
})();
/**
 * The vertical circle on the field motion engine: uniform gravity and a string fixed at the origin, starting
 * at the top moving left at 4.0 m/s (anticlockwise on screen). About nine laps; the string stays taut throughout.
 */
export const VC_RUN = runMotion({field: {kind: 'uniform', ax: 0, ay: -G}, start: {x: 0, y: VC.r, vx: -VC.vTop, vy: 0}, constraint: {kind: 'string', cx: 0, cy: 0}, duration: 8, steps: 16000});
/** Slow-motion factor for the vertical circle (real lap about 0.9 s). */
export const VC_SLOW = 5;
export const vcState = (k: number) => stateAt(VC_RUN, Math.min(VC_RUN.duration, Math.max(0, k / 30 / VC_SLOW)));

/** Attempt 1: 0.30 kg, r = 0.60 m, 4.0 m/s on a smooth horizontal table. */
export const A1 = (() => {
	const m = 0.3, r = 0.6, v = 4.0;
	return {m, r, v, FT: (m * v * v) / r, K: 0.5 * m * v * v, wrongW: ((m * v * v) / r) * 2 * Math.PI * r};
})();
/** Attempt 2: 0.40 kg stone on 0.50 m, 3.0 m/s at the top of a vertical circle. */
export const A2 = (() => {
	const m = 0.4, r = 0.5, vTop = 3.0, h = 2 * r;
	const vb2 = vTop * vTop + 2 * G * h;
	return {m, r, vTop, h, vb2, vb: Math.sqrt(vb2), Wg: m * G * h};
})();

export const HEAD = 'Does the inward force do work in uniform circular motion?';
export const HEAD_V14 = 'How does a banked road reduce reliance on friction?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
