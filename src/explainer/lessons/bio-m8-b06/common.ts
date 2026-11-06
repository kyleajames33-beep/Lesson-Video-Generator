// M8 B06 (what causes a non-infectious disease?) shared pieces: measured lesson lookups and the plates. Alpha boxes
// measured 7 Nov (PIL, alpha > 20) from the files in public/assets/biology/. Matched pairs are drawn on the union of
// their two boxes so each pair cross-fades in place:
// - CFTR cell pair (665, 230, 1336, 1746): channels (natural) at x 823, 924, 1022, 1121, 1201, y about 535 (the apical
//   membrane under the cilia); misfolded clumps in the "missing" state near (925, 1118) and (1139, 1209).
// - airway mucus pair (236, 491, 1787, 1428): thin mucus layer from y about 580; cilia under it.
// - lungs pair (199, 159, 1802, 1841): trachea top near (1000, 175); bronchi near (690, 900) and (1380, 900).
// - red cells pair (304, 331, 1750, 1689): cell centres near (610, 605), (1370, 585), (1065, 1060), (615, 1380), (1460, 1410).
// - skin pair (160, 227, 1840, 1773): the mole and the melanoma sit near (820, 520) on the top face; the lower epidermis
//   under it near (800, 640).
// - heart (365, 160, 1634, 1840): coronary arteries on the front near (900, 1000), (1150, 950), (1100, 1300).
import lesson from '../../../../docs/production/claude-pm/lessons/m8b06/measured/lesson.json';
import type {CueScene} from '../../cues';
import type {PDef} from '../chem-m6-c01/assets';

export type {PDef};
type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 B06 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
const bk = (name: string, b: [number, number, number, number]): PDef => ({src: 'assets/biology/' + name, nat: N2, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
const CF_B: [number, number, number, number] = [665, 230, 1336, 1746];
const AW_B: [number, number, number, number] = [236, 491, 1787, 1428];
const LU_B: [number, number, number, number] = [199, 159, 1802, 1841];
const RB_B: [number, number, number, number] = [304, 331, 1750, 1689];
const SK_B: [number, number, number, number] = [160, 227, 1840, 1773];
export const P = {
	bact: bk('m7-bacterium-rod-coccus-v1.png', [201, 544, 1800, 1456]),
	heart: bk('m8-heart-v1.png', [365, 160, 1634, 1840]),
	lungs: bk('m8-lungs-healthy-v1.png', LU_B),
	silic: bk('m8-lungs-silicosis-v1.png', LU_B),
	airway: bk('m7-airway-cilia-mucus-v1.png', AW_B),
	thick: bk('m8-airway-mucus-thick-v1.png', AW_B),
	cftr: bk('m8-airway-cell-cftr-v1.png', CF_B),
	cftrMissing: bk('m8-airway-cell-cftr-missing-v1.png', CF_B),
	rbc: bk('m5x-red-blood-cells-v1.png', RB_B),
	rbcLow: bk('m8-red-cells-iron-deficient-v1.png', RB_B),
	skin: bk('m8-skin-normal-v1.png', SK_B),
	melanoma: bk('m8-skin-melanoma-v1.png', SK_B),
	protein: bk('m5x-cell-protein-synthesis-v1.png', [279, 265, 1738, 1700]),
	dividing: bk('b5x-cell-dividing-v1.png', [263, 259, 1734, 1695]),
	uv: bk('m6-uv-skin-v1.png', [280, 200, 1720, 1800]),
	pancreas: bk('m8-pancreas-v1.png', [160, 574, 1840, 1424]),
	liver: bk('m8-liver-v1.png', [200, 449, 1800, 1550]),
};
export const CF_CHAN: [number, number][] = [[823, 535], [924, 538], [1022, 544], [1121, 542], [1201, 535]];
export const CF_CLUMP: [number, number] = [1139, 1209];
export const RBC_C: [number, number][] = [[610, 605], [1370, 585], [1065, 1060], [615, 1380], [1460, 1410]];
export const PLATES: PDef[] = Object.values(P);
