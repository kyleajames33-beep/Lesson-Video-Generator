/**
 * P01 (Biology practical, lesson key bp01) plates. README for Claude:
 * - Codex brief 71 plates (card sheets, scissors, tape roll, pencil, card pile, paper ribosome, tRNA card, the three
 *   pop-beads and the clipboard sheet): handed in 18 Oct (status.md), all in HAVE. Alpha boxes re-measured from the
 *   files (alpha > 20); the ribosome window and the tRNA tab and cup centres come from brief71-p01.json.
 * - Coded overlays kept on the plates: the tRNA anticodon tabs (notches and letters) over the painted blank tabs, the
 *   ribosome window outline, beads chained at the recorded socket and peg points.
 * - Have (reused): the real helix (scenes 1, 11), the real ribosome (scene 10) and the copied chromosome (scene 6).
 * - Coded: working nucleotide cards (B4 tab families: triangles for A, T and U, rounds for C and G; two or three
 *   notches), tape strips, hydrogen-bond dots, pencil arrows, step rail, colour key, record sketch, results table,
 *   codon chart excerpt, assessment card, attempt card, countdown and the notes board. No people or hands.
 */
const B = 'assets/biology/';
export const HELIX = B + 'b5x-zoom-helix-v1.png';
export const RIBO_REAL = B + 'm5x-ribosome-v1.png';
export const CHROMO = B + 'b5x-chromosome-duplicated-v1.png';

export const SHEETS = B + 'm5x-card-sheets-v1.png';
export const SCISSORS = B + 'm5x-scissors-v1.png';
export const TAPE = B + 'm5x-tape-roll-v1.png';
export const PENCIL = B + 'm5x-pencil-v1.png';
export const PILE = B + 'm5x-card-pile-v1.png';
export const PAPER_RIBO = B + 'm5x-paper-ribosome-v1.png';
export const TRNA_CARD = B + 'm5x-trna-card-v1.png';
export const BEAD_RED = B + 'm5x-popbead-red-v1.png';
export const BEAD_GOLD = B + 'm5x-popbead-gold-v1.png';
export const BEAD_GREEN = B + 'm5x-popbead-green-v1.png';
export const CLIPBOARD = B + 'm5x-clipboard-sheet-v1.png';

const DELIVERED: string[] = [HELIX, RIBO_REAL, CHROMO, SHEETS, SCISSORS, TAPE, PENCIL, PILE, PAPER_RIBO, TRNA_CARD, BEAD_RED, BEAD_GOLD, BEAD_GREEN, CLIPBOARD];
export const PENDING: string[] = [];
export const HAVE = new Set<string>(DELIVERED);
export const ASSETS: string[] = [...DELIVERED, ...PENDING].filter(a => HAVE.has(a));
