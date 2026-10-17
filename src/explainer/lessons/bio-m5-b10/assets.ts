/**
 * B10 plates. README for Claude:
 * - Real objects are painted plates in public/assets/biology/: red-eyed and white-eyed fruit flies (B8), red, pink and
 *   white snapdragons, red, roan and white cattle (the hair zoom sits on the roan's flank, not its head), the red
 *   blood cell plate (B7, cropped to one cell for the antigen marks), the tall and short pea plants (B9, heterozygote
 *   board row 1), and B5b's painted cell (B9's gamete discs).
 * - Coded: X and Y chips with allele tags, sex bands on the square, karyotype strip, allele chips, gamete discs,
 *   Punnett grids, enzyme blobs (B7's PocketBlob) and pigment dots, hair and petal zoom circles, antigen marks (triangle
 *   "A", circle "B"), the genotype table, pedigrees with standard symbols and carrier dots (no people), step chips,
 *   attempt cards and the countdown. The blood typing tile is not used (Revision 2).
 * - HAVE lists files that exist (checked 17 Oct); a plate missing from HAVE is drawn as a dashed stand-in.
 */
const B = 'assets/biology/';
export const FLY_RED = B + 'm5x-fly-red-eye-v1.png';
export const FLY_WHITE = B + 'm5x-fly-white-eye-v1.png';
export const SNAP_RED = B + 'm5x-snapdragon-red-v1.png';
export const SNAP_PINK = B + 'm5x-snapdragon-pink-v1.png';
export const SNAP_WHITE = B + 'm5x-snapdragon-white-v1.png';
export const COW_RED = B + 'm5x-cattle-red-v1.png';
export const COW_ROAN = B + 'm5x-cattle-roan-v1.png';
export const COW_WHITE = B + 'm5x-cattle-white-v1.png';
export const RBC = B + 'm5x-red-blood-cells-v1.png';
export const PEA_TALL = B + 'm5x-pea-tall-v1.png';
export const PEA_SHORT = B + 'm5x-pea-short-v1.png';
export const PEA_YR = B + 'm5x-pea-yellow-round-v1.png';
export const PEA_YW = B + 'm5x-pea-yellow-wrinkled-v1.png';
export const B5X = ['chromosome-single', 'chromosome-single-pink', 'chromosome-single-teal', 'cell-dividing-nospindle', 'cell-dividing'].map(n => B + `b5x-${n}-v1.png`);

const ALL = [FLY_RED, FLY_WHITE, SNAP_RED, SNAP_PINK, SNAP_WHITE, COW_RED, COW_ROAN, COW_WHITE, RBC, PEA_TALL, PEA_SHORT, PEA_YR, PEA_YW, ...B5X];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
