// Y11 Chem M2 V02 plates (see common.ts), plus M2 V01's plates, which its final frame (this video's opening) shows.
import {PLATES} from './common';
import {ASSETS as V01_ASSETS} from '../chem-y11-m2-v01/assets';

export const ASSETS: string[] = [...new Set([...PLATES.map(p => p.src), ...V01_ASSETS])];
