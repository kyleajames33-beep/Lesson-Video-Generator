// phys-y12-m6-v17 (Year 12 Physics M6 V17: back emf in DC motors, why does a spinning DC motor draw less current?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3 with the 24 November route insertion, 6,556
// characters, 16 scenes; checked scene by scene by script), so the provisional file was made with the unchanged
// make-provisional script from the brief 259 source audit. The route insertion changed screen text only (the handoff
// chip now names the investigation video).
// The equivalent circuit runs on the circuits engine (sims/circuits.ts): the supply, the coil's resistance and the back
// emf as a second battery facing the supply (Revision 3 call: the engine's own motor part is not used to show the
// current falling; the lesson sets the back emf from the speed). `solveCircuit` gives every current on screen.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v17/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {solveCircuit} from '../../sims/circuits';
import type {Part} from '../../sims/circuits';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v17: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v17: no response hold in ' + id);
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

// ---------------------------------------------------------------- the equivalent circuit on the engine
/**
 * Supply V, coil resistance R, an optional series starting resistance and the back emf as a battery whose positive
 * terminal faces the supply's (opposing; `helps` turns it round for the what-if). Returns the solved current.
 */
export const loopCurrent = (o: {V: number; R: number; back: number; start?: number; helps?: boolean}) => {
	const parts: Part[] = [
		{id: 'supply', kind: 'battery', from: 'ret', to: 'top', emf: o.V},
		{id: 'coil', kind: 'resistor', from: 'top', to: 'mid', r: o.R},
		{id: 'start', kind: 'rheostat', from: 'mid', to: 'emf', r: o.start ?? 0},
		o.helps ? {id: 'back', kind: 'battery', from: 'emf', to: 'ret', emf: o.back} : {id: 'back', kind: 'battery', from: 'ret', to: 'emf', emf: o.back},
	];
	const s = solveCircuit(parts);
	return Math.abs(s.current.coil);
};
export const V = 12, R = 2.0, BACK_FULL = 10;
/** Current at a fraction k of full speed (back emf proportional to speed, fixed field). */
export const atSpeed = (k: number) => ({k, back: BACK_FULL * k, I: loopCurrent({V, R, back: BACK_FULL * k})});
export const START = atSpeed(0), FULL = atSpeed(1), HALF = atSpeed(0.5);
export const SLIDE = [0, 0.25, 0.5, 0.75, 1].map(atSpeed);
/** Scene 3 what-if: the induced 10 V helping the supply. */
export const WHATIF = (() => { const I = loopCurrent({V, R, back: BACK_FULL, helps: true}); return {I, pin: V * I, heat: I * I * R}; })();
/** Scene 7 power ledger at full speed. */
export const LEDGER = {pin: V * FULL.I, heat: FULL.I * FULL.I * R, conv: FULL.back * FULL.I, pct: (100 * FULL.back * FULL.I) / (V * FULL.I)};
/** Scene 8 jammed: no spin, no back emf. */
export const JAM = (() => { const I = loopCurrent({V, R, back: 0}); return {I, heat: I * I * R, ratio: (I * I * R) / LEDGER.heat}; })();
/** Scene 9 starting resistor: 4.0 ohm in series at the start. */
export const R_START = 4.0;
export const STARTR = {I: loopCurrent({V, R, back: 0, start: R_START})};
/** Attempt 1: 9.0 V, 1.5 ohm, 0.80 A at full speed. */
export const A1 = (() => { const v = 9.0, r = 1.5, i = 0.8; return {v, r, i, ir: i * r, back: v - i * r, jam: loopCurrent({V: v, R: r, back: 0})}; })();
/** Current against speed (fraction of full speed), for the graph and the readouts. */
export const iAt = (k: number) => loopCurrent({V, R, back: BACK_FULL * k});

export const HEAD = 'Why does a spinning DC motor draw less current?';
export const HEAD_NEXT = 'How can we test the motor effect and a DC motor at the bench?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
