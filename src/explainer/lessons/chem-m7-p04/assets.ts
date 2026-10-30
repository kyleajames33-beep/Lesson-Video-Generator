// M7 P04 plates (see common.ts). Structures, chips, cards, the ladder, the evidence table and the risk table are coded.
import {BATH, DICH, DISTIL, FEHL, GLASSES, HOOD, LITM, REFLUX, TOLL, WASTE} from './common';

export const ASSETS: string[] = [...new Set([BATH.before, BATH.after, DICH.orange, DICH.green, DISTIL, REFLUX, TOLL.clear, TOLL.mirror, FEHL.blue, FEHL.red, LITM.blue, LITM.redEnd, GLASSES, WASTE, HOOD].map(p => p.src))];
