// P8-02 Biology plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 7 Nov from the files in public/assets/,
// each inspected on a paper board (contact sheet and gridded crops). Feature points are natural pixels read off gridded
// crops. Coded: the bubble, mm numerals, flow arrows, seal rings, air lines, blade blur, the water tint, the cut line, the
// varnish patch, tape strip and slide, count marks, the step rail, cards, tables, chips, tags and the countdown. No people.
import type {PB} from '../bio-m8-g01/board';

const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: 'assets/' + f, nat, box});

export const PL = {
	pot: mk('biology/m8-potometer-v1.png', [422, 455, 1585, 1502]),
	low: mk('biology/m8-stomata-field-lower-v1.png', [402, 407, 1598, 1592]),
	up: mk('biology/m8-stomata-field-upper-v1.png', [402, 407, 1598, 1592]),
	fan: mk('biology/m8-desk-fan-v1.png', [678, 421, 1399, 1578]),
	scal: mk('biology/m8-scalpel-v1.png', [418, 924, 1584, 1184]),
	varn: mk('biology/m8-clear-nail-varnish-v1.png', [631, 558, 1484, 1400]),
	leaf: mk('biology/m8-leaf-cross-section-v1.png', [228, 433, 1765, 1516]),
	stoma: mk('biology/m8-stoma-open-v1.png', [222, 226, 1779, 1773]),
	plant: mk('biology/b2b-prop-new-plant-v1.png', [490, 242, 1111, 1360], [1600, 1600]),
	micro: mk('biology/m7-microscope-v1.png', [509, 200, 1492, 1799]),
	watch: mk('chemistry/c8-stopwatch-v1.png', [136, 179, 1229, 1620], [1367, 1800]),
	tile: mk('chemistry/m6-white-tile-v1.png', [164, 374, 1884, 1674], [2048, 2048]),
};
/** Potometer feature points (natural pixels). The capillary's long ticks run from 0 mm at the beaker end (x 1418) to
 *  70 mm near the reservoir (x 905); the bore centre is y 1203. The water column (and the bubble) moves towards the shoot. */
export const POT = {
	capY: 1203,
	ticks: [1418, 1350, 1280, 1204, 1131, 1058, 984, 905],
	bung: [690, 902] as [number, number],
	arm: [748, 1194] as [number, number],
	resJoint: [832, 1200] as [number, number],
	resTop: [830, 1000] as [number, number],
	stemEnd: [688, 1108] as [number, number],
	leaves: [700, 640] as [number, number],
	farEnd: [1508, 1372] as [number, number],
	beaker: [1445, 1272, 1590, 1505] as [number, number, number, number],
	flow: [[1490, 1203], [860, 1203], [770, 1194], [700, 1170], [690, 1110]] as [number, number][],
	/** Shoot crop (leaves above the bung, then the tube): two rects in natural pixels. */
	shootA: [420, 450, 1000, 892] as [number, number, number, number],
	shootB: [640, 892, 752, 1222] as [number, number, number, number],
	leafCrop: [725, 660, 1000, 860] as [number, number, number, number],
};
/** Stomata in the lower (20) and upper (3) fields, natural pixels (counted on gridded crops). */
export const STOM_LOW: [number, number][] = [[1035, 498], [760, 598], [1268, 636], [996, 696], [590, 745], [1455, 780], [857, 852], [1163, 844], [505, 947], [1433, 957], [1044, 992], [703, 1007], [912, 1106], [1252, 1104], [580, 1166], [1475, 1180], [770, 1275], [1090, 1270], [913, 1405], [1288, 1384]];
export const STOM_UP: [number, number][] = [[747, 750], [1220, 930], [927, 1230]];
export const FAN_HUB: [number, number] = [1120, 830];
export const LEAF_STOMA: [number, number] = [684, 1440];
export const LEAF_XYLEM: [number, number] = [1365, 1002];
export const WATCH_HUB: [number, number] = [680, 1050];
export const ASSETS_M8P02B: string[] = Object.values(PL).map(p => p.src);
