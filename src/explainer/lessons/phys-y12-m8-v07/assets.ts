// Plates used by phys-y12-m8-v07, drawn at native aspect only: the Maltese-cross tube, the paddle-wheel tube and wheel,
// the Millikan plates, the atomiser, the high-voltage supply, the oil drop and the top-pan balance, plus the earlier
// Module 8 plates (v06's final frame opens this lesson).
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V07_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V07_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
