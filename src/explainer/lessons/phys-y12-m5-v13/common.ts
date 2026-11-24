// phys-y12-m5-v13 (Year 12 Physics M5 V13: the conical pendulum).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken (cueFrame
// throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in the real
// take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v13/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v13: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v13: no response hold in ' + id);
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
/** The worked example (site worked example 1): m = 0.20 kg, L = 0.50 m, 30 degrees. */
export const WE = (() => {
	const m = 0.2, L = 0.5, th = 30;
	const r = L * Math.sin(rad(th)), h = L * Math.cos(rad(th)), mg = m * G, FT = (m * G) / Math.cos(rad(th));
	const v = Math.sqrt(r * G * Math.tan(rad(th)));
	return {m, L, th, r, h, mg, FT, v, T: (2 * Math.PI * r) / v, side: FT * Math.sin(rad(th)), wrongV: Math.sqrt(L * G * Math.tan(rad(th)))};
})();
/** Attempt 1: 0.50 kg, 0.80 m, 35 degrees. Attempt 2: 0.40 m, 25 degrees. */
export const A1 = (() => {
	const m = 0.5, L = 0.8, th = 35, r = L * Math.sin(rad(th));
	return {m, L, th, r, FT: (m * G) / Math.cos(rad(th)), v: Math.sqrt(r * G * Math.tan(rad(th)))};
})();
export const A2 = (() => {
	const L = 0.4, th = 25, h = L * Math.cos(rad(th)), r = L * Math.sin(rad(th)), v = Math.sqrt(r * G * Math.tan(rad(th)));
	return {L, th, h, r, v, T: 2 * Math.PI * Math.sqrt(h / G), wrongT: 2 * Math.PI * Math.sqrt(L / G)};
})();
/** Steady state of the worked pendulum (m = 0.20 kg, L = 0.50 m) at angle th degrees. */
export const steady = (th: number) => {
	const r = WE.L * Math.sin(rad(th));
	return {r, v: Math.sqrt(r * G * Math.tan(rad(th))), FT: WE.mg / Math.cos(rad(th)), side: WE.mg * Math.tan(rad(th))};
};

export const HEAD = 'How does string tension sustain a conical pendulum?';
export const HEAD_V12 = 'Which force supplies the inward acceleration on a flat curve?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
