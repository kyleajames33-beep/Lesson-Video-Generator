// Lesson parts for math-a12-f10 (Revision 3: how rate and repayment changes alter a loan term; a home loan on a
// mortgage calculator), on the maths studio kit and f09's loan parts (imported read-only through
// ../math-a12-f09/parts, which re-exports f01 to f07's board parts). Lesson rigs:
// - Calc: the coded, unbranded mortgage calculator on the reused laptop plate (the kit's ScreenApp);
// - Split: a repayment bar split into the interest part (amber) and the part that pays the debt (teal);
// - TermCurve: term (years) against monthly repayment, with the dashed amber interest-only line;
// The handoff draws f11's own BikeBoard (imported read-only), so f10's final frame is f11's opening frame exactly.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, MATHS_KIT2_ANCHORS, MATHS_KIT2_PLATES, MATH_ROLES, PlateFields, ScreenApp, StudioPlot, SvgPlate, fmtMoney, loanBalance, loanPayoff, loanSchedule, loanTerm, usePlatePreload} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export * from '../math-a12-f09/parts';

export const INTR = MATH_ROLES.interest;
export const REPY = MATH_ROLES.repay;
export const ANSR = MATH_ROLES.answer;
export const GREY = '#5f574c';
export const HL = {P: 400000, r: 1 / 240} as const;
export const M30 = 2147.29;
/** "$2,500.00"-style money to the cent and whole-dollar money. */
export const c2 = (v: number) => fmtMoney(v, 2);
export const c0 = (v: number) => fmtMoney(v, 0);
/** Payoff as the calculator shows it: whole repayments, as years and months; "never" when M ≤ Pr. */
export const payoff = (P: number, r: number, M: number) => {
	const p = loanPayoff(P, r, M);
	if (!Number.isFinite(p.repayments)) return {text: 'never', n: Infinity, final: NaN};
	const y = Math.floor(p.repayments / 12), m = p.repayments % 12;
	return {text: `${y} years ${m} month${m === 1 ? '' : 's'}`, n: p.repayments, final: p.finalRepayment};
};
export const termYears = (P: number, r: number, M: number) => loanTerm(P, r, M) / 12;

// ---------- the numbers (design "Numbers to verify") ----------
{
	const near = (a: number, b: number, tol = 0.005) => Math.abs(a - b) < tol;
	const s25 = loanSchedule(HL.P, HL.r, 2500);
	const checks: [string, boolean][] = [
		['hook', near(loanBalance(HL.P, HL.r, M30, 360), 0, 5) && payoff(HL.P, HL.r, M30).text === '30 years 0 months' && near(2500 - M30, 352.71)],
		['month 1', near(HL.P * HL.r, 1666.6667) && near(M30 - HL.P * HL.r, 480.62) && near(2500 - HL.P * HL.r, 833.33)],
		['month 2', near((HL.P - (M30 - HL.P * HL.r)) * HL.r, 1664.66) && near(s25[1].interest, 1663.19) && near(2500 - s25[1].interest, 836.81)],
		['tool', s25.length === 265 && near(s25[264].repayment, 540.57) && near(s25[0].closing, 399166.67) && near(s25[1].closing, 398329.86) && near(s25[2].closing, 397489.57) && near(s25[262].closing, 3025.72) && near(s25[263].closing, 538.32) && payoff(HL.P, HL.r, 2500).text === '22 years 1 month'],
		['graph', [[M30, 30.0], [2500, 22.0], [3000, 16.3], [3500, 13.0]].every(([M, y]) => Math.abs(termYears(HL.P, HL.r, M) - y) < 0.05)],
		['interest-only', near(HL.P * (1 + HL.r) - 1500, 400166.67) && Math.round(termYears(HL.P, HL.r, 1700)) === 79 && Math.round(termYears(HL.P, HL.r, 2000)) === 36],
		['rates', [[4, '19 years 2 months'], [5, '22 years 1 month'], [6, '26 years 11 months'], [7, '38 years 10 months']].every(([R, t]) => payoff(HL.P, (R as number) / 1200, 2500).text === t)],
		['rise', near(termYears(HL.P, 0.07 / 12, 2500) - termYears(HL.P, 0.06 / 12, 2500), 11.9, 0.1) && Math.abs(termYears(HL.P, 0.06 / 12, 2500) - termYears(HL.P, 0.05 / 12, 2500) - 4.87) < 0.01 && Math.abs(termYears(HL.P, 0.05 / 12, 2500) - termYears(HL.P, 0.04 / 12, 2500) - 2.93) < 0.01],
		['never', payoff(HL.P, 0.06 / 12, M30).text === '44 years 10 months' && near(HL.P * 0.065 / 12, 2166.67) && near(HL.P * (1 + 0.065 / 12) - M30, 400019.38) && payoff(HL.P, 0.065 / 12, M30).text === 'never'],
		['A1', 200000 * 0.005 === 1000 && 200000 / 1000 === 200],
		['A2', Math.abs(termYears(HL.P, HL.r, 3163.17) - 15) < 0.001 && near(2 * M30, 4294.58) && Math.abs(termYears(HL.P, HL.r, 4294.58) - 9.8) < 0.05],
		['bike', loanSchedule(20000, 0.006, 400).length === 60 && near(20000 * 0.006, 120)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f10 numbers: ' + bad.join(', '));
}

// ---------- plates ----------
export const LAPTOP: PlateSpec = MATHS_KIT2_PLATES.laptop;
export const SCREEN = MATHS_KIT2_ANCHORS.laptopScreen;
export const HOUSE_P: PlateSpec = {src: 'assets/physics/phys-y11-house-v1.png', nat: [1774, 887], box: [219, 134, 1549, 782]};
export const BIKE: PlateSpec = {src: 'assets/maths/ma12-motorbike-v1.png', nat: [1586, 992], box: [215, 138, 1361, 876]};
export const TAG: PlateSpec = {src: 'assets/maths/ma12-swing-tag-v1.png', nat: [1003, 1568], box: [192, 183, 807, 1355]};
/** The tag's four ruled lines (file px y 690, 838, 984, 1132; x 256 to 744): a field sits on each line. */
export const TAG_FIELDS = [[256, 590, 744, 684], [256, 738, 744, 832], [256, 884, 744, 978], [256, 1032, 744, 1126]] as const;

const T = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- the calculator on the laptop ----------
export type CalcState = {M: number; rate: number; glowM?: boolean; glowRate?: boolean; title?: string; extra?: {label: string; value: string; role?: 'interest' | 'repay' | 'balance' | 'answer'}[]; graph?: boolean};
/** The unbranded mortgage calculator: loan, rate and repayment sliders, the live "Paid off in" readout and a balance curve. */
export const Calc: React.FC<{x: number; y: number; w: number; s: CalcState; at?: number; out?: number; ghostM?: number}> = ({x, y, w, s, at = -30, out, ghostM}) => {
	const r = s.rate / 1200, p = payoff(HL.P, r, s.M);
	const yrs = Number.isFinite(p.n) ? p.n / 12 : 40;
	return <ScreenApp plate={LAPTOP} x={x} y={y} w={w} screen={SCREEN} at={at} out={out} title={s.title ?? 'Mortgage calculator'}
		controls={[
			{label: 'Loan', value: '$400,000', frac: 400 / 800, role: 'balance'},
			{label: 'Rate (p.a., monthly)', value: `${String(s.rate).replace(/\.0+$/, '')}%`, frac: (s.rate - 2) / 8, role: 'interest', glow: s.glowRate},
			{label: 'Repayment', value: c2(s.M), frac: (s.M - 1500) / 3000, role: 'repay', glow: s.glowM},
		]}
		readouts={[{label: 'Paid off in', value: p.text, role: Number.isFinite(p.n) ? 'answer' : 'interest'}, ...(s.extra ?? [])]}
		graph={!s.graph ? undefined : {fn: t => Math.max(0, loanBalance(HL.P, r, s.M, t * 12)), xMax: 45, yMax: 420000, upTo: Math.min(45, yrs), ghost: ghostM === undefined ? undefined : t => Math.max(0, loanBalance(HL.P, HL.r, ghostM, t * 12)), color: Number.isFinite(p.n) ? INK : INTR.stroke}} />;
};

// ---------- a repayment split ----------
/** One repayment as a bar (px per dollar `k`): the interest part in amber, the rest (what pays the debt) in teal. */
export const Split: React.FC<{x: number; y: number; k: number; M: number; interest: number; h?: number; o?: number; label?: string; glowFrom?: number; glowO?: number; intLabel?: boolean; tealLabel?: string; tealSize?: number}> = ({x, y, k, M, interest, h = 64, o = 1, label, glowFrom, glowO = 0, intLabel = true, tealLabel, tealSize = 52}) => {
	if (o <= 0.001) return null;
	const iw = Math.min(M, interest) * k, tw = Math.max(0, M - interest) * k, over = Math.max(0, interest - M) * k;
	return <FrameSvg style={{opacity: o}}>
		{label ? <text x={x - 20} y={y + h / 2 + 13} textAnchor="end" style={T(36, INK)}>{label}</text> : null}
		<rect x={x} y={y} width={iw} height={h} rx={8} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={4} />
		{intLabel ? <text x={x + Math.min(iw, 1e9) / 2} y={y + h / 2 + 14} textAnchor="middle" style={T(38, INTR.ink)}>{c2(interest)}</text> : null}
		{tw > 0 ? <rect x={x + iw} y={y} width={tw} height={h} rx={8} fill={REPY.soft} stroke={REPY.stroke} strokeWidth={4} /> : null}
		{glowFrom !== undefined && glowO > 0.01 ? <rect x={x + glowFrom * k} y={y - 6} width={(M - glowFrom) * k} height={h + 12} rx={10} fill="none" stroke={REPY.stroke} strokeWidth={7} opacity={glowO} /> : null}
		{over > 0 ? <g><defs><pattern id="ovh" width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width={14} height={14} fill={INTR.soft} /><line x1={0} y1={0} x2={0} y2={14} stroke={INTR.stroke} strokeWidth={5} /></pattern></defs>
			<rect x={x + iw} y={y} width={over} height={h} rx={6} fill="url(#ovh)" stroke={INTR.stroke} strokeWidth={4} /></g> : null}
		{tealLabel ? <text x={x + iw + tw + over + 20} y={y + h / 2 + 18} style={T(tealSize, REPY.ink)}>{tealLabel}</text> : null}
	</FrameSvg>;
};

// ---------- term against repayment ----------
/** Term (years, smooth estimate) for a repayment M at an annual rate (percent), capped for drawing. */
export const termAt = (M: number, rate = 5) => termYears(HL.P, rate / 1200, M);
export const TermCurve: React.FC<{x: number; y: number; width: number; height: number; rates?: readonly {rate: number; color?: string; from?: number; draw?: number}[]; io?: {rate: number; o: number; label?: string}[]; grid?: boolean; at?: number; children?: (m: PlotMap) => React.ReactNode; xLabel?: string; yLabel?: string}> = ({x, y, width, height, rates = [{rate: 5}], io = [], grid = false, at = -30, children, xLabel = 'monthly repayment ($)', yLabel = 'term (years, smooth estimate)'}) => (
	<StudioPlot x={x} y={y} width={width} height={height} window={{x: [1500, 4500], y: [0, 40]}} at={at} xTicks={[2000, 2500, 3000, 3500, 4000, 4500].map(v => ({value: v, label: c0(v)}))} yTicks={[10, 20, 30, 40]} xLabel={xLabel} yLabel={yLabel}>
		{m => <>
			{grid ? <g>{Array.from({length: 31}, (_, i) => 1500 + i * 100).map(v => {const [px] = m.p(v, 0); return <line key={'gx' + v} x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke="#e9e2d4" strokeWidth={1.5} />;})}
				{Array.from({length: 41}, (_, i) => i).map(v => {const [, py] = m.p(1500, v); return <line key={'gy' + v} x1={m.box.left} x2={m.box.left + m.box.width} y1={py} y2={py} stroke="#e9e2d4" strokeWidth={1.5} />;})}</g> : null}
			{io.map((l, i) => {if (l.o <= 0.01) return null; const v = (HL.P * l.rate) / 1200, [px] = m.p(v, 0); return <g key={'io' + i} opacity={l.o}><line x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={INTR.stroke} strokeWidth={4} strokeDasharray="14 9" />
				{l.label ? <text x={px + 12} y={m.box.top + m.box.height - 20} style={T(32, INTR.ink)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{l.label}</text> : null}</g>;})}
			<g clipPath={m.clip}>{rates.map((c, i) => {
				const lo = Math.max((HL.P * c.rate) / 1200 + 2, 1500), from = c.from ?? 4500, to = from - (from - lo) * (c.draw ?? 1);
				let d = '';
				for (let j = 0; j <= 200; j++) {const M = from + ((to - from) * j) / 200, [px, py] = m.p(M, Math.min(46, termAt(M, c.rate))); d += `${j ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)} `;}
				return (c.draw ?? 1) > 0.002 ? <path key={i} d={d} fill="none" stroke={c.color ?? INK} strokeWidth={6} strokeLinejoin="round" /> : null;
			})}</g>
			{children ? children(m) : null}
		</>}
	</StudioPlot>
);

export {SvgPlate, StudioPlot, loanBalance, loanSchedule, PlateFields};
