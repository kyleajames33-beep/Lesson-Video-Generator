/**
 * M6 C06 plates (all from the C01 and C02 set; boxes measured 19 Oct). README for Claude:
 * - Baking soda clip pair (before/fizz) is drawn on its union box 420,136..1628,1563, so the crossfade sits at one place.
 *   Liquid surface at natural y about 690; the powder heap on the floor at x 690..1360, y 1190..1400.
 * - The "before" plate alone stands for the sodium hydroxide beaker (it stays quiet); nothing in it reads as vinegar.
 * - Beaker (C01) is empty glass; C05's LiquidBeaker draws coded water in it.
 */
import {AMMONIA, BEAKER, SODA_BOX, SODA_CLIP} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export {AMMONIA, BEAKER, SODA_BOX, SODA_CLIP};
export type {PDef};
const LIST: PDef[] = [AMMONIA, BEAKER, SODA_BOX, SODA_CLIP.before, SODA_CLIP.fizz];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
