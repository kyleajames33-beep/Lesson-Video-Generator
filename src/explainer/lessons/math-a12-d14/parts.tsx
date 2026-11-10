// Lesson parts for math-a12-d14 (Revision 4: tangents and normals; a car's headlights on a curving road), built
// on the maths studio kit. HeadlightDrive is lesson-local (root decision 21): the road band follows the curve
// through the graph transform, the painted top-view car rides the centre line with its heading taken from the
// on-screen tangent (equal units), its beam lights along the tangent and a dashed line straight across the road
// marks the normal. The car plate is the reused Physics top view, drawn at native aspect; its body centre
// (800, 399), headlamps (1342, 214) and (1341, 584) and front bumper (x 1455) were measured on the plate (10 Nov).
import React, {useId} from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FunctionSimulator, kf, usePlatePreload, vis, MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL} from '../../math/studio';
import type {FnFamily, FunctionSimulatorProps, PlateSpec} from '../../math/studio';
import {gmap} from '../math-a12-d13/parts';
import type {GMap} from '../math-a12-d04/parts';

export {AnswerBox, AmberStrip, B, Chip, CurveLabel, Frac2, Line, P, Panel, PreRing, RecallChip, Ring, S, gmap, tl} from '../math-a12-d13/parts';
export type {GMap};

export const VIOLET = MATH_GRADIENT;
export const TEAL = MATH_TEAL;
export const BLUE = MATH_BLUE;
export const AMB = MATH_AMBER;
export const AMB_INK = '#7a4600';
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const GREY = MATH_EXCLUDED;
export const GREY_INK = '#4f4840';
export const PI = Math.PI;
export const R3 = Math.sqrt(3);
export const E = Math.E;

export type Stage = {x: number; y: number; w: number; h: number};
export type Win = {x: [number, number]; y: [number, number]};
/** Lerp two stages (camera moves between scenes). */
export const lerpStage = (a: Stage, b: Stage, t: number): Stage => ({x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, w: a.w + (b.w - a.w) * t, h: a.h + (b.h - a.h) * t});
export const lerpWin = (a: Win, b: Win, t: number): Win => ({x: [a.x[0] + (b.x[0] - a.x[0]) * t, a.x[1] + (b.x[1] - a.x[1]) * t], y: [a.y[0] + (b.y[0] - a.y[0]) * t, a.y[1] + (b.y[1] - a.y[1]) * t]});

// ---------- windows and stages (equal units everywhere a right angle is shown) ----------
/** Scenes 1 to 5: x −0.3 to 2.1, y −1.2 to 1.2. */
export const WIN_SQ: Win = {x: [-0.3, 2.1], y: [-1.2, 1.2]};
/** The square 680 × 680 plot box at the left (283 px per unit). */
export const SQ: Stage = {x: 30, y: 150, w: 806, h: 800};
/** The 640 × 640 plot box at the right for the g01 boards (267 px per unit). */
export const WK: Stage = {x: 1074, y: 170, w: 766, h: 760};
export const SQ_TICKS = [{value: PI / 6, label: 'π/6'}, {value: PI / 3, label: 'π/3'}, {value: PI / 2, label: 'π/2'}, {value: 2 * PI / 3, label: '2π/3'}];
export const SQ_YTICKS = [{value: -1, label: '−1'}, {value: -0.5, label: '−½'}, {value: 0.5, label: '½'}, {value: 1, label: '1'}];

// ---------- functions ----------
export const COS2: FnFamily = {f: u => Math.cos(2 * u), df: u => -2 * Math.sin(2 * u)};
export const XEX: FnFamily = {f: u => u * Math.exp(-u), df: u => Math.exp(-u) * (1 - u)};
export const LNCOS: FnFamily = {
	f: u => Math.log(u) / Math.cos(u),
	df: u => (Math.cos(u) / u + Math.log(u) * Math.sin(u)) / Math.cos(u) ** 2,
	domain: [{from: 0, to: Infinity}],
	excluded: [PI / 2, 3 * PI / 2],
};
export const E2X: FnFamily = {f: u => Math.exp(2 * u), df: u => 2 * Math.exp(2 * u)};
export const SPC: FnFamily = {f: u => Math.sin(u) + Math.cos(u), df: u => Math.cos(u) - Math.sin(u)};
export const SQR: FnFamily = {f: u => u * u, df: u => 2 * u};
const fnOf = (fam: FnFamily) => (x: number) => fam.f(x, {});
const dfOf = (fam: FnFamily) => (x: number) => fam.df(x, {});

/** Exact values used on screen, checked once at load (author notes b, c, d, e, f). */
export const MEET_X = 1.316613, MEET_Y = -0.87354;
export const TAN_C = (PI * R3) / 6 + 0.5; // intercept of the cos 2x tangent at π/6
{
	const near = (a: number, b: number, tol = 1e-4) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['cos 2x at π/6', near(COS2.f(PI / 6, {}), 0.5) && near(COS2.df(PI / 6, {}), -R3)],
		['meets again', near(-R3 * MEET_X + TAN_C, Math.cos(2 * MEET_X), 2e-5) && near(MEET_Y, Math.cos(2 * MEET_X), 2e-5)],
		['xe^-x flat at 1', near(XEX.df(1, {}), 0) && near(XEX.f(1, {}), 1 / E)],
		['ln x/cos x at 1', near(LNCOS.f(1, {}), 0) && near(LNCOS.df(1, {}), 1 / Math.cos(1))],
		['e^2x at ½', near(E2X.f(0.5, {}), E) && near(E2X.df(0.5, {}), 2 * E)],
		['sin + cos at π/4', near(SPC.f(PI / 4, {}), Math.SQRT2) && near(SPC.df(PI / 4, {}), 0)],
	];
	const bad = checks.filter(c => !c[1]).map(c => c[0]);
	if (bad.length) throw new Error('math-a12-d14 numbers: ' + bad.join(', '));
}

// ---------- the car plate ----------
/** Physics top-view car (1600 × 800; alpha box 144,95 to 1456,704; faces right in the file). */
export const CAR: PlateSpec = {src: 'assets/physics/phys-y11-car-top-v1.png', nat: [1600, 800], box: [144, 95, 1456, 704]};
const CAR_C: [number, number] = [800, 399];
const LAMP_OFF = 185; // headlamps 214 and 584 about the body centre line 399
const CAR_FRONT = 1455;
/** Car length in maths units (about 140 px at 283 px per unit) and road width in units. */
export const CAR_U = 0.5;
export const ROAD_U = 0.24;
const ASPHALT = '#bdb8ae';
const VERGE = '#e2dac6';
const mixHex = (a: string, b: string, t: number) => {
	const pa = [1, 3, 5].map(i => parseInt(a.slice(i, i + 2), 16)), pb = [1, 3, 5].map(i => parseInt(b.slice(i, i + 2), 16));
	return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join('');
};

/** The painted car centred at p, heading `deg` (screen degrees, clockwise), `len` px long, never stretched. */
export const CarSprite: React.FC<{p: [number, number]; deg: number; len: number; o?: number}> = ({p, deg, len, o = 1}) => {
	if (o <= 0.001) return null;
	const s = len / (CAR.box[2] - CAR.box[0]);
	return (
		<g transform={`translate(${p[0].toFixed(2)},${p[1].toFixed(2)}) rotate(${deg.toFixed(3)})`} opacity={o}>
			<image href={staticFile(CAR.src)} x={-CAR_C[0] * s} y={-CAR_C[1] * s} width={CAR.nat[0] * s} height={CAR.nat[1] * s} preserveAspectRatio="none" />
		</g>
	);
};

/** Screen geometry at the car's point: unit tangent (along travel, x increasing) and unit normal (anticlockwise). */
export const dirs = (sx: number, sy: number, m: number) => {
	const vx = sx, vy = -m * sy, l = Math.hypot(vx, vy);
	const u: [number, number] = [vx / l, vy / l];
	// maths normal (−m, 1) on screen
	const nx = -m * sx, ny = -1 * sy, nl = Math.hypot(nx, ny);
	const n: [number, number] = [nx / nl, ny / nl];
	return {u, n, deg: (Math.atan2(u[1], u[0]) * 180) / PI};
};

/** A pale-gold glow cone from the car's headlamps along u. */
const Glow: React.FC<{p: [number, number]; u: [number, number]; len: number; reach: number; o: number; gid: string}> = ({p, u, len, reach, o, gid}) => {
	if (o <= 0.001) return null;
	const s = len / (CAR.box[2] - CAR.box[0]);
	const fwd = (CAR_FRONT - CAR_C[0]) * s - 6, half = LAMP_OFF * s;
	const nx = -u[1], ny = u[0];
	const fx = p[0] + u[0] * fwd, fy = p[1] + u[1] * fwd;
	const ex = fx + u[0] * reach, ey = fy + u[1] * reach, spread = half + reach * 0.2;
	const pts = [[fx + nx * half, fy + ny * half], [ex + nx * spread, ey + ny * spread], [ex - nx * spread, ey - ny * spread], [fx - nx * half, fy - ny * half]];
	return (
		<g opacity={o}>
			<defs>
				<linearGradient id={gid} gradientUnits="userSpaceOnUse" x1={fx} y1={fy} x2={ex} y2={ey}>
					<stop offset="0" stopColor="#ffd970" stopOpacity={0.85} />
					<stop offset="0.55" stopColor="#ffe39a" stopOpacity={0.45} />
					<stop offset="1" stopColor="#fff0c4" stopOpacity={0} />
				</linearGradient>
			</defs>
			<polygon points={pts.map(q => q.map(v => v.toFixed(1)).join(',')).join(' ')} fill={`url(#${gid})`} />
		</g>
	);
};

/** A right-angle mark at p between directions a and b (screen units). */
export const RightMark: React.FC<{p: [number, number]; a: [number, number]; b: [number, number]; size?: number; o?: number; color?: string}> = ({p, a, b, size = 26, o = 1, color = INK}) => (o <= 0.001 ? null : (
	<path d={`M${p[0] + a[0] * size},${p[1] + a[1] * size} L${p[0] + (a[0] + b[0]) * size},${p[1] + (a[1] + b[1]) * size} L${p[0] + b[0] * size},${p[1] + b[1] * size}`} fill="none" stroke={color} strokeWidth={3.5} opacity={o} />
));

/** Road band curves for FunctionSimulator (verge, then asphalt), one entry per connected piece. */
export const roadCurves = (fn: (x: number) => number, pieces: readonly [number, number][], sx: number, o: {at: number; out?: number; width?: number; dim?: number}): NonNullable<FunctionSimulatorProps['curves']>[number][] => {
	const w = (o.width ?? ROAD_U) * sx, d = (o.dim ?? 0) * 0.6;
	return pieces.flatMap(([a, b]) => [
		{fn, at: o.at, out: o.out, color: mixHex(VERGE, '#f6f1e7', d), width: w + 14, domain: [a, b] as [number, number]},
		{fn, at: o.at, out: o.out, color: mixHex(ASPHALT, '#f6f1e7', d), width: w, domain: [a, b] as [number, number]},
	]);
};

export type RoadViewProps = {
	S: Stage; win: Win; fam: FnFamily;
	/** The car's x (and the point's x unless px is given). */
	X: number; px?: number;
	at?: number; out?: number; draw?: {at: number; dur?: number};
	xTicks?: FunctionSimulatorProps['xTicks']; yTicks?: FunctionSimulatorProps['yTicks']; xLabel?: string; yLabel?: string;
	/** Road pieces in x; grow = frames over which the road draws along from the left. */
	road?: {at: number; pieces: readonly [number, number][]; grow?: number; out?: number; dim?: number};
	/** Opacities (0 to 1) computed by the scene from its cues. */
	carO?: number; tangentO?: number; normalO?: number; glowO?: number; acrossO?: number; rightO?: number; ringO?: number;
	/** The dashed across-road line turns solid (it is the normal) as acrossSolid goes to 1. */
	acrossSolid?: number;
	carU?: number; glowReach?: number; acrossHalf?: number; tangentHalf?: number; normalHalf?: number;
	curveColor?: string;
	asymptotes?: readonly number[];
	curves?: FunctionSimulatorProps['curves'];
	/** Night tint over the plot (0 to 1). */
	night?: number;
	/** SVG drawn under the car (frame coordinates, clipped to the plot). */
	under?: (M: GMap) => React.ReactNode;
	/** SVG drawn over everything (frame coordinates, not clipped). */
	over?: (M: GMap) => React.ReactNode;
	/** Extra DOM (labels) in frame coordinates. */
	html?: (M: GMap) => React.ReactNode;
};

/**
 * HeadlightDrive: the coded road along the curve, the painted car on its centre line, its beam (the violet
 * tangent with a gold glow ahead) and the dashed teal line straight across the road (the normal's direction).
 */
export const RoadView: React.FC<RoadViewProps> = p => {
	usePlatePreload([CAR.src]);
	const f = useCurrentFrame();
	const gid = `hd-${useId().replace(/:/g, '')}`;
	const {S: st, win, fam, X} = p;
	const fn = fnOf(fam), df = dfOf(fam);
	const M = gmap(st.x, st.y, st.w, st.h, win);
	const PX = p.px ?? X;
	const P = M.pt(X, fn(X)), Q = M.pt(PX, fn(PX));
	const car = dirs(M.sx, M.sy, df(X)), pt = dirs(M.sx, M.sy, df(PX));
	const len = (p.carU ?? CAR_U) * M.sx;
	const roadW = ROAD_U * M.sx;
	const roadGrow = p.road?.grow ? prog(f, p.road.at, p.road.grow) : 1;
	const road = p.road ? p.road.pieces.flatMap(([a, b]) => {
		const hi = Math.min(b, win.x[0] + (win.x[1] - win.x[0] + 0.4) * roadGrow);
		return hi > a ? roadCurves(fn, [[a, hi]], M.sx, {at: p.road!.at, out: p.road!.out, dim: p.road!.dim}) : [];
	}) : [];
	const B = M.box;
	const big = 2600;
	const tO = p.tangentO ?? 0, nO = p.normalO ?? 0, aO = p.acrossO ?? 0, gO = p.glowO ?? 0, cO = p.carO ?? 0;
	const aHalf = p.acrossHalf ?? roadW * 1.25;
	const solid = p.acrossSolid ?? 0;
	const line = (c: [number, number], d: [number, number], half: number) => ({x1: c[0] - d[0] * half, y1: c[1] - d[1] * half, x2: c[0] + d[0] * half, y2: c[1] + d[1] * half});
	return (
		<>
			<FunctionSimulator x={st.x} y={st.y} width={st.w} height={st.h} window={win} family={fam} timeline={[{frame: 0, x: PX}]} color={p.curveColor ?? INK} at={p.at ?? -60} out={p.out} draw={p.draw}
				xTicks={p.xTicks} yTicks={p.yTicks} xLabel={p.xLabel ?? 'x'} yLabel={p.yLabel ?? 'y'} asymptotes={p.asymptotes}
				curves={[...road, ...(p.curves ?? [])]} />
			<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', opacity: vis(f, p.at ?? -60, p.out, 14)}}>
				<defs><clipPath id={gid + 'c'}><rect x={B.left} y={B.top} width={B.width} height={B.height} /></clipPath></defs>
				<g clipPath={`url(#${gid}c)`}>
					{(p.night ?? 0) > 0.001 ? <rect x={B.left} y={B.top} width={B.width} height={B.height} fill="rgb(28,36,64)" opacity={0.11 * (p.night ?? 0)} /> : null}
					{p.under ? p.under(M) : null}
					{tO > 0.001 ? <line {...line(Q, pt.u, p.tangentHalf ?? big)} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" opacity={tO} /> : null}
					{nO > 0.001 ? <line {...line(Q, pt.n, p.normalHalf ?? big)} stroke={TEAL} strokeWidth={6} strokeLinecap="round" opacity={nO} /> : null}
					<Glow p={P} u={car.u} len={len} reach={p.glowReach ?? 260} o={gO * cO} gid={gid + 'g'} />
					{aO > 0.001 ? <line {...line(P, car.n, aHalf)} stroke={TEAL} strokeWidth={5 + solid} strokeDasharray={solid > 0.5 ? undefined : '12 8'} strokeLinecap="round" opacity={aO} /> : null}
					<CarSprite p={P} deg={car.deg} len={len} o={cO} />
					<RightMark p={Q} a={pt.u} b={pt.n} o={p.rightO ?? 0} />
				</g>
				{(p.ringO ?? 0) > 0.001 ? <circle cx={Q[0]} cy={Q[1]} r={28} fill="none" stroke={INK} strokeWidth={5} opacity={p.ringO} /> : null}
				{(p.ringO ?? 0) > 0.001 ? <circle cx={Q[0]} cy={Q[1]} r={8} fill={INK} stroke={CARD} strokeWidth={3} opacity={p.ringO} /> : null}
				{p.over ? p.over(M) : null}
			</svg>
			{p.html ? p.html(M) : null}
		</>
	);
};

/**
 * Close-up of the car (the same picture magnified k times about the car): the road, the car about 330 px long,
 * the glow, the violet beam line and the dashed teal line across the road. Heading and road follow the live state.
 */
export const CloseUp: React.FC<{x: number; y: number; w: number; h: number; M: GMap; fam: FnFamily; X: number; k: number; at?: number; out?: number; pieces: readonly [number, number][]; carU?: number; glowO?: number; tangentO?: number; acrossO?: number; acrossSolid?: number; night?: number; title?: string; children?: React.ReactNode}> = ({x, y, w, h, M, fam, X, k, at = -30, out, pieces, carU = CAR_U, glowO = 0, tangentO = 0, acrossO = 0, acrossSolid = 0, night = 0, title, children}) => {
	const f = useCurrentFrame();
	const gid = `cu-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const fn = fnOf(fam), df = dfOf(fam);
	const P = M.pt(X, fn(X));
	const cx = w / 2, cy = h / 2;
	const Z = (a: number, b: number): [number, number] => {const q = M.pt(a, b); return [cx + (q[0] - P[0]) * k, cy + (q[1] - P[1]) * k];};
	const spanX = (Math.max(w, h) / (k * M.sx)) * 0.8;
	const paths = pieces.map(([a, b]) => {
		const lo = Math.max(a, X - spanX), hi = Math.min(b, X + spanX);
		if (!(hi > lo)) return '';
		const n = 120, pts: string[] = [];
		for (let i = 0; i <= n; i++) {const u = lo + ((hi - lo) * i) / n; const v = fn(u); if (Number.isFinite(v)) {const q = Z(u, v); pts.push(`${pts.length ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`);}}
		return pts.join(' ');
	}).filter(Boolean);
	const d = dirs(M.sx, M.sy, df(X));
	const len = carU * M.sx * k, roadW = ROAD_U * M.sx * k;
	const C: [number, number] = [cx, cy];
	const L = (dd: [number, number], half: number) => ({x1: cx - dd[0] * half, y1: cy - dd[1] * half, x2: cx + dd[0] * half, y2: cy + dd[1] * half});
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o * prog(f, at, 14), borderRadius: 22, overflow: 'hidden', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.16)', background: '#f3efe4'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
				{paths.map((pp, i) => <path key={'v' + i} d={pp} stroke={VERGE} strokeWidth={roadW + 30} fill="none" strokeLinecap="round" />)}
				{paths.map((pp, i) => <path key={'a' + i} d={pp} stroke={ASPHALT} strokeWidth={roadW} fill="none" strokeLinecap="round" />)}
				{paths.map((pp, i) => <path key={'c' + i} d={pp} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" />)}
				{night > 0.001 ? <rect x={0} y={0} width={w} height={h} fill="rgb(28,36,64)" opacity={0.11 * night} /> : null}
				{tangentO > 0.001 ? <line {...L(d.u, 2000)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={tangentO} /> : null}
				<Glow p={C} u={d.u} len={len} reach={Math.max(w, h) * 0.75} o={glowO} gid={gid} />
				{acrossO > 0.001 ? <line {...L(d.n, roadW * 1.15)} stroke={TEAL} strokeWidth={7} strokeDasharray={acrossSolid > 0.5 ? undefined : '16 11'} strokeLinecap="round" opacity={acrossO} /> : null}
				<CarSprite p={C} deg={d.deg} len={len} />
				{acrossO > 0.001 ? <RightMark p={C} a={d.u} b={d.n} size={34} o={acrossO * tangentO} /> : null}
			</svg>
			{title ? <div style={{position: 'absolute', left: 18, top: 10, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>{title}</div> : null}
			{children}
		</div>
	);
};

/** A dashed leader from the car on the graph to the close-up panel's nearest edge. */
export const Leader: React.FC<{from: [number, number]; to: [number, number]; at: number; out?: number; r?: number}> = ({from, to, at, out, r = 40}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const dx = to[0] - from[0], dy = to[1] - from[1], l = Math.hypot(dx, dy) || 1;
	const s: [number, number] = [from[0] + (dx / l) * r, from[1] + (dy / l) * r];
	const p = prog(f, at, 18);
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', opacity: o}}>
			<circle cx={from[0]} cy={from[1]} r={r} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="8 7" />
			<line x1={s[0]} y1={s[1]} x2={s[0] + (to[0] - s[0]) * p} y2={s[1] + (to[1] - s[1]) * p} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="10 9" />
		</svg>
	);
};

/** The drive readouts: x, the road's gradient f′(x) and the across-road gradient −1/f′(x) ("none: upright" when flat). */
export const DriveStrip: React.FC<{x: number; y: number; w: number; X: number; m: number; at?: number; out?: number; acrossAt?: number; xText?: string; mGlow?: number; aGlow?: number; vertical?: boolean}> = ({x, y, w, X, m, at = -30, out, acrossAt, xText, mGlow = 0, aGlow = 0, vertical = false}) => {
	const f = useCurrentFrame();
	const fmt = (v: number, d = 3) => (Math.abs(v) < 0.5 * 10 ** -d ? (0).toFixed(d) : (v < 0 ? '−' : '') + Math.abs(v).toFixed(d));
	const flat = Math.abs(m) < 0.002;
	const cell = (label: string, value: string, color: string, glow = 0, o = 1, rgb = '231,224,242') => (
		<div style={{opacity: o, borderRadius: 12, padding: '0 10px', background: glow > 0.001 ? `rgba(${rgb},${0.9 * glow})` : undefined}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color, whiteSpace: 'pre'}}>{label}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1, whiteSpace: 'pre'}}>{value}</div>
		</div>
	);
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{display: 'grid', gridTemplateColumns: vertical ? '1fr' : '0.7fr 1.15fr 1.25fr', columnGap: 8, rowGap: vertical ? 6 : 0, background: CARD, borderRadius: 20, padding: '8px 16px 10px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
				{cell('x', xText ?? fmt(X, 3), INK)}
				{cell('road gradient f′(x)', fmt(m), VIOLET, mGlow)}
				{cell('across: −1/f′(x)', flat ? 'none: upright' : fmt(-1 / m), TEAL, aGlow, acrossAt === undefined ? 1 : prog(f, acrossAt, 12), '214,238,238')}
			</div>
		</Enter>
	);
};

/** Small top-right legend from scene 2 on. */
export const Legend: React.FC<{at?: number; out?: number}> = ({at = -30, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const items: [string, string, string | undefined][] = [[VIOLET, 'tangent: headlights', undefined], [TEAL, 'normal: straight across', '10 7']];
	return (
		<div style={{position: 'absolute', right: 96, top: 30, opacity: o, display: 'flex', gap: 28, alignItems: 'center'}}>
			{items.map(([c, t, d], i) => (
				<span key={i} style={{display: 'flex', alignItems: 'center', gap: 10}}>
					<svg width={40} height={12}><line x1={2} x2={38} y1={6} y2={6} stroke={c} strokeWidth={6} strokeDasharray={d} strokeLinecap="round" /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: c}}>{t}</span>
				</span>
			))}
		</div>
	);
};

/** Role spans: tangent and gradients violet, normals teal, with an optional glow. */
const glowBg = (rgb: string, g: number) => (g > 0.001 ? `rgba(${rgb},${0.9 * g})` : undefined);
export const V: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: VIOLET, background: glowBg('231,224,242', g), borderRadius: 8}}>{children}</span>;
export const Tl: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: TEAL, background: glowBg('214,238,238', g), borderRadius: 8}}>{children}</span>;
/** Ink span with a warm glow (substitution moments). */
export const G: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{background: glowBg('248,232,200', g), borderRadius: 8}}>{children}</span>;
/** Grey note beside a line. */
export const Note: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, at, out, size = 34, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: GREY_INK, whiteSpace: 'pre'}}>{children}</div>;
};

/** Results box: the point and gradient kept bright while the earlier rows dim. */
export const Results: React.FC<{x: number; y: number; w?: number; at: number; out?: number; rows: {content: React.ReactNode; at: number; glow?: number}[]; size?: number; title?: string}> = ({x, y, w, at, out, rows, size = 44, title = 'Results'}) => {
	const f = useCurrentFrame();
	const shown = rows.filter(r => f >= r.at - 2);
	if (!shown.length) return null;
	return (
		<Enter at={Math.min(at, shown[0].at)} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '10px 24px 12px', boxShadow: CARD_SHADOW, border: `3px solid ${INK}`}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT, textTransform: 'uppercase'}}>{title}</div>
				{shown.map((r, i) => <div key={i} style={{opacity: prog(f, r.at, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre', lineHeight: 1.25, borderRadius: 10, background: glowBg('248,232,200', r.glow ?? 0)}}>{r.content}</div>)}
			</div>
		</Enter>
	);
};

/** Green answer frame with several lines (tangent and normal together). */
export const AnswerStack: React.FC<{x: number; y: number; at: number; out?: number; size?: number; rows: {content: React.ReactNode; at: number}[]}> = ({x, y, at, out, size = 46, rows}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
			<div style={{display: 'inline-flex', alignItems: 'center', gap: 16, background: CARD, borderRadius: 18, padding: '6px 24px 8px', border: `5px solid ${GREEN}`, boxShadow: '0 12px 26px rgba(40,115,71,0.14)'}}>
				<div>{rows.map((r, i) => <div key={i} style={{opacity: prog(f, r.at, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre', lineHeight: 1.3}}>{r.content}</div>)}</div>
				<svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60"><path d="M8,32 L24,48 L54,10" stroke={GREEN} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
			</div>
		</Enter>
	);
};

/** Car heading x on a timeline of [frame, x] keys (eased). */
export const drive = (f: number, keys: readonly (readonly [number, number])[]) => kf(f, keys);

/** Small map views for the memory card and notes: road, curve, ring, tangent, normal and the car. */
export const MiniRoad: React.FC<{w: number; h: number; win: Win; fam: FnFamily; X: number; pieces: readonly [number, number][]; normalGlow?: number; label: React.ReactNode; tag?: React.ReactNode; asym?: number}> = ({w, h, win, fam, X, pieces, normalGlow = 0, label, tag, asym}) => {
	const gid = `mr-${useId().replace(/:/g, '')}`;
	const s = Math.min(w / (win.x[1] - win.x[0]), h / (win.y[1] - win.y[0]));
	const ox = (w - s * (win.x[1] - win.x[0])) / 2, oy = (h - s * (win.y[1] - win.y[0])) / 2;
	const pt = (a: number, b: number): [number, number] => [ox + (a - win.x[0]) * s, oy + (win.y[1] - b) * s];
	const fn = fnOf(fam), df = dfOf(fam);
	const path = (a: number, b: number) => {const n = 160, q: string[] = []; for (let i = 0; i <= n; i++) {const u = a + ((b - a) * i) / n, v = fn(u); if (Number.isFinite(v)) {const c = pt(u, Math.max(win.y[0] - 3, Math.min(win.y[1] + 3, v))); q.push(`${q.length ? 'L' : 'M'}${c[0].toFixed(1)},${c[1].toFixed(1)}`);}} return q.join(' ');};
	const ps = pieces.map(([a, b]) => path(a, b));
	const P = pt(X, fn(X)), m = df(X), d = dirs(s, s, m);
	const L = (dd: [number, number], half: number) => ({x1: P[0] - dd[0] * half, y1: P[1] - dd[1] * half, x2: P[0] + dd[0] * half, y2: P[1] + dd[1] * half});
	const O = pt(Math.max(win.x[0], Math.min(win.x[1], 0)), Math.max(win.y[0], Math.min(win.y[1], 0)));
	return (
		<div style={{position: 'relative', width: w, height: h + 50}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible'}}>
				<defs><clipPath id={gid}><rect x={0} y={0} width={w} height={h} rx={14} /></clipPath></defs>
				<rect x={0} y={0} width={w} height={h} rx={14} fill="#fbf8f1" stroke="rgba(60,45,20,0.14)" strokeWidth={2} />
				<g clipPath={`url(#${gid})`}>
					<path d={`M0,${O[1]} H${w} M${O[0]},0 V${h}`} stroke={INK_SOFT} strokeWidth={2.5} fill="none" />
					{asym !== undefined ? <line x1={pt(asym, 0)[0]} x2={pt(asym, 0)[0]} y1={0} y2={h} stroke={AMB} strokeWidth={3} strokeDasharray="8 7" /> : null}
					{ps.map((q, i) => <path key={'v' + i} d={q} stroke={VERGE} strokeWidth={ROAD_U * s + 10} fill="none" strokeLinecap="round" />)}
					{ps.map((q, i) => <path key={'a' + i} d={q} stroke={ASPHALT} strokeWidth={ROAD_U * s} fill="none" strokeLinecap="round" />)}
					{ps.map((q, i) => <path key={'c' + i} d={q} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />)}
					<line {...L(d.u, 1200)} stroke={VIOLET} strokeWidth={5} strokeLinecap="round" />
					{normalGlow > 0.001 ? <line {...L(d.n, 1200)} stroke="#bfe3e3" strokeWidth={18} strokeLinecap="round" opacity={normalGlow} /> : null}
					<line {...L(d.n, 1200)} stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
					<CarSprite p={P} deg={d.deg} len={CAR_U * s * 0.9} />
					<circle cx={P[0]} cy={P[1]} r={18} fill="none" stroke={INK} strokeWidth={4} />
				</g>
			</svg>
			<div style={{position: 'absolute', left: 14, top: 8, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: INK, textShadow: '0 0 6px #fbf8f1, 0 0 10px #fbf8f1'}}>{label}</div>
			{tag ? <div style={{position: 'absolute', left: 0, top: h + 6, width: w, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY_INK, whiteSpace: 'pre'}}>{tag}</div> : null}
		</div>
	);
};

/** Plan card: the method's steps, each ticked when it is done. */
export const PlanCard: React.FC<{x: number; y: number; w?: number; at?: number; out?: number; title?: string; steps: {content: React.ReactNode; done?: number; glow?: number}[]; size?: number}> = ({x, y, w, at = -30, out, title = 'Plan', steps, size = 38}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '8px 26px 12px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.16)'}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT, textTransform: 'uppercase'}}>{title}</div>
				{steps.map((s, i) => (
					<div key={i} style={{display: 'flex', alignItems: 'center', gap: 12, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK, whiteSpace: 'pre', lineHeight: 1.3, borderRadius: 10, background: glowBg('248,232,200', s.glow ?? 0)}}>
						<span>{i + 1}. {s.content}</span>
						{s.done !== undefined ? <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" style={{opacity: prog(f, s.done, 10)}}><path d="M8,32 L24,48 L54,10" stroke={GREEN} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg> : null}
					</div>
				))}
			</div>
		</Enter>
	);
};
