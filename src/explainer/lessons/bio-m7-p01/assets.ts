/**
 * M7 P01 (Biology practical: epidemic transmission simulation) plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 28 Oct from the real files in public/assets/.
 * - New (brief 107): the clear and pink sim cups, the clear and pink trace well plates, and the UV door handle. Each
 *   pair shares one alpha box and was checked at a 50% overlay (docs/production/claude-pm/assets/brief107-qa/), so a
 *   pair crossfades in place.
 * - Reused: the door handle (room light), the dropper bottle (indicator), the clipboard (contact sheet).
 * - Coded: step rail, letter chips, pour arcs, drops, contact-sheet grid, well-row wipe and partner arrows, bar graphs,
 *   dilution strip, dab, UV beam, desk/pen/handle outlines, cards, risk table, attempt cards, countdown. No people,
 *   no hands, no faces: students are letters.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const C = 'assets/chemistry/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});
const CUP: Box = [332, 251, 1670, 1750];
const WELL: Box = [252, 561, 1749, 1440];
const HANDLE: Box = [368, 303, 1688, 1706];

export const PLATES = {
	cupC: mk(B + 'm7-sim-cup-clear-v1.png', CUP),
	cupP: mk(B + 'm7-sim-cup-pink-v1.png', CUP),
	wellC: mk(B + 'm7-trace-wellplate-clear-v1.png', WELL),
	wellP: mk(B + 'm7-trace-wellplate-pink-v1.png', WELL),
	handle: mk(B + 'm7-door-handle-v1.png', HANDLE),
	handleUV: mk(B + 'm7-door-handle-uv-v1.png', HANDLE),
	dropper: mk(C + 'p03-dropper-bottle-v1.png', [746, 219, 1254, 1760]),
	clip: mk(B + 'm5x-clipboard-sheet-v1.png', [283, 160, 1716, 1840]),
};
/** Natural-pixel anchors (gridded contact sheet and the 50% overlay, 28 Oct). */
export const FEAT = {
	/** Well plate: column centres (A to H), row centres (start, after rounds 1 to 3), well radius. */
	wellX: [383, 566, 747, 927, 1110, 1291, 1472, 1653],
	wellY: [690, 892, 1094, 1294],
	wellR: 80,
	/** Cup: liquid surface centre and rim centre. */
	cupLiquid: [1000, 1080] as [number, number],
	cupRim: [1000, 330] as [number, number],
	/** Clipboard: the paper sheet (inset). */
	sheet: [380, 470, 1600, 1720] as [number, number, number, number],
	/** The paper's centre and inset size (it is tilted about 6.8 degrees clockwise). */
	sheetC: [965, 1105] as [number, number],
	sheetWH: [1150, 1260] as [number, number],
	/** Door handle: a point on the lever for the powder dab. */
	lever: [1420, 960] as [number, number],
	/** Dropper bottle tip. */
	tip: [1000, 240] as [number, number],
};
export const ASSETS_M7P01B: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
