// C8-12 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov. Coded: every spectrum (stick, IR from
// measured point files, carbon-13, proton with integration), the evidence ledger, the candidate strip, the piece
// assembly, the crossword grid, structures with environment rings, chips and the countdown. No people or hands.
import type {PB} from '../bio-m8-g01/board';

const C = 'assets/chemistry/';
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = [2000, 2000]): PB => ({src: C + f, nat, box});

export const PL = {
	bottle: mk('p03-dropper-bottle-v1.png', [746, 219, 1253, 1759]),
	ms: mk('m8-mass-spectrometer-v1.png', [161, 520, 1838, 1478]),
	ir: mk('m8-ir-spectrometer-v1.png', [161, 412, 1839, 1587]),
	nmr: mk('m8-nmr-machine-v1.png', [160, 167, 1839, 1831]),
};
export const ASSETS_M8C12: string[] = Object.values(PL).map(p => p.src);
