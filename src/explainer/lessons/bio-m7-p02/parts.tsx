// M7 P02 (Biology practical: microbial testing) drawing parts: the constant board (question, seven-step method rail,
// the pale bench, the corner tag), colour-keyed text (water source violet, colonies and CFU amber, controls green,
// culturable microbes teal, pathogens and hazards terracotta, tags grey), sealed plates that can rotate uniformly
// (never stretched), coded tape strips and a base label line on a dish, a source-and-count label, the dilution drop,
// the temperature band, the inverted-plate side view with condensation, and the coded spreader. M6 P01 (Biology) and
// M7 B01/B03 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, AMBER_SOFT, Arrow, Bench, CARD, CTag, CountGrid, CrossChip, DrawPath, Drop, EDGE, FONT_DISPLAY, GREEN, GREEN_SOFT, GREYT, GREY_INK, GTag, INK, INK_SOFT,
	PenLink, Pl, ScribbleX, Sx, TEAL, TEAL_SOFT, TERRA, TERRA_SOFT, VIOLET, VIOLET_SOFT, WText, clamp01, crossChipW, ctagH, lerp, pbPt, plH, prog, rng, smooth, tw, vis, wrapT,
} from '../bio-m6-p01/parts';
import {Fade} from '../bio-m5-b13/shared';
import {PlateB} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import {fitW, ptOf, pulse} from '../bio-m7-b01/parts';
import {Drift} from '../bio-m7-b03/parts';
import {FEAT, PLATES} from './assets';

export {
	AMBER, AMBER_INK, AMBER_SOFT, Arrow, Bench, CARD, CTag, CountGrid, CrossChip, DrawPath, Drop, EDGE, FONT_DISPLAY, GREEN, GREEN_SOFT, GREYT, GREY_INK, GTag, INK, INK_SOFT,
	PenLink, Pl, ScribbleX, Sx, TEAL, TEAL_SOFT, TERRA, TERRA_SOFT, VIOLET, VIOLET_SOFT, WText, clamp01, crossChipW, ctagH, lerp, pbPt, plH, prog, rng, smooth, tw, vis, wrapT,
	Fade, PlateB, fitW, ptOf, pulse, Drift, FEAT, PLATES,
};
export type {PB};

// ---------- board ----------
export const QUESTION = 'What can colonies tell you?';
export const STEPS = ['1 why test', '2 plan', '3 sample and dilute', '4 plate and incubate', '5 count and calculate', '6 what it shows', '7 stay safe'];
/** The method step rail under the question; `lit` lights at `at`, earlier steps read as done. */
export const Rail: React.FC<{lit: number; at?: number; o?: number}> = ({lit, at = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let x = 96;
	return (
		<g opacity={o * prog(f, Math.min(at, 0), 10)}>
			{STEPS.map((s, i) => {
				const w = tw(s, 22) + 36;
				const x0 = x;
				x += w + 10;
				const on = i === lit ? prog(f, at, 12) : 0;
				const done = i < lit;
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
export const RZ = {x: 1290, w: 570};

// ---------- plates ----------
/** A sealed plate (or any dish plate) drawn uniformly scaled, optionally rotated about its centre. */
export const Dish: React.FC<{p: PB; cx: number; cy: number; w: number; o?: number; rot?: number; dim?: number; id?: string}> = ({p, cx, cy, w, o = 1, rot = 0, dim = 0}) => {
	if (o <= 0.01) return null;
	const d = clamp01(dim);
	return <g opacity={1 - 0.5 * d}><PlateB p={p} cx={cx} cy={cy} w={w} o={o} rot={rot} filter={d > 0.01 ? `grayscale(${d})` : undefined} /></g>;
};
/** Screen centre and rim radius of a dish plate drawn at (cx, cy, w), from its natural centre and rim. */
export const dishGeo = (p: PB, cx: number, cy: number, w: number, c: [number, number], rim: number) => {
	const k = w / (p.box[2] - p.box[0]);
	const [x, y] = ptOf(p, cx, cy, w, c);
	return {x, y, r: rim * k};
};
/** Two short coded tape strips across a rim at opposite sides (the angle `a` in degrees). */
export const TapeStrips: React.FC<{x: number; y: number; r: number; at: number; a?: number; o?: number}> = ({x, y, r, at, a = 0, o = 1}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{[a, a + 180].map((ang, i) => {
				const p = prog(f, at + i * 8, 10);
				if (p <= 0.01) return null;
				const rad = (ang * Math.PI) / 180;
				const cx = x + Math.cos(rad) * r, cy = y + Math.sin(rad) * r;
				const L = Math.max(30, r * 0.34) * p, W = Math.max(10, r * 0.12);
				return <rect key={i} x={-L / 2} y={-W / 2} width={L} height={W} rx={3} fill="rgba(235,226,190,0.72)" stroke="rgba(150,135,90,0.8)" strokeWidth={1.5} transform={`translate(${cx},${cy}) rotate(${ang})`} />;
			})}
		</g>
	);
};
/** A coded marker label line along the lower rim of a dish base. */
export const BaseLabel: React.FC<{x: number; y: number; r: number; at: number; o?: number}> = ({x, y, r, at, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const a0 = (125 * Math.PI) / 180, a1 = (55 * Math.PI) / 180, rr = r * 0.86;
	const d = `M${x + Math.cos(a0) * rr},${y + Math.sin(a0) * rr} A${rr},${rr} 0 0 0 ${x + Math.cos(a1) * rr},${y + Math.sin(a1) * rr}`;
	const scr = Array.from({length: 9}, (_, i) => {
		const t = lerp(a0, a1, (i + 0.5) / 9);
		const bx = x + Math.cos(t) * (rr - 14), by = y + Math.sin(t) * (rr - 14);
		return `M${bx - 6},${by + 4} q4,-12 8,0 q4,10 8,-2`;
	}).join(' ');
	return (
		<g opacity={o}>
			<DrawPath d={d} at={at} dur={16} color={INK} width={3.5} />
			<DrawPath d={scr} at={at + 10} dur={20} color={INK} width={3} />
		</g>
	);
};
/** "tap: 3" with the source violet and the count amber, centred on x. */
export const SrcCount: React.FC<{x: number; y: number; src: string; count: string; at: number; countAt?: number; size?: number; dim?: number}> = ({x, y, src, count, at, countAt, size = 40, dim = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const a = src + ': ', w1 = tw(a, size, true), w2 = tw(count, size, true);
	const x0 = x - (w1 + w2) / 2;
	const d = clamp01(dim) > 0.5;
	return (
		<g opacity={o * (d ? 0.6 : 1)}>
			<Sx x={x0} y={y} text={a} size={size} color={d ? GREY_INK : VIOLET} hand weight={700} at={-100} />
			<Sx x={x0 + w1} y={y} text={count} size={size} color={d ? GREY_INK : AMBER_INK} hand weight={700} at={countAt ?? -100} />
		</g>
	);
};
/** A small violet label chip (source names on bottles). */
export const VChip: React.FC<{x: number; y: number; text: string; at: number; size?: number}> = ({x, y, text, at, size = 26}) => {
	const w = tw(text, size, true) + 28;
	return (
		<Fade at={at}>
			<rect x={x - w / 2} y={y - size * 0.85} width={w} height={size + 14} rx={(size + 14) / 2} fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth={2.5} />
			<Sx x={x} y={y + 4} text={text} size={size} color={VIOLET} hand weight={700} anchor="middle" at={-100} />
		</Fade>
	);
};
/** A drop moving along a short arc from a to b between at and at + dur (then gone). */
export const MovingDrop: React.FC<{a: [number, number]; b: [number, number]; at: number; dur?: number; r?: number; label?: string}> = ({a, b, at, dur = 30, r = 12, label}) => {
	const f = useCurrentFrame();
	if (f < at || f > at + dur + 6) return null;
	const u = smooth(clamp01((f - at) / dur));
	const x = lerp(a[0], b[0], u), y = lerp(a[1], b[1], u) - Math.sin(u * Math.PI) * 60;
	return (
		<g opacity={1 - prog(f, at + dur, 6)}>
			<Drop x={x} y={y} r={r} />
			{label ? <Sx x={x + r + 10} y={y - r} text={label} size={28} color={AMBER_INK} hand weight={700} at={-100} /> : null}
		</g>
	);
};
/** A coded spreader (bent glass rod, top view) sweeping an arc over a dish from at. */
export const SpreaderArc: React.FC<{x: number; y: number; r: number; at: number; dur?: number}> = ({x, y, r, at, dur = 40}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const u = smooth(clamp01((f - at) / dur));
	const ang = lerp(-60, 240, u) * Math.PI / 180;
	const o = 1 - prog(f, at + dur + 6, 10);
	const hx = x + Math.cos(ang) * r * 0.3, hy = y + Math.sin(ang) * r * 0.3;
	const px = -Math.sin(ang), py = Math.cos(ang);
	const L = r * 0.55;
	return (
		<g opacity={o}>
			<path d={`M${x},${y} m${-r * 0.45},0 a${r * 0.45},${r * 0.45} 0 1 1 0,0.1`} fill="none" stroke="rgba(120,160,190,0.35)" strokeWidth={10} strokeDasharray={`${u * r * 2.8} 9999`} />
			<line x1={hx - px * L / 2} y1={hy - py * L / 2} x2={hx + px * L / 2} y2={hy + py * L / 2} stroke="#8fb7cf" strokeWidth={7} strokeLinecap="round" />
			<line x1={hx} y1={hy} x2={hx + Math.cos(ang) * r * 0.9} y2={hy + Math.sin(ang) * r * 0.9} stroke="#8fb7cf" strokeWidth={6} strokeLinecap="round" />
		</g>
	);
};
/** The incubation temperature band: a scale 20 to 40 °C, the 25 to 30 band green, a needle at 28 and a 37 mark. */
export const TempBand: React.FC<{x: number; y: number; w: number; at: number; o?: number; mark37?: number}> = ({x, y, w, at, o = 1, mark37 = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const tx = (t: number) => x + ((t - 20) / 20) * w;
	return (
		<g opacity={p}>
			<rect x={x} y={y - 14} width={w} height={28} rx={14} fill="#f3f2ee" stroke={EDGE} strokeWidth={2} />
			<rect x={tx(25)} y={y - 14} width={tx(30) - tx(25)} height={28} fill={GREEN_SOFT} stroke={GREEN} strokeWidth={3} />
			{[20, 25, 30, 35, 40].map(t => <Sx key={t} x={tx(t)} y={y + 50} text={`${t}`} size={22} color={GREY_INK} weight={600} anchor="middle" at={-100} />)}
			<Sx x={(tx(25) + tx(30)) / 2} y={y - 26} text="25 to 30 °C" size={30} color={GREEN} hand weight={700} anchor="middle" at={-100} />
			<path d={`M${tx(28)},${y + 16} l-10,18 l20,0 Z`} fill={INK} />
			<Sx x={tx(28)} y={y + 82} text="28 °C" size={26} color={INK} weight={700} anchor="middle" at={-100} />
			{mark37 > 0.01 ? <g opacity={mark37}><line x1={tx(37)} x2={tx(37)} y1={y - 22} y2={y + 22} stroke={TERRA} strokeWidth={5} /></g> : null}
		</g>
	);
};
/** Side view of an inverted plate: agar on top, lid underneath, condensation drops on the lid staying off the agar. */
export const InvertedSide: React.FC<{x: number; y: number; w: number; at: number; dropsAt: number; o?: number}> = ({x, y, w, at, dropsAt, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const h = w * 0.18;
	return (
		<g opacity={p}>
			<rect x={x - w / 2} y={y - h} width={w} height={h * 0.7} rx={4} fill="rgba(220,230,236,0.5)" stroke="#8fa2ad" strokeWidth={3} />
			<rect x={x - w / 2 + 6} y={y - h + 6} width={w - 12} height={h * 0.45} fill="#e9dcb0" stroke="#c9b67a" strokeWidth={2} />
			<Sx x={x + w / 2 + 14} y={y - h * 0.45} text="agar (base, on top)" size={22} color={GREY_INK} weight={600} at={-100} />
			<rect x={x - w / 2 - 8} y={y + 6} width={w + 16} height={h * 0.45} rx={4} fill="rgba(220,230,236,0.35)" stroke="#8fa2ad" strokeWidth={3} />
			<Sx x={x + w / 2 + 14} y={y + h * 0.4} text="lid (underneath)" size={22} color={GREY_INK} weight={600} at={-100} />
			{Array.from({length: 7}, (_, i) => {
				const q = prog(f, dropsAt + i * 5, 10);
				return q > 0.01 ? <ellipse key={i} cx={x - w / 2 + 20 + i * ((w - 40) / 6)} cy={y + 12} rx={5} ry={6 * q} fill="#9cc6e4" stroke="#4f86b8" strokeWidth={1.2} opacity={q} /> : null;
			})}
		</g>
	);
};
/** A green-outlined card row. */
export const RowBox: React.FC<{x: number; y: number; w: number; h: number; at: number; color?: string; fill?: string; dim?: number}> = ({x, y, w, h, at, color = GREEN, fill = '#fffdf8', dim = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const d = clamp01(dim) > 0.5;
	return <rect x={x} y={y} width={w} height={h} rx={20} fill={fill} stroke={d ? GREYT : color} strokeWidth={d ? 2 : 3.5} opacity={o} />;
};
export const useF = () => useCurrentFrame();
void AMBER; void CountGrid; void CrossChip; void PenLink; void Arrow; void ScribbleX; void WText; void ctagH; void crossChipW; void pbPt; void plH; void rng; void vis; void wrapT;
void TEAL; void TEAL_SOFT; void TERRA_SOFT; void AMBER_SOFT; void GTag; void CTag; void Bench; void Pl; void fitW; void pulse; void Drift; void FEAT; void PLATES;
