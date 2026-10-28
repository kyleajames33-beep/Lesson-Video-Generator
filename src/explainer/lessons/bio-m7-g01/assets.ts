/**
 * M7 G01 (Biology practice: outbreak data and control) plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 28 Oct from the real files in public/assets/biology/.
 * - New (brief 108): the chicken pasta tray, the chicken sandwiches, Vibrio cholerae and the village water tank.
 * - Reused: Anopheles, the bed net, the blank capsule blister, the quarantine sign.
 * - Coded: question cards and strips, the lunch table, fraction bars, the 4-hour epidemic curve with its meal
 *   timeline, the province table, the tank (b13), the weekly cholera graph with intervention arrows, the link chain,
 *   house outline and dot fields, answer boxes, the decision board and the countdown. No people, hands or faces.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});

export const PLATES = {
	pasta: mk(B + 'm7-chicken-pasta-tray-v1.png', [252, 471, 1747, 1528]),
	sandw: mk(B + 'm7-chicken-sandwiches-v1.png', [254, 380, 1743, 1619]),
	vibrio: mk(B + 'm7-vibrio-cholerae-v1.png', [253, 396, 1747, 1604]),
	tank: mk(B + 'm7-village-water-tank-v1.png', [487, 253, 1512, 1746]),
	anoph: mk(B + 'm5x-anopheles-mosquito-v1.png', [293, 344, 1749, 1631]),
	net: mk(B + 'm7-bed-net-v1.png', [326, 200, 1681, 1761]),
	blister: mk(B + 'm7-capsule-blister-blank-v1.png', [220, 500, 1780, 1499]),
	sign: mk(B + 'm7-quarantine-sign-v1.png', [201, 273, 1799, 1728]),
};
export const ASSETS_M7G01B: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
