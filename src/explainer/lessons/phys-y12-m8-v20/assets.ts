// Plates used by phys-y12-m8-v20: the painted linac tunnel (scenes 1, 3, 17, 18), the painted cloud chamber (10, 11)
// and the painted reactor pool (12, small); quarks, panels, tracks, charts, the tree and the board are coded diagrams.
// v19's final frame (scene 1, frame 0) is fully coded, so no earlier plate is needed.
import {OPAL_PLATE} from '../phys-y12-m8-v18/parts';
import {CLOUD, LINAC} from './parts';

export const ASSETS: string[] = [LINAC.src, CLOUD.src, OPAL_PLATE.src];
