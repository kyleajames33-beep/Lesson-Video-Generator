// M6 G04 board pieces (lesson-local). The practice card, check strip, tag, badge, hook checklist and mini cards come from
// chem-m6-g03/board (one practice board in the G01 layout). New here:
// - IndTable: the card's indicator table with ranges written "3.1 to 4.4" (no en dashes), rows that can be underlined;
// - ChainH: the "which way?" error chain: linked chips in a row, each lighting in turn;
// - FracTile: c = numerator ÷ a volume block that grows while the result shrinks (Q2), and the static tiles of Q2's
//   mistake (V(titre) on top or on the bottom);
// - NTally: the Q4 ion tally (ammonia molecules, ammonium, chloride, hydronium), sized by how well each conducts;
// - APts: amber conductivity points that can light in turn; HBr: a horizontal bracket on a graph.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {AMBER, ClTok, Fade, GREYX, H3O, INK, INK_SOFT, NH3g, NH4g, OHg, Sx, TEAL, clamp01, gx, gy, lerp, mw, smooth, vis} from './parts';
import type {GG} from './parts';

export {ChemBadge, CheckList, ChecksL, GLOW, HscTag, MiniCard, PCard, CARD, qMarksOk, stripPt} from '../chem-m6-g03/board';
export type {QDef, AFill} from '../chem-m6-g03/board';
export const G04_CHECKS = ['where is equivalence?', 'which way does it move?', 'does it make sense?'];

// ---------- the indicator table on the card ----------
export const IND = [
	{n: 'methyl orange', r: '3.1 to 4.4', c: 'red to yellow'},
	{n: 'methyl red', r: '4.4 to 6.2', c: 'red to yellow'},
	{n: 'bromothymol blue', r: '6.0 to 7.6', c: 'yellow to blue'},
	{n: 'phenolphthalein', r: '8.3 to 10.0', c: 'colourless to pink'},
];
export const IndTable: React.FC<{x: number; y: number; at: number; lh?: number; size?: number; marks?: {row: number; at: number; out?: number}[]}> = ({x, y, at, lh = 42, size = 27, marks = []}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const cols = [0, 330, 560];
	const W = 900;
	return (
		<g opacity={v}>
			<rect x={x - 12} y={y - size - 10} width={W + 24} height={lh * 5 + 4} rx={10} fill="#fffdf8" stroke="rgba(60,45,20,0.28)" strokeWidth={2} />
			{['Indicator', 'pH range', 'Colour change'].map((h, i) => <Sx key={i} x={x + cols[i]} y={y} text={h} size={size} color={INK} weight={700} at={-1000} />)}
			<line x1={x - 12} y1={y + 12} x2={x + W + 12} y2={y + 12} stroke="rgba(60,45,20,0.25)" strokeWidth={1.5} />
			{IND.map((r, i) => {
				const yy = y + lh * (i + 1);
				return (
					<g key={i}>
						<Sx x={x + cols[0]} y={yy} text={r.n} size={size} color={INK} weight={500} at={-1000} />
						<Sx x={x + cols[1]} y={yy} text={r.r} size={size} color={INK} weight={500} at={-1000} />
						<Sx x={x + cols[2]} y={yy} text={r.c} size={size} color={INK} weight={500} at={-1000} />
					</g>
				);
			})}
			{marks.map((m, k) => {
				const yy = y + lh * (m.row + 1) + 9;
				const o = m.out === undefined ? 1 : 1 - prog(f, m.out, 12);
				return o > 0.01 ? <g key={k} opacity={o}><DrawPath d={`M${x - 4},${yy} L${x + W - 20},${yy}`} at={m.at} dur={16} color={AMBER} width={4} /></g> : null;
			})}
		</g>
	);
};

// ---------- the error chain, in a row ----------
export type HItem = {t: string; at: number; color?: string};
export const ChainH: React.FC<{x: number; y: number; items: HItem[]; gap?: number; size?: number; o?: number}> = ({x, y, items, gap = 50, size = 28, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let cx = x;
	return (
		<g opacity={o}>
			{items.map((it, i) => {
				const w = mw(it.t, size, false, 700) + size * 1.2;
				const px = cx;
				cx += w + gap;
				const p = prog(f, it.at, 10);
				if (p <= 0.01) return null;
				const glow = Math.max(0, Math.sin(clamp01((f - it.at) / 30) * Math.PI));
				const col = it.color ?? INK;
				return (
					<g key={i} opacity={p}>
						{i > 0 ? <g><line x1={px - gap + 6} y1={y + size * 0.8} x2={px - 14} y2={y + size * 0.8} stroke={INK_SOFT} strokeWidth={4} /><path d={`M${px - 24},${y + size * 0.8 - 9} L${px - 10},${y + size * 0.8} L${px - 24},${y + size * 0.8 + 9}`} fill="none" stroke={INK_SOFT} strokeWidth={4} /></g> : null}
						{glow > 0.01 ? <rect x={px - 6} y={y - 6} width={w + 12} height={size * 1.6 + 12} rx={size} fill="#f6d77a" opacity={0.5 * glow} /> : null}
						<rect x={px} y={y} width={w} height={size * 1.6} rx={size * 0.8} fill="#fffdf8" stroke={col} strokeWidth={3} />
						<Sx x={px + w / 2} y={y + size * 1.12} text={it.t} size={size} color={col} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- formula tile: c = top ÷ volume block ----------
export const FracTile: React.FC<{x: number; y: number; at: number; lhs: string; top: string; bot: (f: number) => string; botW: (f: number) => number; res?: {t: (f: number) => string; size: (f: number) => number; at: number}; color?: string; ring?: number; o?: number; size?: number; title?: string}> = ({x, y, at, lhs, top, bot, botW, res, color = INK, ring, o = 1, size = 30, title}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const lw = mw(lhs, size, false, 700) + 16;
	const tw2 = Math.max(mw(top, size, false, 700), botW(f));
	const fx = x + lw;
	const bw = botW(f);
	return (
		<g opacity={v}>
			{title ? <Sx x={x} y={y - 64} text={title} size={26} color={color} hand at={-1000} /> : null}
			<Sx x={x} y={y + size * 0.35} text={lhs} size={size} color={color} weight={700} at={-1000} />
			<Sx x={fx + tw2 / 2} y={y - 14} text={top} size={size} color={color} anchor="middle" weight={700} at={-1000} />
			<line x1={fx} y1={y} x2={fx + tw2} y2={y} stroke={color} strokeWidth={3} />
			<rect x={fx + (tw2 - bw) / 2} y={y + 8} width={bw} height={size * 1.3} rx={8} fill={color === INK ? '#e9e2ff' : '#efebe4'} stroke={color === INK ? '#6f55a3' : GREYX} strokeWidth={2.5} />
			<Sx x={fx + tw2 / 2} y={y + 8 + size * 0.98} text={bot(f)} size={size} color={color} anchor="middle" weight={700} at={-1000} />
			{ring !== undefined ? <DrawPath d={`M${fx + (tw2 - bw) / 2 - 10},${y + 8 + size * 0.65} a${bw / 2 + 10},${size * 0.95} 0 1 1 0,0.1`} at={ring} dur={16} color={TEAL} width={4} /> : null}
			{res ? <Sx x={fx + tw2 + 20} y={y + size * 0.35} text={res.t(f)} size={res.size(f)} color={TEAL} weight={800} at={res.at} /> : null}
		</g>
	);
};

// ---------- the Q4 ion tally ----------
/** Tokens for volume v of 0.500 mol/L HCl added to the ammonia (equivalence 8.4 mL); six ammonia units in all. */
export const tallyQ4 = (v: number) => {
	const r = Math.round((6 * Math.min(v, 8.4)) / 8.4);
	const ex = Math.round((6 * Math.max(0, v - 8.4)) / 8.4);
	return {mol: Math.max(0, 6 - r - (r === 0 ? 1 : 0)), nh4: r === 0 ? 1 : r, oh: r === 0 ? 1 : 0, cl: r + ex, h3o: ex};
};
export const NTally: React.FC<{x: number; y: number; v: (f: number) => number; at: number; out?: number; o?: number; lh?: number}> = ({x, y, v, at, out, o = 1, lh = 78}) => {
	const f = useCurrentFrame();
	const op = vis(f, at, out, 12) * o;
	if (op <= 0.01) return null;
	const t = tallyQ4(v(f));
	const X0 = x + 230;
	const row = (n: number, w: number, node: (cx: number) => React.ReactNode, start = X0) => Array.from({length: n}, (_, i) => <g key={i}>{node(start + w / 2 + i * (w + 8))}</g>);
	return (
		<g opacity={op}>
			<Sx x={x} y={y + 8} text="molecules" size={30} color={INK_SOFT} hand at={-1000} />
			<Sx x={x} y={y + lh + 8} text="positive ions" size={30} color={INK_SOFT} hand at={-1000} />
			<Sx x={x} y={y + 2 * lh + 8} text="negative ions" size={30} color={INK_SOFT} hand at={-1000} />
			{row(t.mol, 60, cx => <NH3g x={cx} y={y} s={1.5} />)}
			{row(t.nh4, 60, cx => <NH4g x={cx} y={y + lh} s={1.45} />)}
			{row(t.h3o, 66, cx => <H3O x={cx} y={y + lh} s={1.6} />, X0 + t.nh4 * 68)}
			{row(t.oh, 56, cx => <OHg x={cx} y={y + 2 * lh} s={1.5} />)}
			{row(t.cl, 46, cx => <ClTok x={cx} y={y + 2 * lh} s={0.85} grey={1} />, X0 + t.oh * 64)}
		</g>
	);
};

// ---------- amber points that light in turn ----------
export const APts: React.FC<{g: GG; fn: (v: number) => number; xs: number[]; at: number; lit?: (i: number) => number | undefined; pulse?: {i: number[]; at: number}; r?: number; o?: number}> = ({g, fn, xs, at, lit, pulse, r = 8, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{xs.map((v, i) => {
				const p = prog(f, at + i * 3, 8);
				if (p <= 0.01) return null;
				const lt = lit ? lit(i) : undefined;
				const lg = lt === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - lt) / 24) * Math.PI));
				const on = lt !== undefined && f >= lt;
				const pz = pulse && pulse.i.includes(i) ? 1 + 0.6 * Math.max(0, Math.sin(clamp01((f - pulse.at) / 40) * Math.PI * 2)) : 1;
				return (
					<g key={i}>
						{lg > 0.01 ? <circle cx={gx(g, v)} cy={gy(g, fn(v))} r={r * 2.6} fill="#f6d77a" opacity={0.6 * lg} /> : null}
						<circle cx={gx(g, v)} cy={gy(g, fn(v))} r={r * (0.5 + 0.5 * p) * (on ? 1.15 : 1) * pz} fill={AMBER} stroke={on ? INK : '#8a5b0a'} strokeWidth={on ? 3 : 2} opacity={p} />
					</g>
				);
			})}
		</g>
	);
};

/** A horizontal bracket between volumes a and b at pH (or value) p, label below or above. */
export const HBr: React.FC<{g: GG; a: number; b: number; p: number; at: number; out?: number; text: string; up?: boolean; size?: number; color?: string; o?: number; dx?: number}> = ({g, a, b, p, at, out, text, up = false, size = 26, color = INK, o = 1, dx = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const x1 = gx(g, a), x2 = gx(g, b), y = gy(g, p);
	const d = up ? -12 : 12;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y - d} L${x1},${y} L${x2},${y} L${x2},${y - d}`} at={at} dur={12} color={color} width={4} />
			<Sx x={(x1 + x2) / 2 + dx} y={up ? y - 16 : y + size + 10} text={text} size={size} color={color} anchor="middle" weight={800} at={at + 6} />
		</g>
	);
};

/** A tiny graph thumbnail frame (hook). */
export const ThumbFrame: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; children: React.ReactNode; title?: string}> = ({x, y, w, h, at, out, children, title}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const s = 0.85 + 0.15 * smooth(prog(f, at, 16));
	return (
		<g opacity={v} transform={`translate(${x + w / 2},${y + h / 2}) scale(${s}) translate(${-(x + w / 2)},${-(y + h / 2)})`}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			{children}
			{title ? <Sx x={x + w / 2} y={y + h + 36} text={title} size={28} color={INK_SOFT} anchor="middle" hand at={at} /> : null}
		</g>
	);
};
void Fade; void lerp;
