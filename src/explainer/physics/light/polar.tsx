// Polarisation kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v07's handoff and
// phys-y12-m7-v08). Course-neutral: colours, labels and numbers come from the lesson.
// - FilterFace: a coded polarising filter seen face on (grey disc, transmission-axis line at an angle from vertical).
// - EArrow: a double-headed electric-field arrow through a centre at an angle from vertical (half-length len).
// - polarGeom / PolarBench: the painted optical bench with a source (the filament lamp, or the laser module lifted on a
//   coded block as in the bench kit), one or more painted slide holders holding coded filter discs in their clear
//   windows, and an optional painted light sensor, all at one uniform carrier scale (brief 191 bench fit). The lamp and
//   the sensor are scaled so that their feet sit on the rail and their filament or window sits on the beam line.
// - IBar: a vertical intensity bar on a baseline with a value label.
// Plate anchors (native pixels): lamp filament (712, 250), foot y 987; light sensor window (431, 572) facing left,
// foot y 1128; slide holder window centre (542, 470), foot y 1152; laser aperture (1100, 318), foot y 720.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';
import {LAMP, LASER, LPlate, SENSOR, placeByAnchor} from './plates';
import type {Place} from './plates';
import {BENCH, BENCH_ANCHOR, BENCH_GREY, HOLDER} from './bench';

type Pt = [number, number];
const RAD = Math.PI / 180;

export const FilterFace: React.FC<{cx: number; cy: number; r: number; axis: number; axisColor: string; opacity?: number; width?: number}> = ({cx, cy, r, axis, axisColor, opacity = 1, width = 6}) => {
	if (opacity <= 0.001) return null;
	const dx = Math.sin(axis * RAD) * r * 0.84, dy = -Math.cos(axis * RAD) * r * 0.84;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill="#9b978f" stroke="#5c5a55" strokeWidth={Math.max(2, r * 0.06)} />
			<circle cx={cx} cy={cy} r={r * 0.86} fill="#b8b4ac" opacity={0.65} />
			<line x1={cx - dx} y1={cy - dy} x2={cx + dx} y2={cy + dy} stroke={axisColor} strokeWidth={width} strokeLinecap="round" />
		</g>
	);
};

/** Double-headed arrow through (cx, cy) at `deg` from vertical, half-length len (negative len flips nothing). */
export const EArrow: React.FC<{cx: number; cy: number; len: number; deg: number; color: string; width?: number; dash?: string; opacity?: number; head?: number; single?: boolean}> = ({cx, cy, len, deg, color, width = 7, dash, opacity = 1, head = 20, single = false}) => {
	if (opacity <= 0.001 || Math.abs(len) < 1) return null;
	const ux = Math.sin(deg * RAD), uy = -Math.cos(deg * RAD);
	const a: Pt = [cx - ux * len, cy - uy * len], b: Pt = [cx + ux * len, cy + uy * len];
	const tip = (p: Pt, s: number) => { const h = Math.min(head, Math.abs(len) * 0.6); const bx = p[0] - s * ux * h, by = p[1] - s * uy * h; return `M${p[0]},${p[1]} L${bx - uy * h * 0.55},${by + ux * h * 0.55} L${bx + uy * h * 0.55},${by - ux * h * 0.55} Z`; };
	const sg = Math.sign(len);
	return (
		<g opacity={opacity}>
			<line x1={single ? cx : a[0]} y1={single ? cy : a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round" />
			<path d={tip(b, sg)} fill={color} />
			{single ? null : <path d={tip(a, -sg)} fill={color} />}
		</g>
	);
};

/** Bench geometry: bench box (x, y, w), carrier scale g, source x (filament or aperture), holder window x positions and
 * an optional sensor window x. */
export type PolarAt = {x: number; y: number; w: number; g: number; src: number; holders: readonly number[]; sensor?: number; source: 'lamp' | 'laser'};
const FIT = {laser: 0.17193, holder: 0.22759};
export const polarGeom = (b: PolarAt) => {
	const sb = b.w / (BENCH.box[2] - BENCH.box[0]);
	const railY = b.y + (BENCH_ANCHOR.railY - BENCH.box[1]) * sb;
	const sH = FIT.holder * b.g;
	const beamY = railY - (BENCH_ANCHOR.holderFoot - BENCH_ANCHOR.winC[1]) * sH;
	const holders = b.holders.map(hx => placeByAnchor(HOLDER, BENCH_ANCHOR.winC[0], BENCH_ANCHOR.winC[1], hx, beamY, (HOLDER.box[2] - HOLDER.box[0]) * sH));
	const W = BENCH_ANCHOR.win;
	const windows = holders.map(p => ({x: p.x + (W[0] - HOLDER.box[0]) * sH, y: p.y + (W[1] - HOLDER.box[1]) * sH, w: (W[2] - W[0]) * sH, h: (W[3] - W[1]) * sH}));
	const lampS = (railY - beamY) / (LAMP.box[3] - 250);
	const lamp = placeByAnchor(LAMP, 712, 250, b.src, beamY, (LAMP.box[2] - LAMP.box[0]) * lampS);
	const sL = FIT.laser * b.g;
	const laser = placeByAnchor(LASER, BENCH_ANCHOR.laserAp[0], BENCH_ANCHOR.laserAp[1], b.src, beamY, (LASER.box[2] - LASER.box[0]) * sL);
	const laserFootY = beamY + (BENCH_ANCHOR.laserFoot - BENCH_ANCHOR.laserAp[1]) * sL;
	const lx = (nx: number) => laser.x + (nx - LASER.box[0]) * sL;
	const block = {x: lx(330), y: laserFootY - 4, w: lx(1440) - lx(330), h: railY - laserFootY + 4};
	const sensS = (railY - beamY) / (SENSOR.box[3] - 572);
	const sensor = b.sensor === undefined ? undefined : placeByAnchor(SENSOR, 431, 572, b.sensor, beamY, (SENSOR.box[2] - SENSOR.box[0]) * sensS);
	return {bench: {x: b.x, y: b.y, w: b.w} as Place, railY, beamY, holders, windows, lamp, laser, block, sensor, srcX: b.src};
};
export type PolarGeom = ReturnType<typeof polarGeom>;

/** The bench, the source, the holders with coded discs (axis angles from vertical) and the sensor. `beam` draws a
 * light line from the source to `beamTo` (default the last holder or the sensor). */
export const PolarBench: React.FC<{b: PolarAt; axes: readonly number[]; axisColor: string; beamColor: string; beamTo?: number; beam?: number; discs?: readonly number[]; holdersO?: readonly number[]; opacity?: number; sensor?: boolean; srcO?: number}> = ({b, axes, axisColor, beamColor, beamTo, beam = 1, discs, holdersO, opacity = 1, sensor = true, srcO = 1}) => {
	if (opacity <= 0.001) return null;
	const g = polarGeom(b);
	const end = beamTo ?? (g.sensor && sensor ? (b.sensor as number) : b.holders[b.holders.length - 1] ?? b.src + 200);
	const x1 = b.src + (end - b.src) * Math.max(0, Math.min(1, beam));
	return (
		<g opacity={opacity}>
			<LPlate spec={BENCH} p={g.bench} />
			{b.source === 'laser' ? <g opacity={srcO}><rect x={g.block.x} y={g.block.y} width={g.block.w} height={g.block.h} rx={4} fill={BENCH_GREY} stroke="#5c5e63" strokeWidth={2.5} /><LPlate spec={LASER} p={g.laser} /></g> : <LPlate spec={LAMP} p={g.lamp} opacity={srcO} />}
			{beam > 0.001 ? <line x1={b.src} y1={g.beamY} x2={x1} y2={g.beamY} stroke={beamColor} strokeWidth={b.source === 'laser' ? 4 : 9} strokeLinecap="round" opacity={b.source === 'laser' ? 1 : 0.75} /> : null}
			{g.holders.map((p, i) => (holdersO?.[i] ?? 1) <= 0.001 ? null : <g key={i} opacity={holdersO?.[i] ?? 1}>
				<LPlate spec={HOLDER} p={p} />
				<rect x={g.windows[i].x} y={g.windows[i].y} width={g.windows[i].w} height={g.windows[i].h} fill="#eef3f5" />
				{(discs?.[i] ?? 1) > 0.001 ? <FilterFace cx={g.windows[i].x + g.windows[i].w / 2} cy={g.windows[i].y + g.windows[i].h / 2} r={Math.min(g.windows[i].w, g.windows[i].h) * 0.48} axis={axes[i] ?? 0} axisColor={axisColor} width={2.5} opacity={discs?.[i] ?? 1} /> : null}
			</g>)}
			{g.sensor && sensor ? <LPlate spec={SENSOR} p={g.sensor} /> : null}
		</g>
	);
};

/** A vertical intensity bar on a baseline at (x, base) with height h (px) and a label under it. */
export const IBar: React.FC<{x: number; base: number; h: number; w?: number; color: string; label?: string; size?: number; opacity?: number; labelColor?: string}> = ({x, base, h, w = 34, color, label, size = 26, opacity = 1, labelColor = INK}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<line x1={x - w / 2 - 8} y1={base} x2={x + w / 2 + 8} y2={base} stroke={INK} strokeWidth={3} />
		{h > 0.5 ? <rect x={x - w / 2} y={base - h} width={w} height={h} rx={4} fill={color} /> : null}
		{label ? <text x={x} y={base + size + 6} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: labelColor}}>{label}</text> : null}
	</g>
));
