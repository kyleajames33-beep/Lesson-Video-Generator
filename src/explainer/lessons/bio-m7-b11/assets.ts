/**
 * M7 B11 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 27 Oct from the real files in public/assets/biology/.
 * - New (brief 105): the burst bacterium (aligned to m6-bacterium-plasmid-v1; same box, 50% overlay checked), the
 *   airway cell with release blocked (aligned to b08's infected airway cell; one shared box for the three airway plates),
 *   two bacteria joined by a plasmid bridge, and a blank blister pack (no brand).
 * - Reused: the plasmid bacterium, an animal cell, a ribosome, the macrophage, the virus particle, the agar plate and
 *   b6a's small bacterium (population board, via bio-m6-b01's Bact).
 * - The bacterium and the airway cell are never drawn at one scale; each carries its own grey tag. Never stretched.
 * - Coded: lanes, target rings, drug chips, the virus step strip and its blocks, osmosis arrows, the wall mesh, the
 *   protein chain, chip stacks, the assess table, chips, attempt cards and the countdown. No people anywhere.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as P6} from '../bio-m6-b01/assets';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const BAC: Box = [200, 551, 1800, 1448];
const AIR: Box = [658, 207, 1344, 1743];

export const PLATES = {
	bac: mk(B + 'm6-bacterium-plasmid-v1.png', BAC),
	burst: mk(B + 'm7-bacterium-wall-burst-v1.png', BAC),
	animal: {src: B + 'b6a-animal-cell-v1.png', nat: [1986, 1992], box: [165, 161, 1827, 1791]} as PB,
	ribosome: mk(B + 'm5x-ribosome-v1.png', [296, 349, 1722, 1673]),
	macrophage: mk(B + 'm7-macrophage-v1.png', [201, 356, 1799, 1644]),
	virus: mk(B + 'm7-virus-particle-v1.png', [200, 211, 1800, 1788]),
	blister: mk(B + 'm7-capsule-blister-blank-v1.png', [220, 500, 1780, 1499]),
	cell: mk(B + 'm7-airway-cell-v1.png', AIR),
	infected: mk(B + 'm7-airway-cell-infected-v1.png', AIR),
	blocked: mk(B + 'm7-airway-cell-release-blocked-v1.png', AIR),
	conj: mk(B + 'm7-bacteria-conjugation-v1.png', [220, 758, 1780, 1242]),
	agar: mk(B + 'm7-agar-antibiotic-before-v1.png', [204, 202, 1795, 1800]),
	smallBact: P6.bact,
};
/** Natural-pixel features read off the plates (27 Oct). */
export const FEAT = {
	wall: [840, 700] as [number, number],
	ribo: [1330, 1010] as [number, number],
	dna: [830, 1000] as [number, number],
	folate: [1120, 1240] as [number, number],
	plasmidBridge: [1060, 1000] as [number, number],
	/** Airway cell: top surface (budding viruses), a receptor site on the side, the interior. */
	airTop: [1000, 470] as [number, number],
	airSide: [690, 1100] as [number, number],
	airIn: [1000, 900] as [number, number],
};
export const ASSETS_M7B11: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
