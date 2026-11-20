// Y11 Chem M1 V15 plates (see common.ts): the aligned trough set (water, lithium, sodium, potassium), the oil jar, the
// fresh and tarnished cut sodium pair, the phenolphthalein flask and the potassium and sodium flame plates. V14's final
// frame (bars and the water trough) comes in through its handoff scene, which the hook shows frozen for its first frames.
import {PLATES} from './common';
import {ASSETS as V14_ASSETS} from '../chem-y11-m1-v14/assets';

export const ASSETS: string[] = [...new Set([...PLATES.map(p => p.src), ...V14_ASSETS])];
