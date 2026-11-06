// B8-09 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 7 Nov from the files in public/assets/biology/,
// each inspected on a light board. Matched pairs share one union box so cross-fades stay in register: the interphase
// cell and the apoptotic cell; normal skin, melanoma and the benign mole blocks (side by side, never cross-faded mole to
// melanoma); the lymph node and the node with secondaries. Feature points are natural pixels.
// Coded only: the cycle ring, clone tree layout, pedals, the cause chain, sparks, glyphs, chips, ruler, cards, countdown.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});

const CELL: [number, number, number, number] = [51, 56, 1958, 1867];
const SKIN: [number, number, number, number] = [160, 227, 1840, 1773];
const NODE: [number, number, number, number] = [297, 219, 1775, 1773];
const GRAZE: [number, number, number, number] = [348, 342, 1572, 927];
export const PL = {
	inter: mk('cd-interphase-v1.png', CELL),
	apop: mk('m8-cell-apoptotic-v1.png', CELL),
	meta: mk('cd-metaphase-v1.png', [111, 119, 1891, 1810]),
	ana: mk('cd-anaphase-v1.png', [9, 466, 1991, 1535]),
	daught: mk('cd-daughters-v1.png', [0, 476, 2000, 1557]),
	graze: mk('b5a-skin-graze-v1.png', GRAZE, [1920, 1280]),
	healed: mk('b5a-skin-healed-v1.png', GRAZE, [1920, 1280]),
	skinN: mk('m8-skin-normal-v1.png', SKIN),
	skinM: mk('m8-skin-melanoma-v1.png', SKIN),
	mole: mk('m8-skin-mole-v1.png', SKIN),
	uv: mk('m6-uv-skin-v1.png', [280, 200, 1720, 1800]),
	sunP: mk('m8-sun-protection-v1.png', [160, 456, 1840, 1544]),
	node: mk('m7-lymph-node-v1.png', NODE),
	nodeM: mk('m8-lymph-node-melanoma-v1.png', NODE),
	vessel: mk('m8-melanoma-cells-vessel-v1.png', [200, 358, 1800, 1642]),
	lungs: mk('m8-lungs-healthy-v1.png', [201, 160, 1797, 1839]),
	liver: mk('m8-liver-v1.png', [200, 449, 1800, 1550]),
	brain: mk('b3a2-brain-v1.png', [180, 190, 1620, 1409], [1800, 1600]),
};
/** Feature points (natural pixels). */
export const FP = {
	nuc: [1025, 1005] as [number, number], // interphase nucleus centre
	nucR: 362, // nuclear envelope radius
	/** Epidermis to dermis junction (the basement membrane) on the front face of the skin blocks, left to right. */
	bm: [[190, 700], [230, 690], [290, 770], [350, 810], [410, 780], [460, 730], [520, 800], [580, 830], [660, 820], [720, 790], [780, 840], [830, 860], [900, 860], [950, 840], [990, 900], [1030, 930], [1060, 915], [1090, 890], [1130, 925], [1170, 940], [1210, 900], [1240, 870], [1300, 950], [1370, 990], [1440, 1000], [1480, 995]] as [number, number][],
	gap: [840, 1045] as [number, number], // melanoma cells cross the junction between these x values
	moleC: [900, 610] as [number, number], // benign mole: surface spot and nest
	melDeep: [940, 905] as [number, number], // melanoma cells in the dermis
	melTop: [930, 560] as [number, number],
	melanocyte: [620, 640] as [number, number], // base of the epidermis on the normal block
	dermis: [700, 1060] as [number, number],
	lymphY: 1085, // a dermal vessel level for the coded lymph vessel
	deposit: [800, 600] as [number, number], // node secondaries
	surface: 470, // skin surface level (top face front edge)
};
export const ASSETS_M8B09: string[] = Object.values(PL).map(p => p.src);
