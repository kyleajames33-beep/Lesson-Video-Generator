// phys-y12-m5-v11 (Year 12 Physics M5 V11: uniform circular motion).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken (cueFrame
// throws if a phrase is missing), never to a fixed frame. Every circling body is a field-motion run
// (src/explainer/sims/field-motion.ts, a central field set to the circular speed), so each velocity arrow is
// tangent and each acceleration arrow points to the centre because the run says so.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v11/measured/lesson.json'; // Measured timing (voiced 24 Nov 2026)
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {runMotion, stateAt} from '../../sims/field-motion';

export const PROVISIONAL = false;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v11: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v11: no response hold in ' + id);
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
/** Car (site worked examples 1 and 2): r = 50 m, T = 12 s. */
export const R_CAR = 50, T_CAR = 12;
export const V_CAR = (2 * Math.PI * R_CAR) / T_CAR;
export const W_CAR = (2 * Math.PI) / T_CAR;
export const F_CAR = 1 / T_CAR;
export const A_CAR = V_CAR ** 2 / R_CAR;
/** A circular run at speed v and radius r (anticlockwise, starting at angle 0), for a number of laps. */
export const circleRun = (r: number, v: number, laps = 3) => runMotion({field: {kind: 'central', gm: v * v * r}, start: {x: r, y: 0, vx: 0, vy: v}, duration: laps * (2 * Math.PI * r) / v, steps: 2400 * laps});
export const CAR_RUN = circleRun(R_CAR, V_CAR, 4);
export {stateAt};
/** Rotor (attempt 1): r = 0.30 m, f = 4.0 Hz. */
export const ROTOR = {r: 0.3, f: 4.0, w: 2 * Math.PI * 4.0, v: 2 * Math.PI * 4.0 * 0.3, a: (2 * Math.PI * 4.0 * 0.3) ** 2 / 0.3};

export const HEAD = 'How can speed be constant while velocity keeps changing?';
export const ACCENT = '#9c5a00';

