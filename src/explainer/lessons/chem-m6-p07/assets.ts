/**
 * M6 P07 plates. README for Claude:
 * - No new art. Everything is reused at native aspect (alpha boxes from the source lessons): the C01 vinegar bottle
 *   (pale gold liquid; the coded label beside it says "white vinegar") and household cleaner (attempt 2); the C04 pH
 *   meter with its probe in a beaker (FullMeter puts the coded readout on its screen; Meter shows the cropped body
 *   with a coded probe); the P03 buffer bottle with a coded band (pH 7.00, pH 2.00); the C12 burette, conical flask,
 *   white tile and phenolphthalein colourless/pink clip pair; the C07 volumetric pipette and flask; the C01 beaker;
 *   the P02 wash bottle and safety glasses.
 */
import {CLEANER, VINEGAR} from '../chem-m6-c01/assets';
import {PHTH} from '../chem-m6-c12/assets';
import {BUFFER, BUF_N} from '../chem-m6-p03/assets';
import {BEAKER, BEAKER_LIQ, BURETTE, BUR_G, CFLASK, FLASK, FLASK_G, GLASSES, PIPETTE, PIPETTE_G, TILE, WASH, WASH_N} from '../chem-m6-p06/assets';
import type {PDef} from '../chem-m6-p06/assets';
import {PHMETER} from '../chem-m6-c04/assets';

export {BEAKER, BEAKER_LIQ, BUFFER, BUF_N, BURETTE, BUR_G, CFLASK, CLEANER, FLASK, FLASK_G, GLASSES, PHMETER, PHTH, PIPETTE, PIPETTE_G, TILE, VINEGAR, WASH, WASH_N};
export type {PDef};
const LIST: PDef[] = [VINEGAR, CLEANER, PHMETER, BUFFER, BURETTE, CFLASK, TILE, PHTH.clear, PHTH.pink, FLASK, PIPETTE, BEAKER, WASH, GLASSES];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
