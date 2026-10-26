// M7 B09 drawing parts: the coded antibody graph (axes that can compress in time and morph from a linear to a log
// scale, curves computed from level functions and drawn up to a moving end time, exposure arrows, brackets and an
// illness band), the cell count field (small B and T cell plates with the fitting ones lit and memory cells marked,
// B cells able to crossfade to plasma cells), and the two-by-two immunity table. B08, B07 and B06 (M7) parts and
// b06's response strip are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, Sx, TEAL, TEAL_SOFT, TERRA,
	clamp01, fitW, lerp, prog, pulse, smooth, tw, vis, CardBox, Yg, VRED,
} from '../bio-m7-b08/parts';
import type {PB, Pt} from '../bio-m7-b08/parts';
import {PLATES, plasmaW} from './assets';

export {
	AMBER, AMBER_INK, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, Sx, TEAL, TEAL_SOFT, TERRA,
	clamp01, fitW, lerp, prog, pulse, smooth, tw, vis, CardBox, Yg, VRED,
};
export type {PB, Pt};

// ---------- antibody levels (arbitrary units; log-linear between points) ----------
export type Pts = [number, number][];
export const interp = (pts: Pts, t: number) => {
	if (t <= pts[0][0]) return pts[0][1];
	for (let i = 1; i < pts.length; i++) {
		if (t <= pts[i][0]) {
			const [t0, v0] = pts[i - 1], [t1, v1] = pts[i];
			const u = (t - t0) / (t1 - t0);
			return Math.exp(lerp(Math.log(v0), Math.log(v1), smooth(u)));
		}
	}
	return pts[pts.length - 1][1];
};
/** Primary response from exposure at t = 0: lag, low peak, fall to a low tail that stays above zero. */
export const PRIM: Pts = [[0, 1], [6, 1.2], [14, 100], [30, 35], [45, 26], [200, 22]];
/** Secondary response, t = 0 at the second exposure, from the primary tail. */
export const SEC: Pts = [[0, 24], [2, 26], [8, 1000], [20, 650], [40, 420], [200, 380]];
/** A booster (a smaller secondary). */
export const BOOST: Pts = [[0, 24], [2, 26], [8, 420], [20, 260], [40, 180], [200, 160]];

// ---------- the graph ----------
export type G = {x0: number; y0: number; w: number; h: number};
export const lerpG = (a: G, b: G, t: number): G => ({x0: lerp(a.x0, b.x0, t), y0: lerp(a.y0, b.y0, t), w: lerp(a.w, b.w, t), h: lerp(a.h, b.h, t)});
/** Height fraction of a level: linear (L / 1050) morphing to log (log10 L / 3). */
export const vOf = (L: number, logT: number) => lerp(L / 1050, Math.log10(Math.max(1, L)) / 3, clamp01(logT));
export const gx = (g: G, xMax: number, t: number) => g.x0 + (t / xMax) * g.w;
export const gy = (g: G, L: number, logT: number) => g.y0 + g.h - vOf(L, logT) * g.h;
/** Axes with labels; log tick labels (1, 10, 100, 1000) fade in with `logT`; `xTicks` adds numbered day ticks. */
export const Axes: React.FC<{g: G; at: number; logT?: number; xLabel?: string; yLabel?: string; o?: number; xTicks?: number[]; xMax?: number; size?: number}> = ({g, at, logT = 0, xLabel = 'time after first exposure (days)', yLabel = 'antibody level', o = 1, xTicks, xMax = 60, size = 26}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const lt = clamp01(logT);
	return (
		<g opacity={o}>
			<DrawPath d={`M${g.x0},${g.y0 - 10} L${g.x0},${g.y0 + g.h} L${g.x0 + g.w + 20},${g.y0 + g.h}`} at={at} dur={20} color={INK_SOFT} width={4} />
			<Sx x={g.x0 + g.w} y={g.y0 + g.h + (xTicks ? 72 : 52)} text={xLabel} size={size} color={GREY_INK} weight={600} anchor="end" at={at + 10} />
			<g transform={`translate(${g.x0 - (lt > 0.01 ? 86 : 50)},${g.y0 + g.h / 2}) rotate(-90)`}>
				<Sx x={0} y={0} text={lt > 0.5 ? yLabel + ' (log scale)' : yLabel} size={size} color={GREY_INK} weight={600} anchor="middle" at={at + 10} />
			</g>
			{lt > 0.01 ? [1, 10, 100, 1000].map(v => (
				<g key={v} opacity={lt}>
					<line x1={g.x0 - 10} x2={g.x0} y1={gy(g, v, 1)} y2={gy(g, v, 1)} stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={g.x0 - 16} y={gy(g, v, 1) + 9} text={`${v}`} size={size * 0.9} color={GREY_INK} weight={600} anchor="end" at={-100} />
				</g>
			)) : null}
			{xTicks ? xTicks.map(t => (
				<g key={t}>
					<line x1={gx(g, xMax, t)} x2={gx(g, xMax, t)} y1={g.y0 + g.h} y2={g.y0 + g.h + 10} stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={gx(g, xMax, t)} y={g.y0 + g.h + 34} text={`${t}`} size={size * 0.85} color={GREY_INK} weight={600} anchor="middle" at={-100} />
				</g>
			)) : null}
		</g>
	);
};
/** A curve L(t) for t in [t0, tEnd], drawn at the graph's current xMax and log blend. */
export const Curve: React.FC<{g: G; xMax: number; logT?: number; fn: (t: number) => number; t0: number; tEnd: number; color?: string; width?: number; dash?: string; o?: number; glow?: number}> = ({g, xMax, logT = 0, fn, t0, tEnd, color = INK_SOFT, width = 6, dash, o = 1, glow = 0}) => {
	if (tEnd <= t0 || o <= 0.01) return null;
	const n = Math.max(2, Math.ceil((tEnd - t0) * 2));
	const d = Array.from({length: n + 1}, (_, i) => {
		const t = t0 + ((tEnd - t0) * i) / n;
		return `${i ? 'L' : 'M'}${gx(g, xMax, t).toFixed(1)},${gy(g, fn(t), logT).toFixed(1)}`;
	}).join(' ');
	return (
		<g opacity={o}>
			{glow > 0.01 ? <path d={d} fill="none" stroke={color} strokeWidth={width + 12} strokeLinecap="round" strokeLinejoin="round" opacity={0.18 * glow} /> : null}
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} />
		</g>
	);
};
/** An exposure arrow under the x axis at day t, with a label. */
export const ExpArrow: React.FC<{g: G; xMax: number; t: number; label: string; at: number; color?: string; o?: number; size?: number; dy?: number}> = ({g, xMax, t, label, at, color = AMBER, o = 1, size = 26, dy = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const x = gx(g, xMax, t), y = g.y0 + g.h;
	return (
		<g opacity={p} transform={`translate(0,${(1 - p) * 20})`}>
			<path d={`M${x},${y + 62 + dy} L${x},${y + 14} M${x - 12},${y + 30} L${x},${y + 12} L${x + 12},${y + 30}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
			<Sx x={x} y={y + 92 + dy} text={label} size={size} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};
/** A horizontal bracket over days [t0, t1] at screen y, with a label above. */
export const HBracket: React.FC<{g: G; xMax: number; t0: number; t1: number; y: number; label?: string; at: number; out?: number; color?: string; o?: number; size?: number}> = ({g, xMax, t0, t1, y, label, at, out, color = GREY_INK, o = 1, size = 24}) => {
	const f = useCurrentFrame();
	const p = vis(f, at, out, 12) * o;
	if (f < at || p <= 0.01) return null;
	const a = gx(g, xMax, t0), b = gx(g, xMax, t1);
	return (
		<g opacity={p}>
			<path d={`M${a},${y + 12} L${a},${y} L${b},${y} L${b},${y + 12}`} fill="none" stroke={color} strokeWidth={3.5} />
			{label ? <Sx x={(a + b) / 2} y={y - 12} text={label} size={size} color={color} weight={600} anchor="middle" at={-100} /> : null}
		</g>
	);
};
/** A soft grey band under the curve over days [t0, t1] (illness). */
export const Band: React.FC<{g: G; xMax: number; t0: number; t1: number; o: number; label?: string; size?: number; labelY?: number}> = ({g, xMax, t0, t1, o, label, size = 22, labelY}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={gx(g, xMax, t0)} y={g.y0} width={gx(g, xMax, t1) - gx(g, xMax, t0)} height={g.h} fill="#9aa0a6" opacity={0.18} />
		{label ? <Sx x={gx(g, xMax, t0) + 10} y={labelY ?? g.y0 + 30} text={label} size={size} color={GREY_INK} weight={600} at={-100} /> : null}
	</g>
));

// ---------- the cell count field ----------
export const FIELD = {cols: 10, rows: 5, nT: 10};
export const FEW = [12, 27, 44];
export const MEM = [2, 5, 9, 12, 14, 17, 20, 23, 26, 27, 30, 33, 35, 37, 39, 41, 43, 44, 46, 48];
/**
 * A grid of small B cell plates (the last `nT` are T cells). `lit` cells glow teal; `mem` adds a small grey "M";
 * `plasma` lists B cells crossfading to plasma copies (by `plasmaT`); `pulseAmt` pulses the lit cells.
 */
export const CellField: React.FC<{x: number; y: number; dx?: number; dy?: number; cw?: number; lit?: number[]; litO?: number; mem?: number[]; memO?: number; plasma?: number[]; plasmaT?: number; pulseAmt?: number; o?: number; flash?: number[]; flashO?: number}> = ({x, y, dx = 86, dy = 56, cw = 46, lit = [], litO = 1, mem = [], memO = 1, plasma = [], plasmaT = 0, pulseAmt = 0, o = 1, flash = [], flashO = 0}) => {
	if (o <= 0.01) return null;
	const n = FIELD.cols * FIELD.rows;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const cx = x + (i % FIELD.cols) * dx, cy = y + Math.floor(i / FIELD.cols) * dy;
				const isT = i >= n - FIELD.nT;
				const on = lit.includes(i) ? clamp01(litO) : 0;
				const pl = plasma.includes(i) ? clamp01(plasmaT) : 0;
				const g = 1 - on;
				const p = isT ? PLATES.tcell : PLATES.bare;
				const s = 1 + 0.15 * on * pulseAmt;
				return (
					<g key={i}>
						{on > 0.01 ? <circle cx={cx} cy={cy} r={cw * 0.62 * s} fill={TEAL} opacity={0.3 * on} /> : null}
						{flash.includes(i) && flashO > 0.01 ? <circle cx={cx} cy={cy} r={cw * 0.85} fill="none" stroke={AMBER} strokeWidth={4} opacity={flashO} /> : null}
						<PlateB p={p} cx={cx} cy={cy} w={cw * s} o={1 - pl} filter={g > 0.01 ? `grayscale(${0.85 * g})` : undefined} />
						{pl > 0.01 ? <PlateB p={PLATES.plasma} cx={cx} cy={cy} w={plasmaW(cw)} o={pl} /> : null}
						{mem.includes(i) && memO > 0.01 ? <Sx x={cx + cw * 0.42} y={cy - cw * 0.3} text="M" size={cw * 0.42} color={GREY_INK} weight={800} at={-100} opacity={memO} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the immunity table ----------
export const TBL = {x: 120, y: 250, hw: 200, cw: 510, hh: 64, rh: 300};
export const quad = (r: number, c: number) => ({x: TBL.x + TBL.hw + c * TBL.cw, y: TBL.y + TBL.hh + r * TBL.rh, w: TBL.cw, h: TBL.rh});
/** The empty table: grid lines, column headers; row headers write on their cues and light. */
export const ImmTable: React.FC<{at: number; rowAt: [number, number]; rowLit: [number, number]; o?: number; s?: number; ox?: number; oy?: number}> = ({at, rowAt, rowLit, o = 1, s = 1, ox = TBL.x, oy = TBL.y}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	const W = TBL.hw + 2 * TBL.cw, H = TBL.hh + 2 * TBL.rh;
	return (
		<g opacity={p} transform={s !== 1 ? `translate(${ox},${oy}) scale(${s}) translate(${-TBL.x},${-TBL.y})` : undefined}>
			<rect x={TBL.x} y={TBL.y} width={W} height={H} rx={20} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<line x1={TBL.x} x2={TBL.x + W} y1={TBL.y + TBL.hh} y2={TBL.y + TBL.hh} stroke={EDGE} strokeWidth={3} />
			<line x1={TBL.x} x2={TBL.x + W} y1={TBL.y + TBL.hh + TBL.rh} y2={TBL.y + TBL.hh + TBL.rh} stroke={EDGE} strokeWidth={3} />
			<line x1={TBL.x + TBL.hw} x2={TBL.x + TBL.hw} y1={TBL.y} y2={TBL.y + H} stroke={EDGE} strokeWidth={3} />
			<line x1={TBL.x + TBL.hw + TBL.cw} x2={TBL.x + TBL.hw + TBL.cw} y1={TBL.y} y2={TBL.y + H} stroke={EDGE} strokeWidth={3} />
			{['natural', 'artificial'].map((t, c) => <Sx key={t} x={TBL.x + TBL.hw + c * TBL.cw + TBL.cw / 2} y={TBL.y + 44} text={t} size={34} color={GREY_INK} hand weight={700} anchor="middle" at={at + 6} />)}
			{['active', 'passive'].map((t, r) => {
				const on = clamp01(rowLit[r]) > 0.5;
				const ry = TBL.y + TBL.hh + r * TBL.rh;
				return (
					<g key={t}>
						{on ? <rect x={TBL.x + 6} y={ry + 6} width={TBL.hw - 12} height={TBL.rh - 12} rx={14} fill={r ? AMBER : TEAL} opacity={0.1} /> : null}
						<Sx x={TBL.x + TBL.hw / 2} y={ry + 60} text={t} size={40} color={on ? (r ? AMBER_INK : TEAL) : GREY_INK} hand weight={700} anchor="middle" at={rowAt[r]} />
					</g>
				);
			})}
		</g>
	);
};
/** A quadrant's content: a thumbnail (fitted, never stretched) and a hand label. */
export const Quad: React.FC<{r: number; c: number; at: number; p?: PB; label: string; lit?: number; dim?: number; children?: React.ReactNode; pw?: number}> = ({r, c, at, p, label, lit = 0, dim = 0, children, pw = 300}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const Q = quad(r, c);
	const d = clamp01(dim);
	const col = r ? AMBER : TEAL;
	return (
		<g opacity={o * (1 - 0.5 * d)} style={d > 0.01 ? {filter: `grayscale(${d})`} : undefined}>
			{lit > 0.01 ? <rect x={Q.x + 8} y={Q.y + 8} width={Q.w - 16} height={Q.h - 16} rx={16} fill="none" stroke={col} strokeWidth={5} opacity={lit} /> : null}
			{p ? <PlateB p={p} cx={Q.x + Q.w / 2} cy={Q.y + Q.h / 2 - 20} w={fitW(p, pw, Q.h - 120)} /> : null}
			{children}
			<Sx x={Q.x + Q.w / 2} y={Q.y + Q.h - 26} text={label} size={32} color={r ? AMBER_INK : TEAL} hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};
export const useF = () => useCurrentFrame();
void CTag; void GTag; void Gloss; void INK; void MistakeChip; void Pl; void PlainArrow; void Ring; void TEAL_SOFT; void TERRA; void tw; void CardBox; void Yg; void VRED; void pulse; void GREYT;
