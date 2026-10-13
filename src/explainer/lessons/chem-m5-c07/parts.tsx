// Drawing parts for the C7 lesson: dashboard sliders, switches and gauges, small icons, the answer table.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {Arrow, Chip, Fade, Ring, Sx, Tag, Tick, eqLayout, tw} from '../chem-m5-c06/parts';
import type {EqItem} from '../chem-m5-c06/parts';
import {COLD, GREEN, HEAT, IRON, IRON_DARK, N2C, NH3C, hexMix} from './common';

export {Arrow, Chip, Fade, Ring, Sx, Tag, Tick, eqLayout, tw};
export {Overlay, Cross, EqStrip} from '../chem-m5-c06/parts';
export type {EqItem};

// ---------- the Haber and methanol equation strips ----------
export const HABER_EQ: EqItem[] = [
	{k: 'sp', t: 'N_2(g)', color: N2C}, {k: 'plus'}, {k: 'sp', coef: '3', t: 'H_2(g)', color: '#7d776b'}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NH_3(g)', color: NH3C}, {k: 'plus'}, {k: 'sp', t: 'heat', color: HEAT},
];
export const MEOH_EQ: EqItem[] = [
	{k: 'sp', t: 'CO(g)', color: N2C}, {k: 'plus'}, {k: 'sp', coef: '2', t: 'H_2(g)', color: '#7d776b'}, {k: 'arrow'}, {k: 'sp', t: 'CH_3OH(g)', color: NH3C},
];

// ---------- slider ----------
export const Slider: React.FC<{x: number; y: number; w: number; label: string; v: number; lo: string; hi: string; at: number; out?: number; color?: string; ghost?: number; size?: number}> = ({x, y, w, label, v, lo, hi, at, out, color = AMBER, ghost, size = 42}) => {
	const kx = x + v * w;
	return (
		<Fade at={at} out={out}>
			<Sx x={x} y={y - 38} text={label} size={size} hand at={at} />
			<path d={`M${x},${y} L${x + w},${y}`} stroke={PAPER_DEEP} strokeWidth={16} strokeLinecap="round" />
			<path d={`M${x},${y} L${kx},${y}`} stroke={color} strokeWidth={16} strokeLinecap="round" />
			{ghost !== undefined ? <circle cx={x + ghost * w} cy={y} r={24} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 6" /> : null}
			<circle cx={kx} cy={y} r={26} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			<text x={x} y={y + 56} fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{lo}</text>
			<text x={x + w} y={y + 56} textAnchor="end" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{hi}</text>
		</Fade>
	);
};

// ---------- on and off switch ----------
export const Switch: React.FC<{x: number; y: number; label: string; on: number; at: number; out?: number; size?: number}> = ({x, y, label, on, at, out, size = 42}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y - 30} width={116} height={56} rx={28} fill={hexMix('#ddd6c6', GREEN, on)} stroke={INK} strokeWidth={4} />
		<circle cx={x + 28 + on * 60} cy={y - 2} r={21} fill="#fffdf8" stroke={INK} strokeWidth={4} />
		<Sx x={x + 144} y={y + 12} text={label} size={size} hand at={at} />
	</Fade>
);

// ---------- half-circle gauge ----------
export const DGauge: React.FC<{cx: number; cy: number; r: number; v: number; color: string; label?: string; sub?: string[]; at: number; labelAt?: number; ghost?: number; ghostAt?: number; markLabel?: string; size?: number}> = ({cx, cy, r, v, color, label, sub = [], at, labelAt, ghost, ghostAt = 0, markLabel, size = 46}) => {
	const f = useCurrentFrame();
	const arc = `M${cx - r},${cy} A${r},${r} 0 0 1 ${cx + r},${cy}`;
	const needle = (val: number, len: number) => {
		const a = Math.PI * (1 - val);
		return [cx + len * Math.cos(a), cy - len * Math.sin(a)] as const;
	};
	const [nx, ny] = needle(v, r * 0.82);
	const gp = ghost !== undefined ? prog(f, ghostAt, 14) : 0;
	const [gx, gy] = needle(ghost ?? 0, r * 0.82);
	return (
		<Fade at={at}>
			<path d={arc} fill="none" stroke="#e6dcc8" strokeWidth={30} />
			<path d={arc} fill="none" stroke={color} strokeWidth={30} pathLength={1} strokeDasharray={`${Math.max(0.0001, v)} 2`} opacity={0.9} />
			{[0, 0.25, 0.5, 0.75, 1].map(t => {
				const a = Math.PI * (1 - t);
				return <path key={t} d={`M${cx + (r + 22) * Math.cos(a)},${cy - (r + 22) * Math.sin(a)} L${cx + (r + 34) * Math.cos(a)},${cy - (r + 34) * Math.sin(a)}`} stroke={INK_SOFT} strokeWidth={3} />;
			})}
			{ghost !== undefined && gp > 0.01 ? (
				<g opacity={gp * 0.7}>
					<path d={`M${cx},${cy} L${gx},${gy}`} stroke={INK_SOFT} strokeWidth={6} strokeDasharray="10 8" strokeLinecap="round" />
					{markLabel ? <text x={gx + (gx < cx ? -14 : 14)} y={gy - 10} textAnchor={gx < cx ? 'end' : 'start'} fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}}>{markLabel}</text> : null}
				</g>
			) : null}
			<path d={`M${cx},${cy} L${nx},${ny}`} stroke={INK} strokeWidth={9} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={16} fill={INK} />
			{label ? <Sx x={cx} y={cy + 66} text={label} size={size} color={color} anchor="middle" hand weight={700} at={labelAt ?? at} /> : null}
			{sub.map((s, i) => <Sx key={i} x={cx} y={cy + 66 + 40 + i * 36} text={s} size={29} color={INK_SOFT} anchor="middle" at={(labelAt ?? at) + 10 + i * 6} />)}
		</Fade>
	);
};

// ---------- ghost hand (an unseen teacher hand moving a control) ----------
export const GhostHand: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (
	<g opacity={0.6 * o} transform={`translate(${x},${y})`}>
		<circle r={34} fill="#fff7e0" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="7 6" />
		<path d="M-6,-6 L-6,-34 Q-6,-42 2,-42 Q10,-42 10,-34 L10,-14 L14,-14 Q22,-14 22,-6 L22,12 Q22,26 8,26 L-8,26 Q-20,26 -22,14 L-26,-2 Q-27,-8 -20,-8 L-14,-2 Z" fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3} strokeLinejoin="round" />
	</g>
);

// ---------- small icons ----------
export const Snowflake: React.FC<{x: number; y: number; s?: number; color?: string}> = ({x, y, s = 1, color = COLD}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} stroke={color} strokeWidth={6} strokeLinecap="round" fill="none">
		{[0, 60, 120].map(a => <path key={a} d="M0,-34 L0,34 M-10,-24 L0,-34 L10,-24 M-10,24 L0,34 L10,24" transform={`rotate(${a})`} />)}
	</g>
);
export const Flame: React.FC<{x: number; y: number; s?: number; flick?: number}> = ({x, y, s = 1, flick = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s},${s * flick})`}>
		<path d="M0,40 Q-34,26 -26,-6 Q-20,-22 -6,-40 Q-4,-18 10,-8 Q30,6 22,28 Q16,40 0,40 Z" fill={AMBER} stroke={AMBER_INK} strokeWidth={4} strokeLinejoin="round" />
		<path d="M0,40 Q-14,34 -8,16 Q0,24 8,14 Q16,30 0,40 Z" fill="#f7d77a" />
	</g>
);
/** A few grey iron pellets filling a box. */
export const Pellets: React.FC<{x: number; y: number; w: number; h: number; r?: number}> = ({x, y, w, h, r = 11}) => {
	const out: React.ReactNode[] = [];
	let k = 0;
	for (let yy = y + r + 4; yy < y + h - r; yy += r * 1.7) {
		for (let xx = x + r + 4 + ((k % 2) * r); xx < x + w - r; xx += r * 2.1) {
			out.push(<circle key={`${xx}-${yy}`} cx={xx} cy={yy} r={r} fill={hexMix(IRON, '#c9ced4', ((xx * 7 + yy * 3) % 10) / 14)} stroke={IRON_DARK} strokeWidth={2} />);
		}
		k++;
	}
	return <g>{out}</g>;
};
export const DotP: React.FC<{x: number; y: number; r?: number; fill: string; o?: number}> = ({x, y, r = 9, fill, o = 1}) => <circle cx={x} cy={y} r={r} fill={fill} stroke={INK} strokeWidth={2.2} opacity={o} />;

// ---------- wrapped text ----------
export const wrapLines = (text: string, size: number, maxW: number) => {
	const words = text.split(' ');
	const lines: string[] = [];
	let cur = '';
	for (const w of words) {
		const t = cur ? cur + ' ' + w : w;
		if (cur && tw(t, size) > maxW) { lines.push(cur); cur = w; } else cur = t;
	}
	if (cur) lines.push(cur);
	return lines;
};

// ---------- the yield, rate, limit answer table ----------
export type TCell = {text: string; at: number; tick?: number} | null;
export type TRow = {label: string; at: number; cells: [TCell, TCell, TCell]};
export const COLS = [{name: 'Yield', color: GREEN}, {name: 'Rate', color: '#1f6fb2'}, {name: 'Limit', color: '#b3392a'}];
export const AnswerTable: React.FC<{x: number; y: number; labelW: number; colW: number; rowH: number; size: number; rows: TRow[]; headAt: [number, number, number]; placeholders?: number; headSize?: number}> = ({x, y, labelW, colW, rowH, size, rows, headAt, placeholders, headSize = 40}) => (
	<g>
		{COLS.map((c, i) => {
			const cx0 = x + labelW + i * colW;
			return (
				<Fade key={c.name} at={headAt[i]}>
					<rect x={cx0 + 6} y={y} width={colW - 12} height={58} rx={29} fill={c.color} opacity={0.92} />
					<Sx x={cx0 + colW / 2} y={y + 42} text={c.name} size={headSize} color="#fff" anchor="middle" hand at={headAt[i]} />
				</Fade>
			);
		})}
		{rows.map((r, ri) => {
			const ry = y + 70 + ri * rowH;
			return (
				<g key={ri}>
					<Sx x={x} y={ry + rowH / 2 + 8} text={r.label} size={headSize} hand at={r.at} />
					{r.cells.map((cell, ci) => {
						const cx0 = x + labelW + ci * colW;
						const col = COLS[ci].color;
						const ph = placeholders !== undefined ? (
							<Fade at={placeholders}>
								<rect x={cx0 + 6} y={ry + 6} width={colW - 12} height={rowH - 12} rx={18} fill="none" stroke={col} strokeWidth={2.5} strokeDasharray="8 7" opacity={0.55} />
							</Fade>
						) : null;
						if (!cell) return <g key={ci}>{ph}</g>;
						const lines = wrapLines(cell.text, size, colW - 44);
						const lh = size * 1.18;
						const ty = ry + rowH / 2 - ((lines.length - 1) * lh) / 2 + size * 0.32;
						return (
							<g key={ci}>
								{ph}
								<Fade at={cell.at}>
									<rect x={cx0 + 6} y={ry + 6} width={colW - 12} height={rowH - 12} rx={18} fill={hexMix('#fffdf8', col, 0.1)} stroke={col} strokeWidth={3} />
								</Fade>
								{lines.map((l, li) => <Sx key={li} x={cx0 + 22} y={ty + li * lh} text={l} size={size} weight={600} at={cell.at + 4 + li * 3} />)}
								{cell.tick !== undefined ? <Tick x={cx0 + colW - 40} y={ry + 36} at={cell.tick} s={26} /> : null}
							</g>
						);
					})}
				</g>
			);
		})}
	</g>
);
void Chip; void Ring; void Arrow; void Tag; void eqLayout;
