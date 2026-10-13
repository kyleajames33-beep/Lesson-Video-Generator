/**
 * B3b plates. README for Claude:
 * - HAVE lists the plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and shared.tsx draws a labelled dashed stand-in instead.
 * - Delivered and used: dairy bull and cow, wheat ear and open floret, wheat rust leaf pair (all b3b-*).
 * - Reused plates: potato tuber, Cavendish bunch, banana plantation with TR4, strawberry flower cut-away and bagged flower (recall).
 * - Coded (no art needed): collection vial, straws, freezer, cow tract cut-away, cycle strip, scorecard, gene pool tray,
 *   cow and sheep icons, balance, forceps, coded potato clone row, Uganda map chip, countdown, key notes.
 */
const B = 'assets/biology/';
export const BULL_COW = B + 'b3b-dairy-bull-cow-v1.png';
export const WHEAT = B + 'b3b-wheat-ear-floret-v1.png';
export const RUST = B + 'b3b-wheat-rust-leaf-v1.png';
export const POTATO = B + 'b2b-potato-tuber-sprouts-v1.png';
export const BUNCH = B + 'b1-cavendish-bunch-v1.png';
export const PLANTATION = B + 'b1-banana-plantation-tr4-v1.png';
export const FLOWER_CUT = B + 'b2b-flower-cutaway-v1.png';
export const BAGGED = B + 'b2b-bagged-flower-v1.png';

const ALL = [BULL_COW, WHEAT, RUST, POTATO, BUNCH, PLANTATION, FLOWER_CUT, BAGGED];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
