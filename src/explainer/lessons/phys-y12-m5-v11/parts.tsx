// Lesson parts for phys-y12-m5-v11: the top-view stages (the crane jib from last time, the car on a circular
// track, the ball on a table), the car plate turned to its heading, velocity (teal), acceleration and change of
// velocity (violet), net force (amber), givens and radii (navy). Plates at uniform scale only.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TRACK, TYPE} from '../../shared/tokens';
import {DISPLAY, ROLE, VecArrow} from '../../physics/projectile/board';
import {polar, vec} from '../../physics/projectile/turning';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {CAR_RUN, R_CAR, T_CAR, stateAt} from './common';

export {Lbl, polar, vec};
export const VEL = ROLE.x, ACC = ROLE.a, FORCE = ROLE.w, NAVY = ROLE.given;

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
export const Card: React.FC<{x: number; y: number; w: number; at?: number; out?: number; border?: string; children: React.ReactNode; pad?: string}> = ({x, y, w, at = -30, out, border = INK, children, pad}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{...card, border: `3px solid ${border}`, padding: pad ?? card.padding}}>{children}</div>
	</Enter>
);
export const Line: React.FC<{children: React.ReactNode; size?: number; color?: string; at?: number; weight?: number; mt?: number; out?: number}> = ({children, size = 34, color = INK, at, weight = 800, mt = 4, out}) => {
	const f = useCurrentFrame();
	const o = (at === undefined ? 1 : prog(f, at, 12)) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (out !== undefined && f >= out + 10) return null;
	if (at !== undefined && f < at) return null;
	return <div style={{...DISPLAY(size, color, weight), whiteSpace: 'normal', marginTop: mt, opacity: o}}>{children}</div>;
};
export const Boxed: React.FC<{color?: string; size?: number; at?: number; children: React.ReactNode}> = ({color = INK, size = TYPE.working, at = -30, children}) => {
	const b = prog(useCurrentFrame(), at, 12);
	return <div style={{display: 'inline-block', background: CARD, border: `5px solid ${b > 0 ? color : 'transparent'}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, INK)}}>{children}</div>;
};

// ---------------------------------------------------------------- the car plate (top view, nose to +x)
const CAR_SRC = 'assets/physics/phys-y11-car-top-v1.png';
export const CAR_PLATES = [CAR_SRC, 'assets/physics/phys-y11-car-top-blue-v1.png', 'assets/physics/phys-y11-car-top-yellow-v1.png', 'assets/physics/phys-y11-dashboard-cluster-v1.png', 'assets/physics/phys-y11-steel-ball-v1.png'];
/** The car plate centred at (x, y), `len` px long, heading `deg` (maths sense). */
export const CarSvg: React.FC<{x: number; y: number; len: number; deg: number; src?: string}> = ({x, y, len, deg, src = CAR_SRC}) => {
	const s = len / 1311;
	return <g transform={`rotate(${-deg} ${x} ${y})`}><image href={staticFile(src)} x={x - 800 * s} y={y - 400 * s} width={1600 * s} height={800 * s} preserveAspectRatio="none" /></g>;
};
/** The car's state on the 50 m track at physical time t (s), from the field-motion run, in frame px. */
export const carAt = (cx: number, cy: number, ppm: number, t: number) => {
	const tt = ((t % (T_CAR * 4)) + T_CAR * 4) % (T_CAR * 4);
	const s = stateAt(CAR_RUN, tt);
	return {x: cx + s.x * ppm, y: cy - s.y * ppm, vx: s.vx, vy: s.vy, ax: s.ax, ay: s.ay, speed: s.speed, deg: (Math.atan2(s.vy, s.vx) * 180) / Math.PI, ang: (Math.atan2(s.y, s.x) * 180) / Math.PI};
};
/** The circular track (a grey road ring) of radius R px about (cx, cy). */
export const Track: React.FC<{cx: number; cy: number; R: number; w?: number; glow?: number}> = ({cx, cy, R, w = 64, glow = 0}) => (
	<g>
		<circle cx={cx} cy={cy} r={R - w / 2} fill="#e7dfcd" />
		<circle cx={cx} cy={cy} r={R} fill="none" stroke="#d9d3c6" strokeWidth={w} />
		<circle cx={cx} cy={cy} r={R + w / 2} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
		<circle cx={cx} cy={cy} r={R - w / 2} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
		<circle cx={cx} cy={cy} r={R} fill="none" stroke={CARD} strokeWidth={3} strokeDasharray="16 16" />
		{glow > 0.01 ? <circle cx={cx} cy={cy} r={R} fill="none" stroke={NAVY.stroke} strokeWidth={8} opacity={glow} /> : null}
		<circle cx={cx} cy={cy} r={8} fill={NAVY.stroke} />
	</g>
);
/** The car on its track at time t, with optional velocity and acceleration arrows (from the run). */
export const CarOnTrack: React.FC<{cx: number; cy: number; R: number; t: number; len?: number; vArrow?: number; aArrow?: number; vk?: number; ak?: number}> = ({cx, cy, R, t, len = 120, vArrow, aArrow, vk = 4, ak = 7}) => {
	const f = useCurrentFrame();
	const c = carAt(cx, cy, R / R_CAR, t);
	return (
		<g>
			<CarSvg x={c.x} y={c.y} len={len} deg={c.deg} />
			{vArrow !== undefined ? <VecArrow x={c.x} y={c.y} dx={c.vx * vk} dy={-c.vy * vk} color={VEL.stroke} width={7} at={vArrow} head={22} /> : null}
			{aArrow !== undefined && f >= aArrow ? <VecArrow x={c.x} y={c.y} dx={c.ax * ak} dy={-c.ay * ak} color={ACC.stroke} width={7} at={aArrow} head={22} /> : null}
		</g>
	);
};
export {TRACK};
