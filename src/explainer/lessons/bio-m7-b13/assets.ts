/**
 * M7 B13 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 28 Oct from the real files in public/assets/biology/.
 * - New (brief 106): the dengue virus (smooth flavivirus, cut away to the RNA) and the open household water jar with
 *   larvae at the surface.
 * - Reused: Aedes and Anopheles, the Plasmodium red cell, the flooded bucket, the Wolbachia cell, the vaccine vial,
 *   the mosquito cage and the insecticide sprayer.
 * - Never one scale: each plate has its own grey label; the virus carries "drawn far larger than real". Never stretched.
 * - Coded: the four-conditions bar, the South East Asia map (outline only), tanks, dot grids and serotype rings, rate
 *   bars, the weekly graph, cluster grid, clinic outline, before-and-after bars, thermometer, calendar strip, cards.
 *   No people, hands or faces anywhere.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});

export const PLATES = {
	virus: mk(B + 'm7-dengue-virus-v1.png', [254, 260, 1747, 1740]),
	jar: mk(B + 'm7-water-storage-jar-v1.png', [266, 257, 1734, 1747]),
	aedes: mk(B + 'm6-aedes-mosquito-v1.png', [158, 427, 1932, 1690]),
	anoph: mk(B + 'm5x-anopheles-mosquito-v1.png', [293, 344, 1749, 1631]),
	plasmo: mk(B + 'm7-plasmodium-red-cell-v1.png', [201, 334, 1799, 1667]),
	flooded: mk(B + 'm7-aedes-container-flooded-v1.png', [220, 239, 1780, 1760]),
	wolb: mk(B + 'm7-wolbachia-cell-v1.png', [226, 220, 1774, 1780]),
	vaccine: mk(B + 'm7-vaccine-vial-syringe-v1.png', [201, 439, 1799, 1560]),
	cage: mk(B + 'm6-mosquito-cage-v1.png', [134, 153, 1869, 1850]),
	sprayer: mk(B + 'm7-insecticide-sprayer-v1.png', [373, 220, 1627, 1780]),
};
/** b12's life-cycle wheel (scene 5) draws b12's bucket, larva and pupa plates, so their files ship too. */
import {PLATES as P12} from '../bio-m7-b12/assets';
export const ASSETS_M7B13: string[] = Array.from(new Set([...Object.values(PLATES), P12.dry, P12.larvaPupa].map(p => p.src)));
