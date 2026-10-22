/**
 * M6 P05 plates. README for Claude:
 * - Everything here is reused (no new art): the P04/P03 set (pH meter with probe in a beaker, empty beaker with a coded
 *   liquid, buffer bottle used as the two reagent bottles and the glacial stock with a coded band, probe in its holder,
 *   wash bottle, safety glasses), the C07 volumetric pipette and volumetric flask, the C11 graduated pipette (stood
 *   upright about its tip, never stretched; the 1.00 mL doses) and the C12 burette on its clamp stand (handoff chip).
 */
import {BEAKER, BEAKER_LIQ, BUFFER, BUF_N, FLASK, FLASK_G, GLASSES, HOLDER, HOLD_N, METER_CROP, METER_G, PHMETER, PIPETTE, PIPETTE_G, WASH, WASH_N} from '../chem-m6-p04/assets';
import type {PDef} from '../chem-m6-p04/assets';
import {GRADPIP} from '../chem-m6-c11/assets';
import {BURETTE} from '../chem-m6-c12/assets';

export {BEAKER, BEAKER_LIQ, BUFFER, BUF_N, BURETTE, FLASK, FLASK_G, GLASSES, GRADPIP, HOLDER, HOLD_N, METER_CROP, METER_G, PHMETER, PIPETTE, PIPETTE_G, WASH, WASH_N};
export type {PDef};
const LIST: PDef[] = [PHMETER, BEAKER, BUFFER, HOLDER, WASH, GLASSES, PIPETTE, FLASK, GRADPIP, BURETTE];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
