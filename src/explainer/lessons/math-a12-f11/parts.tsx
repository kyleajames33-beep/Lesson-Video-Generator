// Lesson parts for math-a12-f11 (Revision 3: repayments, balance, term and total paid; a used motorbike), on the maths
// studio kit (its money engine) and the f09 finance parts (imported read-only through ../math-a12-f09/parts).
// Lesson-local rigs:
// - Tag: the painted swing tag with coded text sitting on its four measured rules;
// - BikeBoard: f10's last frame as its design describes it (the bike, the tag, a dashed balance curve to "?"), also
//   this lesson's opening;
// - MonthGraph: balance against months for the $20,000 loan (curves to their payoff, a marker, a target).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, StudioPlot, SvgPlate, loanBalance, loanSchedule, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';
import {BROWN, Chip, m0} from '../math-a12-f09/parts';

export * from '../math-a12-f09/parts';

// ---------- the numbers (design "Numbers to verify", from the kit's money engine) ----------
export const BIKE_LOAN = {P: 20000, r: 0.006, M: 400} as const;
export const BIKE_ROWS = loanSchedule(20000, 0.006, 400);
export const M48 = (20000 * 0.006 * 1.006 ** 48) / (1.006 ** 48 - 1);
{
	const c2 = (v: number) => Math.round(v * 100) / 100;
	const near = (a: number, b: number, t = 0.005) => Math.abs(a - b) < t;
	const R = BIKE_ROWS;
	const checks: [string, boolean][] = [
		['term', near(Math.log(10 / 7) / Math.log(1.006), 59.624, 0.001) && 400 / 280 === 10 / 7 && 20000 * 0.006 === 120 && R.length === 60],
		['round up', c2(R[58].closing) === 248.38 && c2(R[59].interest) === 1.49 && c2(R[59].repayment) === 249.87 && c2(R.reduce((s, x) => s + x.repayment, 0)) === 23849.87 && c2(R.reduce((s, x) => s + x.interest, 0)) === 3849.87],
		['race', c2(loanBalance(20000, 0.006, 400, 50)) === 3729.7 && 20000 / 400 === 50],
		['4-year M', c2(M48) === 480.78 && near(1.006 ** 48, 1.3326, 0.0001) && c2(48 * 480.78) === 23077.44 && c2(23849.87 - 23077.44) === 772.43 && c2(480.78 - 400) === 80.78],
		['owing', c2(loanBalance(20000, 0.006, 400, 24)) === 12795.26 && c2(20000 * 1.006 ** 24) === 23087.75 && c2((400 * (1.006 ** 24 - 1)) / 0.006) === 10292.49 && c2(20000 - 12795.26) === 7204.74 && near(7204.74 / 20000, 0.36, 0.001)],
		['A1', c2((1250 * 1.005 ** 240) / (1.005 ** 240 - 1)) === 1791.08 && c2(240 * 1791.08) === 429859.2 && near(1.005 ** 240, 3.3102, 0.0001) && c2(250000 / 240) === 1041.67],
		['A2', near(Math.log(50 / 41) / Math.log(1.005), 39.79, 0.005) && c2(loanBalance(18000, 0.005, 500, 39)) === 392.91 && 18000 * 0.005 === 90],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f11 numbers: ' + bad.join(', '));
}

// ---------- plates ----------
/** Brief 240 (ma12-f11-provenance.json): measured alpha boxes (alpha > 32); the tag's face and its four rules. */
export const BIKE: PlateSpec = {src: 'assets/maths/ma12-motorbike-v1.png', nat: [1586, 992], box: [215, 138, 1361, 876]};
export const TAG: PlateSpec = {src: 'assets/maths/ma12-swing-tag-v1.png', nat: [1003, 1568], box: [192, 183, 807, 1355]};
export const TAG_RULES = [690, 838, 984, 1132] as const;
export const TAG_X = [256, 744] as const;
export const tagW = (h: number) => (h * (TAG.box[2] - TAG.box[0])) / (TAG.box[3] - TAG.box[1]);
export const bikeH = (w: number) => (w * (BIKE.box[3] - BIKE.box[1])) / (BIKE.box[2] - BIKE.box[0]);

export type TagLine = {text: React.ReactNode; at?: number; color?: string; size?: number};
/** The swing tag, its alpha box's top left at (x, y), h tall; up to four coded lines sitting on its rules. */
export const Tag: React.FC<{x: number; y: number; h: number; lines?: readonly (TagLine | null)[]; size?: number; at?: number; out?: number; children?: React.ReactNode}> = ({x, y, h, lines = [], size = 36, at = -30, out, children}) => {
	usePlatePreload([TAG.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(TAG, x, y, tagW(h));
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg><SvgPlate plate={TAG} x={x} y={y} w={tagW(h)} /></FrameSvg>
		{lines.map((ln, i) => {
			if (!ln) return null;
			const [lx, ly] = m.at(TAG_X[0], TAG_RULES[i]);
			const s = ln.size ?? size;
			return <div key={i} style={{position: 'absolute', left: lx + 2, top: ly - s * 1.22, opacity: vis(f, ln.at ?? at, undefined, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, lineHeight: 1.2, color: ln.color ?? INK, whiteSpace: 'pre', fontVariantNumeric: 'tabular-nums'}}>{ln.text}</div>;
		})}
		{children}
	</div>;
};
/** The painted motorbike, its alpha box's top left at (x, y), w wide. */
export const Bike: React.FC<{x: number; y: number; w: number; at?: number; out?: number}> = ({x, y, w, at = -30, out}) => {
	usePlatePreload([BIKE.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	return <FrameSvg style={{opacity: o}}><SvgPlate plate={BIKE} x={x} y={y} w={w} /></FrameSvg>;
};

// ---------- balance against months ----------
export type MonthCurve = {P: number; r: number; M: number; color?: string; dash?: string; width?: number; upTo?: number};
/** Balance after k months (closed form), clamped at 0 past the payoff. */
export const balAt = (c: {P: number; r: number; M: number}, k: number) => Math.max(0, loanBalance(c.P, c.r, c.M, k));
/** A balance graph in months: curves drawn to `upTo` months (or their payoff), an optional marker riding curve 0. */
export const MonthGraph: React.FC<{
	x: number; y: number; width: number; height: number; xMax?: number; yMax?: number; xTicks?: readonly number[]; curves: readonly MonthCurve[];
	marker?: {k: number; o: number}; at?: number; out?: number; extra?: (m: PlotMap) => React.ReactNode; yLabel?: string;
}> = ({x, y, width, height, xMax = 64, yMax = 21000, xTicks = [12, 24, 36, 48, 60], curves, marker, at = -30, out, extra, yLabel = 'balance owed'}) => (
	<StudioPlot x={x} y={y} width={width} height={height} window={{x: [0, xMax], y: [0, yMax]}} xTicks={xTicks}
		yTicks={[5000, 10000, 15000, 20000].filter(v => v <= yMax).map(v => ({value: v, label: m0(v)}))} xLabel="months" yLabel={yLabel} at={at} out={out}>
		{m => <g>
			<g clipPath={m.clip}>{curves.map((c, i) => {
				const end = Math.min(c.upTo ?? xMax, xMax);
				if (end <= 0) return null;
				let d = '';
				for (let j = 0; j <= 200; j++) {const k = (end * j) / 200, [a, b] = m.p(k, balAt(c, k)); d += `${j ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
				return <path key={i} d={d} fill="none" stroke={c.color ?? INK} strokeWidth={c.width ?? 6} strokeDasharray={c.dash} strokeLinejoin="round" />;
			})}</g>
			{marker && marker.o > 0.01 ? (() => {const c0 = curves[0], [a, b] = m.p(marker.k, balAt(c0, marker.k)); return <g opacity={marker.o}><circle cx={a} cy={b} r={16} fill={CARD} stroke={INK} strokeWidth={6} /><circle cx={a} cy={b} r={6} fill={INK} /></g>;})() : null}
			{extra ? extra(m) : null}
		</g>}
	</StudioPlot>
);

// ---------- f10's last frame: the bike, the tag and a dashed curve to "?" ----------
export const BB = {bikeX: 40, bikeY: 540, bikeW: 660, tagX: 760, tagY: 280, tagH: 440, gx: 1110, gy: 230, gw: 760, gh: 520};
/** The bike and tag with the dashed $20,000 curve ending in "?" (f10's handoff frame); `lines` are the tag's lines. */
export const BikeBoard: React.FC<{lines?: readonly (TagLine | null)[]; graph?: number; chips?: {n: number; next: number; q: number}}> = ({lines, graph = 1, chips}) => {
	return <>
		<Bike x={BB.bikeX} y={BB.bikeY} w={BB.bikeW} />
		<Tag x={BB.tagX} y={BB.tagY} h={BB.tagH} size={30} lines={lines ?? [{text: 'Loan $20,000'}, {text: '7.2% p.a., monthly', size: 26}, {text: '$400 a month'}, null]} />
		{graph > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: graph}}>
			<MonthGraph x={BB.gx} y={BB.gy} width={BB.gw} height={BB.gh} xTicks={[]} curves={[]} extra={m => {
				let d = '';
				for (let j = 0; j <= 60; j++) {const k = (36 * j) / 60, [a, b] = m.p(k, balAt({P: 20000, r: 0.006, M: 400}, k)); d += `${j ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)} `;}
				const [qx, qy] = m.p(36, balAt({P: 20000, r: 0.006, M: 400}, 36)), [, zy] = m.p(0, 0);
				return <g>
					<path d={d} fill="none" stroke={INK} strokeWidth={6} strokeDasharray="16 12" />
					<path d={`M${qx},${qy} Q ${qx + 120},${(qy + zy) / 2} ${qx + 170},${zy - 40}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 10" strokeLinecap="round" />
					<rect x={qx + 128} y={zy - 98} width={84} height={84} rx={16} fill={CARD} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
					<text x={qx + 170} y={zy - 38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, fill: INK_SOFT}}>?</text>
				</g>;
			}} />
		</div> : null}
		{chips ? <>
			<Chip x={1120} y={800} at={chips.n} size={52} color={INK}>n = ?</Chip>
			<Chip x={960} y={80} at={chips.next} size={42} color={BROWN}>Next: find the term exactly</Chip>
			<Chip x={1760} y={76} at={chips.q} size={80} color={BROWN}>?</Chip>
		</> : null}
	</>;
};
export {prog};
