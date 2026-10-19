// M6 C02 plates: measured with the C01 set (see ../chem-m6-c01/assets.ts for the README and alpha boxes).
import {AMMONIA, ANTACID, BEAKER, CLEANER, COPPER, FERT, LEMON, LIME, LITMUS, MARBLE, MG_ACID, SOAP, SODA_CLIP, SPLINT, TUBE, VINEGAR, ZINC} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export {AMMONIA, ANTACID, BEAKER, CLEANER, COPPER, FERT, LEMON, LIME, LITMUS, MARBLE, MG_ACID, SOAP, SODA_CLIP, SPLINT, TUBE, VINEGAR, ZINC};
const LIST: PDef[] = [MG_ACID, MARBLE, BEAKER, ANTACID, LEMON, VINEGAR, SOAP, CLEANER, AMMONIA, FERT, SODA_CLIP.before, SODA_CLIP.fizz, COPPER, ZINC, LIME.clear, LIME.milky, SPLINT, LITMUS.red, LITMUS.blue, TUBE.clear];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
