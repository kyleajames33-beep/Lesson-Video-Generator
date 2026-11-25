// phys-y12-m8-v13 (Year 12 Physics M8 V13: Schrödinger and the quantum model of the atom, why do orbital probabilities
// replace literal electron paths?). Lesson lookups and every displayed number. Every change is keyed to the frame at
// which its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the
// import below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root edits) carry identical narration (5,632 characters, 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v13/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {hE} from '../../physics/atom/bohr';
import {A0_PM, prob1s, psi1s} from '../../physics/atom/quantum';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v13: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v13: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Probe stops (author note f): r = 0, a0 ln 2 = 36.7, a0 = 52.9, 2a0 = 105.8 pm. Wave size e^(-r/a0): 1, 0.500, 0.368,
 *  0.135; probability per volume e^(-2r/a0): 1, 0.250, 0.135, 0.0183. Readouts round r to whole pm and both to 2 dp. */
export const PROBE_R = [0, A0_PM * Math.LN2, A0_PM, 2 * A0_PM] as const;
export const PROBE = PROBE_R.map(r => ({r, w: psi1s(r), p: prob1s(r)}));
/** Hydrogen levels (recalled): E_n = −13.6/n² eV: −13.6, −3.40, −1.51 eV. */
export const LEVELS = [1, 2, 3].map(n => hE(n));
/** Sizes: atom about 10⁻¹⁰ m, nucleus about 10⁻¹⁵ m: ratio 10⁵ ("about a hundred thousand times"). */
export const ATOM_M = 1e-10, NUC_M = 1e-15, SIZE_RATIO = ATOM_M / NUC_M;
/** Live measurement count in scene 6 runs to 5,000. */
export const DOTS = 5000;

export const HEAD = 'Why do orbital probabilities replace literal electron paths?';
export const HEAD_NEXT = 'What changes in a nucleus during alpha, beta and gamma decay?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
