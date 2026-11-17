import {BOTTLE, HEX_BOLT, S12_PLATES} from './parts';

// Plates: the filling head (scenes 1, 2, 4, 5, 9), the reused PET bottle (conveyor, scenes 1 to 5, 9, 14), the hex
// bolt (scene 6) and the cereal box (scenes 7, 8).
export const ASSETS: string[] = [...S12_PLATES, BOTTLE, HEX_BOLT].map(p => p.src);
