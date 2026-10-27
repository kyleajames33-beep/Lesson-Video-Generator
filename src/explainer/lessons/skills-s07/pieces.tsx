// S07 lesson-local pieces (README for Claude):
// - Target: one coded target (three rings) with five dots, placed tight off centre, scattered, tight on centre; the
//   "wrong target" variant is drawn grey. An abstract picture, labelled "a picture, not a definition" in the scene.
// - FixRail: three rows "Word / Feature / Fix" with a lit state, amber initials down the edge and optional example
//   lines (the s07 counterpart of s05's StepRail). Drawn at any box; scenes scale it for the mini tab.
// - MarginMark: the answer-line margin label ("W", "F" or "fix").
// - PercentBars: two bars of a share of the data value against a faint 100% outline.
// - VarStrip: "independent | controlled" with one controlled item that can turn terracotta then green.
// - NumberLine: a coded number line with dots and spread brackets (drill 1 feedback).
// - SpreadBr: a pen bracket over a span of the shrunk card (screen coords from phraseAt).
// Reused from s05: StepLetter (margin letters), ClipPlate (clipped plates), BandLadder (s04's ladder).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, CARD, DrawPath, GREEN, GREY, GREY_INK, HI, INK, INK_SOFT, RED, T, TEAL, clamp01, lerp, measure, prog, smooth, vis} from './kit';

export {ClipPlate, StepLetter} from '../skills-s05/pieces';
export {BandLadder} from '../skills-s04/pieces';
export const TERRA = '#b5502b';

// ---------- the target picture ----------
export type TKind = 'offcentre' | 'scatter' | 'centre' | 'wrong';
const DOTS: Record<TKind, [number, number][]> = {
	offcentre: [[0.42, -0.38], [0.5, -0.3], [0.38, -0.26], [0.47, -0.45], [0.55, -0.4]],
	scatter: [[-0.55, -0.2], [0.35, 0.5], [0.1, -0.62], [-0.3, 0.55], [0.62, -0.05]],
	centre: [[0.02, -0.04], [-0.06, 0.05], [0.07, 0.06], [-0.04, -0.08], [0.06, -0.02]],
	wrong: [[0.02, -0.04], [-0.06, 0.05], [0.07, 0.06], [-0.04, -0.08], [0.06, -0.02]],
};
export const Target: React.FC<{x: number; y: number; r: number; kind: TKind; at: number; label?: string; labelColor?: string; out?: number; o?: number; dotsAt?: number}> = ({x, y, r, kind, at, label, labelColor = INK, out, o = 1, dotsAt}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const grey = kind === 'wrong';
	const ring = grey ? GREY : INK_SOFT;
	const d0 = dotsAt ?? at + 8;
	return (
		<g opacity={v}>
			{[1, 0.66, 0.33].map((k, i) => <circle key={i} cx={x} cy={y} r={r * k} fill={i === 2 ? (grey ? '#efece6' : '#fbe9d0') : CARD} stroke={ring} strokeWidth={3} />)}
			{DOTS[kind].map(([u, w], i) => <circle key={i} cx={x + u * r} cy={y + w * r} r={r * 0.07} fill={grey ? '#5d6f86' : '#2c4a7c'} opacity={prog(f, d0 + i * 4, 6)} />)}
			{label ? <T x={x} y={y + r + 40} text={label} size={26} hand weight={700} color={labelColor} anchor="middle" o={prog(f, d0 + 20, 10)} /> : null}
		</g>
	);
};

// ---------- the fix rail ----------
export const RAIL = [
	{t: 'Word', sub: 'which quality?', init: 'W'},
	{t: 'Feature', sub: 'which part of this method, and what it does to the result', init: 'F'},
	{t: 'Fix', sub: 'a change that removes that cause', init: 'F'},
];
export type Box3 = {x: number; y: number; w: number};
export const FixRail: React.FC<{box: Box3; rowH?: number; rows: (number | undefined)[]; lit?: {row: number; from: number; to?: number}[]; initials?: number; ex?: {text: string; at: number}[]; o?: number; size?: number; title?: string; s?: number}> = ({box, rowH = 120, rows, lit = [], initials, ex, o = 1, size = 34, title = 'Word, feature, fix', s = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const glow = (i: number) => lit.filter(l => l.row === i).reduce((a, l) => Math.max(a, vis(f, l.from, l.to, 10)), 0);
	const H = 56 + RAIL.length * rowH;
	return (
		<g opacity={o} transform={`translate(${box.x},${box.y}) scale(${s}) translate(${-box.x},${-box.y})`}>
			<rect x={box.x} y={box.y} width={box.w} height={H} rx={18} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
			<T x={box.x + 24} y={box.y + 40} text={title} size={28} hand weight={700} color={INK_SOFT} />
			{RAIL.map((r, i) => {
				const at = rows[i];
				const ro = at === undefined ? 0 : prog(f, at, 12);
				if (ro <= 0.01) return null;
				const g = glow(i);
				const y = box.y + 56 + i * rowH;
				const exT = ex?.[i];
				return (
					<g key={i} opacity={ro}>
						{g > 0.01 ? <rect x={box.x + 8} y={y + 4} width={box.w - 16} height={rowH - 10} rx={14} fill={HI} opacity={0.5 * g} /> : null}
						<circle cx={box.x + 44} cy={y + rowH / 2} r={26} fill={initials !== undefined && f >= initials + i * 10 ? '#fff3d9' : CARD} stroke={initials !== undefined && f >= initials + i * 10 ? AMBER : INK_SOFT} strokeWidth={3} />
						<T x={box.x + 44} y={y + rowH / 2 + 10} text={r.init} size={28} weight={800} color={initials !== undefined && f >= initials + i * 10 ? AMBER_INK : INK} anchor="middle" />
						<T x={box.x + 92} y={y + (exT ? rowH * 0.38 : rowH * 0.42)} text={r.t} size={size} hand weight={700} color={g > 0.5 ? AMBER_INK : INK} />
						<T x={box.x + 92 + measure(r.t, size, true, 700) + 18} y={y + (exT ? rowH * 0.38 : rowH * 0.42)} text={r.sub} size={size * 0.68} weight={600} color={GREY_INK} />
						{exT ? <T x={box.x + 92} y={y + rowH * 0.78} text={exT.text} size={size * 0.72} hand weight={700} color={TEAL} o={prog(f, exT.at, 12)} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const railH = (rowH = 120) => 56 + RAIL.length * rowH;

/** Margin label for an answer row: "W", "F" or "fix". */
export const MarginMark: React.FC<{x: number; y: number; l: 'W' | 'F' | 'fix'; at: number; out?: number}> = ({x, y, l, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const w = l === 'fix' ? 44 : 28;
	return (
		<g opacity={v}>
			<rect x={x - w / 2} y={y - 15} width={w} height={28} rx={14} fill="#fff8e6" stroke={AMBER} strokeWidth={2.5} />
			<T x={x} y={y + 6} text={l} size={17} weight={800} color={AMBER_INK} anchor="middle" />
		</g>
	);
};

// ---------- percentage bars ----------
export const PercentBars: React.FC<{x: number; y: number; w: number; rows: {label: string; pct: number; color: string}[]; at: number; out?: number}> = ({x, y, w, rows, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{rows.map((r, i) => {
				const yy = y + i * 92;
				const p = smooth(prog(f, at + 6 + i * 10, 24));
				return (
					<g key={i}>
						<T x={x} y={yy} text={r.label} size={24} weight={700} color={INK} />
						<rect x={x} y={yy + 12} width={w} height={30} rx={8} fill="none" stroke={GREY} strokeWidth={2} strokeDasharray="5 5" />
						<rect x={x} y={yy + 12} width={w * (r.pct / 100) * p} height={30} rx={8} fill={r.color} opacity={0.85} />
						<T x={x + w * (r.pct / 100) * p + 10} y={yy + 36} text={`${r.pct}%`} size={24} weight={800} color={r.color} o={p} />
					</g>
				);
			})}
			<T x={x + w} y={y + rows.length * 92 + 2} text="100% = data value" size={18} weight={600} color={GREY_INK} anchor="end" />
		</g>
	);
};

// ---------- variables strip ----------
export const VarStrip: React.FC<{x: number; y: number; indep: string; controlled: string[]; hot: number; bad: number; good?: number; at: number; out?: number; size?: number}> = ({x, y, indep, controlled, hot, bad, good, at, out, size = 24}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const isBad = f >= bad && (good === undefined || f < good);
	const isGood = good !== undefined && f >= good;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={SWV} height={182} rx={14} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
			<T x={x + 18} y={y + 36} text={`independent: ${indep}`} size={size} weight={700} color={INK} />
			<T x={x + 18} y={y + 76} text="controlled:" size={size} weight={700} color={INK} />
			{controlled.map((c, i) => {
				const hit = i === hot;
				const col = hit && isBad ? TERRA : hit && isGood ? GREEN : INK_SOFT;
				return <T key={c} x={hit ? x + 18 : x + 18 + (i % 3) * 120} y={hit ? y + 150 : y + 110} text={hit && isBad ? `${c}: not controlled` : c} size={size * 0.92} weight={hit ? 800 : 600} color={col} />;
			})}
		</g>
	);
};
const SWV = 390;

// ---------- number line ----------
export const NumberLine: React.FC<{x: number; y: number; w: number; lo: number; hi: number; at: number; ref?: {v: number; label: string}; sets: {vals: number[]; at: number; color: string; label: string; spread: string; above?: boolean}[]}> = ({x, y, w, lo, hi, at, ref, sets}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const X = (v: number) => x + ((v - lo) / (hi - lo)) * w;
	const ticks = Array.from({length: Math.floor((hi - lo) / 2) + 1}, (_, i) => lo + i * 2);
	return (
		<g opacity={o}>
			<DrawPath d={`M${x},${y} L${x + w},${y}`} at={at} dur={14} color={INK_SOFT} width={3} />
			{ticks.map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y - 6} y2={y + 6} stroke={INK_SOFT} strokeWidth={2} /><T x={X(v)} y={y + 28} text={`${v}`.replace('-', '−')} size={16} weight={600} color={GREY_INK} anchor="middle" /></g>)}
			{ref ? <g><line x1={X(ref.v)} x2={X(ref.v)} y1={y - 90} y2={y + 70} stroke={AMBER} strokeWidth={3} strokeDasharray="5 5" /><T x={X(ref.v)} y={y - 98} text={ref.label} size={18} weight={700} color={AMBER_INK} anchor="middle" /></g> : null}
			{sets.map((s, k) => {
				const so = prog(f, s.at, 10);
				if (so <= 0.01) return null;
				const yy = s.above ? y - 34 : y + 46;
				const mn = Math.min(...s.vals), mx = Math.max(...s.vals);
				return (
					<g key={k} opacity={so}>
						{s.vals.map((v, i) => <circle key={i} cx={X(v) + (s.vals.filter(z => z === v).length > 1 ? (i % 2 ? 6 : -6) : 0)} cy={yy} r={7} fill={s.color} opacity={prog(f, s.at + i * 5, 6)} />)}
						<DrawPath d={s.above ? `M${X(mn) - 8},${yy - 16} L${X(mn) - 8},${yy - 22} L${X(mx) + 8},${yy - 22} L${X(mx) + 8},${yy - 16}` : `M${X(mn) - 8},${yy + 10} L${X(mn) - 8},${yy + 16} L${X(mx) + 8},${yy + 16} L${X(mx) + 8},${yy + 10}`} at={s.at + 16} dur={10} color={s.color} width={2.5} />
						<T x={(X(mn) + X(mx)) / 2} y={s.above ? yy - 30 : yy + 34} text={`${s.label}: ${s.spread}`} size={18} weight={700} color={s.color} anchor="middle" o={prog(f, s.at + 20, 8)} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- a pen bracket over a span (screen coords) ----------
export const SpreadBr: React.FC<{x1: number; x2: number; y: number; at: number; label: string; color?: string; out?: number; size?: number}> = ({x1, x2, y, at, label, color = INK, out, size = 18}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (f < at || v <= 0.01) return null;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y + 8} L${x1},${y} L${x2},${y} L${x2},${y + 8}`} at={at} dur={10} color={color} width={2.5} />
			<T x={(x1 + x2) / 2} y={y - 6} text={label} size={size} weight={800} color={color} anchor="middle" />
		</g>
	);
};
/** Small pill with a time ("24 h"), changing text at `swapAt`. */
export const TimePill: React.FC<{x: number; y: number; text: string; to?: string; swapAt?: number; at: number; color?: string}> = ({x, y, text, to, swapAt, at, color = INK}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	if (o <= 0.01) return null;
	const sw = swapAt !== undefined && f >= swapAt;
	const c = sw ? GREEN : color;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={92} height={40} rx={20} fill={CARD} stroke={c} strokeWidth={3} />
			<T x={x + 46} y={y + 28} text={sw && to ? to : text} size={24} weight={800} color={c} anchor="middle" />
		</g>
	);
};
void clamp01; void lerp; void RED;
