/**
 * M6 G02 plates. README for Claude:
 * - No new plates (design, Assets). Reused, with alpha boxes measured by earlier builders from the real files:
 *   the pH meter with its probe in a beaker (C04 set; coded amber readout "3.03", Q3 and the hook), the baking soda
 *   box (C01; coded label "NaHCO3", Q4), the fertiliser scoop (C01; coded label "KH2PO4", Q4) and the empty beaker
 *   (C01; decision board "Next" chip). No people or hands. Q1 and Q2 are worded questions with no object.
 */
import {BEAKER, FERT, SODA_BOX} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';

export {BEAKER, FERT, SODA_BOX, PHMETER};
const LIST: PDef[] = [PHMETER, SODA_BOX, FERT, BEAKER];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
