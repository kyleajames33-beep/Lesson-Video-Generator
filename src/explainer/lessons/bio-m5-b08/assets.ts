/**
 * B8 plates. README for Claude:
 * - Real objects are painted plates in public/assets/biology/: the pea ovary and pod (B2b aligned pair), the four pea
 *   seeds, B5b's painted chromosomes and cells (drawn by B5a's chrom.tsx, listed here for the slim bundler), B3a's
 *   sperm and egg, the fruit flies, the hydrangeas and the B1 strawberry plates.
 * - Coded: allele beads (white; amber only for a new allele), tracing lines, set-cards, gamete lists, the pairing grid,
 *   tickers, source chips, card chips, pollen tubes, swap marks, the DNA stretch, soil, sun and shade chips.
 * - HAVE lists files that exist; a plate missing from HAVE is left out of ASSETS and drawn as a dashed stand-in. The
 *   pod plate's alpha was checked on 17 Oct (clear transparency round the pod, same box as the ovary), so no v2 is
 *   needed; if a cut-out b2b-pod-seeds-v2.png lands, point POD at it.
 */
const B = 'assets/biology/';
export const OVARY = B + 'b2b-ovary-ovules-v1.png';
export const POD = B + 'b2b-pod-seeds-v1.png';
export const PEA_YR = B + 'm5x-pea-yellow-round-v1.png';
export const PEA_GR = B + 'm5x-pea-green-round-v1.png';
export const PEA_YW = B + 'm5x-pea-yellow-wrinkled-v1.png';
export const PEA_GW = B + 'm5x-pea-green-wrinkled-v1.png';
export const SPERM = B + 'b3a-sperm-v1.png';
export const EGG = B + 'b3a-egg-v1.png';
export const FLY_RED = B + 'm5x-fly-red-eye-v1.png';
export const FLY_WHITE = B + 'm5x-fly-white-eye-v1.png';
export const HYD_BLUE = B + 'm5x-hydrangea-blue-v1.png';
export const HYD_PINK = B + 'm5x-hydrangea-pink-v1.png';
export const RUNNER = B + 'strawberry-runner-botanical-v1-alpha.png';
export const SEEDLING = B + 'strawberry-seedling-botanical-b1-v1-alpha.png';
export const VARIED = B + 'b1-varied-seedlings-v1.png';
export const PRIZE = B + 'b1-prize-strawberry-plant-v1.png';
/** B5b's painted chromosomes and cells, drawn through B5a's chrom.tsx. */
export const B5X = ['chromosome-single', 'chromosome-single-pink', 'chromosome-single-teal', 'chromosome-duplicated', 'chromosome-duplicated-pink',
	'chromosome-duplicated-teal', 'cell-dividing-nospindle', 'cell-dividing'].map(n => B + `b5x-${n}-v1.png`);

const ALL = [OVARY, POD, PEA_YR, PEA_GR, PEA_YW, PEA_GW, SPERM, EGG, FLY_RED, FLY_WHITE, HYD_BLUE, HYD_PINK, RUNNER, SEEDLING, VARIED, PRIZE, ...B5X];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
