/**
 * M6 C10 plates. README for Claude:
 * - pH meter (C04 set): two whole plates in the hook with amber readouts (C07 FullMeter): "2.78" for HX, "2.52" for
 *   ethanoic acid; small again in scene 5 and the handoff.
 * - Vinegar bottle (C01 set, plain): scene 2, beside the ethanoic acid Ka chip.
 * - No plate for lactic acid or the attempt 2 acids (worded questions only; the sour milk plate is declined).
 */
import {VINEGAR} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';

export {VINEGAR, PHMETER};
export type {PDef};
const LIST: PDef[] = [PHMETER, VINEGAR];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
