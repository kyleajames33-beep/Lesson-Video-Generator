// Studio-sized paired derivative panel (f above f′ with one shared x geometry) and the sign strip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {graphTransform} from '../graphs';
import type {Range} from '../graphs';
import {CARD, FrameSvg, fmtNum, smooth, vis} from './primitives';
import {MATH_DOWN, MATH_DOWN_SOFT, MATH_EXCLUDED, MATH_GRADIENT, MATH_UP, MATH_UP_SOFT} from './roles';
import {FnFamily, FnKey, FnRow, FnState, FunctionSimulator, Tick, fnStateAt} from './fn-sim';

/**
 * f above, f′ below, sharing x. The upper plot carries the riding point and its violet tangent; the lower
 * violet curve is drawn by the moving tangent (traced up to the point's x), with a dashed connector between
 * the two points, teal and amber tints above and below the f′ axis over the traced span, rings where f′
 * crosses or touches 0, and an optional dashed target curve (the curve the trace should land on).
 * One shared slide (channel xShift on the timeline) moves both plots together.
 */
export const PairedDerivativePanel: React.FC<{
	x: number; y: number; width?: number; heightTop?: number; heightBottom?: number; gap?: number;
	windowX: Range; yTop: Range; yBottom: Range;
	family: FnFamily;
	timeline: readonly FnKey[];
	traceFrom: number;
	at?: number; out?: number;
	pointAt?: number; tangentAt?: number;
	topColor?: string;
	topLabel?: string; bottomLabel?: string;
	xTicks?: readonly (number | Tick)[];
	yTopTicks?: readonly (number | Tick)[]; yBottomTicks?: readonly (number | Tick)[];
	tints?: {at: number; out?: number};
	rings?: readonly {x: number; kind: 'cross' | 'touch'; at: number; label?: string}[];
	target?: {fn: (x: number) => number; at: number; out?: number; label?: string};
	readout?: {x: number; y: number; width?: number; at?: number; rows: FnRow[]};
	overlay?: (s: FnState, top: (X: number, Y: number) => [number, number], bottom: (X: number, Y: number) => [number, number]) => React.ReactNode;
}> = ({x, y, width = 1100, heightTop = 470, heightBottom = 400, gap = 10, windowX, yTop, yBottom, family, timeline, traceFrom, at = 0, out, pointAt, tangentAt, topColor = INK, topLabel = 'y = f(x)', bottomLabel = 'gradient f′(x)', xTicks, yTopTicks, yBottomTicks, tints, rings = [], target, readout, overlay}) => {
	const f = useCurrentFrame();
	const st = fnStateAt(family, timeline, f);
	// Lower family: the displayed derivative, with the same slide.
	const lower: FnFamily = {f: (u, p) => family.df(u, p), df: (u, p) => (family.df(u + 1e-5, p) - family.df(u - 1e-5, p)) / 2e-5, domain: family.domain, excluded: family.excluded};
	const y2 = y + heightTop + gap;
	const tTop = graphTransform({x: windowX, y: yTop, width, height: heightTop});
	const tBot = graphTransform({x: windowX, y: yBottom, width, height: heightBottom});
	const topF = (X: number, Y: number): [number, number] => {const p = tTop.point(X, Y); return [x + p.x, y + p.y];};
	const botF = (X: number, Y: number): [number, number] => {const p = tBot.point(X, Y); return [x + p.x, y2 + p.y];};
	const pAt = pointAt ?? at, tAt = tangentAt ?? at;
	const tintO = tints ? vis(f, tints.at, tints.out) : 0;
	const X0 = st.xScale * traceFrom + st.xShift;
	const regions = tints ? [
		{x: [X0, st.X] as Range, y: [0, yBottom[1]] as Range, color: MATH_UP_SOFT, at: tints.at, out: tints.out},
		{x: [X0, st.X] as Range, y: [yBottom[0], 0] as Range, color: MATH_DOWN_SOFT, at: tints.at, out: tints.out},
	] : [];
	const a = topF(st.X, st.Y), bp = botF(st.X, st.slope);
	const o = vis(f, at, out, 14);
	return (
		<>
			<FunctionSimulator x={x} y={y} width={width} height={heightTop} window={{x: windowX, y: yTop}} family={family} timeline={timeline} color={topColor} xTicks={xTicks} yTicks={yTopTicks} xLabel="x" yLabel={topLabel} point={{at: pAt, out}} tangent={{at: tAt, out}} at={at} out={out} />
			<FunctionSimulator x={x} y={y2} width={width} height={heightBottom} window={{x: windowX, y: yBottom}} family={lower} timeline={timeline.map(k => ({...k, q: undefined}))} color={MATH_GRADIENT} clipToPoint={{from: X0}} xTicks={xTicks} yTicks={yBottomTicks} xLabel="x" yLabel={bottomLabel} point={{at: pAt, out, color: MATH_GRADIENT}} regions={regions} at={at} out={out}
				curves={target ? [{fn: target.fn, at: target.at, out: target.out, label: target.label ? {text: target.label, X: windowX[1] - (windowX[1] - windowX[0]) * 0.2} : undefined}] : []}
				readout={readout ? {...readout, at: readout.at ?? at} : undefined} />
			<FrameSvg style={{opacity: o * prog(f, pAt, 12)}}>
				<line x1={a[0]} y1={a[1]} x2={bp[0]} y2={bp[1]} stroke={MATH_GRADIENT} strokeWidth={3} strokeDasharray="6 9" opacity={0.7} />
				{rings.map((r, i) => {
					const ro = vis(f, r.at);
					if (ro <= 0.001) return null;
					const c = botF(st.xScale * r.x + st.xShift, 0);
					return <g key={i} opacity={ro}>
						<circle cx={c[0]} cy={c[1]} r={26 * smooth(prog(f, r.at, 14))} fill="none" stroke={r.kind === 'cross' ? MATH_UP : MATH_EXCLUDED} strokeWidth={5} />
						{r.label ? <text x={c[0]} y={c[1] - 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{r.label}</text> : null}
					</g>;
				})}
				{tintO > 0 ? <>
					<text x={x + width - 60} y={botF(0, yBottom[1])[1] + 40} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: MATH_UP}} opacity={tintO}>f′ &gt; 0: increasing</text>
					<text x={x + width - 60} y={botF(0, yBottom[0])[1] - 16} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: MATH_DOWN}} opacity={tintO}>f′ &lt; 0: decreasing</text>
				</> : null}
			</FrameSvg>
			{overlay ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>{overlay(st, topF, botF)}</div> : null}
		</>
	);
};

export type SignBoundaryMark = {x: number; kind: 'zero' | 'excluded'; label?: string};
export type SignCell = {sign: 1 | -1; test?: {x: string; value: string}; revealAt?: number};

/**
 * Studio-sized sign strip under a plot (pass the plot's x, width and x window so the cells line up with
 * graphTransform's box). One cell per interval between boundaries; each fills in at its revealAt, or as a
 * riding point passes (`follow`: the point's displayed x now). Large + and − signs, teal and amber arrows,
 * a test-value row (values strictly inside each interval), "0" at zeros and a grey open gap at an excluded
 * value, which no arrow or fill ever bridges.
 */
export const SignStrip: React.FC<{
	x: number; y: number; width?: number; windowX: Range;
	boundaries: readonly SignBoundaryMark[]; cells: readonly SignCell[];
	follow?: number; at?: number; out?: number; rowLabel?: string; testLabel?: string; showTests?: boolean; signSize?: number;
}> = ({x, y, width = 1100, windowX, boundaries, cells, follow, at = 0, out, rowLabel = 'f′(x)', testLabel = 'test', showTests = true, signSize = 48}) => {
	const f = useCurrentFrame();
	if (cells.length !== boundaries.length + 1) throw new RangeError('SignStrip: one cell per interval (boundaries + 1) is required');
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const t = graphTransform({x: windowX, y: [0, 1], width, height: 300});
	const L = t.box.left, R = t.box.left + t.box.width;
	const px = (v: number) => t.point(v, 0).x;
	const edges = [windowX[0], ...boundaries.map(b => b.x), windowX[1]];
	const H = 96, lineY = 0, cellTop = 22, testY = cellTop + H + 50;
	return (
		<div style={{position: 'absolute', left: x, top: y, width, opacity: o}}>
			<svg width={width} height={showTests ? 230 : 180} viewBox={`0 0 ${width} ${showTests ? 230 : 180}`} style={{overflow: 'visible'}}>
				<text x={L - 16} y={cellTop + H / 2 + 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>{rowLabel}</text>
				{showTests ? <text x={L - 16} y={testY + 6} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>{testLabel}</text> : null}
				<line x1={L} x2={R} y1={lineY} y2={lineY} stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
				{cells.map((c, i) => {
					const a = px(edges[i]), b = px(edges[i + 1]);
					const fill = follow !== undefined ? Math.max(0, Math.min(1, (follow - edges[i]) / Math.max(1e-9, edges[i + 1] - edges[i]))) : c.revealAt !== undefined ? smooth(prog(f, c.revealAt, 18)) : 1;
					const shown = follow !== undefined ? fill > 0.02 : c.revealAt === undefined || f >= c.revealAt;
					const up = c.sign > 0, colr = up ? MATH_UP : MATH_DOWN, soft = up ? MATH_UP_SOFT : MATH_DOWN_SOFT;
					const pad = 5, w = Math.max(0, b - a - 2 * pad);
					const mid = (a + b) / 2;
					const ao = shown ? prog(f, (c.revealAt ?? 0) + 6, 12) : 0;
					return <g key={i}>
						<rect x={a + pad} y={cellTop} width={w} height={H} rx={14} fill="#eee8de" />
						<rect x={a + pad} y={cellTop} width={w * fill} height={H} rx={14} fill={soft} />
						{shown ? <>
							<text x={mid - 34} y={cellTop + H / 2 + signSize * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: signSize, fill: colr}} opacity={follow !== undefined ? Math.min(1, fill * 3) : ao}>{up ? '+' : '−'}</text>
							<g opacity={follow !== undefined ? Math.min(1, fill * 3) : ao} transform={`translate(${mid + 30},${cellTop + H / 2})`}>
								<path d={up ? 'M-22,18 L20,-20 M2,-22 L21,-21 L20,-2' : 'M-22,-18 L20,20 M2,22 L21,21 L20,2'} stroke={colr} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" />
							</g>
							{showTests && c.test ? <text x={mid} y={testY} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}} opacity={follow !== undefined ? Math.min(1, fill * 2) : ao}>{`x = ${c.test.x}: ${c.test.value}`}</text> : null}
						</> : <text x={mid} y={cellTop + H / 2 + 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: INK_SOFT}}>?</text>}
					</g>;
				})}
				{boundaries.map(bd => {
					const X = px(bd.x);
					return <g key={bd.x}>
						<line x1={X} x2={X} y1={-14} y2={cellTop + H + 8} stroke={bd.kind === 'excluded' ? MATH_EXCLUDED : INK} strokeWidth={3} strokeDasharray={bd.kind === 'excluded' ? '7 7' : undefined} />
						{bd.kind === 'excluded'
							? <circle cx={X} cy={lineY} r={11} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} />
							: <text x={X} y={cellTop + H / 2 + 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={10} paintOrder="stroke">0</text>}
						<text x={X} y={-24} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: bd.kind === 'excluded' ? MATH_EXCLUDED : INK}}>{bd.label ?? fmtNum(bd.x, Number.isInteger(bd.x) ? 0 : 2)}</text>
					</g>;
				})}
			</svg>
		</div>
	);
};

/** A hand-drawn arrow path that writes on (used for joined sign-strip arrows): points in frame coordinates. */
export const ArrowJoin: React.FC<{segments: readonly (readonly [number, number])[][]; at: number; color?: string; width?: number}> = ({segments, at, color = INK, width = 6}) => (
	<FrameSvg>
		{segments.map((seg, i) => <DrawPath key={i} d={seg.map((p, k) => `${k ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')} at={at + i * 16} dur={18} color={color} width={width} />)}
	</FrameSvg>
);
