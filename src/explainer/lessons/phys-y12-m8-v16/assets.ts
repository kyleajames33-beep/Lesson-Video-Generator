// Plates used by phys-y12-m8-v16: none of its own (the balance, nuclei and curve are coded diagrams); the earlier
// Module 8 plates stay listed because v15's final frame opens this lesson.
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V16_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V16_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
