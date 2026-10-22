/**
 * M7 B04 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files in public/assets/.
 * - New (brief 100): the myrtle leaf pair (healthy partner aligned to the rust leaf; one shared box so the crossfade
 *   keeps the outline in place), the cattle hoof pair (one shared box), the stock truck, nursery pots, lemon myrtle
 *   rows, the closed farm gate and the reefer shipping container. Brief 99: root-knot galls, crown gall, TMV.
 * - Reused: the wheat rust leaf plate (two leaves; clipped by box to the healthy or the rusted leaf, never stretched),
 *   the wheat ear (clipped to the ear; the open floret is outside the box), hyphae, the monoculture and mixed field,
 *   the TR4 banana row, the red cattle and the white sheep, and B05's re-matted banksia (handoff thumbnail).
 * - Coded: the Australia outline and spread dots, the gate line and side labels, the cause strip and water film, the
 *   hop paths, the xylem line in the gall, the culled-animal dot grid (plain dots), cost bars, the export split bar,
 *   chips, attempt cards, countdown. No people, hands, faces or farmers.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const N19: [number, number] = [1900, 1300];
const mk = (src: string, box: Box, nat: [number, number] = N2): PB => ({src, nat, box});
const LEAF: Box = [200, 487, 1800, 1513];
const HOOF: Box = [513, 200, 1487, 1800];

export const PLATES = {
	leafOk: mk(B + 'm7-myrtle-leaf-healthy-v1.png', LEAF),
	leafRust: mk(B + 'm7-myrtle-rust-leaf-v1.png', LEAF),
	/** The pustule cluster on the rust leaf (cause-strip crop). */
	pustules: mk(B + 'm7-myrtle-rust-leaf-v1.png', [960, 640, 1440, 1000]),
	wheat: mk(B + 'b3b-wheat-rust-leaf-v1.png', [606, 167, 1402, 1132], N19),
	/** Clip boxes on the same plate: the healthy left leaf and the rusted right leaf. Draw with PlateB and an id. */
	wheatOk: mk(B + 'b3b-wheat-rust-leaf-v1.png', [606, 167, 960, 1132], N19),
	wheatSick: mk(B + 'b3b-wheat-rust-leaf-v1.png', [1040, 167, 1402, 1132], N19),
	/** The wheat ear only (left part of the plate). Draw with PlateB and an id. */
	ear: mk(B + 'b3b-wheat-ear-floret-v1.png', [358, 147, 860, 1150], N19),
	galls: mk(B + 'm7-root-knot-galls-v1.png', [257, 223, 1744, 1775]),
	crownGall: mk(B + 'm7-crown-gall-stem-v1.png', [427, 220, 1572, 1777]),
	tmv: mk(B + 'm7-tmv-particle-v1.png', [222, 950, 1778, 1049]),
	hyphae: mk(B + 'm7-fungal-hyphae-v1.png', [201, 481, 1800, 1518]),
	field: mk(B + 'm6-field-monoculture-mixed-v1.png', [200, 709, 1800, 1291]),
	banana: mk(B + 'b1-banana-plantation-tr4-v1.png', [246, 267, 2081, 912], [2330, 1197]),
	cattle: mk(B + 'm5x-cattle-red-v1.png', [221, 388, 1776, 1630]),
	sheep: mk(B + 'm6-white-sheep-v1.png', [200, 351, 1800, 1649]),
	hoofOk: mk(B + 'm7-cattle-hoof-healthy-v1.png', HOOF),
	hoofSick: mk(B + 'm7-fmd-hoof-blisters-v1.png', HOOF),
	truck: mk(B + 'm7-stock-truck-v1.png', [200, 489, 1799, 1512]),
	pots: mk(B + 'm7-nursery-pots-v1.png', [200, 302, 1800, 1698]),
	rows: mk(B + 'm7-lemon-myrtle-rows-v1.png', [200, 484, 1799, 1516]),
	gate: mk(B + 'm7-farm-gate-closed-v1.png', [200, 419, 1799, 1581]),
	container: mk(B + 'm7-shipping-container-v1.png', [200, 482, 1800, 1517]),
	banksia: mk(B + 'm7-banksia-phytophthora-v2.png', [362, 200, 1606, 1800]),
};
/** Natural-pixel features (read off gridded zoom crops, 23 Oct). */
export const FEAT = {
	/** Myrtle rust leaf: centre of the densest pustule cluster. */
	rust: [1180, 830] as [number, number],
	/** Wheat plate: pustules on the rusted right leaf. */
	wheatRust: [1230, 600] as [number, number],
	/** Galls: one spindle gall on a root, and a path along that root through it (the xylem line). */
	gall: [1150, 1075] as [number, number],
	xylem: [[1020, 880], [1065, 945], [1110, 1005], [1160, 1080], [1200, 1150], [1235, 1225], [1262, 1300]] as [number, number][],
	/** Field plate: plant heads along the front of the uniform rows, and two plants in the mixed planting. */
	rowHeads: [[262, 905], [362, 900], [462, 902], [562, 898], [662, 900], [762, 902], [862, 900], [950, 905]] as [number, number][],
	mixHeads: [[1080, 930], [1190, 900], [1300, 905]] as [number, number][],
	/** Hoof: blisters in the interdigital space and along the coronary band. */
	blisters: [1000, 1150] as [number, number],
	/** Container: the door end (for the closed bar). */
	doors: [[1520, 900], [1790, 900]] as [number, number][],
};
export const ASSETS_M7B04: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
