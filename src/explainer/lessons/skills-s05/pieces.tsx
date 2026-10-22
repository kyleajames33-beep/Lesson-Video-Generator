// S05 lesson-local pieces:
// - StepRail: the four-step card (Equation, Substitute, Solve, Sense check), mini tab and full states, rows lighting on
//   cue, the E S S S initials, optional one-line examples (decision board). Built like s04's VerdictStrip.
// - StepLetter: the small amber step letter beside a working row.
// - UnitChip: a small ink chip that rides from the card into the working, so units visibly travel and convert.
// - SigFigNum: a number whose significant digits light amber and placeholders grey, inside a coded magnifier frame.
// - SenseGauge: a coded scale of ΔH (−60 to −40 kJ mol⁻¹) with the C03 reference tick, the heat-loss zone and a needle.
// - ClipPlate: a plate drawn only inside its visible box (the dragon without the burrow cut-away). Never stretched.
// - BandLadder: s04's ladder, reused.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY} from '../../kit';
import {AMBER, AMBER_INK, CARD, Chip, DrawPath, GREEN, GREY, GREY_FILL, GREY_INK, HI, INK, INK_SOFT, PDef, RED, T, TEAL, clamp01, lerp, measure, prog, smooth, vis} from './kit';

export {BandLadder} from '../skills-s04/pieces';
export type {Rung} from '../skills-s04/pieces';

// ---------- icons ----------
export type StepK = 'eq' | 'sub' | 'solve' | 'check';
export const StepIcon: React.FC<{k: StepK; x: number; y: number; s?: number; o?: number}> = ({k, x, y, s = 1, o = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g transform={`translate(${x},${y}) scale(${s})`} opacity={o} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
			{k === 'eq' ? <><rect x={-30} y={-16} width={60} height={32} rx={6} fill={CARD} /><text x={0} y={6} textAnchor="middle" stroke="none" fill={INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 15}}>q=mcΔT</text></> : null}
			{k === 'sub' ? <><rect x={-16} y={4} width={32} height={18} rx={4} strokeDasharray="4 4" /><path d="M0,-24 L0,0 M-8,-8 L0,0 L8,-8" stroke={TEAL} /><text x={0} y={-18} textAnchor="end" stroke="none" fill={TEAL} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 13}} dx={-6}>5.2</text></> : null}
			{k === 'solve' ? <><path d="M-28,-6 L-14,-6 M-28,4 L-14,4" /><rect x={-6} y={-14} width={34} height={28} rx={4} stroke={AMBER_INK} strokeWidth={3.5} /></> : null}
			{k === 'check' ? <><path d="M-24,12 A24,24 0 0 1 24,12" /><path d="M0,12 L12,-8" stroke={RED} strokeWidth={3.5} /><circle cx={0} cy={12} r={3} fill={INK} /></> : null}
		</g>
	);
};

// ---------- StepRail ----------
export const STEPS: {t: string; sub: string; k: StepK; init: string}[] = [
	{t: 'Equation', sub: 'symbols first', k: 'eq', init: 'E'},
	{t: 'Substitute', sub: 'values with units', k: 'sub', init: 'S'},
	{t: 'Solve', sub: 'answer, units, sign, sig figs', k: 'solve', init: 'S'},
	{t: 'Sense check', sub: 'size, sign, unit', k: 'check', init: 'S'},
];
export type Box3 = {x: number; y: number; w: number};
/**
 * rows[i] = frame row i appears; full(f) 0 (mini tab) .. 1 (full card); lit rows glow; `initials` lights E S S S at a
 * frame; `ex` adds a one-line example under each row (decision board), shown from its own frame.
 */
export const StepRail: React.FC<{rows: (number | undefined)[]; miniBox: Box3; fullBox?: Box3; full?: (f: number) => number; lit?: {row: number; from: number; to?: number}[]; initials?: number; ex?: {text: string; at: number}[]; o?: number; title?: string; fullRowH?: number}> = ({rows, miniBox, fullBox, full, lit = [], initials, ex, o = 1, title = 'Four steps', fullRowH = 108}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const k = full ? smooth(clamp01(full(f))) : 0;
	const FB = fullBox ?? miniBox;
	const mRowH = 56;
	const n = rows.filter(r => r !== undefined && f >= r - 2).length;
	const glow = (i: number) => Math.max(0, ...lit.filter(l => l.row === i).map(l => vis(f, l.from, l.to, 10)));
	const ini = initials === undefined ? 0 : prog(f, initials, 12);
	return (
		<g opacity={o}>
			<g opacity={1 - k}>
				<T x={miniBox.x + 4} y={miniBox.y - 12} text="Four steps" size={24} hand weight={700} color={INK_SOFT} o={prog(f, Math.min(...rows.filter((r): r is number => r !== undefined), 1e9), 10)} />
			</g>
			{k > 0.01 ? (
				<g opacity={k}>
					<rect x={FB.x} y={FB.y} width={FB.w} height={84 + Math.max(1, n) * fullRowH} rx={22} fill={CARD} stroke={TEAL} strokeWidth={3.5} />
					<T x={FB.x + 28} y={FB.y + 54} text={title} size={38} hand weight={700} color={TEAL} />
				</g>
			) : null}
			{STEPS.map((r, i) => {
				const at = rows[i];
				if (at === undefined) return null;
				const ov = prog(f, at, 12);
				if (ov <= 0.01) return null;
				const x = lerp(miniBox.x, FB.x + 20, k), w = lerp(miniBox.w, FB.w - 40, k);
				const y = lerp(miniBox.y + i * mRowH, FB.y + 80 + i * fullRowH, k), h = lerp(mRowH - 8, fullRowH - 14, k);
				const g = glow(i);
				const e = ex?.[i];
				return (
					<g key={i} opacity={ov} transform={`translate(${(1 - smooth(prog(f, at, 14))) * 30},0)`}>
						{g > 0.01 ? <rect x={x - 5} y={y - 4} width={w + 10} height={h + 8} rx={14} fill={HI} opacity={0.6 * g} /> : null}
						<rect x={x} y={y} width={w} height={h} rx={12} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
						{ini > 0.01 ? <g opacity={ini}><rect x={x} y={y} width={lerp(30, 44, k)} height={h} rx={12} fill={AMBER} opacity={0.9} /><T x={x + lerp(15, 22, k)} y={y + h / 2 + lerp(10, 14, k)} text={r.init} size={lerp(28, 40, k)} weight={800} color="#3d2a05" anchor="middle" /></g> : null}
						<StepIcon k={r.k} x={x + lerp(64, 96, k)} y={y + h / 2} s={lerp(0.7, 1.05, k)} />
						<T x={x + lerp(108, 150, k)} y={y + lerp(h / 2 + 10, e ? 44 : h / 2 + 14, k)} text={r.t} size={lerp(28, 40, k)} hand weight={700} color={INK} />
						{k > 0.01 && !e ? <T x={x + 150 + measure(r.t, 40, true, 700) + 22} y={y + h / 2 + 11} text={r.sub} size={28} weight={600} color={INK_SOFT} o={k} /> : null}
						{k > 0.01 && e ? <T x={x + 150} y={y + 82} text={e.text} size={27} weight={600} color={INK_SOFT} o={k * prog(f, e.at, 12)} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Screen y of the middle of row i of the mini tab. */
export const railY = (b: Box3, i: number) => b.y + i * 56 + 24;

// ---------- step letter ----------
export const StepLetter: React.FC<{x: number; y: number; l: string; at: number; out?: number; o?: number}> = ({x, y, l, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={13} fill="#fff8e6" stroke={AMBER} strokeWidth={2.5} />
			<T x={x} y={y + 6} text={l} size={17} weight={800} color={AMBER_INK} anchor="middle" />
		</g>
	);
};

// ---------- UnitChip ----------
/** A small ink chip that appears at `from` and rides to `to` (both top-left), then stays (or fades at `out`). */
export const UnitChip: React.FC<{text: string; from: [number, number]; to: [number, number]; at: number; dur?: number; out?: number; color?: string; fill?: string; size?: number}> = ({text, from, to, at, dur = 26, out, color = INK, fill = CARD, size = 20}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at + 8, dur));
	const x = lerp(from[0], to[0], p), y = lerp(from[1], to[1], p) - Math.sin(p * Math.PI) * 30;
	return <g transform={`translate(${x - from[0]},${y - from[1]})`}><Chip x={from[0]} y={from[1]} text={text} at={at} out={out} size={size} color={color} fill={fill} hand={false} /></g>;
};

// ---------- KeptChip ----------
/** A kept result: a teal-edged chip that lifts from a working row (`from`) into its place (`to`). */
export const KeptChip: React.FC<{text: string; from?: [number, number]; to: [number, number]; at: number; out?: number; o?: number; size?: number}> = ({text, from, to, at, out, o = 1, size = 26}) => {
	const f = useCurrentFrame();
	const p = from ? smooth(prog(f, at, 24)) : 1;
	const s = from ?? to;
	const x = lerp(s[0], to[0], p), y = lerp(s[1], to[1], p);
	return <g transform={`translate(${x - to[0]},${y - to[1]})`}><Chip x={to[0]} y={to[1]} text={text} at={at} out={out} size={size} color={TEAL} fill="#eef8f6" hand={false} o={o} /></g>;
};

// ---------- SigFigNum ----------
/**
 * A number drawn character by character. sig: one flag per character ('a' amber significant, 'g' grey placeholder,
 * '.' plain). The lens (a coded magnifier frame with a handle) draws round it from `lens`.
 */
export const SigFigNum: React.FC<{x: number; y: number; text: string; sig: string; size?: number; at: number; lens?: number; lensOut?: number; out?: number; hand?: boolean; o?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, sig, size = 44, at, lens, lensOut, out, hand = false, o = 1, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const wt = hand ? 700 : 700;
	const W = measure(text, size, hand, wt);
	const x0 = anchor === 'middle' ? x - W / 2 : x;
	const l = lens === undefined ? 0 : vis(f, lens, lensOut, 10);
	const chars = [...text];
	let acc = '';
	return (
		<g opacity={v}>
			{l > 0.01 ? (
				<g opacity={l}>
					<rect x={x0 - 16} y={y - size * 1.05} width={W + 32} height={size * 1.45} rx={size * 0.5} fill="#fffdf3" stroke={INK} strokeWidth={4} />
					<path d={`M${x0 + W + 10},${y + size * 0.3} L${x0 + W + 36},${y + size * 0.85}`} stroke={INK} strokeWidth={8} strokeLinecap="round" />
				</g>
			) : null}
			{chars.map((c, i) => {
				const cx = x0 + measure(acc, size, hand, wt);
				acc += c;
				const k = sig[i];
				const col = l > 0.3 && k === 'a' ? AMBER_INK : l > 0.3 && k === 'g' ? GREY : INK;
				return <T key={i} x={cx} y={y} text={c} size={size} color={col} hand={hand} weight={wt} />;
			})}
			{l > 0.3 ? chars.map((c, i) => (sig[i] === 'a' ? <rect key={'u' + i} x={x0 + measure(text.slice(0, i), size, hand, wt)} y={y + 6} width={measure(c, size, hand, wt)} height={4} rx={2} fill={AMBER} opacity={l} /> : null)) : null}
		</g>
	);
};
/** Width of a number as SigFigNum draws it. */
export const numW = (text: string, size = 44, hand = false) => measure(text, size, hand, 700);

// ---------- SenseGauge ----------
/** Horizontal ΔH scale, −60 (left) to −40 (right). needle(f) gives the value; zone −57 to −50 green. */
export const SenseGauge: React.FC<{x: number; y: number; w: number; at: number; out?: number; value: number; settle: number; o?: number; s?: number; zoneTag?: boolean; outside?: {at: number; text: string}}> = ({x, y, w, at, out, value, settle, o = 1, s = 1, zoneTag = true, outside}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const X = (d: number) => x + ((d + 60) / 20) * w;
	const draw = prog(f, at, 18);
	const nv = lerp(-41, value, smooth(prog(f, settle, 30))) + Math.sin((f - settle) * 0.35) * 0.6 * (1 - clamp01((f - settle) / 40));
	const zo = prog(f, at + 14, 12);
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
			<T x={x} y={y - 92} text="sense check: ΔH (kJ mol^{−1})" size={22} weight={700} color={INK_SOFT} />
			<g opacity={zo}>
				<rect x={X(-57)} y={y - 26} width={X(-50) - X(-57)} height={26} rx={6} fill="#d8efe1" />
				{zoneTag ? <T x={X(-50) + 8} y={y - 8} text="a little less negative" size={19} weight={700} color={GREEN} /> : null}
			</g>
			<line x1={x} x2={x + w * draw} y1={y} y2={y} stroke={INK} strokeWidth={3} />
			{[-60, -55, -50, -45, -40].map(d => <g key={d} opacity={draw}><line x1={X(d)} x2={X(d)} y1={y - 8} y2={y + 8} stroke={INK} strokeWidth={2.5} /><T x={X(d)} y={y + 32} text={'−' + String(-d)} size={20} weight={600} color={GREY_INK} anchor="middle" /></g>)}
			<g opacity={prog(f, at + 10, 10)}>
				<line x1={X(-57)} x2={X(-57)} y1={y - 30} y2={y + 46} stroke={TEAL} strokeWidth={3} strokeDasharray="5 4" />
				<T x={X(-57)} y={y + 66} text="about −57 (C03)" size={20} weight={700} color={TEAL} anchor="middle" />
			</g>
			<g opacity={prog(f, settle, 10)}>
				<path d={`M${X(nv)},${y - 4} L${X(nv) - 9},${y - 40} L${X(nv) + 9},${y - 40} Z`} fill={RED} />
				<T x={X(nv)} y={y - 46} text={`−${Math.round(-value)}`} size={22} weight={800} color={RED} anchor="middle" o={prog(f, settle + 26, 8)} />
			</g>
			{outside ? <Chip x={x} y={y + 84} text={outside.text} at={outside.at} size={22} color={RED} fill="#fbe6e1" hand={false} maxW={w + 20} /> : null}
		</g>
	);
};

// ---------- ClipPlate ----------
let clipN = 0;
/** A plate placed by its visible box and clipped to it (anything outside the box is not drawn). Never stretched. */
export const ClipPlate: React.FC<{p: PDef; x: number; y: number; h: number; o?: number}> = ({p, x, y, h, o = 1}) => {
	const id = React.useMemo(() => `s05clip-${++clipN}`, []);
	if (o <= 0.01) return null;
	const k = h / p.box[3];
	return (
		<g opacity={o}>
			<clipPath id={id}><rect x={x} y={y} width={p.box[2] * k} height={h} /></clipPath>
			<image clipPath={`url(#${id})`} href={staticFile(p.src)} x={x - p.box[0] * k} y={y - p.box[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} />
		</g>
	);
};

// ---------- red strike through a span (unit cancelling) ----------
export const Strike: React.FC<{x1: number; x2: number; y: number; at: number; color?: string}> = ({x1, x2, y, at, color = RED}) => (
	<DrawPath d={`M${x1 - 2},${y + 6} L${x2 + 2},${y - 14}`} at={at} dur={8} color={color} width={3.5} />
);
/** Pen box drawn round a rectangle. */
export const PenBox: React.FC<{x: number; y: number; w: number; h: number; at: number; color?: string; width?: number}> = ({x, y, w, h, at, color = INK, width = 4}) => (
	<DrawPath d={`M${x},${y} L${x + w},${y} L${x + w},${y + h} L${x},${y + h} Z`} at={at} dur={20} color={color} width={width} />
);
void GREY_FILL;
