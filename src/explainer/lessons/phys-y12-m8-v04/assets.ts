// Plates used by phys-y12-m8-v04, drawn at native aspect only: the Sun, the three painted stars and the painted Earth,
// plus v03's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V04_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V04_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
