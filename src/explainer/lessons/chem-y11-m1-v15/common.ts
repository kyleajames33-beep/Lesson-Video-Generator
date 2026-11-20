// Y11 Chem M1 V15 (Group 1 metals and water) shared pieces: measured lesson lookups, response holds, plates and the
// one data table every on-screen number is drawn from.
// Sources (design author note a), one per quantity:
// - first ionisation energy: NIST Atomic Spectra Database via the PubChem periodic table (same values as V14);
// - melting point and density: PubChem periodic table (retrieved 5 November 2026), melting points rounded to whole °C,
//   densities to two decimals;
// - atomic radius (ring sizes only, as V13 and V14): Cordero et al. (2008) covalent radii.
// Plate alpha boxes measured from each plate's alpha channel (bounding box of alpha > 8). The four trough states are one
// aligned set, so all four are drawn through the water plate's box (same scale and offset), which keeps them in register.
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v15/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V15 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
const TBOX: [number, number, number, number] = [85, 212, 1413, 866];
export const TR_WATER = mkp(C + 'y11c-trough-water-v1.png', [1499, 1049], TBOX);
export const TR_LI = mkp(C + 'y11c-trough-li-v1.png', [1500, 1049], TBOX);
export const TR_NA = mkp(C + 'y11c-trough-na-v1.png', [1500, 1049], TBOX);
export const TR_K = mkp(C + 'y11c-trough-k-v1.png', [1500, 1049], TBOX);
export const OILJAR = mkp(C + 'y11c-alkali-oil-jar-v1.png', [1254, 1254], [278, 241, 958, 1021]);
const CUTBOX: [number, number, number, number] = [214, 308, 1288, 876];
export const CUT_FRESH = mkp(C + 'y11c-sodium-cut-fresh-v1.png', [1499, 1049], CUTBOX);
export const CUT_DULL = mkp(C + 'y11c-sodium-cut-tarnished-v1.png', [1500, 1049], CUTBOX);
export const PHTH = mkp(C + 'm6-clip-phenolphthalein-pink-v1.png', [2048, 1700], [561, 138, 1484, 1564]);
export const FL_K = mkp(C + 'm8-flame-k-lilac-v1.png', [2000, 2000], [662, 173, 1340, 1826]);
export const FL_NA = mkp(C + 'm8-flame-na-yellow-v2.png', [2000, 2000], [665, 179, 1340, 1829]);
export const PLATES: PDef[] = [TR_WATER, TR_LI, TR_NA, TR_K, OILJAR, CUT_FRESH, CUT_DULL, PHTH, FL_K, FL_NA];
/** Height of a plate drawn at width w. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];
/** Width of a plate drawn at height h. */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];

// Points on the trough plates in native pixels (read from the plates): where each piece sits, the potassium flame,
// and the water surface ellipse.
export const PT = {li: [750, 435] as [number, number], na: [705, 465] as [number, number], k: [750, 425] as [number, number], flame: [762, 362] as [number, number]};
export const SURF = {cx: 750, cy: 408, rx: 625, ry: 62, bottom: 815};
/** Trough layout: x, y = top left of the trough's alpha box on screen; w = drawn width of that box. */
export type TL = {x: number; y: number; w: number};
export const tk = (t: TL) => t.w / TR_WATER.box[2];
export const th = (t: TL) => ph(TR_WATER, t.w);
/** Screen point of a native trough point. */
export const tp = (t: TL, p: [number, number]): [number, number] => [t.x + (p[0] - TR_WATER.box[0]) * tk(t), t.y + (p[1] - TR_WATER.box[1]) * tk(t)];

// ---------- the data table ----------
export type El = {sym: string; name: string; z: number; shells: number[]; ie: number; mp?: number; rho?: number; r: number};
const el = (sym: string, name: string, z: number, shells: number[], r: number, ie: number, mp?: number, rho?: number): El => ({sym, name, z, shells, r, ie, mp, rho});
/** Every value on screen comes from here. ie: kJ/mol; mp: °C; rho: g/cm³; r: pm (ring sizes only). */
export const DATA: Record<string, El> = {
	Li: el('Li', 'lithium', 3, [2, 1], 128, 520, 181, 0.53),
	Na: el('Na', 'sodium', 11, [2, 8, 1], 166, 496, 98, 0.97),
	K: el('K', 'potassium', 19, [2, 8, 8, 1], 203, 419, 63, 0.89),
	Rb: el('Rb', 'rubidium', 37, [2, 8, 18, 8, 1], 220, 403),
	Cs: el('Cs', 'caesium', 55, [2, 8, 18, 18, 8, 1], 244, 376),
};
export const G1: El[] = ['Li', 'Na', 'K', 'Rb', 'Cs'].map(s => DATA[s]);
export const G3: El[] = G1.slice(0, 3);
export const ie = (e: El) => e.ie;
export const mp = (e: El) => { if (e.mp === undefined) throw new Error('no mp for ' + e.sym); return e.mp; };
export const rho = (e: El) => { if (e.rho === undefined) throw new Error('no density for ' + e.sym); return e.rho.toFixed(2); };
/** Core charge (protons minus inner-shell electrons). */
export const core = (e: El) => e.z - e.shells.slice(0, -1).reduce((a, b) => a + b, 0);
export const SRC_IE = 'first ionisation energies: NIST data via PubChem';
export const SRC_PHYS = 'melting points and densities: PubChem';
