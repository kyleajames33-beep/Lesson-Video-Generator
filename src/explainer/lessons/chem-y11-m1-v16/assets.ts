// Y11 Chem M1 V16 plates (see common.ts): the aligned flame set, the solution bottle, safety glasses, the hand
// spectroscope and the potassium trough (V15's final frame). Ladders, strips, tallies, swatches and the loop are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
