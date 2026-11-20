// Y11 Chem M1 V09 plates (see common.ts). Nuclei, atom tokens, the balance beam, the chance run, number lines,
// tables, rows, chips, question cards, countdowns, the spectrum strip and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
