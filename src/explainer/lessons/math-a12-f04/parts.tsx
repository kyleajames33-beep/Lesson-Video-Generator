// Lesson parts for math-a12-f04 (Revision 3: arithmetic models; a tree-planting crew, a theme park, a machine and a
// young tree), on the maths studio kit and the f01 to f03 board parts (imported read-only through ../math-a12-f03/parts).
// Lesson-local rigs:
// - Crew: the planting hillside. At t = 0 it is f03's final frame exactly (the painted hillside strip, brief 240, with
//   day tabs, tube seedlings one per 10 planted, bars 50, 80, 110, "+30" arcs, "?" tabs, the dashed "1,200 in total?"
//   line and the empty total column). At t = 1 the tabs have closed up, the bars stand on one chart line and the total
//   column sits beside day 12, so the day slider can raise every bar, plant every seedling and fill the column;
// - PctStrip (a fixed percentage: the steps grow), GuessChip (the crossed guess), CheckBars (two columns against a
//   target, on a broken scale), MiniBars (day strips for the question cards and feedback), QStrip (the worded question
//   at the top of a feedback scene, givens underlined), SlipLine (a one-line crossed mistake with its caption).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MarkSpan, SvgPlate, smooth, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {AMBER, AMBER_SOFT, AMBER_STROKE, BLUE, BLUE_SOFT, BROWN, HILL, POS, RED, SEED, TEAL, TEAL_SOFT, dayX, hillY, mix} from '../math-a12-f03/parts';

export * from '../math-a12-f03/parts';

// ---------- the numbers (design "Numbers to verify") ----------
export const aN = (n: number) => 50 + 30 * (n - 1);
export const SN = (n: number) => 15 * n * n + 35 * n;
/** Seedlings planted after a fractional number of days (whole days, then part of the next day's planting). */
export const plantedBy = (day: number) => {const n = Math.max(0, Math.min(12, Math.floor(day))); return SN(n) + (n < 12 ? (day - n) * aN(n + 1) : 0);};
export const park = (n: number) => 62000 + 3500 * (n - 1);
export const machine = (n: number) => 915 - 15 * n;
export const treeH = (t: number) => 120 + 45 * t;
export const cafe = (n: number) => 80 + 6 * (n - 1);
export const logs = (n: number) => 180 - 4 * (n - 1);
{
	const sumTo = (f: (k: number) => number, n: number) => Array.from({length: n}, (_, i) => f(i + 1)).reduce((s, v) => s + v, 0);
	const checks: [string, boolean][] = [
		['crew', aN(1) === 50 && aN(2) === 80 && aN(3) === 110 && aN(12) === 380 && 50 + 11 * 30 === 380 && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].every(n => SN(n) === sumTo(aN, n) && aN(n) === 30 * n + 20) && SN(12) === 2580 && 6 * 430 === 2580 && SN(7) === 980 && SN(8) === 1240 && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter(n => aN(n) > 100).length === 10 && 2580 > 2 * 1200],
		['percentage', Math.abs(50 * 1.03 - 51.5) < 1e-9 && Math.abs(51.5 * 1.03 - 53.045) < 1e-9],
		['park', [1, 5, 11, 12].every(n => park(n) === 3500 * n + 58500) && sumTo(park, 10) === 777500 && 5 * (124000 + 31500) === 777500 && 5 * 155500 === 777500 && 9 * 3500 === 31500 && park(11) === 97000 && park(12) === 100500 && Math.abs(41500 / 3500 - 83 / 7) < 1e-12 && Math.abs(83 / 7 - 11.86) < 0.005],
		['machine', machine(1) === 900 && machine(60) === 15 && machine(61) === 0 && machine(65) === -60 && sumTo(machine, 60) === 27450 && 30 * 915 === 27450],
		['tree', treeH(6) === 390 && treeH(5) === 345 && [120, 165, 210, 255, 300, 345, 390].every((v, i) => treeH(i) === v)],
		['A1', cafe(15) === 164 && 80 + 14 * 6 === 164 && sumTo(cafe, 15) === 1830 && 7.5 * 244 === 1830],
		['A2', logs(21) === 100 && logs(22) === 96 && 180 - 4 * 20 === 100],
		['handoff', [2, 4, 8, 16].every((v, i, a) => i === 0 || v / a[i - 1] === 2) && 4 - 2 === 2 && 8 - 4 === 4 && 16 - 8 === 8],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f04 numbers: ' + bad.join(', '));
}
const BLUE_SOFT_BAR = '#dceaf7';
export const fmt = (v: number) => Math.round(v).toLocaleString('en-AU');

// ---------- the planting hillside ----------
export const GUM: PlateSpec = {src: 'assets/maths/ma12-young-gum-tree-v1.png', nat: [897, 1752], box: [95, 135, 791, 1647]};
const HS = 1800 / HILL.nat[0];
const HILL_X = 60, HILL_TOP = 640;
const LBL_Y = HILL_TOP + (HILL.box[3] - HILL.box[1]) * HS + 34;
/** The chart line the bars and the total column stand on once the tabs have closed up. */
export const BASE_Y = 585;
export const COL = {x: 1400, w: 100, top: 172};
/** Total column: px per seedling (2,580 fills the column). */
export const CU = (BASE_Y - COL.top) / 2580;
export const LINE_Y = BASE_Y - 1200 * CU;
/** Left edge of the notes panel to the right of the total column. */
export const PANEL_X = 1552;
/** File y of the hillside plate's top surface at file x (Codex's measured profile, brief 240). */
export const hillFileY = (fx: number) => {
	const P = [[0, 517], [543, 501], [1086, 461], [1629, 505], [2171, 517]];
	for (let i = 0; i < P.length - 1; i++) if (fx >= P[i][0] && fx <= P[i + 1][0]) return P[i][1] + ((P[i + 1][1] - P[i][1]) * (fx - P[i][0])) / (P[i + 1][0] - P[i][0]);
	return 517;
};
export const crewX = (d: number, t: number) => 130 + (d - 1) * mix(148, 104, t);
const SH = 66, SW = (SH * (SEED.box[2] - SEED.box[0])) / (SEED.box[3] - SEED.box[1]);
export type CrewProps = {
	/** 0: f03's final frame. 1: tabs closed up, bars on one chart line, the column beside day 12. */
	t?: number;
	/** Bar height in px per seedling. */
	unit?: number;
	/** The planting slider: days up to floor(day) are planted; the fraction is the day in progress. */
	day?: number;
	/** Day 12's bar alone (0..1), before the slider reaches it. */
	bar12?: number;
	/** Days counted into the total column (fractional). */
	colDay?: number;
	arcs?: number; arcGlow?: number; q?: number; line?: number; hundred?: number; tabGlow?: number;
	/** A day tab to mark as the current day (0: none). */
	nowDay?: number;
	pulse?: (d: number) => number;
	o?: number;
};
export const Crew: React.FC<CrewProps> = ({t = 0, unit = 2.6, day = 3, bar12 = 0, colDay = 0, arcs = 1, arcGlow = 0, q = 1, line = 1, hundred = 0, tabGlow = 0, nowDay = 0, pulse, o = 1}) => {
	usePlatePreload([HILL.src, SEED.src]);
	if (o <= 0.001) return null;
	const X = (d: number) => crewX(d, t);
	const baseOf = (d: number) => mix(hillY(dayX(d)) - 70, BASE_Y, t);
	const g = (d: number) => (d <= 3 ? 1 : Math.max(0, Math.min(1, day - (d - 1))));
	const gb = (d: number) => (d === 12 ? Math.max(g(d), bar12) : g(d));
	const top = (d: number) => baseOf(d) - aN(d) * unit * smooth(gb(d));
	const sprites: {x: number; y: number; s: number; o: number; k: number}[] = [];
	for (let d = 1; d <= 12; d++) {
		const n = aN(d) / 10, shown = g(d) * n;
		if (shown <= 0) continue;
		const cols = Math.ceil(n / 2), cx = X(d);
		for (let j = 0; j < Math.min(n, Math.ceil(shown)); j++) {
			const part = Math.min(1, shown - j);
			const r1 = Math.floor(j / 4), c1 = j % 4;
			const ox1 = (c1 - 1.5) * 22 + (r1 % 2 ? 5.5 : -5.5), oy1 = 10 + r1 * 16;
			let ox = ox1, oy = oy1;
			if (d <= 3) {
				const r0 = j % 2, c0 = Math.floor(j / 2);
				ox = mix((c0 - (cols - 1) / 2) * (SW * 0.7) + (r0 ? SW * 0.35 : 0), ox1, t);
				oy = mix(10 + r0 * 14, oy1, t);
			}
			const x = cx + ox;
			sprites.push({x, y: hillY(x) + oy, s: 0.4 + 0.6 * smooth(part), o: Math.min(1, part * 2.5), k: sprites.length});
		}
	}
	if (t > 0.02) sprites.sort((a, b) => a.y - b.y || a.k - b.k);
	const cx0 = mix(1700, COL.x, t), cw = mix(110, COL.w, t), ctop = mix(230, COL.top, t), cbot = mix(hillY(1755) - 20, BASE_Y, t);
	const ly = mix(300, LINE_Y, t);
	const total = plantedBy(colDay);
	const hy = BASE_Y - 100 * unit;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg>
				<SvgPlate plate={HILL} x={HILL_X} y={HILL_TOP} w={1800} />
				{Array.from({length: 12}, (_, i) => {const d = i + 1, gl = Math.max(tabGlow, nowDay === d ? 1 : 0); return <g key={i}>
					{gl > 0.01 ? <rect x={X(d) - 50} y={LBL_Y - 31} width={100} height={42} rx={12} fill={AMBER_SOFT} opacity={gl} /> : null}
					<text x={X(d)} y={LBL_Y} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>day {d}</text>
				</g>;})}
			</FrameSvg>
			<FrameSvg>
				{t > 0.01 ? <line x1={84} x2={1520} y1={BASE_Y} y2={BASE_Y} stroke={INK} strokeWidth={4} strokeLinecap="round" opacity={t} /> : null}
				{sprites.map(s => <SvgPlate key={s.k} plate={SEED} x={s.x - (SW * s.s) / 2} y={s.y - SH * s.s} w={SW * s.s} opacity={s.o} />)}
				{Array.from({length: 12}, (_, i) => {
					const d = i + 1, op = Math.min(1, gb(d) * 6);
					if (op <= 0.01) return null;
					const cx = X(d), h = aN(d) * unit * smooth(gb(d)), pu = pulse ? pulse(d) : 0;
					return <g key={'b' + d} opacity={op}>
						<rect x={cx - 34} y={top(d)} width={68} height={h} rx={6} fill={BLUE_SOFT_BAR} stroke={BLUE} strokeWidth={4} />
						{pu > 0.01 ? <rect x={cx - 40} y={top(d) - 6} width={80} height={h + 12} rx={10} fill="none" stroke={AMBER_STROKE} strokeWidth={6} opacity={pu} /> : null}
						<text x={cx} y={top(d) - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: BLUE}}>{aN(d)}</text>
					</g>;
				})}
				{arcs > 0.01 ? [0, 1].map(i => {const inset = mix(36, 10, t), x0 = X(i + 1) + inset, x1 = X(i + 2) - inset, y0 = top(i + 1) - 64, y1 = top(i + 2) - 64; return <g key={'a' + i} opacity={arcs}>
					<path d={`M${x0},${y0} Q${(x0 + x1) / 2},${Math.min(y0, y1) - 60} ${x1},${y1}`} stroke={AMBER_STROKE} strokeWidth={5 + 4 * arcGlow} fill="none" />
					<text x={(x0 + x1) / 2} y={Math.min(y0, y1) - 48} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: AMBER}} stroke={CARD} strokeWidth={6} paintOrder="stroke">+30</text>
				</g>;}) : null}
				{Array.from({length: 9}, (_, i) => {const d = i + 4, op = q * (1 - Math.min(1, gb(d) * 4)); return op > 0.01 ? <text key={'q' + i} x={X(d)} y={mix(hillY(dayX(d)) - 90, BASE_Y - 16, t)} textAnchor="middle" opacity={op} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: INK_SOFT}}>?</text> : null;})}
				{hundred > 0.01 ? <g opacity={hundred}>
					<line x1={X(2) + 46} x2={X(12) + 46} y1={hy} y2={hy} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
					<text x={X(12) + 54} y={hy + 11} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>100</text>
				</g> : null}
				<g opacity={line}>
					<rect x={cx0} y={ctop} width={cw} height={cbot - ctop} rx={8} fill="none" stroke={TEAL} strokeWidth={4} strokeDasharray="12 8" />
					{total > 0.5 ? <rect x={cx0} y={cbot - total * CU} width={cw} height={total * CU} rx={8} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={4} /> : null}
					<line x1={mix(1060, COL.x - 15, t)} x2={mix(1840, COL.x + COL.w + 40, t)} y1={ly} y2={ly} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
					{t < 0.33 ? <text x={1680} y={286} textAnchor="end" opacity={1 - t * 3} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">1,200 in total?</text> : null}
					{t > 0.7 ? <text x={PANEL_X} y={LINE_Y + 13} opacity={(t - 0.7) / 0.3} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}}>1,200 in total?</text> : null}
					<text x={mix(1755, COL.x + COL.w / 2, t)} y={mix(hillY(1755) - 30, BASE_Y + 38, t)} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: TEAL}}>total</text>
				</g>
			</FrameSvg>
		</div>
	);
};

// ---------- a fixed percentage: the steps grow ----------
export const PctStrip: React.FC<{x: number; base: number; at: number; out?: number; stepsAt: number}> = ({x, base, at, out, stepsAt}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const vals = [50, 51.5, 53.045], cx = (i: number) => x + 50 + i * 110, top = (i: number) => base - vals[i] * 1.6;
	return <FrameSvg style={{opacity: o}}>
		<line x1={x} x2={x + 320} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{vals.map((v, i) => <g key={i} opacity={prog(f, at + i * 10, 10)}>
			<rect x={cx(i) - 32} y={top(i)} width={64} height={v * 1.6} rx={6} fill={BLUE_SOFT} stroke={BLUE} strokeWidth={4} />
			<text x={cx(i)} y={top(i) - 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: BLUE}}>{i === 0 ? '50' : v.toFixed(2)}</text>
		</g>)}
		{[0, 1].map(i => {const x0 = cx(i) + 8, x1 = cx(i + 1) - 8, y0 = top(i) - 48; return <g key={'a' + i} opacity={prog(f, at + 14 + i * 10, 10)}>
			<path d={`M${x0},${y0} Q${(x0 + x1) / 2},${y0 - 44} ${x1},${y0}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" />
			<text x={(x0 + x1) / 2} y={y0 - 34} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: AMBER}}>+3%</text>
			<text x={(x0 + x1) / 2} y={base + 38} textAnchor="middle" opacity={prog(f, stepsAt + i * 14, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: POS}}>{i === 0 ? '+1.50' : '+1.55'}</text>
		</g>;})}
	</FrameSvg>;
};

// ---------- the guess, crossed when the total is known ----------
export const GuessChip: React.FC<{x: number; y: number; at: number; crossAt?: number; children: React.ReactNode}> = ({x, y, at, crossAt, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	const s = crossAt === undefined ? 0 : prog(f, crossAt, 12), s2 = crossAt === undefined ? 0 : prog(f, crossAt + 8, 12);
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, border: `4px dashed ${s > 0.5 ? RED : INK_SOFT}`, borderRadius: 18, padding: '6px 20px 8px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: INK_SOFT, whiteSpace: 'pre', lineHeight: 1.25}}>
		{children}
		{s > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: 8, top: 8, width: 'calc(100% - 16px)', height: 'calc(100% - 16px)', overflow: 'visible'}}>
			<path d="M0,0 L100,100" stroke={RED} strokeWidth={7} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - s} />
			<path d="M100,0 L0,100" stroke={RED} strokeWidth={7} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - s2} />
		</svg> : null}
	</div>;
};

// ---------- two (or more) columns against a target, on a broken scale ----------
/** Columns measured from `from` (the scale is broken below it: a zigzag on the axis), with a dashed target line. */
export const CheckBars: React.FC<{x: number; base: number; from: number; unit: number; pitch?: number; barW?: number; line: {v: number; label: string; at: number}; bars: readonly {label: string; v: number; text: string; at: number}[]; at?: number; out?: number}> = ({x, base, from, unit, pitch = 250, barW = 120, line, bars, at = -30, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const w = (bars.length - 1) * pitch + barW + 150, ly = base - (line.v - from) * unit;
	const cx = (i: number) => x + 150 + barW / 2 + i * pitch;
	return <FrameSvg style={{opacity: o}}>
		<path d={`M${x},${base} H${x + 40} l8,-12 l12,24 l12,-24 l8,12 H${x + w + 30}`} stroke={INK} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
		{bars.map((b, i) => {const p = smooth(prog(f, b.at, 16)), h = (b.v - from) * unit * p; return <g key={i} opacity={prog(f, b.at, 8)}>
			<rect x={cx(i) - barW / 2} y={base - h} width={barW} height={h} rx={8} fill={BLUE_SOFT} stroke={BLUE} strokeWidth={4} />
			<text x={cx(i)} y={base + 38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}}>{b.label}</text>
			<text x={cx(i)} y={base + 80} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: BLUE}}>{b.text}</text>
		</g>;})}
		<g opacity={prog(f, line.at, 12)}>
			<line x1={x + 142} x2={x + w + 30} y1={ly} y2={ly} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
			<text x={x + 118} y={ly + 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>{line.label}</text>
		</g>
	</FrameSvg>;
};

// ---------- day strips for the question cards and their feedback ----------
export type MiniBar = {d: number; v: number; at?: number; label?: boolean};
/**
 * A strip of day slots on a line: bars for the listed days (value × unit px, risen at `at`), "?" over the others,
 * day labels under the listed positions, an optional dashed level and an optional total column at the right.
 */
export const MiniBars: React.FC<{x: number; base: number; n: number; pitch: number; barW: number; unit: number; bars: readonly MiniBar[]; labels: readonly number[]; q?: boolean; dots?: boolean;
	level?: {v: number; label: string}; column?: {x: number; w: number; h: number; label: string; fill?: {v: number; unit: number; at: number; text: string}}}> = ({x, base, n, pitch, barW, unit, bars, labels, q = true, dots = false, level, column}) => {
	const f = useCurrentFrame();
	const cx = (d: number) => x + (d - 0.5) * pitch;
	const has = new Map(bars.map(b => [b.d, b]));
	const right = x + n * pitch + (dots ? pitch : 0);
	return <FrameSvg>
		<line x1={x - 16} x2={(column ? column.x + column.w : right) + 16} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{Array.from({length: n}, (_, i) => {
			const d = i + 1, b = has.get(d);
			if (!b) return q ? <text key={d} x={cx(d)} y={base - 26} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.min(44, Math.max(30, pitch * 0.7)), fill: INK_SOFT}}>?</text> : null;
			const p = smooth(prog(f, b.at ?? -30, 14)), h = b.v * unit * p;
			return <g key={d} opacity={prog(f, b.at ?? -30, 8)}>
				<rect x={cx(d) - barW / 2} y={base - h} width={barW} height={h} rx={5} fill={BLUE_SOFT} stroke={BLUE} strokeWidth={3.5} />
				{b.label ? <text x={cx(d)} y={base - b.v * unit - 22} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: BLUE}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{b.v}</text> : null}
			</g>;
		})}
		{dots ? <text x={x + (n + 0.5) * pitch} y={base - 26} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: INK_SOFT}}>…</text> : null}
		{labels.map(d => <text key={'l' + d} x={cx(d)} y={base + 38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>day {d}</text>)}
		{level ? <g>
			<line x1={x + pitch + 6} x2={right + 10} y1={base - level.v * unit} y2={base - level.v * unit} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
			<text x={right + 22} y={base - level.v * unit + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}}>{level.label}</text>
		</g> : null}
		{column ? <g>
			<rect x={column.x} y={base - column.h} width={column.w} height={column.h} rx={8} fill="none" stroke={TEAL} strokeWidth={4} strokeDasharray="12 8" />
			{column.fill ? (() => {const p = smooth(prog(f, column.fill.at, 24)), h = column.fill.v * column.fill.unit * p; return <g opacity={prog(f, column.fill.at, 8)}>
				<rect x={column.x} y={base - h} width={column.w} height={h} rx={8} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={4} />
			</g>;})() : null}
			<text x={column.x + column.w / 2} y={base - column.h - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: TEAL}}>{column.fill && f >= column.fill.at + 10 ? column.fill.text : column.label}</text>
		</g> : null}
	</FrameSvg>;
};

// ---------- the worded question at the top of a feedback scene ----------
export type QPart = string | {u: string; at: number};
/** The full question at 30 px in a strip; the listed phrases are underlined on their cues. */
export const QStrip: React.FC<{parts: readonly QPart[]; y?: number}> = ({parts, y = 160}) => (
	<div style={{position: 'absolute', left: 96, top: y, width: 1728, boxSizing: 'border-box', background: CARD, borderRadius: 18, borderLeft: `10px solid ${BROWN}`, boxShadow: CARD_SHADOW, padding: '12px 28px 16px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, lineHeight: 1.4, color: INK}}>
		{parts.map((p, i) => (typeof p === 'string' ? <span key={i}>{p}</span> : <MarkSpan key={i} kind="underline" at={p.at} color={AMBER_STROKE} width={5}><span style={{fontWeight: 800}}>{p.u}</span></MarkSpan>))}
	</div>
);

// ---------- a one-line crossed mistake with its caption ----------
export const SlipLine: React.FC<{x: number; y: number; at: number; size?: number; caption: string; children: React.ReactNode}> = ({x, y, at, size = 42, caption, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	const s = prog(f, at + 12, 12);
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', alignItems: 'center', gap: 22, background: CARD, border: `3px solid ${RED}`, borderRadius: 18, padding: '6px 24px 8px', boxShadow: CARD_SHADOW}}>
		<div style={{position: 'relative', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK_SOFT, whiteSpace: 'pre'}}>
			{children}
			<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -8, top: 0, width: 'calc(100% + 16px)', height: '100%', overflow: 'visible'}}>
				<path d="M0,64 Q50,50 100,38" stroke={RED} strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - s} />
			</svg>
		</div>
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color: RED, opacity: prog(f, at + 22, 12), whiteSpace: 'pre', lineHeight: 1.1}}>{caption}</div>
	</div>;
};
