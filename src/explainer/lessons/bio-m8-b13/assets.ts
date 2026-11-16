// B8-13 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov from the files in public/assets/biology/,
// each inspected on a gridded paper sheet. Coded: the campaign frame, the evidence ladder, the prevention timeline, the
// knows-agrees-does bars, the UV index scale, dot rows, line graphs and bar charts, the dated axis, the dot field, cards,
// chips and the countdown. No people, no campaign logos or mascots.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});

export const PL = {
	sun: mk('m8-sun-v1.png', [160, 172, 1840, 1828]),
	melanoma: mk('m8-skin-melanoma-v1.png', [160, 227, 1840, 1773]),
	uvSkin: mk('m6-uv-skin-v1.png', [280, 200, 1720, 1800]),
	clip: mk('m5x-clipboard-sheet-v1.png', [283, 160, 1716, 1840]),
	sail: mk('m8-shade-sail-v1.png', [222, 299, 1780, 1702]),
	tv: mk('m8-television-1980s-blank-v1.png', [220, 352, 1779, 1648]),
	work: mk('m8-outdoor-work-shirt-hat-v1.png', [220, 459, 1780, 1540]),
	protect: mk('m8-sun-protection-v1.png', [160, 456, 1840, 1544]),
	eye: mk('m8-eye-cutaway-v1.png', [177, 160, 1822, 1840]),
	shoes: mk('m8-walking-shoes-v1.png', [220, 437, 1780, 1561]),
};
export const ASSETS_M8B13: string[] = Object.values(PL).map(p => p.src);
