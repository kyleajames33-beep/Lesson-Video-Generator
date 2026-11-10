// Lesson parts for math-a12-d18 (Revision 3: optimisation with a constraint; a sheep pen against a stone wall),
// built on the maths studio kit. Lesson-local rigs: PlanPen (the kit StudioFencePen on the painted top-down wall
// strip, with lesson tags), PenStrip (x, y, fence and area from the same fencePenState), the gridless flat-card
// picture for attempt 2, and the handoff car (the reused Biology yellow car with a coded price tag and d19's axes).
import React, {useId} from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MATHS_KIT2_PLATES, MATH_BLUE, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL, StudioFencePen, SvgPlate, fencePenState, makePlot, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export {AMB, AMB_INK, AnswerBox, Attempt, Bl, BoxCard, Chip, CurveLabel, Diamond, GREEN, GREY, GREY_INK, Line, RED, Ring, TEAL, Tick, V, VIOLET, stubLine} from '../math-a12-d17/parts';
export const BLUE = MATH_BLUE;

const glowBg = (rgb: string, g: number) => (g > 0.001 ? `rgba(${rgb},${0.9 * g})` : undefined);
/** The chosen variable x: blue. */
export const Xb: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: MATH_BLUE, background: glowBg('220,234,247', g), borderRadius: 8}}>{children}</span>;
/** The eliminated variable y: teal. */
export const Yt: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: MATH_TEAL, background: glowBg('214,238,238', g), borderRadius: 8}}>{children}</span>;
/** Fixed conditions (fence total, card size, domain): amber ink. */
export const Am: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: '#7a4600', background: glowBg('248,232,200', g), borderRadius: 8}}>{children}</span>;

// ---------- the models (design author notes a to e) ----------
export const area = (x: number) => 40 * x - 2 * x * x;
export const area1 = (x: number) => 40 - 4 * x;
export const box = (x: number) => x * (24 - 2 * x) ** 2;
export const box1 = (x: number) => 12 * (x - 4) * (x - 12);
export const fence = (x: number) => 2 * x + 50 / x;
export const fence1 = (x: number) => 2 - 50 / (x * x);
export const box2 = (x: number) => x * (16 - 2 * x) * (10 - 2 * x);
export const box21 = (x: number) => 4 * (3 * x - 20) * (x - 2);
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['pen tries', near(area(5), 150) && near(area(15), 150) && near(area(40 / 3), 1600 / 9) && near(area(10), 200) && near(area(0.3), 11.82) && near(area(19.7), 11.82)],
		['pen state', near(fencePenState(40, 10).area, 200) && near(fencePenState(40, 19.7).y, 0.6)],
		['box', near(box(4), 1024) && near(box(0.5), 264.5) && near(box(11.5), 11.5) && near(4 * 64 - 96 * 16 + 576 * 4, 1024) && near(box1(4), 0) && near(box1(12), 0)],
		['A1', near(fence(5), 20) && near(fence1(5), 0) && near(50 / 5, 10)],
		['A2', near(box2(2), 144) && near(box21(2), 0) && near(box21(20 / 3), 0) && near(box2(20 / 3), -1600 / 27)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-d18 numbers: ' + bad.join(', '));
}
export const fmt1 = (v: number) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(1));

// ---------- plates ----------
export const WALL: PlateSpec = MATHS_KIT2_PLATES.stoneWallTop;
export const CARDTEX: PlateSpec = MATHS_KIT2_PLATES.cardTexture;
export const CAR: PlateSpec = MATHS_KIT2_PLATES.carYellow;

/** The plan view: the kit's fence pen on the painted wall strip. */
export const PlanPen: React.FC<{cx: number; top: number; scale: number; x: number; wallLength: number; labels?: 'values' | 'symbols' | 'none'; showArea?: boolean; pulse?: 'x' | 'y'; at?: number; out?: number; mode?: 'fence' | 'fixed'; fixedArea?: number; wallH?: number; areaText?: string}> = ({cx, top, scale, x, wallLength, labels = 'values', showArea = true, pulse, at = -30, out, mode = 'fence', fixedArea, wallH = 60, areaText}) => (
	<StudioFencePen cx={cx} top={top} scale={scale} total={40} x={x} mode={mode} fixedArea={fixedArea} wall={{plate: WALL, length: wallLength, h: wallH}} labels={labels} showArea={showArea} areaText={areaText} pulse={pulse} at={at} out={out} />
);
/** The pen readouts as one strip of cells (30 px labels over 52 px numbers), all from fencePenState. */
export const PenStrip: React.FC<{x: number; y: number; w: number; xv: number; at?: number; out?: number; glow?: number}> = ({x, y, w, xv, at = -30, out, glow = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const q = fencePenState(40, xv);
	const cell = (label: string, value: string, color: string, g = 0) => (
		<div style={{borderRadius: 12, padding: '0 10px', background: g > 0.001 ? `rgba(220,239,226,${0.9 * g})` : undefined}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color, whiteSpace: 'pre'}}>{label}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1, whiteSpace: 'pre'}}>{value}</div>
		</div>
	);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.25fr', columnGap: 6, background: CARD, borderRadius: 20, padding: '8px 16px 10px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
			{cell('x', `${q.x.toFixed(1)} m`, MATH_BLUE)}
			{cell('y', `${q.y.toFixed(1)} m`, MATH_TEAL)}
			{cell('fence', '40 m', '#7a4600')}
			{cell('area', `${q.area.toFixed(1)} m²`, INK, glow)}
		</div>
	);
};

/** A flat card (W by H units, `px` pixels per unit) with the painted texture and dashed corner squares. */
export const FlatCard: React.FC<{W: number; H: number; px: number; cut: number; labels?: boolean}> = ({W, H, px, cut, labels = true}) => {
	usePlatePreload([CARDTEX.src]);
	const id = 'fc-' + useId().replace(/:/g, '');
	const w = W * px, h = H * px, c = cut * px, pad = 70;
	return (
		<svg width={w + 2 * pad} height={h + 2 * pad} viewBox={`${-pad} ${-pad} ${w + 2 * pad} ${h + 2 * pad}`} style={{display: 'block', overflow: 'visible'}}>
			<defs><pattern id={id} patternUnits="userSpaceOnUse" width={300} height={300}><image href={staticFile(CARDTEX.src)} width={300} height={300} preserveAspectRatio="none" /></pattern></defs>
			<rect x={0} y={0} width={w} height={h} fill={`url(#${id})`} stroke={INK} strokeWidth={3} />
			{[[0, 0], [w - c, 0], [0, h - c], [w - c, h - c]].map(([a, b], i) => <rect key={i} x={a} y={b} width={c} height={c} fill="none" stroke={MATH_MISTAKE} strokeWidth={4} strokeDasharray="10 7" />)}
			{labels ? <>
				<text x={c / 2} y={c / 2 + 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: MATH_BLUE}}>x</text>
				<text x={w - c / 2} y={c / 2 + 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: MATH_BLUE}}>x</text>
				<text x={w / 2} y={-18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: '#7a4600'}}>{`${W} cm`}</text>
				<text x={w + 16} y={h / 2 + 13} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: '#7a4600'}}>{`${H} cm`}</text>
			</> : null}
		</svg>
	);
};

/** Attempt 1's picture: the painted wall strip with a dashed garden outline under it and "50 m²" (no sides). */
export const GardenPicture: React.FC<{w?: number}> = ({w = 760}) => {
	usePlatePreload([WALL.src]);
	const wh = 64, tw = (wh * (WALL.box[2] - WALL.box[0])) / (WALL.box[3] - WALL.box[1]);
	return (
		<div style={{width: w, height: 400, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', overflow: 'hidden'}}>
			<svg width={w} height={400} viewBox={`0 0 ${w} 400`} style={{position: 'absolute', inset: 0}}>
				{[0, 1].map(k => <SvgPlate key={k} plate={WALL} x={-40 + k * tw} y={30} w={tw} />)}
				<rect x={w / 2 - 220} y={30 + wh} width={440} height={200} fill="#dcebc6" stroke={INK} strokeWidth={5} strokeDasharray="16 10" />
				<text x={w / 2} y={30 + wh + 116} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: INK}}>50 m²</text>
				<text x={w / 2} y={370} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: INK}}>least fencing?</text>
			</svg>
		</div>
	);
};

// ---------- the handoff (d19's opening frame) ----------
const CAR_GEOM = {x: 40, y: 430, w: 700};
const MIRROR: [number, number] = [998, 300];
export const T_WIN = {x: [-0.6, 14.6] as [number, number], y: [-1500, 33000] as [number, number]};
export const AXES = {x: 820, y: 170, w: 1060, h: 640};
/** The yellow car with its swing price tag; `dx` slides it in from the left. */
export const CarTag: React.FC<{dx?: number; at?: number}> = ({dx = 0, at = -30}) => {
	usePlatePreload([CAR.src]);
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const g = CAR_GEOM;
	const m = plateMap(CAR, g.x + dx, g.y, g.w);
	const [mx, my] = m.at(...MIRROR);
	return (
		<>
			<FrameSvg style={{opacity: o}}>
				<SvgPlate plate={CAR} x={g.x + dx} y={g.y} w={g.w} />
				<path d={`M${mx},${my} L${mx - 40},${my - 120}`} stroke={INK} strokeWidth={3} />
				<circle cx={mx} cy={my} r={6} fill={INK} />
			</FrameSvg>
			<div style={{position: 'absolute', left: mx - 200, top: my - 196, opacity: o, background: CARD, border: `4px solid ${INK}`, borderRadius: 16, padding: '4px 22px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, boxShadow: CARD_SHADOW, transform: 'rotate(-4deg)'}}>$30,000</div>
		</>
	);
};
const money = (v: number) => (v === 0 ? '0' : `${(v / 1000).toFixed(0)},000`);
/** d19's axes: t (years) 0 to 14, V (dollars) 0 to 32,000, the point (0, 30,000) with its violet stub. */
export const CarAxes: React.FC<{at?: number; stubAt?: number}> = ({at = -30, stubAt = -30}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const M = makePlot(AXES.x, AXES.y, AXES.w, AXES.h, T_WIN);
	const O = M.pf(0, 0), P = M.pf(0, 30000);
	const so = prog(f, stubAt, 14);
	const sl = -4500, vx = M.sx, vy = -sl * M.sy, l = Math.hypot(vx, vy), hl = 210;
	return (
		<FrameSvg style={{opacity: o}}>
			<path d={`M${M.pf(-0.6, 0)[0]},${O[1]} H${M.pf(14.6, 0)[0]} M${O[0]},${M.pf(0, -1500)[1]} V${M.pf(0, 33000)[1]}`} stroke={INK} strokeWidth={4} fill="none" />
			{[2, 4, 6, 8, 10, 12, 14].map(t => {const p = M.pf(t, 0); return <g key={t}><line x1={p[0]} x2={p[0]} y1={p[1] - 8} y2={p[1] + 8} stroke={INK} strokeWidth={3} /><text x={p[0]} y={p[1] + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{t}</text></g>;})}
			{[5000, 10000, 15000, 20000, 25000, 30000].map(v => {const p = M.pf(0, v); return <g key={v}><line x1={p[0] - 8} x2={p[0] + 8} y1={p[1]} y2={p[1]} stroke={INK} strokeWidth={3} /><line x1={p[0]} x2={M.pf(14.6, 0)[0]} y1={p[1]} y2={p[1]} stroke="#d9cfbd" strokeWidth={1.5} /><text x={p[0] - 14} y={p[1] + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{money(v)}</text></g>;})}
			<text x={M.pf(14.6, 0)[0] - 4} y={O[1] - 18} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>t (years)</text>
			<text x={O[0] - 14} y={M.pf(0, 33000)[1] - 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>V (dollars)</text>
			<line x1={P[0] - (vx / l) * 20} y1={P[1] - (vy / l) * 20} x2={P[0] + (vx / l) * hl} y2={P[1] + (vy / l) * hl} stroke={MATH_GRADIENT} strokeWidth={7} strokeLinecap="round" opacity={so} />
			<circle cx={P[0]} cy={P[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
			<text x={P[0] + 30} y={P[1] - 8} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">new: $30,000</text>
			<text x={M.pf(1.2, 0)[0]} y={M.pf(0, 17000)[1]} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, fill: INK_SOFT}} opacity={so}>losing 15% of $30,000 = $4,500 per year</text>
		</FrameSvg>
	);
};
