// G03c/G03d shared practice board: task line, type badge, the trap checklist (full list and bottom strip),
// question cards, painted vessels with coded particles, the pause hold, working lines and the decision board.
// Reuses the C5 builder text (Sx), C6 parts, the G03a carbon vessel and the shared countdown.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, INK, INK_SOFT, PAPER, prog} from '../../kit';
import {slotXY} from '../chem-m5-c04b/parts';
import {Fade, Ring, Sx, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import {CROSS, MINUS, PLUS} from '../chem-m5-c06/common';
import {CarbonVessel} from '../chem-m5-g03a/board';
import {CARBON, CO2K, COK, H2K, NO2K, SO2K, SO3K} from '../chem-m5-g03a/tokens';
import {NO2_BROWN, NO2_COLOURLESS, THERMO, VESSEL} from './assets';

export {CARBON, CO2K, COK, H2K, NO2K, SO2K, SO3K, MINUS, PLUS, CROSS, TEAL};
// G03c/G03d species colours (one visual system with C6 and G03a)
export const FEOK = CARBON, FEK = '#5b626b', MEOHK = '#2b6f8f';
export const NOCLK = '#b07412', NOCL_FILL = '#e8b13a', NOK = '#9a6a3c', CL2K = '#5f8f2f', CL2_FILL = '#b9d36a';
export const NO2BK = NO2K;
export const GLOW = '#f6d77a';

// ---------- task line: hand-written, writes on left to right (SVG, so subscripts work) ----------
export const TaskLine: React.FC<{text: string; at: number; size?: number; x?: number; y?: number; color?: string; out?: number}> = ({text, at, size = 58, x = 96, y = 150, color = INK, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, Math.max(12, Math.round(text.length * 0.9)));
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -5%)`}}>
			<Sx x={x} y={y} text={text} size={size} color={color} hand at={-1000} />
		</g>
	);
};
/** Pen ring round a hand-written line (x, baseline y). */
export const RingLine: React.FC<{x: number; y: number; text: string; size: number; at: number; out?: number; hand?: boolean; seed?: number}> = ({x, y, text, size, at, out, hand = true, seed = 3}) => {
	const w = tw(text, size, hand);
	return <Ring cx={x + w / 2} cy={y - size * 0.3} rx={w / 2 + 22} ry={size * 0.62} at={at} out={out} color={AMBER} seed={seed} width={5} />;
};

/** Teal type badge, right-aligned under the HSC tag. */
export const TypeBadge: React.FC<{text: string; at: number; right?: number; y?: number}> = ({text, at, right = 1824, y = 168}) => {
	const w = tw(text, 30, true) + 48;
	const x = right - w;
	return (
		<Fade at={at}>
			<rect x={x} y={y} width={w} height={50} rx={25} fill={TEAL} />
			<Sx x={x + w / 2} y={y + 35} text={text} size={30} color="#fffdf8" anchor="middle" hand at={at} />
		</Fade>
	);
};

// ---------- trap checklist ----------
const TRAP_Y = 1004;
const pillW = (label: string) => tw(label, 26, true) + 62;
/** Bottom strip of the trap checklist. `ticks[i]` lists the frames at which row i gains a tick mark. Dims in a hold. */
export const TrapStrip: React.FC<{labels: string[]; ticks?: Record<number, number[]>; at?: number; out?: number; hold?: {startFrame: number; endFrame: number}}> = ({labels, ticks = {}, at = -100, out, hold}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * (1 - 0.78 * dim);
	if (o <= 0.01) return null;
	const rise = (1 - prog(f, at, 20)) * 40;
	let x = 96;
	return (
		<g opacity={o} transform={`translate(0,${rise})`}>
			<Sx x={x} y={TRAP_Y + 34} text="traps:" size={28} color={INK_SOFT} hand at={-1000} />
			{labels.map((l, i) => {
				const px = (x === 96 ? (x = 186) : x);
				const w = pillW(l);
				x = px + w + 14;
				const ts = (ticks[i] ?? []).filter(t => t <= f);
				const on = ts.length > 0;
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i}>
						<rect x={px} y={TRAP_Y} width={w} height={48} rx={24} fill={flash > 0.01 ? GLOW : '#fffdf8'} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : 1} stroke={on ? TEAL : 'rgba(60,45,20,0.22)'} strokeWidth={on ? 3 : 2.5} />
						<rect x={px + 14} y={TRAP_Y + 12} width={24} height={24} rx={5} fill="#fffdf8" stroke={on ? TEAL : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 2).map((t, k) => <DrawPath key={k} d={`M${px + 14 + k * 9},${TRAP_Y + 24} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 48} y={TRAP_Y + 33} text={l} size={26} color={on ? TEAL : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** The full trap checklist (hook): one row per trap, each written on its cue; it shrinks into the bottom strip at `shrink`. */
export const TrapList: React.FC<{rows: {text: string; at: number}[]; x?: number; y?: number; lh?: number; size?: number; shrink: number; title?: string; titleAt?: number}> = ({rows, x = 96, y = 300, lh = 90, size = 42, shrink, title = 'Where the traps are', titleAt}) => {
	const f = useCurrentFrame();
	const s = prog(f, shrink, 22);
	if (s >= 1) return null;
	const sc = 1 - 0.55 * s;
	return (
		<g opacity={1 - s} transform={`translate(${x},${y + s * 600}) scale(${sc}) translate(${-x},${-y})`}>
			{titleAt !== undefined ? <Sx x={x} y={y - 40} text={title} size={36} color={INK_SOFT} hand at={titleAt} /> : null}
			{rows.map((r, i) => (
				<Fade key={i} at={r.at}>
					<rect x={x} y={y + i * lh} width={44} height={44} rx={8} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					<Sx x={x + 70} y={y + i * lh + 36} text={r.text} size={size} hand at={r.at} />
				</Fade>
			))}
		</g>
	);
};

// ---------- question cards (hooks) ----------
export const QCard: React.FC<{x: number; y: number; w?: number; h?: number; rot?: number; label: string; at: number; faint?: boolean; tabs?: string[]; sub?: string}> = ({x, y, w = 330, h = 230, rot = 0, label, at, faint = false, tabs, sub}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 20);
	if (p <= 0.01) return null;
	const dx = (1 - p) * 160;
	return (
		<g opacity={p * (faint ? 0.45 : 1)} transform={`translate(${x + dx + w / 2},${y + h / 2}) rotate(${rot * p}) translate(${-w / 2},${-h / 2})`}>
			{tabs ? tabs.map((t, i) => (
				<g key={t}>
					<rect x={w - 14} y={30 + i * 64} width={62} height={54} rx={12} fill="#e5f2ec" stroke={TEAL} strokeWidth={2.5} />
					<Sx x={w + 24} y={66 + i * 64} text={t} size={32} color={TEAL} anchor="middle" hand at={-1000} />
				</g>
			)) : null}
			<rect x={0} y={0} width={w} height={h} rx={20} fill="#fffdf8" stroke={faint ? INK_SOFT : 'rgba(60,45,20,0.25)'} strokeWidth={3} strokeDasharray={faint ? '9 7' : undefined} />
			<Sx x={26} y={58} text={label} size={44} color={faint ? INK_SOFT : INK} hand at={-1000} />
			{faint ? null : [0, 1, 2].map(k => <path key={k} d={`M26,${96 + k * 26} L${w - 40 - k * 50},${96 + k * 26}`} stroke={PAPER} strokeWidth={9} strokeLinecap="round" />)}
			{faint ? null : [0, 1, 2].map(k => <path key={'i' + k} d={`M26,${96 + k * 26} L${w - 40 - k * 50},${96 + k * 26}`} stroke="rgba(60,45,20,0.16)" strokeWidth={5} strokeLinecap="round" />)}
			{sub ? <Sx x={26} y={h - 56} text={sub} size={22} color={INK_SOFT} hand at={-1000} /> : null}
			{faint ? null : (
				<>
					<Sx x={26} y={h - 50} text="HSC-style question," size={24} color={INK_SOFT} hand at={-1000} />
					<Sx x={26} y={h - 22} text="written for HSCScience" size={24} color={INK_SOFT} hand at={-1000} />
				</>
			)}
		</g>
	);
};

// ---------- pause hold ----------
export const PauseHold: React.FC<{h: {startFrame: number; endFrame: number}; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({h, at, x = 720, y = 790, cx = 1250, cy = 850}) => (
	<>
		<Sx x={x} y={y} text="Pause here to answer." size={56} color={AMBER_INK} hand at={at} />
		<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={64} />
	</>
);

// ---------- Q1 vessel: the painted sealed vessel; its dark lump is the FeO, iron flecks form on it ----------
const CVB = {bx: 347, by: 341, bh: 1643, lump: [813, 1512, 210, 160] as const};
export const FeVessel: React.FC<{x: number; y: number; h: number; at: number; counts: (f: number) => [number, number]; grey?: number; flecks?: number; label?: string; labelAt?: number}> = ({x, y, h, at, counts, grey = 0, flecks, label, labelAt}) => {
	const f = useCurrentFrame();
	const s = h / CVB.bh;
	const X = (u: number) => x + (u - CVB.bx) * s, Y = (v: number) => y + (v - CVB.by) * s;
	const [lx, ly, lw, lh] = CVB.lump;
	const pts = [[-0.5, -0.2], [-0.2, -0.55], [0.15, -0.35], [0.45, -0.1], [-0.35, 0.15], [0.05, 0.05], [0.3, 0.3], [-0.05, -0.75], [0.6, -0.45]];
	return (
		<g>
			<CarbonVessel x={x} y={y} h={h} at={at} grey={grey} counts={counts} />
			{flecks !== undefined ? pts.map(([u, v], i) => {
				const p = prog(f, flecks + i * 4, 10);
				return p > 0.01 ? <circle key={i} cx={X(lx + u * lw * 0.85)} cy={Y(ly + v * lh * 0.7)} r={(5 + (i % 3) * 2) * p} fill="#b9bec4" stroke={INK} strokeWidth={1.6} /> : null;
			}) : null}
			{label ? <Sx x={X(lx)} y={Y(1984) + 40} text={label} size={30} color={FEOK} anchor="middle" hand at={labelAt ?? at} /> : null}
		</g>
	);
};
export const feVesselW = (h: number) => (941 / CVB.bh) * h;

// ---------- Q2 vessel: the painted steel pressure vessel (SVG image) ----------
const SV = {nat: [1280, 1920], box: [357, 362, 566, 1189]};
export const SteelVessel: React.FC<{x: number; y: number; h: number; at: number; out?: number}> = ({x, y, h, at, out}) => {
	const k = h / SV.box[3];
	return (
		<Fade at={at} out={out} dur={16}>
			<image href={staticFile(VESSEL)} x={x - SV.box[0] * k} y={y - SV.box[1] * k} width={SV.nat[0] * k} height={SV.nat[1] * k} />
		</Fade>
	);
};
export const steelW = (h: number) => (SV.box[2] / SV.box[3]) * h;

// ---------- Q3/Q4 flask: the painted round flask pair (colourless, brown) with a coded tint and particles ----------
const FB = {nat: [1280, 1920], box: [305, 331, 669, 1332], bulb: [640, 1105, 252]};
export const flaskW = (h: number) => (FB.box[2] / FB.box[3]) * h;
export const flaskBulb = (x: number, y: number, h: number) => {
	const k = h / FB.box[3];
	return {cx: x + (FB.bulb[0] - FB.box[0]) * k, cy: y + (FB.bulb[1] - FB.box[1]) * k, r: FB.bulb[2] * k};
};
export const GasFlask: React.FC<{x: number; y: number; h: number; at: number; out?: number; brown?: number; tint?: {color: string; o: number}; children?: React.ReactNode}> = ({x, y, h, at, out, brown = 0, tint, children}) => {
	const k = h / FB.box[3];
	const ix = x - FB.box[0] * k, iy = y - FB.box[1] * k, iw = FB.nat[0] * k, ih = FB.nat[1] * k;
	const b = flaskBulb(x, y, h);
	return (
		<Fade at={at} out={out} dur={16}>
			<image href={staticFile(NO2_COLOURLESS)} x={ix} y={iy} width={iw} height={ih} />
			{brown > 0.01 ? <image href={staticFile(NO2_BROWN)} x={ix} y={iy} width={iw} height={ih} opacity={Math.min(1, brown)} /> : null}
			{tint ? <circle cx={b.cx} cy={b.cy} r={b.r * 0.93} fill={tint.color} opacity={tint.o} /> : null}
			{children}
		</Fade>
	);
};
/** NOCl particles in the flask bulb; from `split`, molecule 0 breaks into NO and Cl with a pen ring. */
export const NoclDots: React.FC<{x: number; y: number; h: number; n?: number; split?: number}> = ({x, y, h, n = 9, split}) => {
	const f = useCurrentFrame();
	const b = flaskBulb(x, y, h);
	const mol = (cx: number, cy: number, key: string) => (
		<g key={key}>
			<circle cx={cx - 6} cy={cy} r={7} fill={NOCL_FILL} stroke={INK} strokeWidth={1.8} />
			<circle cx={cx + 7} cy={cy} r={8} fill={CL2_FILL} stroke={INK} strokeWidth={1.8} />
		</g>
	);
	const u = split === undefined ? 0 : prog(f, split, 30);
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const p = slotXY(13, 1, i, f, b.cx, b.cy, b.r * 0.55, b.r * 0.55);
				if (i === 0 && split !== undefined && f >= split) {
					return (
						<g key={i}>
							<circle cx={p.x - 6 - 30 * u} cy={p.y - 10 * u} r={7} fill={NOCL_FILL} stroke={INK} strokeWidth={1.8} />
							<circle cx={p.x + 7 + 30 * u} cy={p.y + 10 * u} r={8} fill={CL2_FILL} stroke={INK} strokeWidth={1.8} />
							<circle cx={p.x} cy={p.y} r={22 + 30 * u} fill="none" stroke={AMBER} strokeWidth={4} opacity={1 - u} />
						</g>
					);
				}
				return mol(p.x, p.y, 'm' + i);
			})}
		</g>
	);
};
export const noclSplitPos = (x: number, y: number, h: number, f: number) => {
	const b = flaskBulb(x, y, h);
	return slotXY(13, 1, 0, f, b.cx, b.cy, b.r * 0.55, b.r * 0.55);
};

/** Painted hot thermometer (G03d handoff). */
export const Thermo: React.FC<{x: number; y: number; h: number; at: number}> = ({x, y, h, at}) => {
	const k = h / THERMO.box[3];
	return (
		<Fade at={at}>
			<image href={staticFile(THERMO.src)} x={x - THERMO.box[0] * k} y={y - THERMO.box[1] * k} width={THERMO.nat[0] * k} height={THERMO.nat[1] * k} />
		</Fade>
	);
};

// ---------- working lines ----------
/** Dims an earlier line once the next stage is written. */
export const Dim: React.FC<{at: number; to?: number; children: React.ReactNode}> = ({at, to = 0.4, children}) => {
	const f = useCurrentFrame();
	return <g opacity={1 - (1 - to) * prog(f, at, 14)}>{children}</g>;
};
/** One working line built from pieces, each written on its own cue; pieces follow each other left to right. */
export type Piece = {t: string; at: number; color?: string; size?: number; hand?: boolean; gap?: number};
export const Pieces: React.FC<{x: number; y: number; items: Piece[]; size?: number; out?: number; anchor?: 'start' | 'end'}> = ({x, y, items, size = 44, out}) => {
	let cx = x;
	return (
		<g>
			{items.map((p, i) => {
				const s = p.size ?? size;
				const px = cx;
				cx += tw(p.t, s, p.hand) + (p.gap ?? s * 0.3);
				return <Sx key={i} x={px} y={y} text={p.t} size={s} color={p.color ?? INK} hand={p.hand} at={p.at} out={out} />;
			})}
		</g>
	);
};
export const piecesW = (items: Piece[], size = 44) => items.reduce((w, p) => w + tw(p.t, p.size ?? size, p.hand) + (p.gap ?? (p.size ?? size) * 0.3), 0);

/** A teal memory-aid chip. */
export const AidChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number}> = ({x, y, text, at, out, size = 40}) => {
	const w = tw(text, size, true) + 60;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={size + 30} rx={(size + 30) / 2} fill="#e5f2ec" stroke={TEAL} strokeWidth={3} />
			<Sx x={x + 30} y={y + size + 6} text={text} size={size} color={TEAL} hand at={at} />
		</Fade>
	);
};
/** A crossed classic-mistake chip (wider text, optional note under it). */
export const MistakeChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; note?: string; size?: number; w?: number}> = ({x, y, text, at, out, note, size = 32, w}) => {
	const W = w ?? tw(text, size, true) + 120;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={W} height={size + 30} rx={(size + 30) / 2} fill="#fffdf8" stroke={CROSS} strokeWidth={3} />
			<Sx x={x + 26} y={y + size + 6} text={text} size={size} color={INK_SOFT} hand at={at} />
			<DrawPath d={`M${x + W - 56},${y + 12} L${x + W - 22},${y + size + 18}`} at={at + 12} dur={8} color={CROSS} width={7} />
			<DrawPath d={`M${x + W - 22},${y + 12} L${x + W - 56},${y + size + 18}`} at={at + 18} dur={8} color={CROSS} width={7} />
			{note ? <Sx x={x + 26} y={y + size + 64} text={note} size={size * 0.95} color={TEAL} hand at={at + 20} /> : null}
		</Fade>
	);
};

// ---------- decision board ----------
export type DRow = {see: string; doo: string[]; badge: string; at: number; lit?: [number, number]; quiet?: boolean};
export const DecisionRows: React.FC<{rows: DRow[]; y0?: number; lh?: number}> = ({rows, y0 = 296, lh = 116}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<Sx x={126} y={y0 - 22} text="What you see in the question" size={34} color={INK_SOFT} hand at={4} />
			<Sx x={880} y={y0 - 22} text="What you do first" size={34} color={INK_SOFT} hand at={8} />
			{rows.map((r, i) => {
				const y = y0 + i * lh;
				const g = r.lit ? prog(f, r.lit[0], 10) * (1 - prog(f, r.lit[1], 12)) : 0;
				const bw = tw(r.badge, 28, true) + 34;
				const quiet = r.quiet ? 0.55 : 1;
				const p = prog(f, r.at, 16);
				return (
					<Fade key={i} at={r.at}>
						<g opacity={quiet} transform={`translate(${(1 - p) * -30},0)`}>
							<rect x={96} y={y} width={1728} height={lh - 16} rx={20} fill="#fffdf8" stroke={g > 0.05 ? TEAL : 'rgba(60,45,20,0.18)'} strokeWidth={3 + 2 * g} strokeDasharray={r.quiet ? '9 7' : undefined} />
							{g > 0.01 ? <rect x={102} y={y + 6} width={1716} height={lh - 28} rx={16} fill={GLOW} opacity={0.3 * g} /> : null}
							<Sx x={126} y={y + (lh - 16) / 2 + 13} text={r.see} size={40} hand at={r.at} />
							<path d={`M${800},${y + (lh - 16) / 2} L${852},${y + (lh - 16) / 2} M${838},${y + (lh - 16) / 2 - 12} L${852},${y + (lh - 16) / 2} L${838},${y + (lh - 16) / 2 + 12}`} fill="none" stroke={TEAL} strokeWidth={4} strokeLinecap="round" />
							{r.doo.map((d, k) => <Sx key={k} x={880} y={y + (lh - 16) / 2 + 12 + (k - (r.doo.length - 1) / 2) * 38} text={d} size={r.doo.length > 1 ? 30 : 33} color={TEAL} weight={600} at={r.at + 6} />)}
							<rect x={1824 - 24 - bw} y={y + (lh - 16) / 2 - 22} width={bw} height={44} rx={22} fill="#e5f2ec" stroke={TEAL} strokeWidth={2} />
							<Sx x={1824 - 24 - bw / 2} y={y + (lh - 16) / 2 + 10} text={r.badge} size={28} color={TEAL} anchor="middle" hand at={r.at + 10} />
						</g>
					</Fade>
				);
			})}
		</g>
	);
};
void Tick; void PLUS; void MINUS;
