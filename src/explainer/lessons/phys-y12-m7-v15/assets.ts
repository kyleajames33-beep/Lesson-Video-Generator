// Plates used by phys-y12-m7-v15, drawn at native aspect only: the spacecraft and its exhaust layer (the probe), the
// steel ball, the accelerator tunnel and the Sun, plus v14's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V15_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V15_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
