/**
 * M6 B15 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 21 Oct from the real files in public/assets/biology/.
 * - New (brief 92): m6-maize-hybrid-rows-v1.png (tasselled pollen rows at the left, natural x 100 to 1000, tassels near
 *   y 100 to 600; detasselled seed rows with silks at the right, natural x 1000 to 1900, tops near y 620) and
 *   m6-tomato-flower-truss-v1.png (a tomato truss: yellow flowers, a bud and a green fruit; attempt 1 card only).
 * - Reused: the dairy bull (column head; "a dairy bull"), the dairy cow and calf (herd, Holstein and calf glyphs), the
 *   wheat ear and open floret (one plate: the ear is drawn alone by clipping to natural x 358 to 845, the floret by
 *   clipping to x 880 to 1615; anthers near (1037, 528), (1258, 365) and (1475, 495), stigma near (1265, 560)), the cow
 *   tract (anatomy diagram only: vaginal opening near natural (1975, 760), cervix rings near (1420, 755), uterus body
 *   near (1120, 745)), the frosted straw, the straw and dewar, the forceps (tip at the bottom), the cover bag, the
 *   paintbrush on a stigma, the brief 88 four cells (meiosis products), the world map, the Cavendish bunch and the
 *   tissue culture jars ("Next").
 * - Coded: the comparison board (column heads, row rail, chips), DNA strips and ticks, gamete ring sets, sperm glyphs, the
 *   sorting gate and straws, the collection vial and straw run, the clock ring and pollen dots, the insemination tube and
 *   dose dots, the "on heat" strip, the wind wisp and isolation outline, farm dots and dotted paths on the map, flower
 *   glyphs, the sire fan, half-sibling arcs and carrier rings, ring clusters, embryo circles, the model compare lines,
 *   step chips, the attempt cards and data table, answer boxes and the countdown. No people, no hands.
 * - m6-hand-pollination-v1.png and m6-agricultural-liming-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as B09} from '../bio-m6-b09/assets';
import {PLATES as B11} from '../bio-m6-b11/assets';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];
const COW: [number, number] = [2200, 1600];
const WHEAT: [number, number] = [1900, 1300];

export const PLATES = {
	bull: B09.bull,
	cow: mk('b3b-dairy-cow-side-v1.png', COW, [404, 460, 1796, 1360]),
	calf: mk('b3b-calf-side-v1.png', COW, [782, 910, 1418, 1360]),
	ear: mk('b3b-wheat-ear-floret-v1.png', WHEAT, [358, 147, 845, 1150]),
	floret: mk('b3b-wheat-ear-floret-v1.png', WHEAT, [880, 220, 1615, 1090]),
	tract: mk('b3b-cow-tract-v1.png', [2200, 1400], [221, 213, 1980, 1187]),
	strawFrost: mk('b3b-straw-frost-v1.png', [2200, 500], [220, 200, 1980, 299]),
	tank: B09.straw,
	forceps: mk('b3b-forceps-v1.png', [800, 1600], [308, 192, 492, 1408]),
	bag: mk('b3b-cover-bag-v1.png', [1400, 2000], [206, 202, 1194, 1798]),
	brush: B09.brush,
	cells4: mk('cd-four-cells-v1.png', N2, [29, 50, 1966, 1947]),
	maize: mk('m6-maize-hybrid-rows-v1.png', N2, [98, 80, 1908, 1849]),
	tomato: mk('m6-tomato-flower-truss-v1.png', N2, [74, 21, 1926, 1979]),
	map: B11.map,
	bunch: mk('b1-cavendish-bunch-v1.png', [1842, 1330], [430, 206, 1499, 1106]),
	jars: B09.jars,
};
/** Natural points on the plates. */
export const ANTHERS: [number, number][] = [[1037, 528], [1258, 365], [1475, 495]];
export const STIGMA: [number, number] = [1265, 560];
export const TRACT = {vagina: [1975, 760] as [number, number], cervix: [1420, 755] as [number, number], uterus: [1120, 745] as [number, number]};
/** Farm dots on the world map (natural pixels, on land) and the straw's origin. */
export const FARMS: [number, number][] = [[330, 820], [520, 840], [560, 1200], [480, 1330], [930, 830], [1010, 780], [900, 1300], [1380, 860], [1500, 950], [1420, 1290], [1500, 1330], [1700, 1440]];
export const ORIGIN: [number, number] = [430, 880];
export const ASSETS_B15: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
