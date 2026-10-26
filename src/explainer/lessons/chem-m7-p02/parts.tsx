// M7 P02 board pieces on the M7 molecule kit, C04a/C04b parts and the M6 P02 practical kit. README for Claude:
// - Tube: a tube plate that cross-fades to a second plate in place, rocks about its base (the coded shake, no hands),
//   and can carry a coded label under it. tubePt gives a point on it as fractions of the plate's visible box.
// - Bottle2: the dropper bottle with coded name and formula on its blank label (edge colour per sample).
// - Ring6: a skeletal six-carbon ring (optional C=C teal, optional Br or H labels on chosen vertices).
// - Lens: the layer lens: a round magnifier showing the top (hydrocarbon) layer as grey zigzags, the water layer as small
//   V shapes, and orange Br2 dumbbells that either drift up into the top layer (mode 'move') or vanish in it ('react').
// - Dumb: one Br2 dumbbell. SunX: a small sun icon that gets crossed. Clock: a small grey clock.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, PicH, Sx, TEAL, picW, smooth} from '../chem-m6-p02/parts';
import type {PDef} from '../chem-m6-c01/assets';
import {MULTI, Skel, ringBonds, ringPts} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {BROM, lerp, vis} from '../chem-m7-c04a/parts';
import {DBOTTLE} from './common';

export const ENE = TEAL, ANE = '#4f6f8f', HAZ = '#b5502b', GREENC = '#2f8a5b';

// ---------- tubes ----------
export type TubeP = {cx: number; top: number; h: number};
export const tubePt = (t: TubeP, p: PDef, u: number, v: number): V2 => [t.cx - picW(p, t.h) / 2 + u * picW(p, t.h), t.top + v * t.h];
export const Tube: React.FC<{p: PDef; to?: PDef; swap?: number; cx: number; top: number; h: number; at: number; out?: number; shake?: number; label?: string; labelColor?: string; labelAt?: number; o?: number; swapDur?: number}> = ({p, to, swap, cx, top, h, at, out, shake, label, labelColor = INK_SOFT, labelAt, o = 1, swapDur = 24}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const s = swap === undefined || !to ? 0 : prog(f, swap, swapDur);
	const rock = shake === undefined ? 0 : f >= shake && f < shake + 60 ? 15 * Math.sin(((f - shake) / 6) * Math.PI) : 0;
	const w = picW(p, h);
	return (
		<g opacity={v}>
			<g transform={`rotate(${rock} ${cx} ${top + h})`}>
				{s < 1 ? <PicH p={p} x={cx - w / 2} y={top} h={h} o={1 - s} /> : null}
				{to && s > 0 ? <PicH p={to} x={cx - picW(to, h) / 2} y={top} h={h} o={s} /> : null}
			</g>
			{label ? <Sx x={cx} y={top + h + 34} text={label} size={26} color={labelColor} anchor="middle" weight={700} at={labelAt ?? at} /> : null}
		</g>
	);
};
/** A falling drop from a to b over 16 frames from `at`. */
export const Drop: React.FC<{a: V2; b: V2; at: number; color?: string}> = ({a, b, at, color = '#c9dbe8'}) => {
	const f = useCurrentFrame();
	const t = prog(f, at, 16);
	if (t <= 0 || t >= 1) return null;
	return <circle cx={lerp(a[0], b[0], t)} cy={lerp(a[1], b[1], t * t)} r={9} fill={color} stroke={INK_SOFT} strokeWidth={2} />;
};

// ---------- bottle ----------
export const Bottle2: React.FC<{cx: number; top: number; h: number; name: string; formula: string; edge: string; at: number; o?: number}> = ({cx, top, h, name, formula, edge, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const w = picW(DBOTTLE, h);
	const ly0 = top + 0.52 * h, ly1 = top + 0.82 * h, sz = h * 0.06;
	return (
		<g opacity={v}>
			<PicH p={DBOTTLE} x={cx - w / 2} y={top} h={h} />
			<rect x={cx - w * 0.45} y={ly0 + 3} width={w * 0.9} height={ly1 - ly0 - 6} rx={6} fill="none" stroke={edge} strokeWidth={4} />
			<Sx x={cx} y={(ly0 + ly1) / 2 - sz * 0.1} text={name} size={sz} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={cx} y={(ly0 + ly1) / 2 + sz * 1.1} text={formula} size={sz * 0.95} color={edge} anchor="middle" weight={700} at={-1000} />
		</g>
	);
};

// ---------- skeletal ring ----------
export const ring6 = (cx: number, cy: number, r: number): V2[] => ringPts(6, cx, cy, r, -Math.PI / 2);
export const Ring6: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; ene?: boolean; ink?: boolean; labs?: {i: number; t: string; at?: number; out?: number; color?: string}[]; o?: number; pulse?: number; width?: number}> = ({cx, cy, r, at, out, ene = false, ink = false, labs = [], o = 1, pulse, width = 5}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const pts = ring6(cx, cy, r);
	const bonds: Bond[] = ringBonds(6).map((b, k) => (k === 0 && ene ? {...b, order: 2 as const, color: ink ? INK : MULTI} : b));
	return (
		<g opacity={v}>
			<Skel pts={pts} bonds={bonds} at={at} stagger={3} width={width} pulse={pulse === undefined ? undefined : {bond: 0, at: pulse}} />
			{labs.map((l, k) => {
				const p = pts[l.i], d = Math.hypot(p[0] - cx, p[1] - cy);
				const q: V2 = [p[0] + ((p[0] - cx) / d) * r * 0.62, p[1] + ((p[1] - cy) / d) * r * 0.62];
				const lo = vis(f, l.at ?? at, l.out, 10);
				if (lo <= 0.01) return null;
				return (
					<g key={k} opacity={lo}>
						<line x1={p[0]} y1={p[1]} x2={lerp(p[0], q[0], 0.62)} y2={lerp(p[1], q[1], 0.62)} stroke={INK} strokeWidth={width * 0.8} strokeLinecap="round" />
						<Sx x={q[0]} y={q[1] + r * 0.14} text={l.t} size={r * 0.42} color={l.color ?? (l.t === 'Br' ? BROM : '#6f6a63')} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- Br2 dumbbell and the layer lens ----------
export const Dumb: React.FC<{x: number; y: number; s?: number; o?: number; a?: number}> = ({x, y, s = 1, o = 1, a = 0}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) rotate(${a}) scale(${s})`}>
		<line x1={-9} x2={9} y1={0} y2={0} stroke={INK} strokeWidth={3} />
		<circle cx={-11} cy={0} r={9} fill="#a4522a" stroke={INK} strokeWidth={2} />
		<circle cx={11} cy={0} r={9} fill="#a4522a" stroke={INK} strokeWidth={2} />
	</g>
));
const LZ: V2[] = [[-80, -70], [-10, -95], [60, -70], [-55, -30], [30, -35], [90, -20]];
const LW: V2[] = [[-90, 40], [-30, 70], [40, 45], [95, 70], [-60, 105], [10, 110], [70, 105], [-100, 80]];
const LB: [V2, V2][] = [[[-40, 60], [-30, -60]], [[20, 90], [40, -80]], [[75, 55], [70, -45]], [[-75, 95], [-80, -45]]];
/** mode 'move': dumbbells drift from the water into the top layer from `at` (they start low); 'react': they start in the
 *  top layer and vanish from `at`; 'up': they sit in the top layer. ene: the top layer molecules carry a teal C=C. */
export const Lens: React.FC<{cx: number; cy: number; r?: number; at: number; out?: number; mode: 'move' | 'react' | 'up'; act: number; ene?: boolean}> = ({cx, cy, r = 140, at, out, mode, act, ene = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out);
	if (v <= 0.01) return null;
	const k = r / 140;
	const t = smooth(prog(f, act, 50));
	const id = `p02lens${Math.round(cx)}${Math.round(cy)}`;
	return (
		<g opacity={v}>
			<clipPath id={id}><circle cx={cx} cy={cy} r={r} /></clipPath>
			<g clipPath={`url(#${id})`}>
				<rect x={cx - r} y={cy - r} width={2 * r} height={r} fill={mode === 'react' && t > 0.6 ? '#f4f1ea' : '#f6e3cf'} />
				<rect x={cx - r} y={cy} width={2 * r} height={r} fill={mode === 'move' ? `rgba(246,220,150,${0.5 - 0.35 * t})` : '#eef3f7'} />
				<line x1={cx - r} x2={cx + r} y1={cy} y2={cy} stroke="#9fb3c4" strokeWidth={3} />
				{LZ.map(([x, y], i) => <path key={'z' + i} d={`M${cx + (x - 22) * k},${cy + (y + 6) * k} l${11 * k},${-12 * k} l${11 * k},${12 * k} l${11 * k},${-12 * k} l${11 * k},${12 * k}`} fill="none" stroke={ene && i % 2 === 0 ? TEAL : '#7d7a74'} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />)}
				{LW.map(([x, y], i) => <path key={'w' + i} d={`M${cx + (x - 9) * k},${cy + (y - 7) * k} L${cx + x * k},${cy + (y + 5) * k} L${cx + (x + 9) * k},${cy + (y - 7) * k}`} fill="none" stroke="#5d8fb3" strokeWidth={3.5} strokeLinecap="round" />)}
				{LB.map(([lo, hi], i) => {
					const p = mode === 'move' ? [lerp(lo[0], hi[0], t), lerp(lo[1], hi[1], t)] : hi;
					const o = mode === 'react' ? 1 - t : 1;
					return <Dumb key={'b' + i} x={cx + p[0] * k} y={cy + p[1] * k + Math.sin(f * 0.15 + i) * 3} s={k} o={o} a={i * 40} />;
				})}
			</g>
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={5} />
			<Sx x={cx + r + 14} y={cy - r * 0.45} text="hydrocarbon" size={22} color={INK_SOFT} weight={700} at={-1000} />
			<Sx x={cx + r + 14} y={cy + r * 0.55} text="water" size={22} color={INK_SOFT} weight={700} at={-1000} />
		</g>
	);
};
export const SunX: React.FC<{x: number; y: number; at: number; cross: number}> = ({x, y, at, cross}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={26} fill="#f6d77a" stroke="#c98a1b" strokeWidth={3} />
			{Array.from({length: 8}, (_, i) => { const a = (i * Math.PI) / 4; return <line key={i} x1={x + Math.cos(a) * 34} y1={y + Math.sin(a) * 34} x2={x + Math.cos(a) * 48} y2={y + Math.sin(a) * 48} stroke="#c98a1b" strokeWidth={4} strokeLinecap="round" />; })}
			<DrawPath d={`M${x - 50},${y - 50} L${x + 50},${y + 50}`} at={cross} dur={10} color="#c4432f" width={7} />
		</g>
	);
};
export const Clock: React.FC<{x: number; y: number; at: number; o?: number}> = ({x, y, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v} stroke={INK_SOFT} strokeWidth={3} fill="#fffdf8">
			<circle cx={x} cy={y} r={20} />
			<line x1={x} y1={y} x2={x} y2={y - 12} strokeLinecap="round" />
			<line x1={x} y1={y} x2={x + 9} y2={y + 4} strokeLinecap="round" />
		</g>
	);
};
export {GREENC as GREEN};
