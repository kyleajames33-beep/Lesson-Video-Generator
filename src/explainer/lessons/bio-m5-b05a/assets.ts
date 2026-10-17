/**
 * B5a plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and the scene draws a coded stand-in instead.
 * - Real art (owner rule: real objects get painted plates): skin graze cross-section (hook, uses), embryo ball,
 *   budding yeast, amoeba, mint cutting and bacterium (uses).
 * - Painted (brief 54): chromosomes and cells (see B5X below). Coded: centromere discs, spindle fibres, nucleus, the stage strip,
 *   cycle ring, count tracker, attempt boards, IPMAT icons, checkpoint gate and countdown.
 */
const B = 'assets/biology/';
export const SKIN = B + 'b5a-skin-graze-v1.png';
export const EMBRYO = B + 'b3a-cleavage-4-v1.png';
export const YEAST = B + 'b1-budding-2-v1.png';
export const AMOEBA = B + 'b2c-amoeba-fission-1-v1.png';
export const CUTTING = B + 'b2b-mint-cutting-glass-v1.png';
export const BACTERIUM = B + 'b1-fission-1-v1.png';

// Brief 31 plates (14 Oct): old surface cells flaking off with new cells beneath (uses, replacement), and a plant cell
// with the new cell plate between two nuclei (telophase and cytokinesis inset, drawn rotated so the wall is vertical).
// Remove either from ALL (HAVE) and the coded stand-in returns. No skin close-up plate was delivered, so the hook zoom stays at 2.4x.
export const EPI = B + 'b5a-epithelium-shedding-v1.png';
export const PLANT = B + 'b5a-plant-cell-plate-v1.png';

// Brief 54 plates (16 Oct, wired 17 Oct): painted chromosomes (single, duplicated, pair; neutral, pink for the plum set
// and teal), cells (dividing without and with the painted spindle, pinching) and the B5a zoom-out recall. chrom.tsx
// draws them (P_SINGLE, P_DUP, P_PAIR, P_CELL, P_SPINDLE, P_PINCH, P_ZOOM); this list only feeds the slim bundler.
export const B5X = ['chromosome-single', 'chromosome-single-pink', 'chromosome-single-teal', 'chromosome-duplicated', 'chromosome-duplicated-pink',
	'chromosome-duplicated-teal', 'chromosome-pair', 'cell-dividing-nospindle', 'cell-dividing', 'cell-pinching', 'zoom-bases', 'zoom-helix',
	'zoom-nucleosomes', 'zoom-fibre', 'zoom-chromosome'].map(n => B + `b5x-${n}-v1.png`);

const ALL = [SKIN, EMBRYO, YEAST, AMOEBA, CUTTING, BACTERIUM, EPI, PLANT, ...B5X];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
