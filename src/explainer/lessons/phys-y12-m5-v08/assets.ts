// Plates used by phys-y12-m5-v08, drawn at native aspect only: the ramp rig (launch ramp, retort stand, boss,
// steel ball, paper and carbon paper), the spirit level, plumb bob, metre rule, catch tray, light gate, and the
// spanner and nut plate for the handoff.
import {BALL_PLATE} from '../../physics/projectile/board';
import {RAMP_PLATES} from '../../physics/projectile/ramp';
import {SPANNER_PLATES} from './parts';

export const ASSETS: string[] = [BALL_PLATE, ...RAMP_PLATES, ...SPANNER_PLATES, 'assets/physics/y12p-spirit-level-v1.png', 'assets/physics/y12p-plumb-bob-v1.png', 'assets/physics/phys-y11-metre-rule-v1.png', 'assets/physics/phys-y11-sand-tray-v1.png', 'assets/physics/phys-y11-light-gate-v1.png'];
