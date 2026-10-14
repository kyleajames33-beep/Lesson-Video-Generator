/**
 * B5b plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and the scene draws a coded stand-in instead.
 * - Real art (owner rule: real objects get painted plates): the two brothers (hook) and the pea pod (attempt).
 * - Coded: every chromosome, chromatid, bead, chiasma and crossing over, cells, spindle, stage strip, count tracker,
 *   coin flips, combination grids, compare board, attempt vignette for the stage picture, countdown.
 */
const B = 'assets/biology/';
export const BROTHERS = B + 'b5b-brothers-v1.png';
export const POD = B + 'b2b-pod-seeds-v1.png';

const ALL = [BROTHERS, POD];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
