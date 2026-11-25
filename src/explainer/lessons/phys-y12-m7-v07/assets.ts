// Plates used by phys-y12-m7-v07, drawn at native aspect only: the optical bench, laser module, slide holder, screen
// carrier, metre rule, pocket spectroscope and light sensor, plus v06's plates (its final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {SENSOR} from '../../physics/light/plates';
import {V07_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V07_PLATES, SENSOR.src, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
