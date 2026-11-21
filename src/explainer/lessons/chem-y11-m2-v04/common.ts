// Y11 Chem M2 V04 (measuring molar mass in a practical) shared pieces: measured lesson lookups, response holds, plates
// and the one data table every on-screen reading, volume, amount, molar mass, candidate and notebook line is drawn from.
// Sources: molar volume 24.79 L mol^-1 at 25 °C and 100 kPa (HSC data sheet); 30.6 L mol^-1 at 100.0 °C and 101.3 kPa
// (design author note e, from the gas laws); element method after the RSC Nuffield Practical Collection,
// "Determining the relative atomic mass of magnesium"; compound method after the site lesson's volatile-liquid card.
// Every run is illustrative data (design author notes a to f) and is tagged so on screen.
// Plate alpha boxes measured 21 Nov 2026 (PIL, alpha > 20) from the real files in public/assets/chemistry.
// - Upturned burette, start and end (887 x 1774, same registration): box (256, 256, 622, 1460) and (256, 253, 623,
//   1462). Burette bore about x 300..330, tap end near y 300, open end in the beaker about y 1330; beaker water
//   surface about y 1250. (Measured by eye on the plate; the coded gas space is drawn inside the bore.)
// - Foil-capped flask (1173 x 1341): box (257, 176, 915, 1177); pinhole at about (586, 196).
// - Flask in the water bath on a hotplate, liquid and vapour (1254 square, same registration): box (255, 150, 999,
//   1128); flask inside about x 470..720, y 270..700.
// - Zinc in acid (2000 square): box (333, 201, 1666, 1800).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m2-v04/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {BAL, CYL, CYL_N, RIBBON, fix, ph, ptOn, pw, sci} from '../chem-y11-m2-v02/common';
import {AR, FLASK, PLATES as V03_PLATES, V02_SRC} from '../chem-y11-m2-v03/common';

export type {PDef};
export {BAL, CYL, CYL_N, RIBBON, FLASK, AR, fix, ph, ptOn, pw, sci};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M2 V04 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
export const BUR0 = mkp(C + 'y11c-burette-upturned-start-v1.png', [887, 1774], [256, 253, 623, 1462]);
export const BUR1 = mkp(C + 'y11c-burette-upturned-end-v1.png', [887, 1774], [256, 253, 623, 1462]);
export const FOIL = mkp(C + 'y11c-flask-foil-cap-v1.png', [1173, 1341], [257, 176, 915, 1177]);
export const FOIL_PIN: [number, number] = [586, 196];
export const BATH_L = mkp(C + 'y11c-flask-water-bath-liquid-v1.png', [1254, 1254], [255, 149, 999, 1128]);
export const BATH_V = mkp(C + 'y11c-flask-water-bath-vapour-v1.png', [1254, 1254], [255, 149, 999, 1128]);
export const ZN = mkp(C + 'm6-zinc-acid-v1.png', [2000, 2000], [333, 201, 1666, 1800]);
export const PLATES: PDef[] = [BUR0, BUR1, FOIL, BATH_L, BATH_V, ZN, BAL, RIBBON, CYL, FLASK];
export const PREV_SRC = [...V03_PLATES.map(p => p.src), ...V02_SRC];

// ---------- the data table ----------
export const VM = 24.79; // L mol^-1 at 25 °C, 100 kPa (HSC data sheet)
export const VM_BATH = 30.6; // L mol^-1 at 100.0 °C, 101.3 kPa
export const COND = {room: '25 °C, 100 kPa', bath: '100.0 °C, 101.3 kPa'};
export const EL = {
	m: 0.042, // g of magnesium
	start: 48.5, end: 6.3, // mL burette readings
	escapeV: 38.0, // mL collected when some gas escapes
	accepted: AR.Mg, // 24.31
	lo: 0.035, hi: 0.045, // g: what a 0.01 g display reading of 0.04 g could be
	sim4: 4.2, // mL: the early readout point
};
export const elV = EL.start - EL.end; // 42.2 mL
export const nOf = (mL: number, vm = VM) => mL / 1000 / vm;
export const EL_N = nOf(elV); // 1.7023e-3
export const EL_MM = EL.m / EL_N; // 24.67
export const ESC_N = nOf(EL.escapeV); // 1.5329e-3
export const ESC_MM = EL.m / ESC_N; // 27.40
export const WIN = {lo: EL.lo / EL_N, hi: EL.hi / EL_N}; // 20.56 .. 26.43
export const CMP = {m: 0.272, V: 140}; // g of condensed vapour; mL flask volume
export const CMP_N = nOf(CMP.V, VM_BATH); // 4.5752e-3
export const CMP_MM = CMP.m / CMP_N; // 59.45
const mmOf = (c: number, h: number, o: number) => c * AR.C + h * AR.H + o * AR.O;
export const CAND = [
	{name: 'ethanol', f: 'C_2H_5OH', mm: mmOf(2, 6, 1)}, // 46.07
	{name: 'propanone', f: 'C_3H_6O', mm: mmOf(3, 6, 0) + AR.O, also: 'also called acetone'}, // 58.08
	{name: 'hexane', f: 'C_6H_14', mm: mmOf(6, 14, 0)}, // 86.17
];
export const A1 = {m: 0.15, V: 56.9}; // g of zinc; mL of hydrogen
export const A1_N = nOf(A1.V); // 2.2953e-3
export const A1_MM = A1.m / A1_N; // 65.35
export const A1_WRONG = A1.m / (A1.V / VM); // 0.0654
/** The class's raw notebook (the final frame; ws-v04 opens on it), word for word. */
export const NOTEBOOK = {
	head: 'Mg + HCl, gas in upturned burette (25 °C, 100 kPa)',
	runs: [
		'Run 1: Mg 12 mg. Burette 48.50 → 36.40',
		'Run 2: 0.020 g. 49.2 → 28.6 mL',
		'Run 3: Mg 0.028 g, start 47.80, end 25.40. Ribbon floated, some bubbles escaped!',
		'Run 4: 0.035, 48.90 → 13.60',
		'Run 5: 0.042 g. 48.50 → 6.30 mL',
	],
};
export const ILLUS = 'illustrative data';
export const GMOL = 'g mol^{−1}';
export const LMOL = 'L mol^{−1}';
void pw; void ph; void ptOn; void sci; void fix; void CYL_N;
