// Plates used by phys-y12-m6-v03, drawn at native aspect only: the high-voltage supply (the gun's supply and the
// live dial), plus last time's plates for the opening frame. The cathode ray tube plate (y12p-crt-tube-v1.png) is
// still requested; the gun is drawn exam style meanwhile.
import {V03_PLATES} from './parts';

export const ASSETS: string[] = [...new Set(V03_PLATES)];
