// Lesson parts for math-a12-i14 (Revision 2: displacement, velocity and acceleration in both directions; a robot
// vacuum in a hallway, then snow depth on a ski-field post), on the maths studio kit. Lesson-local rigs:
// - Hallway: the painted hallway floor (brief 238 plate, tiled at native aspect; its two halves join seamlessly)
//   with a coded number line in cm (−5 to 40) and the painted robot vacuum (brief 238 plate) placed by its measured
//   body centre (379, 404) and radius 249 file px, a teal velocity arrow scaled by v from the body's edge, teal open
//   rest circles, a dashed "about to move" arrow and a leg lane (scene 5). The kit StudioParticleTrack centres the
//   sprite on its alpha box (the side brush shifts that 26 px off the body) and draws grey rest rings and a blue
//   trail, so the lesson draws its own track to keep the colour roles (rest circles teal, arrow teal);
// - Stack: one to three linked panels (x, v and a) on one shared time axis, with compact margins so three panels fit
//   under the floor strip. Every panel maps t identically, so riders, columns and stubs line up exactly. The kit
//   StudioStackedDerivativePanels labels the shared axis "x" (here x is displacement) and draws the tangent violet
//   (here the tangent's gradient is v, teal), so it is not used;
// - SnowPost: the painted snow-depth post (brief 238 plate; ticks every 50 cm at y = 1686 − 4.68 D file px) with a
//   coded snow pack whose surface sits exactly at depth D at the post, and coded depth labels beside it;
// - small board parts: Row, Hand, Chip, BoxCard, AnswerBox, Task, Int (an integral sign with limits), FramedCard.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL, SvgPlate, smooth, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export const BLUE = MATH_BLUE;
export const TEAL = MATH_TEAL;
export const VIOLET = MATH_GRADIENT;
export const AMBER = MATH_AMBER;
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const SOFT = '#4f4840';
export const TEAL_SOFT = '#d6eeee';
export const WARM_SOFT = '#f8e0d2';
export const VIOLET_SOFT = '#e7e0f2';
export const AMBER_STROKE = '#d18f1f';
export const TEAL_STROKE = '#1f8a8f';

// ---------- the models (design author notes a, c, d, e) ----------
export const xr = (t: number) => t * t * t - 9 * t * t + 24 * t;
export const vr = (t: number) => 3 * t * t - 18 * t + 24;
export const ar = (t: number) => 6 * t - 18;
export const a1 = (t: number) => 6 * t - 4;
export const v1 = (t: number) => 3 * t * t - 4 * t;
export const x1 = (t: number) => t * t * t - 2 * t * t;
export const Dsn = (t: number) => 100 + 20 * t - t * t;
export const Dr = (t: number) => 20 - 2 * t;
export const xq1 = (t: number) => t * t * t - 6 * t * t + 9 * t;
export const vq1 = (t: number) => 3 * (t - 1) * (t - 3);
export const aq1 = (t: number) => 6 * t - 12;
export const xq2 = (t: number) => 2 * t * t - t * t * t + 2 * t + 1;
{
	const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) < tol;
	const d = (f: (t: number) => number, t: number) => (f(t + 1e-5) - f(t - 1e-5)) / 2e-5;
	const checks: [string, boolean][] = [
		['robot positions', [0, 16, 20, 18, 16, 20, 36].every((v, i) => near(xr(i), v))],
		['robot v, a', [0.3, 1.7, 2.5, 4.2].every(t => near(d(xr, t), vr(t), 1e-4) && near(d(vr, t), ar(t), 1e-4)) && near(vr(2), 0) && near(vr(4), 0)],
		['hook', near(xr(2.5), 155 / 8) && near(vr(2.5), -9 / 4) && near(ar(2.5), -3) && near(vr(3), -3) && near(vr(1), 9) && near(ar(1), -12) && near(ar(2), -6) && near(ar(3), 0)],
		['displacement, distance', near(xr(6) - xr(0), 36) && near(Math.abs(xr(2) - xr(0)) + Math.abs(xr(4) - xr(2)) + Math.abs(xr(6) - xr(4)), 44)],
		['problem 1', [0.4, 1.1, 1.9].every(t => near(d(x1, t), v1(t), 1e-4) && near(d(v1, t), a1(t), 1e-4)) && near(v1(0), 0) && near(x1(0), 0) && near(x1(2), 0) && near(x1(4 / 3), -32 / 27) && near(v1(4 / 3), 0) && near(2 * 32 / 27, 64 / 27)],
		['handoff', near(x1(1), -1) && near(x1(2), 0) && near(x1(3), 9) && near(x1(4), 32)],
		['snow', near(Dsn(0), 100) && near(Dsn(5), 175) && near(Dsn(10), 200) && near(Dsn(20), 100) && near(Dr(5), 10) && near(Dr(10), 0) && [2, 7, 13].every(t => near(d(Dsn, t), Dr(t), 1e-4))],
		['A1', near(vq1(1), 0) && near(aq1(1), -6) && [0.5, 2.2].every(t => near(d(xq1, t), vq1(t), 1e-4))],
		['A2', near(xq2(0), 1) && near(xq2(2), 5) && near(xq2(2) - 1, 4) && near(d(xq2, 0), 2, 1e-4) && [0.4, 1.5].every(t => near(d(u => d(xq2, u), t), 4 - 6 * t, 1e-2))],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i14 numbers: ' + bad.join(', '));
}

// ---------- plates (brief 238 manifest measurements) ----------
export const ROBOT: PlateSpec = {src: 'assets/maths/ma12-robot-vacuum-top-v1.png', nat: [800, 800], box: [135, 153, 675, 656]};
export const FLOOR: PlateSpec = {src: 'assets/maths/ma12-hallway-floor-v1.png', nat: [2400, 400], box: [0, 0, 2400, 338]};
export const POST: PlateSpec = {src: 'assets/maths/ma12-snow-post-v1.png', nat: [900, 2000], box: [93, 266, 805, 1757]};
const ROBOT_C = [379, 404] as const;
const ROBOT_R = 249;

// ---------- the hallway ----------
export const FL = {x: 150, w: 1640, y: 152, h: 160, lo: -5, hi: 40} as const;
export const HX = (v: number) => FL.x + ((v - FL.lo) / (FL.hi - FL.lo)) * FL.w;
export const NLY = FL.y + FL.h + 12;
const RW = 172;
const RS = RW / (ROBOT.box[2] - ROBOT.box[0]);
export const ROBOT_RADIUS = ROBOT_R * RS;
const robotCY = FL.y + 0.55 * FL.h;
export type Leg = {from: number; to: number; row: number; label: string; p: number};
/**
 * The painted floor with the number line in cm and the robot at `pos` (cm). `vel` (cm/s) draws the teal arrow from
 * the body's edge (8 px per cm/s); `arrowO` fades it. `rests` are teal open circles; `dashLeft` a short dashed arrow.
 */
export const Hallway: React.FC<{pos: number; vel?: number; arrowO?: number; robotO?: number; rests?: readonly {x: number; o: number; pulse?: number}[]; dashLeft?: number; origin?: number; legs?: readonly Leg[]; at?: number; out?: number}> = ({pos, vel = 0, arrowO = 0, robotO = 1, rests = [], dashLeft = 0, origin = 0, legs = [], at = -30, out}) => {
	usePlatePreload([ROBOT.src, FLOOR.src]);
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	const tw = (FL.h * (FLOOR.box[2] - FLOOR.box[0])) / (FLOOR.box[3] - FLOOR.box[1]);
	const tiles = [];
	for (let k = 0; FL.x - 40 + k * tw < FL.x + FL.w + 40; k++) tiles.push(<SvgPlate key={k} plate={FLOOR} x={FL.x - 40 + k * tw} y={FL.y} w={tw} />);
	const cx = HX(pos);
	const rx = cx - (ROBOT_C[0] - ROBOT.box[0]) * RS, ry = robotCY - (ROBOT_C[1] - ROBOT.box[1]) * RS;
	const al = vel * 8;
	const dir = Math.sign(al);
	const ax0 = cx + dir * (ROBOT_RADIUS + 6), ax1 = ax0 + al;
	const ticks = [-5, 0, 10, 16, 20, 30, 36, 40];
	return (
		<FrameSvg style={{opacity: o}}>
			<defs><clipPath id="i14-floor"><rect x={FL.x - 40} y={FL.y} width={FL.w + 80} height={FL.h} rx={10} /></clipPath></defs>
			<g clipPath="url(#i14-floor)">{tiles}</g>
			<line x1={FL.x - 30} x2={FL.x + FL.w + 30} y1={NLY} y2={NLY} stroke={INK} strokeWidth={4} />
			{ticks.map(t => <g key={t}><line x1={HX(t)} x2={HX(t)} y1={NLY - 11} y2={NLY + 11} stroke={INK} strokeWidth={3.5} /><text x={HX(t)} y={NLY + 42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: [0, 16, 20, 36].includes(t) ? INK : SOFT}}>{t < 0 ? '−' + Math.abs(t) : t}</text></g>)}
			<text x={HX(40) + 34} y={NLY + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: BLUE}}>x</text>
			<text x={HX(40) + 26} y={NLY + 44} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: SOFT}}>(cm)</text>
			{origin > 0.01 ? <g opacity={origin}><text x={HX(0) - 14} y={NLY - 16} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke">O</text></g> : null}
			{rests.map((r, i) => r.o > 0.01 ? <g key={i} opacity={r.o}>
				{r.pulse ? <circle cx={HX(r.x)} cy={NLY} r={14 + 16 * r.pulse} fill="none" stroke={TEAL_STROKE} strokeWidth={4} opacity={1 - r.pulse * 0.6} /> : null}
				<circle cx={HX(r.x)} cy={NLY} r={13} fill={CARD} stroke={TEAL} strokeWidth={5} />
			</g> : null)}
			{legs.map((l, i) => {
				if (l.p <= 0.001) return null;
				const y = NLY + 74 + l.row * 42, a = HX(l.from), b = HX(l.from + (l.to - l.from) * Math.min(1, l.p)), s = Math.sign(l.to - l.from);
				return <g key={'g' + i}>
					<line x1={a} x2={b} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
					{l.p > 0.15 ? <path d={`M${b - s * 16},${y - 11} L${b},${y} L${b - s * 16},${y + 11}`} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null}
					{l.p >= 1 ? <text x={Math.max(HX(l.from), HX(l.to)) + 18} y={y + 11} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{l.label}</text> : null}
				</g>;
			})}
			<g opacity={robotO}>
				<SvgPlate plate={ROBOT} x={rx} y={ry} w={RW} />
				{arrowO > 0.01 && Math.abs(al) > 6 ? <g opacity={arrowO}>
					<line x1={ax0} x2={ax1} y1={robotCY} y2={robotCY} stroke={CARD} strokeWidth={15} strokeLinecap="round" />
					<path d={`M${ax1 - dir * 20},${robotCY - 15} L${ax1},${robotCY} L${ax1 - dir * 20},${robotCY + 15}`} stroke={CARD} strokeWidth={15} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					<line x1={ax0} x2={ax1} y1={robotCY} y2={robotCY} stroke={TEAL} strokeWidth={8} strokeLinecap="round" />
					<path d={`M${ax1 - dir * 20},${robotCY - 15} L${ax1},${robotCY} L${ax1 - dir * 20},${robotCY + 15}`} stroke={TEAL} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				</g> : null}
				{dashLeft > 0.01 ? <g opacity={dashLeft}>
					<line x1={cx - ROBOT_RADIUS - 10} x2={cx - ROBOT_RADIUS - 110} y1={robotCY} y2={robotCY} stroke={CARD} strokeWidth={14} strokeLinecap="round" />
					<line x1={cx - ROBOT_RADIUS - 10} x2={cx - ROBOT_RADIUS - 110} y1={robotCY} y2={robotCY} stroke={TEAL} strokeWidth={7} strokeDasharray="14 10" />
					<path d={`M${cx - ROBOT_RADIUS - 92},${robotCY - 14} L${cx - ROBOT_RADIUS - 112},${robotCY} L${cx - ROBOT_RADIUS - 92},${robotCY + 14}`} stroke={TEAL} strokeWidth={7} fill="none" strokeLinecap="round" />
				</g> : null}
			</g>
		</FrameSvg>
	);
};

// ---------- linked panels ----------
export type Pan = {
	fn: (t: number) => number; y: readonly [number, number]; h: number; color: string; title: string; titleT: number;
	yTicks: readonly {v: number; label: string}[];
	/** Draw the curve from `from` up to this t (default: the whole window). */
	upto?: number; from?: number; o?: number; curveO?: number;
};
export type PanMap = {p: (t: number, y: number) => [number, number]; top: number; bot: number; L: number; R: number; y0: number; y1: number; fn: (t: number) => number};
export const panMaps = (x: number, y: number, w: number, win: readonly [number, number], panels: readonly Pan[], gap: number): PanMap[] => {
	const L = x + 110, R = x + w - 24;
	let top = y;
	return panels.map(pn => {
		const t0 = top, h = pn.h, pad = 12;
		top += h + gap;
		return {
			p: (t: number, v: number): [number, number] => [L + ((t - win[0]) / (win[1] - win[0])) * (R - L), t0 + pad + ((pn.y[1] - v) / (pn.y[1] - pn.y[0])) * (h - 2 * pad)],
			top: t0, bot: t0 + h, L, R, y0: pn.y[0], y1: pn.y[1], fn: pn.fn,
		};
	});
};
export const curvePath = (m: PanMap, fn: (t: number) => number, a: number, b: number, n = 220) => {
	let d = '';
	for (let i = 0; i <= n; i++) {const t = a + ((b - a) * i) / n; const [px, py] = m.p(t, Math.max(m.y0 - 2, Math.min(m.y1 + 2, fn(t)))); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)} `;}
	return d;
};
export const regionD = (m: PanMap, fn: (t: number) => number, a: number, b: number, n = 120) => {
	if (!(b > a)) return '';
	const [ax, ay] = m.p(a, 0), [bx, by] = m.p(b, 0);
	return `M${ax},${ay} ${curvePath(m, fn, a, b, n).replace(/^M/, 'L')} L${bx},${by} Z`;
};
/** One to three linked panels on a shared time axis; `kids` draws overlays in frame space with the panel maps. */
export const Stack: React.FC<{x: number; y: number; w: number; win: readonly [number, number]; panels: readonly Pan[]; gap?: number; xTicks: readonly number[]; xLabel?: string; o?: number; under?: (ms: PanMap[]) => React.ReactNode; kids?: (ms: PanMap[]) => React.ReactNode}> = ({x, y, w, win, panels, gap = 12, xTicks, xLabel = 't (s)', o = 1, under, kids}) => {
	if (o <= 0.001) return null;
	const ms = panMaps(x, y, w, win, panels, gap);
	const last = panels.reduce((k, p, i) => ((p.o ?? 1) > 0.5 ? i : k), 0);
	return (
		<FrameSvg style={{opacity: o}}>
			<defs>{ms.map((m, i) => <clipPath key={i} id={`i14-pan-${i}`}><rect x={m.L - 2} y={m.top + 2} width={m.R - m.L + 4} height={m.bot - m.top - 4} /></clipPath>)}</defs>
			{panels.map((pn, i) => {
				const m = ms[i], po = pn.o ?? 1;
				if (po <= 0.01) return null;
				const [, zy] = m.p(0, 0);
				const [ox] = m.p(0, 0);
				return <g key={i} opacity={po}>
					<rect x={m.L - 6} y={m.top} width={m.R - m.L + 12} height={m.bot - m.top} rx={12} fill={CARD} stroke="rgba(60,45,20,0.12)" strokeWidth={2} />
					{pn.yTicks.map(t => {const [, ty] = m.p(0, t.v); return <g key={t.v}><line x1={m.L} x2={m.R} y1={ty} y2={ty} stroke="#e8e0d0" strokeWidth={2} /><text x={m.L - 14} y={ty + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: SOFT}}>{t.label}</text></g>;})}
					{xTicks.map(t => {const [tx] = m.p(t, 0); return <line key={t} x1={tx} x2={tx} y1={m.top + 4} y2={m.bot - 4} stroke="#efe8da" strokeWidth={2} />;})}
					<line x1={m.L} x2={m.R} y1={zy} y2={zy} stroke={INK} strokeWidth={3.5} />
					<line x1={ox} x2={ox} y1={m.top + 4} y2={m.bot - 4} stroke={INK} strokeWidth={3.5} />
				</g>;
			})}
			{under ? under(ms) : null}
			{panels.map((pn, i) => {
				const m = ms[i], po = (pn.o ?? 1) * (pn.curveO ?? 1);
				if (po <= 0.01) return null;
				const a = pn.from ?? win[0], b = Math.min(win[1], pn.upto ?? win[1]);
				const [tx, ty] = m.p(pn.titleT, pn.y[1]);
				return <g key={'c' + i} opacity={pn.o ?? 1}>
					{b > a ? <g clipPath={`url(#i14-pan-${i})`} opacity={pn.curveO ?? 1}><path d={curvePath(m, pn.fn, a, b)} stroke={pn.color} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" /></g> : null}
					<text x={tx} y={ty + 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: pn.color}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{pn.title}</text>
				</g>;
			})}
			{(() => {const m = ms[last]; return <g>
				{xTicks.map(t => {const [tx] = m.p(t, 0); return <text key={t} x={tx} y={m.bot + 34} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: SOFT}}>{t}</text>;})}
			</g>;})()}
			{(() => {const m = ms[last]; return <text x={m.L - 14} y={m.bot + 34} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{xLabel}</text>;})()}
			{kids ? kids(ms) : null}
		</FrameSvg>
	);
};
/** A rider dot on a panel at t. */
export const Dot: React.FC<{m: PanMap; t: number; color: string; o?: number; r?: number; open?: boolean}> = ({m, t, color, o = 1, r = 12, open = false}) => {
	if (o <= 0.01) return null;
	const [px, py] = m.p(t, Math.max(m.y0, Math.min(m.y1, m.fn(t))));
	return <circle cx={px} cy={py} r={r} fill={open ? CARD : color} stroke={open ? color : CARD} strokeWidth={open ? 5 : 4} opacity={o} />;
};
/** A tangent stub on a panel at t with gradient s (data units), half-length hl px. */
export const Stub: React.FC<{m: PanMap; t: number; s: number; color: string; o?: number; hl?: number}> = ({m, t, s, color, o = 1, hl = 110}) => {
	if (o <= 0.01) return null;
	const [px, py] = m.p(t, m.fn(t));
	const [qx, qy] = m.p(t + 1, m.fn(t) + s);
	const vx = qx - px, vy = qy - py, l = Math.hypot(vx, vy);
	return <g opacity={o}>
		<line x1={px - (vx / l) * hl} y1={py - (vy / l) * hl} x2={px + (vx / l) * hl} y2={py + (vy / l) * hl} stroke={CARD} strokeWidth={11} strokeLinecap="round" />
		<line x1={px - (vx / l) * hl} y1={py - (vy / l) * hl} x2={px + (vx / l) * hl} y2={py + (vy / l) * hl} stroke={color} strokeWidth={6} strokeLinecap="round" />
	</g>;
};
/** A dashed column at t through panels ms[from..to]. */
export const Column: React.FC<{ms: PanMap[]; t: number; o?: number; label?: string; from?: number; to?: number; glow?: number}> = ({ms, t, o = 1, label, from = 0, to, glow = 0}) => {
	if (o <= 0.01) return null;
	const last = to ?? ms.length - 1;
	const [X] = ms[from].p(t, 0);
	const top = ms[from].top + 4, bot = ms[last].bot - 4;
	return <g opacity={o}>
		{glow > 0 ? <rect x={X - 16} y={top} width={32} height={bot - top} rx={10} fill="#f8e8c8" opacity={0.8 * glow} /> : null}
		<line x1={X} x2={X} y1={top} y2={bot} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" />
		{label ? <text x={X} y={top + 30} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{label}</text> : null}
	</g>;
};
/** Text label in frame space (SVG), stroked on paper. */
export const Lbl: React.FC<{x: number; y: number; text: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; o?: number}> = ({x, y, text, color = INK, size = 34, anchor = 'start', hand = false, o = 1}) => (o <= 0.01 ? null :
	<text x={x} y={y} textAnchor={anchor} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill: color}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{text}</text>);

// ---------- the snow post ----------
const POST_Y = (D: number) => 1686 - 4.68 * D;
export const postW = (h: number) => (h * (POST.box[2] - POST.box[0])) / (POST.box[3] - POST.box[1]);
/** The painted post (alpha box top-left at x, y; height h) with the coded snow pack at depth D cm. */
export const SnowPost: React.FC<{x: number; y: number; h: number; D: number; labels?: boolean; peak?: number; at?: number; out?: number}> = ({x, y, h, D, labels = true, peak = 0, at = -30, out}) => {
	usePlatePreload([POST.src]);
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	const w = postW(h), s = w / (POST.box[2] - POST.box[0]);
	const F = (fx: number, fy: number): [number, number] => [x + (fx - POST.box[0]) * s, y + (fy - POST.box[1]) * s];
	const [, ly] = F(0, POST_Y(D));
	const [pl] = F(392, 0), [pr] = F(500, 0);
	const [, gy] = F(0, 1720);
	const L = x - 50, R = x + w + 40;
	// A broad drift across the slope: its surface is exactly at depth D where it meets the post and dips a little
	// towards the edges; the base is the ground line.
	const N = 40;
	let top = '';
	for (let i = 0; i <= N; i++) {
		const u = i / N, xx = L + (R - L) * u, edge = Math.min(u, 1 - u);
		const atPost = xx > pl - 20 && xx < pr + 20;
		const ramp = Math.min(1, edge / 0.44), sm = ramp * ramp * (3 - 2 * ramp);
		const yy = atPost ? ly : gy - (gy - ly) * sm + 4 * Math.sin(u * 17) * sm;
		top += `${i ? 'L' : 'M'}${xx.toFixed(1)},${Math.min(gy - 8, yy).toFixed(1)} `;
	}
	const snow = `${top} L${R},${gy} Q${(L + R) / 2},${gy + 22} ${L},${gy} Z`;
	return (
		<FrameSvg style={{opacity: o}}>
			<SvgPlate plate={POST} x={x} y={y} w={w} />
			<defs><linearGradient id="i14-snow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#dfe8f2" /></linearGradient></defs>
			<path d={snow} fill="url(#i14-snow)" stroke="#9fb3c8" strokeWidth={3} />
			<path d={`M${pl - 60},${ly + 5} L${pl},${ly} L${pr},${ly} L${pr + 60},${ly + 5}`} stroke="#6f8fb0" strokeWidth={5} fill="none" strokeLinecap="round" />
			{peak > 0.01 ? <line x1={pl - 30} x2={pr + 30} y1={ly} y2={ly} stroke={GREEN} strokeWidth={6} opacity={peak} /> : null}
			{labels ? [50, 100, 150, 200, 250].map(v => {const [, ty] = F(0, POST_Y(v)); return <g key={v}><line x1={pl - 30} x2={pl - 8} y1={ty} y2={ty} stroke={INK} strokeWidth={3} /><text x={pl - 40} y={ty + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{v === 250 ? '250 cm' : v}</text></g>;}) : null}
		</FrameSvg>
	);
};

// ---------- board parts ----------
/** A working row at a fixed position that writes on at `at`; `dim` (0..1) shrinks it to `small` and softens it. */
export const Row: React.FC<{x: number; y: number; at: number; out?: number; size?: number; small?: number; dim?: number; color?: string; children: React.ReactNode}> = ({x, y, at, out, size = 52, small = 38, dim = 0, color = INK, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	const d = Math.max(0, Math.min(1, dim));
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `translateY(${(1 - prog(fr, at, 12)) * 10}px)`, fontFamily: FONT_DISPLAY, fontWeight: d > 0.5 ? 700 : 800, fontSize: size + (small - size) * d, color, whiteSpace: 'pre', lineHeight: 1.2}}>{children}</div>;
};
/** A hand-font tag in frame space. */
export const Hand: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; w?: number; children: React.ReactNode}> = ({x, y, at, out, size = 40, color = INK, w, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: w ? 'normal' : 'pre', lineHeight: 1.1}}>{children}</div>;
};
/** A rounded chip with a coloured border. */
export const Chip: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; fill?: string; children: React.ReactNode}> = ({x, y, at, out, size = 44, color = INK, fill = CARD, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `scale(${0.94 + 0.06 * smooth(prog(fr, at, 14))})`, transformOrigin: 'left center', background: fill, border: `4px solid ${color}`, borderRadius: 18, padding: '6px 22px 8px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.2}}>{children}</div>;
};
/** A paper card with an optional uppercase title. */
export const BoxCard: React.FC<{x: number; y: number; w?: number; at: number; out?: number; size?: number; title?: string; edge?: string; children: React.ReactNode}> = ({x, y, w, at, out, size = 38, title, edge, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, transform: `translateY(${(1 - prog(fr, at, 14)) * 12}px)`, boxSizing: 'border-box', background: CARD, borderRadius: 18, padding: '10px 26px 14px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.12)', borderLeft: edge ? `10px solid ${edge}` : undefined, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK, lineHeight: 1.28}}>
		{title ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: SOFT, textTransform: 'uppercase', marginBottom: 2}}>{title}</div> : null}
		{children}
	</div>;
};
/** Green framed answer. */
export const AnswerBox: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, at, out, size = 52, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `scale(${0.92 + 0.08 * smooth(prog(fr, at, 14))})`, transformOrigin: 'left center', background: CARD, border: `5px solid ${GREEN}`, borderRadius: 18, padding: '6px 26px 10px', boxShadow: '0 12px 26px rgba(40,115,71,0.16)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: GREEN, whiteSpace: 'pre', lineHeight: 1.2}}>{children}</div>;
};
/** The g01 task card. */
export const Task: React.FC<{x: number; y: number; w: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, w, at, out, size = 40, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 18, borderLeft: '10px solid #8a5a12', boxShadow: CARD_SHADOW, padding: '8px 26px 12px', boxSizing: 'border-box'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: SOFT}}>TASK</div>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK, lineHeight: 1.3}}>{children}</div>
	</div>;
};
/** An integral sign with stacked limits, inline. */
export const Int: React.FC<{lo?: string; hi?: string}> = ({lo, hi}) => (
	<span style={{display: 'inline-flex', alignItems: 'center'}}>
		<span style={{fontSize: '1.25em', lineHeight: 1}}>∫</span>
		{lo !== undefined ? <span style={{display: 'inline-flex', flexDirection: 'column', fontSize: '0.5em', lineHeight: 1.05, marginLeft: '0.05em', marginRight: '0.15em'}}><span>{hi}</span><span>{lo}</span></span> : null}
	</span>
);
/** Framed card (double ink rule) for the memory aid and the notes card. */
export const FramedCard: React.FC<{x: number; y: number; w: number; h: number; at?: number; children?: React.ReactNode}> = ({x, y, w, h, at = -30, children}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: prog(f, at, 14), boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}}>{children}</div>;
};
export const C_ = (n: 1 | 2) => <span style={{color: AMBER}}>C{n === 1 ? '₁' : '₂'}</span>;
