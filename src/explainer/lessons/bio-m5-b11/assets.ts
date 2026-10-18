/**
 * B11 plates. README for Claude:
 * - Real objects are painted plates in public/assets/biology/: the red, roan and white Shorthorn cattle (B10, on one
 *   common alpha box so the three align; brief 64 QA: red and roan read apart at 70 px), the tall and short pea plants
 *   (B9, drawn through B9's PeaPlant at one common scale), and the cheek swab v2 (brief 64, specks removed).
 * - Coded: herd grid and sorting, allele chips, tally tables, bar charts, the gene pool bar, base tiles (B4 shapes,
 *   serif letters), the read strip and its column scan, the chromosome bar with SNP ticks, the sickle recall card, allele
 *   beads in two groups, the linked chromosome pair, the 40-SNP grid, the sample-bounce strips (fixed example draws),
 *   clover leaf icons, step chips, attempt cards and the countdown. No people: samples are ID cards.
 * - HAVE lists files that exist (checked 18 Oct); a plate missing from HAVE draws the dashed stand-in.
 */
const B = 'assets/biology/';
export const COW_RED = B + 'm5x-cattle-red-v1.png';
export const COW_ROAN = B + 'm5x-cattle-roan-v1.png';
export const COW_WHITE = B + 'm5x-cattle-white-v1.png';
export const PEA_TALL = B + 'm5x-pea-tall-v1.png';
export const PEA_SHORT = B + 'm5x-pea-short-v1.png';
export const SWAB = B + 'm5x-cheek-swab-v2.png';

const ALL = [COW_RED, COW_ROAN, COW_WHITE, PEA_TALL, PEA_SHORT, SWAB];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
