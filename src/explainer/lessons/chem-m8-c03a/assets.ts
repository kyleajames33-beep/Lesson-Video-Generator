// M8 C03a plates (see common.ts). The suspect strip, drops, ion lock and complex wrap insets, wire loop, energy
// ladder, cation flowchart, crossed chips, countdown and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
