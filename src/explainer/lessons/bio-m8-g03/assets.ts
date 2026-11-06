// M8 G03 (Biology practice) plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 6 Nov from the files in
// public/assets/biology/. The banana pair is drawn on one union box so the two states cross-fade in place.
// Feature points (natural pixels): heart, the aortic arch near (1060, 420); brain, the medulla near (1035, 1235).
// Coded: question cards, the loop ring with its link cut, the blood pressure trace, the glucose and insulin graph with
// peak markers and reading guides, process strips with minus and plus arrows, signal pulses, glucose dots, chips, tags,
// answer boxes, the countdown and the decision board. No people, hands or faces; the body is never outlined.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});
const BAN: [number, number, number, number] = [220, 313, 1779, 1687];

export const PL = {
	heart: mk('m8-heart-v1.png', [365, 160, 1634, 1840]),
	brain: mk('b3a2-brain-v1.png', [180, 190, 1620, 1409], [1800, 1600]),
	pancreas: mk('m8-pancreas-v1.png', [160, 574, 1840, 1424]),
	islet: mk('m8-pancreatic-islet-v1.png', [221, 380, 1779, 1619]),
	muscle: mk('m8-skeletal-muscle-v1.png', [220, 588, 1780, 1411]),
	liver: mk('m8-liver-v1.png', [200, 449, 1800, 1550]),
	plant: mk('b2b-prop-new-plant-v1.png', [490, 242, 1111, 1360], [1600, 1600]),
	unripe: mk('m8-bananas-unripe-v1.png', BAN),
	ripe: mk('m8-bananas-ripe-v1.png', BAN),
	stoma: mk('m8-stoma-open-v1.png', [222, 226, 1779, 1773]),
};
export const ARCH: [number, number] = [1060, 420];
export const MEDULLA: [number, number] = [1035, 1235];
export const ASSETS_M8G03B: string[] = Object.values(PL).map(p => p.src);
