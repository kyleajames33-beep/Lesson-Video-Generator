// Plates used by phys-y12-m8-v19: the painted Sun (scenes 1, 10), the painted tokamak (11, 15, 16) and the steel ball
// (8); nuclei, graphs, ledgers and field lines are coded diagrams. The earlier Module 8 plates stay listed because
// v18's final frame opens this lesson.
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V19_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V19_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
