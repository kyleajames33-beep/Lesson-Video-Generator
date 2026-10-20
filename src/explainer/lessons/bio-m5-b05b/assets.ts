/**
 * B5b plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and the scene draws a coded stand-in instead.
 * - Real art (owner rule: real objects get painted plates): the two brothers (hook) and the pea pod (attempt).
 * - Painted (brief 54): chromosomes and cells (see B5X below). Coded: beads, centromere discs, crossing-over masks, spindle, stage strip, count tracker,
 *   coin flips, combination grids, compare board, attempt vignette for the stage picture, countdown.
 */
const B = 'assets/biology/';
export const BROTHERS = B + 'b5b-brothers-v1.png';
export const POD = B + 'b2b-pod-seeds-v1.png';

// Brief 31 plate (14 Oct): the brothers' parents. The sperm and egg reuse the B3a plates (as B3a does). Remove a file from
// ALL (HAVE) and the coded pictogram or dot returns.
export const PARENTS = B + 'b5b-parents-v1.png';
export const SPERM = B + 'b3a-sperm-v1.png';
export const EGG = B + 'b3a-egg-v1.png';

// Brief 54 plates (16 Oct, wired 17 Oct): painted chromosomes (single, duplicated, pair; neutral, pink for the plum set
// and teal), cells (dividing without and with the painted spindle, pinching) and the B5a zoom-out recall. chrom.tsx
// draws them (P_SINGLE, P_DUP, P_PAIR, P_CELL, P_SPINDLE, P_PINCH, P_ZOOM); this list only feeds the slim bundler.
export const B5X = ['chromosome-single', 'chromosome-single-pink', 'chromosome-single-teal', 'chromosome-duplicated', 'chromosome-duplicated-pink',
	'chromosome-duplicated-teal', 'chromosome-pair', 'cell-dividing-nospindle', 'cell-dividing', 'cell-pinching', 'zoom-bases', 'zoom-helix',
	'zoom-nucleosomes', 'zoom-fibre', 'zoom-chromosome'].map(n => B + `b5x-${n}-v1.png`);

// Brief 88 plates (20 Oct, revision 7): the homologous pair with matching loci, the crossing over trio, the meiosis I and
// II stages on one cell canvas, the four cells, the interphase cell and the stained metaphase spread (b05a cd.tsx draws them).
export const CD88 = [
	'cd-homologous-pair-loci', 'cd-homologous-pair-loci-empty', 'cd-crossing-over-a', 'cd-crossing-over-a-empty', 'cd-crossing-over-b', 'cd-crossing-over-c',
	'cd-m1-prophase', 'cd-m1-prophase-empty', 'cd-m1-metaphase', 'cd-m1-metaphase-empty', 'cd-m1-anaphase', 'cd-m1-anaphase-empty', 'cd-m1-telophase', 'cd-m1-telophase-empty',
	'cd-pair-metaphase', 'cd-pair-metaphase-empty', 'cd-pair-anaphase', 'cd-pair-anaphase-empty', 'cd-four-cells', 'cd-interphase',
].map(n => B + `${n}-v1.png`).concat([B + 'm6-metaphase-spread-v1.png']);

const ALL = [BROTHERS, POD, PARENTS, SPERM, EGG, ...B5X, ...CD88];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
