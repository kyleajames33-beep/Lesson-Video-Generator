// Lesson parts for math-a12-d16 (Revision 4: concavity and inflection; a barrel vase filling from a tap), built on
// the maths studio kit. VaseFill is lesson-local: the painted tap pours a coded stream into the painted vase, and
// the kit's ContainerFill raises the water inside the vase's measured inner profile (MATHS_KIT2_ANCHORS
// .vaseProfile, never warped). The level is driven by the design's h(t) = t³ − 6t² + 15t (author note h): the
// plate's inner radii, as fractions of its widest radius, follow the design's radius fractions to within about
// 10% (0.45, 0.50, 0.57, 0.68, 0.86, 1 against 0.45, 0.49, 0.54, 0.63, 0.79, 1), so the water visibly slows
// through the painted belly and speeds up in the neck; the readouts come from the same h(t).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, ContainerFill, FrameSvg, FunctionSimulator, MATHS_KIT2_ANCHORS, MATHS_KIT2_PLATES, MATH_CAP, MATH_CAP_INK, MATH_CUP, MATH_CUP_INK, SvgPlate, plateMap, usePlatePreload, vis, MATH_BLUE, MATH_GRADIENT} from '../../math/studio';
import type {FnFamily, PlateSpec} from '../../math/studio';

export {AnswerBox, Am, BoxCard, Chip, Cross, CurveLabel, GREEN, GREY, GREY_INK, Line, P, RED, RecallChip, Ring, Tick, V, VIOLET, gmap, stubLine} from '../math-a12-d15/parts';
export type {Stage, Win} from '../math-a12-d15/parts';

export const BLUE = MATH_BLUE;
export const OLIVE = MATH_CAP_INK;
export const CUPC = MATH_CUP;
export const CAPC = MATH_CAP;
export const CUP_INK = MATH_CUP_INK;
export const AQUA = '#9fd2e6';

const glowBg = (rgb: string, g: number) => (g > 0.001 ? `rgba(${rgb},${0.9 * g})` : undefined);
/** f″ and its rows: blue. */
export const Bl: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: BLUE, background: glowBg('220,234,247', g), borderRadius: 8}}>{children}</span>;
/** Concave down (cap): olive. */
export const Ol: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: OLIVE, background: glowBg('233,236,211', g), borderRadius: 8}}>{children}</span>;

// ---------- the cubic (site we-l18-1) and the other curves ----------
export const CUBIC: FnFamily = {f: x => x ** 3 - 6 * x * x + 9 * x, df: x => 3 * x * x - 12 * x + 9};
export const f1 = (x: number) => 3 * x * x - 12 * x + 9;
export const f2 = (x: number) => 6 * x - 12;
export const QUART: FnFamily = {f: x => x ** 4, df: x => 4 * x ** 3};
export const NQUART: FnFamily = {f: x => -(x ** 4), df: x => -4 * x ** 3};
export const CUBE: FnFamily = {f: x => x ** 3, df: x => 3 * x * x};
export const A1: FnFamily = {f: x => x ** 3 + 3 * x * x - 9 * x, df: x => 3 * x * x + 6 * x - 9};
export const A2: FnFamily = {f: x => x ** 5 - 5 * x ** 4, df: x => 5 * x ** 4 - 20 * x ** 3};
/** The vase's level (cm) after t minutes, and its rate (author note h). */
export const H = (t: number) => t ** 3 - 6 * t * t + 15 * t;
export const HP = (t: number) => 3 * t * t - 12 * t + 15;
export const LEVEL: FnFamily = {f: t => H(t), df: t => HP(t), domain: [{from: 0, to: 4, includeFrom: true, includeTo: true}]};

{
	const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) < tol;
	const c = CUBIC.f;
	const checks: [string, boolean][] = [
		['cubic points', near(c(1, {}), 4) && near(c(2, {}), 2) && near(c(3, {}), 0) && near(f1(2), -3) && near(f2(1), -6) && near(f2(3), 6)],
		['vase', near(H(4), 28) && near(H(2), 14) && near(HP(0), 15) && near(HP(2), 3) && near(HP(4), 15) && near(240 * Math.PI / 1000, 0.7539822368615503)],
		['A1', near(A1.f(-3, {}), 27) && near(A1.f(1, {}), -5) && near(6 * -3 + 6, -12)],
		['A2', near(A2.f(3, {}), -162) && near(20 * 1 * (-1 - 3), -80) && near(20 * 1 * (1 - 3), -40) && near(20 * 16 * (4 - 3), 320)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-d16 numbers: ' + bad.join(', '));
}

// ---------- the vase and the tap ----------
export const VASE: PlateSpec = MATHS_KIT2_PLATES.barrelVase;
/** Kitchen tap (1600 × 1200; alpha box from the brief 238 provenance; spout mouth centre (1135, 526)). */
export const TAP: PlateSpec = {src: 'assets/maths/ma12-kitchen-tap-v1.png', nat: [1600, 1200], box: [440, 137, 1182, 1064]};
const SPOUT: [number, number] = [1135, 526];
const PROF = MATHS_KIT2_ANCHORS.vaseProfile;
export const vaseW = (h: number) => (h * (VASE.box[2] - VASE.box[0])) / (VASE.box[3] - VASE.box[1]);

/**
 * VaseFill: the tap above the vase's mouth, a coded stream while it pours, and the water at level h(t)/28 inside
 * the measured profile. `band` glows the widest part (level ½, h = 14 cm).
 */
export const VaseRig: React.FC<{x: number; y: number; h: number; t: number; pour?: number; band?: number; tap?: boolean; at?: number; out?: number}> = ({x, y, h, t, pour = 0, band = 0, tap = true, at = -30, out}) => {
	usePlatePreload([VASE.src, TAP.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const w = vaseW(h);
	const m = plateMap(VASE, x, y, w);
	const [ax, mouthY] = m.at(PROF.axisX, PROF.topY);
	const [, botY] = m.at(PROF.axisX, PROF.bottomY);
	const L = Math.max(0, Math.min(1, H(Math.max(0, Math.min(4, t))) / 28));
	const surf = botY - (botY - mouthY) * L;
	const tw = h * 0.56, ts = tw / (TAP.box[2] - TAP.box[0]);
	const tx = ax - (SPOUT[0] - TAP.box[0]) * ts, ty = mouthY - h * 0.16 - (SPOUT[1] - TAP.box[1]) * ts;
	const spoutY = ty + (SPOUT[1] - TAP.box[1]) * ts + 6;
	const midY = botY - (botY - mouthY) * 0.5;
	const halfMid = (Math.max(...PROF.radii)) * m.s;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<ContainerFill x={x} y={y} w={w} container={VASE} interior={[0, 0, 0, 0]} profile={PROF} level={L} fillColor={AQUA} fillOpacity={0.75} />
			<FrameSvg>
				{pour > 0.001 ? <rect x={ax - 7} y={spoutY} width={14} height={Math.max(0, surf - spoutY)} rx={7} fill={AQUA} opacity={0.9 * pour} /> : null}
				{band > 0.001 ? <line x1={ax - halfMid - 14} x2={ax + halfMid + 14} y1={midY} y2={midY} stroke="#e9b949" strokeWidth={10} strokeLinecap="round" opacity={0.85 * band} /> : null}
				{tap ? <SvgPlate plate={TAP} x={tx} y={ty} w={tw} /> : null}
			</FrameSvg>
		</div>
	);
};

/** The level graph (t from 0 to 4 minutes, h from 0 to 28 cm), traced up to the point, with a riding tangent. */
export const LEVEL_WIN = {x: [-0.3, 4.3] as [number, number], y: [-3, 31] as [number, number]};
export const LevelGraph: React.FC<{x: number; y: number; w: number; h: number; t: number; at?: number; out?: number; tangentAt?: number; tints?: {cap: number; cup: number}; overlay?: (g: Parameters<NonNullable<React.ComponentProps<typeof FunctionSimulator>['overlay']>>[0]) => React.ReactNode; markers?: React.ComponentProps<typeof FunctionSimulator>['markers']}> = ({x, y, w, h, t, at = -30, out, tangentAt = -30, tints, overlay, markers}) => (
	<FunctionSimulator x={x} y={y} width={w} height={h} window={LEVEL_WIN} family={LEVEL} timeline={[{frame: 0, x: Math.max(0.0001, Math.min(4, t))}]} color={INK} at={at} out={out}
		clipToPoint={{from: 0}} point={{at: tangentAt}} tangent={{at: tangentAt, halfLength: 130}}
		xTicks={[1, 2, 3, 4]} yTicks={[{value: 7, label: '7'}, {value: 14, label: '14'}, {value: 21, label: '21'}, {value: 28, label: '28'}]} xLabel="t (minutes)" yLabel="level (cm)"
		regions={tints ? [{x: [0, 2], color: CAPC, opacity: 0.85, at: tints.cap}, {x: [2, 4], color: CUPC, opacity: 0.85, at: tints.cup}] : []}
		markers={markers} overlay={overlay} />
);

/** The vase readouts: flow (fixed), level and rising at (violet), as cells of 30 px labels over 52 px numbers. */
export const VaseStrip: React.FC<{x: number; y: number; w: number; t: number; at?: number; out?: number; riseGlow?: number; steadyAt?: number}> = ({x, y, w, t, at = -30, out, riseGlow = 0}) => {
	const tt = Math.max(0, Math.min(4, t));
	const cell = (label: string, value: string, color: string, glow = 0) => (
		<div style={{borderRadius: 12, padding: '0 10px', background: glow > 0.001 ? `rgba(231,224,242,${0.9 * glow})` : undefined}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color, whiteSpace: 'pre'}}>{label}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1, whiteSpace: 'pre'}}>{value}</div>
		</div>
	);
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{display: 'grid', gridTemplateColumns: '1.05fr 0.9fr 1.15fr', columnGap: 8, background: CARD, borderRadius: 20, padding: '8px 16px 10px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
				{cell('flow (steady)', '0.75 L/min', INK)}
				{cell('level', `${H(tt).toFixed(1)} cm`, INK)}
				{cell('rising at', `${HP(tt).toFixed(1)} cm/min`, MATH_GRADIENT, riseGlow)}
			</div>
		</Enter>
	);
};

/** A framed thumbnail: the full vase and its level curve (tinted cap then cup, no small text), with a caption. */
export const VaseThumb: React.FC<{x: number; y: number; at?: number; out?: number; caption?: string}> = ({x, y, at = -30, out, caption = 'the vase: cap, then cup'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const W = 360, Hh = 230, gx = 150, gw = 190, gh = 170, gy = 30;
	const pt = (t: number) => [x + gx + (t / 4) * gw, y + gy + gh - (H(t) / 28) * gh];
	const d = Array.from({length: 61}, (_, i) => {const q = pt((4 * i) / 60); return `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`;}).join(' ');
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<div style={{position: 'absolute', left: x, top: y, width: W, height: Hh, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}} />
			<VaseRig x={x + 22} y={y + 14} h={Hh - 28} t={4} tap={false} />
			<FrameSvg>
				<rect x={x + gx} y={y + gy} width={gw / 2} height={gh} fill={CAPC} />
				<rect x={x + gx + gw / 2} y={y + gy} width={gw / 2} height={gh} fill={CUPC} />
				<path d={`M${x + gx},${y + gy} V${y + gy + gh} H${x + gx + gw}`} stroke={INK} strokeWidth={3} fill="none" />
				<path d={d} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />
			</FrameSvg>
			<div style={{position: 'absolute', left: x, top: y + Hh + 4, width: W, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK}}>{caption}</div>
		</div>
	);
};

/** Diamond marker (point of inflection) at a frame point. */
export const Diamond: React.FC<{p: [number, number]; o?: number; r?: number; color?: string}> = ({p, o = 1, r = 15, color = INK}) => (o <= 0.001 ? null : <path d={`M${p[0]},${p[1] - r} L${p[0] + r},${p[1]} L${p[0]},${p[1] + r} L${p[0] - r},${p[1]} Z`} fill={color} stroke={CARD} strokeWidth={4} opacity={o} />);

/** A turning-arc arrow beside a point (clockwise dir 1, anticlockwise −1). */
export const TurnArc: React.FC<{p: [number, number]; dir: 1 | -1; o: number; r?: number}> = ({p, dir, o, r = 46}) => {
	if (o <= 0.001) return null;
	const a0 = dir === 1 ? -150 : -30, a1 = dir === 1 ? -40 : -140;
	const pt = (a: number): [number, number] => [p[0] + r * Math.cos((a * Math.PI) / 180), p[1] + r * Math.sin((a * Math.PI) / 180)];
	const [sx, sy] = pt(a0), [ex, ey] = pt(a1);
	const tang = ((a1 + (dir === 1 ? 90 : -90)) * Math.PI) / 180;
	return (
		<g opacity={o} stroke={MATH_GRADIENT} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path d={`M${sx},${sy} A${r},${r} 0 0 ${dir === 1 ? 1 : 0} ${ex},${ey}`} />
			<path d={`M${ex - 16 * Math.cos(tang - 0.5)},${ey - 16 * Math.sin(tang - 0.5)} L${ex},${ey} L${ex - 16 * Math.cos(tang + 0.5)},${ey - 16 * Math.sin(tang + 0.5)}`} />
		</g>
	);
};

/** Tinted band over a plot box between two x values (multiply blend, so curves stay dark). */
export const TintRect: React.FC<{x0: number; x1: number; top: number; height: number; color: string; o: number}> = ({x0, x1, top, height, color, o}) => (o <= 0.001 ? null : <rect x={x0} y={top} width={x1 - x0} height={height} fill={color} opacity={0.9 * o} style={{mixBlendMode: 'multiply'}} />);

export {MATH_GRADIENT, INK_SOFT, prog};
