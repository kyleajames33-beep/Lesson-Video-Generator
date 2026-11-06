// M8 C08 plates (see common.ts). The candidate strip, skeletal structures and group rings, prediction card, drops, shake,
// spatula outline, gas path, proton hop, heat lines, decision chart, report card, IR sketch, crossed chips, countdown and
// key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
