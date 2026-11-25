// Plates used by phys-y12-m7-v09, drawn at native aspect only: the bar heater, the Sun, the white and hot blue stars,
// the zinc (metal) plate and the bench lamp, plus v08's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V09_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V09_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
