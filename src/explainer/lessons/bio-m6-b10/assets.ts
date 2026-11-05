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
	// Quality pass (6 Nov): reused plates for the stakeholders, the embryos and surrogate, and the exam givens. Alpha boxes
	// measured from the real files (PIL, alpha > 20).
	sprayer: mk('m7-insecticide-sprayer-v1.png', N2, [373, 220, 1627, 1780]),
	bee: mk('b2b-bee-on-flower-v1.png', [1600, 1600], [309, 227, 1291, 1374]),
	coins: mk('y11-coins-v1.png', [1200, 900], [108, 137, 1092, 762]),
	blastocyst: mk('m8-blastocyst-v1.png', N2, [330, 337, 1671, 1663]),
	cow: mk('b3b-dairy-cow-side-v1.png', [2200, 1600], [404, 460, 1796, 1360]),
	salmon: mk('b2-salmon-spawning-v1.png', [1856, 1344], [182, 319, 1675, 1070]),
	ricePlant: mk('m6-rice-plant-panicle-v1.png', N2, [313, 221, 1687, 1779]),
	riceBowls: mk('m6-rice-bowls-white-golden-v1.png', N2, [221, 679, 1779, 1321]),
	cellPlasmid: mk('m6-bacterium-plasmid-v1.png', N2, [200, 551, 1800, 1448]),
};
/** Natural pixel between the calf's two horn buds; the monoculture half of the field plate. */
export const BUDS: [number, number] = [1690, 250];
export const MONO: [number, number] = [590, 1000];
export const ASSETS_B10: string[] = Object.values(PLATES).map(p => p.src);
