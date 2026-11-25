// Plates used by phys-y12-m8-v12, drawn at native aspect only: the electron diffraction tube, the high-voltage supply
// and the steel ball, plus the earlier Module 8 plates (v11's final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V12_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V12_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
