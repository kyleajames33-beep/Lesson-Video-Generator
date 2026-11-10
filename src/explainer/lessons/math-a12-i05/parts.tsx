// Lesson parts for math-a12-i05 (Revision 3: trig primitives; a home's solar panels over one day), on the maths
// studio kit and i04's parts (imported read-only). Lesson-local rigs:
// - SolarRig: the painted panels (brief 238 plate) under a coded dashed arc carrying the reused physics sun, whose
//   angle is πt/12 (sunrise at the left horizon, noon at the top, sunset at the right);
// - SolarGraph and SolarBoard: the power (violet) and energy (ink) graphs on t 0 to 12 h and the readouts, all from
//   p(t) = 5 sin(πt/12) and E(t) = (60/π)(1 − cos(πt/12)), so the readouts and both graphs always agree;
// - TrigPair: the paired panels (candidate primitive above, the needed gradient below) on the radian window.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK} from '../../kit';
import {CARD, FrameSvg, LiveReadoutBoard, MATH_GRADIENT, StudioPlot, SvgPlate, fnPath, makePlot, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export {AMB, AnswerBox, Attempt, BLUE, Bl, BoxCard, Cc, Chip, CurvePic, FramedCard, Frac, GREEN, GREY, GapLine, Line, MiniPlot, PLabel, QAxes, RED, Tick, V, VIOLET, tangentSeg} from '../math-a12-i04/parts';

// ---------- the models ----------
const PI = Math.PI;
export const power = (t: number) => 5 * Math.sin((PI * t) / 12);
export const energy = (t: number, C = 60 / PI) => -(60 / PI) * Math.cos((PI * t) / 12) + C;
export const slipEnergy = (t: number) => 5 - 5 * Math.cos((PI * t) / 12);
{
	const near = (a: number, b: number, tol = 1e-4) => Math.abs(a - b) < tol;
	const d = (F: (x: number) => number, x: number) => (F(x + 1e-6) - F(x - 1e-6)) / 2e-6;
	const checks: [string, boolean][] = [
		['solar', near(energy(0), 0) && near(d(t => energy(t), 4.3), power(4.3)) && near(energy(6), 19.098593) && near(energy(12), 38.197186) && near(slipEnergy(12), 10) && near(power(6), 5)],
		['sin', near(d(x => -Math.cos(x), 1.1), Math.sin(1.1)) && near(d(Math.sin, 0.7), Math.cos(0.7)) && near(d(Math.tan, PI / 4), 2)],
		['linear', near(d(x => 3 * Math.sin(5 * x), 0.3), 15 * Math.cos(1.5)) && near(d(x => Math.tan(2 * x - PI / 3), 0.2), 2 / Math.cos(0.4 - PI / 3) ** 2)],
		['matched', near(d(x => Math.cos(x * x + 1), 0.8), -1.6 * Math.sin(1.64)) && near(d(x => Math.sin(x ** 3), 0.9), 3 * 0.81 * Math.cos(0.729)) && near(d(x => Math.tan(Math.sin(x)), 2.2), Math.cos(2.2) / Math.cos(Math.sin(2.2)) ** 2)],
		['A1', near(d(x => 2 * Math.sin(3 * x), 0.4), 6 * Math.cos(1.2)) && near(d(x => 18 * Math.sin(3 * x), 0.4), 54 * Math.cos(1.2), 1e-3)],
		['A2', near(d(x => -2 * Math.cos(x * x), 1.1), 4.4 * Math.sin(1.21)) && near(d(x => 2 * Math.cos(x * x), 1.1), -4.4 * Math.sin(1.21))],
		['asymptotes', near(2 * (5 * PI / 12) - PI / 3, PI / 2) && near(2 * (-PI / 12) - PI / 3, -PI / 2)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i05 numbers: ' + bad.join(', '));
}
export const clock = (t: number) => {const h = 6 + t; const hh = Math.floor(h + 1e-9), mm = Math.floor((h - hh) * 60 + 1e-6); const am = hh < 12; const h12 = hh > 12 ? hh - 12 : hh; return `${h12}:${String(mm).padStart(2, '0')} ${am ? 'am' : 'pm'}`;};

// ---------- the panels and the sun ----------
export const PANELS: PlateSpec = {src: 'assets/maths/ma12-solar-panels-v1.png', nat: [2000, 1200], box: [222, 244, 1775, 1039]};
export const SUN: PlateSpec = {src: 'assets/physics/phys-y11-sun-v1.png', nat: [1254, 1254], box: [75, 90, 1152, 1165]};
export const panelsH = (w: number) => (w * (PANELS.box[3] - PANELS.box[1])) / (PANELS.box[2] - PANELS.box[0]);
/** The panels at the bottom of the box (x, bottom, w), the dashed day arc above them and the sun at angle πt/12. */
export const SolarRig: React.FC<{x: number; bottom: number; w: number; t: number; R?: number; sunW?: number; at?: number; out?: number}> = ({x, bottom, w, t, R = 330, sunW = 130, at = -30, out}) => {
	usePlatePreload([PANELS.src, SUN.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const ph = panelsH(w);
	const py = bottom - ph;
	const cx = x + w / 2, cy = py - 6;
	const th = (PI * Math.max(0, Math.min(12, t))) / 12;
	const sx = cx - R * Math.cos(th), sy = cy - R * Math.sin(th);
	return (
		<FrameSvg style={{opacity: o}}>
			<path d={`M${cx - R},${cy} A${R},${R} 0 0 1 ${cx + R},${cy}`} stroke="#b9a77d" strokeWidth={4} strokeDasharray="12 12" fill="none" />
			<line x1={cx - R - 20} x2={cx + R + 20} y1={cy} y2={cy} stroke="#8a8378" strokeWidth={3} />
			<SvgPlate plate={PANELS} x={x} y={py} w={w} />
			<SvgPlate plate={SUN} x={sx - sunW / 2} y={sy - sunW / 2} w={sunW} />
		</FrameSvg>
	);
};

const T_TICKS = [{value: 0, label: '6 am'}, {value: 3, label: '9'}, {value: 6, label: 'noon'}, {value: 9, label: '3 pm'}, {value: 12, label: '6 pm'}];
/** Power (violet) or energy (ink) against t, 0 to 12 h, drawn to the clock, with a riding dot. */
export const SolarGraph: React.FC<{x: number; y: number; w: number; h: number; t: number; kind: 'power' | 'energy'; C?: number; full?: boolean; at?: number; out?: number; yWin?: [number, number]; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, t, kind, C = 60 / PI, full = false, at = -30, out, yWin, children}) => {
	const isP = kind === 'power';
	const fn = isP ? power : (u: number) => energy(u, C);
	const win = {x: [-0.5, 12.6] as [number, number], y: yWin ?? ((isP ? [-0.5, 6] : [-3, 42]) as [number, number])};
	const tt = Math.max(0, Math.min(12, t));
	const col = isP ? MATH_GRADIENT : INK;
	return (
		<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={T_TICKS} yTicks={isP ? [{value: 5, label: '5'}] : [{value: 20, label: '20'}, {value: 40, label: '40'}]}
			xLabel="time" yLabel={isP ? 'power (kW)' : 'energy so far (kWh)'} at={at} out={out}>
			{m => <>
				<g clipPath={m.clip}>{full ? <path d={fnPath(m, fn, 0, 12)} stroke={col} strokeWidth={6} fill="none" strokeLinecap="round" /> : tt > 0.02 ? <path d={fnPath(m, fn, 0, tt)} stroke={col} strokeWidth={6} fill="none" strokeLinecap="round" /> : null}</g>
				{(() => {const p = m.p(tt, fn(tt)); return <circle cx={p[0]} cy={p[1]} r={12} fill={col} stroke={CARD} strokeWidth={4} />;})()}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
	);
};
/** time, power (violet), energy so far (ink): one board from the same t. */
export const SolarBoard: React.FC<{x: number; y: number; width: number; t: number; at?: number; out?: number; size?: number; glow?: [number, number]}> = ({x, y, width, t, at = -30, out, size = 48, glow}) => {
	const tt = Math.max(0, Math.min(12, t));
	return <LiveReadoutBoard x={x} y={y} width={width} at={at} out={out} inline size={size} labelSize={30} rows={[
		{label: 'time', value: tt, format: clock},
		{label: 'power', value: power(tt), digits: 1, role: 'gradient', unit: 'kW'},
		{label: 'energy so far', value: energy(tt), digits: 1, unit: 'kWh', glow},
	]} />;
};

// ---------- the paired radian panels ----------
export const PAIR = {x: 40, y: 150, w: 1000, hTop: 420, hBottom: 380, gap: 10};
export const WX: [number, number] = [-0.3, 2 * PI + 0.3];
export const YTOP: [number, number] = [-1.6, 2.2];
export const YBOT: [number, number] = [-1.3, 1.3];
export const RAD = [{value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}, {value: (3 * PI) / 2, label: '3π/2'}, {value: 2 * PI, label: '2π'}];
export const topMap = () => makePlot(PAIR.x, PAIR.y, PAIR.w, PAIR.hTop, {x: WX, y: YTOP});
export const botMap = () => makePlot(PAIR.x, PAIR.y + PAIR.hTop + PAIR.gap, PAIR.w, PAIR.hBottom, {x: WX, y: YBOT});
export const TrigPair: React.FC<{top: (m: PlotMap) => React.ReactNode; bottom: (m: PlotMap) => React.ReactNode; topLabel?: string; bottomLabel?: string; at?: number; out?: number}> = ({top, bottom, topLabel = 'y', bottomLabel = 'the gradient we need', at = -30, out}) => (
	<>
		<StudioPlot x={PAIR.x} y={PAIR.y} width={PAIR.w} height={PAIR.hTop} window={{x: WX, y: YTOP}} xTicks={RAD} yTicks={[-1, 1, 2]} yLabel={topLabel} at={at} out={out}>{top}</StudioPlot>
		<StudioPlot x={PAIR.x} y={PAIR.y + PAIR.hTop + PAIR.gap} width={PAIR.w} height={PAIR.hBottom} window={{x: WX, y: YBOT}} xTicks={RAD} yTicks={[-1, 1]} yLabel={bottomLabel} at={at} out={out}>{bottom}</StudioPlot>
	</>
);
/** Slope stub (tangent segment) at (X, Y) with slope s, plot-local. */
export const Stub: React.FC<{m: PlotMap; X: number; Y: number; s: number; o?: number; color?: string; dash?: string; hl?: number; dot?: boolean}> = ({m, X, Y, s, o = 1, color = MATH_GRADIENT, dash, hl = 110, dot = true}) => {
	if (o <= 0.001) return null;
	const [px, py] = m.p(X, Y), vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy);
	return <g opacity={o}>
		<line x1={px - (vx / l) * hl} y1={py - (vy / l) * hl} x2={px + (vx / l) * hl} y2={py + (vy / l) * hl} stroke={color} strokeWidth={6} strokeDasharray={dash} strokeLinecap="round" />
		{dot ? <circle cx={px} cy={py} r={11} fill={color} stroke={CARD} strokeWidth={4} /> : null}
	</g>;
};
