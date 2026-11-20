// Y11 Chem M1 V14 plates (see common.ts): the period 3 sample row (sodium under oil to a clear gas jar for argon) and
// the trough of water for the handoff. V13's final frame (no plates on it) comes in through its handoff scene, which
// the hook shows frozen for its first frames. Shell models, bars, the tug of war, the shaded table and readouts are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
