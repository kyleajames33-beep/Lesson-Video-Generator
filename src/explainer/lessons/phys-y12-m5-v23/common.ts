// phys-y12-m5-v23 (Year 12 Physics M5 V23: escape velocity, v_esc = sqrt(2GM/r) from E = 0).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in
// the real take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v23/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {runMotion, stateAt} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m5-v23: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v23: no response hold in ' + id);
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
/** Escape and circular-orbit speeds at radius r (m/s). */
export const vEsc = (r: number) => Math.sqrt((2 * GM) / r);
export const vOrb = (r: number) => Math.sqrt(GM / r);
export const VESC = vEsc(RE), VORB = vOrb(RE);
/** Greatest height (above the surface) for a vertical launch at v: 1/r_max = 1/R - v^2/(2GM). */
export const hMax = (v: number) => 1 / (1 / RE - (v * v) / (2 * GM)) - RE;
/** Constant-g estimate of the 5 km/s climb (v^2 / 2g). */
export const H_MGH = 5000 ** 2 / (2 * 9.8);
/** Total energy per kilogram at launch (J/kg). */
export const ePerKg = (v: number) => 0.5 * v * v - GM / RE;
export const GM_R = GM / RE;
/** Speed far away (v_inf) for a launch above escape speed. */
export const vInf = (v: number) => Math.sqrt(v * v - VESC * VESC);
/** The crossed slip in scene 4: the square root left out. */
export const SLIP4 = (2 * GM) / RE;
/** Scene 5: 400 km up. */
export const R400 = RE + 4.0e5;
export const ORB400 = {orbit: vOrb(R400), escape: vEsc(R400), extra: vEsc(R400) - vOrb(R400)};
/** Moon (NASA: 7.346e22 kg, 1738.1 km). */
export const MOON = Math.sqrt((2 * Gc * 7.346e22) / 1.7381e6);

// ---------------------------------------------------------------- field motion runs (radial launches)
/** A vertical launch from the surface (x = 0, y = R) at speed v, on the field motion engine. Bound launches stop
 * when they fall back to the surface; escaping launches run out to about 200 R. */
const launch = (v: number, dir = 90, duration?: number, steps = 6000) => {
	const bound = v < VESC - 1;
	const d = duration ?? (bound ? 2.2 * Math.PI * Math.sqrt((1 / (2 / RE - (v * v) / GM)) ** 3 / GM) : 1.2e6);
	const th = (dir * Math.PI) / 180;
	return runMotion({field: {kind: 'central', gm: GM}, start: {x: 0, y: RE, vx: v * Math.cos(th), vy: v * Math.sin(th)}, duration: d, steps, stopWhen: s => s.t > 1 && Math.hypot(s.x, s.y) < RE * 0.9999});
};
export const SPEEDS = [5000, 8000, 10000, VESC, 14000] as const;
export const RUNS: Record<number, MotionPath> = Object.fromEntries(SPEEDS.map(v => [v, launch(v, 90, undefined, v < VESC - 1 ? 3000 : 24000)]));
/** Height of a run at time t (m) and its speed (m/s). */
export const runAt = (p: MotionPath, t: number) => {
	const s = stateAt(p, t), r = Math.hypot(s.x, s.y);
	return {r, h: r - RE, v: s.speed, x: s.x, y: s.y, vx: s.vx, vy: s.vy};
};
/** Time of the greatest height on a bound run. */
export const apexT = (p: MotionPath) => {
	let best = 0, bt = 0;
	for (let i = 0; i <= p.n; i++) { const r = Math.hypot(p.x[i], p.y[i]); if (r > best) { best = r; bt = i * p.dt; } }
	return bt;
};
/** Lane 1's sideways launch: 8.5 km/s sideways from the surface settles on a closed path (an orbit). */
export const SIDE = (() => {
	const v = 8500, a = 1 / (2 / RE - (v * v) / GM);
	return runMotion({field: {kind: 'central', gm: GM}, start: {x: 0, y: RE, vx: v, vy: 0}, duration: 2 * Math.PI * Math.sqrt(a ** 3 / GM) * 0.999, steps: 3000});
})();
/** Scene 7: three launches at escape speed (up, slanted 45 degrees, sideways) and the slip aimed into the ground. */
export const DIRS = [90, 45, 0].map(d => launch(VESC, d, 20000, 8000));
/** The time at which a run first reaches radius r (s). */
export const timeAtR = (p: MotionPath, r: number) => {
	for (let i = 1; i <= p.n; i++) {
		if (Math.hypot(p.x[i], p.y[i]) < r) continue;
		// Bisect between the two stored steps on the smooth path.
		let a = (i - 1) * p.dt, b = i * p.dt;
		for (let k = 0; k < 40; k++) { const m = (a + b) / 2, s = stateAt(p, m); if (Math.hypot(s.x, s.y) < r) a = m; else b = m; }
		return b;
	}
	return p.duration;
};

/** Scene 9: an escape from a circular orbit at 2R (speed raised by root 2), on the field motion engine. */
export const R9 = 2 * RE;
export const ESC9 = runMotion({field: {kind: 'central', gm: GM}, start: {x: 0, y: R9, vx: vEsc(R9), vy: 0}, duration: 30000, steps: 6000});

/** Scene 8: an illustrative rocket climb (net acceleration 25 m/s^2 for 300 s), not the escape-velocity model. */
export const ROCKET = {a: 25, T: 300};
export const rocketAt = (t: number) => ({v: ROCKET.a * Math.min(t, ROCKET.T), h: 0.5 * ROCKET.a * Math.min(t, ROCKET.T) ** 2});

/** Attempt 1: Mars (site mass 6.42e23 kg, NASA radius 3.39e6 m). */
export const A1 = (() => {
	const m = 6.42e23, r = 3.39e6, inside = (2 * Gc * m) / r;
	return {m, r, num: 2 * Gc * m, inside, v: Math.sqrt(inside), slip: Math.sqrt((Gc * m) / r)};
})();

export const HEAD = 'What minimum launch speed allows escape without further propulsion?';
export const HEAD_NEXT = "How does the voltage between parallel plates set a charged particle's acceleration?";
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
