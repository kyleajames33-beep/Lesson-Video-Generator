// Parts for phys-y12-m5-v04, the first Year 12 Physics build on the explainer studio (house pattern).
// The launcher and ball are painted plates drawn at native aspect: the barrel turns about the pivot
// given in its sidecar (410, 644 on the shared 1448 x 1086 canvas) and the ball leaves from the muzzle
// (1245, 644 at 0 degrees). Every flight is drawn from the projectile equations in common.ts.
//
// Level ground: the ball must land at the level it left. The launcher stands on a lower floor in a
// cut-away pit so its muzzle is exactly at the ground surface (the launch level); distances are
// measured from the muzzle.
import React from 'react';
import {interpolate, staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {graphTransform} from '../../math/graphs';
import {CARD, CARD_SHADOW, MATH_AMBER, MATH_BLUE, MATH_MISTAKE, MATH_TEAL, smooth, vis} from '../../math/studio';
import {G, clockAt, flightT, fx, pos, range, ux, uy} from './common';

// ---------- colour roles (fixed for the whole video; the v01 key) ----------
export const TEAL = MATH_TEAL; // horizontal: u_x, cos θ, crossing speed, ground shadows
export const TEAL_STROKE = '#1f8a8f';
export const BLUE = MATH_BLUE; // vertical: u_y, sin θ, time aloft
export const ORANGE = MATH_AMBER; // range, the R box, launch velocity (text ink)
export const ORANGE_STROKE = '#d0761c'; // flatter / main path, launch velocity arrow
export const GREEN_GREY = '#4f6e57'; // the 45 degree path
export const GREEN_GREY_STROKE = '#6a8a70';
export const BLUE_GREY = '#566c82'; // steeper partner paths (dashed)
export const NAVY = '#1f3a68'; // givens
export const RED = MATH_MISTAKE; // crossed mistakes, stamps

export const DISPLAY = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, whiteSpace: 'pre', lineHeight: 1.15});
export const Sub: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '0.28em'}}>{children}</span>;
export const Sup: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '-0.72em'}}>{children}</span>;
/** u_x, u_y with subscripts in their colours. */
export const Ux: React.FC<{c?: boolean}> = ({c = true}) => <span style={{color: c ? TEAL : undefined}}>u<Sub>x</Sub></span>;
export const Uy: React.FC<{c?: boolean}> = ({c = true}) => <span style={{color: c ? BLUE : undefined}}>u<Sub>y</Sub></span>;
export const Cos: React.FC = () => <span style={{color: TEAL}}>cos θ</span>;
export const Sin: React.FC = () => <span style={{color: BLUE}}>sin θ</span>;
export const MS = () => <span style={{fontWeight: 600}}> m s<Sup>−1</Sup></span>;

// ---------- painted plates ----------
const BASE_SRC = 'assets/physics/y12p-launcher-base-v1.png';
const BARREL_SRC = 'assets/physics/y12p-launcher-barrel-v1.png';
const BALL_SRC = 'assets/physics/phys-y11-steel-ball-v1.png';
export const PLATE_FILES = [BASE_SRC, BARREL_SRC, BALL_SRC];
const CANVAS: [number, number] = [1448, 1086];
const PIVOT: [number, number] = [410, 644];
const MUZZLE_LEN = 835; // pivot to muzzle, native px
const BASE_BOX: [number, number, number, number] = [132, 592, 1306, 907]; // alpha > 20
const GROUND_NATIVE = 905;
const BALL_BOX: [number, number, number, number] = [81, 72, 719, 728];

/** Geometry of a launcher whose base alpha box is `w` wide, pivot at (px, py), barrel at `deg`. */
export const launcherGeom = (px: number, py: number, w: number, deg: number) => {
	const s = w / (BASE_BOX[2] - BASE_BOX[0]);
	const a = (deg * Math.PI) / 180;
	const L = MUZZLE_LEN * s;
	return {
		s, L,
		muzzle: [px + L * Math.cos(a), py - L * Math.sin(a)] as [number, number],
		floorY: py + (GROUND_NATIVE - PIVOT[1]) * s,
		left: px - (PIVOT[0] - BASE_BOX[0]) * s,
		right: px + (BASE_BOX[2] - PIVOT[0]) * s,
		ballD: Math.max(168 * s, 34),
	};
};
/** Pivot that puts the muzzle at (mx, my) for a barrel at `deg`. */
export const pivotForMuzzle = (mx: number, my: number, w: number, deg: number): [number, number] => {
	const s = w / (BASE_BOX[2] - BASE_BOX[0]);
	const a = (deg * Math.PI) / 180;
	return [mx - MUZZLE_LEN * s * Math.cos(a), my + MUZZLE_LEN * s * Math.sin(a)];
};

/** The painted launcher (SVG, frame coordinates): base, then the barrel turned about the shared pivot. */
export const LauncherSvg: React.FC<{px: number; py: number; w: number; deg: number; opacity?: number}> = ({px, py, w, deg, opacity = 1}) => {
	const s = w / (BASE_BOX[2] - BASE_BOX[0]);
	const x = px - PIVOT[0] * s, y = py - PIVOT[1] * s;
	return (
		<g opacity={opacity}>
			<image href={staticFile(BASE_SRC)} x={x} y={y} width={CANVAS[0] * s} height={CANVAS[1] * s} preserveAspectRatio="none" />
			<g transform={`rotate(${-deg} ${px} ${py})`}>
				<image href={staticFile(BARREL_SRC)} x={x} y={y} width={CANVAS[0] * s} height={CANVAS[1] * s} preserveAspectRatio="none" />
			</g>
		</g>
	);
};

/** The painted steel ball, centred at (cx, cy), diameter d. */
export const BallSvg: React.FC<{cx: number; cy: number; d: number; opacity?: number}> = ({cx, cy, d, opacity = 1}) => {
	const s = d / (BALL_BOX[2] - BALL_BOX[0]);
	const h = (BALL_BOX[3] - BALL_BOX[1]) * s;
	return <image href={staticFile(BALL_SRC)} x={cx - d / 2 - BALL_BOX[0] * s} y={cy - h / 2 - BALL_BOX[1] * s} width={800 * s} height={800 * s} opacity={opacity} preserveAspectRatio="none" />;
};

/** Shared SVG defs: the soft soil band under every ground line (place once per SVG that draws ground). */
export const SoilDefs: React.FC = () => (
	<defs>
		<linearGradient id="phys-soil" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0" stopColor="#b89b72" stopOpacity={0.55} />
			<stop offset="0.45" stopColor="#c9b08a" stopOpacity={0.32} />
			<stop offset="1" stopColor="#d9c7a6" stopOpacity={0} />
		</linearGradient>
	</defs>
);
/** Hatched HSC-style ground line from x1 to x2 at y (hatching below). */
export const GroundLine: React.FC<{x1: number; x2: number; y: number; opacity?: number; hatch?: boolean}> = ({x1, x2, y, opacity = 1, hatch = true}) => {
	const ticks: React.ReactNode[] = [];
	if (hatch) for (let x = x1 + 10; x < x2 - 4; x += 24) ticks.push(<line key={x} x1={x} y1={y + 2} x2={x - 14} y2={y + 16} stroke={INK_SOFT} strokeWidth={2} opacity={0.55} />);
	return (
		<g opacity={opacity}>
			<SoilDefs />
			{hatch ? <rect x={x1} y={y} width={Math.max(0, x2 - x1)} height={30} fill="url(#phys-soil)" /> : null}
			<line x1={x1} x2={x2} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />{ticks}
		</g>
	);
};

export type PathStyle = {color: string; dash?: string; width?: number};
export const STYLE_FLAT: PathStyle = {color: ORANGE_STROKE};
export const STYLE_STEEP: PathStyle = {color: BLUE_GREY, dash: '16 11'};
export const STYLE_45: PathStyle = {color: GREEN_GREY_STROKE};

/** SVG path of a flight from (mx, gy) at ppm px per metre, from t0 to t1 seconds. */
export const flightPath = (mx: number, gy: number, ppm: number, u: number, deg: number, t1: number, t0 = 0, n = 90) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		const [X, Y] = pos(u, deg, t);
		d += `${i ? 'L' : 'M'}${(mx + X * ppm).toFixed(1)},${(gy - Y * ppm).toFixed(1)} `;
	}
	return d;
};

/**
 * One flight lane: the launcher in its pit (muzzle at the launch level gy), the ground, the path drawn
 * from the equations and the painted ball. `launchAt` starts the ball at one real-time rate; before it
 * the ball rests at the muzzle, after landing it rests on the landing mark. `ghost` shows the whole path
 * faintly from the first frame (the predicted flight), and the trail draws solid behind the ball.
 */
export const FlightLane: React.FC<{
	mx: number; gy: number; ppm: number; u: number; deg: number; lw: number; right: number;
	launchAt?: number; ghost?: number; style?: PathStyle; full?: boolean; shadow?: boolean; landRing?: number; opacity?: number;
	floorLeft?: number; hideBall?: boolean;
}> = ({mx, gy, ppm, u, deg, lw, right, launchAt, ghost = 0.3, style = STYLE_FLAT, full = false, shadow = false, landRing, opacity = 1, floorLeft, hideBall = false}) => {
	const f = useCurrentFrame();
	const [px, py] = pivotForMuzzle(mx, gy, lw, deg);
	const g = launcherGeom(px, py, lw, deg);
	const T = flightT(u, deg);
	const R = range(u, deg);
	const t = full ? T : launchAt === undefined ? 0 : clockAt(f, launchAt, T);
	const [bx, by] = pos(u, deg, t);
	const wall = g.right + 6;
	const fl = floorLeft ?? g.left - 34;
	const landX = mx + R * ppm;
	const w = style.width ?? 7.5;
	return (
		<g opacity={opacity}>
			{/* pit: lower floor, wall up to the launch level, ground on from the wall */}
			<rect x={fl} y={gy} width={wall - fl} height={g.floorY - gy} fill={PAPER_DEEP} opacity={0.45} />
			<GroundLine x1={fl} x2={wall} y={g.floorY} />
			<line x1={wall} x2={wall} y1={gy} y2={g.floorY} stroke={INK} strokeWidth={3.5} />
			<GroundLine x1={wall} x2={right} y={gy} />
			<line x1={mx} x2={wall} y1={gy} y2={gy} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
			<LauncherSvg px={px} py={py} w={lw} deg={deg} />
			{ghost > 0 ? <path d={flightPath(mx, gy, ppm, u, deg, T)} fill="none" stroke={style.color} strokeWidth={w * 0.7} strokeDasharray={style.dash ?? '4 10'} strokeLinecap="round" opacity={ghost} /> : null}
			{t > 0.001 ? <path d={flightPath(mx, gy, ppm, u, deg, t)} fill="none" stroke={style.color} strokeWidth={w} strokeDasharray={style.dash} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{shadow && t > 0.001 && t < T ? <circle cx={mx + bx * ppm} cy={gy} r={9} fill={TEAL_STROKE} opacity={0.9} /> : null}
			{landRing !== undefined && f >= landRing ? <DrawPath d={ringPath(landX, gy, 26, 16)} at={landRing} dur={14} color={INK} width={4} /> : null}
			{hideBall ? null : <BallSvg cx={mx + bx * ppm} cy={gy - by * ppm - (t >= T - 0.001 ? g.ballD * 0.42 : 0)} d={g.ballD} />}
		</g>
	);
};
export const ringPath = (cx: number, cy: number, rx: number, ry: number) => `M${cx - rx},${cy} a${rx},${ry} 0 1,0 ${2 * rx},0 a${rx},${ry} 0 1,0 ${-2 * rx},0`;

// ---------- cards, chips, frames ----------
/** Clock / readout card: small label, big tabular value (52 px) with unit. */
export const ReadCard: React.FC<{x: number; y: number; w?: number; label: React.ReactNode; value: string; unit?: React.ReactNode; color?: string; at?: number; out?: number; pulse?: number; size?: number; children?: React.ReactNode}> = ({x, y, w = 360, label, value, unit, color = INK, at = -30, out, pulse, size = 52, children}) => {
	const f = useCurrentFrame();
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 18)));
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: CARD, borderRadius: 18, padding: '8px 22px 10px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', transform: `scale(${1 + 0.08 * pz})`, transformOrigin: 'left center'}}>
				<div style={DISPLAY(32, INK_SOFT, 700)}>{label}</div>
				<div style={{display: 'flex', alignItems: 'baseline', gap: 10}}>
					<span style={{...DISPLAY(size, color), fontVariantNumeric: 'tabular-nums'}}>{value}</span>
					{unit ? <span style={DISPLAY(30, INK_SOFT, 600)}>{unit}</span> : null}
				</div>
				{children}
			</div>
		</Enter>
	);
};

/** Grey chip (30 to 44 px). */
export const Chip: React.FC<{x: number; y: number; at: number; out?: number; children: React.ReactNode; size?: number; color?: string; border?: string; w?: number}> = ({x, y, at, out, children, size = 36, color = '#3f3a33', border = 'rgba(60,45,20,0.16)', w}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: '#f1ebdf', border: `2.5px solid ${border}`, borderRadius: 14, padding: '6px 18px 8px', ...DISPLAY(size, color, 700), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);

/** Dark-ink answer frame (inline, inherits size). */
export const AnswerBox: React.FC<{children: React.ReactNode; at: number; color?: string}> = ({children, at, color = INK}) => {
	const p = prog(useCurrentFrame(), at, 12);
	return <span style={{display: 'inline-block', padding: '0 0.3em', margin: '0 0.05em', background: CARD, border: `4.5px solid ${p > 0 ? color : 'transparent'}`, borderRadius: 12, boxShadow: p > 0 ? `0 10px 22px rgba(60,45,20,${0.14 * p})` : undefined}}>{children}</span>;
};

/** Text that writes on left to right from `at` (clip reveal), for working rows. */
export const Reveal: React.FC<{at: number; children: React.ReactNode; dur?: number; style?: React.CSSProperties; out?: number}> = ({at, children, dur = 18, style, out}) => {
	const f = useCurrentFrame();
	if (f < at - 1) return null;
	const r = smooth(Math.max(0, Math.min(1, (f - at) / dur)));
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	return <div style={{clipPath: r >= 1 ? undefined : `inset(-30% ${100 - r * 100}% -30% -4%)`, opacity: o, ...style}}>{children}</div>;
};

/** A row that shrinks and dims when `ageAt` arrives (unless kept). */
export const Row: React.FC<{at: number; ageAt?: number; size?: number; oldSize?: number; children: React.ReactNode; style?: React.CSSProperties; out?: number}> = ({at, ageAt, size = 52, oldSize = 40, children, style, out}) => {
	const f = useCurrentFrame();
	const a = ageAt === undefined ? 0 : prog(f, ageAt, 16);
	return (
		<Reveal at={at} out={out} style={{...DISPLAY(interpolate(a, [0, 1], [size, oldSize]), INK, 700), opacity: 1 - 0.35 * a, ...style}}>{children}</Reveal>
	);
};

/** Chip with a red strike and cross (the classic slip), optional red hand caption. */
export const CrossedChip: React.FC<{x: number; y: number; at: number; crossAt?: number; children: React.ReactNode; caption?: string; size?: number; w?: number}> = ({x, y, at, crossAt, children, caption, size = 40, w}) => {
	const f = useCurrentFrame();
	const c = crossAt ?? at + 16;
	const strike = prog(f, c, 12);
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{display: 'inline-flex', alignItems: 'center', gap: 20, background: CARD, border: `3px solid ${RED}`, borderRadius: 16, padding: '6px 22px 8px', boxShadow: CARD_SHADOW}}>
				<span style={{position: 'relative', ...DISPLAY(size, INK_SOFT, 700)}}>
					{children}
					<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -6, top: 0, width: 'calc(100% + 12px)', height: '100%', overflow: 'visible'}}>
						<path d="M0,64 Q50,52 100,40" stroke={RED} strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - strike} />
					</svg>
				</span>
				<svg width={48} height={48} viewBox="-24 -24 48 48" style={{flex: 'none', overflow: 'visible'}}>
					<DrawPath d="M-18,-18 L18,18" at={c + 8} dur={8} color={RED} width={8} />
					<DrawPath d="M18,-18 L-18,18" at={c + 14} dur={8} color={RED} width={8} />
				</svg>
			</div>
			{caption ? <div style={{marginTop: 2, marginLeft: 6}}><HandText text={caption} at={c + 20} size={40} color={RED} cps={28} /></div> : null}
		</Enter>
	);
};

/** Red rotated stamp. */
export const Stamp: React.FC<{x: number; y: number; at: number; text: string; size?: number; rotate?: number}> = ({x, y, at, text, size = 38, rotate = -6}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 10);
	if (f < at) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, transform: `rotate(${rotate}deg) scale(${1.25 - 0.25 * p})`, opacity: p, transformOrigin: 'center'}}>
			<div style={{border: `4px solid ${RED}`, borderRadius: 10, padding: '2px 16px 4px', fontFamily: FONT_DISPLAY, fontWeight: 900, fontSize: size, letterSpacing: 1.5, color: RED, textTransform: 'uppercase', background: 'rgba(255,253,248,0.85)', whiteSpace: 'pre'}}>{text}</div>
		</div>
	);
};

/** The orange boxed range equation. */
export const RBox: React.FC<{x: number; y: number; at: number; size?: number; out?: number}> = ({x, y, at, size = 64, out}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: CARD, border: `5px solid ${ORANGE_STROKE}`, borderRadius: 18, padding: '4px 30px 10px', boxShadow: CARD_SHADOW, ...DISPLAY(size, ORANGE)}}>R = u<Sup>2</Sup> sin 2θ ÷ g</div>
	</Enter>
);

// ---------- launch triangle (velocity components) ----------
/**
 * Launch triangle: origin O at (x0, y0), k px per m s^-1. Teal horizontal u_x, blue vertical u_y,
 * orange launch velocity (hypotenuse, arrowed) with its angle. Labels 44 px.
 */
export const LaunchTriangle: React.FC<{x0: number; y0: number; k: number; u: number; deg: number; at?: number; labelsAt?: [number, number]; sideOpacity?: number; ghost?: boolean; flash?: number; showSides?: boolean}> = ({x0, y0, k, u, deg, at = -30, labelsAt = [-30, -30], sideOpacity = 1, ghost = false, flash, showSides = true}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	const X = ux(u, deg) * k, Y = uy(u, deg) * k;
	const fl = flash === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - flash) / 24)));
	const ang = Math.atan2(Y, X);
	const ah = 22;
	const hx = x0 + X, hy = y0 - Y;
	const h1 = [hx - ah * Math.cos(ang - 0.42), hy + ah * Math.sin(ang - 0.42)], h2 = [hx - ah * Math.cos(ang + 0.42), hy + ah * Math.sin(ang + 0.42)];
	const arcR = Math.min(70, X * 0.42);
	const op = ghost ? 0.25 : 1;
	return (
		<g opacity={o * op}>
			{showSides ? (
				<g opacity={sideOpacity}>
					<line x1={x0} y1={y0} x2={x0 + X} y2={y0} stroke={TEAL_STROKE} strokeWidth={9 + 5 * fl} strokeLinecap="round" />
					<line x1={x0 + X} y1={y0} x2={x0 + X} y2={y0 - Y} stroke={BLUE} strokeWidth={9 + 5 * fl} strokeLinecap="round" />
					<path d={`M${x0 + X - 22},${y0} V${y0 - 22} H${x0 + X}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
				</g>
			) : null}
			<line x1={x0} y1={y0} x2={hx} y2={hy} stroke={ORANGE_STROKE} strokeWidth={7} strokeLinecap="round" />
			<path d={`M${h1[0]},${h1[1]} L${hx},${hy} L${h2[0]},${h2[1]}`} fill="none" stroke={ORANGE_STROKE} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
			<path d={`M${x0 + arcR},${y0} A${arcR},${arcR} 0 0,0 ${x0 + arcR * Math.cos(ang)},${y0 - arcR * Math.sin(ang)}`} fill="none" stroke={INK} strokeWidth={3} />
			<text x={x0 + (arcR + 10) * Math.cos(ang / 2)} y={y0 - (arcR + 10) * Math.sin(ang / 2) + (k < 9 ? 10 : 14)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: k < 9 ? 30 : 40, fill: INK}}>{deg}°</text>
			{showSides ? (
				<g opacity={sideOpacity}>
					<text x={x0 + X / 2} y={y0 + 52} textAnchor="middle" opacity={prog(f, labelsAt[0], 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: TEAL}}>{fx(ux(u, deg))}</text>
					<text x={x0 + X + 16} y={y0 - Y / 2 + 15} opacity={prog(f, labelsAt[1], 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: BLUE}}>{fx(uy(u, deg))}</text>
				</g>
			) : null}
		</g>
	);
};

/**
 * A side travelling from one triangle to the other (the swap): a segment of length len moves from
 * (a: start point, horizontal or vertical) to (b), lifting in an arc and turning 90 degrees; its colour
 * changes with its new direction (teal across, blue up) and the label travels with it.
 */
export const TravelSide: React.FC<{len: number; from: {x: number; y: number; vertical: boolean}; to: {x: number; y: number; vertical: boolean}; at: number; dur?: number; label: string; lift?: number}> = ({len, from, to, at, dur = 46, label, lift = 120}) => {
	const f = useCurrentFrame();
	if (f < at || f > at + dur + 16) return null;
	const p = smooth(Math.max(0, Math.min(1, (f - at) / dur)));
	const a0 = from.vertical ? -90 : 0, a1 = to.vertical ? -90 : 0;
	const ang = (a0 + (a1 - a0) * p) * (Math.PI / 180);
	// centre of segment
	const c0 = from.vertical ? [from.x, from.y - len / 2] : [from.x + len / 2, from.y];
	const c1 = to.vertical ? [to.x, to.y - len / 2] : [to.x + len / 2, to.y];
	const cx = c0[0] + (c1[0] - c0[0]) * p, cy = c0[1] + (c1[1] - c0[1]) * p - lift * Math.sin(Math.PI * p);
	const dx = (Math.cos(ang) * len) / 2, dy = (Math.sin(ang) * len) / 2;
	const vert = Math.abs(Math.sin(ang)) > 0.707;
	const col = vert ? BLUE : TEAL_STROKE;
	const fade = 1 - prog(f, at + dur, 14);
	return (
		<g opacity={fade}>
			<line x1={cx - dx} y1={cy - dy} x2={cx + dx} y2={cy + dy} stroke={col} strokeWidth={12} strokeLinecap="round" />
			<text x={cx + (vert ? 22 : 0)} y={cy + (vert ? 14 : -22)} textAnchor={vert ? 'start' : 'middle'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: vert ? BLUE : TEAL}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label}</text>
		</g>
	);
};

// ---------- range against angle graph ----------
export type RangeGraphProps = {
	x: number; y: number; w: number; h: number; u: number; yMax: number; yStep?: number;
	drawAt?: number; drawDur?: number; point?: number | null; pointColor?: string;
	pairs?: {a: number; b: number; at: number; label?: string}[];
	mirrorAt?: number; peakAt?: number; at?: number; out?: number; small?: boolean; xLabel?: string; yLabel?: string;
	children?: React.ReactNode;
};
export const rangeGraphT = (w: number, h: number, yMax: number) => graphTransform({x: [0, 90], y: [0, yMax], width: w, height: h});
/** Frame point of (θ, R) on a RangeGraph at (x, y, w, h). */
export const rgPoint = (p: {x: number; y: number; w: number; h: number; yMax: number}, deg: number, R: number): [number, number] => {
	const t = rangeGraphT(p.w, p.h, p.yMax).point(deg, R);
	return [p.x + t.x, p.y + t.y];
};
export const RangeGraph: React.FC<RangeGraphProps> = ({x, y, w, h, u, yMax, yStep = 5, drawAt = -60, drawDur = 40, point = null, pointColor = ORANGE_STROKE, pairs = [], mirrorAt, peakAt, at = -30, out, small = false, xLabel = 'launch angle θ (°)', yLabel = 'range R (m)', children}) => {
	const f = useCurrentFrame();
	const t = rangeGraphT(w, h, yMax);
	const b = t.box;
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const dp = prog(f, drawAt, drawDur);
	let d = '';
	const n = 120;
	for (let i = 0; i <= n; i++) {
		const th = (90 * i * dp) / n;
		const s = t.point(th, range(u, th));
		d += `${i ? 'L' : 'M'}${s.x.toFixed(1)},${s.y.toFixed(1)} `;
	}
	const fs = small ? 30 : 32;
	const yt: number[] = [];
	for (let v = 0; v <= yMax + 1e-6; v += yStep) yt.push(v);
	const mir = mirrorAt === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - mirrorAt) / 50)));
	const pk = t.point(45, range(u, 45));
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{overflow: 'visible'}}>
				{[0, 15, 30, 45, 60, 75, 90].map(v => {const s = t.point(v, 0); return <g key={'x' + v}><line x1={s.x} x2={s.x} y1={b.top} y2={b.top + b.height} stroke="#e4dccd" strokeWidth={2} /><text x={s.x} y={b.top + b.height + 38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs, fill: INK_SOFT}}>{v}</text></g>;})}
				{yt.map(v => {const s = t.point(0, v); return <g key={'y' + v}><line x1={b.left} x2={b.left + b.width} y1={s.y} y2={s.y} stroke="#e4dccd" strokeWidth={2} /><text x={b.left - 14} y={s.y + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs, fill: INK_SOFT}}>{v}</text></g>;})}
				<path d={`M${b.left},${b.top + b.height} H${b.left + b.width} M${b.left},${b.top} V${b.top + b.height}`} stroke={INK} strokeWidth={3.5} fill="none" strokeLinecap="round" />
				<text x={b.left + b.width} y={b.top + b.height + 80} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs, fill: INK}}>{xLabel}</text>
				<text x={b.left - 60} y={b.top - 18} textAnchor="start" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs, fill: INK}}>{yLabel}</text>
				{peakAt !== undefined ? <line x1={pk.x} x2={pk.x} y1={pk.y - 10} y2={b.top + b.height} stroke={GREEN_GREY_STROKE} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, peakAt, 12)} /> : null}
				<path d={d} fill="none" stroke={ORANGE_STROKE} strokeWidth={7 + 5 * mir} strokeLinecap="round" strokeLinejoin="round" />
				{pairs.map((p, i) => {
					const pa = t.point(p.a, range(u, p.a)), pb = t.point(p.b, range(u, p.b));
					const q = prog(f, p.at, 16);
					if (q <= 0) return null;
					return (
						<g key={i} opacity={q}>
							<line x1={pa.x} x2={pa.x + (pb.x - pa.x) * q} y1={pa.y} y2={pb.y} stroke={INK} strokeWidth={3.5} strokeDasharray="10 8" />
							<circle cx={pa.x} cy={pa.y} r={12} fill={ORANGE_STROKE} stroke={CARD} strokeWidth={4} />
							<circle cx={pb.x} cy={pb.y} r={12} fill={BLUE_GREY} stroke={CARD} strokeWidth={4} />
							{p.label ? <text x={(pa.x + pb.x) / 2} y={pa.y - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: small ? 30 : 36, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{p.label}</text> : null}
						</g>
					);
				})}
				{point !== null ? (() => {
					const s = t.point(point, range(u, point));
					const base = t.point(point, 0);
					return <g><line x1={s.x} x2={s.x} y1={s.y} y2={base.y} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="7 7" /><circle cx={s.x} cy={s.y} r={16} fill={pointColor} stroke={CARD} strokeWidth={5} /></g>;
				})() : null}
			</svg>
			{children}
		</div>
	);
};

/** Angle arc with a θ readout at a launcher pivot (SVG). */
export const AngleArc: React.FC<{px: number; py: number; r: number; deg: number; label?: string; size?: number}> = ({px, py, r, deg, label, size = 40}) => {
	const a = (deg * Math.PI) / 180;
	return (
		<g>
			<line x1={px} y1={py} x2={px + r + 40} y2={py} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
			<path d={`M${px + r},${py} A${r},${r} 0 0,0 ${px + r * Math.cos(a)},${py - r * Math.sin(a)}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{label ? <text x={px + (r + 14) * Math.cos(a / 2)} y={py - (r + 14) * Math.sin(a / 2) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{label}</text> : null}
		</g>
	);
};

/**
 * HSC-style cliff (coded outline, hatched face) with the launcher in a pit at its top edge, so the
 * muzzle sits at the cliff-top launch level gy. Paths (from the muzzle) rise, pass back through the
 * launch level and stop `stopAbove` metres above the sea line, with a "?" at each unfinished landing.
 */
export const CliffStage: React.FC<{
	mx: number; gy: number; seaY: number; leftX: number; rightX: number; ppm: number; u: number; lw: number; barrel: number;
	paths: {deg: number; style: PathStyle; at: number}[]; stopAbove?: number; qAt?: number; levelLabel?: boolean; labelSize?: number;
}> = ({mx, gy, seaY, leftX, rightX, ppm, u, lw, barrel, paths, stopAbove = 1.2, qAt, levelLabel = true, labelSize = 32}) => {
	const f = useCurrentFrame();
	const [px, py] = pivotForMuzzle(mx, gy, lw, barrel);
	const g = launcherGeom(px, py, lw, barrel);
	const edge = g.right + 10;
	const pitL = g.left - 20;
	const drop = Math.max(0, (seaY - gy) / ppm - stopAbove);
	const hatch: React.ReactNode[] = [];
	for (let y = gy + 14; y < seaY - 6; y += 22) hatch.push(<line key={y} x1={edge} y1={y} x2={edge - 14} y2={y + 12} stroke={INK_SOFT} strokeWidth={2} opacity={0.55} />);
	return (
		<g>
			<rect x={leftX} y={gy} width={edge - leftX} height={Math.max(0, seaY - gy)} fill={PAPER_DEEP} opacity={0.55} />
			<rect x={pitL} y={gy} width={edge - pitL} height={g.floorY - gy} fill="#e3d8c3" opacity={0.9} />
			<GroundLine x1={pitL} x2={edge} y={g.floorY} hatch={false} />
			<line x1={pitL} x2={pitL} y1={gy} y2={g.floorY} stroke={INK} strokeWidth={3} />
			<line x1={leftX} x2={pitL} y1={gy} y2={gy} stroke={INK} strokeWidth={3.5} />
			<line x1={edge} x2={edge} y1={gy} y2={seaY} stroke={INK} strokeWidth={3.5} />
			{hatch}
			<line x1={edge} x2={rightX} y1={seaY} y2={seaY} stroke={BLUE} strokeWidth={3.5} />
			{Array.from({length: Math.max(0, Math.floor((rightX - edge) / 60))}, (_, i) => <path key={i} d={`M${edge + 20 + i * 60},${seaY + 14} q15,-8 30,0 t30,0`} fill="none" stroke={BLUE} strokeWidth={2.5} opacity={0.6} />)}
			<line x1={mx} x2={rightX} y1={gy} y2={gy} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />
			{levelLabel ? <text x={rightX} y={gy - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: labelSize, fill: INK_SOFT}}>launch level</text> : null}
			<LauncherSvg px={px} py={py} w={lw} deg={barrel} />
			{paths.map((p, i) => {
				const tEnd = (() => {const vy = uy(u, p.deg); return (vy + Math.sqrt(vy * vy + 2 * G * drop)) / G;})();
				const q = prog(f, p.at, 40);
				if (q <= 0) return null;
				const [X, Y] = pos(u, p.deg, tEnd);
				return (
					<g key={i}>
						<path d={flightPath(mx, gy, ppm, u, p.deg, tEnd * q)} fill="none" stroke={p.style.color} strokeWidth={p.style.width ?? 7.5} strokeDasharray={p.style.dash} strokeLinecap="round" />
						{qAt !== undefined ? <text x={mx + X * ppm} y={gy - Y * ppm - 18} textAnchor="middle" opacity={prog(f, Math.max(qAt, p.at + 40), 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, fill: INK}}>?</text> : null}
					</g>
				);
			})}
			<BallSvg cx={g.muzzle[0]} cy={g.muzzle[1]} d={g.ballD} />
		</g>
	);
};

/** Hand-font note with JSX content (for subscripts), revealed left to right from `at`. (x, y) is the text's left middle. */
export const HandNote: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; children: React.ReactNode; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, at, out, size = 42, color = INK, children, anchor = 'start'}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const r = smooth(Math.max(0, Math.min(1, (f - at) / 22)));
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	const tx = anchor === 'start' ? '0' : anchor === 'middle' ? '-50%' : '-100%';
	return <div style={{position: 'absolute', left: x, top: y - size * 0.62, transform: `translateX(${tx})`, opacity: o, clipPath: r >= 1 ? undefined : `inset(-30% ${100 - r * 100}% -30% -8%)`, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.05}}>{children}</div>;
};

export {G, CARD, CARD_SHADOW, FONT_HAND, PAPER_DEEP};
