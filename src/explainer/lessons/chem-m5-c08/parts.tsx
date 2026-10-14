// Drawing parts for the C8 lesson: the hot tube with 0.05 mol/L dots, the log number line with fixed K marker and
// sliding Q marker, lit equation arrows, live rate bars, stopwatch and the painted pressure vessel.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, Plate, prog} from '../../kit';
import {slotXY} from '../chem-m5-c04b/parts';
import {tubeColour} from '../chem-m5-c04b/common';
import {Arrow, Bracket, Chip, Cross, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, SvgText, Tag, TEAL, Tick, TubeScale, eqLayout, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {RateBars} from '../chem-m5-c05/parts';
import {GLASS, H2C, H2_INK, HIC, HI_INK, I2C, QINK} from './common';
import {HAVE8, VESSEL} from './assets';

export {Arrow, Bracket, Chip, Cross, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, SvgText, Tag, TEAL, Tick, TubeScale, eqLayout, tw};
export type {EqItem, Term};

export const BLUE = '#1f6fb2';

// ---------- board geometry (the same zones every time) ----------
export const EQ8 = {x: 96, y: 250, s: 46};
export const CARD8 = {x: 96, y: 300, w: 560, lh: 48};
export const cardH = (lines: number) => 108 + (lines - 1) * CARD8.lh + 26;
/** Baseline y of card line i. */
export const cardY = (i: number) => CARD8.y + 108 + i * CARD8.lh;
export const TUBE8 = {x: 96, y: 706, w: 230, h: 236};
export const GHOST8 = {x: 370, y: 706, w: 230, h: 236};
export const KEY8 = {x: 96, y: 622};

// ---------- lit equation arrows (drawn over the EqStrip arrows) ----------
export const LitArrows: React.FC<{items: EqItem[]; x?: number; y?: number; size?: number; fwd?: number; rev?: number; fwdOut?: number; revOut?: number; pulse?: boolean}> = ({items, x = EQ8.x, y = EQ8.y, size = EQ8.s, fwd, rev, fwdOut, revOut, pulse = true}) => {
	const f = useCurrentFrame();
	const p = eqLayout(items, size, x).pos.find(q => q.k === 'arrow');
	if (!p) return null;
	const o = (at?: number, out?: number) => (at === undefined ? 0 : prog(f, at, 10) * (out === undefined ? 1 : 1 - prog(f, out, 10)));
	const pu = (at?: number) => (at === undefined || !pulse || f < at ? 0 : Math.max(0, Math.sin(Math.min(1, (f - at) / 40) * Math.PI)));
	const yt = y - size * 0.4, yb = y - size * 0.12;
	return (
		<g>
			<g opacity={o(fwd, fwdOut)}>
				<path d={`M${p.cx},${yt} L${p.cx + p.w},${yt} M${p.cx + p.w - 14},${yt - 11} L${p.cx + p.w},${yt} L${p.cx + p.w - 14},${yt + 11}`} fill="none" stroke={BLUE} strokeWidth={8 + 5 * pu(fwd)} strokeLinecap="round" strokeLinejoin="round" />
			</g>
			<g opacity={o(rev, revOut)}>
				<path d={`M${p.cx + p.w},${yb} L${p.cx},${yb} M${p.cx + 14},${yb - 11} L${p.cx},${yb} L${p.cx + 14},${yb + 11}`} fill="none" stroke={AMBER} strokeWidth={8 + 5 * pu(rev)} strokeLinecap="round" strokeLinejoin="round" />
			</g>
		</g>
	);
};

// ---------- tube with changing counts ----------
export type Kind = {c: string; ink: string; r: number};
export const HI_KINDS: Kind[] = [{c: H2C, ink: H2_INK, r: 7.5}, {c: I2C, ink: INK, r: 9.5}, {c: HIC, ink: HI_INK, r: 8}];
export const cst = (...n: number[]) => () => n;
export const Tube: React.FC<{x: number; y: number; w: number; h: number; counts: (f: number) => number[]; kinds?: Kind[]; seed?: number; reveal?: number; ghost?: boolean; agit?: (f: number) => number; tint?: boolean}> = ({x, y, w, h, counts, kinds = HI_KINDS, seed = 7, reveal = 1, ghost = false, agit, tint = true}) => {
	const f = useCurrentFrame();
	if (reveal <= 0.01) return null;
	const c = counts(f).map(Math.round);
	const cx = x + w / 2, cy = y + h / 2;
	const ax = w / 2 - 28, ay = h / 2 - 30;
	const amp = agit ? agit(f) : 0;
	const age = (t: number, k: number) => {
		for (let j = 1; j <= 9; j++) if (Math.round(counts(f - j)[t]) <= k) return j - 1;
		return 99;
	};
	const rx = 46;
	const fill = tint ? tubeColour(c[1] ?? 0) : '#ffffff';
	return (
		<g opacity={reveal * (ghost ? 0.62 : 1)}>
			<rect x={x} y={y} width={w} height={h} rx={rx} fill={GLASS} fillOpacity={0.55} />
			<rect x={x + 5} y={y + 5} width={w - 10} height={h - 10} rx={rx - 5} fill={fill} fillOpacity={0.5} />
			<rect x={x} y={y} width={w} height={h} rx={rx} fill="none" stroke={INK} strokeWidth={ghost ? 3.5 : 5} strokeDasharray={ghost ? '12 8' : undefined} />
			<path d={`M${x + 18},${y + 40} L${x + 18},${y + h - 40}`} stroke="#fff" strokeOpacity={0.7} strokeWidth={6} strokeLinecap="round" />
			{kinds.map((kd, t) => Array.from({length: c[t] ?? 0}, (_, k) => {
				const p = slotXY(seed + (ghost ? 3 : 0), t, k, f, cx, cy, ax, ay);
				const s = 0.45 + 0.55 * Math.min(1, age(t, k) / 8);
				const jx = amp * Math.sin(f * 1.7 + k * 2.1 + t), jy = amp * Math.cos(f * 1.9 + k * 1.3 + t);
				return <circle key={`${t}-${k}`} cx={p.x + jx} cy={p.y + jy} r={kd.r * s} fill={kd.c} stroke={kd.ink} strokeWidth={2.3} />;
			}))}
		</g>
	);
};

// ---------- log number line ----------
export type Ln = {y: number; x0: number; x1: number; lo: number; hi: number};
export const LN: Ln = {y: 320, x0: 830, x1: 1750, lo: -1, hi: 3};
export const LN_NH3: Ln = {y: 790, x0: 830, x1: 1750, lo: -1, hi: 1};
export const lx = (v: number, ln: Ln = LN) => ln.x0 + ((Math.log10(v) - ln.lo) * (ln.x1 - ln.x0)) / (ln.hi - ln.lo);
const tickLabel = (e: number) => (e < 0 ? '0.' + '0'.repeat(-e - 1) + '1' : String(10 ** e));
export const LogLine: React.FC<{ln?: Ln; at: number; out?: number; tickAt?: number[]; size?: number; labels?: boolean}> = ({ln = LN, at, out, tickAt, size = 30, labels = true}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (f < at - 2 || o <= 0.01) return null;
	const es = Array.from({length: ln.hi - ln.lo + 1}, (_, i) => ln.lo + i);
	return (
		<g opacity={o}>
			<DrawPath d={`M${ln.x0 - 30},${ln.y} L${ln.x1 + 30},${ln.y}`} at={at} dur={30} width={6} />
			{es.map((e, i) => {
				const ta = tickAt ? tickAt[i] : at + 14;
				const p = prog(f, ta, 10);
				const x = lx(10 ** e, ln);
				return (
					<g key={e} opacity={p}>
						<path d={`M${x},${ln.y - 13} L${x},${ln.y + 13}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
						{labels ? <Sx x={x} y={ln.y + 56} text={tickLabel(e)} size={size} color={INK_SOFT} anchor="middle" at={-100} /> : null}
					</g>
				);
			})}
		</g>
	);
};

/** Fixed K marker: a teal pin above the line with its label. */
export const KMarker: React.FC<{k: number; at: number; ln?: Ln; label?: string; out?: number; ring?: number; ringOut?: number; size?: number}> = ({k, at, ln = LN, label, out, ring, ringOut, size = 46}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const o = p * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	const x = lx(k, ln), y = ln.y;
	const dy = -(1 - p) * 70;
	const text = label ?? `K = ${k}`;
	const pu = ring !== undefined && f >= ring ? 1 + 0.18 * Math.max(0, Math.sin(Math.min(1, (f - ring) / 30) * Math.PI)) : 1;
	return (
		<g opacity={o}>
			<g transform={`translate(${x},${y + dy}) scale(${pu})`}>
				<path d="M0,-6 L-18,-38 Q0,-54 18,-38 Z" fill={TEAL} stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
			</g>
			<text x={x} y={y - 66 + dy} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * pu}}>{text}</text>
			{ring !== undefined ? <Ring cx={x} cy={y - 40} rx={Math.max(60, tw(text, size, true) / 2 + 24)} ry={50} at={ring} out={ringOut} color={AMBER} seed={11} width={5} /> : null}
		</g>
	);
};

type NumFn = number | ((f: number) => number);
type Side = 'left' | 'right' | 'mid';
const val = (v: NumFn, f: number) => (typeof v === 'function' ? v(f) : v);
/** Q marker: an ink diamond hanging below the line. `value` is Q (log position) or `px` an explicit x. */
export const QMarker: React.FC<{ln?: Ln; at: number; out?: number; value?: NumFn; px?: NumFn; label?: string | ((f: number) => string); side?: Side | ((f: number) => Side); color?: string; labelAt?: number; size?: number; ghost?: boolean; labelDy?: number}> = ({ln = LN, at, out, value, px, label, side = 'left', color = QINK, labelAt, size = 46, ghost = false, labelDy = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const o = p * (out === undefined ? 1 : 1 - prog(f, out, 10)) * (ghost ? 0.6 : 1);
	if (o <= 0.01) return null;
	const x = px !== undefined ? val(px, f) : lx(val(value ?? 1, f), ln);
	const y = ln.y + 84 - (1 - p) * 90;
	const text = typeof label === 'function' ? label(f) : label;
	const la = labelAt === undefined ? 1 : prog(f, labelAt, 10);
	const sd = typeof side === 'function' ? side(f) : side;
	const anchor = sd === 'left' ? 'end' : sd === 'right' ? 'start' : 'middle';
	const tx = sd === 'left' ? x + 30 : sd === 'right' ? x - 30 : x;
	return (
		<g opacity={o}>
			<path d={`M${x},${ln.y + 6} L${x},${y - 20}`} stroke={color} strokeWidth={4} strokeDasharray={ghost ? '6 6' : undefined} />
			<path d={`M${x},${y - 20} L${x + 19},${y} L${x},${y + 20} L${x - 19},${y} Z`} fill={ghost ? '#fffdf8' : color} stroke={color} strokeWidth={4} strokeLinejoin="round" />
			{text ? <text x={tx} y={ln.y + 150 + labelDy} textAnchor={anchor} fill={color} opacity={la} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}}>{text}</text> : null}
		</g>
	);
};

/** The gap between the Q and K markers, with a < > = sign. */
export const QKGap: React.FC<{ln?: Ln; at: number; out?: number; qx: NumFn; kx: number; sign?: string; signAt?: number; signColor?: string; signOut?: number}> = ({ln = LN, at, out, qx, kx, sign, signAt, signColor = INK, signOut}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	const q = val(qx, f);
	const y = ln.y + 84;
	const dir = kx > q ? 1 : -1;
	const sg = signAt === undefined ? 0 : prog(f, signAt, 10) * (signOut === undefined ? 1 : 1 - prog(f, signOut, 10));
	if (Math.abs(kx - q) < 70) return null;
	return (
		<g opacity={o}>
			<path d={`M${q + dir * 28},${y} L${kx},${y} L${kx},${ln.y + 14}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
			{sign ? <text x={(q + kx) / 2} y={y + 72} textAnchor="middle" fill={signColor} opacity={sg} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84}}>{sign}</text> : null}
		</g>
	);
};

/** Broken-axis end (zigzag plus a short stub) for the "Q = 0" and "off the scale" ends. */
export const BrokenEnd: React.FC<{ln?: Ln; side: 'left' | 'right'; at: number}> = ({ln = LN, side, at}) => {
	const x = side === 'left' ? ln.x0 - 52 : ln.x1 + 40;
	const s = side === 'left' ? -1 : 1;
	const y = ln.y;
	return (
		<Fade at={at}>
			<path d={`M${x - 10},${y - 22} L${x + 4},${y - 6} L${x - 8},${y + 8} L${x + 6},${y + 24}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
			<path d={`M${x + 6 * s},${y} L${x + 70 * s},${y}`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
		</Fade>
	);
};

// ---------- rate bars (made-up scale) ----------
export const BARS8 = {x0: 770, base: 900, bw: 110, gx: 210};
export const Bars8: React.FC<{fwd: number; rev: number; scale: number; at: number; eqAt?: number; unlabelled?: boolean; x0?: number; bw?: number; gx?: number; titles?: boolean}> = ({fwd, rev, scale, at, eqAt, unlabelled = true, x0 = BARS8.x0, bw = BARS8.bw, gx = BARS8.gx, titles = true}) => (
	<RateBars x0={x0} base={BARS8.base} scale={scale} fwd={fwd} rev={rev} at={at} eqAt={eqAt} bw={bw} gx={gx} axisLabel={null} unlabelled={unlabelled} titles={titles} maxH={330} />
);
/** Two empty dashed bars with a question mark over each. */
export const EmptyBars: React.FC<{at: number; out?: number; x0?: number; bw?: number; gx?: number; h?: number}> = ({at, out, x0 = BARS8.x0, bw = BARS8.bw, gx = BARS8.gx, h = 170}) => (
	<Fade at={at} out={out}>
		<path d={`M${x0 - 36},${BARS8.base} L${x0 + gx + bw + 36},${BARS8.base}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
		<rect x={x0} y={BARS8.base - h} width={bw} height={h} rx={6} fill="none" stroke={BLUE} strokeWidth={4} strokeDasharray="10 8" />
		<rect x={x0 + gx} y={BARS8.base - h} width={bw} height={h} rx={6} fill="none" stroke={AMBER} strokeWidth={4} strokeDasharray="10 8" />
		<Sx x={x0 + bw / 2} y={BARS8.base - h / 2 + 24} text="?" size={86} color={BLUE} anchor="middle" hand at={at + 4} />
		<Sx x={x0 + gx + bw / 2} y={BARS8.base - h / 2 + 24} text="?" size={86} color={AMBER_INK} anchor="middle" hand at={at + 8} />
		<Sx x={x0 + bw / 2} y={BARS8.base + 46} text="forward" size={44} color={BLUE} anchor="middle" hand at={at + 4} />
		<Sx x={x0 + gx + bw / 2} y={BARS8.base + 46} text="reverse" size={44} color={AMBER_INK} anchor="middle" hand at={at + 8} />
	</Fade>
);

// ---------- stopwatch ----------
export const Stopwatch: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; freeze?: number}> = ({cx, cy, r, at, out, freeze}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	const tremble = freeze !== undefined && f >= freeze ? 0 : Math.sin(f * 0.9) * 3;
	return (
		<g opacity={o}>
			<rect x={cx - 14} y={cy - r - 36} width={28} height={22} rx={6} fill={INK_SOFT} stroke={INK} strokeWidth={4} />
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK} strokeWidth={6} />
			{Array.from({length: 12}, (_, i) => {
				const a = (i / 12) * Math.PI * 2;
				return <path key={i} d={`M${cx + (r - 8) * Math.sin(a)},${cy - (r - 8) * Math.cos(a)} L${cx + (r - 22) * Math.sin(a)},${cy - (r - 22) * Math.cos(a)}`} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />;
			})}
			<path d={`M${cx},${cy} L${cx + tremble},${cy - (r - 28)}`} stroke={AMBER_INK} strokeWidth={7} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={9} fill={INK} />
			<text x={cx} y={cy + r * 0.55} textAnchor="middle" fill={INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 0.34}}>0.0 s</text>
		</g>
	);
};

// ---------- painted pressure vessel (HTML: place after the Overlay) ----------
const V_NAT: [number, number] = [1280, 1920];
const V_BOX: [number, number, number, number] = [357, 362, 566, 1189];
export const vesselW = (h: number) => (V_BOX[2] / V_BOX[3]) * h;
export const Vessel: React.FC<{x: number; y: number; h: number; at: number}> = ({x, y, h, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16);
	if (o <= 0.01) return null;
	const w = vesselW(h);
	if (HAVE8.has(VESSEL)) {
		return (
			<div style={{position: 'absolute', left: x, top: y + (1 - o) * 24, width: w, height: h, opacity: o}}>
				<Plate src={VESSEL} natural={V_NAT} crop={V_BOX} width={w} style={{left: 0, top: 0}} />
			</div>
		);
	}
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, opacity: o, overflow: 'visible'}}>
			<rect x={w * 0.1} y={h * 0.3} width={w * 0.8} height={h * 0.62} rx={24} fill="#c9ccd2" stroke={INK} strokeWidth={5} />
			<circle cx={w / 2} cy={h * 0.18} r={w * 0.22} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			<path d={`M${w / 2},${h * 0.18} L${w / 2 + w * 0.14},${h * 0.1}`} stroke={AMBER_INK} strokeWidth={5} />
		</svg>
	);
};
void SvgText; void Bracket; void Arrow; void Chip; void Cross; void EqStrip; void FracX; void GivensCard; void Overlay; void Tag; void Tick; void TubeScale; void tw; void DrawPath;
