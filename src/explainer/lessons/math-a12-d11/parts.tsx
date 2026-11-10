// Lesson parts for math-a12-d11 (Revision 4), built on the maths studio kit (src/explainer/math/studio).
// The lighthouse anchor is painted: the brief 235 side-view lighthouse, the top-view islet (lantern cap at the
// canvas centre, the beam's pivot) and the top-view beach strip (waterline rows 369 to 371), each at native
// aspect. The beam, the lit spot and the 1 km line are coded on the map's own scale (BeamMap).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FunctionSimulator, piTicks, usePlatePreload, MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL} from '../../math/studio';
import type {FnFamily, FnKey, FunctionSimulatorProps, PlateSpec} from '../../math/studio';
import type {Range} from '../../math/graphs';

export {AttemptStage, Chip, CurveLabel, DISPLAY, Frac, HandNote, Legend, PreRing, RecallChip, Sup, TanLine, gmap} from '../math-a12-d06/parts';
export type {GMap} from '../math-a12-d06/parts';
export {AnswerBox, Line, RingAt, Stub} from '../math-a12-d10/parts';

export const VIOLET = MATH_GRADIENT;
export const BLUE = MATH_BLUE;
export const TEAL = MATH_TEAL;
export const AMB = MATH_AMBER;
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const GREY = MATH_EXCLUDED;
export const GOLD = '#e9b949';
export const PI = Math.PI;

// ---------- plates ----------
const M = 'assets/maths/';
export const LIGHTHOUSE: PlateSpec = {src: M + 'ma12-lighthouse-v1.png', nat: [1226, 1562], box: [75, 101, 1152, 1468]};
export const ISLET: PlateSpec = {src: M + 'ma12-lighthouse-islet-top-v1.png', nat: [1500, 1500], box: [204, 203, 1294, 1290]};
export const BEACH: PlateSpec = {src: M + 'ma12-beach-strip-top-v1.png', nat: [2326, 724], box: [140, 243, 2185, 499]};
export const D11_PLATES = [LIGHTHOUSE, ISLET, BEACH];
const ISLET_CENTRE = 750, BEACH_WATERLINE = 370;

// ---------- functions ----------
export const TAN: FnFamily = {f: u => Math.tan(u), df: u => 1 / Math.cos(u) ** 2, excluded: [-PI / 2, PI / 2, 3 * PI / 2]};
export const SEC: FnFamily = {f: u => 1 / Math.cos(u), df: u => Math.tan(u) / Math.cos(u), excluded: [-PI / 2, PI / 2, 3 * PI / 2]};
export const TAN3: FnFamily = {f: u => Math.tan(3 * u), df: u => 3 / Math.cos(3 * u) ** 2, excluded: [-PI / 6, PI / 6, PI / 2]};
export const sec2 = (x: number) => 1 / Math.cos(x) ** 2;
export const WIN_T = {x: [-2, 5] as Range, y: [-5, 5] as Range};
export const T_TICKS = piTicks(-0.5, 1.5, 4);
export const T_ASYM = [-PI / 2, PI / 2, 3 * PI / 2];

/** Window T with tan x (ink), its asymptotes, branch-safe point and tangent. */
export const WindowT: React.FC<Omit<FunctionSimulatorProps, 'window' | 'family'> & {family?: FnFamily}> = ({family = TAN, ...p}) => (
	<FunctionSimulator window={WIN_T} family={family} color={INK} asymptotes={T_ASYM} xTicks={T_TICKS} yTicks={[-4, -2, 2, 4]} xLabel="x (radians)" yLabel="y" branchSafe={{gap: 0.1}} {...p} />
);

// ---------- the lighthouse map ----------
/**
 * Top-view map: the beach strip turned to run up the panel's right side (sand to the right), the islet with its
 * lantern 1 km from the waterline, the coded beam and lit spot at tan x km along the beach. kmPx sets the map
 * scale; the point straight in front of the lamp sits `below` px above the panel's bottom edge. `back` adds the
 * lamp's back beam (for angles past π/2 the back beam is the one that lands).
 */
export const BeamMap: React.FC<{x: number; y: number; w: number; h: number; angle: number; kmPx?: number; below?: number; back?: boolean; at?: number; out?: number; labels?: boolean}> = ({x, y, w, h, angle, kmPx = 200, below = 110, back = false, at = -30, out, labels = true}) => {
	usePlatePreload([ISLET.src, BEACH.src]);
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	const id = React.useId().replace(/:/g, '');
	if (o <= 0.001) return null;
	const xw = w - 70; // waterline
	const lx = xw - kmPx, ly = h - below; // lantern
	const sB = (h + 80) / (BEACH.box[2] - BEACH.box[0]);
	const sI = (kmPx * 0.92) / (ISLET.box[2] - ISLET.box[0]);
	// beach strip rotated 90° clockwise: native (u, v) -> (xw + (370 - v) sB, y along the beach)
	const beachTf = `translate(${xw + BEACH_WATERLINE * sB},${-40 - BEACH.box[0] * sB}) rotate(90)`;
	// which beam lands: the front one for angles in (−π/2, π/2), the back one otherwise
	const a = ((angle + PI / 2) % PI + PI) % PI - PI / 2; // equivalent angle in [−π/2, π/2)
	const parallel = Math.abs(Math.abs(a) - PI / 2) < 0.012;
	const pos = Math.tan(a);
	const sy = ly - pos * kmPx;
	const frontLands = Math.abs(angle) < PI / 2;
	const beam = (dirSign: number, land: boolean, op: number) => {
		const ang = (dirSign > 0 ? angle : angle + PI);
		const dx = Math.cos(ang), dy = -Math.sin(ang);
		const len = land ? Math.hypot(xw - lx, sy - ly) : 2000;
		const ex = lx + dx * len, ey = ly + dy * len;
		const nx = -dy, ny = dx, half = 0.06 * len + 6;
		return <polygon points={`${lx},${ly} ${ex + nx * half},${ey + ny * half} ${ex - nx * half},${ey - ny * half}`} fill={GOLD} opacity={0.42 * op} />;
	};
	const onPanel = sy > 6 && sy < h - 6;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, borderRadius: 18, overflow: 'hidden', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.12)', background: '#d9ebe6'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block'}}>
				<defs><clipPath id={`bm${id}`}><rect x={0} y={0} width={w} height={h} /></clipPath></defs>
				<g clipPath={`url(#bm${id})`}>
					<rect x={xw} y={0} width={w - xw} height={h} fill="#ecd9a8" />
					<g transform={beachTf}><image href={staticFile(BEACH.src)} x={0} y={0} width={BEACH.nat[0] * sB} height={BEACH.nat[1] * sB} preserveAspectRatio="none" /></g>
					<image href={staticFile(ISLET.src)} x={lx - ISLET_CENTRE * sI} y={ly - ISLET_CENTRE * sI} width={ISLET.nat[0] * sI} height={ISLET.nat[1] * sI} preserveAspectRatio="none" />
					<line x1={lx} y1={ly} x2={xw} y2={ly} stroke={INK} strokeWidth={4} strokeDasharray="12 9" />
					{back ? beam(-1, !frontLands, 0.85) : null}
					{beam(1, frontLands && !parallel, 1)}
					{!parallel && onPanel ? <>
						<ellipse cx={xw + 12} cy={sy} rx={22} ry={14} fill="#ffe08a" stroke="#c99a24" strokeWidth={3} />
						<line x1={xw - 10} x2={xw + 40} y1={sy} y2={sy} stroke={INK} strokeWidth={4} />
					</> : null}
					{!parallel && !onPanel ? <path d={sy <= 6 ? `M${xw + 14},70 L${xw + 14},18 M${xw},36 L${xw + 14},16 L${xw + 28},36` : `M${xw + 14},${h - 70} L${xw + 14},${h - 18} M${xw},${h - 36} L${xw + 14},${h - 16} L${xw + 28},${h - 36}`} stroke={VIOLET} strokeWidth={7} fill="none" strokeLinecap="round" /> : null}
					<circle cx={lx} cy={ly} r={7} fill="#ffe08a" stroke={INK} strokeWidth={2} />
				</g>
			</svg>
			{labels ? <>
				<div style={{position: 'absolute', left: (lx + xw) / 2 - 40, top: ly + 6, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: INK, textShadow: '0 0 6px #fffdf8, 0 0 10px #fffdf8'}}>1 km</div>
				<div style={{position: 'absolute', right: 8, top: 8, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, color: INK, writingMode: 'vertical-rl'}}>beach</div>
			</> : null}
		</div>
	);
};

/** The side-view lighthouse plate (native aspect). */
export const LighthouseImg: React.FC<{x: number; y: number; h: number; opacity?: number}> = ({x, y, h, opacity = 1}) => {
	usePlatePreload([LIGHTHOUSE.src]);
	const s = h / (LIGHTHOUSE.box[3] - LIGHTHOUSE.box[1]);
	return <img src={staticFile(LIGHTHOUSE.src)} style={{position: 'absolute', left: x - LIGHTHOUSE.box[0] * s, top: y - LIGHTHOUSE.box[1] * s, width: LIGHTHOUSE.nat[0] * s, height: LIGHTHOUSE.nat[1] * s, opacity}} />;
};
export const lighthouseW = (h: number) => (h * (LIGHTHOUSE.box[2] - LIGHTHOUSE.box[0])) / (LIGHTHOUSE.box[3] - LIGHTHOUSE.box[1]);

/** Readout rows for the beam (spot position and speed); "never lands" at the parallel angle. */
export const beamRows = (angle: number) => {
	const par = Math.abs(Math.abs(angle) - PI / 2) < 0.03;
	return [
		{label: 'beam angle x', value: angle, digits: 2, unit: 'rad'},
		{label: 'spot along the beach, tan x', value: Math.tan(angle), digits: 2, unit: 'km', text: par ? 'never lands' : undefined},
		{label: 'spot speed (slope)', value: sec2(angle), digits: 2, role: 'gradient' as const, unit: 'km/rad', text: par ? 'none' : undefined, bar: par ? undefined : {max: 8, width: 120}},
	];
};

/** Keyed timeline helper. */
export const tl = (pts: [number, number][]): FnKey[] => pts.map(([frame, x]) => ({frame, x}));

/** Card helper with a title. */
export const TitledCard: React.FC<{x: number; y: number; w: number; title: string; at?: number; out?: number; children: React.ReactNode; border?: string}> = ({x, y, w, title, at = -30, out, children, border}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, padding: '12px 26px 14px', boxShadow: CARD_SHADOW, border: `2.5px solid ${border ?? 'rgba(60,45,20,0.10)'}`, boxSizing: 'border-box'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT}}>{title}</div>
			{children}
		</div>
	);
};
