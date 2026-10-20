/**
 * M6 C08 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files.
 * - pH meter (C04 set): shown whole (probe already in its beaker) with an amber readout on its screen (C07 FullMeter).
 * - Beaker (C01 set, empty glass) with a coded pale liquid (C05 LiquidBeaker).
 * - Ammonia bottle (C01 set): blank label at u 0.09..0.96, v 0.48..0.81 of the visible box (coded label text).
 * - Ant (m6-ant-formic-acid-v1.png, 2048 px): box 165,580..1884,1468, a black ant in side view, no person or hand.
 * - Foam cup calorimeter (C03 set) for the handoff chip.
 */
import {AMMONIA, BEAKER, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';
import {CAL} from '../chem-m6-c03/assets';

export {AMMONIA, BEAKER, PHMETER, CAL};
export type {PDef};
export const ANT = mk('m6-ant-formic-acid-v1.png', [2048, 2048], [165, 580, 1884, 1468]);
const LIST: PDef[] = [BEAKER, PHMETER, AMMONIA, ANT, CAL];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
