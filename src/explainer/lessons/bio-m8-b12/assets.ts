// B8-12 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov from the files in public/assets/biology/,
// each inspected on a gridded paper sheet. The transporter pair shares one union box (b08's), so the cross-fade stays in
// register. Feature points are natural pixels read off gridded crops.
// Coded: the mechanism strip and evidence frame, key and lock, the HbA1c meter, glucose hexagons, insulin dots, the fat
// tint, the staircase, practice clusters and group bars, the weekly calendar, the appetite dial, cards, chips and the
// countdown. No people.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});
const MUS: [number, number, number, number] = [221, 483, 1779, 1516];

export const PL = {
	pen: mk('m8-insulin-pen-v1.png', [160, 630, 1840, 1370]),
	islet: mk('m8-pancreatic-islet-v1.png', [221, 380, 1779, 1619]),
	musIn: mk('m8-muscle-cell-transporters-inside-v1.png', MUS),
	musMem: mk('m8-muscle-cell-transporters-membrane-v1.png', MUS),
	liver: mk('m8-liver-v1.png', [200, 449, 1800, 1550]),
	skm: mk('m8-skeletal-muscle-v1.png', [220, 588, 1780, 1411]),
	blister: mk('m7-capsule-blister-blank-v1.png', [220, 500, 1780, 1499]),
	reader: mk('m8-cgm-reader-blank-v1.png', [477, 160, 1523, 1840]),
	rbc: mk('m5x-red-blood-cells-v1.png', [304, 331, 1750, 1689]),
	eye: mk('m8-eye-cutaway-v1.png', [177, 160, 1822, 1840]),
	kidney: mk('m8-kidney-nephron-v1.png', [160, 235, 1840, 1765]),
	heart: mk('m8-heart-v1.png', [365, 160, 1634, 1840]),
	sun: mk('m8-sun-protection-v1.png', [160, 456, 1840, 1544]),
	shoes: mk('m8-walking-shoes-v1.png', [220, 437, 1780, 1561]),
	bowl: mk('m8-vegetable-bowl-v1.png', [220, 375, 1780, 1624]),
	gut: mk('m8-stomach-gut-v1.png', [235, 220, 1765, 1780]),
};
/** Feature points (natural pixels). */
export const FP = {
	receptors: [[671, 760], [1000, 760], [1329, 770]] as [number, number][], // insulin receptors on the transporter plates
	capY: 640, // capillary level on the transporter plates
	screen: [1045, 865] as [number, number], // reader screen centre (screen about 650 x 730)
	liverLow: [1000, 1350] as [number, number], // liver underside
	gutBody: [1300, 1000] as [number, number], // stomach body
	gutOut: [560, 1420] as [number, number], // duodenum, past the pylorus
	gutWall: [1500, 1250] as [number, number],
};
export const ASSETS_M8B12: string[] = Object.values(PL).map(p => p.src);
