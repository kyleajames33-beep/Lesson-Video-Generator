import {CHIP, CHIP_BAG, COOKIE, D02_PLATES, DESK, G03_PLATES, SPIN_BASE, SPIN_PTR, SUPER, TANK} from './parts';

// Plates: d02's coin jar, full twin and coin (scene 1, 12), the exam desk (2, 4, 12), the Physics house (3, 7), s05's
// van (4, 5, 7), s01's spinner (6, 7), s06's cookie and chip (6, 7), f13's statement (8, 9), s08's chip bag (7, 10),
// d15's skateboard and the Biology rainwater tank (12, the final frame).
export const ASSETS: string[] = [...G03_PLATES.map(p => p.src), DESK.src, TANK.src, D02_PLATES.jar.src, D02_PLATES.jarFull.src, D02_PLATES.coin.src, SPIN_BASE.src, SPIN_PTR.src, COOKIE.src, CHIP.src, SUPER.src];
