// Lesson parts for math-a12-i10 (Revision 2: signed integral against total area; a lift going up 2 floors and down
// 2), on the maths studio kit and i09's parts (imported read-only). Lesson-local rigs:
// - LiftShaftSim: the painted shaft (brief 238 plate) with the reused physics lift car. The landings were not
//   painted evenly (238-I10-PLATE-LANDINGS: floor lines at y 2092, 1737, 1399, 1056 for G, 1, 2, 3), so the
//   plate is never warped: the car's floor follows a piecewise-linear fit through the measured landings, and the
//   car uses Codex's measured fit (scale 0.19, canvas left x 470, canvas top = landing floor − 345.8);
// - FlipFill: a region between a curve and the x-axis that folds up about the axis (p from 0 to 1) with an amber
//   outline, drawn inside any plot (the kit StudioAreaFlip owns its own axes, so it cannot share a plot);
// - Road: a coded road with a 0 to 40 m scale and the reused blue car at s(t) = 12t − t² (the kit TripSim scrolls
//   the road under a fixed car, so its car never visibly reverses along a fixed scale);
// - Named: the two named rows, "integral (signed)" in ink and "area (all positive)" with an amber rule.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, FrameSvg, SvgPlate, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export {ABLUE, AMBER, AMBER_STROKE, AnswerBox, Attempt, BoxCard, Bu, Chip, Ex, FramedCard, GRAD, Graph, Hand, Int, Lims, MiniPlot, PLabel, RED, Row, SOFT, TEAL, Task, Tick} from '../math-a12-i09/parts';

const PI = Math.PI;
// ---------- the models ----------
export const level = (t: number) => 1 - Math.cos(Math.max(0, Math.min(2 * PI, t)));
export const travelled = (t: number) => {const u = Math.max(0, Math.min(2 * PI, t)); return u <= PI ? 1 - Math.cos(u) : 4 - level(u);};
export const q4 = (x: number) => x * x - 4;
export const Fq4 = (x: number) => (x * x * x) / 3 - 4 * x;
export const cq = (x: number) => x * x - 4 * x + 3;
export const Fcq = (x: number) => (x * x * x) / 3 - 2 * x * x + 3 * x;
export const ex2 = (x: number) => Math.exp(x) - 2;
export const Fex = (x: number) => Math.exp(x) - 2 * x;
export const vcar = (t: number) => 12 - 2 * t;
export const scar = (t: number) => {const u = Math.max(0, Math.min(8, t)); return 12 * u - u * u;};
export const odo = (t: number) => {const u = Math.max(0, Math.min(8, t)); return u <= 6 ? scar(u) : 36 + (36 - scar(u));};
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const L2 = Math.LN2;
	const checks: [string, boolean][] = [
		['lift', near(level(PI), 2) && near(level(2 * PI), 0) && near(travelled(2 * PI), 4)],
		['trapezium', near(9 + 3 - 2, 10)],
		['below', near(Fq4(2) - Fq4(0), -16 / 3)],
		['change', near(Fq4(3) - Fq4(2), 7 / 3) && near(Fq4(3) - Fq4(0), -3) && near(7 / 3 + 16 / 3, 23 / 3)],
		['no graph', near(Fcq(1) - Fcq(0), 4 / 3) && near(Fcq(3) - Fcq(1), -4 / 3) && near(Fcq(4) - Fcq(3), 4 / 3) && near(Fcq(4) - Fcq(0), 4 / 3) && cq(0) === 3 && cq(2) === -1 && cq(4) === 3],
		['exp', near(Fex(L2) - Fex(0), 1 - 2 * L2) && near(Fex(1) - Fex(L2), Math.E - 4 + 2 * L2) && near(Math.E - 5 + 4 * L2, 0.49087, 1e-4) && near(L2, 0.6931, 1e-4)],
		['car', near(scar(8), 32) && near(scar(6), 36) && near(odo(8), 40)],
		['A1', near(64 / 3 - 16 - (8 / 3 - 4), 20 / 3) && near(8 / 3 - 4, -4 / 3) && near(4 / 3 + 20 / 3, 8)],
		['A2', 5 - 3 === 2 && 5 + 3 === 8],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i10 numbers: ' + bad.join(', '));
}

// ---------- the lift ----------
export const SHAFT: PlateSpec = {src: 'assets/maths/ma12-lift-shaft-v1.png', nat: [1200, 2800], box: [321, 594, 880, 2197]};
export const LIFTCAR: PlateSpec = {src: 'assets/physics/phys-y11-lift-car-v1.png', nat: [1400, 2000], box: [153, 180, 1247, 1820]};
const LANDINGS = [2092, 1737, 1399, 1056];
const floorY = (lv: number) => {const l = Math.max(0, Math.min(3, lv)); const i = Math.min(2, Math.floor(l)); return LANDINGS[i] + (LANDINGS[i + 1] - LANDINGS[i]) * (l - i);};
export const shaftW = (h: number) => (h * (SHAFT.box[2] - SHAFT.box[0])) / (SHAFT.box[3] - SHAFT.box[1]);
/** The shaft (top-left alpha corner at x, y, height h) with the car at `lv` floors above G and grey landing tags. */
export const LiftShaftSim: React.FC<{x: number; y: number; h: number; lv: number; tags?: boolean; at?: number; out?: number}> = ({x, y, h, lv, tags = true, at = -30, out}) => {
	usePlatePreload([SHAFT.src, LIFTCAR.src]);
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 14);
	if (o <= 0.001) return null;
	const w = shaftW(h);
	const m = plateMap(SHAFT, x, y, w);
	const fy = floorY(lv);
	const [cx, cy] = m.at(470 + 153 * 0.19, fy - 345.8 + 180 * 0.19);
	const cw = (LIFTCAR.box[2] - LIFTCAR.box[0]) * 0.19 * m.s;
	return <FrameSvg style={{opacity: o}}>
		<SvgPlate plate={SHAFT} x={x} y={y} w={w} />
		<SvgPlate plate={LIFTCAR} x={cx} y={cy} w={cw} />
		{tags ? ['G', '1', '2', '3'].map((t, i) => {const [, ly] = m.at(0, LANDINGS[i]); return <text key={t} x={x - 14} y={ly - 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: '#6b6358'}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{t}</text>;}) : null}
	</FrameSvg>;
};

// ---------- the flip ----------
/** Region between fn and the x-axis on [a, b], folded about the axis by p (0: as is; 1: mirrored), inside a plot. */
export const FlipFill: React.FC<{m: PlotMap; fn: (x: number) => number; a: number; b: number; p: number; o?: number}> = ({m, fn, a, b, p, o = 1}) => {
	if (o <= 0.01) return null;
	const k = 1 - 2 * Math.max(0, Math.min(1, p));
	const N = 80;
	let d = '', g = '';
	for (let i = 0; i <= N; i++) {const t = a + ((b - a) * i) / N; const [px, py] = m.p(t, k * fn(t)); d += `${i ? 'L' : 'M'}${px},${py} `; const [gx, gy] = m.p(t, fn(t)); g += `${i ? 'L' : 'M'}${gx},${gy} `;}
	const [bx, by] = m.p(b, 0), [ax, ay] = m.p(a, 0);
	const neg = fn((a + b) / 2) * k < 0;
	return <g opacity={o} clipPath={m.clip}>
		<path d={`${d} L${bx},${by} L${ax},${ay} Z`} fill={neg ? '#f8e8c8' : '#d6eeee'} stroke={p > 0.02 ? '#d18f1f' : 'none'} strokeWidth={5} />
		{p > 0.02 ? <path d={g} fill="none" stroke="#8a8378" strokeWidth={3} strokeDasharray="10 8" opacity={Math.min(1, p * 2)} /> : null}
	</g>;
};

// ---------- the road ----------
export const CARP: PlateSpec = {src: 'assets/biology/b4-car-blue-v1.png', nat: [1600, 800], box: [161, 136, 1440, 664]};
export const Road: React.FC<{x: number; y: number; w: number; s: number; at?: number}> = ({x, y, w, s, at = -30}) => {
	usePlatePreload([CARP.src]);
	const fr = useCurrentFrame();
	const o = vis(fr, at, undefined, 14);
	if (o <= 0.001) return null;
	const px = (m: number) => x + 60 + (m / 40) * (w - 160);
	const cw = 230, ch = (cw * (CARP.box[3] - CARP.box[1])) / (CARP.box[2] - CARP.box[0]);
	return <FrameSvg style={{opacity: o}}>
		<rect x={x} y={y + 70} width={w} height={90} rx={14} fill="#7b766e" />
		{Array.from({length: 18}, (_, i) => <rect key={i} x={x + 20 + i * (w / 18)} y={y + 112} width={w / 36} height={6} fill="#f4efe2" />)}
		<line x1={px(0)} x2={px(40)} y1={y + 190} y2={y + 190} stroke={INK} strokeWidth={3} />
		{[0, 8, 16, 24, 32, 36, 40].map(m => <g key={m}><line x1={px(m)} x2={px(m)} y1={y + 180} y2={y + 200} stroke={INK} strokeWidth={3} /><text x={px(m)} y={y + 236} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: m === 32 || m === 36 ? INK : '#4f4840'}}>{m}</text></g>)}
		<text x={px(40) + 30} y={y + 236} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: '#4f4840'}}>m</text>
		<SvgPlate plate={CARP} x={px(s) - cw / 2} y={y + 120 - ch} w={cw} />
		<line x1={px(s)} x2={px(s)} y1={y + 150} y2={y + 190} stroke="#d18f1f" strokeWidth={5} />
	</FrameSvg>;
};

// ---------- the two named rows ----------
export const Named: React.FC<{x: number; y: number; kind: 'int' | 'area'; at: number; out?: number; size?: number; frame?: number; children: React.ReactNode}> = ({x, y, kind, at, out, size = 44, frame = 0, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	const isA = kind === 'area';
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `translateY(${(1 - prog(fr, at, 12)) * 10}px)`, display: 'inline-flex', alignItems: 'baseline', gap: 14, padding: '2px 18px 4px', borderLeft: isA ? '9px solid #d18f1f' : `9px solid ${INK}`, border: frame > 0.5 ? '5px solid #287347' : undefined, borderRadius: frame > 0.5 ? 14 : 0, background: frame > 0.5 ? CARD : undefined, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>
		<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 0.82, color: isA ? '#9c5a00' : INK}}>{isA ? 'area (all positive):' : 'integral (signed):'}</span>{children}
	</div>;
};
