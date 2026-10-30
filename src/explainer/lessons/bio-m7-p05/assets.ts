/**
 * M7 P05 (Biology practical: antimicrobial discs) plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 30 Oct from the real files in public/assets/.
 * - New (brief 109): the fresh disc plate and the zones plate (aligned to p02's sealed-plate set, same dish centre;
 *   four discs at identical centres; A top left 25 mm class zone, B top right 15 mm class zone, C bottom left and the
 *   blank bottom right with no zone), the disc cartridge and the clear ruler (numeral-free; scene code adds numerals).
 * - Reused: p02's clear and lawn plates, the micropipette with spreader and tube, the incubator, the autoclave bag;
 *   b3b's forceps (rotated uniformly); b11's wall-burst bacterium and blister pack; b02's healthy tissue field; the
 *   rod and coccus plate; b02's mosquito (handoff chip).
 * - Coded: step rail, cards and glosses, halo dots and dashed rings, diameter lines, ruler numerals and end ticks,
 *   zone table, brackets, fan spokes, claim card, VRA cards, risk table, attempt cards, countdown. No people, no
 *   hands. Incubated plates are never shown open.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as P2} from '../bio-m7-p02/assets';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box, nat: [number, number] = N2): PB => ({src, nat, box});
const DISC: Box = [296, 291, 1704, 1688];

export const PLATES = {
	fresh: mk(B + 'm7-disc-plate-fresh-v1.png', DISC),
	zones: mk(B + 'm7-disc-plate-zones-v1.png', DISC),
	cartridge: mk(B + 'm7-antibiotic-disc-cartridge-v1.png', [404, 607, 1597, 1393]),
	ruler: mk(B + 'm7-ruler-clear-v1.png', [302, 930, 1698, 1068]),
	clear: mk(B + 'm7-plate-clear-v1.png', DISC),
	lawn: mk(B + 'm7-plate-lawn-v1.png', DISC),
	pipette: P2.pipette,
	incubator: P2.incubator,
	bag: P2.bag,
	forceps: mk(B + 'b3b-forceps-v1.png', [308, 192, 492, 1408], [800, 1600]),
	burst: mk(B + 'm7-bacterium-wall-burst-v1.png', [200, 551, 1800, 1448]),
	blister: mk(B + 'm7-capsule-blister-blank-v1.png', [220, 500, 1780, 1499]),
	tissue: mk(B + 'm7-healthy-tissue-field-v1.png', [224, 242, 1776, 1758]),
	rodCoccus: mk(B + 'm7-bacterium-rod-coccus-v1.png', [201, 544, 1800, 1456]),
	mosquito: mk(B + 'm7-mosquito-vector-v1.png', [200, 522, 1800, 1478]),
};
/** Natural-pixel anchors (row scans and alpha analysis of the disc plates, 30 Oct). */
export const FEAT = {
	/** Dish centre (the box centre), agar radius, rim radius. */
	c: [1000, 989.5] as [number, number],
	agar: 640,
	rim: 700,
	/** Disc centres: A (top left, large zone), B (top right, small zone), C (bottom left, none), blank (bottom right). */
	disc: {A: [723, 730], B: [1277, 730], C: [723, 1252], blank: [1277, 1252]} as Record<'A' | 'B' | 'C' | 'blank', [number, number]>,
	discR: 43,
	/** Painted zone radii (natural px): A about 24 to 25 mm, B about 15 mm. */
	zoneR: {A: 172, B: 110} as Record<'A' | 'B', number>,
	/** Natural px per mm on the disc plates (6 mm disc = 86 px). */
	mm: 14.3,
	/** Painted tape strips (left and right of the rim). */
	tape: [[330, 920], [1670, 920]] as [number, number][],
	/** Ruler: natural px per mm, the zero tick x and the tick edge y. */
	rulerMm: 9.02,
	rulerZero: 326,
	rulerEdge: 932,
	/** Micropipette tip and the capped culture tube (p02 anchors). */
	tip: [330, 1440] as [number, number],
	tube: [1460, 760] as [number, number],
	/** Incubator plate stack and display (p02 anchors). */
	stack: [840, 840] as [number, number],
	display: [1100, 1340] as [number, number],
};
export const ASSETS_M7P05B: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
