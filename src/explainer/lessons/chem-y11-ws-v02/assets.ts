// Y11 Chem WS V02 plates (see common.ts), plus the plates of ws-v01's final frame shown frozen at the start of scene 1.
// The plan board, flames, steam, step rulers, risk table and matrix, axes and run dots, water molecules, readouts,
// chips, question cards, countdowns and key notes are coded.
import {PLATES} from './common';
import {WS1_ASSETS} from './opening';

export const ASSETS: string[] = [...new Set([...PLATES.map(p => p.src), ...WS1_ASSETS])];
