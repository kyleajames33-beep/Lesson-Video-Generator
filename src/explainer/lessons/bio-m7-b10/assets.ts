/**
 * M7 B10 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 27 Oct from the real files in public/assets/biology/.
 * - New (brief 104): the chlorinated lime basin (washstand, jug, bottle; no person), the airport biosecurity bin and
 *   the measles virus (always tagged "drawn far larger than real").
 * - Reused: sink (no hand), hospital bed (empty), quarantine sign (blank face; coded text set on it), shipping
 *   container, vaccine vial, rod and coccus bacteria, door handle, raw chicken, Broad Street pump (no handle), virus.
 * - Objects are shown at a size that reads, not to one scale, each with its own label. Never stretched.
 * - Coded: the clinic bar chart, the control board (b03's host circles, stations, lane and break marks, plus a fourth
 *   station), drifting air particles, the soap close-up, the case timeline, the contact network, the criteria table,
 *   chips, attempt cards and the countdown. No people, hands or faces anywhere.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});

export const PLATES = {
	basin: mk(B + 'm7-chlorinated-lime-basin-v1.png', [259, 200, 1740, 1800]),
	bin: mk(B + 'm7-airport-biosecurity-bin-v1.png', [420, 200, 1579, 1800]),
	measles: mk(B + 'm7-measles-virus-v1.png', [200, 202, 1799, 1798]),
	bed: mk(B + 'm8-hospital-bed-v1.png', [160, 449, 1840, 1551]),
	sign: mk(B + 'm7-quarantine-sign-v1.png', [201, 273, 1799, 1728]),
	container: mk(B + 'm7-shipping-container-v1.png', [200, 482, 1800, 1517]),
	sink: mk(B + 'm7-handwashing-sink-v1.png', [200, 345, 1799, 1655]),
	vial: mk(B + 'm7-vaccine-vial-syringe-v1.png', [201, 439, 1799, 1560]),
	rodCoccus: mk(B + 'm7-bacterium-rod-coccus-v1.png', [201, 544, 1800, 1456]),
	handle: mk(B + 'm7-door-handle-v1.png', [368, 303, 1688, 1706]),
	chicken: mk(B + 'm7-raw-chicken-v1.png', [207, 407, 1792, 1665]),
	pumpNo: mk(B + 'm7-broad-street-pump-nohandle-v1.png', [561, 221, 1438, 1780]),
	virus: mk(B + 'm7-virus-particle-v1.png', [200, 211, 1800, 1788]),
};
/** The sign's blank face centre and width in natural px (read off the plate). */
export const SIGN_FACE = {c: [1000, 800] as [number, number], w: 1500};

export const ASSETS_M7B10: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
