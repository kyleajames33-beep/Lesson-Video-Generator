import {PlateB, pbH} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import * as A from './assets';

export {PlateB, pbH};
export type {PB};
const P = (src: string, nat: [number, number], box: [number, number, number, number]): PB => ({src, nat, box, have: A.HAVE.has(src)});
/** The two sweet pea plates share one box so they sit as a matched pair. */
const PEA_BOX: [number, number, number, number] = [440, 235, 1655, 1774];
export const PLG = {
	bact: P(A.BACT, [2044, 900], [243, 192, 1880, 704]),
	firefly: P(A.FIREFLY, [2000, 2000], [220, 386, 1740, 1508]),
	koala: P(A.KOALA, [2000, 2000], [235, 219, 1771, 1775]),
	peaPurple: P(A.PEA_PURPLE, [2000, 2000], PEA_BOX),
	peaRed: P(A.PEA_RED, [2000, 2000], PEA_BOX),
};
