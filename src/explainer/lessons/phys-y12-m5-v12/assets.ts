// Plates used by phys-y12-m5-v12, drawn at native aspect only: the rear-view and top-view car, the side-view
// car and the truck, and for the handoff the retort stand, boss and steel ball. Last time's plates (v11's
// final frame) are included for the opening cross-fade.
import {CIRCULAR_PLATES} from '../../physics/circular/road-cone';
import {CAR_PLATES as V11_PLATES} from '../phys-y12-m5-v11/parts';
import {SIDE_SRC, TRUCK_SRC} from './parts';

export const ASSETS: string[] = [...new Set([...CIRCULAR_PLATES, SIDE_SRC, TRUCK_SRC, ...V11_PLATES])];
