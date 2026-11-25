// phys-y12-m6-v15 (Year 12 Physics M6 V15: high-voltage transmission, why stepping voltage up reduces transmission
// loss). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3 with the 21 November root edit, 5,905 characters), so
// the provisional file was made with the unchanged make-provisional script from the brief 259 source audit.
// The simple one-circuit line runs on the circuits engine (sims/circuits.ts): a source of V, the line's total
// resistance and a load chosen so that V I is the power sent (R_load = V^2/P - R_line); the solved current and the
// line's own power are the readouts. At 25 kV no load can do this (R_load would be negative), which is the point.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v15/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {lineLoss, solveCircuit} from '../../sims/circuits';
import type {Part} from '../../sims/circuits';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v15: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v15: no response hold in ' + id);
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

// ---------------------------------------------------------------- the simple-model line on the circuits engine
/** Send P watts at V volts through a line of total resistance R: solve the one-circuit model. */
export const sendLine = (P: number, V: number, R: number) => {
	const load = (V * V) / P - R;
	if (load <= 0) return null;
	const parts: Part[] = [
		{id: 'src', kind: 'battery', from: 'ret', to: 'out', emf: V},
		{id: 'line', kind: 'resistor', from: 'out', to: 'far', r: R},
		{id: 'load', kind: 'resistor', from: 'far', to: 'ret', r: load},
	];
	const s = solveCircuit(parts);
	const I = Math.abs(s.current.line), loss = s.power.line, drop = Math.abs(s.drop.line);
	return {I, loss, drop, received: s.power.load, sent: V * I, pct: (100 * loss) / (V * I), load};
};
const need = <T,>(x: T | null): T => { if (!x) throw new Error('phys-y12-m6-v15: impossible line case'); return x; };
/** Worked example (site): 500 MW through 2.0 ohm at 250 kV and 500 kV. */
export const P_SENT = 500e6, R_LINE = 2.0;
export const W250 = need(sendLine(P_SENT, 250e3, R_LINE));
export const W500 = need(sendLine(P_SENT, 500e3, R_LINE));
/** Scene 4 slider: V x 1, 2, 4, 10 from 250 kV (the load is reset each time so 500 MW is always sent). */
export const SLIDE = [1, 2, 4, 10].map(k => ({k, ...need(sendLine(P_SENT, 250e3 * k, R_LINE))}));
/** Scene 7 (thought experiment): 25 kV. The engine has no load that sends 500 MW (the line alone would take more). */
export const G25 = {model: sendLine(P_SENT, 25e3, R_LINE), formula: lineLoss(P_SENT, 25e3, R_LINE)};
/** Scene 6 screen check (site prediction): 100 MW through 5.0 ohm at 100 kV and 500 kV. */
export const SITE = {a: need(sendLine(100e6, 100e3, 5.0)), b: need(sendLine(100e6, 500e3, 5.0))};
/** Attempt 1: 132 MW through 3.0 ohm at 132 kV and 330 kV. */
export const A1 = {a: need(sendLine(132e6, 132e3, 3.0)), b: need(sendLine(132e6, 330e3, 3.0)), factor: 330 / 132};
/** Attempt 2: V^2/R with the drop along the line, and the slip with the transmission voltage. */
export const A2 = {drop: A1.b.drop, viaDrop: (A1.b.drop * A1.b.drop) / 3.0, slip: (330e3 * 330e3) / 3.0};
/** A fraction label for a ratio (1, 1/2, 1/4, 1/10, 1/16, 1/100). */
export const frac = (r: number) => (Math.abs(r - 1) < 1e-9 ? '1' : Math.abs(r - 0.5) < 1e-9 ? '½' : Math.abs(r - 0.25) < 1e-9 ? '¼' : `1/${Math.round(1 / r)}`);
export const MW = (w: number) => w / 1e6;

export const HEAD = 'Why does stepping voltage up reduce transmission loss?';
export const HEAD_NEXT = 'How does a split-ring motor keep turning?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
