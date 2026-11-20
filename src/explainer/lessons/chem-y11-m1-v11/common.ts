// Y11 Chem M1 V11 (electron configuration and spdf notation) shared pieces: measured lesson lookups, response holds,
// plates and the filling rule. Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Chlorine gas jar (935 x 1683): box (204, 276, 714, 1393).
// - Red phosphorus in a stoppered bottle (1254 square): box (379, 163, 870, 1089).
// - Solid lump, tagged "iron" (1600 square): box (160, 213, 1440, 1385).
// - Sulfur on a watch glass (1466 x 1073): box (250, 326, 1216, 788).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v11/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V11 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const CLJAR = mkp(C + 'y11c-gas-jar-chlorine-v1.png', [935, 1683], [204, 276, 714, 1393]);
export const REDP = mkp(C + 'y11c-sample-red-phosphorus-v1.png', [1254, 1254], [379, 163, 870, 1089]);
export const IRON = mkp(C + 'c5-solid-lump-v1.png', [1600, 1600], [160, 213, 1440, 1385]);
export const SULFUR = mkp(C + 'y11c-sample-sulfur-v1.png', [1466, 1073], [250, 326, 1216, 788]);
export const PLATES: PDef[] = [CLJAR, REDP, IRON, SULFUR];
/** Width of a plate drawn at height h (uniform scale only). */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w (uniform scale only). */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];

// ---------- the filling rule (author notes a, b): lowest energy first, one per box before pairing ----------
export type Sub = '1s' | '2s' | '2p' | '3s' | '3p' | '4s' | '3d' | '4p';
/** Filling order (4s below 3d for building up these atoms). */
export const ORDER: Sub[] = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p'];
/** Level order, used when the configuration is written down. */
export const WRITE_ORDER: Sub[] = ['1s', '2s', '2p', '3s', '3p', '3d', '4s', '4p'];
export const ORBS: Record<Sub, number> = {'1s': 1, '2s': 1, '2p': 3, '3s': 1, '3p': 3, '4s': 1, '3d': 5, '4p': 3};
export const typeOf = (s: Sub) => s[1] as 's' | 'p' | 'd';
/** Electrons in each subshell after n electrons are placed. */
export const occ = (n: number): Record<Sub, number> => {
	const out = {} as Record<Sub, number>;
	let left = Math.max(0, Math.floor(n));
	for (const s of ORDER) { const k = Math.min(left, ORBS[s] * 2); out[s] = k; left -= k; }
	return out;
};
/** Electron k (1-based) goes to subshell s, box i, spin up (true) or down. One per box before pairing. */
export const slotOf = (k: number): {s: Sub; box: number; up: boolean} => {
	let left = k;
	for (const s of ORDER) {
		const m = ORBS[s];
		if (left <= 2 * m) return left <= m ? {s, box: left - 1, up: true} : {s, box: left - m - 1, up: false};
		left -= 2 * m;
	}
	throw new Error('V11: electron beyond 4p ' + k);
};
/** Unpaired electrons in one subshell holding k electrons. */
export const unpairedIn = (s: Sub, k: number) => (k <= ORBS[s] ? k : 2 * ORBS[s] - k);
export const unpaired = (n: number) => { const o = occ(n); return ORDER.reduce((a, s) => a + unpairedIn(s, o[s]), 0); };
/** Configuration so far (filling order), with superscript markup. */
export const configSoFar = (n: number, order: Sub[] = ORDER) => { const o = occ(n); return order.filter(s => o[s] > 0).map(s => `${s}^{${o[s]}}`).join(' '); };

// ---------- the periodic table (periods 1 to 7, main and d blocks; the f block is left out, as on a short table) ----------
const SYMS = 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'.split(' ');
export const symOf = (z: number) => SYMS[z - 1];
/** Cells of the short table: [z, period 1..7, column 1..18]. La and Ac stand in column 3 for their f-block rows. */
export const CELLS: [number, number, number][] = (() => {
	const out: [number, number, number][] = [[1, 1, 1], [2, 1, 18]];
	for (const [p, z0] of [[2, 3], [3, 11]]) { out.push([z0, p, 1], [z0 + 1, p, 2]); for (let k = 0; k < 6; k++) out.push([z0 + 2 + k, p, 13 + k]); }
	for (const [p, z0] of [[4, 19], [5, 37]]) for (let c = 1; c <= 18; c++) out.push([z0 + c - 1, p, c]);
	for (const [p, z0, zd] of [[6, 55, 72], [7, 87, 104]]) {
		out.push([z0, p, 1], [z0 + 1, p, 2], [z0 + 2, p, 3]);
		for (let c = 4; c <= 18; c++) out.push([zd + c - 4, p, c]);
	}
	return out;
})();
export const cellOf = (z: number) => { const c = CELLS.find(x => x[0] === z); if (!c) throw new Error('V11 no cell ' + z); return c; };
