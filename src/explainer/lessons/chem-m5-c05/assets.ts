/**
 * C5 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Reused painted plates (already in public/): the C3 iron thiocyanate tube pair (hook, rate scenes) and the C3 cobalt
 *   tube triple (from-scratch scene). They are listed through the C3 HAVE set.
 * - Stand-in right now: COPPER (c5-copper-ammonia-tube-v1.png) was not delivered, so the deep blue copper ammonia tube
 *   is a coded tube (CuTube in parts.tsx). Add the file name to HAVE5 only if CuTube is changed to draw it.
 * - Everything else (rate bars, expression builder, number line, beaker, carbon block, tubes of H2, I2 and HI) is coded.
 */
import {CO_BLUE, CO_PINK, CO_PURPLE, HAVE as HAVE3, IRON_DEEP, IRON_START} from '../chem-m5-c03/assets';

const A = 'assets/chemistry/';
export const COPPER = A + 'c5-copper-ammonia-tube-v1.png';
export const HAVE5 = new Set<string>([]);
export const ASSETS: string[] = [IRON_START, IRON_DEEP, CO_PINK, CO_PURPLE, CO_BLUE].filter(a => HAVE3.has(a));
void COPPER;
