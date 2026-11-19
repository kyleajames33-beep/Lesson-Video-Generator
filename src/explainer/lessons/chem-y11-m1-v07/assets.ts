// Y11 Chem M1 V07 plates (see common.ts). Formula tiles, count and mass bars, molecules and the molecule field, the
// beam balance, the periodic-table cell, the lattice magnifier, steam, readouts, rows, chips, question cards,
// countdowns, nuclide notation and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
