// Plates used by phys-y12-m7-v16, drawn at native aspect only: the Sun, the spacecraft (the probe at rest), the power
// station, the fuel can, the top-pan balance, the painted flame and the lit Bunsen burner, plus v15's plates (its final
// frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V16_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V16_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
