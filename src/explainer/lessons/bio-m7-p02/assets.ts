/**
 * M7 P02 (Biology practical: microbial testing of water) plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files in public/assets/.
 * - New (brief 100): the three sample bottles, the dilution rack (creek bottle and four capped tubes), the incubator,
 *   and the aligned sealed-plate set (tap 3, creek about 214, tank 0, lawn, crowded, countable about 156, sparse 14).
 *   The seven plates share one box (the union of their alpha boxes) so they swap, crossfade and rotate in place.
 * - Reused (brief 98): the micropipette with spreader and tube, the autoclave bag of plates. Also the blank agar dish,
 *   the antibiotic-free colony plate (positive control, with two coded tape strips), mixed colonies (unlidded: only
 *   as "mixed colonies", never one of this practical's incubated plates), the sampling pole and bottle, the graduated
 *   pipette, the Bunsen burner, the tape roll, the rod (E. coli glyph, clipped) and the virus particle.
 * - Coded: step rail, cards and glosses, CFU glyphs, drops, lid lift (before incubation only), spreader arc, tape strips,
 *   base label line, flip, condensation, dial and band, dilution labels and arrows, bracket, count grid and tallies,
 *   calculation lines, claim card, VRA cards, risk table, attempt cards, countdown. No people, no hands. Grown plates
 *   are never shown open.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as P3} from '../bio-m7-b03/assets';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const C = 'assets/chemistry/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const SEAL: Box = [293, 288, 1707, 1691];

export const PLATES = {
	bottles: mk(B + 'm7-sample-bottles-three-v1.png', [322, 575, 1679, 1407]),
	/** The left (tap) bottle alone; draw with PlateB and an id so the other two are clipped off. */
	tapBottle: mk(B + 'm7-sample-bottles-three-v1.png', [322, 575, 745, 1407]),
	rack: mk(B + 'm7-dilution-tube-rack-v1.png', [291, 506, 1712, 1537]),
	incubator: mk(B + 'm7-incubator-v1.png', [300, 399, 1733, 1547]),
	few: mk(B + 'm7-plate-few-v1.png', SEAL),
	creek: mk(B + 'm7-plate-creek-v1.png', SEAL),
	clear: mk(B + 'm7-plate-clear-v1.png', SEAL),
	lawn: mk(B + 'm7-plate-lawn-v1.png', SEAL),
	crowded: mk(B + 'm7-plate-crowded-v1.png', SEAL),
	countable: mk(B + 'm7-plate-countable-v1.png', SEAL),
	sparse: mk(B + 'm7-plate-sparse-v1.png', SEAL),
	mixed: mk(B + 'm7-petri-colonies-v1.png', [201, 380, 1800, 1621]),
	agar: mk(B + 'm6-agar-dish-top-v1.png', [200, 215, 1799, 1784]),
	posCtl: mk(B + 'm6-antibiotic-colonies-before-v1.png', [161, 171, 1840, 1829]),
	sampler: mk(C + 'm8-river-sampling-bottle-v1.png', [160, 226, 1839, 1772]),
	gradPip: mk(C + 'm5x-graduated-pipette-v1.png', [160, 178, 1840, 1822]),
	bunsen: mk(C + 'm5x-bunsen-burner-v1.png', [687, 242, 1313, 1733]),
	tape: mk(B + 'm5x-tape-roll-v1.png', [160, 202, 1840, 1798]),
	pipette: mk(B + 'm6-micropipette-spreader-v1.png', [295, 519, 1705, 1482]),
	bag: mk(B + 'm6-autoclave-bag-plates-v1.png', [569, 456, 1430, 1544]),
	rod: P3.rod,
	virus: P3.covid,
	leaf: P3.leafSick,
};
/** Natural-pixel anchors (gridded contact sheets and alpha analysis, 23 Oct). */
export const FEAT = {
	/** Sealed plates: dish centre, agar radius, rim radius. */
	dish: {c: [1000, 990] as [number, number], agar: 640, rim: 700},
	/** Blank agar dish (m6) centre and rim radius. */
	agarDish: {c: [1000, 1000] as [number, number], rim: 790},
	/** Positive-control plate centre and rim radius. */
	pos: {c: [1000, 1000] as [number, number], rim: 830},
	/** Bottle centres (tap, creek, tank) and the label-panel height. */
	bottleX: [532, 1000, 1472],
	bottleLabelY: 1080,
	/** Dilution rack: creek bottle mouth, tube centres, tube tops and the liquid level. */
	rackBottle: [600, 690] as [number, number],
	tubeX: [868, 1068, 1272, 1472],
	tubeTop: 540,
	tubeLiquid: 960,
	rackBase: 1440,
	/** Incubator: front dial, display, plate stack. */
	dial: [720, 1380] as [number, number],
	display: [1100, 1340] as [number, number],
	stack: [840, 840] as [number, number],
	/** Micropipette tip. */
	tip: [330, 1440] as [number, number],
	/** Colonies on the countable plate, for the tally run. */
	tally: [[564, 660], [616, 680], [664, 640], [720, 644], [752, 640], [812, 692], [888, 656], [908, 600], [992, 604], [1024, 632], [1036, 700], [1124, 684]] as [number, number][],
	/** Colonies on the creek plate's partner, the 3-colony (tap) plate. */
	few: [[680, 690], [1312, 848], [808, 1196]] as [number, number][],
};
export const ASSETS_M7P02B: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
