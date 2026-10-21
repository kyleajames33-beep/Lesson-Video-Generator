// Drawing parts for M6 C15 (back and conductivity titrations). Reuses C14 (and through it C13 to C01: the board, task
// line, givens card, step chip, working lines, chips, crossed chips, question card, countdown, key notes, graph
// primitives, ion tally, the conductivity meter with its coded level bar, the C12 burette fill). New here:
// - FlaskTint / TFlask: the clip flask with its liquid tinted (deep red vinegar) by a multiply polygon; Heap: a coded
//   crushed-tablet heap whose chunks go as it reacts; Blot: an indicator drop that spreads and vanishes;
// - MolesBar: "acid added" split into "used by the tablet" (amber) and "left over" (navy);
// - SurfaceLens: a tablet cross-section in which only the outer layer reacts with arriving hydronium;
// - CO2Tok, Bubble: small grey carbon dioxide molecules and bubbles;
// - Pts, FitRuler, CrossMark: plotted points, a straight edge that lays a best-fit line and extends it, the crossing;
// - DilBeaker: a coded beaker whose level rises with each portion while its ions spread apart;
// - Pie, TimerIcon, PipetteIcon, CondTint.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, prog} from '../../kit';
import {
	An, H3O, INK, INK_SOFT, NAVY, NAVY_SOFT, NaTok, OHg, PicH, Sx, TEAL, WATER_INK, WATER_SOFT, clamp01, gx, gy, lerp, picW, smooth, vis,
} from '../chem-m6-c14/parts';
import type {GG} from '../chem-m6-c14/parts';
import {COND, COND_LIQ, FLASK_LIQ, PHTH} from './assets';
import type {PDef} from './assets';

export * from '../chem-m6-c14/parts';

export const RED_WINE = '#6a0f22';
export const MAGENTA = '#d93f8f';
export const USED = AMBER, USED_INK = AMBER_INK;
export const LEFT = NAVY;
export const FIT1 = '#6aa3d8', FIT2 = '#8a5cc2';
export const CO2_GREY = '#8d877d';

// ---------- tinted clip flask ----------
const polyAt = (pts: [number, number][], p: PDef, x: number, y: number, h: number) => {
	const w = picW(p, h);
	return 'M' + pts.map(([u, v]) => `${(x + w * u).toFixed(1)},${(y + h * v).toFixed(1)}`).join(' L') + ' Z';
};
export const FlaskTint: React.FC<{x: number; y: number; h: number; o: number; color?: string}> = ({x, y, h, o, color = RED_WINE}) =>
	o <= 0.01 ? null : <path d={polyAt(FLASK_LIQ, PHTH.clear, x, y, h)} fill={color} opacity={0.86 * o} style={{mixBlendMode: 'multiply'}} />;
/** The clip flask: pink(f) crossfades to the pink plate; red(f) tints the liquid deep red. */
export const TFlask: React.FC<{x: number; y: number; h: number; pink?: (f: number) => number; red?: (f: number) => number; o?: number; children?: React.ReactNode}> = ({x, y, h, pink = () => 0, red = () => 0, o = 1, children}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const pk = clamp01(pink(f));
	return (
		<g opacity={o}>
			<PicH p={PHTH.clear} x={x} y={y} h={h} />
			{pk > 0.01 ? <PicH p={PHTH.pink} x={x} y={y} h={h} o={pk} /> : null}
			{children}
			<FlaskTint x={x} y={y} h={h} o={clamp01(red(f))} />
		</g>
	);
};
export const CondTint: React.FC<{x: number; y: number; h: number; o: number}> = ({x, y, h, o}) =>
	o <= 0.01 ? null : <path d={polyAt(COND_LIQ, COND, x, y, h)} fill={RED_WINE} opacity={0.86 * o} style={{mixBlendMode: 'multiply'}} />;

// ---------- crushed tablet heap ----------
const CHUNKS: [number, number, number, number][] = [[-0.9, 0.1, 1.0, 0.2], [-0.45, -0.2, 1.2, -0.4], [0.0, 0.05, 1.3, 0.9], [0.5, -0.15, 1.1, 0.1], [0.95, 0.12, 0.9, -0.7], [-0.25, -0.65, 0.9, 1.2], [0.28, -0.6, 1.0, -0.2], [0.02, -1.05, 0.8, 0.6], [-0.65, -0.45, 0.7, 0.4]];
/** A coded heap of crushed tablet at (cx, base); left(f) is the fraction still solid (chunks go top first). */
export const Heap: React.FC<{cx: number; base: number; s?: number; left?: (f: number) => number; o?: number}> = ({cx, base, s = 1, left = () => 1, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const L = clamp01(left(f));
	const n = CHUNKS.length;
	return (
		<g opacity={o}>
			{CHUNKS.map(([u, v, r, a], i) => {
				const keep = clamp01((L * n - (n - 1 - i)) * 1.0);
				if (keep <= 0.01) return null;
				const R = 11 * s * r * (0.4 + 0.6 * keep);
				const X = cx + u * 26 * s, Y = base - 10 * s + v * 16 * s;
				const pts = [0, 1, 2, 3, 4, 5].map(k => { const t = a + (k * Math.PI) / 3; const rr = R * (0.75 + 0.25 * Math.sin(k * 2.3 + i)); return `${(X + Math.cos(t) * rr).toFixed(1)},${(Y + Math.sin(t) * rr * 0.8).toFixed(1)}`; });
				return <polygon key={i} points={pts.join(' ')} fill="#f5f2ec" stroke="#a9a196" strokeWidth={1.6} opacity={keep} />;
			})}
		</g>
	);
};

// ---------- indicator drop that spreads and vanishes in a dark liquid ----------
export const Blot: React.FC<{x: number; y0: number; y1: number; at: number; color?: string}> = ({x, y0, y1, at, color = MAGENTA}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const t = f - at;
	if (t < 16) {
		const y = lerp(y0, y1, (t / 16) ** 2);
		return <path d={`M${x},${y} q7,12 0,18 q-7,-6 0,-18 Z`} fill={color} stroke="#8f1f58" strokeWidth={1.5} />;
	}
	const p = clamp01((t - 16) / 40);
	if (p >= 1) return null;
	return <ellipse cx={x} cy={y1 + 14} rx={8 + 40 * p} ry={5 + 14 * p} fill={color} opacity={0.75 * (1 - p)} />;
};

// ---------- moles bar ----------
/** Acid added as one bar; from `split` it divides into used (amber, left, fraction used(f)) and left over (navy). */
export const MolesBar: React.FC<{x: number; y: number; w: number; h?: number; at: number; out?: number; o?: number; split?: number; used?: (f: number) => number; glow?: number; inner?: boolean; size?: number; usedText?: string; leftText?: string}> = ({x, y, w, h = 70, at, out, o = 1, split, used = () => 0.632, glow, inner = true, size = 28, usedText = 'used by the tablet', leftText = 'left over'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const grow = smooth(prog(f, at, 22));
	const sp = split === undefined ? 0 : smooth(prog(f, split, 18));
	const xu = x + w * used(f);
	const g = glow === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - glow) / 50) * Math.PI));
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w * grow} height={h} rx={12} fill="#dcefe9" />
			{sp > 0.01 ? (
				<g opacity={sp}>
					<rect x={x} y={y} width={xu - x} height={h} rx={12} fill={USED} />
					<rect x={xu} y={y} width={x + w - xu} height={h} rx={12} fill={LEFT} opacity={0.85} />
					<line x1={xu} y1={y - 6} x2={xu} y2={y + h + 6} stroke="#fffdf8" strokeWidth={4} />
				</g>
			) : null}
			{g > 0.01 ? <rect x={x - 8} y={y - 8} width={xu - x + 16} height={h + 16} rx={18} fill="none" stroke={USED} strokeWidth={6} opacity={g} /> : null}
			<rect x={x} y={y} width={w * grow} height={h} rx={12} fill="none" stroke={TEAL} strokeWidth={4} />
			{inner && sp > 0.5 && xu - x > 160 ? <Sx x={(x + xu) / 2} y={y + h / 2 + size * 0.36} text={usedText} size={size} color="#ffffff" anchor="middle" weight={800} at={split ?? 0} /> : null}
			{inner && sp > 0.5 && x + w - xu > 110 ? <Sx x={(xu + x + w) / 2} y={y + h / 2 + size * 0.36} text={leftText} size={size} color="#ffffff" anchor="middle" weight={800} at={split ?? 0} /> : null}
		</g>
	);
};

// ---------- carbon dioxide ----------
export const CO2Tok: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x - 13 * s} cy={y} r={8 * s} fill="#d9d4cb" stroke={CO2_GREY} strokeWidth={1.6} />
		<circle cx={x + 13 * s} cy={y} r={8 * s} fill="#d9d4cb" stroke={CO2_GREY} strokeWidth={1.6} />
		<circle cx={x} cy={y} r={9 * s} fill="#6f6a62" stroke="#4d4943" strokeWidth={1.6} />
	</g>
));
export const Bubble: React.FC<{x: number; y: number; r: number; o?: number}> = ({x, y, r, o = 1}) => (o <= 0.01 ? null : <circle cx={x} cy={y} r={r} fill="#ffffff" fillOpacity={0.55} stroke="#8fb9d8" strokeWidth={2} opacity={o} />);

// ---------- the solid-surface lens ----------
/** A tablet cross-section of packed amber particles in water. Each wave sends hydronium to the current outer layer,
 *  which reacts (fades, leaving a bubble). `dissolve`: from this frame half the bubbles shrink into the solution. */
export const SurfaceLens: React.FC<{cx: number; cy: number; r: number; waves: number[]; dissolve?: number; o?: number}> = ({cx, cy, r, waves, dissolve, o = 1}) => {
	const f = useCurrentFrame();
	const d = 30, R = r * 0.62, ox = cx, oy = cy + r * 0.12;
	const parts = React.useMemo(() => {
		const out: {x: number; y: number; k: number; a: number}[] = [];
		for (let j = -12; j <= 12; j++) for (let i = -12; i <= 12; i++) {
			const x = (i + (j % 2 ? 0.5 : 0)) * d, y = j * d * 0.866;
			const dist = Math.hypot(x, y);
			if (dist <= R) out.push({x: ox + x, y: oy + y, k: Math.floor((R - dist) / d), a: Math.atan2(y, x)});
		}
		return out;
	}, [ox, oy, R]);
	const jit = (a: number) => ((Math.sin(a * 5.3) + 1) / 2) * 34;
	return (
		<g opacity={o}>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#e7f2fa" />
			{parts.map((p, i) => {
				const w = waves[p.k];
				const t0 = w === undefined ? 1e9 : w + jit(p.a);
				const q = clamp01((f - t0) / 18);
				if (q >= 1) return null;
				return <circle key={i} cx={p.x} cy={p.y} r={12 * (1 - 0.5 * q)} fill={AMBER} stroke={AMBER_INK} strokeWidth={1.6} opacity={1 - q} />;
			})}
			{waves.map((w, k) => parts.filter((p, i) => p.k === k && i % 5 === 0).map((p, i) => {
				const t0 = w + jit(p.a);
				const t = f - (t0 - 22);
				if (t < 0 || t > 30) return null;
				const e = smooth(clamp01(t / 22));
				const far = R + r * 0.5;
				const x = lerp(ox + Math.cos(p.a) * far, p.x + Math.cos(p.a) * 14, e), y = lerp(oy + Math.sin(p.a) * far, p.y + Math.sin(p.a) * 14, e);
				return <H3O key={'h' + k + '-' + i} x={x} y={y} s={0.75} o={t > 22 ? 1 - (t - 22) / 8 : 1} />;
			}))}
			{waves.map((w, k) => parts.filter((p, i) => p.k === k && i % 3 === 0).map((p, i) => {
				const t = f - (w + jit(p.a) + 10);
				if (t < 0) return null;
				const life = 120;
				const q = (t % life) / life;
				const shrink = dissolve !== undefined && i % 2 === 0 ? clamp01((f - dissolve) / 30) : 0;
				const yy = p.y - q * (p.y - (cy - r) + 10);
				const xx = p.x + Math.sin(q * 6 + i) * 6;
				if (shrink >= 1) return <circle key={'d' + k + '-' + i} cx={cx + Math.sin(i * 2.7 + k) * r * 0.62} cy={cy - r * 0.42 + Math.cos(i * 1.9 + k * 2) * r * 0.3} r={3.5} fill={CO2_GREY} opacity={0.8} />;
				return <Bubble key={'b' + k + '-' + i} x={xx} y={yy} r={(5 + (i % 3) * 2) * (1 - shrink)} o={(q < 0.9 ? 1 : (1 - q) * 10) * (1 - shrink)} />;
			}))}
		</g>
	);
};

// ---------- points, best-fit ruler and crossing ----------
/** Points of fn at xs, each popping in at time(i). grey: indices greyed (and pulsed) from greyAt. */
export const Pts: React.FC<{g: GG; fn: (v: number) => number; xs: number[]; time: (i: number) => number; r?: number; grey?: number[]; greyAt?: number; greyOut?: number; o?: number}> = ({g, fn, xs, time, r = 8, grey = [], greyAt, greyOut, o = 1}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{xs.map((v, i) => {
				const t = time(i);
				const p = prog(f, t, 8);
				if (p <= 0.01) return null;
				const gq = greyAt !== undefined && grey.includes(i) ? vis(f, greyAt, greyOut, 10) : 0;
				const pulse = gq > 0 ? 1 + 0.35 * Math.max(0, Math.sin(clamp01((f - greyAt!) / 30) * Math.PI)) : 1;
				return <circle key={i} cx={gx(g, v)} cy={gy(g, fn(v))} r={r * (0.5 + 0.5 * p) * pulse} fill={gq > 0.5 ? '#c9c3b8' : '#ffffff'} stroke={gq > 0.5 ? '#8f887d' : INK} strokeWidth={2.6} opacity={p} />;
			})}
		</g>
	);
};
type Ln = {at: (v: number) => number};
/** A straight edge lays itself along the line over [a, b] (the fitted points), draws it, then extends it to [lo, hi]. */
export const FitRuler: React.FC<{g: GG; line: Ln; a: number; b: number; lo: number; hi: number; at: number; color: string; out?: number; o?: number; width?: number; ruler?: boolean}> = ({g, line, a, b, lo, hi, at, color, out, o = 1, width = 5, ruler = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const P = (q: number): [number, number] => [gx(g, q), gy(g, line.at(q))];
	const [x1, y1] = P(a), [x2, y2] = P(b);
	const ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
	const len = Math.hypot(x2 - x1, y2 - y1) + 80;
	const slide = 1 - smooth(prog(f, at, 16));
	const ro = ruler ? vis(f, at, at + 70, 10) : 0;
	const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
	const [lx, ly] = P(lo), [hx, hy] = P(hi);
	return (
		<g opacity={v}>
			{ro > 0.01 ? (
				<g opacity={ro} transform={`translate(${mx},${my}) rotate(${ang}) translate(0,${-26 - 40 * slide})`}>
					<rect x={-len / 2} y={-18} width={len} height={30} rx={5} fill="#f3e3b5" stroke="#b8975a" strokeWidth={2} opacity={0.85} />
					{Array.from({length: Math.floor(len / 24)}, (_, i) => <line key={i} x1={-len / 2 + 12 + i * 24} y1={12} x2={-len / 2 + 12 + i * 24} y2={i % 2 ? 4 : 0} stroke="#8a6f3c" strokeWidth={1.5} />)}
				</g>
			) : null}
			<DrawPath d={`M${x1},${y1} L${x2},${y2}`} at={at + 14} dur={14} color={color} width={width} />
			<DrawPath d={`M${x2},${y2} L${hx},${hy}`} at={at + 28} dur={16} color={color} width={width} />
			<DrawPath d={`M${x1},${y1} L${lx},${ly}`} at={at + 28} dur={16} color={color} width={width} />
		</g>
	);
};
/** Ring where two lines cross at volume x, with a dashed drop to the x axis and an optional label. */
export const CrossMark: React.FC<{g: GG; x: number; p: number; at: number; out?: number; label?: string; labelAt?: number; pulse?: number; size?: number; o?: number; labelDx?: number; labelY?: number}> = ({g, x, p, at, out, label, labelAt, pulse, size = 30, o = 1, labelDx = 12, labelY}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const X = gx(g, x), Y = gy(g, p);
	const s = (0.7 + 0.3 * smooth(prog(f, at, 12))) * (pulse === undefined ? 1 : 1 + 0.3 * Math.max(0, Math.sin(clamp01((f - pulse) / 30) * Math.PI)));
	return (
		<g opacity={v}>
			<circle cx={X} cy={Y} r={22 * s} fill="none" stroke="#ffffff" strokeWidth={8} />
			<circle cx={X} cy={Y} r={22 * s} fill="none" stroke={INK} strokeWidth={3.5} />
			<DrawPath d={`M${X},${Y + 22} L${X},${g.y + g.h}`} at={at + 6} dur={14} color={INK} width={3} dash="8 7" />
			{label ? <Sx x={X + labelDx} y={labelY ?? g.y + g.h - 16} text={label} size={size} color={INK} weight={800} at={labelAt ?? at + 14} /> : null}
		</g>
	);
};

// ---------- dilution beaker ----------
/** Coded beaker outline (x, y top-left, w, h); liquid fills to level(f) (0..1); ions at (u, v): u -1..1 across,
 *  v 0..1 up the liquid, so they spread as the level rises. */
export const DilBeaker: React.FC<{x: number; y: number; w: number; h: number; level: (f: number) => number; at: number; out?: number; o?: number; ions: [number, number, 'na' | 'ac'][]}> = ({x, y, w, h, level, at, out, o = 1, ions}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const L = clamp01(level(f));
	const bot = y + h, lh = (h - 16) * L;
	return (
		<g opacity={v}>
			<rect x={x + 6} y={bot - lh - 6} width={w - 12} height={lh} rx={10} fill={WATER_SOFT} opacity={0.9} />
			<line x1={x + 6} y1={bot - lh - 6} x2={x + w - 6} y2={bot - lh - 6} stroke={WATER_INK} strokeWidth={3} opacity={0.8} />
			{ions.map(([u, q, k], i) => {
				const X = x + w / 2 + u * (w / 2 - 34), Y = bot - 30 - q * Math.max(0, lh - 50);
				return k === 'na' ? <NaTok key={i} x={X} y={Y} s={0.62} grey={1} /> : <An key={i} x={X} y={Y} s={1.0} />;
			})}
			<path d={`M${x - 14},${y} L${x},${y + 12} L${x},${bot - 14} Q${x},${bot} ${x + 14},${bot} L${x + w - 14},${bot} Q${x + w},${bot} ${x + w},${bot - 14} L${x + w},${y + 12} L${x + w + 8},${y}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
		</g>
	);
};

// ---------- small icons ----------
export const Pie: React.FC<{cx: number; cy: number; r: number; frac: (f: number) => number; at: number; out?: number; o?: number}> = ({cx, cy, r, frac, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const q = clamp01(frac(f));
	const a = -Math.PI / 2 + q * 2 * Math.PI;
	const large = q > 0.5 ? 1 : 0;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill="#d6d1c7" stroke={INK_SOFT} strokeWidth={2.5} />
			{q > 0.005 ? <path d={`M${cx},${cy} L${cx},${cy - r} A${r},${r} 0 ${large} 1 ${cx + Math.cos(a) * r},${cy + Math.sin(a) * r} Z`} fill={USED} stroke={USED_INK} strokeWidth={2} /> : null}
		</g>
	);
};
export const TimerIcon: React.FC<{cx: number; cy: number; r?: number; at: number; out?: number; spin?: number}> = ({cx, cy, r = 34, at, out, spin = 80}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const a = -Math.PI / 2 + clamp01((f - at) / spin) * 2 * Math.PI;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} />
			<rect x={cx - 8} y={cy - r - 12} width={16} height={9} rx={3} fill={INK_SOFT} />
			<line x1={cx} y1={cy} x2={cx + Math.cos(a) * r * 0.75} y2={cy + Math.sin(a) * r * 0.75} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		</g>
	);
};
/** A coded volumetric pipette outline with its tip at (tx, ty), height h, delivering drops from `at` (teal liquid). */
export const PipetteIcon: React.FC<{tx: number; ty: number; h: number; at: number; out?: number; fill?: (f: number) => number}> = ({tx, ty, h, at, out, fill = () => 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const top = ty - h, bulbY = ty - h * 0.45, bw = 26;
	const lv = clamp01(fill(f));
	const outline = `M${tx - 4},${top} L${tx - 4},${bulbY - 60} Q${tx - bw},${bulbY - 40} ${tx - bw},${bulbY} Q${tx - bw},${bulbY + 40} ${tx - 4},${bulbY + 60} L${tx - 2},${ty} L${tx + 2},${ty} L${tx + 4},${bulbY + 60} Q${tx + bw},${bulbY + 40} ${tx + bw},${bulbY} Q${tx + bw},${bulbY - 40} ${tx + 4},${bulbY - 60} L${tx + 4},${top}`;
	const liqTop = lerp(ty - 10, bulbY - 70, lv);
	const drop = ((f - at) % 18) / 18;
	return (
		<g opacity={v}>
			<clipPath id={`pip-${Math.round(tx)}`}><path d={outline + ' Z'} /></clipPath>
			<rect x={tx - bw} y={liqTop} width={2 * bw} height={ty - liqTop} fill="#bfe3da" clipPath={`url(#pip-${Math.round(tx)})`} />
			<path d={outline} fill="none" stroke={TEAL} strokeWidth={3.5} strokeLinejoin="round" />
			{lv > 0.05 && f > at ? <circle cx={tx} cy={ty + 6 + drop * 40} r={4} fill="#9fd3c7" opacity={1 - drop} /> : null}
		</g>
	);
};
void OHg; void NAVY_SOFT;
