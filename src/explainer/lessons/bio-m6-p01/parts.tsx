// M6 P01 (Biology practical) drawing parts: the constant board (question, six-step method rail, the pale bench strip,
// the corner dataset tag), colour-keyed text (time violet, counts and survival amber, controls green, survival teal,
// mutation and hazards terracotta, tags grey), wrapped text and coloured tags, the magnifier, a zoom window into a
// painted plate (so colony icons are painted, never coded), the time bar, the interlock icon, the data table with
// per-cell write frames, the survival bar row, the coded graph with plate points and range bars, the drop and its
// split, the cell stipple, the count grid with tally marks and a pen link. B01, B02, B07, B09 and B13 parts are
// imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng, scribbleEllipse} from '../../kit';
import {Fade, Sx, tw} from '../bio-m5-b13/shared';
import {pbPt} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import {CARD, EDGE, GREYT, GREY_INK, GTag, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {Pl, plH} from '../bio-m6-b09/parts';
import {PLATES} from './assets';

export {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng, scribbleEllipse, Fade, Sx, tw, pbPt, CARD, EDGE, GREYT, GREY_INK, GTag, clamp01, lerp, smooth, vis, Pl, plH, PLATES};
export type {PB};
export const VIOLET = '#6a4fb0', VIOLET_SOFT = '#ece6f8';
export const TEAL = '#2f7f86', TEAL_SOFT = '#d9eef0';
export const TERRA = '#c0643f', TERRA_SOFT = '#f8e3d8';
export const GREEN = '#2f8a5b', GREEN_SOFT = '#dcefe3';
export const AMBER_SOFT = '#fff3d9';

// ---------- board ----------
export const QUESTION = 'What can colony counts tell you?';
export const STEPS = ['1 what a colony means', '2 the fair test', '3 the data', '4 the analysis', '5 the conclusion', '6 evaluate'];
/** The method step rail under the question. `lit` is the current step (lights at `at`); earlier steps read as done. */
export const Rail: React.FC<{lit: number; at?: number; o?: number}> = ({lit, at = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let x = 96;
	return (
		<g opacity={o}>
			{STEPS.map((s, i) => {
				const w = tw(s, 22) + 40;
				const x0 = x;
				x += w + 12;
				const on = i === lit ? prog(f, at, 12) : 0;
				const done = i < lit || (i === lit && on < 0.5 && false);
				return (
					<g key={s}>
						<rect x={x0} y={180} width={w} height={42} rx={21} fill={on > 0.5 ? AMBER : CARD} stroke={on > 0.5 ? AMBER_INK : done ? INK_SOFT : EDGE} strokeWidth={on > 0.5 ? 3 : 2} />
						<text x={x0 + w / 2} y={208} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={on > 0.5 ? INK : done ? INK_SOFT : GREYT}>{s}</text>
					</g>
				);
			})}
		</g>
	);
};
export const BENCH = {x: 70, y: 252, w: 1180, h: 700};
/** The pale bench strip (constant centre zone). */
export const Bench: React.FC<{o?: number; w?: number}> = ({o = 1, w = BENCH.w}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={BENCH.x} y={BENCH.y} width={w} height={BENCH.h} rx={26} fill="#f1e8d6" stroke="rgba(110,80,40,0.14)" strokeWidth={2} />
		{[0.22, 0.48, 0.76].map((t, i) => <path key={i} d={`M${BENCH.x + 40},${BENCH.y + BENCH.h * t} Q${BENCH.x + w / 2},${BENCH.y + BENCH.h * t + (i - 1) * 8} ${BENCH.x + w - 40},${BENCH.y + BENCH.h * t}`} fill="none" stroke="rgba(150,110,60,0.08)" strokeWidth={3} />)}
	</g>
));
/** The small grey corner tag on every data scene. */
export const CornerTag: React.FC<{at?: number; out?: number}> = ({at = -100, out}) => <GTag x={1850} y={1018} text="teacher-prepared dataset (constructed example)" at={at} out={out} size={20} anchor="end" />;

// ---------- text ----------
export const wrapT = (text: string, size: number, maxW: number, hand = false): string[] => {
	const out: string[] = [];
	let line = '';
	for (const w of text.split(' ')) {
		const t = line ? line + ' ' + w : w;
		if (line && tw(t, size, hand) > maxW) { out.push(line); line = w; } else line = t;
	}
	if (line) out.push(line);
	return out;
};
/** Wrapped multi-line text. */
export const WText: React.FC<{x: number; y: number; text: string; size?: number; maxW: number; color?: string; at?: number; out?: number; hand?: boolean; weight?: number; lh?: number; anchor?: 'start' | 'middle' | 'end'; opacity?: number}> = ({x, y, text, size = 28, maxW, color = INK, at = -100, out, hand = false, weight = 600, lh, anchor = 'start', opacity = 1}) => {
	const L = lh ?? Math.round(size * 1.28);
	return <g>{wrapT(text, size, maxW, hand).map((t, i) => <Sx key={i} x={x} y={y + i * L} text={t} size={size} color={color} hand={hand} weight={weight} at={at} out={out} anchor={anchor} opacity={opacity} />)}</g>;
};
/** A coloured tag (pale fill, coloured outline and ink), wrapped to maxW. `dim` greys it. */
export const CTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; color?: string; fill?: string; size?: number; maxW?: number; anchor?: 'start' | 'middle' | 'end'; dim?: number; hand?: boolean}> = ({x, y, text, at, out, color = TEAL, fill, size = 28, maxW = 900, anchor = 'start', dim = 0, hand = true}) => {
	const lines = wrapT(text, size, maxW, hand);
	const w = Math.max(...lines.map(l => tw(l, size, hand))) * (hand ? 1.06 : 1.02) + 36;
	const L = Math.round(size * 1.25);
	const h = lines.length * L + 20;
	const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
	const d = dim > 0.5;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y} width={w} height={h} rx={14} fill={d ? '#f3f2ee' : fill ?? '#fffdf8'} stroke={d ? GREYT : color} strokeWidth={d ? 2 : 3} />
			{lines.map((t, i) => <Sx key={i} x={x0 + 18} y={y + 10 + size * 0.95 + i * L} text={t} size={size} color={d ? GREY_INK : color} hand={hand} weight={700} at={-100} />)}
		</Fade>
	);
};
export const ctagH = (text: string, size = 28, maxW = 900, hand = true) => wrapT(text, size, maxW, hand).length * Math.round(size * 1.25) + 20;
/** "0 s: mean 142" with the time violet and the count amber, centred on x. */
export const TimeCount: React.FC<{x: number; y: number; time: string; count: string; at: number; size?: number; dim?: number}> = ({x, y, time, count, at, size = 38, dim = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const a = time + ': ', w1 = tw(a, size, true), w2 = tw(count, size, true);
	const x0 = x - (w1 + w2) / 2;
	const d = clamp01(dim);
	return (
		<g opacity={o * (1 - 0.5 * d)}>
			<Sx x={x0} y={y} text={a} size={size} color={d > 0.5 ? GREY_INK : VIOLET} hand weight={700} at={-100} />
			<Sx x={x0 + w1} y={y} text={count} size={size} color={d > 0.5 ? GREY_INK : AMBER_INK} hand weight={700} at={-100} />
		</g>
	);
};

// ---------- glyphs ----------
/** A coded magnifier: lens ring and handle (lower right). */
export const Magnifier: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 58, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="rgba(255,255,255,0.22)" stroke={INK_SOFT} strokeWidth={6} />
		<circle cx={x} cy={y} r={r - 7} fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={2} />
		<line x1={x + r * 0.72} y1={y + r * 0.72} x2={x + r * 1.55} y2={y + r * 1.55} stroke={INK_SOFT} strokeWidth={14} strokeLinecap="round" />
	</g>
));
/** A round zoom window into a painted plate centred on natural point (u, v): colony icons stay painted. */
export const ZoomWin: React.FC<{x: number; y: number; r: number; p: PB; u: number; v: number; zoom?: number; o?: number; ring?: string; dim?: number}> = ({x, y, r, p, u, v, zoom = 3.4, o = 1, ring = EDGE, dim = 0}) => {
	const id = 'zw' + React.useId().replace(/[^a-zA-Z0-9]/g, '');
	if (o <= 0.01) return null;
	const w = (p.box[2] - p.box[0]) * zoom * (r / 300);
	const k = w / (p.box[2] - p.box[0]);
	const cx = x - (u - (p.box[0] + p.box[2]) / 2) * k, cy = y - (v - (p.box[1] + p.box[3]) / 2) * k;
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><circle cx={x} cy={y} r={r} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><Pl p={p} cx={cx} cy={cy} w={w} dim={dim} /></g>
			<circle cx={x} cy={y} r={r} fill="none" stroke={ring} strokeWidth={3} />
		</g>
	);
};
/** A horizontal time bar that fills from 0 to 1 with end labels. */
export const TimeBar: React.FC<{x: number; y: number; w: number; p: number; a: string; b: string; o?: number; color?: string}> = ({x, y, w, p, a, b, o = 1, color = INK_SOFT}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y - 9} width={w} height={18} rx={9} fill="#f3eee4" stroke={EDGE} strokeWidth={2} />
		<rect x={x} y={y - 9} width={w * clamp01(p)} height={18} rx={9} fill={AMBER} opacity={0.75} />
		<Sx x={x} y={y + 44} text={a} size={26} color={color} weight={700} at={-100} />
		<Sx x={x + w} y={y + 44} text={b} size={26} color={color} weight={700} anchor="end" at={-100} />
	</g>
));
/** The interlock icon: a small padlock beside a switch dot that lights green. */
export const Interlock: React.FC<{x: number; y: number; lit: number; o?: number; s?: number}> = ({x, y, lit, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-34} y={-30} width={88} height={60} rx={14} fill={CARD} stroke={lit > 0.5 ? GREEN : INK_SOFT} strokeWidth={3} />
		<path d="M-20,-4 L-20,-12 A10,10 0 0 1 0,-12 L0,-4" fill="none" stroke={INK_SOFT} strokeWidth={4} />
		<rect x={-26} y={-4} width={32} height={24} rx={5} fill="#d9d6cf" stroke={INK_SOFT} strokeWidth={2.5} />
		<circle cx={32} cy={0} r={11} fill={lit > 0.5 ? GREEN : '#c9cdd1'} stroke={INK_SOFT} strokeWidth={2} />
		{lit > 0.01 ? <circle cx={32} cy={0} r={20} fill={GREEN} opacity={0.25 * lit} /> : null}
	</g>
));
/** A drop of cloudy suspension (with optional cell dots). */
export const Drop: React.FC<{x: number; y: number; r?: number; o?: number; dots?: number; seed?: number}> = ({x, y, r = 30, o = 1, dots = 0, seed = 1}) => {
	if (o <= 0.01) return null;
	const R = rng(seed);
	const pts = Array.from({length: dots}, () => {
		const a = R() * Math.PI * 2, d = Math.sqrt(R()) * r * 0.62;
		return [x + Math.cos(a) * d, y + r * 0.15 + Math.sin(a) * d * 0.8];
	});
	return (
		<g opacity={o}>
			<path d={`M${x},${y - r * 1.5} C${x + r * 0.5},${y - r * 0.6} ${x + r},${y - r * 0.2} ${x + r},${y + r * 0.25} A${r},${r} 0 0 1 ${x - r},${y + r * 0.25} C${x - r},${y - r * 0.2} ${x - r * 0.5},${y - r * 0.6} ${x},${y - r * 1.5} Z`} fill="#f3e6c4" stroke="#b9a274" strokeWidth={2.5} />
			{pts.map(([px, py], i) => <circle key={i} cx={px} cy={py} r={3.4} fill="#9a7f4a" />)}
		</g>
	);
};
/** A faint cream stipple of many cells across a dish (radius grows with `p`). */
export const Stipple: React.FC<{cx: number; cy: number; R: number; p: number; o?: number; n?: number; seed?: number}> = ({cx, cy, R, p, o = 1, n = 520, seed = 7}) => {
	if (o <= 0.01 || p <= 0.01) return null;
	const r = rng(seed);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const a = r() * Math.PI * 2, d = Math.sqrt(r()) * R;
				if (d > R * smooth(p)) return null;
				return <circle key={i} cx={cx + Math.cos(a) * d} cy={cy + Math.sin(a) * d} r={1.8} fill="#fffaf0" opacity={0.85} />;
			})}
		</g>
	);
};
/** A dashed pen link (quadratic) from a to b. */
export const PenLink: React.FC<{a: [number, number]; b: [number, number]; at: number; color?: string; o?: number; bow?: number}> = ({a, b, at, color = AMBER_INK, o = 1, bow = -40}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	return (
		<g opacity={o}>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={16} color={color} width={3} dash="8 7" />
			<circle cx={a[0]} cy={a[1]} r={6 * prog(f, at, 6)} fill={color} />
		</g>
	);
};
/** A short arrow a to b. */
export const Arrow: React.FC<{a: [number, number]; b: [number, number]; at: number; color?: string; width?: number; o?: number}> = ({a, b, at, color = INK_SOFT, width = 4, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), h = 16;
	return (
		<g opacity={o}>
			<DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={12} color={color} width={width} />
			<path d={`M${b[0] - h * Math.cos(ang - 0.5)},${b[1] - h * Math.sin(ang - 0.5)} L${b[0]},${b[1]} L${b[0] - h * Math.cos(ang + 0.5)},${b[1] - h * Math.sin(ang + 0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" opacity={prog(f, at + 10, 6)} />
		</g>
	);
};
/** A grey scribble cross over a chip region (the classic-mistake cross). */
export const ScribbleX: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			<DrawPath d={scribbleEllipse(x + w / 2, y + h / 2, w / 2 + 8, h / 2 + 6, 7, 1.1)} at={at} dur={16} color={GREYT} width={4} />
			<DrawPath d={`M${x + 10},${y + h - 8} L${x + w - 10},${y + 8}`} at={at + 8} dur={10} color={GREYT} width={6} />
		</g>
	);
};
/** A chip that later takes the grey cross, with an optional grey caption under it. */
export const CrossChip: React.FC<{x: number; y: number; text: string; at: number; cross: number; caption?: string; size?: number; color?: string; out?: number}> = ({x, y, text, at, cross, caption, size = 32, color = TERRA, out}) => {
	const f = useCurrentFrame();
	const w = tw(text, size, true) * 1.06 + 44, h = size + 28;
	const crossed = prog(f, cross, 10);
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill={crossed > 0.5 ? '#eceeef' : TERRA_SOFT} stroke={crossed > 0.5 ? GREYT : color} strokeWidth={2.8} />
			<Sx x={x + 22} y={y + size + 6} text={text} size={size} color={crossed > 0.5 ? GREY_INK : color} hand weight={700} at={-100} />
			<ScribbleX x={x} y={y} w={w} h={h} at={cross} />
			{caption ? <Sx x={x + 10} y={y + h + 34} text={caption} size={26} color={GREY_INK} weight={600} at={cross + 10} /> : null}
		</Fade>
	);
};
export const crossChipW = (text: string, size = 32) => tw(text, size, true) * 1.06 + 44;

// ---------- the data table ----------
export const TIMES = [0, 15, 30, 60, 120];
export const COUNTS = [[133, 144, 149], [91, 97, 106], [55, 61, 67], [20, 24, 28], [3, 5, 7]];
export const MEANS = COUNTS.map(c => c.reduce((a, b) => a + b, 0) / 3);
export const REL = MEANS.map(m => (m / MEANS[0]) * 100);
export const fmt1 = (v: number) => v.toFixed(1);
// Build check against the design's "Numbers to verify".
(() => {
	const must = (ok: boolean, m: string) => { if (!ok) throw new Error('P01 (Biology) number check failed: ' + m); };
	must(MEANS.join() === '142,98,61,24,5', 'means');
	must(REL.map(fmt1).join() === '100.0,69.0,43.0,16.9,3.5', 'relative survival');
	must(COUNTS.flat().map(c => fmt1((c / 142) * 100)).join() === '93.7,101.4,104.9,64.1,68.3,74.6,38.7,43.0,47.2,14.1,16.9,19.7,2.1,3.5,4.9', 'plate points');
	must(fmt1((41 / 152) * 100) === '27.0' && fmt1(100 - (41 / 152) * 100) === '73.0', 'attempt 1');
	must(fmt1((52 / 142) * 100) === '36.6' && fmt1((5.2 / 142) * 100) === '3.7', 'attempt 2');
})();
export type TCol = {w: number; head: string; color?: string};
/**
 * The data table. `cell(r, c)` returns {text, at, color?, bold?} or undefined (empty). `rowDim(r)` greys a row;
 * `hot(r)` rings a row. Header writes at `at`.
 */
export type TCell = {text: string; at: number; color?: string; size?: number};
export const Table: React.FC<{x: number; y: number; cols: TCol[]; rows: number; cell: (r: number, c: number) => TCell | undefined; at: number; rowH?: number; size?: number; rowDim?: (r: number) => number; hot?: (r: number) => number; o?: number; headSize?: number; outlineOnly?: boolean}> = ({x, y, cols, rows, cell, at, rowH = 64, size = 32, rowDim, hot, o = 1, headSize = 24, outlineOnly = false}) => {
	const f = useCurrentFrame();
	const ao = prog(f, at, 14) * o;
	if (ao <= 0.01) return null;
	const W = cols.reduce((a, c) => a + c.w, 0);
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, c) => a + c.w, 0));
	const H = rowH * (rows + 1);
	return (
		<g opacity={ao}>
			<rect x={x} y={y} width={W} height={H} rx={16} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<rect x={x} y={y} width={W} height={rowH} rx={16} fill="#efe6d4" />
			{cols.map((c, i) => (
				<g key={i}>
					{i ? <line x1={xs[i]} y1={y + 8} x2={xs[i]} y2={y + H - 8} stroke={EDGE} strokeWidth={2} /> : null}
					<Sx x={xs[i] + c.w / 2} y={y + rowH * 0.64} text={c.head} size={headSize} color={c.color ?? INK} weight={800} anchor="middle" at={-100} />
				</g>
			))}
			{Array.from({length: rows}, (_, r) => {
				const ry = y + rowH * (r + 1);
				const dm = rowDim ? clamp01(rowDim(r)) : 0;
				const h = hot ? hot(r) : 0;
				return (
					<g key={r}>
						<line x1={x + 10} y1={ry} x2={x + W - 10} y2={ry} stroke={EDGE} strokeWidth={2} />
						{h > 0.01 ? <rect x={x + 5} y={ry + 5} width={W - 10} height={rowH - 10} rx={10} fill="none" stroke={AMBER} strokeWidth={4} opacity={h} /> : null}
						{outlineOnly ? null : cols.map((c, ci) => {
							const t = cell(r, ci);
							if (!t) return null;
							return <Sx key={ci} x={xs[ci] + c.w / 2} y={ry + rowH * 0.66} text={t.text} size={t.size ?? size} color={dm > 0.5 ? GREY_INK : t.color ?? INK} weight={700} anchor="middle" at={t.at} opacity={1 - 0.45 * dm} />;
						})}
					</g>
				);
			})}
		</g>
	);
};

// ---------- survival bars ----------
/** Horizontal survival bars, one per row of the table; bar r fills to REL[r] at fills[r]. */
export const SurvBars: React.FC<{x: number; y0: number; rowH: number; w: number; fills: (number | undefined)[]; o?: number; dimRow?: (r: number) => number; labels?: boolean}> = ({x, y0, rowH, w, fills, o = 1, dimRow, labels = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<line x1={x} y1={y0 + 6} x2={x} y2={y0 + rowH * fills.length - 6} stroke={INK_SOFT} strokeWidth={3} />
			{fills.map((at, r) => {
				const p = at === undefined ? 0 : smooth(prog(f, at, 22));
				const by = y0 + r * rowH + rowH * 0.22;
				const dm = dimRow ? dimRow(r) : 0;
				return (
					<g key={r} opacity={1 - 0.5 * dm}>
						<rect x={x} y={by} width={w} height={rowH * 0.56} rx={8} fill="#f6f1e6" stroke="#e4dccb" strokeWidth={1.5} />
						{p > 0.001 ? <rect x={x} y={by} width={Math.max(4, (w * REL[r] * p) / 100)} height={rowH * 0.56} rx={8} fill={AMBER} opacity={0.85} /> : null}
						{labels && p > 0.5 ? <Sx x={x + Math.max(4, (w * REL[r]) / 100) + 12} y={by + rowH * 0.42} text={fmt1(REL[r]) + ' %'} size={24} color={AMBER_INK} weight={700} at={at! + 12} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- graph ----------
export const GR = {x: 260, y: 330, w: 1060, h: 520, xMax: 120, yMax: 110};
export const gx = (t: number) => GR.x + (t / GR.xMax) * GR.w;
export const gy = (v: number) => GR.y + GR.h - (v / GR.yMax) * GR.h;
/** Axes with ticks. */
export const Axes: React.FC<{at: number; yAt: number; o?: number}> = ({at, yAt, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			<DrawPath d={`M${GR.x},${GR.y + GR.h} L${GR.x + GR.w + 20},${GR.y + GR.h}`} at={at} dur={16} color={INK} width={3.5} />
			<DrawPath d={`M${GR.x},${GR.y + GR.h} L${GR.x},${GR.y - 20}`} at={at + 4} dur={16} color={INK} width={3.5} />
			{[0, 15, 30, 60, 90, 120].map(t => (
				<g key={t} opacity={prog(f, at + 10, 10)}>
					<line x1={gx(t)} y1={GR.y + GR.h} x2={gx(t)} y2={GR.y + GR.h + 10} stroke={INK} strokeWidth={2.5} />
					<Sx x={gx(t)} y={GR.y + GR.h + 40} text={String(t)} size={24} color={INK_SOFT} weight={700} anchor="middle" at={-100} />
				</g>
			))}
			{[0, 20, 40, 60, 80, 100].map(v => (
				<g key={v} opacity={prog(f, at + 10, 10)}>
					<line x1={GR.x - 10} y1={gy(v)} x2={GR.x} y2={gy(v)} stroke={INK} strokeWidth={2.5} />
					{v ? <line x1={GR.x} y1={gy(v)} x2={GR.x + GR.w} y2={gy(v)} stroke="rgba(60,45,20,0.07)" strokeWidth={2} /> : null}
					<Sx x={GR.x - 18} y={gy(v) + 8} text={String(v)} size={24} color={INK_SOFT} weight={700} anchor="end" at={-100} />
				</g>
			))}
			<Sx x={GR.x + GR.w / 2} y={GR.y + GR.h + 82} text="UV exposure time (s)" size={30} color={VIOLET} weight={800} anchor="middle" at={at + 8} />
			<g transform={`translate(${GR.x - 82},${GR.y + GR.h / 2}) rotate(-90)`}>
				<Sx x={0} y={0} text="relative survival (%)" size={30} color={AMBER_INK} weight={800} anchor="middle" at={yAt} />
			</g>
		</g>
	);
};

// ---------- count grid ----------
/** A faint grid over a dish and tally ticks that land on colonies one by one from `at`. */
export const CountGrid: React.FC<{cx: number; cy: number; w: number; at: number; pts: [number, number][]; step?: number; p: PB}> = ({cx, cy, w, at, pts, step = 9, p}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const R = w / 2 - 6;
	const go = prog(f, at, 14);
	const pt = pbPt(p, cx, cy, w);
	const id = 'cg' + cx + '-' + cy;
	return (
		<g>
			<defs><clipPath id={id}><circle cx={cx} cy={cy} r={R} /></clipPath></defs>
			<g clipPath={`url(#${id})`} opacity={go}>
				{Array.from({length: 9}, (_, i) => {
					const t = cx - R + ((i + 1) * 2 * R) / 10;
					return <g key={i}><line x1={t} y1={cy - R} x2={t} y2={cy + R} stroke="rgba(60,45,20,0.35)" strokeWidth={2} /><line x1={cx - R} y1={cy - R + ((i + 1) * 2 * R) / 10} x2={cx + R} y2={cy - R + ((i + 1) * 2 * R) / 10} stroke="rgba(60,45,20,0.35)" strokeWidth={2} /></g>;
				})}
			</g>
			{pts.map(([u, v], i) => {
				const [x, y] = pt(u, v);
				const t0 = at + 16 + i * step;
				if (f < t0) return null;
				return <DrawPath key={i} d={`M${x - 8},${y - 2} L${x - 2},${y + 6} L${x + 10},${y - 10}`} at={t0} dur={6} color={AMBER_INK} width={4} />;
			})}
		</g>
	);
};
export const useF = () => useCurrentFrame();
void lerp; void FONT_HAND; void vis; void plH; void PLATES;
