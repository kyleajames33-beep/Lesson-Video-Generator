// phys-y12-m6-v10 (Year 12 Physics M6 V10: Faraday's law, what changes create an induced emf).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3, narration unchanged), so the provisional file was
// made with the unchanged make-provisional script from the brief 259 source audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v10/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {faradayEmf, rodEmf} from '../../sims/induction';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v10: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v10: no response hold in ' + id);
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

// ---------------------------------------------------------------- numbers (site values and originals, recalculated)
/** Scene 5 (site Activity 2): linkage 0 -> 0.060 Wb in 0.020 s, flat to 0.050 s, -> -0.020 Wb at 0.060 s. */
export const GRAPH = (() => {
	const pts: [number, number][] = [[0, 0], [0.02, 0.06], [0.05, 0.06], [0.06, -0.02]];
	const grad = [1, 2, 3].map(i => (pts[i][1] - pts[i - 1][1]) / (pts[i][0] - pts[i - 1][0]));
	return {pts, grad, emf: grad.map(g => faradayEmf(1, g, 1)), rise: pts[1][1] - pts[0][1], fall: pts[3][1] - pts[2][1]};
})();
/** Linkage at time t (s) on the scene 5 graph. */
export const linkageAt = (t: number) => {
	const p = GRAPH.pts;
	if (t <= p[0][0]) return p[0][1];
	for (let i = 1; i < p.length; i++) if (t <= p[i][0]) return p[i - 1][1] + ((t - p[i - 1][0]) / (p[i][0] - p[i - 1][0])) * (p[i][1] - p[i - 1][1]);
	return p[p.length - 1][1];
};
/** Scene 6 (site worked example): 200 turns, 5.0 x 10^-3 m^2, 0.40 T reduced to zero in 0.20 s, then 0.020 s. */
export const WE = (() => {
	const N = 200, A = 5.0e-3, B = 0.4, phiI = B * A, dPhi = 0 - phiI;
	return {N, A, B, phiI, dPhi, e1: faradayEmf(N, dPhi, 0.2), e2: faradayEmf(N, dPhi, 0.02), slip: Math.abs(dPhi) / 0.2};
})();
/** Scene 7 (original): B = 0.50 T, rod 0.20 m, v = 2.0 m/s: 0.40 m^2 each second, 0.20 Wb/s, 0.20 V. */
export const ROD = (() => {
	const B = 0.5, L = 0.2, v = 2.0;
	return {B, L, v, rate: L * v, dphi: B * L * v, emf: rodEmf(B, L, v), at: (s: number) => rodEmf(B, L, s)};
})();
/** Attempt 1: 50 turns, 2.0 x 10^-3 -> 6.0 x 10^-3 Wb in 0.10 s, then constant; the final-flux slip. */
export const A1 = (() => {
	const N = 50, p1 = 2.0e-3, p2 = 6.0e-3, dt = 0.1, d = p2 - p1;
	return {N, p1, p2, dt, d, emf: Math.abs(faradayEmf(N, d, dt)), slip: (N * p2) / dt};
})();
/** Attempt 2: rod 0.25 m at 4.0 m/s in 0.30 T: 1.0 m^2 each second, 0.30 V; then stopped. */
export const A2 = (() => {
	const L = 0.25, v = 4.0, B = 0.3;
	return {L, v, B, rate: L * v, emf: rodEmf(B, L, v)};
})();

export const HEAD = 'What changes create an induced emf?';
export const HEAD_NEXT = 'Why does the induced current oppose the flux change?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
