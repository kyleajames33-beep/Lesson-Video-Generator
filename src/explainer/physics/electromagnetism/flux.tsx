// Flux kit for Module 6 (additive kit file, 25 November 2026; first used by phys-y12-m6-v08's handoff and v09, offered
// to the induction videos). Course-neutral: labels, numbers and colours of meaning come from the lesson.
//   - a coded square loop in a uniform field, drawn in a fixed oblique 3D view and turning about a vertical axis;
//   - an evenly spaced grid of field lines along +x; the lines that pass through the loop's face are found exactly
//     (a line at height y0 and depth z0 meets the loop's plane inside the square when |y0| <= a and
//     |z0| <= a cos(phi)) and drawn heavier on the far side, so a counter of lines through the loop follows cos(phi);
//   - the area normal (rotating with the loop) and an arc between the field and the normal.
// The grid has three rows inside the loop's height and columns at -0.4a and 0.7a inside its width (spacing 1.1a), so
// the count is 6 face on, 3 at 60 degrees and 0 edge on, the counting picture of Phi = BA cos(theta) (author note a).
import React from 'react';
import {CARD, INK} from '../../shared/tokens';
import {Arrow2} from './magnetic';

export type FluxCam = {cx: number; cy: number; k: number; yaw?: number; pitch?: number};
let clipSeq = 0;
const rad = (d: number) => (d * Math.PI) / 180;
/**
 * World: x along the field (right), y up, z towards the viewer. The view turns by `yaw` and looks down by `pitch`. The
 * default yaw (-70 degrees) looks nearly along the field, so a loop facing the field shows its whole face and a loop
 * edge on to the field looks thin (it is never edge on to the viewer between 0 and 90 degrees).
 */
export const fproj = (c: FluxCam, p: readonly [number, number, number]): [number, number] => {
	const ps = rad(c.yaw ?? -70), pt = rad(c.pitch ?? 22);
	const [x, y, z] = p;
	const d = -x * Math.sin(ps) + z * Math.cos(ps);
	return [c.cx + c.k * (x * Math.cos(ps) + z * Math.sin(ps)), c.cy - c.k * y * Math.cos(pt) + c.k * d * Math.sin(pt)];
};
/** The field-line grid for a loop of half-side a: [y0, z0] pairs. */
export const fieldGrid = (a: number) => {
	const out: [number, number][] = [];
	for (let i = -2; i <= 2; i++) for (let j = -1; j <= 2; j++) out.push([(2 * a * i) / 3, -0.4 * a + 1.1 * a * j]);
	return out;
};
/** Does the line (y0, z0) pass through the loop turned by phi (degrees from face on)? */
export const through = (a: number, phi: number, y0: number, z0: number) => Math.abs(y0) <= a + 1e-6 && Math.abs(z0) <= a * Math.abs(Math.cos(rad(phi))) + 1e-6 && Math.abs(Math.cos(rad(phi))) > 1e-3;
export const throughCount = (a: number, phi: number) => fieldGrid(a).filter(([y0, z0]) => through(a, phi, y0, z0)).length;
/** Loop corners for a loop turned by phi about the vertical axis (normal (cos phi, 0, sin phi)). */
export const loopCorners = (a: number, phi: number): [number, number, number][] => {
	const t: [number, number, number] = [-Math.sin(rad(phi)), 0, Math.cos(rad(phi))];
	return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v]) => [u * a * t[0], v * a, u * a * t[2]]);
};

/**
 * The loop in its field. `phi` turns the loop (0: face on, normal along the field; 90: edge on). `lit` 0 to 1 brightens
 * the lines through it; `normal` 0 to 1 draws the navy normal; `arc` 0 to 1 draws the angle between field and normal;
 * `back` tints the face when the field passes through from the other side (cos phi < 0).
 */
export const LoopInField: React.FC<{cam: FluxCam; a: number; phi: number; L?: number; lit?: number; normal?: number; arc?: number; lineColor: string; litColor: string; normalColor: string; loopColor?: string; face?: string; backTint?: string; fieldOpacity?: number; loopOpacity?: number; width?: number; clip?: readonly [number, number, number, number]}> = ({cam, a, phi, L = 2.6, lit = 1, normal = 0, arc = 0, lineColor, litColor, normalColor, loopColor = INK, face = '#e4ecf4', backTint = '#f3d6d2', fieldOpacity = 1, loopOpacity = 1, width = 4, clip}) => {
	const [clipId] = React.useState(() => `flux-clip-${++clipSeq}`);
	const c = Math.cos(rad(phi)), s = Math.sin(rad(phi));
	const grid = fieldGrid(a);
	const corners = loopCorners(a, phi).map(p => fproj(cam, p));
	const poly = corners.map(p => p.join(',')).join(' ');
	const xEnd = L * a;
	const lines = grid.map(([y0, z0], i) => {
		const thr = through(a, phi, y0, z0);
		const xi = Math.abs(c) > 1e-3 ? (-z0 * s) / c : 0;
		return {i, y0, z0, thr, xi};
	});
	const n0 = fproj(cam, [0, 0, 0]), n1 = fproj(cam, [1.3 * a * c, 0, 1.3 * a * s]);
	const b1 = fproj(cam, [0.9 * a, 0, 0]);
	return (
		<g clipPath={clip ? `url(#${clipId})` : undefined}>
			{clip ? <defs><clipPath id={clipId}><rect x={clip[0]} y={clip[1]} width={clip[2]} height={clip[3]} /></clipPath></defs> : null}
			<g opacity={fieldOpacity}>
				{lines.map(l => <Arrow2 key={l.i} from={fproj(cam, [-xEnd, l.y0, l.z0])} to={fproj(cam, [xEnd, l.y0, l.z0])} color={lineColor} width={width} head={20} />)}
			</g>
			<g opacity={loopOpacity}>
				<polygon points={poly} fill={c < -1e-3 ? backTint : face} opacity={0.7} />
				<polygon points={poly} fill="none" stroke={loopColor} strokeWidth={7} strokeLinejoin="round" />
			</g>
			{lit > 0.001 ? <g opacity={lit * fieldOpacity}>
				{lines.filter(l => l.thr).map(l => <Arrow2 key={l.i} from={fproj(cam, [l.xi, l.y0, l.z0])} to={fproj(cam, [xEnd, l.y0, l.z0])} color={litColor} width={width + 3} head={22} />)}
				{lines.filter(l => l.thr).map(l => { const p = fproj(cam, [l.xi, l.y0, l.z0]); return <circle key={`d${l.i}`} cx={p[0]} cy={p[1]} r={6} fill={litColor} stroke={CARD} strokeWidth={2} />; })}
			</g> : null}
			{normal > 0.001 ? <Arrow2 from={n0} to={[n0[0] + (n1[0] - n0[0]) * normal, n0[1] + (n1[1] - n0[1]) * normal]} color={normalColor} width={7} head={24} /> : null}
			{arc > 0.001 && Math.abs(s) > 0.02 ? <ArcBetween c={n0} a={b1} b={n1} r={70} color={INK} opacity={arc} /> : null}
		</g>
	);
};
/** A screen arc at centre c from direction (a - c) to direction (b - c). */
export const ArcBetween: React.FC<{c: [number, number]; a: [number, number]; b: [number, number]; r: number; color: string; opacity?: number; width?: number}> = ({c, a, b, r, color, opacity = 1, width = 4}) => {
	const a0 = Math.atan2(a[1] - c[1], a[0] - c[0]);
	let d = Math.atan2(b[1] - c[1], b[0] - c[0]) - a0;
	while (d > Math.PI) d -= 2 * Math.PI;
	while (d < -Math.PI) d += 2 * Math.PI;
	const n = 24, pts = Array.from({length: n + 1}, (_, i) => { const t = a0 + (d * i) / n; return `${(c[0] + r * Math.cos(t)).toFixed(1)},${(c[1] + r * Math.sin(t)).toFixed(1)}`; });
	return <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth={width} opacity={opacity} />;
};
