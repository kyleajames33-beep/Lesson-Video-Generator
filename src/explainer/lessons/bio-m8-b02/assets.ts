/**
 * M8 B02 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 30 Oct from the real files in public/assets/biology/.
 * - New (brief 111): the aligned skin pair (warm: wide arterioles, sweat beads, flat hair; cold: narrow arterioles, raised
 *   hair; same block on the same 2000 px canvas, drawn on their union box so the cross-fade is in place), the red
 *   kangaroo licking a forearm, the forearm vessel close-up and the spectacled flying fox.
 * - Reused: the thermometer, the sagittal brain, the smooth muscle pair (relaxed and contracted on one canvas, union box),
 *   the harbour seal and pup (blubber), the koala (attempt 2 card) and b01's skeletal muscle.
 * - Coded: the heat-balance beam, heat arrows, signal pulses, evaporation dots, the countercurrent pair, the two mammal
 *   outlines (no faces), the Queensland coast, the graphs, chips and cards. No people, hands or faces of people.
 */
import type {PB} from '../bio-m5-b07/shared';
import {PLATES as P1} from '../bio-m8-b01/assets';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box, nat: [number, number] = N2): PB => ({src, nat, box});
const SKIN: Box = [266, 221, 1733, 1780];
const SMOOTH: Box = [208, 184, 2271, 539];

export const PLATES = {
	warm: mk(B + 'm8-skin-warm-v1.png', SKIN),
	cold: mk(B + 'm8-skin-cold-v1.png', SKIN),
	roo: mk(B + 'm8-red-kangaroo-v1.png', [220, 363, 1779, 1637]),
	forearm: mk(B + 'm8-kangaroo-forearm-vessels-v1.png', [221, 241, 1780, 1758]),
	fox: mk(B + 'm8-spectacled-flying-fox-v1.png', [591, 221, 1407, 1779]),
	relaxed: mk(B + 'b3a2-smooth-muscle-cell-relaxed-v1.png', SMOOTH, [2500, 724]),
	contracted: mk(B + 'b3a2-smooth-muscle-cell-contracted-v1.png', SMOOTH, [2500, 724]),
	seal: mk(B + 'b2-seal-and-pup-v1.png', [239, 342, 1639, 1026], [1856, 1344]),
	koala: mk(B + 'm5x-koala-v1.png', [235, 219, 1771, 1775]),
	thermo: P1.thermo,
	brain: P1.brain,
	muscle: P1.muscle,
};
/** Natural-pixel anchors read from gridded views (30 Oct). */
export const FEAT = {
	/** Skin pair: widened dermal arteriole, a free nerve ending, the sweat gland coil, the duct opening, the sweat beads, the top surface, the raised hair (cold) and its muscle. */
	arteriole: [1100, 995] as [number, number],
	nerve: [1033, 789] as [number, number],
	gland: [1322, 1289] as [number, number],
	duct: [1373, 689] as [number, number],
	beads: [[1196, 600], [1344, 629], [1478, 640]] as [number, number][],
	top: 560,
	hairTop: [700, 260] as [number, number],
	hairMuscle: [829, 960] as [number, number],
	/** Kangaroo: the licked forearm. Koala: body side and trunk contact. Brain: hypothalamus. */
	forearm: [400, 960] as [number, number],
	koalaBody: [1080, 1060] as [number, number],
	trunk: [1390, 1000] as [number, number],
	hypo: [800, 860] as [number, number],
};
export const ASSETS_M8B02: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
