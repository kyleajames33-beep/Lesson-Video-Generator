/**
 * M6 C16 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 21 Oct from the real files.
 * - Vinegar bottle, antacid tablets, marble chips, beaker (C01/C02 sets); pH meter with probe in a beaker (C04 set;
 *   C07 FullMeter with an amber readout). pH meter beaker liquid, as fractions of the visible box (gridded crop):
 *   surface v 0.63 (u 0.69..0.965), floor v 0.935 (PHM_LIQ); the probe tip sits at about u 0.83, v 0.91 (PHM_TIP).
 * - Burette, conical flask, white tile, clip flasks: C12. Conductivity meter titration set: C14 (coded level bar).
 * - Cycad leaching (Module 5 set, 2000 px): box 200,481..1800,1519; crushed kernels in a woven bag in a stream, no
 *   people. Scene 8 thumbnail only (the Module 5 callback).
 * - New (brief 92): red wine glass (2000 px, box 543,81..1458,1931); wastewater channel with a pH probe on a bracket
 *   (2000 px, box 27,0..2000,1948; the cable leaves the top edge); aspirin tablets (2000 px, box 320,552..1656,1437).
 * - Scene 8 shows no person, no specific practice, no pituri: an abstract observe, test, pass on cycle (coded).
 */
import {ANTACID, BEAKER, MARBLE, VINEGAR, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';
import {BURETTE, BUR_G, CFLASK, PHTH, TILE} from '../chem-m6-c12/assets';
import {COND, COND_SCREEN} from '../chem-m6-c14/assets';

export {ANTACID, BEAKER, MARBLE, VINEGAR, PHMETER, BURETTE, BUR_G, CFLASK, PHTH, TILE, COND, COND_SCREEN};
export type {PDef};
const N2 = [2000, 2000] as [number, number];
export const CYCAD = mk('m5x-cycad-leaching-v1.png', N2, [200, 481, 1800, 1519]);
export const RWGLASS = mk('m6-red-wine-glass-v1.png', N2, [543, 81, 1458, 1931]);
export const WASTE = mk('m6-wastewater-outlet-probe-v1.png', N2, [27, 0, 2000, 1948]);
export const ASPIRIN = mk('m6-aspirin-tablets-v1.png', N2, [320, 552, 1656, 1437]);
export const PHM_LIQ: [number, number][] = [[0.688, 0.63], [0.966, 0.63], [0.958, 0.9], [0.93, 0.935], [0.72, 0.935], [0.695, 0.9]];
export const PHM_TIP: [number, number] = [0.83, 0.91];
const LIST: PDef[] = [VINEGAR, ANTACID, MARBLE, BEAKER, PHMETER, BURETTE, CFLASK, TILE, PHTH.clear, PHTH.pink, COND, CYCAD, RWGLASS, WASTE, ASPIRIN];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
