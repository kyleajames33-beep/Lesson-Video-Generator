/**
 * M7 B09 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 27 Oct from the real files in public/assets/biology/.
 * - New (brief 103): the varicella-zoster virus, a placental villus (maternal red cells around it; no fetus, no
 *   person) and the eastern brown snake (alone). `b3a-fetus-placenta-v1` shows a fetus and is never used.
 * - Plasma cell scale: as b07, uniformly scaled to 1.5 times the bare B cell's painted width (`plasmaW`).
 * - Coded: the antibody graph (curves computed from the level functions in parts.tsx, never an image), the cell count
 *   field layout, the clone thumbnails, the illness band, the two-by-two immunity table, venom specks and antibody
 *   Ys, the response strip, chips, attempt cards (one with a coded two-curve graph), countdown.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box): PB => ({src, nat: N2, box});

export const PLATES = {
	varicella: mk(B + 'm7-varicella-virus-v1.png', [200, 205, 1800, 1795]),
	bare: mk(B + 'm7-b-cell-bare-v1.png', [201, 229, 1800, 1770]),
	tcell: mk(B + 'm7-t-cell-v1.png', [204, 203, 1794, 1799]),
	killer: mk(B + 'm7-t-cell-killer-v1.png', [204, 203, 1794, 1799]),
	plasma: mk(B + 'm7-plasma-cell-v1.png', [212, 411, 1789, 1610]),
	vial: mk(B + 'm7-vaccine-vial-syringe-v1.png', [201, 439, 1799, 1560]),
	gland: {src: B + 'b3a2-milk-gland-full-v1.png', nat: [2000, 1500], box: [308, 150, 1691, 1350]} as PB,
	placenta: mk(B + 'm7-placenta-villus-v1.png', [305, 200, 1693, 1800]),
	snake: mk(B + 'm7-brown-snake-v1.png', [200, 785, 1800, 1215]),
	apoptotic: mk(B + 'm7-airway-cell-apoptotic-v1.png', [647, 207, 1535, 1743]),
	epi: {src: B + 'b5a-epithelium-shedding-v1.png', nat: [1800, 1222], box: [180, 122, 1620, 1100]} as PB,
	vesselCrop: mk(B + 'm7-dermis-splinter-inflamed-v1.png', [240, 1080, 1100, 1560]),
	digest: mk(B + 'm7-macrophage-engulf-digest-v1.png', [196, 479, 1821, 1521]),
};
const BC_W = 1599, BARE_CELL = 1284, PLASMA_CELL = 1577;
/** Box width for the plasma plate so its painted cell is 1.5 x a bare B cell drawn with box width `bareW`. */
export const plasmaW = (bareW: number) => ((1.5 * (BARE_CELL / BC_W) * bareW) / PLASMA_CELL) * (1789 - 212);

export const ASSETS_M7B09: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
