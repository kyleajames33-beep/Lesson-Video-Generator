// phys-y12-m6-v14 (Year 12 Physics M6 V14: real transformer losses, why real transformers are less efficient than
// the ideal model). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3 with the 21 November root edit, 5,838 characters), so
// the provisional file was made with the unchanged make-provisional script from the brief 259 source audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v14/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v14: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v14: no response hold in ' + id);
	return h;
};
/** End of speech in a scene (the start of its silent hold). */
export const speechEnd = (id: string) => (sc(id).voiceover as {endFrame?: number}).endFrame ?? dur(id);
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

// ---------------------------------------------------------------- numbers (recalculated; design "Numbers used")
const heat = (I: number, R: number) => I * I * R;
/** Hook (example values): 115 W in, 104 W out on last time's transformer; 11 W missing; efficiency about 90%. */
export const HOOK = (() => {
	const Pin = 115, Pout = 104;
	return {Pin, Pout, lost: Pin - Pout, eta: Pout / Pin, pct: (100 * Pout) / Pin};
})();
/** Scene 2 screen check (site Q2 (c)): 96% of 20 MW. */
export const SITE_Q2 = {out: 0.96 * 20, lost: 20 - 0.96 * 20};
/** Scene 3 (example values): the secondary 10 A through 0.050 ohm, the primary 0.50 A through 4.0 ohm; the slider. */
export const COPPER = {Is: 10, Rs: 0.05, Ip: 0.5, Rp: 4.0, Ps: heat(10, 0.05), Pp: heat(0.5, 4.0), slider: [5, 10].map(I => ({I, P: heat(I, 0.05)}))};
/** Scene 5: eddy heating in the simple model falls as 1/n^2 for n sheets in the same block. */
export const SHEETS = [1, 2, 5, 10].map(n => ({n, pct: 100 / (n * n)}));
/** Scene 6: 50 Hz reverses the magnetisation twice per cycle. */
export const REVERSALS = 2 * 50;
/** Scene 10 screen tag (Australian MEPS, oil-filled distribution transformers at half load). */
export const MEPS = '98.28 to 99.40%';
/** Attempt 2: 2.0 A from 230 V in; 19 A at 23 V out. */
export const A2 = (() => {
	const Pin = 230 * 2.0, Pout = 23 * 19;
	return {Pin, Pout, pct: (100 * Pout) / Pin, lost: Pin - Pout, slip: (100 * Pin) / Pout};
})();

export const HEAD = 'Why are real transformers less efficient than the ideal model?';
export const HEAD_NEXT = 'Why does stepping voltage up reduce transmission loss?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
