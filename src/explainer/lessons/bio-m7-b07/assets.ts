/**
 * M7 B07 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files in public/assets/biology/.
 * - The B cell set shares ONE box (`m7-b-cell-v1`, the alignment master): the painted cell with receptors, the bare
 *   cell (receptors removed) and the dividing cell. Crossfades between them stay in place, and the coded receptors
 *   sit exactly where the painted ones were (FEAT.receptors).
 * - `m7-b-cell-bare-v1`'s painted cell is 1284 natural px wide inside the shared 1599 px box. Copies are always laid
 *   out with clear gaps (never tiled edge to edge).
 * - Plasma cell scale (design Revision 3): the plasma cell plate is scaled UNIFORMLY so its painted outline reads 1.5
 *   times the bare B cell's painted width (about 12 um against 8 um). Use `plasmaW(bareBoxW)`; never stretch it.
 * - From b06's brief: the wound bacterium, lymph node, dendritic cell and the inflamed close-up (thumbnail).
 * - Coded: the receptor and antigen shape model, the response strip and its five chips, the gene shuffle bars, the
 *   clone tree, the host membrane edge, the day axis, arrows, chips, attempt cards, countdown. No people, no tubes.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const BC: Box = [201, 229, 1800, 1770];

export const PLATES = {
	bact: mk(B + 'm7-wound-bacterium-v1.png', [203, 671, 1799, 1318]),
	bcell: mk(B + 'm7-b-cell-v1.png', BC),
	bare: mk(B + 'm7-b-cell-bare-v1.png', BC),
	dividing: mk(B + 'm7-b-cell-dividing-v1.png', BC),
	plasma: mk(B + 'm7-plasma-cell-v1.png', [212, 411, 1789, 1610]),
	antibody: mk(B + 'm7-antibody-v1.png', [200, 261, 1799, 1739]),
	tcell: mk(B + 'm7-t-cell-v1.png', [204, 203, 1794, 1799]),
	macrophage: mk(B + 'm7-macrophage-v1.png', [201, 356, 1799, 1644]),
	node: mk(B + 'm7-lymph-node-v1.png', [298, 219, 1775, 1772]),
	dendritic: mk(B + 'm7-dendritic-cell-v1.png', [228, 268, 1776, 1731]),
	inflamed: mk(B + 'm7-dermis-splinter-inflamed-v1.png', [230, 217, 1775, 1765]),
	rodCoccus: mk(B + 'm7-bacterium-rod-coccus-v1.png', [201, 544, 1800, 1456]),
	/** The coccus alone (a box crop of the rod and coccus plate, used with a circular clip; never stretched). */
	coccus: mk(B + 'm7-bacterium-rod-coccus-v1.png', [1276, 970, 1784, 1460]),
	epi: {src: B + 'b5a-epithelium-shedding-v1.png', nat: [1800, 1222], box: [180, 122, 1620, 1100]} as PB,
	vesselCrop: mk(B + 'm7-dermis-splinter-inflamed-v1.png', [240, 1080, 1100, 1560]),
	digest: mk(B + 'm7-macrophage-engulf-digest-v1.png', [196, 479, 1821, 1521]),
};
/** Painted widths (natural px) inside each box: the bare B cell and the plasma cell outlines. */
export const BARE_CELL_W = 1284;
export const PLASMA_CELL_W = 1577;
/** Box width for the plasma plate so its painted cell is 1.5 x the bare cell drawn with box width `bareW`. */
export const plasmaW = (bareW: number) => {
	const bareCell = (BARE_CELL_W / (BC[2] - BC[0])) * bareW;
	return ((1.5 * bareCell) / PLASMA_CELL_W) * (PLATES.plasma.box[2] - PLATES.plasma.box[0]);
};

/** Natural-pixel features (read off gridded plates, 23 Oct). */
export const FEAT = {
	/** B cell (shared box): centre, membrane radius, and the bases of the eight painted receptors. */
	bcC: [995, 1030] as [number, number],
	bcR: 590,
	receptors: [[680, 540], [1120, 470], [1460, 700], [440, 850], [1590, 1100], [460, 1250], [730, 1550], [1420, 1480]] as [number, number][],
	/** Wound bacterium: antigen patch sites on the outline (top row, bottom row, the two ends), outward angles. */
	patches: [
		[480, 806, -90], [760, 796, -90], [1040, 796, -90], [1320, 798, -90], [1580, 814, -90],
		[480, 1182, 90], [760, 1192, 90], [1040, 1192, 90], [1320, 1190, 90], [1580, 1178, 90],
		[322, 995, 180], [1686, 995, 0],
	] as [number, number, number][],
	/** Antibody plate: the two arm tips (binding sites), their outward angles (degrees), the stem. */
	tips: [[260, 560, -150], [1740, 500, -32]] as [number, number, number][],
	stem: [1010, 1390] as [number, number],
	/** Plasma cell: the stacked rough ER. */
	rer: [1300, 1000] as [number, number],
	/** Lymph node: follicles in the outer layer, the entering lymph vessels' far ends. */
	follicles: [[1130, 460], [680, 860], [580, 1320], [1500, 560], [880, 640]] as [number, number][],
	nodeIn: [[330, 400], [560, 250]] as [number, number][],
	nodeC: [1030, 1000] as [number, number],
};

export const ASSETS_M7B07: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
