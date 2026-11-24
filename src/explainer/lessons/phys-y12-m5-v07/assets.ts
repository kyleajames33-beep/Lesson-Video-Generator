// Plates used by phys-y12-m5-v07, drawn at native aspect only: the launcher and steel ball (stage, attempt
// cards), and for the handoff the launch ramp, retort stand, boss and paper sheet (the kit's ramp rig).
import {BALL_PLATE, LAUNCHER_PLATES} from '../../physics/projectile/board';
import {RAMP_PLATES} from '../../physics/projectile/ramp';

export const ASSETS: string[] = [BALL_PLATE, ...LAUNCHER_PLATES, ...RAMP_PLATES];
