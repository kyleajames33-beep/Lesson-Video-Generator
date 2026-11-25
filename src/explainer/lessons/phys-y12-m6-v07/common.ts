// phys-y12-m6-v07 (Year 12 Physics M6 V07: the motor effect, F = lI⊥B = lIB sin θ).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The provisional file was made from the CURRENT design narration (coherence fix of 24 November: scene 5 carries
// "Cos is close, so the part across the field, opposite theta, takes sine."), not from the stale prepared input.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v07/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {runCircuit} from '../../sims/circuits';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v07: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v07: no response hold in ' + id);
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

// ---------------------------------------------------------------- numbers (site values, recalculated)
const rad = (d: number) => (d * Math.PI) / 180;
export const G = 9.8;
/** The site MC: 0.30 m inside 0.050 T, 4.0 A straight across: F = BIl = 0.060 N (about the weight of 6 g). */
export const MC = (() => {
	const B = 0.05, I = 4.0, l = 0.3, F = B * I * l;
	return {B, I, l, F, mass: F / G, slipCm: B * I * 30};
})();
/** Scene 5's dial: θ between current and field; I⊥ = I sin θ and F = BIl sin θ. */
export const dialAt = (deg: number) => ({s: Math.sin(rad(deg)), c: Math.cos(rad(deg)), Iperp: MC.I * Math.sin(rad(deg)), Ialong: MC.I * Math.cos(rad(deg)), F: MC.F * Math.sin(rad(deg))});
/** The site loudspeaker (ideal model): 80 turns, 2.0 cm across, 0.40 T, 0.50 A. */
export const LS = (() => {
	const N = 80, d = 0.02, B = 0.4, I = 0.5, turn = Math.PI * d, l = N * turn;
	return {N, d, B, I, turn, l, F: B * I * l, slip: B * I * turn};
})();
/** Attempt 1: 2.5 A, 0.40 m inside 0.15 T; at 90° and 30°; the cos slip. */
export const A1 = (() => {
	const I = 2.5, l = 0.4, B = 0.15, F90 = B * I * l;
	return {I, l, B, F90, F30: F90 * Math.sin(rad(30)), slip: F90 * Math.cos(rad(30))};
})();
/** The bench circuit (circuits engine): a 6.0 V supply, the knife switch and the rod (1.5 Ω): 4.0 A when closed. */
export const benchRun = (close: number, open: number, reverse: number) => runCircuit(
	[
		{id: 'sup', kind: 'battery', from: 'n', to: 'p', emf: 6},
		{id: 'sw', kind: 'switch', from: 'p', to: 'a', closed: false},
		{id: 'rod', kind: 'resistor', from: 'a', to: 'n', r: 1.5},
	],
	[
		{at: close, set: {sw: {closed: true}}},
		{at: open, set: {sw: {closed: false}}},
		{at: reverse, set: {sw: {closed: true}, sup: {emf: -6}}},
	],
);

export const HEAD = 'Why does a current-carrying wire feel a magnetic force?';
export const HEAD_NEXT = 'Why do parallel currents attract or repel?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
