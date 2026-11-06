// B8-07 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 7 Nov from the files in public/assets/biology/,
// each inspected on a dark board. Feature points are natural pixels read off gridded crops.
// Coded: the pathway strip, risk dial, dose bars, ticket row, timelines, smoke wisps, carcinogen dots, CO and O2 dots,
// white blood cell blobs, enzyme dots, sparks, graphs, chips, tags, cards, answers and the countdown. No people.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});

export const PL = {
	fibro: mk('m8-fibro-sheet-asbestos-v1.png', [426, 587, 1578, 1424]),
	lungs: mk('m8-lungs-healthy-v1.png', [201, 160, 1798, 1840]),
	lungsS: mk('m8-lungs-smoker-v1.png', [201, 160, 1798, 1840]),
	airway: mk('m7-airway-cell-v1.png', [666, 231, 1332, 1741]),
	alv: mk('m8-alveoli-healthy-v1.png', [525, 408, 1517, 1558]),
	alvE: mk('m8-alveoli-emphysema-v1.png', [525, 408, 1517, 1558]),
	heart: mk('m8-heart-v1.png', [365, 160, 1634, 1840]),
	art: mk('m8-artery-healthy-v1.png', [461, 449, 1581, 1519]),
	artP: mk('m8-artery-plaque-v1.png', [461, 449, 1581, 1519]),
	rbc: mk('m5x-red-blood-cells-v1.png', [304, 331, 1750, 1689]),
	macro: mk('m8-asbestos-fibre-macrophage-v1.png', [417, 618, 1583, 1319]),
	sunProt: mk('m8-sun-protection-v1.png', [160, 456, 1840, 1544]),
	sun: mk('m8-sun-v1.png', [160, 172, 1840, 1828]),
	uvSkin: mk('m6-uv-skin-v1.png', [280, 200, 1720, 1800]),
	melanoma: mk('m8-skin-melanoma-v1.png', [160, 227, 1840, 1773]),
};
/** Feature points (natural pixels). */
export const FP = {
	bronchusR: [1165, 860] as [number, number], // right main bronchus (viewer's right)
	bronchiR: [1300, 1070] as [number, number],
	nucleus: [986, 1371] as [number, number], // airway cell nucleus centre
	ciliaTop: 520, // y of the cell's top edge (cilia base); cilia span y 240 to 520, x 780 to 1290
	alvJ: [[1008, 903], [1126, 1043], [1018, 1193], [847, 1043]] as [number, number][], // wall junctions
	alvC: [1020, 1080] as [number, number],
	coronary: [1180, 1200] as [number, number],
	lining: [1043, 790] as [number, number], // inner lining along the opened artery
	lumenEnd: [732, 1107] as [number, number],
	plaque: [1098, 978] as [number, number],
	rbcC: [[608, 595], [1359, 608], [1077, 1024], [595, 1372], [1466, 1413]] as [number, number][],
	macroC: [957, 921] as [number, number],
	sparks: [1321, 921] as [number, number],
	fibreA: [421, 1243] as [number, number],
	fibreB: [1578, 632] as [number, number],
	fibroEdge: [1514, 1057] as [number, number],
};
export const ASSETS_M8B07: string[] = Object.values(PL).map(p => p.src);
