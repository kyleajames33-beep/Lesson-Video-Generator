// Y11 Chem M1 V01 plates (see common.ts). Particle views, lattices, the classification tree, readouts, chips, the
// clamp bar, string, spoon, rod, salt crystals, filing specks, question cards, countdowns and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
