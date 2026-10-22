/**
 * M7 B01 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 23 Oct from the real files in public/assets/biology/.
 * - New (brief 99): Fleming's mould plate, the TB bacilli (no flagella), TMV, the viroid, the normal prion protein,
 *   the potato pair (normal and spindle), crown gall and root-knot galls.
 * - Aligned pairs are drawn with one shared box (the union of both alpha boxes) so a crossfade keeps them in place:
 *   the prion pair (misfolded is the existing beta-rich ribbon plate) and the potato pair.
 * - Reused: virus particle, fungal hyphae, Plasmodium in a red cell, tapeworm, tick, wheat rust leaf, dairy cow,
 *   the generic b6a bacterium (only as a harmless-microbe glyph and as the generic antibiotic-target glyph; it has a
 *   flagellum, so it never stands for TB), the generic animal cell (virus host cell) and the m5x red cell plate (its
 *   centre cell only, clipped, for the true-scale pairing with one TB rod).
 * - Coded: the sorter tree, size ruler, host circles, DNA loop inset, misfolding row, chips, attempt cards, countdown.
 *   No people, no hands, no faces.
 * - m6-hand-pollination-v1.png and m6-agricultural-liming-v1.png are never used.
 */
import type {PB} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
type Box = [number, number, number, number];
const mk = (name: string, nat: [number, number], box: Box): PB => ({src: B + name, nat, box});
const N2: [number, number] = [2000, 2000];
const PRION: Box = [204, 201, 1796, 1800];
const POTATO: Box = [224, 553, 1773, 1448];

export const PLATES = {
	fleming: mk('m7-fleming-mould-plate-v1.png', N2, [224, 224, 1774, 1776]),
	tb: mk('m7-tb-bacilli-v1.png', N2, [223, 469, 1777, 1530]),
	tmv: mk('m7-tmv-particle-v1.png', N2, [222, 950, 1778, 1049]),
	viroid: mk('m7-viroid-rna-v1.png', N2, [223, 812, 1775, 1188]),
	prionN: mk('m7-prion-normal-protein-v1.png', N2, PRION),
	prionM: mk('m7-prion-folded-protein-v1.png', N2, PRION),
	potatoN: mk('m7-potato-tuber-normal-v1.png', N2, POTATO),
	potatoS: mk('m7-potato-tuber-spindle-v1.png', N2, POTATO),
	gall: mk('m7-crown-gall-stem-v1.png', N2, [427, 220, 1572, 1777]),
	rootKnot: mk('m7-root-knot-galls-v1.png', N2, [257, 223, 1744, 1775]),
	virus: mk('m7-virus-particle-v1.png', N2, [200, 211, 1800, 1788]),
	hyphae: mk('m7-fungal-hyphae-v1.png', N2, [201, 481, 1800, 1518]),
	plasmo: mk('m7-plasmodium-red-cell-v1.png', N2, [201, 334, 1799, 1667]),
	tapeworm: mk('m7-tapeworm-v1.png', N2, [200, 469, 1799, 1531]),
	tick: mk('m7-tick-vector-v1.png', N2, [201, 288, 1800, 1711]),
	wheat: mk('b3b-wheat-rust-leaf-v1.png', [1900, 1300], [606, 167, 1402, 1132]),
	cow: mk('b3b-dairy-cow-side-v1.png', [2200, 1600], [404, 460, 1796, 1360]),
	bact: mk('b6a-bacterium-v1.png', [2044, 900], [243, 192, 1880, 704]),
	cell: mk('m5x-cell-protein-synthesis-v1.png', N2, [279, 265, 1738, 1700]),
	rbcs: mk('m5x-red-blood-cells-v1.png', N2, [304, 331, 1750, 1689]),
};
/** Natural-pixel features used for rings and pairings (read off a gridded contact sheet, 23 Oct). */
export const FEAT = {
	mould: {c: [640, 1047] as [number, number], r: 350, clear: 470},
	parasite: {c: [1172, 938] as [number, number], r: 150},
	scolex: {c: [234, 563] as [number, number], r: 120},
	genome: {c: [1156, 1000] as [number, number], r: 300},
	coat: {c: [1000, 1000] as [number, number], r: 700},
	/** The centre red blood cell of the m5x red cell plate (about 7.5 thousandths of a mm across). */
	rbc: {c: [1064, 1060] as [number, number], r: 300},
	/** One isolated rod (lower right of the cluster): tip-to-tip end points and width, natural pixels (flood fill and principal axis of its alpha). */
	rod: {a: [1339, 1435] as [number, number], b: [1748, 947] as [number, number], wide: 216},
};
export const ASSETS_M7B01: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
