// Y11 Chem M1 V04 plates (see common.ts). Vapour paths, drops, receiver fill, cooling arrows, surface views, tallies,
// the gauge, staircase tiles, bead cutaway, temperature scale, cards, chips, question cards, countdowns, the
// chromatography strip and its dye view, and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
