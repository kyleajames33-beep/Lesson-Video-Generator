// Drawing parts for M6 P02 (enthalpy of neutralisation practical), reused by P03. One visual system with C01 to C16
// (re-exported through C16): chips, crossed chips, question card, countdown, key notes, the C03 calorimeter, heat
// arrows, amber readout, givens card, working lines and number line, the C13 graph axes. New here:
// - CupB: the foam-cup-in-beaker plate with a liftable lid (probe and stirrer lift with it) and a bobbing stirrer;
// - Cyl and PourCyl: the measuring cylinder with a coded liquid level, poured along an arc (no hands);
// - TRead: an amber readout whose text is a function of frame; Ghost: the dashed "?" readout;
// - TGraph, TPts, GSeg: the temperature-time graph (amber points, teal cooling line, dashed extrapolation);
// - ChainRow: the error chain (source, ΔT, q, ΔH) with arrows that light up or down;
// - RTable: the risk table, rows dimming as each new one writes; VCard: a titled card that dims;
// - RowsLog: the scrolling results log; GTick: a small grey tick.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog} from '../../kit';
import {
	AMBER, AMBER_INK, Axes, Fade, HEAT, INK, INK_SOFT, PicH, READ_BG, READ_TXT, Sx, TEAL, clamp01, gx, gy, lerp, mw, natPt, picW, smooth, vis,
} from '../chem-m6-c16/parts';
import type {GG} from '../chem-m6-c16/parts';
import {CUPB, CUP_N, CYL, CYL_N} from './assets';
import type {PDef} from './assets';
import {GREEN} from './common';

export * from '../chem-m6-c16/parts';

export const HAZ = '#b5502b';
export const GLINE = '#8f887d';
export const DIMT = 0.38;

// ---------- foam cup in beaker, with liftable lid and bobbing stirrer ----------
let cupId = 0;
export const cupW = (h: number) => picW(CUPB, h);
export const cupPt = (x: number, y: number, h: number, n: [number, number]) => natPt(CUPB, x, y, h, n[0], n[1]);
/** lift: lid (with probe and stirrer) raised by this many px; bob: extra stirrer offset; glow 0..1: warm window. */
export const CupB: React.FC<{x: number; y: number; h: number; lift?: number; bob?: number; glow?: number; o?: number}> = ({x, y, h, lift = 0, bob = 0, glow = 0, o = 1}) => {
	const id = React.useMemo(() => `cupb-${++cupId}`, []);
	if (o <= 0.01) return null;
	const p = CUPB;
	const k = h / p.box[3];
	const ix = x - p.box[0] * k, iy = y - p.box[1] * k, iw = p.nat[0] * k, ih = p.nat[1] * k;
	const N = (nx: number, ny: number) => `${(x + (nx - p.box[0]) * k).toFixed(1)},${(y + (ny - p.box[1]) * k).toFixed(1)}`;
	const lidU = `M${N(690, 150)} L${N(1370, 150)} L${N(1370, 946)} L${N(1182, 946)} L${N(1182, 1240)} L${N(1106, 1240)} L${N(1106, 946)} L${N(690, 946)} Z`;
	const outer = `M${ix},${iy} L${ix + iw},${iy} L${ix + iw},${iy + ih} L${ix},${iy + ih} Z`;
	const lidOnly = `M${N(690, 150)} L${N(1106, 150)} L${N(1106, 946)} L${N(690, 946)} Z M${N(1182, 150)} L${N(1370, 150)} L${N(1370, 946)} L${N(1182, 946)} Z`;
	const stir = `M${N(1106, 150)} L${N(1182, 150)} L${N(1182, 1240)} L${N(1106, 1240)} Z`;
	const img = <image href={staticFile(p.src)} x={ix} y={iy} width={iw} height={ih} />;
	const [wx, wy] = cupPt(x, y, h, CUP_N.win);
	return (
		<g opacity={o}>
			<clipPath id={id + 'b'}><path d={outer + ' ' + lidU} clipRule="evenodd" /></clipPath>
			<clipPath id={id + 'l'}><path d={lidOnly} /></clipPath>
			<clipPath id={id + 's'}><path d={stir} /></clipPath>
			<g clipPath={`url(#${id}b)`}>{img}</g>
			{glow > 0.01 ? <ellipse cx={wx} cy={wy + 6} rx={CUP_N.winR[0] * k * 0.85} ry={CUP_N.winR[1] * k * 0.7} fill={HEAT} opacity={0.3 * glow} /> : null}
			<g transform={`translate(0,${-lift})`} clipPath={`url(#${id}l)`}>{img}</g>
			<g transform={`translate(0,${-lift - bob})`}><g clipPath={`url(#${id}s)`}>{img}</g></g>
		</g>
	);
};
/** Heat-loss arrow sets on the cup: walls, lid gap. */
export const cupHeat = (x: number, y: number, h: number, lift = 0): [number, number, number][] => {
	const L = cupPt(x, y, h, CUP_N.lidL), R = cupPt(x, y, h, CUP_N.lidR), wl = cupPt(x, y, h, CUP_N.beakL), wr = cupPt(x, y, h, CUP_N.beakR);
	return [[R[0] + 6, R[1] - lift, -0.5], [L[0] - 6, L[1] - lift, -2.64], [wl[0] - 6, wl[1], Math.PI], [wr[0] + 6, wr[1], 0]];
};

// ---------- measuring cylinder with coded liquid ----------
export const cylW = (h: number) => picW(CYL, h);
const cylLevelY = (ml: number) => CYL_N.zero - ((CYL_N.zero - CYL_N.full) * ml) / 100;
/** Cylinder drawn with its visible box at (0, 0), height h (used inside transforms). */
const CylLocal: React.FC<{h: number; ml: number; tint: string}> = ({h, ml, tint}) => {
	const k = h / CYL.box[3];
	const X = (nx: number) => (nx - CYL.box[0]) * k, Y = (ny: number) => (ny - CYL.box[1]) * k;
	const top = cylLevelY(ml);
	return (
		<g>
			<PicH p={CYL} x={0} y={0} h={h} />
			{ml > 0.3 ? <>
				<rect x={X(CYL_N.x0)} y={Y(top)} width={X(CYL_N.x1) - X(CYL_N.x0)} height={Y(CYL_N.zero - 4) - Y(top)} fill={tint} opacity={0.5} />
				<line x1={X(CYL_N.x0)} y1={Y(top)} x2={X(CYL_N.x1)} y2={Y(top)} stroke="#7fa9c8" strokeWidth={3} />
			</> : null}
		</g>
	);
};
export const Cyl: React.FC<{x: number; y: number; h: number; ml?: number; tint?: string; o?: number}> = ({x, y, h, ml = 50, tint = '#bcd9ee', o = 1}) =>
	o <= 0.01 ? null : <g opacity={o} transform={`translate(${x},${y})`}><CylLocal h={h} ml={ml} tint={tint} /></g>;
/** Screen point of a cylinder level (left edge, right edge) for marks. */
export const cylMark = (x: number, y: number, h: number, ml: number) => {
	const a = natPt(CYL, x, y, h, CYL_N.x0, cylLevelY(ml)), b = natPt(CYL, x, y, h, CYL_N.x1, cylLevelY(ml));
	return {x1: a[0], x2: b[0], y: a[1]};
};
/** The cylinder rises along an arc, tilts and pours into `stream`, then leaves. mirror: spout on the right. */
export const PourCyl: React.FC<{x: number; y: number; h: number; at: number; to: [number, number]; ang: number; stream: [number, number]; mirror?: boolean; ml0?: number; tint?: string; leave?: boolean; before?: number}> = ({x, y, h, at, to, ang, stream, mirror = false, ml0 = 50, tint = '#bcd9ee', leave = true, before = -1000}) => {
	const f = useCurrentFrame();
	const show = prog(f, before, 12);
	if (show <= 0.01) return null;
	const w = cylW(h);
	const go = smooth(prog(f, at, 30)) * (leave ? 1 : 1);
	const tilt = smooth(prog(f, at + 20, 20)) * (1 - smooth(prog(f, at + 84, 16)));
	const gone = leave ? prog(f, at + 92, 18) : 0;
	if (gone >= 1) return null;
	const cx0 = x + w / 2, cy0 = y + h / 2;
	const cx = lerp(cx0, to[0], go), cy = lerp(cy0, to[1], go) - Math.sin(go * Math.PI) * 60;
	const a = ang * tilt;
	const k = h / CYL.box[3];
	const sx0 = (CYL_N.spout[0] - (CYL.box[0] + CYL.box[2] / 2)) * k, sy = (CYL_N.spout[1] - (CYL.box[1] + CYL.box[3] / 2)) * k;
	const sx = mirror ? -sx0 : sx0;
	const r = (a * Math.PI) / 180;
	const tip: [number, number] = [cx + sx * Math.cos(r) - sy * Math.sin(r), cy + sx * Math.sin(r) + sy * Math.cos(r)];
	const flow = vis(f, at + 36, at + 80, 8);
	const ml = ml0 * (1 - smooth(prog(f, at + 36, 42)));
	return (
		<g opacity={show * (1 - gone)}>
			{flow > 0.01 ? <path d={`M${tip[0]},${tip[1]} Q${(tip[0] + stream[0]) / 2},${Math.min(tip[1], stream[1]) - 10} ${stream[0]},${stream[1]}`} fill="none" stroke="#9cc8e6" strokeWidth={9} strokeLinecap="round" opacity={0.85 * flow} /> : null}
			<g transform={`translate(${cx},${cy}) rotate(${a}) scale(${mirror ? -1 : 1},1) translate(${-w / 2},${-h / 2})`}>
				<CylLocal h={h} ml={ml} tint={tint} />
			</g>
		</g>
	);
};

// ---------- readouts ----------
export const treadW = (size = 34, sample = '28.0 °C') => mw(sample, size, false, 800) + size * 1.4;
/** Dark readout with amber digits; text(f) gives the reading. pulse: a glow frame. */
export const TRead: React.FC<{x: number; y: number; text: (f: number) => string; at: number; out?: number; size?: number; o?: number; pulse?: number; sample?: string}> = ({x, y, text, at, out, size = 34, o = 1, pulse, sample}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const w = treadW(size, sample), h = size * 1.55;
	const g = pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - pulse) / 36) * Math.PI));
	return (
		<g opacity={v}>
			{g > 0.01 ? <rect x={x - 8} y={y - 8} width={w + 16} height={h + 16} rx={16} fill="#f6d77a" opacity={0.7 * g} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={12} fill={READ_BG} stroke={INK} strokeWidth={2} />
			<text x={x + w / 2} y={y + h / 2 + size * 0.35} textAnchor="middle" fill={READ_TXT} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontVariantNumeric: 'tabular-nums'}}>{text(f)}</text>
		</g>
	);
};
/** Dashed amber "ghost" readout (the temperature never seen). */
export const Ghost: React.FC<{x: number; y: number; text: (f: number) => string; at: number; out?: number; size?: number; fill?: number}> = ({x, y, text, at, out, size = 34, fill}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const w = treadW(size), h = size * 1.55;
	const fl = fill === undefined ? 0 : prog(f, fill, 14);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={12} fill={READ_BG} opacity={0.9 * fl} />
			<rect x={x} y={y} width={w} height={h} rx={12} fill="none" stroke={AMBER} strokeWidth={3.5} strokeDasharray="10 7" />
			<text x={x + w / 2} y={y + h / 2 + size * 0.35} textAnchor="middle" fill={fl > 0.5 ? READ_TXT : AMBER_INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}}>{text(f)}</text>
		</g>
	);
};

// ---------- temperature-time graph ----------
export type Pt = [number, number];
/** Axes with minor grid lines every xMinor / yMinor; numbers on xTicks / yTicks only. */
export const TGraph: React.FC<{g: GG; at: number; out?: number; o?: number; xTicks: number[]; yTicks: number[]; xMinor?: number; yMinor?: number; xLabel?: string; yLabel?: string; size?: number; extraY?: {v: number; t: string}[]; extraSize?: number}> = ({g, at, out, o = 1, xTicks, yTicks, xMinor = 0.5, yMinor = 0.5, xLabel = 'time after mixing (min)', yLabel = 'temperature (°C)', size = 26, extraY = [], extraSize = 16}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const ax = smooth(prog(f, at, 20));
	const xs: number[] = [], ys: number[] = [];
	for (let t = g.x0; t <= g.x1 + 1e-9; t += xMinor) xs.push(t);
	for (let t = g.y0; t <= g.y1 + 1e-9; t += yMinor) ys.push(t);
	return (
		<g opacity={v}>
			<g opacity={ax}>
				{xs.map((t, i) => <line key={'x' + i} x1={gx(g, t)} y1={g.y} x2={gx(g, t)} y2={g.y + g.h} stroke="#ece4d4" strokeWidth={1.6} />)}
				{ys.map((t, i) => <line key={'y' + i} x1={g.x} y1={gy(g, t)} x2={g.x + g.w} y2={gy(g, t)} stroke="#ece4d4" strokeWidth={1.6} />)}
			</g>
			<Axes g={g} at={at} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} size={size} grid={false} />
			{extraY.map((e, i) => <Sx key={'e' + i} x={g.x - 12} y={gy(g, e.v) + extraSize * 0.35} text={e.t} size={extraSize} color={INK_SOFT} anchor="end" weight={600} at={at + 10} />)}
		</g>
	);
};
/** Amber points popping in at time(i); from `teal.at`, indices >= teal.from turn teal. */
export const TPts: React.FC<{g: GG; pts: Pt[]; time: (i: number) => number; teal?: {from: number; at: number}; r?: number; o?: number}> = ({g, pts, time, teal, r = 9, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{pts.map(([t, T], i) => {
				const p = prog(f, time(i), 8);
				if (p <= 0.01) return null;
				const tl = teal && i >= teal.from ? prog(f, teal.at + (i - teal.from) * 2, 10) : 0;
				return <circle key={i} cx={gx(g, t)} cy={gy(g, T)} r={r * (0.5 + 0.5 * p)} fill={tl > 0.5 ? TEAL : AMBER} stroke={INK} strokeWidth={2.4} opacity={p} />;
			})}
		</g>
	);
};
/** A straight segment between graph points a and b, drawn from `at`. */
export const GSeg: React.FC<{g: GG; a: Pt; b: Pt; at: number; dur?: number; color?: string; dash?: string; width?: number; out?: number; o?: number}> = ({g, a, b, at, dur = 18, color = TEAL, dash, width = 5, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 1, out, 8) * o;
	if (v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${gx(g, a[0])},${gy(g, a[1])} L${gx(g, b[0])},${gy(g, b[1])}`} at={at} dur={dur} color={color} width={width} dash={dash} /></g>;
};
/** Vertical bracket at time t between temperatures lo and hi, with a label to the right. */
export const GBracket: React.FC<{g: GG; t: number; lo: number; hi: number; at: number; out?: number; text: string; color?: string; size?: number; dx?: number}> = ({g, t, lo, hi, at, out, text, color = HEAT, size = 28, dx = 16}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const X = gx(g, t) + dx, y1 = gy(g, hi), y2 = gy(g, lo);
	return (
		<g opacity={v}>
			<DrawPath d={`M${X - 8},${y1} L${X},${y1} L${X},${y2} L${X - 8},${y2}`} at={at} dur={10} color={color} width={4} />
			<Sx x={X + 12} y={(y1 + y2) / 2 + size * 0.35} text={text} size={size} color={color} hand weight={700} at={at + 6} />
		</g>
	);
};
/** Short warm arrows leaving graph points (heat lost during the rise). */
export const GHeat: React.FC<{g: GG; pts: Pt[]; at: number; out?: number}> = ({g, pts, at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{pts.map(([t, T], i) => {
				const q = ((f - at + i * 11) % 40) / 40;
				const x = gx(g, t) - 10 - q * 30, y = gy(g, T) - 10 - q * 26;
				return (
					<g key={i} opacity={Math.sin(q * Math.PI)} fill="none" stroke={HEAT} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round">
						<path d={`M${x},${y} L${x - 26},${y - 22}`} />
						<path d={`M${x - 26 + 14},${y - 22 + 2} L${x - 26},${y - 22} L${x - 26 + 2},${y - 22 + 14}`} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- error chain ----------
export type CCell = {lines: string[]; at: number; dir?: 'up' | 'down'; color?: string};
/** Linked boxes (source → ΔT → q → ΔH). Boxes outline from `at`; each cell's text and arrow write at cell.at. */
export const ChainRow: React.FC<{x: number; y: number; ws: number[]; h?: number; gap?: number; heads?: string[]; cells: CCell[]; at: number; out?: number; o?: number; size?: number}> = ({x, y, ws, h = 110, gap = 56, heads, cells, at, out, o = 1, size = 30}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	let cx = x;
	const xs = ws.map(w => { const r = cx; cx += w + gap; return r; });
	return (
		<g opacity={v}>
			{heads ? heads.map((t, i) => <Sx key={'h' + i} x={xs[i] + ws[i] / 2} y={y - 18} text={t} size={28} color={INK_SOFT} anchor="middle" hand at={at + i * 4} />) : null}
			{ws.map((w, i) => (
				<g key={i}>
					<rect x={xs[i]} y={y} width={w} height={h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} opacity={prog(f, at + i * 4, 10)} />
					{i < ws.length - 1 ? (
						<g opacity={prog(f, at + i * 4 + 6, 10)} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
							<path d={`M${xs[i] + w + 8},${y + h / 2} L${xs[i + 1] - 10},${y + h / 2}`} />
							<path d={`M${xs[i + 1] - 22},${y + h / 2 - 10} L${xs[i + 1] - 10},${y + h / 2} L${xs[i + 1] - 22},${y + h / 2 + 10}`} />
						</g>
					) : null}
				</g>
			))}
			{cells.map((c, i) => {
				const o2 = prog(f, c.at, 10);
				if (o2 <= 0.01) return null;
				const col = c.color ?? (c.dir === 'up' ? AMBER_INK : c.dir === 'down' ? HEAT : INK);
				const ax = c.dir ? 34 : 0;
				const lh = size * 1.2;
				const top = y + h / 2 - ((c.lines.length - 1) * lh) / 2 + size * 0.34;
				const tw0 = Math.max(...c.lines.map(l => mw(l, size, false, 700)));
				const x0 = xs[i] + (ws[i] - tw0 - ax) / 2 + ax;
				const pop = 1 + 0.25 * (1 - smooth(prog(f, c.at, 14)));
				const acx = x0 - 22, acy = y + h / 2;
				return (
					<g key={'c' + i} opacity={o2}>
						{c.dir ? (
							<g transform={`translate(${acx},${acy}) scale(${pop}) ${c.dir === 'up' ? '' : 'rotate(180)'}`} fill="none" stroke={col} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
								<path d="M0,20 L0,-20 M-12,-8 L0,-20 L12,-8" />
							</g>
						) : null}
						{c.lines.map((l, k) => <Sx key={k} x={x0} y={top + k * lh} text={l} size={size} color={col} weight={700} at={-1000} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- risk table, rows dimming ----------
export type RRow = {at: number; cells: (string | string[])[]; icon?: React.ReactNode; dimAt?: number};
export const RTable: React.FC<{x: number; y: number; cols: number[]; head: string[]; rows: RRow[]; at: number; out?: number; rowH?: number; size?: number; headSize?: number; iconW?: number}> = ({x, y, cols, head, rows, at, out, rowH = 100, size = 25, headSize = 30, iconW = 0}) => {
	const f = useCurrentFrame();
	const W = cols.reduce((a, b) => a + b, 0);
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, b) => a + b, 0));
	const headH = headSize + 28;
	const colors = [HAZ, INK, GREEN];
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={W} height={headH + rows.length * rowH} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<rect x={x} y={y} width={W} height={headH} rx={16} fill="#efe6d6" />
			{head.map((t, i) => <Sx key={i} x={xs[i] + 16} y={y + headH / 2 + headSize * 0.34} text={t} size={headSize} color={colors[i] ?? INK} hand at={-100} />)}
			{rows.map((r, j) => {
				const ry = y + headH + j * rowH;
				const next = r.dimAt ?? rows[j + 1]?.at;
				const o = prog(f, r.at, 12) * (next === undefined ? 1 : 1 - (1 - 0.42) * prog(f, next, 14));
				if (o <= 0.01) return null;
				return (
					<g key={j} opacity={o}>
						<path d={`M${x + 10},${ry} L${x + W - 10},${ry}`} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
						{r.icon}
						{r.cells.map((c, i) => {
							const lines = Array.isArray(c) ? c : [c];
							const lh = size * 1.2;
							const top = ry + rowH / 2 - ((lines.length - 1) * lh) / 2 + size * 0.34;
							return lines.map((ln, k) => <Sx key={i + '-' + k} x={xs[i] + 16 + (i === 0 ? iconW : 0)} y={top + k * lh} text={ln} size={size} color={colors[i] ?? INK} weight={i === 0 ? 700 : 600} at={-100} />);
						})}
					</g>
				);
			})}
		</Fade>
	);
};
/** A plate fitted into an icon box (uniform scale, never stretched). */
export const IconPlate: React.FC<{p: PDef; x: number; y: number; w: number; h: number; o?: number}> = ({p, x, y, w, h, o = 1}) => {
	const hh = Math.min(h, (w * p.box[3]) / p.box[2]);
	const ww = picW(p, hh);
	return <PicH p={p} x={x + (w - ww) / 2} y={y + (h - hh) / 2} h={hh} o={o} />;
};

// ---------- titled card that dims ----------
export type VLine = {t: string; at: number; size?: number; color?: string; weight?: number};
export const VCard: React.FC<{x: number; y: number; w: number; h: number; title: string; titleAt: number; color?: string; lines: VLine[]; at: number; dim?: number; out?: number; lh?: number}> = ({x, y, w, h, title, titleAt, color = TEAL, lines, at, dim, out, lh = 46}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 1 : 1 - (1 - DIMT) * prog(f, dim, 14);
	return (
		<g opacity={d}>
			<Fade at={at} out={out}>
				<rect x={x} y={y} width={w} height={h} rx={20} fill="#fffdf8" stroke={color} strokeWidth={3.5} />
				<Sx x={x + 28} y={y + 54} text={title} size={40} color={color} hand at={titleAt} />
				{lines.map((l, i) => <Sx key={i} x={x + 28} y={y + 54 + 20 + lh * (i + 0.8)} text={l.t} size={l.size ?? 30} color={l.color ?? INK} weight={l.weight ?? 600} at={l.at} />)}
			</Fade>
		</g>
	);
};

// ---------- scrolling results log ----------
export type LogRow = {t: string; at: number};
/** Rows write one by one; after `max` rows the older ones scroll up and fade; the newest is bright. From `compact`
 *  the row height shrinks to lhC so every row fits. */
export const RowsLog: React.FC<{x: number; y: number; rows: LogRow[]; max?: number; lh?: number; lhC?: number; compact?: number; size?: number; at: number; out?: number; head?: string}> = ({x, y, rows, max = 7, lh = 58, lhC = 40, compact, size = 34, at, out, head}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const c = compact === undefined ? 0 : smooth(prog(f, compact, 24));
	const L = lerp(lh, lhC, c);
	const ns = rows.reduce((a, r) => a + prog(f, r.at, 10), 0);
	const off = Math.max(0, ns - max) * (1 - c);
	const n = rows.filter(r => f >= r.at).length;
	const s = lerp(size, size * 0.78, c);
	return (
		<g opacity={v}>
			{head ? <Sx x={x} y={y - 24} text={head} size={28} color={INK_SOFT} hand at={at} /> : null}
			{rows.map((r, i) => {
				const p = prog(f, r.at, 10);
				if (p <= 0.01) return null;
				const j = i - off;
				const fade = clamp01(j + 1);
				if (fade <= 0.01) return null;
				const latest = i === n - 1;
				return <Sx key={i} x={x} y={y + 30 + j * L} text={r.t} size={s} color={INK} weight={latest ? 800 : 600} at={-1000} opacity={p * fade * (latest || c > 0.5 ? 1 : 0.55)} />;
			})}
		</g>
	);
};
export const logY = (y: number, i: number, lh: number) => y + 30 + i * lh;

// ---------- small grey tick ----------
export const GTick: React.FC<{x: number; y: number; at: number; s?: number; color?: string; out?: number}> = ({x, y, at, s = 1, color = GLINE, out}) => (
	<Fade at={at} out={out}><DrawPath d={`M${x - 10 * s},${y} L${x - 2 * s},${y + 9 * s} L${x + 13 * s},${y - 11 * s}`} at={at} dur={10} color={color} width={4} /></Fade>
);
/** A short drawn arrow (pen link). */
export const PenLink: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; color?: string; o?: number}> = ({a, b, at, out, color = INK_SOFT, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
	const hx = (k: number) => b[0] - Math.cos(ang + k) * 14, hy = (k: number) => b[1] - Math.sin(ang + k) * 14;
	return (
		<g opacity={v}>
			<DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={12} color={color} width={3} dash="7 6" />
			<path d={`M${hx(0.5)},${hy(0.5)} L${b[0]},${b[1]} L${hx(-0.5)},${hy(-0.5)}`} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" opacity={prog(f, at + 10, 6)} />
		</g>
	);
};
/** The question card box (any x and width). */
export const QBox: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => (
	<Fade at={at}><rect x={x} y={y} width={w} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);
/** Scales children about (cx, cy) from 1 to k over the first 20 frames of the scene. */
export const ShrinkTo: React.FC<{k: number; cx: number; cy: number; children: React.ReactNode}> = ({k, cx, cy, children}) => {
	const f = useCurrentFrame();
	const s = 1 - (1 - k) * smooth(prog(f, 0, 20));
	return <g transform={`translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`}>{children}</g>;
};
