/**
 * C6 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Painted and used: the C2 flask pair (hook scene only, colourless to pale yellow-green).
 * - N2O4 and NO2 vessel: aligned painted pair (colourless and brown, same alpha box 305,331,974,1663 in a 1280 x 1920
 *   plate), drawn by NO2Vessel in parts.tsx with a crossfade. No coded vessel stand-in remains.
 * - Everything else (ICE table, particle views, hot tube, algebra lines, dial, furnace icon) is coded.
 */
import {FLASK_EQ, FLASK_START} from '../chem-m5-c02/assets';

const A = 'assets/chemistry/';
export const NO2_COLOURLESS = A + 'c6-no2-vessel-colourless-v1.png';
export const NO2_BROWN = A + 'c6-no2-vessel-brown-v1.png';
export const HAVE6 = new Set<string>([NO2_COLOURLESS, NO2_BROWN]);
export const ASSETS: string[] = [FLASK_START, FLASK_EQ].concat([NO2_COLOURLESS, NO2_BROWN].filter(a => HAVE6.has(a)));
