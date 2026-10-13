// Reusable ICE table: rows Initial, Change, Equilibrium; one column per species with mol/L in the heading.
// Cells write on at their spoken cue, may fly in from a point, may show a working line first, may swap to
// a new value, and earlier rows can be dimmed when the current step does not need them.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Sx} from '../chem-m5-c05/parts';
import {PLUS, MINUS} from './common';

export const LABEL_W = 240, COL_W = 220, HEAD_H = 110, ROW_H = 100;
export const ROW_NAMES = ['Initial', 'Change', 'Equilibrium'];

export type IceCell = {
	text: string; at: number; color?: string; size?: number;
	from?: [number, number]; flyDur?: number;
	pre?: {text: string; at: number; color?: string};
	swap?: {text: string; at: number; color?: string};
	tag?: {text: string; at: number; out?: number; color?: string};
};
export type IceRow = {at: number; cells: (IceCell | null)[]; dim?: [number, number, number?]; lit?: [number, number]; labelAt?: number; hideLabel?: boolean};
export type IceCol = {name: string; at: number; color: string};
export type IceProps = {x: number; y: number; s?: number; cols: IceCol[]; rows: IceRow[]; outlineAt?: number; unit?: string; opacity?: number; rowNames?: string[]};

export const iceW = (n: number, s = 1) => s * (LABEL_W + n * COL_W);
export const iceH = (s = 1) => s * (HEAD_H + 3 * ROW_H);
/** Absolute centre of cell (row r, column c) for a table at (x, y) scale s. */
export const iceCell = (x: number, y: number, s: number, r: number, c: number): [number, number] => [x + s * (LABEL_W + (c + 0.5) * COL_W), y + s * (HEAD_H + (r + 0.5) * ROW_H)];
export const iceRowY = (y: number, s: number, r: number) => y + s * (HEAD_H + (r + 0.5) * ROW_H);
export const iceColX = (x: number, s: number, c: number) => x + s * (LABEL_W + (c + 0.5) * COL_W);

/** Text that writes on left to right. `w` is the estimated width, centred on x when anchor is middle. */
export const Ink: React.FC<{x: number; y: number; text: string; size: number; color?: string; at: number; out?: number; dur?: number; opacity?: number; hand?: boolean; scale?: number}> = ({x, y, text, size, color = INK, at, out, dur = 14, opacity = 1, hand = false, scale = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, dur);
	const o = (out === undefined ? 1 : 1 - prog(f, out, 10)) * opacity;
	if (p <= 0 || o <= 0.01) return null;
	return (
		<g opacity={o} transform={scale === 1 ? undefined : `translate(${x},${y}) scale(${scale}) translate(${-x},${-y})`} style={p >= 1 ? undefined : {clipPath: `inset(-30% ${100 - p * 100}% -30% -10%)`}}>
			<Sx x={x} y={y} text={text} size={size} color={color} anchor="middle" at={-1000} hand={hand} />
		</g>
	);
};

const CellView: React.FC<{cell: IceCell; cx: number; cy: number; dimmed: number; fromLocal?: [number, number]}> = ({cell, cx, cy, dimmed, fromLocal}) => {
	const f = useCurrentFrame();
	const size = cell.size ?? 50;
	const color = cell.color ?? INK;
	const fly = fromLocal ? prog(f, cell.at, cell.flyDur ?? 28) : 1;
	const px = fromLocal ? fromLocal[0] + (cx - fromLocal[0]) * fly : cx;
	const py = fromLocal ? fromLocal[1] + (cy - fromLocal[1]) * fly : cy;
	const bump = fromLocal && f > cell.at + (cell.flyDur ?? 28) ? 1 + 0.25 * Math.max(0, 1 - (f - cell.at - (cell.flyDur ?? 28)) / 10) : 1;
	const swapAt = cell.swap?.at;
	const preOut = cell.pre ? cell.at : undefined;
	return (
		<g opacity={dimmed}>
			{cell.pre ? <Ink x={cx} y={cy + 9} text={cell.pre.text} size={size * 0.5} color={cell.pre.color ?? INK_SOFT} at={cell.pre.at} out={preOut} dur={12} /> : null}
			{fromLocal ? (
				<g opacity={prog(f, cell.at, 6)}>
					<Ink x={px} y={py + size * 0.34} text={cell.text} size={size * bump} color={color} at={cell.at} out={swapAt} dur={1} />
				</g>
			) : <Ink x={cx} y={cy + size * 0.34} text={cell.text} size={size} color={color} at={cell.at} out={swapAt} dur={fromLocal ? 1 : 14} />}
			{cell.swap ? <Ink x={cx} y={cy + size * 0.34} text={cell.swap.text} size={size} color={cell.swap.color ?? color} at={cell.swap.at} dur={12} /> : null}
			{cell.tag ? <Sx x={cx} y={cy + ROW_H * 0.45} text={cell.tag.text} size={32} color={cell.tag.color ?? INK_SOFT} anchor="middle" hand at={cell.tag.at} out={cell.tag.out} /> : null}
		</g>
	);
};

export const IceTable: React.FC<IceProps> = ({x, y, s = 1, cols, rows, outlineAt = -400, unit = 'mol/L', opacity = 1, rowNames = ROW_NAMES}) => {
	const f = useCurrentFrame();
	const n = cols.length;
	const W = LABEL_W + n * COL_W, H = HEAD_H + 3 * ROW_H;
	const D = 36;
	const lines: string[] = [
		`M0,2 L${W},0`, `M0,${HEAD_H} L${W},${HEAD_H - 2}`, `M0,${HEAD_H + ROW_H} L${W},${HEAD_H + ROW_H + 2}`,
		`M0,${HEAD_H + 2 * ROW_H} L${W},${HEAD_H + 2 * ROW_H - 2}`, `M0,${H} L${W},${H - 2}`,
		`M2,0 L0,${H}`, `M${LABEL_W},0 L${LABEL_W + 2},${H}`, `M${W},0 L${W - 2},${H}`,
	];
	const sw = 4.5 / Math.max(0.6, s);
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${s})`}>
			{rows.map((r, i) => r.lit ? (
				<rect key={'l' + i} x={4} y={HEAD_H + i * ROW_H + 4} width={W - 8} height={ROW_H - 8} rx={14} fill="#f6d77a" opacity={0.42 * prog(f, r.lit[0], 12) * (1 - prog(f, r.lit[1], 12))} />
			) : null)}
			{lines.map((d, i) => <DrawPath key={i} d={d} at={outlineAt + i * 3} dur={D} color={INK} width={sw} />)}
			{cols.map((c, i) => (
				<g key={'h' + i}>
					<Sx x={LABEL_W + (i + 0.5) * COL_W} y={58} text={c.name} size={50} color={c.color} anchor="middle" at={c.at} />
					<Sx x={LABEL_W + (i + 0.5) * COL_W} y={96} text={unit} size={30} color={INK_SOFT} anchor="middle" hand at={c.at + 8} />
				</g>
			))}
			{rows.map((r, i) => {
				const dimOp = r.dim ? 1 - (1 - (r.dim[2] ?? 0.32)) * prog(f, r.dim[0], 14) * (r.dim[1] > 0 ? 1 - prog(f, r.dim[1], 14) : 1) : 1;
				return (
					<g key={'r' + i}>
						{r.hideLabel ? null : <Sx x={20} y={HEAD_H + i * ROW_H + ROW_H * 0.62} text={rowNames[i]} size={i === 2 ? 44 : 52} color={INK} hand at={r.labelAt ?? r.at} opacity={dimOp} />}
						{r.cells.map((c, j) => c ? <CellView key={j} cell={c} cx={LABEL_W + (j + 0.5) * COL_W} cy={HEAD_H + (i + 0.5) * ROW_H} dimmed={dimOp} fromLocal={c.from ? [(c.from[0] - x) / s, (c.from[1] - y) / s] : undefined} /> : null)}
					</g>
				);
			})}
		</g>
	);
};

export const pm = (v: string) => (v.startsWith('+') ? PLUS : v.startsWith('-') || v.startsWith('−') ? MINUS : INK);
void FONT_HAND;
