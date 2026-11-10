// Scenes 9 to 12: from the graph of f to f′ and f″ (three linked panels with progressive traces), back to the video
// (the views stack: the busiest day is the total's inflection), when f′ only touches zero (a graph-only quartic) and
// the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, HandTag, MarkSpan, LiveReadoutBoard, SceneHeading, StudioStackedDerivativePanels, SvgPlate, kf, makePlot, smooth, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import type {StackPanel} from '../../math/studio';
import {K10, K11, K12, K9} from './cuemap';
import {Bl, BoxCard, Chip, CurveLabel, GREEN, GREY_INK, LAPTOP, LaptopViews, Line, SCREEN, V, VIOLET, ViewsStrip, cub, cub1, cub2, dviews, laptopH, q, q1, q2, stubLine, views} from './parts';
import {AID_MAIN} from './parts';
import {CubicPoints} from './geom';

type Panels = React.ComponentProps<typeof StudioStackedDerivativePanels>;
export type StackGeom = {x: number; y: number; w: number; ph: [number, number, number] | [number, number]; gap: number};
/** Frame maps of each panel of a stack (the same makePlot the kit uses). */
export const stackMaps = (g: StackGeom, wx: [number, number], ys: [number, number][]) => {
	let top = g.y;
	return ys.map((yw, i) => {const m = makePlot(g.x, top, g.w, g.ph[i], {x: wx, y: yw}); top += g.ph[i] + g.gap; return m;});
};
const NONE = () => NaN;
const RCX = 1270, RCW = 610;

// ---------- 9. from the graph of f to f′ and f″ ----------
const GI = {x: 30, y: 140, w: 1200, h: 800};
const ST9: StackGeom = {x: 30, y: 136, w: 1200, ph: [300, 252, 240], gap: 10};
const WX9: [number, number] = [-2.5, 2.5];
const Y9: [number, number][] = [[-6, 6], [-4, 16], [-16, 16]];
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	const phase2 = f >= k.fpp;
	const r1 = kf(f, [[k.lineUp, -2.45], [k.flat, -1], [k.zero + 24, -1], [k.steep + 24, 0], [k.lowest + 30, 0], [k.fpp - 4, 2.45]], false);
	const r2 = kf(f, [[k.fpp + 6, -2.45], [k.until + 40, 0], [k.thenRises + 6, 0], [k.crossing - 4, 2.45]], false);
	const x = phase2 ? r2 : r1;
	const stage = smooth(prog(f, k.lineUp - 16, 26));
	const MI = makePlot(GI.x, GI.y, GI.w, GI.h, {x: WX9, y: Y9[0]});
	const common: Partial<Panels> = {
		columns: [{x: -1, at: k.lineUp}, {x: 0, at: k.lineUp + 6, glow: [k.crossing, 5000]}, {x: 1, at: k.lineUp + 12}],
		markers: [{panel: 0, X: -1, at: -60}, {panel: 0, X: 1, at: -60}, {panel: 0, X: 0, at: k.crossing, shape: 'diamond'}],
	};
	const p0: StackPanel = {fn: cub, df: cub1, y: Y9[0], yTicks: [-4, 4]};
	const gradT = {cells: [{from: -2.5, to: -1, sign: 1 as const}, {from: -1, to: 1, sign: -1 as const}, {from: 1, to: 2.5, sign: 1 as const}], kind: 'gradient' as const, at: k.below};
	const concT = {cells: [{from: -2.5, to: 0, sign: -1 as const}, {from: 0, to: 2.5, sign: 1 as const}], kind: 'concavity' as const, at: k.negPos};
	const rings: Panels['rings'] = [
		{panel: 1, x: -1, at: k.zero}, {panel: 1, x: 1, at: k.fpp - 40},
		{panel: 1, x: 0, at: k.lowest, kind: 'turn', label: 'lowest: −3'},
		...(phase2 ? [{panel: 2, x: 0, at: k.crossing}] : []),
	];
	return (
		<>
			<SceneHeading text="From the graph of f to f′ and f″" at={4} size={56} />
			{stage < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - stage}}>
				<FunctionSimulator x={GI.x} y={GI.y} width={GI.w} height={GI.h} window={{x: WX9, y: Y9[0]}} family={{f: cub, df: cub1}} timeline={[{frame: 0, x: 0}]} color={INK} at={-60}
					xTicks={[-2, -1, 1, 2]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y" />
				<CubicPoints M={MI} at={[-60, -60, -60]} labels={false} />
				<div style={{opacity: 1 - prog(f, k.other + 84, 8)}}><CubicPoints M={MI} at={[-60, -60, -60]} labelSize={36} o={0} /></div>
				<div style={{position: 'absolute', left: MI.pf(-2.4, 0)[0], top: MI.pf(0, 5.6)[1], fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, opacity: 1 - prog(f, k.other + 86, 8)}}>
					<MarkSpan kind="strike" at={k.other + 50} color="#b8322a" width={6}>y = x³ − 3x</MarkSpan>
				</div>
				<HandTag x={MI.pf(0.6, 0)[0]} y={MI.pf(0, 4.6)[1]} text="no formula: read the slopes" at={k.other + 40} size={44} color={VIOLET} />
			</div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: stage}}>{stage > 0.001 ? (!phase2 ? (
				<StudioStackedDerivativePanels x={ST9.x} y={ST9.y} width={ST9.w} panelHeight={ST9.ph} gap={ST9.gap} windowX={WX9} xTicks={[-2, -1, 1, 2]} at={-60} hideFormula
					panels={[p0, {fn: cub1, y: Y9[1], yTicks: [-3, 6, 12], trace: 'progressive', tints: gradT}, {fn: NONE, y: Y9[2], yTicks: [-12, 12], at: k.again}]}
					rider={{keys: [{frame: 0, x: r1}], at: k.lineUp}} traceFrom={-2.5} rings={rings} {...common} />
			) : (
				<StudioStackedDerivativePanels x={ST9.x} y={ST9.y} width={ST9.w} panelHeight={ST9.ph} gap={ST9.gap} windowX={WX9} xTicks={[-2, -1, 1, 2]} at={-60} hideFormula
					panels={[p0, {fn: cub1, df: cub2, y: Y9[1], yTicks: [-3, 6, 12], tints: gradT}, {fn: cub2, y: Y9[2], yTicks: [-12, 12], trace: 'progressive', tints: concT}]}
					rider={{keys: [{frame: 0, x: r2}], at: -60, tangentOn: [1]}} traceFrom={-2.5} rings={rings} {...common} />
			)) : null}</div>
			{/* right column */}
			<Chip x={RCX} y={150} at={-30} size={40} color={GREY_INK}>graph of f only</Chip>
			<LiveReadoutBoard x={RCX} y={236} width={RCW} at={-30} inline rows={phase2 ? [
				{label: 'x', value: x},
				{label: <>gradient of <V>f′</V></>, value: cub2(x), role: 'a', text: undefined, format: v => (Math.abs(v) < 0.05 ? '0.00' : v.toFixed(2).replace('-', '−'))},
			] : [
				{label: 'x', value: x, role: 'a'},
				{label: 'gradient of f', value: cub1(x), role: 'gradient', format: v => v.toFixed(2).replace('-', '−')},
			]} />
			<BoxCard x={RCX} y={430} w={RCW} at={-30} out={k.zero - 12} size={48} title="The other way">
				<div>graph of f</div>
				<div>→ <V>f′</V> from its slopes</div>
				<div>→ <Bl>f″</Bl> from the slopes of <V>f′</V></div>
			</BoxCard>
			<div style={{opacity: 1 - prog(f, k.again, 14)}}>
				<Line x={RCX} y={430} at={k.zero} size={42}>f turns: <V>f′ = 0</V></Line>
				<Line x={RCX} y={496} at={k.above} size={42}>f rises: <V>f′ &gt; 0</V></Line>
				<Line x={RCX} y={562} at={k.below} size={42}>f falls: <V>f′ &lt; 0</V></Line>
				<Line x={RCX} y={628} at={k.lowest} size={42}>steepest fall: lowest <V>f′</V></Line>
				<BoxCard x={RCX} y={720} w={RCW} at={k.gradient} size={42} border={VIOLET} bw={4}><V>f′</V> = the gradient of f</BoxCard>
			</div>
			<Line x={RCX} y={430} at={k.until} size={42}><V>f′</V> falls: <Bl>f″ &lt; 0</Bl></Line>
			<Line x={RCX} y={496} at={k.thenRises} size={42}><V>f′</V> rises: <Bl>f″ &gt; 0</Bl></Line>
			<Line x={RCX} y={562} at={k.crossing} size={42}><Bl>f″ = 0</Bl> under the inflection</Line>
			<BoxCard x={RCX} y={720} w={RCW} at={k.fpp} size={42} border="#1f6fb2" bw={4}><Bl>f″</Bl> = the gradient of <V>f′</V></BoxCard>
		</>
	);
};

// ---------- 10. back to the video ----------
const LT10 = {x: 30, y: 160, w: 820};
const ST10: StackGeom = {x: 880, y: 150, w: 1010, ph: [384, 370], gap: 10};
const WX10: [number, number] = [-0.4, 14.4];
export const S10: React.FC = () => {
	const f = useCurrentFrame();
	const k = K10;
	const day = kf(f, [[k.launch, 0], [k.steepest + 16, 3], [k.views + 36, 3], [k.tail + 6, 14]], false);
	const [M0, M1] = stackMaps(ST10, WX10, [[-6, 106], [-1.5, 16.5]]);
	const tag = M0.pf(0.2, 88);
	return (
		<>
			<SceneHeading text="Back to the video" at={4} size={56} />
			<LaptopViews x={LT10.x} y={LT10.y} w={LT10.w} day={14} counter={false} tags={[
				{X: 2.3, Y: 58, text: '?', at: -60, out: k.last, color: '#cdb9f5'},
				{X: 3.4, Y: 30, text: 'day 3', at: k.last + 6, color: '#9fe3b4'},
			]} />
			<ViewsStrip x={40} y={LT10.y + laptopH(LT10.w) + 24} w={800} day={day} glow={vis(f, k.views, k.after, 12)} />
			<StudioStackedDerivativePanels x={ST10.x} y={ST10.y} width={ST10.w} panelHeight={ST10.ph} gap={ST10.gap} windowX={WX10} xTicks={[3, 7, 10, 14]} at={-60}
				panels={[
					{fn: views, df: dviews, y: [-6, 106], yTicks: [25, 50, 75, 100], label: 'total views (thousands)', tints: {cells: [{from: 0, to: 3, sign: 1}, {from: 3, to: 14.4, sign: -1}], kind: 'concavity', at: k.up}},
					{fn: dviews, y: [-1.5, 16.5], yTicks: [4, 8, 12], label: 'daily views (thousands per day)', color: VIOLET, trace: 'progressive'},
				]}
				rider={{keys: [{frame: 0, x: day}], at: k.launch}} traceFrom={0}
				columns={[{x: 3, at: k.views, glow: [k.views, k.after]}]}
				rings={[{panel: 1, x: 3, at: k.views, kind: 'turn', label: '≈ 12,260 per day'}]}
				markers={[{panel: 0, X: 3, at: k.last, shape: 'diamond'}]} />
			<HandTag x={M1.pf(8.5, 0)[0]} y={M1.pf(0, 5.2)[1]} text="long tail" at={k.tail} size={42} color={VIOLET} />
			<HandTag x={M0.pf(4.6, 0)[0]} y={M0.pf(0, 30)[1]} text="concave up, then down" at={k.down} out={k.last} size={38} color={INK} />
			<HandTag x={tag[0]} y={tag[1]} text="busiest day = inflection of the total" at={k.last} size={40} color={VIOLET} />
			<HandTag x={M0.pf(0.2, 0)[0]} y={M0.pf(0, 88)[1]} text="daily views = gradient of the total" at={k.daily} out={k.last - 10} size={38} color={VIOLET} />
			<Chip x={1330} y={68} at={k.last + 10} size={44} color={GREEN}>busiest day: day 3</Chip>
		</>
	);
};

// ---------- 11. when f′ only touches zero ----------
const WX11: [number, number] = [-0.8, 3.6];
const Y11: [number, number][] = [[-30, 5], [-20, 35], [-15, 75]];
export const S11: React.FC = () => {
	const f = useCurrentFrame();
	const k = K11;
	const [M0, M1, M2] = stackMaps(ST9, WX11, Y11);
	const ph = f < k.origin ? 1 : f < k.so ? 2 : 3;
	const r1 = kf(f, [[k.newg + 10, -0.75], [k.positive, 3], [k.positive + 30, 3.55]], false);
	const r3 = kf(f, [[k.so, -0.75], [k.points - 6, 3.55]], false);
	const bx = ph === 1 ? r1 : f < k.bend ? 0 : 2;
	const p0: StackPanel = {fn: q, df: q1, y: Y11[0], yTicks: [-20, -10]};
	const rings: Panels['rings'] = [
		{panel: 1, x: 3, at: k.crosses},
		{panel: 1, x: 0, at: k.touches, kind: 'touch'},
		{panel: 1, x: 2, at: k.turning, kind: 'turn'},
		{panel: 1, x: 0, at: k.alsoTurns, kind: 'turn'},
		...(ph === 3 ? [{panel: 2, x: 0, at: k.points - 8}, {panel: 2, x: 2, at: k.points - 2}] : []),
	];
	const common: Partial<Panels> = {
		columns: [{x: 0, at: k.origin, glow: [k.points - 8, 5000]}, {x: 2, at: k.bend, glow: [k.points - 8, 5000]}, {x: 3, at: k.crosses}],
		markers: [{panel: 0, X: 0, at: k.hpi, shape: 'diamond'}, {panel: 0, X: 2, at: k.still, shape: 'diamond'}, {panel: 0, X: 3, at: k.crosses}],
		rings, hideFormula: true, xTicks: [1, 2, 3], at: -60,
	};
	const Z3 = M1.pf(3, 0), Z0 = M1.pf(0, 0), T2 = M1.pf(2, -16);
	const tm = (m: typeof M0) => ({pt: m.pf, sx: m.sx, sy: m.sy});
	return (
		<>
			<SceneHeading text="When f′ only touches zero" at={4} size={56} />
			{ph === 1 ? (
				<StudioStackedDerivativePanels x={ST9.x} y={ST9.y} width={ST9.w} panelHeight={ST9.ph} gap={ST9.gap} windowX={WX11} {...common}
					panels={[p0, {fn: q1, y: Y11[1], yTicks: [-10, 10, 20, 30], trace: 'progressive'}, {fn: NONE, y: Y11[2], yTicks: [30, 60]}]}
					rider={{keys: [{frame: 0, x: r1}], at: k.newg + 10, out: k.origin - 12}} traceFrom={-0.8} />
			) : ph === 2 ? (
				<StudioStackedDerivativePanels x={ST9.x} y={ST9.y} width={ST9.w} panelHeight={ST9.ph} gap={ST9.gap} windowX={WX11} {...common}
					panels={[p0, {fn: q1, y: Y11[1], yTicks: [-10, 10, 20, 30]}, {fn: NONE, y: Y11[2], yTicks: [30, 60]}]} />
			) : (
				<StudioStackedDerivativePanels x={ST9.x} y={ST9.y} width={ST9.w} panelHeight={ST9.ph} gap={ST9.gap} windowX={WX11} {...common}
					panels={[p0, {fn: q1, df: q2, y: Y11[1], yTicks: [-10, 10, 20, 30]}, {fn: q2, y: Y11[2], yTicks: [30, 60], trace: 'progressive'}]}
					rider={{keys: [{frame: 0, x: r3}], at: k.so, tangentOn: [1]}} traceFrom={-0.8} />
			)}
			<FrameSvg>
				<line {...stubLine(tm(M0), 0, 0, 0, 0, 120)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={vis(f, k.flat, k.bend, 12)} />
				<line {...stubLine(tm(M0), 2, -16, -16, 0, 130)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={vis(f, k.still, k.so, 12)} />
			</FrameSvg>
			<HandTag x={Z3[0] - 40} y={Z3[1] - 60} text="crosses: turning point" at={k.crosses + 6} size={36} color={INK} anchor="end" />
			<HandTag x={Z0[0] + 40} y={Z0[1] + 66} text="touches: no sign change" at={k.touches + 6} size={36} color={GREY_INK} />
			<HandTag x={M0.pf(-0.75, 0)[0]} y={M0.pf(0, -22)[1]} text="horizontal point of inflection" at={k.hpi} size={36} color={INK} />
			<CurveLabel x={T2[0] + 30} y={T2[1] - 8} at={k.turning} size={32} color={GREY_INK}>f′(2) = −16</CurveLabel>
			{/* right column */}
			<Chip x={RCX} y={150} at={-30} size={40} color={GREY_INK}>a new graph of f only</Chip>
			<LiveReadoutBoard x={RCX} y={236} width={RCW} at={-30} inline rows={[
				{label: 'x', value: bx, role: 'a'},
				{label: 'gradient of f', value: q1(bx), role: 'gradient', format: v => (Math.abs(v) < 0.005 ? '0.00' : v.toFixed(2).replace('-', '−'))},
			]} />
			<div style={{position: 'absolute', left: RCX, top: 420, width: RCW, display: 'flex', justifyContent: 'space-between'}}>
				{(['cross', 'touch'] as const).map((kd, i) => (
					<div key={kd} style={{width: 296, textAlign: 'center'}}>
						<TurnPair kind={kd} w={296} glow={i ? vis(f, k.touches, k.hpi + 30, 10) : vis(f, k.crosses, k.origin, 10)} />
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK, marginTop: 4}}>{i ? 'touches: no turn' : 'crosses: a turn'}</div>
					</div>
				))}
			</div>
			<Line x={RCX} y={736} at={k.at3} size={42}>x = 3: <V>f′ crosses</V>, f turns</Line>
			<Line x={RCX} y={796} at={k.touches} size={42}>x = 0: <V>f′ touches</V>, no turn</Line>
			<Line x={RCX} y={856} at={k.bend} size={42}>x = 2: <V>f′ turns</V></Line>
			<HandTag x={M2.pf(0.3, 0)[0]} y={M2.pf(0, 55)[1]} text="f″ crosses zero at 0 and 2" at={k.so + 20} size={40} color="#1f6fb2" />
		</>
	);
};

// ---------- 12. memory aid ----------
const ST12: StackGeom = {x: 20, y: 160, w: 680, ph: [270, 250, 240], gap: 10};
export const MiniStack: React.FC<{g?: StackGeom; glow?: {x0: [number, number]; x2: [number, number]; x3: [number, number]}}> = ({g = ST12, glow}) => (
	<StudioStackedDerivativePanels x={g.x} y={g.y} width={g.w} panelHeight={g.ph} gap={g.gap} windowX={WX11} xTicks={[1, 2, 3]} at={-60} hideFormula
		panels={[{fn: q, y: Y11[0], yTicks: [-20]}, {fn: q1, y: Y11[1], yTicks: [20]}, {fn: q2, y: Y11[2], yTicks: [40]}]}
		columns={[{x: 0, at: -60, glow: glow?.x0}, {x: 2, at: -60, glow: glow?.x2}, {x: 3, at: -60, glow: glow?.x3}]}
		rings={[{panel: 1, x: 3, at: -60}, {panel: 1, x: 0, at: -60, kind: 'touch'}, {panel: 2, x: 0, at: -60}, {panel: 2, x: 2, at: -60}]}
		markers={[{panel: 0, X: 0, at: -60, shape: 'diamond'}, {panel: 0, X: 2, at: -60, shape: 'diamond'}, {panel: 0, X: 3, at: -60}]} />
);
/**
 * A solid two-row picture (about 300 px wide): f on top, its derivative below on one x scale, joined by a dashed
 * column. 'cross': f turns (a valley) above a derivative that crosses zero; 'touch': f flattens and keeps rising
 * (a horizontal inflection) above a derivative that only touches zero.
 */
export const TurnPair: React.FC<{kind: 'cross' | 'touch'; w?: number; glow?: number}> = ({kind, w = 300, glow = 0}) => {
	const h = w * 0.8, s = w / 300;
	const pts = (fn: (u: number) => number) => Array.from({length: 41}, (_, i) => {const u = -1 + i / 20; return `${i ? 'L' : 'M'}${(150 + 125 * u) * s},${fn(u) * s}`;}).join(' ');
	const top = kind === 'cross' ? pts(u => 110 - 70 * u * u) : pts(u => 70 - 50 * u * u * u);
	const bot = kind === 'cross' ? pts(u => 185 - 45 * u) : pts(u => 185 - 50 * u * u);
	const P: [number, number] = [150 * s, (kind === 'cross' ? 110 : 70) * s];
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible'}}>
			<rect x={0} y={0} width={w} height={h} rx={14 * s} fill={glow > 0.001 ? `rgba(248,232,200,${0.9 * glow})` : '#fbf8f1'} stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
			<line x1={10 * s} x2={290 * s} y1={185 * s} y2={185 * s} stroke={INK} strokeWidth={3} />
			<line x1={150 * s} x2={150 * s} y1={12 * s} y2={232 * s} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
			<path d={top} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" />
			<path d={bot} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" />
			{kind === 'cross' ? <circle cx={P[0]} cy={P[1]} r={11 * s} fill={INK} /> : <path d={`M${P[0]},${P[1] - 12 * s} L${P[0] + 12 * s},${P[1]} L${P[0]},${P[1] + 12 * s} L${P[0] - 12 * s},${P[1]} Z`} fill={INK} />}
			<circle cx={150 * s} cy={185 * s} r={16 * s} fill="none" stroke={kind === 'cross' ? '#13767a' : '#8a8378'} strokeWidth={5} />
			<text x={14 * s} y={30 * s} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: Math.max(30, 34 * s), fill: INK}}>f</text>
			<text x={14 * s} y={160 * s} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: Math.max(30, 34 * s), fill: VIOLET}}>f′</text>
		</svg>
	);
};
/** Small coded icons for the card keys: a trace crossing the axis, a trace touching it. */
export const CrossIcon: React.FC<{touch?: boolean; size?: number}> = ({touch = false, size = 110}) => (
	<svg width={size} height={size * 0.7} viewBox="0 0 110 77" style={{display: 'block', overflow: 'visible'}}>
		<line x1={4} x2={106} y1={44} y2={44} stroke={INK} strokeWidth={3.5} />
		<path d={touch ? 'M8,8 Q55,88 102,8' : 'M8,74 Q40,44 55,44 Q70,44 102,10'} stroke={VIOLET} strokeWidth={7} fill="none" strokeLinecap="round" />
		<circle cx={55} cy={44} r={14} fill="none" stroke={touch ? '#8a8378' : '#13767a'} strokeWidth={4} />
	</svg>
);
/** The laptop as a badge: the plate with a coded daily-views hump on its screen (no text on the screen). */
export const LaptopBadge: React.FC<{w: number}> = ({w}) => {
	const s = w / (LAPTOP.box[2] - LAPTOP.box[0]);
	const h = laptopH(w);
	const sx0 = (SCREEN[0] - LAPTOP.box[0]) * s, sy0 = (SCREEN[1] - LAPTOP.box[1]) * s, sw = (SCREEN[2] - SCREEN[0]) * s, shh = (SCREEN[3] - SCREEN[1]) * s;
	const pts = Array.from({length: 61}, (_, i) => {const d = (14 * i) / 60; return `${i ? 'L' : 'M'}${(sx0 + 10 + (d / 14) * (sw - 20)).toFixed(1)},${(sy0 + shh - 10 - (dviews(d) / 13) * (shh - 24)).toFixed(1)}`;}).join(' ');
	const pk = [sx0 + 10 + (3 / 14) * (sw - 20), sy0 + shh - 10 - (dviews(3) / 13) * (shh - 24)];
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible'}}>
			<SvgPlate plate={LAPTOP} x={0} y={0} w={w} />
			<path d={pts} stroke="#cdb9f5" strokeWidth={4} fill="none" strokeLinecap="round" />
			<circle cx={pk[0]} cy={pk[1]} r={7} fill="#f2b84b" />
		</svg>
	);
};
export const S12: React.FC = () => {
	const f = useCurrentFrame();
	const k = K12;
	const hl = (g: number) => (g > 0.001 ? `rgba(248,232,200,${0.9 * g})` : undefined);
	const row = (top: number, at: number, icon: React.ReactNode, text: React.ReactNode, g = 0) => (
		<div style={{position: 'absolute', left: 790, top, display: 'flex', alignItems: 'center', gap: 28, opacity: prog(f, at, 12), transform: `translateX(${(1 - smooth(prog(f, at, 14))) * -18}px)`}}>
			<div style={{width: 210, display: 'flex', justifyContent: 'center'}}>{icon}</div>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.08, color: INK, background: hl(g), borderRadius: 10, maxWidth: 820}}>{text}</div>
		</div>
	);
	return (
		<>
			<SceneHeading text="The short version" at={4} size={56} />
			<MiniStack glow={{x3: [k.every, k.every + 70], x2: [k.every + 70, k.crosses - 6], x0: [k.touches, k.works]}} />
			<div style={{position: 'absolute', left: 740, top: 150, width: 1150, height: 800, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 790, top: 172, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK_SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 790, top: 226, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 92, lineHeight: 1.05, color: INK, opacity: prog(f, k.turns, 12), background: hl(vis(f, k.turns, k.crosses, 10)), borderRadius: 12}}>{AID_MAIN}</div>
			<div style={{position: 'absolute', left: 800, top: 330, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, opacity: prog(f, k.turns + 6, 12)}}>every turn sits above a zero on the next graph down</div>
			{(['cross', 'touch'] as const).map((kd, i) => (
				<div key={kd} style={{position: 'absolute', left: 800 + i * 540, top: 390, width: 520}}>
					<TurnPair kind={kd} w={360} glow={i ? vis(f, k.touches, k.works, 10) : vis(f, k.crosses, k.touches, 10)} />
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: VIOLET, marginTop: 8, opacity: prog(f, i ? k.touches : k.crosses, 12)}}>{i ? 'touching zero: flat, no turn' : 'crossing zero: a turn above'}</div>
				</div>
			))}
			{row(752, -30, <LaptopBadge w={150} />, <>views: busiest day = turn of the daily views</>)}
			<div style={{position: 'absolute', left: 790, top: 876, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: MATH_STRAND_ACCENT, opacity: prog(f, k.smooth, 12), background: hl(vis(f, k.smooth, 5000, 10)), borderRadius: 10, padding: '0 10px'}}>smooth curves</div>
		</>
	);
};
