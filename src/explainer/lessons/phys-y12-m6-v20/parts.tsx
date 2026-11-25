// Lesson parts for phys-y12-m6-v20: the pendulum rig of v19's handoff (painted stand, boss and copper pendulum over a
// field region of crosses), the damped swing (the amplitude steps down at each pass through the field), the plate
// close-up with the entry and exit swirls and their in-field segments, the upright tubes, energy bars, and v19's
// parts re-exported.
// Colour roles (design, Revision 2): magnetic field crosses slate; eddy currents rose; forces amber; motion arrows
// amber outline; electric field blue (handoff only); energy bars kinetic amber, electrical orange, heat red,
// gravitational grey; total mechanical energy navy outline; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {TONES} from '../../shared/tokens';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {FieldRegion, Pendulum, PivotStand, Swirl, pendGeom} from '../../physics/electromagnetism/eddy';
import {HEAT} from '../phys-y12-m6-v17/parts';
import {sci} from '../phys-y12-m6-v01/parts';
import {AMBER, CardRect, FLUX, GREY, Lbl, MoveArrow, NAVY, ORANGE, ROSE, Strip, V19_PLATES, fx, turned} from '../phys-y12-m6-v19/parts';

export {AMBER, CardRect, FLUX, GREY, HEAT, Lbl, MoveArrow, NAVY, ORANGE, ROSE, Strip, fx, sci, turned};
export const BLUE = TONES.blue;
export const V20_PLATES = [...V19_PLATES];
type Pt = [number, number];

// ---------------------------------------------------------------- the damped swing
/**
 * A pendulum swing of amplitude a0 (degrees) and period T (frames) from frame `from`, starting at -a0 (a turning
 * point). With `keep` < 1 the amplitude steps down by that factor at each pass through the bottom (inside the field),
 * so the swing stays continuous. Returns the angle, the pass count, the total energy fraction and the kinetic part.
 */
export const swingAt = (f: number, from: number, a0: number, T: number, keep: number) => {
	const t = Math.max(0, f - from);
	const w = (2 * Math.PI) / T;
	const passes = Math.floor((w * t + Math.PI / 2) / Math.PI);
	const a = a0 * Math.pow(keep, passes);
	const theta = -a * Math.cos(w * t);
	const E = Math.pow(keep, 2 * passes);
	return {theta, passes, E, K: E * Math.sin(w * t) ** 2, U: E * Math.cos(w * t) ** 2, swing: Math.floor(t / T) + 1};
};

/** One rig: stand, boss, field region (optional) and the pendulum. */
export const Rig: React.FC<{px: number; py: number; s: number; deg: number; region?: {x: number; y: number; w: number; h: number}; field?: number; slotted?: boolean; bossW?: number; baseY: number; tint?: number; ledge?: number}> = ({px, py, s, deg, region, field = 1, slotted = false, bossW = 190, baseY, tint = 0, ledge = 0}) => {
	const g = pendGeom(px, py, s, deg);
	return (
		<g>
			<PivotStand px={px} py={py} bossW={bossW * (s / 0.48)} baseY={baseY} />
			{region ? <FieldRegion x={region.x} y={region.y} w={region.w} h={region.h} color={FLUX} opacity={field} step={56 * (s / 0.48)} size={11 * Math.min(1, s / 0.48 + 0.2)} /> : null}
			<Pendulum px={px} py={py} s={s} deg={deg} slotted={slotted} tint={tint} />
			{ledge > 0.001 ? <line x1={g.c[0] - g.hw - 14} y1={g.c[1] - g.hh} x2={g.c[0] - g.hw - 14} y2={g.c[1] + g.hh} stroke="#6f6a62" strokeWidth={7} strokeLinecap="round" opacity={ledge} /> : null}
		</g>
	);
};

// ---------------------------------------------------------------- the plate close-up (scenes 2 and 3)
/** The close-up: a copper plate (painted, large) straddling a narrower field region; swirls at the two boundaries. */
export const CU = {cx: 1000, cy: 560, plateW: 600, region: {x: 820, y: 250, w: 360, h: 620}};
export const cuScale = CU.plateW / 302;
/** Swirl centres for a plate centre x: entry at the region's left boundary, exit at its right boundary. */
export const swirlAt = {entry: [CU.region.x, CU.cy] as Pt, exit: [CU.region.x + CU.region.w, CU.cy] as Pt, rx: 105, ry: 150};
export const CloseUp: React.FC<{plateX: number; field?: number; loops?: number; entry?: number; exit?: number; seg?: number; forces?: number; phase?: number; pulseIn?: number; pulseOut?: number}> = ({plateX, field = 1, loops = 0, entry = 0, exit = 0, seg = 0, forces = 0, phase = 0, pulseIn = 0, pulseOut = 0}) => {
	const s = cuScale;
	const py = CU.cy - (1162 - 247) * s;
	const R = CU.region;
	const e = swirlAt.entry, x = swirlAt.exit;
	const segIn: [Pt, Pt] = [[e[0] + swirlAt.rx, e[1] + 100], [e[0] + swirlAt.rx, e[1] - 100]];
	const segOut: [Pt, Pt] = [[x[0] - swirlAt.rx, x[1] + 100], [x[0] - swirlAt.rx, x[1] - 100]];
	return (
		<g>
			<clipPath id="v20-cu-clip"><rect x={0} y={175} width={1920} height={905} /></clipPath>
			<g clipPath="url(#v20-cu-clip)"><Pendulum px={plateX} py={py} s={s} deg={0} /></g>
			{loops > 0.001 ? <g opacity={loops}>{[[-190, -150, 70], [190, 160, 60], [-60, 180, 55], [110, -170, 50], [0, 20, 80]].map(([dx, dy, r], i) => <circle key={i} cx={plateX + dx} cy={CU.cy + dy} r={r} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 8" />)}</g> : null}
			<FieldRegion x={R.x} y={R.y} w={R.w} h={R.h} color={FLUX} opacity={field} fill="transparent" />
			<Swirl cx={e[0]} cy={e[1]} rx={swirlAt.rx * (1 + 0.12 * pulseIn)} ry={swirlAt.ry * (1 + 0.12 * pulseIn)} sense={1} color={ROSE.stroke} phase={phase} opacity={entry} width={6 + 3 * pulseIn} />
			<Swirl cx={x[0]} cy={x[1]} rx={swirlAt.rx * (1 + 0.12 * pulseOut)} ry={swirlAt.ry * (1 + 0.12 * pulseOut)} sense={-1} color={ROSE.stroke} phase={phase} opacity={exit} width={6 + 3 * pulseOut} />
			{seg > 0.001 ? <g opacity={seg}>
				<line x1={segIn[0][0]} y1={segIn[0][1]} x2={segIn[1][0]} y2={segIn[1][1]} stroke={ROSE.stroke} strokeWidth={16} strokeLinecap="round" opacity={0.45} />
				<line x1={segOut[0][0]} y1={segOut[0][1]} x2={segOut[1][0]} y2={segOut[1][1]} stroke={ROSE.stroke} strokeWidth={16} strokeLinecap="round" opacity={0.45} />
			</g> : null}
			{forces > 0.001 ? <g opacity={forces}>
				<Arrow2 from={[segIn[0][0], CU.cy]} to={[segIn[0][0] - 170, CU.cy]} color={AMBER.stroke} width={11} head={32} />
				<Arrow2 from={[segOut[0][0], CU.cy]} to={[segOut[0][0] - 170, CU.cy]} color={AMBER.stroke} width={11} head={32} />
			</g> : null}
		</g>
	);
};

// ---------------------------------------------------------------- energy bars
/** A vertical bar from base y upwards: height h (px), colour, outline only when `outline`. */
export const VBar: React.FC<{x: number; base: number; w: number; h: number; color: string; outline?: boolean; opacity?: number}> = ({x, base, w, h, color, outline = false, opacity = 1}) => (
	opacity <= 0.001 || h < 0.5 ? null : <rect x={x} y={base - h} width={w} height={h} rx={6} fill={outline ? 'none' : color} stroke={outline ? color : 'none'} strokeWidth={outline ? 5 : 0} opacity={opacity} />
);
