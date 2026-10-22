/**
 * M6 B19 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 22 Oct from the real files in public/assets/biology/.
 * - New (brief 97): the papaya pair (healthy and ringspot; drawn with one shared box, the union of both alpha boxes,
 *   so the crossfade keeps the trunk in place), the growth hormone vial (white powder), the cheese wheel and the
 *   washing machine. Requested by b18 and delivered with brief 96: the fermenter tank.
 * - Reused: insulin vial, the injected egg (the only image of the 2018 case; no people), bacterium with plasmid,
 *   pancreas, dairy calf (small, "calf rennet"), Bt cotton, the monoculture and mixed field pair (split near natural
 *   x 1000: monoculture left, mixed right), budding yeast, vaccine vial and syringe, and the g02 handoff thumbnails
 *   (maize rows, white sheep).
 * - Coded: the benefit board and mini board, strength dots, test icons, tree icons, viral and plant strips, harvest
 *   bars, insulin bead strips, trial bars, supply lines, enzyme glyphs, the sealed tank outline, field arrows, insect
 *   and pollen glyphs, the levels and spray-bar thumbnails, the refuge strip, attempt cards and the countdown.
 *   No people, no hands, no faces.
 * - m6-hand-pollination-v1.png and m6-agricultural-liming-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];
const PAPAYA: [number, number, number, number] = [328, 236, 1685, 1745];

export const PLATES = {
	vial: mk('m6-insulin-vial-v1.png', N2, [648, 200, 1350, 1800]),
	icsi: mk('m6-icsi-v1.png', N2, [200, 594, 1800, 1405]),
	bactP: mk('m6-bacterium-plasmid-v1.png', N2, [200, 551, 1800, 1448]),
	pancreas: mk('m8-pancreas-v1.png', N2, [160, 574, 1840, 1424]),
	calf: mk('m6-dairy-calf-horn-buds-v1.png', N2, [115, 210, 1953, 1794]),
	cotton: mk('m6-bt-cotton-v1.png', N2, [273, 200, 1726, 1800]),
	field: mk('m6-field-monoculture-mixed-v1.png', N2, [200, 709, 1800, 1291]),
	yeast: mk('y11-budding-yeast-v1.png', [1374, 1145], [252, 253, 1138, 914]),
	vaccine: mk('m7-vaccine-vial-syringe-v1.png', N2, [201, 439, 1799, 1560]),
	maize: mk('m6-maize-hybrid-rows-v1.png', N2, [98, 80, 1908, 1849]),
	sheep: mk('m6-white-sheep-v1.png', N2, [200, 351, 1800, 1649]),
	fermenter: mk('m6-fermenter-tank-v1.png', N2, [616, 267, 1415, 1658]),
	papayaOk: mk('m6-papaya-healthy-v1.png', N2, PAPAYA),
	papayaSick: mk('m6-papaya-ringspot-v1.png', N2, PAPAYA),
	hormone: mk('m6-growth-hormone-vial-v1.png', N2, [730, 320, 1293, 1584]),
	cheese: mk('m6-cheese-wheel-v1.png', N2, [409, 603, 1623, 1383]),
	washer: mk('m6-washing-machine-v1.png', N2, [486, 318, 1607, 1690]),
};
/** Natural x of the split between the monoculture (left) and mixed (right) halves of the field plate. */
export const FIELD_SPLIT = 1000;
export const ASSETS_B19: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
