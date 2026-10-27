// M7 P03 board pieces on the M6 P02 practical kit (TRead, TGraph, ChainRow, RTable, VCard, PourCyl, CupB, PenLink;
// imported), the C06 strip parts (Plate, ptOn, Leader, Arrow2, RingAt) and P01's evaporation wisps. README for Claude:
// - ALCS / ACOL: the four alcohols and their fixed colours (methanol teal, ethanol amber, propan-1-ol violet,
//   butan-1-ol blue), used on chips, table rows and graph points.
// - SetP: the spirit-burner set (base, sooty or shielded) placed by centre, top and height, cross-fading in place;
//   sp() gives a screen point for a named plate point.
// - Escape: warm arrows leaving the can walls and open top (heat lost); Rise: warm arrows rising from the flame into the
//   can base (heat in); Bounce: side arrows that meet the shield and turn back.
// - AlcChips: the four coloured chips. Results: the trial data. SeriesGraph: |ΔHc| against carbons with error bars,
//   optional grey data points.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {HEAT, INK, INK_SOFT, Sx, TEAL, TGraph, gx, gy, smooth} from '../chem-m6-p02/parts';
import type {GG} from '../chem-m6-p02/parts';
import {Tag, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {Plate, ptOn} from '../chem-m7-c06/parts';
import type {PDef} from '../chem-m6-c01/assets';
import {SET, SP} from './common';

export const ALCS = ['methanol', 'ethanol', 'propan-1-ol', 'butan-1-ol'];
export const ACOL = [TEAL, '#b07a12', VIOLET, '#2d6f9e'];
export const AFILL = ['#dff2ef', '#fbeec4', '#e6ddf5', '#e3f0fa'];
export const NAVY = '#24407a', GREENC = '#2f8a5b', HAZ = '#b5502b', NBLUE = '#2d6f9e';

// ---------- the set ----------
export type SetPos = {cx: number; top: number; h: number};
export const sp = (P: SetPos, k: keyof typeof SP): V2 => ptOn(SET.base, P.cx, P.top, P.h, SP[k][0], SP[k][1]);
export const SetP: React.FC<{P: SetPos; p?: PDef; to?: PDef; swap?: number; at?: number; out?: number; o?: number}> = ({P, p = SET.base, to, swap, at, out, o = 1}) => <Plate p={p} to={to} swap={swap} cx={P.cx} top={P.top} h={P.h} at={at} out={out} o={o} swapDur={26} />;

/** Warm arrows (cycling) from points a in direction ang (radians). */
const Warm: React.FC<{pts: [number, number, number][]; at: number; out?: number; len?: number; o?: number; w?: number}> = ({pts, at, out, len = 60, o = 1, w = 5}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{pts.map(([x, y, a], i) => {
				const t = ((f - at + i * 9) % 40) / 40;
				const d0 = 6 + t * 26, d1 = d0 + len * 0.6;
				const x0 = x + Math.cos(a) * d0, y0 = y + Math.sin(a) * d0, x1 = x + Math.cos(a) * d1, y1 = y + Math.sin(a) * d1;
				const hx = (k: number) => x1 - Math.cos(a + k) * 13, hy = (k: number) => y1 - Math.sin(a + k) * 13;
				return <g key={i} opacity={Math.sin(t * Math.PI)} fill="none" stroke={HEAT} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round"><path d={`M${x0},${y0} L${x1},${y1}`} /><path d={`M${hx(0.55)},${hy(0.55)} L${x1},${y1} L${hx(-0.55)},${hy(-0.55)}`} /></g>;
			})}
		</g>
	);
};
export const Escape: React.FC<{P: SetPos; at: number; out?: number; o?: number; top?: boolean}> = ({P, at, out, o = 1, top = true}) => {
	const L = sp(P, 'wallL'), R = sp(P, 'wallR'), T = sp(P, 'lid'), k = P.h / 640;
	const pts: [number, number, number][] = [[L[0], L[1] - 60 * k, Math.PI + 0.3], [L[0], L[1] + 60 * k, Math.PI - 0.2], [R[0], R[1] - 60 * k, -0.3], [R[0], R[1] + 60 * k, 0.2]];
	if (top) pts.push([T[0] - 30 * k, T[1], -1.9], [T[0] + 30 * k, T[1], -1.25]);
	return <Warm pts={pts} at={at} out={out} o={o} len={60 * Math.max(0.6, k)} />;
};
export const Rise: React.FC<{P: SetPos; at: number; out?: number; o?: number}> = ({P, at, out, o = 1}) => {
	const F = sp(P, 'flame'), k = P.h / 640;
	return <Warm pts={[[F[0] - 18 * k, F[1] - 20 * k, -1.75], [F[0], F[1] - 26 * k, -1.57], [F[0] + 18 * k, F[1] - 20 * k, -1.4]]} at={at} out={out} o={o} len={44 * Math.max(0.6, k)} />;
};
/** Side arrows heading out from the flame region that meet the shield and turn back. */
export const Bounce: React.FC<{P: SetPos; at: number; out?: number}> = ({P, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out);
	if (v <= 0.01) return null;
	const F = sp(P, 'flame'), S = sp(P, 'shield');
	const dx = F[0] - S[0];
	return (
		<g opacity={v}>
			{[0, 1].map(s => {
				const t = ((f - at + s * 20) % 50) / 50;
				const sg = s ? 1 : -1;
				const wall = dx * 0.9;
				const x = F[0] + sg * (t < 0.5 ? t * 2 * wall : (1 - (t - 0.5) * 2) * wall);
				const dir = (t < 0.5 ? 1 : -1) * sg;
				const y = F[1] - 30;
				return <path key={s} d={`M${x - dir * 26},${y} L${x},${y} M${x - dir * 12},${y - 10} L${x},${y} L${x - dir * 12},${y + 10}`} fill="none" stroke={HEAT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={Math.sin(t * Math.PI * 2) ** 2} />;
			})}
		</g>
	);
};

// ---------- alcohols, data ----------
export const AlcChips: React.FC<{x: number; y: number; at: number; gap?: number; size?: number; o?: number; dir?: 'row' | 'col'}> = ({x, y, at, gap = 16, size = 26, o = 1, dir = 'row'}) => {
	let cx = x;
	return <g>{ALCS.map((n, i) => { const px = cx; cx += n.length * size * 0.56 + 40 + gap; return <Tag key={i} x={dir === 'row' ? px : x} y={dir === 'row' ? y : y + i * size * 1.9} text={n} at={at + i * 6} size={size} color={ACOL[i]} fill={AFILL[i]} o={o} />; })}</g>;
};
export const TRIALS = [['−383', '−377', '−388'], ['−688', '−676', '−700'], ['−985', '−975', '−995'], ['−1.20', '−1.19', '−1.21']];
export const MEANS = [383, 688, 985, 1203];
export const MEANT = ['−383', '−688', '−985', '−1.20 × 10³'];
export const LO = [377, 676, 975, 1192], HI = [388, 700, 995, 1215];
export const DATA = [726, 1367, 2021, 2676];
export const PCT = ['53%', '50%', '49%', '45%'];
export const G6: GG = {x: 200, y: 240, w: 680, h: 560, x0: 0.5, x1: 4.5, y0: 0, y1: 2800};
/** |ΔHc| against number of carbons: axes, the measured means with error bars, optional grey data values. */
export const SeriesGraph: React.FC<{g?: GG; at: number; dataAt?: number; barGlow?: number; o?: number}> = ({g = G6, at, dataAt, barGlow, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 4) * o;
	if (v <= 0.01) return null;
	const bg = barGlow === undefined ? 0 : prog(f, barGlow, 12);
	return (
		<g opacity={v}>
			<TGraph g={g} at={at} xTicks={[1, 2, 3, 4]} yTicks={[0, 700, 1400, 2100, 2800]} xMinor={1} yMinor={350} xLabel="number of carbons" yLabel="|ΔHc| (kJ mol⁻¹)" size={24} />
			{MEANS.map((m, i) => {
				const p = prog(f, at + 14 + i * 8, 10);
				if (p <= 0.01) return null;
				const X = gx(g, i + 1);
				return (
					<g key={i} opacity={p}>
						<path d={`M${X},${gy(g, HI[i])} L${X},${gy(g, LO[i])} M${X - 12},${gy(g, HI[i])} L${X + 12},${gy(g, HI[i])} M${X - 12},${gy(g, LO[i])} L${X + 12},${gy(g, LO[i])}`} stroke={bg > 0.5 ? INK : INK_SOFT} strokeWidth={3 + 2 * bg} />
						<circle cx={X} cy={gy(g, m)} r={11} fill={ACOL[i]} stroke={INK} strokeWidth={2.5} />
					</g>
				);
			})}
			{dataAt !== undefined ? DATA.map((d, i) => {
				const p = prog(f, dataAt + i * 6, 10);
				if (p <= 0.01) return null;
				return <g key={'d' + i} opacity={p}><circle cx={gx(g, i + 1)} cy={gy(g, d)} r={10} fill="#d9d4ca" stroke={INK_SOFT} strokeWidth={2.5} /></g>;
			}) : null}
			{dataAt !== undefined ? <Sx x={gx(g, 1.15)} y={gy(g, 2600)} text="grey: data values" size={22} color={INK_SOFT} weight={700} at={dataAt + 10} /> : null}
		</g>
	);
};
export const gpt = (i: number, v: number, g: GG = G6): V2 => [gx(g, i + 1), gy(g, v)];
/** A vertical bracket with a label (graph braces). */
export const VBrace: React.FC<{x: number; y1: number; y2: number; text: string; at: number; color?: string; size?: number; left?: boolean; o?: number}> = ({x, y1, y2, text, at, color = NAVY, size = 26, left = false, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const d = left ? -10 : 10;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x - d},${y1} L${x},${y1} L${x},${y2} L${x - d},${y2}`} at={at} dur={12} color={color} width={4} />
			<Sx x={x + (left ? -14 : 14)} y={(y1 + y2) / 2 + size * 0.35} text={text} size={size} color={color} anchor={left ? 'end' : 'start'} weight={800} at={at + 6} />
		</g>
	);
};
export {HEAT, INK, INK_SOFT, TEAL, smooth};
