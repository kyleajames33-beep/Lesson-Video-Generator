// Lesson parts for math-a12-f14 (Revision 3: how the start, the deposit, the rate and the time change an annuity's
// future value; a savings app on a phone), on the maths studio kit and f09's loan parts (imported read-only through
// ../math-a12-f09/parts, which re-exports f01 to f07's board parts). Lesson rigs:
// - App: a coded, unbranded savings app on the reused phone plate (explore and goal modes);
// - FVGraph: balance against years for the current settings, with a dashed grey ghost of the base case;
// - ValueSplit: a future value split into the grown start (violet), deposits (blue) and interest (amber).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, MATHS_KIT2B_ANCHORS, MATHS_KIT2B_PLATES, MATH_GRADIENT, MATH_ROLES, ScreenApp, StudioPlot, SvgPlate, accountFV, annuityFV, depositForGoal, fmtMoney} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export * from '../math-a12-f09/parts';

export const INTR = MATH_ROLES.interest;
export const DEP = MATH_ROLES.deposit;
export const ANSR = MATH_ROLES.answer;
export const VIO = MATH_GRADIENT;
export const VIO_SOFT = '#e7e0f2';
export const GREY = '#5f574c';
export const c2 = (v: number) => fmtMoney(v, 2);
export const c0 = (v: number) => fmtMoney(v, 0);

// ---------- the numbers (design "Numbers to verify") ----------
export type Settings = {P: number; M: number; rate: number; years: number; perYear?: number};
export const BASE: Settings = {P: 0, M: 300, rate: 4.8, years: 5};
/** Future value of the app's settings (exact; rounded only for display). */
export const fvOf = (s: Settings, years = s.years) => {const k = s.perYear ?? 12, r = s.rate / 100 / k; return accountFV(s.P, s.M, r, years * k);};
{
	const near = (a: number, b: number, t = 0.005) => Math.abs(a - b) < t;
	const checks: [string, boolean][] = [
		['base', near(fvOf(BASE), 20298.05) && near(300 * 60, 18000)],
		['double M', near(fvOf({...BASE, M: 600}), 40596.11) && near(fvOf({...BASE, M: 600}) - 36000, 4596.11)],
		['start', near(5000 * 1.004 ** 60, 6353.20) && near(fvOf({...BASE, P: 5000}), 26651.26)],
		['rate', near(fvOf({...BASE, rate: 9.6}), 22987.16) && Math.abs(fvOf({...BASE, rate: 9.6}) / fvOf(BASE) - 1.13) < 0.005 && Math.abs((fvOf({...BASE, rate: 9.6}) - 18000) / (fvOf(BASE) - 18000) - 2.17) < 0.005],
		['years', near(fvOf({...BASE, years: 10}), 46089.59) && near(fvOf({...BASE, years: 20}), 120502.51) && near(fvOf({...BASE, years: 30}), 240644.24)],
		['rate and time', near(fvOf({...BASE, years: 30, rate: 9.6}), 622923.97) && Math.abs(fvOf({...BASE, years: 30, rate: 9.6}) / fvOf({...BASE, years: 30}) - 2.59) < 0.005],
		['retirement', near(annuityFV(9200, 0.07, 40), 1836643.03) && near(annuityFV(9200, 0.07, 30), 869039.23) && near(9200 * 40, 368000) && near(9200 * 1.07 ** 39, 128752.35)],
		['A1', near(annuityFV(200, 0.005, 120), 32775.87) && near(annuityFV(400, 0.005, 120), 65551.74)],
		['A2', near(annuityFV(400, 0.005, 240), 184816.36) && near(annuityFV(800, 0.005, 120), 131103.48) && 400 * 240 === 96000 && 800 * 120 === 96000],
		['goal', depositForGoal(6000, 0.005, 24) > 235 && depositForGoal(6000, 0.005, 24) < 236],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f14 numbers: ' + bad.join(', '));
}

// ---------- plates ----------
export const PHONE: PlateSpec = MATHS_KIT2B_PLATES.phone;
export const PHONE_SCREEN = MATHS_KIT2B_ANCHORS.phoneScreen;
export const SUITCASE: PlateSpec = {src: 'assets/maths/ma12-travel-suitcase-v1.png', nat: [1106, 1422], box: [284, 226, 819, 1239]};
export const plateW = (p: PlateSpec, h: number) => (h * (p.box[2] - p.box[0])) / (p.box[3] - p.box[1]);

const T = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- the savings app on the phone (the kit ScreenApp, laid out as f13's final frame lays it out) ----------
export type Ctl = 'P' | 'M' | 'rate' | 'years';
export const phoneW = (h: number) => plateW(PHONE, h);
/** f13's app labels: "Start $0", "Deposit $300 a month", "Rate 4.8% p.a.", "Years 5"; sliders scaled as f13 scales them. */
const ctl = (s: Settings, c: Ctl, short = false) => {
	const yr = s.perYear === 1;
	if (c === 'P') return {label: 'Start', value: c0(s.P), frac: s.P / 10000, role: 'start' as const};
	if (c === 'M') return {label: 'Deposit', value: short ? `${c0(s.M)}/${yr ? 'yr' : 'mo'}` : `${c0(s.M)} a ${yr ? 'year' : 'month'}`, frac: yr ? s.M / 12000 : s.M / 1000, role: 'deposit' as const};
	if (c === 'rate') return {label: 'Rate', value: `${s.rate}% p.a.${yr && !short ? ', yearly' : ''}`, frac: s.rate / 10, role: 'interest' as const};
	return {label: 'Years', value: String(Math.round(s.years)), frac: s.years / 30, role: undefined};
};
/**
 * The phone (alpha box top left at x, y; h tall) with the savings app: four controls, the balance readout and a mini
 * growth graph (with a dashed ghost of `ghost`). `glow` highlights one control; `q` (0..1) shows a "?" by each control.
 */
export const App: React.FC<{x: number; y: number; h: number; s: Settings; ghost?: Settings; glow?: Ctl | null; q?: number; title?: string}> = ({x, y, h, s, ghost, glow = null, q = 0, title = 'Savings'}) => {
	const w = phoneW(h), sc = h / 810;
	const yMax = Math.max(fvOf(s), ghost ? fvOf(ghost) : 0) * 1.08;
	const xMax = Math.max(s.years, ghost?.years ?? 0);
	return <>
		<ScreenApp plate={PHONE} x={x} y={y} w={w} screen={PHONE_SCREEN} title={title}
			controls={(['P', 'M', 'rate', 'years'] as Ctl[]).map(c => ({...ctl(s, c, h < 760 || s.perYear === 1), glow: glow === c}))}
			readouts={[{label: 'Balance', value: fvOf(s) >= 100000 || h < 760 ? c0(fvOf(s)) : c2(fvOf(s))}]} graph={{fn: t => fvOf(s, Math.min(t, s.years)), upTo: s.years, xMax, yMax, ghost: ghost ? (t => (t <= ghost.years ? fvOf(ghost, t) : NaN)) : undefined}} />
		{q > 0.01 ? [512, 422, 602, 332].map((qy, i) => <div key={i} style={{position: 'absolute', left: x + w + 20 * sc, top: y + (qy - 150) * sc, opacity: q, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64 * sc, color: '#8a5a12'}}>?</div>) : null}
	</>;
};

// ---------- balance against years ----------
export const FVGraph: React.FC<{x: number; y: number; width: number; height: number; xMax: number; yMax: number; curves: readonly {s: Settings; color?: string; dash?: string; width?: number; from?: number; upTo?: number}[]; putIn?: {M: number; perYear: number; upTo: number; o: number}; yTicks: readonly {value: number; label: string}[]; xTicks: readonly number[]; children?: (m: PlotMap) => React.ReactNode; at?: number}> = ({x, y, width, height, xMax, yMax, curves, putIn, yTicks, xTicks, children, at = -30}) => (
	<StudioPlot x={x} y={y} width={width} height={height} window={{x: [0, xMax], y: [0, yMax]}} xTicks={xTicks} yTicks={yTicks} xLabel="years" yLabel="balance" at={at}>
		{m => <>
			<g clipPath={m.clip}>
				{putIn && putIn.o > 0.01 ? (() => {const [a, b] = m.p(0, 0), [c, d] = m.p(putIn.upTo, putIn.M * putIn.perYear * putIn.upTo); return <line x1={a} y1={b} x2={c} y2={d} stroke={INK} strokeWidth={4} strokeDasharray="14 10" opacity={putIn.o} />;})() : null}
				{curves.map((c, i) => {const from = c.from ?? 0, to = Math.min(c.upTo ?? c.s.years, c.s.years); if (to <= 0) return null; let d = ''; for (let j = 0; j <= 160; j++) {const t = (to * j) / 160, [a, b] = m.p(from + t, fvOf(c.s, t)); d += `${j ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;} return <path key={i} d={d} fill="none" stroke={c.color ?? INK} strokeWidth={c.width ?? 6} strokeDasharray={c.dash} strokeLinejoin="round" />;})}
			</g>
			{children ? children(m) : null}
		</>}
	</StudioPlot>
);

// ---------- a future value split into its parts ----------
export const ValueSplit: React.FC<{x: number; y: number; k: number; start?: number; deposits: number; interest: number; h?: number; label?: string; o?: number; size?: number; ring?: number}> = ({x, y, k, start = 0, deposits, interest, h = 56, label, o = 1, size = 30, ring = 0}) => {
	if (o <= 0.001) return null;
	const sw = start * k, dw = deposits * k, iw = interest * k;
	const lab = (cx: number, w: number, text: string, color: string) => (w > text.length * size * 0.56 + 12 ? <text x={cx} y={y + h / 2 + size * 0.36} textAnchor="middle" style={T(size, color)}>{text}</text> : null);
	return <FrameSvg style={{opacity: o}}>
		{label ? <text x={x} y={y - 12} style={T(30, INK)}>{label}</text> : null}
		{sw > 0 ? <rect x={x} y={y} width={sw} height={h} rx={6} fill={VIO_SOFT} stroke={VIO} strokeWidth={4} /> : null}
		<rect x={x + sw} y={y} width={dw} height={h} rx={6} fill={DEP.soft} stroke={DEP.stroke} strokeWidth={4} />
		<rect x={x + sw + dw} y={y} width={iw} height={h} rx={6} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={4} />
		{ring > 0.01 ? <ellipse cx={x + sw + dw + iw / 2} cy={y + h / 2} rx={iw / 2 + 24} ry={h / 2 + 16} fill="none" stroke={INTR.stroke} strokeWidth={5} opacity={ring} /> : null}
		{sw > 0 ? lab(x + sw / 2, sw, c2(start), VIO) : null}
		{lab(x + sw + dw / 2, dw, c2(deposits), DEP.ink)}
		{lab(x + sw + dw + iw / 2, iw, c2(interest), INTR.ink)}
	</FrameSvg>;
};
export {SvgPlate, StudioPlot, annuityFV, depositForGoal};
