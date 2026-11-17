import {CHIP_BAG, S10_PLATES, SCALES} from './parts';

// Plates: the apple, the apple crate, the graphing calculator and the platform scale (scenes 1 to 11); s09's chip bag
// (opening frame and scene 6); Biology's snapper and golden perch (handoff).
export const ASSETS: string[] = [...S10_PLATES, CHIP_BAG, SCALES].map(p => p.src);
