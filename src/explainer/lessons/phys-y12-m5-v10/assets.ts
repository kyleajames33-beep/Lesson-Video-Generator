// Plates used by phys-y12-m5-v10, drawn at native aspect only: the tower crane and its load (scenes 1 to 3 and
// the handoff), the two-layer seesaw (scenes 4 to 9 and the memory card), the metre rule and mass hangers
// (feedback 1), and last time's plates for the opening frame.
import {SEESAW_PLATES} from '../../physics/projectile/balance';
import {CRANE_PLATES} from '../../physics/projectile/turning';
import {ASSETS as V09_ASSETS} from '../phys-y12-m5-v09/assets';

export const ASSETS: string[] = [...new Set([...V09_ASSETS, ...CRANE_PLATES, ...SEESAW_PLATES, 'assets/physics/phys-y11-metre-rule-v1.png', 'assets/physics/phys-y11-mass-hanger-v1.png'])];
