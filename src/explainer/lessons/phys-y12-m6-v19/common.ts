// phys-y12-m6-v19 (Year 12 Physics M6 V19: AC induction motors, why must an induction-motor rotor lag the rotating
// field?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// The prepared narration matched the current design (Revision 3, 6,462 characters, 16 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// No engine fits (design Revision 3): the turning field is exact for the drawn four-pole winding (coil k carries
// cos(2 phi - 60k), the three phase currents a third of a cycle apart), and the slip model in scenes 6 and 7 is the
// design's illustrative small-slip model (torque proportional to slip), tagged "illustrative" on screen.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v19/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v19: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v19: no response hold in ' + id);
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
/** Synchronous speed n_s = 120 f / p (revolutions per minute). */
export const syncRpm = (hz: number, poles: number) => (120 * hz) / poles;
export const HZ = 50, POLES = 4, POLES_V18 = 2;
export const NS = syncRpm(HZ, POLES); // 1500
export const NS_V18 = syncRpm(HZ, POLES_V18); // 3000
export const ROTOR = 1425;
export const SLIP = NS - ROTOR; // 75
export const SLIP_PCT = (SLIP / NS) * 100; // 5.0
/** The classic slip: dividing by the rotor's speed (75 / 1425 = 5.26, shown 5.3). */
export const SLIP_PCT_WRONG = (SLIP / ROTOR) * 100;
/** Scene 6 rotor-speed slider (illustrative small-slip model: grip proportional to slip, 1 at 10 per cent). */
export const SLIDER = [1350, 1425, 1470, 1500].map(n => { const pct = ((NS - n) / NS) * 100; return {n, pct, grip: pct / 10}; });
/** Slip as displayed: 10%, 5.0%, 2.0%, 0. */
export const pctText = (p: number) => (p < 0.05 ? '0' : p >= 9.95 ? `${p.toFixed(0)}%` : `${p.toFixed(1)}%`);

// ---------------------------------------------------------------- the turning field (screen schematic)
/** Field turning rate on screen (degrees per frame) that stands for the synchronous speed. */
export const FIELD_RATE = 2.2;
/** Rotor rate (degrees per frame) for a rotor speed in revolutions per minute (same scale as the field). */
export const rotorRate = (rpm: number) => (FIELD_RATE * rpm) / NS;

export const HEAD = 'Why must an induction-motor rotor lag the rotating field?';
export const HEAD_NEXT = 'How can a moving conductor be braked without contact?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
