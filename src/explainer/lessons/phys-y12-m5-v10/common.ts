// phys-y12-m5-v10 (Year 12 Physics M5 V10: balancing torques).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken (cueFrame
// throws if a phrase is missing), never to a fixed frame. Every torque on screen comes from the beam engine
// (src/explainer/sims/beam.ts: solveBeam, torque), g = 9.8 m s^-2.
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v10/lesson.json'; // PROVISIONAL TIMING: switch to docs/production/claude-pm/lessons/p-y12-m5-v10/measured/lesson.json when voiced
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {solveBeam} from '../../sims/beam';

export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v10: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v10: no response hold in ' + id);
	return h;
};
/**
 * Keyframes that can never run backwards: each point's frame is pushed to at least one frame after the
 * previous point's, so a later cue that arrives early in the measured take only shortens a move.
 */
export const kfm = (f: number, pts: readonly (readonly [number, number])[]) => {
	const p: [number, number][] = [];
	for (const [t, v] of pts) p.push([p.length ? Math.max(t, p[p.length - 1][0] + 1) : t, v]);
	if (f <= p[0][0]) return p[0][1];
	for (let i = 0; i + 1 < p.length; i++) {
		const [a, va] = p[i], [b, vb] = p[i + 1];
		if (f <= b) { const u = (f - a) / (b - a), e = u * u * (3 - 2 * u); return va + (vb - va) * e; }
	}
	return p[p.length - 1][1];
};
export const fx = (v: number, d = 0) => (Math.abs(v) < 0.5 * 10 ** -d ? 0 : v).toFixed(d).replace('-', '−');

// ---------- the cases ----------
export const G = 9.8;
/** Crane (site): 4 t load 30 m out (right), 20 t counterweight 6 m behind the mast (left). */
export const CRANE = solveBeam({forces: [{id: 'load', at: 30, force: 4000 * G}, {id: 'counterweight', at: -6, force: 20000 * G}]});
/** Seesaw (site worked example 2): 30 kg at 1.2 m left, 25 kg at r right; uniform, pivoted at its centre. */
export const seesaw = (r: number, rLeft = 1.2) => solveBeam({forces: [{id: '30 kg', at: -rLeft, force: 30 * G}, {id: '25 kg', at: r, force: 25 * G}]});
export const R_BAL = (30 * 1.2) / 25;
/** Illustrative tilt (degrees, anticlockwise positive) that follows the sign of the net torque. */
export const tiltFor = (net: number, max = 7) => max * Math.tanh(net / 60);

export const HEAD = 'How do clockwise and anticlockwise torques balance?';
export const ACCENT = '#9c5a00';
