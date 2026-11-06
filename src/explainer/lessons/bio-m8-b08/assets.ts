// B8-08 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 7 Nov from the files in public/assets/biology/,
// each inspected on a dark board. Matched pairs share one union box so the cross-fade stays in register (the thyroid
// pair's own boxes differ: the goitre is larger on the same canvas). Feature points are natural pixels.
// Coded: the nutrient chain, balance beam, years strip, bars, oxygen and calcium dots, glucose hexagons, insulin dots,
// signal pulses, the fat tint, the risk dial and chips, the 1 000-dot grid, the attempt chart, cards and the countdown.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});

const RBC: [number, number, number, number] = [304, 331, 1750, 1689];
const COL: [number, number, number, number] = [438, 490, 1575, 1529];
const LEG: [number, number, number, number] = [923, 384, 1131, 1594];
const THY: [number, number, number, number] = [222, 458, 1796, 1492];
const MUS: [number, number, number, number] = [221, 483, 1779, 1516];
const ART: [number, number, number, number] = [461, 449, 1581, 1519];
export const PL = {
	rbc: mk('m5x-red-blood-cells-v1.png', RBC),
	rbcFe: mk('m8-red-cells-iron-deficient-v1.png', RBC),
	colS: mk('m8-collagen-strong-v1.png', COL),
	colW: mk('m8-collagen-weak-v1.png', COL),
	legN: mk('m8-leg-bones-normal-v1.png', LEG),
	legR: mk('m8-leg-bones-rickets-v1.png', LEG),
	thyN: mk('m8-thyroid-normal-v1.png', THY),
	thyG: mk('m8-thyroid-goitre-v1.png', THY),
	pit: mk('b3a2-pituitary-part-v1.png', [640, 940, 790, 1090], [1800, 1600]),
	bread: mk('m6-bread-loaf-crumb-v1.png', [22, 224, 1984, 1781]),
	sun: mk('m8-sun-v1.png', [160, 172, 1840, 1828]),
	musIn: mk('m8-muscle-cell-transporters-inside-v1.png', MUS),
	musMem: mk('m8-muscle-cell-transporters-membrane-v1.png', MUS),
	liver: mk('m8-liver-v1.png', [200, 449, 1800, 1550]),
	islet: mk('m8-pancreatic-islet-v1.png', [221, 380, 1779, 1619]),
	pancreas: mk('m8-pancreas-v1.png', [160, 574, 1840, 1424]),
	eye: mk('m8-eye-cutaway-v1.png', [177, 160, 1822, 1840]),
	kidney: mk('m8-kidney-nephron-v1.png', [160, 235, 1840, 1765]),
	heart: mk('m8-heart-v1.png', [365, 160, 1634, 1840]),
	art: mk('m8-artery-healthy-v1.png', ART),
	artP: mk('m8-artery-plaque-v1.png', ART),
	cellDiv: mk('b5x-cell-dividing-v1.png', [263, 259, 1734, 1695]),
};
/** Feature points (natural pixels). */
export const FP = {
	receptors: [[671, 760], [1000, 760], [1329, 770]] as [number, number][], // insulin receptors on the membrane
	capL: [330, 640] as [number, number], // capillary, left end
	capMid: [1000, 640] as [number, number],
	vesicles: [[814, 1014], [1000, 914], [1200, 1100], [1443, 986]] as [number, number][],
	membraneY: 790,
	leak: [1300, 1060] as [number, number], // weak collagen: red cells escaping the capillary
	fibre: [800, 760] as [number, number], // a collagen fibre
	thyTop: [1000, 640] as [number, number],
	boneKnee: [1027, 1000] as [number, number],
};
export const ASSETS_M8B08: string[] = Object.values(PL).map(p => p.src);
