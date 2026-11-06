// M8 P04 (calibration practical: copper(II) standards, a blank and an unknown) shared pieces: measured lesson lookups and
// the plates. Alpha boxes measured 6 Nov (PIL, alpha > 20). Plate anchors (natural px):
// - Copper cuvette series cu-1 to cu-5, unknown and diluted unknown: one 2000 x 2000 canvas and one cuvette outline, drawn
//   on the union box (788, 195, 1213, 1805) so they cross-fade in place; the blank m5x cuvette shares the outline (its
//   alpha box at > 20 is 791, 200, 1210, 1799, so no stray alpha). Liquid top y about 600; ridged sides x 790..835 and
//   1165..1210.
// - Standards rack (m8-cu-standards-rack-v1): tube centres x 563, 740, 915, 1088, 1262, 1438 (blank, then 0.0200 to
//   0.120); liquid top y 822; tube top y 605, bottom y 1310.
// - UV-visible spectrophotometer: cuvette slot centre (803, 1030); screen x 1155..1605, y 790..1000.
// - Burette on clamp stand: the M6 C12 burette geometry (BUR_G: tip 1145, 1556; zero mark 260; 50 mL mark 1180).
import lesson from '../../../../docs/production/claude-pm/lessons/m8p04/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BURETTE, BUR_G} from '../chem-m6-c12/assets';

export {Heading} from '../chem-m5-c03/common';
export {BURETTE, BUR_G};
export type {PDef};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 P04 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const NB = ' ';

const N2: [number, number] = [2000, 2000], N4: [number, number] = [2048, 2048];
const CUV_B: [number, number, number, number] = [788, 195, 1213, 1805];
const cv = (n: string) => mk(n, N2, CUV_B);
export const CUV = {c1: cv('m8-cuvette-cu-1-v1.png'), c2: cv('m8-cuvette-cu-2-v1.png'), c3: cv('m8-cuvette-cu-3-v1.png'), c4: cv('m8-cuvette-cu-4-v1.png'), c5: cv('m8-cuvette-cu-5-v1.png'), unk: cv('m8-cuvette-cu-unknown-v1.png'), dil: cv('m8-cuvette-cu-unknown-diluted-v1.png'), blank: cv('m5x-cuvette-blank-v1.png')};
export const CUV_SERIES = [CUV.c1, CUV.c2, CUV.c3, CUV.c4, CUV.c5];
export const CUV_A = {liq: 600, ridgeL: [790, 835] as [number, number], ridgeR: [1165, 1210] as [number, number], top: 195, bottom: 1805, cx: 1000};
export const RACK6 = mk('m8-cu-standards-rack-v1.png', N2, [401, 596, 1599, 1407]);
export const RACK6_A = {tx: [563, 740, 915, 1088, 1262, 1438], liq: 822, top: 605, bottom: 1310};
export const TUBE_PALE = mk('c5-copper-tube-pale-v1.png', [1200, 1800], [410, 183, 790, 1617]);
export const TUBE_DEEP = mk('c5-copper-tube-deep-v1.png', [1200, 1800], [410, 183, 790, 1617]);
export const UVV = mk('m8-uv-visible-spectrophotometer-v1.png', N2, [161, 391, 1840, 1610]);
export const UVV_A = {slot: [803, 1030] as [number, number], scr: [1155, 790, 1605, 1000] as [number, number, number, number]};
export const STOCK = mk('c11-cuso4-beaker-dissolved-v1.png', [1400, 1800], [222, 275, 1151, 1604]);
export const COLM = mk('m5x-colourimeter-v1.png', N2, [208, 201, 1793, 1800]);
export const WASTE = mk('m5x-waste-bottle-v1.png', N2, [495, 269, 1504, 1743]);
export const GLASSES = mk('m5x-safety-glasses-v1.png', N2, [215, 637, 1787, 1408]);
export const GLOVES = mk('m5x-gloves-v1.png', N2, [218, 385, 1788, 1617]);
export const WASH = mk('m6-wash-bottle-v1.png', N4, [587, 164, 1460, 1884]);

export const PLATES: PDef[] = [...Object.values(CUV), RACK6, TUBE_PALE, TUBE_DEEP, UVV, STOCK, BURETTE, COLM, WASTE, GLASSES, GLOVES, WASH];
