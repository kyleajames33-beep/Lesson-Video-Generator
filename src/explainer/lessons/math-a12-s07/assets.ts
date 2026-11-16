import {DIE_RED, S07_PLATES} from './parts';

// Plates: the bus stop and the bus (scenes 1 to 6, 9, 10, 15, 16), and s01's red die (scene 8).
export const ASSETS: string[] = [...S07_PLATES, DIE_RED].map(p => p.src);
