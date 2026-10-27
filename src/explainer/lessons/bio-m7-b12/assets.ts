/**
 * M7 B12 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 27 Oct from the real files in public/assets/biology/.
 * - New (brief 105): the cut-away bucket dry and flooded (aligned; one shared box, 50% overlay checked), the Aedes
 *   larva and pupa (box crops give the larva or the pupa alone), the insecticide sprayer (no operator), the falcon egg
 *   normal and thin (aligned; shared box, overlay checked) and Wolbachia inside a mosquito cell.
 * - Reused: Anopheles and Aedes mosquitoes, the empty bed under a net, the flying bee and the mosquito cage.
 * - Never one scale: each plate has its own grey label. Never stretched; the bucket may rotate when it tips.
 * - Coded: the life cycle wheel (stations, arrows, break marks), population rows of tiny mosquito plates, egg dots,
 *   rain lines, the nerve line, the food chain, the room corner, the chromosome (bio-m6-b11), the criteria table (b11),
 *   chips, attempt cards and the countdown. No people, hands or faces anywhere.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const BUCKET: Box = [220, 239, 1780, 1760];
const EGG: Box = [220, 425, 1780, 1574];

export const PLATES = {
	sprayer: mk(B + 'm7-insecticide-sprayer-v1.png', [373, 220, 1627, 1780]),
	anoph: mk(B + 'm5x-anopheles-mosquito-v1.png', [293, 344, 1749, 1631]),
	aedes: mk(B + 'm6-aedes-mosquito-v1.png', [158, 427, 1932, 1690]),
	dry: mk(B + 'm7-aedes-container-dry-v1.png', BUCKET),
	flooded: mk(B + 'm7-aedes-container-flooded-v1.png', BUCKET),
	larvaPupa: mk(B + 'm7-aedes-larva-pupa-v1.png', [220, 630, 1780, 1370]),
	larva: mk(B + 'm7-aedes-larva-pupa-v1.png', [220, 700, 1270, 1180]),
	pupa: mk(B + 'm7-aedes-larva-pupa-v1.png', [1300, 640, 1780, 1370]),
	bednet: mk(B + 'm7-bed-net-v1.png', [326, 200, 1681, 1761]),
	bee: {src: B + 'b2b-bee-flying-v1.png', nat: [1600, 1600], box: [198, 318, 1408, 1284]} as PB,
	eggN: mk(B + 'm7-falcon-egg-normal-v1.png', EGG),
	eggT: mk(B + 'm7-falcon-egg-thin-v1.png', EGG),
	cage: mk(B + 'm6-mosquito-cage-v1.png', [134, 153, 1869, 1850]),
	wolb: mk(B + 'm7-wolbachia-cell-v1.png', [226, 220, 1774, 1780]),
};
export const ASSETS_M7B12: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
