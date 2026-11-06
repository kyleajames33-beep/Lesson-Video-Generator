// M8 G01 (Biology practice) plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 6 Nov from the files in
// public/assets/biology/. Feature points (natural pixels): the melanoma's thin surface edge near (1250, 545).
// Coded: question cards, tables, the boxed denominator, rate bars, population blocks, age pyramids, the graph paper with
// its staged axes, ticks, points, lines, key and title, the TAILS rail, the inset graphs, dot fields, the two-way arrow,
// the confounder triangle, the frame strip, the cohort arrow, chips, tags, answer boxes, the countdown and the decision
// board. No people, hands or faces.
import type {PB} from './board';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: B + f, nat, box});

export const PL = {
	pancreas: mk('m8-pancreas-v1.png', [160, 574, 1840, 1424]),
	melanoma: mk('m8-skin-melanoma-v1.png', [160, 227, 1840, 1773]),
	uv: mk('m6-uv-skin-v1.png', [280, 200, 1720, 1800]),
	clip: mk('m5x-clipboard-sheet-v1.png', [283, 160, 1716, 1840]),
	can: mk('m8-energy-drink-can-plain-v1.png', [681, 201, 1318, 1800]),
};
export const MEL_EDGE: [number, number] = [1250, 545];
export const ASSETS_M8G01B: string[] = Object.values(PL).map(p => p.src);
