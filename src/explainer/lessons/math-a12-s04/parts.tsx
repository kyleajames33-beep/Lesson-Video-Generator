// Lesson parts for math-a12-s04 (Revision 5: continuous random variables, histograms, P(X = x) = 0 and the CDF;
// sprinters' reaction times at a school athletics carnival), on the maths studio kit's probability set 3
// (dist-parts.tsx) and s03's parts (imported read-only through ../math-a12-s03/parts, which carry s01's, s02's and
// the f-strand board parts). Lesson-local rigs:
// - the reaction-time numbers (site card 02) and the stored 200 times (checked at load);
// - Blocks and Display plates; the display carries coded LED digits on its measured face;
// - TimesHist: the class histogram on a 0 to 0.7 s axis (counts or relative-frequency labels);
// - ZoomWindow: the third class zoomed (0.29 to 0.41 s), an amber slice about 0.35 narrowing to a line;
// - F9Plot: F(x) = x²/9 with its flat pieces, drawn as a pen sketch, with tangent stubs and a crossed chord;
// - AppPanel: an unbranded graphing-app panel plotting the same function; PredictRing: a short thinking ring.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, ClassHistogram, FrameSvg, MATH_AMBER, MATH_GRADIENT, MATH_ROLES, StudioPlot, fnPath, plateHeight, regionPath, smooth, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';
import {DIE_RED, Plate} from '../math-a12-s03/parts';

export * from '../math-a12-s03/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const EDGES = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7] as const;
export const COUNTS = [0, 20, 50, 70, 40, 20, 0] as const;
export const REL = ['0.10', '0.25', '0.35', '0.20', '0.10'] as const;
/** The 200 stored reaction times (author note g): ms values, uniform and distinct within each class, Python random.Random(404), in heat order. */
const MS = '229216457326213184365112447304220265251311394439334360550337338320561362307375361313302571462100314590324533281243431491355174490142373111399370481306284241271487183473277409358187212308343501225323404249333117168588238227257354151234467410559335357400435387572275390219297528325185123327161266384224366122205215418332488340380470312195102226484593237391292454430386589329232309364498372235341474244492464419352270252502295344368269371291166405482301203395254176202446315253293465486264345401475206383280388495500256305518558424214442392209598150316359342369563478389349310336526413381330415218233592';
export const TIMES: readonly number[] = Array.from({length: 200}, (_, i) => (Number(MS.slice(3 * i, 3 * i + 3)) + 0.5) / 1000);
export const clsOf = (v: number) => Math.floor(v * 10) - 1;
/** Running total F at the class ends (estimate from the data), joined by straight segments. */
export const FDATA = (x: number) => {
	const ends = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6], cum = [0, 0.1, 0.35, 0.7, 0.9, 1];
	if (x <= 0.1) return 0;
	if (x >= 0.6) return 1;
	const j = Math.floor((x - 0.1) / 0.1 + 1e-9);
	return cum[j] + (cum[j + 1] - cum[j]) * ((x - ends[j]) / 0.1);
};
export const F9 = (x: number) => (x < 0 ? 0 : x > 3 ? 1 : (x * x) / 9);
export const G8 = (x: number) => (x < 0 ? 0 : x > 2 ? 1 : (x * x + 2 * x) / 8);
{
	const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) < t;
	const tally = [0, 0, 0, 0, 0];
	TIMES.forEach(v => tally[clsOf(v)]++);
	const checks: [string, boolean][] = [
		['data', COUNTS.reduce((s: number, c) => s + c, 0) === 200 && tally.join() === '20,50,70,40,20' && new Set(TIMES).size === 200 && REL.every((r, i) => near(Number(r), COUNTS[i + 1] / 200)) && 25 * 8 === 200],
		['intervals', near((50 + 70) / 200, 0.6) && near((20 + 25) / 200, 0.225) && near((20 + 50) / 200, 0.35) && near(0.1 + 0.5 * 0.25, 0.225)],
		['shrinking', near(3.5 * 0.1, 0.35) && near(3.5 * 0.01, 0.035) && near(3.5 * 0.001, 0.0035) && near(3.5 * 0.02, 0.07)],
		['running total', [0.2, 0.3, 0.4, 0.5, 0.6].map(FDATA).map(v => v.toFixed(2)).join() === '0.10,0.35,0.70,0.90,1.00' && near(FDATA(0.4) - FDATA(0.2), 0.6) && near(FDATA(0.25), 0.225)],
		['x²/9', F9(0) === 0 && near(F9(3), 1) && near(F9(1), 1 / 9) && near(F9(2), 4 / 9) && near(F9(2) - F9(1), 1 / 3) && near(1 - F9(2), 5 / 9)],
		['die', near(4 / 6 - 2 / 6, 2 / 6)],
		['A1', near((80 + 40) / 400, 0.3) && near((160 + 40) / 400, 0.5) && 60 + 140 + 160 + 40 === 400],
		['A2', near(G8(1.5), 21 / 32) && near(G8(0.5), 5 / 32) && near(G8(1.5) - G8(0.5), 0.5) && near(G8(2), 1)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s04 numbers: ' + bad.join(', '));
}
export const DATA_R = MATH_ROLES.a;
export const AREA = MATH_ROLES.k;
export const CDF = MATH_GRADIENT;
export const GREY = '#6b6358';

// ---------- plates (alpha > 32 boxes, measured 16 Nov) ----------
export const BLOCKS: PlateSpec = {src: 'assets/maths/ma12-starting-blocks-v1.png', nat: [1620, 971], box: [165, 192, 1439, 795]};
export const DISPLAY: PlateSpec = {src: 'assets/maths/ma12-timing-display-v1.png', nat: [1619, 971], box: [333, 159, 1286, 864]};
/** The display's black face (native px, from ma12-timing-display-v1.json). */
const FACE = [382, 230, 1237, 467] as const;
export const S04_PLATES = [BLOCKS, DISPLAY, DIE_RED];
export const Blocks: React.FC<{x: number; y: number; w: number; at?: number; out?: number}> = p => <Plate plate={BLOCKS} {...p} />;
/** The trackside display, alpha box at (x, y), w wide, with coded LED text centred on its face. */
export const Display: React.FC<{x: number; y: number; w: number; text?: React.ReactNode; at?: number; out?: number; textAt?: number; size?: number; color?: string}> = ({x, y, w, text, at = -30, out, textAt = -30, size, color = '#ffc04d'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const s = w / (DISPLAY.box[2] - DISPLAY.box[0]);
	const fx = x + (FACE[0] - DISPLAY.box[0]) * s, fy = y + (FACE[1] - DISPLAY.box[1]) * s, fw = (FACE[2] - FACE[0]) * s, fh = (FACE[3] - FACE[1]) * s;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<Plate plate={DISPLAY} x={x} y={y} w={w} />
		{text !== undefined ? <div style={{position: 'absolute', left: fx, top: fy, width: fw, height: fh, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: prog(f, textAt, 8),
			fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size ?? fh * 0.62, color, letterSpacing: 2, fontVariantNumeric: 'tabular-nums', textShadow: `0 0 ${fh * 0.08}px rgba(255,170,40,0.55)`, whiteSpace: 'pre'}}>{text}</div> : null}
	</div>;
};
export const displayHeight = (w: number) => plateHeight(DISPLAY, w);
export const blocksHeight = (w: number) => plateHeight(BLOCKS, w);

// ---------- the reaction-time histogram ----------
export const relTicks = [0.1, 0.2, 0.3, 0.4].map(v => ({value: v * 200, label: v.toFixed(1)}));
export const countTicks4 = [20, 40, 60, 80].map(v => ({value: v, label: String(v)}));
export const timeTicks = EDGES.map(v => ({value: v, label: String(v)}));
/** The reaction-time histogram on 0 to 0.7 s. `counts` (per class, 7 slots) default to the data; rel labels the bars 0.10 to 0.35. */
export const TimesHist: React.FC<{x: number; y: number; w: number; h: number; counts?: readonly number[]; rel?: number; labels?: boolean; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode; yTicksOn?: boolean}> = ({x, y, w, h, counts = COUNTS, rel = 0, labels = true, at = -30, out, children, yTicksOn = true}) => {
	return <ClassHistogram x={x} y={y} width={w} height={h} edges={EDGES} counts={counts} yMax={85} xTicks={timeTicks} xLabel="reaction time (s)"
		yTicks={yTicksOn ? (rel > 0.5 ? relTicks : countTicks4) : []} yLabel={rel > 0.5 ? 'relative frequency' : 'number of times'} countLabels={false} at={at} out={out}>
		{m => <>
			{labels ? counts.map((c, j) => {
				if (c < 0.5) return null;
				const [px, py] = m.p((EDGES[j] + EDGES[j + 1]) / 2, c);
				return <text key={j} x={px} y={py - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: DATA_R.ink, fontVariantNumeric: 'tabular-nums'}}>{rel > 0.5 ? REL[j - 1] : Math.round(c)}</text>;
			}) : null}
			{children ? children(m) : null}
		</>}
	</ClassHistogram>;
};
/** An amber overlay on [a, b] up to height c (counts units) inside a TimesHist render prop. */
export const amberRect = (m: PlotMap, a: number, b: number, c: number, o = 1, dashRight = false) => {
	const [x0, y0] = m.p(a, c), [x1, y1] = m.p(b, 0);
	return <g opacity={o}>
		<rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={AREA.soft} stroke={AREA.stroke} strokeWidth={5} />
		{dashRight ? <line x1={x1} x2={x1} y1={y0 - 30} y2={y1} stroke={GREY} strokeWidth={5} strokeDasharray="12 9" /> : null}
	</g>;
};

// ---------- the zoomed window on the third class ----------
const DENS = (v: number) => (v < 0.3 ? 2.5 : v < 0.4 ? 3.5 : 2.0);
/** Probability in [c − w/2, c + w/2] under the even spread inside [0.3, 0.4) (density 3.5 per second). */
export const sliceP = (w: number) => 3.5 * w;
export const ZoomWindow: React.FC<{x: number; y: number; w: number; h: number; center?: number; width: number; lineDim?: number; extra?: {width: number; o: number}; ab?: number; at?: number; out?: number}> = ({x, y, w, h, center = 0.35, width, lineDim = 0, extra, ab = 0, at = -30, out}) => {
	const win = {x: [0.29, 0.41] as [number, number], y: [0, 4.2] as [number, number]};
	const ticks = [0.3, 0.32, 0.35, 0.38, 0.4].map(v => ({value: v, label: String(v)}));
	return <StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={ticks} yTicks={[]} xLabel="reaction time (s)" yLabel="" grid={false} at={at} out={out}>
		{m => {
			const [, base] = m.p(0, 0);
			const bars: [number, number][] = [[0.29, 0.3], [0.3, 0.4], [0.4, 0.41]];
			const slice = (wd: number, o: number, glow = 0) => {
				const a = center - wd / 2, b = center + wd / 2, [xa] = m.p(a, 0), [xb] = m.p(b, 0), [, top] = m.p(0, DENS(center));
				if (xb - xa < 5) return <line x1={(xa + xb) / 2} x2={(xa + xb) / 2} y1={base} y2={top} stroke={AREA.stroke} strokeWidth={6} opacity={o} />;
				return <g opacity={o}>
					<rect x={xa} y={top} width={xb - xa} height={base - top} fill={AREA.soft} stroke={AREA.stroke} strokeWidth={glow ? 8 : 5} />
				</g>;
			};
			return <>
				<g clipPath={m.clip}>{bars.map(([a, b], i) => {const [x0, ty] = m.p(a, DENS(a)), [x1] = m.p(b, 0); return <rect key={i} x={x0} y={ty} width={x1 - x0} height={base - ty} fill={DATA_R.soft} stroke={DATA_R.stroke} strokeWidth={5} />;})}</g>
				{slice(width, 1 - lineDim * 0.75)}
				{extra && extra.o > 0.01 ? slice(extra.width, extra.o, 1) : null}
				{ab > 0.01 ? (() => {const [xa] = m.p(0.34, 0), [xb] = m.p(0.36, 0), [, top] = m.p(0, 3.5); return <g opacity={ab}>
					<text x={xa} y={top - 16} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: AREA.ink}}>a</text>
					<text x={xb} y={top - 16} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: AREA.ink}}>b</text>
				</g>;})() : null}
			</>;
		}}
	</StudioPlot>;
};
/** Readable width and probability: up to four decimals, trailing zeros trimmed. */
export const trim = (v: number, d = 4) => (v < 1e-7 ? '0' : String(Number(v.toFixed(d))));

// ---------- F(x) = x²/9 ----------
export const F9_WIN = {x: [-1, 4] as [number, number], y: [-0.2, 1.2] as [number, number]};
export const f9Ticks = [-1, 1, 2, 3, 4].map(v => ({value: v, label: String(v)}));
/** The CDF x²/9 drawn by a pen to `draw` (an x value), with tangent stubs and a crossed chord. */
export const F9Plot: React.FC<{x: number; y: number; w: number; h: number; draw?: number; fn?: (v: number) => number; tangents?: readonly {x: number; o: number}[]; chord?: {o: number; cross: number}; stub0?: number; yTicks?: readonly {value: number; label: string}[]; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode; win?: {x: [number, number]; y: [number, number]}; xTicks?: readonly {value: number; label: string}[]; color?: string; guides?: number; yLabel?: string; grid?: boolean}> = ({x, y, w, h, guides = 0, yLabel = 'F(x)', grid = false, draw = 4, fn = F9, tangents = [], chord, stub0 = 0, yTicks = [{value: 1, label: '1'}], at = -30, out, children, win = F9_WIN, xTicks = f9Ticks, color = CDF}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={yTicks} xLabel="x" yLabel={yLabel} grid={grid} at={at} out={out}>
		{m => {
			const end = Math.max(win.x[0], Math.min(win.x[1], draw));
			const [px, py] = m.p(end, fn(end));
			return <>
				{guides > 0.01 ? (() => {const [a, y1] = m.p(win.x[0], 1), [b] = m.p(win.x[1], 1), [x3, t] = m.p(3, win.y[1]), [, bt] = m.p(3, win.y[0]); return <g opacity={guides}>
					<line x1={a} x2={b} y1={y1} y2={y1} stroke={GREY} strokeWidth={3} strokeDasharray="10 9" />
					<line x1={x3} x2={x3} y1={t} y2={bt} stroke={GREY} strokeWidth={3} strokeDasharray="10 9" />
					{[0, 1, 2, 3].map(v => {const [px, py] = m.p(v, F9(v)); return <circle key={v} cx={px} cy={py} r={9} fill="none" stroke={GREY} strokeWidth={3} />;})}
				</g>;})() : null}
				{chord && chord.o > 0.01 ? (() => {const [a, b] = m.p(0, 0), [c, d] = m.p(3, 1); return <g opacity={chord.o}>
					<line x1={a} y1={b} x2={c} y2={d} stroke={MATH_ROLES.mistake.stroke} strokeWidth={5} strokeDasharray="14 10" />
					<path d={`M${(a + c) / 2 - 30},${(b + d) / 2 - 30} L${(a + c) / 2 + 30},${(b + d) / 2 + 30} M${(a + c) / 2 + 30},${(b + d) / 2 - 30} L${(a + c) / 2 - 30},${(b + d) / 2 + 30}`} stroke={MATH_ROLES.mistake.stroke} strokeWidth={7} strokeLinecap="round" opacity={chord.cross} />
				</g>;})() : null}
				<g clipPath={m.clip}><path d={fnPath(m, fn, win.x[0], end, 300)} stroke={color} strokeWidth={7} fill="none" strokeLinejoin="round" /></g>
				{draw < win.x[1] && draw > win.x[0] ? <circle cx={px} cy={py} r={11} fill={color} stroke={CARD} strokeWidth={4} /> : null}
				{tangents.map((t, i) => {
					if (t.o <= 0.01) return null;
					const s = (2 * t.x) / 9, [cx, cy] = m.p(t.x, fn(t.x)), dx = 0.55, [ax, ay] = m.p(t.x - dx, fn(t.x) - s * dx), [bx, by] = m.p(t.x + dx, fn(t.x) + s * dx);
					return <g key={i} opacity={t.o}><line x1={ax} y1={ay} x2={bx} y2={by} stroke={MATH_AMBER} strokeWidth={6} strokeLinecap="round" /><circle cx={cx} cy={cy} r={10} fill={MATH_AMBER} stroke={CARD} strokeWidth={4} /></g>;
				})}
				{stub0 > 0.01 ? (() => {const [a, b] = m.p(-0.45, 0), [c] = m.p(0.45, 0); return <line x1={a} y1={b - 2} x2={c} y2={b - 2} stroke={MATH_AMBER} strokeWidth={6} opacity={stub0} strokeLinecap="round" />;})() : null}
				{children ? children(m) : null}
			</>;
		}}
	</StudioPlot>
);
/** An unbranded graphing-app panel plotting `fn` on the given window (its curve draws over `draw` 0..1). */
export const AppPanel: React.FC<{x: number; y: number; w: number; h: number; draw: number; at: number; out?: number; label?: string; fn?: (v: number) => number}> = ({x, y, w, h, draw, at, out, label = 'y = x²/9', fn = F9}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const pw = w - 40, ph = h - 96;
	const P = (X: number, Y: number): [number, number] => [12 + ((X + 1) / 5) * (pw - 24), 8 + ((1.2 - Y) / 1.4) * (ph - 16)];
	const path = (a: number, b: number) => Array.from({length: 121}, (_, i) => {const X = a + ((b - a) * i) / 120, [px, py] = P(X, fn(X)); return `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`;}).join(' ');
	const m = {p: P};
	return <div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, transform: `translateX(${(1 - smooth(prog(f, at, 18))) * 60}px)`, background: '#2a2d31', borderRadius: 24, border: '3px solid #4a4f55', boxShadow: '0 14px 32px rgba(60,45,20,0.18)', boxSizing: 'border-box', padding: '14px 18px'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#c9d2cc'}}>GRAPHING APP</div>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: '#ffffff', margin: '2px 0 6px'}}>{label}</div>
		<svg width={pw} height={ph} style={{display: 'block', background: '#f4f6f2', borderRadius: 12}}>
			<path d={`M${m.p(-1, 0)[0]},${m.p(0, 0)[1]} H${m.p(4, 0)[0]} M${m.p(0, 0)[0]},${m.p(0, 1.2)[1]} V${m.p(0, -0.2)[1]}`} stroke="#1f2a24" strokeWidth={2.5} />
			<path d={`M${m.p(-1, 1)[0]},${m.p(0, 1)[1]} H${m.p(4, 1)[0]}`} stroke="#b7c0b9" strokeWidth={2} strokeDasharray="6 6" />
			{draw > 0.001 ? <path d={path(-1, -1 + 5 * draw)} stroke={CDF} strokeWidth={5} fill="none" /> : null}
		</svg>
	</div>;
};

// ---------- a short thinking ring (scene 1's guess) ----------
export const PredictRing: React.FC<{x: number; y: number; r?: number; at: number; dur: number}> = ({x, y, r = 46, at, dur}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	if (o <= 0.001) return null;
	const left = Math.max(0, 1 - (f - at) / dur), c = 2 * Math.PI * r;
	return <FrameSvg style={{opacity: o}}>
		<circle cx={x} cy={y} r={r + 12} fill={CARD} stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
		<circle cx={x} cy={y} r={r} fill="none" stroke="#ebe4d6" strokeWidth={10} />
		<circle cx={x} cy={y} r={r} fill="none" stroke={AREA.stroke} strokeWidth={10} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - left)} transform={`rotate(-90 ${x} ${y})`} />
		<text x={x} y={y + 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: AREA.ink}}>?</text>
	</FrameSvg>;
};
export {regionPath, INK, INK_SOFT};
