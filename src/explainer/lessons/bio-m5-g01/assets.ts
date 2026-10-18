/**
 * G01 plates. README for Claude:
 * - Real objects are painted plates in public/assets/biology/: the B6a bacterium (Q1), the Codex brief 70 firefly
 *   (Q2), koala (Q3) and purple and red sweet peas (Q4, an aligned pair), B5b's painted plum (pink plate) and teal
 *   chromosomes and its painted cell (drawn through B5b's MC, B8's Chr and B5a's PCell).
 * - Coded: DNA tiles and molecules (B4 shapes), the mismatch outline, mRNA tiles, the codon chart and amino acid beads
 *   (computed by B6c's code), the count table, the chromatid strip with allele beads, pollen-cell outlines, the trace
 *   checklist strip, the decision board, chips and the countdown. No people.
 * - HAVE lists files that exist. A plate missing from HAVE is left out of ASSETS (the slim bundler fails on a missing
 *   file) and the scene draws a dashed stand-in box. Brief 70 plates were delivered 18 Oct (status.md, brief 70 hand-in)
 *   and are in HAVE; to show the stand-ins again, move a plate from DELIVERED to PENDING.
 */
const B = 'assets/biology/';
export const BACT = B + 'b6a-bacterium-v1.png';
export const FIREFLY = B + 'm5x-firefly-glow-v1.png';
export const KOALA = B + 'm5x-koala-v1.png';
export const PEA_PURPLE = B + 'm5x-sweetpea-purple-v1.png';
export const PEA_RED = B + 'm5x-sweetpea-red-v1.png';
/** B5b's painted chromosomes and cells (listed for the slim bundler). */
export const B5X = ['chromosome-single', 'chromosome-single-pink', 'chromosome-single-teal', 'chromosome-duplicated', 'chromosome-duplicated-pink',
	'chromosome-duplicated-teal', 'cell-dividing-nospindle', 'cell-dividing'].map(n => B + `b5x-${n}-v1.png`);

const DELIVERED = [BACT, FIREFLY, KOALA, PEA_PURPLE, PEA_RED, ...B5X];
/** Plates still awaited (drawn as dashed stand-ins). */
const PENDING: string[] = [];
export const HAVE = new Set<string>(DELIVERED);
export const ASSETS: string[] = [...DELIVERED, ...PENDING].filter(a => HAVE.has(a));
