// Y11 Chem M1 V02 (melting and boiling as evidence) shared pieces: measured lesson lookups, response holds, plates
// and the heating models. Alpha boxes measured 17 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Ice cube (2095 x 2105): box (510, 501, 1639, 1611).
// - Paraffin candle (2000 square): box (606, 201, 1395, 1799).
// - Jar of white crystals (1600 x 1718): box (487, 332, 1111, 1343).
// - Magnesium ribbon on a mat (2000 square): box (209, 636, 1801, 1591).
// - Burned magnesium: white powder on a tile, tongs resting (1920 x 1600): box (370, 436, 1648, 1225).
// - Beaker of sand and salty water (1182 x 1330): box (158, 148, 980, 1209); sand layer about y 1090..1190.
// - Dry ice pellets in a dish (1619 x 972): box (121, 113, 1468, 921).
// The beaker on a hotplate, thermometer, iron lump and watch glass are V01's (see ../chem-y11-m1-v01/common.ts).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v02/measured/lesson.json';
import type {CueScene} from '../../cues';
import {BEAKER, LUMP, SALT, THERMO, mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export {BEAKER, LUMP, SALT, THERMO};
export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V02 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const ICE = mkp(C + 'c9-ice-cube-v1.png', [2095, 2105], [510, 501, 1639, 1611]);
export const CANDLE = mkp(C + 'm7-paraffin-candle-v1.png', [2000, 2000], [606, 201, 1395, 1799]);
export const SJAR = mkp(C + 'c1-salt-jar-crystals-v1.png', [1600, 1718], [487, 332, 1111, 1343]);
export const MGR = mkp(C + 'p01-mg-ribbon-v1.png', [2000, 2000], [209, 636, 1801, 1591]);
export const MGO = mkp(C + 'c1-burned-magnesium-v1.png', [1920, 1600], [370, 436, 1648, 1225]);
export const SANDB = mkp(C + 'y11c-sand-saltwater-beaker-v1.png', [1182, 1330], [158, 148, 980, 1209]);
export const DRY = mkp(C + 'y11c-dry-ice-v1.png', [1619, 972], [121, 113, 1468, 921]);

export const PLATES: PDef[] = [BEAKER, THERMO, LUMP, SALT, ICE, CANDLE, SJAR, MGR, MGO, SANDB, DRY];

// ---------- the heating model (one clock drives readouts, bubbles, level and curves) ----------
/** Water heated from 25 degrees at a sped-up rate; boils from tb. frac = liquid left (1 to 0). Salt water: the boiling
 *  temperature is 100 + 1.024 / frac (example readings: about 101 at first boil, about 102 at half volume). */
export type HeatRun = {t0: number; rate: number; boilRate: number; salt: boolean};
export const heatAt = (h: HeatRun, f: number) => {
	const t = Math.max(0, f - h.t0);
	const tb0 = h.salt ? 101.024 : 100;
	const tToBoil = (tb0 - 25) / h.rate;
	if (t <= tToBoil) return {T: 25 + h.rate * t, frac: 1, boiling: false};
	const frac = Math.max(0.02, 1 - (t - tToBoil) * h.boilRate);
	return {T: h.salt ? 100 + 1.024 / frac : 100, frac, boiling: true};
};
