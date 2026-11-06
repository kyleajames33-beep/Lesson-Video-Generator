// B8-10 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 7 Nov from public/assets/biology/, inspected
// on a light board. Every rate is a coded chart (owner rule); populations are bars, squares and age stacks, never figures.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = [2000, 2000]): PB => ({src: B + f, nat, box});
export const PL = {
	pancreas: mk('m8-pancreas-v1.png', [160, 574, 1840, 1424]),
	lungs: mk('m8-lungs-healthy-v1.png', [201, 160, 1797, 1839]),
};
export const ASSETS_M8B10: string[] = Object.values(PL).map(p => p.src);
