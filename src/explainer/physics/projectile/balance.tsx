// Balance kit for the Module 5 torque lessons (v10 balancing torques, and the v10 to v11 handoff), in the same
// visual system as board.tsx and turning.tsx. New file (23 November 2026); no existing kit file changed.
// - Seesaw: the two-layer seesaw plates (plank and stand on one canvas, hinge (1086, 319), plank top 26 px
//   above the hinge, plank ends x 219 and 1955 native = 3.0 m), uniform scale only; the plank tilts about the
//   hinge by `tilt` degrees (maths sense: positive is anticlockwise, the left end goes down).
// - BalanceScale: two bars from a zero line, blue (anticlockwise) to the left and orange (clockwise) to the
//   right, lengths from the torque sizes, with a signed-sum readout.
// - TopSlew: a coded top view of a jib turning about a mast at a steady rate (tip trace, tangent velocity arrows).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog} from '../../kit';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TRACK, TYPE} from '../../shared/tokens';
import {DISPLAY, ROLE, VecArrow} from './board';
import {TURN, polar, rad, vec} from './turning';

// ---------------------------------------------------------------- seesaw (side view)
const PLANK_SRC = 'assets/physics/y12p-seesaw-plank-v1.png', STAND_SRC = 'assets/physics/y12p-seesaw-stand-v1.png';
const SS_CANVAS: [number, number] = [2172, 724], SS_HINGE: [number, number] = [1086, 319], SS_TOP = 26, SS_PPM = 1736 / 3;
export const SEESAW_PLATES = [PLANK_SRC, STAND_SRC];
/** Geometry of a seesaw whose hinge is at (hx, hy) and whose 3.0 m plank is `w` px long. */
export const seesawGeom = (hx: number, hy: number, w: number, tilt = 0) => {
	const s = w / 1736, ppm = SS_PPM * s;
	const c = Math.cos(rad(tilt)), sn = Math.sin(rad(tilt));
	/** Frame point on the plank's top line at x metres from the pivot (positive to the right), lifted by `up` px. */
	const at = (x: number, up = 0): [number, number] => { const lx = x * ppm, ly = -SS_TOP * s - up; return [hx + lx * c + ly * sn, hy - lx * sn + ly * c]; };
	return {s, ppm, at, left: hx - 868 * s, right: hx + 868 * s, base: hy + (557 - SS_HINGE[1]) * s, topY: hy - SS_TOP * s};
};
export const SeesawSvg: React.FC<{hx: number; hy: number; w: number; tilt?: number; opacity?: number}> = ({hx, hy, w, tilt = 0, opacity = 1}) => {
	const s = w / 1736;
	const x = hx - SS_HINGE[0] * s, y = hy - SS_HINGE[1] * s, W = SS_CANVAS[0] * s, H = SS_CANVAS[1] * s;
	return (
		<g opacity={opacity}>
			<image href={staticFile(STAND_SRC)} x={x} y={y} width={W} height={H} preserveAspectRatio="none" />
			<g transform={`rotate(${-tilt} ${hx} ${hy})`}><image href={staticFile(PLANK_SRC)} x={x} y={y} width={W} height={H} preserveAspectRatio="none" /></g>
		</g>
	);
};

// ---------------------------------------------------------------- torque balance scale
/**
 * Balance scale: a vertical zero line at the card's centre, a blue bar to the left (anticlockwise size) and an
 * orange bar to the right (clockwise size), `k` px per unit. `dashed` draws a bar as an outline of unknown length.
 */
export const BalanceScale: React.FC<{x: number; y: number; w: number; acw: number; cw: number; k: number; at?: number; out?: number; net?: React.ReactNode; title?: React.ReactNode; dashedCw?: boolean; dashedAcw?: boolean; h?: number}> = ({x, y, w, acw, cw, k, at = -30, out, net, title = 'torque balance', dashedCw = false, dashedAcw = false, h = 210}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.001) return null;
	const cx = w / 2, by = 92, bh = 40;
	const la = Math.min(cx - 20, acw * k), lc = Math.min(cx - 20, cw * k);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `2.5px solid rgba(60,45,20,0.12)`}}>
			<div style={{position: 'absolute', left: 18, top: 8, ...DISPLAY(TYPE.label, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{title}</div>
			<div style={{position: 'absolute', left: 18, top: 44, ...DISPLAY(TYPE.label, ROLE.y.ink, 800)}}>anticlockwise</div>
			<div style={{position: 'absolute', right: 18, top: 44, ...DISPLAY(TYPE.label, ROLE.v.ink, 800)}}>clockwise</div>
			<svg width={w} height={h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
				<rect x={20} y={by} width={w - 40} height={bh} rx={8} fill={TRACK} />
				{la > 0.5 ? <rect x={cx - la} y={by} width={la} height={bh} rx={6} fill={dashedAcw ? 'none' : ROLE.y.stroke} stroke={ROLE.y.stroke} strokeWidth={dashedAcw ? 4 : 0} strokeDasharray={dashedAcw ? '10 7' : undefined} /> : null}
				{lc > 0.5 ? <rect x={cx} y={by} width={lc} height={bh} rx={6} fill={dashedCw ? 'none' : ROLE.v.stroke} stroke={ROLE.v.stroke} strokeWidth={dashedCw ? 4 : 0} strokeDasharray={dashedCw ? '10 7' : undefined} /> : null}
				<line x1={cx} x2={cx} y1={by - 14} y2={by + bh + 14} stroke={INK} strokeWidth={4} />
				<text x={cx} y={by + bh + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26}} fill={INK_SOFT}>0</text>
			</svg>
			{net !== undefined ? <div style={{position: 'absolute', left: 0, width: w, top: by + bh + 50, textAlign: 'center', ...DISPLAY(TYPE.support + 4, INK, 800)}}>{net}</div> : null}
		</div>
	);
};

// ---------------------------------------------------------------- top view of a slewing jib
/**
 * Coded top view: the mast as a navy dot at (cx, cy), the jib as a line to a tip dot on a thin circle of radius
 * R, at `angle` degrees (maths sense). `trace` (degrees swept so far) draws the tip's path; `arrows` lists the
 * angles at which a teal velocity arrow of length `vLen` is drawn tangent to the circle (anticlockwise motion).
 */
export const TopSlew: React.FC<{cx: number; cy: number; R: number; angle: number; trace?: number; arrows?: readonly {deg: number; at: number}[]; vLen?: number; circleAt?: number; jib?: boolean; fill?: string}> = ({cx, cy, R, angle, trace = 0, arrows = [], vLen = 130, circleAt = -30, jib = true, fill = 'none'}) => {
	const f = useCurrentFrame();
	const [tx, ty] = polar(cx, cy, R, angle);
	const tr = Math.min(359.9, trace);
	const [sx, sy] = polar(cx, cy, R, angle - tr);
	return (
		<g>
			<circle cx={cx} cy={cy} r={R} fill={fill} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 8" opacity={prog(f, circleAt, 14)} />
			{tr > 0.5 ? <path d={`M${sx},${sy} A${R},${R} 0 ${tr > 180 ? 1 : 0},0 ${tx},${ty}`} fill="none" stroke={ROLE.x.stroke} strokeWidth={5} strokeLinecap="round" /> : null}
			{jib ? <line x1={cx} y1={cy} x2={tx} y2={ty} stroke={INK} strokeWidth={14} strokeLinecap="round" /> : null}
			{jib ? <line x1={cx} y1={cy} x2={cx + (cx - tx) * 0.2} y2={cy + (cy - ty) * 0.2} stroke={INK} strokeWidth={18} strokeLinecap="round" /> : null}
			{arrows.map((a, i) => { const [ax, ay] = polar(cx, cy, R, a.deg); const [dx, dy] = vec(vLen, a.deg + 90); return <VecArrow key={i} x={ax} y={ay} dx={dx} dy={dy} color={ROLE.x.stroke} width={7} at={a.at} head={22} />; })}
			<circle cx={tx} cy={ty} r={12} fill={ROLE.x.stroke} stroke={CARD} strokeWidth={3} />
			<circle cx={cx} cy={cy} r={16} fill={CARD} stroke={TURN.r.stroke} strokeWidth={5} />
			<circle cx={cx} cy={cy} r={7} fill={TURN.r.stroke} />
		</g>
	);
};
/** Four velocity arrows copied tail to tail from (x, y) at the given directions (degrees), equal length. */
export const TailToTail: React.FC<{x: number; y: number; dirs: readonly number[]; len: number; at: number; stagger?: number}> = ({x, y, dirs, len, at, stagger = 6}) => (
	<g>
		{dirs.map((d, i) => { const [dx, dy] = vec(len, d); return <VecArrow key={i} x={x} y={y} dx={dx} dy={dy} color={ROLE.x.stroke} width={7} at={at + i * stagger} head={22} />; })}
		<circle cx={x} cy={y} r={7} fill={INK} opacity={prog(useCurrentFrame(), at, 10)} />
	</g>
);
export {DrawPath};
