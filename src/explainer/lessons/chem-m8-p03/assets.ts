// M8 P03 plates (see common.ts). Well fills, drops, dropper, wire loop, ion lens, plan table, variables card, control
// row, results table, justification card, cards, risk table, crossed chips, countdown and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
