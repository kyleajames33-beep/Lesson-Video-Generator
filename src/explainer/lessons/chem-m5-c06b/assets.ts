/**
 * C6b plates. README for Claude:
 * - HAVE6B lists plate files that exist in public/assets/chemistry/. A plate not in HAVE6B is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws the coded stand-in instead.
 * - Codex plates landed 15 Oct: the engine cylinder (attempt vignette) and the hot iodine tube (tiny-K setup).
 *   EngineCylinder and IodineTube in parts.tsx draw them at a fixed scale (geometry noted there), with the coded
 *   particles kept on top.
 * - Reused: the C6 assets (C2 flask pair, N2O4 vessel, furnace icon for the handoff, the C4b sealed tube inside the
 *   hot H2 + I2 tube).
 */
import {ASSETS as ASSETS6} from '../chem-m5-c06/assets';

const A = 'assets/chemistry/';
export const ENGINE_PLATE = A + 'c6b-engine-cylinder-v1.png';
export const IODINE_PLATE = A + 'c6b-hot-iodine-tube-v1.png';
export const HAVE6B = new Set<string>([ENGINE_PLATE, IODINE_PLATE]);
export const ASSETS: string[] = [...ASSETS6, ...[ENGINE_PLATE, IODINE_PLATE].filter(a => HAVE6B.has(a))];
