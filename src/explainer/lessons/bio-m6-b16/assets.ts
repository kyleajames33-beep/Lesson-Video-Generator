/**
 * M6 B16 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 22 Oct from the real files in public/assets/biology/.
 * - New (brief 96): m6-blackface-ewe-v1.png (egg donor and surrogate; black face near natural (1667, 556)),
 *   m6-white-faced-lamb-v1.png (Dolly; white face near (1444, 611)), m6-black-footed-ferret-v1.png.
 * - Reused: the white-faced sheep (nucleus donor; face near (1667, 556)), the ICSI plate used only for enucleation (egg
 *   nucleus near (915, 955), radius about 108; the sperm in the needle tip near (1095, 995) is always covered by a
 *   coded cytoplasm patch, so no sperm is ever shown), the B3a egg (nucleus centre (1000, 1017), radius about 185) and its
 *   separable nucleus part, the B6b body cell (purple nucleus centre (1040, 1025), radius about 280), cleavage 1, 2, 3
 *   and 5, the bacterium with its plasmid ring (ring (1183, 955)), the plasmid uptake pair (registered with one box;
 *   the inside ring of the end plate near (1435, 1040), radius about 65), the B6a bacterium (division glyphs), the agar
 *   dish (top view; agar radius about 700 round (1000, 1000)), the B1 clone row and Cavendish bunch, the insulin vial,
 *   Bt cotton, the dairy bull, two calves with different patches (side calf and horn-buds calf) and the rhino.
 * - Coded: the copy board (columns, bays, criteria meters), glosses, arrows, the enucleation motion and cytoplasm
 *   patches, the fusion flash, the uterus outline, mitochondria glyphs, the genes plus environment balance, the funnel,
 *   chromosomes and switches, the histone thumbnail, embryo circles, the frozen vial, the ring cluster, gene segments,
 *   the plasmid ring, the division tree, clock ring, colonies, the PCR strip, tube and thermometer, the sequence strip,
 *   the decision chips, the attempt cards, data table, answer boxes and the countdown. No people, no hands.
 * - m6-hand-pollination-v1.png, m6-agricultural-liming-v1.png and b3a-embryo-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];
const C18: [number, number] = [1800, 1800];
const CB: [number, number, number, number] = [213, 212, 1587, 1582];
const UP: [number, number, number, number] = [201, 589, 1800, 1407];

export const PLATES = {
	ewe: mk('m6-blackface-ewe-v1.png', N2, [201, 338, 1800, 1662]),
	lamb: mk('m6-white-faced-lamb-v1.png', N2, [450, 495, 1550, 1504]),
	ferret: mk('m6-black-footed-ferret-v1.png', N2, [251, 600, 1740, 1399]),
	sheep: mk('m6-white-sheep-v1.png', N2, [200, 351, 1800, 1649]),
	icsi: mk('m6-icsi-v1.png', N2, [200, 594, 1800, 1405]),
	egg: mk('b3a-egg-v1.png', N2, [240, 252, 1759, 1748]),
	eggNuc: mk('b3a-egg-nucleus-v1.png', N2, [819, 833, 1182, 1201]),
	cell: mk('m5x-cell-protein-synthesis-v1.png', N2, [279, 265, 1738, 1700]),
	cl1: mk('b3a-cleavage-1-v1.png', C18, CB),
	cl2: mk('b3a-cleavage-2-v1.png', C18, CB),
	cl3: mk('b3a-cleavage-3-v1.png', C18, CB),
	cl5: mk('b3a-cleavage-5-v1.png', C18, CB),
	bactP: mk('m6-bacterium-plasmid-v1.png', N2, [200, 551, 1800, 1448]),
	upStart: mk('m6-plasmid-uptake-start-v1.png', N2, UP),
	upEnd: mk('m6-plasmid-uptake-end-v1.png', N2, UP),
	bact: mk('b6a-bacterium-v1.png', [2044, 900], [243, 192, 1880, 704]),
	dish: mk('m6-agar-dish-top-v1.png', N2, [200, 215, 1799, 1784]),
	cloneRow: mk('b1-clone-row-disease-v1.png', [2172, 724], [234, 147, 1923, 590]),
	bunch: mk('b1-cavendish-bunch-v1.png', [1842, 1330], [430, 206, 1499, 1106]),
	vial: mk('m6-insulin-vial-v1.png', N2, [648, 200, 1350, 1800]),
	cotton: mk('m6-bt-cotton-v1.png', N2, [273, 200, 1726, 1800]),
	bull: mk('b3b-dairy-bull-side-v1.png', [2200, 1600], [401, 460, 1798, 1360]),
	calf: mk('b3b-calf-side-v1.png', [2200, 1600], [782, 910, 1418, 1360]),
	calfHorn: mk('m6-dairy-calf-horn-buds-v1.png', N2, [115, 210, 1953, 1794]),
	rhino: mk('m6-northern-white-rhino-v1.png', N2, [160, 533, 1840, 1466]),
};
/** Natural points on the plates. */
export const PT = {
	eweFace: [1667, 556] as [number, number],
	sheepFace: [1667, 556] as [number, number],
	lambFace: [1444, 611] as [number, number],
	icsiNuc: [915, 955] as [number, number],
	icsiSperm: [1092, 995] as [number, number],
	icsiTip: [1160, 988] as [number, number],
	eggNuc: [1000, 1017] as [number, number],
	cellNuc: [1040, 1025] as [number, number],
	upRing: [1435, 1040] as [number, number],
	ring: [1183, 955] as [number, number],
};
export const ASSETS_B16: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
