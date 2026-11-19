// Y11 Chem M1 V05 plates (see common.ts). The strips, solvent, spots, dimension lines, crosshairs, particle view,
// fibre view, time bars, number line, chips, question cards, countdowns and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
