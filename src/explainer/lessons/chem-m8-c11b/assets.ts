// C8-11b plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov. Coded: every NMR spectrum (measured
// shifts, design Numbers to verify), the magnet bore, nuclei, electron cloud, radio squiggles, structures with
// environment rings, mirror lines, the abundance grid, the decoupling inset, the data sheet card, chips and the
// countdown. No people or hands.
import type {PB} from '../bio-m8-g01/board';

const C = 'assets/chemistry/';
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = [2000, 2000]): PB => ({src: C + f, nat, box});

export const PL = {
	nmr: mk('m8-nmr-machine-v1.png', [160, 167, 1839, 1831]),
	tube: mk('m8-nmr-sample-tube-v1.png', [889, 220, 1110, 1779]),
};
export const ASSETS_M8C11B: string[] = Object.values(PL).map(p => p.src);
