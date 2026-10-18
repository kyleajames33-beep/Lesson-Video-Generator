/**
 * P02 (Biology practical, lesson key bp02) plates. README for Claude:
 * - Codex brief 71 plates (plum and teal pop-beads, centromere piece, string loop, sticker sheet, index cards and card
 *   back, die, clipboard sheet): handed in 18 Oct (status.md), all in HAVE. Alpha boxes re-measured from the files
 *   (alpha > 20); bead connector points and centromere sockets from brief71-p01.json.
 * - Coded overlays kept: allele stickers and letters on the bead plates, gamete card faces, the die's pips (drawn in
 *   perspective on the painted blank top face, DIE_FACE), and the cell loops, which stay coded string ellipses because
 *   the round loop plate cannot stretch into the tall gamete loops (the plate appears in the kit).
 * - Have (reused): B5b's painted copied chromosomes (pink and teal, scene 4), the painted cell without a spindle
 *   (scene 11), B8's yellow round and wrinkled pea seeds (hook). The coin is B5b's coded coin.
 * - Coded: chains, stickers and letters, level lines, equator, loops, card shuffles, step rail, colour key, record and
 *   tally tables, the column chart, assessment card, attempt card, countdown and the notes board. No people or hands.
 */
const B = 'assets/biology/';
export const CHR_PINK = B + 'b5x-chromosome-duplicated-pink-v1.png';
export const CHR_TEAL = B + 'b5x-chromosome-duplicated-teal-v1.png';
export const CELL = B + 'b5x-cell-dividing-nospindle-v1.png';
export const PEA_ROUND = B + 'm5x-pea-yellow-round-v1.png';
export const PEA_WRINKLED = B + 'm5x-pea-yellow-wrinkled-v1.png';

export const BEAD_PLUM = B + 'm5x-popbead-plum-v1.png';
export const BEAD_TEAL = B + 'm5x-popbead-teal-v1.png';
export const CENTROMERE = B + 'm5x-popbead-centromere-v1.png';
export const LOOP = B + 'm5x-string-loop-v1.png';
export const STICKERS = B + 'm5x-sticker-sheet-v1.png';
export const CARDS = B + 'm5x-index-cards-v1.png';
export const CARD_BACK = B + 'm5x-index-card-back-v1.png';
export const DIE = B + 'm5x-die-v1.png';
export const CLIPBOARD = B + 'm5x-clipboard-sheet-v1.png';

const DELIVERED: string[] = [CHR_PINK, CHR_TEAL, CELL, PEA_ROUND, PEA_WRINKLED, BEAD_PLUM, BEAD_TEAL, CENTROMERE, LOOP, STICKERS, CARDS, CARD_BACK, DIE, CLIPBOARD];
export const PENDING: string[] = [];
export const HAVE = new Set<string>(DELIVERED);
export const ASSETS: string[] = [...DELIVERED, ...PENDING].filter(a => HAVE.has(a));
