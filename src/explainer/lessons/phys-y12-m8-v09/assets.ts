// Plates used by phys-y12-m8-v09, drawn at native aspect only: the polonium-beryllium source, lead bricks, paraffin wax,
// ionisation chamber and needle, the gold ring, the vapour cell (nitrogen gas), the steel ball, plus the earlier
// Module 8 plates (v08's final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V09_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V09_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
