import {PLATE_FILES} from './parts';
import {ASSETS as V03_ASSETS} from '../phys-y12-m5-v03/assets';

// The painted launcher base and barrel (brief 187) and the steel ball. Drawn at native aspect only.
// Last time's plates (v03's final frame) are included for the opening cross-fade.
export const ASSETS: string[] = [...new Set([...PLATE_FILES, ...V03_ASSETS])];
