// phys-y12-m6-v13 (Year 12 Physics M6 V13: ideal transformers, how a transformer exchanges voltage for current).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3, narration unchanged), so the provisional file was
// made with the unchanged make-provisional script from the brief 259 source audit.
// Every transformer readout comes from the circuits engine's ideal transformer (sims/circuits.ts, added 14 November,
// after the design recorded the engine as direct current only).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v13/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {idealTransformer} from '../../sims/circuits';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v13: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v13: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
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
/** Hook (site prediction): 100 to 200 turns on 10 V AC; the lamp draws 0.50 A (a 40 ohm load), so I_p = 1.0 A. */
export const HOOK = idealTransformer({primaryVoltage: 10, turns: [100, 200], load: 40});
/** Scene 7: two lamps in parallel (20 ohm): I_s = 1.0 A, I_p = 2.0 A. */
export const TWO = idealTransformer({primaryVoltage: 10, turns: [100, 200], load: 20});
/** Scene 2: volts per turn 10 V / 100 turns = 0.1 V; the secondary's 200 turns give 20 V. */
export const PER_TURN = 10 / 100;
/** Scene 6: the turns slider (N_p = 100, V_p = 10 V, a load that takes 10 W: R = V_s^2 / 10). */
export const SLIDER = [50, 100, 200, 400].map(ns => {
	const vs = (10 * ns) / 100;
	return {ns, ...idealTransformer({primaryVoltage: 10, turns: [100, ns], load: (vs * vs) / 10})};
});
/** Scene 3 screen check (site Stop and Check): 230 V, 400 to 800 turns. */
export const CHECK = idealTransformer({primaryVoltage: 230, turns: [400, 800], load: 1000});
/** Worked example (site, 230 V throughout as the design decides): 1200 to 60 turns, I_p = 0.50 A. */
export const WE = (() => {
	const Vp = 230, Np = 1200, Ns = 60, Ip = 0.5;
	const Vs = (Vp * Ns) / Np, Is = (Vp * Ip) / Vs;
	const t = idealTransformer({primaryVoltage: Vp, turns: [Np, Ns], load: Vs / Is});
	return {Vp, Np, Ns, Ip, Vs: t.secondaryVoltage, Is: t.secondaryCurrent, IsCheck: Ip * (Np / Ns), Pin: Vp * Ip, Pout: t.secondaryVoltage * t.secondaryCurrent, ratio: Np / Ns, slip: (Vp * Np) / Ns, IpEngine: t.primaryCurrent};
})();
/** Attempt 1: 200 to 3000 turns, 24 V, I_s = 0.40 A. */
export const A1 = (() => {
	const Np = 200, Ns = 3000, Vp = 24, Is = 0.4;
	const Vs = (Vp * Ns) / Np;
	const t = idealTransformer({primaryVoltage: Vp, turns: [Np, Ns], load: Vs / Is});
	return {Np, Ns, Vp, Is, Vs: t.secondaryVoltage, Ip: t.primaryCurrent, ratio: Ns / Np, slip: Is / (Ns / Np)};
})();

export const HEAD = 'How does a transformer exchange voltage for current?';
export const HEAD_NEXT = 'Why are real transformers less efficient than the ideal model?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
