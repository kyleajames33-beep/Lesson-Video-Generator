// phys-y12-m6-v12 (Year 12 Physics M6 V12: mutual induction, one coil inducing an emf in another).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3, narration unchanged), so the provisional file was
// made with the unchanged make-provisional script from the brief 259 source audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v12/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {faradayEmf} from '../../sims/induction';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v12: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v12: no response hold in ' + id);
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

// ---------------------------------------------------------------- numbers (originals, recalculated)
/** Scene 6: the secondary's 500 turns, 0 -> 4.0 x 10^-5 Wb per turn in 0.020 s at switch on: 1.0 V; the slider's Δt. */
export const SIZE = (() => {
	const N = 500, dPhi = 4.0e-5, dt = 0.02;
	const rate = (t: number) => dPhi / t, emfAt = (t: number) => Math.abs(faradayEmf(N, dPhi, t));
	return {N, dPhi, dt, emf: emfAt(dt), rate, emfAt, slip: N * dPhi};
})();
/** Attempt 2: secondary 250 turns, 6.0 x 10^-4 Wb -> 0 in 0.030 s: 5.0 V; the primary's 100 turns give 2.0 V. */
export const A2 = (() => {
	const Ns = 250, Np = 100, dPhi = 6.0e-4, dt = 0.03;
	return {Ns, Np, dPhi, dt, emf: Math.abs(faradayEmf(Ns, -dPhi, dt)), slip: Math.abs(faradayEmf(Np, -dPhi, dt))};
})();

export const HEAD = 'How can one coil induce an emf in another without touching it?';
export const HEAD_NEXT = 'How does a transformer exchange voltage for current?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
