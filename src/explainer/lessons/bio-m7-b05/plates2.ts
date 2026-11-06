/**
 * M7 B05 quality-fix plates (6 Nov 2026), lesson-local so assets.ts and parts.tsx (imported by B06) stay unchanged.
 * The healthy leaf is the same plate and alpha box B03 uses (measured 23 Oct); the exam 2 dead spot is drawn on it.
 */
import type {PB} from '../bio-m5-b07/shared';

export const PLATES2 = {
	leaf: {src: 'assets/biology/m7-healthy-leaf-v1.png', nat: [2000, 2000], box: [201, 611, 1799, 1390]} as PB,
};
export const ASSETS_M7B05_FIX: string[] = Object.values(PLATES2).map(p => p.src);
