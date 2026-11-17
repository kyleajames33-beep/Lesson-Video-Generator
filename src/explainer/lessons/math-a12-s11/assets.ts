import {PERCH, S11_PLATES, SNAPPER} from './parts';

// Plates: Biology's snapper and golden perch (scenes 1 to 5, 9, 15), the reused PET bottle (scenes 6, 8, 14) and the
// hex bolt (scene 7).
export const ASSETS: string[] = [SNAPPER, PERCH, ...S11_PLATES].map(p => p.src);
