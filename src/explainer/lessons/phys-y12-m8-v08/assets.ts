// Plates used by phys-y12-m8-v08, drawn at native aspect only: the scattering chamber and its arm layer, plus the
// earlier Module 8 plates (v07's final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V08_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V08_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
