/**
 * M6 B13 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 21 Oct from the real files in public/assets/biology/.
 * - New (brief 92): m6-aedes-mosquito-v1.png (a male Aedes in side view: banded legs, lyre mark, feathery antennae;
 *   attempt 1 card only) and m6-wheat-local-varieties-v1.png (five wheat ears of different local varieties; attempt 2
 *   card only).
 * - Reused: Bt cotton (column head), the Helicoverpa larva in a boll (resistance, monitoring), the Anopheles mosquito
 *   (column head), the mosquito cage (lab cages only), the world map (risk across borders), the slender-beaked finch
 *   and the frog (animals that eat mosquitoes: the food-web fragment), the seed bank vault (attempt 2 feedback,
 *   "banked"), the straw and dewar and the paintbrush on a stigma ("Next" thumbnails).
 * - Coded: the weighing board (row labels and icons, plate-headed columns, chip cells, balances and condition weights),
 *   the pros-and-cons list, spray bars, the mini evidence ladder, the mini levels icon, mosquito glyphs, the native
 *   cotton flower outline, the refuge strip, the season field icon, return arrows, chromosome panels and offspring
 *   marks, the undo strip, ring clusters, pollen and the wild grass, check boxes, step chips, cards and the countdown.
 *   No people, no body outlines, no hands.
 * - m6-hand-pollination-v1.png and m6-agricultural-liming-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as B09} from '../bio-m6-b09/assets';
import {PLATES as B10} from '../bio-m6-b10/assets';
import {PLATES as B11} from '../bio-m6-b11/assets';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];

export const PLATES = {
	cotton: B09.cotton,
	larva: B10.larva,
	mosquito: B11.mosquito,
	cage: B11.cage,
	map: B11.map,
	finch: B11.finch,
	frog: B11.frog,
	aedes: mk('m6-aedes-mosquito-v1.png', N2, [158, 427, 1932, 1690]),
	wheat: mk('m6-wheat-local-varieties-v1.png', N2, [137, 138, 1884, 1849]),
	vault: mk('m6-seed-bank-vault-v1.png', N2, [201, 282, 1800, 1717]),
	straw: B09.straw,
	brush: B09.brush,
};
export const ASSETS_B13: string[] = Object.values(PLATES).map(p => p.src);
