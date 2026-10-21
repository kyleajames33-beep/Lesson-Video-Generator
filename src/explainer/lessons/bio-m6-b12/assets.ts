/**
 * M6 B12 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 21 Oct from the real files in public/assets/biology/.
 * - New (brief 91): m6-banana-wild-vs-cavendish-v1.png (a seeded wild banana half at the left, a seedless Cavendish
 *   half at the right, a clean gap at natural x 960 to 1150; drawn as two halves split at BANANA_SPLIT) and
 *   m6-chestnut-burr-leaf-v1.png (a chestnut leaf and an open spiny burr with nuts).
 * - Reused: the TR4 banana plantation (two healthy plants among wilting ones), the varied seedlings, the strawberry
 *   clone row (scene 9 only, never called bananas), the monoculture and mixed field (monoculture half left of natural
 *   x 1000), Bt cotton, the white rhino (generic plate; labelled "Najin and Fatu" as a group and, tinted, "southern
 *   white rhino (surrogate)"), the ICSI egg, the straw and dewar ("banked sperm", "frozen cells"), the dairy bull
 *   ("one top sire"), the bee, the slender-beaked finch, the snapdragon and the desert lizard (species icons), a
 *   strawberry flower (wildflowers among the crop), the brief 88 interphase cell (banked skin cells, drawn small) and
 *   the egg and sperm dish (gametes made from stem cells).
 * - Coded: the levels board (row labels and zoom icons, case columns, baseline chips, arrow and "?" cells), allele
 *   rings (b08's shape-marked kinds), the baseline split's fields and spray, the landscape strip, embryo circles, the
 *   bottleneck outline, the yield chip, the attempt panels, step chips, cards and the countdown. No people.
 * - m6-hand-pollination-v1.png and m6-agricultural-liming-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as B09} from '../bio-m6-b09/assets';
import {PLATES as B10} from '../bio-m6-b10/assets';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];

export const PLATES = {
	plantation: mk('b1-banana-plantation-tr4-v1.png', [2330, 1197], [246, 267, 2081, 912]),
	banana: mk('m6-banana-wild-vs-cavendish-v1.png', N2, [211, 23, 1916, 1964]),
	seedlings: mk('b1-varied-seedlings-v1.png', [1900, 986], [213, 258, 1726, 756]),
	clones: mk('b1-clone-row-disease-v1.png', [2172, 724], [234, 147, 1923, 590]),
	field: B10.field,
	cotton: B09.cotton,
	rhino: mk('m6-northern-white-rhino-v1.png', N2, [160, 533, 1840, 1466]),
	icsi: mk('m6-icsi-v1.png', N2, [200, 594, 1800, 1405]),
	straw: B09.straw,
	bull: B09.bull,
	chestnut: mk('m6-chestnut-burr-leaf-v1.png', N2, [234, 57, 1951, 1906]),
	bee: mk('b2b-bee-flying-v1.png', [1600, 1600], [198, 318, 1408, 1284]),
	finch: mk('m6-finch-slender-beak-v1.png', N2, [160, 224, 1839, 1775]),
	snap: mk('m5x-snapdragon-pink-v1.png', N2, [599, 215, 1411, 1785]),
	lizard: mk('b2-desert-lizard-v1.png', [1856, 1344], [223, 301, 1652, 1049]),
	flower: mk('strawberry-flower-botanical-b1-v1-alpha.png', [1254, 1254], [29, 27, 1224, 1241]),
	cell: mk('cd-interphase-empty-v1.png', N2, [51, 56, 1958, 1867]),
	eggdish: mk('m6-egg-sperm-dish-v1.png', N2, [201, 302, 1800, 1697]),
};
/** The banana pair's gap (natural x); the field plate's split between monoculture and mixed planting. */
export const BANANA_SPLIT = 1055;
export const FIELD_SPLIT = 1000;
export const ASSETS_B12: string[] = Object.values(PLATES).map(p => p.src);
