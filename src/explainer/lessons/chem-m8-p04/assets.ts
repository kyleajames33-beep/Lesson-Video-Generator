// M8 P04 plates (see common.ts). The calibration and scan graphs, spectrum strip, beam cutaway, test-tube fills and
// streams, ridged-side outlines, wipe and rinse, readouts, calculation board, cards, recovery gauge, fix rail, risk
// table, crossed chips, countdown and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
