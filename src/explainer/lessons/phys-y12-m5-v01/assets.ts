// Plates used by phys-y12-m5-v01, drawn at native aspect only. The drop-and-launch demonstrator layers are
// added automatically once they exist (see src/explainer/physics/projectile/demonstrator.tsx).
import {BALL_PLATE} from '../../physics/projectile/board';
import {dropLaunchAssets} from '../../physics/projectile/demonstrator';
import {MOON_PLATES} from './s1';

export const ASSETS: string[] = [BALL_PLATE, ...MOON_PLATES, ...dropLaunchAssets()];
