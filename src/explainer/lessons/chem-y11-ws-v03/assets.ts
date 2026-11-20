// Y11 Chem WS V03 plates (see common.ts). ws-v02's final frame (scene 1's opening) uses only plates in this list. The
// flames, crystal, water molecules, plan strip, number lines and dots, readouts, source cards, check lists, reference
// layout, periodic table, chips, question cards, countdowns and key notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
