import React, {useId} from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../bio-m5-b01/shared';

// ---------- B5a chromosome kit ----------
// Revision 6 (16 Oct, owner: better drawings): the chromosomes and cells are Codex brief 54 painted plates. A chromosome
// before copying (or a separated chromatid) is the single plate; a copied chromosome is the duplicated plate (an X).
// The cream centromere disc, labels, counters, arrows, fibres, nucleus and envelope stay coded on top. Counting rule on
// screen: one centromere disc = one chromosome. Set 1 is plum (the pink plates shifted towards plum), set 2 is teal.
// Before the prophase coil (coil 0) the plates are pale and stretched (1.4 x longer, 0.7 x narrower). Frame-driven only.
// ChromP is the plate chromosome; shared.tsx exports it to B5a and B5b scenes as Chrom. Chrom in this file stays the
// coded bar because B6a imports it from here.

export const PLUM = '#a8508f';
export const TEALC = '#2b9a8e';
export const CREAM = '#fbf0cf';
export const CELL_FILL = '#fbf6e8';
export const CELL_LINE = '#8a7a63';
export const NUC_FILL = 'rgba(232,222,242,0.88)'; // revision 6: near-opaque so the painted organelles behind do not show through
export const NUC_LINE = '#5b4d70';

/** The model cell geometry (screen centre and radii) and the kinds of chromosome. */
export const CX = 960, CY = 535, RX = 470, RY = 305, NUC_R = 230;
export type Kind = 'L' | 'M' | 'S';
export const KLEN: Record<Kind, number> = {L: 170, M: 140, S: 112};
export type CDef = {kind: Kind; color: string; name: string};
/** Model cell chromosomes in nucleus order after the pairing scene: long plum, long teal, short plum, short teal. */
export const CH: CDef[] = [
	{kind: 'L', color: PLUM, name: 'LP'}, {kind: 'L', color: TEALC, name: 'LT'},
	{kind: 'S', color: PLUM, name: 'SP'}, {kind: 'S', color: TEALC, name: 'ST'},
];
export const NUC_X = [-175, -105, 105, 175];
/** Metaphase slot (y offset from the cell centre), unpaired order from the top: long teal, short plum, long plum, short teal. */
export const META_Y = [58, -172, -58, 172]; // revision 6: was +-195 and +-65, pulled in to clear the painted rim organelles
export const ANA_X = 250;
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const clamp01 = (t: number) => Math.max(0, Math.min(1, t));

export type ChromProps = {
	x: number; y: number; kind: Kind; color: string;
	/** 0 one chromatid, 1 two sister chromatids */
	dup?: number;
	/** 0 long thin thread, 1 short thick X */
	coil?: number;
	/** px each chromatid has moved from the joined position (A left, B right) */
	split?: number;
	/** override: 0 joined, 1 separated */
	sep?: number;
	xa?: number; xb?: number; ya?: number; yb?: number;
	/** 0..1 V shape, centromere leading */
	bend?: number;
	da?: -1 | 1; db?: -1 | 1;
	o?: number; s?: number; hiA?: number; hiB?: number; disc?: number;
	/** draw only one chromatid (a separated chromosome) */
	only?: 'A' | 'B';
};

export const chromGeom = (p: ChromProps) => {
	const {kind, dup = 1, coil = 0, split = 0, bend = 0} = p;
	const sep = p.sep ?? Math.min(1, split / 16);
	const len = KLEN[kind] * (1 - 0.38 * coil);
	const wid = 9 + 8 * coil;
	const gap = 7 * (1 - coil) * dup * (1 - sep);
	const T = 19 * coil * dup * (1 - sep) * (len / 105);
	const xa = p.xa ?? -gap - split;
	const xb = p.xb ?? gap + split;
	const ya = p.ya ?? 0, yb = p.yb ?? 0;
	const b = 17 * bend * (len / 105);
	return {sep, len, wid, gap, T, xa, xb, ya, yb, b};
};
/** Screen position of the two centromeres (A is the left chromatid). */
export const cenPts = (p: ChromProps): {a: [number, number]; b: [number, number]} => {
	const g = chromGeom(p);
	return {a: [p.x + g.xa, p.y + g.ya], b: [p.x + g.xb, p.y + g.yb]};
};

// ---------- brief 54 plates ----------
const BIO = 'assets/biology/';
/** box = visible (alpha > 20) box x0, y0, w, h in native pixels of the 2000 x 2000 canvas; cen = centromere row as a fraction of h. */
export type BPlate = {src: string; box: [number, number, number, number]; cen: number};
const bp = (name: string, b: [number, number, number, number], cen = 0.5): BPlate => ({src: BIO + name, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]], cen});
export const P_SINGLE = {
	N: bp('b5x-chromosome-single-v1.png', [862, 163, 1143, 1818], 0.449),
	P: bp('b5x-chromosome-single-pink-v1.png', [858, 160, 1147, 1822], 0.448),
	T: bp('b5x-chromosome-single-teal-v1.png', [857, 159, 1148, 1824], 0.449),
};
export const P_DUP = {
	N: bp('b5x-chromosome-duplicated-v1.png', [603, 184, 1399, 1836], 0.468),
	P: bp('b5x-chromosome-duplicated-pink-v1.png', [602, 183, 1402, 1838], 0.467),
	T: bp('b5x-chromosome-duplicated-teal-v1.png', [601, 182, 1403, 1838], 0.469),
};
/** Pink duplicated chromosome on the left, teal on the right, centromeres on row 0.464. */
export const P_PAIR = bp('b5x-chromosome-pair-v1.png', [283, 232, 1784, 1793], 0.464);
export const P_CELL = bp('b5x-cell-dividing-nospindle-v1.png', [262, 259, 1739, 1697]);
export const P_SPINDLE = bp('b5x-cell-dividing-v1.png', [263, 259, 1734, 1695]);
/** Two lobes, centrosomes at +-0.25 of the width, on row 0.528. */
export const P_PINCH = bp('b5x-cell-pinching-v1.png', [168, 393, 1831, 1555]);
export const P_ZOOM = {
	bases: bp('b5x-zoom-bases-v1.png', [577, 159, 1486, 1840]),
	helix: bp('b5x-zoom-helix-v1.png', [619, 154, 1481, 1846]),
	nucleosomes: bp('b5x-zoom-nucleosomes-v1.png', [159, 838, 1841, 1153]),
	fibre: bp('b5x-zoom-fibre-v1.png', [159, 298, 1841, 1667]),
	chromosome: bp('b5x-zoom-chromosome-v1.png', [603, 184, 1399, 1836], 0.468),
};
export const B5X_ASSETS: string[] = [...Object.values(P_SINGLE), ...Object.values(P_DUP), P_PAIR, P_CELL, P_SPINDLE, P_PINCH, ...Object.values(P_ZOOM)].map(q => q.src);
/** The pink plate reads pure pink (hue 328): shift it towards the plum key (#a8508f, hue 317). The teal plate reads
 *  cyan-blue (hue 197): shift it a little towards the coded teal (#2b9a8e, hue 174). */
export const PLUM_FILTER = 'hue-rotate(-12deg) saturate(0.62) brightness(0.86)';
export const TEAL_FILTER = 'hue-rotate(-16deg) saturate(0.9)';
export const plateOf = (color: string, dup: boolean): {p: BPlate; filter?: string} => {
	const set = dup ? P_DUP : P_SINGLE;
	if (color === PLUM) return {p: set.P, filter: PLUM_FILTER};
	if (color === TEALC) return {p: set.T, filter: TEAL_FILTER};
	return {p: set.N};
};
const safeId = (id: string) => id.replace(/[^a-zA-Z0-9_-]/g, '');

/** Plate p drawn into the screen rectangle (x, y, w, h) by its visible box (non-uniform scale allowed). */
export const PImg: React.FC<{p: BPlate; x: number; y: number; w: number; h: number; o?: number; filter?: string}> = ({p, x, y, w, h, o = 1, filter}) => {
	if (o <= 0.005) return null;
	const sx = w / p.box[2], sy = h / p.box[3];
	return <image href={staticFile(p.src)} x={x - p.box[0] * sx} y={y - p.box[1] * sy} width={2000 * sx} height={2000 * sy} preserveAspectRatio="none" opacity={o} style={filter ? {filter} : undefined} />;
};

/** A chromosome plate with its centromere at (cx, cy): visible height h, width factor wk (1 = natural), clockwise
 *  rotation rot. `half` draws only the arm above or below the centromere (for bent or tilted arms); `clipX` keeps only
 *  the part left (< 0) or right (> 0) of the centromere, and `band` only native rows y0..y1 (crossing-over pieces). */
export const ChromPlate: React.FC<{p: BPlate; cx: number; cy: number; h: number; wk?: number; rot?: number; o?: number; filter?: string; half?: 'top' | 'bot'; clipX?: -1 | 1; band?: [number, number]}> = ({p, cx, cy, h, wk = 1, rot = 0, o = 1, filter, half, clipX, band}) => {
	const id = safeId('cp' + useId());
	if (o <= 0.005) return null;
	const k = h / p.box[3];
	const cxN = p.box[0] + p.box[2] / 2, cyN = p.box[1] + p.box[3] * p.cen;
	let x0 = 0, x1 = 2000, y0 = 0, y1 = 2000;
	if (half === 'top') y1 = cyN + 4;
	if (half === 'bot') y0 = cyN - 4;
	if (clipX === -1) x1 = cxN;
	if (clipX === 1) x0 = cxN;
	if (band) { y0 = Math.max(y0, band[0]); y1 = Math.min(y1, band[1]); }
	const clipped = x0 > 0 || x1 < 2000 || y0 > 0 || y1 < 2000;
	return (
		<g transform={`translate(${cx.toFixed(2)},${cy.toFixed(2)}) rotate(${rot.toFixed(2)}) scale(${(k * wk).toFixed(5)},${k.toFixed(5)}) translate(${-cxN},${-cyN})`} opacity={o}>
			{clipped ? <clipPath id={id}><rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} /></clipPath> : null}
			<image href={staticFile(p.src)} x={0} y={0} width={2000} height={2000} clipPath={clipped ? `url(#${id})` : undefined} style={filter ? {filter} : undefined} />
		</g>
	);
};
/** Visible plate height of a chromosome kind: natural shape at coil 1, 1.4 x longer before the prophase coil. */
export const plateLen = (kind: Kind, coil = 1) => KLEN[kind] * 0.7 * (1 + 0.4 * (1 - clamp01(coil)));
export const plateWk = (coil = 1) => 0.7 + 0.3 * clamp01(coil);
/** Arm tip offset (x) of the duplicated plate, as a fraction of its height: the two chromatids splay to +-0.14 h. */
export const DUP_SPLAY = 0.14;

/** One chromatid as a single plate, its arms tilted so their ends sit dxTop and dxBot (screen px) off the vertical. */
export const Chromatid: React.FC<{cx: number; cy: number; h: number; wk: number; color: string; dxTop: number; dxBot: number; o: number}> = ({cx, cy, h, wk, color, dxTop, dxBot, o}) => {
	const {p, filter} = plateOf(color, false);
	const up = h * p.cen, dn = h * (1 - p.cen);
	const at = (Math.atan2(dxTop, up) * 180) / Math.PI;
	const ab = -(Math.atan2(dxBot, dn) * 180) / Math.PI;
	if (Math.abs(at) < 0.4 && Math.abs(ab) < 0.4) return <ChromPlate p={p} cx={cx} cy={cy} h={h} wk={wk} o={o} filter={filter} />;
	return (
		<g opacity={o}>
			<ChromPlate p={p} cx={cx} cy={cy} h={h} wk={wk} rot={at} filter={filter} half="top" />
			<ChromPlate p={p} cx={cx} cy={cy} h={h} wk={wk} rot={ab} filter={filter} half="bot" />
		</g>
	);
};

export const ChromP: React.FC<ChromProps> = p => {
	const {x, y, color, o = 1, s = 1, hiA = 0, hiB = 0, disc = 1, da = -1, db = 1, dup = 1, coil = 0} = p;
	if (o <= 0.01) return null;
	const g = chromGeom(p);
	const L = plateLen(p.kind, coil);
	const wk = plateWk(coil);
	const pale = 0.74 + 0.26 * clamp01(coil);
	const sc = L / g.len;
	// arm end offsets of chromatid A (k = 1) and B (k = -1), from the old geometry, scaled to the plate length
	const arms = (k: 1 | -1, d: -1 | 1) => ({top: (-k * g.T - d * g.b) * sc, bot: (k * g.T - d * g.b) * sc});
	const aA = arms(1, da), aB = arms(-1, db);
	const single = p.only ? 1 : 1 - clamp01(dup);
	const xW = p.only ? 0 : clamp01(dup) * (1 - g.sep);
	const sepW = p.only ? 0 : clamp01(dup) * g.sep;
	const showA = p.only !== 'B';
	const showB = dup > 0.02 && p.only !== 'A';
	const r = (8 + 3 * coil) * disc;
	const joinedDisc = g.sep < 0.5 && dup > 0.5 && !p.only;
	const Disc: React.FC<{cx: number; cy: number; rr: number}> = ({cx, cy, rr}) => <circle cx={cx} cy={cy} r={rr} fill={CREAM} stroke={INK} strokeWidth={3} />;
	const xc = x + (g.xa + g.xb) / 2, yc = y + (g.ya + g.yb) / 2;
	const dupP = plateOf(color, true);
	const wSingle = L * 0.17 * wk;
	// highlight paths follow the drawn arms
	const cenF = 0.46;
	const glow = (cx: number, cy: number, top: number, bot: number) => `M${(cx + top).toFixed(1)},${(cy - L * cenF).toFixed(1)} L${cx.toFixed(1)},${cy.toFixed(1)} L${(cx + bot).toFixed(1)},${(cy + L * (1 - cenF)).toFixed(1)}`;
	const splay = DUP_SPLAY * L * wk * clamp01(dup);
	const glowA = xW > 0.5 ? glow(xc - 3, yc, -splay, -splay) : glow(x + g.xa, y + g.ya, aA.top, aA.bot);
	const glowB = xW > 0.5 ? glow(xc + 3, yc, splay, splay) : glow(x + g.xb, y + g.yb, aB.top, aB.bot);
	return (
		<g opacity={o} transform={s === 1 ? undefined : `translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
			{hiA > 0 && showA ? <path d={glowA} fill="none" stroke={AMBER} strokeWidth={wSingle + 20} strokeLinecap="round" strokeLinejoin="round" opacity={hiA * 0.85} /> : null}
			{hiB > 0 && showB ? <path d={glowB} fill="none" stroke={AMBER} strokeWidth={wSingle + 20} strokeLinecap="round" strokeLinejoin="round" opacity={hiB * 0.85} /> : null}
			<g opacity={pale}>
				{/* before copying (or one chromatid only) */}
				{showA && single > 0.01 ? <Chromatid cx={x + g.xa} cy={y + g.ya} h={L} wk={wk} color={color} dxTop={aA.top} dxBot={aA.bot} o={single} /> : null}
				{p.only === 'B' ? <Chromatid cx={x + g.xb} cy={y + g.yb} h={L} wk={wk} color={color} dxTop={aB.top} dxBot={aB.bot} o={1} /> : null}
				{/* the copied chromosome: the X plate, opening out from the single as it copies */}
				{xW > 0.01 ? <ChromPlate p={dupP.p} cx={xc} cy={yc} h={L} wk={wk * (0.42 + 0.58 * clamp01(dup))} o={xW} filter={dupP.filter} /> : null}
				{/* separated sister chromatids */}
				{sepW > 0.01 ? (
					<>
						<Chromatid cx={x + g.xa} cy={y + g.ya} h={L} wk={wk} color={color} dxTop={aA.top} dxBot={aA.bot} o={sepW} />
						<Chromatid cx={x + g.xb} cy={y + g.yb} h={L} wk={wk} color={color} dxTop={aB.top} dxBot={aB.bot} o={sepW} />
					</>
				) : null}
			</g>
			{joinedDisc ? <Disc cx={xc} cy={yc} rr={r} /> : (
				<>
					{showA ? <Disc cx={x + g.xa} cy={y + g.ya} rr={r * (p.only || showB ? 0.85 : 1)} /> : null}
					{showB && (dup > 0.5 || p.only) ? <Disc cx={x + g.xb} cy={y + g.yb} rr={r * 0.85} /> : null}
				</>
			)}
		</g>
	);
};

/** The coded bar (pre-revision 6). B6a imports this as Chrom, so it stays the default Chrom export of this file. */
export const Chrom: React.FC<ChromProps> = p => {
	const {x, y, color, o = 1, s = 1, hiA = 0, hiB = 0, disc = 1, da = -1, db = 1, dup = 1, coil = 0} = p;
	if (o <= 0.01) return null;
	const g = chromGeom(p);
	const mk = (k: 1 | -1, mx: number, my: number, d: -1 | 1) =>
		`M${(x + mx - k * g.T - d * g.b).toFixed(1)},${(y + my - g.len / 2).toFixed(1)} L${(x + mx).toFixed(1)},${(y + my).toFixed(1)} L${(x + mx + k * g.T - d * g.b).toFixed(1)},${(y + my + g.len / 2).toFixed(1)}`;
	const pa = mk(1, g.xa, g.ya, da);
	const pb = mk(-1, g.xb, g.yb, db);
	const showA = p.only !== 'B';
	const showB = dup > 0.02 && p.only !== 'A';
	const r = (8 + 3 * coil) * disc;
	const joinedDisc = g.sep < 0.5 && dup > 0.5 && !p.only;
	const Disc: React.FC<{cx: number; cy: number; rr: number}> = ({cx, cy, rr}) => <circle cx={cx} cy={cy} r={rr} fill={CREAM} stroke={INK} strokeWidth={3} />;
	return (
		<g opacity={o} transform={s === 1 ? undefined : `translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
			{hiA > 0 ? <path d={pa} fill="none" stroke={AMBER} strokeWidth={g.wid + 20} strokeLinecap="round" strokeLinejoin="round" opacity={hiA * 0.85} /> : null}
			{hiB > 0 && showB ? <path d={pb} fill="none" stroke={AMBER} strokeWidth={g.wid + 20} strokeLinecap="round" strokeLinejoin="round" opacity={hiB * 0.85} /> : null}
			{showA ? <path d={pa} fill="none" stroke={INK} strokeWidth={g.wid + 5} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{showA ? <path d={pa} fill="none" stroke={color} strokeWidth={g.wid} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{showB ? (
				<g opacity={clamp01(dup * 1.4)}>
					<path d={pb} fill="none" stroke={INK} strokeWidth={g.wid + 5} strokeLinecap="round" strokeLinejoin="round" />
					<path d={pb} fill="none" stroke={color} strokeWidth={g.wid} strokeLinecap="round" strokeLinejoin="round" />
				</g>
			) : null}
			{joinedDisc ? <Disc cx={x + (g.xa + g.xb) / 2} cy={y + (g.ya + g.yb) / 2} rr={r} /> : (
				<>
					{showA ? <Disc cx={x + g.xa} cy={y + g.ya} rr={r * (p.only || showB ? 0.85 : 1)} /> : null}
					{showB && (dup > 0.5 || p.only) ? <Disc cx={x + g.xb} cy={y + g.yb} rr={r * 0.85} /> : null}
				</>
			)}
		</g>
	);
};

export const ANA_GRID: Record<number, [number, number]> = {1: [-40, -95], 2: [40, -95], 0: [-40, 95], 3: [40, 95]};
/** Offsets of chromatid A (left) and B (right) of chromosome i while they travel to the poles (e 0..1), relative to the chromosome's metaphase spot. */
export const anaOffsets = (i: number, e: number, reach = ANA_X) => {
	const [gx, gy] = ANA_GRID[i];
	const dy = gy - META_Y[i];
	return {xa: lerp(0, -reach + gx, e), ya: lerp(0, dy, e), xb: lerp(0, reach + gx, e), yb: lerp(0, dy, e), sep: Math.min(1, e * 25)};
};

/** Position of chromosome i (offsets from the cell centre) as it lines up: 0 nucleus, 1 metaphase plate. */
export const lineUp = (i: number, t: number): [number, number] => [lerp(NUC_X[i], 0, t), lerp(0, META_Y[i], t)];

// ---------- cell, nucleus, envelope ----------
/** Painted cell fitted to the old ellipse (cx, cy, rx, ry): plate width 2 rx, height 2.08 ry. `spindle` 0..1 fades
 *  to the plate with the painted spindle; its centrosomes sit at cx +- poleDX(rx), cy. */
export const CELL_KX = 1.0, CELL_KY = 1.04;
export const poleDX = (rx: number) => 0.304 * 2 * rx * CELL_KX;
export const PCell: React.FC<{cx?: number; cy?: number; rx?: number; ry?: number; o?: number; spindle?: number}> = ({cx = CX, cy = CY, rx = RX, ry = RY, o = 1, spindle = 0}) => {
	const w = 2 * rx * CELL_KX, h = 2 * ry * CELL_KY;
	return (
		<g opacity={o}>
			{spindle < 0.995 ? <PImg p={P_CELL} x={cx - w / 2} y={cy - h / 2} w={w} h={h} /> : null}
			{spindle > 0.005 ? <PImg p={P_SPINDLE} x={cx - w / 2} y={cy - h / 2} w={w} h={h} o={spindle} /> : null}
		</g>
	);
};
export const CellBody: React.FC<{cx?: number; cy?: number; rx?: number; ry?: number; o?: number; fill?: string; sw?: number; spindle?: number}> = ({cx = CX, cy = CY, rx = RX, ry = RY, o = 1, spindle = 0}) => (
	<PCell cx={cx} cy={cy} rx={rx} ry={ry} o={o} spindle={spindle} />
);

/** Two overlapping ovals that pull apart: the union has a waist that pinches shut, then two cells separate. d is the half distance. */
export const SplitCells: React.FC<{cx?: number; cy?: number; rx?: number; ry?: number; d: number; o?: number; sw?: number}> = ({cx = CX, cy = CY, rx = RX, ry = RY, d, o = 1}) => {
	// painted: the whole cell fades to the pinching plate as the waist forms; past the pinch (d > rx / 2) two cells part
	const e = Math.min(d, rx / 2);
	const rxe = rx - e;
	const toPinch = clamp01((d - rx * 0.12) / (rx * 0.07)); // a quick dissolve once the waist is real, so two paintings never linger together
	const apart = clamp01((d - rx * 0.42) / (rx * 0.08)); // complete by d = rx / 2, where the daughters sit on the lobes
	const pw = 2 * rx * CELL_KX, ph = 2 * ry * CELL_KY * lerp(1, 0.62, clamp01(d / (rx / 2)));
	return (
		<g opacity={o}>
			{toPinch < 1 && apart < 1 ? <PCell cx={cx} cy={cy} rx={rx} ry={ry} o={1 - toPinch} /> : null}
			{apart < 1 ? <PImg p={P_PINCH} x={cx - pw / 2} y={cy - ph / 2} w={pw} h={ph} o={toPinch * (1 - apart)} /> : null}
			{/* the two daughter cells match the painted lobes (half the width, 0.62 of the height) where they take over */}
			{apart > 0 ? <><PCell cx={cx - d} cy={cy} rx={rx / 2} ry={ry * 0.62} o={apart} /><PCell cx={cx + d} cy={cy} rx={rx / 2} ry={ry * 0.62} o={apart} /></> : null}
		</g>
	);
};
export const SplitCellsCoded: React.FC<{cx?: number; cy?: number; rx?: number; ry?: number; d: number; o?: number; sw?: number}> = ({cx = CX, cy = CY, rx = RX, ry = RY, d, o = 1, sw = 6}) => {
	const e = Math.min(d, rx / 2);
	const rxe = rx - e;
	const rye = ry * (1 - 0.42 * clamp01(d / (rx / 2)));
	return (
		<g opacity={o}>
			<ellipse cx={cx - d} cy={cy} rx={rxe} ry={rye} fill="none" stroke={CELL_LINE} strokeWidth={sw * 2} />
			<ellipse cx={cx + d} cy={cy} rx={rxe} ry={rye} fill="none" stroke={CELL_LINE} strokeWidth={sw * 2} />
			<ellipse cx={cx - d} cy={cy} rx={rxe} ry={rye} fill={CELL_FILL} />
			<ellipse cx={cx + d} cy={cy} rx={rxe} ry={rye} fill={CELL_FILL} />
		</g>
	);
};

/** Dashed nuclear envelope. p dissolves it (0 whole, 1 gone). */
export const Envelope: React.FC<{cx?: number; cy?: number; r?: number; p?: number; o?: number; grow?: number}> = ({cx = CX, cy = CY, r = NUC_R, p = 0, o = 1, grow = 1}) => {
	const op = o * (1 - p) * clamp01(grow * 1.2);
	if (op <= 0.01) return null;
	const rr = r * (1 + 0.14 * (1 - grow));
	return (
		<g opacity={op}>
			<circle cx={cx} cy={cy} r={rr} fill={NUC_FILL} opacity={1 - p * 0.5} />
			<circle cx={cx} cy={cy} r={rr} fill="none" stroke={NUC_LINE} strokeWidth={5} strokeDasharray={`${26 * (1 - p) + 3} ${10 + 34 * p}`} strokeLinecap="round" />
		</g>
	);
};

// ---------- spindle ----------
export const Pole: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	if (p <= 0) return null;
	return (
		<g transform={`translate(${x},${y}) scale(${p})`}>
			<circle r={15} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} />
			<circle r={6} fill={AMBER_INK} />
		</g>
	);
};
/** A thin fibre from a pole towards a point. p 0..1 is how far it has grown. */
export const Fibre: React.FC<{x1: number; y1: number; x2: number; y2: number; p?: number; o?: number; color?: string; w?: number}> = ({x1, y1, x2, y2, p = 1, o = 1, color = INK_SOFT, w = 3.2}) => {
	if (p <= 0.01) return null;
	return <line x1={x1} y1={y1} x2={lerp(x1, x2, clamp01(p))} y2={lerp(y1, y2, clamp01(p))} stroke={color} strokeWidth={w} strokeLinecap="round" opacity={0.62 * o} />;
};

// ---------- stage strip ----------
export const STAGES = ['1 prophase', '2 metaphase', '3 anaphase', '4 telophase', 'cytokinesis'];
export const StageStrip: React.FC<{at: (number | null)[]; active?: number; x?: number; y?: number; k?: number}> = ({at, active = -1, x = 96, y = 892, k = 1}) => {
	const f = useCurrentFrame();
	return (
		<div style={{position: 'absolute', left: x, top: y, display: 'flex', gap: 14 * k, transformOrigin: '0 0', transform: `scale(${k})`}}>
			{STAGES.map((t, i) => {
				const a = at[i];
				if (a === null || a === undefined) return null;
				const p = prog(f, a, 14);
				const on = i === active;
				return (
					<span key={t} style={{opacity: p, transform: `translateY(${(1 - p) * -30}px) scale(${1 + 0.1 * (1 - p)})`, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: on ? AMBER_INK : INK, background: on ? '#ffe6a8' : '#fffdf8', border: `3px solid ${on ? AMBER_INK : '#c9bda6'}`, borderRadius: 999, padding: '0 24px 4px', whiteSpace: 'nowrap', boxShadow: '0 6px 14px rgba(60,45,20,0.08)'}}>{t}</span>
				);
			})}
		</div>
	);
};

// ---------- pen tapping centromeres ----------
export const Pencil: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (
	<g transform={`translate(${x},${y}) rotate(35)`} opacity={o}>
		<path d="M0,0 L-9,-24 L9,-24 Z" fill="#ecd3a6" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<path d="M0,0 L-3,-8 L3,-8 Z" fill={INK} />
		<rect x={-9} y={-96} width={18} height={72} fill="#f2b53d" stroke={INK} strokeWidth={3} />
		<rect x={-9} y={-110} width={18} height={14} rx={4} fill="#e58a7a" stroke={INK} strokeWidth={3} />
	</g>
);
/** A pencil that taps points in turn; each tap leaves a numbered badge. */
export const PenTap: React.FC<{pts: [number, number][]; at: number[]; badge?: [number, number]; color?: string; showPen?: boolean; out?: number}> = ({pts, at, badge = [34, -34], color = AMBER_INK, showPen = true, out}) => {
	const f = useCurrentFrame();
	let idx = -1;
	at.forEach((a, i) => { if (f >= a) idx = i; });
	const penO = (showPen ? 1 : 0) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * prog(f, at[0] - 16, 10);
	let px = pts[0][0], py = pts[0][1];
	if (idx >= 0) {
		const nxt = idx + 1 < pts.length ? idx + 1 : -1;
		px = pts[idx][0]; py = pts[idx][1];
		if (nxt >= 0) {
			const t = prog(f, at[nxt] - 16, 16);
			px = lerp(pts[idx][0], pts[nxt][0], t); py = lerp(pts[idx][1], pts[nxt][1], t);
		}
	} else {
		const t = prog(f, at[0] - 16, 16);
		px = pts[0][0] + 80 * (1 - t); py = pts[0][1] - 60 * (1 - t);
	}
	const dip = idx >= 0 ? Math.max(0, 1 - (f - at[idx]) / 8) * 7 : 0;
	return (
		<g>
			{pts.map((pt, i) => {
				if (i > idx) return null;
				const t = f - at[i];
				const ring = t < 18 ? prog(f, at[i], 18) : 1;
				return (
					<g key={i}>
						{t < 18 ? <circle cx={pt[0]} cy={pt[1]} r={14 + 30 * ring} fill="none" stroke={color} strokeWidth={5} opacity={1 - ring} /> : null}
						<g transform={`translate(${pt[0] + badge[0]},${pt[1] + badge[1]}) scale(${0.6 + 0.4 * prog(f, at[i] + 2, 8)})`} opacity={prog(f, at[i] + 2, 8)}>
							<circle r={22} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
							<text y={11} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30}} fill="#fff">{i + 1}</text>
						</g>
					</g>
				);
			})}
			<Pencil x={px} y={py - dip} o={penO} />
		</g>
	);
};

// ---------- misc coded drawing ----------
export const arcPath = (cx: number, cy: number, r: number, a0: number, a1: number) => {
	const rad = (a: number) => ((a - 90) * Math.PI) / 180;
	const p0: [number, number] = [cx + r * Math.cos(rad(a0)), cy + r * Math.sin(rad(a0))];
	const p1: [number, number] = [cx + r * Math.cos(rad(a1)), cy + r * Math.sin(rad(a1))];
	return `M${p0[0].toFixed(1)},${p0[1].toFixed(1)} A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p1[0].toFixed(1)},${p1[1].toFixed(1)}`;
};
export const onCircle = (cx: number, cy: number, r: number, a: number): [number, number] => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)];

/** Hand-drawn grey cross (a wrong idea, never red). */
export const GreyCross: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => (
	<g>
		<DrawPath d={`M${x - 22 * s},${y - 22 * s} L${x + 22 * s},${y + 22 * s}`} at={at} dur={8} color="#7a8088" width={7} />
		<DrawPath d={`M${x + 22 * s},${y - 22 * s} L${x - 22 * s},${y + 22 * s}`} at={at + 6} dur={8} color="#7a8088" width={7} />
	</g>
);

/** The model cell body with its nucleus, drawn at any scale, for small icons. */
export const MiniCell: React.FC<{cx: number; cy: number; rx: number; ry: number; o?: number; sw?: number}> = ({cx, cy, rx, ry, o = 1, sw = 4}) => (
	<g opacity={o}>
		<CellBody cx={cx} cy={cy} rx={rx} ry={ry} sw={sw} />
	</g>
);

export const Ink = INK;
