// M6 B11 drawing parts: the mechanism stage (b01's SlimStrand with a terracotta guide RNA, a translucent Cas9 outline
// and amber nicks), the globin switch strip (adult and foetal gene blocks, a switch protein, haemoglobin dots), the
// 30-patient grid, small coded glyphs (bone, calendar, price tag, food and exercise, nanoparticle, magnifier), the
// evidence ladder (five rungs with grey labels and thumbnail slots), chromosome diagram panels (slim cream homologue
// outlines with amber drive bands), offspring markers, egg clusters, the population line, the border map and the
// three-question board. B01, B07, B09 and B10 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Sx} from '../bio-m5-b13/shared';
import {BIO_INK, CARD, EDGE, GREYT, GREY_INK, SlimStrand, clamp01, lerp, rungX, smooth, vis} from '../bio-m6-b01/parts';
import {HalfPlate, platePt, tw} from '../bio-m6-b07/parts';
import {Pl, Strip, plH} from '../bio-m6-b09/parts';
import {StopMark} from '../bio-m6-b10/parts';
import {BANANA_SPLIT, PLATES, SICKLE_SPLIT, SSA} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, BIO_INK, CARD, EDGE, GREYT, GREY_INK, SlimStrand, clamp01, lerp, rungX, smooth, vis, prog, DrawPath, Pl, Strip, plH, StopMark, HalfPlate, platePt, tw, PLATES};
export const GREEN = '#2f8a5b', TERRA = '#c0643f', TEAL = '#2f7f86', LILAC = '#8d84a8';

// ---------- plates ----------
/** The sickle half (right of the gap) or the normal half of the red cells plate. */
export const CellsHalf: React.FC<{side: 'L' | 'R'; cx: number; cy: number; w: number; o?: number; id: string}> = ({side, cx, cy, w, o = 1, id}) => (
	<HalfPlate p={PLATES.sickle} cx={cx} cy={cy} w={w} side={side} split={SICKLE_SPLIT} o={o} id={id} />
);
/** Screen x of the red cells plate's gap. */
export const sickleSplitX = (cx: number, w: number) => platePt(PLATES.sickle, cx, 0, w, SICKLE_SPLIT, 0)[0];
/** The seedless Cavendish half of the banana pair. */
export const Cavendish: React.FC<{cx: number; cy: number; w: number; o?: number; id: string}> = ({cx, cy, w, o = 1, id}) => (
	<HalfPlate p={PLATES.banana} cx={cx} cy={cy} w={w} side="R" split={BANANA_SPLIT} o={o} id={id} />
);

// ---------- arrows and chips ----------
/** A straight arrow that draws on at `at`, with a small head. */
export const Arr: React.FC<{a: [number, number]; b: [number, number]; at: number; o?: number; color?: string; width?: number; dash?: string; head?: number}> = ({a, b, at, o = 1, color = INK_SOFT, width = 4, dash, head = 14}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
	const h = (s: number) => [b[0] - head * Math.cos(ang + s), b[1] - head * Math.sin(ang + s)];
	const [l1, l2] = [h(0.5), h(-0.5)];
	return (
		<g opacity={o}>
			<DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={14} color={color} width={width} dash={dash} />
			<g opacity={prog(f, at + 10, 6)}><path d={`M${l1[0]},${l1[1]} L${b[0]},${b[1]} L${l2[0]},${l2[1]}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g>
		</g>
	);
};
export const pillW = (text: string, size = 32) => tw(text, size, true) * 0.98 + 48;
/** A rounded chip; `lit` 1 gives the amber edge and dark ink, 0 grey. `mark` adds a tick or cross at its left. */
export const Pill: React.FC<{x: number; y: number; text: string; o?: number; lit?: number; size?: number; anchor?: 'start' | 'middle'; mark?: 'tick' | 'cross'; dash?: boolean}> = ({x, y, text, o = 1, lit = 1, size = 32, anchor = 'start', mark, dash = false}) => {
	if (o <= 0.01) return null;
	const l = clamp01(lit);
	const extra = mark ? size * 1.1 : 0;
	const w = pillW(text, size) + extra;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	const h = size + 26;
	return (
		<g opacity={o}>
			<rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={l > 0.5 ? '#fff6e3' : CARD} stroke={l > 0.5 ? AMBER : EDGE} strokeWidth={l > 0.5 ? 3.5 : 2.5} strokeDasharray={dash ? '9 7' : undefined} />
			{mark === 'tick' ? <path d={`M${x0 + 22},${y + h / 2} l${size * 0.2},${size * 0.24} l${size * 0.36},${-size * 0.44}`} fill="none" stroke={GREEN} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={0.4 + 0.6 * l} /> : null}
			{mark === 'cross' ? <path d={`M${x0 + 24},${y + h / 2 - size * 0.22} l${size * 0.44},${size * 0.44} M${x0 + 24 + size * 0.44},${y + h / 2 - size * 0.22} l${-size * 0.44},${size * 0.44}`} fill="none" stroke={GREYT} strokeWidth={5} strokeLinecap="round" /> : null}
			<Sx x={x0 + 24 + extra} y={y + size + 5} text={text} size={size} color={l > 0.5 ? INK : GREY_INK} hand />
		</g>
	);
};

// ---------- the mechanism stage ----------
/** A terracotta guide RNA: a backbone at y with rungs reaching down `drop` px; `zip` 0..1 grows the rungs in turn;
 * `mis` rungs stay short (unpaired). */
export const Guide: React.FC<{x: number; y: number; n: number; pitch?: number; drop?: number; zip?: number; mis?: number[]; o?: number}> = ({x, y, n, pitch = 34, drop = 40, zip = 1, mis = [], o = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const t = clamp01(zip * n - i);
				const bad = mis.includes(i);
				const len = bad ? drop * 0.38 : drop * t;
				const cx = rungX(x, i, pitch);
				return len > 0.5 ? <line key={i} x1={cx} y1={y} x2={cx} y2={y + len} stroke={bad ? GREYT : TERRA} strokeWidth={bad ? 3 : 4.5} strokeLinecap="round" /> : null;
			})}
			<line x1={x + 4} y1={y} x2={x + n * pitch - 4} y2={y} stroke={TERRA} strokeWidth={6} strokeLinecap="round" />
		</g>
	);
};
/** The Cas9 enzyme: a translucent lilac-grey rounded outline. */
export const Cas9: React.FC<{cx: number; cy: number; w: number; h: number; o?: number}> = ({cx, cy, w, h, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${cx - w / 2 + h * 0.4},${cy - h / 2} C${cx - w * 0.1},${cy - h * 0.62} ${cx + w * 0.2},${cy - h * 0.56} ${cx + w / 2 - h * 0.35},${cy - h / 2} C${cx + w / 2 + 6},${cy - h * 0.3} ${cx + w / 2 + 4},${cy + h * 0.32} ${cx + w / 2 - h * 0.3},${cy + h / 2} C${cx + w * 0.1},${cy + h * 0.6} ${cx - w * 0.25},${cy + h * 0.55} ${cx - w / 2 + h * 0.35},${cy + h / 2} C${cx - w / 2 - 6},${cy + h * 0.3} ${cx - w / 2 - 4},${cy - h * 0.34} ${cx - w / 2 + h * 0.4},${cy - h / 2} Z`}
			fill="rgba(160,150,200,0.22)" stroke={LILAC} strokeWidth={4} />
	</g>
));
/** An amber nick across one strand line; `dash` draws it dashed (an off-target cut). */
export const Nick: React.FC<{x: number; y: number; o?: number; s?: number; dash?: boolean}> = ({x, y, o = 1, s = 16, dash = false}) => (o <= 0.01 ? null : (
	<line x1={x - s * 0.45} y1={y + s} x2={x + s * 0.45} y2={y - s} stroke={AMBER} strokeWidth={6} strokeLinecap="round" strokeDasharray={dash ? '6 6' : undefined} opacity={o} />
));
/** A tiny Cas9 glyph (for inside a drive band). */
export const CasGlyph: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => <Cas9 cx={x} cy={y} w={34 * s} h={22 * s} o={o} />;

// ---------- the globin switch ----------
/** Gene blocks on a slim strip: adult (rungs 3..8) and foetal (rungs 13..18). `foetalOff` greys the foetal block. */
export const GLOBIN = {n: 22, pitch: 34, adult: [3, 8] as [number, number], foetal: [13, 18] as [number, number]};
export const globinBlockX = (x: number, blk: [number, number]) => [rungX(x, blk[0], GLOBIN.pitch) - GLOBIN.pitch / 2, rungX(x, blk[1], GLOBIN.pitch) + GLOBIN.pitch / 2] as [number, number];
export const GlobinStrip: React.FC<{x: number; y: number; o?: number; foetalOff?: number; sickleDot?: number; pulse?: number; labels?: number; draw?: number}> = ({x, y, o = 1, foetalOff = 0, sickleDot = 1, pulse = 0, labels = 1, draw = 1}) => {
	if (o <= 0.01) return null;
	const g = clamp01(foetalOff);
	const [a0, a1] = globinBlockX(x, GLOBIN.adult), [f0, f1] = globinBlockX(x, GLOBIN.foetal);
	const gap = 40;
	const blk = (x0: number, x1: number, fill: string, stroke: string) => <rect x={x0} y={y - 16} width={x1 - x0} height={gap + 32} rx={12} fill={fill} stroke={stroke} strokeWidth={3} />;
	const sx = rungX(x, 6, GLOBIN.pitch);
	return (
		<g opacity={o}>
			{draw > 0.6 ? blk(a0, a1, '#fde8e0', '#c97a62') : null}
			{draw > 0.9 ? blk(f0, f1, g > 0.5 ? '#eceeef' : '#e3f0e6', g > 0.5 ? GREYT : GREEN) : null}
			<SlimStrand x={x} y={y} n={GLOBIN.n} pitch={GLOBIN.pitch} gap={gap} draw={draw} lineW={3.5} />
			{sickleDot > 0.01 && draw > 0.6 ? <circle cx={sx} cy={y + gap / 2} r={9 + 5 * pulse} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={sickleDot} /> : null}
			{labels > 0.01 ? (
				<g opacity={labels}>
					<Sx x={(a0 + a1) / 2} y={y - 30} text="adult gene" size={28} color={GREY_INK} hand anchor="middle" />
					<Sx x={(f0 + f1) / 2} y={y - 30} text="foetal gene" size={28} color={GREY_INK} hand anchor="middle" />
				</g>
			) : null}
		</g>
	);
};
/** The switch protein (plum blob). */
export const SwitchProtein: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-40,4 C-44,-22 -16,-36 6,-32 C30,-28 44,-10 40,10 C36,30 10,36 -10,32 C-28,28 -38,22 -40,4 Z" fill="#e7dcef" stroke="#7a4a8c" strokeWidth={3.5} />
		<circle cx={-12} cy={-6} r={6} fill="#7a4a8c" opacity={0.35} /><circle cx={12} cy={6} r={7} fill="#7a4a8c" opacity={0.25} />
	</g>
));
/** A haemoglobin dot (four lobes). */
export const HbDot: React.FC<{x: number; y: number; o?: number; r?: number; color?: string}> = ({x, y, o = 1, r = 9, color = GREEN}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([dx, dy], i) => <circle key={i} cx={x + dx * r * 0.5} cy={y + dy * r * 0.5} r={r * 0.62} fill="#e3f0e6" stroke={color} strokeWidth={2} />)}
	</g>
));

// ---------- small glyphs ----------
/** A grid of patient circles: the first `filled` fill teal (a person-free count). */
export const Grid: React.FC<{x: number; y: number; n: number; cols: number; filled: number; at: number; gap?: number; r?: number; o?: number}> = ({x, y, n, cols, filled, at, gap = 64, r = 22, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const a = prog(f, at + i * 1.2, 8);
				const fill = i < filled ? prog(f, at + 20 + i * 1.2, 8) : 0;
				return a > 0.01 ? <circle key={i} cx={x + (i % cols) * gap} cy={y + Math.floor(i / cols) * gap} r={r} fill={fill > 0.5 ? '#cfe7e9' : CARD} stroke={fill > 0.5 ? TEAL : GREYT} strokeWidth={3} opacity={a} /> : null;
			})}
		</g>
	);
};
/** A bone outline whose red marrow empties (`empty` 0..1). */
export const Bone: React.FC<{x: number; y: number; empty?: number; o?: number; s?: number}> = ({x, y, empty = 0, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-70,-14 C-92,-36 -96,-2 -84,0 C-96,2 -92,36 -70,14 L70,14 C92,36 96,2 84,0 C96,-2 92,-36 70,-14 Z" fill="#f5efe2" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
		<rect x={-58} y={-7} width={116 * (1 - clamp01(empty))} height={14} rx={7} fill="#c4432f" opacity={0.75} />
	</g>
));
export const Calendar: React.FC<{x: number; y: number; o?: number; s?: number; fill?: number}> = ({x, y, o = 1, s = 1, fill = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-60} y={-50} width={120} height={104} rx={12} fill={CARD} stroke={INK_SOFT} strokeWidth={4} />
		<rect x={-60} y={-50} width={120} height={26} rx={10} fill="#e9d9c0" stroke={INK_SOFT} strokeWidth={4} />
		{[-36, 36].map(dx => <line key={dx} x1={dx} y1={-62} x2={dx} y2={-40} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" />)}
		{Array.from({length: 15}, (_, i) => <rect key={i} x={-48 + (i % 5) * 20} y={-14 + Math.floor(i / 5) * 20} width={14} height={14} rx={3} fill={i < Math.round(15 * fill) ? '#e8b65a' : '#eee7da'} />)}
	</g>
));
export const PriceTag: React.FC<{x: number; y: number; text: string; o?: number; size?: number}> = ({x, y, text, o = 1, size = 44}) => {
	if (o <= 0.01) return null;
	const w = tw(text, size, true) + 90;
	return (
		<g opacity={o}>
			<path d={`M${x},${y} L${x + 36},${y - 34} L${x + w},${y - 34} L${x + w},${y + 34} L${x + 36},${y + 34} Z`} fill="#fff6e3" stroke={AMBER} strokeWidth={4} strokeLinejoin="round" />
			<circle cx={x + 30} cy={y} r={7} fill="none" stroke={AMBER_INK} strokeWidth={3} />
			<Sx x={x + 56} y={y + size * 0.36} text={text} size={size} color={INK} hand />
		</g>
	);
};
/** A soft fill over sub-Saharan Africa on the map plate drawn at (cx, cy, w). */
export const SsaFill: React.FC<{cx: number; cy: number; w: number; o?: number}> = ({cx, cy, w, o = 1}) => {
	if (o <= 0.01) return null;
	const pts = SSA.map(([u, v]) => platePt(PLATES.map, cx, cy, w, u, v));
	return <path d={'M' + pts.map(p => p.join(',')).join(' L') + ' Z'} fill={AMBER} fillOpacity={0.32} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 6" strokeLinejoin="round" opacity={o} />;
};
/** A plate-and-fork glyph and a dumbbell (food and exercise: the environment). */
export const FoodExercise: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round">
		<circle cx={x} cy={y} r={26} fill={CARD} /><circle cx={x} cy={y} r={14} />
		<line x1={x - 40} y1={y - 26} x2={x - 40} y2={y + 26} /><path d={`M${x - 46},${y - 26} L${x - 46},${y - 10} M${x - 34},${y - 26} L${x - 34},${y - 10}`} />
		<line x1={x + 66} y1={y} x2={x + 116} y2={y} />
		<rect x={x + 54} y={y - 18} width={12} height={36} rx={4} fill="#e9e2d4" /><rect x={x + 116} y={y - 18} width={12} height={36} rx={4} fill="#e9e2d4" />
	</g>
));
/** A tiny fat particle carrying an editor (editing inside the body). */
export const Particle: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={30} fill="#fbf1d6" stroke="#c9ad6a" strokeWidth={3} strokeDasharray="5 4" />
		<CasGlyph x={x} y={y} s={0.95} />
	</g>
));
export const Magnifier: React.FC<{x: number; y: number; o?: number; r?: number}> = ({x, y, o = 1, r = 22}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="rgba(255,255,255,0.3)" stroke={INK_SOFT} strokeWidth={4} />
		<line x1={x + r * 0.72} y1={y + r * 0.72} x2={x + r * 1.5} y2={y + r * 1.5} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
	</g>
));

// ---------- the evidence ladder ----------
export const RUNGS = ['only an idea', 'works in the lab', 'works in animals', 'human trials', 'approved and in use'];
export const LAD = {x0: 130, x1: 560, y: [930, 790, 650, 510, 370], top: 300, bot: 980};
/** Screen point of a rung's thumbnail slot (right end of the rung, just above it). */
export const rungSlot = (k: number): [number, number] => [LAD.x1 - 70, LAD.y[k] - 44];
/** The ladder: rails, rungs drawn in turn by `rungs[k]` (0..1), small grey labels. `lit` brightens one rung. */
export const Ladder: React.FC<{rungs?: number[]; o?: number; lit?: number; labelO?: number}> = ({rungs = [1, 1, 1, 1, 1], o = 1, lit = -1, labelO = 1}) => {
	if (o <= 0.01) return null;
	const top = LAD.y[0] - (LAD.y[0] - LAD.top) * smooth(Math.max(...rungs));
	return (
		<g opacity={o}>
			{[LAD.x0, LAD.x1].map(x => <line key={x} x1={x} y1={LAD.bot} x2={x} y2={top} stroke="#b9a98f" strokeWidth={8} strokeLinecap="round" />)}
			{LAD.y.map((y, k) => {
				const r = clamp01(rungs[k]);
				if (r <= 0.01) return null;
				return (
					<g key={k} opacity={r}>
						<rect x={LAD.x0} y={y - 9} width={LAD.x1 - LAD.x0} height={18} rx={9} fill={k === lit ? '#fff3d9' : '#f3ead6'} stroke={k === lit ? AMBER : '#b9a98f'} strokeWidth={k === lit ? 4 : 3} />
						<Sx x={LAD.x0 + 22} y={y - 22} text={RUNGS[k]} size={28} color={k === lit ? AMBER_INK : GREY_INK} hand opacity={labelO} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- chromosome diagram panels ----------
/** One slim homologue outline (cream) centred at (x, y) with height h; `band` 0..1 fills the drive band amber at
 * fraction `at` of its length; `site` draws an empty site box there; `changed` marks a changed cut site. */
export const Homolog: React.FC<{x: number; y: number; h?: number; w?: number; band?: number; site?: number; at?: number; o?: number; changed?: number}> = ({x, y, h = 240, w = 44, band = 0, site = 1, at = 0.32, o = 1, changed = 0}) => {
	if (o <= 0.01) return null;
	const by = y - h / 2 + h * at;
	const bh = h * 0.14;
	return (
		<g opacity={o}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={w / 2} fill="#fbf6ea" stroke={INK_SOFT} strokeWidth={3.5} />
			<path d={`M${x - w / 2 + 4},${y + h * 0.08} Q${x},${y + h * 0.04} ${x + w / 2 - 4},${y + h * 0.08}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} opacity={0.6} />
			{site > 0.01 ? <rect x={x - w / 2 + 3} y={by - bh / 2} width={w - 6} height={bh} rx={6} fill="none" stroke={GREYT} strokeWidth={2.5} strokeDasharray="5 4" opacity={site} /> : null}
			{band > 0.01 ? <rect x={x - w / 2 + 3} y={by - bh / 2} width={w - 6} height={bh} rx={6} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} opacity={band} /> : null}
			{changed > 0.01 ? <path d={`M${x - 10},${by - 6} L${x + 10},${by + 6} M${x + 10},${by - 6} L${x - 10},${by + 6}`} stroke={INK} strokeWidth={4} strokeLinecap="round" opacity={changed} /> : null}
		</g>
	);
};
export const bandY = (y: number, h = 240, at = 0.32) => y - h / 2 + h * at;
/** A tiny drive marker under an offspring: a filled amber bar (carries the drive) or an open grey bar (does not). */
export const DriveMark: React.FC<{x: number; y: number; carry: number; o?: number}> = ({x, y, carry, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - 22} y={y - 9} width={44} height={18} rx={9} fill={carry > 0.5 ? AMBER : 'none'} stroke={carry > 0.5 ? AMBER_INK : GREYT} strokeWidth={2.5} strokeDasharray={carry > 0.5 ? undefined : '5 4'} />
	</g>
));
/** A small egg cluster. */
export const Eggs: React.FC<{x: number; y: number; o?: number; grey?: number}> = ({x, y, o = 1, grey = 0}) => (o <= 0.01 ? null : (
	<g opacity={o * (1 - 0.5 * clamp01(grey))}>
		{[[-18, 0], [-6, -6], [6, 0], [18, -6], [-12, 10], [0, 8], [12, 10]].map(([dx, dy], i) => <ellipse key={i} cx={x + dx} cy={y + dy} rx={6} ry={9} fill={grey > 0.5 ? '#e4e6e8' : '#f3ecd9'} stroke={grey > 0.5 ? GREYT : '#8a7a63'} strokeWidth={2} transform={`rotate(20 ${x + dx} ${y + dy})`} />)}
	</g>
));

// ---------- the population line ----------
/** Axes with generation ticks and a line that is flat, then falls to the axis; `draw` 0..1. */
export const PopLine: React.FC<{x: number; y: number; w: number; h: number; draw: number; o?: number; axes?: number}> = ({x, y, w, h, draw, o = 1, axes = 1}) => {
	if (o <= 0.01) return null;
	const N = 60;
	const val = (t: number) => (t < 0.3 ? 0.88 : t > 0.86 ? 0 : 0.88 * (1 - smooth((t - 0.3) / 0.56)));
	const pts = Array.from({length: N + 1}, (_, i) => i / N).filter(t => t <= draw + 1e-6).map(t => `${x + t * w},${y + h - val(t) * h}`);
	return (
		<g opacity={o}>
			<g opacity={axes}>
				<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK_SOFT} strokeWidth={3.5} />
				<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK_SOFT} strokeWidth={3.5} />
				{Array.from({length: 11}, (_, k) => <line key={k} x1={x + (k * w) / 10} y1={y + h} x2={x + (k * w) / 10} y2={y + h + 10} stroke={INK_SOFT} strokeWidth={2.5} />)}
				<Sx x={x + w / 2} y={y + h + 46} text="generations" size={28} color={GREY_INK} hand anchor="middle" />
				<Sx x={x - 16} y={y + 24} text="population" size={28} color={GREY_INK} hand anchor="end" />
			</g>
			{pts.length > 1 ? <polyline points={pts.join(' ')} fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /> : null}
		</g>
	);
};

// ---------- the border map ----------
/** Two coded regions with a shared border line and a dashed spreading front (`t` 0..1). */
export const BorderMap: React.FC<{cx: number; cy: number; t: number; o?: number}> = ({cx, cy, t, o = 1}) => {
	if (o <= 0.01) return null;
	const r = lerp(30, 230, smooth(t));
	return (
		<g opacity={o}>
			<defs><clipPath id="b11-land"><path d={`M${cx - 300},${cy - 120} C${cx - 200},${cy - 160} ${cx + 160},${cy - 150} ${cx + 300},${cy - 110} C${cx + 330},${cy} ${cx + 300},${cy + 110} ${cx + 250},${cy + 140} C${cx},${cy + 170} ${cx - 220},${cy + 150} ${cx - 300},${cy + 120} C${cx - 330},${cy} ${cx - 320},${cy - 80} ${cx - 300},${cy - 120} Z`} /></clipPath></defs>
			<path d={`M${cx - 300},${cy - 120} C${cx - 200},${cy - 160} ${cx + 160},${cy - 150} ${cx + 300},${cy - 110} C${cx + 330},${cy} ${cx + 300},${cy + 110} ${cx + 250},${cy + 140} C${cx},${cy + 170} ${cx - 220},${cy + 150} ${cx - 300},${cy + 120} C${cx - 330},${cy} ${cx - 320},${cy - 80} ${cx - 300},${cy - 120} Z`} fill="#efe6cf" stroke={INK_SOFT} strokeWidth={3.5} />
			<path d={`M${cx + 20},${cy - 150} C${cx - 10},${cy - 60} ${cx + 40},${cy + 40} ${cx + 10},${cy + 160}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="14 9" />
			<g clipPath="url(#b11-land)">
				<circle cx={cx - 170} cy={cy} r={r} fill={AMBER} fillOpacity={0.16} stroke={AMBER} strokeWidth={4} strokeDasharray="10 8" />
			</g>
			<Sx x={cx - 170} y={cy + 8} text="release" size={26} color={AMBER_INK} hand anchor="middle" />
			<Sx x={cx + 20} y={cy - 166} text="border" size={26} color={GREY_INK} hand anchor="middle" />
		</g>
	);
};

// ---------- a hand line with marked words ----------
/** One hand-written line built from parts; a part with `mark` turns amber and underlined at that frame (SVG
 * text-decoration, so the underline always sits exactly under its word). */
export const MarkText: React.FC<{x: number; y: number; parts: {t: string; mark?: number}[]; size?: number; at?: number; color?: string; markColor?: string}> = ({x, y, parts, size = 42, at = 0, color = INK, markColor = AMBER_INK}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	return (
		<text x={x} y={y} opacity={o} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, whiteSpace: 'pre'}} fill={color}>
			{parts.map((p, i) => {
				const on = p.mark !== undefined && f >= p.mark;
				return <tspan key={i} fill={on ? markColor : color} style={on ? {textDecoration: 'underline', textDecorationThickness: 4, textUnderlineOffset: 8} : undefined}>{p.t}</tspan>;
			})}
		</text>
	);
};
export {plH as plateH};
void vis;
