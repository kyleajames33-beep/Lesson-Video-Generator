// Plates used by phys-y12-m6-v01, drawn at native aspect only: the high-voltage supply (the anchor and the live
// dial) and the oil drop, plus last time's plates for the opening frame.
import {V01_PLATES} from './parts';
import {V23_PLATES} from '../phys-y12-m5-v23/parts';

export const ASSETS: string[] = [...new Set([...V01_PLATES, ...V23_PLATES])];
