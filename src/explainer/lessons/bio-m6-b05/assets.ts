/**
 * M6 B05 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files in public/assets/biology/.
 * - New (brief 88): m6-fly-eye-white-patch-v1.png overlays m5x-fly-red-eye-v1.png exactly (same 2000 x 2000 canvas,
 *   same alpha box [445, 394, 1560, 1619]; only one eye differs).
 * - Reused: UV on skin and the red-eye fly (B01), the egg and sperm dish (B04), the melanoma skin block (M8, used small
 *   beside the UV plate as the design says), B3a's sperm and egg, B2c's milk glass.
 * - Coded: the cell lineage tree, slim strands and the gene map (regions, polymerase, mRNA, protein and amount bar),
 *   the two by two grid, chips, cards and the countdown. No people: the 2013 case is text only.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as B01} from '../bio-m6-b01/assets';
import {PLATES as B04} from '../bio-m6-b04/assets';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];

export const PLATES = {
	uvSkin: B01.uvSkin,
	flyRed: B01.flyRed,
	dish: B04.dish,
	flyPatch: mk('m6-fly-eye-white-patch-v1.png', N2, [445, 394, 1560, 1619]),
	melanoma: mk('m8-skin-melanoma-v1.png', N2, [160, 227, 1840, 1773]),
	sperm: mk('b3a-sperm-v1.png', [2200, 1600], [264, 640, 1936, 958]),
	egg: mk('b3a-egg-v1.png', N2, [240, 252, 1759, 1748]),
	milk: mk('b2c-milk-glass-bench-v1.png', [1800, 1200], [493, 228, 1346, 984]),
};
if (PLATES.flyPatch.box.join() !== PLATES.flyRed.box.join()) throw new Error('White-patch fly plate must overlay the red-eye fly exactly');
export const ASSETS_B05: string[] = Object.values(PLATES).map(p => p.src);
