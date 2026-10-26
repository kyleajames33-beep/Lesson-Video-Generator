// M7 P01 plates: the new probe stand and fume cupboard (brief 101) and reused plates (see common.ts). Graphs, tables,
// cards, molecules, wisps, readouts and the risk table are coded.
import {BUNSEN, BURNER, DBOTTLE, GLASSES, GLOVES, HOOD, PROBE, STOPPER, THERMO_COLD, TUBE, WASTE} from './common';

export const ASSETS: string[] = [...new Set([PROBE, HOOD, DBOTTLE, TUBE, BUNSEN, BURNER, GLASSES, GLOVES, STOPPER, WASTE, THERMO_COLD].map(p => p.src))];
