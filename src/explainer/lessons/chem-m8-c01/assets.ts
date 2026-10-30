// M8 C01 plates (see common.ts). The ion inset, the silver-needed ladder, the pH strip, the titre table, the calculation
// board, the hazard band and the key notes are coded.
import {BALANCE, BOTTLE, BURETTE, CFLASK, DROPPER, MOHR, PHTH, TILE} from './common';

export const ASSETS: string[] = [...new Set([BOTTLE, PHTH.pink, PHTH.clear, BURETTE, CFLASK, TILE, MOHR.yellow, MOHR.white, MOHR.end, DROPPER, BALANCE].map(p => p.src))];
