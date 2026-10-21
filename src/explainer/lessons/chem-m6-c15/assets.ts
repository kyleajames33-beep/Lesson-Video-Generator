/**
 * M6 C15 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 21 Oct from the real files.
 * - Burette, conical flask, phenolphthalein clip pair and white tile: the C12 plates and geometry (BuretteFill).
 *   Clip pair liquid (fractions of the visible box, read from a gridded crop): surface v 0.49 (u 0.205..0.805),
 *   widest u 0.015..0.985 at v 0.86, floor about v 0.985 (FLASK_LIQ). A multiply tint there turns the flask red.
 * - Antacid tablets and marble chips in acid (C01/C02 set): hook, scenes 2 and 5, attempt 1.
 * - Conductivity meter titration set (C14 geometry, coded level bar on its blank screen). Its beaker liquid, as
 *   fractions of the visible box: surface v 0.40 (u 0.18..0.52), floor v 0.665 (COND_LIQ); tinted red for vinegar.
 * - New (brief 92): red wine vinegar bottle (2048 px, box 726,163..1322,1886; same bottle as the C01 vinegar);
 *   conical flask on a hotplate (2000 px, box 367,52..1641,1949; steam and bubbles, no hands).
 */
import {ANTACID, MARBLE, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BURETTE, BUR_G, CFLASK, PHTH, TILE} from '../chem-m6-c12/assets';
import {COND, COND_SCREEN} from '../chem-m6-c14/assets';

export {ANTACID, MARBLE, BURETTE, BUR_G, CFLASK, PHTH, TILE, COND, COND_SCREEN};
export type {PDef};
export const RVIN = mk('m6-red-wine-vinegar-bottle-v1.png', [2048, 2048], [726, 163, 1322, 1886]);
export const HOTPLATE = mk('m6-conical-flask-hotplate-v1.png', [2000, 2000], [367, 52, 1641, 1949]);
export const FLASK_LIQ: [number, number][] = [[0.205, 0.49], [0.805, 0.49], [0.93, 0.74], [0.985, 0.86], [0.96, 0.94], [0.5, 0.985], [0.04, 0.94], [0.015, 0.86], [0.07, 0.74]];
export const COND_LIQ: [number, number][] = [[0.178, 0.405], [0.522, 0.405], [0.516, 0.655], [0.49, 0.668], [0.21, 0.668], [0.186, 0.655]];
const LIST: PDef[] = [BURETTE, CFLASK, PHTH.clear, PHTH.pink, TILE, ANTACID, MARBLE, COND, RVIN, HOTPLATE];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
