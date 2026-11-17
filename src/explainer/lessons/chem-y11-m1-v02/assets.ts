// Y11 Chem M1 V02 plates (see common.ts). Readouts, the heating model and curves, bubbles, level markers, hotplate
// glow, particle views, lattices, the change-of-state strip, the flare, data table, chips, question cards,
// countdowns and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
