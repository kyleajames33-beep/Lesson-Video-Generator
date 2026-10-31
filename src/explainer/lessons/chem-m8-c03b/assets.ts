// M8 C03b plates (see common.ts). The anion strip, drops, insets, fizz, delivery line, warm and waft, ammonia ladder,
// anion flowchart, crossed chips, countdown and key notes are coded. C03a's flame and copper plates are referenced
// in the hook recap.
import {CU_DEEP, FLAME} from '../chem-m8-c03a/common';
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set([...PLATES, CU_DEEP, FLAME.cu].map(p => p.src))];
