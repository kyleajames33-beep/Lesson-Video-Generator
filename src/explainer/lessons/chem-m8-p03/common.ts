// M8 P03 (identifying unknown ions practical) shared pieces: measured lesson lookups and the plates. Alpha boxes measured
// 6 Nov (PIL, alpha > 20). The two well plates share one 2048 x 1365 canvas and one well grid (chem-m5-p03 WELL_X/WELL_Y,
// brief 64 provenance), so coded fills stay in the wells through the black card / white tile cross-fade. The flame set
// (c03a FLAME, v2, one burner position) cross-fades on one burner; FLAME_A gives the flame axis. Bottle labels use
// c03a's LABEL_A. Rack tubes are the aligned m5x set (568, 200, 1432, 1800).
import lesson from '../../../../docs/production/claude-pm/lessons/m8p03/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BOTTLE, FLAME, FLAME_A, LABEL_A, RACK} from '../chem-m8-c03a/common';
import {WELL_X, WELL_Y} from '../chem-m5-p03/assets';

export {Heading} from '../chem-m5-c03/common';
export {BOTTLE, FLAME, FLAME_A, LABEL_A, RACK, WELL_X, WELL_Y};
export type {PDef};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 P03 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const NB = ' ';

const N2: [number, number] = [2000, 2000], N4: [number, number] = [2048, 2048];
export const PLATE_NAT: [number, number] = [2048, 1365];
export const PB = mk('p03-well-plate-black-card-v1.png', PLATE_NAT, [266, 139, 1793, 1237]);
export const PW = mk('p03-well-plate-white-tile-v1.png', PLATE_NAT, [272, 170, 1777, 1211]);
export const WASH = mk('m6-wash-bottle-v1.png', N4, [587, 164, 1460, 1884]);
export const DROPB = mk('p03-dropper-bottle-v1.png', N2, [746, 219, 1254, 1760]);
export const DROPB_LABEL = {cx: 1000, cy: 1300};
export const BEAKER = mk('m6-beaker-v1.png', N4, [278, 164, 1769, 1884]);
export const FUME = mk('m7-fume-cupboard-v1.png', N2, [312, 200, 1688, 1800]);
export const GLASSES = mk('m5x-safety-glasses-v1.png', N2, [215, 637, 1787, 1408]);
export const GLOVES = mk('m5x-gloves-v1.png', N2, [218, 385, 1788, 1617]);
export const WASTE = mk('m5x-waste-bottle-v1.png', N2, [495, 269, 1504, 1743]);
export const WASTE_LABEL = {cx: 1000, cy: 1180};
const CUV_B: [number, number, number, number] = [788, 195, 1213, 1805];
export const CUV1 = mk('m8-cuvette-cu-1-v1.png', N2, CUV_B), CUV5 = mk('m8-cuvette-cu-5-v1.png', N2, CUV_B);

export const PLATES: PDef[] = [PB, PW, BOTTLE, WASH, DROPB, BEAKER, FUME, GLASSES, GLOVES, WASTE, CUV1, CUV5, FLAME.off, FLAME.blue, FLAME.ca, FLAME.cu, RACK.cuoh2, RACK.brown, RACK.agcl, RACK.mgoh2];
void FLAME_A; void LABEL_A;
