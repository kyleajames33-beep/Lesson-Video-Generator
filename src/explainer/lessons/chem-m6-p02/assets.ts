/**
 * M6 P02 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 22 Oct from the real files.
 * - New (brief 96): foam cup standing in a glass beaker, probe and stirrer through a slotted lid
 *   (2000 px, box 542,225..1457,1775). Natural points (CUP_N): probe top 974,262; probe tip in the liquid 974,1200;
 *   stirrer top 1144,240; lid 690..1370 x, 800..945 y; cutaway window centre 1075,1110 (half size 195 x 110),
 *   liquid surface y 1080; foam walls about x 760 and 1275 at y 1300; outer beaker walls about x 600 and 1400.
 *   The lid (with probe and stirrer) lifts by drawing the plate in clipped layers (CupB).
 * - New (brief 96): empty 100 mL measuring cylinder (2000 px, box 738,201..1262,1800). Inside x 886..1110; the
 *   0 mL level natural y 1626, 100 mL y 456 (so 50 mL at y 1041); spout at the upper left, 830,230.
 * - C03 foam cup (hook, scene 3), C01 beaker (attempt 2), glass thermometer (attempt 2), M5 safety plates, wash bottle,
 *   C02 antacid tablets (handoff chip only).
 */
import {ANTACID, BEAKER, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {CAL, CAL_G} from '../chem-m6-c03/assets';

export {ANTACID, BEAKER, CAL, CAL_G};
export type {PDef};
const N2 = [2000, 2000] as [number, number];
export const CUPB = mk('p02-foam-cup-in-beaker-v1.png', N2, [542, 225, 1457, 1775]);
export const CUP_N = {
	probeTop: [974, 262] as [number, number], probeTip: [974, 1200] as [number, number], stirTop: [1144, 240] as [number, number],
	bungP: [974, 790] as [number, number], bungS: [1144, 790] as [number, number], lidL: [700, 880] as [number, number], lidR: [1365, 880] as [number, number],
	lidTop: [1030, 830] as [number, number], win: [1075, 1110] as [number, number], winR: [195, 110] as [number, number], wallL: [762, 1300] as [number, number],
	wallR: [1272, 1300] as [number, number], beakL: [598, 1250] as [number, number], beakR: [1402, 1250] as [number, number], mouth: [1030, 905] as [number, number],
};
export const CYL = mk('m6-measuring-cylinder-v1.png', N2, [738, 201, 1262, 1800]);
export const CYL_N = {x0: 886, x1: 1110, zero: 1626, full: 456, spout: [830, 230] as [number, number]};
export const THERMO = mk('c8-thermometer-hot-v1.png', [216, 1988], [21, 199, 194, 1789]);
export const GLASSES = mk('m5x-safety-glasses-v1.png', N2, [215, 637, 1787, 1408]);
export const GLOVES = mk('m5x-gloves-v1.png', N2, [218, 385, 1788, 1617]);
export const WASH = mk('m6-wash-bottle-v1.png', [2048, 2048], [587, 164, 1460, 1884]);
const LIST: PDef[] = [CAL, CUPB, CYL, BEAKER, THERMO, GLASSES, GLOVES, WASH, ANTACID];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
