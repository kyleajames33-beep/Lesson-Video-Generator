/**
 * M6 B08 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files in public/assets/biology/.
 * - New (aligned pair): m6-florida-panther-v1.png and m6-texas-puma-v1.png share one 2000 x 2000 canvas and pose
 *   (alpha boxes [200, 526, 1798, 1472] and [200, 526, 1799, 1473]); both face LEFT. The panther's kinked tail tip
 *   sits near natural (1720, 1330). Icons in grids are the same plates drawn small, never stretched.
 * - Coded: the southern US outline, gene pool basins and allele rings (B01's, plus two lesson-local ring kinds with
 *   their own shape marks), frequency bars, seeded drift lines, coins, the island outline, judgement table, decision
 *   chips, attempt cards and countdowns. No people. The cichlid plates are not used (selection case, design note).
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
const mk = (name: string, box: [number, number, number, number]): PB => ({src: B + name, nat: [2000, 2000], box});

export const PLATES = {
	panther: mk('m6-florida-panther-v1.png', [200, 526, 1798, 1472]),
	puma: mk('m6-texas-puma-v1.png', [200, 526, 1799, 1473]),
};
/** Natural pixel of the panther's kinked tail tip. */
export const TAIL: [number, number] = [1720, 1330];
export const ASSETS_B08: string[] = Object.values(PLATES).map(p => p.src);
