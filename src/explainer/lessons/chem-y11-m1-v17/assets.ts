// Y11 Chem M1 V17 plates (see common.ts): the smoke alarm, the gum tree, the uranium ore, the gamma source pot, the
// lead-shielded vial and the paper, aluminium and lead absorbers. Nuclei, tracks, the band sketch, the chamber and the
// detector are coded. V16's final frame (the opening) uses no plates.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
