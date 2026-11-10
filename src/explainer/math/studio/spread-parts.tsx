// Kit pass 2B, probability set 2 (root decision 45; s03, s08): the balance beam, the running mean, deviation arms
// and spread brackets. μ, the beam and σ are violet; deviations left of μ blue, right of μ amber (s03 roles).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, FrameSvg, fmtNum, vis} from './primitives';
import {MATH_GRADIENT, MATH_ROLES, RoleKey} from './roles';
import {LiveReadoutBoard, ParameterSlider, ReadoutRow} from './readouts';
import {StudioPlot, TXT} from './plot-core';
import type {PlotTick} from './plot-core';
import type {Range} from '../graphs';

// ---------- StudioBalanceBeam ----------
/**
 * The x axis as a beam on a violet fulcrum. Bars (probability weights) stand on the beam; the beam tilts towards
 * the heavier side by the moment Σ w (x − pivot) and is level only when the pivot is at the mean. Everything on
 * the beam (bars, ticks, labels) turns with it. Drive `pivot` from frames (a sliding fulcrum), or pass `slider`
 * to show a linked ParameterSlider for a value the lesson ties to a weight (the s03 claim size).
 */
export const StudioBalanceBeam: React.FC<{
	x: number; y: number; width?: number; range: Range; ticks?: readonly PlotTick[]; weights: readonly {x: number; w: number; label?: string; role?: RoleKey}[];
	pivot: number; barScale?: number; barWidth?: number; gain?: number; maxTilt?: number; pivotLabel?: (v: number) => string;
	slider?: Omit<React.ComponentProps<typeof ParameterSlider>, 'at' | 'out'>; at?: number; out?: number; weightText?: boolean;
}> = ({x, y, width = 1100, range, ticks, weights, pivot, barScale = 600, barWidth = 70, gain = 40, maxTilt = 11, pivotLabel, slider, at = 0, out, weightText = true}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const px = (v: number) => x + ((v - range[0]) / (range[1] - range[0])) * width;
	const span = range[1] - range[0];
	const moment = weights.reduce((s, q) => s + q.w * (q.x - pivot), 0) / span;
	const tilt = Math.max(-maxTilt, Math.min(maxTilt, moment * gain));
	const P = px(pivot), tk = ticks ?? weights.map(q => ({value: q.x, label: String(q.x)}));
	return <>
		<FrameSvg style={{opacity: o}}>
			<g transform={`rotate(${tilt} ${P} ${y})`}>
				{weights.map((q, i) => {
					const R = MATH_ROLES[q.role ?? 'b'], h = q.w * barScale, bx = px(q.x);
					return <g key={i}>
						<rect x={bx - barWidth / 2} y={y - 9 - h} width={barWidth} height={h} rx={6} fill={R.stroke} stroke={R.ink} strokeWidth={2} />
						{weightText && q.label ? <text x={bx} y={y - 22 - h} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: R.ink}}>{q.label}</text> : null}
					</g>;
				})}
				<rect x={x - 20} y={y - 9} width={width + 40} height={18} rx={9} fill={MATH_GRADIENT} />
				{tk.map(t => <g key={t.label}><line x1={px(t.value)} x2={px(t.value)} y1={y + 9} y2={y + 24} stroke={INK} strokeWidth={3} /><text x={px(t.value)} y={y + 58} textAnchor="middle" style={TXT(32, INK, 700)}>{t.label}</text></g>)}
			</g>
			<path d={`M${P},${y + 10} L${P - 46},${y + 92} L${P + 46},${y + 92} Z`} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={4} strokeLinejoin="round" />
			{pivotLabel ? <text x={P} y={y + 140} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: MATH_GRADIENT}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{pivotLabel(pivot)}</text> : null}
			{Math.abs(tilt) < 0.4 ? <text x={P + 64} y={y + 82} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: MATH_GRADIENT}}>level</text> : null}
		</FrameSvg>
		{slider ? <ParameterSlider {...slider} at={at} out={out} /> : null}
	</>;
};
/** The moment-free point of a set of weights: Σ w x / Σ w (the mean when weights are probabilities). */
export const balancePoint = (weights: readonly {x: number; w: number}[]) => weights.reduce((s, q) => s + q.w * q.x, 0) / weights.reduce((s, q) => s + q.w, 0);

// ---------- RunningMeanTrace ----------
/**
 * The running average of a stored sequence against how many values have arrived, with a dashed target line. The
 * count axis is square-root scaled (labelled in counts) so the wild early wobble is visible. `shown` is the
 * number of values in now (drive it with paceCount, the same as any badges or bars).
 */
export const RunningMeanTrace: React.FC<{
	x: number; y: number; width?: number; height?: number; values: readonly number[]; shown: number; target: number; yRange: Range;
	yTicks?: readonly (number | PlotTick)[]; countTicks?: readonly number[]; targetLabel?: string; xLabel?: string; yLabel?: string; role?: RoleKey;
	readout?: {x: number; y: number; width?: number; rows?: (n: number, mean: number) => ReadoutRow[]}; digits?: number; at?: number; out?: number;
}> = ({x, y, width = 1100, height = 560, values, shown, target, yRange, yTicks, countTicks, targetLabel, xLabel = 'number so far', yLabel = 'running average', role = 'a', readout, digits = 2, at = 0, out}) => {
	const N = values.length, k = Math.max(0, Math.min(N, Math.floor(shown)));
	const pre: number[] = [];
	let s = 0;
	for (let i = 0; i < k; i++) {s += values[i]; pre.push(s / (i + 1));}
	const mean = k ? pre[k - 1] : NaN;
	const ct = countTicks ?? [1, 10, 50, 100, 200, 500, 1000, 2000].filter(n => n <= N);
	const R = MATH_ROLES[role];
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={{x: [0, Math.sqrt(N)], y: yRange}} xTicks={ct.map(n => ({value: Math.sqrt(n), label: String(n)}))} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
			{m => <>
				{(() => {const [x0, ty] = m.p(0, target), [x1] = m.p(Math.sqrt(N), target); return <g><line x1={x0} x2={x1} y1={ty} y2={ty} stroke={MATH_GRADIENT} strokeWidth={5} strokeDasharray="16 10" />{targetLabel ? <text x={x1} y={ty - 14} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_GRADIENT}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{targetLabel}</text> : null}</g>;})()}
				<g clipPath={m.clip}><path d={pre.map((v, i) => {const [a, b] = m.p(Math.sqrt(i + 1), v); return `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)}`;}).join(' ')} stroke={R.stroke} strokeWidth={5} fill="none" strokeLinejoin="round" /></g>
				{k ? (() => {const [a, b] = m.p(Math.sqrt(k), mean); return <circle cx={a} cy={b} r={12} fill={R.stroke} stroke={CARD} strokeWidth={4} />;})() : null}
			</>}
		</StudioPlot>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 480} at={at} out={out} rows={readout.rows ? readout.rows(k, mean) : [
			{label: 'how many so far', value: k, digits: 0},
			{label: 'running average', value: k ? mean : 0, text: k ? undefined : '–', digits, role},
		]} /> : null}
	</>;
};

// ---------- DeviationArms ----------
/**
 * Deviations from μ on a number line. Each item's arm runs from μ to x (blue left of μ, amber right), one row per
 * item above the line. At `weightAt` the arms shrink to their weighted lengths |x − μ| P(x); at `stackAt` the
 * weighted arms slide end to end into two stacks on a row below the line, which come out equal (they cancel); at
 * `squareAt` each arm turns into a pale violet square of side |x − μ|, labelled (x − μ)².
 */
export const DeviationArms: React.FC<{
	x: number; y: number; width?: number; range: Range; mu: number; items: readonly {x: number; p: number}[]; ticks?: readonly PlotTick[];
	weightAt?: number; stackAt?: number; squareAt?: number; dur?: number; rowGap?: number; at?: number; out?: number; muLabel?: string;
}> = ({x, y, width = 1100, range, mu, items, ticks, weightAt, stackAt, squareAt, dur = 30, rowGap = 50, at = 0, out, muLabel = 'μ'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const unit = width / (range[1] - range[0]), px = (v: number) => x + (v - range[0]) * unit, M = px(mu);
	const wu = weightAt !== undefined ? prog(f, weightAt, dur) : 0, su = stackAt !== undefined ? prog(f, stackAt, dur) : 0, qu = squareAt !== undefined ? prog(f, squareAt, dur) : 0;
	let leftCum = 0, rightCum = 0;
	const arms = items.map((it, i) => {
		const d = it.x - mu, R = d < 0 ? MATH_ROLES.a : MATH_ROLES.k;
		const len = Math.abs(d) * unit * (1 - wu + wu * it.p);
		const rowY = y - 30 - i * rowGap;
		const stackY = y + 110, start = d < 0 ? M - leftCum : M + rightCum;
		if (d < 0) leftCum += Math.abs(d) * it.p * unit; else rightCum += Math.abs(d) * it.p * unit;
		const ax0 = M + (start - M) * su, ay = rowY + (stackY - rowY) * su;
		const dir = d < 0 ? -1 : 1, x1 = ax0 + dir * len;
		const side = Math.abs(d) * unit * 0.45;
		return <g key={i}>
			<g opacity={1 - qu}>
				<line x1={ax0} x2={x1} y1={ay} y2={ay} stroke={R.stroke} strokeWidth={12} strokeLinecap="round" />
				<circle cx={px(it.x)} cy={y} r={10} fill={R.stroke} opacity={1 - su} />
			</g>
			{qu > 0 ? <g opacity={qu}>
				<rect x={d < 0 ? px(it.x) : M} y={rowY - side} width={Math.abs(d) * unit} height={side} fill={MATH_ROLES.gradient.soft} stroke={MATH_GRADIENT} strokeWidth={3} />
				<text x={(px(it.x) + M) / 2} y={rowY - side / 2 + 12} textAnchor="middle" style={TXT(30, MATH_GRADIENT, 800)}>{`(${fmtNum(d, 1)})²`}</text>
			</g> : null}
		</g>;
	});
	return <FrameSvg style={{opacity: o}}>
		<line x1={x} x2={x + width} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{(ticks ?? []).map(t => <g key={t.label}><line x1={px(t.value)} x2={px(t.value)} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={3} /><text x={px(t.value)} y={y + 46} textAnchor="middle" style={TXT(32, INK, 700)}>{t.label}</text></g>)}
		<line x1={M} x2={M} y1={y - 30 - items.length * rowGap} y2={y + 150} stroke={MATH_GRADIENT} strokeWidth={4} strokeDasharray="10 8" />
		<text x={M} y={y - 46 - items.length * rowGap} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: MATH_GRADIENT}}>{muLabel}</text>
		{arms}
		{su > 0.95 && qu < 0.05 ? <text x={M} y={y + 170} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_GRADIENT}}>{`${fmtNum(leftCum / unit, 2)} = ${fmtNum(rightCum / unit, 2)}`}</text> : null}
	</FrameSvg>;
};

// ---------- SpreadBrackets ----------
/**
 * μ as a violet line with violet dashed brackets [μ − kσ, μ + kσ] stacked above a number line (or over a plot via
 * `map`, value to frame x). Each bracket writes its label ("μ ± σ", "μ ± 2σ") as it opens.
 */
export const SpreadBrackets: React.FC<{
	y: number; mu: number; sigma: number; ks?: readonly number[]; map?: (v: number) => number; x?: number; width?: number; range?: Range;
	at?: number; stagger?: number; out?: number; gap?: number; labels?: (k: number) => string; muLabel?: string; line?: boolean; ticks?: readonly PlotTick[];
}> = ({y, mu, sigma, ks = [1, 2], map, x = 0, width = 1000, range = [0, 1], at = 0, stagger = 24, out, gap = 54, labels = k => (k === 1 ? 'μ ± σ' : `μ ± ${k}σ`), muLabel = 'μ', line = false, ticks = []}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const X = map ?? ((v: number) => x + ((v - range[0]) / (range[1] - range[0])) * width);
	return <FrameSvg style={{opacity: o}}>
		{line ? <line x1={x} x2={x + width} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" /> : null}
		{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={3} /><text x={X(t.value)} y={y + 46} textAnchor="middle" style={TXT(30, INK, 700)}>{t.label}</text></g>)}
		<line x1={X(mu)} x2={X(mu)} y1={y - 20 - ks.length * gap} y2={y} stroke={MATH_GRADIENT} strokeWidth={5} />
		<text x={X(mu)} y={y - 34 - ks.length * gap} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: MATH_GRADIENT}}>{muLabel}</text>
		{ks.map((k, i) => {
			const u = prog(f, at + i * stagger, 20), by = y - 24 - i * gap, half = k * sigma * u;
			const a = X(mu - half), b = X(mu + half);
			return <g key={k} opacity={Math.min(1, u * 3)}>
				<path d={`M${a},${by + 14} V${by} H${b} V${by + 14}`} fill="none" stroke={MATH_GRADIENT} strokeWidth={4.5} strokeDasharray="12 7" />
				{u > 0.85 ? <text x={b + 12} y={by + 12} style={TXT(32, MATH_GRADIENT, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{labels(k)}</text> : null}
			</g>;
		})}
	</FrameSvg>;
};
