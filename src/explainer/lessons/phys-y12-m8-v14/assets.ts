// Plates used by phys-y12-m8-v14, drawn at native aspect only: the sealed source, the Geiger counter, the paper and
// aluminium absorbers and the lead bricks, plus the earlier Module 8 plates (v13's final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V14_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V14_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
