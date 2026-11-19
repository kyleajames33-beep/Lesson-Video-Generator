// Y11 Chem M1 V06 plates (see common.ts). The balance display, mass bars, hatched gaps and overhangs, model tokens,
// drops, wisps, loss markers, the drying loop, the chromatogram strip, chips, question cards, countdowns and key notes
// are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
