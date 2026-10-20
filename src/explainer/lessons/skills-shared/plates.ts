/**
 * Painted plates used by the skills series (all existing; none new). Natural sizes and alpha boxes measured
 * 20 Oct with PIL (alpha > 20). Aligned pairs share one box so a crossfade is two images at one place.
 * - Iron thiocyanate tube pair (C3): 1280 x 1792, box 468,209 to 814,1517 (tube in a wire stand; liquid top about
 *   v 0.25 of the box, mouth at the top edge, tube axis about u 0.5).
 * - Cattle (B10): roan, red, white, 2000 square, side view facing left.
 * - Fruit flies (B8/B10): white-eyed and red-eyed, 2000 square, top view.
 * - Sparkling water bottles (C1): sealed and open (cap beside it), 1041 x 1822.
 */
import {mkPlate} from './board';

const C = 'assets/chemistry/', B = 'assets/biology/';
const TUBE_B: [number, number, number, number] = [468, 209, 814, 1517];
export const IRON = {start: mkPlate(C + 'c3-iron-tube-start-v1.png', [1280, 1792], TUBE_B), deep: mkPlate(C + 'c3-iron-tube-deep-v1.png', [1280, 1792], TUBE_B)};
export const IRON_G = {axisU: 0.5, mouthV: 0.02, liquidV: 0.26};
export const COW = {
	roan: mkPlate(B + 'm5x-cattle-roan-v1.png', [2000, 2000], [229, 338, 1771, 1641]),
	red: mkPlate(B + 'm5x-cattle-red-v1.png', [2000, 2000], [221, 388, 1776, 1630]),
	white: mkPlate(B + 'm5x-cattle-white-v1.png', [2000, 2000], [224, 382, 1780, 1628]),
};
export const FLY = {
	white: mkPlate(B + 'm5x-fly-white-eye-v1.png', [2000, 2000], [443, 389, 1560, 1618]),
	red: mkPlate(B + 'm5x-fly-red-eye-v1.png', [2000, 2000], [445, 394, 1560, 1619]),
};
export const SODA = {
	sealed: mkPlate(C + 'c1-sparkling-bottle-sealed-v1.png', [1041, 1822], [326, 234, 716, 1529]),
	open: mkPlate(C + 'c1-sparkling-bottle-open-v1.png', [1041, 1822], [325, 182, 880, 1532]),
};
