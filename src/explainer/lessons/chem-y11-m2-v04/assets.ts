// Y11 Chem M2 V04 plates (see common.ts), plus M2 V03's and V02's plates, which V03's final frame (this video's
// opening) shows.
import {PLATES, PREV_SRC} from './common';

export const ASSETS: string[] = [...new Set([...PLATES.map(p => p.src), ...PREV_SRC])];
