/**
 * M6 C09 plates. README for Claude:
 * - Foam cup calorimeter (C03 set): two copies in the hook (HCl and ethanoic acid only; HF never gets a cup), the
 *   attempt 1 card corner. Coded amber readout chips sit on the probe top.
 * - Vinegar bottle (C01 set, plain, no label): scene 2, with a coded label beside it.
 * - Ammonia bottle (C01 set): scene 8, coded label lines on its blank label (C08 BottleLabel).
 * - pH meter (C04 set): scene 9 thumbnail and the handoff.
 */
import {AMMONIA, VINEGAR} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';
import {CAL, CAL_G} from '../chem-m6-c03/assets';

export {AMMONIA, VINEGAR, PHMETER, CAL, CAL_G};
export type {PDef};
const LIST: PDef[] = [CAL, VINEGAR, AMMONIA, PHMETER];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
