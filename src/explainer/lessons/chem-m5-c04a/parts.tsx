// Drawing parts for the C4a lesson: coded syringe and cylinder with a plunger, crowding dials,
// pressure gauge, net bar, small icons. Re-exports the C2 and C3 parts used on the board.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
export {Bars, BARS, Pill, ESC, Fade, Overlay, SvgText, TEAL, FWD, REV, StageTable, RxnChip, ColourStrip, WrongChip, FlaskThumb, MiniBars} from '../chem-m5-c03/parts';
export type {TRow, Piece} from '../chem-m5-c03/parts';
import {ESC, Fade, SvgText, TEAL} from '../chem-m5-c03/parts';
import {BARREL, HAVE} from './assets';
import {ChemSvg} from './common';

const frac = (v: number) => v - Math.floor(v);

// ---------- syringe or cylinder with a coded plunger ----------
export type Group = {n: number; kind: 'dot' | 'pair'; r: number; fill: string; stroke: string; seed: number};
export type Burst = {f0: number; kind: 'join' | 'split'};
const GX1 = 1588, L0 = 290, SEAL = 110, ROD = 650;
const VB = {x: 200, y: 350, w: 1600, h: 270};
export const sealRight = (vol: number) => GX1 - L0 * vol;
const hash = (a: number, b: number) => {
	const r = rng(a * 131 + b * 17 + 5);
	return {p1: r() * 6.28, p2: r() * 6.28, w1: 0.02 + r() * 0.03, w2: 0.025 + r() * 0.03, a: r()};
};
const place = (seed: number, i: number, f: number, sr: number) => {
	const h = hash(seed, i);
	const u = frac(0.137 + i * 0.618034 + seed * 0.31) + 0.035 * Math.sin(f * h.w1 + h.p1);
	const v = frac(0.31 + i * 0.7548776 + seed * 0.57) + 0.05 * Math.sin(f * h.w2 + h.p2);
	const x0 = sr + 22, x1 = GX1 - 22;
	return {x: x0 + (x1 - x0) * Math.max(0, Math.min(1, u)), y: 428 + (582 - 428) * Math.max(0, Math.min(1, v)), ang: h.a * 3.14};
};
const ARGON_C = INK_SOFT;
export const Syringe: React.FC<{x: number; y: number; w: number; vol: number; groups: Group[]; tint: string; bursts?: Burst[]; argon?: number; argonAt?: number; lock?: number; inlet?: number; cyl?: boolean; opacity?: number; seed?: number; left?: number}> = ({x, y, w, vol, groups, tint, bursts = [], argon = 0, argonAt = 0, lock = 0, inlet = 0, cyl = false, opacity = 1, seed = 3, left = 470}) => {
	const f = useCurrentFrame();
	const sr = sealRight(vol);
	const padX = sr - SEAL - ROD;
	const painted = !cyl && HAVE.has(BARREL);
	const vbw = 1800 - left;
	const h = (w * VB.h) / vbw;
	const dots: React.ReactNode[] = [];
	groups.forEach((g, gi) => {
		const whole = Math.floor(g.n + 1e-6), part = g.n - whole;
		for (let i = 0; i < Math.ceil(g.n - 1e-6); i++) {
			const p = place(g.seed, i, f, sr);
			const o = i < whole ? 1 : part;
			if (g.kind === 'dot') dots.push(<circle key={`${gi}-${i}`} cx={p.x} cy={p.y} r={g.r} fill={g.fill} stroke={g.stroke} strokeWidth={4} opacity={o} />);
			else {
				const dx = Math.cos(p.ang) * g.r * 0.85, dy = Math.sin(p.ang) * g.r * 0.85;
				dots.push(
					<g key={`${gi}-${i}`} opacity={o}>
						<path d={`M${p.x - dx},${p.y - dy} L${p.x + dx},${p.y + dy}`} stroke={g.stroke} strokeWidth={g.r * 1.3} strokeLinecap="round" />
						<path d={`M${p.x - dx},${p.y - dy} L${p.x + dx},${p.y + dy}`} stroke={g.fill} strokeWidth={g.r * 0.8} strokeLinecap="round" />
					</g>,
				);
			}
		}
	});
	const ar = rng(seed + 40);
	const argons: React.ReactNode[] = [];
	for (let i = 0; i < Math.ceil(argon); i++) {
		const t0 = argonAt + i * 6;
		const u = prog(f, t0, 26);
		if (u <= 0) continue;
		const p = place(91, i, f, sr);
		const sx = 1502 + (ar() - 0.5) * 20;
		const last = i >= Math.floor(argon) ? argon - Math.floor(argon) : 1;
		argons.push(<circle key={`a${i}`} cx={sx + (p.x - sx) * u} cy={372 + (p.y - 372) * u} r={11} fill="#ffffff" stroke={INK_SOFT} strokeWidth={3.5} opacity={Math.min(1, u * 2) * last} />);
	}
	const rings = bursts.map((b, i) => {
		const a = f - b.f0;
		if (a < 0 || a > 24) return null;
		const u = a / 24;
		const p = place(17, i * 5 + 2, f, sr);
		return <circle key={`b${i}`} cx={p.x} cy={p.y} r={16 + 38 * u} fill="none" stroke={b.kind === 'join' ? ESC : AMBER} strokeWidth={6} opacity={1 - u} />;
	});
	const lx = padX + ROD * 0.38;
	return (
		<svg width={w} height={h} viewBox={`${left} ${VB.y} ${vbw} ${VB.h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			{cyl ? (
				<>
					<rect x={640} y={398} width={GX1 - 640 + 60} height={206} rx={26} fill="#eef1f3" />
					<rect x={sr} y={404} width={GX1 + 54 - sr} height={194} rx={20} fill={tint} />
					<rect x={640} y={398} width={GX1 - 640 + 60} height={206} rx={26} fill="none" stroke={INK} strokeWidth={7} />
					<path d="M672,420 L1520,420" stroke="#ffffff" strokeOpacity={0.7} strokeWidth={9} strokeLinecap="round" />
				</>
			) : (
				<>
					<rect x={sr} y={408} width={GX1 - sr + 10} height={190} fill={tint} />
					<path d={`M${GX1},418 L${GX1 + 80},468 L${GX1 + 150},468 L${GX1 + 150},532 L${GX1 + 80},532 L${GX1},582 Z`} fill={tint} opacity={0.9} />
					{painted ? <image href={staticFile(BARREL)} x={0} y={0} width={2000} height={1000} /> : <rect x={630} y={404} width={960} height={196} rx={16} fill="#eef5fa" fillOpacity={0.35} stroke={INK} strokeWidth={6} />}
				</>
			)}
			{dots}{argons}{rings}
			{/* coded plunger: rod, thumb pad, dark rubber seal */}
			<rect x={padX} y={466} width={ROD} height={74} fill="#cfdde6" stroke={INK} strokeWidth={5} />
			<path d={`M${padX},476 L${padX + ROD},476`} stroke="#ffffff" strokeOpacity={0.8} strokeWidth={8} />
			<ellipse cx={padX} cy={503} rx={30} ry={120} fill="#e9f1f6" stroke={INK} strokeWidth={6} />
			<rect x={sr - SEAL} y={cyl ? 410 : 420} width={SEAL} height={cyl ? 182 : 168} rx={14} fill="#3d3d42" stroke={INK} strokeWidth={5} />
			{[0.34, 0.66].map(u => <path key={u} d={`M${sr - SEAL + SEAL * u},${cyl ? 414 : 424} L${sr - SEAL + SEAL * u},${cyl ? 588 : 584}`} stroke="#8a8a90" strokeWidth={4} />)}
			{lock > 0.01 ? (
				<g opacity={lock}>
					<rect x={lx} y={448} width={46} height={110} rx={6} fill="#6b6358" stroke={INK} strokeWidth={5} />
					<path d={`M${lx + 10},448 L${lx + 10},418 A13,13 0 0 1 ${lx + 36},418 L${lx + 36},448`} fill="none" stroke={INK} strokeWidth={7} />
					<circle cx={lx + 23} cy={503} r={8} fill="#fffdf8" />
				</g>
			) : null}
			{inlet > 0.01 ? (
				<g opacity={inlet}>
					<rect x={1482} y={352} width={40} height={56} fill="#d9d4c8" stroke={INK} strokeWidth={5} />
					<circle cx={1502} cy={362} r={20} fill="#fffdf8" stroke={INK} strokeWidth={5} />
					<path d="M1502,344 L1502,376 M1490,362 L1502,378 L1514,362" fill="none" stroke={ARGON_C} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				</g>
			) : null}
		</svg>
	);
};

// ---------- crowding dial ----------
export const Dial: React.FC<{x: number; y: number; w?: number; label: string; value: number; text?: string; color: string; at: number; max?: number; ring?: boolean}> = ({x, y, w = 280, label, value, text, color, at, max = 18, ring = false}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const t = text ?? String(Math.round(value * 10) / 10);
	return (
		<g opacity={o} transform={`translate(0,${(1 - o) * 12})`}>
			<rect x={x} y={y} width={w} height={178} rx={22} fill="#fffdf8" stroke={ring ? TEAL : color} strokeWidth={ring ? 6 : 4} />
			<ChemSvg x={x + 22} y={y + 46} text={label} size={36} color={color} hand={false} />
			<text x={x + 22} y={y + 124} fill={INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: t.length > 3 ? 52 : 80}}>{t}</text>
			{t === 'same' ? null : <text x={x + w - 22} y={y + 124} textAnchor="end" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>units</text>}
			<rect x={x + 22} y={y + 146} width={w - 44} height={12} rx={6} fill="#ede4d3" />
			<rect x={x + 22} y={y + 146} width={Math.max(8, (w - 44) * Math.min(1, value / max))} height={12} rx={6} fill={color} />
		</g>
	);
};

// ---------- total pressure gauge ----------
export const Gauge: React.FC<{x: number; y: number; r?: number; value: number; at: number; label?: string; label2?: string}> = ({x, y, r = 70, value, at, label = 'total pressure', label2 = '(relative)'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const ang = (-170 + ((value - 0.5) / 2.5) * 160) * (Math.PI / 180);
	return (
		<g opacity={o}>
			<path d={`M${x - r},${y} A${r},${r} 0 0 1 ${x + r},${y}`} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			<path d={`M${x - r * 0.82},${y - 6} A${r * 0.82},${r * 0.82} 0 0 1 ${x + r * 0.82},${y - 6}`} fill="none" stroke="#ede4d3" strokeWidth={9} />
			<path d={`M${x},${y} L${x + Math.cos(ang) * r * 0.78},${y + Math.sin(ang) * r * 0.78}`} stroke="#c4432f" strokeWidth={7} strokeLinecap="round" />
			<circle cx={x} cy={y} r={9} fill={INK} />
			<text x={x} y={y + 52} textAnchor="middle" fill={INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46}}>{Math.round(value * 10) / 10}</text>
			<text x={x} y={y + 90} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{label}</text>
			<text x={x} y={y + 122} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}}>{label2}</text>
		</g>
	);
};

// ---------- net bar under the syringe ----------
export const NetBar: React.FC<{xc: number; y: number; gap: number; at: number; scale?: number; lines?: {text: string; at: number}[]; zeroAt?: number}> = ({xc, y, gap, at, scale = 6, lines = [], zeroAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const zero = zeroAt !== undefined && f >= zeroAt;
	const len = gap * scale, dir = len >= 0 ? 1 : -1;
	const col = dir > 0 ? ESC : AMBER, ink = dir > 0 ? ESC : AMBER_INK;
	return (
		<g opacity={o}>
			<path d={`M${xc},${y - 22} L${xc},${y + 22}`} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{Math.abs(len) > 6 && !zero ? (
				<>
					<path d={`M${xc},${y} L${xc + len - dir * 14},${y}`} stroke={col} strokeWidth={16} strokeLinecap="round" fill="none" />
					<path d={`M${xc + len - dir * 30},${y - 26} L${xc + len + dir * 6},${y} L${xc + len - dir * 30},${y + 26} Z`} fill={col} stroke={col} strokeWidth={6} strokeLinejoin="round" />
				</>
			) : null}
			{zero ? (
				<g opacity={prog(f, zeroAt!, 14)}>
					<circle cx={xc} cy={y} r={30} fill="#fffdf8" stroke={TEAL} strokeWidth={6} />
					<path d={`M${xc - 16},${y} L${xc + 16},${y}`} stroke={TEAL} strokeWidth={7} strokeLinecap="round" />
					<text x={xc + 50} y={y + 14} fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>net change 0</text>
				</g>
			) : lines.map((l, i) => <SvgText key={i} x={xc} y={y + 66 + i * 44} text={l.text} size={40} color={ink} anchor="middle" at={l.at} />)}
		</g>
	);
};

// ---------- small icons ----------
export const TempGlyph: React.FC<{x: number; y: number; at: number; label: string}> = ({x, y, at, label}) => (
	<Fade at={at}>
		<rect x={x - 11} y={y} width={22} height={70} rx={11} fill="#fffdf8" stroke={INK} strokeWidth={4} />
		<circle cx={x} cy={y + 82} r={20} fill="#a05a8a" stroke={INK} strokeWidth={4} />
		<rect x={x - 5} y={y + 28} width={10} height={54} rx={5} fill="#a05a8a" />
		<text x={x + 36} y={y + 66} fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>{label}</text>
	</Fade>
);
export const PlungerIcon: React.FC<{x: number; y: number; at: number; s?: number; push?: boolean}> = ({x, y, at, s = 1, push = false}) => (
	<Fade at={at}>
		<g transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={0} y={-20} width={120} height={40} rx={8} fill="#eef5fa" stroke={INK} strokeWidth={5} />
			<rect x={70} y={-18} width={20} height={36} fill="#3d3d42" stroke={INK} strokeWidth={4} />
			<path d="M70,0 L-40,0" stroke={INK} strokeWidth={8} strokeLinecap="round" />
			<ellipse cx={-44} cy={0} rx={8} ry={24} fill="#e9f1f6" stroke={INK} strokeWidth={4} />
			{push ? <path d="M-96,0 L-62,0 M-78,-14 L-62,0 L-78,14" fill="none" stroke={ESC} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /> : null}
		</g>
	</Fade>
);
export const LockBoxIcon: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => (
	<Fade at={at}>
		<g transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={0} y={-20} width={120} height={40} rx={8} fill="#eef5fa" stroke={INK} strokeWidth={5} />
			{[[20, -6], [45, 6], [70, -8], [95, 5]].map(([a, b], i) => <circle key={i} cx={a} cy={b} r={7} fill="#fff" stroke={INK_SOFT} strokeWidth={3} />)}
			<rect x={44} y={-52} width={32} height={26} rx={5} fill="#6b6358" stroke={INK} strokeWidth={4} />
			<path d="M50,-52 L50,-64 A10,10 0 0 1 70,-64 L70,-52" fill="none" stroke={INK} strokeWidth={5} />
		</g>
	</Fade>
);
export const DropperIcon: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => (
	<Fade at={at}>
		<g transform={`translate(${x},${y}) scale(${s})`}>
			<path d="M0,-30 L0,16 L14,40 L28,16 L28,-30 Z" fill="#fffdf8" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
			<circle cx={14} cy={66} r={9} fill={ESC} />
		</g>
	</Fade>
);
