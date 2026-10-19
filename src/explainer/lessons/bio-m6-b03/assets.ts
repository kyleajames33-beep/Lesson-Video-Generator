/**
 * M6 B03 plates. README for Claude:
 * - Red cells (normal and sickle, brief 48) from ../bio-m6-b01/assets.ts; the sickle half is the right-hand alpha
 *   box [1080, 597, 1800, 1403] (B13's crop), never stretched.
 * - The ribosome is B6c's m5x-ribosome-v1.png, flipped and split in code by B6c's Ribosome component.
 * - Everything else is coded: codons as typeset text, slim strands, beads, chart cards, the haemoglobin blob, the
 *   folded protein with a pocket, the word row and the chromosome bar in the Next chip. No people.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES} from '../bio-m6-b01/assets';
import {RIBO} from '../bio-m5-b06c/assets';

export const SICKLE_HALF: PB = {...PLATES.sickle, box: [1080, 597, 1800, 1403]};
export const ASSETS_B03: string[] = [PLATES.sickle.src, RIBO];
