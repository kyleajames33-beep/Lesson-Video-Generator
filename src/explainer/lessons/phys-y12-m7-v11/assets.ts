// Plates used by phys-y12-m7-v11, drawn at native aspect only: the photocell, the bench lamp, the low-voltage supply,
// two multimeters, the bar heater and the spacecraft with its exhaust layer, plus v10's plates (its final frame opens
// this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V11_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V11_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
