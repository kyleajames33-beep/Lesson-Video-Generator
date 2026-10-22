/**
 * M6 G04 (Chemistry practice: curves, indicators, back titration) plates. README for Claude:
 * - No new art (design: "Need: no new plates"). Reused at native aspect, never stretched: the C12 burette on its stand
 *   (coded fill; Q2 ammonia in the burette, Q3 the water-rinsed burette with coded droplets and a paler fill) and conical
 *   flask (hook thumbnail, Q2), the P02 wash bottle (Q3), the C14 conductivity meter set-up (Q4, blank screen), the C04
 *   pH meter with probe in a beaker (decision board "Next" chip). Graphs are coded (curves.ts), never images.
 */
import type {PDef} from '../chem-m6-c01/assets';
import {BURETTE, BUR_G, CFLASK, TILE} from '../chem-m6-c12/assets';
import {COND} from '../chem-m6-c14/assets';
import {WASH} from '../chem-m6-p02/assets';
import {PHMETER} from '../chem-m6-c04/assets';

export {BURETTE, BUR_G, CFLASK, COND, PHMETER, TILE, WASH};
export type {PDef};
const LIST: PDef[] = [BURETTE, CFLASK, TILE, COND, WASH, PHMETER];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
