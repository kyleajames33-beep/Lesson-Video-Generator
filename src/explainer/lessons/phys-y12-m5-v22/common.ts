// phys-y12-m5-v22 (Year 12 Physics M5 V22: orbital energy, E = -GMm/2r for a circular orbit).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in
// the real take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v22/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {runMotion, stateAt} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v22: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v22: no response hold in ' + id);
	return h;
};
/** The response hold if the take has one (the hook's 3 s prediction hold is not in this take). */
export const holdIf = (id: string) => sc(id).responseHold;
/** Keyframes forced to strictly increasing frames (each at least `gap` after the last). */
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

// ---------------------------------------------------------------- constants (HSC data sheet values)
export const Gc = 6.67e-11, ME = 6.0e24, RE = 6.371e6;
export const GM = Gc * ME;
/** The satellite: 500 kg, raised from r1 = 7.0e6 m to r2 = 1.4e7 m (site short-answer Q2). */
export const MSAT = 500;
export const GMm = GM * MSAT;
export const R1 = 7.0e6, R2 = 1.4e7;
/** Circular-orbit speed (m/s). */
export const vc = (r: number) => Math.sqrt(GM / r);
export const K = (r: number) => GMm / (2 * r);
export const U = (r: number) => -GMm / r;
export const E = (r: number) => -GMm / (2 * r);
export const V1 = vc(R1), V2 = vc(R2);
/** Changes between the two circles. */
export const DK = K(R2) - K(R1), DU = U(R2) - U(R1), DE = E(R2) - E(R1);
/** The crossed slip in scene 6: the sign of U dropped when adding. */
export const SLIP6 = K(R1) - U(R1);

// ---------------------------------------------------------------- the orbit raise (author note a; author data only)
export const TRANSFER = (() => {
	const a = (R1 + R2) / 2;
	const vp = Math.sqrt(GM * (2 / R1 - 1 / a)), va = Math.sqrt(GM * (2 / R2 - 1 / a));
	return {a, vp, va, dv1: vp - V1, dv2: V2 - va, half: Math.PI * Math.sqrt(a ** 3 / GM), E: -GMm / (2 * a)};
})();
export const T1 = 2 * Math.PI * Math.sqrt(R1 ** 3 / GM), T2 = 2 * Math.PI * Math.sqrt(R2 ** 3 / GM);
/** Burn 1 after half an inner lap, burn 2 at the far point (half a transfer later). */
export const TB1 = 0.5 * T1, TB2 = TB1 + TRANSFER.half;
/** One run on the field motion engine with two short burns (start at the left of Earth, moving down the screen
 * so the satellite goes anticlockwise as drawn). */
export const RAISE: MotionPath = runMotion({
	field: {kind: 'central', gm: GM},
	start: {x: -R1, y: 0, vx: 0, vy: -V1},
	duration: TB2 + 0.75 * T2,
	steps: 9000,
	burns: [{at: TB1, along: TRANSFER.dv1}, {at: TB2, along: TRANSFER.dv2}],
});
/** Energies of the satellite on the raise run at time t (J). */
export const raiseEnergy = (t: number) => {
	const s = stateAt(RAISE, t), r = Math.hypot(s.x, s.y);
	const k = 0.5 * MSAT * s.speed * s.speed, u = -GMm / r;
	return {k, u, e: k + u, r, v: s.speed};
};
/** Circular runs at r1 and r2 (scenes 2 to 4, the feedback picture). */
const circ = (r: number) => runMotion({field: {kind: 'central', gm: GM}, start: {x: r, y: 0, vx: 0, vy: vc(r)}, duration: 2 * Math.PI * Math.sqrt(r ** 3 / GM) * 1.001, steps: 900});
export const RUN1 = circ(R1), RUN2 = circ(R2);

// ---------------------------------------------------------------- scene 5: the radius control (relative readouts)
/** Ratios at n r1: speed 1/sqrt(n); energies 1/n. */
export const ratioV = (n: number) => 1 / Math.sqrt(n);
export const ratioE = (n: number) => 1 / n;

/** Attempt 1: 800 kg, 500 km above the surface. */
export const A1 = (() => {
	const m = 800, r = RE + 5.0e5, gmm = GM * m;
	return {m, r, gmm, U: -gmm / r, K: gmm / (2 * r), E: -gmm / (2 * r), slip: 5.0e5};
})();

export const HEAD = 'Why does a higher circular orbit have lower speed but greater total energy?';
export const HEAD_V23 = 'What minimum launch speed allows escape without further propulsion?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
