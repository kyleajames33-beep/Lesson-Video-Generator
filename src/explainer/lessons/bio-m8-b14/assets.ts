// B8-14 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov from the files in public/assets/biology/,
// each inspected on a gridded paper sheet. The blastocyst pair (intact and biopsy) shares one union box so the cross-fade
// stays in register. Feature points are natural pixels read off gridded crops.
// Coded: the jobs bar, the what's-prevented strip, allele chips, pedigree symbols, outcome tiles, the enzyme, the
// phenylalanine bar, result chips, strands, the gene bar chart, the funnel, the balance and line scale, the Punnett grid,
// cards, chips and the countdown. No people.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});
const BLA: [number, number, number, number] = [328, 334, 1800, 1666];

export const PL = {
	card: mk('m5x-newborn-blood-spot-card-v1.png', [289, 609, 1733, 1480]),
	liver: mk('m8-liver-v1.png', [200, 449, 1800, 1550]),
	lcell: mk('m8-liver-cell-glycogen-low-v1.png', [222, 297, 1776, 1705]),
	brain: mk('b3a2-brain-v1.png', [180, 190, 1620, 1409], [1800, 1600]),
	airway: mk('m8-airway-cell-cftr-missing-v1.png', [665, 230, 1336, 1746]),
	tubes: mk('m5x-sample-tube-rack-v1.png', [320, 424, 1723, 1566]),
	dish: mk('m6-egg-sperm-dish-v1.png', [201, 302, 1800, 1697]),
	blast: mk('m8-blastocyst-v1.png', BLA),
	biopsy: mk('m8-blastocyst-biopsy-v1.png', BLA),
	aav: mk('m8-aav-vector-v1.png', [281, 220, 1719, 1779]),
	neuron: mk('y11-neuron-v1.png', [240, 167, 2158, 877], [2400, 1000]),
	bag: mk('m6-infusion-bag-cells-v1.png', [624, 29, 1465, 1934]),
	sickle: mk('m6-red-cells-normal-sickle-v1.png', [200, 597, 1800, 1403]),
	egg: mk('b3a-egg-v1.png', [240, 252, 1759, 1748]),
	sperm: mk('b3a-sperm-v1.png', [264, 640, 1936, 958], [2200, 1600]),
	helix: mk('y11-dna-helix-v1.png', [434, 160, 965, 1840], [1400, 2000]),
	ear: mk('m8-ear-cutaway-v1.png', [182, 160, 1818, 1840]),
};
/** Feature points (natural pixels). */
export const FP = {
	spots: [[525, 1050], [760, 975], [985, 910], [1215, 840]] as [number, number][], // filled blood spots on the card
	icm: [560, 1100] as [number, number], // blastocyst inner cell mass
	outer: [1500, 620] as [number, number], // blastocyst outer layer, upper right
	pipette: [1790, 1050] as [number, number],
	nucleus: [582, 492] as [number, number], // neuron nucleus
};
export const ASSETS_M8B14: string[] = Object.values(PL).map(p => p.src);
