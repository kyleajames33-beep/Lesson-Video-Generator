// Y11 Chem M1 V21 (electronegativity and the bonding spectrum) shared pieces: measured lesson lookups, response
// holds, plates and the one data table every on-screen electronegativity value, difference, bond type, spectrum
// marker, Lewis count and evidence temperature is drawn from.
// Sources (design author notes a to c):
// - Pauling electronegativities (PubChem, one decimal, as the site and v14): F 4.0, O 3.4, Cl 3.2, N 3.0, Br 3.0,
//   C 2.6, H 2.2, Mg 1.3, Na 0.9, K 0.8;
// - guide values about 0.4 and about 1.7 (the site's values; textbooks vary);
// - HF boils at about 20 °C (19.5 °C, CRC); NaCl melts at 801 °C.
// Plate alpha boxes measured from the alpha channel (bounding box of alpha > 8).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v21/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
const B = 'assets/biology/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V21 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
export const SALT = mkp(C + 'c1-salt-jar-crystals-v1.png', [1600, 1718], [486, 332, 1112, 1344]);
export const DRYICE = mkp(C + 'y11c-dry-ice-v1.png', [1619, 972], [121, 113, 1468, 921]);
export const CLJAR = mkp(C + 'y11c-gas-jar-chlorine-v1.png', [935, 1683], [203, 276, 714, 1394]);
export const GLASS = mkp(B + 'm8-water-glass-v1.png', [2000, 2000], [560, 220, 1441, 1780]);
export const NH3 = mkp(C + 'm5x-ammonia-bottle-v1.png', [2000, 2000], [590, 160, 1410, 1840]);
export const PLATES: PDef[] = [SALT, DRYICE, CLJAR, GLASS, NH3];
/** Width of a plate drawn at height h. */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];

// ---------- the data table ----------
export type El = {sym: string; name: string; en: number; outer: number; z: number};
const el = (sym: string, name: string, en: number, outer: number, z: number): El => ({sym, name, en, outer, z});
/** Pauling electronegativity (one decimal) and outer (valence) electrons. */
export const EL: Record<string, El> = {
	F: el('F', 'fluorine', 4.0, 7, 9),
	O: el('O', 'oxygen', 3.4, 6, 8),
	Cl: el('Cl', 'chlorine', 3.2, 7, 17),
	N: el('N', 'nitrogen', 3.0, 5, 7),
	Br: el('Br', 'bromine', 3.0, 7, 35),
	C: el('C', 'carbon', 2.6, 4, 6),
	H: el('H', 'hydrogen', 2.2, 1, 1),
	Mg: el('Mg', 'magnesium', 1.3, 2, 12),
	Na: el('Na', 'sodium', 0.9, 1, 11),
	K: el('K', 'potassium', 0.8, 1, 19),
};
/** Difference, larger minus smaller, at one decimal. */
export const dX = (a: El, b: El) => Math.round(Math.abs(a.en - b.en) * 10) / 10;
export const f1 = (v: number) => (Math.abs(v) < 0.05 ? '0' : v.toFixed(1));
/** The working line: "3.2 − 2.2 = 1.0". */
export const working = (a: El, b: El) => {
	const [hi, lo] = a.en >= b.en ? [a, b] : [b, a];
	return `${hi.en.toFixed(1)} − ${lo.en.toFixed(1)} = ${f1(dX(a, b))}`;
};
export const GUIDE = {lo: 0.4, hi: 1.7};
/** Bond type by the guide. */
export const typeOf = (d: number) => (d < GUIDE.lo - 0.05 ? 'non-polar covalent' : d < GUIDE.lo + 0.05 ? 'borderline' : d <= GUIDE.hi ? 'polar covalent' : 'ionic (by the guide)');
/** The shared pair leaves the rope (transfer) from this difference (design: about 2 or more). */
export const TRANSFER = 2.0;
/** Spectrum markers: label, the two elements (left weaker, right stronger). */
export type Mark = {label: string; l: string; r: string};
export const MARKS: Record<string, Mark> = {
	Cl2: {label: 'Cl_2', l: 'Cl', r: 'Cl'},
	CH: {label: 'C–H', l: 'H', r: 'C'},
	HCl: {label: 'H–Cl', l: 'H', r: 'Cl'},
	OH: {label: 'O–H', l: 'H', r: 'O'},
	HF: {label: 'H–F', l: 'H', r: 'F'},
	MgO: {label: 'MgO', l: 'Mg', r: 'O'},
	NaCl: {label: 'NaCl', l: 'Na', r: 'Cl'},
	KF: {label: 'KF', l: 'K', r: 'F'},
	KCl: {label: 'K–Cl', l: 'K', r: 'Cl'},
	NH: {label: 'N–H', l: 'H', r: 'N'},
	BrBr: {label: 'Br–Br', l: 'Br', r: 'Br'},
	NaO: {label: 'Na–O', l: 'Na', r: 'O'},
};
export const dM = (m: Mark) => dX(EL[m.l], EL[m.r]);
export const SPAN = {lo: 0, hi: 3.3};
export const EVIDENCE = {hfBoil: 20, naclMelt: 801};
export const SRC_EN = 'Pauling electronegativities: PubChem (one decimal)';
