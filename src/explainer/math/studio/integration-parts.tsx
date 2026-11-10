// Studio kit pass 2A, decisions 32 and 36 (i01 to i14): integral notation, primitive families, Riemann strips
// and area fills (signed, reverse, trapezium, strip-count slider), accumulation, limits, area flips, horizontal
// strips, the swap reflection, symmetry pairs, plate meters and columns, the particle track and small tools.
// Names that exist in src/explainer/math (PrimitiveFamily, IntegralNotation, DerivativeCheck, DerivativeWheel)
// or were specified earlier as plain parts carry a Studio prefix.
import React, {useId} from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import type {Range} from '../graphs';
import {CARD, CARD_SHADOW, FrameSvg, PlateSpec, SvgPlate, fmtNum, kf, niceNum, smooth, vis} from './primitives';
import {MATH_AMBER, MATH_ANSWER, MATH_DOWN_SOFT, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_ROLES, MATH_TEAL, MATH_UP_SOFT, RoleKey, roleInk} from './roles';
import {LiveReadoutBoard, ParameterSlider, ReadoutRow} from './readouts';
import {PlateReadout, plateMap, usePlatePreload} from './rig';
import {PlotMap, PlotTick, StudioPlot, TXT, assertDerivative, fnPath, integrate, makePlot, regionPath, stepAt} from './plot-core';

const POS_FILL = MATH_UP_SOFT, POS_STROKE = '#1f8a8f', NEG_FILL = MATH_DOWN_SOFT, NEG_STROKE = '#d18f1f';
type Ticks = readonly (number | PlotTick)[];

// ---------- area fill ----------
/**
 * The region between y = fn(x) and the x-axis from a to `to`, as a layer inside a StudioPlot. Signed: teal above
 * the axis, amber below (i07); otherwise one tint. Optional labelled boundary lines at a and b.
 */
export const AreaFillLayer: React.FC<{m: PlotMap; fn: (x: number) => number; a: number; to: number; b?: number; signed?: boolean; color?: string; opacity?: number; bounds?: {a?: string; b?: string; at?: number}; outline?: string}> = ({m, fn, a, to, b, signed = false, color = POS_FILL, opacity = 0.9, bounds, outline}) => {
	const f = useCurrentFrame();
	const id = `af-${useId().replace(/:/g, '')}`;
	const [, ay] = m.p(0, 0);
	const d = to > a ? regionPath(m, fn, a, to) : '';
	const B = b ?? to;
	const lineAt = (X: number, text?: string) => {const [px] = m.p(X, 0); const [, top] = m.p(X, Math.max(m.win.y[0], Math.min(m.win.y[1], fn(X)))); return <g key={'b' + X} opacity={prog(f, bounds?.at ?? 0, 12)}><line x1={px} x2={px} y1={ay} y2={top} stroke={INK} strokeWidth={3} strokeDasharray="8 7" />{text ? <text x={px} y={m.box.top + m.box.height + 40} textAnchor="middle" style={TXT(30, INK, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{text}</text> : null}</g>;};
	return (
		<g>
			<defs>
				<clipPath id={id + 'p'}><rect x={m.box.left} y={m.box.top} width={m.box.width} height={Math.max(0, ay - m.box.top)} /></clipPath>
				<clipPath id={id + 'n'}><rect x={m.box.left} y={ay} width={m.box.width} height={Math.max(0, m.box.top + m.box.height - ay)} /></clipPath>
			</defs>
			<g clipPath={m.clip}>
				{signed ? <>
					<path d={d} fill={POS_FILL} opacity={opacity} clipPath={`url(#${id}p)`} />
					<path d={d} fill={NEG_FILL} opacity={opacity} clipPath={`url(#${id}n)`} />
				</> : <path d={d} fill={color} opacity={opacity} />}
				{outline ? <path d={d} fill="none" stroke={outline} strokeWidth={5} /> : null}
			</g>
			{bounds ? <>{bounds.a !== undefined ? lineAt(a, bounds.a) : null}{bounds.b !== undefined ? lineAt(B, bounds.b) : null}</> : null}
		</g>
	);
};

/** Standalone area fill on its own axes, swept in from a over `sweep` (or fixed). */
export const StudioAreaFill: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; fn: (x: number) => number; a: number; b: number;
	sweep?: {at: number; dur?: number}; signed?: boolean; color?: string; curveColor?: string; bounds?: {a?: string; b?: string; at?: number};
	label?: {X: number; Y: number; text: string; at: number; color?: string}; xTicks?: Ticks; yTicks?: Ticks; xLabel?: string; yLabel?: string; at?: number; out?: number;
	children?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1100, height = 720, window: win, fn, a, b, sweep, signed = false, color, curveColor = INK, bounds, label, xTicks, yTicks, xLabel, yLabel, at = 0, out, children}) => {
	const f = useCurrentFrame();
	const to = sweep ? a + (b - a) * smooth(prog(f, sweep.at, sweep.dur ?? 45)) : b;
	return <StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
		{m => <>
			<AreaFillLayer m={m} fn={fn} a={a} to={to} b={b} signed={signed} color={color} bounds={bounds} />
			<g clipPath={m.clip}><path d={fnPath(m, fn, win.x[0], win.x[1])} stroke={curveColor} strokeWidth={6} fill="none" strokeLinecap="round" /></g>
			{label ? (() => {const [px, py] = m.p(label.X, label.Y); return <text x={px} y={py} textAnchor="middle" opacity={prog(f, label.at, 12)} style={TXT(48, label.color ?? INK, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label.text}</text>;})() : null}
			{children ? children(m) : null}
		</>}
	</StudioPlot>;
};

// ---------- Riemann strips ----------
export type StripRule = 'left' | 'right' | 'mid' | 'sample' | 'trapezium';
/** Heights (or trapezium end heights) of n strips on [a, b] by a rule; `sample` is the fraction across each strip. */
export const stripHeights = (fn: (x: number) => number, a: number, b: number, n: number, rule: StripRule, sample = 0.5) => {
	const dx = (b - a) / n;
	return Array.from({length: n}, (_, i) => {
		const x0 = a + i * dx, x1 = x0 + dx;
		if (rule === 'trapezium') return {x0, x1, h0: fn(x0), h1: fn(x1)};
		const h = rule === 'left' ? fn(x0) : rule === 'right' ? fn(x1) : rule === 'mid' ? fn(x0 + dx / 2) : fn(x0 + sample * dx);
		return {x0, x1, h0: h, h1: h};
	});
};
/** The sum the strips show: Σ height × width (trapezium: the mean of its two edges). Reverse direction negates it. */
export const riemannSum = (fn: (x: number) => number, a: number, b: number, n: number, rule: StripRule, sample = 0.5) =>
	stripHeights(fn, a, b, n, rule, sample).reduce((s, q) => s + ((q.h0 + q.h1) / 2) * (q.x1 - q.x0), 0);

/**
 * Strips as a layer in a StudioPlot. `count` strips are drawn (in order, or right to left when reverse); a
 * doubling from `split.n` to n animates each parent splitting into two (split.p from 0 to 1). Signed: teal above
 * the axis, amber below; reverse: every strip has negative width, so its fill is the opposite sign (amber for
 * f > 0) and a left-pointing width arrow is drawn under it. Slivers: over-estimates amber, under-gaps grey.
 */
export const RiemannLayer: React.FC<{m: PlotMap; fn: (x: number) => number; a: number; b: number; n: number; rule?: StripRule; sample?: number; count?: number;
	direction?: 'forward' | 'reverse'; signed?: boolean; split?: {n: number; p: number}; highlight?: number; slivers?: number; color?: string; arrows?: boolean}> = ({m, fn, a, b, n, rule = 'left', sample, count, direction = 'forward', signed = false, split, highlight, slivers = 0, color, arrows}) => {
	const strips = stripHeights(fn, a, b, n, rule, sample);
	const parents = split && split.n * 2 === n ? stripHeights(fn, a, b, split.n, rule, sample) : null;
	const p = split ? smooth(split.p) : 1;
	const rev = direction === 'reverse';
	const k = Math.max(0, Math.min(n, count ?? n));
	const shown = strips.map((_, i) => (rev ? i >= n - k : i < k));
	const [, ay] = m.p(0, 0);
	return (
		<g clipPath={m.clip}>
			{strips.map((q, i) => {
				if (!shown[i]) return null;
				let h0 = q.h0, h1 = q.h1;
				if (parents && p < 1) {const pr = parents[Math.floor(i / 2)]; const ph0 = rule === 'trapezium' ? pr.h0 + (pr.h1 - pr.h0) * ((q.x0 - pr.x0) / (pr.x1 - pr.x0)) : pr.h0; const ph1 = rule === 'trapezium' ? pr.h0 + (pr.h1 - pr.h0) * ((q.x1 - pr.x0) / (pr.x1 - pr.x0)) : pr.h1; h0 = ph0 + (h0 - ph0) * p; h1 = ph1 + (h1 - ph1) * p;}
				const [x0, y0] = m.p(q.x0, h0), [x1, y1] = m.p(q.x1, h1);
				const mean = (h0 + h1) / 2, posArea = rev ? mean < 0 : mean >= 0;
				const fill = color ?? (signed || rev ? (posArea ? POS_FILL : NEG_FILL) : POS_FILL);
				const stroke = signed || rev ? (posArea ? POS_STROKE : NEG_STROKE) : POS_STROKE;
				const hl = highlight === i;
				return <g key={i}>
					<path d={`M${x0},${ay} L${x0},${y0} L${x1},${y1} L${x1},${ay} Z`} fill={hl ? MATH_ROLES.k.soft : fill} stroke={hl ? MATH_ROLES.k.stroke : stroke} strokeWidth={hl ? 5 : 3} opacity={0.92} />
					{slivers > 0 && rule !== 'trapezium' ? <>
						<path d={regionPath(m, () => h0, q.x0, q.x1, X => Math.min(fn(X), h0))} fill={MATH_ROLES.k.stroke} opacity={0.45 * slivers} />
						<path d={regionPath(m, X => Math.max(fn(X), h0), q.x0, q.x1, () => h0)} fill={MATH_EXCLUDED} opacity={0.4 * slivers} />
					</> : null}
					{(arrows ?? rev) && x1 - x0 > 26 ? <path d={rev ? `M${x1 - 6},${ay + 22} H${x0 + 6} M${x0 + 18},${ay + 12} L${x0 + 6},${ay + 22} L${x0 + 18},${ay + 32}` : `M${x0 + 6},${ay + 22} H${x1 - 6} M${x1 - 18},${ay + 12} L${x1 - 6},${ay + 22} L${x1 - 18},${ay + 32}`} stroke={stroke} strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null}
				</g>;
			})}
		</g>
	);
};

/**
 * Riemann strips over a curve on [a, b] with their own axes: n fixed or stepping by `nKeys` (1, 2, 4, 8 splits
 * animate), rules left, right, mid, sample and trapezium, forward or reverse, signed colours, slivers, a
 * highlighted strip, a sum readout computed from the same heights, and a strip-count stepper.
 */
export const StudioRiemannStrips: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; fn: (x: number) => number; a: number; b: number;
	n?: number; nKeys?: readonly {frame: number; value: number}[]; rule?: StripRule; sample?: number; direction?: 'forward' | 'reverse'; signed?: boolean;
	draw?: {at: number; per?: number}; highlight?: {index: number; at: number; out?: number}; slivers?: {at: number; out?: number};
	readout?: {x: number; y: number; width?: number; label?: React.ReactNode; digits?: number; exact?: {label: React.ReactNode; value: number}};
	stepper?: {x: number; y: number; values: readonly number[]; label?: string};
	curveColor?: string; xTicks?: Ticks; yTicks?: Ticks; xLabel?: string; yLabel?: string; at?: number; out?: number;
	children?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1100, height = 720, window: win, fn, a, b, n: n0 = 4, nKeys, rule = 'left', sample, direction = 'forward', signed = false, draw, highlight, slivers, readout, stepper, curveColor = INK, xTicks, yTicks, xLabel, yLabel, at = 0, out, children}) => {
	const f = useCurrentFrame();
	const n = nKeys ? stepAt(nKeys, f) : n0;
	const lastKey = nKeys ? [...nKeys].reverse().find(k => f >= k.frame) : undefined;
	const prevKey = nKeys && lastKey ? nKeys[nKeys.indexOf(lastKey) - 1] : undefined;
	const split = prevKey ? {n: prevKey.value, p: prog(f, lastKey!.frame, 20)} : undefined;
	const count = draw ? Math.floor(Math.max(0, f - draw.at) / (draw.per ?? 8)) + (f >= draw.at ? 1 : 0) : n;
	const k = Math.min(n, count);
	const strips = stripHeights(fn, a, b, n, rule, sample);
	const rev = direction === 'reverse';
	const drawnSum = strips.reduce((s, q, i) => ((rev ? i >= n - k : i < k) ? s + ((q.h0 + q.h1) / 2) * (q.x1 - q.x0) : s), 0) * (rev ? -1 : 1);
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
			{m => <>
				<RiemannLayer m={m} fn={fn} a={a} b={b} n={n} rule={rule} sample={sample} count={k} direction={direction} signed={signed} split={split} highlight={highlight && vis(f, highlight.at, highlight.out) > 0.5 ? highlight.index : undefined} slivers={slivers ? vis(f, slivers.at, slivers.out) : 0} />
				<g clipPath={m.clip}><path d={fnPath(m, fn, win.x[0], win.x[1])} stroke={curveColor} strokeWidth={6} fill="none" strokeLinecap="round" /></g>
				{children ? children(m) : null}
			</>}
		</StudioPlot>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 520} at={at} out={out} inline rows={[
			{label: 'n', value: n, digits: 0, role: 'a'},
			{label: readout.label ?? (rule === 'trapezium' ? 'Tₙ' : 'sum'), value: drawnSum, digits: readout.digits ?? 4, role: signed && drawnSum < 0 ? 'k' : 'b'},
			...(readout.exact ? [{label: readout.exact.label, value: readout.exact.value, digits: readout.digits ?? 4, role: 'answer' as RoleKey}] : []),
		]} /> : null}
		{stepper ? <StripStepper x={stepper.x} y={stepper.y} values={stepper.values} current={n} label={stepper.label} at={at} out={out} /> : null}
	</>;
};

/** Strip-count stepper: chips for n = 1, 2, 4, 8 with the current one filled (the "slider" for strip counts). */
export const StripStepper: React.FC<{x: number; y: number; values: readonly number[]; current: number; label?: string; at?: number; out?: number}> = ({x, y, values, current, label = 'strips n', at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', alignItems: 'center', gap: 14}}>
		<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: MATH_ROLES.a.ink}}>{label}</span>
		{values.map(v => {const on = v === current; return <span key={v} style={{minWidth: 66, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, padding: '2px 12px', borderRadius: 14, border: `4px solid ${MATH_ROLES.a.stroke}`, background: on ? MATH_ROLES.a.stroke : CARD, color: on ? '#ffffff' : MATH_ROLES.a.ink, fontVariantNumeric: 'tabular-nums'}}>{v}</span>;})}
	</div>;
};

/** Rows of n with left, right and trapezium values and error bars scaled to one shared maximum. */
export const RefinementTable: React.FC<{x: number; y: number; w?: number; exact: number; rows: readonly {n: number; left?: number; right?: number; trap?: number; at: number}[]; digits?: number; at?: number; out?: number; columns?: readonly ('left' | 'right' | 'trap')[]}> = ({x, y, w = 1000, exact, rows, digits = 4, at = 0, out, columns = ['left', 'right', 'trap']}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const maxErr = Math.max(1e-12, ...rows.flatMap(r => columns.map(c => (r[c] === undefined ? 0 : Math.abs(r[c]! - exact)))));
	const head = {left: 'left', right: 'right', trap: 'trapezium'} as const;
	const role = {left: MATH_ROLES.a, right: MATH_ROLES.b, trap: MATH_ROLES.gradient} as const;
	const cols = `110px repeat(${columns.length}, 1fr)`;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, padding: '14px 26px 16px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
		<div style={{display: 'grid', gridTemplateColumns: cols, columnGap: 20, borderBottom: `3px solid ${PAPER_DEEP}`, paddingBottom: 6}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>N</div>
			{columns.map(c => <div key={c} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, textTransform: 'uppercase', color: role[c].ink}}>{head[c]}</div>)}
		</div>
		{rows.map((r, i) => <div key={i} style={{opacity: prog(f, r.at, 12), display: 'grid', gridTemplateColumns: cols, columnGap: 20, alignItems: 'center', padding: '8px 0'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}>{r.n}</div>
			{columns.map(c => {const v = r[c]; if (v === undefined) return <div key={c} />; const e = Math.abs(v - exact); return <div key={c}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: role[c].ink, fontVariantNumeric: 'tabular-nums'}}>{fmtNum(v, digits)}</div>
				<div style={{height: 12, width: `${(e / maxErr) * 100}%`, minWidth: 2, background: role[c].stroke, borderRadius: 6, opacity: 0.8}} />
			</div>;})}
		</div>)}
	</div>;
};

// ---------- notation and checks ----------
/** "+ C" with an amber glow from `at` (use inside IntegralNotation's right side or any working row). */
export const PlusC: React.FC<{at?: number}> = ({at}) => {
	const g = at === undefined ? 0 : vis(useCurrentFrame(), at, undefined, 14);
	return <span style={{color: MATH_AMBER, textShadow: g > 0 ? `0 0 ${14 * g}px rgba(209,143,31,${0.9 * g})` : undefined}}>+ C</span>;
};
/**
 * Integral notation sized to its integrand: ∫ (with optional limits), the integrand in violet, dx upright, and
 * labelled brackets under each part on cues ("integral sign", "integrand", "dx"). Inline, so it works inside
 * WorkingRows and EquationStrip.
 */
export const StudioIntegralNotation: React.FC<{integrand: React.ReactNode; variable?: string; lower?: React.ReactNode; upper?: React.ReactNode; right?: React.ReactNode; size?: number;
	labels?: {sign?: {text: string; at: number}; integrand?: {text: string; at: number}; differential?: {text: string; at: number}}; integrandColor?: string}> = ({integrand, variable = 'x', lower, upper, right, size, labels = {}, integrandColor = MATH_GRADIENT}) => {
	const f = useCurrentFrame();
	const tag = (l?: {text: string; at: number}, row = 0) => l ? <span style={{position: 'absolute', left: '50%', top: `calc(100% + ${row * 44}px)`, transform: 'translateX(-50%)', whiteSpace: 'pre', opacity: prog(f, l.at, 12), textAlign: 'center'}}>
		<svg width="100%" height={14} viewBox="0 0 100 14" preserveAspectRatio="none" style={{display: 'block', minWidth: 60}}><path d="M2,2 Q2,10 12,10 H88 Q98,10 98,2" fill="none" stroke={INK_SOFT} strokeWidth={3} vectorEffect="non-scaling-stroke" /></svg>
		<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK_SOFT}}>{l.text}</span>
	</span> : null;
	return <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.12em', fontSize: size, whiteSpace: 'pre', position: 'relative'}}>
		<span style={{position: 'relative', display: 'inline-flex', alignItems: 'center'}}>
			<span style={{fontSize: '1.55em', lineHeight: 1, fontWeight: 500, transform: 'translateY(-0.04em)'}}>∫</span>
			{lower !== undefined || upper !== undefined ? <span style={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '0.5em', height: '2.4em', marginLeft: '-0.1em'}}><span>{upper}</span><span>{lower}</span></span> : null}
			{tag(labels.sign)}
		</span>
		<span style={{position: 'relative', color: integrandColor}}>{integrand}{tag(labels.integrand, 1)}</span>
		<span style={{position: 'relative', fontStyle: 'normal'}}>d{variable}{tag(labels.differential)}</span>
		{right !== undefined ? <span style={{marginLeft: '0.2em'}}>{right}</span> : null}
	</span>;
};
/** Integration constant that puts F(x) + C through (x, y). */
export const constantThroughPoint = (F: (x: number) => number, point: {x: number; y: number}) => {
	const c = point.y - F(point.x);
	if (!Number.isFinite(c)) throw new RangeError('constantThroughPoint: F must be defined at the point');
	return c;
};
/**
 * The derivative check: an answer row, a violet curved "d/dx" arrow down to a result row, then a green tick.
 * With answerFn and targetFn a numeric model check (central differences at 21 points) runs; a mismatch throws, so
 * a wrong tick cannot render. `expectFail` shows a red cross instead (a numeric mismatch is then required).
 */
export const StudioDerivativeCheck: React.FC<{x: number; y: number; answer: React.ReactNode; result: React.ReactNode; at: number; tickAt: number; gap?: number; size?: number;
	answerFn?: (x: number) => number; targetFn?: (x: number) => number; range?: Range; expectFail?: boolean; failNote?: string; out?: number}> = ({x, y, answer, result, at, tickAt, gap = 150, size = 52, answerFn, targetFn, range = [-2, 2], expectFail = false, failNote, out}) => {
	const f = useCurrentFrame();
	if ((answerFn && !targetFn) || (!answerFn && targetFn)) throw new RangeError('StudioDerivativeCheck: give both numeric callbacks or neither');
	if (answerFn && targetFn) {
		let failed = false;
		try {assertDerivative(answerFn, targetFn, range[0], range[1], 21, 1e-5, 'StudioDerivativeCheck');} catch {failed = true;}
		if (failed !== expectFail) throw new RangeError(expectFail ? 'StudioDerivativeCheck: expected a mismatch but the derivative matches' : 'StudioDerivativeCheck: the answer does not differentiate to the target');
	} else if (expectFail) throw new RangeError('StudioDerivativeCheck: a fail state needs numeric evidence');
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const row = (c: React.ReactNode, top: number, a: number) => <div style={{position: 'absolute', left: x, top, opacity: prog(f, a, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{c}</div>;
	const ax = x - 40, y0 = y + size * 0.62, y1 = y + gap + size * 0.62;
	return <div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
		{row(answer, y, at)}
		{row(result, y + gap, at + 30)}
		<FrameSvg>
			<DrawPath d={`M${ax},${y0} C${ax - 70},${y0 + 20} ${ax - 70},${y1 - 20} ${ax},${y1}`} at={at + 8} dur={20} color={MATH_GRADIENT} width={6} />
			<DrawPath d={`M${ax - 18},${y1 - 14} L${ax},${y1} L${ax - 20},${y1 + 10}`} at={at + 26} dur={6} color={MATH_GRADIENT} width={6} />
			<text x={ax - 64} y={(y0 + y1) / 2 + 14} textAnchor="end" opacity={prog(f, at + 14, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: MATH_GRADIENT}}>d/dx</text>
			{expectFail
				? <g><DrawPath d={`M${x - 140},${y1 - 28} l40,40 M${x - 100},${y1 - 28} l-40,40`} at={tickAt} dur={12} color={MATH_MISTAKE} width={8} /></g>
				: <DrawPath d={`M${x - 150},${y1 + 4} l16,18 l32,-40`} at={tickAt} dur={12} color={MATH_ANSWER} width={8} />}
		</FrameSvg>
		{failNote && expectFail ? <div style={{position: 'absolute', left: x, top: y + gap + size * 1.4, opacity: prog(f, tickAt + 10, 12)}}><HandText text={failNote} at={tickAt + 10} size={42} color={MATH_MISTAKE} /></div> : null}
	</div>;
};

/**
 * The trig derivative wheel: sin x, cos x, −sin x, −cos x round a circle; violet clockwise "d/dx" arrows on the
 * outside and ink anticlockwise "∫" arrows inside, each drawing on its cue and pulsing on demand. Inline SVG
 * (place it in a MemoryAidCard or any box).
 */
export const StudioDerivativeWheel: React.FC<{size?: number; dAt?: readonly number[]; intAt?: readonly number[]; pulse?: {kind: 'd' | 'int'; index: number; at: number}; labelSize?: number}> = ({size = 520, dAt = [], intAt = [], pulse, labelSize = 40}) => {
	const f = useCurrentFrame();
	const c = size / 2, R = size * 0.34;
	const names = ['sin x', 'cos x', '−sin x', '−cos x'];
	const pos = (i: number, r: number) => {const a = -Math.PI / 2 + (i * Math.PI) / 2; return [c + r * Math.cos(a), c + r * Math.sin(a)] as const;};
	const arc = (i: number, r: number, cw: boolean) => {
		const a0 = -Math.PI / 2 + (i * Math.PI) / 2 + (cw ? 0.38 : -0.38), a1 = a0 + (cw ? 1 : -1) * (Math.PI / 2 - 0.76);
		const p0 = [c + r * Math.cos(a0), c + r * Math.sin(a0)], p1 = [c + r * Math.cos(a1), c + r * Math.sin(a1)];
		const tang = a1 + (cw ? Math.PI / 2 : -Math.PI / 2), h = 16;
		return {d: `M${p0[0]},${p0[1]} A${r},${r} 0 0 ${cw ? 1 : 0} ${p1[0]},${p1[1]}`, head: `M${p1[0] - h * Math.cos(tang - 0.5)},${p1[1] - h * Math.sin(tang - 0.5)} L${p1[0]},${p1[1]} L${p1[0] - h * Math.cos(tang + 0.5)},${p1[1] - h * Math.sin(tang + 0.5)}`, mid: [c + r * Math.cos((a0 + a1) / 2), c + r * Math.sin((a0 + a1) / 2)]};
	};
	const pw = (kind: 'd' | 'int', i: number) => (pulse && pulse.kind === kind && pulse.index === i ? 1 + 0.5 * Math.sin(Math.max(0, f - pulse.at) * 0.35) * (1 - prog(f, pulse.at + 40, 20)) * (f >= pulse.at ? 1 : 0) : 1);
	return <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{display: 'block', overflow: 'visible'}}>
		{names.map((n, i) => {const [px, py] = pos(i, R); return <text key={n} x={px} y={py + labelSize * 0.35} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: labelSize, fill: INK}}>{n}</text>;})}
		{[0, 1, 2, 3].map(i => {const g = arc(i, R * 1.18, true), at = dAt[i]; if (at === undefined) return null; return <g key={'d' + i}>
			<DrawPath d={g.d} at={at} dur={16} color={MATH_GRADIENT} width={6 * pw('d', i)} /><DrawPath d={g.head} at={at + 14} dur={6} color={MATH_GRADIENT} width={6 * pw('d', i)} />
			<text x={g.mid[0] + (g.mid[0] - c) * 0.18} y={g.mid[1] + (g.mid[1] - c) * 0.18 + 10} textAnchor="middle" opacity={prog(f, at + 10, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: MATH_GRADIENT}}>d/dx</text>
		</g>;})}
		{[0, 1, 2, 3].map(i => {const g = arc((i + 1) % 4, R * 0.72, false), at = intAt[i]; if (at === undefined) return null; return <g key={'i' + i}>
			<DrawPath d={g.d} at={at} dur={16} color={INK} width={5 * pw('int', i)} /><DrawPath d={g.head} at={at + 14} dur={6} color={INK} width={5 * pw('int', i)} />
			<text x={g.mid[0] - (g.mid[0] - c) * 0.32} y={g.mid[1] - (g.mid[1] - c) * 0.32 + 12} textAnchor="middle" opacity={prog(f, at + 10, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, fill: INK}}>∫</text>
		</g>;})}
	</svg>;
};

// ---------- primitive families ----------
/**
 * Members F(x) + C drawn faint, one bright member at an animated C, violet tangent stubs at listed x on every
 * visible member (all with slope f(x)), an optional given point, an amber slide arrow, amber gap bars between two
 * members and a dashed ghost at an earlier C. f is checked against a central difference of F.
 */
export const StudioPrimitiveFamily: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; F: (x: number) => number; f: (x: number) => number;
	constants: readonly number[]; C: number; label?: (C: number) => string; stubs?: {xs: readonly number[]; at: number; out?: number; halfLength?: number};
	point?: {x: number; y: number; label?: string; at: number}; slide?: {X: number; from: number; to: number; at: number; out?: number};
	gapBars?: {upper: number; lower: number; xs: readonly number[]; label?: string; at: number; out?: number}; ghost?: {C: number; at: number; out?: number};
	membersAt?: number; xTicks?: Ticks; yTicks?: Ticks; xLabel?: string; yLabel?: string; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1100, height = 760, window: win, F, f: fx, constants, C, label, stubs, point, slide, gapBars, ghost, membersAt, xTicks, yTicks, xLabel, yLabel, at = 0, out, children}) => {
	const fr = useCurrentFrame();
	assertDerivative(F, fx, win.x[0] + 0.01, win.x[1] - 0.01, 21, 1e-4, 'StudioPrimitiveFamily f');
	const member = (c: number) => (X: number) => F(X) + c;
	return <StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
		{m => {
			const stub = (X: number, c: number, o: number, key: string) => {const [px, py] = m.p(X, F(X) + c), s = fx(X), vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy), hl = stubs?.halfLength ?? 46; return <line key={key} x1={px - (vx / l) * hl} y1={py - (vy / l) * hl} x2={px + (vx / l) * hl} y2={py + (vy / l) * hl} stroke={MATH_GRADIENT} strokeWidth={5} strokeLinecap="round" opacity={o} />;};
			const so = stubs ? vis(fr, stubs.at, stubs.out) : 0;
			return <>
				<g clipPath={m.clip}>
					{constants.map((c, i) => <path key={'m' + i} d={fnPath(m, member(c), win.x[0], win.x[1])} stroke={INK_SOFT} strokeWidth={3.5} fill="none" opacity={0.55 * vis(fr, (membersAt ?? at) + i * 4)} />)}
					{ghost ? <path d={fnPath(m, member(ghost.C), win.x[0], win.x[1])} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={vis(fr, ghost.at, ghost.out)} /> : null}
					<path d={fnPath(m, member(C), win.x[0], win.x[1])} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" />
					{so > 0 && stubs ? [...constants.map((c, i) => stubs.xs.map(X => stub(X, c, so * 0.55, `s${i}-${X}`))), stubs.xs.map(X => stub(X, C, so, `sb-${X}`))] : null}
				</g>
				{gapBars ? (() => {const go = vis(fr, gapBars.at, gapBars.out); return <g opacity={go} clipPath={m.clip}>{gapBars.xs.map(X => {const [px, p1] = m.p(X, F(X) + gapBars.upper), [, p0] = m.p(X, F(X) + gapBars.lower); return <g key={X}><line x1={px} x2={px} y1={p0} y2={p1} stroke={MATH_ROLES.k.stroke} strokeWidth={8} strokeLinecap="round" /></g>;})}
					{gapBars.label ? (() => {const X = gapBars.xs[gapBars.xs.length - 1]; const [px, p1] = m.p(X, F(X) + (gapBars.upper + gapBars.lower) / 2); return <text x={px + 16} y={p1 + 12} style={TXT(36, MATH_AMBER, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{gapBars.label}</text>;})() : null}</g>;})() : null}
				{slide ? (() => {const so2 = vis(fr, slide.at, slide.out); const [px, p0] = m.p(slide.X, F(slide.X) + slide.from), [, p1] = m.p(slide.X, F(slide.X) + slide.to); const dir = p1 < p0 ? 1 : -1; return <g opacity={so2}><line x1={px} x2={px} y1={p0} y2={p1 + dir * 10} stroke={MATH_ROLES.k.stroke} strokeWidth={6} strokeLinecap="round" /><path d={`M${px - 14},${p1 + dir * 22} L${px},${p1} L${px + 14},${p1 + dir * 22}`} stroke={MATH_ROLES.k.stroke} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>;})() : null}
				{point ? (() => {const [px, py] = m.p(point.x, point.y); return <g opacity={prog(fr, point.at, 12)}><circle cx={px} cy={py} r={13} fill={MATH_ROLES.a.stroke} stroke={CARD} strokeWidth={5} />{point.label ? <text x={px + 20} y={py - 18} style={TXT(34, MATH_ROLES.a.ink, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{point.label}</text> : null}</g>;})() : null}
				{label ? (() => {const X = win.x[1] - (win.x[1] - win.x[0]) * 0.1; const [px, py] = m.p(X, Math.min(win.y[1] * 0.95, F(X) + C)); return <text x={px - 10} y={py - 22} textAnchor="end" style={TXT(42, INK, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label(C)}</text>;})() : null}
				{children ? children(m) : null}
			</>;
		}}
	</StudioPlot>;
};

/**
 * A dashed family y = g(t) + C with one member picked out by a slide marker that settles on the member through a
 * given point (C animated by the caller, usually from C0 to constantThroughPoint(g, point)), plus an optional C slider.
 */
export const ConstantFamilySlider: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; g: (t: number) => number; constants: readonly number[]; C: number;
	point?: {x: number; y: number; label?: string}; markerX?: number; slider?: {x: number; y: number; width?: number; min: number; max: number; ticks: {value: number; label: string}[]; symbol?: string};
	label?: (C: number) => string; xTicks?: Ticks; yTicks?: Ticks; xLabel?: string; yLabel?: string; at?: number; out?: number;
}> = ({x, y, width = 1000, height = 700, window: win, g, constants, C, point, markerX, slider, label, xTicks, yTicks, xLabel = 't', yLabel = 'y', at = 0, out}) => {
	const through = point ? Math.abs(g(point.x) + C - point.y) < 1e-6 : false;
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
			{m => <>
				<g clipPath={m.clip}>
					{constants.map((c, i) => <path key={i} d={fnPath(m, X => g(X) + c, win.x[0], win.x[1])} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="12 10" fill="none" opacity={0.7} />)}
					<path d={fnPath(m, X => g(X) + C, win.x[0], win.x[1])} stroke={through ? MATH_ANSWER : INK} strokeWidth={7} fill="none" strokeLinecap="round" />
				</g>
				{markerX !== undefined ? (() => {const [px, py] = m.p(markerX, g(markerX) + C); return <g><circle cx={px} cy={py} r={16} fill={MATH_ROLES.k.stroke} stroke={CARD} strokeWidth={5} /><path d={`M${px},${py - 60} V${py - 24} M${px - 12},${py - 36} L${px},${py - 22} L${px + 12},${py - 36} M${px},${py + 60} V${py + 24} M${px - 12},${py + 36} L${px},${py + 22} L${px + 12},${py + 36}`} stroke={MATH_ROLES.k.stroke} strokeWidth={5} fill="none" strokeLinecap="round" opacity={through ? 0 : 1} /></g>;})() : null}
				{point ? (() => {const [px, py] = m.p(point.x, point.y); return <g><circle cx={px} cy={py} r={14} fill={through ? MATH_ANSWER : MATH_ROLES.a.stroke} stroke={CARD} strokeWidth={5} />{point.label ? <text x={px + 20} y={py - 20} style={TXT(34, MATH_ROLES.a.ink, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{point.label}</text> : null}</g>;})() : null}
				{label ? (() => {const X = win.x[1] - (win.x[1] - win.x[0]) * 0.08; const [px, py] = m.p(X, Math.min(win.y[1] * 0.95, g(X) + C)); return <text x={px - 8} y={py - 22} textAnchor="end" style={TXT(42, through ? MATH_ANSWER : INK, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label(C)}</text>;})() : null}
			</>}
		</StudioPlot>
		{slider ? <ParameterSlider x={slider.x} y={slider.y} width={slider.width ?? 520} symbol={slider.symbol ?? 'C'} role="k" value={C} min={slider.min} max={slider.max} ticks={slider.ticks} at={at} out={out} /> : null}
	</>;
};

// ---------- two-piece tracer ----------
/**
 * Primitives on two (or more) domain pieces, each with its own constant: the upper plot shows F_i(x) + C_i on each
 * piece, the lower plot shows f. A riding tangent sweeps one piece, lifts off, and sweeps the next (sweeps never
 * interpolate across an excluded value); the lower trace draws along each swept piece. Optional amber C sliders.
 */
export const TwoPieceTracer: React.FC<{
	x: number; y: number; width?: number; heightTop?: number; heightBottom?: number; gap?: number; windowX: Range; yTop: Range; yBottom: Range;
	pieces: readonly {from: number; to: number; F: (x: number) => number; f: (x: number) => number}[]; cs: readonly number[];
	sweeps: readonly {piece: number; from: number; to: number; start: number; end: number}[];
	excluded?: readonly number[]; sliders?: readonly {x: number; y: number; width?: number; min: number; max: number; ticks: {value: number; label: string}[]; symbol?: string}[];
	xTicks?: Ticks; yTopTicks?: Ticks; yBottomTicks?: Ticks; topLabel?: string; bottomLabel?: string; at?: number; out?: number;
}> = ({x, y, width = 1000, heightTop = 440, heightBottom = 360, gap = 10, windowX, yTop, yBottom, pieces, cs, sweeps, excluded = [], sliders = [], xTicks, yTopTicks, yBottomTicks, topLabel = 'y = F(x) + C', bottomLabel = 'f(x)', at = 0, out}) => {
	const f = useCurrentFrame();
	const active = sweeps.find(s => f >= s.start && f <= s.end);
	const riderX = active ? active.from + (active.to - active.from) * smooth((f - active.start) / Math.max(1, active.end - active.start)) : NaN;
	const traced = (i: number): Range | null => {
		const done = sweeps.filter(s => s.piece === i && f > s.end), cur = active && active.piece === i ? active : null;
		const xs = [...done.flatMap(s => [s.from, s.to]), ...(cur ? [cur.from, riderX] : [])];
		return xs.length ? [Math.min(...xs), Math.max(...xs)] : null;
	};
	const y2 = y + heightTop + gap;
	const breaksPad = (pc: {from: number; to: number}): Range => [Math.max(windowX[0], pc.from + 1e-4), Math.min(windowX[1], pc.to - 1e-4)];
	return <>
		<StudioPlot x={x} y={y} width={width} height={heightTop} window={{x: windowX, y: yTop}} xTicks={xTicks} yTicks={yTopTicks} yLabel={topLabel} at={at} out={out}>
			{m => <g clipPath={m.clip}>
				{excluded.map(e => {const [px] = m.p(e, 0); return <line key={e} x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_EXCLUDED} strokeWidth={3} strokeDasharray="10 9" />;})}
				{pieces.map((pc, i) => {const [a0, b0] = breaksPad(pc); return <path key={i} d={fnPath(m, X => pc.F(X) + (cs[i] ?? 0), a0, b0)} stroke={INK} strokeWidth={6.5} fill="none" strokeLinecap="round" />;})}
				{active ? (() => {const pc = pieces[active.piece], Yv = pc.F(riderX) + (cs[active.piece] ?? 0), [px, py] = m.p(riderX, Yv), s = pc.f(riderX), vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy), hl = 140; return <g><line x1={px - (vx / l) * hl} y1={py - (vy / l) * hl} x2={px + (vx / l) * hl} y2={py + (vy / l) * hl} stroke={MATH_GRADIENT} strokeWidth={6} strokeLinecap="round" /><circle cx={px} cy={py} r={13} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={5} /></g>;})() : null}
			</g>}
		</StudioPlot>
		<StudioPlot x={x} y={y2} width={width} height={heightBottom} window={{x: windowX, y: yBottom}} xTicks={xTicks} yTicks={yBottomTicks} yLabel={bottomLabel} at={at} out={out}>
			{m => <g clipPath={m.clip}>
				{excluded.map(e => {const [px] = m.p(e, 0); return <line key={e} x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_EXCLUDED} strokeWidth={3} strokeDasharray="10 9" />;})}
				{pieces.map((pc, i) => {const tr = traced(i); if (!tr || !(tr[1] > tr[0])) return null; return <path key={i} d={fnPath(m, pc.f, tr[0], tr[1])} stroke={MATH_GRADIENT} strokeWidth={6} fill="none" strokeLinecap="round" />;})}
				{active ? (() => {const [px, py] = m.p(riderX, pieces[active.piece].f(riderX)); return <circle cx={px} cy={py} r={12} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={4} />;})() : null}
			</g>}
		</StudioPlot>
		{sliders.map((s, i) => <ParameterSlider key={i} x={s.x} y={s.y} width={s.width ?? 420} symbol={s.symbol ?? `C${['₁', '₂', '₃'][i] ?? ''}`} role="k" value={cs[i] ?? 0} min={s.min} max={s.max} ticks={s.ticks} at={at} out={out} />)}
	</>;
};

// ---------- accumulation ----------
export type AccumState = {x: number; A: number; f: number};
/**
 * The accumulation tracer: the lower panel shows f with the signed fill from a to the marker x; the upper panel
 * shows the author-supplied A(x) (traced to the marker, or whole), with dots dropped at listed x. An edge strip
 * [x, x + h] on f pairs with the chord on A and the quotient readout. f is checked against a central difference of A.
 * A linked ParameterSlider can carry clock-time tick labels; onValue drives plate readouts from the same state.
 */
export const StudioAccumulationTracer: React.FC<{
	x: number; y: number; width?: number; heightTop?: number; heightBottom?: number; gap?: number; windowX: Range; yTop: Range; yBottom: Range;
	A: (x: number) => number; f: (x: number) => number; a: number; keys: readonly {frame: number; x: number}[];
	drawUpper?: 'trace' | 'full'; dots?: readonly number[]; edgeStrip?: {h: number; at: number; out?: number};
	readout?: {x: number; y: number; width?: number; labels?: {A?: React.ReactNode; f?: React.ReactNode; x?: React.ReactNode}; digits?: number; xText?: (x: number) => string};
	slider?: {x: number; y: number; width?: number; min: number; max: number; ticks: {value: number; label: string}[]; symbol?: string};
	onValue?: (s: AccumState) => React.ReactNode;
	xTicks?: Ticks; yTopTicks?: Ticks; yBottomTicks?: Ticks; topLabel?: string; bottomLabel?: string; xLabel?: string; at?: number; out?: number;
}> = ({x, y, width = 1000, heightTop = 420, heightBottom = 380, gap = 10, windowX, yTop, yBottom, A, f: fx, a, keys, drawUpper = 'trace', dots = [], edgeStrip, readout, slider, onValue, xTicks, yTopTicks, yBottomTicks, topLabel = 'A(x)', bottomLabel = 'f(x)', xLabel = 'x', at = 0, out}) => {
	const fr = useCurrentFrame();
	assertDerivative(A, fx, windowX[0] + 1e-3, windowX[1] - 1e-3, 101, 1e-4, 'StudioAccumulationTracer');
	const X = kf(fr, keys.map(k => [k.frame, k.x] as const));
	const st: AccumState = {x: X, A: A(X), f: fx(X)};
	const eo = edgeStrip ? vis(fr, edgeStrip.at, edgeStrip.out) : 0;
	const y2 = y + heightTop + gap;
	const top = makePlot(x, y, width, heightTop, {x: windowX, y: yTop});
	const passed = (d: number) => (d - a) * (X - d) >= 0 && Math.abs(X - a) >= Math.abs(d - a) - 1e-9;
	return <>
		<StudioPlot x={x} y={y} width={width} height={heightTop} window={{x: windowX, y: yTop}} xTicks={[]} yTicks={yTopTicks} xLabel="" yLabel={topLabel} at={at} out={out}>
			{m => <>
				<g clipPath={m.clip}>
					<path d={fnPath(m, A, drawUpper === 'full' ? windowX[0] : Math.min(a, X), drawUpper === 'full' ? windowX[1] : Math.max(a, X))} stroke={INK} strokeWidth={6.5} fill="none" strokeLinecap="round" />
					{eo > 0 && edgeStrip ? (() => {const [p0x, p0y] = m.p(X, A(X)), [p1x, p1y] = m.p(X + edgeStrip.h, A(X + edgeStrip.h)); const vx = p1x - p0x, vy = p1y - p0y, l = Math.hypot(vx, vy) || 1; return <g opacity={eo}><line x1={p0x - (vx / l) * 120} y1={p0y - (vy / l) * 120} x2={p1x + (vx / l) * 120} y2={p1y + (vy / l) * 120} stroke={MATH_ROLES.k.stroke} strokeWidth={5} /><circle cx={p1x} cy={p1y} r={10} fill={MATH_ROLES.k.stroke} /></g>;})() : null}
				</g>
				{dots.filter(passed).map(d => {const [px, py] = m.p(d, A(d)); return <circle key={d} cx={px} cy={py} r={11} fill={MATH_ROLES.a.stroke} stroke={CARD} strokeWidth={4} />;})}
				{(() => {const [px, py] = m.p(X, A(X)); return <circle cx={px} cy={py} r={13} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={5} />;})()}
			</>}
		</StudioPlot>
		<StudioPlot x={x} y={y2} width={width} height={heightBottom} window={{x: windowX, y: yBottom}} xTicks={xTicks} yTicks={yBottomTicks} xLabel={xLabel} yLabel={bottomLabel} at={at} out={out}>
			{m => <>
				<AreaFillLayer m={m} fn={fx} a={Math.min(a, X)} to={Math.max(a, X)} signed />
				<g clipPath={m.clip}><path d={fnPath(m, fx, windowX[0], windowX[1])} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" /></g>
				{eo > 0 && edgeStrip ? (() => {const [x0, y0] = m.p(X, fx(X)), [x1] = m.p(X + edgeStrip.h, 0), [, ay] = m.p(0, 0); return <rect x={Math.min(x0, x1)} y={Math.min(y0, ay)} width={Math.abs(x1 - x0)} height={Math.abs(ay - y0)} fill={MATH_ROLES.k.soft} stroke={MATH_ROLES.k.stroke} strokeWidth={4} opacity={eo} />;})() : null}
				{(() => {const [px, py] = m.p(X, fx(X)), [, ay] = m.p(0, 0); return <g><line x1={px} x2={px} y1={ay} y2={py} stroke={MATH_GRADIENT} strokeWidth={4} /><circle cx={px} cy={py} r={11} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={4} /></g>;})()}
			</>}
		</StudioPlot>
		<FrameSvg style={{opacity: vis(fr, at, out, 14)}}>{(() => {const [px, py] = top.pf(X, Math.max(yTop[0], Math.min(yTop[1], A(X)))), [, qy] = makePlot(x, y2, width, heightBottom, {x: windowX, y: yBottom}).pf(X, fx(X)); return <line x1={px} y1={py} x2={px} y2={qy} stroke={MATH_GRADIENT} strokeWidth={3} strokeDasharray="6 9" opacity={0.7} />;})()}</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 520} at={at} out={out} inline rows={[
			{label: readout.labels?.x ?? 'x', value: X, text: readout.xText ? readout.xText(X) : undefined, digits: 2, role: 'a'},
			{label: readout.labels?.f ?? 'f(x)', value: st.f, digits: readout.digits ?? 2, role: 'gradient'},
			{label: readout.labels?.A ?? 'A(x)', value: st.A, digits: readout.digits ?? 2, role: 'b'},
			...(edgeStrip && eo > 0 ? [{label: 'chord gradient', value: (A(X + edgeStrip.h) - A(X)) / edgeStrip.h, digits: 3, role: 'k' as RoleKey}] : []),
		]} /> : null}
		{slider ? <ParameterSlider x={slider.x} y={slider.y} width={slider.width ?? 520} symbol={slider.symbol ?? 'x'} role="a" value={X} min={slider.min} max={slider.max} ticks={slider.ticks} at={at} out={out} /> : null}
		{onValue ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>{onValue(st)}</div> : null}
	</>;
};

/**
 * Changing the lower limit: the accumulated curve for the original start (dashed ghost) and the curve for the new
 * start, which slides by the author-supplied constant `shift` between `at` and `at + duration`; tangents at
 * `tangentAt` on both stay parallel (slope f there) with a readout; a caption swaps ("since 9 am" to "since 10 am").
 */
export const StudioLowerLimitDial: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; A: (x: number) => number; f: (x: number) => number; shift: number;
	at: number; duration?: number; tangentAt?: number; caption?: {x: number; y: number; from: string; to: string}; xTicks?: Ticks; yTicks?: Ticks; xLabel?: string; yLabel?: string; out?: number;
}> = ({x, y, width = 1000, height = 720, window: win, A, f: fx, shift, at, duration = 40, tangentAt, caption, xTicks, yTicks, xLabel, yLabel, out}) => {
	const fr = useCurrentFrame();
	const p = smooth(prog(fr, at, duration));
	const s = shift * p;
	const tan = (m: PlotMap, c: number, color: string, key: string) => {if (tangentAt === undefined) return null; const [px, py] = m.p(tangentAt, A(tangentAt) + c), sl = fx(tangentAt), vx = m.sx, vy = -sl * m.sy, l = Math.hypot(vx, vy), hl = 150; return <g key={key}><line x1={px - (vx / l) * hl} y1={py - (vy / l) * hl} x2={px + (vx / l) * hl} y2={py + (vy / l) * hl} stroke={color} strokeWidth={5.5} strokeLinecap="round" /><circle cx={px} cy={py} r={11} fill={color} stroke={CARD} strokeWidth={4} /></g>;};
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at - 30} out={out}>
			{m => <g clipPath={m.clip}>
				<path d={fnPath(m, A, win.x[0], win.x[1])} stroke={MATH_EXCLUDED} strokeWidth={4.5} strokeDasharray="12 10" fill="none" opacity={p > 0 ? 1 : 0} />
				<path d={fnPath(m, X => A(X) + s, win.x[0], win.x[1])} stroke={INK} strokeWidth={6.5} fill="none" strokeLinecap="round" />
				{tan(m, 0, MATH_EXCLUDED, 'g')}{tan(m, s, MATH_GRADIENT, 'n')}
			</g>}
		</StudioPlot>
		{caption ? <div style={{position: 'absolute', left: caption.x, top: caption.y, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: MATH_ROLES.k.ink, whiteSpace: 'pre'}}>
			<span style={{opacity: 1 - p}}>{caption.from}</span><span style={{position: 'absolute', left: 0, top: 0, opacity: p}}>{caption.to}</span>
		</div> : null}
		{tangentAt !== undefined ? <LiveReadoutBoard x={x + width + 20} y={y + 60} width={420} at={at} out={out} rows={[{label: `gradient at x = ${niceNum(tangentAt)}`, value: fx(tangentAt), role: 'gradient'}, {label: 'curves differ by', value: s, role: 'k'}]} /> : null}
	</>;
};

/**
 * Substituting the limits: F(b), then "−", then an amber bracket that draws before F(a) is written into it; the
 * number's own sign is violet; on `collapseAt` "− (−" collapses into "+" with a pulse.
 */
export const StudioLimitSubstitution: React.FC<{x: number; y: number; size?: number; prefix?: React.ReactNode; upper: React.ReactNode; lowerSign?: '−' | ''; lowerBody: React.ReactNode;
	at: number; minusAt?: number; bracketAt: number; lowerAt: number; collapseAt?: number; then?: {content: React.ReactNode; at: number}; out?: number}> = ({x, y, size = 52, prefix, upper, lowerSign = '', lowerBody, at, minusAt, bracketAt, lowerAt, collapseAt, then, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const c = collapseAt !== undefined && lowerSign === '−' ? smooth(prog(f, collapseAt, 16)) : 0;
	const pulse = collapseAt !== undefined ? Math.sin(Math.PI * Math.min(1, Math.max(0, (f - collapseAt) / 24))) : 0;
	const gone = (w: string): React.CSSProperties => ({display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', maxWidth: c > 0 ? `calc(${w} * ${1 - c})` : undefined, opacity: 1 - c});
	const reveal = (a: number): React.CSSProperties => {const p = smooth(prog(f, a, 16)); return {clipPath: p >= 1 ? undefined : `inset(-30% ${100 - p * 100}% -30% -4%)`, display: 'inline-block'};};
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre', display: 'flex', alignItems: 'baseline'}}>
		{prefix ? <span>{prefix} </span> : null}
		<span style={{...reveal(at), color: MATH_ROLES.a.ink}}>{upper}</span>
		<span style={{opacity: prog(f, minusAt ?? at + 10, 10)}}>{' '}</span>
		<span style={{position: 'relative', display: 'inline-block', opacity: prog(f, minusAt ?? at + 10, 10)}}>
			<span style={{opacity: 1 - c}}>−{' '}</span>
			{c > 0 ? <span style={{position: 'absolute', left: 0, top: 0, opacity: c, color: INK, transform: `scale(${1 + 0.35 * pulse})`, transformOrigin: '30% 55%'}}>+</span> : null}
		</span>
		<span style={{color: MATH_AMBER, opacity: prog(f, bracketAt, 10) * (lowerSign === '−' ? 1 - c : 1), ...(lowerSign === '−' ? gone('0.5em') : {})}}>(</span>
		{lowerSign ? <span style={{...gone('0.7em'), color: MATH_GRADIENT, ...(c > 0 ? {} : reveal(lowerAt))}}>{lowerSign}</span> : null}
		<span style={{...reveal(lowerAt + 4), color: MATH_ROLES.k.ink}}>{lowerBody}</span>
		<span style={{color: MATH_AMBER, opacity: prog(f, bracketAt, 10) * (lowerSign === '−' ? 1 - c : 1), ...(lowerSign === '−' ? gone('0.5em') : {})}}>)</span>
		{then ? <span style={{...reveal(then.at), marginLeft: '0.3em'}}>{then.content}</span> : null}
	</div>;
};

// ---------- area flip ----------
/**
 * A region below the axis folds up about the x-axis (axis 'x'), or a region left of the y-axis folds across it
 * (axis 'y': fn is x = g(y) on [a, b] in y), through flat, into its mirror; its label changes sign at half way,
 * the flipped region gets an amber outline, and a dashed ghost shows the flipped boundary. The curve stays.
 */
export const StudioAreaFlip: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; fn: (t: number) => number; a: number; b: number; axis?: 'x' | 'y';
	flipAt: number; dur?: number; label?: {at: [number, number]; before: string; after: string}; curveColor?: string; extraCurves?: readonly {fn: (x: number) => number; color?: string}[];
	xTicks?: Ticks; yTicks?: Ticks; xLabel?: string; yLabel?: string; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1000, height = 720, window: win, fn, a, b, axis = 'x', flipAt, dur = 26, label, curveColor = INK, extraCurves = [], xTicks, yTicks, xLabel, yLabel, at = 0, out, children}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, flipAt, dur));
	const k = 1 - 2 * p;
	return <StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
		{m => {
			const N = 140;
			const pt = (t: number, v: number) => (axis === 'x' ? m.p(t, v) : m.p(v, t));
			let d = '';
			for (let i = 0; i <= N; i++) {const t = a + ((b - a) * i) / N; const [px, py] = pt(t, k * fn(t)); d += `${i ? 'L' : 'M'}${px},${py} `;}
			for (let i = N; i >= 0; i--) {const t = a + ((b - a) * i) / N; const [px, py] = pt(t, 0); d += `L${px},${py} `;}
			d += 'Z';
			let ghost = '';
			for (let i = 0; i <= N; i++) {const t = a + ((b - a) * i) / N; const [px, py] = pt(t, -fn(t)); ghost += `${i ? 'L' : 'M'}${px},${py} `;}
			let curve = '';
			const span = axis === 'x' ? win.x : win.y;
			for (let i = 0; i <= 260; i++) {const t = span[0] + ((span[1] - span[0]) * i) / 260; const v = fn(t); if (!Number.isFinite(v)) continue; const [px, py] = pt(t, v); curve += `${curve ? 'L' : 'M'}${px},${py} `;}
			const after = p > 0.5;
			return <>
				<g clipPath={m.clip}>
					<path d={d} fill={after ? POS_FILL : NEG_FILL} opacity={0.92} stroke={after ? MATH_ROLES.k.stroke : 'none'} strokeWidth={5} />
					<path d={ghost} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={p > 0 ? 0.9 : 0} />
					{extraCurves.map((c, i) => <path key={i} d={fnPath(m, c.fn, win.x[0], win.x[1])} stroke={c.color ?? INK_SOFT} strokeWidth={5} fill="none" />)}
					<path d={curve} stroke={curveColor} strokeWidth={6.5} fill="none" strokeLinecap="round" />
				</g>
				{label ? (() => {const [lx, ly] = m.p(label.at[0], label.at[1] * (axis === 'x' ? (after ? -1 : 1) : 1)); const lx2 = axis === 'y' && after ? m.p(-label.at[0], label.at[1])[0] : lx; return <text x={lx2} y={ly} textAnchor="middle" style={TXT(48, after ? MATH_TEAL : MATH_AMBER, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke" opacity={Math.abs(k) < 0.3 ? 0.3 : 1}>{after ? label.after : label.before}</text>;})() : null}
				{children ? children(m) : null}
			</>;
		}}
	</StudioPlot>;
};

// ---------- horizontal strips ----------
/**
 * n strips stacked from y = c to y = d, each from x = 0 to x = g(y), signed by the sign of g(y); n can step with
 * `nKeys` (each strip splits in two); `level` shows only strips below a rising level (layers rising with linked
 * readouts); `plateClip` clips the fill to a plate's measured profile polygon (file pixels) such as water in a
 * cutaway. The readout is Σ g(y)Δy of the drawn strips.
 */
export const StudioHorizontalStrips: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; g: (y: number) => number; c: number; d: number;
	n?: number; nKeys?: readonly {frame: number; value: number}[]; level?: number; signed?: boolean;
	plateClip?: {plate: PlateSpec; x: number; y: number; w: number; polygon: readonly (readonly [number, number])[]; drawPlate?: boolean};
	readout?: {x: number; y: number; width?: number; label?: React.ReactNode; digits?: number; unit?: string}; curveColor?: string; bare?: boolean;
	xTicks?: Ticks; yTicks?: Ticks; xLabel?: string; yLabel?: string; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1000, height = 720, window: win, g, c, d, n: n0 = 4, nKeys, level, signed = true, plateClip, readout, curveColor = INK, bare = false, xTicks, yTicks, xLabel, yLabel, at = 0, out, children}) => {
	const f = useCurrentFrame();
	usePlatePreload(plateClip && plateClip.drawPlate !== false ? [plateClip.plate.src] : []);
	const cid = `hs-${useId().replace(/:/g, '')}`;
	const n = nKeys ? stepAt(nKeys, f) : n0;
	const dy = (d - c) / n;
	const top = level === undefined ? d : Math.max(c, Math.min(d, level));
	const strips = Array.from({length: n}, (_, i) => ({y0: c + i * dy, y1: c + (i + 1) * dy, w: g(c + (i + 0.5) * dy)})).filter(s => s.y0 < top - 1e-9);
	const sum = strips.reduce((s, q) => s + q.w * (Math.min(q.y1, top) - q.y0), 0);
	const pm = plateClip ? plateMap(plateClip.plate, plateClip.x, plateClip.y, plateClip.w) : null;
	return <>
		{plateClip && plateClip.drawPlate !== false ? <FrameSvg style={{opacity: vis(f, at, out, 14)}}><SvgPlate plate={plateClip.plate} x={plateClip.x} y={plateClip.y} w={plateClip.w} /></FrameSvg> : null}
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} bare={bare} at={at} out={out}>
			{m => <>
				{pm ? <defs><clipPath id={cid}><path d={plateClip!.polygon.map((q, i) => {const [fx0, fy0] = pm.at(q[0], q[1]); return `${i ? 'L' : 'M'}${fx0 - x},${fy0 - y}`;}).join(' ') + ' Z'} /></clipPath></defs> : null}
				<g clipPath={m.clip}><g clipPath={pm ? `url(#${cid})` : undefined}>
					{strips.map((s, i) => {const [x0, y0] = m.p(0, s.y0), [x1, y1] = m.p(s.w, Math.min(s.y1, top)); const pos = !signed || s.w >= 0; return <rect key={i} x={Math.min(x0, x1)} y={y1} width={Math.abs(x1 - x0)} height={y0 - y1} fill={pos ? POS_FILL : NEG_FILL} stroke={pos ? POS_STROKE : NEG_STROKE} strokeWidth={3} opacity={0.92} />;})}
				</g>
				{(() => {let dd = ''; for (let i = 0; i <= 240; i++) {const Y = win.y[0] + ((win.y[1] - win.y[0]) * i) / 240; const X = g(Y); if (!Number.isFinite(X)) continue; const [px, py] = m.p(X, Y); dd += `${dd ? 'L' : 'M'}${px},${py} `;} return <path d={dd} stroke={curveColor} strokeWidth={6} fill="none" strokeLinecap="round" />;})()}
				</g>
				{level !== undefined ? (() => {const [, ly] = m.p(0, top); return <line x1={m.box.left} x2={m.box.left + m.box.width} y1={ly} y2={ly} stroke={MATH_ROLES.a.stroke} strokeWidth={3} strokeDasharray="10 8" />;})() : null}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 520} at={at} out={out} inline rows={[
			{label: 'strips n', value: n, digits: 0, role: 'a'},
			{label: readout.label ?? 'Σ g(y) Δy', value: sum, digits: readout.digits ?? 3, unit: readout.unit, role: 'b'},
		]} /> : null}
	</>;
};

// ---------- swap reflection ----------
export type SwapElement =
	| {kind: 'curve'; fn: (x: number) => number; domain: Range; color?: string; width?: number; dash?: string}
	| {kind: 'fill'; fn: (x: number) => number; a: number; b: number; color?: string}
	| {kind: 'strip'; x0: number; x1: number; h: number; color?: string}
	| {kind: 'label'; X: number; Y: number; text: string; color?: string; size?: number}
	| {kind: 'point'; X: number; Y: number; color?: string};
/**
 * Swapping x and y: the dashed line y = x draws, then every element of the graph layer (curves, fills, strips,
 * labels and points) moves along its perpendicular to y = x to its reflected position, with a short ghost trail;
 * the axis names swap. Requires equal axis units (throws otherwise).
 */
export const StudioSwapReflection: React.FC<{x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; elements: readonly SwapElement[]; mirrorAt: number; swapAt: number; dur?: number; xTicks?: Ticks; yTicks?: Ticks; at?: number; out?: number}> = ({x, y, width = 900, height = 840, window: win, elements, mirrorAt, swapAt, dur = 45, xTicks, yTicks, at = 0, out}) => {
	const f = useCurrentFrame();
	const m0 = makePlot(x, y, width, height, win);
	if (Math.abs(m0.sx - m0.sy) / m0.sx > 0.02) throw new RangeError('StudioSwapReflection: equal axis units required (match the window aspect to width − 126 by height − 120)');
	const P = smooth(prog(f, swapAt, dur));
	const swapped = P > 0.5;
	return <StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={swapped ? 'y' : 'x'} yLabel={swapped ? 'x' : 'y'} at={at} out={out}>
		{m => {
			const layer = (s: number, op: number, key: string) => {
				const q = (X: number, Y: number) => m.p((1 - s) * X + s * Y, (1 - s) * Y + s * X);
				return <g key={key} opacity={op}>{elements.map((e, i) => {
					if (e.kind === 'curve' || e.kind === 'fill') {
						const [a, b] = e.kind === 'curve' ? e.domain : [e.a, e.b];
						const pts: string[] = [];
						for (let k = 0; k <= 200; k++) {const X = a + ((b - a) * k) / 200, Y = e.fn(X); if (Number.isFinite(Y)) {const [px, py] = q(X, Y); pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);}}
						if (e.kind === 'curve') return <path key={i} d={'M' + pts.join(' L')} stroke={e.color ?? INK} strokeWidth={e.width ?? 6} strokeDasharray={e.dash} fill="none" strokeLinecap="round" />;
						const [ba] = q(b, 0), [, bb] = q(b, 0), [aa, ab] = q(a, 0);
						return <path key={i} d={'M' + pts.join(' L') + ` L${ba},${bb} L${aa},${ab} Z`} fill={e.color ?? POS_FILL} opacity={0.85} />;
					}
					if (e.kind === 'strip') {const c4 = [q(e.x0, 0), q(e.x0, e.h), q(e.x1, e.h), q(e.x1, 0)]; return <path key={i} d={`M${c4.map(p => p.join(',')).join(' L')} Z`} fill={e.color ?? MATH_ROLES.k.soft} stroke={MATH_ROLES.k.stroke} strokeWidth={3} />;}
					if (e.kind === 'point') {const [px, py] = q(e.X, e.Y); return <circle key={i} cx={px} cy={py} r={12} fill={e.color ?? MATH_GRADIENT} stroke={CARD} strokeWidth={4} />;}
					const [px, py] = q(e.X, e.Y);
					return <text key={i} x={px} y={py} textAnchor="middle" style={TXT(e.size ?? 38, e.color ?? INK, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{e.text}</text>;
				})}</g>;
			};
			const lo = Math.max(win.x[0], win.y[0]), hi = Math.min(win.x[1], win.y[1]);
			const [a0, a1] = m.p(lo, lo), [b0, b1] = m.p(hi, hi);
			const moving = P > 0 && P < 1;
			return <g clipPath={m.clip}>
				<line x1={a0} y1={a1} x2={b0 + (a0 - b0) * (1 - smooth(prog(f, mirrorAt, 20)))} y2={b1 + (a1 - b1) * (1 - smooth(prog(f, mirrorAt, 20)))} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="4 10" strokeLinecap="round" />
				{moving ? <>{layer(Math.max(0, P - 0.16), 0.12, 'g2')}{layer(Math.max(0, P - 0.08), 0.25, 'g1')}</> : null}
				{layer(P, 1, 'main')}
			</g>;
		}}
	</StudioPlot>;
};

// ---------- symmetry pairs ----------
/**
 * Odd and even symmetry on [−h, h]: in 'odd' mode the right half's region turns 180° about the origin onto the
 * left; in 'even' mode the left half reflects across the y-axis. Pairs of strips at ±x then light in turn with
 * readouts "+s" and "−s" (odd) or "+s" and "+s" (even); a slice transfer lifts the strip at x and drops it at −x.
 * Plate-aligned mode draws on a plate's measured axes (origin and units in file pixels) instead of plotted axes.
 * Optional cut, fill and net readouts are integrals of the same function.
 */
export const StudioSymmetryPairs: React.FC<{
	fn: (x: number) => number; h: number; mode: 'odd' | 'even'; turnAt?: number; dur?: number;
	plot?: {x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; xTicks?: Ticks; yTicks?: Ticks};
	plate?: {plate: PlateSpec; x: number; y: number; w: number; origin: readonly [number, number]; unitX: number; unitY: number};
	pairs?: readonly {x: number; at: number; out?: number; width?: number}[]; transfer?: {x: number; at: number; dur?: number; width?: number};
	readout?: {x: number; y: number; width?: number; unit?: string; digits?: number}; curveColor?: string; at?: number; out?: number;
}> = ({fn, h, mode, turnAt, dur = 40, plot, plate, pairs = [], transfer, readout, curveColor = INK, at = 0, out}) => {
	const f = useCurrentFrame();
	usePlatePreload(plate ? [plate.plate.src] : []);
	const id = `sym-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14);
	if (!plot && !plate) throw new RangeError('StudioSymmetryPairs: give a plot or a plate');
	const pm = plate ? plateMap(plate.plate, plate.x, plate.y, plate.w) : null;
	const m = plot ? makePlot(plot.x, plot.y, plot.width ?? 1000, plot.height ?? 700, plot.window) : null;
	const toF = (X: number, Y: number): [number, number] => (pm ? pm.at(plate!.origin[0] + X * plate!.unitX, plate!.origin[1] - Y * plate!.unitY) : m!.pf(X, Y));
	const p = turnAt === undefined ? 0 : smooth(prog(f, turnAt, dur));
	const region = (a: number, b: number, tf: (X: number, Y: number) => [number, number]) => {
		let d = '';
		for (let i = 0; i <= 100; i++) {const X = a + ((b - a) * i) / 100; const [px, py] = tf(X, fn(X)); d += `${i ? 'L' : 'M'}${px},${py} `;}
		for (let i = 100; i >= 0; i--) {const X = a + ((b - a) * i) / 100; const [px, py] = tf(X, 0); d += `L${px},${py} `;}
		return d + 'Z';
	};
	const fillOf = (v: number) => (v >= 0 ? POS_FILL : NEG_FILL);
	const moved = (X: number, Y: number): [number, number] => {
		if (mode === 'odd') {const th = Math.PI * p, c = Math.cos(th), s = Math.sin(th); return toF(X * c - Y * s, X * s + Y * c);}
		return toF(X * (1 - 2 * p), Y);
	};
	const moverA = mode === 'odd' ? 0 : -h, moverB = mode === 'odd' ? h : 0;
	const pos = integrate(X => Math.max(0, fn(X)), -h, h), neg = integrate(X => Math.max(0, -fn(X)), -h, h);
	const strip = (X0: number, w: number, dx: number, dyPx: number, key: string, op: number, label?: string, flipY = 1) => {
		const v = fn(X0 + w / 2);
		const [x0, y0] = toF(X0, 0), [x1, y1] = toF(X0 + w, v);
		return <g key={key} opacity={op} transform={`translate(${dx},${dyPx}) translate(0 ${y0}) scale(1 ${Math.abs(flipY) < 0.02 ? 0.02 : flipY}) translate(0 ${-y0})`}>
			<rect x={Math.min(x0, x1)} y={Math.min(y0, y1)} width={Math.abs(x1 - x0)} height={Math.abs(y1 - y0)} fill={MATH_ROLES.k.soft} stroke={MATH_ROLES.k.stroke} strokeWidth={4} />
			{label ? <text x={(x0 + x1) / 2} y={v >= 0 ? Math.min(y0, y1) - 14 : Math.max(y0, y1) + 40} textAnchor="middle" style={TXT(38, v >= 0 ? MATH_TEAL : MATH_AMBER, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{label}</text> : null}
		</g>;
	};
	const span = m ? m.win.x : ([-h * 1.1, h * 1.1] as Range);
	return <>
		{plot ? <StudioPlot x={plot.x} y={plot.y} width={plot.width ?? 1000} height={plot.height ?? 700} window={plot.window} xTicks={plot.xTicks} yTicks={plot.yTicks} at={at} out={out} /> : null}
		<FrameSvg style={{opacity: o}}>
			{plate ? <SvgPlate plate={plate.plate} x={plate.x} y={plate.y} w={plate.w} /> : null}
			{m ? <defs><clipPath id={id}><rect x={m.x + m.box.left} y={m.y + m.box.top} width={m.box.width} height={m.box.height} /></clipPath></defs> : null}
			<g clipPath={m ? `url(#${id})` : undefined}>
				{/* the static half, then the moving half */}
				<path d={region(mode === 'odd' ? -h : 0, mode === 'odd' ? 0 : h, toF)} fill={fillOf(fn(mode === 'odd' ? -h / 2 : h / 2))} opacity={0.9} />
				<path d={region(moverA, moverB, moved)} fill={fillOf(fn((moverA + moverB) / 2))} opacity={0.9 * (p > 0 ? 0.85 : 1)} stroke={p > 0 ? MATH_ROLES.k.stroke : 'none'} strokeWidth={4} />
				{(() => {let d = ''; for (let i = 0; i <= 240; i++) {const X = span[0] + ((span[1] - span[0]) * i) / 240; const [px, py] = toF(X, fn(X)); d += `${i ? 'L' : 'M'}${px},${py} `;} return <path d={d} stroke={curveColor} strokeWidth={6} fill="none" strokeLinecap="round" />;})()}
				{pairs.map((q, i) => {const w = q.width ?? h / 10, po = vis(f, q.at, q.out); if (po <= 0.001) return null; const s = Math.abs(integrate(fn, q.x, q.x + w)); const right = fn(q.x + w / 2), left = fn(-q.x - w / 2); return <g key={i}>
					{strip(q.x, w, 0, 0, 'r', po, `${right >= 0 ? '+' : '−'}${niceNum(s, 2)}`)}
					{strip(-q.x - w, w, 0, 0, 'l', vis(f, q.at + 10, q.out), `${left >= 0 ? '+' : '−'}${niceNum(s, 2)}`)}
				</g>;})}
				{transfer ? (() => {const w = transfer.width ?? h / 10, u = smooth(prog(f, transfer.at, transfer.dur ?? 40)); const [ax] = toF(transfer.x, 0), [bx] = toF(-transfer.x - w, 0); const dx = (bx - ax) * u, lift = -Math.sin(Math.PI * u) * 120; return strip(transfer.x, w, dx, lift, 'tr', prog(f, transfer.at - 10, 10), undefined, mode === 'odd' ? 1 - 2 * u : 1);})() : null}
			</g>
		</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} inline rows={[
			{label: 'fill', value: pos, digits: readout.digits ?? 2, unit: readout.unit, role: 'b'},
			{label: 'cut', value: neg, digits: readout.digits ?? 2, unit: readout.unit, role: 'k'},
			{label: 'net', value: pos - neg, digits: readout.digits ?? 2, unit: readout.unit, role: 'answer'},
		]} /> : null}
	</>;
};

// ---------- small tools ----------
/** Tallies under the heights of a trapezium sum: as trapezium k is added (addAt[k]), edges k and k + 1 each gain 1, so inside edges reach 2 and end edges 1. */
export const StudioCoefficientLedger: React.FC<{x: number; y: number; labels: readonly React.ReactNode[]; addAt: readonly number[]; colW?: number; size?: number; at?: number; out?: number}> = ({x, y, labels, addAt, colW = 150, size = 44, at = 0, out}) => {
	const f = useCurrentFrame();
	if (addAt.length !== labels.length - 1) throw new RangeError('StudioCoefficientLedger: one add cue per trapezium (labels − 1)');
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const tally = labels.map((_, j) => addAt.filter((a, k) => f >= a && (k === j || k + 1 === j)).length);
	return <div style={{position: 'absolute', left: x, top: y, opacity: o}}>
		<svg width={labels.length * colW} height={70} viewBox={`0 0 ${labels.length * colW} 70`} style={{display: 'block', overflow: 'visible'}}>{addAt.map((a, k) => {const x0 = k * colW + colW / 2, x1 = x0 + colW; return <DrawPath key={k} d={`M${x0 + 8},${64} Q${(x0 + x1) / 2},${4} ${x1 - 8},${64}`} at={a} dur={14} color={MATH_ROLES.gradient.stroke} width={5} />;})}</svg>
		<div style={{display: 'flex'}}>{labels.map((l, j) => <div key={j} style={{width: colW, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, paddingTop: 10}}>{l}</div>)}</div>
		<div style={{display: 'flex', marginTop: 10}}>{tally.map((t, j) => {const last = [...addAt].reverse().find((a, k) => f >= a && (addAt.length - 1 - k === j || addAt.length - k === j)); const pop = last === undefined ? 0 : Math.max(0, 1 - (f - last) / 14); return <div key={j} style={{width: colW, textAlign: 'center'}}>
			<span style={{display: 'inline-block', minWidth: 70, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, padding: '0 14px', borderRadius: 14, border: `4px solid ${t === 2 ? MATH_ROLES.k.stroke : t === 1 ? MATH_ROLES.b.stroke : PAPER_DEEP}`, background: CARD, color: t === 2 ? MATH_ROLES.k.ink : t === 1 ? MATH_ROLES.b.ink : INK_SOFT, transform: `scale(${1 + 0.25 * pop})`}}>{t}</span>
		</div>;})}</div>
	</div>;
};

/**
 * A plain, unbranded input and output panel: the input types on at `cps`, a short "working" pulse, then the
 * output. The output never renders inside a question hold: listing holds makes the part throw if outputAt falls in one.
 */
export const StudioToolPanel: React.FC<{x: number; y: number; w?: number; title?: string; input: string; output: React.ReactNode; typeAt: number; outputAt: number; cps?: number; holds?: readonly [number, number][]; at?: number; out?: number}> = ({x, y, w = 760, title = 'calculator', input, output, typeAt, outputAt, cps = 18, holds = [], at = 0, out}) => {
	const f = useCurrentFrame();
	if (holds.some(([s, e]) => outputAt >= s && outputAt <= e)) throw new RangeError('StudioToolPanel: tool output may not appear during a question hold');
	const hidden = holds.some(([s, e]) => f >= s && f <= e);
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const chars = Math.max(0, Math.min(input.length, Math.floor(((f - typeAt) / 30) * cps)));
	const typed = chars >= input.length;
	const working = typed && f < outputAt;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: '#2a2d31', borderRadius: 22, padding: '18px 26px 22px', boxShadow: CARD_SHADOW, boxSizing: 'border-box', border: '3px solid #4a4f55'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, textTransform: 'uppercase', color: '#a9b4ae'}}>{title}</div>
		<div style={{marginTop: 10, background: '#dfe8dc', borderRadius: 12, padding: '10px 18px', minHeight: 140, boxSizing: 'border-box'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: '#1f2a24', whiteSpace: 'pre'}}>{input.slice(0, chars)}<span style={{opacity: !typed && Math.floor(f / 8) % 2 === 0 ? 1 : 0}}>|</span></div>
			<div style={{textAlign: 'right', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: '#1f2a24', whiteSpace: 'pre', minHeight: 60}}>
				{working ? <span style={{opacity: 0.4 + 0.6 * Math.abs(Math.sin(f * 0.25)), fontSize: 36}}>working…</span> : f >= outputAt && !hidden ? <span style={{opacity: prog(f, outputAt, 10)}}>{output}</span> : null}
			</div>
		</div>
	</div>;
};

/**
 * Units multiply on one strip: a small strip picture fills while "height (unit) × width (unit) = product (unit)"
 * writes on; `crossed` strikes the product in red with a caption (a wrong product such as "$ × items").
 */
export const StudioUnitProduct: React.FC<{x: number; y: number; height: {value: React.ReactNode; unit: string; role?: RoleKey}; width: {value: React.ReactNode; unit: string; role?: RoleKey}; product: {value: React.ReactNode; unit: string; role?: RoleKey};
	at: number; stagger?: number; size?: number; strip?: boolean; crossed?: {at: number; caption?: string}; out?: number}> = ({x, y, height, width, product, at, stagger = 16, size = 52, strip = true, crossed, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const chip = (c: {value: React.ReactNode; unit: string; role?: RoleKey}, a: number) => <span style={{opacity: prog(f, a, 12), display: 'inline-block', background: CARD, borderRadius: 14, padding: '4px 18px', border: `4px solid ${c.role ? MATH_ROLES[c.role].stroke : 'rgba(60,45,20,0.18)'}`, color: roleInk(c.role, INK), whiteSpace: 'pre'}}>{c.value} <span style={{fontSize: '0.62em', fontWeight: 700}}>{c.unit}</span></span>;
	const fill = smooth(prog(f, at + 6, 40));
	const xs = crossed ? prog(f, crossed.at, 12) : 0;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', alignItems: 'center', gap: 22, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK}}>
		{strip ? <svg width={110} height={160} viewBox="0 0 110 160" style={{flex: 'none'}}>
			<rect x={20} y={10} width={70} height={140} fill="none" stroke={MATH_ROLES.k.stroke} strokeWidth={4} />
			<rect x={20} y={10 + 140 * (1 - fill)} width={70} height={140 * fill} fill={MATH_ROLES.k.soft} />
			<line x1={8} x2={8} y1={10} y2={150} stroke={roleInk(height.role, INK)} strokeWidth={4} />
			<line x1={20} x2={90} y1={157} y2={157} stroke={roleInk(width.role, INK)} strokeWidth={4} />
		</svg> : null}
		{chip(height, at)}<span style={{opacity: prog(f, at + stagger, 10)}}>×</span>{chip(width, at + stagger)}<span style={{opacity: prog(f, at + 2 * stagger, 10)}}>=</span>
		<span style={{position: 'relative'}}>{chip(product, at + 2 * stagger)}{xs > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible'}}><path d="M0,70 L100,30" stroke={MATH_MISTAKE} strokeWidth={7} vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - xs} /></svg> : null}</span>
		{crossed?.caption ? <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: MATH_MISTAKE, opacity: prog(f, crossed.at + 10, 12)}}>{crossed.caption}</span> : null}
	</div>;
};

// ---------- plates: meters, columns, fills, arrows ----------
/** An arrow at a frame anchor whose width follows |f| and whose direction follows the sign of f; it vanishes at f = 0. */
export const NetFlowArrow: React.FC<{x: number; y: number; value: number; scale?: number; maxWidth?: number; length?: number; axis?: 'horizontal' | 'vertical'; positive?: {role?: RoleKey; label?: string}; negative?: {role?: RoleKey; label?: string}; at?: number; out?: number}> = ({x, y, value, scale = 6, maxWidth = 60, length = 170, axis = 'vertical', positive = {role: 'b', label: 'in'}, negative = {role: 'k', label: 'out'}, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	const wpx = Math.min(maxWidth, Math.abs(value) * scale);
	if (o <= 0.001 || wpx < 0.8) return null;
	const pos = value > 0, sd = pos ? positive : negative, col = MATH_ROLES[sd.role ?? (pos ? 'b' : 'k')];
	const dir = axis === 'vertical' ? (pos ? -1 : 1) : (pos ? 1 : -1);
	const hl = Math.min(length * 0.4, wpx * 1.4 + 18), hw = wpx * 0.9 + 14;
	const pts = axis === 'vertical'
		? [[x - wpx / 2, y], [x - wpx / 2, y + dir * (length - hl)], [x - hw, y + dir * (length - hl)], [x, y + dir * length], [x + hw, y + dir * (length - hl)], [x + wpx / 2, y + dir * (length - hl)], [x + wpx / 2, y]]
		: [[x, y - wpx / 2], [x + dir * (length - hl), y - wpx / 2], [x + dir * (length - hl), y - hw], [x + dir * length, y], [x + dir * (length - hl), y + hw], [x + dir * (length - hl), y + wpx / 2], [x, y + wpx / 2]];
	return <FrameSvg style={{opacity: o}}>
		<polygon points={pts.map(p => p.join(',')).join(' ')} fill={col.stroke} stroke={CARD} strokeWidth={3} strokeLinejoin="round" />
		{sd.label ? <text x={axis === 'vertical' ? x + hw + 12 : x + dir * length / 2} y={axis === 'vertical' ? y + dir * length / 2 + 12 : y - hw - 12} textAnchor={axis === 'vertical' ? 'start' : 'middle'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: col.ink}}>{sd.label}</text> : null}
	</FrameSvg>;
};

/**
 * A coded liquid column inside a plate's measured tube: bulb point and tube top (file pixels) map linearly to
 * scale.min and scale.max; the column rises from the bulb to the value. Coded tick numbers sit beside the tube.
 */
export const ThermoColumn: React.FC<{plate: PlateSpec; x: number; y: number; w: number; bulb: readonly [number, number]; top: readonly [number, number]; tubeWidth: number; scale: {min: number; max: number}; value: number;
	ticks?: readonly {value: number; label: string}[]; color?: string; tickSide?: 'left' | 'right'; drawPlate?: boolean; at?: number; out?: number}> = ({plate, x, y, w, bulb, top, tubeWidth, scale, value, ticks = [], color = '#c8443a', tickSide = 'right', drawPlate = true, at = 0, out}) => {
	usePlatePreload(drawPlate ? [plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const mp = plateMap(plate, x, y, w);
	const [bx, by] = mp.at(bulb[0], bulb[1]), [tx, ty] = mp.at(top[0], top[1]);
	const at01 = (v: number) => (v - scale.min) / (scale.max - scale.min);
	const pt = (v: number): [number, number] => [bx + (tx - bx) * at01(v), by + (ty - by) * at01(v)];
	const [vx, vy] = pt(Math.max(scale.min, Math.min(scale.max, value)));
	const tw = tubeWidth * mp.s;
	return <FrameSvg style={{opacity: o}}>
		{drawPlate ? <SvgPlate plate={plate} x={x} y={y} w={w} /> : null}
		<line x1={bx} y1={by} x2={vx} y2={vy} stroke={color} strokeWidth={tw} strokeLinecap="round" />
		<circle cx={bx} cy={by} r={tw * 1.2} fill={color} />
		{ticks.map(t => {const [px, py] = pt(t.value); const sx = tickSide === 'right' ? 1 : -1; return <g key={t.label}><line x1={px + sx * tw} x2={px + sx * (tw + 16)} y1={py} y2={py} stroke={INK} strokeWidth={3} /><text x={px + sx * (tw + 24)} y={py + 11} textAnchor={tickSide === 'right' ? 'start' : 'end'} style={TXT(30, INK, 800)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{t.label}</text></g>;})}
	</FrameSvg>;
};

/** A coded fill rising and falling against a plate's measured scale (file-pixel band [x0, yBottom, x1, yTop] for scale.min to scale.max), such as snow on a post. */
export const PlateLevelFill: React.FC<{plate: PlateSpec; x: number; y: number; w: number; band: readonly [number, number, number, number]; scale: {min: number; max: number}; value: number; color?: string; opacity?: number; surface?: string;
	ticks?: readonly {value: number; label: string}[]; drawPlate?: boolean; behind?: boolean; at?: number; out?: number}> = ({plate, x, y, w, band, scale, value, color = '#f4f7fb', opacity = 0.95, surface = '#9fb3c8', ticks = [], drawPlate = true, behind = false, at = 0, out}) => {
	usePlatePreload(drawPlate ? [plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const mp = plateMap(plate, x, y, w);
	const [x0, yb] = mp.at(band[0], band[1]), [x1, yt] = mp.at(band[2], band[3]);
	const yv = (v: number) => yb + (yt - yb) * ((v - scale.min) / (scale.max - scale.min));
	const ly = yv(Math.max(scale.min, Math.min(scale.max, value)));
	const fill = <g><rect x={x0} y={ly} width={x1 - x0} height={yb - ly} fill={color} opacity={opacity} /><line x1={x0} x2={x1} y1={ly} y2={ly} stroke={surface} strokeWidth={4} /></g>;
	return <FrameSvg style={{opacity: o}}>
		{behind ? fill : null}
		{drawPlate ? <SvgPlate plate={plate} x={x} y={y} w={w} /> : null}
		{!behind ? fill : null}
		{ticks.map(t => <g key={t.label}><line x1={x1 + 6} x2={x1 + 22} y1={yv(t.value)} y2={yv(t.value)} stroke={INK} strokeWidth={3} /><text x={x1 + 30} y={yv(t.value) + 11} style={TXT(30, INK, 800)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{t.label}</text></g>)}
	</FrameSvg>;
};

/**
 * A PlateReadout whose value is the integral of a supplied rate from `from` to `upTo` (energy, extra cost, net
 * change, total flow), so the meter and the fills always agree. Give `primitive` for an exact value; otherwise
 * Simpson's rule is used.
 */
export const AccumulatingPlateReadout: React.FC<Omit<React.ComponentProps<typeof PlateReadout>, 'value'> & {rate: (t: number) => number; from: number; upTo: number; primitive?: (t: number) => number}> = ({rate, from, upTo, primitive, ...rest}) => {
	const v = primitive ? primitive(upTo) - primitive(from) : integrate(rate, from, upTo, 400);
	return <PlateReadout {...rest} value={v} />;
};

/** A sprite plate that rises from behind a horizontal mask line (a soil line), never stretched or cut at the top: rise = px visible above the line. */
export const MaskedPlateRise: React.FC<{plate: PlateSpec; cx: number; maskY: number; w: number; rise: number; at?: number; out?: number}> = ({plate, cx, maskY, w, rise, at = 0, out}) => {
	usePlatePreload([plate.src]);
	const f = useCurrentFrame();
	const id = `mr-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 12);
	if (o <= 0.001 || rise <= 0) return null;
	return <FrameSvg style={{opacity: o}}>
		<defs><clipPath id={id}><rect x={cx - w} y={-2000} width={w * 2} height={maskY + 2000} /></clipPath></defs>
		<g clipPath={`url(#${id})`}><SvgPlate plate={plate} x={cx - w / 2} y={maskY - rise} w={w} /></g>
	</FrameSvg>;
};

/** A level bar on a pivot that tilts by the difference of two amounts and levels when they are equal. */
export const BalanceBar: React.FC<{x: number; y: number; w?: number; left: {label: React.ReactNode; value: number; role?: RoleKey}; right: {label: React.ReactNode; value: number; role?: RoleKey}; scale?: number; maxTilt?: number; digits?: number; at?: number; out?: number}> = ({x, y, w = 640, left, right, scale = 1, maxTilt = 14, digits = 2, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const diff = right.value - left.value;
	const deg = Math.max(-maxTilt, Math.min(maxTilt, (diff / scale) * maxTilt));
	const level = Math.abs(diff) < 1e-9;
	const pan = (side: -1 | 1, s: typeof left) => {
		const r = (deg * Math.PI) / 180, ex = x + side * (w / 2) * Math.cos(r), ey = y + side * (w / 2) * Math.sin(r);
		return <g key={side}>
			<line x1={ex} y1={ey} x2={ex} y2={ey + 46} stroke={INK_SOFT} strokeWidth={3} />
			<rect x={ex - 110} y={ey + 46} width={220} height={74} rx={14} fill={CARD} stroke={s.role ? MATH_ROLES[s.role].stroke : INK} strokeWidth={4} />
			<text x={ex} y={ey + 98} textAnchor="middle" style={TXT(44, roleInk(s.role, INK), 800)}>{fmtNum(s.value, digits)}</text>
			<text x={ex} y={ey + 160} textAnchor="middle" style={TXT(32, roleInk(s.role, INK), 800)}>{s.label}</text>
		</g>;
	};
	return <FrameSvg style={{opacity: o}}>
		<path d={`M${x},${y} L${x - 34},${y + 120} H${x + 34} Z`} fill={PAPER_DEEP} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
		<g transform={`rotate(${deg} ${x} ${y})`}><rect x={x - w / 2} y={y - 8} width={w} height={16} rx={8} fill={INK} /></g>
		<circle cx={x} cy={y} r={10} fill={CARD} stroke={INK} strokeWidth={4} />
		{pan(-1, left)}{pan(1, right)}
		{level ? <text x={x} y={y - 40} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: MATH_ANSWER}}>level: equal</text> : null}
	</FrameSvg>;
};

// ---------- particle track ----------
/**
 * A dot (or a plate sprite such as a robot vacuum) moving along a number line by position(frame), with a velocity
 * arrow whose length and direction follow velocity(frame), open rest markers, an optional trail and turning-point
 * labels, over an optional floor strip tiled at native aspect.
 */
export const StudioParticleTrack: React.FC<{x: number; y: number; width?: number; range: Range; position: (frame: number) => number; velocity?: (frame: number) => number; arrowScale?: number;
	sprite?: {plate: PlateSpec; w: number; lift?: number}; floor?: {plate: PlateSpec; h: number; y?: number}; ticks?: readonly {value: number; label: string}[]; unit?: string;
	rests?: readonly {x: number; at: number; label?: string}[]; trail?: {from: number; every?: number}; labels?: readonly {x: number; text: string; at: number}[]; at?: number; out?: number}> = ({x, y, width = 1600, range, position, velocity, arrowScale = 8, sprite, floor, ticks = [], unit, rests = [], trail, labels = [], at = 0, out}) => {
	usePlatePreload([sprite?.plate, floor?.plate].filter((p): p is PlateSpec => !!p).map(p => p.src));
	const f = useCurrentFrame();
	const id = `pt-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const X = (v: number) => x + ((v - range[0]) / (range[1] - range[0])) * width;
	const px = X(position(f)), v = velocity ? velocity(f) : 0;
	const tiles: React.ReactNode[] = [];
	if (floor) {const pl = floor.plate, tw = (floor.h * (pl.box[2] - pl.box[0])) / (pl.box[3] - pl.box[1]); for (let k = 0; k * tw < width + 40; k++) tiles.push(<SvgPlate key={k} plate={pl} x={x - 20 + k * tw} y={floor.y ?? y - floor.h} w={tw} />);}
	const trailPts: number[] = [];
	if (trail) for (let g = trail.from; g < f; g += trail.every ?? 6) trailPts.push(X(position(g)));
	const sh = sprite ? (sprite.w * (sprite.plate.box[3] - sprite.plate.box[1])) / (sprite.plate.box[2] - sprite.plate.box[0]) : 0;
	const al = v * arrowScale, aY = sprite ? y - sh - (sprite.lift ?? 0) - 30 : y - 46;
	return <FrameSvg style={{opacity: o}}>
		{floor ? <><defs><clipPath id={id}><rect x={x - 20} y={(floor.y ?? y - floor.h)} width={width + 40} height={floor.h} /></clipPath></defs><g clipPath={`url(#${id})`}>{tiles}</g></> : null}
		<line x1={x - 10} x2={x + width + 10} y1={y} y2={y} stroke={INK} strokeWidth={4} />
		{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={3} /><text x={X(t.value)} y={y + 44} textAnchor="middle" style={TXT(30, INK, 700)}>{t.label}</text></g>)}
		{unit ? <text x={x + width + 20} y={y + 44} textAnchor="end" style={TXT(28, INK_SOFT, 700)}>{unit}</text> : null}
		{trailPts.map((tx, i) => <circle key={i} cx={tx} cy={y} r={5} fill={MATH_ROLES.a.stroke} opacity={0.45} />)}
		{rests.map((r, i) => <g key={'r' + i} opacity={prog(f, r.at, 10)}><circle cx={X(r.x)} cy={y} r={12} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} />{r.label ? <text x={X(r.x)} y={y + 80} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: INK_SOFT}}>{r.label}</text> : null}</g>)}
		{labels.map((l, i) => <text key={'l' + i} x={X(l.x)} y={y - (sprite ? sh + 90 : 90)} textAnchor="middle" opacity={prog(f, l.at, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_ROLES.k.ink}}>{l.text}</text>)}
		{sprite ? <SvgPlate plate={sprite.plate} x={px - sprite.w / 2} y={y - sh - (sprite.lift ?? 0)} w={sprite.w} /> : <circle cx={px} cy={y} r={16} fill={MATH_ROLES.a.stroke} stroke={CARD} strokeWidth={5} />}
		{velocity && Math.abs(al) > 4 ? <g><line x1={px} x2={px + al} y1={aY} y2={aY} stroke={MATH_TEAL} strokeWidth={7} strokeLinecap="round" /><path d={`M${px + al - Math.sign(al) * 16},${aY - 12} L${px + al},${aY} L${px + al - Math.sign(al) * 16},${aY + 12}`} stroke={MATH_TEAL} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" /></g> : null}
	</FrameSvg>;
};

/** The sign of a signed amount as a word, for readouts: "in" and "out", "up" and "down". */
export const signWord = (v: number, words: [string, string, string] = ['out', 'none', 'in'], eps = 1e-9) => (Math.abs(v) < eps ? words[1] : v > 0 ? words[2] : words[0]);
/** Readout row helper with a money or unit format (keeps the ReadoutRow type in one place). */
export const unitRow = (label: React.ReactNode, value: number, format: (v: number) => string, role?: RoleKey): ReadoutRow => ({label, value, format, role});
