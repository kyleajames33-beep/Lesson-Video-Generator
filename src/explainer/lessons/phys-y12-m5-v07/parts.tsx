// Lesson parts for phys-y12-m5-v07: the level-ground stage of last time's final frame (12 px per metre, launch
// point (200, 860)), two painted launchers whose muzzles share the launch point (each in its own pit, so both
// launch exactly at ground level; the steeper one sits behind), paths at 30 m/s, and the launch triangle
// with given sides. Plates come from the shared projectile kit at uniform scale.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, prog} from '../../kit';
import {CARD, INK, INK_SOFT, TRACK, TYPE} from '../../shared/tokens';
import {BallSvg, DISPLAY, GroundLine, LauncherSvg, ROLE, StrobeBall, VecArrow, type World, launcherGeom, pivotForMuzzle} from '../../physics/projectile/board';
import {pos} from '../../physics/projectile/flight';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {Target} from '../phys-y12-m5-v06/parts';
import {U} from './common';

export {Lbl, Target};

export const HX = 200, HG = 860, HPPM = 12, TLW = 150;
export const W12: World = {x0: HX, y0: HG, ppm: HPPM};

/** SVG path of a 30 m/s launch at `deg` in world w from t0 to t1. */
export const pathA = (w: World, deg: number, t1: number, t0 = 0, n = 90, u = U) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		const [x, y] = pos(u, deg, t);
		d += `${i ? 'L' : 'M'}${(w.x0 + x * w.ppm).toFixed(1)},${(w.y0 - y * w.ppm).toFixed(1)} `;
	}
	return d;
};
export const ptA = (w: World, deg: number, t: number, u = U): [number, number] => {
	const [x, y] = pos(u, deg, t);
	return [w.x0 + x * w.ppm, w.y0 - y * w.ppm];
};

/**
 * Painted launchers with every muzzle at (mx, gy) on level ground, each base in its own cut-away pit. `degs` are
 * drawn in order (the first behind). `right` ends the ground line. `balls` puts the steel ball at the muzzle.
 */
export const LaunchPits: React.FC<{mx: number; gy: number; degs: readonly number[]; lw?: number; right?: number; left?: number; balls?: boolean; opacity?: number}> = ({mx, gy, degs, lw = TLW, right = 1250, left = 96, balls = true, opacity = 1}) => {
	const gs = degs.map(d => { const [px, py] = pivotForMuzzle(mx, gy, lw, d); return {d, px, py, g: launcherGeom(px, py, lw, d)}; });
	const pitL = Math.min(...gs.map(o => o.g.left)) - 24, pitR = Math.max(...gs.map(o => o.g.right), mx) + 8;
	const floor = Math.max(...gs.map(o => o.g.floorY));
	return (
		<g opacity={opacity}>
			<rect x={pitL} y={gy} width={pitR - pitL} height={floor - gy} fill="#e3d8c3" />
			<GroundLine x1={left} x2={pitL} y={gy} />
			<line x1={pitL} x2={pitL} y1={gy} y2={floor} stroke={INK} strokeWidth={3} />
			<line x1={pitR} x2={pitR} y1={gy} y2={floor} stroke={INK} strokeWidth={3} />
			<GroundLine x1={pitR} x2={right} y={gy} />
			{gs.map(o => <g key={o.d}><line x1={o.g.left - 6} x2={o.g.right + 4} y1={o.g.floorY} y2={o.g.floorY} stroke={INK} strokeWidth={3} /><LauncherSvg px={o.px} py={o.py} w={lw} deg={o.d} /></g>)}
			<line x1={pitL} x2={pitR} y1={floor} y2={floor} stroke={INK} strokeWidth={3} />
			{balls ? <BallSvg cx={mx} cy={gy} d={gs[0].g.ballD} /> : null}
		</g>
	);
};

/** Strobe images of a 30 m/s launch every dt seconds up to `upTo`. */
export const StrobesA: React.FC<{w: World; deg: number; dt?: number; upTo: number; d?: number}> = ({w, deg, dt = 0.5, upTo, d = 26}) => {
	const out: React.ReactNode[] = [];
	for (let k = 1; k * dt <= upTo + 1e-9; k++) {
		const [x, y] = ptA(w, deg, k * dt);
		out.push(<StrobeBall key={k} cx={x} cy={y} d={d} />);
	}
	return <g>{out}</g>;
};

/**
 * A launch triangle with given sides (frame px): tail at (x0, y0), horizontal side `X` (teal), vertical side `Y`
 * (blue, up), orange hypotenuse with its head. Labels by the sides; an optional angle arc.
 */
export const SideTri: React.FC<{x0: number; y0: number; X: number; Y: number; at?: number; xLabel?: React.ReactNode; yLabel?: React.ReactNode; hLabel?: React.ReactNode; arc?: string; arcR?: number; size?: number; flipLabels?: boolean}> = ({x0, y0, X, Y, at = -30, xLabel, yLabel, hLabel, arc, arcR, size = TYPE.current}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const a = Math.atan2(Y, X);
	const r = arcR ?? Math.max(40, Math.min(70, X * 0.3));
	return (
		<g opacity={o}>
			<line x1={x0} y1={y0} x2={x0 + X} y2={y0} stroke={ROLE.x.stroke} strokeWidth={9} strokeLinecap="round" />
			<line x1={x0 + X} y1={y0} x2={x0 + X} y2={y0 - Y} stroke={ROLE.y.stroke} strokeWidth={9} strokeLinecap="round" />
			<path d={`M${x0 + X - 20},${y0} V${y0 - 20} H${x0 + X}`} fill="none" stroke={INK} strokeWidth={2.5} />
			<VecArrow x={x0} y={y0} dx={X} dy={-Y} color={ROLE.v.stroke} width={8} head={24} />
			{arc ? <g><path d={`M${x0 + r},${y0} A${r},${r} 0 0,0 ${x0 + r * Math.cos(a)},${y0 - r * Math.sin(a)}`} fill="none" stroke={INK} strokeWidth={3} /><text x={x0 + (r + 10) * Math.cos(a / 2)} y={y0 - (r + 10) * Math.sin(a / 2) + 12} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={INK} stroke={CARD} strokeWidth={6} paintOrder="stroke">{arc}</text></g> : null}
			{xLabel ? <foreignObject x={x0 + X / 2 - 200} y={y0 + 10} width={400} height={size * 1.5}><div style={{...DISPLAY(size, ROLE.x.ink), textAlign: 'center'}}>{xLabel}</div></foreignObject> : null}
			{yLabel ? <foreignObject x={x0 + X + 14} y={y0 - Y / 2 - size * 0.7} width={400} height={size * 1.5}><div style={DISPLAY(size, ROLE.y.ink)}>{yLabel}</div></foreignObject> : null}
			{hLabel ? <foreignObject x={x0 + X / 2 - 330} y={y0 - Y / 2 - size * 1.4} width={300} height={size * 1.5}><div style={{...DISPLAY(size - 6, ROLE.v.ink), textAlign: 'right'}}>{hLabel}</div></foreignObject> : null}
		</g>
	);
};

/** Plain level-ground set-up for the attempt cards: ground, the steel ball at the launch point, a target and a bracket. */
export const SetupPicture: React.FC<{R: string; speed?: React.ReactNode}> = ({R, speed}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={0} y={420} width={670} height={40} fill={TRACK} opacity={0.6} />
		<GroundLine x1={0} x2={670} y={420} />
		<BallSvg cx={70} cy={392} d={56} />
		<Target x={600} y={420} />
		<line x1={70} x2={70} y1={436} y2={484} stroke={INK} strokeWidth={3} />
		<line x1={600} x2={600} y1={436} y2={484} stroke={INK} strokeWidth={3} />
		<line x1={70} x2={600} y1={470} y2={470} stroke={ROLE.x.ink} strokeWidth={4} />
		<text x={335} y={536} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 44}} fill={ROLE.x.ink}>{R}</text>
		<text x={30} y={340} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 32}} fill={INK_SOFT}>launch point</text>
		<text x={600} y={320} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 32}} fill={INK_SOFT}>target</text>
		<text x={300} y={250} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 90}} fill={INK}>θ = ?</text>
		{speed ? <foreignObject x={30} y={60} width={400} height={80}><div style={{display: 'inline-block', background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 16px 6px', ...DISPLAY(44, INK, 700)}}>{speed}</div></foreignObject> : null}
	</svg>
);

/** A small coded sine graph (sin 2θ against 2θ from 0 to 180°) with a level line and dots on it. Frame coordinates. */
export const MiniSine: React.FC<{x: number; y: number; w: number; h: number; level: number; dots: readonly number[]; at: number; dotLabels?: readonly string[]}> = ({x, y, w, h, level, dots, at, dotLabels = []}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const L = x + 70, R = x + w - 24, T = y + 50, B = y + h - 60;
	const gx = (d: number) => L + (d / 180) * (R - L), gy = (v: number) => B - v * (B - T);
	let d = '';
	for (let i = 0; i <= 60; i++) { const a = (180 * i) / 60; d += `${i ? 'L' : 'M'}${gx(a).toFixed(1)},${gy(Math.sin((a * Math.PI) / 180)).toFixed(1)} `; }
	const t = {fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 26} as const;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
			<text x={x + 18} y={y + 34} style={{...t, fontWeight: 800}} fill={INK}>sin 2θ</text>
			<path d={`M${L},${T - 10} V${B} H${R + 8}`} fill="none" stroke={INK} strokeWidth={3} />
			{[0, 90, 180].map(v => <text key={v} x={gx(v)} y={B + 32} textAnchor="middle" style={t} fill={INK}>{v}°</text>)}
			<text x={L - 10} y={gy(1) + 8} textAnchor="end" style={t} fill={INK}>1</text>
			<path d={d} fill="none" stroke={INK} strokeWidth={4} />
			<line x1={L} x2={R} y1={gy(level)} y2={gy(level)} stroke={ROLE.v.ink} strokeWidth={3} strokeDasharray="8 6" />
			{dots.map((v, i) => <g key={i}><circle cx={gx(v)} cy={gy(level)} r={10} fill={ROLE.v.stroke} stroke={CARD} strokeWidth={3} />{dotLabels[i] ? <text x={gx(v)} y={gy(level) - 18} textAnchor="middle" style={{...t, fontWeight: 800}} fill={ROLE.v.ink}>{dotLabels[i]}</text> : null}</g>)}
		</g>
	);
};
