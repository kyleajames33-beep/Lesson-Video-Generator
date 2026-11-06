/**
 * B01-only plates (6 Nov quality fix). Kept out of assets.ts because B02 to B05, B07 and M7 B11 import that file.
 * Natural sizes and alpha boxes (PIL, alpha > 20) measured 6 Nov from the files in public/assets/biology/.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
export const LOCAL = {
	lizard: {src: B + 'y11-blue-tongue-lizard-v1.png', nat: [1774, 887], box: [167, 294, 1646, 649]} as PB,
	sperm: {src: B + 'b3a-sperm-v1.png', nat: [2200, 1600], box: [264, 640, 1936, 958]} as PB,
};
export const ASSETS_B01_LOCAL: string[] = Object.values(LOCAL).map(p => p.src);
