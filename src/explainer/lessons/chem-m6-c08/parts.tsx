// Drawing parts for M6 C08 (weak acid and weak base pH with Ka, Kb, an ICE table and the 5% check). Reuses C07 (and
// through it C01 to C06): the board, working lines, full meter, pH track, conditional chip, gate, crossed chips,
// question card, countdown, key notes, the C05 particle field and hop pair, and the C03 calorimeter plate.
// New here:
// - IceRows: an ICE table whose columns sit under the species of the equation strip (the strip is the header), rows
//   I, C, E with each letter briefly expanding to its word; cells write on their cue, can swap, and rows can dim or light;
// - XRuler: the C6b check ruler restyled for this lesson (the start as a long bar, x as a teal sliver, the dashed 5%
//   line measured from the start of the bar, which turns amber when x passes it);
// - KaFrac: a two-level expression (prefix, numerator over denominator);
// - BottleLabel: the ammonia bottle with coded label lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, prog} from '../../kit';
import {Fade, INK, INK_SOFT, PicH, PROTON, PROTON_INK, Sx, TEAL, mw, picW, vis} from '../chem-m6-c07/parts';
import {AMMONIA} from './assets';

export * from '../chem-m6-c07/parts';

// ---------- ICE table under the equation strip ----------
export type IceC = {t: string; at: number; color?: string; size?: number; swap?: {t: string; at: number; color?: string}; dim?: number};
export type IceR = {cells: (IceC | null)[]; dim?: [number, number?]; lit?: [number, number]; expand?: number};
const WORDS = ['initial', 'change', 'equilibrium'];
/** Rows I, C, E. cols: centre x of each species column. The grid draws from `at`. */
export const IceRows: React.FC<{x: number; xR: number; y: number; rh?: number; cols: number[]; rows: IceR[]; at: number; out?: number; o?: number; size?: number; unit?: {at: number}}> = ({x, xR, y, rh = 76, cols, rows, at, out, o = 1, size = 38, unit}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const lx = x + 74;
	return (
		<g opacity={v}>
			{[0, 1, 2, 3].map(i => <DrawPath key={i} d={`M${x},${y + i * rh} L${xR},${y + i * rh}`} at={at + i * 3} dur={22} color={i === 0 || i === 3 ? INK_SOFT : 'rgba(60,45,20,0.28)'} width={i === 0 || i === 3 ? 3 : 2} />)}
			<DrawPath d={`M${lx},${y} L${lx},${y + 3 * rh}`} at={at + 10} dur={16} color="rgba(60,45,20,0.28)" width={2} />
			{unit ? <Sx x={xR} y={y - 12} text="mol/L" size={26} color={INK_SOFT} anchor="end" hand at={unit.at} /> : null}
			{rows.map((r, i) => {
				const cy = y + (i + 0.5) * rh;
				const d = r.dim ? prog(f, r.dim[0], 14) : 0;
				const ro = 1 - (1 - (r.dim?.[1] ?? 0.32)) * d;
				const lit = r.lit ? vis(f, r.lit[0], r.lit[1], 12) : 0;
				const ex = r.expand === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - r.expand) / 50)) * Math.PI));
				return (
					<g key={i} opacity={ro}>
						{lit > 0.01 ? <rect x={x + 4} y={cy - rh / 2 + 5} width={xR - x - 8} height={rh - 10} rx={12} fill="#f6d77a" opacity={0.4 * lit} /> : null}
						<Sx x={x + 22} y={cy + 14} text={'ICE'[i]} size={42} color={INK} weight={800} at={at + 12 + i * 4} />
						{ex > 0.01 ? <Sx x={x + 22} y={cy - rh * 0.42} text={WORDS[i]} size={28} color={TEAL} hand at={-1000} opacity={ex} /> : null}
						{r.cells.map((c, j) => {
							if (!c) return null;
							const s = c.size ?? size;
							const co = c.dim === undefined ? 1 : 1 - 0.65 * prog(f, c.dim, 14);
							return (
								<g key={j} opacity={co}>
									<Sx x={cols[j]} y={cy + s * 0.36} text={c.t} size={s} color={c.color ?? INK} anchor="middle" weight={700} at={c.at} out={c.swap?.at} />
									{c.swap ? <Sx x={cols[j]} y={cy + s * 0.36} text={c.swap.t} size={s} color={c.swap.color ?? c.color ?? INK} anchor="middle" weight={700} at={c.swap.at} /> : null}
								</g>
							);
						})}
					</g>
				);
			})}
		</g>
	);
};
export const iceRowY = (y: number, i: number, rh = 76) => y + (i + 0.5) * rh;

// ---------- the check ruler ----------
/** The start c as a long bar of width w; x as a teal sliver (frac of w) at the start; dashed 5% line from `five`. */
export const XRuler: React.FC<{x: number; y: number; w: number; h?: number; frac: number; at: number; out?: number; o?: number; sliverAt: number; startLabel?: string; sliverLabel?: string; side?: 'start' | 'end'; five?: number; fiveLabel?: string; over?: number; size?: number; grow?: number}> = ({x, y, w, h = 30, frac, at, out, o = 1, sliverAt, startLabel, sliverLabel, side = 'start', five, fiveLabel, over, size = 32, grow}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const g = prog(f, at, 22);
	const sg = grow === undefined ? prog(f, sliverAt, 12) : prog(f, grow, 26);
	const sw = Math.max(5, frac * w) * (grow === undefined ? 1 : sg);
	const sx = side === 'end' ? x + w - sw : x;
	const ov = over === undefined ? 0 : prog(f, over, 10);
	const fiveCol = ov > 0.5 ? AMBER : TEAL;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w * g} height={h} rx={h / 2} fill="#efe6d4" stroke={INK_SOFT} strokeWidth={3} />
			{startLabel ? <Sx x={x} y={y - 16} text={startLabel} size={size} color={INK} weight={700} at={at + 8} /> : null}
			<rect x={sx} y={y - 6} width={sw} height={h + 12} rx={3} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} opacity={grow === undefined ? sg : Math.min(1, sg * 4)} />
			{sliverLabel ? <Sx x={side === 'end' ? x + w + 16 : sx + sw + 14} y={side === 'end' ? y + h * 0.8 : y - 14} text={sliverLabel} size={size} color={PROTON_INK} weight={700} at={sliverAt + 4} /> : null}
			{five !== undefined ? (
				<Fade at={five}>
					<DrawPath d={`M${x + 0.05 * w},${y - 34} L${x + 0.05 * w},${y + h + 12}`} at={five} dur={12} color={fiveCol} width={4} dash="8 6" />
					{fiveLabel ? <Sx x={x + 0.05 * w + 12} y={y - 40} text={fiveLabel} size={size * 0.9} color={ov > 0.5 ? AMBER_INK : TEAL} hand at={five + 6} /> : null}
				</Fade>
			) : null}
		</g>
	);
};

// ---------- two-level expression ----------
export const KaFrac: React.FC<{x: number; y: number; prefix: string; num: string; den: string; size?: number; at: number; out?: number; numAt?: number; denAt?: number; color?: string}> = ({x, y, prefix, num, den, size = 44, at, out, numAt, denAt, color = INK}) => {
	const pw = mw(prefix, size, false, 800) + size * 0.4;
	const W = Math.max(mw(num, size), mw(den, size)) + size * 0.4;
	const cx = x + pw + W / 2;
	return (
		<Fade at={at} out={out}>
			<Sx x={x} y={y + size * 0.34} text={prefix} size={size} color={color} weight={800} at={at} />
			<Sx x={cx} y={y - size * 0.32} text={num} size={size} color={color} anchor="middle" weight={700} at={numAt ?? at} />
			<DrawPath d={`M${x + pw},${y} L${x + pw + W},${y}`} at={numAt ?? at} dur={12} color={color} width={3.5} />
			<Sx x={cx} y={y + size * 1.02} text={den} size={size} color={color} anchor="middle" weight={700} at={denAt ?? at} />
		</Fade>
	);
};
export const kaFracW = (prefix: string, num: string, den: string, size = 44) => mw(prefix, size, false, 800) + size * 0.4 + Math.max(mw(num, size), mw(den, size)) + size * 0.4;

// ---------- ammonia bottle with coded label ----------
export const BottleLabel: React.FC<{x: number; y: number; h: number; lines: string[]; at: number; out?: number; o?: number}> = ({x, y, h, lines, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const w = picW(AMMONIA, h);
	const lx = x + w * 0.525, ly0 = y + h * 0.48, lh = h * 0.33;
	const size = Math.min(h * 0.062, (w * 0.8) / Math.max(...lines.map(l => mw(l, 1, false, 700))));
	return (
		<g opacity={v}>
			<PicH p={AMMONIA} x={x} y={y} h={h} />
			{lines.map((l, i) => <Sx key={i} x={lx} y={ly0 + lh * ((i + 0.85) / (lines.length + 0.4))} text={l} size={size} color={INK} anchor="middle" weight={700} at={-1000} />)}
		</g>
	);
};
