// M8 C05 shared pieces: measured lesson lookups and the plates. Alpha boxes measured 6 Nov (PIL, alpha > 20).
// - Lake set (m8-lake-clear, -bloom, -crash; 2400 x 1600): drawn on the union box (240, 251, 2161, 1350) so the three
//   states cross-fade in place. Water column cut face: x 430..1900; surface y 650; floor y about 1000 (left) to 1090
//   (right). The far bank's grass top is near y 440.
// - Farm runoff (2000): paddock top-left (500, 650); creek mouth where the brown plume enters (1400, 1400).
// - Wastewater outlet (2000; its alpha box fills the canvas): water surface in the channel y about 1300.
// - Sampling bottle v1: the clear sample bottle sits at x 1000..1440, liquid y 1450..1740.
import lesson from '../../../../docs/production/claude-pm/lessons/m8c05/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export {Heading} from '../chem-m5-c03/common';
export type {PDef};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 C05 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const NB = ' ';

const N2: [number, number] = [2000, 2000], N4: [number, number] = [2048, 2048], NL: [number, number] = [2400, 1600];
const bio = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: 'assets/biology/' + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
const LAKE_B: [number, number, number, number] = [240, 251, 2161, 1350];
export const LAKE = {clear: mk('m8-lake-clear-v1.png', NL, LAKE_B), bloom: mk('m8-lake-bloom-v1.png', NL, LAKE_B), crash: mk('m8-lake-crash-v1.png', NL, LAKE_B)};
export const LAKE_A = {x0: 440, x1: 1890, surf: 660, floorL: 990, floorR: 1080, grass: 440};
export const FARM = mk('m8-farm-runoff-v1.png', N2, [199, 405, 1800, 1595]);
export const FARM_A = {top: [500, 650] as [number, number], mouth: [1400, 1400] as [number, number]};
export const OUTLET = mk('m6-wastewater-outlet-probe-v1.png', N2, [27, 0, 2000, 1948]);
export const FERT = mk('m6-fertiliser-granules-v1.png', N2, [200, 493, 1799, 1507]);
export const BOTTLE1 = mk('m8-river-sampling-bottle-v1.png', N2, [160, 226, 1839, 1772]);
export const TURB = mk('m8-turbidity-meter-v1.png', N2, [303, 200, 1697, 1800]);
export const DOM = mk('m8-do-meter-probe-v1.png', N2, [463, 200, 1536, 1800]);
export const PHM = mk('m6-ph-meter-probe-beaker-v1.png', N4, [164, 239, 1883, 1809]);
export const KIT = mk('m8-water-testing-kit-v1.png', N2, [160, 166, 1840, 1835]);
export const COLM = mk('m5x-colourimeter-v1.png', N2, [208, 201, 1793, 1800]);
export const THERMO = bio('m8-thermometer-v1.png', N2, [160, 468, 1840, 1532]);
export const CPLATE = bio('m7-plate-creek-v1.png', N2, [295, 290, 1706, 1691]);
export const MICRO = bio('m6-microscope-v1.png', N2, [498, 200, 1501, 1800]);

export const PLATES: PDef[] = [LAKE.clear, LAKE.bloom, LAKE.crash, FARM, OUTLET, FERT, BOTTLE1, TURB, DOM, PHM, KIT, COLM, THERMO, CPLATE, MICRO];
