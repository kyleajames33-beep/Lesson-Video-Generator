/**
 * M6 C14 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 21 Oct from the real files.
 * - pH meter with probe in a beaker (C04 set, 2048 px): two whole plates in the hook (C07 FullMeter, amber readouts that
 *   follow the two computed curves as the dose counter runs).
 * - Burette on clamp stand (C12 geometry): hook only, the titrant, with the C12 coded fill.
 * - Ammonia bottle (C01 set): scene 7, small.
 * - Conductivity meter titration set (2048 px): box 250,164..1797,1884; two probes clamped in a stirred beaker on a
 *   magnetic stirrer, a handheld meter with a blank screen, no person or hand. The screen quad (natural px) is
 *   1355,1028 / 1650,1018 / 1675,1285 / 1380,1295 (measured from a gridded crop); a coded level bar sits on it (no
 *   number, because the graphs use relative units).
 */
import {AMMONIA, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';
import {BURETTE, BUR_G} from '../chem-m6-c12/assets';

export {AMMONIA, BURETTE, BUR_G, PHMETER};
export type {PDef};
export const COND = mk('m6-conductivity-meter-titration-v1.png', [2048, 2048], [250, 164, 1797, 1884]);
export const COND_SCREEN: [number, number][] = [[1355, 1028], [1650, 1018], [1675, 1285], [1380, 1295]];
const LIST: PDef[] = [PHMETER, BURETTE, AMMONIA, COND];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
