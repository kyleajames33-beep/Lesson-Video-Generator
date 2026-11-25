// Plates used by phys-y12-m7-v02, drawn at native aspect only: the Sun, Earth, Jupiter and Moon, the toothed wheel,
// plane mirrors, ray box, laser module, light sensors, oscilloscope, satellite, filament lamp and discharge tube (the
// Module 7 light plate set), plus the plates of v01 (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {V02_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V02_PLATES, ...MOTOR_KIT_PLATES])];
