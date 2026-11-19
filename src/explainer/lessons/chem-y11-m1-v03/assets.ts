// Y11 Chem M1 V03 plates (see common.ts). The pore view, particle views, stream, drips, flask fill, rod, meter,
// solubility graph, lattices, impurity particles, inset cards, steam wisps, checklist, chips, question cards,
// countdowns and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
