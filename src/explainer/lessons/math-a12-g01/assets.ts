import {G01_PLATES} from './parts';
import {TANK} from './s3';
import {ASSETS as S12_ASSETS} from '../math-a12-s12/assets';

// Plates: the exam desk and calculator (scenes 1, 2, 5, 6, 9, 10, 12), d15's skateboard (1, 3 to 5, 8), the Physics
// torch (6, 8), d10's coaster track and car (7, 8) and the Biology rainwater tank (13, 14, the final frame). Frame 0
// of scene 1 is s12's final frame, so s12's plates are preloaded too.
export const ASSETS: string[] = Array.from(new Set([...G01_PLATES.map(p => p.src), TANK.src, ...S12_ASSETS]));
