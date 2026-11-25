// Plates used by phys-y12-m7-v08, drawn at native aspect only: the optical bench, laser module, filament lamp, slide
// holders, light sensor, protractor and data logger, plus v07's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V08_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V08_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
