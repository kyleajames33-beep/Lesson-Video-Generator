// Y11 Chem M1 V11 plates (see common.ts). Levels, orbitals, the ladder, the table outline (also ws-v03's final frame)
// and the shell atom are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
