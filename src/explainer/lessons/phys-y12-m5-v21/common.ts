// phys-y12-m5-v21 (Year 12 Physics M5 V21: gravitational potential energy, U = -GMm/r with zero at infinity).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in
// the real take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v21/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {runMotion} from '../../sims/field-motion';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v21: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v21: no response hold in ' + id);
	return h;
};
/** The response hold if the take has one (the hook's 3 s prediction hold is not in this take). */
export const holdIf = (id: string) => sc(id).responseHold;
/** Keyframes forced to strictly increasing frames (each at least `gap` after the last). */
export const mono = (pts: readonly (readonly [number, number])[], gap = 8): [number, number][] => {
	const out: [number, number][] = [];
	for (const [t, v] of pts) out.push([out.length ? Math.max(t, out[out.length - 1][0] + gap) : t, v]);
	return out;
};

// ---------------------------------------------------------------- constants (HSC data sheet values)
export const Gc = 6.67e-11, ME = 6.0e24, RE = 6.371e6;
export const GM = Gc * ME;
export const gAt = (r: number) => GM / (r * r);
/** The satellite: 1000 kg. */
export const MSAT = 1000;
export const GMm = GM * MSAT;
/** Gravity's pull on the satellite (and the slow-lift force) at r. */
export const F = (r: number) => GMm / (r * r);
/** U = -GMm/r for the satellite. */
export const U = (r: number) => -GMm / r;
/** Geostationary radius with the 24 h question value (last time's result). */
export const R_GEO = Math.cbrt((GM / (4 * Math.PI * Math.PI)) * 86400 * 86400);

/** The hook: mgh with g = 9.8 against the radial change. */
export const HOOK = (() => {
	const h = R_GEO - RE, mgh = MSAT * 9.8 * h, dU = GMm * (1 / RE - 1 / R_GEO);
	return {h, mgh, dU, ratio: mgh / dU, gTop: gAt(R_GEO), gSurf: gAt(RE), topPct: (gAt(R_GEO) / gAt(RE)) * 100};
})();
/** Left-endpoint strip sums of F from R to the geostationary radius. */
export const stripSum = (n: number) => {
	const dr = (R_GEO - RE) / n;
	let s = 0;
	for (let i = 0; i < n; i++) s += F(RE + i * dr) * dr;
	return s;
};
/** Work from R out to nR: (GMm/R)(1 - 1/n). */
export const workTo = (n: number) => (GMm / RE) * (1 - 1 / n);
export const TOTAL = GMm / RE;
/** Gravitational potential at the surface (J/kg). */
export const V_SURF = -GM / RE;
/** The crossed slip in scene 8: the altitude used as r2. */
export const SLIP_U2 = -GMm / HOOK.h;
/** mgh / true change = 1 + h/R exactly (with g = GM/R^2). */
export const hOverR = (h: number) => h / RE;
/** Attempt 1: 500 kg from 7.0e6 m to 9.0e6 m. */
export const A1 = (() => {
	const m = 500, r1 = 7.0e6, r2 = 9.0e6, gmm = GM * m, br = 1 / r1 - 1 / r2;
	return {m, r1, r2, gmm, i1: 1 / r1, i2: 1 / r2, br, dU: gmm * br};
})();
/** Attempt 2: U from -6.0e10 J to -4.0e10 J. */
export const A2 = {u1: -6.0e10, u2: -4.0e10, dU: -4.0e10 - -6.0e10};

/** The handoff: two circular orbits at r and 2r on the field motion engine. */
export const R_IN = 1.6e7, R_OUT = 3.2e7;
const circ = (r: number) => runMotion({field: {kind: 'central', gm: GM}, start: {x: r, y: 0, vx: 0, vy: Math.sqrt(GM / r)}, duration: 2 * Math.PI * Math.sqrt(r ** 3 / GM) * 1.001, steps: 900});
export const RUN_IN = circ(R_IN), RUN_OUT = circ(R_OUT);

export const HEAD = 'Why does gravitational potential energy use a zero at infinity?';
export const HEAD_V22 = 'Why does a higher circular orbit have lower speed but greater total energy?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
