// Y11 Chem M1 V21 plates (see common.ts): the salt jar, dry ice, the chlorine gas jar, the glass of water and the
// ammonia bottle. The tug-of-war dial, the spectrum, the periodic outlines, Lewis diagrams and the ion layer are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
