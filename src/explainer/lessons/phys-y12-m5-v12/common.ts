// phys-y12-m5-v12 (Year 12 Physics M5 V12: cars on flat curves).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken (cueFrame
// throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in the real
// take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v12/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v12: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v12: no response hold in ' + id);
	return h;
};
/** Keyframes forced to strictly increasing frames (each at least `gap` after the last). */
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

export const G = 9.8;
/** WE1 (needed friction), WE2 (limiting speed), wet road, attempts. */
export const WE1 = {m: 1200, r: 40, v: 15, f: (1200 * 15 * 15) / 40};
export const WE2 = {r: 30, mu: 0.6, vmax: Math.sqrt(0.6 * G * 30)};
export const WET = {mu: 0.3, vmax: Math.sqrt(0.3 * G * 30)};
export const A1 = {m: 1200, r: 45, mu: 0.65, vmax: Math.sqrt(0.65 * G * 45)};
export const A2 = {m: 1500, r: 15, mu: 0.4, v: 35 / 3.6, need: (1500 * (35 / 3.6) ** 2) / 15, avail: 0.4 * 1500 * G, vmax: Math.sqrt(0.4 * G * 15)};
/** The slider car on WE2's bend: needed friction at speed v for mass m. */
export const needed = (m: number, v: number, r = WE2.r) => (m * v * v) / r;
export const avail = (m: number, mu = WE2.mu) => mu * m * G;

export const HEAD = 'Which force supplies the inward acceleration on a flat curve?';
/** v11's final heading (its last frame is this lesson's first frame); kept until "answer is friction". */
export const HEAD_V11 = 'Which real force pulls it in?';
export const HEAD_V11_SIZE = 56;
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
