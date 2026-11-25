// Plates used by phys-y12-m7-v03, drawn at native aspect only: the filament lamp, discharge tube, EHT supply, pocket
// spectroscope, vapour cell, paper sheet, Sun and Moon (the Module 7 light plate set), plus v02's plates (its final
// frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V03_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V03_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
