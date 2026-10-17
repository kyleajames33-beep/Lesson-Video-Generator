/**
 * B6c plates (no new painting needed). The ribosome (Codex brief 39) is drawn flipped vertically in code, so the large
 * subunit sits on top and the small subunit below, split along the traced boundary between them. The cell, bacterium
 * and mitochondrion are reused from brief 39 and B6a, with B6a's endosymbiosis pair and clip for the attempt two
 * feedback. Every mRNA, tRNA, amino acid bead, codon chart and protein blob is coded.
 */
const B = 'assets/biology/';
export const RIBO = B + 'm5x-ribosome-v1.png';
export const CELL = B + 'm5x-cell-protein-synthesis-v1.png';
export const BACT = B + 'b6a-bacterium-v1.png';
export const MITO = B + 'b6a-mitochondrion-v1.png';
export const ENDO_OUT = B + 'b6a-endosymbiosis-outside-v1.png';
export const ENDO_IN = B + 'b6a-endosymbiosis-inside-v1.png';
export const CLIP_ENDO = 'assets/clips/b6a-endosymbiosis-v1.mp4';
export const ASSETS: string[] = [RIBO, CELL, BACT, MITO, ENDO_OUT, ENDO_IN, CLIP_ENDO];
