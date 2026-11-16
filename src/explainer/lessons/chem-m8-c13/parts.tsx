// C8-13 coded parts (lesson-local). The board, chips, cards and plates are bio-m8-g01's practice board (through b12's
// parts), as chem-m8-g02 uses it; skeletal structures use the M7 molecule kit (SkelAt), imported read-only.
// - MOLS: salicylic acid, ethanoic anhydride, aspirin and ethanoic acid as skeletal structures (ring OH, acetyl group,
//   by-product); Mol draws one with an optional coloured ring round a group.
// - FactorBoard: nine factor tiles (supply ... society and cost); a tile lights amber on its cue and settles dim with a
//   tick; link lines can join tiles; a path can trace from the first tile to the last.
// - SeeSaw: a level beam with a green gain chip and a brick-red cost chip (and an optional third chip).
// - HBar: a labelled horizontal bar that fills to a frame function. Beaker: a coded beaker that warms, cools and grows
//   crystals. Factory: a plain tank and pipe silhouette. PriceTag: a coded tag with a coin.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {SkelAt} from '../chem-m7-c02/parts';
import type {Mol2} from '../chem-m7-c02/parts';
import {ringBonds, ringPts} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {AMBER, AMBER_INK, CARD, Chip, DrawPath, EDGE, GREEN, GREYT, INK, INK_SOFT, RED, Sx, lerp, mw, prog, pulse, smooth, vis, wrapM} from '../bio-m8-b12/parts';

export * from '../bio-m8-b12/parts';
export const ACE = '#c9781a', OHR = '#c4432f', BYP = '#8a6a4a', NAVY = '#24407a', BRICK = '#b0452e';

// ---------- molecules ----------
const R = 62;
const ring = ringPts(6, 0, 0, R);
const benz: Bond[] = ringBonds(6).map((b, i) => (i % 2 === 0 ? {...b, order: 2 as const} : b));
const sal: Mol2 = {pts: [...ring, [107, -62], [107, -124], [163, -30], [107, 62]], bonds: [...benz, {a: 1, b: 6}, {a: 6, b: 7, order: 2}, {a: 6, b: 8}, {a: 2, b: 9}], labels: [{i: 7, text: 'O'}, {i: 8, text: 'OH'}, {i: 9, text: 'OH'}]};
const asp: Mol2 = {pts: [...ring, [107, -62], [107, -124], [163, -30], [107, 62], [163, 94], [163, 156], [219, 62]], bonds: [...benz, {a: 1, b: 6}, {a: 6, b: 7, order: 2}, {a: 6, b: 8}, {a: 2, b: 9}, {a: 9, b: 10, color: ACE}, {a: 10, b: 11, order: 2, color: ACE}, {a: 10, b: 12, color: ACE}], labels: [{i: 7, text: 'O'}, {i: 8, text: 'OH'}, {i: 9, text: 'O'}, {i: 11, text: 'O'}]};
const anh: Mol2 = {pts: [[-120, 22], [-62, -10], [0, 22], [62, -10], [120, 22], [-62, -72], [62, -72]], bonds: [{a: 0, b: 1, color: ACE}, {a: 1, b: 5, order: 2, color: ACE}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 4}, {a: 3, b: 6, order: 2}], labels: [{i: 2, text: 'O'}, {i: 5, text: 'O'}, {i: 6, text: 'O'}]};
const eta: Mol2 = {pts: [[-58, 22], [0, -10], [58, 22], [0, -72]], bonds: [{a: 0, b: 1, color: BYP}, {a: 1, b: 2, color: BYP}, {a: 1, b: 3, order: 2, color: BYP}], labels: [{i: 2, text: 'OH'}, {i: 3, text: 'O'}]};
export const MOLS = {sal, asp, anh, eta};
export type MolK = keyof typeof MOLS;
/** Where to ring a group (local point, radii). */
const RINGS: Record<string, {p: V2; rx: number; ry: number}> = {salOH: {p: [118, 62], rx: 46, ry: 34}, aspEster: {p: [150, 100], rx: 90, ry: 74}, eta: {p: [10, -18], rx: 100, ry: 74}};
export const Mol: React.FC<{k: MolK; x: number; y: number; s?: number; at: number; out?: number; o?: number; ring?: {key: keyof typeof RINGS; at: number; color: string; out?: number}; width?: number}> = ({k, x, y, s = 1, at, out, o = 1, ring: rg, width = 5}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const r = rg ? RINGS[rg.key] : undefined;
	const rv = rg ? vis(f, rg.at, rg.out, 12) : 0;
	return (
		<g opacity={v}>
			<SkelAt m={MOLS[k]} x={x} y={y} s={s} at={at} width={width} />
			{r && rv > 0.01 ? <ellipse cx={x + r.p[0] * s} cy={y + r.p[1] * s} rx={r.rx * s} ry={r.ry * s} fill="none" stroke={rg!.color} strokeWidth={4} opacity={rv} /> : null}
		</g>
	);
};

// ---------- factor board ----------
export const FACTORS = ['supply', 'equilibrium', 'rate and conditions', 'yield', 'purity', 'safety', 'by-products and waste', 'environment', 'society and cost'];
export type FState = {lit?: number; done?: number};
export const FB = {x: 1594, y: 160, w: 230, h: 68, gap: 8};
export const fbY = (i: number, g = FB) => g.y + i * (g.h + g.gap);
export const FactorBoard: React.FC<{st?: FState[]; at?: number; links?: {a: number; b: number; at: number}[]; path?: number; o?: number; g?: typeof FB; size?: number; stagger?: number}> = ({st = [], at = -1000, links = [], path, o = 1, g = FB, size = 28, stagger = 5}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{FACTORS.map((t, i) => {
				const v = at < -100 ? 1 : prog(f, at + i * stagger, 10);
				if (v <= 0.01) return null;
				const s = st[i] ?? {};
				const L = s.lit === undefined ? 0 : vis(f, s.lit, s.done, 12);
				const D = s.done === undefined ? 0 : prog(f, s.done, 12);
				const y = fbY(i, g);
				const lines = wrapM(t, size, g.w - 54, true, 700);
				return (
					<g key={t} opacity={v}>
						<rect x={g.x} y={y} width={g.w} height={g.h} rx={14} fill={L > 0.5 ? '#fbe6c4' : CARD} stroke={L > 0.5 ? AMBER_INK : EDGE} strokeWidth={L > 0.5 ? 4 : 2.5} />
						{lines.map((ln, k) => <Sx key={k} x={g.x + 16} y={y + g.h / 2 + size * 0.36 + (k - (lines.length - 1) / 2) * size * 1.02} text={ln} size={size} color={L > 0.5 ? INK : D > 0.5 ? INK_SOFT : GREYT} hand weight={700} at={-1000} />)}
						{D > 0.01 ? <path opacity={D} d={`M${g.x + g.w - 40},${y + g.h / 2} l9,11 l18,-24`} fill="none" stroke={GREEN} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
					</g>
				);
			})}
			{links.map((l, k) => {
				const ya = fbY(l.a, g) + g.h / 2, yb = fbY(l.b, g) + g.h / 2;
				const bow = 30 + Math.abs(l.b - l.a) * 12;
				return <DrawPath key={k} d={`M${g.x - 4},${ya} Q${g.x - 4 - bow},${(ya + yb) / 2} ${g.x - 4},${yb}`} at={l.at} dur={16} color={INK_SOFT} width={3} />;
			})}
			{path !== undefined && f >= path ? <DrawPath d={`M${g.x + g.w + 10},${fbY(0, g) + 10} L${g.x + g.w + 10},${fbY(8, g) + g.h - 10}`} at={path} dur={40} color={AMBER} width={7} /> : null}
		</g>
	);
};

// ---------- see-saw ----------
export const SeeSaw: React.FC<{cx: number; cy: number; w?: number; gain: string; cost: string; at: number; costAt?: number; extra?: string; extraAt?: number; out?: number; size?: number}> = ({cx, cy, w = 620, gain, cost, at, costAt, extra, extraAt, out, size = 32}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<path d={`M${cx},${cy} L${cx - 26},${cy + 44} L${cx + 26},${cy + 44} Z`} fill="#e9e2d3" stroke={INK} strokeWidth={3} />
			<line x1={cx - w / 2} x2={cx + w / 2} y1={cy} y2={cy} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<Chip x={cx - w / 4} y={cy - size * 1.55 - 10} text={gain} size={size} color={GREEN} fill="#dcefe2" ink={INK} anchor="middle" />
			<Chip x={cx + w / 4} y={cy - size * 1.55 - 10} text={cost} size={size} color={BRICK} fill="#f7dcd8" ink={INK} anchor="middle" at={costAt ?? at} />
			{extra ? <Chip x={cx + w / 4} y={cy + 56} text={extra} size={size * 0.9} color={BRICK} fill="#f7dcd8" ink={INK} anchor="middle" at={extraAt ?? at} /> : null}
		</g>
	);
};

// ---------- bars ----------
export const HBar: React.FC<{x: number; y: number; w: number; h?: number; label: string; fill: (f: number) => number; color: string; at?: number; size?: number; o?: number; flecks?: (f: number) => number; val?: (f: number) => string}> = ({x, y, w, h = 50, label, fill, color, at = -1000, size = 32, o = 1, flecks, val}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const k = Math.max(0, Math.min(1, fill(f)));
	const nf = flecks ? Math.round(flecks(f)) : 0;
	return (
		<g opacity={v}>
			<Sx x={x} y={y - 14} text={label} size={size} color={INK} hand weight={700} at={-1000} />
			<rect x={x} y={y} width={w} height={h} rx={10} fill={CARD} stroke={INK} strokeWidth={3} />
			<rect x={x + 3} y={y + 3} width={(w - 6) * k} height={h - 6} rx={8} fill={color} />
			{Array.from({length: nf}, (_, i) => <circle key={i} cx={x + 20 + ((i * 53) % (w - 40))} cy={y + 12 + ((i * 17) % (h - 24))} r={6} fill="#7a4fb0" />)}
			{val ? <Sx x={x + w + 14} y={y + h * 0.72} text={val(f)} size={size} color={INK} weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- beaker (recrystallisation) ----------
export const Beaker: React.FC<{x: number; y: number; w?: number; h?: number; at: number; hot: number; cool: number; o?: number}> = ({x, y, w = 260, h = 300, at, hot, cool, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const H = vis(f, hot, cool, 16), C = prog(f, cool, 16);
	const xt = smooth(prog(f, cool + 20, 60));
	const liq = H > 0.01 ? `rgba(230,120,90,${0.35 * H})` : C > 0.01 ? `rgba(110,160,220,${0.3 * C})` : 'rgba(200,215,225,0.3)';
	return (
		<g opacity={v}>
			<rect x={x + 6} y={y + h * 0.35} width={w - 12} height={h * 0.65 - 6} fill={liq} />
			<path d={`M${x},${y} L${x},${y + h} L${x + w},${y + h} L${x + w},${y}`} fill="none" stroke={INK} strokeWidth={4} />
			{Array.from({length: 9}, (_, i) => { const k = prog(f, cool + 20 + i * 6, 10) * xt; return k > 0.01 ? <rect key={i} x={x + 30 + (i % 5) * 42} y={y + h - 34 - Math.floor(i / 5) * 26} width={22} height={18} transform={`rotate(${(i * 23) % 40 - 20},${x + 41 + (i % 5) * 42},${y + h - 25})`} fill="#ffffff" stroke={INK_SOFT} strokeWidth={2} opacity={k} /> : null; })}
			{Array.from({length: 5}, (_, i) => <circle key={'v' + i} cx={x + 50 + i * 40} cy={y + h * 0.55 + (i % 2) * 30} r={6} fill="#7a4fb0" opacity={0.85} />)}
		</g>
	);
};

// ---------- factory, price tag, water drop ----------
export const Factory: React.FC<{x: number; y: number; at?: number; o?: number}> = ({x, y, at = -1000, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v} fill="#d8d2c6" stroke={INK_SOFT} strokeWidth={3}>
			<rect x={x} y={y + 90} width={300} height={120} rx={6} />
			<rect x={x + 30} y={y} width={70} height={200} rx={30} />
			<rect x={x + 130} y={y + 30} width={70} height={170} rx={30} />
			<path d={`M${x + 100},${y + 60} L${x + 130},${y + 60} M${x + 200},${y + 100} L${x + 260},${y + 100} L${x + 260},${y + 40}`} fill="none" strokeWidth={8} />
			<rect x={x + 240} y={y + 20} width={40} height={30} rx={4} />
		</g>
	);
};
export const PriceTag: React.FC<{x: number; y: number; at?: number}> = ({x, y, at = -1000}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<path d={`M${x},${y} L${x + 180},${y} L${x + 240},${y + 60} L${x + 180},${y + 120} L${x},${y + 120} Z`} fill={CARD} stroke={INK} strokeWidth={4} />
			<circle cx={x + 196} cy={y + 60} r={10} fill="none" stroke={INK} strokeWidth={3} />
			<circle cx={x + 70} cy={y + 60} r={34} fill="#f3d27a" stroke={AMBER_INK} strokeWidth={4} />
			<circle cx={x + 70} cy={y + 60} r={20} fill="none" stroke={AMBER_INK} strokeWidth={2} />
		</g>
	);
};
export const Drop: React.FC<{x: number; y: number; s?: number; crossed?: number; o?: number}> = ({x, y, s = 1, crossed, o = 1}) => {
	const f = useCurrentFrame();
	const c = crossed === undefined ? 0 : prog(f, crossed, 12);
	return (
		<g opacity={o}>
			<path d={`M${x},${y - 26 * s} Q${x + 20 * s},${y} ${x},${y + 14 * s} Q${x - 20 * s},${y} ${x},${y - 26 * s} Z`} fill="#9fd0ef" stroke="#3f7fae" strokeWidth={3} />
			{c > 0.01 ? <path opacity={c} d={`M${x - 24 * s},${y - 24 * s} L${x + 24 * s},${y + 18 * s}`} stroke={RED} strokeWidth={5} strokeLinecap="round" /> : null}
		</g>
	);
};
export {lerp, mw, pulse, OHR as RING_OH};
