// phys-y12-m6-v08 (Year 12 Physics M6 V08: forces between parallel wires, F/l = (μ₀/2π)(I₁I₂/r), the ampere).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v08/lesson.json';
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
	if (!s) throw new Error('phys-y12-m6-v08: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v08: no response hold in ' + id);
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
/** μ₀ = 4π × 10⁻⁷ N A⁻², so μ₀/2π = 2 × 10⁻⁷ N A⁻². */
export const MU0 = 4 * Math.PI * 1e-7, K = MU0 / (2 * Math.PI);
/** Field of a long wire and force per metre between two wires. */
export const Bwire = (I: number, r: number) => K * (I / r);
export const Fpl = (I1: number, I2: number, r: number) => K * ((I1 * I2) / r);
/** Scene 2's probe: 10 A at 1.0, 2.0 and 4.0 cm. */
export const PROBE_I = 10;
/** Scene 4's sliders start at 10 A, 10 A, 5.0 cm. */
export const SL0 = {I1: 10, I2: 10, r: 0.05};
/** The worked example (site): 12 A up, 8.0 A down, 8.0 cm apart. */
export const WE = {I1: 12, I2: 8, r: 0.08, F: Fpl(12, 8, 0.08), B1: Bwire(12, 0.08)};
/** The ampere check, and the elementary charge (exact since 2019). */
export const AMP = {F: Fpl(1, 1, 1), e: 1.602176634e-19, perSecond: 1 / 1.602176634e-19};
/** The illustrative balance dataset (author note b): l = 0.50 m, r = 0.010 m, same current in both rods. */
export const INV = (() => {
	const l = 0.5, r = 0.01, g = 9.8;
	const I = [6, 8, 10, 12, 14], dm = [0.04, 0.06, 0.1, 0.15, 0.2];
	const pts = I.map((c, i) => ({I: c, dm: dm[i], x: (c * c) / r, y: (dm[i] * 1e-3 * g) / l}));
	const grad = pts.reduce((s, p) => s + p.x * p.y, 0) / pts.reduce((s, p) => s + p.x * p.x, 0);
	return {l, r, g, pts, grad, F10: 0.1e-3 * g, Fl10: (0.1e-3 * g) / l};
})();
/** Attempt 1: 20 A and 5.0 A, opposite, 4.0 cm apart. */
export const A1 = {I1: 20, I2: 5, r: 0.04, F: Fpl(20, 5, 0.04)};
/** Attempt 2: both currents and the separation doubled. */
export const A2 = {factor: (2 * 2) / 2, slip: (2 * 2) / (2 * 2)};
/** The hook circuit (circuits engine): battery, knife switch and the two strips; on when the switch closes. */
export const hookRun = (close: number) => runCircuit(
	[
		{id: 'bat', kind: 'battery', from: 'n', to: 'p', emf: 12},
		{id: 'sw', kind: 'switch', from: 'p', to: 'a', closed: false},
		{id: 's1', kind: 'resistor', from: 'a', to: 'n', r: 0.4},
		{id: 's2', kind: 'resistor', from: 'a', to: 'n', r: 0.4},
	],
	[{at: close, set: {sw: {closed: true}}}],
);

export const HEAD = 'Why do parallel currents attract or repel?';
export const HEAD_NEXT = 'Why does changing loop orientation change magnetic flux?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
