/**
 * C7 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Painted and used: the Haber converter (hook scene only). Alpha box 159,230,1094,1630 of a 1280 x 1920 plate.
 *   If the file is removed from HAVE, the hook draws a coded converter outline instead.
 * - Everything else (dashboard, gauges, plots, plant loop schematic, answer table, tug of war) is abstract and coded.
 */
const A = 'assets/chemistry/';
export const CONVERTER = A + 'c7-haber-converter-v1.png';
export const HAVE7 = new Set<string>([CONVERTER]);
export const ASSETS: string[] = [CONVERTER].filter(a => HAVE7.has(a));
