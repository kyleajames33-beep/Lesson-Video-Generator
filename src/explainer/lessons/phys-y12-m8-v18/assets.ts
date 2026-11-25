// Plates used by phys-y12-m8-v18: the painted OPAL pool (scenes 1, 12, 16, 17; nuclei, chains, cores and curves are
// coded diagrams); the earlier Module 8 plates stay listed because v17's final frame opens this lesson.
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V18_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V18_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
