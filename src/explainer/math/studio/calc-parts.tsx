// Studio kit pass 2A, decision 27 (d15 to d19): piecewise families, one-sided secants, concavity tints and
// glyphs, stacked derivative panels, a chart on a plate's screen, the fence pen and the box net. Parts that
// already exist in src/explainer/math (OneSidedSecants, StackedDerivativePanels, FencePen, BoxNetFold) carry a
// Studio prefix here so the studio can be re-exported from math/kit.tsx without a clash.
import React, {useId} from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import type {DomainInterval, Range} from '../graphs';
import {CARD, FrameSvg, PlateSpec, SvgPlate, fmtNum, kf, niceNum, smooth, vis} from './primitives';
import {MATH_AMBER, MATH_BLUE, MATH_CURVE_OLIVE, MATH_DOWN_SOFT, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_ROLES, MATH_TEAL, MATH_UP, MATH_UP_SOFT} from './roles';
import {LiveReadoutBoard, ParameterSlider} from './readouts';
import {FnFamily, FunctionSimulator, FunctionSimulatorProps} from './fn-sim';
import {plateMap, usePlatePreload} from './rig';
import {PlotTick, StudioPlot, TXT, fnPath, makePlot} from './plot-core';

// ---------- piecewise families ----------
export type Piece = {from: number; to: number; includeFrom?: boolean; includeTo?: boolean; f: (x: number) => number; df: (x: number) => number};
export type PiecewiseFamily = FnFamily & {
	pieces: readonly Piece[];
	/** Index of the piece that owns x (-1 outside every piece). */
	owner: (x: number) => number;
	/** Filled dots at owned finite endpoints and open circles at unowned ones, skipped where the pieces meet. For FunctionSimulator `markers`. */
	endpointMarkers: (at: number, out?: number, color?: string) => {X: number; Y: number; at: number; out?: number; open?: boolean; color?: string}[];
	/** Left and right gradients at a join (NaN on a side with no piece). */
	sideGradients: (x: number) => {left: number; right: number};
};
const inPiece = (p: Piece, x: number) => (x > p.from || (x === p.from && !!p.includeFrom)) && (x < p.to || (x === p.to && !!p.includeTo));
/**
 * A FnFamily from pieces with owned endpoints (≤ or <). The curve, the filled dot and the open circle all come
 * from the same ownership. The derivative at a join is the shared gradient only when the pieces meet and both
 * one-sided gradients agree; otherwise it is NaN (no derivative there).
 */
export const piecewiseFamily = (pieces: readonly Piece[]): PiecewiseFamily => {
	if (!pieces.length || pieces.some(p => !(p.to > p.from))) throw new RangeError('piecewiseFamily: each piece needs from < to');
	const owner = (x: number) => pieces.findIndex(p => inPiece(p, x));
	const f = (x: number) => {const i = owner(x); return i < 0 ? NaN : pieces[i].f(x);};
	const sideGradients = (x: number) => {
		const L = pieces.find(p => x > p.from && x <= p.to), R = pieces.find(p => x >= p.from && x < p.to);
		return {left: L ? L.df(x) : NaN, right: R ? R.df(x) : NaN};
	};
	const df = (x: number) => {
		const i = owner(x);
		if (i < 0) return NaN;
		const p = pieces[i];
		const atJoin = (x === p.from && pieces.some(q => q !== p && q.to === x)) || (x === p.to && pieces.some(q => q !== p && q.from === x));
		if (!atJoin) return p.df(x);
		const L = pieces.find(q => x > q.from && x <= q.to)!, R = pieces.find(q => x >= q.from && x < q.to)!;
		const meet = Math.abs(L.f(x) - R.f(x)) < 1e-9, same = Math.abs(L.df(x) - R.df(x)) < 1e-9;
		return meet && same ? L.df(x) : NaN;
	};
	const domain: DomainInterval[] = pieces.map(p => ({from: p.from, to: p.to, includeFrom: p.includeFrom, includeTo: p.includeTo}));
	const endpointMarkers = (at: number, out?: number, color: string = INK) => {
		const res: {X: number; Y: number; at: number; out?: number; open?: boolean; color?: string}[] = [];
		pieces.forEach(p => {
			for (const [x, inc] of [[p.from, !!p.includeFrom], [p.to, !!p.includeTo]] as const) {
				if (!Number.isFinite(x)) continue;
				const Y = p.f(x);
				const other = pieces.find(q => q !== p && (q.from === x || q.to === x));
				if (other && Math.abs(other.f(x) - Y) < 1e-9) continue; // the pieces meet: no dot
				res.push({X: x, Y, at, out, open: !inc, color: inc ? color : MATH_EXCLUDED});
			}
		});
		return res;
	};
	return {f: u => f(u), df: u => df(u), domain, pieces, owner, endpointMarkers, sideGradients};
};

// ---------- StudioOneSidedSecants ----------
export type SecantStopH = {frame: number; h: number};
const hAt = (stops: readonly SecantStopH[], frame: number, move: number) => {
	const pts: [number, number][] = [];
	stops.forEach((s, i) => {
		if (i === 0) pts.push([s.frame, s.h]);
		else {pts.push([Math.max(stops[i - 1].frame, s.frame - move), stops[i - 1].h]); pts.push([s.frame, s.h]);}
	});
	return kf(frame, pts);
};
/** Four significant figures without a trailing exponent: 4.642, 21.54, 100.0, 102.0. */
export const fmtSig = (v: number, sig = 4) => {
	if (!Number.isFinite(v)) return 'undefined';
	if (Math.abs(v) >= 10 ** sig) return fmtNum(v, 0);
	const s = Math.abs(v).toPrecision(sig);
	return (v < 0 ? '−' : '') + s;
};
/**
 * Two secants from P(a, f(a)): blue from the left (h < 0) and teal from the right (h > 0), each driven by its own
 * held stops (h is never 0), each with its own readout row showing the actual quotient. Optional rise (amber) and
 * run (teal) legs on one side, a `merge` cue that fades both into one violet tangent, a vertical line, and a
 * "→ ∞: no limit" state per side. The curve and axes come from FunctionSimulator (pass a piecewiseFamily).
 */
export const StudioOneSidedSecants: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range};
	family: FnFamily; a: number;
	left?: {stops: readonly SecantStopH[]; at?: number; out?: number};
	right?: {stops: readonly SecantStopH[]; at?: number; out?: number};
	move?: number;
	legs?: {side: 'left' | 'right'; at: number; out?: number};
	merge?: {at: number; slope: number; halfLength?: number};
	vertical?: {at: number; label?: string};
	noLimit?: {side: 'left' | 'right' | 'both'; at: number; text?: string};
	readout?: {x: number; y: number; width?: number; at?: number; title?: string};
	format?: (v: number) => string;
	sim?: Partial<FunctionSimulatorProps>;
	at?: number; out?: number;
}> = ({x, y, width = 1100, height = 760, window: win, family, a, left, right, move = 22, legs, merge, vertical, noLimit, readout, format = fmtSig, sim = {}, at = 0, out}) => {
	const f = useCurrentFrame();
	const id = `oss-${useId().replace(/:/g, '')}`;
	const fa = family.f(a, {});
	if (!Number.isFinite(fa)) throw new RangeError('StudioOneSidedSecants: f(a) must be defined');
	const side = (s: {stops: readonly SecantStopH[]} | undefined, sign: 1 | -1) => {
		if (!s) return null;
		if (s.stops.some(q => !(q.h * sign > 0))) throw new RangeError('StudioOneSidedSecants: left stops need h < 0 and right stops h > 0');
		const h = hAt(s.stops, f, move), xq = a + h, yq = family.f(xq, {});
		return {h, xq, yq, slope: (yq - fa) / h};
	};
	const L = side(left, -1), R = side(right, 1);
	const mergeO = merge ? prog(f, merge.at, 16) : 0;
	const m = makePlot(x, y, width, height, win);
	const P = m.pf(a, fa);
	const secLine = (s: NonNullable<typeof L>, color: string, o: number, key: string) => {
		const Q = m.pf(s.xq, s.yq), vx = Q[0] - P[0], vy = Q[1] - P[1], l = Math.hypot(vx, vy) || 1, e = 1400;
		return <g key={key} opacity={o}>
			<line x1={P[0] - (vx / l) * e} y1={P[1] - (vy / l) * e} x2={P[0] + (vx / l) * e} y2={P[1] + (vy / l) * e} stroke={color} strokeWidth={5.5} strokeLinecap="round" />
			<circle cx={Q[0]} cy={Q[1]} r={12} fill={color} stroke={CARD} strokeWidth={4} />
		</g>;
	};
	const lo = left ? vis(f, left.at ?? at, left.out) * (1 - mergeO) : 0, ro = right ? vis(f, right.at ?? at, right.out) * (1 - mergeO) : 0;
	const legS = legs ? (legs.side === 'left' ? L : R) : null;
	const legO = legs && legS ? vis(f, legs.at, legs.out) * (1 - mergeO) : 0;
	const noLim = (s: 'left' | 'right') => noLimit && (noLimit.side === s || noLimit.side === 'both') && f >= noLimit.at;
	return (
		<>
			<FunctionSimulator x={x} y={y} width={width} height={height} window={win} family={family} timeline={[{frame: 0, x: a}]} at={at} out={out} {...sim} />
			<FrameSvg style={{opacity: vis(f, at, out, 14)}}>
				<defs><clipPath id={id}><rect x={x + m.box.left} y={y + m.box.top} width={m.box.width} height={m.box.height} /></clipPath></defs>
				<g clipPath={`url(#${id})`}>
					{L ? secLine(L, MATH_ROLES.a.stroke, lo, 'l') : null}
					{R ? secLine(R, MATH_ROLES.b.stroke, ro, 'r') : null}
					{merge && mergeO > 0 ? (() => {
						const hl = merge.halfLength ?? 320, vx = m.sx, vy = -merge.slope * m.sy, l = Math.hypot(vx, vy);
						return <line x1={P[0] - (vx / l) * hl} y1={P[1] - (vy / l) * hl} x2={P[0] + (vx / l) * hl} y2={P[1] + (vy / l) * hl} stroke={MATH_GRADIENT} strokeWidth={6.5} strokeLinecap="round" opacity={mergeO} />;
					})() : null}
					{vertical ? <line x1={P[0]} x2={P[0]} y1={y + m.box.top} y2={y + m.box.top + m.box.height} stroke={MATH_GRADIENT} strokeWidth={6} opacity={prog(f, vertical.at, 14)} /> : null}
				</g>
				{legS && legO > 0 ? (() => {
					const C = m.pf(legS.xq, fa), Q = m.pf(legS.xq, legS.yq);
					return <g opacity={legO}>
						<line x1={P[0]} y1={P[1]} x2={C[0]} y2={C[1]} stroke={MATH_ROLES.b.stroke} strokeWidth={5} strokeDasharray="12 8" />
						<line x1={C[0]} y1={C[1]} x2={Q[0]} y2={Q[1]} stroke={MATH_ROLES.k.stroke} strokeWidth={5} strokeDasharray="12 8" />
						<text x={(P[0] + C[0]) / 2} y={C[1] + 40} textAnchor="middle" style={TXT(32, MATH_TEAL, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{`run ${fmtSig(Math.abs(legS.h), 3)}`}</text>
						<text x={C[0] + (legs!.side === 'right' ? 14 : -14)} y={(C[1] + Q[1]) / 2 + 11} textAnchor={legs!.side === 'right' ? 'start' : 'end'} style={TXT(32, MATH_AMBER, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{`rise ${fmtSig(Math.abs(legS.yq - fa), 3)}`}</text>
					</g>;
				})() : null}
				<circle cx={P[0]} cy={P[1]} r={14} fill={INK} stroke={CARD} strokeWidth={5} />
				{vertical?.label ? <text x={P[0] + 18} y={y + m.box.top + 40} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_GRADIENT}} stroke={CARD} strokeWidth={8} paintOrder="stroke" opacity={prog(f, vertical.at + 8, 14)}>{vertical.label}</text> : null}
			</FrameSvg>
			{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 560} at={readout.at ?? at} out={out} title={readout.title} inline rows={[
				...(L ? [{label: 'from the left', value: L.slope, role: 'a' as const, text: noLim('left') ? (noLimit!.text ?? '→ ∞: no limit') : format(L.slope), at: left!.at ?? at, dim: mergeO}] : []),
				...(R ? [{label: 'from the right', value: R.slope, role: 'b' as const, text: noLim('right') ? (noLimit!.text ?? '→ ∞: no limit') : format(R.slope), at: right!.at ?? at, dim: mergeO}] : []),
				...(merge ? [{label: 'tangent', value: merge.slope, role: 'gradient' as const, text: format(merge.slope), at: merge.at}] : []),
			]} /> : null}
		</>
	);
};

/** Zoom factor eased in its logarithm between keys (×1 to ×40 looks even): pass as FunctionSimulator zoom.factor. */
export const zoomFactorKeys = (keys: readonly {frame: number; factor: number}[]) => (frame: number) => Math.exp(kf(frame, keys.map(k => [k.frame, Math.log(k.factor)] as const)));

// ---------- concavity ----------
/** Concave-up tint (pale blue, "cup") and concave-down tint (pale olive, "cap"). */
export const MATH_CUP = '#dceaf7';
export const MATH_CAP = '#e9ecd3';
/** Glyph and label inks for the cup and cap (pass 4.5:1 on paper). */
export const MATH_CUP_INK = MATH_BLUE;
export const MATH_CAP_INK = MATH_CURVE_OLIVE;
export type ConcavityCell = {from: number; to: number; sign: 1 | -1};
/**
 * Concavity cells over a window from boundaries and one author test value strictly inside each interval (sign of
 * f″ there). Adjacent cells with the same sign merge into one (x⁴ at 0 is one cup), unless merge is false.
 */
export const concavityCells = (windowX: Range, boundaries: readonly number[], tests: readonly number[], f2: (x: number) => number, merge = true): ConcavityCell[] => {
	const edges = [windowX[0], ...boundaries, windowX[1]];
	if (tests.length !== edges.length - 1) throw new RangeError('concavityCells: one test value per interval');
	const cells: ConcavityCell[] = tests.map((t, i) => {
		if (!(t > edges[i] && t < edges[i + 1])) throw new RangeError(`concavityCells: test ${t} is not inside (${edges[i]}, ${edges[i + 1]})`);
		const v = f2(t);
		if (!Number.isFinite(v) || v === 0) throw new RangeError(`concavityCells: f″(${t}) must be finite and nonzero`);
		return {from: edges[i], to: edges[i + 1], sign: v > 0 ? 1 : -1};
	});
	if (!merge) return cells;
	return cells.reduce<ConcavityCell[]>((acc, c) => {const last = acc[acc.length - 1]; if (last && last.sign === c.sign) last.to = c.to; else acc.push({...c}); return acc;}, []);
};
/** FunctionSimulator `regions` tinting each concavity cell (cup blue, cap olive) on cue. */
export const concavityRegions = (cells: readonly ConcavityCell[], at: number, out?: number, opacity = 0.85) => cells.map(c => ({x: [c.from, c.to] as Range, color: c.sign > 0 ? MATH_CUP : MATH_CAP, opacity, at, out}));
/** FunctionSimulator `regions` tinting sign cells of f′ (increasing teal, decreasing amber). */
export const gradientRegions = (cells: readonly ConcavityCell[], at: number, out?: number, opacity = 0.85) => cells.map(c => ({x: [c.from, c.to] as Range, color: c.sign > 0 ? MATH_UP_SOFT : MATH_DOWN_SOFT, opacity, at, out}));
/** The ∪ (cup) or ∩ (cap) glyph as inline SVG. */
export const CupCapGlyph: React.FC<{kind: 'cup' | 'cap'; size?: number; color?: string; width?: number}> = ({kind, size = 48, color, width = 6}) => (
	<svg width={size} height={size} viewBox="0 0 48 48" style={{display: 'inline-block', verticalAlign: 'middle', overflow: 'visible'}}>
		<path d={kind === 'cup' ? 'M8,8 V24 Q8,42 24,42 Q40,42 40,24 V8' : 'M8,40 V24 Q8,6 24,6 Q40,6 40,24 V40'} fill="none" stroke={color ?? (kind === 'cup' ? MATH_CUP_INK : MATH_CAP_INK)} strokeWidth={width * (48 / size) * (size / 48)} strokeLinecap="round" />
	</svg>
);
/** Cup and cap glyphs at the middle of each cell, at maths height Y, in frame space (toFrame from a plot or FnGeometry). */
export const ConcavityGlyphs: React.FC<{cells: readonly ConcavityCell[]; toFrame: (X: number, Y: number) => [number, number]; Y: number; at: number; out?: number; size?: number; words?: boolean}> = ({cells, toFrame, Y, at, out, size = 52, words = false}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>{cells.map((c, i) => {
		const [px, py] = toFrame((c.from + c.to) / 2, Y);
		const o = vis(f, at + i * 6, out);
		return <div key={i} style={{position: 'absolute', left: px, top: py, transform: 'translate(-50%, -50%)', opacity: o, display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'pre'}}>
			<CupCapGlyph kind={c.sign > 0 ? 'cup' : 'cap'} size={size} />
			{words ? <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: c.sign > 0 ? MATH_CUP_INK : MATH_CAP_INK}}>{c.sign > 0 ? 'cup' : 'cap'}</span> : null}
		</div>;
	})}</div>;
};

// ---------- StudioStackedDerivativePanels ----------
export type StackPanel = {
	/** The panel's function (f, f′ or f″), author-supplied; never differentiated on screen. */
	fn: (x: number) => number;
	/** Its derivative, for the riding tangent on this panel (optional). */
	df?: (x: number) => number;
	y: Range; label?: string; color?: string; yTicks?: readonly (number | PlotTick)[];
	/** Draw the whole curve, or trace it from traceFrom up to the rider's x. */
	trace?: 'full' | 'progressive';
	tints?: {cells: readonly ConcavityCell[]; kind: 'gradient' | 'concavity'; at: number; out?: number};
	breaks?: readonly number[];
	at?: number;
};
/**
 * Two or three panels (f, f′, f″) on one shared x transform: the panels share x pixel positions exactly. Each has
 * its own y scale and label; a rider on the top panel carries a violet tangent (or on any panel listed in
 * `tangentOn`), lower panels can trace progressively up to the rider, dashed feature columns drop through every
 * panel on cues (with optional glows), rings mark zeros and turns on any panel ('touch' renders grey), and sign
 * tints use the f′ (teal, amber) or f″ (cup, cap) colours. `hideFormula` keeps generic labels f, f′, f″.
 */
export const StudioStackedDerivativePanels: React.FC<{
	x: number; y: number; width?: number; panelHeight?: number | readonly number[]; gap?: number;
	windowX: Range; panels: readonly StackPanel[]; xTicks?: readonly (number | PlotTick)[];
	rider?: {keys: readonly {frame: number; x: number}[]; at: number; out?: number; tangentOn?: readonly number[]};
	traceFrom?: number;
	columns?: readonly {x: number; at: number; out?: number; label?: string; glow?: [number, number]}[];
	rings?: readonly {panel: number; x: number; at: number; kind?: 'cross' | 'touch' | 'turn'; label?: string}[];
	markers?: readonly {panel: number; X: number; at: number; label?: string; shape?: 'dot' | 'diamond'; color?: string}[];
	hideFormula?: boolean; at?: number; out?: number;
}> = ({x, y, width = 1000, panelHeight = 260, gap = 8, windowX, panels, xTicks, rider, traceFrom, columns = [], rings = [], markers = [], hideFormula = false, at = 0, out}) => {
	const f = useCurrentFrame();
	if (panels.length < 2 || panels.length > 3) throw new RangeError('StudioStackedDerivativePanels: two or three panels');
	const hs = panels.map((_, i) => (typeof panelHeight === 'number' ? panelHeight : panelHeight[i] ?? 260));
	const tops = hs.map((_, i) => y + hs.slice(0, i).reduce((s, v) => s + v + gap, 0));
	const rx = rider ? kf(f, rider.keys.map(k => [k.frame, k.x] as const)) : NaN;
	const rO = rider ? vis(f, rider.at, rider.out) : 0;
	const from = traceFrom ?? windowX[0];
	const names = ['f(x)', 'f′(x)', 'f″(x)'];
	const maps = panels.map((p, i) => makePlot(x, tops[i], width, hs[i], {x: windowX, y: p.y}));
	const o = vis(f, at, out, 14);
	return (
		<>
			{panels.map((p, i) => {
				const color = p.color ?? (i === 0 ? INK : i === 1 ? MATH_GRADIENT : MATH_BLUE);
				const upto = p.trace === 'progressive' && rider ? Math.max(from, Math.min(windowX[1], rx)) : windowX[1];
				const start = p.trace === 'progressive' ? from : windowX[0];
				return <StudioPlot key={i} x={x} y={tops[i]} width={width} height={hs[i]} window={{x: windowX, y: p.y}} xTicks={i === panels.length - 1 ? xTicks : []} yTicks={p.yTicks ?? []} xLabel={i === panels.length - 1 ? 'x' : ''} yLabel={hideFormula ? ['f', 'f′', 'f″'][i] : (p.label ?? names[i])} at={p.at ?? at} out={out}>
					{m => <>
						<g clipPath={m.clip}>
							{p.tints ? p.tints.cells.map((c, j) => {
								const [x0] = m.p(c.from, 0), [x1] = m.p(c.to, 0);
								const col = p.tints!.kind === 'concavity' ? (c.sign > 0 ? MATH_CUP : MATH_CAP) : (c.sign > 0 ? MATH_UP_SOFT : MATH_DOWN_SOFT);
								return <rect key={j} x={x0} y={m.box.top} width={x1 - x0} height={m.box.height} fill={col} opacity={0.85 * vis(f, p.tints!.at + j * 6, p.tints!.out)} />;
							}) : null}
							{upto > start ? <path d={fnPath(m, p.fn, start, upto, 300, p.breaks)} stroke={color} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null}
							{rider && rO > 0 && Number.isFinite(p.fn(rx)) && (rider.tangentOn ?? [0]).includes(i) && p.df ? (() => {
								const [px, py] = m.p(rx, p.fn(rx)), sl = p.df(rx), vx = m.sx, vy = -sl * m.sy, l = Math.hypot(vx, vy), hl = 150;
								return <line x1={px - (vx / l) * hl} y1={py - (vy / l) * hl} x2={px + (vx / l) * hl} y2={py + (vy / l) * hl} stroke={MATH_GRADIENT} strokeWidth={5.5} strokeLinecap="round" opacity={rO} />;
							})() : null}
						</g>
						{rider && rO > 0 && Number.isFinite(p.fn(rx)) && (i === 0 || p.trace === 'progressive') ? (() => {
							const [px, py] = m.p(rx, Math.max(p.y[0], Math.min(p.y[1], p.fn(rx))));
							return <circle cx={px} cy={py} r={12} fill={i === 0 ? MATH_GRADIENT : color} stroke={CARD} strokeWidth={4} opacity={rO} />;
						})() : null}
					</>}
				</StudioPlot>;
			})}
			<FrameSvg style={{opacity: o}}>
				{rider && rO > 0 ? (() => {
					const pts = panels.map((p, i) => (i === 0 || p.trace === 'progressive') && Number.isFinite(p.fn(rx)) ? maps[i].pf(rx, Math.max(p.y[0], Math.min(p.y[1], p.fn(rx)))) : null).filter((q): q is [number, number] => !!q);
					return pts.length > 1 ? <path d={pts.map((q, i) => `${i ? 'L' : 'M'}${q[0]},${q[1]}`).join(' ')} stroke={MATH_GRADIENT} strokeWidth={3} strokeDasharray="6 9" opacity={0.7 * rO} fill="none" /> : null;
				})() : null}
				{columns.map((c, i) => {
					const co = vis(f, c.at, c.out);
					if (co <= 0.001) return null;
					const X = maps[0].pf(c.x, 0)[0], top = tops[0] + maps[0].box.top, bot = tops[panels.length - 1] + maps[panels.length - 1].box.top + maps[panels.length - 1].box.height;
					const g = c.glow ? vis(f, c.glow[0], c.glow[1]) : 0;
					return <g key={i} opacity={co}>
						{g > 0 ? <rect x={X - 16} y={top} width={32} height={(bot - top) * smooth(prog(f, c.at, 20))} fill={MATH_ROLES.k.soft} opacity={0.8 * g} rx={10} /> : null}
						<line x1={X} x2={X} y1={top} y2={top + (bot - top) * smooth(prog(f, c.at, 20))} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" />
						{c.label ? <text x={X} y={top - 12} textAnchor="middle" style={TXT(30, INK, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{c.label}</text> : null}
					</g>;
				})}
				{rings.map((r, i) => {
					const ro = vis(f, r.at);
					if (ro <= 0.001) return null;
					const p = panels[r.panel];
					const Y = r.kind === 'turn' ? p.fn(r.x) : 0;
					const [cx, cy] = maps[r.panel].pf(r.x, Y);
					const col = r.kind === 'touch' ? MATH_EXCLUDED : r.kind === 'turn' ? MATH_AMBER : MATH_UP;
					return <g key={'r' + i} opacity={ro}>
						<circle cx={cx} cy={cy} r={24 * smooth(prog(f, r.at, 14))} fill="none" stroke={col} strokeWidth={5} />
						{r.label ? <text x={cx + 30} y={cy - 22} style={TXT(30, INK, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{r.label}</text> : null}
					</g>;
				})}
				{markers.map((mk, i) => {
					const mo = vis(f, mk.at);
					if (mo <= 0.001) return null;
					const [cx, cy] = maps[mk.panel].pf(mk.X, panels[mk.panel].fn(mk.X));
					const c = mk.color ?? INK;
					return <g key={'m' + i} opacity={mo}>
						{mk.shape === 'diamond' ? <path d={`M${cx},${cy - 15} L${cx + 15},${cy} L${cx},${cy + 15} L${cx - 15},${cy} Z`} fill={c} stroke={CARD} strokeWidth={4} /> : <circle cx={cx} cy={cy} r={12} fill={c} stroke={CARD} strokeWidth={4} />}
						{mk.label ? <text x={cx + 20} y={cy - 18} style={TXT(30, c, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{mk.label}</text> : null}
					</g>;
				})}
			</FrameSvg>
		</>
	);
};

// ---------- ScreenChart ----------
/**
 * A small coded graph inside a plate's blank screen (file-pixel rectangle): light axes, tick labels at 28 px or
 * more, a curve drawn from the window's left up to `upTo`, a riding dot, and hand tags in data coordinates.
 * The curve is clipped to the screen rectangle.
 */
export const ScreenChart: React.FC<{
	plate: PlateSpec; x: number; y: number; w: number; screen: readonly [number, number, number, number]; drawPlate?: boolean;
	window: {x: Range; y: Range}; fn: (X: number) => number; upTo?: number;
	xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string;
	tags?: readonly {X: number; Y: number; text: string; at: number; out?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}[];
	color?: string; dot?: boolean; pad?: {l?: number; r?: number; t?: number; b?: number}; tickSize?: number;
	at?: number; out?: number;
}> = ({plate, x, y, w, screen, drawPlate = true, window: win, fn, upTo, xTicks = [], yTicks = [], xLabel, yLabel, tags = [], color = '#fbf6e9', dot = true, pad = {}, tickSize = 28, at = 0, out}) => {
	usePlatePreload(drawPlate ? [plate.src] : []);
	const f = useCurrentFrame();
	const id = `sc-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const mp = plateMap(plate, x, y, w);
	const [s0x, s0y] = mp.at(screen[0], screen[1]), [s1x, s1y] = mp.at(screen[2], screen[3]);
	const L = s0x + (pad.l ?? 78), R = s1x - (pad.r ?? 26), T = s0y + (pad.t ?? (yLabel ? 46 : 22)), B = s1y - (pad.b ?? (xLabel ? 78 : 50));
	const X = (v: number) => L + ((v - win.x[0]) / (win.x[1] - win.x[0])) * (R - L);
	const Y = (v: number) => B - ((v - win.y[0]) / (win.y[1] - win.y[0])) * (B - T);
	const end = Math.max(win.x[0], Math.min(win.x[1], upTo ?? win.x[1]));
	let d = '';
	for (let i = 0; i <= 200; i++) {const v = win.x[0] + ((end - win.x[0]) * i) / 200; const yy = fn(v); if (Number.isFinite(yy)) d += `${d ? 'L' : 'M'}${X(v).toFixed(1)},${Y(Math.max(win.y[0], Math.min(win.y[1], yy))).toFixed(1)} `;}
	const lt = (t: number | PlotTick) => (typeof t === 'number' ? {value: t, label: niceNum(t)} : t);
	const soft = '#cfe3df';
	const ts = Math.max(28, tickSize);
	return (
		<FrameSvg style={{opacity: o}}>
			{drawPlate ? <SvgPlate plate={plate} x={x} y={y} w={w} /> : null}
			<defs><clipPath id={id}><rect x={s0x} y={s0y} width={s1x - s0x} height={s1y - s0y} /></clipPath></defs>
			<g clipPath={`url(#${id})`}>
				{yTicks.map(lt).map(t => <g key={'y' + t.value}><line x1={L} x2={R} y1={Y(t.value)} y2={Y(t.value)} stroke={soft} strokeWidth={1.5} opacity={0.35} /><text x={L - 12} y={Y(t.value) + ts * 0.35} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: ts, fill: soft}}>{t.label}</text></g>)}
				{xTicks.map(lt).map(t => <text key={'x' + t.value} x={X(t.value)} y={B + ts + 8} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: ts, fill: soft}}>{t.label}</text>)}
				<path d={`M${L},${T - 6} V${B} H${R + 6}`} stroke={soft} strokeWidth={3} fill="none" />
				{xLabel ? <text x={R} y={B + ts * 2 + 16} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: ts, fill: soft}}>{xLabel}</text> : null}
				{yLabel ? <text x={L} y={T - 16} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: ts, fill: soft}}>{yLabel}</text> : null}
				<path d={d} stroke={color} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				{dot && Number.isFinite(fn(end)) ? <circle cx={X(end)} cy={Y(Math.max(win.y[0], Math.min(win.y[1], fn(end))))} r={9} fill="#f2b84b" stroke="#1d2226" strokeWidth={3} /> : null}
				{tags.map((t, i) => {const to = vis(f, t.at, t.out); return to > 0.001 ? <text key={'t' + i} x={X(t.X)} y={Y(t.Y)} textAnchor={t.anchor ?? 'start'} opacity={to} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: t.color ?? '#f2b84b'}}>{t.text}</text> : null;})}
			</g>
		</FrameSvg>
	);
};

// ---------- StudioFencePen ----------
export type FencePenState = {x: number; y: number; area: number; fence: number};
/** Pen against a wall: 'fence' mode y = total − 2x (0 < x < total/2); 'fixed' mode y = fixedArea / x. */
export const fencePenState = (total: number, x: number, mode: 'fence' | 'fixed' = 'fence', fixedArea?: number): FencePenState => {
	if (!(x > 0)) throw new RangeError('fencePenState: x must be positive');
	if (mode === 'fence' && !(x < total / 2)) throw new RangeError('fencePenState: x must stay below total / 2');
	if (mode === 'fixed' && !(fixedArea && fixedArea > 0)) throw new RangeError('fencePenState: fixed mode needs a positive area');
	const y = mode === 'fixed' ? fixedArea! / x : total - 2 * x;
	return {x, y, area: x * y, fence: 2 * x + y};
};
/**
 * Plan view of a pen against a wall: the wall along the top (a painted strip tiled at native aspect, or a coded
 * stone band), three coded timber sides with corner posts, a grass tint inside, side labels in the x (blue) and
 * y (teal) role colours, and an optional area label and linked slider. Drive x from the same timeline as the
 * graph; collapses towards 0 or total/2 draw as thin strips.
 */
export const StudioFencePen: React.FC<{
	cx: number; top: number; scale?: number; total?: number; x: number; mode?: 'fence' | 'fixed'; fixedArea?: number;
	wall?: {plate?: PlateSpec; length: number; h?: number};
	labels?: 'values' | 'symbols' | 'none'; unit?: string; showArea?: boolean; areaText?: string; pulse?: 'x' | 'y';
	slider?: {x: number; y: number; width?: number; min: number; max: number; ticks: {value: number; label: string}[]};
	at?: number; out?: number;
}> = ({cx, top, scale = 10, total = 40, x: xv, mode = 'fence', fixedArea, wall = {length: 460}, labels = 'values', unit = 'm', showArea = true, areaText, pulse, slider, at = 0, out}) => {
	usePlatePreload(wall.plate ? [wall.plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const q = fencePenState(total, xv, mode, fixedArea);
	const wh = wall.h ?? 46;
	const wy = top + wh; // pen starts under the wall
	const W = q.y * scale, Hh = q.x * scale;
	const x0 = cx - W / 2;
	const wallX0 = cx - wall.length / 2;
	const tiles: React.ReactNode[] = [];
	if (wall.plate) {
		const pl = wall.plate, tw = (wh * (pl.box[2] - pl.box[0])) / (pl.box[3] - pl.box[1]);
		for (let k = 0; k * tw < wall.length; k++) tiles.push(<SvgPlate key={k} plate={pl} x={wallX0 + k * tw} y={top} w={tw} />);
	}
	const lab = (v: number, sym: string) => (labels === 'symbols' ? `${sym} ${unit}` : `${niceNum(v, 1)} ${unit}`);
	const sw = (s: 'x' | 'y') => (pulse === s ? 9 + 3 * Math.sin(f * 0.3) : 8);
	const wood = '#8a5a2b';
	const clipId = `fp-${Math.round(cx)}-${Math.round(top)}`;
	return (
		<>
			<FrameSvg style={{opacity: o}}>
				<defs><clipPath id={clipId}><rect x={wallX0} y={top} width={wall.length} height={wh} /></clipPath></defs>
				{wall.plate ? <g clipPath={`url(#${clipId})`}>{tiles}</g> : <g>
					<rect x={wallX0} y={top} width={wall.length} height={wh} rx={6} fill="#b9ad98" stroke="#7d7262" strokeWidth={3} />
					{Array.from({length: Math.ceil(wall.length / 46)}, (_, k) => <line key={k} x1={wallX0 + k * 46 + (k % 2) * 23} x2={wallX0 + k * 46 + (k % 2) * 23} y1={top + 4} y2={top + wh - 4} stroke="#8d8270" strokeWidth={2} />)}
				</g>}
				<rect x={x0} y={wy} width={W} height={Hh} fill="#dcebc6" />
				<path d={`M${x0},${wy} V${wy + Hh}`} stroke={wood} strokeWidth={sw('x')} strokeLinecap="round" />
				<path d={`M${x0 + W},${wy} V${wy + Hh}`} stroke={wood} strokeWidth={sw('x')} strokeLinecap="round" />
				<path d={`M${x0},${wy + Hh} H${x0 + W}`} stroke={wood} strokeWidth={sw('y')} strokeLinecap="round" />
				{[[x0, wy], [x0 + W, wy], [x0, wy + Hh], [x0 + W, wy + Hh]].map(([px, py], i) => <circle key={i} cx={px} cy={py} r={8} fill="#5e3d1d" stroke={CARD} strokeWidth={2.5} />)}
				{labels !== 'none' ? <>
					<text x={x0 - 18} y={wy + Hh / 2 + 14} textAnchor="end" style={TXT(42, MATH_ROLES.a.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{lab(q.x, 'x')}</text>
					<text x={cx} y={wy + Hh + 52} textAnchor="middle" style={TXT(42, MATH_ROLES.b.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{lab(q.y, 'y')}</text>
				</> : null}
				{showArea ? (() => {
					const fits = W > 230 && Hh > 70;
					const txt = areaText ?? `${niceNum(q.area, 1)} ${unit}²`;
					return <text x={fits ? cx : x0 + W + 24} y={fits ? wy + Hh / 2 + 16 : wy + Math.max(Hh, 40) / 2 + 16} textAnchor={fits ? 'middle' : 'start'} style={TXT(44, INK, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{txt}</text>;
				})() : null}
			</FrameSvg>
			{slider ? <ParameterSlider x={slider.x} y={slider.y} width={slider.width ?? 520} symbol="x" role="a" value={xv} min={slider.min} max={slider.max} ticks={slider.ticks} at={at} out={out} digits={1} /> : null}
		</>
	);
};

// ---------- StudioBoxNetFold ----------
/** Open box from a W × H card with squares of side cut removed: base, wall height and volume. */
export const boxNetVolume = (W: number, H: number, cut: number) => {
	if (!(cut > 0 && cut < Math.min(W, H) / 2)) throw new RangeError('boxNetVolume: cut must leave a positive base');
	return {base: [W - 2 * cut, H - 2 * cut] as const, wall: cut, volume: cut * (W - 2 * cut) * (H - 2 * cut)};
};
/**
 * A card net folding into an open box, in oblique projection. Corner squares are outlined in red dashes, then
 * lift away (cutProgress 0 to 1); the four flaps fold up (fold 0 to 1). Every face is filled with the painted
 * card texture as an SVG pattern at a fixed scale of its native pixels (never stretched), or a coded card tint.
 * Dimension labels in the x (blue) and base (teal) colours; optional slider for x.
 */
export const StudioBoxNetFold: React.FC<{
	x: number; y: number; W: number; H: number; cut: number; fold: number; cutProgress: number; scale?: number;
	texture?: {plate: PlateSpec; px?: number};
	labels?: 'values' | 'symbols' | 'none'; unit?: string;
	slider?: {x: number; y: number; width?: number; min: number; max: number; ticks: {value: number; label: string}[]};
	at?: number; out?: number;
}> = ({x, y, W, H, cut, fold, cutProgress, scale = 18, texture, labels = 'symbols', unit = 'cm', slider, at = 0, out}) => {
	usePlatePreload(texture ? [texture.plate.src] : []);
	const f = useCurrentFrame();
	const pid = `bx-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	boxNetVolume(W, H, cut);
	const th = Math.max(0, Math.min(1, fold)) * Math.PI / 2, c = Math.cos(th), s = Math.sin(th);
	const K = 0.42; // oblique depth factor
	// x across, y depth (0 at the front), h up. Front-left corner of the sheet sits at (x, y + K·H·scale·0.7 + …)
	const ox = x, oy = y + (H * K * 0.75 + cut) * scale;
	const pt = (px: number, py: number, h: number) => `${(ox + (px + K * py) * scale).toFixed(1)},${(oy - (K * 0.75 * py + h) * scale).toFixed(1)}`;
	const poly = (pts: [number, number, number][], key: string, shade = 0) => (
		<g key={key}>
			<polygon points={pts.map(p => pt(...p)).join(' ')} fill={texture ? `url(#${pid})` : '#ead9b6'} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
			{shade > 0 ? <polygon points={pts.map(p => pt(...p)).join(' ')} fill="#3c2d14" opacity={shade} /> : null}
		</g>
	);
	const a = cut, bx = W - cut, by = H - cut;
	const front: [number, number, number][] = [[a, a, 0], [bx, a, 0], [bx, a - a * c, a * s], [a, a - a * c, a * s]];
	const back: [number, number, number][] = [[a, by, 0], [bx, by, 0], [bx, by + a * c, a * s], [a, by + a * c, a * s]];
	const left: [number, number, number][] = [[a, a, 0], [a, by, 0], [a - a * c, by, a * s], [a - a * c, a, a * s]];
	const right: [number, number, number][] = [[bx, a, 0], [bx, by, 0], [bx + a * c, by, a * s], [bx + a * c, a, a * s]];
	const base: [number, number, number][] = [[a, a, 0], [bx, a, 0], [bx, by, 0], [a, by, 0]];
	const lift = smooth(Math.max(0, Math.min(1, cutProgress)));
	const corners: [number, number, number, number][] = [[0, 0, -1, -1], [bx, 0, 1, -1], [0, by, -1, 1], [bx, by, 1, 1]];
	const tex = texture ? (() => {const k = texture.px ?? 0.25; return {w: texture.plate.nat[0] * k, h: texture.plate.nat[1] * k};})() : null;
	const lab = (v: number, sym: string) => (labels === 'symbols' ? sym : `${niceNum(v, 1)} ${unit}`);
	return (
		<>
			<FrameSvg style={{opacity: o}}>
				{texture && tex ? <defs><pattern id={pid} patternUnits="userSpaceOnUse" width={tex.w} height={tex.h}><image href={staticFile(texture.plate.src)} width={tex.w} height={tex.h} preserveAspectRatio="none" /></pattern></defs> : null}
				{poly(base, 'base')}
				{poly(back, 'back', 0.06 * s)}
				{poly(left, 'left', 0.1 * s)}
				{poly(right, 'right', 0.14 * s)}
				{poly(front, 'front', 0.04 * s)}
				{corners.map(([cx0, cy0, dx, dy], i) => {
					const off = lift * 3.2, op = 1 - lift;
					if (op <= 0.01) return null;
					const sq: [number, number, number][] = [[cx0 + dx * off, cy0 + dy * off, 0], [cx0 + a + dx * off, cy0 + dy * off, 0], [cx0 + a + dx * off, cy0 + a + dy * off, 0], [cx0 + dx * off, cy0 + a + dy * off, 0]];
					return <g key={'c' + i} opacity={op}>
						<polygon points={sq.map(p => pt(...p)).join(' ')} fill={texture ? `url(#${pid})` : '#ead9b6'} />
						<polygon points={sq.map(p => pt(...p)).join(' ')} fill="none" stroke={MATH_MISTAKE} strokeWidth={4} strokeDasharray="10 7" />
					</g>;
				})}
				{labels !== 'none' ? (() => {
					const fl = fold > 0.5;
					const xs = fl ? pt(bx + a * c + 0.3, a, a * s / 2) : pt(-0.4, a / 2, 0);
					const [xxs, xys] = xs.split(',').map(Number);
					const [bxs, bys] = pt((a + bx) / 2, -0.2, 0).split(',').map(Number);
					return <g>
						<text x={xxs + (fl ? 16 : -14)} y={xys + 14} textAnchor={fl ? 'start' : 'end'} style={TXT(40, MATH_ROLES.a.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{lab(cut, 'x')}</text>
						<text x={bxs} y={bys + 48} textAnchor="middle" style={TXT(40, MATH_ROLES.b.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{lab(W - 2 * cut, `${niceNum(W)} − 2x`)}</text>
					</g>;
				})() : null}
			</FrameSvg>
			{slider ? <ParameterSlider x={slider.x} y={slider.y} width={slider.width ?? 520} symbol="x" role="a" value={cut} min={slider.min} max={slider.max} ticks={slider.ticks} at={at} out={out} digits={1} /> : null}
		</>
	);
};

/** Limit marker colour for candidate rows and open ends (fixed conditions amber). */
export const MATH_LIMIT = MATH_AMBER;
