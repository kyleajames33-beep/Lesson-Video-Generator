// Lesson parts for phys-y12-m5-v02: the launch triangle with its angle measured from the horizontal or the
// vertical, a launcher standing on a ground line, and the strobe images of a flight to its peak.
// Everything else comes from the shared projectile kit (src/explainer/physics/projectile/board.tsx).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {BallSvg, DISPLAY, GroundLine, LauncherSvg, ROLE, StrobeBall, VecArrow, launcherGeom, type World, sx, sy} from '../../physics/projectile/board';
import {pos, ux, uy} from '../../physics/projectile/flight';

const rad = (d: number) => (d * Math.PI) / 180;

/** HTML label placed in frame coordinates (left middle at x, y; or centred / right by anchor). */
export const Lbl: React.FC<{x: number; y: number; children: React.ReactNode; color?: string; size?: number; at?: number; out?: number; anchor?: 'start' | 'middle' | 'end'; bg?: boolean}> = ({x, y, children, color = INK, size = TYPE.current, at = -30, out, anchor = 'start', bg = true}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.001) return null;
	const tx = anchor === 'start' ? '0' : anchor === 'middle' ? '-50%' : '-100%';
	return <div style={{position: 'absolute', left: x, top: y - size * 0.68, transform: `translateX(${tx})`, opacity: o, ...DISPLAY(size, color, 800), textShadow: bg ? `0 0 8px ${CARD}, 0 0 4px ${CARD}, 0 0 2px ${CARD}` : undefined}}>{children}</div>;
};

/**
 * Launch triangle drawn on the launch velocity: tail at (x0, y0), k px per m s^-1, launch `deg` above the
 * horizontal. The given angle is marked from the horizontal (ref 'h') or from the vertical (ref 'v').
 * Sides are teal (horizontal) and blue (vertical); `dashed` draws them as outlines (unknowns).
 */
export const Tri: React.FC<{
	x0: number; y0: number; k: number; u: number; deg: number; ref?: 'h' | 'v';
	sidesAt?: number; dashed?: boolean; arcLabel?: string; arcAt?: number; second?: {at: number; label: string};
	glowX?: number; glowY?: number; rightAt?: number; hypW?: number; opacity?: number; head?: boolean;
}> = ({x0, y0, k, u, deg, ref = 'h', sidesAt = -30, dashed = false, arcLabel, arcAt = -30, second, glowX, glowY, rightAt = -30, hypW = 8, opacity = 1, head = true}) => {
	const f = useCurrentFrame();
	const X = ux(u, deg) * k, Y = uy(u, deg) * k;
	const hx = x0 + X, hy = y0 - Y;
	const so = prog(f, sidesAt, 14);
	const gx = glowX === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - glowX) / 30)));
	const gy = glowY === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - glowY) / 30)));
	const a = rad(deg);
	const r = Math.max(46, Math.min(90, Math.hypot(X, Y) * 0.22));
	const arcH = `M${x0 + r},${y0} A${r},${r} 0 0,0 ${x0 + r * Math.cos(a)},${y0 - r * Math.sin(a)}`;
	const arcV = `M${x0},${y0 - r} A${r},${r} 0 0,1 ${x0 + r * Math.cos(a)},${y0 - r * Math.sin(a)}`;
	const mid = ref === 'h' ? a / 2 : (a + Math.PI / 2) / 2;
	return (
		<g opacity={opacity}>
			{ref === 'h' ? <line x1={x0} y1={y0} x2={x0 + Math.max(X, r) + 60} y2={y0} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" /> : <line x1={x0} y1={y0} x2={x0} y2={y0 - Math.max(Y, r) - 60} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />}
			{so > 0 ? (
				<g opacity={so}>
					<line x1={x0} y1={y0} x2={hx} y2={y0} stroke={ROLE.x.stroke} strokeWidth={(dashed ? 5 : 9) + 6 * gx} strokeDasharray={dashed ? '14 10' : undefined} strokeLinecap="round" />
					<line x1={hx} y1={y0} x2={hx} y2={hy} stroke={ROLE.y.stroke} strokeWidth={(dashed ? 5 : 9) + 6 * gy} strokeDasharray={dashed ? '14 10' : undefined} strokeLinecap="round" />
					<path d={`M${hx - 22},${y0} V${y0 - 22} H${hx}`} fill="none" stroke={INK} strokeWidth={2.5} opacity={prog(f, rightAt, 10)} />
				</g>
			) : null}
			{head ? <VecArrow x={x0} y={y0} dx={X} dy={-Y} color={ROLE.v.stroke} width={hypW} head={26} /> : <line x1={x0} y1={y0} x2={hx} y2={hy} stroke={ROLE.v.stroke} strokeWidth={hypW} strokeLinecap="round" />}
			{prog(f, arcAt, 10) > 0 ? (
				<g opacity={prog(f, arcAt, 10)}>
					<path d={ref === 'h' ? arcH : arcV} fill="none" stroke={INK} strokeWidth={3.5} />
					{arcLabel ? <text x={x0 + (r + 16) * Math.cos(mid)} y={y0 - (r + 16) * Math.sin(mid) + 14} textAnchor={ref === 'h' ? 'start' : 'start'} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: TYPE.support + 6}} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{arcLabel}</text> : null}
				</g>
			) : null}
			{second && f >= second.at ? (
				<g opacity={prog(f, second.at, 10)}>
					<path d={ref === 'h' ? arcV.replace(`${r}`, `${r + 34}`) : `M${x0 + r + 34},${y0} A${r + 34},${r + 34} 0 0,0 ${x0 + (r + 34) * Math.cos(a)},${y0 - (r + 34) * Math.sin(a)}`} fill="none" stroke={INK} strokeWidth={3.5} />
					<line x1={x0} y1={y0} x2={x0 + Math.max(X, r) + 60} y2={y0} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
					<text x={x0 + (r + 50) * Math.cos(a / 2)} y={y0 - (r + 50) * Math.sin(a / 2) + 14} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: TYPE.support + 6}} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{second.label}</text>
				</g>
			) : null}
		</g>
	);
};
/** Geometry helper for Tri: the head of the hypotenuse and the right-angle corner. */
export const triPts = (x0: number, y0: number, k: number, u: number, deg: number) => {
	const X = ux(u, deg) * k, Y = uy(u, deg) * k;
	return {X, Y, corner: [x0 + X, y0] as [number, number], tip: [x0 + X, y0 - Y] as [number, number]};
};

/**
 * The painted launcher standing on a ground line at `groundY`, its pivot at x = px, barrel at `deg`, the ball at
 * the muzzle. Returns nothing else; use launcherAt() for the muzzle point.
 */
export const launcherAt = (px: number, groundY: number, lw: number, deg: number) => {
	const g0 = launcherGeom(px, 0, lw, deg);
	const py = groundY - g0.floorY; // pivot height so the base stands on the ground
	return launcherGeom(px, py, lw, deg);
};
export const StandingLauncher: React.FC<{px: number; groundY: number; lw: number; deg: number; ball?: boolean; x1?: number; x2?: number; ground?: boolean}> = ({px, groundY, lw, deg, ball = true, x1, x2, ground = true}) => {
	const g = launcherAt(px, groundY, lw, deg);
	const pyv = groundY - launcherGeom(px, 0, lw, deg).floorY;
	return (
		<g>
			{ground ? <GroundLine x1={x1 ?? g.left - 40} x2={x2 ?? g.right + 80} y={groundY} /> : null}
			<LauncherSvg px={px} py={pyv} w={lw} deg={deg} />
			{ball ? <BallSvg cx={g.muzzle[0]} cy={g.muzzle[1]} d={g.ballD} /> : null}
		</g>
	);
};

/** SVG path of a launch (u, θ) in world w from t0 to t1. */
export const pathD = (w: World, u: number, deg: number, t1: number, t0 = 0, n = 80) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		const [x, y] = pos(u, deg, t);
		d += `${i ? 'L' : 'M'}${sx(w, x).toFixed(1)},${sy(w, y).toFixed(1)} `;
	}
	return d;
};
/** Strobe images of a launch at the given instants (solid ink rims). */
export const StrobeSet: React.FC<{w: World; u: number; deg: number; times: number[]; d: number; upTo?: number}> = ({w, u, deg, times, d, upTo = Infinity}) => (
	<g>{times.filter(t => t <= upTo + 1e-9).map(t => { const [x, y] = pos(u, deg, t); return <StrobeBall key={t} cx={sx(w, x)} cy={sy(w, y)} d={d} />; })}</g>
);
/** A dashed path segment that draws on (thin solid dashes in the role colour, never faint). */
export const DashedPath: React.FC<{d: string; at: number; color?: string; width?: number}> = ({d, at, color = ROLE.v.stroke, width = 4}) => <DrawPath d={d} at={at} dur={30} color={color} width={width} dash="12 10" />;
