// Plates used by phys-y12-m8-v02, drawn at native aspect only: the painted galaxy, the white star (the pulsing star in
// scene 3), the horn antenna, the molecular cloud and the Sun, plus v01's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V02_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V02_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
