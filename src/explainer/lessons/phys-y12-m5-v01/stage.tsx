// The bench-edge stage shared by scenes 1 to 10 and the handoff: one geometry (500 px per metre on both
// axes), balls A and B read from their field-motion runs, strobe images every 0.1 s, the two shadows.
import React from 'react';
import {INK} from '../../shared/tokens';
import {BallSvg, Bench, HeightScale, ROLE, StrobeBall, sx, sy} from '../../physics/projectile/board';
import {DropLaunch} from '../../physics/projectile/demonstrator';
import {flightAt} from '../../physics/projectile/flight';
import {A_X, BALL_D, BENCH_TOP, DL, EDGE_X, FLASHES, FLOOR_Y, RUN_A, RUN_B, TLAND, W} from './common';

/** Frame position of ball B at physical time t (from its run). */
export const bAt = (t: number): [number, number] => {
	const s = flightAt(RUN_B, t);
	return [sx(W, s.x), sy(W, s.y)];
};
/** Frame position of ball A (dropped) at physical time t. */
export const aAt = (t: number): [number, number] => {
	const s = flightAt(RUN_A, t);
	return [A_X, sy(W, s.y)];
};
/** Landed balls rest on the floor: the run ends with the centre at the floor line minus a radius. */
export const LANDED_Y = FLOOR_Y - BALL_D / 2;

/** Bench, floor, the demonstrator slot (drawn once its plate exists) and an optional height scale. */
export const BenchStage: React.FC<{scaleAt?: number; scaleLabel?: boolean; slide?: number; demonstrator?: boolean; floorR?: number}> = ({scaleAt, scaleLabel = true, slide = 1, demonstrator = true, floorR = 1150}) => (
	<g>
		<Bench edgeX={DL.benchEdge} topY={DL.benchTop} left={0} floorY={FLOOR_Y} floorL={0} floorR={floorR} band={DL.benchBottom - DL.benchTop} legs={false} />
		{scaleAt !== undefined ? <HeightScale x={EDGE_X} yTop={BENCH_TOP} yBot={FLOOR_Y} ppm={W.ppm} at={scaleAt} label={scaleLabel ? '1.2 m' : undefined} /> : null}
		{demonstrator ? <DropLaunch bx={W.x0} by={W.y0} ballD={BALL_D} slide={slide} /> : null}
	</g>
);

/** Strobe images of A and/or B at the flashes reached by time t (default: all), plus landing images. */
export const Strobes: React.FC<{t?: number; a?: boolean; b?: boolean; launch?: boolean}> = ({t = TLAND, a = true, b = true, launch = false}) => (
	<g>
		{[...(launch ? [0] : []), ...FLASHES].filter(k => k <= t + 1e-9).map(k => {
			const [bx, by] = bAt(k), [ax, ay] = aAt(k);
			return (
				<g key={k}>
					{a ? <StrobeBall cx={ax} cy={ay} d={BALL_D} /> : null}
					{b ? <StrobeBall cx={bx} cy={by} d={BALL_D} /> : null}
				</g>
			);
		})}
	</g>
);

/** The live balls at time t (A optional). */
export const Balls: React.FC<{t: number; a?: boolean; b?: boolean}> = ({t, a = true, b = true}) => {
	const [bx, by] = bAt(t), [ax, ay] = aAt(t);
	return <g>{a ? <BallSvg cx={ax} cy={ay} d={BALL_D} /> : null}{b ? <BallSvg cx={bx} cy={by} d={BALL_D} /> : null}</g>;
};

/** B's path from launch to time t as a thin solid orange line (never faint, rule R2). */
export const pathD = (t1: number, t0 = 0, n = 80) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const [x, y] = bAt(t0 + ((t1 - t0) * i) / n);
		d += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)} `;
	}
	return d;
};
export const PathLine: React.FC<{t?: number; width?: number}> = ({t = TLAND, width = 4}) => <path d={pathD(t)} fill="none" stroke={ROLE.v.stroke} strokeWidth={width} strokeLinecap="round" />;

/** Teal floor shadow (B's horizontal position) and blue edge shadow (B's height) at time t. */
export const Shadows: React.FC<{t: number; floor?: boolean; edge?: boolean; guides?: boolean}> = ({t, floor = true, edge = true, guides = false}) => {
	const [bx, by] = bAt(t);
	return (
		<g>
			{guides ? <line x1={bx} x2={bx} y1={by} y2={FLOOR_Y} stroke={ROLE.x.stroke} strokeWidth={2.5} strokeDasharray="7 7" /> : null}
			{guides ? <line x1={EDGE_X} x2={bx} y1={by} y2={by} stroke={ROLE.y.stroke} strokeWidth={2.5} strokeDasharray="7 7" /> : null}
			{floor ? <circle cx={bx} cy={FLOOR_Y} r={12} fill={ROLE.x.stroke} stroke="#fffdf8" strokeWidth={3} /> : null}
			{edge ? <circle cx={EDGE_X} cy={by} r={12} fill={ROLE.y.stroke} stroke="#fffdf8" strokeWidth={3} /> : null}
		</g>
	);
};
export {INK};
