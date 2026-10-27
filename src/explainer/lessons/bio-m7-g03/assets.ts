/**
 * M7 G03 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 27 Oct from the real files in public/assets/biology/.
 * - New (brief 104): the grey-headed flying fox (alone, hanging from a branch stub; no person).
 * - Reused: the secateurs and the wound bacterium (Q1 card), b06 to b08's cell plates as strip thumbnails at their
 *   b06 to b08 sizes, the bare B cell (Q2 cell field), the vaccine vial (Q2 card, Q3 quadrant), the sink ("Next").
 * - `skinTop` is a box crop of the skin splinter plate to the right of the splinter (skin surface only; the splinter is
 *   outside the box). Draw it with PlateB and an id so the box clips. Never stretched.
 * - Coded: event cards and letter badges, the response strip (b06), the log-scale antibody graph and reading guides,
 *   the cell field layout, the immunity table (b09), the two-curve sketch, chips, answer boxes, countdown.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as P8} from '../bio-m7-b08/assets';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});

export const PLATES = {
	secateurs: mk(B + 'm7-pruning-secateurs-v1.png', [253, 441, 1746, 1570]),
	bact: mk(B + 'm7-wound-bacterium-v1.png', [203, 671, 1799, 1318]),
	skinTop: mk(B + 'm7-skin-splinter-v1.png', [1200, 440, 1740, 1000]),
	mast: mk(B + 'm7-mast-cell-v1.png', [200, 244, 1799, 1756]),
	neutrophil: mk(B + 'm7-neutrophil-v1.png', [201, 220, 1799, 1780]),
	dendritic: mk(B + 'm7-dendritic-cell-v1.png', [228, 268, 1776, 1731]),
	node: mk(B + 'm7-lymph-node-v1.png', [298, 219, 1775, 1772]),
	bcell: mk(B + 'm7-b-cell-v1.png', [201, 229, 1800, 1770]),
	bare: mk(B + 'm7-b-cell-bare-v1.png', [201, 229, 1800, 1770]),
	tcell: mk(B + 'm7-t-cell-v1.png', [204, 203, 1794, 1799]),
	plasma: mk(B + 'm7-plasma-cell-v1.png', [212, 411, 1789, 1610]),
	vial: mk(B + 'm7-vaccine-vial-syringe-v1.png', [201, 439, 1799, 1560]),
	sink: mk(B + 'm7-handwashing-sink-v1.png', [200, 345, 1799, 1655]),
	flyfox: mk(B + 'm7-flying-fox-v1.png', [615, 200, 1384, 1799]),
	epi: P8.epi,
	vesselCrop: P8.vesselCrop,
	digest: P8.digest,
};
const BARE_CELL = 1284, BC_W = 1599, PLASMA_CELL = 1577;
/** Box width for the plasma plate so its painted cell is 1.5 x a bare B cell drawn with box width `bareW` (as b07). */
export const plasmaW = (bareW: number) => ((1.5 * (BARE_CELL / BC_W) * bareW) / PLASMA_CELL) * (1789 - 212);

export const ASSETS_M7G03: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
