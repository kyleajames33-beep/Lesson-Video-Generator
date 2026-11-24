// Plates used by phys-y12-m5-v11, drawn at native aspect only: the tower crane (the hook inset), the top-view
// car plates and dashboard cluster, the steel ball (the cut string), and last time's plates for the opening.
import {ASSETS as V10_ASSETS} from '../phys-y12-m5-v10/assets';
import {CAR_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V10_ASSETS, ...CAR_PLATES])];
