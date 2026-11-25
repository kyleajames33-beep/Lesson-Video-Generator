// Plates used by phys-y12-m6-v02, drawn at native aspect only: the high-voltage supply (the anchor), plus last
// time's plates for the opening frame. The cathode ray tube plate (y12p-crt-tube-v1.png) is still requested.
import {V02_PLATES} from './parts';

export const ASSETS: string[] = [...new Set(V02_PLATES)];
