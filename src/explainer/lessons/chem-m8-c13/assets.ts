// C8-13 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov from the files in public/assets/chemistry/,
// each inspected on a gridded paper sheet. The iron(III) chloride pair shares one box (identical geometry).
// Coded: the equation board (skeletal structures), the factor board, the trade-off see-saw, the yield and purity bars,
// loss drips, the beaker, the factory silhouette, the price tag, loop arrows, the verdict bookends and plan rows, chips,
// tags and the countdown. No people or hands.
import type {PB} from '../bio-m8-g01/board';

const C = 'assets/chemistry/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: C + f, nat, box});

export const PL = {
	tablets: mk('m6-aspirin-tablets-v1.png', [320, 552, 1656, 1437]),
	bath: mk('m8-aspirin-water-bath-v1.png', [406, 209, 1593, 1797]),
	willow: mk('m8-willow-bark-v1.png', [311, 201, 1689, 1800]),
	barrel: mk('m7-crude-oil-barrel-v1.png', [506, 200, 1493, 1798]),
	vinegar: mk('m5x-vinegar-bottle-v1.png', [763, 200, 1237, 1800]),
	funnel: mk('m8-filter-funnel-white-ppt-v1.png', [651, 326, 1347, 1674]),
	balance: mk('m8-balance-watch-glass-v1.png', [548, 373, 1566, 1681]),
	violet: mk('m8-fecl3-violet-v1.png', [405, 177, 1595, 1823]),
	pale: mk('m8-fecl3-pale-yellow-v1.png', [405, 177, 1595, 1823]),
	hood: mk('m7-fume-cupboard-v1.png', [312, 200, 1688, 1800]),
	waste: mk('m5x-waste-bottle-v1.png', [495, 269, 1504, 1743]),
	oil: mk('m7-vegetable-oil-bottle-v1.png', [763, 200, 1237, 1800]),
	cane: mk('m7-sugarcane-stalks-v1.png', [278, 201, 1721, 1800]),
};
export const ASSETS_M8C13: string[] = Object.values(PL).map(p => p.src);
