// Plates used by phys-y12-m5-v15, drawn at native aspect only: the top-view car (the bend), the wooden block
// (scene 2), the rear-view car (scene 6), the steel ball (the vertical circle) and the whirling-bung apparatus
// for the handoff (retort stand, boss, tube clamp, stopper bung, paper clip, mass hanger).
import {BALL_PLATE} from '../../physics/projectile/board';
import {CIRCULAR_PLATES} from '../../physics/circular/road-cone';
import {BUNG_PLATES} from '../../physics/circular/bung';
import {BLOCK_SRC, CAR_TOP_SRC} from './parts';

export const ASSETS: string[] = [...new Set([...CIRCULAR_PLATES, ...BUNG_PLATES, CAR_TOP_SRC, BLOCK_SRC, BALL_PLATE])];
