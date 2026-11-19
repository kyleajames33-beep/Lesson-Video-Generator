// Y11 Chem M1 V08 plates (see common.ts). Nuclide labels, atom models, nuclei, particles, the charge meter, the
// periodic table strip, the N against Z sketch, readouts, rows, chips, question cards, countdowns and key notes are
// coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
