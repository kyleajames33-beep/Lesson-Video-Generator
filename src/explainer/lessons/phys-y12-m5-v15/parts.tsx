// Lesson parts for phys-y12-m5-v15: the top view of last time's banked bend (grey ring shaded darker towards its
// inner edge, the painted top-view car going round on the field-motion run), the energy bars (K orange, U violet,
// E navy), the vertical circle (field motion engine with a string), small exam pictures, and the local redraw of
// v14's final frame (`V14FinalFrame`, built here because v14 is not built yet; v14's builder can export the same
// frame from `BendBoard` with the arguments used below). Colour key: forces amber, velocity and displacement
// steps teal, acceleration violet, K orange, U violet, E navy, givens navy, mistakes slate.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {FrameSvg, SceneHeading} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TONES, TYPE} from '../../shared/tokens';
import {BallSvg, Chip, DISPLAY, ROLE, Readouts, Sub, Sup, VecArrow} from '../../physics/projectile/board';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {Ring} from '../phys-y12-m5-v03/parts';
import {CAR, HEAD_SIZE, HEAD_V14, LAP_FRAMES, carState, vcState} from './common';

export {Lbl, Ring};
export const AMBER = ROLE.w, VEL = ROLE.x, ACC = ROLE.a, NAVY = ROLE.given;
/** Kinetic energy orange, potential energy violet, total navy (colour key, Revision 2). */
export const KC = ROLE.v, UC = TONES.violet, EC = ROLE.given;
export const CAR_TOP_SRC = 'assets/physics/phys-y11-car-top-v1.png';
export const BLOCK_SRC = 'assets/physics/phys-y11-wooden-block-v1.png';

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;

const SUPS: Record<string, string> = {'-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'};
/** Scientific notation with unicode superscripts, e.g. sci(99987) = "1.00 × 10⁵". */
export const sci = (x: number, d = 2) => {
	const e = Math.floor(Math.log10(Math.abs(x)));
	const m = x / 10 ** e;
	const mm = Number(m.toFixed(d)) >= 10 ? [(m / 10).toFixed(d), e + 1] as const : [m.toFixed(d), e] as const;
	return `${mm[0]} × 10${String(mm[1]).split('').map(c => SUPS[c]).join('')}`;
};
export const fx = (v: number, d = 0) => (Math.abs(v) < 0.5 * 10 ** -d ? 0 : v).toFixed(d).replace('-', '−');

// ---------------------------------------------------------------- the top view of the banked bend
/** The bend on the main stage: centre, centre-line radius (px, 80 m) and road width. */
export const BEND = {cx: 600, cy: 580, R: 290, w: 110, car: 140};
export type BendGeo = {cx: number; cy: number; R: number; w: number; car: number};
/** The road ring seen from above, shaded darker towards its inner edge (the slope), with a navy centre dot. */
export const BendRing: React.FC<{g?: BendGeo; glow?: number}> = ({g = BEND, glow = 0}) => {
	const ro = g.R + g.w / 2, ri = g.R - g.w / 2;
	const id = `bend-grad-${Math.round(g.R)}`;
	return (
		<g>
			<defs>
				<radialGradient id={id} cx={g.cx} cy={g.cy} r={ro} gradientUnits="userSpaceOnUse">
					<stop offset={ri / ro} stopColor="#a9adb1" />
					<stop offset={1} stopColor="#dcdedf" />
				</radialGradient>
			</defs>
			<circle cx={g.cx} cy={g.cy} r={ro} fill={`url(#${id})`} stroke={INK} strokeWidth={3} />
			<circle cx={g.cx} cy={g.cy} r={ri} fill="#ece6d8" stroke={INK} strokeWidth={3} />
			<circle cx={g.cx} cy={g.cy} r={g.R} fill="none" stroke="#f4f1ea" strokeWidth={3} strokeDasharray="18 16" />
			{glow > 0.01 ? <circle cx={g.cx} cy={g.cy} r={g.R} fill="none" stroke={NAVY.stroke} strokeWidth={8} opacity={glow} /> : null}
			<circle cx={g.cx} cy={g.cy} r={9} fill={NAVY.stroke} />
		</g>
	);
};
/** The top-view car plate centred at (x, y), `len` px long, heading `deg` (maths sense, 0 = right). */
export const CarTop: React.FC<{x: number; y: number; len: number; deg: number}> = ({x, y, len, deg}) => {
	const s = len / 1311;
	return <g transform={`rotate(${-deg} ${x} ${y})`}><image href={staticFile(CAR_TOP_SRC)} x={x - 800 * s} y={y - 400 * s} width={1600 * s} height={800 * s} /></g>;
};
/** The car on the bend `k` display frames after it set off from 3 o'clock: screen position, heading, unit vectors. */
export const carOn = (g: BendGeo, k: number, lapFrames = LAP_FRAMES) => {
	const s = carState(k, lapFrames);
	const ppm = g.R / CAR.r;
	const x = g.cx + s.x * ppm, y = g.cy - s.y * ppm;
	const sp = Math.hypot(s.vx, s.vy);
	const v: [number, number] = [s.vx / sp, -s.vy / sp]; // screen unit velocity
	const toC: [number, number] = [(g.cx - x) / g.R, (g.cy - y) / g.R];
	return {x, y, v, toC, deg: (Math.atan2(s.vy, s.vx) * 180) / Math.PI, ang: Math.atan2(s.y, s.x)};
};
/** A right-angle mark at (x, y) between unit directions a and b. */
export const RightMark: React.FC<{x: number; y: number; a: [number, number]; b: [number, number]; s?: number; color?: string; opacity?: number}> = ({x, y, a, b, s = 24, color = INK, opacity = 1}) => (
	<path d={`M${x + a[0] * s},${y + a[1] * s} L${x + a[0] * s + b[0] * s},${y + a[1] * s + b[1] * s} L${x + b[0] * s},${y + b[1] * s}`} fill="none" stroke={color} strokeWidth={3} opacity={opacity} />
);
/** The car on the ring with its teal velocity arrow and amber inward arrow (both optional, `at` frames). */
export const BendCar: React.FC<{g?: BendGeo; k: number; vAt?: number; fAt?: number; vLen?: number; fLen?: number; right?: number; pulseF?: number; lapFrames?: number}> = ({g = BEND, k, vAt, fAt, vLen = 170, fLen, right = 0, pulseF, lapFrames}) => {
	const f = useCurrentFrame();
	const c = carOn(g, k, lapFrames);
	const fl = fLen ?? g.R - 60;
	const pz = pulseF === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulseF) / 24)));
	return (
		<g>
			<CarTop x={c.x} y={c.y} len={g.car} deg={c.deg} />
			{fAt !== undefined ? <VecArrow x={c.x} y={c.y} dx={c.toC[0] * fl} dy={c.toC[1] * fl} color={AMBER.stroke} width={8 + 5 * pz} head={24} at={fAt} /> : null}
			{vAt !== undefined ? <VecArrow x={c.x} y={c.y} dx={c.v[0] * vLen} dy={c.v[1] * vLen} color={VEL.stroke} width={8} head={24} at={vAt} /> : null}
			{right > 0.01 ? <RightMark x={c.x} y={c.y} a={c.v} b={c.toC} s={26} opacity={right} /> : null}
		</g>
	);
};
/** The lap counter and speed readout card (top right). */
export const LapCard: React.FC<{laps: number; at?: number}> = ({laps, at = -30}) => (
	<Readouts x={1290} y={186} w={534} size={44} at={at} title="the car, top view" rows={[
		{label: 'laps', value: String(laps), color: INK},
		{label: 'speed', value: fx(CAR.v, 1), unit: <>m s<Sup>−1</Sup> (constant)</>, color: VEL.ink},
	]} />
);
export const LAP0 = 3;
/** Label for the inward force, beside the arrow (moves with the car). */
export const FLabel: React.FC<{g?: BendGeo; k: number; at?: number; out?: number; pulse?: number; lapFrames?: number}> = ({g = BEND, k, at = -30, out, pulse, lapFrames}) => {
	const f = useCurrentFrame();
	const c = carOn(g, k, lapFrames);
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	const mx = g.cx + (c.x - g.cx) * 0.28, my = g.cy + (c.y - g.cy) * 0.28;
	return <Lbl x={mx} y={my - 34} at={at} out={out} color={AMBER.ink} anchor="middle" size={34 + 6 * pz}>F<Sub>net</Sub> = {sci(CAR.F)} N</Lbl>;
};

/**
 * The top view of last time's bend as v14's design leaves it: the car stopped at 3 o'clock, nose up the page,
 * teal velocity arrow, amber inward arrow "F_net = 2.50 × 10³ N", a right-angle mark, the lap counter and speed
 * readout, a "W = ?" chip and the "Next" chip, under v14's heading.
 */
export const V14FinalFrame: React.FC = () => (
	<>
		<SceneHeading text={HEAD_V14} at={-200} size={HEAD_SIZE} />
		<FrameSvg>
			<BendRing />
			<BendCar k={0} vAt={-60} fAt={-60} right={1} />
		</FrameSvg>
		<FLabel k={0} />
		<LapCard laps={LAP0} />
		<Chip x={950} y={420} at={-60} size={36} border={INK}>W = ?</Chip>
		<Chip x={1290} y={470} at={-60} size={36} w={534} color={INK} border={INK}>Next: does the inward force do work in uniform circular motion?</Chip>
	</>
);

// ---------------------------------------------------------------- energy bars
export type Bar = {label: React.ReactNode; value: number; color: string; text?: string};
/**
 * Energy bars on one scale (`k` px per joule) standing on a base line at `base`: K orange, U violet and the total
 * E as a navy bar whose top edge is the total line. `clipTop` stops a bar at that y with an open top.
 */
export const EnergyBars: React.FC<{x: number; base: number; k: number; K: number; U?: number; showU?: boolean; showE?: boolean; w?: number; gap?: number; pulseE?: number; at?: number; labels?: boolean}> = ({x, base, k, K, U = 0, showU = true, showE = true, w = 110, gap = 60, pulseE, at = -30, labels = true}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const pz = pulseE === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulseE) / 24)));
	const cols: {h: number; c: string; lab: React.ReactNode}[] = [{h: K * k, c: KC.stroke, lab: 'K'}];
	if (showU) cols.push({h: U * k, c: UC.stroke, lab: 'U'});
	if (showE) cols.push({h: (K + U) * k, c: EC.stroke, lab: 'E'});
	return (
		<g opacity={o}>
			<line x1={x - 20} x2={x + cols.length * (w + gap) - gap + 20} y1={base} y2={base} stroke={INK} strokeWidth={4} />
			{cols.map((cl, i) => {
				const bx = x + i * (w + gap);
				return (
					<g key={i}>
						<rect x={bx} y={base - cl.h} width={w} height={Math.max(0, cl.h)} fill={cl.c} opacity={i === cols.length - 1 && showE ? 0.25 : 0.9} rx={4} />
						{i === cols.length - 1 && showE ? <line x1={bx - 8} x2={bx + w + 8} y1={base - cl.h} y2={base - cl.h} stroke={cl.c} strokeWidth={7 + 5 * pz} /> : null}
						{labels ? <text x={bx + w / 2} y={base + 40} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={i === 0 ? KC.ink : i === 1 && showU ? UC.ink : EC.ink}>{cl.lab}</text> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------------------------------------------------------------- the vertical circle
/** The vertical circle on the main stage: pivot, radius (px for 0.80 m) and the ball's size. */
export const VERT = {px: 520, py: 560, R: 300, ball: 56};
/** Screen position, unit velocity and unit towards-pivot of the ball for a run state. */
export const vertAt = (st: {x: number; y: number; vx: number; vy: number}, g = VERT) => {
	const k = g.R / 0.8;
	const x = g.px + st.x * k, y = g.py - st.y * k;
	const sp = Math.hypot(st.vx, st.vy) || 1;
	const r = Math.hypot(st.x, st.y) || 1;
	return {x, y, v: [st.vx / sp, -st.vy / sp] as [number, number], toP: [-st.x / r, st.y / r] as [number, number], speed: sp, h: st.y + 0.8};
};
/** Pivot, dashed circle, string and ball (steel ball plate) for a run state. */
export const VertStage: React.FC<{st: {x: number; y: number; vx: number; vy: number}; g?: typeof VERT; circle?: boolean}> = ({st, g = VERT, circle = true}) => {
	const b = vertAt(st, g);
	return (
		<g>
			{circle ? <circle cx={g.px} cy={g.py} r={g.R} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" /> : null}
			<line x1={g.px} y1={g.py} x2={b.x} y2={b.y} stroke={INK} strokeWidth={4} />
			<circle cx={g.px} cy={g.py} r={11} fill={NAVY.stroke} />
			<BallSvg cx={b.x} cy={b.y} d={g.ball} />
		</g>
	);
};
export {vcState};
/** A pivot-centred state at angle phi from the bottom (anticlockwise on screen, so phi > 0 is the right side going up). */
export const stateAtAngle = (phi: number, speed: number, r = 0.8) => ({x: r * Math.sin(phi), y: -r * Math.cos(phi), vx: speed * Math.cos(phi), vy: speed * Math.sin(phi)});

/** A small titled card holding an svg drawing. */
export const SvgCard: React.FC<{x: number; y: number; w: number; h: number; title: string; at?: number; out?: number; children: React.ReactNode}> = ({x, y, w, h, title, at = -30, out, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w, height: h}}>
		<div style={{position: 'absolute', inset: 0, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `3px solid ${INK}`}} />
		<div style={{position: 'absolute', left: 18, top: 8, ...DISPLAY(28, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{title}</div>
		<svg width={w} height={h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>{children}</svg>
	</Enter>
);
