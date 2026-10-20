/**
 * M6 G01 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files in public/assets/biology/.
 * - New (brief 88): m6-bacteriophage-t4-v1.png (head, tail and fibres, upright) and m6-belgian-blue-bull-v1.png
 *   (side view facing left, the same pose and framing as m5x-cattle-red-v1.png, so the two read as a pair).
 * - Reused: the red cow (B10) and the egg and sperm dish (B04, Next chip).
 * - Coded: typeset DNA and mRNA rows on slim baselines, the alignment rows, the codon chart and beads (computed),
 *   HSC-style chromosome bars, the karyotype, the meiosis strip, the gene band, protein blob, muscle outline, the
 *   lineage tree (B05), the check strip, the decision board and the countdown. No people.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as B04} from '../bio-m6-b04/assets';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (name: string, box: [number, number, number, number]): PB => ({src: B + name, nat: N2, box});

export const PLATES = {
	phage: mk('m6-bacteriophage-t4-v1.png', [571, 281, 1430, 1709]),
	bull: mk('m6-belgian-blue-bull-v1.png', [200, 427, 1800, 1573]),
	cow: mk('m5x-cattle-red-v1.png', [221, 388, 1776, 1630]),
	dish: B04.dish,
};
export const ASSETS_G01M6: string[] = Object.values(PLATES).map(p => p.src);
