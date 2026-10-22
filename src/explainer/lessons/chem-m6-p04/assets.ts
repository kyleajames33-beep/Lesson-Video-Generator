/**
 * M6 P04 plates. README for Claude:
 * - Everything here is reused (no new art): the P03 set (pH meter with probe in a beaker, empty beaker with a coded pale
 *   liquid, buffer bottle with a coded band, probe in its holder, wash bottle, safety glasses, ammonia stock bottle) and
 *   the C07 volumetric pipette with filler (rotated about its tip, never stretched) and volumetric flask (coded fill to
 *   the calibration ring at natural y 790).
 * - Beaker aspect 1491 x 1720 natural (beakerW(h) = 0.867 h); coded liquid surface at 0.416 h from the top.
 */
import {AMMONIA, BEAKER, BEAKER_LIQ, BUFFER, BUF_N, GLASSES, HOLDER, HOLD_N, METER_CROP, METER_G, PHMETER, WASH, WASH_N} from '../chem-m6-p03/assets';
import type {PDef} from '../chem-m6-p03/assets';
import {FLASK, FLASK_G, PIPETTE, PIPETTE_G} from '../chem-m6-c07/assets';

export {AMMONIA, BEAKER, BEAKER_LIQ, BUFFER, BUF_N, FLASK, FLASK_G, GLASSES, HOLDER, HOLD_N, METER_CROP, METER_G, PHMETER, PIPETTE, PIPETTE_G, WASH, WASH_N};
export type {PDef};
const LIST: PDef[] = [PHMETER, BEAKER, BUFFER, HOLDER, WASH, GLASSES, AMMONIA, PIPETTE, FLASK];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
