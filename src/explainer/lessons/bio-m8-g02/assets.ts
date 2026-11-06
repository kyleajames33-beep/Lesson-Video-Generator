// M8 G02 (Biology practice) plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 7 Nov from the files in
// public/assets/biology/. All design-named plates are present (the new bowel screening kit and b14's AAV vector
// included). Feature point (natural px): the eye plate's retina at the back of the eye, about (1470, 540), where the layers show.
// Coded: question cards, tables, paired bars and the difference bar, the measure ladder, the screening chain boxes,
// dot fields, the prevented strip, the score chart, the spread strip, the evaluation frame strip, module markers,
// chips, tags, answer boxes, the countdown and the decision board. No people, hands or faces.
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});

export const PL = {
	kit: mk('m8-bowel-screening-kit-v1.png', [203, 229, 1797, 1770]),
	eye: mk('m8-eye-cutaway-v1.png', [177, 160, 1822, 1840]),
	aav: mk('m8-aav-vector-v1.png', [281, 220, 1719, 1779]),
	implant: mk('m8-cochlear-implant-v1.png', [160, 257, 1840, 1743]),
	sun: mk('m8-sun-protection-v1.png', [160, 456, 1840, 1544]),
	glasses: mk('m8-glasses-v1.png', [160, 637, 1840, 1363]),
	kidney: mk('m8-kidney-nephron-v1.png', [160, 235, 1840, 1765]),
};
export const RETINA: [number, number] = [1470, 540];
export const ASSETS_M8G02B: string[] = Object.values(PL).map(p => p.src);
