// Y11 Chem M2 V03 plates (see common.ts), plus M2 V02's plates, which its final frame (this video's opening) shows.
import {PLATES, V02_SRC} from './common';

export const ASSETS: string[] = [...new Set([...PLATES.map(p => p.src), ...V02_SRC])];
