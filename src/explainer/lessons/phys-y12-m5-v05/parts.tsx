// Lesson parts for phys-y12-m5-v05: the cliff stage (HSC exam-style coded cliff, sea-level line and the painted
// launcher in a pit so its muzzle is at the cliff top), flight paths from the launch point down to the sea,
// and a range against angle graph. Geometry and look match last time's handoff frame (launcher in a pit,
// 12 px per metre, the sea-level line in blue). Plates come from the shared projectile kit at uniform scale.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, INK, INK_SOFT, TRACK, TYPE} from '../../shared/tokens';
import {BallSvg, GroundLine, LauncherSvg, ROLE, type World, launcherGeom, pivotForMuzzle, sx, sy} from '../../physics/projectile/board';
import {pos} from '../../physics/projectile/flight';
import {PATH, type Ang} from './common';

/** SVG path of a launch (u, θ) in world w from t0 to t1 (t0 may be negative: the same parabola before launch). */
export const pathT = (w: World, u: number, deg: number, t1: number, t0 = 0, n = 90) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		const [x, y] = pos(u, deg, t);
		d += `${i ? 'L' : 'M'}${sx(w, x).toFixed(1)},${sy(w, y).toFixed(1)} `;
	}
	return d;
};
export const ptT = (w: World, u: number, deg: number, t: number): [number, number] => {
	const [x, y] = pos(u, deg, t);
	return [sx(w, x), sy(w, y)];
};

/**
 * The cliff stage. The launch point (muzzle) is at (mx, gy); the sea-level line is at seaY. The cliff face is at
 * a fixed x (mx + edgeOff) so it does not move when the barrel turns; the launcher sits in a pit cut into the
 * cliff top so its muzzle is level with the top. `seaLeft` extends a dashed sea-level reference into the rock.
 */
export const CliffStage: React.FC<{mx: number; gy: number; seaY: number; lw: number; deg: number; leftX?: number; rightX?: number; edgeOff?: number; levelLine?: boolean; ball?: boolean; seaLeft?: boolean}> = ({mx, gy, seaY, lw, deg, leftX = 96, rightX = 1260, edgeOff = 60, levelLine = true, ball = true, seaLeft = false}) => {
	const [px, py] = pivotForMuzzle(mx, gy, lw, deg);
	const g = launcherGeom(px, py, lw, deg);
	const edge = mx + edgeOff;
	const pitL = Math.min(g.left - 20, mx - 120);
	const hatch: React.ReactNode[] = [];
	for (let y = gy + 14; y < seaY - 6; y += 22) hatch.push(<line key={y} x1={edge} y1={y} x2={edge - 14} y2={y + 12} stroke={INK_SOFT} strokeWidth={2} />);
	const waves: React.ReactNode[] = [];
	for (let x = edge + 20; x + 60 < rightX; x += 60) waves.push(<path key={x} d={`M${x},${seaY + 14} q15,-8 30,0 t30,0`} fill="none" stroke={ROLE.y.stroke} strokeWidth={2.5} />);
	return (
		<g>
			<rect x={leftX} y={gy} width={edge - leftX} height={seaY - gy} fill={TRACK} />
			<rect x={pitL} y={gy} width={edge - pitL} height={Math.max(8, g.floorY - gy)} fill="#e3d8c3" />
			<GroundLine x1={pitL} x2={edge} y={g.floorY} hatch={false} />
			<line x1={pitL} x2={pitL} y1={gy} y2={g.floorY} stroke={INK} strokeWidth={3} />
			<line x1={leftX} x2={pitL} y1={gy} y2={gy} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<line x1={edge} x2={edge} y1={gy} y2={seaY} stroke={INK} strokeWidth={4} />
			{hatch}
			<line x1={edge} x2={rightX} y1={seaY} y2={seaY} stroke={ROLE.y.stroke} strokeWidth={4} />
			{waves}
			{seaLeft ? <line x1={leftX} x2={edge} y1={seaY} y2={seaY} stroke={ROLE.y.stroke} strokeWidth={3} strokeDasharray="10 9" /> : null}
			{levelLine ? <line x1={edge} x2={rightX} y1={gy} y2={gy} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" /> : null}
			<LauncherSvg px={px} py={py} w={lw} deg={deg} />
			{ball ? <BallSvg cx={g.muzzle[0]} cy={g.muzzle[1]} d={g.ballD} /> : null}
		</g>
	);
};
/** The face position of a CliffStage (for brackets). */
export const cliffEdge = (mx: number, edgeOff = 60) => mx + edgeOff;

/** One flight path in its angle's colour, drawn from launch to t1 (s). */
export const AnglePath: React.FC<{w: World; u: number; deg: Ang; t1: number; t0?: number; width?: number; thin?: boolean}> = ({w, u, deg, t1, t0 = 0, width = 7, thin = false}) => {
	if (t1 <= t0 + 1e-4) return null;
	const c = PATH[deg];
	return <path d={pathT(w, u, deg, t1, t0)} fill="none" stroke={c.stroke} strokeWidth={thin ? 3.5 : width} strokeDasharray={c.dash} strokeLinecap="round" strokeLinejoin="round" />;
};

/**
 * Range against launch angle: θ from 0 to 90 degrees, R from 0 to rMax. Curves are functions of θ drawn from
 * `from` to `to` degrees; points sit on the plot. Frame coordinates (place inside a FrameSvg).
 */
export type RCurve = {fn: (deg: number) => number; from?: number; to: number; color: string; width?: number; dash?: string};
export const raGeom = (x: number, y: number, w: number, h: number, rMax: number) => {
	const left = x + 96, right = x + w - 30, top = y + 60, bottom = y + h - 84;
	return {left, right, top, bottom, gx: (d: number) => left + (d / 90) * (right - left), gy: (r: number) => bottom - (r / rMax) * (bottom - top)};
};
export const RangeAngleGraph: React.FC<{x: number; y: number; w: number; h: number; rMax: number; rStep: number; curves: readonly RCurve[]; title?: string; at?: number; children?: React.ReactNode}> = ({x, y, w, h, rMax, rStep, curves, title, at = -30, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const g = raGeom(x, y, w, h, rMax);
	const tick = {fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.label, fill: INK} as const;
	const rt: number[] = [];
	for (let r = 0; r <= rMax + 1e-6; r += rStep) rt.push(r);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
			{title ? <text x={x + 22} y={y + 40} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support}} fill={INK}>{title}</text> : null}
			{[0, 15, 30, 45, 60, 75, 90].map(d => <g key={d}><line x1={g.gx(d)} x2={g.gx(d)} y1={g.top} y2={g.bottom} stroke="#e4dccd" strokeWidth={2} /><text x={g.gx(d)} y={g.bottom + 36} textAnchor="middle" style={tick}>{d}</text></g>)}
			{rt.map(r => <g key={r}><line x1={g.left} x2={g.right} y1={g.gy(r)} y2={g.gy(r)} stroke="#e4dccd" strokeWidth={2} /><text x={g.left - 14} y={g.gy(r) + 10} textAnchor="end" style={tick}>{r}</text></g>)}
			<path d={`M${g.left},${g.top - 10} V${g.bottom} H${g.right + 10}`} fill="none" stroke={INK} strokeWidth={3.5} />
			<text x={g.right + 10} y={g.bottom + 72} textAnchor="end" style={{...tick, fill: INK_SOFT}}>launch angle θ (°)</text>
			<text x={g.left + 12} y={g.top - 20} style={{...tick, fill: INK_SOFT}}>range R (m)</text>
			{curves.map((c, i) => {
				const a = c.from ?? 0;
				if (c.to <= a + 1e-3) return null;
				let d = '';
				const n = 120;
				for (let k = 0; k <= n; k++) {
					const th = a + ((c.to - a) * k) / n;
					d += `${k ? 'L' : 'M'}${g.gx(th).toFixed(1)},${g.gy(c.fn(th)).toFixed(1)} `;
				}
				return <path key={i} d={d} fill="none" stroke={c.color} strokeWidth={c.width ?? 6} strokeDasharray={c.dash} strokeLinecap="round" strokeLinejoin="round" />;
			})}
			{children}
		</g>
	);
};
