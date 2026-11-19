// Drawing parts for Y11 Chem M1 V06. Reuses the M1 V01 parts (text, chips, framed answers, readouts, pen marks,
// plates, brackets). New here: the top-pan balance with a coded display and objects placed on its pan, the basin
// clipped off its mat, the mass accounting bar (segments, rose hatched gap, teal hatched overhang beyond the end line),
// a small coded chromatogram, a task strip, a givens card and the pause hold with the ring shown from "Pause here".
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {AMB, AMB_INK, DrawPath, INK, PURE, Plate, Rich, Sx, TickMark, Write, clamp01, prog, smooth, tw, vis} from '../chem-y11-m1-v01/parts';
import type {Seg} from '../chem-y11-m1-v01/parts';
import {TEAL, TEAL_INK} from '../chem-y11-m2-v06/parts';
import {BAL, BASIN_E} from './common';
import type {PDef} from './common';

export * from '../chem-y11-m1-v01/parts';
export {TEAL, TEAL_INK};

// ---------- colour roles (design colour key, fixed for the whole video) ----------
export const SAND_F = '#d2a35e', SAND_INK = '#7a5526';
export const SALT_F = '#f3f1ec';
export const ROSE = '#b8325f';
export const CHALK_F = '#dcd8cf';

// ---------- balance ----------
export type BalG = {k: number; X: (u: number) => number; Y: (v: number) => number; w: number; h: number; pan: [number, number]; disp: [number, number]};
export const balGeo = (x: number, y: number, h: number): BalG => {
	const k = h / BAL.box[3];
	const X = (u: number) => x + (u - BAL.box[0]) * k, Y = (v: number) => y + (v - BAL.box[1]) * k;
	return {k, X, Y, w: BAL.box[2] * k, h, pan: [X(636), Y(290)], disp: [X(783), Y(622)]};
};
/** The painted balance with a coded reading in its blank display window. */
export const Balance: React.FC<{g: BalG; text: string; at?: number; out?: number}> = ({g, text, at = -1000, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.005) return null;
	return (
		<g opacity={v}>
			<Plate p={BAL} x={g.X(BAL.box[0])} y={g.Y(BAL.box[1])} h={g.h} />
			<Sx x={g.disp[0]} y={g.disp[1] + 34 * g.k * 1.05} text={text} size={Math.round(98 * g.k)} color="#d8fbe0" anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
/** Plate placement so that the plate's native point `base` lands on screen point `p`, scaled by k. */
export const placeAt = (pl: PDef, base: [number, number], p: [number, number], k: number) => ({x: p[0] - (base[0] - pl.box[0]) * k, y: p[1] - (base[1] - pl.box[1]) * k, h: pl.box[3] * k});
/** The evaporating basin clipped off its mat (bowl only); foot centre at p. */
export const BasinBowl: React.FC<{id: string; p: [number, number]; k: number; plate?: PDef; o?: number}> = ({id, p, k, plate = BASIN_E, o = 1}) => {
	if (o <= 0.005) return null;
	const pl = placeAt(plate, [685, 735], p, k);
	const M = (u: number, v: number) => `${pl.x + (u - plate.box[0]) * k},${pl.y + (v - plate.box[1]) * k}`;
	const d = `M${M(320, 350)} L${M(1080, 350)} L${M(1080, 560)} L${M(1002, 585)} L${M(950, 680)} L${M(860, 742)} L${M(510, 742)} L${M(420, 680)} L${M(366, 585)} L${M(320, 560)} Z`;
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><path d={d} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><Plate p={plate} x={pl.x} y={pl.y} h={pl.h} /></g>
		</g>
	);
};

// ---------- the mass accounting bar ----------
export type BarSeg = {m: number; fill: string; ink: string; label?: string; at: number; out?: number};
/** Bar the width of the whole mass; segments fill left to right as each lands. A shortfall shows as a rose hatched
 *  gap (from gapAt), anything beyond the end line as a teal hatched overhang. Small gaps and overhangs are drawn at
 *  least 24 px wide so they read. */
export const AccBar: React.FC<{id: string; x: number; y: number; w: number; whole: number; segs: BarSeg[]; h?: number; at?: number; out?: number; gapAt?: number; gapLabel?: string; extraAt?: number; extraLabel?: string; okAt?: number; split?: number; labelSize?: number; wholeLabel?: string; base?: string}> = ({id, x, y, w, whole, segs, h = 84, at = -1000, out, gapAt, gapLabel, extraAt, extraLabel, okAt, split = 0, labelSize = 34, wholeLabel, base}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.005) return null;
	const sc = w / whole;
	let cx = x;
	const rects: React.ReactNode[] = [];
	const labels: React.ReactNode[] = [];
	segs.forEach((s, i) => {
		const p = smooth(prog(f, s.at, 18)) * (s.out === undefined ? 1 : 1 - prog(f, s.out, 12));
		const sw = s.m * sc * p;
		if (sw > 0.5) {
			rects.push(<rect key={i} x={cx + i * split} y={y} width={sw} height={h} fill={s.fill} stroke={s.ink} strokeWidth={3} />);
			if (s.label && sw > 60) labels.push(<Sx key={'l' + i} x={cx + i * split + sw / 2} y={y + h / 2 + labelSize * 0.36} text={s.label} size={labelSize} color={s.ink === INK ? INK : s.ink} anchor="middle" weight={800} at={s.at + 10} />);
		}
		cx += sw;
	});
	const total = segs.reduce((a, s) => a + s.m * smooth(prog(f, s.at, 18)), 0);
	const end = x + w;
	const gapO = gapAt === undefined ? 0 : prog(f, gapAt, 14);
	const gapW = Math.max(24, end - cx);
	const exO = extraAt === undefined ? 0 : prog(f, extraAt, 14);
	const exW = Math.max(24 * clamp01((total - whole) / (0.02 * whole)), (total - whole) * sc);
	return (
		<g opacity={v}>
			<defs>
				<pattern id={id + 'r'} width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width={14} height={14} fill="#fbe8ee" /><line x1={0} y1={0} x2={0} y2={14} stroke={ROSE} strokeWidth={6} /></pattern>
				<pattern id={id + 't'} width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width={14} height={14} fill="#dff3f1" /><line x1={0} y1={0} x2={0} y2={14} stroke={TEAL} strokeWidth={6} /></pattern>
			</defs>
			<rect x={x} y={y} width={w} height={h} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="10 7" />
			{base ? <g opacity={1 - prog(f, Math.min(...segs.map(s => s.at)), 14)}>
				<rect x={x} y={y} width={w} height={h} fill="#efe3c8" stroke={INK} strokeWidth={3} />
				{Array.from({length: Math.floor(w / 18)}, (_, i) => <circle key={i} cx={x + 9 + i * 18} cy={y + h / 2 + ((i * 37) % 5 - 2) * h * 0.12} r={4} fill={i % 3 ? SAND_F : '#fff'} stroke={i % 3 ? SAND_INK : INK} strokeWidth={1.2} />)}
				<rect x={x + w / 2 - tw(base, labelSize, false, 800) / 2 - 14} y={y + h / 2 - labelSize * 0.75} width={tw(base, labelSize, false, 800) + 28} height={labelSize * 1.4} rx={10} fill="#fffdf8" />
				<Sx x={x + w / 2} y={y + h / 2 + labelSize * 0.36} text={base} size={labelSize} color={INK} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			{rects}
			{gapO > 0.01 && total < whole - 1e-6 ? <g opacity={gapO}><rect x={end - gapW} y={y} width={gapW} height={h} fill={`url(#${id}r)`} stroke={ROSE} strokeWidth={4} /></g> : null}
			{exO > 0.01 && total > whole + 1e-6 ? <g opacity={exO}><rect x={end} y={y} width={exW} height={h} fill={`url(#${id}t)`} stroke={TEAL} strokeWidth={4} /></g> : null}
			{labels}
			<line x1={end} x2={end} y1={y - 18} y2={y + h + 18} stroke={okAt !== undefined && f >= okAt ? '#2f8a5b' : INK} strokeWidth={6} strokeLinecap="round" />
			{okAt !== undefined ? <TickMark x={end + 4} y={y - 40} at={okAt} s={1.3} /> : null}
			{gapLabel ? <Sx x={end - gapW / 2} y={y + h + 46} text={gapLabel} size={34} color={ROSE} anchor="middle" weight={800} at={gapAt ?? -1000} /> : null}
			{extraLabel ? <Sx x={end + exW + 14} y={y + h / 2 + 12} text={extraLabel} size={34} color={TEAL_INK} weight={800} at={extraAt ?? -1000} /> : null}
			{wholeLabel ? <Sx x={end} y={y - 30} text={wholeLabel} size={30} color={INK} anchor="end" weight={700} at={-1000} /> : null}
		</g>
	);
};
/** Screen x of the end of a bar's filled part for mass m. */
export const barX = (x: number, w: number, whole: number, m: number) => x + (m / whole) * w;

// ---------- small coded chromatogram (V05's developed black-ink strip) ----------
export const Chromatogram: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={0} y={0} width={130} height={430} fill="#ffffff" stroke={INK} strokeWidth={3} />
		<line x1={0} y1={70} x2={130} y2={70} stroke="#5a6470" strokeWidth={2} strokeDasharray="8 6" />
		<line x1={10} y1={372} x2={120} y2={372} stroke="#5a6470" strokeWidth={3} />
		<ellipse cx={65} cy={300} rx={20} ry={15} fill="#3f6fb5" opacity={0.85} />
		<ellipse cx={65} cy={210} rx={19} ry={16} fill="#d0507f" opacity={0.85} />
		<ellipse cx={65} cy={118} rx={18} ry={14} fill="#e2b52c" opacity={0.9} />
	</g>
);

// ---------- calculation layout pieces ----------
/** Short task strip under the heading. */
export const TaskStrip: React.FC<{text: string; y?: number; at?: number}> = ({text, y = 184, at = -1000}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={96} y={y} width={1728} height={64} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<Rich x={122} y={y + 44} segs={[{t: 'Task: ', c: AMB_INK}, {t: text}]} size={36} weight={700} />
		</g>
	);
};
/** Navy givens card with lines of segments. */
export const GivensCard: React.FC<{x: number; y: number; w: number; lines: Seg[][]; size?: number; lh?: number; title?: string}> = ({x, y, w, lines, size = 40, lh = 58, title = 'givens'}) => (
	<g>
		<rect x={x} y={y} width={w} height={lines.length * lh + 70} rx={16} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
		<Sx x={x + 22} y={y + 38} text={title} size={28} color={PURE} weight={800} at={-1000} />
		{lines.map((l, i) => <Rich key={i} x={x + 22} y={y + 92 + i * lh} segs={l.map(s => ({...s, c: s.c ?? PURE}))} size={size} weight={700} />)}
	</g>
);
/** "Pause here to answer." with the 10 s ring, shown full from "Pause here" until the timed count starts. */
export const PauseHoldR: React.FC<{h: {startFrame: number; endFrame: number}; at: number; x: number; y: number; cx: number; cy: number}> = ({h, at, x, y, cx, cy}) => (
	<>
		<Write x={x} y={y} text="Pause here to answer." at={at} size={56} color={AMB_INK} />
		<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={64} ringFrom={at} />
	</>
);
/** Coded water drops falling from (x, y0) to y1 from frame `at`. */
export const Drops: React.FC<{x: number; y0: number; y1: number; at: number; n?: number; every?: number; color?: string}> = ({x, y0, y1, at, n = 3, every = 14, color = '#5b9fd0'}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const t = (f - at - i * every) / 22;
				if (t < 0 || t > 1.15) return null;
				const yy = y0 + (y1 - y0) * clamp01(t) ** 1.6;
				return <path key={i} d={`M${x + i * 14 - 14},${yy - 16} q10,14 0,22 q-10,-8 0,-22 Z`} fill={color} stroke="#2d6f9c" strokeWidth={2} opacity={t > 1 ? 1 - (t - 1) / 0.15 : 1} />;
			})}
		</g>
	);
};
export const ArrowLine: React.FC<{a: [number, number]; b: [number, number]; at: number; color?: string; width?: number}> = ({a, b, at, color = INK, width = 4}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), hd = 16;
	return (
		<g>
			<DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={12} color={color} width={width} />
			<path d={`M${b[0] - hd * Math.cos(ang - 0.5)},${b[1] - hd * Math.sin(ang - 0.5)} L${b[0]},${b[1]} L${b[0] - hd * Math.cos(ang + 0.5)},${b[1] - hd * Math.sin(ang + 0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" opacity={prog(f, at + 10, 4)} />
		</g>
	);
};
void AMB;
