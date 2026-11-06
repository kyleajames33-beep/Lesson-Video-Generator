// Y11 Chem M2 V06 plates (see common.ts). Equation strips, ball molecules, count-up, mass bars, two-pan comparison,
// ratio chips, the two-twos callout, scaling rows, reagent labels, the mixing slider and cup fill, the line graphs,
// question cards, countdowns and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
