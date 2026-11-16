// Lesson parts for math-a12-s07 (Revision 4: the continuous uniform model; a bus every ten minutes met at a random
// moment, then the site's train on [1, 5]), on the maths studio kit's probability set 3 (ArrivalDots, ClassHistogram,
// CdfTracer) and s06's parts (imported read-only through ../math-a12-s06/parts, which carry s01 to s05's and the
// f-strand board parts). Lesson-local rigs:
// - the 200 stored waits (Python random.Random(707), wait = 10 × random(), 3 dp) and every number (checked at load);
// - UniformPlot: a flat density on [a, b] at height c (teal), its zero pieces, end dots, fill and amber shadings;
// - ParkedCard: s06's question (a flat density on [1, 5], height "?") parked as a small card;
// - BeamPlot: a flat density resting on a beam with a violet fulcrum (the handoff; s08 opens on it).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, FrameSvg, MATH_ROLES, StudioPlot, makePlot, plateHeight} from '../../math/studio';
import type {PlateSpec, PlotMap, PlotTick} from '../../math/studio';
import {DATA_R, DENS, GREY, INK, Plate} from '../math-a12-s06/parts';

export * from '../math-a12-s06/parts';

// ---------- the stored sample and the numbers (design "Numbers to verify") ----------
/** 200 waits (minutes) from Python random.Random(707), wait = 10 × random(), rounded to 3 dp (author note k). */
export const WAITS: readonly number[] = '0.176;6.327;3.354;7.483;4.637;0.019;8.854;5.275;8.377;9.198;1.120;4.674;6.345;2.796;4.307;8.653;5.983;2.754;6.469;2.741;6.558;4.442;5.528;4.004;6.130;4.948;1.002;6.196;4.544;4.618;8.419;6.115;5.004;0.091;6.286;3.362;6.015;0.060;5.246;4.647;8.129;0.584;3.014;1.586;9.227;5.361;8.626;5.357;1.996;9.203;5.370;4.400;8.057;1.032;8.721;7.588;0.074;8.597;6.297;9.563;5.389;6.709;8.232;7.415;5.955;2.919;2.261;3.666;5.713;3.581;6.010;4.942;2.002;0.377;3.312;8.579;3.459;0.821;0.715;9.978;0.405;0.879;0.640;9.574;1.049;1.499;3.865;6.806;9.939;9.021;2.917;6.549;0.827;7.338;0.454;2.834;2.284;9.289;3.328;4.320;2.885;5.031;2.928;7.642;2.089;5.396;7.250;8.205;3.750;3.926;7.767;0.018;6.987;1.348;2.985;0.055;6.739;0.274;2.835;8.153;8.985;9.108;0.161;4.854;2.961;4.637;5.394;4.225;5.988;2.474;8.936;1.831;5.414;4.594;6.947;7.186;0.494;9.493;0.264;3.339;0.927;9.875;2.612;8.063;7.384;4.139;6.336;9.177;4.867;0.879;5.407;4.488;8.258;7.484;4.224;1.078;0.257;0.480;9.554;1.019;3.975;8.628;8.163;8.026;7.413;7.506;3.666;3.318;1.645;4.630;5.698;9.571;7.838;8.039;1.103;4.614;5.017;6.971;5.188;6.865;8.696;4.333;8.066;3.918;8.084;2.865;7.522;4.376;5.933;8.821;0.333;4.857;7.771;8.670;1.706;3.044;7.484;0.492;5.854;5.217'
	.split(';').map(Number);
/** Arrival i on the 0 to 30 strip: in the gap before the bus at 10 × (i mod 3 + 1) (first five: 9.8, 13.7, 26.6, 2.5, 15.4). */
export const ARRIVE: readonly number[] = WAITS.map((w, i) => 10 * ((i % 3) + 1) - w);
export const WAIT_COUNTS = [26, 14, 18, 17, 25, 23, 20, 16, 26, 15] as const;
export const hump = (t: number) => (t < 0 || t > 10 ? 0 : (3 * t * (10 - t)) / 500);
export const humpArea = (a: number, b: number) => {const P = (t: number) => (15 * t * t - t ** 3) / 500; return P(b) - P(a);};
export const uni = (a: number, b: number) => (x: number) => (x < a || x > b ? 0 : 1 / (b - a));
export const Uni = (a: number, b: number) => (x: number) => (x < a ? 0 : x > b ? 1 : (x - a) / (b - a));
{
	const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) < t;
	const cnt = new Array(10).fill(0); WAITS.forEach(w => cnt[Math.floor(w)]++);
	const T = Uni(1, 5);
	const checks: [string, boolean][] = [
		['waits', WAITS.length === 200 && cnt.join() === WAIT_COUNTS.join() && [0.2, 6.3, 3.4, 7.5, 4.6].every((v, i) => near(Math.round(WAITS[i] * 10) / 10, v)) && [9.8, 13.7, 26.6, 2.5, 15.4].every((v, i) => near(Math.round(ARRIVE[i] * 10) / 10, v))],
		['hump', near(humpArea(0, 2), 0.104) && near(humpArea(4, 6), 0.296) && near(humpArea(8, 10), 0.104) && near(humpArea(0, 10), 1)],
		['bus', near(4 / 10, 0.4) && near((7 - 3) / 10, 0.4) && near(Uni(0, 10)(4), 0.4) && near(Uni(0, 10)(7), 0.7)],
		['drill 2', near(Uni(2, 10)(7) - Uni(2, 10)(4), 3 / 8) && near(uni(2, 10)(5), 1 / 8)],
		['short', near(uni(0, 0.5)(0.2), 2) && near(2 * 0.5, 1)],
		['train', near(uni(1, 5)(3), 1 / 4) && near(T(3.5), 5 / 8) && near(1 - T(3.5), 0.375) && near(T(4) - T(2), 0.5)],
		['A1', near(uni(3, 8)(4), 1 / 5) && near(Uni(3, 8)(6.5) - Uni(3, 8)(4), 0.5) && near(2.5 / 8, 5 / 16)],
		['A2', near((8 - 6) / 8, 0.25) && near(3 / 8, 0.375) && near(6 / 24, 0.25)],
		['balance', near((1 + 5) / 2, 3)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s07 numbers: ' + bad.join(', '));
}

// ---------- plates (alpha > 32 boxes, measured 16 Nov) ----------
export const BUS_STOP: PlateSpec = {src: 'assets/maths/ma12-bus-stop-v1.png', nat: [887, 1774], box: [247, 205, 637, 1556]};
export const BUS: PlateSpec = {src: 'assets/maths/ma12-bus-side-v1.png', nat: [1881, 836], box: [289, 209, 1610, 644]};
export const S07_PLATES = [BUS_STOP, BUS];
/** The bus stop standing with its base at (x, base), `h` tall (alpha box), never stretched. */
export const BusStop: React.FC<{x: number; base: number; h: number; at?: number; out?: number}> = ({x, base, h, at, out}) => {
	const w = (h * (BUS_STOP.box[2] - BUS_STOP.box[0])) / (BUS_STOP.box[3] - BUS_STOP.box[1]);
	return <Plate plate={BUS_STOP} x={x} y={base - h} w={w} at={at} out={out} />;
};
export const busH = (w: number) => plateHeight(BUS, w);

// ---------- colours ----------
export const RED = '#b8322a';
export const AMB = MATH_ROLES.k;
export const TEAL_FILL = 'rgba(31,138,143,0.20)';
export const AMBER_FILL = '#f3d9a6';

// ---------- UniformPlot ----------
export type Shade = {from: number; to: number; o: number; dx?: number; dim?: number};
/** A flat density on [a, b] at height c (teal), with zero pieces and end dots (`zeros`), a pale teal fill, amber shadings
 * (each at height c; `dx` slides one along) and a render prop on top. `draw` (0..1) is how far the pen has run along the flat top. */
export const UniformPlot: React.FC<{x: number; y: number; w: number; h: number; win: {x: [number, number]; y: [number, number]}; a: number; b: number; c: number; draw?: number; zeros?: number; fill?: number; shades?: readonly Shade[]; xTicks?: readonly PlotTick[]; yTicks?: readonly PlotTick[]; xLabel?: string; yLabel?: string; color?: string; at?: number; out?: number; opacity?: number; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, win, a, b, c, draw = 1, zeros = 1, fill = 0, shades = [], xTicks, yTicks = [], xLabel = 'x', yLabel = 'f(x)', color = DENS.stroke, at = -30, out, opacity = 1, children}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} grid={false} at={at} out={out} opacity={opacity}>
		{m => {
			const [xa, yc] = m.p(a, c), [xb, y0] = m.p(b, 0), [xl] = m.p(win.x[0], 0), [xr] = m.p(win.x[1], 0);
			const xe = xa + (xb - xa) * Math.max(0, Math.min(1, draw));
			return <>
				{fill > 0.01 ? <rect x={xa} y={yc} width={xb - xa} height={y0 - yc} fill={TEAL_FILL} opacity={fill} /> : null}
				{shades.map((s, i) => {
					if (s.o <= 0.01) return null;
					const [p0] = m.p(s.from + (s.dx ?? 0), 0), [p1] = m.p(s.to + (s.dx ?? 0), 0);
					return <rect key={i} x={p0} y={yc} width={p1 - p0} height={y0 - yc} fill={AMBER_FILL} stroke={AMB.stroke} strokeWidth={4} opacity={s.o * (1 - 0.6 * (s.dim ?? 0))} />;
				})}
				{zeros > 0.01 ? <g opacity={zeros}>
					<line x1={xl} x2={xa} y1={y0} y2={y0} stroke={color} strokeWidth={8} strokeLinecap="round" />
					<line x1={xb} x2={xr} y1={y0} y2={y0} stroke={color} strokeWidth={8} strokeLinecap="round" />
					<line x1={xa} x2={xa} y1={yc} y2={y0} stroke={color} strokeWidth={3} strokeDasharray="8 7" />
					<line x1={xb} x2={xb} y1={yc} y2={y0} stroke={color} strokeWidth={3} strokeDasharray="8 7" />
				</g> : null}
				{draw > 0.001 ? <line x1={xa} x2={xe} y1={yc} y2={yc} stroke={color} strokeWidth={8} strokeLinecap="round" /> : null}
				{zeros > 0.01 && draw >= 1 ? <g opacity={zeros}><circle cx={xa} cy={yc} r={10} fill={color} stroke={CARD} strokeWidth={3} /><circle cx={xb} cy={yc} r={10} fill={color} stroke={CARD} strokeWidth={3} /></g> : null}
				{children ? children(m) : null}
			</>;
		}}
	</StudioPlot>
);
export const ticks = (vals: readonly number[], labels?: readonly string[]): PlotTick[] => vals.map((v, i) => ({value: v, label: labels?.[i] ?? String(v)}));

// ---------- ParkedCard (s06's question, parked) ----------
export const PARK = {x: 1500, y: 96, w: 380, h: 200} as const;
/** s06's flat density on [1, 5] at an unknown height, as a small card. */
export const ParkedCard: React.FC<{o?: number}> = ({o = 1}) => {
	if (o <= 0.01) return null;
	const {x, y, w, h} = PARK, X = (v: number) => x + 40 + (v / 6) * (w - 70), base = y + h - 40, top = base - 70;
	return <>
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, background: CARD, borderRadius: 16, border: '2.5px solid rgba(60,45,20,0.14)', boxShadow: '0 10px 24px rgba(60,45,20,0.10)'}} />
		<FrameSvg style={{opacity: o}}>
			<line x1={X(0)} x2={X(6)} y1={base} y2={base} stroke={INK} strokeWidth={3} />
			<line x1={X(0)} x2={X(0)} y1={base} y2={y + 70} stroke={INK} strokeWidth={3} />
			<line x1={X(1)} x2={X(5)} y1={top} y2={top} stroke={DATA_R.stroke} strokeWidth={6} strokeLinecap="round" />
			{[1, 5].map(v => <text key={v} x={X(v)} y={base + 32} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{v}</text>)}
			<text x={X(0) - 12} y={top + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: DATA_R.ink}}>?</text>
			<text x={x + 22} y={y + 42} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: DATA_R.ink}}>f(x) = ? for 1 ≤ x ≤ 5</text>
		</FrameSvg>
	</>;
};

// ---------- BeamPlot (the handoff; s08 opens on it) ----------
export const BEAM = {x: 96, y: 260, w: 1100, h: 600, win: {x: [0, 6] as [number, number], y: [0, 0.4] as [number, number]}} as const;
/** The train's density 1/4 on [1, 5] resting on a beam (the x axis) over a violet fulcrum at t = `t`, tilted `tilt` degrees
 * (positive: the right end down) about the fulcrum; `q` shows the "?" chip at the fulcrum. */
export const BeamPlot: React.FC<{t?: number; tri?: number; tilt?: number; q?: number; at?: number}> = ({t = 2, tri = 1, tilt = 0, q = 1, at = -30}) => {
	const m = makePlot(BEAM.x, BEAM.y, BEAM.w, BEAM.h, BEAM.win);
	const [fx, fy] = m.pf(t, 0);
	return <>
		<div style={{position: 'absolute', inset: 0, transform: `rotate(${tilt}deg)`, transformOrigin: `${fx}px ${fy}px`}}>
			<UniformPlot x={BEAM.x} y={BEAM.y} w={BEAM.w} h={BEAM.h} win={BEAM.win} a={1} b={5} c={0.25} fill={1} xTicks={ticks([1, 2, 3, 4, 5])} yTicks={[{value: 0.25, label: '1/4'}]} xLabel="t (min)" yLabel="f(t)" at={at} />
			<FrameSvg style={{opacity: tri}}><rect x={m.pf(0, 0)[0]} y={fy - 5} width={m.pf(6, 0)[0] - m.pf(0, 0)[0]} height={10} rx={5} fill={MATH_ROLES.gradient.stroke} /></FrameSvg>
		</div>
		<FrameSvg style={{opacity: tri}}>
			<path d={`M${fx},${fy + 8} L${fx - 44},${fy + 86} L${fx + 44},${fy + 86} Z`} fill={MATH_ROLES.gradient.stroke} stroke={CARD} strokeWidth={4} strokeLinejoin="round" />
			<line x1={fx - 120} x2={fx + 120} y1={fy + 88} y2={fy + 88} stroke={GREY} strokeWidth={5} strokeLinecap="round" />
		</FrameSvg>
		{q > 0.01 ? <div style={{position: 'absolute', left: fx + 70, top: fy + 50, opacity: q, background: CARD, border: `4px solid ${MATH_ROLES.gradient.stroke}`, borderRadius: 16, padding: '2px 22px 6px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: MATH_ROLES.gradient.ink}}>?</div> : null}
	</>;
};
export const useP = (at: number, dur = 14) => prog(useCurrentFrame(), at, dur);
