// B8-11 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 7 Nov from the files in public/assets/biology/,
// each inspected on a paper board (contact sheet and gridded crops). Feature points are natural pixels read off gridded crops.
// Coded: the study timeline, matched pairs, dot fields, record rows, the 1954 bar chart, the confounder triangle, the frame
// strip and benefit chain, the risk dial, dot rows, survival lines, cards, chips, tags and the countdown. No people.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});

export const PL = {
	lungs: mk('m8-lungs-healthy-v1.png', [201, 160, 1798, 1840]),
	lungsS: mk('m8-lungs-smoker-v1.png', [201, 160, 1798, 1840]),
	airway: mk('m7-airway-cell-v1.png', [666, 231, 1332, 1741]),
	map: mk('m8-world-map-v1.png', [160, 504, 1840, 1495]),
	clip: mk('m5x-clipboard-sheet-v1.png', [283, 160, 1716, 1840]),
	bread: mk('m6-bread-loaf-crumb-v1.png', [22, 224, 1984, 1781]),
	pack: mk('m8-cigarette-pack-plain-v1.png', [362, 201, 1639, 1801]),
	files: mk('m8-hospital-case-files-v1.png', [199, 274, 1800, 1724]),
	env: mk('m8-questionnaire-envelope-v1.png', [257, 199, 1743, 1800]),
	ledger: mk('m8-record-ledger-v1.png', [200, 386, 1800, 1613]),
};
/** Feature points (natural pixels). */
export const FP = {
	nucleus: [986, 1371] as [number, number], // airway cell nucleus centre
	bronchiR: [1300, 1070] as [number, number], // lungs plate, right lower bronchi (viewer's right)
	uk: [920, 807] as [number, number], // world map: Britain
	us: [533, 873] as [number, number], // world map: United States
};
export const ASSETS_M8B11: string[] = Object.values(PL).map(p => p.src);
