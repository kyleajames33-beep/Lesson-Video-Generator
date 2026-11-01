import React, {useId, useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {BLUE, FONT_DISPLAY, INK, INK_SOFT, prog} from '../kit';

const ACCENT = '#8a5a12';
const CARD = '#fffdf8';
export type Range = readonly [number, number];
export type DomainInterval = {from: number; to: number; includeFrom?: boolean; includeTo?: boolean};
export type GraphWindow = {x: Range; y: Range; width?: number; height?: number};
export type Tick = {value: number; label: string};
export type GraphMarker = {x: number; y: number; kind: 'included' | 'excluded' | 'hole' | 'corner'; label?: string};
export type Asymptote = {axis: 'x' | 'y'; value: number; label?: string};
export type Tangent = {x: number; slope: number; span?: number; showSlope?: boolean};
export type GraphSpec = GraphWindow & {
	fn: (x: number) => number;
	/** Explicit connected intervals. Declare every pole/jump/hole as a break. */
	domain?: readonly DomainInterval[];
	breaks?: readonly number[];
	markers?: readonly GraphMarker[];
	asymptotes?: readonly Asymptote[];
	xTicks?: readonly Tick[]; yTicks?: readonly Tick[];
	xLabel?: string; yLabel?: string; label?: string; color?: string;
};
export const graphTransform = ({x, y, width = 800, height = 520}: GraphWindow) => {
	if (!(x[1] > x[0] && y[1] > y[0]) || ![...x, ...y, width, height].every(Number.isFinite) || width < 220 || height < 180) throw new RangeError('Invalid graph window');
	const box = {left: 84, top: 48, width: width - 126, height: height - 120};
	const sx = box.width / (x[1] - x[0]), sy = box.height / (y[1] - y[0]);
	return {box, sx, sy, point: (a: number, b: number) => ({x: box.left + (a - x[0]) * sx, y: box.top + (y[1] - b) * sy}), inverse: (a: number, b: number) => ({x: x[0] + (a - box.left) / sx, y: y[1] - (b - box.top) / sy})};
};
const intervals = (s: GraphSpec): readonly DomainInterval[] => s.domain ?? [{from: s.x[0], to: s.x[1], includeFrom: true, includeTo: true}];
export const inDomain = (s: GraphSpec, x: number) => {
	if (s.markers?.some(m => m.x === x && (m.kind === 'included' || m.kind === 'corner'))) return true;
	return !s.breaks?.includes(x) && !s.asymptotes?.some(a => a.axis === 'x' && a.value === x) && !s.markers?.some(m => m.x === x && (m.kind === 'hole' || m.kind === 'excluded')) && intervals(s).some(d => (x > d.from || (x === d.from && d.includeFrom)) && (x < d.to || (x === d.to && d.includeTo)));
};
/** Explicitly split every interval before sampling, including a hole not on a sample. */
export const connectedDomains = (s: GraphSpec): Range[] => {
	const cuts = [...(s.breaks ?? []), ...(s.asymptotes ?? []).filter(a => a.axis === 'x').map(a => a.value), ...(s.markers ?? []).filter(m => m.kind === 'hole' || m.kind === 'excluded').map(m => m.x)];
	return intervals(s).flatMap(d => {
		const lo = Math.max(d.from, s.x[0]), hi = Math.min(d.to, s.x[1]);
		if (!(hi > lo)) return [];
		const xs = [lo, ...cuts.filter(v => v > lo && v < hi), hi].sort((a, b) => a - b);
		return xs.slice(1).map((b, i) => [xs[i], b] as const);
	});
};
export type Sample = {x: number; y: number};
/** Samples are mathematical coordinates; all SVG consumers use graphTransform. */
export const sampleFunction = (s: GraphSpec, until = s.x[1], samples = 600): Sample[][] => {
	const out: Sample[][] = [];
	for (const [lo, end] of connectedDomains(s)) {
		const hi = Math.min(end, until);
		if (!(hi > lo)) continue;
		const n = Math.max(2, Math.ceil(samples * (hi - lo) / (s.x[1] - s.x[0])));
		let line: Sample[] = [];
		for (let i = 0; i <= n; i++) {
			let x = i === 0 ? lo : i === n ? hi : lo + (hi - lo) * i / n;
			const curveBreak = s.breaks?.includes(x) || s.asymptotes?.some(a => a.axis === 'x' && a.value === x) || s.markers?.some(m => m.x === x && (m.kind === 'hole' || m.kind === 'excluded'));
			if (!inDomain(s, x) || curveBreak) x += i === 0 ? (hi - lo) * 1e-6 : -(hi - lo) * 1e-6;
			const y = s.fn(x);
			if (!inDomain(s, x) || !Number.isFinite(y)) {if (line.length) out.push(line); line = []; continue;}
			line.push({x, y});
		}
		if (line.length) out.push(line);
	}
	return out;
};
export const radianTicks = (from: number, to: number, denominator = 2): Tick[] => {
	if (!Number.isInteger(denominator) || denominator < 1) throw new RangeError('Positive integer radian denominator required');
	const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
	return Array.from({length: Math.max(0, Math.floor(to * denominator / Math.PI) - Math.ceil(from * denominator / Math.PI) + 1)}, (_, i) => {
		const k = Math.ceil(from * denominator / Math.PI) + i, g = gcd(Math.abs(k), denominator), n = Math.abs(k) / g, d = denominator / g;
		return {value: k * Math.PI / denominator, label: k === 0 ? '0' : `${k < 0 ? '−' : ''}${n === 1 ? '' : n}π${d === 1 ? '' : `/${d}`}`};
	});
};
const ticks = (r: Range): Tick[] => Array.from({length: 5}, (_, i) => {const value = r[0] + (r[1] - r[0]) * i / 4; return {value, label: String(Number(value.toFixed(2)))};});
const Text: React.FC<{x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, children, color = INK, size = 27, anchor = 'start'}) => <text x={x} y={y} fill={color} textAnchor={anchor} style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: 600}}>{children}</text>;
const dPath = (points: Sample[], t: ReturnType<typeof graphTransform>) => points.map((p, i) => {const q = t.point(p.x, p.y); return `${i ? 'L' : 'M'}${q.x.toFixed(3)},${q.y.toFixed(3)}`;}).join(' ');
const GraphAxes: React.FC<{spec: GraphSpec}> = ({spec: s}) => {
	const t = graphTransform(s), b = t.box;
	const o = t.point(Math.max(s.x[0], Math.min(s.x[1], 0)), Math.max(s.y[0], Math.min(s.y[1], 0)));
	return <g>
		{(s.xTicks ?? ticks(s.x)).filter(v => v.value >= s.x[0] && v.value <= s.x[1]).map(v => {const p = t.point(v.value, 0); return <g key={v.value}><line x1={p.x} x2={p.x} y1={b.top} y2={b.top + b.height} stroke="#e2d9c9" /><Text x={p.x} y={b.top + b.height + 36} anchor="middle">{v.label}</Text></g>;})}
		{(s.yTicks ?? ticks(s.y)).filter(v => v.value >= s.y[0] && v.value <= s.y[1]).map(v => {const p = t.point(0, v.value); return <g key={v.value}><line x1={b.left} x2={b.left + b.width} y1={p.y} y2={p.y} stroke="#e2d9c9" /><Text x={b.left - 14} y={p.y + 9} anchor="end">{v.label}</Text></g>;})}
		<path d={`M${b.left},${o.y} H${b.left + b.width} M${o.x},${b.top} V${b.top + b.height}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
		<Text x={b.left} y={30} size={28}>{s.yLabel ?? 'y'}</Text><Text x={b.left + b.width} y={b.top + b.height + 67} anchor="end">{s.xLabel ?? 'x'}</Text>
	</g>;
};
export type AttachedTransform = {xScale?: number; xShift?: number; yScale?: number};
/** Map base geometry by X = xScale*x + xShift, Y = yScale*y. */
export const carriedPoint = (x: number, y: number, move: AttachedTransform = {}) => ({x: (move.xScale ?? 1) * x + (move.xShift ?? 0), y: (move.yScale ?? 1) * y});
export const carriedSlope = (slope: number, move: AttachedTransform = {}) => {
	const sx = move.xScale ?? 1, sy = move.yScale ?? 1;
	if (!Number.isFinite(sx) || sx === 0 || !Number.isFinite(sy) || !Number.isFinite(move.xShift ?? 0)) throw new RangeError('Finite nonzero horizontal scale required');
	return slope * sy / sx;
};
export const transformedGraph = (graph: GraphSpec, move: AttachedTransform): GraphSpec => {
	carriedSlope(0, move);
	const sx = move.xScale ?? 1, sy = move.yScale ?? 1, shift = move.xShift ?? 0;
	return {...graph, fn: x => sy * graph.fn((x - shift) / sx),
		domain: graph.domain?.map(d => sx > 0 ? {...d, from: sx*d.from+shift, to: sx*d.to+shift} : {from: sx*d.to+shift, to: sx*d.from+shift, includeFrom: d.includeTo, includeTo: d.includeFrom}),
		breaks: graph.breaks?.map(x => sx*x+shift), markers: graph.markers?.map(m => ({...m, ...carriedPoint(m.x, m.y, move)})),
		asymptotes: graph.asymptotes?.map(a => ({...a, value: a.axis === 'x' ? sx*a.value+shift : sy*a.value}))};
};
export type FunctionGraphProps = GraphSpec & {draw?: number; movingX?: number; tangent?: Tangent; children?: React.ReactNode; parameter?: number; parameterFn?: (x: number, parameter: number) => number; ghostParameter?: number; transform?: AttachedTransform};
export const endpointMarkers = (s: GraphSpec): GraphMarker[] => (s.domain ?? []).flatMap(d => ([{x: d.from, included: d.includeFrom}, {x: d.to, included: d.includeTo}])).filter(v => Number.isFinite(v.x) && Number.isFinite(s.fn(v.x)) && !s.markers?.some(m => m.x === v.x)).map(v => ({x: v.x, y: s.fn(v.x), kind: v.included ? 'included' : 'excluded'}));
/** A complete SVG, or use GraphLayer inside an existing SVG with the same spec. */
export const FunctionGraph: React.FC<FunctionGraphProps> = props => <svg style={{display: 'block'}} width={props.width ?? 800} height={props.height ?? 520} viewBox={`0 0 ${props.width ?? 800} ${props.height ?? 520}`} role="img" aria-label={props.label ?? 'Function graph'}><GraphLayer {...props} /></svg>;
export const GraphLayer: React.FC<FunctionGraphProps> = ({draw = 1, movingX: baseX, tangent: baseTangent, children, parameter = 0, parameterFn, ghostParameter, transform, ...base}) => {
	const source = parameterFn ? {...base, fn: (x: number) => parameterFn(x, parameter)} : base;
	const s = transform ? transformedGraph(source, transform) : source;
	const movingX = baseX === undefined ? undefined : carriedPoint(baseX, 0, transform).x;
	const tangent = baseTangent ? {...baseTangent, x: carriedPoint(baseTangent.x, 0, transform).x, slope: carriedSlope(baseTangent.slope, transform), span: baseTangent.span === undefined ? undefined : Math.abs((transform?.xScale ?? 1) * baseTangent.span)} : undefined;
	const id = `graph-${useId().replace(/:/g, '')}`, t = graphTransform(s), b = t.box;
	const curves = useMemo(() => sampleFunction(s), [s.fn, s.x[0], s.x[1], s.domain, s.breaks, s.markers, s.asymptotes]);
	const until = s.x[0] + Math.max(0, Math.min(1, draw)) * (s.x[1] - s.x[0]);
	const p = movingX !== undefined && inDomain(s, movingX) && Number.isFinite(s.fn(movingX)) ? t.point(movingX, s.fn(movingX)) : undefined;
	const a = tangent && inDomain(s, tangent.x) && Number.isFinite(tangent.slope) ? {x: tangent.x, y: s.fn(tangent.x)} : undefined;
	return <g>
		<defs><clipPath id={id}><rect x={b.left} y={b.top} width={b.width} height={b.height} /></clipPath><clipPath id={`${id}-draw`}><rect x={b.left} y={b.top} width={Math.max(0, t.point(until, 0).x - b.left)} height={b.height} /></clipPath></defs>
		<GraphAxes spec={s} />
		<g clipPath={`url(#${id})`}>
			{parameterFn && ghostParameter !== undefined && sampleFunction(transform ? transformedGraph({...base, fn: x => parameterFn(x, ghostParameter)}, transform) : {...base, fn: x => parameterFn(x, ghostParameter)}).map((line, i) => <path key={`ghost-${i}`} d={dPath(line, t)} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 8" fill="none" opacity={0.5} />)}
			{(s.asymptotes ?? []).map((v, i) => {const p = t.point(v.axis === 'x' ? v.value : s.x[0], v.axis === 'y' ? v.value : s.y[0]); return <g key={i}><line x1={v.axis === 'x' ? p.x : b.left} x2={v.axis === 'x' ? p.x : b.left + b.width} y1={v.axis === 'x' ? b.top : p.y} y2={v.axis === 'x' ? b.top + b.height : p.y} stroke={ACCENT} strokeWidth={3} strokeDasharray="10 8" />{v.label && <Text x={v.axis === 'x' ? p.x + 12 : b.left + 12} y={v.axis === 'x' ? b.top + 30 : p.y - 14} color={ACCENT}>{v.label}</Text>}</g>;})}
			<g clipPath={`url(#${id}-draw)`}>{curves.map((line, i) => <path key={i} d={dPath(line, t)} stroke={s.color ?? BLUE} strokeWidth={5} fill="none" strokeLinejoin="round" />)}</g>
			{a && tangent && Number.isFinite(a.y) && (() => {const span = tangent.span ?? (s.x[1] - s.x[0]) * 0.22, p = t.point(a.x - span, a.y - tangent.slope * span), q = t.point(a.x + span, a.y + tangent.slope * span), c = t.point(a.x, a.y), run = span * 0.6, r = t.point(a.x + run, a.y), e = t.point(a.x + run, a.y + tangent.slope * run); return <g><line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={ACCENT} strokeWidth={4} />{tangent.showSlope && <><path d={`M${c.x},${c.y} H${r.x} V${e.y}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 5" fill="none" /><Text x={b.left + 16} y={b.top + b.height - 18} color={ACCENT}>gradient = {Number(tangent.slope.toFixed(3))}</Text></>}</g>;})()}
			{p && <circle cx={p.x} cy={p.y} r={9} fill={ACCENT} stroke={CARD} strokeWidth={3} />}
		</g>
		{[...endpointMarkers(s), ...(s.markers ?? [])].filter(m => m.x <= until).map((m, i) => {const p = t.point(m.x, m.y); if (m.x < s.x[0] || m.x > s.x[1] || m.y < s.y[0] || m.y > s.y[1]) return null; return <g key={i}>{m.kind === 'corner' ? <path d={`M${p.x},${p.y - 10} l10,10 l-10,10 l-10,-10 Z`} fill={ACCENT} /> : <circle cx={p.x} cy={p.y} r={8} stroke={s.color ?? BLUE} strokeWidth={3.5} fill={m.kind === 'included' ? s.color ?? BLUE : CARD} />}{m.label && <Text x={p.x + 15} y={p.y - 16}>{m.label}</Text>}</g>;})}
		{children}
	</g>;
};

export const secantSlope = (fn: (x: number) => number, a: number, b: number): number => {
	if (Math.abs(b - a) < 1e-9) throw new RangeError('A secant needs distinct points');
	const slope = (fn(b) - fn(a)) / (b - a);
	if (!Number.isFinite(slope)) throw new RangeError('Nonfinite secant slope');
	return slope;
};
export type SecantToTangentProps = {graph: GraphSpec; derivative: (x: number) => number; a: number; fromX: number; at?: number; duration?: number; zoomRadius?: number};
export const secantState = (s: GraphSpec, derivative: (x: number) => number, a: number, fromX: number, progress: number) => {
	if (!inDomain(s, a) || !inDomain(s, fromX) || a === fromX || !connectedDomains(s).some(([lo, hi]) => a >= lo && a <= hi && fromX >= lo && fromX <= hi)) throw new RangeError('Secant points must be distinct and in one connected domain');
	const distance = (fromX - a) * (1 - Math.max(0, Math.min(1, progress)));
	const tangent = progress >= 1 || Math.abs(distance) < 1e-8;
	const x = tangent ? a : a + distance;
	const slope = tangent ? derivative(a) : secantSlope(s.fn, a, x);
	if (!Number.isFinite(slope)) throw new RangeError('Tangent derivative must be finite');
	return {x, slope, tangent};
};
/** Main plot and local inset share one mathematical secant; each uses its own calibrated transform. */
export const SecantToTangent: React.FC<SecantToTangentProps> = ({graph, derivative, a, fromX, at = 0, duration = 150, zoomRadius = 0.45}) => {
	const frame = useCurrentFrame(), p = prog(frame, at, duration), state = secantState(graph, derivative, a, fromX, p), t = graphTransform(graph), anchor = t.point(a, graph.fn(a)), q = t.point(state.x, graph.fn(state.x));
	const zoom: GraphSpec = {...graph, x: [a - zoomRadius, a + zoomRadius], y: [graph.fn(a) - zoomRadius * 4, graph.fn(a) + zoomRadius * 4], width: 430, height: 300, xTicks: [{value: a - zoomRadius, label: Number((a - zoomRadius).toFixed(3)).toString()}, {value: a, label: String(a)}, {value: a + zoomRadius, label: Number((a + zoomRadius).toFixed(3)).toString()}], yTicks: [{value: graph.fn(a) - zoomRadius * 4, label: Number((graph.fn(a) - zoomRadius * 4).toFixed(2)).toString()}, {value: graph.fn(a), label: Number(graph.fn(a).toFixed(2)).toString()}, {value: graph.fn(a) + zoomRadius * 4, label: Number((graph.fn(a) + zoomRadius * 4).toFixed(2)).toString()}], xLabel: 'x (zoom)', yLabel: 'y (zoom)'};
	const zoomQ = graphTransform(zoom).point(state.x, graph.fn(state.x));
	return <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
		<FunctionGraph {...graph} movingX={a} tangent={{x: a, slope: state.slope, showSlope: true}}>{!state.tangent && <circle cx={q.x} cy={q.y} r={8} fill={CARD} stroke={ACCENT} strokeWidth={4} />}<Text x={anchor.x + 14} y={anchor.y - 18} color={ACCENT}>P</Text></FunctionGraph>
		<div><FunctionGraph {...zoom} movingX={a} tangent={{x: a, slope: state.slope, span: zoomRadius}}>{!state.tangent && state.x >= zoom.x[0] && state.x <= zoom.x[1] && graph.fn(state.x) >= zoom.y[0] && graph.fn(state.x) <= zoom.y[1] && <circle cx={zoomQ.x} cy={zoomQ.y} r={7} fill={CARD} stroke={ACCENT} strokeWidth={3} />}</FunctionGraph>
			<div style={{fontFamily: FONT_DISPLAY, color: ACCENT, fontSize: 30, width: 430}}>{state.tangent ? 'Tangent: use f′(a)' : `Secant: two points, Δx = ${(state.x - a).toPrecision(3)}`}<br />gradient = {Number(state.slope.toFixed(3))}</div>
		</div>
	</div>;
};

export type DerivativeTracerProps = {graph: GraphSpec; derivative: (x: number) => number; derivativeY: Range; derivativeTicks?: readonly Tick[]; derivativeLabel?: string; derivativeDomain?: readonly DomainInterval[]; derivativeBreaks?: readonly number[]; at?: number; duration?: number; mode?: 'paired' | 'overlay'; dotXs?: readonly number[]};
export const derivativeSpec = (graph: GraphSpec, derivative: (x: number) => number, derivativeY: Range, domain?: readonly DomainInterval[], breaks: readonly number[] = []): GraphSpec => ({...graph, fn: derivative, y: derivativeY, domain: domain ?? graph.domain, breaks: [...(graph.breaks ?? []), ...breaks, ...(graph.asymptotes ?? []).filter(a => a.axis === 'x').map(a => a.value), ...(graph.markers ?? []).filter(m => m.kind !== 'included').map(m => m.x)], markers: [], asymptotes: []});
export const DerivativeTracer: React.FC<DerivativeTracerProps> = ({graph, derivative, derivativeY, derivativeTicks, derivativeLabel = 'gradient f′(x)', derivativeDomain, derivativeBreaks, at = 0, duration = 200, mode = 'paired', dotXs}) => {
	const f = useCurrentFrame(), p = prog(f, at, duration), x = graph.x[0] + p * (graph.x[1] - graph.x[0]);
	const lower: GraphSpec = {...derivativeSpec(graph, derivative, derivativeY, derivativeDomain, derivativeBreaks), yTicks: derivativeTicks, yLabel: derivativeLabel, color: ACCENT};
	const valid = inDomain(graph, x) && inDomain(lower, x) && Number.isFinite(derivative(x)), a = graphTransform(graph).point(x, graph.fn(x)), b = graphTransform(lower).point(x, derivative(x));
	if (mode === 'overlay') return <FunctionGraph {...graph} movingX={valid ? x : undefined} tangent={valid ? {x, slope: derivative(x)} : undefined}>{(dotXs ?? Array.from({length: 13}, (_, i) => graph.x[0] + (graph.x[1]-graph.x[0])*i/12)).filter(v => v <= x && inDomain(lower, v) && Number.isFinite(derivative(v))).map(v => {const q = graphTransform(graph).point(v, derivative(v)); return q.y >= graphTransform(graph).box.top && q.y <= graphTransform(graph).box.top + graphTransform(graph).box.height ? <circle key={v} cx={q.x} cy={q.y} r={8} fill={ACCENT} stroke={CARD} strokeWidth={2} /> : null;})}<Text x={100} y={graph.height ? graph.height-18 : 502} size={24} color={ACCENT}>Dots: (x, gradient), same y scale</Text></FunctionGraph>;
	return <div style={{position: 'relative', width: graph.width ?? 800}}>
		<FunctionGraph {...graph} yLabel={graph.yLabel ?? 'height f(x)'} movingX={valid ? x : undefined} tangent={valid ? {x, slope: derivative(x), span: (graph.x[1] - graph.x[0]) * 0.09} : undefined} />
		<FunctionGraph {...lower} draw={p} movingX={valid ? x : undefined} />
		{valid && <svg width={graph.width ?? 800} height={(graph.height ?? 520) * 2} style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}><path d={`M${a.x},${a.y} V${(graph.height ?? 520) + b.y}`} stroke={INK_SOFT} strokeDasharray="8 7" strokeWidth={2} fill="none" /><circle cx={b.x} cy={(graph.height ?? 520) + b.y} r={8} fill={ACCENT} /></svg>}
	</div>;
};

export type TangentTriangleProps = {graph: GraphSpec; x: number; slope: number; run: number; transform?: AttachedTransform; runLabel?: string; riseLabel?: string; readouts?: boolean};
/** Place inside FunctionGraph. Transform the whole triangle in mathematical units. */
export const TangentTriangle: React.FC<TangentTriangleProps> = ({graph, x, slope, run, transform, runLabel, riseLabel, readouts = true}) => {
	const t = graphTransform(graph), height = graph.fn(x), m = carriedSlope(slope, transform), start = carriedPoint(x, height, transform), corner = carriedPoint(x+run, height, transform), end = carriedPoint(x+run, height+slope*run, transform);
	const a=t.point(start.x,start.y), b=t.point(corner.x,corner.y), c=t.point(end.x,end.y);
	return <g><path d={`M${a.x},${a.y} H${b.x} V${c.y}`} fill="none" stroke={ACCENT} strokeWidth={3} strokeDasharray="7 5" /><Text x={(a.x+b.x)/2} y={a.y+30} anchor="middle" size={24}>{runLabel ?? `run ${Number((corner.x-start.x).toFixed(3))}`}</Text><Text x={b.x+12} y={(b.y+c.y)/2} size={24}>{riseLabel ?? `rise ${Number((end.y-corner.y).toFixed(3))}`}</Text>{readouts && <><Text x={100} y={75} size={25}>height = {Number(start.y.toFixed(3))}</Text><Text x={100} y={108} size={25}>gradient = {Number(m.toFixed(3))}</Text></>}</g>;
};

export type SignBoundary = {x: number; kind: 'zero' | 'excluded' | 'undefined'; label?: string};
export type SignChartProps = {graph: GraphSpec; derivative: (x: number) => number; boundaries: readonly SignBoundary[]; at?: number};
export const signIntervals = (graph: GraphSpec, derivative: (x: number) => number, boundaries: readonly SignBoundary[]) => connectedDomains({...graph, breaks: [...(graph.breaks ?? []), ...boundaries.map(v => v.x)]}).map(([from, to]) => ({from, to, sign: Math.sign(derivative((from + to) / 2))}));
/** Same width, left margin and x transform as FunctionGraph. List every derivative zero/undefined point. */
export const SignChart: React.FC<SignChartProps> = ({graph, derivative, boundaries, at = 0}) => {
	const f = useCurrentFrame(), t = graphTransform(graph), b = t.box;
	return <svg width={graph.width ?? 800} height={176} role="img" aria-label="Derivative signs and increasing or decreasing intervals" style={{opacity: prog(f, at, 16)}}>
		<Text x={b.left} y={29}>f′ sign → f behaviour</Text>
		{signIntervals(graph, derivative, boundaries).map((v, i) => {const l = t.point(v.from, 0).x, r = t.point(v.to, 0).x; if (!Number.isFinite(v.sign)) return null; return <g key={i}><rect x={l + 3} y={45} width={Math.max(0, r - l - 6)} height={70} fill={v.sign > 0 ? '#d9e8f6' : v.sign < 0 ? '#f5e5c8' : '#e6e1d7'} /><Text x={(l + r) / 2} y={76} anchor="middle" size={28}>{v.sign > 0 ? '+  ↗' : v.sign < 0 ? '−  ↘' : '0'}</Text><Text x={(l + r) / 2} y={103} anchor="middle" size={22}>{v.sign > 0 ? 'increasing' : v.sign < 0 ? 'decreasing' : 'constant'}</Text></g>;})}
		{boundaries.map((v, i) => {const x = t.point(v.x, 0).x; return <g key={i}><line x1={x} x2={x} y1={40} y2={119} stroke={INK_SOFT} strokeWidth={2} strokeDasharray={v.kind === 'zero' ? undefined : '5 4'} /><circle cx={x} cy={45} r={6} fill={v.kind === 'zero' ? INK : CARD} stroke={INK} strokeWidth={2} /><Text x={x} y={151} anchor="middle" size={25}>{v.label ?? `${v.x}${v.kind === 'zero' ? ': 0' : v.kind === 'excluded' ? ': excluded' : ': f′ undefined'}`}</Text></g>;})}
	</svg>;
};
