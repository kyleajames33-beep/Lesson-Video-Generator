// Lesson parts for phys-y12-m7-v02: the painted plane mirror placed by its glass centre and turned to face a given
// direction, the painted toothed wheel turning, a small orbit diagram, an illustrative data graph, and v01's parts
// re-exported.
// Colour key (design, Revision 2): light beams and pulses pale amber; timers and delays navy; distances orange
// brackets; the wheel's rotation rate and the gap-to-tooth time rose; measured historical values grey chips; the exact
// defined c in a navy box; worked results orange in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {ANCHOR, Disc, LPlate, MIRROR, WHEEL, placeByAnchor} from '../../physics/light/plates';
import {AMBER, BLUE, CardRect, FLUX, GREY, Givens, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, TimerBox, V01_PLATES, fx, sci} from '../phys-y12-m7-v01/parts';

export {AMBER, BLUE, CardRect, FLUX, GREY, Givens, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, TimerBox, fx, sci};
export const V02_PLATES = [...V01_PLATES];
type Pt = [number, number];

/** The plane mirror with its glass centre at (x, y), visible width w, its reflecting face towards direction `n`. */
export const MirrorAt: React.FC<{x: number; y: number; w: number; n: Pt; opacity?: number}> = ({x, y, w, n, opacity = 1}) => {
	const gx = (ANCHOR.mirrorGlassX[0] + ANCHOR.mirrorGlassX[1]) / 2;
	const p = placeByAnchor(MIRROR, gx, ANCHOR.mirrorGlassY, x, y, w);
	const deg = (Math.atan2(-n[0], n[1]) * 180) / Math.PI;
	return <LPlate spec={MIRROR} p={p} opacity={opacity} rotate={{deg, px: x, py: y}} />;
};
/** Reflect direction d in a mirror with unit normal n. */
export const reflect = (d: Pt, n: Pt): Pt => { const k = 2 * (d[0] * n[0] + d[1] * n[1]); return [d[0] - k * n[0], d[1] - k * n[1]]; };
export const unit = (v: Pt): Pt => { const L = Math.hypot(v[0], v[1]) || 1; return [v[0] / L, v[1] / L]; };
export const rot = (v: Pt, deg: number): Pt => { const a = (deg * Math.PI) / 180; return [v[0] * Math.cos(a) - v[1] * Math.sin(a), v[0] * Math.sin(a) + v[1] * Math.cos(a)]; };

/** The toothed wheel plate (centre, visible diameter) turned by `deg`. */
export const WheelAt: React.FC<{cx: number; cy: number; d: number; deg: number; opacity?: number}> = ({cx, cy, d, deg, opacity = 1}) => <Disc spec={WHEEL} cx={cx} cy={cy} d={d} spin={deg} opacity={opacity} />;
/** Screen radius of the wheel's rim for a visible diameter d. */
export const rimR = (d: number) => (d / (WHEEL.box[2] - WHEEL.box[0])) * ANCHOR.wheelRim;

/** A small framed orbit diagram (Sun, Earth's orbit, Jupiter far right) for icon rows. */
export const OrbitIcon: React.FC<{x: number; y: number; w?: number; h?: number}> = ({x, y, w = 200, h = 120}) => (
	<g>
		<rect x={x} y={y} width={w} height={h} rx={12} fill={CARD} stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
		<circle cx={x + w * 0.33} cy={y + h / 2} r={h * 0.3} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="6 5" />
		<circle cx={x + w * 0.33} cy={y + h / 2} r={11} fill="#f2b234" />
		<circle cx={x + w * 0.33 + h * 0.3} cy={y + h / 2} r={6} fill={BLUE.stroke} />
		<circle cx={x + w * 0.85} cy={y + h / 2} r={13} fill="#c99a6a" />
	</g>
);
/** An illustrative data graph: points and a straight line through the origin. */
export const DataGraph: React.FC<{x: number; y: number; w: number; h: number; pts: readonly Pt[]; xMax: number; yMax: number; xLabel: string; yLabel: string; grow?: number; color?: string}> = ({x, y, w, h, pts, xMax, yMax, xLabel, yLabel, grow = 1, color = NAVY.stroke}) => {
	const X = (v: number) => x + (v / xMax) * w, Y = (v: number) => y + h - (v / yMax) * h;
	const n = Math.round(pts.length * Math.max(0, Math.min(1, grow)));
	const k = pts.reduce((s, p) => s + p[0] * p[1], 0) / pts.reduce((s, p) => s + p[0] * p[0], 0);
	return (
		<g>
			<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y + h} x2={x} y2={y} stroke={INK} strokeWidth={3} />
			<text x={x + w / 2} y={y + h + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK}}>{xLabel}</text>
			<text x={x - 16} y={y - 14} textAnchor="start" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK}}>{yLabel}</text>
			{pts.slice(0, n).map((p, i) => <circle key={i} cx={X(p[0])} cy={Y(p[1])} r={8} fill={color} />)}
			{n >= pts.length ? <line x1={X(0)} y1={Y(0)} x2={X(xMax)} y2={Y(k * xMax)} stroke={color} strokeWidth={3} strokeDasharray="10 7" /> : null}
		</g>
	);
};
export const fmtNs = (s: number) => `${fx(s * 1e9, 0)} ns`;
export const fmtUs = (s: number) => `${fx(s * 1e6, 0)} μs`;
