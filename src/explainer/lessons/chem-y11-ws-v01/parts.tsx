// Drawing parts for Y11 Chem WS V01 (questioning and predicting). Reuses the M1 V10 parts (and through them the V08,
// V06, V01 and M2 V06 text, chips, framed answers, readouts, pen marks, plates, the accounting bar, the balance and
// the pause hold). New here, all coded: word wrapping by the real font widths, rich text that writes on, the question
// box, the hypothesis card (if, then, because rows), the check list, evidence cards and sorting bins, the 0 to 100%
// number line, the heating-run axes, the crucible set (five plates that cross-fade in place), the crucible bowl
// clipped off its tripod for the balance pan, and the particle inset (copper sulfate breaking down).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CRU_B, CRU_K, CRU_L, CRU_P, CRU_W} from './common';
import type {PDef} from './common';
import {DrawPath, INK, NAVY_T, Plate, Rich, Sx, TickMark, clamp01, prog, smooth, tw, vis} from '../chem-y11-m1-v10/parts';
import type {Seg} from '../chem-y11-m1-v10/parts';
import {GOLD} from '../chem-y11-m2-v06/parts';

export * from '../chem-y11-m1-v10/parts';
export {GOLD};

// ---------- colour key (design Revision 4, fixed across ws-v01 to ws-v03) ----------
export const GOLD_T = '#8a6a0e'; // "because" (text)
export const TEAL_T = '#0b625d'; // evidence that fits (text)
export const ROSE_T = '#a82a55'; // evidence that challenges (text)
export const TERRA_T = '#a8421c'; // hazard
export const PAPER_CARD = '#fffdf8';

// ---------- wrapping by the real font widths ----------
/** Wrap coloured segments into lines no wider than maxW (words keep their colour). */
export const wrapSegs = (segs: Seg[], size: number, maxW: number, weight = 800, hand = false): Seg[][] => {
	const words: Seg[] = [];
	segs.forEach(s => s.t.split(/(\s+)/).forEach(w => { if (w) words.push({t: w, c: s.c}); }));
	const lines: Seg[][] = [];
	let cur: Seg[] = [];
	let w = 0;
	const flush = () => {
		while (cur.length && /^\s+$/.test(cur[cur.length - 1].t)) cur.pop();
		if (cur.length) lines.push(cur);
		cur = [];
		w = 0;
	};
	for (const wd of words) {
		if (/^\s+$/.test(wd.t)) {
			if (cur.length) { cur.push({t: ' ', c: wd.c}); w += tw(' ', size, hand, weight); }
			continue;
		}
		const ww = tw(wd.t, size, hand, weight);
		if (w + ww > maxW && cur.length) flush();
		cur.push({t: wd.t, c: wd.c});
		w += ww;
	}
	flush();
	// merge neighbours of one colour
	return lines.map(l => l.reduce<Seg[]>((a, s) => { const last = a[a.length - 1]; if (last && last.c === s.c) last.t += s.t; else a.push({...s}); return a; }, []));
};
export const wrapText = (text: string, size: number, maxW: number, color?: string, weight = 800) => wrapSegs([{t: text, c: color}], size, maxW, weight);
/** x range of the first occurrence of `match` in a line of segments drawn from x. */
export const spanOf = (line: Seg[], match: string, x: number, size: number, weight = 800): [number, number] => {
	const full = line.map(s => s.t).join('');
	const i = full.indexOf(match);
	if (i < 0) throw new Error('WS V01 span not found: ' + match);
	return [x + tw(full.slice(0, i), size, false, weight), x + tw(full.slice(0, i + match.length), size, false, weight)];
};

// ---------- text that writes on ----------
export const WriteRich: React.FC<{x: number; y: number; segs: Seg[]; at: number; out?: number; size?: number; cps?: number; weight?: number; hand?: boolean; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, segs, at, out, size = 44, cps = 34, weight = 800, hand = false, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const n = Math.max(8, Math.round((segs.reduce((a, s) => a + s.t.length, 0) / cps) * 30));
	const p = prog(f, at, n);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.005) return null;
	return (
		<g opacity={o} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -5%)`}}>
			<Rich x={x} y={y} segs={segs} size={size} weight={weight} hand={hand} anchor={anchor} at={-1000} />
		</g>
	);
};
/** Lines that write on, each from its own frame (`at` is one frame for all or one per line). */
export const Para: React.FC<{x: number; y: number; lines: Seg[][]; size: number; lh: number; at: number | number[]; out?: number; weight?: number; cps?: number}> = ({x, y, lines, size, lh, at, out, weight = 800, cps = 40}) => (
	<>{lines.map((l, i) => <WriteRich key={i} x={x} y={y + i * lh} segs={l} size={size} at={Array.isArray(at) ? at[Math.min(i, at.length - 1)] : at + i * 6} out={out} weight={weight} cps={cps} />)}</>
);
/** Pen underline drawn on under [x0, x1] at baseline y. */
export const Under: React.FC<{x0: number; x1: number; y: number; at: number; out?: number; color?: string; width?: number}> = ({x0, x1, y, at, out, color = NAVY_T, width = 6}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.005) return null;
	return <g opacity={o}><DrawPath d={`M${x0},${y + 12} Q${(x0 + x1) / 2},${y + 18} ${x1},${y + 10}`} at={at} dur={14} color={color} width={width} /></g>;
};
/** Slate (or red) strike through a line of text. */
export const Strike: React.FC<{x0: number; x1: number; y: number; size: number; at: number; color?: string; out?: number}> = ({x0, x1, y, size, at, color = '#5a6470', out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.005) return null;
	const yy = y - size * 0.32;
	return <g opacity={o}><DrawPath d={`M${x0 - 8},${yy + 3} L${x1 + 8},${yy - 3}`} at={at} dur={12} color={color} width={6} /></g>;
};

// ---------- boxes and cards ----------
/** A card with a coloured frame (green when framed as an answer, with a tick at its right). */
export const BoxCard: React.FC<{x: number; y: number; w: number; h: number; at?: number; out?: number; stroke?: string; fill?: string; sw?: number; tickAt?: number; dy?: number; dashed?: boolean; o?: number; children?: React.ReactNode}> = ({x, y, w, h, at = -1000, out, stroke = INK, fill = PAPER_CARD, sw = 4, tickAt, dy = 0, dashed, o = 1, children}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.005) return null;
	return (
		<g opacity={v} transform={dy ? `translate(0,${dy})` : undefined}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={fill} stroke={stroke} strokeWidth={sw} strokeDasharray={dashed ? '12 8' : undefined} />
			{children}
			{tickAt !== undefined ? <TickMark x={x + w - 34} y={y + 38} at={tickAt} s={1.3} /> : null}
		</g>
	);
};

// ---------- the crucible set (one registration) ----------
const CRU_BOX = CRU_B.box;
export const cruW = (h: number) => (h / CRU_BOX[3]) * CRU_BOX[2];
/** Screen point of a native point of the blue crucible canvas for a set drawn at (x, y, h). */
export const cruXY = (x: number, y: number, h: number, u: number, v: number): [number, number] => {
	const k = h / CRU_BOX[3];
	return [x + (u - CRU_BOX[0]) * k, y + (v - CRU_BOX[1]) * k];
};
export type CruMix = Partial<Record<'b' | 'l' | 'w' | 'p' | 'k', number>>;
const CRU_P_MAP: Record<keyof CruMix, PDef> = {b: CRU_B, l: CRU_L, w: CRU_W, p: CRU_P, k: CRU_K};
/** Crucible set at (x, y) and height h; mix gives each plate's opacity (they cross-fade in place). */
export const Cru: React.FC<{x: number; y: number; h: number; mix: CruMix; at?: number; out?: number}> = ({x, y, h, mix, at = -1000, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.005) return null;
	const keys = (Object.keys(mix) as (keyof CruMix)[]).filter(k => (mix[k] ?? 0) > 0.005);
	// the first plate solid underneath, the others over it (so a cross-fade never dips)
	return (
		<g opacity={v}>
			{keys.map((k, i) => <Plate key={k} p={CRU_P_MAP[k]} x={x} y={y} h={h} o={i === 0 ? 1 : (mix[k] ?? 0)} />)}
		</g>
	);
};
/** The crucible bowl alone (clipped off its tripod), its foot centre at p, scaled by k (screen px per native px). */
export const CruBowl: React.FC<{id: string; p: [number, number]; k: number; plate?: PDef}> = ({id, p, k, plate = CRU_B}) => {
	const X = (u: number) => p[0] + (u - 510) * k, Y = (v: number) => p[1] + (v - 522) * k;
	const pts: [number, number][] = [[298, 210], [302, 252], [326, 345], [360, 432], [400, 500], [440, 524], [580, 524], [622, 500], [662, 432], [696, 345], [720, 252], [724, 210]];
	const d = `M${pts.map(q => `${X(q[0])},${Y(q[1])}`).join(' L')} C${X(724)},${Y(120)} ${X(298)},${Y(120)} ${X(298)},${Y(210)} Z`;
	const h = plate.box[3] * k;
	return (
		<g>
			<defs><clipPath id={id}><path d={d} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><Plate p={plate} x={X(plate.box[0])} y={Y(plate.box[1])} h={h} /></g>
		</g>
	);
};

// ---------- check list ----------
export type CheckRow = {lines: string[]; hi?: number};
export const CheckList: React.FC<{x: number; y: number; rows: CheckRow[]; size?: number; lh?: number; gap?: number; w?: number}> = ({x, y, rows, size = 40, lh = 54, gap = 48, w = 920}) => {
	const f = useCurrentFrame();
	let yy = y;
	return (
		<g>
			{rows.map((r, i) => {
				const y0 = yy;
				const hgt = r.lines.length * lh + 22;
				yy += hgt + gap;
				const h = r.hi === undefined ? 0 : prog(f, r.hi, 10);
				return (
					<g key={i}>
						<rect x={x} y={y0 - size - 4} width={w} height={hgt} rx={12} fill={h > 0.01 ? '#e8eef9' : PAPER_CARD} stroke={h > 0.01 ? NAVY_T : 'rgba(60,45,20,0.25)'} strokeWidth={h > 0.01 ? 4 : 3} />
						<Sx x={x + 30} y={y0 + 4} text={`${i + 1}`} size={46} color={NAVY_T} anchor="middle" hand weight={700} at={-1000} />
						{r.lines.map((t, k) => <Rich key={k} x={x + 64} y={y0 + k * lh} segs={[{t}]} size={size} weight={k === 0 ? 800 : 700} />)}
					</g>
				);
			})}
		</g>
	);
};
/** Row centre y of check row i (same layout maths as CheckList). */
export const checkRowY = (y: number, rows: CheckRow[], i: number, size = 40, lh = 54, gap = 48) => {
	let yy = y;
	for (let k = 0; k < i; k++) yy += rows[k].lines.length * lh + 22 + gap;
	return yy - size - 4 + (rows[i].lines.length * lh + 22) / 2;
};
/** Red pen cross. */
export const PenCross: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 20, color = '#c4362f'}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			<DrawPath d={`M${x - s},${y - s} L${x + s},${y + s}`} at={at} dur={8} color={color} width={7} />
			<DrawPath d={`M${x + s},${y - s} L${x - s},${y + s}`} at={at + 5} dur={8} color={color} width={7} />
		</g>
	);
};

// ---------- sorting bins ----------
export const Bin: React.FC<{x: number; y: number; w: number; h: number; label: string; at?: number; fill?: number; color?: string; size?: number}> = ({x, y, w, h, label, at = -1000, fill = 0, color = INK, size = 38}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.005) return null;
	return (
		<g opacity={v}>
			<path d={`M${x},${y} L${x + 14},${y + h} L${x + w - 14},${y + h} L${x + w},${y}`} fill={fill > 0.01 ? color : PAPER_CARD} fillOpacity={fill > 0.01 ? 0.16 * fill : 1} stroke={fill > 0.5 ? color : INK} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
			<Sx x={x + 30} y={y + h / 2 + size * 0.36} text={label} size={size} color={INK} weight={800} at={-1000} />
		</g>
	);
};
/** A lettered disc (an evidence card in short). */
export const Disc: React.FC<{x: number; y: number; t: string; color: string; r?: number; o?: number}> = ({x, y, t, color, r = 30, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={PAPER_CARD} stroke={color} strokeWidth={5} />
		<Sx x={x} y={y + r * 0.42} text={t} size={Math.round(r * 1.2)} color={color} anchor="middle" weight={800} at={-1000} />
	</g>
));

// ---------- number line (0 to 100% mass lost) ----------
export const NumLine: React.FC<{x: number; w: number; y: number; lo: number; hi: number; color: string; at?: number; mark?: {v: number; at: number; color: string; label?: string}; target?: {v: number; at: number}}> = ({x, w, y, lo, hi, color, at = -1000, mark, target}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.005) return null;
	const X = (p: number) => x + (p / 100) * w;
	return (
		<g opacity={v}>
			<rect x={X(lo)} y={y - 22} width={Math.max(6, X(hi) - X(lo))} height={44} rx={8} fill={color} opacity={0.32} />
			<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{[0, 25, 50, 75, 100].map(p => (
				<g key={p}>
					<line x1={X(p)} x2={X(p)} y1={y - 14} y2={y + 14} stroke={INK} strokeWidth={4} />
					<Sx x={X(p)} y={y + 52} text={`${p}%`} size={30} color={INK} anchor="middle" weight={700} at={-1000} />
				</g>
			))}
			{target && f >= target.at ? <g opacity={prog(f, target.at, 10)}>
				<line x1={X(target.v)} x2={X(target.v)} y1={y - 34} y2={y + 34} stroke={GOLD_T} strokeWidth={6} />
				<Sx x={X(target.v)} y={y - 44} text="36.1%" size={30} color={GOLD_T} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			{mark && f >= mark.at ? <g opacity={prog(f, mark.at, 10)}>
				<circle cx={X(mark.v)} cy={y} r={13} fill={mark.color} stroke="#fff" strokeWidth={3} />
				{mark.label ? <Sx x={X(mark.v)} y={y - 44} text={mark.label} size={30} color={mark.color} anchor="middle" weight={800} at={-1000} /> : null}
			</g> : null}
		</g>
	);
};

// ---------- axes for small graphs ----------
export type AxG = {x0: number; x1: number; y0: number; y1: number; xmax: number; ymax: number};
export const axX = (g: AxG, v: number) => g.x0 + (v / g.xmax) * (g.x1 - g.x0);
export const axY = (g: AxG, v: number) => g.y0 - (v / g.ymax) * (g.y0 - g.y1);
export const Axes: React.FC<{g: AxG; xLabel: string; yLabel: string; xTicks: number[]; yTicks: number[]; size?: number; o?: number}> = ({g, xLabel, yLabel, xTicks, yTicks, size = 30, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<line x1={g.x0} x2={g.x1 + 10} y1={g.y0} y2={g.y0} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<line x1={g.x0} x2={g.x0} y1={g.y0} y2={g.y1 - 10} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{xTicks.map(t => (
			<g key={'x' + t}>
				<line x1={axX(g, t)} x2={axX(g, t)} y1={g.y0} y2={g.y0 + 10} stroke={INK} strokeWidth={3} />
				<Sx x={axX(g, t)} y={g.y0 + 40} text={`${t}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} />
			</g>
		))}
		{yTicks.map(t => (
			<g key={'y' + t}>
				<line x1={g.x0 - 10} x2={g.x0} y1={axY(g, t)} y2={axY(g, t)} stroke={INK} strokeWidth={3} />
				<Sx x={g.x0 - 16} y={axY(g, t) + 10} text={`${t}`} size={size} color={INK} anchor="end" weight={700} at={-1000} />
			</g>
		))}
		<Sx x={(g.x0 + g.x1) / 2} y={g.y0 + 80} text={xLabel} size={size} color={INK} anchor="middle" weight={800} at={-1000} />
		<g transform={`translate(${g.x0 - 76},${(g.y0 + g.y1) / 2}) rotate(-90)`}><Sx x={0} y={0} text={yLabel} size={size} color={INK} anchor="middle" weight={800} at={-1000} /></g>
	</g>
));
/** Polyline path of a function on axes from v = 0 to v = upto. */
export const fnPath = (g: AxG, fn: (v: number) => number, upto: number, n = 80) => {
	let d = '';
	for (let i = 0; i <= n; i++) { const v = (upto * i) / n; d += `${i ? 'L' : 'M'}${axX(g, v).toFixed(1)},${axY(g, fn(v)).toFixed(1)} `; }
	return d;
};

// ---------- particle inset: copper sulfate breaking down (coded model) ----------
/** CuSO4 unit (Cu brown, S yellow, 4 O red) that splits on p (0..1) into black CuO and a grey gas puff that rises. */
export const SplitInset: React.FC<{cx: number; cy: number; r: number; p: number; at?: number}> = ({cx, cy, r, p, at = -1000}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.005) return null;
	const s = smooth(clamp01(p));
	const u = r * 0.16;
	const cuX = cx - r * 0.22 - s * r * 0.2, cuY = cy + r * 0.12 + s * r * 0.18;
	const gX = cx + r * 0.18 + s * r * 0.18, gY = cy - s * r * 0.42;
	const cuFill = s > 0.5 ? '#2b2522' : '#b0643a';
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill={PAPER_CARD} stroke={INK} strokeWidth={4} />
			{/* the copper end: Cu with one O (becomes black CuO) */}
			<circle cx={cuX} cy={cuY} r={u * 1.25} fill={cuFill} stroke={INK} strokeWidth={2.5} />
			<circle cx={cuX + u * 1.9} cy={cuY + u * 0.4} r={u} fill="#d8483b" stroke={INK} strokeWidth={2.5} />
			{/* the sulfur end: S with three O (leaves as a gas) */}
			<g opacity={1 - 0.15 * s}>
				{s > 0.05 ? <circle cx={gX} cy={gY} r={u * 3.2 * s} fill="#9aa3ad" opacity={0.35 * s} /> : null}
				<circle cx={gX} cy={gY} r={u * 1.05} fill="#e8c547" stroke={INK} strokeWidth={2.5} />
				{[[-1.7, -0.6], [1.7, -0.6], [0, 1.8]].map(([a, b], i) => <circle key={i} cx={gX + a * u} cy={gY + b * u} r={u * 0.9} fill="#d8483b" stroke={INK} strokeWidth={2.5} />)}
			</g>
			{s < 0.15 ? <line x1={cuX + u * 2.6} y1={cuY} x2={gX - u * 1.5} y2={gY + u * 0.6} stroke={INK} strokeWidth={3} /> : null}
		</g>
	);
};
