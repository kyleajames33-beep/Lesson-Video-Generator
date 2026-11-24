// Plates used by phys-y12-m5-v09, drawn at native aspect only: the spanner and nut plate (scenes 1 to 9, the
// memory card), the tower crane and its load (the handoff), and last time's plates for the opening frame.
import {CRANE_PLATES, SPANNER_PLATES} from '../../physics/projectile/turning';
import {ASSETS as V08_ASSETS} from '../phys-y12-m5-v08/assets';

export const ASSETS: string[] = [...new Set([...V08_ASSETS, ...SPANNER_PLATES, ...CRANE_PLATES])];
