// phys-y12-m6-v20 (Year 12 Physics M6 V20: eddy currents and magnetic braking, how can a moving conductor be braked
// without contact?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3, 6,502 characters, 16 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// No engine fits (design Revision 3): the pendulum's decaying swing, the magnet's slow fall and the coaster pass are
// lesson-coded and illustrative; only the 30 cm free-fall time and the coaster energies are calculated (below), and
// in scene 8 "K" and "heat in the fins" are computed together so their sum stays fixed.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v20/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v20: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v20: no response hold in ' + id);
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

// ---------------------------------------------------------------- numbers (design "Numbers used")
export const G = 9.8;
/** Plastic tube: free fall through s = 0.30 m, t = sqrt(2s / g) = 0.247 s (shown 0.25 s). */
export const S_TUBE = 0.3;
export const T_FALL = Math.sqrt((2 * S_TUBE) / G);
/** Coaster (illustrative, empty car): m = 3.0 x 10^3 kg slowed from 20 to 5.0 m/s. */
export const M_CAR = 3000;
export const kOf = (v: number) => 0.5 * M_CAR * v * v;
export const V_STEPS = [20, 15, 10, 5];
export const K0 = kOf(V_STEPS[0]);
export const COAST = V_STEPS.map(v => ({v, K: kOf(v), heat: K0 - kOf(v)}));
export const KF = kOf(5);
export const DK = K0 - KF; // 5.625 x 10^5
/** The classic slip: squaring the difference, 1/2 x 3000 x (20 - 5)^2 = 3.375 x 10^5. */
export const DK_WRONG = 0.5 * M_CAR * (20 - 5) ** 2;

export const HEAD = 'How can a moving conductor be braked without contact?';
export const HEAD_NEXT = 'How did Maxwell connect electricity and magnetism to light?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
