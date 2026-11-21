// Y11 Chem M2 V01 (conservation of mass and balancing equations) shared pieces: measured lesson lookups, response
// holds, plates and the one data table every on-screen mass, formula, atom count and coefficient is drawn from.
// Sources (design author notes a, b and e): masses are illustrative, worked from the formulae (CuCO3 2.47 g gives
// CuO 1.59 g and CO2 0.88 g; Mg 0.24 g gives MgO 0.40 g, oxygen 0.16 g; CaCO3 5.00 g gives CaO 2.80 g and CO2
// 2.20 g); the closed-system reading 98.42 g is illustrative. Every measured mass carries "illustrative data".
// Plate alpha boxes measured from the alpha channel (bounding box of alpha > 8).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m2-v01/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M2 V01 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
export const BAL = mkp(C + 'y11c-top-pan-balance-v1.png', [1402, 1122], [52, 137, 1322, 1028]);
export const SALTSOL = mkp(C + 'm5x-unsaturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
export const CRU_G = mkp(C + 'y11c-cuco3-crucible-green-v1.png', [1024, 1536], [122, 151, 902, 1384]);
export const CRU_GL = mkp(C + 'y11c-cuco3-crucible-green-lit-v1.png', [1024, 1536], [122, 151, 902, 1384]);
export const CRU_BL = mkp(C + 'y11c-cuco3-crucible-black-lit-v1.png', [1024, 1536], [122, 151, 902, 1384]);
/** Native points on the crucible set (1024 x 1536): the powder surface centre and the bowl's box. */
export const CRU_N = {powder: [512, 280] as [number, number], bowl: [296, 178, 726, 525] as [number, number, number, number]};
export const RIBBON = mkp(C + 'p01-mg-ribbon-v1.png', [2000, 2000], [208, 636, 1804, 1591]);
export const MGO = mkp(C + 'm5-g02b-open-crucible-v1.png', [1280, 1920], [154, 192, 1125, 1728]);
export const BK_CLEAR = mkp(C + 'y11c-beaker-colourless-solution-v1.png', [1254, 1254], [170, 98, 1083, 1154]);
export const BK_PPT = mkp(C + 'y11c-beaker-white-precipitate-v1.png', [1254, 1254], [170, 98, 1083, 1154]);
export const BK_EMPTY = mkp(C + 'm6-beaker-v1.png', [2048, 2048], [278, 164, 1769, 1884]);
export const ALS = mkp(C + 'y11c-sample-aluminium-v1.png', [1254, 1254], [132, 392, 1120, 947]);
export const GLASS = mkp('assets/biology/m8-water-glass-v1.png', [2000, 2000], [560, 220, 1441, 1780]);
export const PLATES: PDef[] = [BAL, SALTSOL, CRU_G, CRU_GL, CRU_BL, RIBBON, MGO, BK_CLEAR, BK_PPT, BK_EMPTY, ALS, GLASS];
/** Width of a plate drawn at height h. */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];

// ---------- the data table ----------
/** Illustrative masses (grams). */
export const M = {
	cuco3: 2.47, cuo: 1.59, co2: 0.88,
	mg: 0.24, mgo: 0.40, o2: 0.16,
	closed: 98.42,
	caco3: 5.0, cao: 2.8, co2b: 2.2,
	water: 100.0, salt: 10.0,
};
export const g2 = (v: number) => `${v.toFixed(2)} g`;
export const ILLUS = 'illustrative data';
/** A formula: its markup and the atoms in one particle. */
export type Formula = {t: string; atoms: Record<string, number>; state?: string};
const fm = (t: string, atoms: Record<string, number>, state?: string): Formula => ({t, atoms, state});
export const F = {
	H2: fm('H_2', {H: 2}, 'g'), O2: fm('O_2', {O: 2}, 'g'), H2O: fm('H_2O', {H: 2, O: 1}, 'l'), H2O2: fm('H_2O_2', {H: 2, O: 2}),
	Mg: fm('Mg', {Mg: 1}, 's'), MgO: fm('MgO', {Mg: 1, O: 1}, 's'),
	CuCO3: fm('CuCO_3', {Cu: 1, C: 1, O: 3}, 's'), CuO: fm('CuO', {Cu: 1, O: 1}, 's'), CO2: fm('CO_2', {C: 1, O: 2}, 'g'),
	Al: fm('Al', {Al: 1}, 's'), Al2O3: fm('Al_2O_3', {Al: 2, O: 3}, 's'), O3: fm('O_3', {O: 3}),
};
/** An equation: left and right formulae. */
export type Eq = {l: Formula[]; r: Formula[]};
export const EQ = {
	water: {l: [F.H2, F.O2], r: [F.H2O]} as Eq,
	mg: {l: [F.Mg, F.O2], r: [F.MgO]} as Eq,
	cu: {l: [F.CuCO3], r: [F.CuO, F.CO2]} as Eq,
	al: {l: [F.Al, F.O2], r: [F.Al2O3]} as Eq,
};
/** Atom counts on each side for coefficients c (left then right). */
export const tally = (e: Eq, c: number[], els: string[]) => els.map(el => {
	let l = 0, r = 0;
	e.l.forEach((f, i) => { l += (f.atoms[el] ?? 0) * c[i]; });
	e.r.forEach((f, i) => { r += (f.atoms[el] ?? 0) * c[e.l.length + i]; });
	return {el, l, r};
});
