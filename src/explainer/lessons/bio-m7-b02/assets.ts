/**
 * M7 B02 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files in public/assets/.
 * - New (brief 99): the swan-neck flask set (intact clear, broken clear, broken cloudy), the straight-neck pair (clear,
 *   cloudy; same bulb), the TB-stained and healthy tissue fields, the serum slope tube, the guinea pig pair.
 * - Aligned sets are drawn with one shared box (the union of their alpha boxes), so crossfades change only the stated
 *   feature: all five flasks share FLASK (the intact swan neck's box), the two fields share FIELD, the guinea pigs GP.
 * - Reused: microscope, inoculating loop (no hand), virus particle, the generic animal cell, an empty agar dish, the
 *   Bunsen burner (chemistry folder), Merino sheep, koala, mosquito (next-video thumbnail), and b01's TB bacilli.
 * - Coded: the evidence bench (two-question banner, bays, Koch's four step bays), air arrows, dust specks, steam wisps,
 *   growth insets, the haze, host circles (b01), StepCheck ticks and gaps, DNA strips, attempt cards, countdown.
 *   No people, no hands, no faces. Hosts that would be people are coded host circles only.
 * - m6-hand-pollination-v1.png and m6-agricultural-liming-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const mk = (src: string, nat: [number, number], box: Box): PB => ({src, nat, box});
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const FLASK: Box = [230, 226, 1769, 1775];
const FIELD: Box = [224, 242, 1776, 1758];
const GP: Box = [225, 556, 1773, 1445];

export const PLATES = {
	swan: mk(B + 'm7-swan-neck-flask-clear-v1.png', N2, FLASK),
	brokenClear: mk(B + 'm7-swan-neck-flask-broken-clear-v1.png', N2, FLASK),
	brokenCloudy: mk(B + 'm7-swan-neck-flask-broken-cloudy-v1.png', N2, FLASK),
	straightClear: mk(B + 'm7-straight-neck-flask-clear-v1.png', N2, FLASK),
	straightCloudy: mk(B + 'm7-straight-neck-flask-cloudy-v1.png', N2, FLASK),
	tbField: mk(B + 'm7-tb-stained-field-v1.png', N2, FIELD),
	healthyField: mk(B + 'm7-healthy-tissue-field-v1.png', N2, FIELD),
	serum: mk(B + 'm7-serum-slope-tube-v1.png', N2, [860, 224, 1138, 1777]),
	gp: mk(B + 'm7-guinea-pig-v1.png', N2, GP),
	gpSick: mk(B + 'm7-guinea-pig-unwell-v1.png', N2, GP),
	microscope: mk(B + 'm7-microscope-v1.png', N2, [509, 200, 1492, 1799]),
	loop: mk(B + 'm7-inoculating-loop-v1.png', N2, [200, 504, 1800, 1496]),
	virus: mk(B + 'm7-virus-particle-v1.png', N2, [200, 211, 1800, 1788]),
	cell: mk(B + 'm5x-cell-protein-synthesis-v1.png', N2, [279, 265, 1738, 1700]),
	agar: mk(B + 'm6-agar-dish-top-v1.png', N2, [200, 215, 1799, 1784]),
	bunsen: mk('assets/chemistry/m5x-bunsen-burner-v1.png', N2, [687, 242, 1313, 1733]),
	sheep: mk(B + 'b3b-merino-sheep-side-v1.png', [2200, 1600], [549, 560, 1651, 1360]),
	koala: mk(B + 'm5x-koala-v1.png', N2, [235, 219, 1771, 1775]),
	mosquito: mk(B + 'm7-mosquito-vector-v1.png', N2, [200, 522, 1800, 1478]),
	tb: mk(B + 'm7-tb-bacilli-v1.png', N2, [223, 469, 1777, 1530]),
};
/** Flask geometry in natural pixels (traced from the alpha channel, 23 Oct). */
export const FLK = {
	bulb: [588, 1563] as [number, number],
	surface: 1469,
	tip: [1750, 1105] as [number, number],
	low: [1300, 1327] as [number, number],
	stubTop: [592, 860] as [number, number],
	straightTop: [588, 920] as [number, number],
	/** Centre line of the swan neck, bulb to open tip. */
	neck: [[589, 1100], [589, 450], [600, 330], [650, 268], [740, 262], [840, 300], [932, 380], [1000, 587], [1040, 760], [1080, 950], [1120, 1113], [1160, 1229], [1200, 1291], [1240, 1318], [1300, 1327], [1360, 1312], [1400, 1267], [1440, 1210], [1480, 1147], [1520, 1110], [1600, 1105], [1750, 1105]] as [number, number][],
};
/** Rod clusters in the TB field (blue-pixel density, natural pixels) and the serum colonies. */
export const RODS: [number, number][] = [[900, 900], [1500, 1300], [1300, 700]];
export const COLONIES: [number, number] = [1000, 1360];
export const ASSETS_M7B02: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
