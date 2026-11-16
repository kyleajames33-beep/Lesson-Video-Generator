// C8-10 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov. Coded: every IR trace (measured point
// files, irdata.ts), band markers, range shades, the vibrating bond, the beam and sample cell, hydrogen-bond sketches,
// the data sheet card, structures, chips and the countdown. No people or hands.
import type {PB} from '../bio-m8-g01/board';

const C = 'assets/chemistry/';
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = [2000, 2000]): PB => ({src: C + f, nat, box});

export const PL = {
	ir: mk('m8-ir-spectrometer-v1.png', [161, 412, 1839, 1587]),
	bottle: mk('p03-dropper-bottle-v1.png', [746, 219, 1253, 1759]),
};
export const ASSETS_M8C10: string[] = Object.values(PL).map(p => p.src);
