// Lesson parts for phys-y12-m6-v09: the loop in a field (kit gap 1, from the shared flux kit: the same camera and loop
// as last time's final frame), the side view of a loop (exam style: the loop edge on as a line, the field arrows, the
// navy normal and the angle arcs), the bench plates for the inset and the handoff, and v08's parts re-exported.
// Colour roles (design, Revision 2): field slate; the lines through the loop and flux readouts dark slate; the loop
// outline ink with a pale face; the area normal navy; the along-surface part grey; rain pale blue-grey; θ ink; the plane
// angle α grey-ink; areas and givens navy; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {ArcBetween} from '../../physics/electromagnetism/flux';
import type {FluxCam} from '../../physics/electromagnetism/flux';
import {AMBER, CardRect, FIELD1, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, fx, sci, V08_PLATES} from '../phys-y12-m6-v08/parts';

export {AMBER, CardRect, FIELD1, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, fx, sci};
export const V09_PLATES = [...V08_PLATES];
export const LIT = '#2f3d4c', RAIN = '#7f9bb5';
/** Last time's final-frame camera and loop (so the join is exact). */
export const CAM0: FluxCam = {cx: 900, cy: 560, k: 1, yaw: -70, pitch: 22};
export const A0 = 170;

const rad = (d: number) => (d * Math.PI) / 180;
/**
 * The side view of a flat loop (exam style): field arrows to the right across a panel, the loop edge on as a thick line
 * through (cx, cy) whose plane makes `plane` degrees with the field, optional navy normal and arcs.
 */
export const SideView: React.FC<{cx: number; cy: number; w: number; h: number; plane: number; len?: number; normal?: number; alphaArc?: number; thetaArc?: number; rows?: number; opacity?: number}> = ({cx, cy, w, h, plane, len = 260, normal = 0, alphaArc = 0, thetaArc = 0, rows = 5, opacity = 1}) => {
	const u = [Math.cos(rad(plane)), -Math.sin(rad(plane))];
	const nDeg = plane - 90;
	const n = [Math.cos(rad(nDeg)), -Math.sin(rad(nDeg))];
	const L = len / 2;
	return (
		<g opacity={opacity}>
			<rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={12} fill="#fbf8f1" stroke={FIELD1} strokeWidth={3} strokeDasharray="10 8" />
			{Array.from({length: rows}, (_, i) => { const y = cy - h / 2 + ((i + 0.5) * h) / rows; return <Arrow2 key={i} from={[cx - w / 2 + 20, y]} to={[cx + w / 2 - 14, y]} color={FIELD1} width={4} head={18} />; })}
			<line x1={cx - L * u[0]} y1={cy - L * u[1]} x2={cx + L * u[0]} y2={cy + L * u[1]} stroke={INK} strokeWidth={14} strokeLinecap="round" />
			{normal > 0.001 ? <Arrow2 from={[cx, cy]} to={[cx + n[0] * 170 * normal, cy + n[1] * 170 * normal]} color={NAVY.stroke} width={7} head={24} /> : null}
			{alphaArc > 0.001 ? <ArcBetween c={[cx, cy]} a={[cx + 100, cy]} b={[cx + 100 * u[0], cy + 100 * u[1]]} r={95} color={GREY.ink} opacity={alphaArc} /> : null}
			{thetaArc > 0.001 ? <ArcBetween c={[cx, cy]} a={[cx + 100, cy]} b={[cx + 100 * n[0], cy + 100 * n[1]]} r={62} color={INK} opacity={thetaArc} width={5} /> : null}
		</g>
	);
};
export const sideNormalTip = (cx: number, cy: number, plane: number, r = 170): [number, number] => {
	const nDeg = plane - 90;
	return [cx + Math.cos(rad(nDeg)) * r, cy - Math.sin(rad(nDeg)) * r];
};
