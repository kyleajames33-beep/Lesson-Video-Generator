/**
 * M6 P06 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 22 Oct from the real files. Every plate is drawn at native aspect.
 * - New (brief 97): analytical balance (2000 px, box 547,373..1567,1681; beaker with white powder already on the pan;
 *   blank display quad TL 772,1310 TR 1125,1370 BR 1085,1462 BL 728,1392, read coded); burette meniscus close-up
 *   (2000 px, box 807,263..1213,1691; one graduation per 0.1 mL at y 424, 552, 674, 788, 916, 1044, 1167, 1290, 1414,
 *   1538, the line at 916 hidden behind the meniscus, whose bottom sits on it, so the coded scale reads 0.40 there);
 *   methyl orange clip trio (2048 x 1700, box 561,139..1484,1562: the same framing as the phenolphthalein pair and the
 *   empty conical flask, so the yellow, orange and red flasks crossfade at one place).
 * - Reused: the C12 burette, conical flask, white tile; the C07 volumetric pipette and flask; the P02 wash bottle
 *   (nozzle at natural 1455,420) and safety glasses; the C01 beaker; the P03 dropper bottle (indicator); the methyl
 *   orange set (three flasks in one plate, scene 8 thumbnail); the glass funnel (2048 px, box 470,164..1578,1884, rim
 *   centre 1028,190, stem tip 1060,1880).
 */
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BEAKER, BEAKER_LIQ, GLASSES, WASH, WASH_N} from '../chem-m6-p04/assets';
import {BURETTE, BUR_G, CFLASK, TILE} from '../chem-m6-c12/assets';
import {FLASK, FLASK_G, PIPETTE, PIPETTE_G} from '../chem-m6-c07/assets';

export {BEAKER, BEAKER_LIQ, BURETTE, BUR_G, CFLASK, FLASK, FLASK_G, GLASSES, PIPETTE, PIPETTE_G, TILE, WASH, WASH_N};
export type {PDef};
const N2 = [2000, 2000] as [number, number], N4 = [2048, 2048] as [number, number];
export const BALANCE = mk('m6-analytical-balance-v1.png', N2, [547, 373, 1567, 1681]);
export const BAL_G = {screen: [[772, 1310], [1125, 1370], [1085, 1462], [728, 1392]] as [number, number][]};
export const MENISCUS = mk('m6-burette-meniscus-closeup-v1.png', N2, [807, 263, 1213, 1691]);
export const MEN_G = {ticks: [424, 552, 674, 788, 916, 1044, 1167, 1290, 1414, 1538], bottom: 916, cx: 1010, tickX: [1085, 1190] as [number, number], left: 860};
const CLIP_B: [number, number, number, number] = [561, 139, 1484, 1562];
export const MO = {
	yellow: mk('m6-clip-methyl-orange-yellow-v1.png', [2048, 1700], CLIP_B),
	orange: mk('m6-clip-methyl-orange-orange-v1.png', [2048, 1700], CLIP_B),
	red: mk('m6-clip-methyl-orange-red-v1.png', [2048, 1700], CLIP_B),
};
export const MOSET = mk('m6-indicator-methyl-orange-set-v1.png', [2400, 1400], [192, 256, 2208, 1143]);
export const FUNNEL = mk('m6-funnel-v1.png', N4, [470, 164, 1578, 1884]);
export const FUN_G = {rim: [1028, 190] as [number, number], tip: [1060, 1880] as [number, number]};
export const DROPPER = mk('p03-dropper-bottle-v1.png', N2, [746, 219, 1254, 1760]);
const LIST: PDef[] = [BALANCE, MENISCUS, MO.yellow, MO.orange, MO.red, MOSET, FUNNEL, DROPPER, BEAKER, BURETTE, CFLASK, TILE, FLASK, PIPETTE, WASH, GLASSES];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
