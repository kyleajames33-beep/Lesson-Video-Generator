/**
 * P03 (Biology practical, lesson key bp03) plates. README for Claude:
 * - Codex brief 71 plates (handed in 18 Oct): the clipboard tally sheet and pencil (shared with bio-m5-p01), the
 *   hand mirror, the slip box, one blank slip, the bead bag and the single red and white beads. All are in HAVE; alpha
 *   boxes were re-measured from the files (alpha > 20). The ten beads drawn from the bag use the red and white bead
 *   plates; the blank (declined) slip in scene 3 is the slip plate; the enlarged named slip and small moving slips stay coded (tick boxes).
 * - Coded: step rail, desk strip, abstract population field (grey squares), checklist, chips, definition line
 *   diagrams (no ear or face painting), slip boxes and ticks, tally marks, tables and working lines, column graph and
 *   inset, dot-strip chart, analysis and limitations cards, 2 x 2 grid, attempt card and the countdown. No people.
 */
const B = 'assets/biology/';
export const CLIPBOARD = B + 'm5x-clipboard-sheet-v1.png';
export const PENCIL = B + 'm5x-pencil-v1.png';
export const MIRROR = B + 'm5x-hand-mirror-v1.png';
export const SLIPBOX = B + 'm5x-slip-box-v1.png';
export const SLIP = B + 'm5x-slip-blank-v1.png';
export const BAG = B + 'm5x-bead-bag-v1.png';
export const BEAD_RED = B + 'm5x-bead-red-v1.png';
export const BEAD_WHITE = B + 'm5x-bead-white-v1.png';

// Brief 71 handed in 18 Oct (status.md): all plates delivered; boxes re-measured from the files (alpha > 20).
const DELIVERED: string[] = [CLIPBOARD, PENCIL, MIRROR, SLIPBOX, SLIP, BAG, BEAD_RED, BEAD_WHITE];
export const PENDING: string[] = [];
export const HAVE = new Set<string>(DELIVERED);
export const ASSETS: string[] = [...DELIVERED, ...PENDING].filter(a => HAVE.has(a));
