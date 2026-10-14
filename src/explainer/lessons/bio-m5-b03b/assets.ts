/**
 * B3b plates. README for Claude:
 * - HAVE lists the plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and shared.tsx draws a labelled dashed stand-in instead.
 * - Delivered and used: dairy bull and cow, wheat ear and open floret, wheat rust leaf pair (all b3b-*).
 * - Reused plates: potato tuber, Cavendish bunch, banana plantation with TR4, strawberry flower cut-away and bagged flower (recall).
 * - Painted side views wired into AnimalIcon (cow, bull, calf, merino sheep), WheatIcon (ear plate) and PotatoPlant (healthy and sick pair).
 * - Coded (no art needed): collection vial, straws, freezer, cow tract cut-away, cycle strip, scorecard, gene pool tray and its
 *   herd grid icons (HerdGrid keeps the coded animal so it can grey), balance, forceps, Uganda map chip, countdown, key notes.
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

export const COW_SIDE = B + 'b3b-dairy-cow-side-v1.png';
export const BULL_SIDE = B + 'b3b-dairy-bull-side-v1.png';
export const CALF_SIDE = B + 'b3b-calf-side-v1.png';
export const SHEEP_SIDE = B + 'b3b-merino-sheep-side-v1.png';
export const POTATO_PLANT = B + 'b3b-potato-plant-v1.png';
export const POTATO_SICK = B + 'b3b-potato-plant-sick-v1.png';

// Brief 27 painted icons (14 Oct): cow tract, straw pair, vial pair, freezer tank, forceps, cover bag, barn.
export const COW_TRACT = B + 'b3b-cow-tract-v1.png';
export const STRAW = [B + 'b3b-straw-v1.png', B + 'b3b-straw-frost-v1.png'];
export const VIAL = [B + 'b3b-vial-empty-v1.png', B + 'b3b-vial-full-v1.png'];
export const FREEZER = B + 'b3b-freezer-v1.png';
export const FORCEPS = B + 'b3b-forceps-v1.png';
export const COVER_BAG = B + 'b3b-cover-bag-v1.png';
export const BARN = B + 'b3b-barn-v1.png';
const ICONS = [COW_TRACT, ...STRAW, ...VIAL, FREEZER, FORCEPS, COVER_BAG, BARN];

const ALL = [...ICONS, BULL_COW, WHEAT, RUST, POTATO, BUNCH, PLANTATION, FLOWER_CUT, BAGGED, COW_SIDE, BULL_SIDE, CALF_SIDE, SHEEP_SIDE, POTATO_PLANT, POTATO_SICK];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
