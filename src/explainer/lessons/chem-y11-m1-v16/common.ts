// Y11 Chem M1 V16 (flame tests) shared pieces: measured lesson lookups, response holds, plates and the one data
// table every on-screen flame colour, table row, swatch, line position and photon run is drawn from.
// Sources (design author notes a and c):
// - flame colours: the site lesson's colour table (standard references agree);
// - line positions: NIST Atomic Spectra Database strong lines (Na I 589.0, 589.6, 568.8, 615.4, 498.3 nm;
//   Li I 670.8, 610.4 nm; Sr I 460.7 nm); strontium's orange and red bands (SrOH, SrCl) at about 606 nm and
//   640 to 690 nm from standard flame-emission references;
// - photon weights are illustrative only (a model; every run is labelled "model: brightness not to scale").
// Plate alpha boxes measured from the alpha channel (bounding box of alpha > 8). The flame set shares one burner, so
// every flame plate uses the same box (the lithium plate is the same canvas at 1254 px, box scaled by 0.627).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v16/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V16 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

// ---------- plates (uniform scale only) ----------
const FB: [number, number, number, number] = [663, 178, 1343, 1833];
const fl = (n: string) => mkp(C + n, [2000, 2000], FB);
const LI_K = 1254 / 2000;
export type FKey = 'blue' | 'li' | 'na' | 'k' | 'ca' | 'sr' | 'ba' | 'cu';
export const FL: Record<FKey, PDef> = {
	blue: fl('m8-flame-blue-v2.png'),
	li: mkp(C + 'y11c-flame-li-crimson-v1.png', [1254, 1254], [FB[0] * LI_K, FB[1] * LI_K, FB[2] * LI_K, FB[3] * LI_K]),
	na: fl('m8-flame-na-yellow-v2.png'),
	k: fl('m8-flame-k-lilac-v2.png'),
	ca: fl('m8-flame-ca-brick-red-v2.png'),
	sr: fl('m8-flame-sr-crimson-v2.png'),
	ba: fl('m8-flame-ba-pale-green-v2.png'),
	cu: fl('m8-flame-cu-blue-green-v2.png'),
};
/** Native points on the 2000 px flame canvas: the flame's centre line, its tip, middle and the burner mouth. */
export const FLAME_N = {cx: 969, tip: 181, mid: 560, edge: 640, mouth: 766, box: FB};
export const BOTTLE = mkp(C + 'm5x-bottle-scn-v1.png', [2000, 2000], [608, 160, 1391, 1840]);
/** The bottle's cream label area (native). */
export const LABEL_N = {cx: 1000, cy: 1216, l: 631, r: 1369, t: 946, b: 1486};
export const GLASSES = mkp(C + 'm5x-safety-glasses-v1.png', [2000, 2000], [214, 637, 1789, 1408]);
export const SCOPE = mkp(C + 'y11c-hand-spectroscope-v1.png', [1774, 887], [214, 219, 1593, 663]);
export const TR_K = mkp(C + 'y11c-trough-k-v1.png', [1500, 1049], [85, 209, 1416, 867]);
/** V15's final frame (the opening) also shows the brief 60 lilac flame plate. */
const FL_K_V1 = mkp(C + 'm8-flame-k-lilac-v1.png', [2000, 2000], [662, 173, 1340, 1826]);
export const PLATES: PDef[] = [...Object.values(FL), BOTTLE, GLASSES, SCOPE, TR_K, FL_K_V1];
/** Width of a plate drawn at height h. */
export const pw = (p: PDef, h: number) => (h / p.box[3]) * p.box[2];
/** Height of a plate drawn at width w. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];

// ---------- the data table ----------
/** Emission line or band: nm (centre), weight (illustrative), band width in nm (0 for a line). */
export type Line = {nm: number; weight: number; band?: number};
export type Metal = {
	sym: string; ion: string; name: string; salt: string; colour: string;
	/** flame plate */ plate: FKey;
	/** light swatch colour (fills) and the darker ink used for text and strokes */ fill: string; ink: string;
	lines?: Line[];
};
const m = (sym: string, ion: string, name: string, salt: string, colour: string, plate: FKey, fill: string, ink: string, lines?: Line[]): Metal => ({sym, ion, name, salt, colour, plate, fill, ink, lines});
export const MT: Record<string, Metal> = {
	Li: m('Li', 'Li^{+}', 'lithium', 'LiCl', 'crimson red', 'li', '#d0103a', '#a80d30', [{nm: 670.8, weight: 0.82}, {nm: 610.4, weight: 0.18}]),
	Na: m('Na', 'Na^{+}', 'sodium', 'NaCl', 'yellow-orange', 'na', '#ffb21a', '#a86200', [{nm: 589.0, weight: 0.4}, {nm: 589.6, weight: 0.3}, {nm: 568.8, weight: 0.1}, {nm: 615.4, weight: 0.12}, {nm: 498.3, weight: 0.08}]),
	K: m('K', 'K^{+}', 'potassium', 'KCl', 'lilac', 'k', '#c79bf0', '#7a3fb5'),
	Ca: m('Ca', 'Ca^{2+}', 'calcium', 'CaCl_2', 'orange-red', 'ca', '#f05a1e', '#b8400f'),
	Sr: m('Sr', 'Sr^{2+}', 'strontium', 'SrCl_2', 'red (crimson)', 'sr', '#dc1430', '#a80f24', [{nm: 606, weight: 0.24, band: 8}, {nm: 665, weight: 0.56, band: 50}, {nm: 460.7, weight: 0.2}]),
	Ba: m('Ba', 'Ba^{2+}', 'barium', 'BaCl_2', 'pale green', 'ba', '#9fe06a', '#3f8a1e'),
	Cu: m('Cu', 'Cu^{2+}', 'copper', 'CuCl_2', 'blue-green', 'cu', '#1fbf9a', '#0f7d66'),
};
/** The site table's order (scene 5). */
export const SEVEN: Metal[] = ['Li', 'Na', 'K', 'Ca', 'Sr', 'Ba', 'Cu'].map(s => MT[s]);
export const SRC_LINES = 'line positions: NIST Atomic Spectra Database; Sr bands: flame-emission references';
export const MODEL_TAG = 'model: brightness not to scale';
/** Visible strip span (as v10): 400 to 700 nm. */
export const SPAN = {lo: 400, hi: 700};
