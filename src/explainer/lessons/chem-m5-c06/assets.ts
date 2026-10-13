/**
 * C6 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Painted and used: the C2 flask pair (hook scene only, colourless to pale yellow-green).
 * - Stand-in right now: c6-no2-vessel-v1.png (sealed vessel with pale reddish-brown gas) was not delivered, so the
 *   attempt and feedback vessel is a coded flask (CodedVessel in parts.tsx). Add the name to HAVE6 and draw it there
 *   when the plate arrives.
 * - Everything else (ICE table, particle views, hot tube, algebra lines, dial, furnace icon) is coded.
 */
import {FLASK_EQ, FLASK_START} from '../chem-m5-c02/assets';

const A = 'assets/chemistry/';
export const NO2_VESSEL = A + 'c6-no2-vessel-v1.png';
export const HAVE6 = new Set<string>([]);
export const ASSETS: string[] = [FLASK_START, FLASK_EQ];
void NO2_VESSEL;
