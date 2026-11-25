// Plates used by phys-y12-m8-v15, drawn at native aspect only: the counter tray and the red and yellow counters, the
// sealed source and Geiger counter, the digital timer, plus the earlier Module 8 plates (v14's final frame opens this
// lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V15_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V15_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
