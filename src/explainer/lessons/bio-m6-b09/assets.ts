/**
 * M6 B09 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files in public/assets/biology/.
 * - New (brief for B6-09): m6-bread-loaf-crumb-v1.png (tin loaf with its cut face and one slice in front; the slice's
 *   cut face, full of air holes, sits near natural (409, 1068)).
 * - Reused: the merino (B3b), the insulin vial, budding yeast (Y11), the milk glass (B2c), the pancreas (M8), the
 *   bacterium with its teal plasmid ring (ring centre natural (1183, 955), radius about 58), Bt cotton, the insemination
 *   straw and tank, the paintbrush pollination flower (B2b, no hand), tissue-culture jars and the strawberry runner
 *   (the -alpha file; the plain file has no alpha). m6-hand-pollination-v1.png is never used (it shows a hand).
 * - Coded: the four-lane board, slim DNA strips, allele rings, the flock bars, sugar and gas glyphs, enzyme blob,
 *   detergent box, cheese wedge, timeline, chips, cards and the countdown. No people.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];

export const PLATES = {
	bread: mk('m6-bread-loaf-crumb-v1.png', N2, [22, 224, 1984, 1781]),
	sheep: mk('b3b-merino-sheep-side-v1.png', [2200, 1600], [549, 560, 1651, 1360]),
	vial: mk('m6-insulin-vial-v1.png', N2, [648, 200, 1350, 1800]),
	yeast: mk('y11-budding-yeast-v1.png', [1374, 1145], [252, 253, 1138, 914]),
	milk: mk('b2c-milk-glass-bench-v1.png', [1800, 1200], [493, 228, 1346, 984]),
	pancreas: mk('m8-pancreas-v1.png', N2, [160, 574, 1840, 1424]),
	bact: mk('m6-bacterium-plasmid-v1.png', N2, [200, 551, 1800, 1448]),
	cotton: mk('m6-bt-cotton-v1.png', N2, [273, 200, 1726, 1800]),
	straw: mk('m6-insemination-straw-tank-v1.png', N2, [331, 200, 1669, 1800]),
	brush: mk('b2b-paintbrush-pollination-v1.png', [1683, 1600], [332, 251, 1468, 1332]),
	jars: mk('m6-tissue-culture-jars-v1.png', N2, [200, 627, 1798, 1373]),
	runner: mk('strawberry-runner-botanical-v1-alpha.png', [1672, 941], [0, 71, 1672, 913]),
	bull: mk('b3b-dairy-bull-side-v1.png', [2200, 1600], [401, 460, 1798, 1360]),
};
/** Natural pixel of the slice's holey cut face (bread) and the plasmid ring centre (bacterium). */
export const CRUMB: [number, number] = [409, 1068];
export const RING: [number, number] = [1183, 955];
export const RING_R = 58;
export const ASSETS_B09: string[] = Object.values(PLATES).map(p => p.src);
