// Lesson parts for math-a12-d10 (Revision 3), built on the maths studio kit (src/explainer/math/studio).
// The coaster anchor is painted: the brief 235 track plate (painted to the 11-point rail guide of y = x³ − 3x)
// and the empty car. The plate is never warped: the coded plot's height is chosen so that its y-to-x pixel
// ratio equals the plate's (59.08 : 480 in design pixels), and the plate is drawn at the plot's own x scale.
// Generic helpers are shared from math-a12-d06/parts (same house style).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, usePlatePreload, vis,
	MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL,
} from '../../math/studio';
import type {FnFamily, PlateSpec} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {gmap} from '../math-a12-d06/parts';
import type {GMap} from '../math-a12-d06/parts';

export {AttemptStage, Chip, CurveLabel, DISPLAY, Dot, Frac, HandNote, Legend, PreRing, RecallChip, Sup, TanLine, gmap} from '../math-a12-d06/parts';
export type {GMap} from '../math-a12-d06/parts';

export const VIOLET = MATH_GRADIENT;
export const BLUE = MATH_BLUE;
export const TEAL = MATH_TEAL;
export const AMB = MATH_AMBER;
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const GREY = MATH_EXCLUDED;
/** Pale paper tint for the interval band. */
export const BAND = '#ebe2cf';

// ---------- plates ----------
const M = 'assets/maths/';
/** Track: native 1745 × 901, painted on a 3000 × 1550 design canvas scaled 0.58167 (x) and 0.58129 (y). */
export const TRACK: PlateSpec = {src: M + 'ma12-coaster-track-v1.png', nat: [1745, 901], box: [145, 89, 1601, 844]};
/** Car: wheel contacts (541.5, 705) and (1001.5, 705); pivot (771.5, 705) (brief 235 manifest). */
export const CAR: PlateSpec = {src: M + 'ma12-coaster-car-v1.png', nat: [1536, 1024], box: [444, 298, 1119, 706]};
export const D10_PLATES = [TRACK, CAR];
const TSX = 0.5816666666666667, TSY = 0.5812903225806452;
/** Native track pixels of the rail top at x and at height f (measured within 3 native px of the guide at 16 x values). */
const railNX = (x: number) => (300 + (x + 2) * 480) * TSX;
const railNY = (y: number) => (150 + (18 - y) * 59.08) * TSY;
const PX_PER_X = 480 * TSX, PX_PER_Y = 59.08 * TSY;
const CAR_PIVOT: [number, number] = [771.5, 705];
const CAR_WHEELBASE = 460;

// ---------- functions ----------
export const cubic = (x: number) => x ** 3 - 3 * x;
export const dcubic = (x: number) => 3 * x * x - 3;
export const CUBIC: FnFamily = {f: u => cubic(u), df: u => dcubic(u), domain: [{from: -2, to: 3, includeFrom: true, includeTo: true}]};
export const XP4X: FnFamily = {f: u => u + 4 / u, df: u => 1 - 4 / (u * u), domain: [{from: 0.5, to: 4, includeFrom: true, includeTo: true}]};
export const XEMX: FnFamily = {f: u => u * Math.exp(-u), df: u => Math.exp(-u) * (1 - u), domain: [{from: 0, to: 3, includeFrom: true, includeTo: true}]};
export const A1F: FnFamily = {f: u => u ** 3 - 12 * u, df: u => 3 * u * u - 12, domain: [{from: 0, to: 3, includeFrom: true, includeTo: true}]};
export const A2F: FnFamily = {f: u => Math.exp(u) - 2 * u, df: u => Math.exp(u) - 2, domain: [{from: 0, to: 2, includeFrom: true, includeTo: true}]};
/** Largest height the car has passed riding forward from x = −2 (f(x) − 2 = (x − 2)(x + 1)²). */
export const highestSoFar = (x: number) => (x <= -1 ? cubic(x) : x <= 2 ? 2 : cubic(x));

// ---------- the coaster stage ----------
export const HOOK_WIN = {x: [-2.5, 3.5] as Range, y: [-4, 20] as Range};
/** d09's final frame (its design: 1300 × 640, window x −2.5..3.5, y −4..20). d10 frame 0 is drawn here. */
export {D10_STAGE as JOIN_STAGE} from '../math-a12-d09/parts';
/** Height of a hook-window stage of width w whose y-to-x pixel ratio equals the painted plate's. */
export const rideH = (w: number) => 120 + 24 * ((w - 126) / 6) * (PX_PER_Y / PX_PER_X);
export const RIDE_STAGE = {x: 80, y: 156, w: 1340, h: rideH(1340)};
/** Scene 4: the same stage at 0.72 scale (plate scaled with it, never stretched). */
export const METHOD_STAGE = (() => {const w = 126 + 1174 * 0.72; return {x: 40, y: 150, w, h: rideH(w)};})();
export type Stage = {x: number; y: number; w: number; h: number};
export const stageMap = (s: Stage): GMap => gmap(s.x, s.y, s.w, s.h, HOOK_WIN);
export const lerpStage = (a: Stage, b: Stage, t: number): Stage => ({x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, w: a.w + (b.w - a.w) * t, h: a.h + (b.h - a.h) * t});

/** Car placement: both wheels on the rail, within −2 ≤ x ≤ 3, straddling the reference point x0. */
export const carPlace = (Mp: GMap, x0: number, carW: number) => {
	const k = carW / (CAR.box[2] - CAR.box[0]);
	const wb = CAR_WHEELBASE * k;
	const P = (x: number) => Mp.pt(x, cubic(x));
	const dist = (a: number, b: number) => {const p = P(a), q = P(b); return Math.hypot(q[0] - p[0], q[1] - p[1]);};
	// half-width in x so that the chord is one wheelbase
	const solve = (fn: (d: number) => number) => {let lo = 0, hi = 2; for (let i = 0; i < 40; i++) {const m = (lo + hi) / 2; if (fn(m) < wb) lo = m; else hi = m;} return (lo + hi) / 2;};
	let a = x0 - solve(d => dist(x0 - d, x0 + d)), b = 0;
	b = 2 * x0 - a;
	if (a < -2) {a = -2; b = -2 + solve(d => dist(-2, -2 + d));}
	if (b > 3) {b = 3; a = 3 - solve(d => dist(3 - d, 3));}
	const R = P(a), F = P(b);
	return {k, angle: Math.atan2(F[1] - R[1], F[0] - R[0]), mid: [(R[0] + F[0]) / 2, (R[1] + F[1]) / 2] as [number, number], R, F};
};

/** The car sprite, wheels on the rail at reference x0. */
export const CarOnRail: React.FC<{Mp: GMap; x0: number; w?: number; opacity?: number}> = ({Mp, x0, w = 150, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const c = carPlace(Mp, x0, w);
	const deg = (c.angle * 180) / Math.PI;
	return (
		<g opacity={opacity} transform={`translate(${c.mid[0]},${c.mid[1]}) rotate(${deg})`}>
			<image href={staticFile(CAR.src)} x={-CAR_PIVOT[0] * c.k} y={-CAR_PIVOT[1] * c.k} width={CAR.nat[0] * c.k} height={CAR.nat[1] * c.k} preserveAspectRatio="none" />
		</g>
	);
};

/** The painted track at the stage's own scale: its rail lies on the plotted curve. */
export const TrackPlate: React.FC<{Mp: GMap; opacity?: number}> = ({Mp, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const s = Mp.sx / PX_PER_X;
	const [ax, ay] = Mp.pt(-2, -2);
	const ox = ax - railNX(-2) * s, oy = ay - railNY(-2) * s;
	return <image href={staticFile(TRACK.src)} x={ox} y={oy} width={TRACK.nat[0] * s} height={TRACK.nat[1] * s} opacity={opacity} preserveAspectRatio="none" />;
};

/** Sampled polyline of f on [a, b] in frame space. */
export const curvePath = (Mp: GMap, fn: (x: number) => number, a: number, b: number, n = 240) => {
	let d = '';
	for (let i = 0; i <= n; i++) {const x = a + ((b - a) * i) / n; const [px, py] = Mp.pt(x, fn(x)); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)} `;}
	return d;
};

/**
 * The coaster stage: grid and axes (FunctionSimulator with an invisible curve), the interval band, the painted
 * track, the blue curve on the rail, the endpoint dots and the car. Everything is computed from one map, so the
 * rail, the curve, the car and the overlays cannot disagree.
 */
export const CoasterStage: React.FC<{st: Stage; trackO?: number; carX?: number; carO?: number; carW?: number; platformO?: number; children?: (Mp: GMap) => React.ReactNode; under?: (Mp: GMap) => React.ReactNode; yLabel?: string}> = ({st, trackO = 1, carX, carO = 1, carW = 150, platformO = 0, children, under, yLabel = 'y'}) => {
	usePlatePreload(D10_PLATES.map(p => p.src));
	const Mp = stageMap(st);
	const [x0] = Mp.pt(-2.5, 0), [x1, y0] = Mp.pt(3.5, 0);
	const [e0x, e0y] = Mp.pt(-2, -2), [e1x, e1y] = Mp.pt(3, 18);
	return (
		<>
			<FunctionSimulator x={st.x} y={st.y} width={st.w} height={st.h} window={HOOK_WIN} family={CUBIC} timeline={[{frame: 0, x: 0}]} color="rgba(0,0,0,0)" at={-60}
				xTicks={[-2, -1, 1, 2, 3]} yTicks={[5, 10, 15]} xLabel="x" yLabel={yLabel}
				regions={[{x: [-2, 3], color: BAND, opacity: 0.75, at: -60}]} />
			<FrameSvg>
				{under ? under(Mp) : null}
				<TrackPlate Mp={Mp} opacity={trackO} />
				{platformO > 0.001 ? <line x1={x0} x2={x1} y1={y0} y2={y0} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="14 10" opacity={platformO} /> : null}
				<path d={curvePath(Mp, cubic, -2, 3)} stroke={BLUE} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx={e0x} cy={e0y} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
				<circle cx={e1x} cy={e1y} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
				{carX !== undefined ? <CarOnRail Mp={Mp} x0={carX} w={carW} opacity={carO} /> : null}
				{children ? children(Mp) : null}
			</FrameSvg>
		</>
	);
};

/** A drawn ring at a frame point. */
export const RingAt: React.FC<{p: [number, number]; r?: number; at: number; out?: number; color?: string; width?: number}> = ({p, r = 34, at, out, color = INK, width = 5}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.001) return null;
	return <g opacity={o}><DrawPath d={`M${p[0] + r},${p[1]} A${r},${r} 0 1 1 ${p[0] + r - 0.1},${p[1] - 1}`} at={at} dur={16} color={color} width={width} /></g>;
};

/** A slope stub through a frame point: m is the maths slope, drawn in maths units. */
export const Stub: React.FC<{Mp: GMap; X: number; Y: number; m: number; half?: number; color?: string; opacity?: number; width?: number}> = ({Mp, X, Y, m, half = 90, color = VIOLET, opacity = 1, width = 7}) => {
	if (opacity <= 0.001) return null;
	const [px, py] = Mp.pt(X, Y);
	const vx = Mp.sx, vy = -m * Mp.sy, l = Math.hypot(vx, vy) || 1;
	return <line x1={px - (vx / l) * half} y1={py - (vy / l) * half} x2={px + (vx / l) * half} y2={py + (vy / l) * half} stroke={color} strokeWidth={width} strokeLinecap="round" opacity={opacity} />;
};

// ---------- candidate table ----------
export type CandRow = {x: React.ReactNode; kind: 'end' | 'flat'; value: React.ReactNode; approx?: string; at: number; valueAt?: number; tag?: {text: string; at: number}; glow?: [number, number]};
/**
 * Candidate table (lesson part): kind in its role colour (ends ink, flats violet), the value of f in full ink,
 * a grey decimal beside exact values, and green "global max / min" tags that frame the row on their cue.
 */
export const CandTable: React.FC<{x: number; y: number; w: number; rows: CandRow[]; at?: number; out?: number; size?: number; head?: [string, string]}> = ({x, y, w, rows, at = -30, out, size = 44, head = ['candidate', 'value of f']}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const headSt: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT};
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, padding: '14px 26px 16px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', gap: 20, paddingBottom: 8, borderBottom: `3px solid ${PAPER_DEEP}`}}>
				<div style={{...headSt, width: '40%'}}>{head[0]}</div><div style={headSt}>{head[1]}</div>
			</div>
			{rows.map((r, i) => {
				const ro = prog(f, r.at, 12);
				if (ro <= 0.001) return null;
				const t = r.tag ? prog(f, r.tag.at, 14) : 0;
				const g = r.glow ? vis(f, r.glow[0], r.glow[1], 10) : 0;
				return (
					<div key={i} style={{opacity: ro, transform: `translateY(${(1 - ro) * 10}px)`, display: 'flex', alignItems: 'center', gap: 20, padding: '6px 12px', margin: '8px -12px 0', borderRadius: 14, border: `4px solid ${t > 0 ? `rgba(40,115,71,${t})` : 'transparent'}`, background: g > 0 ? `rgba(231,224,242,${g})` : t > 0 ? `rgba(220,239,226,${0.7 * t})` : undefined}}>
						<div style={{width: '40%', flex: 'none', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>
							{r.x} <span style={{fontSize: size * 0.72, color: r.kind === 'flat' ? VIOLET : INK_SOFT}}>({r.kind})</span>
						</div>
						<div style={{flex: 1, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: t > 0.5 ? GREEN : INK, whiteSpace: 'pre'}}>
							{f >= (r.valueAt ?? r.at) - 1 ? <span style={{opacity: prog(f, r.valueAt ?? r.at, 12)}}>{r.value}{r.approx ? <span style={{fontSize: 32, fontWeight: 700, color: INK_SOFT}}>{`  ≈ ${r.approx}`}</span> : null}</span> : null}
						</div>
						{r.tag && t > 0 ? <div style={{flex: 'none', opacity: t, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: GREEN}}>{r.tag.text}</div> : null}
					</div>
				);
			})}
		</div>
	);
};

/** Thin height bars at candidates (from y = 0 to f(c)), each arriving on its cue, with optional value labels. */
export const HeightBars: React.FC<{Mp: GMap; bars: {x: number; y: number; at: number; label?: string; color?: string; glow?: number}[]; width?: number}> = ({Mp, bars, width = 9}) => {
	const f = useCurrentFrame();
	return <g>{bars.map((b, i) => {
		const p = prog(f, b.at, 16);
		if (p <= 0.001) return null;
		const [bx, by0] = Mp.pt(b.x, 0), [, by1] = Mp.pt(b.x, b.y);
		const yy = by0 + (by1 - by0) * p;
		const c = b.color ?? INK;
		const up = by1 <= by0;
		return <g key={i}>
			{b.glow ? <line x1={bx} x2={bx} y1={by0} y2={yy} stroke={GREEN} strokeWidth={width + 12} strokeLinecap="round" opacity={0.3 * b.glow} /> : null}
			<line x1={bx} x2={bx} y1={by0} y2={yy} stroke={c} strokeWidth={width} strokeLinecap="round" opacity={0.85} />
			<circle cx={bx} cy={yy} r={10} fill={c} stroke={CARD} strokeWidth={3} />
			{b.label && p > 0.9 ? <text x={bx + 14} y={up ? yy - 12 : yy + 40} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: c}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{b.label}</text> : null}
		</g>;
	})}</g>;
};

/** Green framed answer (52 px default). */
export const AnswerBox: React.FC<{at: number; x: number; y: number; size?: number; w?: number; children: React.ReactNode}> = ({at, x, y, size = 48, w, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: CARD, border: `5px solid ${GREEN}`, borderRadius: 16, padding: '4px 22px 8px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, lineHeight: 1.2}}>{children}</div>
	</Enter>
);
/** A row of working in the display font, writing on at a cue; older rows dim (never shrink below 44 px). */
export const Line: React.FC<{at: number; x: number; y: number; size?: number; dim?: number; out?: number; children: React.ReactNode}> = ({at, x, y, size = 52, dim = 0, out, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}><span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre', opacity: 1 - 0.35 * dim}}>{children}</span></Enter>
);
/** Grey struck value (rejected). */
export const Struck: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	return (
		<span style={{position: 'relative', display: 'inline-block', color: p > 0.5 ? GREY : 'inherit'}}>
			{children}
			{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -6, top: '10%', width: 'calc(100% + 12px)', height: '80%', overflow: 'visible'}}><path d="M0,70 L100,30" stroke={GREY} strokeWidth={6} vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} /></svg> : null}
		</span>
	);
};

/** Colour key along the top right (fixed roles for this lesson). */
export const ROLE_KEY: [string, string][] = [[VIOLET, 'flats'], [INK, 'ends'], [AMB, 'corners'], [TEAL, 'level line']];

/**
 * Answer-free question picture: empty axes with the interval band shaded and filled endpoint dots on the x-axis.
 * No curve and no values beyond the endpoints.
 */
/** Plan card (d07 pattern): the method's three steps, shown until the working needs the space. */
export const PlanCard: React.FC<{x: number; y: number; w: number; out: number; fn?: string}> = ({x, y, w, out, fn = 'f'}) => {
	const f = useCurrentFrame();
	const o = 1 - prog(f, out, 12);
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, padding: '12px 26px 14px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT}}>Plan</div>
			{[`1. List: flats inside, both ends, corners.`, `2. Evaluate ${fn} at each one.`, `3. Compare: largest and smallest.`].map((t, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, marginTop: 4}}>{t}</div>)}
		</div>
	);
};

export const IntervalAxes: React.FC<{w?: number; h?: number; range: Range; from: number; to: number; ticks: {value: number; label: string}[]; note?: string}> = ({w = 800, h = 380, range, from, to, ticks, note}) => {
	const L = 70, R = w - 50, oy = h * 0.55;
	const X = (v: number) => L + ((v - range[0]) / (range[1] - range[0])) * (R - L);
	const ox = X(0);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			<rect x={X(from)} y={24} width={X(to) - X(from)} height={h - 48} fill={BAND} opacity={0.9} />
			<line x1={L - 30} x2={R + 20} y1={oy} y2={oy} stroke={INK} strokeWidth={4} />
			<path d={`M${R + 20},${oy} l-18,-11 M${R + 20},${oy} l-18,11`} stroke={INK} strokeWidth={4} fill="none" />
			<line x1={ox} x2={ox} y1={24} y2={h - 24} stroke={INK} strokeWidth={4} />
			<text x={R + 10} y={oy - 18} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>x</text>
			<text x={ox + 14} y={50} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>y</text>
			{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={oy - 10} y2={oy + 10} stroke={INK} strokeWidth={4} /><text x={X(t.value) + (t.value === 0 ? -16 : 0)} y={oy + 50} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>{t.label}</text></g>)}
			<circle cx={X(from)} cy={oy} r={14} fill={INK} stroke={CARD} strokeWidth={4} />
			<circle cx={X(to)} cy={oy} r={14} fill={INK} stroke={CARD} strokeWidth={4} />
			{note ? <text x={(X(from) + X(to)) / 2} y={64} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK}}>{note}</text> : null}
		</svg>
	);
};

/** Small coaster badge: a crop of the painted track near the climb with the car on the rail. */
export const CoasterBadge: React.FC<{w: number; h: number}> = ({w, h}) => {
	usePlatePreload(D10_PLATES.map(p => p.src));
	// A virtual stage whose plot shows x from −1.6 to 3.15 inside the badge.
	const stW = (w * 6) / 4.9 + 126;
	const st: Stage = {x: 0, y: 0, w: stW, h: rideH(stW)};
	const Mp = stageMap(st);
	const [lx, ty] = Mp.pt(-1.75, 19);
	const [, by] = Mp.pt(0, -4);
	const k = h / (by - ty);
	const id = React.useId().replace(/:/g, '');
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'hidden'}}>
			<defs><clipPath id={`cb${id}`}><rect x={0} y={0} width={w} height={h} rx={14} /></clipPath></defs>
			<rect x={0} y={0} width={w} height={h} rx={14} fill="#fbf8f1" stroke="rgba(60,45,20,0.12)" strokeWidth={2} />
			<g clipPath={`url(#cb${id})`}><g transform={`translate(${-lx * k},${-ty * k}) scale(${k})`}>
				<TrackPlate Mp={Mp} />
				<CarOnRail Mp={Mp} x0={2.55} w={150} />
			</g></g>
		</svg>
	);
};
