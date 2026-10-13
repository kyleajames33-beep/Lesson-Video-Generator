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

// Painted icon pack (brief 27, 14 Oct). Each is in HAVE, so the scenes draw the plate; remove one from HAVE to fall back to the coded icon.
export const STEP_LAND = B + 'b2b-step-land-v1.png';
export const STEP_TUBE = B + 'b2b-step-tube-v1.png';
export const STEP_JOIN = B + 'b2b-step-join-v1.png';
export const STEP_SEED = B + 'b2b-step-seed-v1.png';
export const ZYG1 = B + 'b2b-zygote-1-v1.png';
export const ZYG2 = B + 'b2b-zygote-2-v1.png';
export const ZYG4 = B + 'b2b-zygote-4-v1.png';
export const ZYG8 = B + 'b2b-zygote-8-v1.png';
export const EMBRYO = B + 'b2b-embryo-v1.png';
export const PROP_PARENT = B + 'b2b-prop-parent-v1.png';
export const PROP_PIECE = B + 'b2b-prop-piece-v1.png';
export const PROP_ROOTING = B + 'b2b-prop-rooting-v1.png';
export const PROP_NEW = B + 'b2b-prop-new-plant-v1.png';
export const BEE_FLY = B + 'b2b-bee-flying-v1.png';
export const WATER_POLLEN = B + 'b2b-water-pollen-v1.png';
export const DISP_WIND = B + 'b2b-disp-wind-v1.png';
export const DISP_WATER = B + 'b2b-disp-water-v1.png';
export const DISP_ANIMAL = B + 'b2b-disp-animal-v1.png';
export const SEED_PARA = B + 'b2b-seed-parachute-v1.png';
export const FAR_FENCE = B + 'b2b-far-fence-v1.png';
export const FAR_BARE = B + 'b2b-far-patch-bare-v1.png';
export const FAR_SPROUT = B + 'b2b-far-patch-sprout-v1.png';
const PAINTED = [STEP_LAND, STEP_TUBE, STEP_JOIN, STEP_SEED, ZYG1, ZYG2, ZYG4, ZYG8, EMBRYO, PROP_PARENT, PROP_PIECE, PROP_ROOTING, PROP_NEW, BEE_FLY, WATER_POLLEN, DISP_WIND, DISP_WATER, DISP_ANIMAL, SEED_PARA, FAR_FENCE, FAR_BARE, FAR_SPROUT];

export const HAVE = new Set<string>([...PAINTED, BEE, FLOWER_CUT, GRASS, ONION, POTATO, MINT, BEAN_SEED, BEAN_SEEDLING, OVULE, OVARY, POD, GRAIN, BAGGED, PAINTBRUSH]);
const ALL = [...PAINTED, BEE, FLOWER_CUT, GRASS, ONION, POTATO, MINT, BEAN_SEED, BEAN_SEEDLING, OVULE, OVARY, POD, GRAIN, BAGGED, PAINTBRUSH, TUBE_OVERLAY];
// Reused B1 plates (runner, strawberry flower, clone row, varied seedlings) are listed here too.
const REUSE = [
	B + 'strawberry-runner-botanical-v1-alpha.png', B + 'strawberry-flower-botanical-b1-v1-alpha.png',
	B + 'b1-clone-row-disease-v1.png', B + 'b1-varied-seedlings-v1.png',
];
export const ASSETS: string[] = [...ALL.filter(a => HAVE.has(a)), ...REUSE];
