// Circular-motion stages for the Module 5 lessons (additive kit file, 23 November 2026; first used by
// phys-y12-m5-v12 and v13). Course-neutral: no lesson wording here. Painted plates at uniform scale only:
// the rear-view car on a coded road cross-section (flat or tilted about the tyre-contact midpoint), the
// top-view car on a coded roundabout, and a conical pendulum on the retort stand and boss. Positions come from
// the plates' sidecars (car rear: tyre contacts (337, 974) and (1112, 974), centre of mass (724, 629)).
import React from 'react';
import {staticFile} from 'remotion';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {BallSvg, ROLE} from '../projectile/board';

const REAR_SRC = 'assets/physics/y12p-car-rear-v1.png';
const REAR_CANVAS: [number, number] = [1448, 1086];
const REAR_PIVOT: [number, number] = [724, 974];
const REAR_COM: [number, number] = [724, 629];
const REAR_W = 1210 - 237; // alpha box width
const TOP_SRC = 'assets/physics/phys-y11-car-top-v1.png';
const TOP_CANVAS: [number, number] = [1600, 800];
const TOP_LEN = 1456 - 144;
const STAND_SRC = 'assets/physics/phys-y11-retort-stand-v1.png';
const BOSS_SRC = 'assets/physics/phys-y11-boss-crossbar-v1.png';
export const CIRCULAR_PLATES = [REAR_SRC, TOP_SRC, STAND_SRC, BOSS_SRC, 'assets/physics/phys-y11-steel-ball-v1.png'];

const rad = (d: number) => (d * Math.PI) / 180;
/** Rear-view car geometry: drawn `w` px wide (alpha box), tyre-contact midpoint at (cx, cy), road tilted `tilt` degrees (positive: left side lower). */
export const rearCarGeom = (cx: number, cy: number, w: number, tilt = 0) => {
	const s = w / REAR_W;
	const a = rad(-tilt); // screen rotation (positive tilt lowers the left side: anticlockwise on screen)
	const rot = (x: number, y: number): [number, number] => {
		const dx = (x - REAR_PIVOT[0]) * s, dy = (y - REAR_PIVOT[1]) * s;
		return [cx + dx * Math.cos(a) - dy * Math.sin(a), cy + dx * Math.sin(a) + dy * Math.cos(a)];
	};
	return {s, com: rot(REAR_COM[0], REAR_COM[1]), rot, height: (REAR_PIVOT[1] - 113) * s};
};
export const RearCar: React.FC<{cx: number; cy: number; w: number; tilt?: number; opacity?: number}> = ({cx, cy, w, tilt = 0, opacity = 1}) => {
	const {s} = rearCarGeom(cx, cy, w, tilt);
	return (
		<g transform={`rotate(${-tilt} ${cx} ${cy})`} opacity={opacity}>
			<image href={staticFile(REAR_SRC)} x={cx - REAR_PIVOT[0] * s} y={cy - REAR_PIVOT[1] * s} width={REAR_CANVAS[0] * s} height={REAR_CANVAS[1] * s} preserveAspectRatio="none" />
		</g>
	);
};
/** A coded road cross-section through (cx, cy), from x1 to x2 (measured along the road), tilted `tilt` degrees, with a shaded road bed. */
export const RoadSection: React.FC<{cx: number; cy: number; half: number; tilt?: number}> = ({cx, cy, half, tilt = 0}) => {
	const a = rad(-tilt);
	const p = (d: number): [number, number] => [cx + d * Math.cos(a), cy + d * Math.sin(a)];
	const [lx, ly] = p(-half), [rx, ry] = p(half);
	return (
		<g>
			<path d={`M${lx},${ly} L${rx},${ry} L${rx},${Math.max(ly, ry) + 70} L${lx},${Math.max(ly, ry) + 70} Z`} fill="#e7dfcf" />
			<line x1={lx} y1={ly} x2={rx} y2={ry} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{Array.from({length: Math.floor((2 * half) / 28)}, (_, i) => { const [x, y] = p(-half + 14 + i * 28); return <line key={i} x1={x} y1={y + 3} x2={x - 12} y2={y + 16} stroke={INK_SOFT} strokeWidth={2} />; })}
		</g>
	);
};
/** The "into the screen" velocity marker (a circled cross). */
export const IntoScreen: React.FC<{x: number; y: number; r?: number; color?: string}> = ({x, y, r = 20, color = ROLE.x.stroke}) => (
	<g><circle cx={x} cy={y} r={r} fill={CARD} stroke={color} strokeWidth={4} /><path d={`M${x - r * 0.6},${y - r * 0.6} L${x + r * 0.6},${y + r * 0.6} M${x + r * 0.6},${y - r * 0.6} L${x - r * 0.6},${y + r * 0.6}`} stroke={color} strokeWidth={4} /></g>
);
/** A coded flat roundabout seen from above: grey road ring of radius R (centre line) and width w, pale green island, navy centre dot. */
export const Roundabout: React.FC<{cx: number; cy: number; R: number; w: number}> = ({cx, cy, R, w}) => (
	<g>
		<circle cx={cx} cy={cy} r={R + w / 2} fill="#cfd2d4" stroke={INK} strokeWidth={3} />
		<circle cx={cx} cy={cy} r={R - w / 2} fill="#dbe8cf" stroke={INK} strokeWidth={3} />
		<circle cx={cx} cy={cy} r={R} fill="none" stroke="#f4f1ea" strokeWidth={3} strokeDasharray="18 16" />
		<circle cx={cx} cy={cy} r={9} fill={ROLE.given.stroke} />
	</g>
);
/** The top-view car centred at (x, y), `len` px long, nose pointing `heading` degrees (0 = right, 90 = up the page). */
export const TopCar: React.FC<{x: number; y: number; len: number; heading: number}> = ({x, y, len, heading}) => {
	const s = len / TOP_LEN;
	return (
		<g transform={`rotate(${-heading} ${x} ${y})`}>
			<image href={staticFile(TOP_SRC)} x={x - 800 * s} y={y - 400 * s} width={TOP_CANVAS[0] * s} height={TOP_CANVAS[1] * s} preserveAspectRatio="none" />
		</g>
	);
};

/**
 * A conical pendulum hanging from a retort stand: the stand's base on the bench at benchY, the boss on the rod,
 * the string from the pivot (the boss's jaw) to the steel ball. The ball goes round a horizontal circle of
 * radius L sin θ, h = L cos θ below the pivot, drawn in perspective with ellipse ratio `tiltK` (0 = edge on).
 * `phase` (radians) places the ball: 0 is the right-hand extreme, π/2 the near side. Lengths in px.
 */
export const coneGeom = (pivot: [number, number], L: number, theta: number, tiltK: number, phase: number) => {
	const r = L * Math.sin(rad(theta)), h = L * Math.cos(rad(theta));
	const c: [number, number] = [pivot[0], pivot[1] + h];
	const bob: [number, number] = [c[0] + r * Math.cos(phase), c[1] + r * tiltK * Math.sin(phase)];
	return {r, h, c, bob};
};
export const ConeRig: React.FC<{pivot: [number, number]; benchY: number; L: number; theta: number; tiltK?: number; phase?: number; ballD?: number; cone?: boolean; circle?: boolean; stand?: boolean}> = ({pivot, benchY, L, theta, tiltK = 0.3, phase = 0, ballD = 50, cone = true, circle = true, stand = true}) => {
	const {r, c, bob} = coneGeom(pivot, L, theta, tiltK, phase);
	const st = (benchY - pivot[1] + 60) / (2183 - 216); // stand scale: rod top a little above the pivot
	const rodX = pivot[0] - 150;
	const sb = 0.2;
	return (
		<g>
			{stand ? (
				<g>
					<image href={staticFile(STAND_SRC)} x={rodX - 230 * st} y={benchY - 2183 * st} width={600 * st} height={2400 * st} preserveAspectRatio="none" />
					<line x1={rodX} x2={pivot[0]} y1={pivot[1]} y2={pivot[1]} stroke="#9aa0a6" strokeWidth={9} strokeLinecap="round" />
					<line x1={rodX} x2={pivot[0]} y1={pivot[1] - 3} y2={pivot[1] - 3} stroke="#d8dbde" strokeWidth={3} strokeLinecap="round" />
					<image href={staticFile(BOSS_SRC)} x={rodX - 269 * sb} y={pivot[1] - 400 * sb} width={800 * sb} height={800 * sb} preserveAspectRatio="none" />
				</g>
			) : null}
			{circle ? <ellipse cx={c[0]} cy={c[1]} rx={r} ry={r * tiltK} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" /> : null}
			{cone ? <path d={`M${pivot[0]},${pivot[1]} L${c[0] - r},${c[1]} M${pivot[0]},${pivot[1]} L${c[0] + r},${c[1]}`} stroke={INK_SOFT} strokeWidth={2.5} /> : null}
			<line x1={pivot[0]} y1={pivot[1]} x2={bob[0]} y2={bob[1]} stroke={INK} strokeWidth={3} />
			<circle cx={pivot[0]} cy={pivot[1]} r={8} fill={ROLE.given.stroke} />
			<BallSvg cx={bob[0]} cy={bob[1]} d={ballD} />
		</g>
	);
};
