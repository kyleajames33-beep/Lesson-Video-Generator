// Plates used by phys-y12-m5-v02, drawn at native aspect only. The opening reuses v01's final frame (with the
// drop-and-launch demonstrator), so its plates are listed too.
import {BALL_PLATE, LAUNCHER_PLATES} from '../../physics/projectile/board';
import {dropLaunchAssets} from '../../physics/projectile/demonstrator';

export const ASSETS: string[] = [BALL_PLATE, ...LAUNCHER_PLATES, ...dropLaunchAssets()];
