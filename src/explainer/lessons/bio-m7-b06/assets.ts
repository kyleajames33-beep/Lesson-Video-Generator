/**
 * M7 B06 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files in public/assets/biology/.
 * - Aligned sets share ONE box (the union of their alpha boxes) so a crossfade or a masked reveal stays in place:
 *   the starfish larva pair, the skin and splinter pair, the dermis triplet (early, inflamed, contained) and the four
 *   phagocytosis states (`m7-macrophage-engulf-before-v1` is the alignment master; `after-v2` replaces the unaligned
 *   `after-v1`, which is never used).
 * - Engulf transitions (design Revision 3): before to wrap and after to digest are short (about 6 frames) crossfades
 *   (the rod is in the same place in both plates); wrap to after is ALWAYS masked (parts.tsx `Engulf`), so the old rod
 *   has faded out completely before the new rod fades in. The rod never appears twice.
 * - `m7-wound-bacterium-v1` is for b07 (not on this board).
 * - Coded: the response strip, vessel channel, gradient rings, specks, droplets and protein dots, arrows and dotted
 *   paths, set-point gauge, step counter, zoom box, chips, attempt cards, countdown. No people, hands or faces.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const LARVA: Box = [252, 219, 1751, 1784];
const SKIN: Box = [203, 270, 1742, 1666];
const DERMIS: Box = [230, 217, 1775, 1765];
const ENGULF: Box = [196, 479, 1821, 1521];

export const PLATES = {
	larva: mk(B + 'm7-starfish-larva-thorn-v1.png', LARVA),
	larvaCells: mk(B + 'm7-starfish-larva-thorn-cells-v1.png', LARVA),
	airway: mk(B + 'm7-airway-cilia-mucus-v1.png', [241, 575, 1771, 1428]),
	epi: {src: B + 'b5a-epithelium-shedding-v1.png', nat: [1800, 1222], box: [180, 122, 1620, 1100]} as PB,
	skin: mk(B + 'm7-skin-splinter-v1.png', SKIN),
	skinHot: mk(B + 'm7-skin-splinter-inflamed-v1.png', SKIN),
	early: mk(B + 'm7-dermis-splinter-early-v1.png', DERMIS),
	inflamed: mk(B + 'm7-dermis-splinter-inflamed-v1.png', DERMIS),
	contained: mk(B + 'm7-dermis-splinter-contained-v1.png', DERMIS),
	before: mk(B + 'm7-macrophage-engulf-before-v1.png', ENGULF),
	wrap: mk(B + 'm7-macrophage-engulf-wrap-v1.png', ENGULF),
	after: mk(B + 'm7-macrophage-engulf-after-v2.png', ENGULF),
	digest: mk(B + 'm7-macrophage-engulf-digest-v1.png', ENGULF),
	dendritic: mk(B + 'm7-dendritic-cell-v1.png', [228, 268, 1776, 1731]),
	node: mk(B + 'm7-lymph-node-v1.png', [298, 219, 1775, 1772]),
	neutrophil: mk(B + 'm7-neutrophil-v1.png', [201, 220, 1799, 1780]),
	macrophage: mk(B + 'm7-macrophage-v1.png', [201, 356, 1799, 1644]),
	mast: mk(B + 'm7-mast-cell-v1.png', [200, 244, 1799, 1756]),
	tcell: mk(B + 'm7-t-cell-v1.png', [204, 203, 1794, 1799]),
	rootDef: mk(B + 'm7-root-cells-defended-v1.png', [201, 475, 1800, 1525]),
	/** Crops (by box, never stretched) used as rung thumbnails. */
	vesselCrop: mk(B + 'm7-dermis-splinter-inflamed-v1.png', [240, 1080, 1100, 1560]),
	dendCrop: mk(B + 'm7-dendritic-cell-v1.png', [700, 700, 1340, 1300]),
};

/** Natural-pixel features (read off gridded plates, 23 Oct). */
export const FEAT = {
	/** Starfish larva: the thorn tip, and the cluster of wandering cells around it (cells plate). */
	thornTip: [1240, 1330] as [number, number],
	cluster: [1190, 1320] as [number, number],
	/** Epithelium: the lifting flakes (top right) and the surface line. */
	flakes: [[1170, 414], [1404, 234], [880, 330]] as [number, number][],
	/** Airway: trapped particles in the mucus, the mucus top (x range at y), cilia tips. */
	trapped: [[660, 640], [1460, 670], [800, 625], [1250, 670]] as [number, number][],
	mucusTop: 600,
	mucusX: [300, 1700] as [number, number],
	/** Skin block: where the splinter crosses the surface, the tip, the reddened zone, the raised surface. */
	entry: [470, 520] as [number, number],
	breach: [[430, 470], [560, 560], [700, 690]] as [number, number][],
	tip: [1110, 1000] as [number, number],
	red: [820, 720] as [number, number],
	raised: [760, 470] as [number, number],
	/** Dermis close-up (shared triplet box): bacteria, splinter tip, torn cells, mast cell, macrophage, vessel. */
	bact: [1150, 660] as [number, number],
	dTip: [980, 790] as [number, number],
	torn: [[790, 560], [830, 800], [1270, 520]] as [number, number][],
	mastC: [690, 1010] as [number, number],
	macroC: [1480, 1060] as [number, number],
	/** The small vessel's centre line, left to right (inflamed plate). */
	vessel: [[300, 1240], [700, 1330], [1100, 1420], [1500, 1500], [1740, 1540]] as [number, number][],
	/** Inflamed plate: neutrophil stuck inside the wall, one half through it, two in the tissue. */
	nStick: [660, 1250] as [number, number],
	nSqueeze: [1060, 1300] as [number, number],
	nTissue: [[1360, 620], [1300, 840]] as [number, number][],
	/** Contained plate: dead neutrophils (pus) and the few free rods left. */
	pus: [1080, 930] as [number, number],
	freeRods: [[1100, 670], [1220, 660]] as [number, number][],
	/** Engulf set (shared box): contact point of arm and rod (before), the rod inside (after), lysosomes (digest). */
	contact: [1490, 920] as [number, number],
	rodOut: [1600, 890] as [number, number],
	rodIn: [1405, 995] as [number, number],
	/** Dendritic cell: the rod at the end of one arm; the cell body. */
	dRod: [1650, 430] as [number, number],
	dBody: [1010, 1000] as [number, number],
	/** Lymph node: centre, a follicle, the entering lymph vessels' ends. */
	nodeC: [1030, 1000] as [number, number],
	nodeIn: [[330, 400], [560, 250]] as [number, number][],
};

/** Soft-mask regions on the dermis triplet (natural pixels; even-odd so ellipses inside a polygon are holes). */
const ell = (cx: number, cy: number, rx: number, ry: number) => `M${cx - rx},${cy} A${rx},${ry} 0 1 0 ${cx + rx},${cy} A${rx},${ry} 0 1 0 ${cx - rx},${cy} Z`;
const NEUT_HOLES = ell(660, 1250, 120, 80) + ' ' + ell(1060, 1300, 95, 125) + ' ' + ell(1360, 630, 115, 95) + ' ' + ell(1300, 845, 100, 105);
export const MASKS = {
	mast: ell(770, 1030, 230, 160),
	vessel: 'M230,1110 L1000,1250 L1780,1360 L1780,1690 L1000,1540 L230,1380 Z ' + ell(660, 1250, 120, 80) + ' ' + ell(1060, 1300, 95, 125),
	fluid: 'M220,210 L1785,210 L1785,1775 L220,1775 Z ' + NEUT_HOLES,
	nStick: ell(660, 1250, 120, 80),
	nSqueeze: ell(1060, 1300, 95, 125),
	nTissue: ell(1360, 630, 115, 95) + ' ' + ell(1300, 845, 100, 105),
	/** The new rod inside the phagosome (after-v2), with its surface threads. */
	rodIn: ell(1405, 995, 178, 128),
};

export const ASSETS_M7B06: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
