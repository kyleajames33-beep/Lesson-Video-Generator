// Plates used by phys-y12-m7-v06, drawn at native aspect only: the optical bench, laser module, slide holder, screen
// carrier, metre rule and filament lamp, plus v05's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V06_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V06_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
