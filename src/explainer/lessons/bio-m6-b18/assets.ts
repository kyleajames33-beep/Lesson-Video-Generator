/**
 * M6 B18 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 22 Oct from the real files in public/assets/biology/.
 * - New (brief 96): m6-water-bath-tube-v1.png (the tube in its floating rack near natural (940, 920)),
 *   m6-fermenter-tank-v1.png (sight-glass window centre (1060, 790), radius about 65) and
 *   m6-antibiotic-colonies-empty-v1.png (registered with the before and after pair: all three use one box, so they
 *   crossfade with only colonies appearing; the after plate's colonies are listed in COLONIES).
 * - Reused: the bacterium with its plasmid ring, the insulin vial, Bt cotton, the B6a bacterium (glyphs and the tinted
 *   Agrobacterium), the T4 phage, the plasmid uptake pair (registered with one box; inside ring near (1435, 1040)),
 *   the agar dish, the B6a plant cell (nucleus centre (965, 445), radius about 175; wall outline about (190, 230) to
 *   (1340, 1780)) and the tissue culture jars.
 * - Coded: the toolchain track and stations, DNA strands with base glyphs, the gene and plasmid rings, the splicing
 *   strip, the wrong protein chain, the restriction enzyme and ligase blobs, the recognition band, the staggered cut,
 *   pairing lines and backbone gaps, the marker band and promoter block, the snowflake and temperature tags, bacterium
 *   fields, colony rings, ticks and crosses, the division tree, the polymerase bean, mRNA and ribosome glyphs, the codon
 *   match, the insulin chains, the transfer strip, the seed glyph, the parent strips, the attempt cards and the
 *   countdown. No people, no hands.
 * - m6-hand-pollination-v1.png and m6-agricultural-liming-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];
const UP: [number, number, number, number] = [201, 589, 1800, 1407];
const AB: [number, number, number, number] = [160, 171, 1840, 1829];

export const PLATES = {
	bactP: mk('m6-bacterium-plasmid-v1.png', N2, [200, 551, 1800, 1448]),
	vial: mk('m6-insulin-vial-v1.png', N2, [648, 200, 1350, 1800]),
	cotton: mk('m6-bt-cotton-v1.png', N2, [273, 200, 1726, 1800]),
	bact: mk('b6a-bacterium-v1.png', [2044, 900], [243, 192, 1880, 704]),
	phage: mk('m6-bacteriophage-t4-v1.png', N2, [571, 281, 1430, 1709]),
	upStart: mk('m6-plasmid-uptake-start-v1.png', N2, UP),
	upEnd: mk('m6-plasmid-uptake-end-v1.png', N2, UP),
	bath: mk('m6-water-bath-tube-v1.png', N2, [245, 200, 1753, 1799]),
	fermenter: mk('m6-fermenter-tank-v1.png', N2, [616, 267, 1415, 1658]),
	plateEmpty: mk('m6-antibiotic-colonies-empty-v1.png', N2, AB),
	plateCrowd: mk('m6-antibiotic-colonies-before-v1.png', N2, AB),
	plateFew: mk('m6-antibiotic-colonies-after-v1.png', N2, AB),
	dish: mk('m6-agar-dish-top-v1.png', N2, [200, 215, 1799, 1784]),
	plantCell: mk('b6a-plant-cell-v1.png', [1529, 1984], [142, 178, 1406, 1825]),
	jars: mk('m6-tissue-culture-jars-v1.png', N2, [200, 627, 1798, 1373]),
};
export const PT = {
	tube: [940, 905] as [number, number],
	window: [1060, 790] as [number, number],
	nucleus: [965, 445] as [number, number],
	upRing: [1435, 1040] as [number, number],
	ring: [1183, 955] as [number, number],
};
/** Colonies on the "after" plate (natural pixels) and which of them hold the insert. */
export const COLONIES: [number, number][] = [[670, 445], [1270, 505], [1240, 805], [400, 830], [520, 905], [905, 1000], [1010, 1105], [1450, 1200], [470, 1340], [760, 1455], [1245, 1465], [685, 510], [1295, 570], [1520, 1260]];
export const HAS_INSERT = [0, 1, 2, 4, 5, 7, 9, 10, 11];
export const ASSETS_B18: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
