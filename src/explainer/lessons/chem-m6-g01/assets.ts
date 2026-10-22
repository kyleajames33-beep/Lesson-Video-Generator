/**
 * M6 G01 (Chemistry practice) plates. README for Claude:
 * - No new art. Reused at native aspect: the C07 beaker (coded labels, coded liquid), volumetric pipette with filler
 *   (rotated about its tip, never stretched), volumetric flask (coded fill to the calibration ring) and the pH meter
 *   with its probe in a beaker (decision board "Next" chip only).
 */
import {BEAKER, FLASK, FLASK_G, PHMETER, PIPETTE, PIPETTE_G} from '../chem-m6-c07/assets';
import type {PDef} from '../chem-m6-c07/assets';

export {BEAKER, FLASK, FLASK_G, PHMETER, PIPETTE, PIPETTE_G};
export type {PDef};
const LIST: PDef[] = [BEAKER, FLASK, PIPETTE, PHMETER];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
