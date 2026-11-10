// Studio parts added for d10 to d14 (root decision 21): candidate value table, linked riders, the normal line
// and its quarter turn, name-swap chips and the interval picture for question cards. Names that already exist
// in src/explainer/math (CandidateValueTable, normalLine) carry a Studio prefix here so the studio can later be
// re-exported from math/kit.tsx without a clash.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, fmtNum, smooth, vis} from './primitives';
import {MATH_ANSWER, MATH_EXCLUDED, MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk} from './roles';
import {LiveReadoutBoard, ReadoutRow} from './readouts';
import {graphTransform} from '../graphs';
import {FnFamily, FnKey, FnState, FunctionSimulator, FunctionSimulatorProps, fnStateAt} from './fn-sim';

// ---------- StudioCandidateTable ----------
const MATH_LIMIT_INK = '#9c5a00';
export type CandidateRow = {x: React.ReactNode; exact: React.ReactNode; decimal?: number; kind?: React.ReactNode; at: number; rejected?: {reason?: React.ReactNode; at: number}; winner?: boolean;
	/** A limit, not an attained value (x → 0⁺, A → 0): amber italic with "(limit)". */
	limit?: boolean};
/**
 * Candidate values with exact symbolic results (the studio CandidateValueTable): rows arrive on cues, rejected
 * candidates strike through in grey with a short reason, and the winner row is framed in green at `winnerAt`.
 */
export const StudioCandidateTable: React.FC<{x: number; y: number; w?: number; rows: readonly CandidateRow[]; headings?: [React.ReactNode, React.ReactNode, React.ReactNode?]; winnerAt?: number; size?: number; at?: number; out?: number; digits?: number}> = ({x, y, w = 1100, rows, headings = ['candidate x', 'f(x), exact'], winnerAt, size = 44, at = 0, out, digits = 3}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const hasKind = headings[2] !== undefined;
	const cols = hasKind ? '1fr 1.6fr 1fr' : '1fr 1.6fr';
	const head: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT};
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, padding: '16px 28px 18px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
			<div style={{display: 'grid', gridTemplateColumns: cols, columnGap: 24, paddingBottom: 8, borderBottom: `3px solid ${PAPER_DEEP}`}}>
				{headings.filter(h => h !== undefined).map((h, i) => <div key={i} style={head}>{h}</div>)}
			</div>
			{rows.map((r, i) => {
				const ro = prog(f, r.at, 14);
				const rej = r.rejected ? prog(f, r.rejected.at, 12) : 0;
				const win = r.winner && winnerAt !== undefined ? smooth(prog(f, winnerAt, 16)) : 0;
					const c = rej > 0.5 ? MATH_EXCLUDED : r.limit ? MATH_LIMIT_INK : INK;
					const it: React.CSSProperties = r.limit ? {fontStyle: 'italic'} : {};
				return (
					<div key={i} style={{opacity: ro, transform: `translateY(${(1 - ro) * 10}px)`, position: 'relative', display: 'grid', gridTemplateColumns: cols, columnGap: 24, alignItems: 'center', padding: '10px 14px', margin: '8px -14px 0', borderRadius: 14, border: `5px solid ${win > 0 ? `rgba(40,115,71,${win})` : 'transparent'}`, background: win > 0 ? `rgba(220,239,226,${win})` : undefined}}>
							<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: c, whiteSpace: 'pre', ...it}}>{r.x}</div>
							<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: win > 0.5 ? MATH_ANSWER : c, whiteSpace: 'pre', ...it}}>
								{r.exact}
								{r.limit ? <span style={{fontSize: 30, fontWeight: 700}}>{'  (limit)'}</span> : null}
							{r.decimal !== undefined && rej < 0.5 ? <span style={{fontSize: 30, fontWeight: 600, color: INK_SOFT}}>{`  ≈ ${fmtNum(r.decimal, digits)}`}</span> : null}
							{r.rejected?.reason && rej > 0 ? <div style={{fontFamily: FONT_DISPLAY, fontSize: 30, fontWeight: 700, color: MATH_MISTAKE, opacity: rej}}>{r.rejected.reason}</div> : null}
						</div>
						{hasKind ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: win > 0.5 ? MATH_ANSWER : c}}>{r.kind}</div> : null}
						{rej > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: 6, top: '30%', width: `calc(${hasKind ? 62 : 100}% - 12px)`, height: '20%', overflow: 'visible'}}><path d="M0,50 L100,46" stroke={MATH_MISTAKE} strokeWidth={5} vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - rej} /></svg> : null}
					</div>
				);
			})}
		</div>
	);
};

// ---------- LinkedRiders ----------
/**
 * Two curves sharing one x timeline. `stacked`: two plots one above the other with a dashed link between the
 * points; `overlay`: both curves on one plot, each with its own point (and optional tangent). One readout
 * board takes rows computed from both states, so neither rider can disagree with it.
 */
export const LinkedRiders: React.FC<{
	x: number; y: number; width?: number; height?: number; gap?: number; layout?: 'stacked' | 'overlay';
	windowX: readonly [number, number]; yA: readonly [number, number]; yB: readonly [number, number];
	a: {family: FnFamily; color?: string; label?: string; tangent?: boolean};
	b: {family: FnFamily; color?: string; label?: string; tangent?: boolean};
	timeline: readonly FnKey[]; at?: number; out?: number; xTicks?: FunctionSimulatorProps['xTicks'];
	branchSafe?: {gap?: number};
	readout?: {x: number; y: number; width?: number; rows: (Omit<ReadoutRow, 'value'> & {value: (a: FnState, b: FnState) => number})[]};
}> = ({x, y, width = 1100, height = 760, gap = 10, layout = 'stacked', windowX, yA, yB, a, b, timeline, at = 0, out, xTicks, branchSafe, readout}) => {
	const f = useCurrentFrame();
	const sa = fnStateAt(a.family, timeline, f), sb = fnStateAt(b.family, timeline, f);
	const hA = layout === 'stacked' ? (height - gap) / 2 : height;
	const yb = layout === 'stacked' ? y + hA + gap : y;
	const common = {width, timeline, xTicks, at, out, branchSafe} as const;
	return (
		<>
			<FunctionSimulator {...common} x={x} y={y} height={hA} window={{x: windowX, y: yA}} family={a.family} color={a.color ?? INK} yLabel={a.label ?? 'y'} point={{at}} tangent={a.tangent ? {at} : undefined} />
			<FunctionSimulator {...common} x={x} y={yb} height={layout === 'stacked' ? hA : height} window={{x: windowX, y: layout === 'stacked' ? yB : yA}} family={b.family} color={b.color ?? MATH_ROLES.a.stroke} yLabel={layout === 'stacked' ? (b.label ?? 'y') : ''} bare={layout === 'overlay'} point={{at, color: b.color ?? MATH_ROLES.a.stroke}} tangent={b.tangent ? {at} : undefined}
				onPoint={layout === 'stacked' ? g => {
					const tp = graphTransform({x: windowX, y: yA, width, height: hA}).point(sa.X, Math.max(yA[0], Math.min(yA[1], sa.Y)));
					const top = [x + tp.x, y + tp.y];
					return <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible', opacity: vis(f, at, out)}}><line x1={top[0]} y1={top[1]} x2={g.pt[0]} y2={g.pt[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 9" /></svg>;
				} : undefined} />
			{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width} at={at} out={out} rows={readout.rows.map(r => ({...r, value: r.value(sa, sb)}))} /> : null}
		</>
	);
};

// ---------- normal line ----------
export type StudioNormal = {kind: 'sloped'; slope: number; intercept: number} | {kind: 'vertical'; x: number} | {kind: 'horizontal'; y: number};
/** The normal at (x0, y0) to a tangent of gradient m (m = 'vertical' for a vertical tangent): gradient −1/m. */
export const studioNormalLine = (x0: number, y0: number, m: number | 'vertical'): StudioNormal => {
	if (m === 'vertical') return {kind: 'horizontal', y: y0};
	if (!Number.isFinite(m)) throw new RangeError('studioNormalLine: finite tangent gradient or "vertical" required');
	if (Math.abs(m) < 1e-12) return {kind: 'vertical', x: x0};
	const slope = -1 / m;
	return {kind: 'sloped', slope, intercept: y0 - slope * x0};
};
/** Tangent and normal at the point, the tangent turning a quarter turn onto the normal at `turnAt` (needs an equal-unit plot for the right-angle mark). */
export const QuarterTurnNormal: React.FC<Omit<FunctionSimulatorProps, 'normal' | 'tangent' | 'point'> & {turnAt: number; turnDur?: number; normalColor?: string}> = ({turnAt, turnDur = 30, normalColor, ...rest}) => {
	const a = rest.at ?? 0;
	return <FunctionSimulator {...rest} point={{at: a}} tangent={{at: a}} normal={{at: turnAt, turn: {at: turnAt, dur: turnDur}, color: normalColor}} />;
};

// ---------- NameSwapChips ----------
/** Two labelled chips that exchange places along arcs at `swapAt` (the left one passes over the top). */
export const NameSwapChips: React.FC<{x: number; y: number; gap?: number; left: {content: React.ReactNode; role?: RoleKey}; right: {content: React.ReactNode; role?: RoleKey}; swapAt: number; dur?: number; at?: number; out?: number; size?: number; width?: number}> = ({x, y, gap = 60, left, right, swapAt, dur = 30, at = 0, out, size = 48, width = 300}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const u = smooth(prog(f, swapAt, dur));
	const d = width + gap;
	const chip = (c: {content: React.ReactNode; role?: RoleKey}, dx: number, dy: number) => (
		<div style={{position: 'absolute', left: x + dx, top: y + dy, width, boxSizing: 'border-box', textAlign: 'center', background: CARD, borderRadius: 18, padding: '8px 18px', border: `4px solid ${c.role ? MATH_ROLES[c.role].stroke : 'rgba(60,45,20,0.18)'}`, boxShadow: '0 10px 22px rgba(60,45,20,0.10)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: roleInk(c.role, INK), whiteSpace: 'pre', opacity: o}}>{c.content}</div>
	);
	const lift = Math.sin(u * Math.PI) * 70;
	return <>{chip(right, d * (1 - u), lift)}{chip(left, d * u, -lift)}</>;
};

// ---------- IntervalPicture ----------
/** Number-line picture for question cards: an interval from `from` to `to` with closed (filled) or open end dots. */
export const IntervalPicture: React.FC<{w?: number; h?: number; range: readonly [number, number]; from: number; to: number; closed?: [boolean, boolean]; ticks?: readonly {value: number; label: string}[]; label?: string; color?: string}> = ({w = 340, h = 150, range, from, to, closed = [true, true], ticks = [], label, color = MATH_ROLES.k.stroke}) => {
	const L = 26, R = w - 26, Y = label ? 74 : 56;
	const X = (v: number) => L + ((v - range[0]) / (range[1] - range[0])) * (R - L);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			{label ? <text x={(X(from) + X(to)) / 2} y={36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: roleInk('k')}}>{label}</text> : null}
			<line x1={L - 10} x2={R + 10} y1={Y} y2={Y} stroke={INK} strokeWidth={3} />
			<path d={`M${R + 2},${Y - 8} L${R + 14},${Y} L${R + 2},${Y + 8}`} fill="none" stroke={INK} strokeWidth={3} />
			<line x1={X(from)} x2={X(to)} y1={Y} y2={Y} stroke={color} strokeWidth={10} strokeLinecap="round" />
			{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={Y - 8} y2={Y + 8} stroke={INK} strokeWidth={3} /><text x={X(t.value)} y={Y + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{t.label}</text></g>)}
			{[from, to].map((v, i) => <circle key={i} cx={X(v)} cy={Y} r={11} fill={closed[i] ? color : CARD} stroke={color} strokeWidth={5} />)}
		</svg>
	);
};
