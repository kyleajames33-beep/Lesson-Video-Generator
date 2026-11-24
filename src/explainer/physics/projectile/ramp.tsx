// Launch-ramp rig for the projectile lessons (additive kit file, 22 November 2026; first used by phys-y12-m5-v07's
// handoff and phys-y12-m5-v08). Course-neutral: no lesson wording here. Painted plates at registered points,
// uniform scale only: the retort stand (rod centre line and base line from its sidecar), the boss (ring on the
// rod, jaw on the ramp's clamp tab), the launch ramp (exit lip and clamp tab from its sidecar) and the steel
// ball. The ball's path along the track is the ramp plate's measured running surface (alpha top edge, smoothed)
// offset by the ball's radius, sampled by arc length in plate pixels. Flights from the exit use flight.ts.
import React from 'react';
import {staticFile} from 'remotion';
import {INK} from '../../shared/tokens';
import {BallSvg, StrobeBall} from './board';
import {G} from './flight';

const RAMP_SRC = 'assets/physics/y12p-launch-ramp-v1.png';
const RAMP_CANVAS: [number, number] = [1774, 887];
const RAMP_EXIT: [number, number] = [1525, 635]; // running surface at the exit lip
const RAMP_TAB: [number, number] = [695, 493];
const RAMP_BALL_R = 59.13;
/** Ball centre along the track, plate pixels, equal arc-length steps from the top seat to the exit lip. */
const TRACK: readonly [number, number][] = [[362, 182], [389, 220], [407, 253], [429, 288], [453, 320], [480, 353], [508, 382], [538, 411], [569, 437], [601, 461], [637, 483], [672, 504], [709, 524], [747, 539], [786, 551], [826, 561], [866, 568], [907, 573], [948, 575], [990, 576], [1032, 576], [1072, 576], [1114, 576], [1155, 576], [1196, 576], [1238, 576], [1278, 576], [1320, 576], [1361, 575], [1402, 576], [1444, 576], [1485, 576], [1525, 576]];
const STAND_SRC = 'assets/physics/phys-y11-retort-stand-v1.png';
const STAND_CANVAS: [number, number] = [600, 2400];
const STAND_ROD_X = 230, STAND_BASE_Y = 2183;
const BOSS_SRC = 'assets/physics/phys-y11-boss-crossbar-v1.png';
const BOSS_CANVAS: [number, number] = [800, 800];
const BOSS_RING: [number, number] = [269, 400];
const BOSS_JAW: [number, number] = [490, 400];
export const PAPER_SRC = 'assets/physics/phys-y11-paper-sheet-flat-v1.png';
export const CARBON_SRC = 'assets/physics/y12p-carbon-paper-v1.png';
const SHEET_CANVAS: [number, number] = [2172, 724];
const SHEET_BOX: [number, number, number, number] = [132, 234, 2036, 509];
export const RAMP_PLATES = [RAMP_SRC, STAND_SRC, BOSS_SRC, PAPER_SRC, CARBON_SRC];

/** Geometry of the ramp drawn `rw` px wide with its exit lip (running surface) at (exitX, exitY). */
export const rampGeom = (exitX: number, exitY: number, rw: number) => {
	const s = rw / RAMP_CANVAS[0];
	const x0 = exitX - RAMP_EXIT[0] * s, y0 = exitY - RAMP_EXIT[1] * s;
	const r = RAMP_BALL_R * s;
	const pts = TRACK.map(([x, y]) => [x0 + x * s, y0 + y * s] as [number, number]);
	/** Ball centre at track position u (0 = top seat, 1 = exit lip). */
	const at = (u: number): [number, number] => {
		const k = Math.max(0, Math.min(1, u)) * (pts.length - 1);
		const i = Math.min(pts.length - 2, Math.floor(k)), f = k - i;
		return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f];
	};
	return {s, x0, y0, r, tab: [x0 + RAMP_TAB[0] * s, y0 + RAMP_TAB[1] * s] as [number, number], exitCentre: [exitX, exitY - r] as [number, number], at, top: y0 + 155 * s};
};

/** A plate image at uniform scale with its native pixel (ax, ay) placed at frame (x, y). */
const PlateAt: React.FC<{src: string; canvas: [number, number]; s: number; ax: number; ay: number; x: number; y: number; opacity?: number}> = ({src, canvas, s, ax, ay, x, y, opacity = 1}) => (
	<image href={staticFile(src)} x={x - ax * s} y={y - ay * s} width={canvas[0] * s} height={canvas[1] * s} opacity={opacity} preserveAspectRatio="none" />
);

/**
 * The rig: a retort stand standing on the bench (base line at benchY), the boss on its rod holding the ramp's
 * clamp tab, the ramp with its exit lip at (exitX, benchY − hPx). `ballU` places the ball on the track
 * (0 top seat, 1 exit); `ball` false hides it. Sizes scale with the ramp width `rw`.
 */
export const RampRig: React.FC<{exitX: number; benchY: number; hPx: number; rw?: number; ballU?: number; ball?: boolean; standX?: number}> = ({exitX, benchY, hPx, rw = 500, ballU = 0, ball = true, standX}) => {
	const g = rampGeom(exitX, benchY - hPx, rw);
	const sb = 0.15 * (rw / 500), st = 0.27 * (rw / 500);
	const rodX = standX ?? g.tab[0] - (BOSS_JAW[0] - BOSS_RING[0]) * sb;
	const ringY = g.tab[1];
	const [bx, by] = g.at(ballU);
	return (
		<g>
			<PlateAt src={STAND_SRC} canvas={STAND_CANVAS} s={st} ax={STAND_ROD_X} ay={STAND_BASE_Y} x={rodX} y={benchY} />
			<PlateAt src={RAMP_SRC} canvas={RAMP_CANVAS} s={g.s} ax={RAMP_EXIT[0]} ay={RAMP_EXIT[1]} x={exitX} y={benchY - hPx} />
			<PlateAt src={BOSS_SRC} canvas={BOSS_CANVAS} s={sb} ax={BOSS_RING[0]} ay={BOSS_RING[1]} x={rodX} y={ringY} />
			{ball ? <BallSvg cx={bx} cy={by} d={2 * g.r} /> : null}
		</g>
	);
};

/** A sheet plate (white paper or carbon paper) lying on the bench: visible width `w`, centred at x, its middle on y. */
export const Sheet: React.FC<{src?: string; x: number; y: number; w: number; opacity?: number}> = ({src = PAPER_SRC, x, y, w, opacity = 1}) => {
	const s = w / (SHEET_BOX[2] - SHEET_BOX[0]);
	return <PlateAt src={src} canvas={SHEET_CANVAS} s={s} ax={(SHEET_BOX[0] + SHEET_BOX[2]) / 2} ay={(SHEET_BOX[1] + SHEET_BOX[3]) / 2} x={x} y={y} opacity={opacity} />;
};
/** Visible height of a sheet drawn `w` wide. */
export const sheetH = (w: number) => (w * (SHEET_BOX[3] - SHEET_BOX[1])) / (SHEET_BOX[2] - SHEET_BOX[0]);

/** Horizontal launch from the exit: fall time from a drop of h metres, and the ball centre after t seconds (frame px). */
export const hFallT = (h: number, g = G) => Math.sqrt((2 * h) / g);
export const hLaunchAt = (exitCentre: [number, number], ux: number, t: number, ppm: number, g = G): [number, number] => [exitCentre[0] + ux * t * ppm, exitCentre[1] + 0.5 * g * t * t * ppm];
/** Strobe images of a horizontal launch every dt seconds up to t (frame px). */
export const HStrobes: React.FC<{exitCentre: [number, number]; ux: number; upTo: number; ppm: number; d: number; dt?: number}> = ({exitCentre, ux, upTo, ppm, d, dt = 0.05}) => {
	const out: React.ReactNode[] = [];
	for (let k = 1; k * dt <= upTo + 1e-9; k++) {
		const [x, y] = hLaunchAt(exitCentre, ux, k * dt, ppm);
		out.push(<StrobeBall key={k} cx={x} cy={y} d={d} />);
	}
	return <g>{out}</g>;
};
/** The plumb mark below the exit on the bench (a short ink cross). */
export const PlumbMark: React.FC<{x: number; y: number; color?: string}> = ({x, y, color = INK}) => <g><line x1={x - 12} x2={x + 12} y1={y} y2={y} stroke={color} strokeWidth={4} /><line x1={x} x2={x} y1={y - 12} y2={y + 12} stroke={color} strokeWidth={4} /></g>;
