/**
 * M7 B03 quality-fix plates (6 Nov 2026), lesson-local so assets.ts (imported by P02) stays unchanged.
 * Alpha boxes (PIL, alpha > 20) measured 6 Nov from the real files in public/assets/biology/.
 * The two airway cells share one box (their union) so the healthy-to-infected crossfade stays aligned.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box, nat: [number, number] = N2): PB => ({src, nat, box});
const CELL: Box = [658, 207, 1344, 1743];

export const PLATES2 = {
	airwayCell: mk(B + 'm7-airway-cell-v1.png', CELL),
	airwayInfected: mk(B + 'm7-airway-cell-infected-v1.png', CELL),
	vibrio: mk(B + 'm7-vibrio-cholerae-v1.png', [253, 396, 1747, 1604]),
	larva: mk(B + 'm7-aedes-larva-pupa-v1.png', [220, 630, 1780, 1370]),
	intestine: mk(B + 'y11-small-intestine-v1.png', [63, 64, 1270, 1140], [1330, 1182]),
};
export const ASSETS_M7B03_FIX: string[] = Object.values(PLATES2).map(p => p.src);
