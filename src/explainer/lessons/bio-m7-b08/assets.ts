/**
 * M7 B08 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 27 Oct from the real files in public/assets/biology/.
 * - The airway cell triplet (healthy, infected, apoptotic; brief 103) shares ONE box. Healthy and infected align
 *   (50% overlay in docs/production/claude-pm/assets/brief103-qa/), so they crossfade in place. The apoptotic cell is
 *   shrunken and blebbed by design, so it never crossfades at 50%: parts.tsx `AirCell` brings it in on top first, then
 *   fades the old outline away (the cell is seen shrinking inside its old outline).
 * - `m7-t-cell-v1` (helper) and `m7-t-cell-killer-v1` (cytotoxic, granules at one side) share one box and align.
 *   In scene 9 the killer plate is also the NK cell, always with a teal ring, no receptor forks and its grey tag.
 * - Reused: airway lining, dendritic cell, lymph node, macrophage (b06); bare B cell, plasma cell (b07); virus particle.
 * - Coded: the display model (cups, pieces, receptor forks), the response strip and its T cell branch, the T clone
 *   trees, the vessel channel, pores and specks, the stress flag, the day axis, chips, attempt cards, countdown.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const AIR: Box = [647, 207, 1535, 1743];
const TC: Box = [204, 203, 1794, 1799];

export const PLATES = {
	airway: mk(B + 'm7-airway-cilia-mucus-v1.png', [241, 575, 1771, 1428]),
	cell: mk(B + 'm7-airway-cell-v1.png', AIR),
	infected: mk(B + 'm7-airway-cell-infected-v1.png', AIR),
	apoptotic: mk(B + 'm7-airway-cell-apoptotic-v1.png', AIR),
	helper: mk(B + 'm7-t-cell-v1.png', TC),
	killer: mk(B + 'm7-t-cell-killer-v1.png', TC),
	virus: mk(B + 'm7-virus-particle-v1.png', [200, 211, 1800, 1788]),
	dendritic: mk(B + 'm7-dendritic-cell-v1.png', [228, 268, 1776, 1731]),
	node: mk(B + 'm7-lymph-node-v1.png', [298, 219, 1775, 1772]),
	bare: mk(B + 'm7-b-cell-bare-v1.png', [201, 229, 1800, 1770]),
	plasma: mk(B + 'm7-plasma-cell-v1.png', [212, 411, 1789, 1610]),
	macrophage: mk(B + 'm7-macrophage-v1.png', [201, 356, 1799, 1644]),
	epi: {src: B + 'b5a-epithelium-shedding-v1.png', nat: [1800, 1222], box: [180, 122, 1620, 1100]} as PB,
	vesselCrop: mk(B + 'm7-dermis-splinter-inflamed-v1.png', [240, 1080, 1100, 1560]),
	digest: mk(B + 'm7-macrophage-engulf-digest-v1.png', [196, 479, 1821, 1521]),
};

/** Natural-pixel features (read off gridded plates and alpha scans, 27 Oct). */
export const FEAT = {
	/** Airway cell (shared box): body sides, the apical edge under the cilia, the base, the centre. */
	airL: 762, airR: 1262, airTop: 500, airBase: 1728, airC: [1010, 1100] as [number, number],
	/** Display cup sites on the airway cell rim: [u, v, outward angle in degrees]. */
	cups: [
		[762, 640, 180], [762, 860, 180], [762, 1080, 180], [764, 1300, 180], [766, 1500, 180],
		[1262, 640, 0], [1261, 860, 0], [1262, 1080, 0], [1260, 1300, 0], [1258, 1500, 0],
		[900, 1722, 90], [1100, 1726, 90],
	] as [number, number, number][],
	/** T cell (shared box): centre and rim radius; receptor fork sites by angle (degrees). */
	tC: [1000, 1000] as [number, number], tR: 745,
	forkAngles: [-90, -30, 30, 90, 150, 210],
	/** B cell (b07 box): centre and rim radius. */
	bC: [995, 1030] as [number, number], bR: 600,
	/** Dendritic cell: points along the long arms where pieces are displayed. */
	dArms: [[560, 520], [800, 380], [1240, 560], [1500, 860], [560, 1120], [880, 1480], [1340, 1360]] as [number, number][],
	/** Airway lining: one column cell (zoom source) and spots in the mucus. */
	liningCell: [1000, 1060] as [number, number],
	mucus: [[520, 640], [900, 660], [1300, 650], [1560, 660]] as [number, number][],
};

export const ASSETS_M7B08: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
