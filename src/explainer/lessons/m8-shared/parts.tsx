// Module 8 Biology shared coded parts (b01 builds them; b02 to b05 and g03 reuse them). Abstract diagrams only; organisms
// and structures stay painted plates. Nothing here draws people.
// - LoopRing: five slots on a circle (stimulus top, then clockwise receptor, control centre, effector, response) joined by
//   clockwise arcs; the closing arc (response back to stimulus) can carry a minus or plus sign. ringPt gives slot centres.
// - HeatArrows: short wavy arrows leaving (or entering) a surface in a slow continuous loop.
// - SignalPulse: dots travelling along a quadratic path (nerve impulses, hormone in the blood), with an optional track.
// - HeatBalance: a beam with "heat gained" and "heat lost" pans that tips by a frame function.
// - EvapDots: sweat beads that shrink and lift as vapour wisps; a humid frame makes them stay and pool.
// - Countercurrent: an artery (warm out) beside a vein (cool back), flow dashes, heat cross arrows.
// - TGraph pieces (TAxes, TLine, TBand, THLine): a small coded line graph that draws point by point.
// - Arteriole (two walls closing in or opening), Enzyme (abstract notched blob that can distort), Tremor offset.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {Sx, clamp01, lerp, smooth, vis} from '../bio-m7-b13/parts';

export const TEAL8 = '#2f7f86';
export const WARM = '#c4582f';
export const COOL = '#3f6fb0';
export const CARD8 = '#fffdf8';
export const EDGE8 = 'rgba(60,45,20,0.22)';
export type Pt = [number, number];

// ---------- loop ring ----------
export type RG = {cx: number; cy: number; R: number; r: number};
export const RING_ANG = [-90, -18, 54, 126, 198];
export const ringPt = (g: RG, i: number, rr = g.R): Pt => {
	const a = (RING_ANG[i] * Math.PI) / 180;
	return [g.cx + rr * Math.cos(a), g.cy + rr * Math.sin(a)];
};
const arcD = (g: RG, a0: number, a1: number) => {
	const p = (a: number): Pt => [g.cx + g.R * Math.cos((a * Math.PI) / 180), g.cy + g.R * Math.sin((a * Math.PI) / 180)];
	const [x0, y0] = p(a0), [x1, y1] = p(a1);
	return {d: `M${x0},${y0} A${g.R},${g.R} 0 0 1 ${x1},${y1}`, end: [x1, y1] as Pt, tan: ((a1 + 90) * Math.PI) / 180, mid: p((a0 + a1) / 2)};
};
/** Arc i runs from slot i to slot i+1 (i = 4 is the closing arc back to the stimulus). */
export const RingArc: React.FC<{g: RG; i: number; at: number; color?: string; width?: number; sign?: string; signAt?: number; signSize?: number; o?: number}> = ({g, i, at, color = INK_SOFT, width = 4, sign, signAt, signSize = 56, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const gap = (Math.asin(Math.min(0.95, (g.r + 10) / g.R)) * 180) / Math.PI;
	const a0 = RING_ANG[i] + gap, a1 = (i === 4 ? 270 : RING_ANG[i + 1]) - gap;
	const A = arcD(g, a0, a1);
	const h = 16, t = A.tan;
	const [ex, ey] = A.end;
	const so = signAt === undefined ? 0 : prog(f, signAt, 10);
	const [mx, my] = A.mid;
	const ox = (mx - g.cx) / g.R, oy = (my - g.cy) / g.R;
	return (
		<g opacity={o}>
			<DrawPath d={A.d} at={at} dur={16} color={color} width={width} />
			<path d={`M${ex - h * Math.cos(t - 0.5)},${ey - h * Math.sin(t - 0.5)} L${ex},${ey} L${ex - h * Math.cos(t + 0.5)},${ey - h * Math.sin(t + 0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 12, 6)} />
			{sign && so > 0.01 ? (
				<g opacity={so}>
					<circle cx={mx + ox * 46} cy={my + oy * 46} r={signSize * 0.55} fill={CARD8} stroke={color} strokeWidth={4} />
					<Sx x={mx + ox * 46} y={my + oy * 46 + signSize * 0.34} text={sign} size={signSize} color={color} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
		</g>
	);
};
/** The five slots and the four forward arcs. `lit[i]` lights slot i (teal ring) from that frame; `dim` greys the whole ring. */
export const LoopRing: React.FC<{g: RG; at?: number; o?: number; lit?: (number | undefined)[]; unlit?: (number | undefined)[]; arcsAt?: number[]; arcColor?: string; children?: React.ReactNode}> = ({g, at = -100, o = 1, lit = [], unlit = [], arcsAt, arcColor = INK_SOFT, children}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const A = arcsAt ?? [at + 6, at + 10, at + 14, at + 18];
	return (
		<g opacity={v}>
			<circle cx={g.cx} cy={g.cy} r={g.R} fill="none" stroke="#e8e1d2" strokeWidth={2} strokeDasharray="6 10" />
			{[0, 1, 2, 3].map(i => <RingArc key={i} g={g} i={i} at={A[i]} color={arcColor} />)}
			{[0, 1, 2, 3, 4].map(i => {
				const [x, y] = ringPt(g, i);
				const l = lit[i] === undefined ? 0 : vis(f, lit[i] as number, unlit[i], 12);
				return (
					<g key={i}>
						<circle cx={x} cy={y} r={g.r} fill={CARD8} stroke={EDGE8} strokeWidth={3} />
						{l > 0.01 ? <circle cx={x} cy={y} r={g.r} fill="none" stroke={TEAL8} strokeWidth={6} opacity={l} /> : null}
					</g>
				);
			})}
			{children}
		</g>
	);
};

// ---------- heat arrows ----------
/** Wavy arrows on a surface from (x, y) across width w. dir up = heat leaving; down = heat arriving. `rate` scales count. */
export const HeatArrows: React.FC<{x: number; y: number; w: number; at: number; out?: number; n?: number; len?: number; dir?: 'up' | 'down'; color?: string; o?: number; period?: number; width?: number; scale?: (f: number) => number}> = ({x, y, w, at, out, n = 4, len = 90, dir = 'up', color = WARM, o = 1, period = 54, width = 4, scale}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const k = scale ? scale(f) : 1;
	if (k <= 0.01) return null;
	const L = len * k;
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const ph = ((f - at) / period + i * 0.37) % 1;
				const xi = x + (w * (i + 0.5)) / n;
				const s = dir === 'up' ? -1 : 1;
				const y0 = dir === 'up' ? y - 10 - ph * 40 : y - L - 50 + ph * 40;
				const pts = Array.from({length: 9}, (_, j) => [xi + Math.sin(j * 1.2 + i) * 9, y0 + (s * L * j) / 8] as Pt);
				const d = 'M' + pts.map(p => p.join(',')).join(' L');
				const [ex, ey] = pts[8];
				const op = Math.sin(ph * Math.PI);
				return (
					<g key={i} opacity={op}>
						<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
						<path d={`M${ex - 11},${ey - s * 12} L${ex},${ey} L${ex + 11},${ey - s * 12}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
					</g>
				);
			})}
		</g>
	);
};

// ---------- signal pulse ----------
export const qp = (a: Pt, b: Pt, bow: number, t: number): Pt => {
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	return [(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * mx + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * my + t * t * b[1]];
};
/** Dots from a to b every `every` frames between at and until, each taking `dur`. `track` draws the path; `fade` thins later dots. */
export const SignalPulse: React.FC<{a: Pt; b: Pt; at: number; until?: number; every?: number; dur?: number; bow?: number; color?: string; r?: number; track?: boolean; trackColor?: string; trackWidth?: number; dash?: string; o?: number; fade?: (f: number) => number; wavy?: boolean}> = ({a, b, at, until = 1e9, every = 30, dur = 24, bow = -40, color = AMBER, r = 9, track = true, trackColor, trackWidth = 3, dash = '8 8', o = 1, fade, wavy = false}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10) * o;
	if (v <= 0.01) return null;
	const pts = Array.from({length: 25}, (_, i) => {
		const p = qp(a, b, bow, i / 24);
		return wavy ? ([p[0], p[1] + Math.sin(i * 1.3) * 7] as Pt) : p;
	});
	const d = 'M' + pts.map(p => p.join(',')).join(' L');
	const dots: React.ReactNode[] = [];
	for (let t0 = at; t0 <= Math.min(f, until); t0 += every) {
		const u = (f - t0) / dur;
		if (u < 0 || u > 1) continue;
		const p = qp(a, b, bow, smooth(u));
		const k = fade ? fade(t0) : 1;
		if (k <= 0.02) continue;
		dots.push(<circle key={t0} cx={p[0]} cy={wavy ? p[1] + Math.sin(u * 24 * 1.3) * 7 : p[1]} r={r} fill={color} stroke={CARD8} strokeWidth={2.5} opacity={k} />);
	}
	return (
		<g opacity={v}>
			{track ? <path d={d} fill="none" stroke={trackColor ?? color} strokeWidth={trackWidth} strokeDasharray={dash} opacity={0.55} /> : null}
			{dots}
		</g>
	);
};

// ---------- heat balance ----------
/** tilt in degrees: positive = the "heat lost" pan (right) is heavier. */
export const HeatBalance: React.FC<{x: number; y: number; L?: number; tilt: (f: number) => number; at?: number; o?: number; s?: number; lit?: {side: 'l' | 'r'; at: number; out?: number}[]}> = ({x, y, L = 300, tilt, at = -100, o = 1, s = 1, lit = []}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 16) * o;
	if (v <= 0.01) return null;
	const t = (tilt(f) * Math.PI) / 180;
	const lx = -L * Math.cos(t), ly = -L * Math.sin(t), rx = L * Math.cos(t), ry = L * Math.sin(t);
	const glow = (sd: 'l' | 'r') => lit.filter(l => l.side === sd).reduce((m, l) => Math.max(m, vis(f, l.at, l.out, 10)), 0);
	const Pan: React.FC<{px: number; py: number; label: string; c: string; g: number}> = ({px, py, label, c, g}) => (
		<g>
			<line x1={px} y1={py} x2={px - 60} y2={py + 70} stroke={INK_SOFT} strokeWidth={2.5} />
			<line x1={px} y1={py} x2={px + 60} y2={py + 70} stroke={INK_SOFT} strokeWidth={2.5} />
			<path d={`M${px - 84},${py + 70} Q${px},${py + 112} ${px + 84},${py + 70} Z`} fill={g > 0.01 ? '#fff3d9' : CARD8} stroke={c} strokeWidth={4 + 2 * g} />
			<Sx x={px} y={py + 150} text={label} size={30} color={c} anchor="middle" hand weight={700} at={-1000} />
		</g>
	);
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			<path d="M-26,70 L0,0 L26,70 Z" fill="#e9e2d3" stroke={INK_SOFT} strokeWidth={3} />
			<line x1={lx} y1={ly} x2={rx} y2={ry} stroke={INK} strokeWidth={7} strokeLinecap="round" />
			<circle r={9} fill={INK} />
			<Pan px={lx} py={ly} label="heat gained" c={WARM} g={glow('l')} />
			<Pan px={rx} py={ry} label="heat lost" c={COOL} g={glow('r')} />
		</g>
	);
};

// ---------- evaporation ----------
export const EvapDots: React.FC<{pts: Pt[]; at: number; out?: number; humid?: number; r?: number; period?: number; o?: number; slow?: number}> = ({pts, at, out, humid, r = 14, period = 60, o = 1, slow}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const hu = humid === undefined ? 0 : prog(f, humid, 30);
	const sl = slow === undefined ? 0 : prog(f, slow, 40);
	return (
		<g opacity={v}>
			{pts.map(([x, y], i) => {
				const ph = ((f - at) / (period * (1 + 2 * sl)) + i * 0.29) % 1;
				const dryR = r * (1 - 0.75 * ph);
				const rr = lerp(dryR, r * 1.35, hu);
				const wispO = (1 - hu) * Math.sin(ph * Math.PI) * (1 - 0.6 * sl);
				return (
					<g key={i}>
						<ellipse cx={x} cy={y - rr * 0.6} rx={rr * (1 + 0.4 * hu)} ry={rr * 0.75} fill="#dff0fa" stroke="#6aa6c8" strokeWidth={2.5} opacity={0.95} />
						{wispO > 0.02 ? <path d={`M${x},${y - rr - 10 - ph * 70} q-12,-18 0,-36 q12,-18 0,-36`} fill="none" stroke="#9cc3d8" strokeWidth={3.5} strokeLinecap="round" opacity={wispO} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- countercurrent ----------
export const Countercurrent: React.FC<{x: number; y: number; h: number; gap?: number; at: number; crossAt?: number; o?: number; w?: number}> = ({x, y, h, gap = 120, at, crossAt, o = 1, w = 46}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 30));
	const ax = x, vx = x + gap;
	const flow = ((f - at) * 2) % 40;
	const cr = crossAt === undefined ? 0 : prog(f, crossAt, 12);
	return (
		<g opacity={v}>
			<defs>
				<linearGradient id="m8cc-a" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#c8372d" /><stop offset="1" stopColor="#7a4a9a" /></linearGradient>
				<linearGradient id="m8cc-v" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#a04a7a" /><stop offset="1" stopColor="#3a63b8" /></linearGradient>
			</defs>
			<rect x={ax - w / 2} y={y} width={w} height={h * d} rx={w / 2} fill="url(#m8cc-a)" />
			<rect x={vx - w / 2} y={y + h * (1 - d)} width={w} height={h * d} rx={w / 2} fill="url(#m8cc-v)" />
			<line x1={ax} x2={ax} y1={y + 20} y2={y + h * d - 20} stroke="#ffe9dd" strokeWidth={4} strokeDasharray="14 26" strokeDashoffset={-flow} opacity={0.8} />
			<line x1={vx} x2={vx} y1={y + h * (1 - d) + 20} y2={y + h - 20} stroke="#e6eefc" strokeWidth={4} strokeDasharray="14 26" strokeDashoffset={flow} opacity={0.8} />
			{d > 0.95 ? (
				<g>
					<path d={`M${ax - 16},${y + h + 6} l16,26 l16,-26`} fill="none" stroke="#7a4a9a" strokeWidth={5} strokeLinecap="round" />
					<path d={`M${vx - 16},${y - 6} l16,-26 l16,26`} fill="none" stroke="#a04a7a" strokeWidth={5} strokeLinecap="round" />
				</g>
			) : null}
			{cr > 0.01 ? [0.18, 0.4, 0.62, 0.84].map((u, i) => {
				const yy = y + h * u;
				const p = 0.5 + 0.5 * Math.sin((f - (crossAt as number)) / 8 - i);
				return <g key={i} opacity={cr * (0.45 + 0.55 * p)}><line x1={ax + w / 2 + 6} x2={vx - w / 2 - 14} y1={yy} y2={yy} stroke={AMBER} strokeWidth={5} strokeLinecap="round" /><path d={`M${vx - w / 2 - 26},${yy - 11} L${vx - w / 2 - 12},${yy} L${vx - w / 2 - 26},${yy + 11}`} fill="none" stroke={AMBER} strokeWidth={5} strokeLinecap="round" /></g>;
			}) : null}
		</g>
	);
};

// ---------- line graph ----------
export type TG = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const tx = (g: TG, v: number) => g.x + ((v - g.x0) / (g.x1 - g.x0)) * g.w;
export const ty = (g: TG, v: number) => g.y + g.h - ((v - g.y0) / (g.y1 - g.y0)) * g.h;
export const TAxes: React.FC<{g: TG; at: number; o?: number; xLabel: string; yLabel: string; yTicks?: number[]; xTicks?: number[]; size?: number; fmt?: (n: number) => string; rTicks?: {g: TG; ticks: number[]; label: string; color?: string}}> = ({g, at, o = 1, xLabel, yLabel, yTicks = [], xTicks = [], size = 24, fmt = n => `${n}`, rTicks}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 20));
	return (
		<g opacity={v}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD8} opacity={0.7} />
			<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w * d} y2={g.y + g.h} stroke={INK} strokeWidth={3.5} />
			<line x1={g.x} y1={g.y + g.h} x2={g.x} y2={g.y + g.h - g.h * d} stroke={INK} strokeWidth={3.5} />
			{yTicks.map(t => <g key={'y' + t}><line x1={g.x - 10} x2={g.x} y1={ty(g, t)} y2={ty(g, t)} stroke={INK} strokeWidth={2.5} /><Sx x={g.x - 16} y={ty(g, t) + 8} text={fmt(t)} size={size} color={INK_SOFT} anchor="end" weight={600} at={-1000} /></g>)}
			{xTicks.map(t => <g key={'x' + t}><line x1={tx(g, t)} x2={tx(g, t)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={2.5} /><Sx x={tx(g, t)} y={g.y + g.h + 36} text={`${t}`} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /></g>)}
			<Sx x={g.x + g.w / 2} y={g.y + g.h + (xTicks.length ? 74 : 40)} text={xLabel} size={size + 2} color={INK} anchor="middle" weight={700} at={-1000} />
			<g transform={`translate(${g.x - 78},${g.y + g.h / 2}) rotate(-90)`}><Sx x={0} y={0} text={yLabel} size={size + 2} color={INK} anchor="middle" weight={700} at={-1000} /></g>
			{rTicks ? (
				<g>
					<line x1={g.x + g.w} y1={g.y} x2={g.x + g.w} y2={g.y + g.h} stroke={rTicks.color ?? INK} strokeWidth={3} />
					{rTicks.ticks.map(t => <g key={'r' + t}><line x1={g.x + g.w} x2={g.x + g.w + 10} y1={ty(rTicks.g, t)} y2={ty(rTicks.g, t)} stroke={rTicks.color ?? INK} strokeWidth={2.5} /><Sx x={g.x + g.w + 16} y={ty(rTicks.g, t) + 8} text={t.toFixed(1)} size={size} color={rTicks.color ?? INK_SOFT} weight={600} at={-1000} /></g>)}
					<g transform={`translate(${g.x + g.w + 96},${g.y + g.h / 2}) rotate(90)`}><Sx x={0} y={0} text={rTicks.label} size={size + 2} color={rTicks.color ?? INK} anchor="middle" weight={700} at={-1000} /></g>
				</g>
			) : null}
		</g>
	);
};
/** A polyline through data points (x, y) that draws on from `at` over `dur`. */
export const TLine: React.FC<{g: TG; pts: [number, number][]; at: number; dur?: number; color: string; width?: number; o?: number; dash?: string; label?: string; labelAt?: number; labelDy?: number; size?: number}> = ({g, pts, at, dur = 60, color, width = 6, o = 1, dash, label, labelAt, labelDy = -16, size = 26}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const d = 'M' + pts.map(([a, b]) => `${tx(g, a)},${ty(g, b)}`).join(' L');
	const [lx, ly] = pts[pts.length - 1];
	return (
		<g opacity={o}>
			<DrawPath d={d} at={at} dur={dur} color={color} width={width} dash={dash} />
			{label ? <Sx x={tx(g, lx) - 6} y={ty(g, ly) + labelDy} text={label} size={size} color={color} anchor="end" weight={700} hand at={labelAt ?? at + dur} /> : null}
		</g>
	);
};
export const TBand: React.FC<{g: TG; lo: number; hi: number; at: number; color?: string; o?: number; op?: number}> = ({g, lo, hi, at, color = TEAL8, o = 1, op = 0.18}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 20) * o;
	if (v <= 0.01) return null;
	return <rect x={g.x} y={ty(g, hi)} width={g.w * smooth(prog(f, at, 26))} height={ty(g, lo) - ty(g, hi)} fill={color} opacity={op * v} />;
};
export const THLine: React.FC<{g: TG; v: number; at: number; color?: string; o?: number}> = ({g, v, at, color = INK_SOFT, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={`M${g.x},${ty(g, v)} L${g.x + g.w},${ty(g, v)}`} at={at} dur={20} color={color} width={3} dash="12 10" /></g>;
};

// ---------- small pieces ----------
/** Two vessel walls; `gap(f)` is the lumen width (narrowing or widening), red blood between them. */
export const Arteriole: React.FC<{x: number; y: number; w: number; gap: (f: number) => number; at: number; o?: number; blood?: string}> = ({x, y, w, gap, at, o = 1, blood = '#c8372d'}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const gp = gap(f);
	return (
		<g opacity={v}>
			<rect x={x} y={y - gp / 2} width={w} height={gp} fill={blood} opacity={0.75} />
			<line x1={x} x2={x + w} y1={y - gp / 2 - 4} y2={y - gp / 2 - 4} stroke="#b9575a" strokeWidth={9} strokeLinecap="round" />
			<line x1={x} x2={x + w} y1={y + gp / 2 + 4} y2={y + gp / 2 + 4} stroke="#b9575a" strokeWidth={9} strokeLinecap="round" />
		</g>
	);
};
/** An abstract enzyme (rounded blob with a notch, the active site); `warp` 0..1 distorts the notch. */
export const Enzyme: React.FC<{x: number; y: number; s?: number; at: number; warp?: number; o?: number}> = ({x, y, s = 1, at, warp = 0, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const w = warp;
	const d = `M-70,-10 C-70,-60 -20,-70 10,-62 L${22 + 18 * w},${-40 + 22 * w} C${30 - 12 * w},${-20 + 10 * w} ${48 + 10 * w},${-16 - 10 * w} ${60 - 8 * w},${-34 + 26 * w} C80,-20 82,30 50,52 C10,72 -60,60 -70,-10 Z`;
	return <g opacity={v} transform={`translate(${x},${y}) scale(${s})`}><path d={d} fill="#d9ccef" stroke="#6a4fb0" strokeWidth={4} /></g>;
};
export const tremor = (f: number, on: number, amp = 2) => (on <= 0.01 ? 0 : Math.sin(f * 1.7) * amp * on);
export const Pointer: React.FC<{from: Pt; to: Pt; at: number; out?: number; color?: string; o?: number}> = ({from, to, at, out, color = INK_SOFT, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01 || f < at) return null;
	return (
		<g opacity={v}>
			<DrawPath d={`M${from[0]},${from[1]} L${to[0]},${to[1]}`} at={at} dur={12} color={color} width={3} />
			<circle cx={to[0]} cy={to[1]} r={8} fill={color} opacity={prog(f, at + 8, 6)} />
			<circle cx={to[0]} cy={to[1]} r={16} fill="none" stroke={color} strokeWidth={2.5} opacity={prog(f, at + 8, 6) * 0.6} />
		</g>
	);
};
export {AMBER, AMBER_INK, INK, INK_SOFT, clamp01, lerp, smooth, vis, prog};
