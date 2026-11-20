// Y11 Chem M1 V14 (first ionisation energy and electronegativity) shared pieces: measured lesson lookups, response
// holds, plates and the one data table every on-screen number, bar, meter, ring and pair position is drawn from.
// Sources (design author note a), one per quantity:
// - first ionisation energy: NIST Atomic Spectra Database via the PubChem periodic table (eV x 96.4853, rounded);
// - electronegativity: Pauling values from the PubChem periodic table (shown to one decimal);
// - atomic radius (ring sizes only, as V13): Cordero et al. (2008) covalent radii.
// Plate alpha boxes are the measured boxes already used by V12 and V13 (same files); the trough box was measured
// from its alpha channel (bounding box of alpha > 8).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v14/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V14 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
export const NA = mkp(C + 'y11c-sample-sodium-oil-v1.png', [1254, 1254], [244, 131, 1007, 1089]);
export const MG = mkp(C + 'y11c-sample-magnesium-ribbon-v1.png', [1254, 1254], [127, 385, 1122, 935]);
export const AL = mkp(C + 'y11c-sample-aluminium-v1.png', [1254, 1254], [132, 392, 1120, 947]);
export const SI = mkp(C + 'y11c-sample-silicon-v1.png', [1254, 1254], [139, 244, 1115, 995]);
export const PH = mkp(C + 'y11c-sample-red-phosphorus-v1.png', [1254, 1254], [379, 163, 870, 1089]);
export const SULFUR = mkp(C + 'y11c-sample-sulfur-v1.png', [1466, 1073], [250, 326, 1216, 788]);
export const CLJAR = mkp(C + 'y11c-gas-jar-chlorine-v1.png', [935, 1683], [204, 276, 714, 1393]);
export const JAR = mkp(C + 'y11c-gas-jar-v1.png', [935, 1682], [138, 128, 779, 1524]);
export const TROUGH = mkp(C + 'y11c-trough-water-v1.png', [1499, 1049], [85, 212, 1413, 866]);
/** The period 3 sample row, sodium to argon (argon: a clear gas jar). */
export const ROW: PDef[] = [NA, MG, AL, SI, PH, SULFUR, CLJAR, JAR];
export const PLATES: PDef[] = [...ROW, TROUGH];
/** Width of a plate drawn at height h. */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];
/** Height that fits a plate inside a w by h box (uniform scale). */
export const fitH = (p: PDef, w: number, h: number) => Math.min(h, ph(p, w));

// ---------- the data table ----------
export type El = {sym: string; name: string; z: number; shells: number[]; ie?: number; en?: number; r: number};
const el = (sym: string, name: string, z: number, shells: number[], r: number, ie?: number, en?: number): El => ({sym, name, z, shells, r, ie, en});
/** Every value on screen comes from here. ie: kJ/mol; en: Pauling (one decimal); r: pm (Cordero 2008). */
export const DATA: Record<string, El> = {
	H: el('H', 'hydrogen', 1, [1], 31, undefined, 2.2),
	Li: el('Li', 'lithium', 3, [2, 1], 128, 520),
	Na: el('Na', 'sodium', 11, [2, 8, 1], 166, 496, 0.9),
	K: el('K', 'potassium', 19, [2, 8, 8, 1], 203, 419),
	Rb: el('Rb', 'rubidium', 37, [2, 8, 18, 8, 1], 220, 403),
	Cs: el('Cs', 'caesium', 55, [2, 8, 18, 18, 8, 1], 244, 376),
	Mg: el('Mg', 'magnesium', 12, [2, 8, 2], 141, 738, 1.3),
	Al: el('Al', 'aluminium', 13, [2, 8, 3], 121, 578, 1.6),
	Si: el('Si', 'silicon', 14, [2, 8, 4], 111, 787, 1.9),
	P: el('P', 'phosphorus', 15, [2, 8, 5], 107, 1012, 2.2),
	S: el('S', 'sulfur', 16, [2, 8, 6], 105, 1000, 2.6),
	Cl: el('Cl', 'chlorine', 17, [2, 8, 7], 102, 1251, 3.2),
	Ar: el('Ar', 'argon', 18, [2, 8, 8], 106, 1521),
	F: el('F', 'fluorine', 9, [2, 7], 57, undefined, 4.0),
	Br: el('Br', 'bromine', 35, [2, 8, 18, 7], 120, undefined, 3.0),
	I: el('I', 'iodine', 53, [2, 8, 18, 18, 7], 139, undefined, 2.7),
};
export const P3: El[] = ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'].map(s => DATA[s]);
export const P3EN: El[] = P3.slice(0, 7);
export const G1: El[] = ['Li', 'Na', 'K', 'Rb', 'Cs'].map(s => DATA[s]);
export const G17: El[] = ['F', 'Cl', 'Br', 'I'].map(s => DATA[s]);
export const ie = (e: El) => { if (e.ie === undefined) throw new Error('no IE for ' + e.sym); return e.ie; };
export const en = (e: El) => { if (e.en === undefined) throw new Error('no EN for ' + e.sym); return e.en; };
export const enS = (e: El) => en(e).toFixed(1);
/** Core charge (protons minus inner-shell electrons). */
export const core = (e: El) => e.z - e.shells.slice(0, -1).reduce((a, b) => a + b, 0);
export const IE_MAX = 1600;
/** Pauling scale span shown on the scale bar (about 0.7 to 4.0). */
export const PAULING = {lo: 0.7, hi: en(DATA.F)};
export const SRC_IE = 'first ionisation energies: NIST data via PubChem';
export const SRC_EN = 'Pauling electronegativities: PubChem';
/** Distance of the shared pair from the left nucleus, as a fraction of the nucleus-to-nucleus length (the stronger puller draws it closer). */
export const pairFrac = (enL: number, enR: number) => enR / (enL + enR);
/** Index the stepper is on at frame f: steps [frame, index] in order. */
export const stepAt = (f: number, steps: [number, number][]) => { let k = steps[0][1]; for (const [at, i] of steps) if (f >= at) k = i; return k; };
/** 1251 / 496, rounded to one decimal (the "about two and a half times" tag). */
export const RATIO_CL_NA = Math.round((ie(DATA.Cl) / ie(DATA.Na)) * 10) / 10;
