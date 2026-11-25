// Plates used by phys-y12-m8-v01, drawn at native aspect only: the painted galaxy (scenes 1, 12 and 17), plus v16's
// plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V01_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V01_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
