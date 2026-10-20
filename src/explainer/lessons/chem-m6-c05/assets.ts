/**
 * M6 C05 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files.
 * - Beaker (C01 set) is empty glass: a coded pale liquid is drawn inside it (BEAKER_LIQ, natural coordinates).
 * - pH meter (C04 set): only the meter body is shown, cropped to natural 160,780..1290,1810 (METER_CROP), so the
 *   plate's own beaker and probe stay out of frame and a coded probe on a coded cable moves between the beakers.
 *   Screen corners (natural): 445,1000 / 1050,1010 / 1030,1240 / 420,1235; cable leaves the connector at 1085,790.
 * - Magnesium pair: strong 411,201..1588,1800 and weak 412,200..1589,1800; drawn on the union box so the two sit at one
 *   place. They replace the hook beakers when the magnesium goes in.
 * - Saturated beaker: 339,200..1661,1800; undissolved solid on the floor at natural y 1520..1640, x 620..1400.
 * - Ammonia bottle label (blank, C01 box): label u 0.09..0.96, v 0.48..0.81 of the visible box.
 */
import {AMMONIA, BEAKER, VINEGAR, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';

export {AMMONIA, BEAKER, VINEGAR, PHMETER};
export type {PDef};
const N2 = [2000, 2000] as [number, number];
const MG_B: [number, number, number, number] = [411, 200, 1589, 1800];
export const MG = {strong: mk('m5x-strong-acid-mg-v1.png', N2, MG_B), weak: mk('m5x-weak-acid-mg-v1.png', N2, MG_B)};
export const SATURATED = mk('m5x-saturated-beaker-v1.png', N2, [339, 200, 1661, 1800]);
export const METER_CROP: [number, number, number, number] = [160, 780, 1290, 1810];
export const METER_G = {screen: [[445, 1000], [1050, 1010], [1030, 1240], [420, 1235]] as [number, number][], cable: [1085, 790] as [number, number]};
/** Natural outline of the liquid inside the empty beaker plate. */
export const BEAKER_LIQ: [number, number][] = [[470, 880], [1660, 880], [1655, 1500], [1560, 1585], [570, 1585], [475, 1500]];
const LIST: PDef[] = [AMMONIA, BEAKER, VINEGAR, PHMETER, MG.strong, MG.weak, SATURATED];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
