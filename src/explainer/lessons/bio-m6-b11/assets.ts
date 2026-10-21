/**
 * M6 B11 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 21 Oct from the real files in public/assets/biology/.
 * - New (brief 91): m6-infusion-bag-cells-v1.png (a clear infusion bag of pale cell suspension on a hook, tubing loop
 *   below; its contents read pale cream, so it is always labelled "edited cells returned") and m6-mosquito-cage-v1.png
 *   (a white mesh rearing cage with six mosquitoes inside).
 * - Reused: normal and sickle red cells (normal at the left, sickle at the right, a clean gap near natural x 1000),
 *   the Anopheles mosquito, the petri dish, the world map (sub-Saharan Africa sits near natural x 830 to 1185, y 1050
 *   to 1355), the brief 88 interphase cell (a blood-forming stem cell, drawn small), the slender-beaked finch and the
 *   frog (animals that eat mosquitoes), a healthy leaf (edited crops), the white rhino and the banana pair (the
 *   handoff chip only; the seedless Cavendish half is right of natural x 1055).
 * - Coded: the mechanism stage (b01's SlimStrand, a terracotta guide RNA, the Cas9 outline, amber nicks), the globin
 *   switch strip, the switch protein, haemoglobin dots, the 30-patient grid, bone, calendar and price glyphs, the
 *   evidence ladder, chromosome diagram panels, offspring markers, egg clusters, the population line, the border map,
 *   the three-question board, chips, cards and the countdown. No people and no body outlines.
 * - m6-hand-pollination-v1.png and m6-agricultural-liming-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];

export const PLATES = {
	sickle: mk('m6-red-cells-normal-sickle-v1.png', N2, [200, 597, 1800, 1403]),
	mosquito: mk('m5x-anopheles-mosquito-v1.png', N2, [293, 344, 1749, 1631]),
	dish: mk('b3a-petri-dish-v1.png', [1600, 800], [193, 100, 1408, 699]),
	map: mk('m8-world-map-v1.png', N2, [160, 504, 1840, 1495]),
	bag: mk('m6-infusion-bag-cells-v1.png', N2, [624, 29, 1465, 1934]),
	cage: mk('m6-mosquito-cage-v1.png', N2, [134, 153, 1869, 1850]),
	cell: mk('cd-interphase-v1.png', N2, [51, 56, 1958, 1867]),
	finch: mk('m6-finch-slender-beak-v1.png', N2, [160, 224, 1839, 1775]),
	frog: mk('common-frog-pond-b2-v1-alpha.png', [1856, 1344], [160, 184, 1696, 1174]),
	leaf: mk('m7-healthy-leaf-v1.png', N2, [201, 611, 1799, 1390]),
	rhino: mk('m6-northern-white-rhino-v1.png', N2, [160, 533, 1840, 1466]),
	banana: mk('m6-banana-wild-vs-cavendish-v1.png', N2, [211, 23, 1916, 1964]),
};
/** Natural x of the gap between normal and sickle cells; the banana pair's gap. */
export const SICKLE_SPLIT = 1000;
export const BANANA_SPLIT = 1055;
/** Sub-Saharan Africa on the world map (natural pixels), a soft outline. */
export const SSA: [number, number][] = [[850, 1070], [950, 1100], [1030, 1080], [1140, 1090], [1180, 1080], [1130, 1160], [1110, 1220], [1080, 1290], [1030, 1340], [1000, 1355], [970, 1250], [950, 1140], [860, 1100]];
export const ASSETS_B11: string[] = Object.values(PLATES).map(p => p.src);
