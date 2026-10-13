/**
 * C5 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Reused painted plates (already in public/): the C3 iron thiocyanate tube pair (hook, rate scenes) and the C3 cobalt
 *   tube triple (from-scratch scene). They are listed through the C3 HAVE set.
 * - Copper ammonia tube: aligned painted pair (pale blue and deep blue, same alpha box 410,183,790,1617 in a 1200 x 1800
 *   plate), drawn by CuTube in parts.tsx with a crossfade. No coded tube stand-in remains.
 * - Everything else (rate bars, expression builder, number line, beaker, carbon block, tubes of H2, I2 and HI) is coded.
 */
import {CO_BLUE, CO_PINK, CO_PURPLE, HAVE as HAVE3, IRON_DEEP, IRON_START} from '../chem-m5-c03/assets';

const A = 'assets/chemistry/';
export const CU_PALE_PLATE = A + 'c5-copper-tube-pale-v1.png';
export const CU_DEEP_PLATE = A + 'c5-copper-tube-deep-v1.png';
export const HAVE5 = new Set<string>([CU_PALE_PLATE, CU_DEEP_PLATE]);
export const ASSETS: string[] = [IRON_START, IRON_DEEP, CO_PINK, CO_PURPLE, CO_BLUE].filter(a => HAVE3.has(a)).concat([CU_PALE_PLATE, CU_DEEP_PLATE].filter(a => HAVE5.has(a)));
