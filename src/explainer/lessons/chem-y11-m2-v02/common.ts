// Y11 Chem M2 V02 (the mole and the Avogadro constant) shared pieces: measured lesson lookups, response holds, plates
// and the one data table every on-screen number is drawn from (N_A, the counting clock, the slider stops, the worked
// examples, the naming cases and both attempts). Values and their checks: design "Numbers used" and author notes a
// to d. N_A is the HSC data sheet value. Counting time: N_A s / 3.156 x 10^7 s per year; age of the universe
// 1.38 x 10^10 years (shown 1.4 x 10^10).
// Plate alpha boxes measured 21 Nov 2026 (PIL, alpha > 20) from the real files in public/assets/chemistry.
// - Top-pan balance (1402 x 1122): box (52, 137, 1322, 1028) (geometry from M1 V06's balGeo).
// - Magnesium ribbon on its tile (2000 square): box (209, 636, 1801, 1591).
// - Measuring cylinder (2000 square): box (738, 201, 1262, 1800); inner glass about x 888..1112, inside base y 1640.
// - Dry ice in a dish (1619 x 972): box (121, 113, 1468, 921); a front pellet about (800, 420).
// - Halite crystal (1254 square): box (147, 110, 1088, 1144); front face centre about (420, 700).
// - Carbon lump (1600 square): box (161, 245, 1438, 1354).
// - Gas jar (935 x 1682): box (138, 128, 779, 1524).
// - Calcium chloride on a watch glass (1672 x 941): box (144, 226, 1516, 724).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m2-v02/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M2 V02 scene not found ' + id);
	return s;
};
/** Response hold: from the end of the recorded speech to the end of the scene (the measured holdSeconds). */
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
export const BAL = mkp(C + 'y11c-top-pan-balance-v1.png', [1402, 1122], [52, 137, 1322, 1028]);
export const RIBBON = mkp(C + 'p01-mg-ribbon-v1.png', [2000, 2000], [209, 636, 1801, 1591]);
export const CYL = mkp(C + 'm6-measuring-cylinder-v1.png', [2000, 2000], [738, 201, 1262, 1800]);
export const CYL_N = {l: 888, r: 1112, base: 1640, top: 300};
export const DRYICE = mkp(C + 'y11c-dry-ice-v1.png', [1619, 972], [121, 113, 1468, 921]);
export const DRYICE_PELLET: [number, number] = [800, 420];
export const HALITE = mkp(C + 'y11c-halite-crystal-v1.png', [1254, 1254], [147, 110, 1088, 1144]);
export const HALITE_FACE: [number, number] = [420, 700];
export const LUMP = mkp(C + 'c4-icon-carbon-lump-v1.png', [1600, 1600], [161, 245, 1438, 1354]);
export const JAR = mkp(C + 'y11c-gas-jar-v1.png', [935, 1682], [138, 128, 779, 1524]);
export const CACL2 = mkp(C + 'y11c-calcium-chloride-v1.png', [1672, 941], [144, 226, 1516, 724]);
/** Beaker of water (1254 square): box (237, 226, 967, 1027). */
export const BEAKER_W = mkp(C + 'y11c-beaker-water-36ml-v1.png', [1254, 1254], [237, 226, 967, 1027]);
export const PLATES: PDef[] = [BAL, RIBBON, CYL, DRYICE, HALITE, LUMP, JAR, CACL2, BEAKER_W];
/** Width of a plate drawn at height h. */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];
/** Screen point of a native point on a plate drawn with its box top-left at (x, y) and height h. */
export const ptOn = (p: PDef, x: number, y: number, h: number, u: number, v: number): [number, number] => {
	const k = h / p.box[3];
	return [x + (u - p.box[0]) * k, y + (v - p.box[1]) * k];
};

// ---------- number formatting (chemistry markup: ^{...} superscripts) ----------
/** a x 10^e with `dp` decimals in a; rounding is done on the mantissa with a small guard against float error. */
export const sci = (v: number, dp: number) => {
	if (v === 0) return '0';
	let e = Math.floor(Math.log10(Math.abs(v)));
	let m = v / 10 ** e;
	const k = 10 ** dp;
	m = Math.round(m * k + 1e-9) / k;
	if (m >= 10) { m /= 10; e += 1; }
	const ms = m.toFixed(dp);
	return `${ms} × 10^{${e < 0 ? '−' + -e : e}}`;
};
export const fix = (v: number, dp: number) => (Math.round(v * 10 ** dp + 1e-9) / 10 ** dp).toFixed(dp);

// ---------- the data table ----------
export const NA = 6.022e23;
export const NA_S = sci(NA, 3); // 6.022 x 10^23
export const NA_UNIT = 'mol^{−1}';
export const D = {
	mg: 0.24, // g of ribbon (M2 V01's final frame)
	cAtom: 12.01 / NA, // g per carbon atom: 1.994 x 10^-23, shown about 2 x 10^-23
	yearS: 3.156e7, // s per year
	universe: 1.38e10, // years
	dozen: 12,
	dozens: 5,
	ream: 500,
	slider: [0, 1, 2, 2.5], // mol stops on the slider
	back: {N: 3.011e23}, // reverse run: N -> 0.50 mol
	we1: {n: 2.5}, // carbon atoms
	we2: {N: 3.01e24}, // water molecules
	co2: {n: 0.5, oPer: 2},
	nacl: {n: 1},
	a1: {N: 9.03e22}, // helium atoms
	a2: {n: 0.2, clPer: 2}, // CaCl2
};
/** Counting one particle per second: years for a mole. */
export const YEARS = NA / D.yearS; // 1.908 x 10^16
export const TIMES_UNIVERSE = YEARS / D.universe; // 1.38 x 10^6
export const R = {
	cAtom: `≈ ${Math.round(D.cAtom / 10 ** Math.floor(Math.log10(D.cAtom)))} × 10^{−${-Math.floor(Math.log10(D.cAtom))}} g`,
	years: sci(YEARS, 1),
	universe: sci(D.universe, 1),
	we1: D.we1.n * NA, // 1.5055 x 10^24
	we2: D.we2.N / NA, // 4.998
	co2N: D.co2.n * NA, // 3.011 x 10^23
	co2O: D.co2.n * NA * D.co2.oPer, // 6.022 x 10^23
	co2On: D.co2.n * D.co2.oPer, // 1.0 mol
	a1: D.a1.N / NA, // 0.14995
	a1wrong: D.a1.N * NA, // 5.438 x 10^46
	a2n: D.a2.n * D.a2.clPer, // 0.400 mol
	a2N: D.a2.n * D.a2.clPer * NA, // 2.409 x 10^23
	a2wrong: D.a2.n * NA, // 1.204 x 10^23
};
export const SRC_NA = 'N_A: HSC data sheet value';
