// B8-09 coded parts (lesson-local). Abstract diagrams only; cells, skin, vessels and organs stay painted plates.
// - Spark: a small amber DNA-damage spark (grey once harmless); P53: a rounded four-lobed protein glyph.
// - Tissue: a honeycomb of small painted interphase cells (the hook's abstract tissue).
// - CycleRing: the cell cycle as a loop with four stations (painted cd- thumbnails), three gate marks and a dot.
// - CloneTree: generations of small painted cells branching; one lineage outgrows its neighbours.
// - Pedal: an abstract pedal outline (accelerator or brake) that presses, locks with a clamp, or goes slack.
// - GeneChip, CauseChain5 (five linked boxes with thumbnails, faint until lit), DepthRuler, DnaKink, Lab.
// b07's board, RiskDial, Bracket and PreRing are imported read-only. Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, DrawPath, EDGE, GREYT, INK, INK_SOFT, Pic, RED, Sx, T, TEAL, clamp01, lerp, prog, pulse, smooth, vis, wrapM} from '../bio-m8-b07/parts';
import type {PB} from '../bio-m8-b07/parts';
import {PL} from './assets';

export * from '../bio-m8-b07/parts';
export type P2 = [number, number];
export const ON = -1000;

/** A label that fades to 45% from `dim`. */
export const Lab: React.FC<{x: number; y: number; t: string; at: number; dim?: number; out?: number; size?: number; w?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, t, at, dim, out, size = 40, w = 700, color = INK, anchor}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	return <g opacity={1 - 0.55 * d}><T x={x} y={y} text={t} size={size} w={w} color={color} at={at} out={out} anchor={anchor} /></g>;
};
/** A thin pointer from a label point to a feature, with a dot. */
export const Ptr: React.FC<{a: P2; b: P2; at: number; out?: number; color?: string; o?: number}> = ({a, b, at, out, color = INK_SOFT, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={12} color={color} width={3.5} /><circle cx={b[0]} cy={b[1]} r={7} fill={color} /></g>;
};

// ---------- sparks and the p53 glyph ----------
/** A four-point spark: amber (damage), turning grey from `grey`, shrinking away from `gone`. */
export const Spark: React.FC<{x: number; y: number; s?: number; at?: number; grey?: number; gone?: number; o?: number; beat?: boolean}> = ({x, y, s = 16, at = ON, grey, gone, o = 1, beat = false}) => {
	const f = useCurrentFrame();
	const a = prog(f, at, 10);
	const g = gone === undefined ? 0 : smooth(prog(f, gone, 18));
	const v = a * (1 - g) * o;
	if (v <= 0.01) return null;
	const gr = grey === undefined ? 0 : prog(f, grey, 14);
	const k = (beat && gr < 0.5 ? 1 + 0.18 * Math.sin(f / 5) : 1) * (1 - 0.6 * g);
	const r = s * k, q = r * 0.32;
	const d = `M${x},${y - r} L${x + q},${y - q} L${x + r},${y} L${x + q},${y + q} L${x},${y + r} L${x - q},${y + q} L${x - r},${y} L${x - q},${y - q} Z`;
	return <g opacity={v}>{gr < 0.5 ? <circle cx={x} cy={y} r={r * 1.25} fill={AMBER} opacity={0.3} /> : null}<path d={d} fill={gr > 0.5 ? '#b9b2a4' : '#f2a531'} stroke={gr > 0.5 ? GREYT : AMBER_INK} strokeWidth={2.5} strokeLinejoin="round" /></g>;
};
export const P53: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 26, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b], i) => <circle key={i} cx={x + a * s * 0.42} cy={y + b * s * 0.42} r={s * 0.55} fill="#9fb4c9" stroke="#4d6a87" strokeWidth={3} />)}
		<circle cx={x} cy={y} r={s * 0.45} fill="#9fb4c9" />
		<Sx x={x} y={y + s * 0.24} text="p53" size={Math.max(20, s * 0.62)} color="#24384d" anchor="middle" weight={800} at={ON} />
	</g>
));

// ---------- tissue (hook) ----------
export type Tile = {x: number; y: number};
export const tissueTiles = (x0: number, y0: number, cols: number, rows: number, sp: number): Tile[] => {
	const out: Tile[] = [];
	for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) out.push({x: x0 + c * sp + (r % 2 ? sp / 2 : 0), y: y0 + r * sp * 0.88});
	return out;
};
/** Small painted cells that appear in order of distance from `src` from `at`. */
export const Tissue: React.FC<{tiles: Tile[]; w: number; src: P2; at: number; step?: number; o?: number; keep?: number[]; dimAt?: number}> = ({tiles, w, src, at, step = 1.6, o = 1, keep = [], dimAt}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const order = tiles.map((t, i) => ({i, d: Math.hypot(t.x - src[0], t.y - src[1])})).sort((a, b) => a.d - b.d);
	const rank: number[] = [];
	order.forEach((e, k) => { rank[e.i] = k; });
	const dm = dimAt === undefined ? 0 : prog(f, dimAt, 14);
	return (
		<g opacity={o}>
			{tiles.map((t, i) => {
				const p = smooth(prog(f, at + rank[i] * step, 14));
				if (p <= 0.01) return null;
				const x = lerp(src[0], t.x, p), y = lerp(src[1], t.y, p);
				return <Pic key={i} p={PL.inter} cx={x} cy={y} w={w * (0.6 + 0.4 * p)} o={p * (keep.includes(i) ? 1 : 1 - 0.4 * dm)} />;
			})}
		</g>
	);
};

// ---------- the cell cycle ring ----------
export type CG = {cx: number; cy: number; R: number; tr?: number};
/** Stations clockwise (degrees, 0 = right, y down): grow lower left, copy DNA upper left, get ready upper right, divide lower right. */
export const ST_ANG = [120, 210, 300, 390];
export const ST_NAME = ['grow', 'copy DNA', 'get ready', 'divide'];
export const ST_LET = ['G1', 'S', 'G2', 'M'];
/** Gates: 0 = before DNA copying (G1), 1 = entry to divide (G2/M), 2 = inside divide, before the copies separate (spindle). */
export const GATE_ANG = [165, 360, 60];
export const CHEV = [140, 255, 330, 95];
const pt = (g: CG, deg: number, r = g.R): P2 => [g.cx + r * Math.cos((deg * Math.PI) / 180), g.cy + r * Math.sin((deg * Math.PI) / 180)];
export const ringPt = pt;
export type GateState = {show?: number; lit?: number; litColor?: string; closed?: number; open?: number; dim?: number};
export const CycleRing: React.FC<{g: CG; at?: number; o?: number; dot?: (f: number) => number | null; gates?: GateState[]; litSt?: (number | undefined)[]; size?: number; thumbs?: boolean; letters?: boolean; labels?: boolean}> = ({g, at = ON, o = 1, dot, gates = [], litSt = [], size = 34, thumbs = true, letters = true, labels = true}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 16) * o;
	if (v <= 0.01) return null;
	const tr = g.tr ?? g.R * 0.3;
	const plates: PB[] = [PL.inter, PL.inter, PL.inter, PL.meta];
	const da = dot ? dot(f) : null;
	return (
		<g opacity={v}>
			<circle cx={g.cx} cy={g.cy} r={g.R} fill="none" stroke="#ddd5c6" strokeWidth={Math.max(10, g.R * 0.08)} />
			<circle cx={g.cx} cy={g.cy} r={g.R} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="14 10" />
			{CHEV.map(a => {
				const [x, y] = pt(g, a);
				return <path key={a} d={`M${x - 12},${y - 12} L${x + 4},${y} L${x - 12},${y + 12}`} transform={`rotate(${a + 90} ${x} ${y})`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />;
			})}
			{GATE_ANG.map((a, i) => {
				const s = gates[i] ?? {};
				const sh = s.show === undefined ? 0 : prog(f, s.show, 12);
				if (sh <= 0.01) return null;
				const lit = s.lit === undefined ? 0 : prog(f, s.lit, 12);
				const cl = s.closed === undefined ? 0 : smooth(prog(f, s.closed, 12)) * (s.open === undefined ? 1 : 1 - smooth(prog(f, s.open, 10)));
				const dm = s.dim === undefined ? 0 : prog(f, s.dim, 14);
				const [x1, y1] = pt(g, a, g.R - Math.max(26, g.R * 0.15)), [x2, y2] = pt(g, a, g.R + Math.max(26, g.R * 0.15));
				const col = lit > 0.5 ? (s.litColor ?? AMBER_INK) : INK;
				return (
					<g key={i} opacity={sh * (1 - 0.5 * dm)}>
						{lit > 0.01 ? <circle cx={(x1 + x2) / 2} cy={(y1 + y2) / 2} r={Math.max(34, g.R * 0.19)} fill={s.litColor ?? AMBER} opacity={0.32 * lit} /> : null}
						<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={col} strokeWidth={10} strokeLinecap="round" />
						{cl > 0.01 ? <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={RED} strokeWidth={16} strokeLinecap="round" opacity={cl} /> : null}
					</g>
				);
			})}
			{ST_ANG.map((a, i) => {
				const [x, y] = pt(g, a);
				const lit = litSt[i] === undefined ? 0 : prog(f, litSt[i] as number, 12);
				const c = Math.cos((a * Math.PI) / 180), sn = Math.sin((a * Math.PI) / 180);
				const lx = x + c * (tr + 14);
				const ly = y + sn * (tr + 10) + (sn > 0 ? size * 0.9 : -size * 0.2);
				const right = c > 0;
				return (
					<g key={i}>
						<circle cx={x} cy={y} r={tr} fill={CARD} stroke={lit > 0.5 ? BLUE : EDGE} strokeWidth={lit > 0.5 ? 5 : 3} />
						{thumbs ? <Pic p={plates[i]} cx={x} cy={y} w={tr * 1.78} /> : null}
						{labels ? <Sx x={lx} y={ly} text={ST_NAME[i]} size={size} color={lit > 0.5 ? BLUE : INK} anchor={right ? 'start' : 'end'} hand weight={700} at={ON} /> : null}
						{letters ? <Sx x={lx} y={ly + size * 0.95} text={ST_LET[i]} size={Math.max(26, size * 0.78)} color={GREYT} anchor={right ? 'start' : 'end'} weight={700} at={ON} /> : null}
					</g>
				);
			})}
			{da !== null ? (() => { const [x, y] = pt(g, da); return <circle cx={x} cy={y} r={Math.max(12, g.R * 0.07)} fill={TEAL} stroke={CARD} strokeWidth={4} />; })() : null}
		</g>
	);
};
/** Dot angle from legs [f0, f1, a0, a1] (degrees); `null` before the first leg. */
export const travel = (legs: [number, number, number, number][]) => (f: number): number | null => {
	if (!legs.length || f < legs[0][0]) return legs.length ? legs[0][2] : null;
	let a = legs[0][2];
	for (const [f0, f1, a0, a1] of legs) if (f >= f0) a = lerp(a0, a1, smooth(prog(f, f0, Math.max(1, f1 - f0))));
	return a;
};

// ---------- clone tree ----------
export type CNode = {x: number; y: number; at: number; clone?: boolean; parent?: number; dotAt?: number[]};
/** Nodes appear on their frames, joined to their parent by a branch; amber sparks mark changes. */
export const CloneTree: React.FC<{nodes: CNode[]; w: number; o?: number; dimOthers?: number}> = ({nodes, w, o = 1, dimOthers}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const dm = dimOthers === undefined ? 0 : prog(f, dimOthers, 14);
	return (
		<g opacity={o}>
			{nodes.map((n, i) => {
				if (n.parent === undefined) return null;
				const p = nodes[n.parent];
				const v = prog(f, n.at, 12);
				if (v <= 0.01) return null;
				return <path key={'b' + i} d={`M${p.x + w * 0.42},${p.y} C${(p.x + n.x) / 2},${p.y} ${(p.x + n.x) / 2},${n.y} ${n.x - w * 0.42},${n.y}`} fill="none" stroke={n.clone ? AMBER_INK : '#b5ab9b'} strokeWidth={n.clone ? 4 : 3} opacity={v * (n.clone ? 1 : 1 - 0.5 * dm)} />;
			})}
			{nodes.map((n, i) => {
				const v = smooth(prog(f, n.at, 14));
				if (v <= 0.01) return null;
				return (
					<g key={'n' + i} opacity={n.clone ? 1 : 1 - 0.5 * dm}>
						{n.clone ? <circle cx={n.x} cy={n.y} r={w * 0.58} fill={AMBER} opacity={0.2 * v} /> : null}
						<Pic p={PL.inter} cx={n.x} cy={n.y} w={w * (0.5 + 0.5 * v)} o={v} />
						{(n.dotAt ?? []).map((a, k) => <Spark key={k} x={n.x - w * 0.22 + k * w * 0.22} y={n.y - w * 0.02} s={Math.max(8, w * 0.12)} at={a} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- pedals ----------
/** An abstract pedal: a hinge, an arm and a pad. press 0 (up) to 1 (down); slack draws it limp and grey. */
export const Pedal: React.FC<{x: number; y: number; s?: number; press: number; kind: 'acc' | 'brake'; lit?: number; clamp?: number; slack?: number; label?: boolean; o?: number; size?: number}> = ({x, y, s = 1, press, kind, lit = 0, clamp = 0, slack = 0, label = true, o = 1, size = 38}) => {
	if (o <= 0.01) return null;
	const col = slack > 0.5 ? '#aaa296' : lit > 0.5 ? (kind === 'acc' ? AMBER_INK : TEAL) : INK_SOFT;
	const fill = slack > 0.5 ? '#ece8df' : lit > 0.5 ? (kind === 'acc' ? '#f8e1b0' : '#d7ecee') : CARD;
	const ang = -28 + 34 * clamp01(press) + 30 * slack;
	const L = 150 * s, pw = (kind === 'acc' ? 70 : 118) * s, ph = (kind === 'acc' ? 150 : 86) * s;
	return (
		<g opacity={o}>
			<rect x={x - 100 * s} y={y + 8 * s} width={200 * s} height={22 * s} rx={8 * s} fill="#e9e2d3" stroke={INK_SOFT} strokeWidth={3} />
			<g transform={`rotate(${ang} ${x} ${y})`}>
				<line x1={x} y1={y} x2={x} y2={y - L} stroke={col} strokeWidth={Math.max(4, 10 * s)} strokeLinecap="round" />
				<rect x={x - pw / 2} y={y - L - ph} width={pw} height={ph} rx={14 * s} fill={fill} stroke={col} strokeWidth={Math.max(2.5, 5 * s)} />
				{[0.3, 0.5, 0.7].map(k => <line key={k} x1={x - pw * 0.32} x2={x + pw * 0.32} y1={y - L - ph * k} y2={y - L - ph * k} stroke={col} strokeWidth={Math.max(1.5, 3 * s)} opacity={0.6} />)}
				{clamp > 0.01 ? <g opacity={clamp}><rect x={x - pw / 2 - 18 * s} y={y - L - ph * 0.62} width={pw + 36 * s} height={30 * s} rx={8 * s} fill={AMBER} stroke={AMBER_INK} strokeWidth={Math.max(2, 4 * s)} /><rect x={x + pw / 2 + 4 * s} y={y - L - ph * 0.62 + 24 * s} width={16 * s} height={L * 0.9} rx={4 * s} fill={AMBER} stroke={AMBER_INK} strokeWidth={Math.max(2, 3 * s)} /></g> : null}
			</g>
			<circle cx={x} cy={y} r={14 * s} fill={CARD} stroke={col} strokeWidth={Math.max(2.5, 4 * s)} />
			{label ? <Sx x={x} y={y + 76 * s + size * 0.4} text={kind === 'acc' ? 'accelerator' : 'brake'} size={size} color={col === INK_SOFT ? INK : col} anchor="middle" hand weight={700} at={ON} /> : null}
		</g>
	);
};
/** A small pair of pedal icons (for the chain, the cards and the feedback). */
export const PedalIcon: React.FC<{x: number; y: number; s?: number; accLock?: number; brakeSlack?: number; brakePress?: number; o?: number}> = ({x, y, s = 0.3, accLock = 0, brakeSlack = 0, brakePress = 0.6, o = 1}) => (
	<g opacity={o}>
		<Pedal x={x - 120 * s} y={y} s={s} press={accLock} kind="acc" lit={accLock} clamp={accLock} label={false} />
		<Pedal x={x + 120 * s} y={y} s={s} press={brakeSlack > 0.5 ? 0 : brakePress} kind="brake" lit={brakeSlack > 0.5 ? 0 : 1} slack={brakeSlack} label={false} />
	</g>
);

// ---------- gene chips ----------
export const GeneChip: React.FC<{x: number; y: number; text: string; color: string; at?: number; cross?: number; o?: number; size?: number; w?: number}> = ({x, y, text, color, at = ON, cross, o = 1, size = 34, w = 360}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const h = size * 1.6;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={12} fill={CARD} stroke={color} strokeWidth={4} />
			<rect x={x + 10} y={y + 10} width={18} height={h - 20} rx={4} fill={color} opacity={0.85} />
			<Sx x={x + 42} y={y + h / 2 + size * 0.35} text={text} size={size} color={INK} hand weight={700} at={ON} />
			{cross !== undefined ? <DrawPath d={`M${x + 8},${y + h - 6} L${x + w - 8},${y + 6}`} at={cross} dur={10} color={RED} width={6} /> : null}
		</g>
	);
};

// ---------- cause chain ----------
export const CHAIN_LABELS = ['mutations build up', 'control lost', 'divides without stopping', 'tumour', 'invades and spreads'];
export type ChainThumb = (cx: number, cy: number, h: number) => React.ReactNode;
/** Five linked boxes, faint from the first frame; each lights on its cue. */
export const CauseChain5: React.FC<{x?: number; y?: number; w?: number; h?: number; lit: (number | undefined)[]; thumbs: ChainThumb[]; size?: number; o?: number; pulseLast?: number; gap?: number}> = ({x = 96, y = 880, w = 1728, h = 168, lit, thumbs, size = 32, o = 1, pulseLast, gap = 40}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const bw = (w - 4 * gap) / 5;
	const tw = Math.min(h * 0.8, bw * 0.42);
	return (
		<g opacity={o}>
			{CHAIN_LABELS.map((lab, i) => {
				const bx = x + i * (bw + gap);
				const L = lit[i] === undefined ? 0 : prog(f, lit[i] as number, 14);
				const pu = i === 4 && pulseLast !== undefined ? pulse(f, pulseLast, 40) : 0;
				const lines = wrapM(lab, size, bw - tw - 36, true, 700);
				const nxt = i < 4 ? (lit[i + 1] === undefined ? 0 : prog(f, lit[i + 1] as number, 14)) : 0;
				return (
					<g key={i}>
						{pu > 0.01 ? <rect x={bx - 10} y={y - 10} width={bw + 20} height={h + 20} rx={24} fill={AMBER} opacity={0.35 * pu} /> : null}
						<rect x={bx} y={y} width={bw} height={h} rx={18} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} strokeDasharray={L > 0.5 ? undefined : '10 8'} />
						<g opacity={0.4 + 0.6 * L}>
							{thumbs[i](bx + 10 + tw / 2, y + h / 2, tw)}
							{lines.map((ln, k) => <Sx key={k} x={bx + tw + 22} y={y + h / 2 + size * 0.36 + (k - (lines.length - 1) / 2) * size * 1.08} text={ln} size={size} color={L > 0.5 ? BLUE : INK} hand weight={700} at={ON} />)}
						</g>
						{i < 4 ? <path d={`M${bx + bw + 6},${y + h / 2} L${bx + bw + gap - 6},${y + h / 2} M${bx + bw + gap - 18},${y + h / 2 - 11} L${bx + bw + gap - 6},${y + h / 2} L${bx + bw + gap - 18},${y + h / 2 + 11}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" opacity={0.45 + 0.55 * nxt} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** The chain thumbnails: a mini clone, the pedal pair, daughters, the melanoma block, the node with secondaries. */
export const chainThumbs = (): ChainThumb[] => [
	(cx, cy, h) => <g>{[[-0.26, -0.24], [0.14, -0.3], [-0.12, 0.1], [0.28, 0.06], [0.04, 0.36]].map(([a, b], i) => <g key={i}><Pic p={PL.inter} cx={cx + a * h} cy={cy + b * h} w={h * 0.4} />{i < 4 ? <Spark x={cx + a * h} y={cy + b * h} s={8} /> : null}</g>)}</g>,
	(cx, cy, h) => <PedalIcon x={cx} y={cy + h * 0.36} s={h / 560} accLock={1} brakeSlack={1} />,
	(cx, cy, h) => <Pic p={PL.daught} cx={cx} cy={cy} w={h * 1.05} />,
	(cx, cy, h) => <Pic p={PL.skinM} cx={cx} cy={cy} w={h * 1.05} />,
	(cx, cy, h) => <Pic p={PL.nodeM} cx={cx} cy={cy} w={h * 0.98} />,
];

// ---------- ruler, DNA kink ----------
export const DepthRuler: React.FC<{x: number; y0: number; y1: number; at?: number; o?: number}> = ({x, y0, y1, at = ON, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const n = 10;
	return (
		<g opacity={v}>
			<rect x={x - 16} y={y0} width={32} height={y1 - y0} rx={6} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
			{Array.from({length: n + 1}, (_, i) => <line key={i} x1={x - 16} x2={i % 5 ? x - 2 : x + 8} y1={y0 + ((y1 - y0) * i) / n} y2={y0 + ((y1 - y0) * i) / n} stroke={INK} strokeWidth={2.5} />)}
		</g>
	);
};
/** Two DNA strands with a kink at the middle (UV damage), coded. */
export const DnaKink: React.FC<{x: number; y: number; w?: number; at?: number; o?: number}> = ({x, y, w = 220, at = ON, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const k = smooth(prog(f, at + 16, 18));
	const mid = x + w / 2;
	const ys = (xx: number, base: number) => base - k * 22 * Math.exp(-(((xx - mid) / (w * 0.12)) ** 2));
	const n = 11;
	const xs = Array.from({length: n}, (_, i) => x + (w * i) / (n - 1));
	return (
		<g opacity={v}>
			<path d={'M' + xs.map(xx => `${xx},${ys(xx, y)}`).join(' L')} fill="none" stroke="#4f86ad" strokeWidth={6} strokeLinecap="round" />
			<path d={'M' + xs.map(xx => `${xx},${ys(xx, y + 40)}`).join(' L')} fill="none" stroke="#4f86ad" strokeWidth={6} strokeLinecap="round" />
			{xs.map((xx, i) => <line key={i} x1={xx} x2={xx} y1={ys(xx, y) + 4} y2={ys(xx, y + 40) - 4} stroke={i === 5 || i === 6 ? AMBER_INK : '#9fbfd6'} strokeWidth={i === 5 || i === 6 ? 6 : 4} />)}
			{k > 0.3 ? <Spark x={mid} y={y - 30} s={13} /> : null}
		</g>
	);
};
/** A smooth path through points (Catmull-Rom to cubic Bezier), mapped by fn. */
export const smoothPath = (pts: P2[]) => {
	if (pts.length < 2) return '';
	let d = `M${pts[0][0]},${pts[0][1]}`;
	for (let i = 0; i < pts.length - 1; i++) {
		const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
		d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
	}
	return d;
};
export {AMBER, AMBER_INK, BLUE, CARD, EDGE, GREYT, INK, INK_SOFT, RED, TEAL, clamp01, lerp, prog, pulse, smooth, vis};
