// Plates used by phys-y12-m7-v14, drawn at native aspect only: the spacecraft and its exhaust layer, the Earth, the white star,
// the space station, plus v13's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V14_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V14_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
