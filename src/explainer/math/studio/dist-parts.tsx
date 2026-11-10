// Kit pass 2B, probability set 3 (root decision 45; s04 to s08): histograms that fill from dropping data, density
// windows, the CDF tracer and subtraction, the strip rise ratio, arrival dots (with a wait mode), the tracker bar,
// the chip scatter and the quantile reader. Roles (decision 53): data blue, density teal, CDF violet, areas amber.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, FrameSvg, PlateSpec, SvgPlate, fmtNum, vis} from './primitives';
import {MATH_AMBER, MATH_GRADIENT, MATH_ROLES, MATH_TEAL, RoleKey} from './roles';
import {LiveReadoutBoard, ReadoutRow} from './readouts';
import {PlotMap, PlotTick, StudioPlot, TXT, fnPath, integrate, makePlot, regionPath} from './plot-core';
import {usePlatePreload} from './rig';
import {StudioPace, paceArrival, paceCount} from './prob-parts';
import {classIndex, seededRandom, solveIncreasing} from './stat-math';
import type {Range} from '../graphs';

const AREA_FILL = '#f3d9a6';

// ---------- ClassHistogram ----------
export type HistDrop = {
	/** Raw values, in arrival order. */
	values: readonly number[];
	/** Frame at which each value appears as a dot on the strip above the plot. */
	arriveAt: (i: number) => number;
	/** Frames the dot waits on the strip, then frames it takes to fall into its bar. */
	hold?: number; fall?: number;
	/** Frame y of the dot strip (default 60 px above the plot top). */
	stripY?: number;
};
/**
 * Touching class bars (blue data) on a StudioPlot. Either final `counts` that grow (`grow` 0..1), or `drop`: raw
 * values that appear as dots on a strip and fall into their class, each bar counting only landed values.
 * `density` plots count ÷ (n × class width) so the bars' areas add to 1. `model` adds a dashed teal reference.
 */
export const ClassHistogram: React.FC<{
	x: number; y: number; width?: number; height?: number; edges: readonly number[]; counts?: readonly number[]; grow?: number; drop?: HistDrop;
	density?: boolean; total?: number; yMax: number; xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string;
	role?: RoleKey; countLabels?: boolean; highlight?: {index: number; at: number; out?: number; role?: RoleKey};
	model?: {value: number | ((x: number) => number); label?: string; at?: number}; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1100, height = 620, edges, counts, grow = 1, drop, density = false, total, yMax, xTicks, yTicks, xLabel = 'x', yLabel = 'frequency', role = 'a', countLabels = true, highlight, model, at = 0, out, children}) => {
	const f = useCurrentFrame();
	const R = MATH_ROLES[role], n = edges.length - 1;
	const hold = drop?.hold ?? 10, fall = drop?.fall ?? 16;
	let shown: number[];
	const dots: {v: number; u: number; cls: number; lvl: number}[] = [];
	if (drop) {
		shown = new Array(n).fill(0);
		const level = new Array(n).fill(0);
		drop.values.forEach((v, i) => {
			const a = drop.arriveAt(i), j = classIndex(v, edges);
			if (f < a || j < 0) return;
			const u = (f - a - hold) / fall;
			if (u >= 1) shown[j]++;
			else dots.push({v, u: Math.max(0, u), cls: j, lvl: level[j]});
			level[j]++;
		});
	} else shown = (counts ?? new Array(n).fill(0)).map(c => c * grow);
	const N = total ?? (drop ? drop.values.length : (counts ?? []).reduce((s, c) => s + c, 0));
	const hOf = (c: number, j: number) => (density ? c / (Math.max(1, N) * (edges[j + 1] - edges[j])) : c);
	const m0 = makePlot(x, y, width, height, {x: [edges[0], edges[n]], y: [0, yMax]});
	const stripY = drop?.stripY ?? y + m0.box.top - 60;
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={{x: [edges[0], edges[n]], y: [0, yMax]}} xTicks={xTicks ?? edges} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} grid={false} at={at} out={out}>
			{m => <>
				{shown.map((c, j) => {
					const [x0, ty] = m.p(edges[j], hOf(c, j)), [x1, by] = m.p(edges[j + 1], 0);
					const hl = highlight?.index === j ? vis(f, highlight.at, highlight.out) : 0;
					return <g key={j}>
						{by - ty > 0.5 ? <rect x={x0} y={ty} width={x1 - x0} height={by - ty} fill={R.soft} stroke={R.stroke} strokeWidth={4} /> : null}
						{hl > 0 ? <rect x={x0 + 4} y={ty + 4} width={x1 - x0 - 8} height={by - ty - 8} fill="none" stroke={MATH_ROLES[highlight!.role ?? 'k'].stroke} strokeWidth={7} opacity={hl} /> : null}
						{countLabels && c >= 0.5 ? <text x={(x0 + x1) / 2} y={ty - 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: R.ink, fontVariantNumeric: 'tabular-nums'}}>{density ? fmtNum(hOf(c, j), 2) : Math.round(c)}</text> : null}
					</g>;
				})}
				{model ? (() => {
					const mo = vis(f, model.at ?? at);
					const fn = typeof model.value === 'number' ? (() => model.value as number) : model.value;
					const [lx, ly] = m.p(edges[n], fn(edges[n]));
					return <g opacity={mo}><path d={fnPath(m, fn, edges[0], edges[n])} stroke={MATH_ROLES.b.stroke} strokeWidth={5} strokeDasharray="14 9" fill="none" />
						{model.label ? <text x={lx} y={ly - 16} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: MATH_TEAL}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{model.label}</text> : null}</g>;
				})() : null}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
		{dots.length ? <FrameSvg style={{opacity: vis(f, at, out, 14)}}>
			{dots.map((d, i) => {
				const [sx] = m0.pf(d.v, 0);
				const c = (shown[d.cls] + 0.5), [, ty] = m0.pf(edges[d.cls], hOf(c, d.cls));
				const [cx0] = m0.pf(edges[d.cls], 0), [cx1] = m0.pf(edges[d.cls + 1], 0);
				const e = d.u * d.u, px = sx + ((cx0 + cx1) / 2 - sx) * Math.min(1, d.u * 1.5), py = stripY + (ty - stripY) * e;
				return <circle key={i} cx={px} cy={py} r={11} fill={R.stroke} stroke={CARD} strokeWidth={3} />;
			})}
		</FrameSvg> : null}
	</>;
};

// ---------- HeatsToHistogram ----------
/**
 * Data that arrive in groups (heats of eight reaction times, bags off a line): heat h's values appear together on
 * the strip at at + h × every, wait, then drop into the ClassHistogram. A readout card shows the heat and the
 * running number recorded. Pass everything ClassHistogram needs except `drop`.
 */
export const HeatsToHistogram: React.FC<Omit<React.ComponentProps<typeof ClassHistogram>, 'drop' | 'counts' | 'grow'> & {
	values: readonly number[]; perHeat: number; every: number; startAt: number; hold?: number; fall?: number;
	readout?: {x: number; y: number; width?: number; heatLabel?: (h: number, of: number) => string; countLabel?: string};
}> = ({values, perHeat, every, startAt, hold = 16, fall = 18, readout, ...hist}) => {
	const f = useCurrentFrame();
	const heats = Math.ceil(values.length / perHeat);
	const arrive = (i: number) => startAt + Math.floor(i / perHeat) * every;
	const h = Math.max(0, Math.min(heats, Math.floor((f - startAt) / every) + 1));
	const landed = values.filter((_, i) => f >= arrive(i) + hold + fall).length;
	return <>
		<ClassHistogram {...hist} drop={{values, arriveAt: arrive, hold, fall}} />
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={hist.at} out={hist.out} rows={[
			{label: 'heat', value: h, text: readout.heatLabel ? readout.heatLabel(h, heats) : `${h} of ${heats}`},
			{label: readout.countLabel ?? 'recorded', value: landed, digits: 0, role: hist.role ?? 'a'},
		]} /> : null}
	</>;
};

// ---------- density windows ----------
type WindowProps = {
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; f: (x: number) => number; ghost?: (x: number) => number;
	xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string; curveRole?: RoleKey;
	readout?: {x: number; y: number; width?: number; widthLabel?: string; probLabel?: string; digits?: number}; at?: number; out?: number;
};
const DensityWindow: React.FC<WindowProps & {center: number; w: number}> = ({x, y, width = 1100, height = 620, window: win, f: fn, ghost, xTicks, yTicks, xLabel = 'x', yLabel = 'f(x)', curveRole = 'b', readout, center, w, at = 0, out}) => {
	const a = center - w / 2, b = center + w / 2, P = integrate(fn, a, b, 200);
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
			{m => {
				const [xa] = m.p(a, 0), [xb] = m.p(b, 0), thin = xb - xa < 5;
				return <>
					<g clipPath={m.clip}>
						{thin ? <line x1={(xa + xb) / 2} x2={(xa + xb) / 2} y1={m.p(0, 0)[1]} y2={m.p(center, fn(center))[1]} stroke={MATH_ROLES.k.stroke} strokeWidth={5} />
							: <path d={regionPath(m, fn, a, b)} fill={AREA_FILL} stroke={MATH_ROLES.k.stroke} strokeWidth={4} />}
						{ghost ? <path d={fnPath(m, ghost, win.x[0], win.x[1])} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 9" fill="none" /> : null}
						<path d={fnPath(m, fn, win.x[0], win.x[1])} stroke={MATH_ROLES[curveRole].stroke} strokeWidth={7} fill="none" strokeLinejoin="round" />
					</g>
					<path d={`M${xa},${m.box.top + m.box.height + 8} V${m.box.top + m.box.height + 22} H${xb} V${m.box.top + m.box.height + 8}`} fill="none" stroke={MATH_AMBER} strokeWidth={4} opacity={thin ? 0 : 1} />
				</>;
			}}
		</StudioPlot>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} rows={[
			{label: readout.widthLabel ?? 'width', value: w, digits: w < 0.01 ? 3 : w < 0.1 ? 3 : 2, text: w < 1e-6 ? '0' : undefined},
			{label: readout.probLabel ?? 'probability', value: P, digits: readout.digits ?? 4, role: 'k', text: w < 1e-6 ? '0' : undefined},
		]} /> : null}
	</>;
};
/** An amber slice of fixed centre narrowing as `w` falls (drive w from frames, e.g. 0.1, 0.01, 0.001, 0): width and probability readouts. */
export const ShrinkingWindow: React.FC<WindowProps & {center: number; w: number}> = p => <DensityWindow {...p} />;
/** A fixed-width amber window sliding along the density as `center` moves; its captured area reads live (largest under the peak). */
export const SlidingWindow: React.FC<WindowProps & {center: number; w: number}> = p => <DensityWindow {...p} />;

// ---------- CdfTracer ----------
/** Exact density and CDF of a histogram (piecewise-constant density from class edges and counts). */
export const histogramModel = (edges: readonly number[], counts: readonly number[]) => {
	const N = counts.reduce((s, c) => s + c, 0), n = edges.length - 1;
	const dens = counts.map((c, j) => c / (N * (edges[j + 1] - edges[j])));
	const f = (v: number) => {const j = classIndex(v, edges); return j < 0 ? 0 : dens[j];};
	const F = (v: number) => {
		if (v <= edges[0]) return 0;
		if (v >= edges[n]) return 1;
		let s = 0;
		for (let j = 0; j < n; j++) {if (v >= edges[j + 1]) s += counts[j] / N; else {s += (counts[j] / N) * ((v - edges[j]) / (edges[j + 1] - edges[j])); break;}}
		return s;
	};
	return {f, F, dens};
};
/**
 * A marker sweeps x (keys); below, the density (curve or histogram `bars`) shades amber left of the marker; above,
 * a violet dot draws F(x) = P(X ≤ x) live (only up to the marker, so it is seen only to climb). The readout reads
 * the same F. Supply F, or let it be integrated numerically from the left of the window.
 */
export const CdfTracer: React.FC<{
	x: number; y: number; width?: number; heightTop?: number; heightBottom?: number; gap?: number; windowX: Range; yTop?: Range; yBottom: Range;
	density: (x: number) => number; F?: (x: number) => number; bars?: {edges: readonly number[]; counts: readonly number[]};
	marker: number; xTicks?: readonly (number | PlotTick)[]; yTopTicks?: readonly (number | PlotTick)[]; yBottomTicks?: readonly (number | PlotTick)[];
	xLabel?: string; topLabel?: string; bottomLabel?: string; full?: boolean; readout?: {x: number; y: number; width?: number; xLabel?: string; digits?: number}; at?: number; out?: number;
}> = ({x, y, width = 1100, heightTop = 380, heightBottom = 360, gap = 16, windowX, yTop = [0, 1.1], yBottom, density, F: Fin, bars, marker, xTicks, yTopTicks = [0.5, 1], yBottomTicks, xLabel = 'x', topLabel = 'F(x) = P(X ≤ x)', bottomLabel = 'f(x)', full = false, readout, at = 0, out}) => {
	const model = bars ? histogramModel(bars.edges, bars.counts) : null;
	const fd = model ? model.f : density;
	const F = Fin ?? (model ? model.F : (v: number) => integrate(density, windowX[0], v, 200));
	const X = Math.max(windowX[0], Math.min(windowX[1], marker)), FX = F(X);
	const y2 = y + heightTop + gap;
	const top = makePlot(x, y, width, heightTop, {x: windowX, y: yTop}), bot = makePlot(x, y2, width, heightBottom, {x: windowX, y: yBottom});
	const f = useCurrentFrame();
	return <>
		<StudioPlot x={x} y={y} width={width} height={heightTop} window={{x: windowX, y: yTop}} xTicks={[]} yTicks={yTopTicks} xLabel="" yLabel={topLabel} at={at} out={out}>
			{m => <g clipPath={m.clip}>
				<path d={fnPath(m, F, windowX[0], full ? windowX[1] : X, 300)} stroke={MATH_GRADIENT} strokeWidth={7} fill="none" strokeLinejoin="round" />
				{(() => {const [px, py] = m.p(X, FX); return <><line x1={m.p(windowX[0], FX)[0]} x2={px} y1={py} y2={py} stroke={MATH_GRADIENT} strokeWidth={3} strokeDasharray="8 7" /><circle cx={px} cy={py} r={13} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={5} /></>;})()}
			</g>}
		</StudioPlot>
		<StudioPlot x={x} y={y2} width={width} height={heightBottom} window={{x: windowX, y: yBottom}} xTicks={xTicks} yTicks={yBottomTicks} xLabel={xLabel} yLabel={bottomLabel} at={at} out={out}>
			{m => <g clipPath={m.clip}>
				{bars ? <>
					{model!.dens.map((d, j) => {const [x0, ty] = m.p(bars.edges[j], d), [x1, by] = m.p(bars.edges[j + 1], 0); return <rect key={j} x={x0} y={ty} width={x1 - x0} height={by - ty} fill={MATH_ROLES.a.soft} stroke={MATH_ROLES.a.stroke} strokeWidth={4} />;})}
					{model!.dens.map((d, j) => {const lo = bars.edges[j], hi = Math.min(X, bars.edges[j + 1]); if (hi <= lo) return null; const [x0, ty] = m.p(lo, d), [x1, by] = m.p(hi, 0); return <rect key={'a' + j} x={x0} y={ty} width={x1 - x0} height={by - ty} fill={AREA_FILL} stroke={MATH_ROLES.k.stroke} strokeWidth={3} />;})}
				</> : <>
					<path d={regionPath(m, fd, windowX[0], X)} fill={AREA_FILL} />
					<path d={fnPath(m, fd, windowX[0], windowX[1])} stroke={MATH_ROLES.b.stroke} strokeWidth={6} fill="none" />
				</>}
			</g>}
		</StudioPlot>
		<FrameSvg style={{opacity: vis(f, at, out, 14)}}>{(() => {const [px, py] = top.pf(X, FX), [, qy] = bot.pf(X, 0); return <line x1={px} x2={px} y1={py} y2={qy} stroke={MATH_AMBER} strokeWidth={4} strokeDasharray="10 8" />;})()}</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 480} at={at} out={out} rows={[
			{label: readout.xLabel ?? 'x', value: X, digits: 2, role: 'k'},
			{label: 'F(x) = P(X ≤ x)', value: FX, digits: readout.digits ?? 3, role: 'gradient'},
		]} /> : null}
	</>;
};

// ---------- CdfSubtraction ----------
/**
 * P(a < X ≤ b) = F(b) − F(a) on the CDF: violet F, dots at a and b with dashed levels to the y axis, and an amber
 * bracket between the two levels that writes "F(b) − F(a) = value" at `bracketAt`.
 */
export const CdfSubtraction: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; F: (x: number) => number; a: number; b: number;
	bracketAt: number; xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string; digits?: number;
	label?: (diff: number) => string; at?: number; out?: number;
}> = ({x, y, width = 1100, height = 620, window: win, F, a, b, bracketAt, xTicks, yTicks, xLabel = 'x', yLabel = 'F(x)', digits = 3, label, at = 0, out}) => {
	const f = useCurrentFrame();
	const Fa = F(a), Fb = F(b), d = Fb - Fa, bo = prog(f, bracketAt, 16);
	return <StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}
		html={m => {const [, ya] = m.pf(0, Fa), [, yb] = m.pf(0, Fb), [bx] = m.pf(win.x[0], 0); return <div style={{position: 'absolute', left: bx + 40, top: (ya + yb) / 2 - 34, opacity: bo, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: MATH_ROLES.k.ink, background: 'rgba(255,253,248,0.9)', borderRadius: 12, padding: '0 10px', whiteSpace: 'pre'}}>{label ? label(d) : `F(b) − F(a) = ${fmtNum(d, digits)}`}</div>;}}>
		{m => {
			const [pa, qa] = m.p(a, Fa), [pb, qb] = m.p(b, Fb), [x0] = m.p(win.x[0], 0), [, y0] = m.p(0, 0);
			return <>
				<g clipPath={m.clip}><path d={fnPath(m, F, win.x[0], win.x[1], 300)} stroke={MATH_GRADIENT} strokeWidth={7} fill="none" /></g>
				{[[pa, qa], [pb, qb]].map(([px, py], i) => <g key={i}><path d={`M${px},${y0} V${py} H${x0}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" /><circle cx={px} cy={py} r={12} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={4} /></g>)}
				<g opacity={bo}><path d={`M${x0 + 30},${qa} H${x0 + 16} V${qb} H${x0 + 30}`} fill="none" stroke={MATH_AMBER} strokeWidth={6} /><line x1={x0} x2={x0} y1={qa} y2={qb} stroke={MATH_ROLES.k.stroke} strokeWidth={10} opacity={0.5} /></g>
			</>;
		}}
	</StudioPlot>;
};

// ---------- StripRiseRatio ----------
/**
 * Equal-width strips on a CDF with their rise brackets: strip i is [x0, x0 + h] (h now, from frames). The readout
 * shows rise ÷ width for strip `readIndex`, approaching the tangent gradient as h shrinks (optionally drawn).
 */
export const StripRiseRatio: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; F: (x: number) => number; strips: readonly {x0: number; h: number}[];
	readIndex?: number; tangent?: {slope: number; at: number}; xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string;
	readout?: {x: number; y: number; width?: number; digits?: number}; at?: number; out?: number;
}> = ({x, y, width = 1100, height = 620, window: win, F, strips, readIndex = 0, tangent, xTicks, yTicks, xLabel = 'x', yLabel = 'F(x)', readout, at = 0, out}) => {
	const f = useCurrentFrame();
	const s = strips[readIndex], rise = F(s.x0 + s.h) - F(s.x0);
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
			{m => <>
				<g clipPath={m.clip}>{strips.map((st, i) => {const [x0, t0] = m.p(st.x0, win.y[1]), [x1, b0] = m.p(st.x0 + st.h, win.y[0]); return <rect key={i} x={x0} y={t0} width={Math.max(3, x1 - x0)} height={b0 - t0} fill={MATH_ROLES.k.soft} opacity={0.8} />;})}</g>
				<g clipPath={m.clip}><path d={fnPath(m, F, win.x[0], win.x[1], 300)} stroke={MATH_GRADIENT} strokeWidth={7} fill="none" /></g>
				{strips.map((st, i) => {const [x0, y0] = m.p(st.x0, F(st.x0)), [x1, y1] = m.p(st.x0 + st.h, F(st.x0 + st.h)); return <g key={i}><path d={`M${x0},${y0} H${x1 + 10}`} stroke={MATH_AMBER} strokeWidth={4} strokeDasharray="6 6" /><path d={`M${x1 + 8},${y0} H${x1 + 18} V${y1} H${x1 + 8}`} fill="none" stroke={MATH_AMBER} strokeWidth={5} /></g>;})}
				{tangent ? (() => {const to = prog(f, tangent.at, 14), [px, py] = m.p(s.x0, F(s.x0)), vx = m.sx, vy = -tangent.slope * m.sy, l = Math.hypot(vx, vy); return <line x1={px - (vx / l) * 220} y1={py - (vy / l) * 220} x2={px + (vx / l) * 220} y2={py + (vy / l) * 220} stroke={INK} strokeWidth={4} strokeDasharray="12 8" opacity={to} />;})() : null}
			</>}
		</StudioPlot>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} rows={[
			{label: 'width', value: s.h, digits: 3},
			{label: 'rise', value: rise, digits: 4, role: 'k'},
			{label: 'rise ÷ width', value: s.h > 0 ? rise / s.h : 0, digits: readout.digits ?? 3, role: 'gradient'},
		]} /> : null}
	</>;
};

// ---------- ArrivalDots ----------
/** Waits until the next arrival of something that comes every `period` from `first`: period − ((t − first) mod period). */
export const waitsOf = (times: readonly number[], period: number, first = 0) => times.map(t => {const r = ((t - first) % period + period) % period; return r === 0 ? 0 : period - r;});
/**
 * Stored arrival times fall onto a time strip at a pace; optional class tallies count live above the strip. Wait
 * mode draws the regular arrivals (ticks every `period`, with a sprite or a coded mark) and a teal bracket from
 * the latest arrival to the next tick labelled with its wait. An optional sprite (a van) runs along the strip.
 */
export const ArrivalDots: React.FC<{
	x: number; y: number; width?: number; range: Range; times: readonly number[]; pace: StudioPace; ticks?: readonly PlotTick[]; label?: string;
	tallies?: {edges: readonly number[]; labelY?: number}; wait?: {period: number; first?: number; sprite?: {plate: PlateSpec; w: number}; text?: (w: number) => string};
	runner?: {plate: PlateSpec; w: number; y: number}; fall?: number; role?: RoleKey; at?: number; out?: number;
}> = ({x, y, width = 1400, range, times, pace, ticks = [], label, tallies, wait, runner, fall = 18, role = 'a', at = 0, out}) => {
	usePlatePreload([...(wait?.sprite ? [wait.sprite.plate.src] : []), ...(runner ? [runner.plate.src] : [])]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role], N = times.length, k = paceCount(N, f, pace);
	const px = (v: number) => x + ((v - range[0]) / (range[1] - range[0])) * width;
	const counts = tallies ? new Array(tallies.edges.length - 1).fill(0) : [];
	const stack = new Map<number, number>();
	const dots = times.slice(0, k).map((t, i) => {
		const u = Math.min(1, (f - paceArrival(i, N, pace)) / fall);
		if (tallies && u >= 1) {const j = classIndex(t, tallies.edges); if (j >= 0) counts[j]++;}
		const key = Math.round(px(t) / 14), lvl = stack.get(key) ?? 0; stack.set(key, lvl + 1);
		return <circle key={i} cx={px(t)} cy={y - 14 - Math.min(lvl, 6) * 6 - (1 - u * u) * 260} r={11} fill={R.stroke} stroke={CARD} strokeWidth={3} opacity={Math.min(1, u * 3)} />;
	});
	let waitEl: React.ReactNode = null;
	if (wait && k > 0) {
		const t = times[k - 1], w = waitsOf([t], wait.period, wait.first ?? 0)[0];
		const a = px(t), b = px(t + w), wo = Math.min(1, (f - paceArrival(k - 1, N, pace)) / fall);
		waitEl = <g opacity={wo}><path d={`M${a},${y + 30} V${y + 44} H${b} V${y + 30}`} fill="none" stroke={MATH_ROLES.b.stroke} strokeWidth={5} />
			<text x={(a + b) / 2} y={y + 86} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_TEAL}}>{wait.text ? wait.text(w) : `wait ${fmtNum(w, 1)}`}</text></g>;
	}
	const busTicks: number[] = [];
	if (wait) for (let t = wait.first ?? 0; t <= range[1] + 1e-9; t += wait.period) if (t >= range[0]) busTicks.push(t);
	const runX = runner ? x + Math.min(1, Math.max(0, (f - pace.at) / Math.max(1, pace.until - pace.at))) * width : 0;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg>
			<line x1={x} x2={x + width} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{ticks.map(t => <g key={t.label}><line x1={px(t.value)} x2={px(t.value)} y1={y - 10} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={px(t.value)} y={y + (wait ? 124 : 46)} textAnchor="middle" style={TXT(30, INK, 700)}>{t.label}</text></g>)}
			{label ? <text x={x + width} y={y + (wait ? 166 : 88)} textAnchor="end" style={TXT(30, INK, 700)}>{label}</text> : null}
			{busTicks.map(t => wait!.sprite ? null : <g key={t}><rect x={px(t) - 9} y={y - 70} width={18} height={70} rx={4} fill={MATH_ROLES.b.stroke} /></g>)}
			{dots}
			{waitEl}
			{tallies ? tallies.edges.slice(0, -1).map((e, j) => <g key={'t' + j}><text x={(px(e) + px(tallies.edges[j + 1])) / 2} y={tallies.labelY ?? y - 300} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: R.ink, fontVariantNumeric: 'tabular-nums'}}>{counts[j]}</text>
				{j ? <line x1={px(e)} x2={px(e)} y1={(tallies.labelY ?? y - 300) - 40} y2={y} stroke={PAPER_DEEP} strokeWidth={3} strokeDasharray="6 8" /> : null}</g>) : null}
			{wait?.sprite ? busTicks.map(t => <SvgPlate key={'s' + t} plate={wait.sprite!.plate} x={px(t) - wait.sprite!.w / 2} y={y - 18 - wait.sprite!.w * (wait.sprite!.plate.box[3] - wait.sprite!.plate.box[1]) / (wait.sprite!.plate.box[2] - wait.sprite!.plate.box[0])} w={wait.sprite!.w} />) : null}
			{runner ? <SvgPlate plate={runner.plate} x={runX - runner.w / 2} y={runner.y} w={runner.w} /> : null}
		</FrameSvg>
	</div>;
};

// ---------- TrackerFill ----------
/** A coded tracker bar ("chance it has arrived") filling to `value` (0..1) in violet, with a big readout and optional end ticks and an icon plate. */
export const TrackerFill: React.FC<{x: number; y: number; width?: number; height?: number; value: number; label?: string; ticks?: readonly {value: number; label: string}[]; role?: RoleKey; digits?: number; icon?: {plate: PlateSpec; w: number}; at?: number; out?: number}> = ({x, y, width = 900, height = 64, value, label = 'chance it has arrived', ticks = [], role = 'gradient', digits = 3, icon, at = 0, out}) => {
	usePlatePreload(icon ? [icon.plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role], v = Math.max(0, Math.min(1, value));
	return <div style={{position: 'absolute', left: x, top: y, width: width + 280, opacity: o}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: R.ink, marginBottom: 8}}>{label}</div>
		<div style={{display: 'flex', alignItems: 'center', gap: 22}}>
			<div style={{position: 'relative', width, height, borderRadius: height / 2, background: PAPER_DEEP, border: `4px solid ${R.stroke}`, boxSizing: 'border-box', overflow: 'hidden'}}>
				<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: `${v * 100}%`, background: R.stroke}} />
			</div>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: R.ink, fontVariantNumeric: 'tabular-nums'}}>{fmtNum(v, digits)}</span>
			{icon ? <svg width={icon.w} height={icon.w} style={{overflow: 'visible'}}><SvgPlate plate={icon.plate} x={0} y={0} w={icon.w} /></svg> : null}
		</div>
		<div style={{position: 'relative', width, height: 40}}>{ticks.map(t => <span key={t.label} style={{position: 'absolute', left: t.value * width, top: 4, transform: 'translateX(-50%)', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: INK}}>{t.label}</span>)}</div>
	</div>;
};

// ---------- ChipScatter ----------
/** n seeded points spread evenly over a unit disc's area: [r (0 to 1), angle (radians)]. */
export const scatterInDisc = (seed: number, n: number): [number, number][] => {
	const r = seededRandom(seed);
	return Array.from({length: n}, () => [Math.sqrt(r()), 2 * Math.PI * r()] as [number, number]);
};
/**
 * Points (choc chips) land one by one at stored positions on a disc of radius R px (a plate, or a coded disc).
 * A coded circle of radius `circle.r` (as a fraction of the disc radius, 0..1) can be dragged out with a live count
 * "inside: n of N"; `rings` draw equal-area circles. Point positions are fractions of the radius.
 */
export const ChipScatter: React.FC<{
	cx: number; cy: number; R: number; points: readonly [number, number][]; pace: StudioPace; plate?: {plate: PlateSpec; w: number}; sprite?: {plate: PlateSpec; w: number};
	circle?: {r: number; label?: string}; rings?: readonly number[]; readout?: {x: number; y: number; width?: number; rows?: (inside: number, shown: number, r: number) => ReadoutRow[]};
	at?: number; out?: number;
}> = ({cx, cy, R, points, pace, plate, sprite, circle, rings = [], readout, at = 0, out}) => {
	usePlatePreload([...(plate ? [plate.plate.src] : []), ...(sprite ? [sprite.plate.src] : [])]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	const N = points.length, k = paceCount(N, f, pace);
	const inside = circle ? points.slice(0, k).filter(p => p[0] <= circle.r).length : 0;
	if (o <= 0.001) return null;
	const sh = sprite ? sprite.w * (sprite.plate.box[3] - sprite.plate.box[1]) / (sprite.plate.box[2] - sprite.plate.box[0]) : 0;
	const ph = plate ? plate.w * (plate.plate.box[3] - plate.plate.box[1]) / (plate.plate.box[2] - plate.plate.box[0]) : 0;
	return <>
		<FrameSvg style={{opacity: o}}>
			{plate ? <SvgPlate plate={plate.plate} x={cx - plate.w / 2} y={cy - ph / 2} w={plate.w} /> : <circle cx={cx} cy={cy} r={R} fill="#e8c48e" stroke="#b07a3a" strokeWidth={6} />}
			{rings.map((r, i) => <circle key={i} cx={cx} cy={cy} r={r * R} fill="none" stroke={MATH_AMBER} strokeWidth={5} strokeDasharray="12 8" />)}
			{points.slice(0, k).map(([r, a], i) => {
				const u = Math.min(1, (f - paceArrival(i, N, pace)) / 12), s = 1 + 1.5 * (1 - u);
				const px = cx + r * R * Math.cos(a), py = cy - r * R * Math.sin(a), hit = circle && r <= circle.r;
				return sprite ? <g key={i} transform={`translate(${px},${py}) scale(${s}) translate(${-sprite.w / 2},${-sh / 2})`} opacity={u}><SvgPlate plate={sprite.plate} x={0} y={0} w={sprite.w} /></g>
					: <circle key={i} cx={px} cy={py} r={10 * s} fill={hit ? '#4a2c17' : '#5c3a1e'} stroke={hit ? MATH_AMBER : CARD} strokeWidth={hit ? 4 : 2} opacity={u} />;
			})}
			{circle ? <g><circle cx={cx} cy={cy} r={circle.r * R} fill="rgba(209,143,31,0.12)" stroke={MATH_AMBER} strokeWidth={6} /><line x1={cx} y1={cy} x2={cx + circle.r * R} y2={cy} stroke={MATH_AMBER} strokeWidth={4} /><circle cx={cx} cy={cy} r={7} fill={INK} />
				{circle.label ? <text x={cx + circle.r * R / 2} y={cy - 16} textAnchor="middle" style={TXT(34, MATH_ROLES.k.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{circle.label}</text> : null}</g> : null}
		</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 480} at={at} out={out} rows={readout.rows ? readout.rows(inside, k, circle?.r ?? 0) : [
			{label: 'chips inside', value: inside, text: `${inside} of ${k}`, role: 'a'},
			{label: 'area inside ÷ whole', value: (circle?.r ?? 0) ** 2, digits: 3, role: 'k'},
		]} /> : null}
	</>;
};

// ---------- QuantileReader ----------
/**
 * Reading a quantile: an amber line leaves the F axis at height p, runs across to F and drops to the x axis at q
 * (F(q) = p, solved here). `reach` (0..1) animates the path (across in the first half, down in the second). With
 * a density f, a lower panel fills the area under f from the left to q as the drop lands. onQuantile can draw on
 * a plate (the cookie's circle) from the same q.
 */
export const QuantileReader: React.FC<{
	x: number; y: number; width?: number; heightTop?: number; heightBottom?: number; gap?: number; windowX: Range; F: (x: number) => number; p: number; reach: number;
	f?: (x: number) => number; yBottom?: Range; xTicks?: readonly (number | PlotTick)[]; yTopTicks?: readonly (number | PlotTick)[]; yBottomTicks?: readonly (number | PlotTick)[];
	xLabel?: string; qLabel?: (q: number) => string; pLabel?: (p: number) => string; onQuantile?: (q: number, reach: number) => React.ReactNode; at?: number; out?: number;
}> = ({x, y, width = 1000, heightTop = 400, heightBottom = 340, gap = 16, windowX, F, p, reach, f: dens, yBottom = [0, 1], xTicks, yTopTicks = [0.25, 0.5, 0.75, 1], yBottomTicks, xLabel = 'x', qLabel, pLabel, onQuantile, at = 0, out}) => {
	const fr = useCurrentFrame();
	const q = solveIncreasing(F, p, windowX[0], windowX[1]);
	const across = Math.min(1, reach * 2), down = Math.max(0, reach * 2 - 1);
	const y2 = y + heightTop + gap;
	const top = makePlot(x, y, width, heightTop, {x: windowX, y: [0, 1.1]});
	const [ax] = top.pf(windowX[0], p), [qx, py] = top.pf(q, p), [, base] = top.pf(q, 0);
	const yEnd = dens ? makePlot(x, y2, width, heightBottom, {x: windowX, y: yBottom}).pf(q, 0)[1] : base;
	return <>
		<StudioPlot x={x} y={y} width={width} height={heightTop} window={{x: windowX, y: [0, 1.1]}} xTicks={dens ? [] : xTicks} yTicks={yTopTicks} xLabel={dens ? '' : xLabel} yLabel="F(x)" at={at} out={out}>
			{m => <g clipPath={m.clip}><path d={fnPath(m, F, windowX[0], windowX[1], 300)} stroke={MATH_GRADIENT} strokeWidth={7} fill="none" /></g>}
		</StudioPlot>
		{dens ? <StudioPlot x={x} y={y2} width={width} height={heightBottom} window={{x: windowX, y: yBottom}} xTicks={xTicks} yTicks={yBottomTicks} xLabel={xLabel} yLabel="f(x)" at={at} out={out}>
			{m => <g clipPath={m.clip}><path d={regionPath(m, dens, windowX[0], windowX[0] + (q - windowX[0]) * down)} fill={AREA_FILL} /><path d={fnPath(m, dens, windowX[0], windowX[1])} stroke={MATH_ROLES.b.stroke} strokeWidth={6} fill="none" /></g>}
		</StudioPlot> : null}
		<FrameSvg style={{opacity: vis(fr, at, out, 14)}}>
			<line x1={ax} x2={ax + (qx - ax) * across} y1={py} y2={py} stroke={MATH_AMBER} strokeWidth={6} strokeLinecap="round" />
			{down > 0 ? <line x1={qx} x2={qx} y1={py} y2={py + (yEnd - py) * down} stroke={MATH_AMBER} strokeWidth={6} strokeLinecap="round" /> : null}
			<text x={ax + 12} y={py - 14} textAnchor="start" style={TXT(34, MATH_ROLES.k.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{pLabel ? pLabel(p) : `p = ${fmtNum(p, 2)}`}</text>
			{down >= 1 ? <text x={qx + 14} y={yEnd - 22} textAnchor="start" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: MATH_ROLES.k.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{qLabel ? qLabel(q) : fmtNum(q, 2)}</text> : null}
		</FrameSvg>
		{onQuantile ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>{onQuantile(q, reach)}</div> : null}
	</>;
};

/** The pale amber fill used for probability areas in these parts. */
export const DIST_AREA_FILL = AREA_FILL;
