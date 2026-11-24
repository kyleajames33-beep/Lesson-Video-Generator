// Lesson parts for phys-y12-m5-v03: a velocity triangle that can point up (launch) or down (landing), a
// ring mark, an ink stamp, and path helpers for the 25 m/s, 50 degree flight. Everything else comes from the
// shared projectile kit (src/explainer/physics/projectile/) and v02's parts (imported read-only).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog, scribbleEllipse} from '../../kit';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {DISPLAY, ROLE, VecArrow, type World, sx, sy} from '../../physics/projectile/board';
import {pos} from '../../physics/projectile/flight';

/**
 * Velocity triangle at (x0, y0), k px per m s^-1: teal horizontal side vx, blue vertical side vy (up positive,
 * so a landing triangle with vy < 0 hangs below the tail), orange resultant with its head, and an angle arc
 * between the horizontal and the resultant. `sidesAt` / `hypAt` reveal parts on cue.
 */
export const VelTri: React.FC<{x0: number; y0: number; k: number; vx: number; vy: number; sidesAt?: number; vyAt?: number; hypAt?: number; arcAt?: number; arcLabel?: string; width?: number}> = ({x0, y0, k, vx, vy, sidesAt = -30, vyAt, hypAt = -30, arcAt = -30, arcLabel, width = 9}) => {
	const f = useCurrentFrame();
	const X = vx * k, Y = -vy * k; // frame dy
	const hx = x0 + X, hy = y0 + Y;
	const a = Math.atan2(-Y, X); // angle above the horizontal (negative below)
	const r = Math.max(50, Math.min(84, Math.hypot(X, Y) * 0.24));
	const sweep = a >= 0 ? 0 : 1;
	const arc = `M${x0 + r},${y0} A${r},${r} 0 0,${sweep} ${x0 + r * Math.cos(a)},${y0 - r * Math.sin(a)}`;
	const mid = a / 2;
	const so = prog(f, sidesAt, 14), yo = prog(f, vyAt ?? sidesAt, 14), ho = prog(f, hypAt, 14), ao = prog(f, arcAt, 12);
	const corner = Y < 0 ? `M${hx - 22},${y0} V${y0 - 22} H${hx}` : `M${hx - 22},${y0} V${y0 + 22} H${hx}`;
	return (
		<g>
			<line x1={x0} y1={y0} x2={x0 + Math.max(X, r) + 60} y2={y0} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
			{so > 0 ? <line x1={x0} y1={y0} x2={hx} y2={y0} stroke={ROLE.x.stroke} strokeWidth={width} strokeLinecap="round" opacity={so} /> : null}
			{yo > 0 ? <g opacity={yo}><line x1={hx} y1={y0} x2={hx} y2={hy} stroke={ROLE.y.stroke} strokeWidth={width} strokeLinecap="round" /><path d={corner} fill="none" stroke={INK} strokeWidth={2.5} /></g> : null}
			{ho > 0 ? <g opacity={ho}><VecArrow x={x0} y={y0} dx={X} dy={Y} color={ROLE.v.stroke} width={8} head={26} /></g> : null}
			{ao > 0 ? (
				<g opacity={ao}>
					<path d={arc} fill="none" stroke={INK} strokeWidth={3.5} />
					{arcLabel ? <text x={x0 + (r + 14) * Math.cos(mid)} y={y0 - (r + 14) * Math.sin(mid) + (a >= 0 ? 4 : 30)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support + 4}} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{arcLabel}</text> : null}
				</g>
			) : null}
		</g>
	);
};

/** A hand-drawn ink ring (frame coordinates, inside an SVG). */
export const Ring: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; color?: string; width?: number; seed?: number}> = ({cx, cy, rx, ry, at, color = INK, width = 4.5, seed = 3}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <DrawPath d={scribbleEllipse(cx, cy, rx, ry, seed, 1.2)} at={at} dur={18} color={color} width={width} />;
};

/** An ink stamp (a condition, not a mistake): boxed capitals, slightly rotated, stamped on at `at`. */
export const Stamp: React.FC<{x: number; y: number; at: number; text: React.ReactNode; size?: number; rotate?: number; color?: string}> = ({x, y, at, text, size = 34, rotate = -6, color = INK}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 10);
	if (p <= 0) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, transform: `rotate(${rotate}deg) scale(${1.4 - 0.4 * p})`, transformOrigin: 'left center', opacity: p, border: `4px solid ${color}`, borderRadius: 10, padding: '0 14px 4px', background: CARD, ...DISPLAY(size, color, 900), textTransform: 'uppercase', letterSpacing: 2}}>{text}</div>
	);
};

/** SVG path of a launch (u, θ) in world w from t0 to t1 (y up positive in metres). */
export const pathT = (w: World, u: number, deg: number, t1: number, t0 = 0, n = 90) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		const [x, y] = pos(u, deg, t);
		d += `${i ? 'L' : 'M'}${sx(w, x).toFixed(1)},${sy(w, y).toFixed(1)} `;
	}
	return d;
};
/** Frame point of a launch (u, θ) at time t. */
export const ptT = (w: World, u: number, deg: number, t: number): [number, number] => {
	const [x, y] = pos(u, deg, t);
	return [sx(w, x), sy(w, y)];
};
