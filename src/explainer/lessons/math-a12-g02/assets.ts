import {D02_PLATES, G02_PLATES, TOWN} from './parts';

// Plates: the Biology rainwater tank (scenes 1 to 4, 6, 8 to 10, 14), the exam desk (7), the calculator (11), the
// Physics motor boat (5, 8), f07's country town (7) and d02's coin jar with its full twin and coin (13, the final frame).
export const ASSETS: string[] = [...G02_PLATES.map(p => p.src), TOWN.src, D02_PLATES.jar.src, D02_PLATES.jarFull.src, D02_PLATES.coin.src];
