// Plates used by phys-y12-m8-v13, drawn at native aspect only: the painted guitar and the electron diffraction tube,
// plus the earlier Module 8 plates (v12's final frame opens this lesson) and the decay plates the next lessons share.
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V13_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V13_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
