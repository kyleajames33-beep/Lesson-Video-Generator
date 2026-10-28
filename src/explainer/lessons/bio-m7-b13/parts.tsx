// M7 B13 drawing parts: the four-conditions bar (virus, Aedes, warmth and water, people not immune; slots fill, light,
// fade when cut, and the chain links between them can break), a coded map of South East Asia and northern Australia
// (b13 world outline data, outline only, place dots and travel arcs), the tank model (inflow, drain, level), 10 by 10
// dot grids with serotype rings, the four serotype rings round the virus plate, a coded raincloud, clinic outline and
// thermometer, and the answer row. B12, B11 (M7) and bio-m5-b13 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, PopRow, Ring, StepChip, Sx, TEAL, TERRA, WText,
	clamp01, fitW, lerp, prog, pulse, rng, smooth, tw, vis,
} from '../bio-m7-b12/parts';
import type {PB, Pt} from '../bio-m7-b12/parts';
import {LAND, smoothPath} from '../bio-m5-b13/world';
import type {LL} from '../bio-m5-b13/world';
import {PLATES} from './assets';
import {wrapT} from '../bio-m6-p01/parts';

export {
	AMBER, AMBER_INK, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, PopRow, Ring, StepChip, Sx, TEAL, TERRA, WText,
	clamp01, fitW, lerp, prog, pulse, rng, smooth, tw, vis, PLATES,
};
export type {PB, Pt};
export const HEAD = 'What limits malaria or dengue control?';
export const VIOLET = '#6a4fb0';
export const ROSE = '#c24f78';
/** DENV-1 to DENV-4 ring colours. */
export const SERO = [AMBER, TEAL, VIOLET, ROSE];

// ---------- map ----------
export type Geo = {x: number; y: number; w: number; h: number; lon0: number; lat0: number; k: number};
export const proj = (g: Geo) => ([lon, lat]: LL): Pt => [g.x + (lon - g.lon0) * g.k, g.y + (g.lat0 - lat) * g.k];
const EXTRA: LL[][] = [
	[[119, -5.5], [120.5, -1], [121.5, 1], [124.5, 1.3], [121.5, 0.4], [121.4, -1.2], [123.2, -1], [121.6, -2], [122.5, -4.6], [121.3, -4.2], [120.5, -5.6]],
	[[120, 18.5], [122.2, 18.4], [122, 16], [124, 13.5], [122.5, 13.3], [120.6, 14.2], [120.4, 16.4]],
	[[122, 9.5], [126.2, 9.2], [126.5, 6.5], [125.4, 5.8], [124, 6.9], [122.1, 7.1]],
	[[114.4, -8.1], [115.7, -8.3], [115.5, -8.8], [114.6, -8.7]],
	[[116, -8.4], [119, -8.3], [119, -8.8], [116.1, -8.9]],
	[[124, -9.3], [127.2, -8.4], [125, -10.2], [123.6, -10.3]],
];
export const PLACE: Record<string, LL> = {
	Yogyakarta: [110.4, -7.8], Jakarta: [106.8, -6.4], Surabaya: [112.7, -7.3], 'Kuala Lumpur': [101.7, 3.1], Bali: [115.1, -8.5],
	Cairns: [145.3, -16.9], Townsville: [146.3, -19.3],
};
/** The main map: 94 to 156 E, 20 N to 24 S. */
export const GMAP: Geo = {x: 80, y: 300, w: 900, h: 640, lon0: 94, lat0: 20, k: 900 / 62};
export const SeaMap: React.FC<{g: Geo; id: string; at?: number; o?: number; draw?: number}> = ({g, id, at = -100, o = 1, draw}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	const P = proj(g);
	const polys = [...LAND, ...EXTRA].map(poly => smoothPath(poly.map(P), 0.35));
	const dr = draw ?? prog(f, at, 40);
	return (
		<g opacity={p}>
			<defs><clipPath id={`${id}-clip`}><rect x={g.x} y={g.y} width={g.w} height={g.h} rx={18} /></clipPath></defs>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} rx={18} fill="#eef3f4" stroke={EDGE} strokeWidth={2} />
			<g clipPath={`url(#${id}-clip)`}>
				{polys.map((d, i) => <path key={'f' + i} d={d} fill="#fbf6ea" opacity={dr} />)}
				{polys.map((d, i) => <path key={'s' + i} d={d} fill="none" stroke={INK_SOFT} strokeWidth={2.2} strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - dr} />)}
			</g>
		</g>
	);
};
export const Place: React.FC<{g: Geo; name: string; at: number; o?: number; dx?: number; dy?: number; color?: string; size?: number; label?: boolean; anchor?: 'start' | 'middle' | 'end'; r?: number; pulseAt?: number}> = ({g, name, at, o = 1, dx = 14, dy = -12, color = AMBER, size = 24, label = true, anchor = 'start', r = 9, pulseAt}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const [x, y] = proj(g)(PLACE[name]);
	const pu = pulseAt !== undefined ? pulse(f, pulseAt, 40) : 0;
	return (
		<g opacity={p}>
			{pu > 0.01 ? <circle cx={x} cy={y} r={r + 22 * pu} fill="none" stroke={color} strokeWidth={3} opacity={1 - pu * 0.6} /> : null}
			<circle cx={x} cy={y} r={r} fill={color} stroke="#fffdf8" strokeWidth={2.5} />
			{label ? <Sx x={x + dx} y={y + dy} text={name} size={size} color={INK} weight={700} anchor={anchor} at={-100} /> : null}
		</g>
	);
};
/** A dashed travel arc between two places, drawn on at `at`; `rider` puts a serotype ring dot moving along it. */
export const TravelArc: React.FC<{g: Geo; a: string; b: string; at: number; dur?: number; color?: string; bow?: number; o?: number; rider?: string; ride?: number}> = ({g, a, b, at, dur = 30, color = AMBER, bow = -80, o = 1, rider, ride}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const P = proj(g);
	const A = P(PLACE[a]), Bp = P(PLACE[b]);
	const mx = (A[0] + Bp[0]) / 2, my = (A[1] + Bp[1]) / 2 + bow;
	const u = ride ?? smooth(clamp01((f - at) / dur));
	const qx = (1 - u) * (1 - u) * A[0] + 2 * (1 - u) * u * mx + u * u * Bp[0];
	const qy = (1 - u) * (1 - u) * A[1] + 2 * (1 - u) * u * my + u * u * Bp[1];
	return (
		<g opacity={o}>
			<DrawPath d={`M${A[0]},${A[1]} Q${mx},${my} ${Bp[0]},${Bp[1]}`} at={at} dur={dur} color={color} width={3.5} dash="10 8" />
			{rider ? <circle cx={qx} cy={qy} r={11} fill="#fffdf8" stroke={rider} strokeWidth={5} /> : null}
		</g>
	);
};

// ---------- the virus with serotype rings ----------
/** The dengue virus plate with a coded ring (one colour, or four arcs for "all four"). */
export const VirusRing: React.FC<{cx: number; cy: number; w: number; o?: number; ring?: string | 'all'; ringO?: number; id?: string}> = ({cx, cy, w, o = 1, ring, ringO = 1, id}) => {
	if (o <= 0.01) return null;
	const r = w * 0.58;
	return (
		<g opacity={o}>
			<PlateB p={PLATES.virus} cx={cx} cy={cy} w={w} id={id} />
			{ring && ringO > 0.01 ? (ring === 'all'
				? SERO.map((c, i) => {
					const a0 = (i * 90 - 85) * Math.PI / 180, a1 = (i * 90 - 5) * Math.PI / 180;
					return <path key={i} d={`M${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 0 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)}`} fill="none" stroke={c} strokeWidth={Math.max(4, w * 0.07)} opacity={ringO} strokeLinecap="round" />;
				})
				: <circle cx={cx} cy={cy} r={r} fill="none" stroke={ring} strokeWidth={Math.max(4, w * 0.07)} opacity={ringO} />) : null}
		</g>
	);
};

// ---------- small coded glyphs ----------
export const Cloud: React.FC<{x: number; y: number; s?: number; o?: number; rain?: number; color?: string}> = ({x, y, s = 1, o = 1, rain = 1, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<path d="M-34,10 C-50,10 -50,-12 -32,-12 C-30,-30 -6,-34 2,-20 C10,-32 34,-26 32,-8 C48,-8 48,10 32,10 Z" fill="#f4f6f8" stroke={color} strokeWidth={3} />
			{rain > 0.01 ? [-22, -6, 10, 26].map((dx, i) => {
				const ph = ((f / 14 + i * 0.3) % 1);
				return <line key={i} x1={dx} y1={16 + ph * 14} x2={dx - 4} y2={28 + ph * 14} stroke="#4f86b8" strokeWidth={3} strokeLinecap="round" opacity={rain * (1 - ph * 0.5)} />;
			}) : null}
		</g>
	);
};
export const Thermo: React.FC<{x: number; y: number; o?: number; up?: number}> = ({x, y, o = 1, up = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - 12} y={y - 90} width={24} height={100} rx={12} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
		<circle cx={x} cy={y + 22} r={22} fill={TERRA} stroke={INK_SOFT} strokeWidth={3} />
		<rect x={x - 6} y={y - 30 - 50 * clamp01(up)} width={12} height={46 + 50 * clamp01(up)} rx={6} fill={TERRA} />
		{up > 0.01 ? <path d={`M${x + 36},${y - 10} l0,-60 m-12,14 l12,-14 l12,14`} fill="none" stroke={TERRA} strokeWidth={4} opacity={clamp01(up)} strokeLinecap="round" /> : null}
	</g>
));
/** A plain building outline with a cross (no people). */
export const Clinic: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-70,0 L-70,-80 L0,-120 L70,-80 L70,0 Z" fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3.5} strokeLinejoin="round" />
		<rect x={-16} y={-40} width={32} height={40} fill="none" stroke={INK_SOFT} strokeWidth={3} />
		<path d="M-8,-92 h16 M0,-100 v16" stroke={TERRA} strokeWidth={6} strokeLinecap="round" />
	</g>
));
/** A coded dot-grid glyph (people), hollow or filled. */
export const PeopleGlyph: React.FC<{x: number; y: number; n?: number; sp?: number; r?: number; o?: number; fill?: string}> = ({x, y, n = 3, sp = 18, r = 6, o = 1, fill = 'none'}) => (o <= 0.01 ? null : (
	<g opacity={o}>{Array.from({length: n * n}, (_, i) => <circle key={i} cx={x + (i % n - (n - 1) / 2) * sp} cy={y + (Math.floor(i / n) - (n - 1) / 2) * sp} r={r} fill={fill} stroke={INK_SOFT} strokeWidth={2} />)}</g>
));

// ---------- the four-conditions bar ----------
export const SLOT = ['virus', 'Aedes', 'warmth and water', 'people not immune'];
export type BarG = {x: number; y: number; w: number; s?: number};
export const FB: BarG = {x: 110, y: 166, w: 1700};
const SH = 92, GAP = 64;
export const slotBox = (g: BarG, i: number) => {
	const sw = (g.w - 3 * GAP) / 4;
	return {x: g.x + i * (sw + GAP), y: g.y, w: sw, h: SH};
};
export const FourBar: React.FC<{g?: BarG; at?: number; o?: number; fill?: number[]; lit?: number[]; faint?: number[]; broken?: number; rain?: number; ringAll?: boolean}> = ({g = FB, at = -100, o = 1, fill = [1, 1, 1, 1], lit = [0, 0, 0, 0], faint = [0, 0, 0, 0], broken = 0, rain = 1, ringAll = true}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	const s = g.s ?? 1;
	const g0: BarG = {x: 0, y: 0, w: g.w};
	const br = clamp01(broken);
	return (
		<g opacity={p} transform={`translate(${g.x},${g.y}) scale(${s})`}>
			{[0, 1, 2].map(i => {
				const a = slotBox(g0, i), cx = a.x + a.w + GAP / 2, cy = SH / 2;
				const sep = 10 * br;
				const col = br > 0.5 ? GREYT : INK_SOFT;
				return (
					<g key={'l' + i} opacity={prog(f, at + 6 + i * 4, 10)}>
						<ellipse cx={cx - 9 - sep} cy={cy} rx={16} ry={10} fill="none" stroke={col} strokeWidth={4} />
						<ellipse cx={cx + 9 + sep} cy={cy} rx={16} ry={10} fill="none" stroke={col} strokeWidth={4} />
					</g>
				);
			})}
			{SLOT.map((t, i) => {
				const b = slotBox(g0, i);
				const fl = clamp01(fill[i] ?? 0), l = clamp01(lit[i] ?? 0), fa = clamp01(faint[i] ?? 0);
				const ix = b.x + 52, iy = b.y + SH / 2;
				return (
					<g key={i} opacity={1 - 0.7 * fa}>
						<rect x={b.x} y={b.y} width={b.w} height={SH} rx={22} fill={l > 0.5 ? '#fff3d9' : CARD} stroke={l > 0.5 ? AMBER : fl > 0.5 ? INK_SOFT : GREYT} strokeWidth={l > 0.5 ? 4 : 2.5} strokeDasharray={fl > 0.5 ? undefined : '9 7'} />
						<g opacity={fl}>
							{i === 0 ? <VirusRing cx={ix} cy={iy} w={58} ring={ringAll ? 'all' : undefined} id={`fb-v-${g.x}-${g.y}`} /> : null}
							{i === 1 ? <PlateB p={PLATES.aedes} cx={ix} cy={iy} w={86} id={`fb-a-${g.x}-${g.y}`} /> : null}
							{i === 2 ? <g><Cloud x={ix - 10} y={iy - 8} s={0.62} rain={rain} o={0.35 + 0.65 * rain} /><PlateB p={PLATES.jar} cx={ix + 30} cy={iy + 16} w={38} id={`fb-j-${g.x}-${g.y}`} /></g> : null}
							{i === 3 ? <PeopleGlyph x={ix} y={iy} /> : null}
						</g>
						<Sx x={b.x + 104} y={b.y + 58} text={t} size={i === 3 ? 27 : 30} color={fl > 0.5 ? (l > 0.5 ? AMBER_INK : INK) : GREY_INK} weight={700} at={-100} opacity={0.35 + 0.65 * fl} />
					</g>
				);
			})}
		</g>
	);
};
/** Centre of slot i in screen coordinates. */
export const slotC = (g: BarG, i: number): Pt => {
	const s = g.s ?? 1, b = slotBox({x: 0, y: 0, w: g.w}, i);
	return [g.x + (b.x + b.w / 2) * s, g.y + (b.y + SH) * s];
};

// ---------- the tank ----------
export const Tank: React.FC<{x: number; y: number; w: number; h: number; at: number; level: number; inO?: number; outO?: number; outW?: number; fast?: number; noDrain?: boolean; o?: number; fill?: string}> = ({x, y, w, h, at, level, inO = 0, outO = 0, outW = 1, fast = 0, noDrain = false, o = 1, fill = '#9cc6e4'}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const L = clamp01(level);
	const wy = y + h - L * (h - 16);
	const wave = Math.sin(f / 8) * 3;
	const flow = (f * (2 + 3 * fast)) % 40;
	return (
		<g opacity={p}>
			<path d={`M${x},${y} L${x},${y + h - 18} Q${x},${y + h} ${x + 18},${y + h} L${x + w - 18},${y + h} Q${x + w},${y + h} ${x + w},${y + h - 18} L${x + w},${y}`} fill="#fbfcfd" stroke={INK_SOFT} strokeWidth={4} />
			{L > 0.01 ? <path d={`M${x + 3},${wy + wave} Q${x + w / 2},${wy - wave} ${x + w - 3},${wy + wave} L${x + w - 3},${y + h - 18} Q${x + w - 3},${y + h - 3} ${x + w - 18},${y + h - 3} L${x + 18},${y + h - 3} Q${x + 3},${y + h - 3} ${x + 3},${y + h - 18} Z`} fill={fill} opacity={0.8} /> : null}
			{inO > 0.01 ? (
				<g opacity={inO}>
					<path d={`M${x - 70},${y - 60} L${x + w * 0.3},${y - 60} L${x + w * 0.3},${y + 10}`} fill="none" stroke={AMBER} strokeWidth={10 + 6 * fast} strokeDasharray="22 18" strokeDashoffset={-flow} strokeLinejoin="round" />
					<path d={`M${x + w * 0.3 - 16},${y - 4} L${x + w * 0.3},${y + 18} L${x + w * 0.3 + 16},${y - 4}`} fill="none" stroke={AMBER} strokeWidth={6} strokeLinecap="round" />
				</g>
			) : null}
			{!noDrain && outO > 0.01 ? (
				<g opacity={outO}>
					<rect x={x + w} y={y + h - 34} width={70} height={10 + 14 * outW} fill="#fbfcfd" stroke={INK_SOFT} strokeWidth={3} />
					<path d={`M${x + w + 76},${y + h - 30 + 6 * outW} L${x + w + 130},${y + h - 30 + 6 * outW}`} stroke={GREYT} strokeWidth={6 + 8 * outW} strokeDasharray="16 12" strokeDashoffset={-flow} />
					<path d={`M${x + w + 120},${y + h - 44 + 6 * outW} l18,14 l-18,14`} fill="none" stroke={GREYT} strokeWidth={5} strokeLinecap="round" />
				</g>
			) : null}
		</g>
	);
};

// ---------- dot grids ----------
/** A 10 by 10 grid of plain circles (a population, never people). Per-dot fill, ring colour and outline. */
export const Grid100: React.FC<{x: number; y: number; sp?: number; r?: number; at?: number; o?: number; n?: number; cols?: number; fill?: (i: number) => number; fillC?: (i: number) => string; ring?: (i: number) => [string, number] | null; rose?: (i: number) => number; step?: number}> = ({x, y, sp = 34, r = 11, at = -100, o = 1, n = 100, cols = 10, fill = () => 0, fillC = () => '#b9b2a4', ring = () => null, rose = () => 0, step = 0.6}) => {
	const f = useCurrentFrame();
	if (o <= 0.01 || f < at) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const cx = x + (i % cols) * sp, cy = y + Math.floor(i / cols) * sp;
				const a = prog(f, at + i * step, 8);
				if (a <= 0.01) return null;
				const fl = clamp01(fill(i)), rg = ring(i), ro = clamp01(rose(i));
				return (
					<g key={i} opacity={a}>
						<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={GREYT} strokeWidth={2} />
						{fl > 0.01 ? <circle cx={cx} cy={cy} r={r} fill={fillC(i)} opacity={fl} /> : null}
						{rg && rg[1] > 0.01 ? <circle cx={cx} cy={cy} r={r + 3.5} fill="none" stroke={rg[0]} strokeWidth={3.5} opacity={rg[1]} /> : null}
						{ro > 0.01 ? <circle cx={cx} cy={cy} r={r + 8} fill="none" stroke={ROSE} strokeWidth={3} opacity={ro} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- answer rows ----------
/** A feedback row whose height fits its wrapped text; bright while current. */
export const FRow: React.FC<{x?: number; y: number; w?: number; text: string; at: number; lit: number; color?: string; size?: number}> = ({x = 120, y, w = 1680, text, at, lit, color = AMBER_INK, size = 32}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.7)}>
			<rect x={x} y={y} width={w} height={fRowH(text, size, w)} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<WText x={x + 28} y={y + size + 18} text={text} size={size} maxW={w - 56} color={on ? (color === AMBER_INK ? INK : color) : GREY_INK} hand weight={700} at={-100} />
		</g>
	);
};
export const fRowH = (text: string, size: number, w: number) => wrapT(text, size, w - 56, true).length * Math.round(size * 1.28) + 30;
export const useF = () => useCurrentFrame();
void CTag; void GTag; void MistakeChip; void Pl; void PlainArrow; void PopRow; void Ring; void StepChip; void TEAL; void TERRA; void fitW; void lerp; void rng; void tw; void vis; void CardBox;
