// Y11 Chem M1 V13 (atomic radius trends) shared pieces: measured lesson lookups, response holds, plates and the real
// radius data the radius stepper reads. Every ring radius and bar in this lesson is drawn from these values
// (design author note a): covalent radii from Cordero et al. (2008); ionic radii from Shannon (1976), six-coordinate.
// Plate alpha boxes are the measured boxes already used by V12 and V01 (same files in public/assets).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v13/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V13 scene not found ' + id);
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
export const CLJAR = mkp(C + 'y11c-gas-jar-chlorine-v1.png', [935, 1683], [204, 276, 714, 1393]);
export const SALT = mkp(C + 'y11c-watch-glass-salt-v1.png', [1671, 941], [145, 227, 1515, 728]);
export const MG = mkp(C + 'y11c-sample-magnesium-ribbon-v1.png', [1254, 1254], [127, 385, 1122, 935]);
export const SULFUR = mkp(C + 'y11c-sample-sulfur-v1.png', [1466, 1073], [250, 326, 1216, 788]);
export const JAR = mkp(C + 'y11c-gas-jar-v1.png', [935, 1682], [138, 128, 779, 1524]);
export const PLATES: PDef[] = [NA, CLJAR, SALT, MG, SULFUR, JAR];
/** Width of a plate drawn at height h. */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];

// ---------- the data (pm) ----------
export type El = {sym: string; z: number; shells: number[]; r: number; inner: number};
const el = (sym: string, z: number, shells: number[], r: number): El => ({sym, z, shells, r, inner: shells.slice(0, -1).reduce((a, b) => a + b, 0)});
/** Period 3, sodium to chlorine (argon left out: noble-gas radii are measured differently). */
export const P3: El[] = [
	el('Na', 11, [2, 8, 1], 166), el('Mg', 12, [2, 8, 2], 141), el('Al', 13, [2, 8, 3], 121), el('Si', 14, [2, 8, 4], 111),
	el('P', 15, [2, 8, 5], 107), el('S', 16, [2, 8, 6], 105), el('Cl', 17, [2, 8, 7], 102),
];
/** Group 1 (models for Li, Na, K; Rb and Cs are data only). */
export const G1: El[] = [el('Li', 3, [2, 1], 128), el('Na', 11, [2, 8, 1], 166), el('K', 19, [2, 8, 8, 1], 203)];
export const G1_DATA: {sym: string; r: number}[] = [{sym: 'Li', r: 128}, {sym: 'Na', r: 166}, {sym: 'K', r: 203}, {sym: 'Rb', r: 220}, {sym: 'Cs', r: 244}];
/** The ten-electron ions (Shannon; Al3+ 53.5 shown as 54). */
export type Ion = {sym: string; name: string; z: number; r: number};
export const ISO: Ion[] = [
	{sym: 'O^{2−}', name: 'oxide', z: 8, r: 140}, {sym: 'F^{−}', name: 'fluoride', z: 9, r: 133}, {sym: 'Na^{+}', name: 'sodium', z: 11, r: 102},
	{sym: 'Mg^{2+}', name: 'magnesium', z: 12, r: 72}, {sym: 'Al^{3+}', name: 'aluminium', z: 13, r: 54},
];
export const ION_R = {Na: 166, NaP: 102, Cl: 102, ClM: 181, O: 66, OM: 140, Mg: 141, S: 105};
/** Core charge (protons minus inner-shell electrons). */
export const core = (e: El) => e.z - e.inner;
/** Element (index) the stepper is on at frame f: steps [frame, index] in order. */
export const stepAt = (f: number, steps: [number, number][]) => { let k = steps[0][1]; for (const [at, i] of steps) if (f >= at) k = i; return k; };
