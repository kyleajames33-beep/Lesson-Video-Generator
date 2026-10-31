// M8 P02 plates (see common.ts). The method strip, set split, variables card, calculation board, recovery gauge, crystal
// zooms and mesh, pours, rod and drops, jet arc, results table, trial dot strip, cards, fix rail, risk table, tongs,
// decision card, crossed chips, countdown and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
