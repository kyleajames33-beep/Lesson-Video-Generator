// Drawing parts for Y11 Chem M1 V09. Reuses the M1 V08 parts (which carry V06's and V01's text, chips, framed answers,
// readouts, pen marks, plates, the task strip, the pause hold and the nucleus cluster). New here, all coded: atom
// tokens in the fixed colour key (light tone for the lighter isotope, dark tone for the heavier), the balance beam
// (a number-line bar with stacks of tokens; the pivot readout shows the pivot's position and the bar tilts by how far
// the pivot sits from the stacks' weighted mean, computed from the same counts), a working row that shrinks to a
// smaller solid size when the next row lands, a row aligned on its "=" sign, and a small data table.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, PURE, Readout, Rich, Sx, clamp01, prog, richW, smooth} from '../chem-y11-m1-v08/parts';
import type {Seg} from '../chem-y11-m1-v08/parts';

export * from '../chem-y11-m1-v08/parts';

// ---------- colour key (fixed for the whole video) ----------
export const GREEN_T = '#2f8a5b';
export type Iso = {fill: string; stroke: string; ink: string};
export const CL35: Iso = {fill: '#a6dbb0', stroke: '#2e7d4f', ink: '#287347'};
export const CL37: Iso = {fill: '#2e7d4f', stroke: '#173f26', ink: '#1b4d2b'};
export const B10: Iso = {fill: '#e8cf9e', stroke: '#8a6a3a', ink: '#7a5526'};
export const B11: Iso = {fill: '#8a5a32', stroke: '#4a2f17', ink: '#5a3a1e'};
export const SI28: Iso = {fill: '#cdd1d6', stroke: '#5a6470', ink: '#4f5862'};
export const SI29: Iso = {fill: '#5a6470', stroke: '#2c3138', ink: '#363c44'};
export const MOD_L: Iso = {fill: '#d6c8ee', stroke: '#6b4fa0', ink: '#6b4fa0'};
export const MOD_H: Iso = {fill: '#6b4fa0', stroke: '#3e2a66', ink: '#45306e'};

/** One atom token. */
export const Tok: React.FC<{x: number; y: number; r: number; iso: Iso; o?: number}> = ({x, y, r, iso, o = 1}) => (
	o > 0.005 ? <circle cx={x} cy={y} r={r} fill={iso.fill} stroke={iso.stroke} strokeWidth={Math.max(1.5, r * 0.16)} opacity={o} /> : null
);

// ---------- balance beam ----------
export type Stack = {m: number; n: number; iso: Iso; cols: number; total?: number};
/** Weighted mean of the stacks (the beam's balance point), or undefined with no weight on the beam. */
export const balancePoint = (stacks: Stack[]) => {
	const w = stacks.reduce((a, s) => a + Math.max(0, s.n), 0);
	return w > 0 ? stacks.reduce((a, s) => a + Math.max(0, s.n) * s.m, 0) / w : undefined;
};
/** Token centre i of a stack standing on the bar top at screen x, bar top y. */
export const stackXY = (x: number, y: number, i: number, cols: number, r: number, gap: number): [number, number] => {
	const c = i % cols, row = Math.floor(i / cols);
	return [x + (c - (cols - 1) / 2) * gap, y - r - 2 - row * gap];
};
export const BalanceBeam: React.FC<{
	X: (m: number) => number; from: number; to: number; y: number; ticks: number[]; stacks: Stack[]; pivot: number;
	r?: number; gap?: number; barH?: number; tiltK?: number; readout?: string; rw?: number; rsize?: number; labelSize?: number;
	readoutAt?: number; hover?: number; outlines?: {m: number; n: number; cols: number; color: string}[]; pivotColor?: string; tickFmt?: (v: number) => string;
}> = ({X, from, to, y, ticks, stacks, pivot, r = 9, gap = 19, barH = 44, tiltK = 10, readout, rw = 240, rsize = 52, labelSize = 34, readoutAt = -1000, hover, outlines = [], pivotColor = PURE, tickFmt = v => `${v}`}) => {
	const xp = X(pivot), yb = y + barH;
	const bal = balancePoint(stacks);
	const ang = bal === undefined ? 0 : Math.max(-7, Math.min(7, (bal - pivot) * tiltK));
	const toks: React.ReactNode[] = [];
	stacks.forEach((s, k) => {
		const N = hover === undefined ? Math.ceil(s.n - 1e-6) : (s.total ?? Math.ceil(s.n - 1e-6));
		for (let i = 0; i < N; i++) {
			const d = clamp01(s.n - i);
			const [tx, ty] = stackXY(X(s.m), y, i, s.cols, r, gap);
			toks.push(<Tok key={k + '-' + i} x={tx} y={ty - (1 - smooth(d)) * (hover ?? 70)} r={r} iso={s.iso} o={hover === undefined ? clamp01(d * 2) : 1} />);
		}
	});
	return (
		<g>
			<g transform={`rotate(${ang},${xp},${yb})`}>
				{outlines.map((u, i) => {
					const rows = Math.ceil(u.n / u.cols), w = u.cols * gap + 10, h = rows * gap + 8;
					return <rect key={i} x={X(u.m) - w / 2} y={y - h} width={w} height={h} rx={8} fill="none" stroke={u.color} strokeWidth={3.5} strokeDasharray="10 7" />;
				})}
				<rect x={X(from)} y={y} width={X(to) - X(from)} height={barH} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={4} />
				{ticks.map(t => (
					<g key={t}>
						<line x1={X(t)} x2={X(t)} y1={y} y2={y + 9} stroke={INK} strokeWidth={3} />
						<Sx x={X(t)} y={y + barH / 2 + labelSize * 0.36 + 3} text={tickFmt(t)} size={labelSize} color={INK} anchor="middle" weight={800} at={-1000} />
					</g>
				))}
				{toks}
			</g>
			<path d={`M${xp},${yb} L${xp + 32},${yb + 54} L${xp - 32},${yb + 54} Z`} fill={pivotColor} stroke={INK} strokeWidth={2} />
			{readout !== undefined ? <Readout x={xp - rw / 2} y={yb + 66} w={rw} text={readout} size={rsize} color={pivotColor} frame={pivotColor} anchor="middle" at={readoutAt} /> : null}
		</g>
	);
};
/** Count that eases from a to b over [f0, f1]. */
export const ramp = (f: number, f0: number, f1: number, a: number, b: number) => a + (b - a) * smooth(clamp01((f - f0) / Math.max(1, f1 - f0)));

// ---------- working rows ----------
/** A row of working: `big` while current, shrinking in place to a solid `small` from `leave`. */
export const WRow: React.FC<{x: number; y: number; segs: Seg[]; at: number; leave?: number; big?: number; small?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, segs, at, leave, big = 52, small = 38, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const s = leave === undefined ? big : big - (big - small) * smooth(prog(f, leave, 12));
	return <Rich x={x} y={y} segs={segs} size={s} at={at} anchor={anchor} />;
};
/** A row aligned on its "=" sign at ex. */
export const ERow: React.FC<{ex: number; y: number; left: Seg[]; right: Seg[]; at: number; leave?: number; big?: number; small?: number}> = ({ex, y, left, right, at, leave, big = 52, small = 38}) => {
	const f = useCurrentFrame();
	const s = leave === undefined ? big : big - (big - small) * smooth(prog(f, leave, 12));
	return (
		<g>
			<Rich x={ex - s * 0.45} y={y} segs={left} size={s} at={at} anchor="end" />
			<Rich x={ex} y={y} segs={[{t: '='}]} size={s} at={at} anchor="middle" />
			<Rich x={ex + s * 0.45} y={y} segs={right} size={s} at={at} />
		</g>
	);
};
/** Width of an ERow's right part. */
export const eRightW = (right: Seg[], size: number) => richW(right, size);

// ---------- small data table ----------
export type Cell = {t: string; c?: string; at?: number};
export const DataTable: React.FC<{x: number; y: number; w: number; cols: number[]; head: string[]; rows: Cell[][]; size?: number; headSize?: number; rh?: number; fill?: string; stroke?: string; title?: string; headAt?: number[]}> = ({x, y, w, cols, head, rows, size = 34, headSize = 30, rh = 60, fill = '#fffdf8', stroke = INK, title, headAt}) => {
	const top = title ? 46 : 0;
	const h = top + 62 + rows.length * rh + 6;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={fill} stroke={stroke} strokeWidth={3} />
			{title ? <Sx x={x + 22} y={y + 36} text={title} size={28} color={stroke} weight={800} at={-1000} /> : null}
			{head.map((t, i) => <Sx key={i} x={x + cols[i]} y={y + top + 44} text={t} size={headSize} color={INK} weight={700} at={headAt ? headAt[i] : -1000} />)}
			<line x1={x + 14} x2={x + w - 14} y1={y + top + 60} y2={y + top + 60} stroke={INK} strokeWidth={2} />
			{rows.map((r, j) => r.map((c, i) => <Rich key={j + '-' + i} x={x + cols[i]} y={y + top + 60 + (j + 1) * rh - 14} segs={[{t: c.t, c: c.c ?? INK}]} size={size} at={c.at ?? -1000} />))}
		</g>
	);
};
