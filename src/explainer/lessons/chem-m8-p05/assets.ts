// M8 P05 plates (see common.ts). The role outlines, claims card, results table, bath chips, clock, bung and delivery
// tube, spatula, dropper, drops, gas path, method cards, risk table, fix rail, crossed chips, countdown and key notes are
// coded. No people or hands.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
