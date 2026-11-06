// M8 C04 shared pieces: measured lesson lookups and the plates. Alpha boxes measured 6 Nov (PIL, alpha > 20).
// Plate anchors (natural px):
// - AAS (m8-aas-v1, 2000 x 2000): lamp glass x 167..733 on the beam axis y 862; flame window x 983..1250, flame centre
//   (1100, 867), burner top y 917, nebuliser bottle (1095, 1170); screen x 1425..1775, y 783..1067.
// - Hollow cathode lamp: cathode cup mouth (1118, 1015); window (1585, 1027); beam axis y 1027.
// - Graphite furnace: tube axis y 1043, tube x 560..1440, sample port (1000, 880).
// - Copper cuvettes (pale, deep): drawn on the m5x cuvette box (790, 200, 1211, 1802) so they cross-fade in place.
// - Beaker (m6-beaker-v1, 2048): coded fill trapezoid: surface y 780 (x 450..1700), floor y 1800 (x 610..1540).
// - Pipette (m6-volumetric-pipette-filler-v1): tip (753, 1884). Volumetric flask: neck mouth (1023, 170).
import lesson from '../../../../docs/production/claude-pm/lessons/m8c04/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export {Heading} from '../chem-m5-c03/common';
export type {PDef};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 C04 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const NB = ' ';

const N2: [number, number] = [2000, 2000], N4: [number, number] = [2048, 2048];
const CUV_B: [number, number, number, number] = [790, 200, 1211, 1802];
export const CUV = {pale: mk('m8-cuvette-cu-pale-v1.png', N2, CUV_B), deep: mk('m8-cuvette-cu-deep-v1.png', N2, CUV_B)};
export const LAMP = mk('m8-hollow-cathode-lamp-v1.png', N2, [412, 844, 1594, 1206]);
export const LAMP_A = {cup: [1118, 1015] as [number, number], win: [1585, 1027] as [number, number], axis: 1027};
export const FURN = mk('m8-graphite-furnace-v1.png', N2, [400, 864, 1599, 1198]);
export const FURN_A = {axis: 1043, x0: 560, x1: 1440, port: [1000, 880] as [number, number]};
export const COLM = mk('m5x-colourimeter-v1.png', N2, [208, 201, 1793, 1800]);
export const UVV = mk('m8-uv-visible-spectrophotometer-v1.png', N2, [161, 391, 1840, 1610]);
export const AAS = mk('m8-aas-v1.png', N2, [161, 572, 1840, 1429]);
export const AAS_A = {lampX0: 167, lampX1: 733, axis: 862, flameX0: 983, flameX1: 1250, flame: [1100, 867] as [number, number], burner: 917, neb: [1095, 1170] as [number, number], scrX0: 1425, scrX1: 1775, scrY0: 783, scrY1: 1067};
export const FLAME_CU = mk('m8-flame-cu-blue-green-v2.png', N2, [665, 184, 1339, 1828]);
export const BEAKER = mk('m6-beaker-v1.png', N4, [278, 164, 1769, 1884]);
export const BEAKER_A = {surf: 780, floor: 1800, tl: 450, tr: 1700, bl: 610, br: 1540};
export const FLASK = mk('m6-volumetric-flask-v1.png', N4, [683, 164, 1365, 1884]);
export const FLASK_A = {mouth: [1023, 170] as [number, number]};
export const PIP = mk('m6-volumetric-pipette-filler-v1.png', N4, [739, 164, 1309, 1884]);
export const PIP_A = {tip: [753, 1884] as [number, number]};
export const BOTTLE2 = mk('m8-river-sampling-bottle-v2.png', N2, [520, 161, 1479, 1840]);

export const PLATES: PDef[] = [CUV.pale, CUV.deep, LAMP, FURN, COLM, UVV, AAS, FLAME_CU, BEAKER, FLASK, PIP, BOTTLE2];
