/**
 * B9 plates. README for Claude:
 * - Real objects are painted plates in public/assets/biology/: the tall and short pea plants, the yellow round and
 *   yellow wrinkled seeds (only shape differs), B5b's plum (pink plate) and teal chromosomes and its painted cell
 *   (drawn through B8's Chr and B5a's PCell), and the white-eyed fly and pink snapdragon for the "Next" chips.
 * - Coded: allele chips, gamete discs, Punnett grids, ratio strips, enzyme blobs (B7's PocketBlob), hormone dots,
 *   stem outlines, the field of plant icons, coins, bar chart, running-share chart, pedigrees (standard symbols only,
 *   no people), karyotype strip, step chips, attempt cards and the countdown.
 * - HAVE lists files that exist (checked 17 Oct); a plate missing from HAVE is drawn as a dashed stand-in.
 */
const B = 'assets/biology/';
export const PEA_TALL = B + 'm5x-pea-tall-v1.png';
export const PEA_SHORT = B + 'm5x-pea-short-v1.png';
export const PEA_YR = B + 'm5x-pea-yellow-round-v1.png';
export const PEA_YW = B + 'm5x-pea-yellow-wrinkled-v1.png';
export const FLY_WHITE = B + 'm5x-fly-white-eye-v1.png';
export const SNAP_PINK = B + 'm5x-snapdragon-pink-v1.png';
/** B5b's painted chromosomes and cells, drawn through B5a's chrom.tsx (listed for the slim bundler). */
export const B5X = ['chromosome-single', 'chromosome-single-pink', 'chromosome-single-teal', 'chromosome-duplicated', 'chromosome-duplicated-pink',
	'chromosome-duplicated-teal', 'cell-dividing-nospindle', 'cell-dividing'].map(n => B + `b5x-${n}-v1.png`);

const ALL = [PEA_TALL, PEA_SHORT, PEA_YR, PEA_YW, FLY_WHITE, SNAP_PINK, ...B5X];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
