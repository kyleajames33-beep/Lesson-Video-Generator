/**
 * M6 G03 (Chemistry practice: standardisation and titration calculations) plates. README for Claude:
 * - No new art (design: "Need: no new plates"). Reused at native aspect, never stretched:
 *   the C02 antacid tablets (Q3 card), the C07 volumetric flask (the scale-up flask: coded aliquot bands clipped to its
 *   inner outline, equal volumes per band), the C01 beaker (the 10.00 mL sample, tilted about its lip, never stretched),
 *   the P06 methyl orange set (decision board "Next" chip).
 */
import {ANTACID, BEAKER} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {FLASK, FLASK_G, FLASK_IN} from '../chem-m6-c07/assets';
import {MOSET} from '../chem-m6-p06/assets';

export {ANTACID, BEAKER, FLASK, FLASK_G, FLASK_IN, MOSET};
export type {PDef};
const LIST: PDef[] = [ANTACID, BEAKER, FLASK, MOSET];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
