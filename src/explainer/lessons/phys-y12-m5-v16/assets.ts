// Plates used by phys-y12-m5-v16, drawn at native aspect only: the whirling-bung apparatus (retort stand, boss,
// tube clamp, stopper bung, paper clip, mass hanger), the stopwatch, top-pan balance, metre rule, safety glasses,
// the Earth and the Moon, and (for the conical-pendulum reminder) the steel ball.
import {CIRCULAR_PLATES} from '../../physics/circular/road-cone';
import {BUNG_PLATES} from '../../physics/circular/bung';
import {V16_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...BUNG_PLATES, ...V16_PLATES, ...CIRCULAR_PLATES])];
