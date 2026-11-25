// Plates used by phys-y12-m8-v05, drawn at native aspect only: the painted Sun, the hot-blue star and the molecular
// cloud, plus v04's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V05_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V05_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
