// Lesson parts for phys-y12-m5-v17: the two-sphere bench and the ground panel (the hook), the painted Earth,
// Moon, Mars and satellite placed by their sidecar anchors (uniform scale only), true-scale altitude, the
// inverse-square explorer graphs, and number formatting in scientific notation with true superscripts.
// Colour key (design, root decisions 2 and 10): gravitational force amber, field strength g violet, centre-to-
// centre r navy, altitude h grey (full opacity), velocity teal, answers in dark-ink frames, mistakes slate (R1).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {CARD, INK, INK_SOFT, TONES} from '../../shared/tokens';
import {BALL_PLATE, BallSvg, ROLE, VecArrow} from '../../physics/projectile/board';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {Ring} from '../phys-y12-m5-v03/parts';
import {EARTH_SRC, Earth, MOON_SRC, Moon, txt} from '../phys-y12-m5-v16/parts';
import {SPH} from './common';

export {Lbl, Ring, Earth, Moon, txt};
export const AMBER = ROLE.w, VIOLET = ROLE.a, NAVY = ROLE.given, TEAL = ROLE.x, GREY = TONES.grey, SLATE = ROLE.slate;
export const SAT_SRC = 'assets/physics/y12p-satellite-v1.png';
export const MARS_SRC = 'assets/physics/y12p-mars-v1.png';
export const V17_PLATES = [EARTH_SRC, MOON_SRC, SAT_SRC, MARS_SRC, BALL_PLATE];

// ---------------------------------------------------------------- numbers
const SUP: Record<string, string> = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻'};
/** Scientific notation with `d` decimals: 6.67 × 10⁻¹¹. */
export const sci = (v: number, d = 2) => {
	if (v === 0) return '0';
	let e = Math.floor(Math.log10(Math.abs(v)));
	let m = v / 10 ** e;
	if (Math.abs(Number(m.toFixed(d))) >= 10) { e += 1; m = v / 10 ** e; }
	return `${m.toFixed(d)} × 10${String(e).split('').map(c => SUP[c]).join('')}`;
};
/** Fixed decimals with a true minus sign. */
export const fx = (v: number, d = 0) => (Math.abs(v) < 0.5 * 10 ** -d ? 0 : v).toFixed(d).replace('-', '−');
/** Thousands with a thin-free comma (Australian style for display numbers). */
export const comma = (v: number) => Math.round(v).toLocaleString('en-AU');

// ---------------------------------------------------------------- plates
/** The satellite plate (body centre (791, 487), overall width 1207 in its plate) by body centre and width. */
export const Satellite: React.FC<{cx: number; cy: number; w: number; rotate?: number; opacity?: number}> = ({cx, cy, w, rotate = 0, opacity = 1}) => {
	const s = w / 1207;
	return <g transform={`rotate(${rotate} ${cx} ${cy})`} opacity={opacity}><image href={staticFile(SAT_SRC)} x={cx - 791 * s} y={cy - 487 * s} width={1585 * s} height={992 * s} /></g>;
};
/** Mars (centre (624, 626), radius 471 in its plate) by centre and diameter. */
export const Mars: React.FC<{cx: number; cy: number; d: number}> = ({cx, cy, d}) => { const s = d / 942; return <image href={staticFile(MARS_SRC)} x={cx - 624 * s} y={cy - 626 * s} width={1254 * s} height={1254 * s} />; };
/** A painted steel sphere by centre and diameter. */
export const Sphere: React.FC<{cx: number; cy: number; d: number; opacity?: number}> = props => <BallSvg {...props} />;

// ---------------------------------------------------------------- svg text
export const T: React.FC<{x: number; y: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number; children: React.ReactNode; opacity?: number}> = ({x, y, size = 34, color = INK, anchor = 'start', weight = 800, children, opacity = 1}) => (
	<text x={x} y={y} textAnchor={anchor} opacity={opacity} style={{...txt(size, color, weight), paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties}>{children}</text>
);

// ---------------------------------------------------------------- the hook: bench and ground panel
/** Two 70 kg spheres on a coded bench line: left centre at (x, y), `ppm` px per metre. */
export const benchGeom = (x: number, y: number, ppm: number) => {
	const d = 2 * SPH.rad * ppm;
	return {d, c1: [x, y] as [number, number], c2: [x + SPH.d * ppm, y] as [number, number], bench: y + d / 2};
};
export const BenchSpheres: React.FC<{x: number; y: number; ppm: number; size?: number; arrowsAt?: number; arrowLen?: number; bracketAt?: number; dotsAt?: number; lineAt?: number; pulse?: number; tagsAt?: number}> = ({x, y, ppm, size = 34, arrowsAt = 1e9, arrowLen = 26, bracketAt = 1e9, dotsAt = 1e9, lineAt = 1e9, pulse, tagsAt = -60}) => {
	const f = useCurrentFrame();
	const g = benchGeom(x, y, ppm);
	const [c1, c2] = [g.c1, g.c2];
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	const aw = 6 + 4 * pz;
	const by = g.bench + 46;
	return (
		<g>
			<line x1={c1[0] - g.d * 1.2} y1={g.bench} x2={c2[0] + g.d * 1.2} y2={g.bench} stroke={INK} strokeWidth={4} />
			{Array.from({length: Math.floor((c2[0] - c1[0] + g.d * 2.4) / 26)}, (_, i) => { const hx = c1[0] - g.d * 1.2 + 10 + i * 26; return <line key={i} x1={hx} y1={g.bench} x2={hx - 12} y2={g.bench + 14} stroke={INK_SOFT} strokeWidth={2.5} />; })}
			<Sphere cx={c1[0]} cy={c1[1]} d={g.d} />
			<Sphere cx={c2[0]} cy={c2[1]} d={g.d} />
			<g opacity={prog(f, tagsAt, 12)}>
				<T x={c1[0]} y={c1[1] - g.d / 2 - 16} size={size} anchor="middle">70 kg</T>
				<T x={c2[0]} y={c2[1] - g.d / 2 - 16} size={size} anchor="middle">70 kg</T>
			</g>
			{f >= lineAt ? <line x1={c1[0]} y1={c1[1]} x2={c2[0]} y2={c2[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, lineAt, 14)} /> : null}
			<VecArrow x={c1[0] + g.d / 2 + 4} y={c1[1]} dx={arrowLen} dy={0} color={AMBER.stroke} width={aw} head={14 + 2 * pz} at={arrowsAt} />
			<VecArrow x={c2[0] - g.d / 2 - 4} y={c2[1]} dx={-arrowLen} dy={0} color={AMBER.stroke} width={aw} head={14 + 2 * pz} at={arrowsAt} />
			{f >= dotsAt ? <g opacity={prog(f, dotsAt, 10)}><circle cx={c1[0]} cy={c1[1]} r={8} fill={NAVY.stroke} stroke={CARD} strokeWidth={2} /><circle cx={c2[0]} cy={c2[1]} r={8} fill={NAVY.stroke} stroke={CARD} strokeWidth={2} /></g> : null}
			{f >= bracketAt ? <g opacity={prog(f, bracketAt, 12)}>
				<line x1={c1[0]} y1={c1[1] + 10} x2={c1[0]} y2={by + 12} stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="6 6" />
				<line x1={c2[0]} y1={c2[1] + 10} x2={c2[0]} y2={by + 12} stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="6 6" />
				<line x1={c1[0]} y1={by} x2={c2[0]} y2={by} stroke={NAVY.stroke} strokeWidth={4 + 3 * pz} />
				<line x1={c1[0]} y1={by - 12} x2={c1[0]} y2={by + 12} stroke={NAVY.stroke} strokeWidth={4} />
				<line x1={c2[0]} y1={by - 12} x2={c2[0]} y2={by + 12} stroke={NAVY.stroke} strokeWidth={4} />
				<T x={(c1[0] + c2[0]) / 2} y={by + size + 6} size={size} color={NAVY.ink} anchor="middle">r = 1.0 m</T>
			</g> : null}
		</g>
	);
};
/** One sphere on the ground with Earth's pull on it (and, optionally, its pull on Earth). Card from (x, y), w by h. */
export const groundGeom = (x: number, y: number, w: number, h: number) => {
	const d = Math.min(130, w * 0.22);
	const gy = y + h * 0.42;
	return {d, c: [x + w * 0.42, gy - d / 2] as [number, number], gy};
};
export const GroundPanel: React.FC<{x: number; y: number; w: number; h: number; arrowAt?: number; labelAt?: number; upAt?: number; pulse?: number; arrowLen?: number; size?: number; scaleTag?: boolean}> = ({x, y, w, h, arrowAt = 1e9, labelAt = 1e9, upAt = 1e9, pulse, arrowLen = 250, size = 36, scaleTag = true}) => {
	const f = useCurrentFrame();
	const g = groundGeom(x, y, w, h);
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	const len = Math.min(arrowLen, y + h - g.c[1] - 20);
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
			<rect x={x + 2} y={g.gy} width={w - 4} height={y + h - g.gy - 2} fill="#e9dfcb" />
			<line x1={x} y1={g.gy} x2={x + w} y2={g.gy} stroke={INK} strokeWidth={4} />
			{Array.from({length: Math.floor((w - 20) / 26)}, (_, i) => <line key={i} x1={x + 14 + i * 26} y1={g.gy} x2={x + 2 + i * 26} y2={g.gy + 14} stroke={INK_SOFT} strokeWidth={2.5} />)}
			<Sphere cx={g.c[0]} cy={g.c[1]} d={g.d} />
			<T x={g.c[0]} y={g.c[1] - g.d / 2 - 14} size={size - 4} anchor="middle">70 kg</T>
			<VecArrow x={g.c[0]} y={g.c[1]} dx={0} dy={len} color={AMBER.stroke} width={10 + 4 * pz} head={30} at={arrowAt} dur={20} />
			<g opacity={prog(f, labelAt, 12)}><T x={g.c[0] - 26} y={g.c[1] + len * 0.8} size={size + 4} color={AMBER.ink} anchor="end">F ≈ 690 N</T></g>
			{scaleTag ? <g opacity={prog(f, labelAt + 10, 12)}><T x={x + w - 18} y={y + h - 18} size={28} color={GREY.ink} anchor="end" weight={700}>not to scale</T></g> : null}
			<VecArrow x={g.c[0] + g.d / 2 + 70} y={g.gy + 64} dx={0} dy={-58} color={AMBER.stroke} width={8} head={20} at={upAt} />
			<g opacity={prog(f, upAt + 8, 12)}><T x={g.c[0] + g.d / 2 + 50} y={g.gy + 104} size={30} color={AMBER.ink}>690 N on Earth</T></g>
		</g>
	);
};

// ---------------------------------------------------------------- the gravity stage
/** Point at angle `deg` (screen, clockwise from 3 o'clock) and distance `r` px from (cx, cy). */
export const polar = (cx: number, cy: number, r: number, deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
/** Direction from Earth's centre to Australia on the house Earth plate (measured from the plate, 46° below 3 o'clock). */
export const AUS = 46;
/** Dashed circle drawn on from `at`. */
export const DashCircle: React.FC<{cx: number; cy: number; r: number; at?: number; color?: string; width?: number; dash?: string; dur?: number}> = ({cx, cy, r, at = -60, color = INK_SOFT, width = 3.5, dash = '12 9', dur = 24}) => {
	const p = prog(useCurrentFrame(), at, dur);
	if (p <= 0) return null;
	const c = 2 * Math.PI * r;
	return <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={width} strokeDasharray={p >= 1 ? dash : `${c * p} ${c}`} transform={`rotate(-90 ${cx} ${cy})`} />;
};
/** Pen ring drawn on with a fade (Ring from v03, re-exported). */
export const Glow = (f: number, at: number, len = 30) => Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / len)));

// ---------------------------------------------------------------- graphs
export type GraphG = {ox: number; oy: number; w: number; h: number; xMax: number; yMax: number};
export const gmap = (g: GraphG, xv: number, yv: number): [number, number] => [g.ox + (xv / g.xMax) * g.w, g.oy - (yv / g.yMax) * g.h];
export const AxesG: React.FC<{g: GraphG; xTitle: React.ReactNode; yTitle: React.ReactNode; xTicks?: readonly [number, string][]; yTicks?: readonly [number, string][]; size?: number; opacity?: number}> = ({g, xTitle, yTitle, xTicks = [], yTicks = [], size = 30, opacity = 1}) => (
	<g opacity={opacity}>
		<line x1={g.ox} y1={g.oy} x2={g.ox + g.w + 24} y2={g.oy} stroke={INK} strokeWidth={4} />
		<line x1={g.ox} y1={g.oy} x2={g.ox} y2={g.oy - g.h - 24} stroke={INK} strokeWidth={4} />
		<path d={`M${g.ox + g.w + 24},${g.oy} l-14,-8 l0,16 Z`} fill={INK} />
		<path d={`M${g.ox},${g.oy - g.h - 24} l-8,14 l16,0 Z`} fill={INK} />
		{xTicks.map(([v, l], i) => { const [x] = gmap(g, v, 0); return <g key={i}><line x1={x} y1={g.oy} x2={x} y2={g.oy + 10} stroke={INK} strokeWidth={3} /><T x={x} y={g.oy + 40} size={28} color={INK_SOFT} anchor="middle" weight={700}>{l}</T></g>; })}
		{yTicks.map(([v, l], i) => { const [, y] = gmap(g, 0, v); return <g key={i}><line x1={g.ox - 10} y1={y} x2={g.ox} y2={y} stroke={INK} strokeWidth={3} /><T x={g.ox - 16} y={y + 10} size={28} color={INK_SOFT} anchor="end" weight={700}>{l}</T></g>; })}
		<T x={g.ox + g.w + 24} y={g.oy + 82} size={size} anchor="end">{xTitle}</T>
		<T x={g.ox + 16} y={g.oy - g.h - 34} size={size}>{yTitle}</T>
	</g>
);
