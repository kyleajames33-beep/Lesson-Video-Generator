/**
 * B2b plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Stand-ins right now: PAINTBRUSH (b2b-paintbrush-pollination-v1.png, coded brush on a stigma in the
 *   attempt and feedback scenes) and TUBE_OVERLAY (b2b-pollen-tube-overlay-v1.png, the pollen tube is
 *   always drawn with code over the flower cut-away, so the overlay is optional).
 * - To swap one in later: copy the file into public/assets/biology/, add it to HAVE, and if its alpha box
 *   differs from the ART entry in shared.tsx, re-measure it (PIL, alpha > 20).
 * - Delivered and used: bee, flower cut-away, grass, onion, potato, mint, bean seed, bean seedling,
 *   ovule close-up, ovary and pod pair, pollen grain close-up, bagged flower.
 */
const B = 'assets/biology/';
export const BEE = B + 'b2b-bee-on-flower-v1.png';
export const FLOWER_CUT = B + 'b2b-flower-cutaway-v1.png';
export const GRASS = B + 'b2b-grass-flower-wind-v1.png';
export const ONION = B + 'b2b-onion-bulb-offsets-v1.png';
export const POTATO = B + 'b2b-potato-tuber-sprouts-v1.png';
export const MINT = B + 'b2b-mint-cutting-glass-v1.png';
export const BEAN_SEED = B + 'b2b-bean-seed-cutaway-v1.png';
export const BEAN_SEEDLING = B + 'b2b-bean-seedling-v1.png';
export const OVULE = B + 'b2b-ovule-closeup-v1.png';
export const OVARY = B + 'b2b-ovary-ovules-v1.png';
export const POD = B + 'b2b-pod-seeds-v1.png';
export const GRAIN = B + 'b2b-pollen-grain-closeup-v1.png';
export const BAGGED = B + 'b2b-bagged-flower-v1.png';
// Not delivered yet (stand-ins in scenes):
export const PAINTBRUSH = B + 'b2b-paintbrush-pollination-v1.png';
export const TUBE_OVERLAY = B + 'b2b-pollen-tube-overlay-v1.png';

export const HAVE = new Set<string>([BEE, FLOWER_CUT, GRASS, ONION, POTATO, MINT, BEAN_SEED, BEAN_SEEDLING, OVULE, OVARY, POD, GRAIN, BAGGED, PAINTBRUSH]);
const ALL = [BEE, FLOWER_CUT, GRASS, ONION, POTATO, MINT, BEAN_SEED, BEAN_SEEDLING, OVULE, OVARY, POD, GRAIN, BAGGED, PAINTBRUSH, TUBE_OVERLAY];
// Reused B1 plates (runner, strawberry flower, clone row, varied seedlings) are listed here too.
const REUSE = [
	B + 'strawberry-runner-botanical-v1-alpha.png', B + 'strawberry-flower-botanical-b1-v1-alpha.png',
	B + 'b1-clone-row-disease-v1.png', B + 'b1-varied-seedlings-v1.png',
];
export const ASSETS: string[] = [...ALL.filter(a => HAVE.has(a)), ...REUSE];
