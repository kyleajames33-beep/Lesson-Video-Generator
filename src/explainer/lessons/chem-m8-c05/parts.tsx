// Drawing parts for M8 C05 (why monitor water). Reuses C04 (and through it the C03b to M5 chain: chips, notes, crossed
// chips, plates, question text, countdown, key notes, the coded line graph, row cards and the framed answer). New here,
// and exported for C06 to import:
// - WaterCol: the water-column overlay for the painted lake cutaway: algae dots that multiply, then sink grey-green;
//   bacteria that cluster on the dead algae; O2 glyphs that rise from the algae by day and fade as oxygen is used; nutrient
//   dots (nitrate navy, phosphate violet) with a legend;
// - Gauge: a vertical oxygen gauge that falls into its red band;
// - Brake: a lever on the algae group, held by "phosphorus in short supply", released on cue;
// - DOTrace geometry and doFn: the illustrative 60-hour dissolved-oxygen trace (day and night swing, larger on day two, then
//   the fall after the bloom dies), with sun and moon glyphs;
// - RiverMap: a coded outline strip of the Barwon-Darling with a green band that spreads along it;
// - Flow: dots that travel along a polyline (nutrients in runoff and from an outlet);
// - Column and Peaks (ion chromatography), Field (microscope field of algal cells), SodaBottle, Tap, Dam, BottleOutline,
//   TreatBox, Moon and Sun glyphs, and PCol (one parameter-board column, wide when active, narrow when not).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {Fade, INK, INK_SOFT, Sx, clamp01, lerp, mw, smooth, vis, seeded} from '../chem-m8-c04/parts';

export * from '../chem-m8-c04/parts';

// ---------- colour key (design) ----------
export const NIT = '#24407a', PHOS = '#7a4fb0', ALG = '#4a9a3a', ALG_DEAD = '#8a9a6a', BACT = '#8a7462', O2C = '#7fb8dc', O2_INK = '#3f7fb0';
export const PHYS = '#5a6a7a', CHEM = '#1f7f86', BIOL = '#6b7a2a', RED8 = '#c4432f';

// ---------- water column overlay ----------
export type WBox = {x0: number; x1: number; top: number; bot: number};
const ALGAE = (() => { const r = seeded(11); return Array.from({length: 46}, () => ({u: r(), v: r(), s: 0.7 + r() * 0.6, ph: r() * 6})); })();
const O2S = (() => { const r = seeded(23); return Array.from({length: 12}, () => ({u: r(), v: r(), ph: r() * 6})); })();
const BACTS = (() => { const r = seeded(37); return Array.from({length: 22}, () => ({u: r(), v: r(), a: r() * 3})); })();
export const O2Glyph: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x - 7 * s} cy={y} r={9 * s} fill={O2C} stroke={O2_INK} strokeWidth={2} />
		<circle cx={x + 7 * s} cy={y} r={9 * s} fill={O2C} stroke={O2_INK} strokeWidth={2} />
	</g>
));
/** n(f): visible algae; sink(f) 0..1 algae die and fall; bact(f) 0..1 bacteria appear on the dead algae; o2(f): how many
 *  O2 glyphs remain (0..12); rise(f) 0..1 glyphs drift up from the algae (photosynthesis); nit/phos: nutrient dot counts. */
export const WaterCol: React.FC<{b: WBox; n?: (f: number) => number; sink?: (f: number) => number; bact?: (f: number) => number; o2?: (f: number) => number; rise?: (f: number) => number; nit?: (f: number) => number; phos?: (f: number) => number; o?: number}> = ({b, n = () => 6, sink = () => 0, bact = () => 0, o2 = () => 8, rise = () => 0, nit = () => 0, phos = () => 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const W = b.x1 - b.x0, H = b.bot - b.top;
	const N = n(f), S = sink(f), B = bact(f), O = o2(f), Rr = rise(f);
	const NI = nit(f), PH = phos(f);
	return (
		<g opacity={o}>
			{O2S.map((p, i) => {
				const vis_ = clamp01(O - i);
				if (vis_ <= 0.01) return null;
				const yy = b.top + H * (0.15 + 0.7 * p.v) - Rr * 30 * Math.abs(Math.sin(f * 0.03 + p.ph));
				return <O2Glyph key={'o' + i} x={b.x0 + W * (0.06 + 0.88 * p.u)} y={yy} o={vis_ * 0.9} />;
			})}
			{ALGAE.map((p, i) => {
				const a = clamp01(N - i);
				if (a <= 0.01) return null;
				const x = b.x0 + W * (0.04 + 0.92 * p.u) + Math.sin(f * 0.04 + p.ph) * 5 * (1 - S);
				const y0 = b.top + H * 0.22 * p.v + 8;
				const y = lerp(y0, b.bot - 14 - p.v * 16, smooth(clamp01(S * 1.3 - p.v * 0.3)));
				const r = 7 * p.s;
				return <circle key={'a' + i} cx={x} cy={y} r={r} fill={S > 0.3 ? ALG_DEAD : ALG} stroke={S > 0.3 ? '#5f6b48' : '#2f6a24'} strokeWidth={1.5} opacity={a} />;
			})}
			{BACTS.map((p, i) => {
				const a = clamp01(B * 22 - i);
				if (a <= 0.01) return null;
				const x = b.x0 + W * (0.05 + 0.9 * p.u) + Math.sin(f * 0.06 + p.a) * 4;
				const y = b.bot - 18 - p.v * 26;
				return <rect key={'b' + i} x={x - 8} y={y - 4} width={16} height={8} rx={4} fill={BACT} transform={`rotate(${p.a * 40},${x},${y})`} opacity={a} />;
			})}
			{Array.from({length: Math.ceil(NI)}, (_, i) => <circle key={'n' + i} cx={b.x0 + W * (0.1 + ((i * 0.37) % 0.8))} cy={b.top + H * (0.35 + ((i * 0.29) % 0.5)) + Math.sin(f * 0.05 + i) * 6} r={11} fill={NIT} stroke="#fffdf8" strokeWidth={2} opacity={clamp01(NI - i)} />)}
			{Array.from({length: Math.ceil(PH)}, (_, i) => <circle key={'p' + i} cx={b.x0 + W * (0.16 + ((i * 0.41) % 0.75))} cy={b.top + H * (0.3 + ((i * 0.23) % 0.55)) + Math.cos(f * 0.05 + i) * 6} r={11} fill={PHOS} stroke="#fffdf8" strokeWidth={2} opacity={clamp01(PH - i)} />)}
		</g>
	);
};
/** Legend row: coloured dot + label. */
export const Legend: React.FC<{x: number; y: number; items: {c: string; t: string; at: number; shape?: 'dot' | 'rod' | 'o2'}[]; size?: number; gap?: number}> = ({x, y, items, size = 30, gap = 40}) => {
	const f = useCurrentFrame();
	let cx = x;
	return (
		<g>
			{items.map((it, i) => {
				const o = prog(f, it.at, 12);
				const px = cx;
				cx += mw(it.t, size, true, 700) + 40 + gap;
				if (o <= 0.01) return null;
				return (
					<g key={i} opacity={o}>
						{it.shape === 'rod' ? <rect x={px} y={y - size * 0.45} width={20} height={10} rx={5} fill={it.c} /> : it.shape === 'o2' ? <O2Glyph x={px + 10} y={y - size * 0.3} s={0.8} /> : <circle cx={px + 10} cy={y - size * 0.3} r={10} fill={it.c} />}
						<Sx x={px + 30} y={y} text={it.t} size={size} color={it.c === O2C ? O2_INK : it.c} hand weight={700} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** Vertical oxygen gauge: level(f) 0..1. */
export const Gauge: React.FC<{x: number; y: number; h: number; level: (f: number) => number; at?: number; o?: number}> = ({x, y, h, level, at = -1000, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const L = clamp01(level(f));
	const c = L > 0.5 ? '#4fa36a' : L > 0.25 ? '#e3a72c' : RED8;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={36} height={h} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			<rect x={x + 4} y={y + h * 0.75} width={28} height={h * 0.25 - 4} rx={4} fill={RED8} opacity={0.18} />
			<rect x={x + 6} y={y + 4 + (h - 8) * (1 - L)} width={24} height={(h - 8) * L} rx={10} fill={c} />
			<Sx x={x + 18} y={y - 14} text="O_2" size={30} color={O2_INK} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
/** A lever that holds the algae back; released (rotates away) from `release`. */
export const Brake: React.FC<{x: number; y: number; at: number; release: number; out?: number}> = ({x, y, at, release, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const r = smooth(prog(f, release, 18));
	const ang = -70 * r;
	return (
		<g opacity={v}>
			<rect x={x - 46} y={y + 54} width={92} height={18} rx={6} fill="#c9c0b0" stroke={INK} strokeWidth={2.5} />
			<g transform={`rotate(${ang},${x},${y + 60})`}>
				<rect x={x - 9} y={y - 60} width={18} height={124} rx={8} fill={RED8} stroke={INK} strokeWidth={2.5} />
				<circle cx={x} cy={y - 64} r={18} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			</g>
			<circle cx={x} cy={y + 60} r={8} fill={INK} />
		</g>
	);
};

// ---------- 60-hour dissolved oxygen trace ----------
/** Illustrative: peaks mid-afternoon, lowest near dawn; swing grows on day two; after 48 h the bloom has died and oxygen
 *  slides down below the earlier troughs. */
export const doFn = (t: number) => {
	const a = t < 24 ? 2.4 : lerp(2.4, 4.2, clamp01((t - 24) / 12));
	const base = 7.5 + a * Math.cos((2 * Math.PI * (t - 15)) / 24);
	if (t <= 44) return base;
	const k = smooth(clamp01((t - 44) / 14));
	return lerp(base, 1.2 + 0.4 * Math.cos((2 * Math.PI * (t - 15)) / 24), k);
};
export const SunGlyph: React.FC<{x: number; y: number; at?: number; r?: number}> = ({x, y, at = -1000, r = 14}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={r} fill="#f2c94c" stroke="#c99a1c" strokeWidth={2} />
			{Array.from({length: 8}, (_, i) => { const a = (i * Math.PI) / 4; return <line key={i} x1={x + Math.cos(a) * (r + 4)} y1={y + Math.sin(a) * (r + 4)} x2={x + Math.cos(a) * (r + 11)} y2={y + Math.sin(a) * (r + 11)} stroke="#c99a1c" strokeWidth={3} strokeLinecap="round" />; })}
		</g>
	);
};
export const MoonGlyph: React.FC<{x: number; y: number; at?: number; r?: number}> = ({x, y, at = -1000, r = 15}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10);
	if (v <= 0.01) return null;
	return <path opacity={v} d={`M${x + r * 0.3},${y - r} A${r},${r} 0 1 0 ${x + r * 0.3},${y + r} A${r * 0.75},${r * 0.75} 0 1 1 ${x + r * 0.3},${y - r} Z`} fill="#8a92b8" stroke="#4e5680" strokeWidth={2} />;
};

// ---------- map strip ----------
export const RIVER: [number, number][] = [[690, 230], [640, 300], [600, 340], [560, 420], [520, 470], [470, 520], [430, 600], [380, 660], [330, 720], [280, 780], [240, 850], [200, 920]];
const pathOf = (pts: [number, number][]) => 'M' + pts.map(p => p.join(',')).join(' L');
/** The coded Barwon-Darling line; `band` spreads a green band along it from `bandAt`; `dot` marks Menindee from `dotAt`. */
export const RiverMap: React.FC<{at?: number; bandAt?: number; dotAt?: number; s?: number; tx?: number; ty?: number; o?: number}> = ({at = -1000, bandAt, dotAt, s = 1, tx = 0, ty = 0, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const d = pathOf(RIVER);
	const dp = RIVER[RIVER.length - 2];
	return (
		<g opacity={v} transform={`translate(${tx},${ty}) scale(${s})`}>
			<rect x={150} y={200} width={620} height={760} rx={24} fill="#f4efe2" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
			<path d={d} fill="none" stroke="#7fb0d6" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
			{bandAt !== undefined ? <DrawPath d={d} at={bandAt} dur={70} color="#5aa845" width={26} opacity={0.7} /> : null}
			<Sx x={720} y={250} text="Barwon" size={30} color={INK_SOFT} anchor="end" hand weight={700} at={-1000} />
			<Sx x={330} y={640} text="Darling" size={30} color={INK_SOFT} hand weight={700} at={-1000} />
			{dotAt !== undefined && f >= dotAt ? (
				<g opacity={prog(f, dotAt, 10)}>
					<circle cx={dp[0]} cy={dp[1]} r={16} fill={RED8} stroke="#fffdf8" strokeWidth={4} />
					<circle cx={dp[0]} cy={dp[1]} r={16 + 14 * Math.abs(Math.sin((f - dotAt) * 0.08))} fill="none" stroke={RED8} strokeWidth={3} opacity={0.6} />
					<Sx x={dp[0] + 30} y={dp[1] + 10} text="Menindee" size={30} color={RED8} hand weight={700} at={-1000} />
				</g>
			) : null}
		</g>
	);
};

// ---------- moving dots along a polyline ----------
export const Flow: React.FC<{pts: [number, number][]; at: number; out?: number; n?: number; colors?: string[]; r?: number; period?: number; track?: boolean; width?: number; trackColor?: string}> = ({pts, at, out, n = 6, colors = [NIT, PHOS], r = 10, period = 70, track = true, width = 6, trackColor = '#b9a88c'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const segs = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
	const total = segs.reduce((a, b) => a + b, 0);
	const pos = (u: number): [number, number] => {
		let d = u * total;
		for (let i = 0; i < segs.length; i++) { if (d <= segs[i]) { const k = d / segs[i]; return [lerp(pts[i][0], pts[i + 1][0], k), lerp(pts[i][1], pts[i + 1][1], k)]; } d -= segs[i]; }
		return pts[pts.length - 1];
	};
	return (
		<g opacity={v}>
			{track ? <DrawPath d={pathOf(pts)} at={at} dur={24} color={trackColor} width={width} dash="12 10" /> : null}
			{Array.from({length: n}, (_, i) => {
				const u = (((f - at) / period) + i / n) % 1;
				if (f < at + (i / n) * period * 0.3) return null;
				const [x, y] = pos(u);
				return <circle key={i} cx={x} cy={y} r={r} fill={colors[i % colors.length]} stroke="#fffdf8" strokeWidth={2} opacity={Math.min(1, Math.sin(u * Math.PI) * 2)} />;
			})}
			<path d={(() => { const [x1, y1] = pts[pts.length - 2], [x2, y2] = pts[pts.length - 1]; const a = Math.atan2(y2 - y1, x2 - x1); return `M${x2 - 22 * Math.cos(a - 0.5)},${y2 - 22 * Math.sin(a - 0.5)} L${x2},${y2} L${x2 - 22 * Math.cos(a + 0.5)},${y2 - 22 * Math.sin(a + 0.5)}`; })()} fill="none" stroke={trackColor} strokeWidth={width} strokeLinecap="round" opacity={prog(f, at + 20, 8)} />
		</g>
	);
};

// ---------- small coded objects ----------
export const BottleOutline: React.FC<{x: number; y: number; at: number; out?: number; label?: string; color?: string; s?: number}> = ({x, y, at, out, label, color = INK, s = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<path d={`M${x - 14 * s},${y - 70 * s} L${x + 14 * s},${y - 70 * s} L${x + 14 * s},${y - 55 * s} Q${x + 34 * s},${y - 45 * s} ${x + 34 * s},${y - 20 * s} L${x + 34 * s},${y + 30 * s} Q${x + 34 * s},${y + 40 * s} ${x + 24 * s},${y + 40 * s} L${x - 24 * s},${y + 40 * s} Q${x - 34 * s},${y + 40 * s} ${x - 34 * s},${y + 30 * s} L${x - 34 * s},${y - 20 * s} Q${x - 34 * s},${y - 45 * s} ${x - 14 * s},${y - 55 * s} Z`} fill="#eef5f8" stroke={color} strokeWidth={3} />
			<rect x={x - 30 * s} y={y - 5 * s} width={60 * s} height={41 * s} rx={6} fill="#cfe3ee" opacity={0.8} />
			{label ? <Sx x={x} y={y + 80 * s} text={label} size={30} color={color} anchor="middle" hand weight={700} at={-1000} /> : null}
		</g>
	);
};
export const SodaBottle: React.FC<{x: number; y: number; at: number; flat?: number; s?: number}> = ({x, y, at, flat, s = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const fl = flat === undefined ? 0 : prog(f, flat, 40);
	return (
		<g opacity={v}>
			<path d={`M${x - 16 * s},${y - 150 * s} L${x + 16 * s},${y - 150 * s} L${x + 16 * s},${y - 110 * s} Q${x + 50 * s},${y - 80 * s} ${x + 50 * s},${y - 40 * s} L${x + 50 * s},${y + 90 * s} Q${x + 50 * s},${y + 110 * s} ${x + 30 * s},${y + 110 * s} L${x - 30 * s},${y + 110 * s} Q${x - 50 * s},${y + 110 * s} ${x - 50 * s},${y + 90 * s} L${x - 50 * s},${y - 40 * s} Q${x - 50 * s},${y - 80 * s} ${x - 16 * s},${y - 110 * s} Z`} fill="#f6e3cf" stroke={INK} strokeWidth={3} />
			<rect x={x - 46 * s} y={y - 30 * s} width={92 * s} height={136 * s} rx={10} fill="#d98c4a" opacity={0.45} />
			{Array.from({length: 8}, (_, i) => {
				const u = (((f - at) / 50) + i / 8) % 1;
				const yy = lerp(y + 100 * s, y - 170 * s - fl * 60, u);
				const show = u < 0.6 ? 1 - fl * 0.2 : fl;
				return <circle key={i} cx={x + Math.sin(i * 2.1) * 26 * s} cy={yy} r={5 * s} fill="#ffffff" stroke="#c98a52" strokeWidth={1.5} opacity={show * Math.sin(u * Math.PI)} />;
			})}
		</g>
	);
};
export const Tap: React.FC<{x: number; y: number; at?: number}> = ({x, y, at = -1000}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v} stroke={INK} strokeWidth={4} fill="#dfe6ec" strokeLinejoin="round">
			<rect x={x - 70} y={y - 20} width={90} height={34} rx={8} />
			<path d={`M${x + 20},${y - 14} L${x + 60},${y - 14} Q${x + 80},${y - 14} ${x + 80},${y + 10} L${x + 80},${y + 34} L${x + 56},${y + 34} L${x + 56},${y + 14} L${x + 20},${y + 14} Z`} />
			<rect x={x - 40} y={y - 44} width={30} height={24} rx={4} />
			<path d={`M${x + 68},${y + 44} q-6,12 0,20 q6,-8 0,-20`} fill="#7fb8dc" stroke="#3f7fb0" strokeWidth={2} />
		</g>
	);
};
export const Dam: React.FC<{x: number; y: number; at?: number}> = ({x, y, at = -1000}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<path d={`M${x},${y + 60} L${x},${y + 10} Q${x + 60},${y} ${x + 110},${y + 20} L${x + 110},${y + 60} Z`} fill="#a8d0e6" stroke="#3f7fb0" strokeWidth={3} />
			<path d={`M${x + 110},${y + 60} L${x + 110},${y - 10} L${x + 140},${y - 10} L${x + 160},${y + 60} Z`} fill="#c9c0b0" stroke={INK} strokeWidth={3} />
			{[0, 1, 2].map(i => <circle key={i} cx={x + 25 + i * 28} cy={y + 18 + (i % 2) * 6} r={6} fill={ALG} />)}
		</g>
	);
};
export const TreatBox: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={4} strokeDasharray="14 8" />
			{[0, 1, 2].map(i => <rect key={i} x={x + 30 + i * ((w - 60) / 3)} y={y + h * 0.45} width={(w - 60) / 3 - 18} height={h * 0.4} rx={8} fill="#e8f1f6" stroke="#7d8a96" strokeWidth={2.5} />)}
			<Sx x={x + w / 2} y={y + 46} text="treatment plant" size={34} color={INK} anchor="middle" hand weight={700} at={-1000} />
		</g>
	);
};

// ---------- ion chromatography ----------
export const Column: React.FC<{x: number; y: number; h: number; at: number; sep: number}> = ({x, y, h, at, sep}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const s = smooth(prog(f, sep, 60));
	const bands = [{c: '#7d8a96', k: 1.0}, {c: NIT, k: 0.7}, {c: PHOS, k: 0.42}];
	return (
		<g opacity={v}>
			<rect x={x - 22} y={y} width={44} height={h} rx={10} fill="#f2efe8" stroke={INK} strokeWidth={3} />
			{bands.map((b, i) => <rect key={i} x={x - 18} y={y + 10 + (h - 40) * s * b.k} width={36} height={16} rx={4} fill={b.c} opacity={0.85} />)}
			<path d={`M${x - 10},${y + h} L${x + 10},${y + h} L${x},${y + h + 18} Z`} fill={INK} />
		</g>
	);
};
export const Peaks: React.FC<{x: number; y: number; w: number; h: number; at: number; size?: number}> = ({x, y, w, h, at, size = 30}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const pk = [{u: 0.2, a: 0.7, t: 'Cl^{−}', c: '#5f6670'}, {u: 0.5, a: 0.9, t: 'NO_3^{−}', c: NIT}, {u: 0.8, a: 0.55, t: 'PO_4^{3−}', c: PHOS}];
	const p = prog(f, at, 60);
	let d = '';
	for (let i = 0; i <= 120; i++) {
		const u = (i / 120) * p;
		const yv = pk.reduce((s, q) => s + q.a * Math.exp(-(((u - q.u) / 0.035) ** 2)), 0);
		d += `${i ? 'L' : 'M'}${(x + u * w).toFixed(1)},${(y + h - yv * h * 0.85).toFixed(1)} `;
	}
	return (
		<g opacity={v}>
			<line x1={x} x2={x + w} y1={y + h} y2={y + h} stroke={INK} strokeWidth={3} />
			<path d={d} fill="none" stroke={CHEM} strokeWidth={4} />
			{pk.map((q, i) => (p > q.u + 0.04 ? <Sx key={i} x={x + q.u * w} y={y + h - q.a * h * 0.85 - 12} text={q.t} size={size} color={q.c} anchor="middle" weight={700} at={-1000} /> : null))}
		</g>
	);
};
export const Field: React.FC<{cx: number; cy: number; r: number; at: number; n?: number}> = ({cx, cy, r, at, n = 16}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	const R = seeded(5);
	const cells = Array.from({length: n}, () => ({u: R() * 2 - 1, w: R() * 2 - 1, a: R() * 180, k: 0.7 + R() * 0.6}));
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill="#f3f8ee" stroke={INK} strokeWidth={5} />
			{cells.filter(c => c.u * c.u + c.w * c.w < 0.7).map((c, i) => <ellipse key={i} cx={cx + c.u * r * 0.8} cy={cy + c.w * r * 0.8} rx={16 * c.k} ry={8 * c.k} fill="#7cbf5a" stroke="#2f6a24" strokeWidth={2} transform={`rotate(${c.a},${cx + c.u * r * 0.8},${cy + c.w * r * 0.8})`} opacity={prog(f, at + i * 2, 8)} />)}
		</g>
	);
};

// ---------- parameter board column ----------
/** One parameter-board column. Active: wide, with the scene's own content as children. Not active: narrow, title and a
 *  compact summary (dim if `dim`). */
export const PCol: React.FC<{x: number; w: number; title: string; color: string; at?: number; dim?: boolean; summary?: string[]; children?: React.ReactNode; y?: number; h?: number}> = ({x, w, title, color, at = -1000, dim = false, summary = [], children, y = 220, h = 740}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	return (
		<g opacity={dim ? 0.5 : 1}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill="#fffdf8" stroke={v > 0.01 ? color : 'rgba(60,45,20,0.18)'} strokeWidth={v > 0.01 ? 4 : 2.5} strokeDasharray={v > 0.01 ? undefined : '10 8'} />
			<rect x={x} y={y} width={w} height={70} rx={22} fill={color} opacity={0.14 * v} />
			<Sx x={x + 28} y={y + 50} text={title} size={44} color={color} hand weight={700} at={at} />
			{summary.map((t, i) => <Sx key={i} x={x + 28} y={y + 130 + i * 50} text={t} size={30} color={INK} weight={600} at={-1000} />)}
			{children}
		</g>
	);
};
export {Fade, INK, INK_SOFT};
