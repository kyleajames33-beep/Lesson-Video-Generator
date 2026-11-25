// Plates used by phys-y12-m7-v10, drawn at native aspect only: the photocell, the multimeter, the bench lamp, the zinc
// (metal) plate and the digital timer, plus v09's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V10_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V10_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
