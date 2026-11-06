/**
 * M7 B08 quality-fix plates (6 Nov 2026), lesson-local so assets.ts (imported by g03) stays untouched.
 * Alpha box measured with PIL (alpha > 20) from the real file.
 */
import type {PB} from '../bio-m5-b07/shared';

export const PLATES2 = {
	/** House mouse, side view (Y11 plate). */
	mouse: {src: 'assets/biology/y11-house-mouse-v1.png', nat: [1423, 1105], box: [126, 149, 1343, 959]} as PB,
};
export const ASSETS2_M7B08: string[] = Object.values(PLATES2).map(p => p.src);
