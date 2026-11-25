// phys-y12-m6-v09 (Year 12 Physics M6 V09: magnetic flux, Φ = B∥A = BA cos θ).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The provisional file was made from the CURRENT design narration (coherence fix of 24 November: scene 4 carries
// "Cos is close. The part that goes through sits next to theta ..."), not from the stale prepared input.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v09/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v09: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v09: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

// ---------------------------------------------------------------- numbers (HSC data sheet values)

// ---------------------------------------------------------------- numbers (site values, recalculated)
const rad = (d: number) => (d * Math.PI) / 180;
export const cosd = (d: number) => Math.cos(rad(d));
/** Scene 5's live loop: B = 0.50 T, A = 0.040 m², so BA = 0.020 Wb. */
export const LIVE = {B: 0.5, A: 0.04, BA: 0.5 * 0.04, phi: (deg: number) => 0.5 * 0.04 * Math.cos(rad(deg))};
/** The worked example (site, corrected): r = 4.0 cm, 0.30 T; plane at 40° to the field, so θ = 50°. */
export const WE = (() => {
	const r = 0.04, B = 0.3, A = Math.PI * r * r, phiA = B * A, theta = 90 - 40;
	return {r, B, A, phiA, theta, phiB: phiA * Math.cos(rad(theta)), slip: phiA * Math.cos(rad(40))};
})();
/** Attempt 1: 0.020 m² in 0.60 T, face on then turned through 60°; the sin slip. */
export const A1 = {A: 0.02, B: 0.6, phi0: 0.6 * 0.02, phi60: 0.6 * 0.02 * Math.cos(rad(60)), slip: 0.6 * 0.02 * Math.sin(rad(60))};
/** Attempt 2: 10 cm × 5.0 cm in 0.40 T, plane at 30° to the field, so θ = 60°; the cos 30° slip. */
export const A2 = (() => {
	const A = 0.1 * 0.05, B = 0.4;
	return {A, B, theta: 60, phi: B * A * Math.cos(rad(60)), slip: B * A * Math.cos(rad(30))};
})();

export const HEAD = 'Why does changing loop orientation change magnetic flux?';
export const HEAD_NEXT = 'What changes create an induced emf?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
