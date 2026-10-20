// S01 plates (all existing): the C3 iron thiocyanate tube pair (worked question) and the B10 cattle (drill 1).
// Geometry notes are in ../skills-shared/plates.ts.
import {COW, IRON} from '../skills-shared/plates';

export const ASSETS: string[] = [IRON.start, IRON.deep, COW.roan, COW.red, COW.white].map(p => p.src);
