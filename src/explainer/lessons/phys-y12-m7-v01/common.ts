// phys-y12-m7-v01 (Year 12 Physics M7 V01: Maxwell and light, how did Maxwell connect electricity and magnetism to
// light?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3, 6,087 characters, 14 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// Simulation (design Revision 3): every travelling wave is a slow model wave (one clock per scene); the readouts carry
// the real values computed below.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v01/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v01: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v01: no response hold in ' + id);
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
/** HSC data sheet constants. */
export const MU0 = 4 * Math.PI * 1e-7;
export const EPS0 = 8.854e-12;
export const C = 3.0e8;
/** Scene 5: mu0 eps0 = 1.113 x 10^-17; root = 3.336 x 10^-9; c = 1 / root = 2.998 x 10^8, shown 3.00 x 10^8. */
export const PROD = MU0 * EPS0;
export const ROOT = Math.sqrt(PROD);
export const C_PRED = 1 / ROOT;
/** Scene 5 slip: 1 / (mu0 eps0) = 8.99 x 10^16 (root skipped). */
export const C_WRONG = 1 / PROD;
/** Scene 4 frequency dial (MHz) and lambda = c / f (6.0, 3.0, 1.5 m). */
export const DIAL_MHZ = [50, 100, 200];
export const DIAL_LAMBDA = DIAL_MHZ.map(m => C / (m * 1e6));
/** Scene 6 (illustrative): f = 5.0 x 10^7 Hz, lambda = 6.0 m, v = 3.0 x 10^8; slip f / lambda = 8.3 x 10^6. */
export const HZ_F = 5.0e7, HZ_L = 6.0;
export const HZ_V = HZ_F * HZ_L;
export const HZ_WRONG = HZ_F / HZ_L;
/** Scene 7 ribbon marker: f and lambda = c / f (300 m, 3.0 cm, 600 nm, 3.0 x 10^-10 m). */
export const RIBBON = [1.0e6, 1.0e10, 5.0e14, 1.0e18].map(f => ({f, lambda: C / f}));
/** Scene 13: a 3 m room at c takes 1.0 x 10^-8 s = 10 ns. */
export const ROOM = 3;
export const ROOM_T = ROOM / C;
/** Attempt 2: lambda = (3.00 x 10^8) / (98.5 x 10^6) = 3.05 m; slip (3.00 x 10^8) / 98.5 = 3.05 x 10^6 m. */
export const A2_F = 98.5e6;
export const A2_L = C / A2_F;
export const A2_WRONG = C / 98.5;

export const HEAD = 'How did Maxwell connect electricity and magnetism to light?';
export const HEAD_NEXT = 'How can a time-and-distance measurement reveal the speed of light?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
