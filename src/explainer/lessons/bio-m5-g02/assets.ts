/**
 * G02 plates. README for Claude:
 * - Real objects are painted plates in public/assets/biology/: the Codex brief 70 Andalusian chickens (black, blue,
 *   splashed white: one aligned set) and cats (tortoiseshell, orange, black: one aligned set), and B5b's painted cell
 *   (B9's gamete discs) and chromosomes.
 * - Coded: allele chips, gamete discs, Punnett grids (computed by B9's cross logic), the two-chick probability tree, the
 *   cross-out overlay, pedigrees P-Q3 and P-Q4 (standard symbols only, no people; checked by fitsMode), genotype
 *   chips, X and Y chips (B10), the mode-test table, trio icons, the first-moves strip, the decision board and chips.
 * - HAVE lists files that exist. A plate missing from HAVE is left out of ASSETS and drawn as a dashed stand-in. Brief
 *   70 plates were delivered 18 Oct (status.md) and are in HAVE; to show the stand-ins again, move a plate from
 *   DELIVERED to PENDING.
 */
const B = 'assets/biology/';
export const CHICK_BLACK = B + 'm5x-chicken-black-v1.png';
export const CHICK_BLUE = B + 'm5x-chicken-blue-v1.png';
export const CHICK_SPLASH = B + 'm5x-chicken-splash-v1.png';
export const CAT_TORT = B + 'm5x-cat-tortoiseshell-v1.png';
export const CAT_ORANGE = B + 'm5x-cat-orange-v1.png';
export const CAT_BLACK = B + 'm5x-cat-black-v1.png';
export const B5X = ['chromosome-single', 'chromosome-single-pink', 'chromosome-single-teal', 'chromosome-duplicated', 'chromosome-duplicated-pink',
	'chromosome-duplicated-teal', 'cell-dividing-nospindle', 'cell-dividing'].map(n => B + `b5x-${n}-v1.png`);

const DELIVERED = [CHICK_BLACK, CHICK_BLUE, CHICK_SPLASH, CAT_TORT, CAT_ORANGE, CAT_BLACK, ...B5X];
/** Plates still awaited (drawn as dashed stand-ins). */
const PENDING: string[] = [];
export const HAVE = new Set<string>(DELIVERED);
export const ASSETS: string[] = [...DELIVERED, ...PENDING].filter(a => HAVE.has(a));
