/**
 * M6 B04 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files in public/assets/biology/.
 * - Brief 85 (delivered 19 Oct): m6-metaphase-spread-v1.png (a circular field of view, transparent outside the
 *   circle) and m6-fly-bar-eye-v1.png, which overlays m5x-fly-red-eye-v1.png exactly (same 2000 x 2000 canvas and the
 *   same alpha box [445, 394, 1560, 1619]; only the eyes differ).
 * - Earlier plates: the microscope, the painted chromosome close-up (B5) and the egg and sperm dish (Next chip).
 * - Coded: HSC-style chromosome bars (bands, gene letters, centromere), the karyotype, the meiosis strip, counters,
 *   dosage bars, the compare board, the book, the attempt cards and the countdown. No people.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as B01} from '../bio-m6-b01/assets';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (name: string, box: [number, number, number, number]): PB => ({src: B + name, nat: N2, box});

export const PLATES = {
	spread: mk('m6-metaphase-spread-v1.png', [203, 200, 1796, 1800]),
	micro: mk('m6-microscope-v1.png', [498, 200, 1501, 1800]),
	chrom: mk('b5x-zoom-chromosome-v1.png', [603, 184, 1399, 1836]),
	dish: mk('m6-egg-sperm-dish-v1.png', [201, 302, 1800, 1697]),
	flyRed: B01.flyRed,
	flyBar: mk('m6-fly-bar-eye-v1.png', [445, 394, 1560, 1619]),
};
if (PLATES.flyBar.box.join() !== PLATES.flyRed.box.join()) throw new Error('Bar fly plate must overlay the red-eye fly exactly');
export const ASSETS_B04: string[] = Object.values(PLATES).map(p => p.src);
