// C8-09 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov from the files in public/assets/chemistry/;
// the cutaway was inspected on a gridded sheet (zones and flight path in parts.tsx CUT). Coded: every spectrum, the gap
// brackets, ion flight dots, break-and-weigh structures, the candidate strip, tables, chips, the balance outline and the
// countdown. No people or hands.
import type {PB} from '../bio-m8-g01/board';

const C = 'assets/chemistry/';
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = [2000, 2000]): PB => ({src: C + f, nat, box});

export const PL = {
	ms: mk('m8-mass-spectrometer-v1.png', [161, 520, 1838, 1478]),
	cut: mk('m8-ms-cutaway-v1.png', [220, 165, 1779, 1034], [2000, 1200]),
	bottle: mk('p03-dropper-bottle-v1.png', [746, 219, 1253, 1759]),
};
export const ASSETS_M8C09: string[] = Object.values(PL).map(p => p.src);
