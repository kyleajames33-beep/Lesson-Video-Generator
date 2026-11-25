// phys-y12-m5-v19 (Year 12 Physics M5 V19: geostationary and near-Earth orbits).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video. Keyframe lists go through `mono`, so a later cue that lands earlier in
// the real take can never make a sequence run backwards.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m5-v19/lesson.json';
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
	if (!s) throw new Error('phys-y12-m5-v19: no scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m5-v19: no response hold in ' + id);
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
export const DAY = 86400;
/** NASA Earth Fact Sheet sidereal rotation period 23.9345 h (author note a). */
export const SIDEREAL = 23.9345 * 3600;
export const K = GM / (4 * Math.PI * Math.PI);
/** Radius of a circular orbit with period T (s), from r^3/T^2 = GM/4pi^2. */
export const rOfT = (T: number) => Math.cbrt(K * T * T);
export const periodOf = (r: number) => 2 * Math.PI * Math.sqrt((r * r * r) / GM);
export const C_LIGHT = 3.0e8;

/** The geostationary orbit with the 24 h question value (scenes 3, 4, 6, 10). */
export const GEO = (() => {
	const T = DAY, r3 = K * T * T, r = Math.cbrt(r3), h = r - RE, v = (2 * Math.PI * r) / T;
	return {T, r3, r, h, hKm: h / 1000, hR: h / RE, v, rSid: rOfT(SIDEREAL)};
})();
/** Drift of the satellite past the dish per day (degrees, positive eastward) for period T in hours. */
export const driftPerDay = (Th: number) => 360 * (24 / Th - 1);
/** The space station at 400 km (v18's values). */
export const ISS = (() => {
	const r = RE + 4.0e5, T = periodOf(r);
	return {r, T, min: T / 60, v: Math.sqrt(GM / r), perDay: DAY / T};
})();
/** Low Earth orbit class range: 200 km and 2,000 km periods in minutes. */
export const LEO = {lo: periodOf(RE + 2.0e5) / 60, hi: periodOf(RE + 2.0e6) / 60};
/** GPS medium orbit (gps.gov: about 20,200 km, two orbits a day). */
export const GPS = (() => {
	const r = RE + 2.02e7, T = periodOf(r);
	return {r, T, h: T / 3600};
})();
/** Scene 3's slip (T = 24 left in hours) and scene 9's slip (altitude used as r). */
export const SLIP = {r24: Math.cbrt(K * 24 * 24), t700: periodOf(7.0e5)};
/** Scene 7: signal up and down, and the latitude where the satellite sits on the geometric horizon. */
export const DELAY = (2 * GEO.h) / C_LIGHT;
export const HORIZON_LAT = (Math.acos(RE / GEO.r) * 180) / Math.PI;
/** Scene 9: an imaging satellite 700 km up. */
export const LOW = (() => {
	const h = 7.0e5, r = RE + h, r3 = r ** 3, T = periodOf(r);
	return {h, r, r3, T, min: T / 60, perDay: DAY / T, shift: 360 / (DAY / T)};
})();
/** Attempt 1: a 12.0 h circular orbit. */
export const A1 = (() => {
	const T = 12.0 * 3600, r3 = K * T * T, r = Math.cbrt(r3), h = r - RE;
	return {T, r3, r, h};
})();

// ---------------------------------------------------------------- field motion runs (real units)
const circRun = (r: number, turns = 1) => runMotion({field: {kind: 'central', gm: GM}, start: {x: r, y: 0, vx: 0, vy: Math.sqrt(GM / r)}, duration: periodOf(r) * turns * 1.001, steps: 900 * turns});
/** Scene 8's three true-scale orbits, one lap each (their lap times stand in the table's ratio). */
export const RUN_LOW = circRun(ISS.r);
export const RUN_GPS = circRun(GPS.r);
export const RUN_GEO = circRun(GEO.r);
/** Scene 6 and the handoff: a 24 h ellipse with Earth at one focus (eccentricity 0.2 in scene 6, 0.5 in the handoff). */
export const ellRun = (e: number) => {
	const a = GEO.r, rp = a * (1 - e), vp = Math.sqrt((GM * (1 + e)) / rp);
	return runMotion({field: {kind: 'central', gm: GM}, start: {x: rp, y: 0, vx: 0, vy: vp}, duration: DAY * 1.0005, steps: 3000});
};
export const RUN_E2 = ellRun(0.2);
export const RUN_E5 = ellRun(0.5);

export const HEAD = 'What makes an orbit geostationary rather than merely near Earth?';
export const HEAD_V20 = "How do Kepler's laws describe circular and elliptical orbits?";
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
