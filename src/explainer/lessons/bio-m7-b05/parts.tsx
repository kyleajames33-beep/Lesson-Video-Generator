// M7 B05 drawing parts: the defence ladder (three rungs that draw, label and light), the race strip day line (ticks
// at day 0, 1, 3, 5 and 9 only; no values between them), swimming spores homing on a root (SwimPath), a soft
// signal pulse travelling a stem (SignalPulse), a soil band with specks, the root inset bar (young thin walls to older
// toughened walls), and the banksia pair (side by side until the aligned retake arrives; see assets.ts). B04 (M7)
// parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, ClockMark, CrossChip, DROP, DrawPath, EDGE, GREEN, GREYT, GREY_INK, GTag, Glow, GrowBar, INK, INK_SOFT, Pl, PlateB, PlateClip,
	Ring, Sx, TEAL, TERRA, clamp01, ellD, fitW, lerp, plH, prog, ptOf, pulse, rectD, rng, smooth, tw, vis, CardBox, CurveArrow,
} from '../bio-m7-b04/parts';
import type {PB, Pt} from '../bio-m7-b04/parts';
import {BANKSIA_ALIGNED, FEAT, PLATES} from './assets';

export {
	AMBER, AMBER_INK, CARD, CTag, ClockMark, CrossChip, DROP, DrawPath, EDGE, GREEN, GREYT, GREY_INK, GTag, Glow, GrowBar, INK, INK_SOFT, Pl, PlateB, PlateClip,
	Ring, Sx, TEAL, TERRA, clamp01, ellD, fitW, lerp, plH, prog, ptOf, pulse, rectD, rng, smooth, tw, vis, CardBox, CurveArrow, FEAT, PLATES,
};
export type {PB, Pt};
export const TEAL_SOFT = '#d9eef0';

// ---------- the defence ladder ----------
export type Rung = {at: number; label?: string; labelAt?: number; lit?: number};
export const LAD = {x: 1450, y: 230, w: 400, rh: 110, gap: 60};
export const rungY = (i: number, y = LAD.y) => y + LAD.gap + i * (LAD.rh + LAD.gap);
/** Two rails and three rungs; each rung draws grey at `at`, writes its label at `labelAt`, and lights teal by `lit`. */
export const Ladder: React.FC<{rungs: Rung[]; x?: number; y?: number; s?: number; o?: number; railAt?: number}> = ({rungs, x = LAD.x, y = LAD.y, s = 1, o = 1, railAt = -100}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const H = 3 * LAD.rh + 4 * LAD.gap;
	return (
		<g opacity={o * prog(f, railAt, 14)} transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			<line x1={x + 18} x2={x + 18} y1={y} y2={y + H} stroke={GREYT} strokeWidth={6} strokeLinecap="round" />
			<line x1={x + LAD.w - 18} x2={x + LAD.w - 18} y1={y} y2={y + H} stroke={GREYT} strokeWidth={6} strokeLinecap="round" />
			{rungs.map((r, i) => {
				const p = prog(f, r.at, 12);
				if (p <= 0.01) return null;
				const lit = clamp01(r.lit ?? 0);
				const yy = rungY(i, y);
				return (
					<g key={i} opacity={p}>
						<rect x={x} y={yy} width={LAD.w} height={LAD.rh} rx={18} fill={lit > 0.5 ? TEAL_SOFT : '#f3f2ee'} stroke={lit > 0.5 ? TEAL : GREYT} strokeWidth={lit > 0.5 ? 4 : 2.5} />
						{lit > 0.01 ? <rect x={x} y={yy} width={LAD.w} height={LAD.rh} rx={18} fill={TEAL} opacity={0.08 * lit} /> : null}
						{r.label ? <WrapLabel x={x + LAD.w / 2} y={yy + LAD.rh / 2} text={r.label} at={r.labelAt ?? r.at} color={lit > 0.5 ? TEAL : GREY_INK} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A centred hand label that wraps onto two lines when it is wider than the rung. */
const WrapLabel: React.FC<{x: number; y: number; text: string; at: number; color: string}> = ({x, y, text, at, color}) => {
	const size = 32;
	const words = text.split(' ');
	const lines: string[] = [];
	let line = '';
	for (const w of words) {
		const t = line ? line + ' ' + w : w;
		if (tw(t, size, true) > LAD.w - 40 && line) { lines.push(line); line = w; } else line = t;
	}
	if (line) lines.push(line);
	const L = size * 1.15;
	return <g>{lines.map((t, i) => <Sx key={i} x={x} y={y + (i - (lines.length - 1) / 2) * L + size * 0.35} text={t} size={size} color={color} hand weight={700} anchor="middle" at={at} />)}</g>;
};

// ---------- the race strip ----------
export const DAYS = [0, 1, 3, 5, 9];
export const RS = {x0: 480, dx: 120, y: 990};
export const dayX = (d: number) => RS.x0 + d * RS.dx;
/** The day line along the bottom (ticks only at the reported days). */
export const DayLine: React.FC<{at: number; bright?: number; o?: number; y?: number; x0?: number; dx?: number; size?: number}> = ({at, bright = 0, o = 1, y = RS.y, x0 = RS.x0, dx = RS.dx, size = 26}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const b = clamp01(bright);
	const col = b > 0.5 ? INK_SOFT : GREYT;
	const X = (d: number) => x0 + d * dx;
	return (
		<g opacity={o}>
			<DrawPath d={`M${X(0) - 40},${y} L${X(9) + 60},${y}`} at={at} dur={20} color={col} width={4 + 2 * b} />
			{DAYS.map((d, i) => (
				<g key={d} opacity={prog(f, at + 6 + i * 4, 8)}>
					<line x1={X(d)} x2={X(d)} y1={y - 12} y2={y + 12} stroke={col} strokeWidth={4} />
					<Sx x={X(d)} y={y + 44} text={i === 0 ? 'day 0' : `${d}`} size={size} color={b > 0.5 ? INK : GREY_INK} weight={600} anchor="middle" at={-100} />
				</g>
			))}
		</g>
	);
};
export const SEED_H = 260;
export const seedW = () => (PLATES.seedOk.box[2] - PLATES.seedOk.box[0]) * (SEED_H / (PLATES.seedOk.box[3] - PLATES.seedOk.box[1]));
/** One seedling in a row: `held` and `dead` crossfade amounts; `tip` reveals only the collapsed root tip. */
export const Seedling: React.FC<{cx: number; cy: number; o?: number; held?: number; dead?: number; tip?: number; dim?: number; id: string; glow?: number}> = ({cx, cy, o = 1, held = 0, dead = 0, tip = 0, dim = 0, id, glow = 0}) => {
	if (o <= 0.01) return null;
	const w = seedW();
	const d = clamp01(dim);
	const flt = d > 0.01 ? `grayscale(${d})` : undefined;
	return (
		<g opacity={o * (1 - 0.5 * d)}>
			{glow > 0.01 ? <ellipse cx={cx} cy={cy} rx={w * 0.9} ry={SEED_H * 0.6} fill={TEAL} opacity={0.18 * glow} /> : null}
			<PlateB p={PLATES.seedOk} cx={cx} cy={cy} w={w} filter={flt} />
			{tip > 0.01 ? <PlateClip p={PLATES.seedDead} cx={cx} cy={cy} w={w} id={id + '-tip'} clip={rectD(500, FEAT.seedTipY, 1500, 1820)} o={tip} filter={flt} /> : null}
			<PlateB p={PLATES.seedHeld} cx={cx} cy={cy} w={w} o={clamp01(held)} filter={flt} />
			<PlateB p={PLATES.seedDead} cx={cx} cy={cy} w={w} o={clamp01(dead)} filter={flt} />
		</g>
	);
};

// ---------- swimming spores ----------
/** Coded zoospores swimming in from `from` points along wobbly paths to `to` points, then settling there. */
export const SwimPath: React.FC<{from: Pt[]; to: Pt[]; at: number; dur?: number; o?: number; trail?: boolean}> = ({from, to, at, dur = 54, o = 1, trail = true}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			{to.map((b, i) => {
				const a = from[i % from.length];
				const t0 = at + i * 4;
				const u = smooth(clamp01((f - t0) / dur));
				if (f < t0) return null;
				const mx = (a[0] + b[0]) / 2 + (i % 2 ? 40 : -40), my = (a[1] + b[1]) / 2 + (i % 3 ? -30 : 30);
				const x = (1 - u) * (1 - u) * a[0] + 2 * (1 - u) * u * mx + u * u * b[0];
				const y = (1 - u) * (1 - u) * a[1] + 2 * (1 - u) * u * my + u * u * b[1] + Math.sin((f - t0) / 4 + i) * 4 * (1 - u);
				return (
					<g key={i}>
						{trail && u < 1 ? <path d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} fill="none" stroke={AMBER} strokeWidth={2.5} strokeDasharray="3 9" opacity={0.45 * (1 - u)} /> : null}
						<ellipse cx={x} cy={y} rx={9} ry={6.5} fill="#f4e6c4" stroke="#9a7a45" strokeWidth={2} transform={`rotate(${u < 1 ? Math.atan2(b[1] - a[1], b[0] - a[0]) * 57.3 : 0} ${x} ${y})`} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- a signal pulse travelling a path ----------
export const SignalPulse: React.FC<{pts: Pt[]; at: number; dur?: number; ends?: Pt[]; color?: string}> = ({pts, at, dur = 50, ends = [], color = TEAL}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const lens = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
	const total = lens.reduce((s, l) => s + l, 0);
	const u = clamp01((f - at) / dur);
	let dist = u * total, k = 0;
	while (k < lens.length - 1 && dist > lens[k]) { dist -= lens[k]; k++; }
	const t = lens[k] ? clamp01(dist / lens[k]) : 1;
	const x = lerp(pts[k][0], pts[k + 1][0], t), y = lerp(pts[k][1], pts[k + 1][1], t);
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<g>
			<DrawPath d={d} at={at} dur={dur} color={color} width={5} opacity={0.55} />
			{u < 1 ? <g><circle cx={x} cy={y} r={30} fill={color} opacity={0.22} /><circle cx={x} cy={y} r={12} fill={color} opacity={0.8} /></g> : null}
			{ends.map((e, i) => {
				const pu = pulse(f, at + dur + i * 6, 40);
				return u >= 1 ? <g key={i}><DrawPath d={`M${pts[pts.length - 1][0]},${pts[pts.length - 1][1]} L${e[0]},${e[1]}`} at={at + dur} dur={14} color={color} width={4} opacity={0.5} /><circle cx={e[0]} cy={e[1]} r={20 + 26 * pu} fill={color} opacity={0.12 + 0.2 * pu} /></g> : null;
			})}
		</g>
	);
};

// ---------- soil ----------
/** A soil band with amber specks (the pathogen in the soil). */
export const SoilBand: React.FC<{x0: number; x1: number; y0: number; y1: number; at: number; specksAt?: number; o?: number; n?: number}> = ({x0, x1, y0, y1, at, specksAt, o = 1, n = 26}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	const r = rng(5);
	return (
		<g opacity={p}>
			<rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} rx={22} fill="#e3cfae" stroke="#b89b6e" strokeWidth={2.5} />
			{Array.from({length: 40}, (_, i) => <circle key={'g' + i} cx={x0 + 20 + r() * (x1 - x0 - 40)} cy={y0 + 14 + r() * (y1 - y0 - 28)} r={3 + r() * 3} fill="#c3a57a" opacity={0.6} />)}
			{specksAt !== undefined ? Array.from({length: n}, (_, i) => {
				const sx = x0 + 30 + r() * (x1 - x0 - 60), sy = y0 + 18 + r() * (y1 - y0 - 36);
				const sp = prog(f, specksAt + i * 2, 8);
				return sp > 0.01 ? <circle key={'s' + i} cx={sx} cy={sy} r={6} fill={AMBER} stroke="#7a4a10" strokeWidth={1.2} opacity={sp} /> : null;
			}) : null}
		</g>
	);
};

// ---------- the root inset bar ----------
/** A coded root running from a thin-walled young tip (left, pale) to an older toughened part (right, teal). */
export const RootBar: React.FC<{x: number; y: number; w: number; h?: number; at: number; o?: number; lignin?: number}> = ({x, y, w, h = 44, at, o = 1, lignin = -1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	const L = lignin < 0 ? 0 : prog(f, lignin, 18);
	return (
		<g opacity={p}>
			<defs>
				<linearGradient id="b05-rootbar" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stopColor="#fbf6ea" />
					<stop offset="0.45" stopColor="#efe4c8" />
					<stop offset="1" stopColor="#9fc9c4" />
				</linearGradient>
			</defs>
			<path d={`M${x + h / 2},${y} L${x + w},${y} L${x + w},${y + h} L${x + h / 2},${y + h} A${h / 2},${h / 2} 0 0 1 ${x + h / 2},${y} Z`} fill="url(#b05-rootbar)" stroke="#b9a77d" strokeWidth={2.5} />
			{L > 0.01 ? <DrawPath d={`M${x + w * 0.62},${y + 2} L${x + w},${y + 2} M${x + w * 0.62},${y + h - 2} L${x + w},${y + h - 2}`} at={lignin} dur={18} color={TEAL} width={9} /> : null}
		</g>
	);
};

// ---------- the banksia pair ----------
/**
 * The hook's healthy and dying banksias. Fallback (BANKSIA_ALIGNED false): the dying plate fades in as its own plate
 * beside the healthy one, never overlapping it. Target (true, after the aligned retake): a second healthy copy stands
 * at `rx` from `copyAt` and crossfades in place into the dying plate.
 */
export const BanksiaPair: React.FC<{lx: number; rx: number; cy: number; w: number; okAt: number; sickT: number; o?: number}> = ({lx, rx, cy, w, okAt, sickT, o = 1}) => {
	const f = useCurrentFrame();
	const okO = prog(f, okAt, 16) * o;
	const t = clamp01(sickT);
	const k = w / (PLATES.banksiaOk.box[2] - PLATES.banksiaOk.box[0]);
	const ws = (PLATES.banksiaSick.box[2] - PLATES.banksiaSick.box[0]) * k;
	return (
		<g>
			<Pl p={PLATES.banksiaOk} cx={lx} cy={cy} w={w} o={okO} />
			{BANKSIA_ALIGNED ? <Pl p={PLATES.banksiaOk} cx={rx} cy={cy} w={w} o={okO * (t < 1 ? 1 : 0)} /> : null}
			<Pl p={PLATES.banksiaSick} cx={rx} cy={cy} w={ws} o={t * o} />
		</g>
	);
};
export const useF = () => useCurrentFrame();
void CARD; void EDGE; void INK; void GREEN; void Glow; void GrowBar; void ClockMark; void CrossChip; void CTag; void GTag; void Ring; void DROP; void TERRA; void ellD; void fitW; void plH; void ptOf; void vis; void CardBox; void CurveArrow; void AMBER_INK;
