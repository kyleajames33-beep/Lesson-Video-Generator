// phys-y12-m5-v08 (Year 12 Physics M5 V08: testing the horizontal-launch model).
// Lesson lookups and the cases. Every change is keyed to the frame at which its cue PHRASE is spoken in the
// measured take (cueFrame throws if a phrase is missing), never to a fixed frame. Every number on screen comes
// from the shared projectile maths (src/explainer/physics/projectile/flight.ts) and field-motion runs built
// from it, g = 9.8 m s^-2.
import lessonJson from '../../../../docs/production/claude-pm/lessons/p-y12-m5-v08/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {G} from '../../physics/projectile/flight';

export const PROVISIONAL = false;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v08: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v08: no response hold in ' + id);
	return h;
};

// ---------- the model and the data ----------
/** Model launch speed from the 0.10 m trial (0.32 m): u_x = 0.32 ÷ √(2 × 0.10 ÷ g) = 2.24 m/s. */
export const UX = 0.32 / Math.sqrt((2 * 0.1) / G);
export const fallT = (h: number) => Math.sqrt((2 * h) / G);
export const modelR = (h: number) => UX * fallT(h);
/** Site sample data (processing practice, not primary data). */
export const H = [0.1, 0.2, 0.3, 0.4, 0.5] as const;
export const RS = [0.32, 0.45, 0.55, 0.64, 0.71] as const;
export const SQ = H.map(h => Math.sqrt(h));
/** Free least-squares fit of R against √h. */
export const FIT = (() => {
	const n = SQ.length, mx = SQ.reduce((a, b) => a + b, 0) / n, my = RS.reduce((a, b) => a + b, 0) / n;
	let sxy = 0, sxx = 0;
	for (let i = 0; i < n; i++) { sxy += (SQ[i] - mx) * (RS[i] - my); sxx += (SQ[i] - mx) ** 2; }
	const m = sxy / sxx;
	return {m, c: my - m * mx, ux: m * Math.sqrt(G / 2)};
})();
/** Illustrative repeats at h = 0.30 m, then two more inside the band. */
export const REP = [0.53, 0.55, 0.57] as const;
export const REP_MORE = [0.545, 0.556] as const;

export const HEAD = 'How can primary measurements test the horizontal-launch model?';
export const HEAD_SIZE = 46;
export const ACCENT = '#9c5a00';
/** Systematic shift colour (design): red-brown. */
export const SHIFT = {ink: '#9a4a2a', stroke: '#9a4a2a', soft: '#f3e1d8'};
