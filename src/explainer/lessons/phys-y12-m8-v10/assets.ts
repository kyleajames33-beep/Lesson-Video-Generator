// Plates used by phys-y12-m8-v10, drawn at native aspect only: the hydrogen discharge tube, the pocket spectroscope,
// the high-voltage supply and the vapour cell (hydrogen gas), plus the earlier Module 8 plates (v09's final frame opens
// this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V10_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V10_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
