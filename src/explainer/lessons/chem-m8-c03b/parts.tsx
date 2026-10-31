// Drawing parts for M8 C03b (anion tests). Reuses C03a (suspect strip, dropper, ion lock and complex wrap insets,
// the flowchart Chart with FArrow heads from M7 C13, Token) and, through it, the M8 C01 / M6 chain (chips, notes,
// crossed chips, plates, drops, question text, countdown, key notes); bubbles from M6 C02. New here, for P03:
// - Shimmer: coded heat lines under a tube (warming, no flame shown);
// - Wisps and WaftArc: soft curved wisps rise from a tube mouth and a curved arrow sweeps them (no hand);
// - Delivery: a coded delivery line from a tube mouth to the limewater inlet, with bubbles travelling along it;
// - SwapLens: an inset where an attacking ion meets each site ion, the site ion changes (CO3 2- to CO2 that rises,
//   PO4 3- to HPO4 2- that stays dissolved, NH4+ to NH3 that rises) while spectator ions drift;
// - AmmLadder: the three-rung ammonia ladder (dilute: Cl-, concentrated: Br-, neither: I-), rungs lit on cue;
// - the anion chart data (five fresh-portion columns from one sample box).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {C_CX, C_FL, C_OH, C_SO, Dot, GREYX, INK, INK_SOFT, Sx, clamp01, lerp, mw, smooth, vis} from '../chem-m8-c03a/parts';
import type {CEdge, CNode, IonSpec} from '../chem-m8-c03a/parts';

export * from '../chem-m8-c03a/parts';
export {Bubbles} from '../chem-m6-c02/parts';

export const C_AC = C_FL, C_BA = C_SO, C_AG = '#5f6670', C_PO = '#a07f08';
export const ANIONS8 = ['Cl^{−}', 'Br^{−}', 'I^{−}', 'OH^{−}', 'CH_3COO^{−}', 'CO_3^{2−}', 'SO_4^{2−}', 'PO_4^{3−}'];
export const ION = {
	H: {label: 'H^{+}', fill: '#f2a65a', ink: '#a8601c', r: 15, size: 11} as IonSpec,
	CO3: {label: 'CO_3^{2−}', fill: '#d8dde6', ink: '#4a5566', r: 24, size: 10} as IonSpec,
	CO2: {label: 'CO_2', fill: '#f4f7f9', ink: '#6b7a86', r: 20, size: 11} as IonSpec,
	BA: {label: 'Ba^{2+}', fill: '#d4d4d0', ink: '#55554f', r: 21, size: 11} as IonSpec,
	AG: {label: 'Ag^{+}', fill: '#d4d4d0', ink: '#55554f', r: 19, size: 12} as IonSpec,
	CL: {label: 'Cl^{−}', fill: '#5aa469', ink: '#2f6b3c', r: 21, size: 12} as IonSpec,
	PO4: {label: 'PO_4^{3−}', fill: '#f0e2a0', ink: '#7a6408', r: 24, size: 10} as IonSpec,
	HPO4: {label: 'HPO_4^{2−}', fill: '#f6edc4', ink: '#7a6408', r: 25, size: 9} as IonSpec,
	NH4: {label: 'NH_4^{+}', fill: '#d9cdee', ink: '#5a3f8f', r: 22, size: 10} as IonSpec,
	NH3g: {label: 'NH_3', fill: '#ece5f7', ink: '#5a3f8f', r: 19, size: 11} as IonSpec,
	OH: {label: 'OH^{−}', fill: '#c9d9ec', ink: '#2f5e8a', r: 19, size: 11} as IonSpec,
	H2O: {label: 'H_2O', fill: '#e8f1f8', ink: '#5d7d99', r: 17, size: 10} as IonSpec,
	SO4: {label: 'SO_4^{2−}', fill: '#f0d9a0', ink: '#8a6410', r: 24, size: 10} as IonSpec,
};

// ---------- warming and smell ----------
export const Shimmer: React.FC<{x: number; y: number; w: number; at: number; out?: number}> = ({x, y, w, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{[0, 1, 2].map(i => {
				const xx = x - w / 2 + (i + 0.5) * (w / 3);
				let d = '';
				for (let k = 0; k <= 12; k++) d += `${k ? 'L' : 'M'}${(xx + Math.sin(k * 0.9 + f * 0.25 + i) * 6).toFixed(1)},${(y - k * 6).toFixed(1)} `;
				return <path key={i} d={d} fill="none" stroke="#e07a3a" strokeWidth={3.5} strokeLinecap="round" opacity={0.75} />;
			})}
			<Sx x={x} y={y + 34} text="warm gently" size={24} color="#c0602a" anchor="middle" hand at={at + 6} />
		</g>
	);
};
/** Three wisps rising from (x, y); from `waft` they lean sideways (to +dx). */
export const Wisps: React.FC<{x: number; y: number; at: number; out?: number; waft?: number; dx?: number; color?: string}> = ({x, y, at, out, waft, dx = 120, color = '#b39a7a'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	const lean = waft === undefined ? 0 : smooth(prog(f, waft, 30));
	return (
		<g opacity={v}>
			{[-1, 0, 1].map(i => {
				const t = ((f - at + (i + 1) * 15) % 45) / 45;
				const x0 = x + i * 16, h = 130;
				const d = `M${x0},${y} C${x0 - 20},${y - h * 0.35} ${x0 + 25 + lean * dx * 0.5},${y - h * 0.6} ${x0 + lean * dx},${y - h}`;
				return <path key={i} d={d} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeDasharray="30 18" strokeDashoffset={-t * 48} opacity={0.75} />;
			})}
		</g>
	);
};
/** A curved arrow (no hand) sweeping across the top of a tube, towards the reader's side. */
export const WaftArc: React.FC<{x: number; y: number; at: number; out?: number; w?: number}> = ({x, y, at, out, w = 160}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const p = prog(f, at, 20);
	return (
		<g opacity={v}>
			<DrawPath d={`M${x - w * 0.2},${y} Q${x + w * 0.4},${y - 70} ${x + w},${y - 10}`} at={at} dur={20} color={C_AC} width={5} />
			{p > 0.9 ? <path d={`M${x + w - 18},${y - 26} L${x + w},${y - 10} L${x + w - 22},${y + 2}`} fill="none" stroke={C_AC} strokeWidth={5} strokeLinecap="round" /> : null}
		</g>
	);
};

// ---------- delivery line ----------
/** A coded delivery line from a to b (up, across, down), with gas bubbles moving along it from `gas`. */
export const Delivery: React.FC<{a: [number, number]; b: [number, number]; at: number; gas?: number; until?: number; top?: number}> = ({a, b, at, gas, until = 1e9, top}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 12);
	if (v <= 0.01) return null;
	const ty = top ?? Math.min(a[1], b[1]) - 70;
	const pts: [number, number][] = [a, [a[0], ty], [b[0], ty], b];
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ');
	const segs = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
	const total = segs.reduce((s, x) => s + x, 0);
	const at_ = (u: number): [number, number] => {
		let d0 = u * total;
		for (let i = 0; i < segs.length; i++) {
			if (d0 <= segs[i]) { const k = d0 / segs[i]; return [lerp(pts[i][0], pts[i + 1][0], k), lerp(pts[i][1], pts[i + 1][1], k)]; }
			d0 -= segs[i];
		}
		return b;
	};
	return (
		<g opacity={v}>
			<path d={d} fill="none" stroke="#c9d3da" strokeWidth={14} strokeLinejoin="round" strokeLinecap="round" opacity={0.8} />
			<path d={d} fill="none" stroke="#8796a2" strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />
			{gas !== undefined && f >= gas && f < until ? [0, 1, 2, 3].map(i => {
				const u = (((f - gas) / 60 + i / 4) % 1);
				const [x, y] = at_(u);
				return <circle key={i} cx={x} cy={y} r={5} fill="#f4f7f9" stroke="#6b7a86" strokeWidth={1.5} />;
			}) : null}
		</g>
	);
};

// ---------- swap lens ----------
const wob = (f: number, ph: number, a = 6): [number, number] => [Math.sin(f * 0.05 + ph) * a, Math.cos(f * 0.043 + ph * 1.3) * a];
const SITES: [number, number][] = [[-0.42, -0.1], [0.12, 0.25], [0.48, -0.22], [-0.2, 0.45]];
const SPECT: [number, number][] = [[-0.55, 0.38], [0.15, -0.5], [0.55, 0.42], [-0.1, -0.35]];
/**
 * Lens at (cx, cy). `n` site ions (`a`) each meet an attacker (`b`) arriving from the left edge at hit + k * every.
 * After the hit the site ion becomes `a2` (rising out as a gas if `rise`), the attacker becomes `b2` (or is absorbed).
 * `spect`: spectator ions that only drift.
 */
export const SwapLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; a: IonSpec; a2: IonSpec; b: IonSpec; b2?: IonSpec; n?: number; hit: number; every?: number; rise?: boolean; spect?: IonSpec; nSpect?: number; title?: string; titleAt?: number; bg?: string}> = ({cx, cy, r, at, out, a, a2, b, b2, n = 3, hit, every = 14, rise = false, spect, nSpect = 0, title, titleAt, bg = '#f3f6f2'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const id = `sw-${Math.round(cx)}-${Math.round(cy)}`;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill={bg} stroke={INK} strokeWidth={5} />
			<clipPath id={id}><circle cx={cx} cy={cy} r={r - 4} /></clipPath>
			<g clipPath={`url(#${id})`}>
				{spect ? Array.from({length: nSpect}, (_, k) => {
					const [u, w] = SPECT[k % SPECT.length];
					const [wx, wy] = wob(f, k * 2.3 + 4, 8);
					return <Dot key={'s' + k} x={cx + u * r + wx} y={cy + w * r + wy} r={spect.r ?? 19} fill={spect.fill} ink={spect.ink} label={spect.label} size={spect.size ?? 11} />;
				}) : null}
				{Array.from({length: n}, (_, k) => {
					const [u, w] = SITES[k % SITES.length];
					const sx = cx + u * r, sy = cy + w * r;
					const [wx, wy] = wob(f, k * 1.7, 5);
					const T = hit + k * every;
					const come = smooth(clamp01((f - (T - 26)) / 24));
					const done = smooth(clamp01((f - T) / 12));
					const up = rise ? smooth(clamp01((f - T - 10) / 50)) : 0;
					const ax = sx + wx, ay = sy + wy - up * r * 1.3;
					const bx = lerp(cx - r - 30, sx - (a.r ?? 22) - (b.r ?? 15) + 6, come), by = lerp(sy - 30, sy, come);
					return (
						<g key={k}>
							{done < 1 ? <Dot x={ax} y={ay} r={a.r ?? 22} fill={a.fill} ink={a.ink} label={a.label} size={a.size ?? 11} o={1 - done} /> : null}
							{done > 0 ? (rise ? <g opacity={done * (1 - Math.max(0, up - 0.7) / 0.3)}><circle cx={ax} cy={ay} r={(a2.r ?? 20) + 4} fill="none" stroke={a2.ink} strokeWidth={2} strokeDasharray="4 4" /><Dot x={ax} y={ay} r={a2.r ?? 20} fill={a2.fill} ink={a2.ink} label={a2.label} size={a2.size ?? 11} /></g> : <Dot x={ax} y={ay} r={a2.r ?? 22} fill={a2.fill} ink={a2.ink} label={a2.label} size={a2.size ?? 10} o={done} />) : null}
							{come > 0 && done < 1 ? <Dot x={bx} y={by} r={b.r ?? 15} fill={b.fill} ink={b.ink} label={b.label} size={b.size ?? 11} o={1 - done} /> : null}
							{b2 && done > 0 ? <Dot x={bx - 6} y={by + 18 * done} r={b2.r ?? 16} fill={b2.fill} ink={b2.ink} label={b2.label} size={b2.size ?? 10} o={done} /> : null}
						</g>
					);
				})}
			</g>
			{title ? <Sx x={cx} y={cy + r + 40} text={title} size={28} color={INK_SOFT} anchor="middle" hand at={titleAt ?? at + 6} /> : null}
		</g>
	);
};

// ---------- ammonia ladder ----------
export const LADDER = [
	{t: 'dilute NH_3: Cl^{−} dissolves', c: '#2f6b3c'},
	{t: 'concentrated NH_3: Br^{−} dissolves', c: '#8a6d2a'},
	{t: 'neither: I^{−} stays', c: '#9a7d08'},
];
/** Three rungs, written at w[i] and lit from lit[i] (until the next one lights). */
export const AmmLadder: React.FC<{x: number; y: number; w: number[]; lit?: number[]; size?: number; at?: number; o?: number}> = ({x, y, w, lit = [], size = 30, at = -1000, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const lh = size * 1.9;
	return (
		<g opacity={v}>
			<line x1={x} x2={x} y1={y - size} y2={y + lh * 2 + size * 0.4} stroke={C_CX} strokeWidth={4} />
			{LADDER.map((r, i) => {
				const a = prog(f, w[i], 10);
				if (a <= 0.01) return null;
				const Ls = LADDER.map((_, k) => (lit[k] === undefined ? 0 : vis(f, lit[k], lit.slice(k + 1).find(t => t !== undefined && t > lit[k]), 10)));
				const L = Ls[i], any = Math.max(...Ls);
				const yy = y + i * lh;
				return (
					<g key={i} opacity={a * (1 - 0.45 * any * (1 - L))}>
						{L > 0.01 ? <rect x={x + 12} y={yy - size * 0.95} width={mw(r.t, size, false, 700) + 24} height={size * 1.4} rx={12} fill="#f6d77a" opacity={0.5 * L} /> : null}
						<circle cx={x} cy={yy - size * 0.32} r={8} fill={C_CX} />
						<Sx x={x + 24} y={yy} text={r.t} size={size} color={r.c} weight={700} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- the anion chart (five fresh-portion columns) ----------
const CX = [780, 1025, 1270, 1515, 1760];
const BW = 228;
const col = (i: number) => CX[i] - BW / 2;
export const ACHART_N: CNode[] = [
	{id: 'S', x: 990, y: 180, w: 560, name: 'unknown anion (fresh portion each test)', color: INK, size: 23},
	{id: 'r1', x: col(0), y: 290, w: BW, name: 'dilute acid', sub: 'H^{+}', color: C_AC, size: 21},
	{id: 'a1', x: col(0), y: 400, w: BW, name: 'fizz, limewater milky', sub: 'CO_3^{2−}', color: C_AC, size: 20},
	{id: 'a2', x: col(0), y: 530, w: BW, name: 'vinegar smell', sub: 'CH_3COO^{−}', color: C_AC, size: 20},
	{id: 'a3', x: col(0), y: 660, w: BW, name: 'red-brown with FeCl_3', sub: 'confirms CH_3COO^{−}', color: C_CX, size: 19},
	{id: 'r2', x: col(1), y: 290, w: BW, name: 'acid, then Ba^{2+}', sub: 'HNO_3 or HCl', color: C_BA, size: 21},
	{id: 'b1', x: col(1), y: 400, w: BW, name: 'white, stays in acid', sub: 'SO_4^{2−}', color: C_BA, size: 20},
	{id: 'tagBa', x: CX[1], y: 506, tag: true, lines: ['BaCO_3 would', 'dissolve in acid'], size: 19, anchor: 'middle'},
	{id: 'r3', x: col(2), y: 290, w: BW, name: 'HNO_3, then Ag^{+}', sub: 'not HCl', color: C_AG, size: 21},
	{id: 'h1', x: col(2), y: 400, w: BW, name: 'white: Cl^{−}', sub: 'dissolves in dilute NH_3', color: C_AG, size: 21},
	{id: 'h2', x: col(2), y: 490, w: BW, name: 'cream: Br^{−}', sub: 'needs conc. NH_3', color: C_AG, size: 21},
	{id: 'h3', x: col(2), y: 580, w: BW, name: 'pale yellow: I^{−}', sub: 'neither dissolves it', color: C_AG, size: 21},
	{id: 'r4', x: col(3), y: 290, w: BW, name: 'neutral portion', sub: 'then AgNO_3', color: C_PO, size: 21},
	{id: 'p1', x: col(3), y: 400, w: BW, name: 'yellow: PO_4^{3−}', sub: 'dissolves in dilute HNO_3', color: C_PO, size: 21},
	{id: 'r5', x: col(4), y: 290, w: BW, name: 'warm with NH_4^{+}', sub: 'test last', color: C_OH, size: 21},
	{id: 'o1', x: col(4), y: 400, w: BW, name: 'red litmus → blue', sub: 'OH^{−}: NH_3 given off', color: C_OH, size: 21},
];
const stem = (i: number): [number, number][] => [[1270, 232], [1270, 258], [CX[i], 258], [CX[i], 290]];
export const ACHART_E: CEdge[] = [
	{id: 'c1', pts: stem(0), color: C_AC}, {id: 'c2', pts: stem(1), color: C_BA}, {id: 'c3', pts: [[1270, 232], [1270, 290]], color: C_AG}, {id: 'c4', pts: stem(3), color: C_PO}, {id: 'c5', pts: stem(4), color: C_OH},
	{id: 'e1a', pts: [[CX[0], 364], [CX[0], 400]], color: C_AC},
	{id: 'e1b', pts: [[CX[0], 474], [CX[0], 530]], color: C_AC, label: 'no fizz: warm', lx: CX[0] + 12, ly: 508, anchor: 'start', lsize: 18},
	{id: 'e1c', pts: [[CX[0], 604], [CX[0], 660]], color: C_CX, label: 'neutral FeCl_3', lx: CX[0] + 12, ly: 638, anchor: 'start', lsize: 18},
	{id: 'e2a', pts: [[CX[1], 364], [CX[1], 400]], color: C_BA},
	{id: 'e3a', pts: [[CX[2], 364], [CX[2], 400]], color: C_AG},
	{id: 'e4a', pts: [[CX[3], 364], [CX[3], 400]], color: C_PO},
	{id: 'e5a', pts: [[CX[4], 364], [CX[4], 400]], color: C_OH},
];
export const AFAM = {
	ac: ['c1', 'r1', 'e1a', 'a1', 'e1b', 'a2', 'e1c', 'a3'],
	ba: ['c2', 'r2', 'e2a', 'b1', 'tagBa'],
	ag: ['c3', 'r3', 'e3a', 'h1', 'h2', 'h3'],
	po: ['c4', 'r4', 'e4a', 'p1'],
	oh: ['c5', 'r5', 'e5a', 'o1'],
};
void GREYX;
