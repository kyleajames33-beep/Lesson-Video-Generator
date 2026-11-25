// phys-y12-m5-v20 (Year 12 Physics M5 V20: Kepler's laws for circular and elliptical orbits).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in
// the real take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v20/lesson.json';
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
	if (!s) throw new Error('phys-y12-m5-v20: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v20: no response hold in ' + id);
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

// ---------------------------------------------------------------- units: AU and years round the Sun
/** GM of the Sun in AU^3 per year^2 (so T^2 = a^3 for Earth's units). */
export const GM_AU = 4 * Math.PI * Math.PI;
/** 1 AU per year in km/s (149.598e6 km / 365.256 d). */
export const AUYR_KMS = 149.598e6 / (365.256 * 86400);
/** A Kepler orbit run on the field motion engine from perihelion (Sun at the origin; perihelion on +x). */
export const keplerRun = (a: number, e: number, turns = 1, steps = 4000) => {
	const rp = a * (1 - e), vp = Math.sqrt((GM_AU * (1 + e)) / rp), T = a ** 1.5;
	return runMotion({field: {kind: 'central', gm: GM_AU}, start: {x: rp, y: 0, vx: 0, vy: vp}, duration: T * turns * 1.0005, steps: steps * turns});
};

/** Halley (NASA "1P/Halley"): perihelion 0.5871 AU (9 Feb 1986), aphelion 35.25 AU, return 2061. */
export const HALLEY = (() => {
	const rp = 0.5871, ra = 35.25, a = (rp + ra) / 2, e = (ra - rp) / (ra + rp), T = a ** 1.5;
	const vp = Math.sqrt((GM_AU * (1 + e)) / rp), va = Math.sqrt((GM_AU * (1 - e)) / ra);
	return {rp, ra, a, e, T, b: a * Math.sqrt(1 - e * e), vpKms: vp * AUYR_KMS, vaKms: va * AUYR_KMS, tFar: ra ** 1.5, tNear: rp ** 1.5, twoA: rp + ra};
})();
export const RUN_HALLEY = keplerRun(HALLEY.a, HALLEY.e, 2, 30000);
/** The teaching orbit (scenes 3 to 6): a = 1 AU, e = 0.6. */
export const TEACH = (() => {
	const a = 1, e = 0.6, b = a * Math.sqrt(1 - e * e), T = 1;
	const rp = a * (1 - e), ra = a * (1 + e);
	const vp = Math.sqrt((GM_AU * (1 + e)) / rp), va = Math.sqrt((GM_AU * (1 - e)) / ra);
	return {a, e, b, T, rp, ra, area: (Math.PI * a * b) / 12, vpKms: vp * AUYR_KMS, vaKms: va * AUYR_KMS, rv: rp * vp * AUYR_KMS};
})();
export const RUN_TEACH = keplerRun(TEACH.a, TEACH.e, 2, 6000);
/** Earth (NASA Earth Fact Sheet): perihelion and aphelion (10^6 km), the NASA speeds and their ratios. */
export const EARTH = {rp: 147.095, ra: 152.1, vmax: 30.29, vmin: 29.29, ratio: 152.1 / 147.095, vRatio: 30.29 / 29.29, e: 0.0167};
/** Mars (NASA Mars Fact Sheet): a = 227.956e6 km, T = 686.980 d, perihelion 206.650e6 km, aphelion 249.261e6 km. */
export const MARS = (() => {
	const AU = 149.598, a = 227.956 / AU, T = 686.98 / 365.256, rp = 206.65 / AU, ra = 249.261 / AU;
	return {a, T, a3: a ** 3, T2: T * T, rp, ra, e: (ra - rp) / (ra + rp)};
})();
export const RUN_EARTH = keplerRun(1, EARTH.e, 3, 2000);
export const RUN_MARS = keplerRun(MARS.a, MARS.e, 2, 3000);
/** Attempt 1: Jupiter at 5.20 AU; the slip T^3 = a^2. */
export const A1 = {a: 5.2, a3: 5.2 ** 3, T: 5.2 ** 1.5, slip: 5.2 ** (2 / 3)};
/** Attempt 2: Mars at 1.381 AU and 1.666 AU. */
export const A2 = {rp: 1.381, ra: 1.666, ratio: 1.666 / 1.381, inv: 1.381 / 1.666};

export const HEAD = "How do Kepler's laws describe circular and elliptical orbits?";
export const HEAD_V21 = 'Why does gravitational potential energy use a zero at infinity?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
