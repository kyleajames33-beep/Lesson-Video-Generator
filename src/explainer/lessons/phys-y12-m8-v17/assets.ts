// Plates used by phys-y12-m8-v17: the painted polonium-beryllium source (scene 12; the 1919 chamber, nuclei, ledgers
// and curves are coded diagrams); the earlier Module 8 plates stay listed because v16's final frame opens this lesson.
import {MOTOR_KIT_PLATES} from '../../physics/electromagnetism/motor';
import {EM_PLATES} from '../../physics/electromagnetism/plates';
import {V17_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V17_PLATES, ...MOTOR_KIT_PLATES, ...EM_PLATES])];
