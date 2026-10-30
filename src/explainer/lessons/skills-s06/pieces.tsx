// S06 pieces (lesson-local, coded abstract diagrams): GridPaper (fine and bold lines, draws on), axis labels and tick
// rows, plotted crosses, a drawn line or curve, the teal read-off line (up to the line, across to the axis), the
// scale trap (equal spacing bends the trend; real positions keep it straight), the TAILS rail (built like s07's fix
// rail), the trend card (direction, data, change), the report tiles and the column mini.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, CARD, DrawPath, GREEN, GREY, GREY_INK, HI, INK, INK_SOFT, RED, T, TEAL, clamp01, lerp, prog, smooth, vis} from './kit';
import type {Grid} from './common';

export const VIOLET = '#6a4fb0';
export const TERRA = '#b5502b';
const FINE = '#cfe0ee', BOLD = '#9fbfda';

/** Coded graph paper: nx by ny squares of side s, bold every 5; draws on from `at`. */
export const GridPaper: React.FC<{g: Grid; at: number; o?: number; dim?: number}> = ({g, at, o = 1, dim = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 20) * o;
	if (p <= 0.01) return null;
	const W = g.nx * g.s, H = g.ny * g.s;
	return (
		<g opacity={p * (1 - 0.5 * dim)}>
			<rect x={g.x} y={g.y} width={W} height={H} fill="#fbfdff" />
			{Array.from({length: g.nx + 1}, (_, i) => <line key={'v' + i} x1={g.x + i * g.s} x2={g.x + i * g.s} y1={g.y} y2={g.y + H * clamp01(p * 1.3 - i * 0.01)} stroke={i % 5 === 0 ? BOLD : FINE} strokeWidth={i % 5 === 0 ? 1.8 : 1} />)}
			{Array.from({length: g.ny + 1}, (_, i) => <line key={'h' + i} y1={g.y + i * g.s} y2={g.y + i * g.s} x1={g.x} x2={g.x + W * clamp01(p * 1.3 - i * 0.01)} stroke={i % 5 === 0 ? BOLD : FINE} strokeWidth={i % 5 === 0 ? 1.8 : 1} />)}
		</g>
	);
};
/** Ink axes along the grid's left and bottom edges. */
export const AxesInk: React.FC<{g: Grid; at: number; o?: number; width?: number}> = ({g, at, o = 1, width = 3.5}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={`M${g.x},${g.y - 6} L${g.x},${g.y + g.ny * g.s} L${g.x + g.nx * g.s + 8},${g.y + g.ny * g.s}`} at={at} dur={18} color={INK} width={width} /></g>;
};
/** Tick marks and numbers along an axis: `axis` x puts them under the grid, y left of it. */
export const Ticks: React.FC<{g: Grid; axis: 'x' | 'y'; ticks: {pos: number; label: string}[]; at: number; o?: number; size?: number; stagger?: number; color?: string}> = ({g, axis, ticks, at, o = 1, size = 18, stagger = 2, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const by = g.y + g.ny * g.s;
	return (
		<g opacity={o}>
			{ticks.map((t, i) => {
				const q = prog(f, at + i * stagger, 8);
				if (q <= 0.01) return null;
				return axis === 'x'
					? <g key={i} opacity={q}><line x1={t.pos} x2={t.pos} y1={by} y2={by + 9} stroke={INK} strokeWidth={2.5} /><T x={t.pos} y={by + 12 + size} text={t.label} size={size} color={color} weight={600} anchor="middle" /></g>
					: <g key={i} opacity={q}><line x1={g.x - 9} x2={g.x} y1={t.pos} y2={t.pos} stroke={INK} strokeWidth={2.5} /><T x={g.x - 14} y={t.pos + size * 0.35} text={t.label} size={size} color={color} weight={600} anchor="end" /></g>;
			})}
		</g>
	);
};
/** Axis label: x under the ticks (centred), y rotated left of the ticks. */
export const AxisLabel: React.FC<{g: Grid; axis: 'x' | 'y'; text: string; at: number; color?: string; size?: number; o?: number; off?: number; out?: number}> = ({g, axis, text, at, color = INK, size = 24, o = 1, off, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const W = g.nx * g.s, H = g.ny * g.s;
	if (axis === 'x') return <g opacity={v}><T x={g.x + W / 2} y={g.y + H + (off ?? 64)} text={text} size={size} color={color} weight={700} anchor="middle" /></g>;
	return <g opacity={v} transform={`translate(${g.x - (off ?? 58)},${g.y + H / 2}) rotate(-90)`}><T x={0} y={0} text={text} size={size} color={color} weight={700} anchor="middle" /></g>;
};
/** A small plotted cross. */
export const XMark: React.FC<{x: number; y: number; at: number; s?: number; color?: string; o?: number}> = ({x, y, at, s = 9, color = INK, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 8) * o;
	if (p <= 0.01) return null;
	const k = s * (0.4 + 0.6 * smooth(p));
	return <g opacity={p} stroke={color} strokeWidth={3.2} strokeLinecap="round"><line x1={x - k} y1={y - k} x2={x + k} y2={y + k} /><line x1={x - k} y1={y + k} x2={x + k} y2={y - k} /></g>;
};
/** A polyline or smooth path through screen points, drawn on. */
export const PathLine: React.FC<{pts: [number, number][]; at: number; dur?: number; color?: string; width?: number; dash?: string; o?: number; out?: number; smoothPath?: boolean}> = ({pts, at, dur = 22, color = INK, width = 4, dash, o = 1, out, smoothPath = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (f < at || v <= 0.01) return null;
	let d = `M${pts[0][0]},${pts[0][1]}`;
	if (smoothPath && pts.length > 2) {
		for (let i = 1; i < pts.length; i++) {
			const p0 = pts[i - 2] ?? pts[i - 1], p1 = pts[i - 1], p2 = pts[i], p3 = pts[i + 1] ?? p2;
			const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
			d += ` C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${p2[0]},${p2[1]}`;
		}
	} else d += pts.slice(1).map(p => ` L${p[0]},${p[1]}`).join('');
	return <g opacity={v}><DrawPath d={d} at={at} dur={dur} color={color} width={width} dash={dash} /></g>;
};
/** Teal read-off: up from (x, base) to the line at y, then across to the axis at x0; a chip at the axis. */
export const ReadOff: React.FC<{x: number; y: number; base: number; x0: number; at: number; label?: string; labelAt?: number; color?: string; out?: number; size?: number}> = ({x, y, base, x0, at, label, labelAt, color = TEAL, out, size = 24}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (f < at || v <= 0.01) return null;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x},${base} L${x},${y} L${x0},${y}`} at={at} dur={22} color={color} width={3.5} dash="9 6" />
			<circle cx={x} cy={y} r={6 * prog(f, at + 10, 6)} fill={color} />
			{label ? (
				<g opacity={prog(f, labelAt ?? at + 20, 8)}>
					<rect x={x0 - 18 - (label.length * size * 0.55 + 22)} y={y - size * 0.85} width={label.length * size * 0.55 + 22} height={size * 1.4} rx={size * 0.7} fill="#fffdf8" stroke={color} strokeWidth={2.5} />
					<T x={x0 - 18 - (label.length * size * 0.55 + 22) / 2} y={y + size * 0.3} text={label} size={size} color={color} weight={800} anchor="middle" />
				</g>
			) : null}
		</g>
	);
};

// ---------- the scale trap ----------
/** Two small axes stacked: top, the years equally spaced (terracotta, bends); bottom, real positions (green, straight). */
export const ScaleTrap: React.FC<{x: number; y: number; w: number; at: number; years: number[]; vals: number[]; o?: number; dimTop?: number}> = ({x, y, w, at, years, vals, o = 1, dimTop = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.01 || f < at) return null;
	const h = 120;
	const yOf = (v: number, y0: number) => y0 + h - (v / 20) * h;
	const row = (y0: number, xs: number[], color: string, label: string, t0: number, d: number) => {
		const pts = xs.map((px, i) => [px, yOf(vals[i], y0)] as [number, number]);
		return (
			<g opacity={prog(f, t0, 12) * (1 - 0.5 * d)}>
				<line x1={x} x2={x + w} y1={y0 + h} y2={y0 + h} stroke={INK} strokeWidth={2.5} />
				<line x1={x} x2={x} y1={y0} y2={y0 + h} stroke={INK} strokeWidth={2.5} />
				{xs.map((px, i) => <g key={i}><line x1={px} x2={px} y1={y0 + h} y2={y0 + h + 7} stroke={INK} strokeWidth={2} /><T x={px} y={y0 + h + 26} text={`${years[i]}`} size={16} color={GREY_INK} weight={600} anchor="middle" /></g>)}
				<PathLine pts={pts} at={t0 + 10} dur={20} color={color} width={3.5} />
				{pts.map((p, i) => <XMark key={i} x={p[0]} y={p[1]} at={t0 + 6 + i * 3} s={6} />)}
				<T x={x + w} y={y0 - 6} text={label} size={22} color={color} hand weight={700} anchor="end" />
			</g>
		);
	};
	const eq = years.map((_, i) => x + 20 + (i * (w - 40)) / (years.length - 1));
	const real = years.map(yr => x + 20 + ((yr - years[0]) / (years[years.length - 1] - years[0])) * (w - 40));
	return (
		<g opacity={o}>
			{row(y, eq, TERRA, 'equal spacing: wrong', at, dimTop)}
			{row(y + h + 80, real, GREEN, 'real positions', at + 30, 0)}
		</g>
	);
};

// ---------- the TAILS rail ----------
export const TAILS = [
	{l: 'T', t: 'Title'},
	{l: 'A', t: 'Axes: independent along the bottom'},
	{l: 'I', t: 'Intervals: even steps'},
	{l: 'L', t: 'Labels: quantity and unit'},
	{l: 'S', t: 'Scale: fills most of the grid'},
	{l: '+', t: 'line or curve of best fit, not dot to dot'},
];
/** Check card, rows appear at `rows[i]`, glow while `lit`; `initials` lights the letters amber down the edge. */
export const TailsRail: React.FC<{x: number; y: number; w: number; rows: (number | undefined)[]; lit?: {row: number; from: number; to?: number}[]; initials?: number; o?: number; rowH?: number; size?: number}> = ({x, y, w, rows, lit = [], initials, o = 1, rowH = 58, size = 22}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const n = TAILS.length;
	const ini = initials === undefined ? 0 : prog(f, initials, 10);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={56 + n * rowH} rx={18} fill={CARD} stroke={TEAL} strokeWidth={3} opacity={prog(f, Math.min(...rows.filter((r): r is number => r !== undefined), 1e9), 12)} />
			<T x={x + 20} y={y + 38} text="Drawing check: TAILS" size={26} color={TEAL} hand weight={700} o={prog(f, Math.min(...rows.filter((r): r is number => r !== undefined), 1e9), 12)} />
			{TAILS.map((r, i) => {
				const at = rows[i];
				if (at === undefined) return null;
				const q = prog(f, at, 10);
				if (q <= 0.01) return null;
				const g = lit.filter(l => l.row === i).reduce((a, l) => Math.max(a, vis(f, l.from, l.to, 8)), 0);
				const yy = y + 56 + i * rowH;
				const letterLit = i < 5 ? Math.max(ini * prog(f, (initials ?? 0) + i * 6, 6), g) : g;
				return (
					<g key={i} opacity={q}>
						{g > 0.01 ? <rect x={x + 8} y={yy - 2} width={w - 16} height={rowH - 6} rx={10} fill={HI} opacity={0.5 * g} /> : null}
						<circle cx={x + 34} cy={yy + rowH / 2 - 4} r={19} fill={letterLit > 0.5 ? AMBER : '#f3efe6'} stroke={letterLit > 0.5 ? AMBER_INK : GREY} strokeWidth={2} />
						<T x={x + 34} y={yy + rowH / 2 + 4} text={r.l} size={22} color={INK} weight={800} anchor="middle" />
						<T x={x + 64} y={yy + rowH / 2 + 4} text={r.t} size={size} color={i === 5 ? INK_SOFT : INK} weight={600} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- the trend card ----------
export const TREND = [{h: 'Direction', s: 'up, down, levelling'}, {h: 'Data', s: 'values with units, a rate'}, {h: 'Change', s: 'where the pattern changes'}];
export const TrendMove: React.FC<{x: number; y: number; w: number; rows: (number | undefined)[]; lit?: {row: number; from: number; to?: number}[]; o?: number; rowH?: number}> = ({x, y, w, rows, lit = [], o = 1, rowH = 74}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const first = Math.min(...rows.filter((r): r is number => r !== undefined), 1e9);
	return (
		<g opacity={o * prog(f, first, 12)}>
			<rect x={x} y={y} width={w} height={56 + 3 * rowH} rx={18} fill={CARD} stroke={AMBER_INK} strokeWidth={3} />
			<T x={x + 20} y={y + 38} text="Describe: direction, data, change" size={24} color={AMBER_INK} hand weight={700} />
			{TREND.map((r, i) => {
				const at = rows[i];
				if (at === undefined) return null;
				const q = prog(f, at, 10);
				const g = lit.filter(l => l.row === i).reduce((a, l) => Math.max(a, vis(f, l.from, l.to, 8)), 0);
				const yy = y + 56 + i * rowH;
				return (
					<g key={i} opacity={q}>
						{g > 0.01 ? <rect x={x + 8} y={yy} width={w - 16} height={rowH - 8} rx={10} fill={HI} opacity={0.5 * g} /> : null}
						<T x={x + 22} y={yy + 30} text={`${i + 1}  ${r.h}`} size={28} color={INK} hand weight={700} />
						<T x={x + 46} y={yy + 58} text={r.s} size={18} color={GREY_INK} weight={600} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- report tiles ----------
export const Tile: React.FC<{x: number; y: number; w: number; h: number; top: string; bottom: string; o?: number}> = ({x, y, w, h, top, bottom, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={h} rx={10} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />
		<T x={x + 14} y={y + 30} text={top} size={20} weight={700} color={INK} />
		<T x={x + 14} y={y + 58} text={bottom} size={20} weight={500} color={INK_SOFT} />
	</g>
));
/** Small amber flag (trend comments). */
export const AmberFlag: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, 10));
	if (p <= 0.01) return null;
	return (
		<g transform={`translate(${x},${y}) scale(${s * (0.6 + 0.4 * p)})`} opacity={p}>
			<line x1={0} y1={14} x2={0} y2={-18} stroke={INK} strokeWidth={3} strokeLinecap="round" />
			<path d="M1,-18 L22,-12 L1,-6 Z" fill={AMBER} />
		</g>
	);
};
export {RED, lerp};
