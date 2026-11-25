// Plates used by phys-y12-m7-v13, drawn at native aspect only: the spacecraft, the Earth, the white star, the cloud
// chamber, the atomic clock, the space station and the steel ball, plus v12's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V13_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V13_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
