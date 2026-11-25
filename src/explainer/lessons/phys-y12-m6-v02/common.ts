// phys-y12-m6-v02 (Year 12 Physics M6 V02: a charged particle fired between plates moves like a projectile).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m6-v02/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {plateRun} from '../../physics/electromagnetism/plates';
import type {MotionPath} from '../../sims/field-motion';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m6-v02: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m6-v02: no response hold in ' + id);
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

// ---------------------------------------------------------------- constants (HSC data sheet values)
export const QE = 1.602e-19, ME = 9.109e-31, MP = 1.673e-27, G = 9.8;
/** The main case: electron at 3.0 x 10^7 m/s into plates 5.0 cm long, 2.0 cm apart, 400 V across (E = 2.0 x 10^4 V/m). */
export const MAIN = (() => {
	const vx = 3.0e7, L = 0.05, d = 0.02, V = 400, E = V / d, a = (QE * E) / ME, t = L / vx, y = 0.5 * a * t * t, vy = a * t;
	const v = Math.hypot(vx, vy), th = (Math.atan2(vy, vx) * 180) / Math.PI;
	return {vx, L, d, V, E, a, t, y, vy, v, th, ag: a / G, formula: (QE * E * L * L) / (2 * ME * vx * vx)};
})();
/** After the plates: a screen 20 cm past the plates. */
export const SCREEN = (() => {
	const D = 0.2, extra = (MAIN.vy * D) / MAIN.vx;
	return {D, extra, total: MAIN.y + extra, check: (MAIN.L / 2 + D) * (MAIN.vy / MAIN.vx)};
})();
/** The proton at the same speed (its deflection, too small to see). */
export const PROTON_Y = (QE * MAIN.E * MAIN.t * MAIN.t) / (2 * MP), RATIO = MP / ME;
/** Deflection inside plates of length L for field E and entry speed vx (m). */
export const deflect = (E: number, L: number, vx: number, m = ME) => (QE * E * L * L) / (2 * m * vx * vx);
/** Where a run reaches the plate (centre-line entry): time and distance along. */
export const hitAt = (E: number, vx: number, half = MAIN.d / 2) => { const a = (QE * E) / ME, t = Math.sqrt((2 * half) / a); return {t, x: vx * t}; };
export const FACT = {
	twoE: deflect(2 * MAIN.E, MAIN.L, MAIN.vx),
	twoL: deflect(MAIN.E, 2 * MAIN.L, MAIN.vx),
	twoLhit: hitAt(MAIN.E, MAIN.vx),
	twoV: deflect(MAIN.E, MAIN.L, 2 * MAIN.vx),
	slow: deflect(MAIN.E, MAIN.L, 1.0e7),
	slowHit: hitAt(MAIN.E, 1.0e7),
	slowT: MAIN.L / 1.0e7,
};
/** Attempt 1: 2.5 x 10^7 m/s, 6.0 cm long, 3.0 cm apart, 150 V. */
export const A1 = (() => {
	const vx = 2.5e7, L = 0.06, d = 0.03, V = 150, E = V / d, a = (QE * E) / ME, t = L / vx, y = 0.5 * a * t * t, vy = a * t;
	return {vx, L, d, V, E, a, t, y, vy, th: (Math.atan2(vy, vx) * 180) / Math.PI, slip: (Math.atan(y / L) * 180) / Math.PI};
})();

// ---------------------------------------------------------------- field motion runs (field only between the plates)
const AY = MAIN.a;
/** The main case, through the plates and 20 cm beyond (one computed path). */
export const RUN_MAIN: MotionPath = plateRun({vx: MAIN.vx, ay: AY, L: MAIN.L, beyond: SCREEN.D, steps: 3000});
/** The main case inside the plates only. */
export const RUN_IN: MotionPath = plateRun({vx: MAIN.vx, ay: AY, L: MAIN.L, steps: 1200});
/** The slider runs (scenes 8 and 9), stopped at the plate (d/2 = 1.0 cm). */
export const RUNS = {
	base: RUN_IN,
	twoE: plateRun({vx: MAIN.vx, ay: 2 * AY, L: MAIN.L, halfGap: MAIN.d / 2}),
	twoL: plateRun({vx: MAIN.vx, ay: AY, L: 2 * MAIN.L, halfGap: MAIN.d / 2}),
	twoLfree: plateRun({vx: MAIN.vx, ay: AY, L: 2 * MAIN.L}),
	twoV: plateRun({vx: 2 * MAIN.vx, ay: AY, L: MAIN.L, halfGap: MAIN.d / 2}),
	slow: plateRun({vx: 1.0e7, ay: AY, L: MAIN.L, halfGap: MAIN.d / 2}),
	slowFree: plateRun({vx: 1.0e7, ay: AY, L: MAIN.L}),
	proton: plateRun({vx: MAIN.vx, ay: -(QE * MAIN.E) / MP, L: MAIN.L}),
};

export const HEAD = "Why is a charged particle's path between plates like a projectile?";
export const HEAD_NEXT = "How does a potential difference set a particle's speed?";
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
