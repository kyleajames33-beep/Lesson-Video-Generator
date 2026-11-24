// phys-y12-m5-v09 (Year 12 Physics M5 V09: torque, why angle matters).
// Lesson lookups and the case. Every change is keyed to the frame at which its cue PHRASE is spoken in the
// measured take (cueFrame throws if a phrase is missing), never to a fixed frame. Every torque on screen comes
// from the beam engine's torque() (src/explainer/sims/beam.ts): tau = r F sin(theta).
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v09/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {torque} from '../../sims/beam';

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v09: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v09: no response hold in ' + id);
	return h;
};
/**
 * Keyframes that can never run backwards: each point's frame is pushed to at least one frame after the
 * previous point's, so a later cue that arrives early in a new take only shortens a move, never reverses it.
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

// ---------- the case (site worked example 1) ----------
export const FORCE = 80;
export const ARM = 0.25;
export const tau = (r: number, deg: number, F = FORCE) => torque(r, F, deg);
/** Number format with a fixed number of decimals and a true minus sign. */
export const fx = (v: number, d = 0) => (Math.abs(v) < 0.5 * 10 ** -d ? 0 : v).toFixed(d).replace('-', '−');

export const HEAD = 'Why does a force turn an object more effectively at some angles?';
export const ACCENT = '#9c5a00';
