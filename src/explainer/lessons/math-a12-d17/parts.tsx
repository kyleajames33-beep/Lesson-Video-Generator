// Lesson parts for math-a12-d17 (Revision 4: sketching from f, f′ and f″; a new video's total views on a laptop),
// built on the maths studio kit. Lesson-local rigs: LaptopViews (the reused Biology laptop with a kit ScreenChart
// and ScreenCounter in its measured screen rectangle, MATHS_KIT2_ANCHORS.laptopScreen), the attempt layout (copied
// from d16's scenes 9 and 11, which are not exported), a gridded graph-only picture for attempt 2, and PenPlate
// (the painted pen and wall with one painted sheep and coded tags at the brief 238 anchor points; d18 opens on it).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, MATHS_KIT2_ANCHORS, MATHS_KIT2_PLATES, MATH_AMBER, MATH_BLUE, MATH_TEAL, QuestionCard, RolesOn, ScreenChart, ScreenCounter, SvgPlate, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {FnFamily, PlateSpec} from '../../math/studio';

export {AnswerBox, Am, BLUE, Bl, BoxCard, CAPC, CUPC, Chip, Cross, CurveLabel, Diamond, GREEN, GREY, GREY_INK, Line, OLIVE, Ol, P, RED, RecallChip, Ring, Tick, TintRect, V, VIOLET, gmap, stubLine} from '../math-a12-d16/parts';
export const TEAL = MATH_TEAL;
export const AMB = MATH_AMBER;
export const AMB_INK = '#7a4600';

// ---------- functions (design author notes a, f, h, k, l) ----------
/** The cubic of scenes 2 to 6 and 9 (site we-l19-1). */
export const cub = (x: number) => x ** 3 - 3 * x;
export const cub1 = (x: number) => 3 * x * x - 3;
export const cub2 = (x: number) => 6 * x;
export const CUB: FnFamily = {f: x => cub(x), df: x => cub1(x)};
/** The wiggly join (author note a). */
export const wig = (x: number) => cub(x) + 0.8 * Math.sin(2 * Math.PI * x);
export const wig1 = (x: number) => cub1(x) + 1.6 * Math.PI * Math.cos(2 * Math.PI * x);
/** Where the wiggle rises between −1 and 1 (root of wig1 near 0.151, by bisection). */
export const WIG_RISE = (() => {let a = 0.05, b = 0.3; for (let i = 0; i < 60; i++) {const m = (a + b) / 2; if (wig1(m) > 0) a = m; else b = m;} return (a + b) / 2;})();
/** The ruler join (author note a): straight segments through (−1, 2), (0, 0), (1, −2), ends to x = ±2.2. */
export const RULER: [number, number][] = [[-2.2, cub(-2.2)], [-1, 2], [1, -2], [2.2, cub(2.2)]];
export const ruler = (x: number) => {
	for (let i = 0; i + 1 < RULER.length; i++) {const [a, ya] = RULER[i], [b, yb] = RULER[i + 1]; if (x >= a && x <= b) return ya + ((yb - ya) * (x - a)) / (b - a);}
	return NaN;
};
const OFF0 = [{from: -Infinity, to: 0}, {from: 0, to: Infinity}];
/** Worked example y = x + 1/x (site we-l19-2). */
export const rec = (x: number) => x + 1 / x;
export const rec1 = (x: number) => 1 - 1 / (x * x);
export const REC: FnFamily = {f: x => rec(x), df: x => rec1(x), domain: OFF0, excluded: [0]};
/** Attempt 1: x − 4/x. */
export const a1 = (x: number) => x - 4 / x;
export const A1F: FnFamily = {f: x => a1(x), df: x => 1 + 4 / (x * x), domain: OFF0, excluded: [0]};
/** Scene 11's graph-only quartic (author notes f, g; the formula never appears). */
export const q = (x: number) => x ** 4 - 4 * x ** 3;
export const q1 = (x: number) => 4 * x * x * (x - 3);
export const q2 = (x: number) => 12 * x * (x - 2);
/** Attempt 2's graph-only quartic (author note h). */
export const r = (x: number) => x ** 4 / 4 - x ** 3 + 4 * x;
export const r1 = (x: number) => (x + 1) * (x - 2) ** 2;
export const r2 = (x: number) => 3 * x * (x - 2);
/** Total views V(d) in thousands, daily views V′(d) in thousands per day (author note l). */
export const views = (d: number) => 100 * (1 - (1 + d / 3) * Math.exp(-d / 3));
export const dviews = (d: number) => (100 / 9) * d * Math.exp(-d / 3);
export const ddviews = (d: number) => (100 / 9) * Math.exp(-d / 3) * (1 - d / 3);
/** Readout formats: total views to the nearest view, daily views to the nearest ten. */
export const fmtViews = (thousands: number) => Math.round(thousands * 1000).toLocaleString('en-AU');
export const fmtDaily = (thousands: number) => (Math.round(thousands * 100) * 10).toLocaleString('en-AU');

{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['cubic', near(cub(-1), 2) && near(cub(1), -2) && near(cub(0), 0) && near(cub1(0), -3) && near(cub(Math.sqrt(3)), 0) && near(cub2(-1), -6)],
		['wiggle', near(wig(-1), 2) && near(wig(1), -2) && near(wig(0), 0) && Math.abs(WIG_RISE - 0.1509) < 0.001 && wig1(0) > 2],
		['ruler', near(ruler(0), 0) && near(ruler(-1), 2) && near(ruler(2.2), 4.048)],
		['recip', near(rec(1), 2) && near(rec(-1), -2) && near(rec(0.2), 5.2) && near(rec1(1), 0)],
		['A1', near(a1(2), 0) && near(a1(-1), 3) && near(a1(1), -3)],
		['quartic', near(q(3), -27) && near(q(2), -16) && near(q1(2), -16) && near(q1(0), 0) && near(q2(0), 0) && near(q2(2), 0)],
		['A2', near(r1(-1), 0) && near(r1(2), 0) && near(r1(0), 4) && near(r(-1), -2.75) && near(r(2), 4)],
		['views', fmtViews(views(14)) === '94,671' && fmtDaily(dviews(3)) === '12,260' && fmtDaily(dviews(14)) === '1,460' && ddviews(2.9) > 0 && ddviews(3.1) < 0],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-d17 numbers: ' + bad.join(', '));
}

// ---------- the laptop ----------
export const LAPTOP: PlateSpec = MATHS_KIT2_PLATES.laptop;
export const SCREEN = MATHS_KIT2_ANCHORS.laptopScreen;
export const laptopH = (w: number) => (w * (LAPTOP.box[3] - LAPTOP.box[1])) / (LAPTOP.box[2] - LAPTOP.box[0]);
/** The counter strip across the top of the screen (file pixels). */
const SCREEN_TOP: [number, number, number, number] = [SCREEN[0] + 330, SCREEN[1] + 6, SCREEN[2] - 10, SCREEN[1] + 112];
/**
 * The laptop with the channel's total-views chart drawn on its screen up to `day`, and a live counter row.
 * `tags` are hand tags in chart coordinates (day, thousands).
 */
export const LaptopViews: React.FC<{x: number; y: number; w: number; day: number; at?: number; out?: number; tags?: React.ComponentProps<typeof ScreenChart>['tags']; counter?: boolean}> = ({x, y, w, day, at = -30, out, tags = [], counter = true}) => {
	usePlatePreload([LAPTOP.src]);
	const d = Math.max(0, Math.min(14, day));
	return (
		<>
			<ScreenChart plate={LAPTOP} x={x} y={y} w={w} screen={SCREEN} window={{x: [0, 14], y: [0, 100]}} fn={views} upTo={Math.max(0.001, d)}
				xTicks={[0, 7, 14]} yTicks={[50, 100]} xLabel="day" yLabel="views (thousands)" tags={tags} pad={{t: 128, l: 84, b: 84}} at={at} out={out} />
			{counter ? <ScreenCounter plate={LAPTOP} x={x} y={y} w={w} screen={SCREEN_TOP} drawPlate={false} rows={[{label: 'total views', value: fmtViews(views(d))}]} size={w > 900 ? 56 : 40} at={at} out={out} /> : null}
		</>
	);
};
/** A day/total/daily readout strip (30 px labels over 52 px numbers), all from the same V(d). */
export const ViewsStrip: React.FC<{x: number; y: number; w: number; day: number; daily?: boolean; at?: number; out?: number; glow?: number}> = ({x, y, w, day, daily = true, at = -30, out, glow = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const d = Math.max(0, Math.min(14, day));
	const cell = (label: string, value: string, color: string, g = 0) => (
		<div style={{borderRadius: 12, padding: '0 10px', background: g > 0.001 ? `rgba(231,224,242,${0.9 * g})` : undefined}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color, whiteSpace: 'pre'}}>{label}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1, whiteSpace: 'pre'}}>{value}</div>
		</div>
	);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, display: 'grid', gridTemplateColumns: daily ? '0.6fr 1fr 1.25fr' : '0.6fr 1fr', columnGap: 8, background: CARD, borderRadius: 20, padding: '8px 16px 10px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
			{cell('day', d.toFixed(1), INK)}
			{cell('total views', fmtViews(views(d)), INK)}
			{daily ? cell('new views per day', fmtDaily(dviews(d)), '#6b4fa0', glow) : null}
		</div>
	);
};

// ---------- attempts (d16's layout) ----------
export const Attempt: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; top?: number; size?: number; children: React.ReactNode}> = ({hold: h, pauseAt, picture, given, heading, top = 470, size = 44, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={top} w={640} at={6} pad="16px 28px 18px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, marginTop: 4, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<div style={{position: 'absolute', left: 770, top}}>{picture}</div>
		<QuestionCard at={0} size={size} w={1700} y={170} hold={{...h, ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</RolesOn>
);
/** Empty axes with the question's demands as hand tags (no curve, nothing answer-bearing). */
export const QAxes: React.FC<{w?: number; h?: number; x0: number; x1: number; y0: number; y1: number; ticks: number[]; tags: string[]}> = ({w = 820, h = 360, x0, x1, y0, y1, ticks, tags}) => {
	const sx = (w - 330) / (x1 - x0), sy = (h - 60) / (y1 - y0);
	const X = (v: number) => 30 + (v - x0) * sx, Y = (v: number) => 16 + (y1 - v) * sy;
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<path d={`M${X(x0)},${Y(0)} H${X(x1) + 16} M${X(0)},${Y(y0)} V${Y(y1) - 6}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				<text x={X(x1) + 22} y={Y(0) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>x</text>
				<text x={X(0) + 12} y={Y(y1) + 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>y</text>
				{ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={Y(0) - 10} y2={Y(0) + 10} stroke={INK} strokeWidth={4} /><text x={X(t)} y={Y(0) + 42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{t < 0 ? `−${-t}` : t}</text></g>)}
			</svg>
			<div style={{position: 'absolute', right: 26, top: 40, textAlign: 'right', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, lineHeight: 1.3, color: INK}}>
				{tags.map((t, i) => <div key={i}>{t}</div>)}
			</div>
		</div>
	);
};
/** Graph-only picture: gridlines at integers, integer ticks, the ink curve; no dots, labels or tangents. */
export const GridGraph: React.FC<{w: number; h: number; win: {x: [number, number]; y: [number, number]}; fn: (x: number) => number; xTicks: number[]; yTicks: number[]; children?: (X: (v: number) => number, Y: (v: number) => number) => React.ReactNode}> = ({w, h, win, fn, xTicks, yTicks, children}) => {
	const L = 56, R = w - 40, T = 24, B = h - 50;
	const X = (v: number) => L + ((v - win.x[0]) / (win.x[1] - win.x[0])) * (R - L);
	const Y = (v: number) => B - ((v - win.y[0]) / (win.y[1] - win.y[0])) * (B - T);
	const xs = Array.from({length: Math.floor(win.x[1]) - Math.ceil(win.x[0]) + 1}, (_, i) => Math.ceil(win.x[0]) + i);
	const ys = Array.from({length: Math.floor(win.y[1]) - Math.ceil(win.y[0]) + 1}, (_, i) => Math.ceil(win.y[0]) + i);
	let d = '';
	for (let i = 0; i <= 300; i++) {const v = win.x[0] + ((win.x[1] - win.x[0]) * i) / 300; const yy = fn(v); if (yy >= win.y[0] - 1 && yy <= win.y[1] + 1) d += `${d ? 'L' : 'M'}${X(v).toFixed(1)},${Y(Math.max(win.y[0], Math.min(win.y[1], yy))).toFixed(1)} `;}
	const lab = (t: number) => (t < 0 ? `−${-t}` : String(t));
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				{xs.map(v => <line key={'gx' + v} x1={X(v)} x2={X(v)} y1={T} y2={B} stroke="#d9cfbd" strokeWidth={1.6} />)}
				{ys.map(v => <line key={'gy' + v} x1={L} x2={R} y1={Y(v)} y2={Y(v)} stroke="#d9cfbd" strokeWidth={1.6} />)}
				<path d={`M${L},${Y(0)} H${R + 10} M${X(0)},${B} V${T - 8}`} stroke={INK} strokeWidth={4} fill="none" strokeLinecap="round" />
				{xTicks.map(t => <text key={'xt' + t} x={X(t)} y={Y(0) + 36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}} stroke="#fbf8f1" strokeWidth={6} paintOrder="stroke">{lab(t)}</text>)}
				{yTicks.map(t => <text key={'yt' + t} x={X(0) - 12} y={Y(t) + 11} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}} stroke="#fbf8f1" strokeWidth={6} paintOrder="stroke">{lab(t)}</text>)}
				<text x={R + 14} y={Y(0) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>x</text>
				<text x={X(0) + 12} y={T + 4} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>y</text>
				<path d={d} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				{children ? children(X, Y) : null}
			</svg>
		</div>
	);
};

// ---------- the pen against the wall (d18's opening) ----------
export const PEN: PlateSpec = {src: 'assets/maths/ma12-pen-wall-v1.png', nat: [2400, 1400], box: [417, 377, 1985, 1069]};
export const SHEEP: PlateSpec = {src: 'assets/biology/m6-white-sheep-v1.png', nat: [2000, 2000], box: [200, 351, 1800, 1649]};
/** Brief 238 anchors (file pixels, ±8 px). */
export const PEN_ANCHORS = {left: [702, 736], front: [1394, 773], right: [1747, 577], wall: [1065.5, 650], sheep: [1200, 700]} as const;
export const PEN_GEOM = {x: 30, y: 200, w: 1360};
/**
 * The painted pen, one painted sheep standing at the measured ground point, and the side tags x (blue), y (teal),
 * x and "wall" at the measured fence midpoints. Tag times may be negative (shown from the first frame).
 */
export const PenPlate: React.FC<{x?: number; y?: number; w?: number; at?: number; out?: number; tagsAt?: number; wallAt?: number; sheepW?: number}> = ({x = PEN_GEOM.x, y = PEN_GEOM.y, w = PEN_GEOM.w, at = -30, out, tagsAt = -30, wallAt = -30, sheepW = 210}) => {
	usePlatePreload([PEN.src, SHEEP.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 16);
	if (o <= 0.001) return null;
	const m = plateMap(PEN, x, y, w);
	const sh = (sheepW * (SHEEP.box[3] - SHEEP.box[1])) / (SHEEP.box[2] - SHEEP.box[0]);
	const [gx, gy] = m.at(PEN_ANCHORS.sheep[0], PEN_ANCHORS.sheep[1]);
	const L = m.at(...PEN_ANCHORS.left), Fr = m.at(...PEN_ANCHORS.front), Rt = m.at(...PEN_ANCHORS.right), Wl = m.at(...PEN_ANCHORS.wall);
	const tag = (p: [number, number], text: string, color: string, dx: number, dy: number, t: number, anchor: 'start' | 'middle' | 'end' = 'middle', size = 80) => {
		const to = prog(f, t, 14);
		return to > 0.001 ? <text x={p[0] + dx} y={p[1] + dy} textAnchor={anchor} opacity={to} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, fill: color}} stroke={CARD} strokeWidth={10} paintOrder="stroke">{text}</text> : null;
	};
	return (
		<FrameSvg style={{opacity: o}}>
			<SvgPlate plate={PEN} x={x} y={y} w={w} />
			<SvgPlate plate={SHEEP} x={gx - sheepW / 2} y={gy - sh + 6} w={sheepW} />
			{tag(L, 'x', MATH_BLUE, -46, 20, tagsAt, 'end')}
			{tag(Fr, 'y', MATH_TEAL, 0, 120, tagsAt + 8)}
			{tag(Rt, 'x', MATH_BLUE, 58, 30, tagsAt + 16, 'start')}
			{tag([Wl[0], m.at(0, 430)[1]], 'wall', INK, 0, -10, wallAt, 'middle', 64)}
		</FrameSvg>
	);
};

// ---------- memory aid ----------
export const AID_MAIN = 'Turns drop to zeros.';
