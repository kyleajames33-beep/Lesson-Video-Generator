// Live readouts and parameter sliders for maths simulations.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {Card, CardTitle, MarkKind, MarkSpan, fmtNum, niceNum, vis, CARD} from './primitives';
import {MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk} from './roles';

export type ReadoutRow = {
	label: React.ReactNode;
	value: number;
	digits?: number;
	role?: RoleKey;
	unit?: React.ReactNode;
	/** Row appears at this frame (default: with the board). */
	at?: number;
	/** Hand mark drawn round the number at a cue. */
	mark?: {kind: MarkKind; at: number; out?: number; role?: RoleKey};
	/** Tint the row between these frames (for "this one" moments). */
	glow?: [number, number];
	/** Dim the row (0..1). */
	dim?: number;
	/** Show this word or phrase in place of the number (word rows such as "uphill"). */
	text?: string;
	/** Signed bar beside the number: length value / max of the bar width (positive right, negative left). */
	bar?: {max: number; width?: number};
	/** Format the value as a string (money "$30,000", "−$4,500 per year", scientific form). `text` still wins. */
	format?: (v: number) => string;
};

/**
 * Large live readout board (52 px numbers, 30 px labels). Pass values already evaluated for the
 * current frame (from the same state that draws the graph), so the board can never disagree with it.
 * Fixed-width digits make the numbers tick in place.
 */
export const LiveReadoutBoard: React.FC<{x: number; y: number; width?: number; rows: ReadoutRow[]; at?: number; out?: number; title?: string; size?: number; labelSize?: number; inline?: boolean}> = ({x, y, width = 560, rows, at = 0, out, title, size = 52, labelSize = 30, inline = false}) => {
	const f = useCurrentFrame();
	return (
		<Card x={x} y={y} w={width} at={at} out={out} pad="14px 26px 12px">
			{title ? <CardTitle>{title}</CardTitle> : null}
			{rows.map((r, i) => {
				const o = vis(f, r.at ?? at, undefined, 12) * (1 - 0.6 * (r.dim ?? 0));
				const glow = r.glow ? vis(f, r.glow[0], r.glow[1], 10) : 0;
				const c = roleInk(r.role, INK);
				const shownText = r.text ?? (r.format ? r.format(r.value) : fmtNum(r.value, r.digits ?? 2));
				const numCore = (
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: c, fontVariantNumeric: 'tabular-nums', letterSpacing: -0.5}}>
						{r.mark ? <MarkSpan kind={r.mark.kind} at={r.mark.at} out={r.mark.out} role={r.mark.role ?? r.role} width={5}>{shownText}</MarkSpan> : shownText}
					</span>
				);
				const num = r.bar ? <span style={{display: 'inline-flex', alignItems: 'center', gap: 16}}>{numCore}<SignedBar value={r.value} max={r.bar.max} width={r.bar.width ?? 180} color={r.role ? MATH_ROLES[r.role].stroke : INK} /></span> : numCore;
				return (
					<div key={i} style={{opacity: o, borderTop: i ? `2px solid ${PAPER_DEEP}` : undefined, padding: inline ? '6px 10px' : '8px 10px 6px', margin: '0 -10px', borderRadius: 12, background: glow > 0 ? `rgba(${hexRgb(r.role ? MATH_ROLES[r.role].soft : '#ebe4d6')},${glow})` : undefined}}>
						{inline ? (
							<div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16}}>
								<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: labelSize, color: c}}>{r.label}</span>
								<span style={{display: 'flex', alignItems: 'baseline', gap: 10}}>{num}{r.unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>{r.unit}</span> : null}</span>
							</div>
						) : (
							<>
								<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: labelSize, color: c, lineHeight: 1.1}}>{r.label}</div>
								<div style={{display: 'flex', alignItems: 'baseline', gap: 12, lineHeight: 1.12}}>{num}{r.unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>{r.unit}</span> : null}</div>
							</>
						)}
					</div>
				);
			})}
		</Card>
	);
};
/** Signed horizontal bar about a centre line (positive right, negative left), clamped to its half width. */
export const SignedBar: React.FC<{value: number; max: number; width?: number; height?: number; color?: string}> = ({value, max, width = 180, height = 22, color = INK}) => {
	const half = width / 2;
	const len = Math.max(-1, Math.min(1, max > 0 ? value / max : 0)) * half;
	return (
		<svg width={width} height={height + 8} viewBox={`0 0 ${width} ${height + 8}`} style={{overflow: 'visible', alignSelf: 'center'}}>
			<rect x={0} y={4} width={width} height={height} rx={height / 2} fill={PAPER_DEEP} />
			<rect x={len >= 0 ? half : half + len} y={4} width={Math.abs(len)} height={height} rx={Math.min(height / 2, Math.abs(len) / 2)} fill={color} />
			<line x1={half} x2={half} y1={0} y2={height + 8} stroke={INK} strokeWidth={3} strokeLinecap="round" />
		</svg>
	);
};
const hexRgb = (h: string) => {
	const n = parseInt(h.slice(1), 16);
	return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
};

/**
 * Horizontal labelled slider in a role colour. `value` is the magnitude the knob shows (drive it from a
 * frame-keyed timeline). `mirror` (0..1) animates the sign-flip toggle: the knob never sweeps through an
 * excluded value such as 0; the badge shows the signed value once the flip passes half way.
 */
export const ParameterSlider: React.FC<{x: number; y: number; width?: number; symbol: string; role: RoleKey; value: number; min: number; max: number; ticks: {value: number; label: string}[]; at?: number; out?: number; mirror?: number; mirrorAt?: number; digits?: number; badgeMark?: {kind: MarkKind; at: number};
	/** A value the parameter may never take: red tick, red "not allowed" tag; the knob is clamped at least `gap` away on its side. */
	excluded?: {value: number; label?: string; gap?: number; at?: number};
	/** Kit pass 2B (opt in): format the badge's number (for example π multiples); default niceNum. */
	format?: (v: number) => string}> = ({x, y, width = 600, symbol, role, value: rawValue, min, max, ticks, at = 0, out, mirror, mirrorAt, digits = 2, badgeMark, excluded, format}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role];
	const value = excluded ? clampAwayFrom(rawValue, excluded.value, excluded.gap ?? 0.1) : rawValue;
	const T0 = 74, T1 = 74 + width, TY = 46;
	const px = (v: number) => T0 + ((Math.max(min, Math.min(max, v)) - min) / (max - min)) * width;
	const kx = px(value);
	const flipped = (mirror ?? 0) > 0.5;
	const badgeW = 250;
	const toggleOn = mirror === undefined ? 0 : Math.max(0, Math.min(1, mirror));
	const toggleVis = mirrorAt === undefined ? (mirror === undefined ? 0 : 1) : prog(f, mirrorAt, 12);
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', alignItems: 'flex-start', gap: 26}}>
			<svg width={T1 + 26} height={120} viewBox={`0 0 ${T1 + 26} 120`} style={{overflow: 'visible'}}>
				<text x={8} y={TY + 22} fill={R.ink} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}}>{symbol}</text>
				<line x1={T0} x2={T1} y1={TY} y2={TY} stroke={R.soft} strokeWidth={14} strokeLinecap="round" />
				<line x1={T0} x2={kx} y1={TY} y2={TY} stroke={R.stroke} strokeWidth={14} strokeLinecap="round" />
				{ticks.map(t => (
					<g key={t.label}>
						<line x1={px(t.value)} x2={px(t.value)} y1={TY + 16} y2={TY + 30} stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" />
						<text x={px(t.value)} y={TY + 66} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}}>{t.label}</text>
					</g>
				))}
				{excluded ? (() => {
					const ex = px(excluded.value), eo = prog(f, excluded.at ?? at, 12);
					return <g opacity={eo}>
						<line x1={ex} x2={ex} y1={TY - 30} y2={TY + 30} stroke={MATH_MISTAKE} strokeWidth={6} strokeLinecap="round" />
						<circle cx={ex} cy={TY} r={12} fill={CARD} stroke={MATH_MISTAKE} strokeWidth={5} />
						<text x={ex} y={TY - 42} textAnchor="middle" fill={MATH_MISTAKE} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>{excluded.label ?? `${symbol} = ${niceNum(excluded.value)} not allowed`}</text>
					</g>;
				})() : null}
				<circle cx={kx} cy={TY} r={24} fill={CARD} stroke={R.stroke} strokeWidth={7} />
				<circle cx={kx} cy={TY} r={8} fill={R.stroke} />
			</svg>
			<div style={{width: badgeW, boxSizing: 'border-box', marginTop: 4, padding: '2px 18px', background: CARD, border: `4px solid ${R.stroke}`, borderRadius: 18, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: R.ink, fontVariantNumeric: 'tabular-nums', boxShadow: '0 8px 20px rgba(60,45,20,0.10)', whiteSpace: 'pre'}}>
				{badgeMark ? <MarkSpan kind={badgeMark.kind} at={badgeMark.at} role={role}>{symbol} = {(format ?? (v => niceNum(v, digits)))(flipped ? -value : value)}</MarkSpan> : <>{symbol} = {(format ?? (v => niceNum(v, digits)))(flipped ? -value : value)}</>}
			</div>
			{mirror !== undefined ? (
				<div style={{opacity: toggleVis, marginTop: 10, display: 'flex', alignItems: 'center', gap: 12}}>
					<div style={{position: 'relative', width: 96, height: 50, borderRadius: 25, background: toggleOn > 0.5 ? R.stroke : PAPER_DEEP, border: `3px solid ${toggleOn > 0.5 ? R.stroke : INK_SOFT}`, boxSizing: 'border-box'}}>
						<div style={{position: 'absolute', top: 4, left: 4 + toggleOn * 46, width: 36, height: 36, borderRadius: 18, background: CARD, boxShadow: '0 2px 5px rgba(0,0,0,0.2)'}} />
					</div>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: toggleOn > 0.5 ? R.ink : INK_SOFT}}>× (−1)</span>
				</div>
			) : null}
		</div>
	);
};

/** Keep a driven value at least `gap` from an excluded value, on the side it is on (exactly at it: above). */
export const clampAwayFrom = (v: number, excluded: number, gap: number) => {
	if (Math.abs(v - excluded) >= gap) return v;
	return v >= excluded ? excluded + gap : excluded - gap;
};
/** Ease a positive parameter between two values evenly in its logarithm (u from 0 to 1, smoothstep). */
export const easeInLog = (from: number, to: number, u: number) => {
	if (!(from > 0 && to > 0)) throw new RangeError('easeInLog needs positive end values');
	const e = u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u);
	return Math.exp(Math.log(from) + (Math.log(to) - Math.log(from)) * e);
};
