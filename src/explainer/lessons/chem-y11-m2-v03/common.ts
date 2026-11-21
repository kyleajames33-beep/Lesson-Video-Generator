// Y11 Chem M2 V03 (molar mass and n = m/MM) shared pieces: measured lesson lookups, response holds, plates and the
// one data table every on-screen number is drawn from. Relative atomic masses are the HSC data sheet values (design
// decision and author note a); every molar mass, worked answer, slip, readout and note is computed here from them.
// Plate alpha boxes measured 21 Nov 2026 (PIL, alpha > 20) from the real files in public/assets/chemistry.
// - Gas jar v2 (935 x 1683): box (205, 278, 717, 1393).
// - Conical flask (2048 square): box (466, 164, 1583, 1884); inside base about y 1790, walls at the base x 520..1530.
// - Watch glass of white solid (1671 x 941): box (145, 227, 1515, 728).
// - Copper wire, bent (1500 x 1049): box (223, 415, 1277, 662).
// - Magnesium ribbon coil on a watch glass (1254 square): box (127, 385, 1122, 935).
// - Beaker of water (1254 square): box (237, 226, 967, 1027).
// The balance, ribbon tile, dry ice and halite boxes are V02's (common.ts there).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m2-v03/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';
import {BAL, DRYICE, HALITE, HALITE_FACE, NA, RIBBON, ph, ptOn, pw, sci, fix} from '../chem-y11-m2-v02/common';
import {PLATES as V02_PLATES} from '../chem-y11-m2-v02/common';

export type {PDef};
export {BAL, DRYICE, HALITE, HALITE_FACE, NA, RIBBON, ph, ptOn, pw, sci, fix};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M2 V03 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
export const JAR2 = mkp(C + 'y11c-gas-jar-v2.png', [935, 1683], [205, 278, 717, 1393]);
export const FLASK = mkp(C + 'm6-conical-flask-v1.png', [2048, 2048], [466, 164, 1583, 1884]);
export const WG_SALT = mkp(C + 'y11c-watch-glass-salt-v1.png', [1671, 941], [145, 227, 1515, 728]);
export const CU_WIRE = mkp(C + 'y11c-copper-wire-bent-v1.png', [1500, 1049], [223, 415, 1277, 662]);
export const MG_COIL = mkp(C + 'y11c-sample-magnesium-ribbon-v1.png', [1254, 1254], [127, 385, 1122, 935]);
export const BEAKER_W = mkp(C + 'y11c-beaker-water-36ml-v1.png', [1254, 1254], [237, 226, 967, 1027]);
export const PLATES: PDef[] = [JAR2, FLASK, WG_SALT, CU_WIRE, MG_COIL, BEAKER_W, BAL, RIBBON, DRYICE, HALITE];
export const V02_SRC = V02_PLATES.map(p => p.src);

// ---------- the data table ----------
/** Relative atomic masses (HSC data sheet). */
export const AR = {H: 1.008, C: 12.01, O: 16.0, Na: 22.99, Mg: 24.31, Cl: 35.45, Ca: 40.08, Cu: 63.55};
export const MM = {
	H2O: 2 * AR.H + AR.O, // 18.016
	O2: 2 * AR.O, // 32.00
	CaOH2: AR.Ca + 2 * (AR.O + AR.H), // 74.096
	CaOH2wrong: AR.Ca + AR.O + AR.H, // 57.088 (bracket ignored)
	NaCl: AR.Na + AR.Cl, // 58.44
	CO2: AR.C + 2 * AR.O, // 44.01
};
export const D = {
	ribbon: 0.24, // g (the opening)
	water: 54, // g (WE1, site)
	nacl: 0.5, // mol (WE2, site)
	pred: 10, // g of Mg and of Cu
	a1: 11.0, // g of CO2
	a2: 0.15, // mol of Ca(OH)2
};
export const RES = {
	ratio: AR.Mg / AR.C, // 2.024
	cAtom: AR.C / NA, // 1.994e-23 g
	mgAtom: AR.Mg / NA, // 4.037e-23 g
	water: D.water / MM.H2O, // 2.997 mol
	waterN: Number(fix(D.water / MM.H2O, 1)) * NA, // 3.0 x N_A = 1.81e24
	mgN: D.pred / AR.Mg, // 0.411
	cuN: D.pred / AR.Cu, // 0.157
	cuOverMg: AR.Cu / AR.Mg, // 2.61
	nacl: D.nacl * MM.NaCl, // 29.22 g
	naclSlip: D.nacl / MM.NaCl, // 0.00856
	naclN: D.nacl * NA, // 3.011e23
	ribbon: D.ribbon / AR.Mg, // 0.0098725 mol
	ribbonN: (D.ribbon / AR.Mg) * NA, // 5.945e21
	a1: D.a1 / MM.CO2, // 0.24994
	a1wrong: D.a1 * MM.CO2, // 484.1
	a2: D.a2 * MM.CaOH2, // 11.114
	a2wrong: D.a2 * MM.CaOH2wrong, // 8.563
};
/** Molar mass to 2 decimals (data-sheet precision) with the unit markup. */
export const mm = (v: number) => `${fix(v, 2)} g mol^{−1}`;
export const GMOL = 'g mol^{−1}';
export const SRC_AR = 'relative atomic masses: HSC data sheet';
void pw; void ph; void ptOn; void sci;
