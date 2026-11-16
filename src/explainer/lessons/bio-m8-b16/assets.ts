// B8-16 plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 16 Nov from the files in public/assets/biology/,
// each inspected on a gridded paper sheet. The five eye states (normal, long, short, cataract, artificial lens) share one
// union box, and so do the three corneal close-ups, so every cross-fade stays in register. Feature points are natural
// pixels read off gridded crops (optical axis at y 940; cornea apex x 190; lens centre x 750; retina on the axis at
// x 1500 normal, 1730 long, 1400 short; optic nerve at the right).
// Coded: the light pathway strip with flags, fog and technology marks, light rays, the focal point marker, lens
// cross-sections, the world dot block, the protein dot inset, the accommodation ring, the two-curve cornea, chips, tags
// and the countdown. No people, heads, hands or faces.
import type {PB} from '../bio-m8-g01/board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});
const EYE: [number, number, number, number] = [167, 145, 1877, 1854];
const COR: [number, number, number, number] = [632, 163, 1367, 1838];

export const PL = {
	eye: mk('m8-eye-cutaway-v1.png', EYE),
	long: mk('m8-eye-cutaway-long-v1.png', EYE),
	short: mk('m8-eye-cutaway-short-v1.png', EYE),
	cat: mk('m8-eye-cutaway-cataract-v1.png', EYE),
	iol: mk('m8-eye-cutaway-iol-v1.png', EYE),
	corA: mk('m8-cornea-closeup-v1.png', COR),
	corB: mk('m8-cornea-lasik-flap-v1.png', COR),
	corC: mk('m8-cornea-flattened-v1.png', COR),
	lens: mk('m8-intraocular-lens-v1.png', [420, 202, 1580, 1798]),
	glasses: mk('m8-glasses-v1.png', [160, 637, 1840, 1363]),
	contacts: mk('m8-contact-lenses-v1.png', [160, 620, 1840, 1379]),
	map: mk('m8-world-map-v1.png', [160, 504, 1840, 1495]),
	kidney: mk('m8-kidney-nephron-v1.png', [160, 235, 1840, 1765]),
};
/** Feature points (natural pixels). */
export const FP = {
	axis: 940, cornea: 195, lens: 750, retina: 1500, retinaLong: 1730, retinaShort: 1400,
	nerve: [1800, 1065] as [number, number],
	lensTop: [750, 690] as [number, number], lensBot: [750, 1200] as [number, number],
	corApex: [660, 1000] as [number, number], // corneal close-up: front surface on the axis
};
export const ASSETS_M8B16: string[] = Object.values(PL).map(p => p.src);
