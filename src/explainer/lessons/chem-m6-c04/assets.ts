/**
 * M6 C04 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files.
 * - Soil pair (brief 85): acid 200,558..1706,1498 and limed 200,502..1800,1498; drawn on the union box 200,502..1800,1498
 *   so the crossfade is two images at one place. Natural points: roots in the cut face at x 500, 960, 1430, y 1060..1280;
 *   soil block top about y 960; seedling tips about y 560.
 * - Mine drainage (brief 85): box 200,518..1800,1481. Spoil heap upper right (top about 1250,540); the creek runs from
 *   about 420,860 down to 1700,1400.
 * - Scrubber: box 264,160..1737,1840. Smoke 270..640 x, 950..1330 y; duct 640..1000 x, 1080..1260 y; cutaway 1020..1390 x,
 *   720..1440 y; upper nozzles y 830, lower y 1070; slurry pool 920..1400 x, 1470..1680 y; stack top 1190,430; plume 1110..1400 x,
 *   170..400 y. The hook and scene 6 crop it to the duct and smoke (natural 264,880..1010,1400) instead of a mask.
 * - Not used: m6-agricultural-liming-v1.png (shows a human hand).
 */
import {ANTACID, BEAKER, FERT, MARBLE, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export {ANTACID, BEAKER, FERT, MARBLE};
export type {PDef};
const N2 = [2000, 2000] as [number, number];
const SOIL_B: [number, number, number, number] = [200, 502, 1800, 1498];
export const SOIL = {acid: mk('m6-soil-crop-acid-v1.png', N2, SOIL_B), limed: mk('m6-soil-crop-limed-v1.png', N2, SOIL_B)};
export const AMD = mk('m6-acid-mine-drainage-v1.png', N2, [200, 518, 1800, 1481]);
export const SCRUB = mk('m6-flue-gas-scrubber-v1.png', N2, [264, 160, 1737, 1840]);
export const PHMETER = mk('m6-ph-meter-probe-beaker-v1.png', [2048, 2048], [164, 239, 1883, 1809]);
export const FEOH3 = mk('m5x-ppt-feoh3-brown-v1.png', N2, [568, 200, 1431, 1800]);
/** Natural point to fractions of a plate's visible box. */
export const uv = (p: PDef, x: number, y: number): [number, number] => [(x - p.box[0]) / p.box[2], (y - p.box[1]) / p.box[3]];
const LIST: PDef[] = [ANTACID, BEAKER, FERT, MARBLE, SOIL.acid, SOIL.limed, AMD, SCRUB, PHMETER, FEOH3];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
