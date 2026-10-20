/**
 * M6 B10 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files in public/assets/biology/.
 * - New (brief for B6-10): m6-helicoverpa-larva-boll-v1.png (a Helicoverpa caterpillar boring into a green boll) and
 *   m6-dairy-calf-horn-buds-v1.png (a black-and-white calf facing right; its two horn buds sit near natural (1615, 255)
 *   and (1765, 240), at the top of the head).
 * - Reused: Bt cotton, the hornless dairy bull (B3b; always labelled "a hornless dairy bull", never "edited bull": it is
 *   an ordinary bull plate), the bacterium with its plasmid ring (B09's BactIns adds the amber arc), the monoculture
 *   and mixed field (monoculture half centred near natural (590, 1000)), white and golden rice.
 * - Coded: the judging board (case panel, benefit, harm or risk and welfare columns, the "who" row of stakeholder
 *   icons: tractor, spray can, house, bee, building, field strip), join lines, spray bars, the refuge field and
 *   caterpillar glyphs (open = susceptible, filled = resistant), coin, slim DNA strips, magnifier, embryo circles,
 *   question bins, step chips, cards and the countdown. No people.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as B09} from '../bio-m6-b09/assets';

const B = 'assets/biology/';
const mk = (name: string, nat: [number, number], box: [number, number, number, number]): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];

export const PLATES = {
	cotton: B09.cotton,
	bact: B09.bact,
	larva: mk('m6-helicoverpa-larva-boll-v1.png', N2, [76, 95, 1921, 1935]),
	bull: B09.bull,
	calf: mk('m6-dairy-calf-horn-buds-v1.png', N2, [115, 210, 1953, 1794]),
	field: mk('m6-field-monoculture-mixed-v1.png', N2, [200, 709, 1800, 1291]),
	rice: mk('m6-golden-white-rice-v1.png', N2, [200, 685, 1800, 1314]),
};
/** Natural pixel between the calf's two horn buds; the monoculture half of the field plate. */
export const BUDS: [number, number] = [1690, 250];
export const MONO: [number, number] = [590, 1000];
export const ASSETS_B10: string[] = Object.values(PLATES).map(p => p.src);
