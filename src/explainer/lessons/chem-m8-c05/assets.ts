// M8 C05 plates (see common.ts). The river strip, water-column overlay, brake, nutrient flows, gauge, oxygen trace,
// parameter board, chromatography column and peaks, microscope field, data table, purpose card glyphs, decision card,
// crossed chips, countdown and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
