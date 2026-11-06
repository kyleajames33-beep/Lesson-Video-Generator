// M8 C06 plates (see common.ts). The oxygen trace, water-column overlay, gill zoom frame, saturation bars, shutter, bubble
// check, droppers, step pills, electron hops, ratio ladder, calculation board, fill gauge, day strip, microbe lens, BOD guide
// band, two-by-two card, limits card, strip map, DO bars, crossed chips, countdown and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
