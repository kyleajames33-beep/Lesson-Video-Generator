// Lesson parts for phys-y12-m5-v08: the lab bench of last time's final frame (800 px per metre, bench top at
// y 860, ramp exit at x 560; the kit's ramp rig with the painted stand, boss, ramp, ball and paper), a coded
// release gate, a camera (uniform scale and shift of the whole stage), the paper strip with landing marks, and
// the R against h (or √h) graph with the morph between them. Plates at uniform scale only.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {ROLE} from '../../physics/projectile/board';
import {Sheet, rampGeom} from '../../physics/projectile/ramp';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {LAB} from '../phys-y12-m5-v07/s3';
import {SHIFT, UX, fallT} from './common';

export {Lbl, LAB};

/** Ramp geometry with the exit `h` metres above the bench. */
export const rig = (h: number) => rampGeom(LAB.exitX, LAB.benchY - h * LAB.ppm, LAB.rw);
/** Landing x (ball centre) for a horizontal launch from height h at the model speed. */
export const landX = (h: number, ux = UX) => LAB.exitX + ux * fallT(h) * LAB.ppm;

/** Camera: a uniform zoom k about the frame point (fx, fy) moved to (tx, ty). */
export type Cam = {k: number; fx: number; fy: number; tx: number; ty: number};
export const ID_CAM: Cam = {k: 1, fx: 0, fy: 0, tx: 0, ty: 0};
export const camMix = (a: Cam, b: Cam, p: number): Cam => ({k: a.k + (b.k - a.k) * p, fx: a.fx + (b.fx - a.fx) * p, fy: a.fy + (b.fy - a.fy) * p, tx: a.tx + (b.tx - a.tx) * p, ty: a.ty + (b.ty - a.ty) * p});
export const camT = (c: Cam) => `translate(${c.tx} ${c.ty}) scale(${c.k}) translate(${-c.fx} ${-c.fy})`;
export const camP = (c: Cam, x: number, y: number): [number, number] => [c.tx + (x - c.fx) * c.k, c.ty + (y - c.fy) * c.k];

/** The coded release gate: a hinged stop just below the ball's seat on the track; it swings up by `lift` (0..1). */
export const ReleaseGate: React.FC<{h: number; lift?: number; mark?: boolean}> = ({h, lift = 0, mark = true}) => {
	const g = rig(h);
	const [x, y] = g.at(0.07);
	const [x2, y2] = g.at(0.1);
	const ang = Math.atan2(y2 - y, x2 - x);
	const nx = Math.sin(ang), ny = -Math.cos(ang);
	const base: [number, number] = [x + nx * g.r * 0.95, y + ny * g.r * 0.95];
	const L = g.r * 1.9;
	const a = -lift * 1.2;
	const dx = -nx * Math.cos(a) + Math.cos(ang) * Math.sin(-a), dy = -ny * Math.cos(a) + Math.sin(ang) * Math.sin(-a);
	return (
		<g>
			{mark ? <line x1={base[0] + nx * 8} y1={base[1] + ny * 8} x2={base[0] + nx * 26} y2={base[1] + ny * 26} stroke={ROLE.given.stroke} strokeWidth={4} /> : null}
			<line x1={base[0]} y1={base[1]} x2={base[0] + dx * L} y2={base[1] + dy * L} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<circle cx={base[0]} cy={base[1]} r={5} fill={CARD} stroke={INK} strokeWidth={3} />
		</g>
	);
};

/** A dark landing mark (carbon dot) on the paper at frame x on the bench. */
export const Dot: React.FC<{x: number; y?: number; at?: number; r?: number; color?: string}> = ({x, y = LAB.benchY - 4, at = -30, r = 7, color = '#1c2233'}) => {
	const p = prog(useCurrentFrame(), at, 8);
	return p > 0 ? <circle cx={x} cy={y} r={r * (0.4 + 0.6 * p)} fill={color} opacity={p} /> : null;
};

/**
 * A paper strip (the white sheet plate, uniform scale) with a teal distance scale from `a` to `b` metres along
 * its middle, marks at given distances and an optional spread band and mean tick. Frame coordinates.
 */
export const Strip: React.FC<{x: number; y: number; w: number; a: number; b: number; step?: number; marks: readonly {v: number; at?: number; color?: string}[]; band?: {lo: number; hi: number; at: number; color?: string}; mean?: {v: number; at: number; color?: string}; ticks?: React.ReactNode; labels?: boolean}> = ({x, y, w, a, b, step = 0.01, marks, band, mean, ticks, labels = true}) => {
	const f = useCurrentFrame();
	const sx = (v: number) => x + ((v - a) / (b - a)) * w;
	const t: React.ReactNode[] = [];
	const n = Math.round((b - a) / step);
	for (let i = 0; i <= n; i++) {
		const v = a + i * step;
		const big = Math.abs(v * 100 - Math.round(v * 20) * 5) < 1e-6;
		t.push(<line key={i} x1={sx(v)} x2={sx(v)} y1={y + 40} y2={y + 40 + (big ? 22 : 12)} stroke={ROLE.x.stroke} strokeWidth={big ? 3.5 : 2} />);
		if (big && labels) t.push(<text key={'l' + i} x={sx(v)} y={y + 96} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 30}} fill={ROLE.x.ink}>{v.toFixed(2)}</text>);
	}
	const bo = band ? prog(f, band.at, 14) : 0;
	return (
		<g>
			<Sheet x={x + w / 2} y={y} w={w + 120} />
			<line x1={sx(a)} x2={sx(b)} y1={y + 40} y2={y + 40} stroke={ROLE.x.stroke} strokeWidth={3.5} />
			{t}
			{band && bo > 0 ? <rect x={sx(band.lo) - 12} y={y - 34} width={sx(band.hi) - sx(band.lo) + 24} height={56} rx={10} fill={band.color ?? 'rgba(107,99,88,0.22)'} stroke={INK_SOFT} strokeWidth={2.5} opacity={bo} /> : null}
			{marks.map((m, i) => <Dot key={i} x={sx(m.v)} y={y - 6} at={m.at} r={9} color={m.color} />)}
			{mean && f >= mean.at ? <line x1={sx(mean.v)} x2={sx(mean.v)} y1={y - 52} y2={y + 34} stroke={mean.color ?? ROLE.given.stroke} strokeWidth={5} opacity={prog(f, mean.at, 10)} /> : null}
			{ticks}
		</g>
	);
};
export const stripX = (x: number, w: number, a: number, b: number) => (v: number) => x + ((v - a) / (b - a)) * w;

/** Graph geometry: x from 0 to xMax, R from 0 to yMax, in a box at (x, y, w, h). */
export const grGeom = (x: number, y: number, w: number, h: number, xMax = 0.8, yMax = 0.8) => {
	const left = x + 110, right = x + w - 30, top = y + 60, bottom = y + h - 90;
	return {left, right, top, bottom, gx: (v: number) => left + (v / xMax) * (right - left), gy: (v: number) => bottom - (v / yMax) * (bottom - top)};
};
/** The graph frame: axes, gridlines every 0.1, axis titles. */
export const GraphFrame: React.FC<{x: number; y: number; w: number; h: number; xTitle: React.ReactNode; yTitle?: string; shade?: [number, number]; shadeAt?: number}> = ({x, y, w, h, xTitle, yTitle = 'R (m)', shade, shadeAt = -30}) => {
	const f = useCurrentFrame();
	const g = grGeom(x, y, w, h);
	const tick = {fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: TYPE.label} as const;
	const vs = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];
	const so = shade ? prog(f, shadeAt, 14) : 0;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
			{shade && so > 0 ? <g opacity={so}><rect x={g.left} y={g.top} width={g.gx(shade[0]) - g.left} height={g.bottom - g.top} fill="rgba(107,99,88,0.16)" /><rect x={g.gx(shade[1])} y={g.top} width={g.right - g.gx(shade[1])} height={g.bottom - g.top} fill="rgba(107,99,88,0.16)" /></g> : null}
			{vs.map(v => <g key={'x' + v}><line x1={g.gx(v)} x2={g.gx(v)} y1={g.top} y2={g.bottom} stroke="#e4dccd" strokeWidth={2} /><text x={g.gx(v)} y={g.bottom + 34} textAnchor="middle" style={tick} fill={INK}>{v.toFixed(1)}</text></g>)}
			{vs.map(v => <g key={'y' + v}><line x1={g.left} x2={g.right} y1={g.gy(v)} y2={g.gy(v)} stroke="#e4dccd" strokeWidth={2} /><text x={g.left - 12} y={g.gy(v) + 9} textAnchor="end" style={tick} fill={INK}>{v.toFixed(1)}</text></g>)}
			<path d={`M${g.left},${g.top - 14} V${g.bottom} H${g.right + 12}`} fill="none" stroke={INK} strokeWidth={3.5} />
			<text x={g.left + 10} y={g.top - 22} style={{...tick, fontWeight: 800}} fill={ROLE.x.ink}>{yTitle}</text>
			<foreignObject x={g.right - 400} y={g.bottom + 44} width={400} height={44}><div style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30, color: ROLE.y.ink, textAlign: 'right'}}>{xTitle}</div></foreignObject>
		</g>
	);
};

/** The spanner on a stuck nut (top view): the nut plate and spanner plates at one scale; force point returned. */
const SPAN_SRC = 'assets/physics/y12p-spanner-v1.png', NUT_SRC = 'assets/physics/y12p-nut-plate-v1.png';
const SPAN_RING: [number, number] = [330.1, 363.69], SPAN_FORCE: [number, number] = [1710, 363.69];
const NUT_C: [number, number] = [627, 626];
export const SPANNER_PLATES = [SPAN_SRC, NUT_SRC];
export const spannerGeom = (cx: number, cy: number, armPx: number) => {
	const s = armPx / (SPAN_FORCE[0] - SPAN_RING[0]);
	return {s, force: [cx + armPx, cy] as [number, number]};
};
export const SpannerNut: React.FC<{cx: number; cy: number; armPx: number}> = ({cx, cy, armPx}) => {
	const {s} = spannerGeom(cx, cy, armPx);
	return (
		<g>
			<image href={staticFile(NUT_SRC)} x={cx - NUT_C[0] * s} y={cy - NUT_C[1] * s} width={1254 * s} height={1254 * s} preserveAspectRatio="none" />
			<image href={staticFile(SPAN_SRC)} x={cx - SPAN_RING[0] * s} y={cy - SPAN_RING[1] * s} width={2172 * s} height={724 * s} preserveAspectRatio="none" />
		</g>
	);
};

export {SHIFT};
