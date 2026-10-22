/**
 * M6 P01 plates (red cabbage indicator practical). README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files. Every plate is drawn at native aspect.
 * - New (brief 98): chopped red cabbage quarter (2000 px, box 282,588..1717,1413); steeping beaker (2000 px, box
 *   570,439..1431,1567); filter funnel in a conical flask with purple filtrate (2000 px, box 650,327..1350,1674).
 * - Red cabbage clips (2048 x 1700, all four share box 424,143..1625,1560, so purple, red, green and yellow crossfade
 *   at one place): purple and green from C13, red and yellow from brief 98. Liquid surface at natural y about 520.
 * - P03 white-tile well plate (2048 x 1365): well centres WELL_X / WELL_Y (canvas px), inner radius about 54.
 * - P03 dropper bottle (2000 px, box 746,219..1254,1760): blank label about x 765..1235, y 1020..1490; the dropper
 *   (cap and bulb x 830..1170, y 200..690; glass stem x 975..1025 down to y 1700) is lifted by clipping the plate.
 * - Reused: C15 hotplate flask, C04 pH meter, C01 vinegar, cleaner and baking soda, C13 phenolphthalein set, P02
 *   glasses, gloves and wash bottle, C12 burette (handoff chip).
 */
import {CLEANER, SODA_BOX, VINEGAR, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';
import {HOTPLATE} from '../chem-m6-c15/assets';
import {CABBAGE, PH_SET} from '../chem-m6-c13/assets';
import {BURETTE} from '../chem-m6-c12/assets';
import {GLASSES, GLOVES, WASH} from '../chem-m6-p02/assets';
import {PLATE_WHITE, WELL_X, WELL_Y, WELL_R} from '../chem-m5-p03/assets';

export {BURETTE, CLEANER, GLASSES, GLOVES, HOTPLATE, PHMETER, PH_SET, PLATE_WHITE, SODA_BOX, VINEGAR, WASH, WELL_R, WELL_X, WELL_Y};
export type {PDef};
const N2 = [2000, 2000] as [number, number];
const CAB_B: [number, number, number, number] = [424, 143, 1625, 1560];
export const CAB = {
	p: CABBAGE.purple, g: CABBAGE.green,
	r: mk('m6-clip-red-cabbage-red-v1.png', [2048, 1700], CAB_B),
	y: mk('m6-clip-red-cabbage-yellow-v1.png', [2048, 1700], CAB_B),
};
export const CAB_SURF = 520;
export const CHOPPED = mk('p01-red-cabbage-chopped-v1.png', N2, [282, 588, 1717, 1413]);
export const STEEP = mk('p01-cabbage-steeping-beaker-v1.png', N2, [570, 439, 1431, 1567]);
export const FILTER = mk('p01-filter-funnel-flask-v1.png', N2, [650, 327, 1350, 1674]);
export const DROPB = mk('p03-dropper-bottle-v1.png', N2, [746, 219, 1254, 1760]);
export const DROP_N = {label: [765, 1020, 1235, 1490] as [number, number, number, number], cap: [830, 200, 1170, 690] as [number, number, number, number], stem: [975, 690, 1025, 1705] as [number, number, number, number], tip: [1000, 1700] as [number, number]};
const LIST: PDef[] = [CAB.p, CAB.g, CAB.r, CAB.y, CHOPPED, STEEP, FILTER, DROPB, PLATE_WHITE, HOTPLATE, PHMETER, VINEGAR, CLEANER, SODA_BOX, PH_SET, GLASSES, GLOVES, WASH, BURETTE];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
