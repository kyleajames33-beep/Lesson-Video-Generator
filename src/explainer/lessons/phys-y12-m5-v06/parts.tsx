// Lesson parts for phys-y12-m5-v06: the cliff-and-wall stage (HSC exam-style coded cliff, sea line and wall,
// the painted launcher in a pit so its muzzle is at the cliff top; last time's CliffStage, imported read-only),
// the wall, the term bars (u_y t up, ½gt² down) and the strobe images of a flight. Plates come from the shared
// projectile kit at uniform scale. Every position comes from the projectile equations (flight.ts).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {ROLE, StrobeBall, type World} from '../../physics/projectile/board';
import {pos} from '../../physics/projectile/flight';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {CliffStage} from '../phys-y12-m5-v05/parts';
import {HC, HW, U, XW} from './common';

export {Lbl};

/** The main stage (20 px per metre, equal scales): launch point (muzzle) at (MX, GY), sea line at SEA. */
export const MX = 260, GY = 560, PPM = 20, LW = 190;
export const SEA = GY + HC * PPM;
export const W: World = {x0: MX, y0: GY, ppm: PPM};
export const EDGE_OFF = 8;
export const wallX = (w: World) => w.x0 + XW * w.ppm;
export const seaY = (w: World) => w.y0 + HC * w.ppm;
export const wallTop = (w: World) => seaY(w) - HW * w.ppm;
export const BALL_D = 30;

/** SVG path of a launch at `deg` (u = 18 m/s) in world w from t0 to t1. */
export const pathU = (w: World, deg: number, t1: number, t0 = 0, n = 90, u = U) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		const [x, y] = pos(u, deg, t);
		d += `${i ? 'L' : 'M'}${(w.x0 + x * w.ppm).toFixed(1)},${(w.y0 - y * w.ppm).toFixed(1)} `;
	}
	return d;
};
export const ptU = (w: World, deg: number, t: number, u = U): [number, number] => {
	const [x, y] = pos(u, deg, t);
	return [w.x0 + x * w.ppm, w.y0 - y * w.ppm];
};

/** The coded wall (exam style: outlined post with hatching) at x, from the sea line up to `top`, rising with p. */
export const Wall: React.FC<{x: number; top: number; base: number; p?: number; width?: number}> = ({x, top, base, p = 1, width = 26}) => {
	if (p <= 0.001) return null;
	const y0 = base - (base - top) * p;
	const hatch: React.ReactNode[] = [];
	for (let y = y0 + 12; y < base - 4; y += 18) hatch.push(<line key={y} x1={x - width / 2 + 2} y1={y} x2={x + width / 2 - 2} y2={y + 10} stroke={INK_SOFT} strokeWidth={2} />);
	return (
		<g>
			<rect x={x - width / 2} y={y0} width={width} height={base - y0} fill={CARD} stroke={INK} strokeWidth={4} />
			{hatch}
		</g>
	);
};

/** The cliff, sea and wall stage in world w, launcher barrel at `deg`. */
export const WallStage: React.FC<{w: World; deg: number; lw?: number; wallP?: number; ball?: boolean; levelLine?: boolean; rightX?: number; leftX?: number}> = ({w, deg, lw = LW, wallP = 1, ball = true, levelLine = true, rightX = 1250, leftX = 96}) => (
	<g>
		<CliffStage mx={w.x0} gy={w.y0} seaY={seaY(w)} lw={lw} deg={deg} leftX={leftX} rightX={rightX} edgeOff={EDGE_OFF} levelLine={levelLine} ball={ball} />
		<Wall x={wallX(w)} top={wallTop(w)} base={seaY(w)} p={wallP} />
	</g>
);

/** Strobe images of a launch every `dt` seconds up to `upTo` (solid ink rims, never faint). */
export const Strobes: React.FC<{w: World; deg: number; dt?: number; upTo: number; d?: number; u?: number}> = ({w, deg, dt = 0.25, upTo, d = BALL_D, u = U}) => {
	const out: React.ReactNode[] = [];
	for (let k = 1; k * dt <= upTo + 1e-9; k++) {
		const [x, y] = ptU(w, deg, k * dt, u);
		out.push(<StrobeBall key={k} cx={x} cy={y} d={d} />);
	}
	return <g>{out}</g>;
};

/**
 * The two term bars at frame x: a blue bar rising `rise` metres from the launch level y0 (u_y t), and a violet
 * bar dropping `drop` metres from the blue bar's top (½gt²), beside it. Each grows from its cue.
 */
export const TermBars: React.FC<{x: number; y0: number; ppm: number; rise: number; drop: number; riseAt?: number; dropAt?: number; bw?: number; gap?: number}> = ({x, y0, ppm, rise, drop, riseAt = -30, dropAt = -30, bw = 24, gap = 6}) => {
	const f = useCurrentFrame();
	const pr = prog(f, riseAt, 30), pd = prog(f, dropAt, 30);
	const top = y0 - rise * ppm;
	return (
		<g>
			{pr > 0 ? <rect x={x} y={y0 - rise * ppm * pr} width={bw} height={rise * ppm * pr} fill={ROLE.y.soft} stroke={ROLE.y.stroke} strokeWidth={4} /> : null}
			{pd > 0 ? <rect x={x + bw + gap} y={top} width={bw} height={drop * ppm * pd} fill={ROLE.a.soft} stroke={ROLE.a.stroke} strokeWidth={4} /> : null}
		</g>
	);
};

/** A small impact mark where a ball meets the wall face (exam-style spikes). */
export const Impact: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const p = prog(useCurrentFrame(), at, 8);
	if (p <= 0) return null;
	return <g opacity={p}>{[-60, -25, 15, 50].map(a => { const r = (a * Math.PI) / 180; return <line key={a} x1={x - 10 * Math.cos(r)} y1={y + 10 * Math.sin(r)} x2={x - 30 * Math.cos(r)} y2={y + 30 * Math.sin(r)} stroke={INK} strokeWidth={4} strokeLinecap="round" />; })}</g>;
};

/** A plain exam-style target marker: an upright line with a small triangle (not a picture of a flag). */
export const Target: React.FC<{x: number; y: number; p?: number}> = ({x, y, p = 1}) => {
	if (p <= 0.001) return null;
	return (
		<g opacity={p}>
			<line x1={x} x2={x} y1={y} y2={y - 70} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<path d={`M${x},${y - 70} L${x + 40},${y - 58} L${x},${y - 46} Z`} fill={ROLE.v.stroke} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		</g>
	);
};

export const SMALL = TYPE.support;
