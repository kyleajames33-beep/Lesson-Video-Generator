// S02 plates (all existing): fruit flies (B8/B10), the C3 iron tube pair (scene 9) and the C1 soda bottles (drill 1).
// Geometry notes are in ../skills-shared/plates.ts.
import {FLY, IRON, SODA} from '../skills-shared/plates';

export const ASSETS: string[] = [FLY.white, FLY.red, IRON.start, IRON.deep, SODA.sealed, SODA.open].map(p => p.src);
