// Y11 Chem M1 V13 plates (see common.ts). V12's final frame (no plates on it) comes in through its handoff scene, which
// the hook shows frozen for its first frames. Shell models, bars, the periodic cross and readouts are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
