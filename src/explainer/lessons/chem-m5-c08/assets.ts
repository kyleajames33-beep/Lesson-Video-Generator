/**
 * C8 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Painted and used: the sealed steel pressure vessel (attempt scene only). Alpha box 357,362,566,1189 of a
 *   1280 x 1920 plate. If the file is removed from HAVE, the attempt draws a coded vessel with a gauge instead.
 * - Brief 27 delivered no C8 plates. Everything else (hot tube with 0.05 mol/L dots, log number line with K and Q
 *   markers, rate bars, expression builder, flask thumbnails, notes board) is abstract and coded.
 */
const A = 'assets/chemistry/';
export const VESSEL = A + 'c8-pressure-vessel-v1.png';
export const HAVE8 = new Set<string>([VESSEL]);
export const ASSETS: string[] = [VESSEL].filter(a => HAVE8.has(a));
