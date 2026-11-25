// Plates used by phys-y12-m8-v06, drawn at native aspect only: the painted Sun, the three painted stars, the gold ring,
// the planetary nebula, the supernova remnant, the molecular cloud and the Maltese-cross tube (final frame), plus the
// earlier Module 8 plates (v05's final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V06_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V06_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
