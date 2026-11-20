// Y11 Chem M1 V12 plates (see common.ts). V11's final frame (no plates) comes in through its handoff scene, which the
// hook shows frozen for its first frames. The periodic grid, readouts, shell models and diatomic pairs are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
