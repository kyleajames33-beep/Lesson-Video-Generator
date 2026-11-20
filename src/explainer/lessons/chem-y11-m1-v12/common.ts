// Y11 Chem M1 V12 (groups, periods and blocks) shared pieces: measured lesson lookups, response holds, plates, the
// full periodic table (periods 1 to 7 plus the two f-block rows) and the table reader (period, group, block and
// valence electrons read from each element's place). Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the
// real files in public/assets.
// - Sodium under oil (1254 square): box (244, 131, 1007, 1089).
// - Magnesium ribbon (1254 square): box (127, 385, 1122, 935).
// - Aluminium (1254 square): box (132, 392, 1120, 947).
// - Silicon (1254 square): box (139, 244, 1115, 995).
// - Red phosphorus (1254 square): box (379, 163, 870, 1089).
// - Sulfur on a watch glass (1466 x 1073): box (250, 326, 1216, 788).
// - Chlorine gas jar (935 x 1683): box (204, 276, 714, 1393).
// - Clear gas jar, argon (935 x 1682): box (138, 128, 779, 1524).
// - Troughs, Li, Na, K (1500 x 1049): box (86, 208, 1415, 868).
// - Halogen ampoules (1642 x 958): box (344, 134, 1299, 810); ampoule centres x 430, 691, 950, 1210 (sidecar).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v12/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {CELLS as V11_CELLS, symOf} from '../chem-y11-m1-v11/common';

export type {PDef};
export {symOf};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V12 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const NA = mkp(C + 'y11c-sample-sodium-oil-v1.png', [1254, 1254], [244, 131, 1007, 1089]);
export const MG = mkp(C + 'y11c-sample-magnesium-ribbon-v1.png', [1254, 1254], [127, 385, 1122, 935]);
export const AL = mkp(C + 'y11c-sample-aluminium-v1.png', [1254, 1254], [132, 392, 1120, 947]);
export const SI = mkp(C + 'y11c-sample-silicon-v1.png', [1254, 1254], [139, 244, 1115, 995]);
export const REDP = mkp(C + 'y11c-sample-red-phosphorus-v1.png', [1254, 1254], [379, 163, 870, 1089]);
export const SULFUR = mkp(C + 'y11c-sample-sulfur-v1.png', [1466, 1073], [250, 326, 1216, 788]);
export const CLJAR = mkp(C + 'y11c-gas-jar-chlorine-v1.png', [935, 1683], [204, 276, 714, 1393]);
export const JAR = mkp(C + 'y11c-gas-jar-v1.png', [935, 1682], [138, 128, 779, 1524]);
export const TR_LI = mkp(C + 'y11c-trough-li-v1.png', [1500, 1049], [86, 208, 1415, 868]);
export const TR_NA = mkp(C + 'y11c-trough-na-v1.png', [1500, 1049], [86, 209, 1414, 867]);
export const TR_K = mkp(C + 'y11c-trough-k-v1.png', [1500, 1049], [85, 209, 1416, 867]);
export const VIALS = mkp(C + 'y11c-halogen-vials-v1.png', [1642, 958], [344, 134, 1299, 810]);
/** Ampoule centres in the vials plate's native pixels (sidecar `ampouleCentres`). */
export const VIAL_X = [430, 691, 950, 1210];
export const PLATES: PDef[] = [NA, MG, AL, SI, REDP, SULFUR, CLJAR, JAR, TR_LI, TR_NA, TR_K, VIALS];
/** Width of a plate drawn at height h (uniform scale only). */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w (uniform scale only). */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];

/** The period 3 samples in order, with the shared-canvas scale (the five 1254 px plates were painted at one scale). */
export const P3: {z: number; p: PDef; name: string; k: number}[] = [
	{z: 11, p: NA, name: 'sodium', k: 1},
	{z: 12, p: MG, name: 'magnesium', k: 1},
	{z: 13, p: AL, name: 'aluminium', k: 1},
	{z: 14, p: SI, name: 'silicon', k: 1},
	{z: 15, p: REDP, name: 'phosphorus', k: 1},
	{z: 16, p: SULFUR, name: 'sulfur', k: 1.02},
	{z: 17, p: CLJAR, name: 'chlorine', k: 0},
	{z: 18, p: JAR, name: 'argon', k: 0},
];
/** Height to draw sample i so the 1254 px plates share one scale s (screen px per native px); jars take height jarH. */
export const p3h = (i: number, s: number, jarH: number) => (P3[i].k === 0 ? jarH : P3[i].p.box[3] * s * P3[i].k);

// ---------- the full table: [z, row, column]; rows 8 and 9 are the f-block rows (columns 4 to 17) ----------
export const CELLS: [number, number, number][] = (() => {
	const out = [...V11_CELLS];
	for (let k = 0; k < 14; k++) out.push([58 + k, 8, 4 + k], [90 + k, 9, 4 + k]);
	return out;
})();
export type Block = 's' | 'p' | 'd' | 'f';
export const cellRC = (z: number) => { const c = CELLS.find(q => q[0] === z); if (!c) throw new Error('V12 no cell ' + z); return c; };
export const blockOf = (z: number): Block => {
	const [, r, c] = cellRC(z);
	if (r >= 8) return 'f';
	if (z === 2 || c <= 2) return 's';
	return c <= 12 ? 'd' : 'p';
};
// ---------- element types (author note: metalloids shown are B, Si, Ge, As, Sb, Te) ----------
export const METALLOIDS = [5, 14, 32, 33, 51, 52];
export const NONMETALS = [1, 2, 6, 7, 8, 9, 10, 15, 16, 17, 18, 34, 35, 36, 53, 54, 86];
/** Left out of the type colouring (no settled bulk classification on a school table). */
export const UNTYPED = [85, 113, 114, 115, 116, 117, 118];
export type EType = 'metal' | 'metalloid' | 'nonmetal' | 'none';
export const typeOfZ = (z: number): EType => (METALLOIDS.includes(z) ? 'metalloid' : NONMETALS.includes(z) ? 'nonmetal' : UNTYPED.includes(z) ? 'none' : 'metal');
// ---------- states at 25 °C (author note e) ----------
export const GASES = [1, 7, 8, 9, 17, 2, 10, 18, 36, 54, 86];
export const LIQUIDS = [35, 80];

// ---------- the table reader (period, group, block, valence electrons) ----------
export type Reading = {period: number; group: number; block: Block; valence: number};
export const readerOf = (z: number): Reading => {
	const [, r, c] = cellRC(z);
	const block = blockOf(z);
	const group = r >= 8 ? 3 : c;
	const valence = z === 2 ? 2 : c <= 2 ? c : c >= 13 ? c - 10 : NaN;
	return {period: r >= 8 ? r - 2 : r, group, block, valence};
};
/** Shell occupancy (Stage 5) for the final-frame atoms. */
export const SHELLS: Record<string, number[]> = {Na: [2, 8, 1], Cl: [2, 8, 7], K: [2, 8, 8, 1]};
