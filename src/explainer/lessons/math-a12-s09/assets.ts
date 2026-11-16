import {BUS_STOP, CHIP_BAG, S09_PLATES} from './parts';

// Plates: the chip bag, the potato chip and the platform scale (scene 1); s07's bus stop (scene 6, the flat bus wait).
export const ASSETS: string[] = [...S09_PLATES, CHIP_BAG, BUS_STOP].map(p => p.src);
