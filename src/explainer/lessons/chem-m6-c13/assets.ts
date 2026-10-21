/**
 * M6 C13 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 21 Oct from the real files.
 * - Indicator sets (2400 x 1400 canvas, three flasks each, acid colour left, transition middle, base colour right):
 *   methyl orange box 192,256..2208,1143 (flask columns 192..786, 893..1492, 1610..2208); methyl red 189,254..2211,1144
 *   (new plate, same canvas and scale; columns 189..788, 892..1495, 1610..2211); phenolphthalein 193,277..2208,1123
 *   (colourless, pale pink, deep pink); bromothymol blue 192,255..2208,1145 (yellow, green, blue). A coded ring moves
 *   between the flask centres (SET_U: centre of each flask as a fraction of the box width). Never stretched.
 * - Burette, conical flask, phenolphthalein clip pair and white tile: the C12 plates and geometry (Rig, BuretteFill).
 * - Ammonia bottle (C01 set): scene 7 and attempt 2, small.
 * - Red cabbage clip pair (2048 x 1700, aligned): box 424,143..1625,1560; handoff chip only.
 */
import {AMMONIA, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BURETTE, BUR_G, CFLASK, PHTH, TILE} from '../chem-m6-c12/assets';

export {AMMONIA, BURETTE, BUR_G, CFLASK, PHTH, TILE};
export type {PDef};
const SET: [number, number] = [2400, 1400];
export const MO_SET = mk('m6-indicator-methyl-orange-set-v1.png', SET, [192, 256, 2208, 1143]);
export const MR_SET = mk('m6-indicator-methyl-red-set-v1.png', SET, [189, 254, 2211, 1144]);
export const PH_SET = mk('m6-indicator-phenolphthalein-set-v1.png', SET, [193, 277, 2208, 1123]);
export const BTB_SET = mk('m6-indicator-bromothymol-blue-set-v1.png', SET, [192, 255, 2208, 1145]);
const cu = (p: PDef, cols: [number, number][]) => cols.map(([a, b]) => ((a + b) / 2 - p.box[0]) / p.box[2]) as [number, number, number];
export const SET_U = {
	mo: cu(MO_SET, [[192, 786], [893, 1492], [1610, 2208]]),
	mr: cu(MR_SET, [[189, 788], [892, 1495], [1610, 2211]]),
	ph: cu(PH_SET, [[193, 787], [903, 1497], [1613, 2208]]),
	btb: cu(BTB_SET, [[192, 787], [904, 1498], [1615, 2208]]),
};
const CAB_B: [number, number, number, number] = [424, 143, 1625, 1560];
export const CABBAGE = {purple: mk('m6-clip-red-cabbage-purple-v1.png', [2048, 1700], CAB_B), green: mk('m6-clip-red-cabbage-green-v1.png', [2048, 1700], CAB_B)};
const LIST: PDef[] = [BURETTE, CFLASK, PHTH.clear, PHTH.pink, TILE, MO_SET, MR_SET, PH_SET, BTB_SET, AMMONIA, CABBAGE.purple, CABBAGE.green];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
