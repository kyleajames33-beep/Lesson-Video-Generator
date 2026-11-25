// Plates used by phys-y12-m8-v11, drawn at native aspect only: the hydrogen discharge tube, the pocket spectroscope and
// the high-voltage supply, plus the earlier Module 8 plates (v10's final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V11_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V11_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
