// Plates used by phys-y12-m7-v12, drawn at native aspect only: the spacecraft and its exhaust layer, the Earth, the
// steel ball, the car seen from above and the lift car, plus v11's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V12_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V12_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
