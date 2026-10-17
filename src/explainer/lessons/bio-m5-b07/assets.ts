/**
 * B7 plates. README for Claude:
 * - Every real object is a painted plate in public/assets/biology/. Molecules, chains, folds, codon cards, the strip,
 *   the range bar and the spectrum are coded.
 * - HAVE lists the plate files that exist. A plate missing from HAVE is left out of ASSETS (the slim bundler fails on a
 *   missing file) and the scene draws a dashed stand-in box instead. The two Himalayan rabbit plates (Codex brief 59)
 *   were delivered 18 Oct (brief 59) and are in HAVE: they drop into attempt one and its feedback.
 */
const B = 'assets/biology/';
export const HYD_BLUE = B + 'm5x-hydrangea-blue-v1.png';
export const HYD_PINK = B + 'm5x-hydrangea-pink-v1.png';
export const ENZYME = B + 'm5x-enzyme-substrate-v1.png';
export const RBC = B + 'm5x-red-blood-cells-v1.png';
export const SICKLE = B + 'm6-red-cells-normal-sickle-v1.png';
export const MUSCLE_R = B + 'b3a2-smooth-muscle-cell-relaxed-v1.png';
export const MUSCLE_C = B + 'b3a2-smooth-muscle-cell-contracted-v1.png';
export const BLOOD_TILE = B + 'm5x-blood-typing-tile-v1.png';
export const SNAP_RED = B + 'm5x-snapdragon-red-v1.png';
export const SNAP_WHITE = B + 'm5x-snapdragon-white-v1.png';
export const PEA_YR = B + 'm5x-pea-yellow-round-v1.png';
export const BACT = B + 'b6a-bacterium-v1.png';
/** Codex brief 59, not delivered on 17 Oct. */
export const RABBIT = B + 'm5x-rabbit-himalayan-v1.png';
export const RABBIT_PATCH = B + 'm5x-rabbit-himalayan-patch-v1.png';

const DELIVERED = [HYD_BLUE, HYD_PINK, ENZYME, RBC, SICKLE, MUSCLE_R, MUSCLE_C, BLOOD_TILE, SNAP_RED, SNAP_WHITE, PEA_YR, BACT];
/** Add RABBIT and RABBIT_PATCH here once the files exist. */
export const HAVE = new Set<string>([...DELIVERED, RABBIT, RABBIT_PATCH]);
export const ASSETS: string[] = [...DELIVERED, RABBIT, RABBIT_PATCH].filter(a => HAVE.has(a));
