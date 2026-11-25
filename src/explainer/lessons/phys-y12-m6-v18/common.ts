// phys-y12-m6-v18 (Year 12 Physics M6 V18: AC and DC generators, how do simple AC and DC generators produce different
// outputs?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3 with the 24 November route insertion, 6,300
// characters, 16 scenes; checked scene by scene by script), so the provisional file was made with the unchanged
// make-provisional script from the brief 259 source audit. The route insertion changed the opening references only.
// No engine fits (design Revision 3): the flux and emf of the turning coil are exact functions of one angle clock
// (Phi = BA cos theta and its rate of change, normalised), and the coil, the graphs and the oscilloscope read it.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v18/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v18: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v18: no response hold in ' + id);
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

// ---------------------------------------------------------------- one angle clock
const rad = (d: number) => (d * Math.PI) / 180;
/** Flux through the coil as a fraction of its maximum (theta between the area normal and B). */
export const phiOf = (thetaDeg: number) => Math.cos(rad(thetaDeg));
/** The coil's emf as a fraction of its peak (author note b: +sine for the chosen normal). */
export const emfOf = (thetaDeg: number) => Math.sin(rad(thetaDeg));
/** Output after the rings: slip rings pass the emf; the split ring gives its magnitude. */
export const slipOut = (turns: number) => Math.sin(2 * Math.PI * turns);
export const splitOut = (turns: number) => Math.abs(Math.sin(2 * Math.PI * turns));
/** Scene 2 and 3 angle drag: theta 0, 45, 90, 135, 180 degrees; Phi / Phi_max and epsilon / epsilon_max. */
export const DRAG = [0, 45, 90, 135, 180].map(t => ({t, phi: phiOf(t), emf: Math.abs(emfOf(t))}));
/** Scene 8 speed slider: x 1, x 1.5, x 2; peak and frequency both scale with the speed. */
export const SPEEDS = [1, 1.5, 2].map(s => ({s, peak: s, freq: s}));
/** Scene 9 (site lesson 16): a 2-pole generator on a 50 Hz grid. */
export const GRID = (() => { const hz = 50, poles = 2; const perSecond = hz / (poles / 2); return {hz, poles, perSecond, rpm: perSecond * 60}; })();

export const HEAD = 'How do simple AC and DC generators produce different outputs?';
export const HEAD_NEXT = 'Why must an induction-motor rotor lag the rotating field?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
