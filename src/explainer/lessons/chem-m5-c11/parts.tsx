// Drawing parts for C11 (dissolving ionic compounds): coded ions, polar water molecules, the NaCl lattice, hydration
// shells, the two-step energy ledger, a coded thermometer, a token equation line (single arrow that can grow its
// reverse half), streaks and falling crystals for the painted beakers, the exchange and tracer lenses, the
// entropy balance and the Q against K gauge (C8 number line). C13 reuses the ions, shells and the equation line.
// Reused: text, chips, rings and arrows (C5, C6), plates by alpha box (P02), "left out" tray, lens frame and two-way
// arrows (C10), rate bars (C4b via C5), scattering dots and heat icon (G01), the C8 K and Q markers.
import React, {useMemo} from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {Arrow, Fade, Ring, Sx, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import {GivensCard} from '../chem-m5-c06/parts';
import {Chip, Overlay, RateBars} from '../chem-m5-c05/parts';
import {PicH, picW} from '../chem-m5-p02/parts';
import {MistakeChip, PauseHold, TaskLine} from '../chem-m5-g03c/board';
import {KName, LensFrame, Tray, TwoWay} from '../chem-m5-c10/parts';
import {KMarker, LogLine, QMarker} from '../chem-m5-c08/parts';
import type {Ln} from '../chem-m5-c08/parts';
import {DotBlock, HeatIcon} from '../chem-m5-g01/parts';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {AN, AN_INK, BLUE_CU, CAT, CAT_INK, COOL, COOL_SOFT, CROSS, DELTA_M, DELTA_P, GLOW, HOT, HOT_SOFT, LEFT, WATERC, WATER_INK, hexMix} from './common';
import type {PDef} from './assets';

export {Arrow, Fade, Ring, Sx, TEAL, Tick, tw, GivensCard, Chip, Overlay, RateBars, PicH, picW, MistakeChip, PauseHold, TaskLine, KName, LensFrame, Tray, TwoWay, KMarker, LogLine, QMarker, DotBlock, HeatIcon, KeyNotesBoard};
export type {Ln};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

// ---------- measured text width (canvas, once the face is loaded; falls back to the tw estimate) ----------
let MCTX: CanvasRenderingContext2D | null = null;
const MCACHE = new Map<string, number>();
const splitMarkup = (text: string) => {
	const out: {s: string; small: boolean}[] = [];
	const re = /(_\d+|\^\{[^}]*\})/g;
	let last = 0;
	let m: RegExpExecArray | null;
	while ((m = re.exec(text))) {
		if (m.index > last) out.push({s: text.slice(last, m.index), small: false});
		out.push({s: m[0][0] === '_' ? m[0].slice(1) : m[0].slice(2, -1), small: true});
		last = m.index + m[0].length;
	}
	if (last < text.length) out.push({s: text.slice(last), small: false});
	return out;
};
/** Width of marked-up text as Sx draws it (subscripts and superscripts at 0.64 size). */
export const mw = (text: string, size: number, hand = false, weight = 700): number => {
	if (typeof document === 'undefined') return tw(text, size, hand);
	const fam = hand ? FONT_HAND : FONT_DISPLAY;
	const probe = `${weight} 100px ${fam}`;
	const key = probe + '|' + text;
	const hit = MCACHE.get(key);
	if (hit !== undefined) return hit * size;
	try {
		if (!document.fonts.check(`${weight} 100px ${hand ? '"Caveat"' : '"Inter Tight"'}`)) return tw(text, size, hand);
		if (!MCTX) MCTX = document.createElement('canvas').getContext('2d');
		if (!MCTX) return tw(text, size, hand);
		let w = 0;
		for (const part of splitMarkup(text)) {
			MCTX.font = `${weight} ${part.small ? 64 : 100}px ${fam}`;
			w += MCTX.measureText(part.s).width;
		}
		MCACHE.set(key, w / 100);
		return (w / 100) * size;
	} catch {
		return tw(text, size, hand);
	}
};
/** A row of pieces written on their own cues, laid out with measured widths. */
export type MPiece = {t: string; at: number; color?: string; size?: number; hand?: boolean; gap?: number; weight?: number};
export const PiecesM: React.FC<{x: number; y: number; items: MPiece[]; size?: number; out?: number}> = ({x, y, items, size = 44, out}) => {
	let cx = x;
	return (
		<g>
			{items.map((p, i) => {
				const s = p.size ?? size;
				const px = cx;
				cx += mw(p.t, s, p.hand, p.weight ?? 700) + (p.gap ?? s * 0.35);
				return <Sx key={i} x={px} y={y} text={p.t} size={s} color={p.color ?? INK} hand={p.hand} weight={p.weight ?? 700} at={p.at} out={out} />;
			})}
		</g>
	);
};

// ---------- painted plates ----------
/** Fit plate p (by its alpha box) inside the slot (x, y, w, h), centred; bottom-aligned when `bottom` is set. */
export const PicFit: React.FC<{p: PDef; x: number; y: number; w: number; h: number; o?: number; bottom?: boolean}> = ({p, x, y, w, h, o = 1, bottom = false}) => {
	const k = Math.min(w / p.box[2], h / p.box[3]);
	const vw = p.box[2] * k, vh = p.box[3] * k;
	const vx = x + (w - vw) / 2, vy = bottom ? y + h - vh : y + (h - vh) / 2;
	return <image href={staticFile(p.src)} x={vx - p.box[0] * k} y={vy - p.box[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} opacity={o} />;
};
/** Point inside a plate placed with PicH at (x, y, h): u, v are fractions of the plate's visible (alpha) box. */
export const platePt = (p: PDef, x: number, y: number, h: number, u: number, v: number): [number, number] => [x + picW(p, h) * u, y + h * v];

// ---------- ions and water ----------
export const ION_R = {'+': 17, '-': 23} as const;
export type Kind = '+' | '-';
export const Ion: React.FC<{x: number; y: number; kind: Kind; r?: number; label?: string; o?: number; glow?: number; fill?: string; grey?: number; labelSize?: number}> = ({x, y, kind, r, label, o = 1, glow = 0, fill, grey = 0, labelSize}) => {
	if (o <= 0.01) return null;
	const R = r ?? ION_R[kind];
	const base = fill ?? (kind === '+' ? CAT : AN);
	const col = grey > 0 ? hexMix(base, '#d6d1c7', grey) : base;
	const txt = label ?? (kind === '+' ? '+' : '−');
	const ts = labelSize ?? (label ? R * 0.78 : R * 1.15);
	const tc = grey > 0.5 ? INK_SOFT : kind === '+' ? INK : '#ffffff';
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x} cy={y} r={R + 13} fill={GLOW} opacity={0.5 * glow} /> : null}
			<circle cx={x} cy={y} r={R} fill={col} stroke={grey > 0.5 ? LEFT : INK} strokeWidth={2.4} strokeDasharray={grey > 0.5 ? '5 4' : undefined} />
			<Sx x={x} y={y + ts * 0.36} text={txt} size={ts} color={tc} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
/** Polar water molecule. `ang` (radians) is the direction its oxygen (delta minus) end points. */
export const Water: React.FC<{x: number; y: number; ang: number; s?: number; o?: number; delta?: number; deltaM?: number; deltaP?: number}> = ({x, y, ang, s = 1, o = 1, delta = 0, deltaM, deltaP}) => {
	if (o <= 0.01) return null;
	const h = (k: number): [number, number] => [x + Math.cos(ang + Math.PI + k * 0.92) * 15 * s, y + Math.sin(ang + Math.PI + k * 0.92) * 15 * s];
	const [h1x, h1y] = h(1), [h2x, h2y] = h(-1);
	const dm = deltaM ?? delta, dp = deltaP ?? delta;
	const fs = 15 * s;
	return (
		<g opacity={o}>
			<circle cx={h1x} cy={h1y} r={6.5 * s} fill="#ffffff" stroke={INK} strokeWidth={1.4 + 0.25 * s} />
			<circle cx={h2x} cy={h2y} r={6.5 * s} fill="#ffffff" stroke={INK} strokeWidth={1.4 + 0.25 * s} />
			<circle cx={x} cy={y} r={11 * s} fill={WATERC} stroke={INK} strokeWidth={1.6 + 0.3 * s} />
			{dm > 0.01 ? <text x={x + Math.cos(ang) * 22 * s} y={y + Math.sin(ang) * 22 * s + fs * 0.35} textAnchor="middle" fill={DELTA_M} opacity={dm} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: fs}}>δ−</text> : null}
			{dp > 0.01 ? [h(1.15), h(-1.15)].map(([px, py], i) => {
				const dx = px - x, dy = py - y;
				return <text key={i} x={x + dx * 1.75} y={y + dy * 1.75 + fs * 0.35} textAnchor="middle" fill={DELTA_P} opacity={dp} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: fs}}>δ+</text>;
			}) : null}
		</g>
	);
};

// ---------- lattice ----------
export const latKind = (i: number, j: number): Kind => ((i + j) % 2 === 0 ? '+' : '-');
export const latXY = (x0: number, y0: number, s: number, i: number, j: number): [number, number] => [x0 + i * s, y0 + j * s];
/** A square slice of an NaCl lattice. Ions appear one by one from `at` over `build` frames; hide(i, j) removes an ion. */
export const Lattice: React.FC<{x0: number; y0: number; cols: number; rows: number; s: number; at?: number; build?: number; hide?: (i: number, j: number) => boolean; o?: number; scale?: number; glow?: (i: number, j: number) => number; fill?: (i: number, j: number) => string | undefined}> = ({x0, y0, cols, rows, s, at = -100, build = 0, hide, o = 1, scale = 1, glow, fill}) => {
	const f = useCurrentFrame();
	const n = cols * rows;
	const out: React.ReactNode[] = [];
	for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
		if (hide && hide(i, j)) continue;
		const k = j * cols + i;
		const p = build > 0 ? prog(f, at + (k * build) / n, 10) : prog(f, at, 12);
		if (p <= 0.01) continue;
		const [x, y] = latXY(x0, y0, s, i, j);
		const kd = latKind(i, j);
		out.push(<Ion key={k} x={x} y={y} kind={kd} r={ION_R[kd] * scale * (0.6 + 0.4 * p)} o={p} glow={glow ? glow(i, j) : 0} fill={fill ? fill(i, j) : undefined} />);
	}
	return <g opacity={o}>{out}</g>;
};

/** Ion with a shell of water molecules: shell 0..1 brings them in from further out. Oxygen ends face a positive ion,
 *  hydrogen ends face a negative ion. */
export const HydratedIon: React.FC<{x: number; y: number; kind: Kind; shell: number; n?: number; label?: string; ws?: number; rot?: number; o?: number; glow?: number; grey?: number; r?: number; fill?: string; labelSize?: number}> = ({x, y, kind, shell, n = 6, label, ws = 1, rot = 0, o = 1, glow = 0, grey = 0, r, fill, labelSize}) => {
	if (o <= 0.01) return null;
	const R = (r ?? ION_R[kind]) + 17 * ws;
	const sh = clamp01(shell);
	return (
		<g opacity={o}>
			{sh > 0.01 ? Array.from({length: n}, (_, k) => {
				const a = rot + (k * 2 * Math.PI) / n;
				const d = R + (1 - sh) * 70 * ws;
				return <Water key={k} x={x + Math.cos(a) * d} y={y + Math.sin(a) * d} ang={kind === '+' ? a + Math.PI : a} s={ws} o={sh * (grey > 0.5 ? 0.55 : 1)} />;
			}) : null}
			<Ion x={x} y={y} kind={kind} r={r} label={label} glow={glow} grey={grey} fill={fill} labelSize={labelSize} />
		</g>
	);
};

// ---------- coded thermometer ----------
export const CodeThermo: React.FC<{x: number; y: number; h: number; level: number; at: number; out?: number; label?: string; labelColor?: string; w?: number}> = ({x, y, h, level, at, out, label, labelColor = INK, w = 30}) => {
	const bulbR = w * 0.95;
	const top = y, bot = y + h - bulbR * 1.6;
	const colTop = bot - (bot - top - 16) * clamp01(level);
	return (
		<Fade at={at} out={out}>
			<rect x={x - w / 2} y={top} width={w} height={bot - top + bulbR} rx={w / 2} fill="#fbfaf6" stroke={INK} strokeWidth={4} />
			<rect x={x - w / 2 + 8} y={colTop} width={w - 16} height={bot - colTop + bulbR * 0.6} rx={(w - 16) / 2} fill={HOT} />
			<circle cx={x} cy={y + h - bulbR} r={bulbR} fill={HOT} stroke={INK} strokeWidth={4} />
			{Array.from({length: 7}, (_, i) => <path key={i} d={`M${x + w / 2},${top + 24 + i * ((bot - top - 30) / 6)} L${x + w / 2 + 12},${top + 24 + i * ((bot - top - 30) / 6)}`} stroke={INK_SOFT} strokeWidth={2.5} />)}
			{label ? <Sx x={x} y={y + h + 46} text={label} size={34} color={labelColor} anchor="middle" hand at={at} /> : null}
		</Fade>
	);
};

// ---------- the energy ledger ----------
export type LedgerProps = {x: number; base: number; h1: number; h2: number; bw?: number; gap?: number; p1: number; p2: number; pn?: number; s?: number; startLabel?: string; endLabel?: boolean; o?: number};
export const ledgerX = (x: number, bw = 100, gap = 70) => ({b1: x, b2: x + bw + gap, bn: x + 2 * (bw + gap)});
/** Step 1 (warm red, up: energy in to separate the ions), step 2 (teal, down from its top: energy out on hydration)
 *  and the net bar (start to end). Heights in px; p1, p2, pn are 0..1 growth. */
export const Ledger: React.FC<LedgerProps> = ({x, base, h1, h2, bw = 100, gap = 70, p1, p2, pn = 0, s = 1, startLabel, o = 1}) => {
	const X = ledgerX(x, bw, gap);
	const H1 = h1 * clamp01(p1), H2 = h2 * clamp01(p2);
	const T = base - h1;
	const E = T + h2;
	const netUp = E < base;
	const NC = netUp ? HOT : COOL, NS = netUp ? HOT_SOFT : COOL_SOFT;
	const nTop = netUp ? base - (base - E) * clamp01(pn) : base;
	const nH = Math.abs(base - E) * clamp01(pn);
	const aw = 5 * s;
	const head = (cx: number, y: number, dir: 1 | -1) => `M${cx - 12 * s},${y + dir * 14 * s} L${cx},${y} L${cx + 12 * s},${y + dir * 14 * s}`;
	return (
		<g opacity={o}>
			<path d={`M${x - 40 * s},${base} L${X.bn + bw + 30 * s},${base}`} stroke={INK} strokeWidth={4 * s} strokeLinecap="round" />
			{startLabel ? <Sx x={x - 46 * s} y={base + 10 * s} text={startLabel} size={30 * s} color={INK_SOFT} anchor="end" hand at={-1000} /> : null}
			{H1 > 0.5 ? (
				<g>
					<rect x={X.b1} y={base - H1} width={bw} height={H1} rx={6 * s} fill={HOT_SOFT} stroke={HOT} strokeWidth={4 * s} />
					{H1 > 40 * s ? <><path d={`M${X.b1 + bw / 2},${base - 12 * s} L${X.b1 + bw / 2},${base - H1 + 14 * s}`} stroke={HOT} strokeWidth={aw} strokeLinecap="round" /><path d={head(X.b1 + bw / 2, base - H1 + 12 * s, 1)} fill="none" stroke={HOT} strokeWidth={aw} strokeLinecap="round" strokeLinejoin="round" /></> : null}
				</g>
			) : null}
			{p2 > 0.01 ? <path d={`M${X.b1 + bw},${T} L${X.b2},${T}`} stroke={INK_SOFT} strokeWidth={2.5 * s} strokeDasharray="6 6" /> : null}
			{H2 > 0.5 ? (
				<g>
					<rect x={X.b2} y={T} width={bw} height={H2} rx={6 * s} fill={COOL_SOFT} stroke={COOL} strokeWidth={4 * s} />
					{H2 > 40 * s ? <><path d={`M${X.b2 + bw / 2},${T + 12 * s} L${X.b2 + bw / 2},${T + H2 - 14 * s}`} stroke={COOL} strokeWidth={aw} strokeLinecap="round" /><path d={head(X.b2 + bw / 2, T + H2 - 12 * s, -1)} fill="none" stroke={COOL} strokeWidth={aw} strokeLinecap="round" strokeLinejoin="round" /></> : null}
				</g>
			) : null}
			{pn > 0.01 ? (
				<g opacity={clamp01(pn * 3)}>
					<path d={`M${X.b2 + bw},${E} L${X.bn + bw + 20 * s},${E}`} stroke={INK_SOFT} strokeWidth={2.5 * s} strokeDasharray="6 6" />
					{nH > 1 ? <rect x={X.bn} y={nTop} width={bw} height={nH} rx={6 * s} fill={NS} stroke={NC} strokeWidth={4 * s} strokeDasharray={`${10 * s} ${6 * s}`} /> : null}
				</g>
			) : null}
		</g>
	);
};

// ---------- equation line made of tokens ----------
export type ETok = {t: string; color?: string; at: number; from?: [number, number]; strike?: number; out?: number; lock?: number; dur?: number};
export type EOp = {op: '+' | '->'; at: number; out?: number; rev?: number};
export type EItem = ETok | EOp;
const isOp = (it: EItem): it is EOp => 'op' in it;
export const eLayout = (items: EItem[], size: number, x0: number) => {
	let x = x0;
	const pos = items.map(it => {
		const w = isOp(it) ? (it.op === '+' ? size * 1.15 : size * 2.1) : mw(it.t, size);
		const r = {x, w};
		x += w;
		return r;
	});
	return {pos, end: x};
};
export const eWidth = (items: EItem[], size: number) => eLayout(items, size, 0).end;
/** Centre of item i (x, and y at mid-height of the text) in a line laid out at x0, baseline y. */
export const eCentre = (items: EItem[], i: number, size: number, x0: number, y: number): [number, number] => {
	const p = eLayout(items, size, x0).pos[i];
	return [p.x + p.w / 2, y - size * 0.32];
};
export const eAt = (items: EItem[], ats: number[]): EItem[] => items.map((it, i) => ({...it, at: ats[i] ?? it.at}));
const STRIKE_GREY = '#9a948a';
/** Padlock icon (the solid stays whole). */
export const Lock: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 1, color = TEAL}) => (
	<Fade at={at}>
		<path d={`M${x - 9 * s},${y - 4 * s} L${x - 9 * s},${y - 13 * s} A${9 * s},${9 * s} 0 0 1 ${x + 9 * s},${y - 13 * s} L${x + 9 * s},${y - 4 * s}`} fill="none" stroke={color} strokeWidth={4 * s} />
		<rect x={x - 14 * s} y={y - 5 * s} width={28 * s} height={22 * s} rx={4 * s} fill={color} />
	</Fade>
);
export const EqLine: React.FC<{items: EItem[]; x: number; y: number; size?: number; anchor?: 'start' | 'middle'}> = ({items, x, y, size = 50, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const x0 = anchor === 'middle' ? x - eWidth(items, size) / 2 : x;
	const {pos} = eLayout(items, size, x0);
	return (
		<g>
			{items.map((it, i) => {
				const p = pos[i];
				if (isOp(it)) {
					const o = prog(f, it.at, 12) * (it.out === undefined ? 1 : 1 - prog(f, it.out, 10));
					if (o <= 0.01) return null;
					if (it.op === '+') return <Sx key={i} x={p.x + p.w / 2} y={y} text="+" size={size} anchor="middle" at={-1000} opacity={o} />;
					const r = it.rev === undefined ? 0 : prog(f, it.rev, 16);
					const a0 = p.x + size * 0.28, a1 = p.x + p.w - size * 0.28;
					const ym = y - size * 0.3, yt = y - size * 0.42, yb = y - size * 0.18;
					const sw = Math.max(4, size * 0.09);
					return (
						<g key={i} opacity={o} fill="none" stroke={INK} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
							<g opacity={1 - r}><path d={`M${a0},${ym} L${a1},${ym} M${a1 - 14},${ym - 11} L${a1},${ym} L${a1 - 14},${ym + 11}`} /></g>
							{r > 0.01 ? (
								<g opacity={r}>
									<path d={`M${a0},${yt} L${a1},${yt} M${a1 - 14},${yt - 11} L${a1},${yt}`} />
									<path d={`M${a1},${yb} L${a0},${yb} M${a0 + 14},${yb + 11} L${a0},${yb}`} />
								</g>
							) : null}
						</g>
					);
				}
				const fly = !!it.from;
				const e = prog(f, it.at, it.dur ?? 28);
				const o = prog(f, it.at, fly ? 6 : 12) * (it.out === undefined ? 1 : 1 - prog(f, it.out, 10));
				if (o <= 0.01) return null;
				const tx = p.x, ty = y;
				const fx = it.from ? it.from[0] - p.w / 2 : tx, fy = it.from ? it.from[1] + size * 0.32 : ty;
				const px = fx + (tx - fx) * e, py = fy + (ty - fy) * e;
				const g = it.strike === undefined ? 0 : prog(f, it.strike + 8, 14);
				const col = it.color ?? INK;
				return (
					<g key={i} opacity={o}>
						<Sx x={px} y={py} text={it.t} size={size} color={g > 0 ? hexMix(col.length === 7 ? col : '#26231f', STRIKE_GREY, g) : col} at={-1000} />
						{it.strike !== undefined ? <DrawPath d={`M${p.x - 4},${y - size * 0.26} L${p.x + p.w + 4},${y - size * 0.4}`} at={it.strike} dur={12} color={STRIKE_GREY} width={Math.max(4, size * 0.1)} /> : null}
						{it.lock !== undefined ? <Lock x={p.x + p.w / 2} y={y - size * 1.32} at={it.lock} s={size / 50} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- small shared pieces ----------
/** Rounded readout box with marked-up text. */
export const Readout: React.FC<{x: number; y: number; w: number; text: string; at: number; out?: number; color?: string; size?: number; h?: number; fill?: string}> = ({x, y, w, text, at, out, color = INK, size = 34, h = 58, fill = '#fffdf8'}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={h} rx={14} fill={fill} stroke={color} strokeWidth={3} />
		<Sx x={x + 22} y={y + h / 2 + size * 0.34} text={text} size={size} color={color} weight={700} at={-1000} />
	</Fade>
);
/** Pen bracket on the right of a vertical span (x, y1..y2), drawn on. */
export const VBracket: React.FC<{x: number; y1: number; y2: number; at: number; d?: number; color?: string; width?: number}> = ({x, y1, y2, at, d = 22, color = TEAL, width = 4.5}) => (
	<DrawPath d={`M${x},${y1} L${x + d},${y1} L${x + d},${y2} L${x},${y2}`} at={at} dur={16} color={color} width={width} />
);
/** Horizontal pen bracket above a span (x1..x2 at y), opening downwards. */
export const HBracket: React.FC<{x1: number; x2: number; y: number; at: number; d?: number; color?: string; width?: number}> = ({x1, x2, y, at, d = 20, color = TEAL, width = 4.5}) => (
	<DrawPath d={`M${x1},${y + d} L${x1},${y} L${x2},${y} L${x2},${y + d}`} at={at} dur={16} color={color} width={width} />
);
/** Gentle pulse factor after `at` (1 to 1 + amp and back). */
export const pulseAt = (f: number, at: number, amp = 0.12, len = 24) => 1 + amp * Math.max(0, Math.sin(Math.min(1, Math.max(0, f - at) / len) * Math.PI));

// ---------- coded blue streaks drifting from a dissolving crystal ----------
export const Streaks: React.FC<{cx: number; cy: number; at: number; out: number; spread?: number; rise?: number; color?: string; n?: number}> = ({cx, cy, at, out, spread = 160, rise = 300, color = BLUE_CU, n = 9}) => {
	const f = useCurrentFrame();
	const r = rng(11);
	const items = useMemo(() => Array.from({length: n}, () => ({dx: (r() - 0.5) * 2 * spread, dy: rise * (0.55 + r() * 0.45), w: 10 + r() * 10, d: r() * 40})), [n, spread, rise]); // eslint-disable-line react-hooks/exhaustive-deps
	const o = 1 - prog(f, out, 30);
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			{items.map((s, i) => {
				const ex = cx + s.dx, ey = cy - s.dy;
				const c1x = cx + s.dx * 0.15, c1y = cy - s.dy * 0.45, c2x = cx + s.dx * 0.9 + Math.sin(f * 0.03 + i) * 20, c2y = cy - s.dy * 0.6;
				return <DrawPath key={i} d={`M${cx + (i - n / 2) * 4},${cy} C${c1x},${c1y} ${c2x},${c2y} ${ex},${ey}`} at={at + s.d} dur={70} color={color} width={s.w} opacity={0.32} />;
			})}
		</g>
	);
};

/** Small white crystals dropping into a beaker. dissolve: they fade in the liquid; otherwise they settle on the floor. */
export const Falling: React.FC<{x0: number; x1: number; yTop: number; ySurf: number; yFloor: number; at: number; until: number; every?: number; dissolve: boolean; seed?: number; size?: number}> = ({x0, x1, yTop, ySurf, yFloor, at, until, every = 14, dissolve, seed = 3, size = 9}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const r = rng(seed);
	const n = Math.max(0, Math.floor((until - at) / every));
	const items = Array.from({length: n}, (_, i) => ({t0: at + i * every, x: x0 + r() * (x1 - x0), rot: r() * 90, fl: yFloor - r() * 14}));
	return (
		<g>
			{items.map((c, i) => {
				const t = f - c.t0;
				if (t < 0) return null;
				const yAir = yTop + t * 9;
				let y = yAir, o = 1;
				if (yAir > ySurf) {
					const tw2 = (yAir - ySurf) / 9;
					y = Math.min(c.fl, ySurf + tw2 * 3.2);
					o = dissolve ? Math.max(0, 1 - tw2 / 34) : y >= c.fl ? Math.max(0, 1 - (tw2 - (c.fl - ySurf) / 3.2) / 40) : 1;
				}
				if (o <= 0.01) return null;
				return <rect key={i} x={c.x - size / 2} y={y - size / 2} width={size} height={size} transform={`rotate(${c.rot + t * 2},${c.x},${y})`} fill="#ffffff" stroke="#9aa7b0" strokeWidth={1.6} opacity={o} />;
			})}
		</g>
	);
};

// ---------- exchange lens: a crystal surface with ions leaving and rejoining ----------
type Ev = {t: number; slot: number};
/** Leave events every `leaveEvery` frames from `from`; join events at a rate rate(f) (0..1 of the leave rate). */
const events = (from: number, to: number, leaveEvery: number, rate: (f: number) => number, slots: number) => {
	const leave: Ev[] = [], join: Ev[] = [];
	let acc = 0, kL = 0, kJ = 0;
	for (let t = from; t < to; t++) {
		if ((t - from) % leaveEvery === 0) leave.push({t, slot: (kL++ * 3) % slots});
		acc += rate(t) / leaveEvery;
		if (acc >= 1) { acc -= 1; join.push({t, slot: (kJ++ * 5 + 2) % slots}); }
	}
	return {leave, join};
};
export const ExchangeLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; from: number; to: number; leaveEvery?: number; rate: (f: number) => number; nDiss: (f: number) => number; title?: string; titleAt?: number; glowLeave?: boolean; glowN?: (f: number) => number; tint?: string}> = ({cx, cy, r, at, out, from, to, leaveEvery = 40, rate, nDiss, title, titleAt, glowLeave = false, glowN, tint = '#eef6fb'}) => {
	const f = useCurrentFrame();
	const s = 46;
	const top = cy + r * 0.3;
	const cols = Math.ceil((2 * r) / s) + 1;
	const surf = Array.from({length: cols}, (_, c) => cx - r + c * s + 8);
	const ev = useMemo(() => events(from, to, leaveEvery, rate, cols), [from, to, leaveEvery, cols]); // eslint-disable-line react-hooks/exhaustive-deps
	const LIFE = 44;
	const busy = new Set<number>();
	const movers: React.ReactNode[] = [];
	ev.leave.forEach((e, k) => {
		const u = (f - e.t) / LIFE;
		if (u < 0 || u > 1) return;
		busy.add(e.slot);
		const kind = latKind(e.slot, 0);
		const x = surf[e.slot] + Math.sin(u * 3) * 14, y = top - u * r * 0.55;
		movers.push(<HydratedIon key={'l' + k} x={x} y={y} kind={kind} shell={u * 1.4} ws={0.55} n={5} o={1 - smooth((u - 0.75) / 0.25)} glow={glowLeave ? 1 : 0} />);
	});
	ev.join.forEach((e, k) => {
		const u = (f - e.t) / LIFE;
		if (u < 0 || u > 1) return;
		const kind = latKind(e.slot, 0);
		const x = surf[e.slot] - Math.sin(u * 3) * 14, y = top - (1 - u) * r * 0.55;
		movers.push(<HydratedIon key={'j' + k} x={x} y={y} kind={kind} shell={1 - u * 1.3} ws={0.55} n={5} o={smooth(u / 0.2)} />);
		if (u < 0.92) busy.add(e.slot);
	});
	const rr = rng(21);
	// 15 slots in the upper part of the lens (5 x 3, jittered), filled in a scattered order
	const order = [7, 1, 13, 4, 10, 2, 8, 14, 0, 11, 5, 3, 12, 6, 9];
	const free = order.map((k, i) => ({u: (-0.64 + (k % 5) * 0.32) * (k < 5 ? 0.78 : 1) + (rr() - 0.5) * 0.08, v: -0.6 + Math.floor(k / 5) * 0.28 + (rr() - 0.5) * 0.06, ph: rr() * 6.28, kind: (i % 2 ? '-' : '+') as Kind}));
	const n = nDiss(f);
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title} titleAt={titleAt}>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill={tint} />
			{[0, 1, 2, 3].map(row => surf.map((x, c) => (row === 0 && busy.has(c)) ? null : <Ion key={`${row}-${c}`} x={x} y={top + row * s} kind={latKind(c, row)} />))}
			{free.map((d, i) => {
				const o = clamp01(n - i);
				if (o <= 0.01) return null;
				const x = cx + d.u * r + Math.sin(f * 0.03 + d.ph) * 8, y = cy + d.v * r + Math.cos(f * 0.027 + d.ph) * 7;
				return <HydratedIon key={i} x={x} y={y} kind={d.kind} shell={1} ws={0.55} n={5} o={o} rot={d.ph} glow={glowN ? clamp01(glowN(f) - i) : 0} />;
			})}
			{movers}
		</LensFrame>
	);
};

// ---------- entropy balance ----------
export const Balance: React.FC<{cx: number; cy: number; L: number; tilt: number; at: number; left: React.ReactNode; right: React.ReactNode}> = ({cx, cy, L, tilt, at, left, right}) => {
	const a = (tilt * Math.PI) / 180;
	const lx = cx - Math.cos(a) * L, ly = cy - Math.sin(a) * L;
	const rx = cx + Math.cos(a) * L, ry = cy + Math.sin(a) * L;
	const pan = (x: number, y: number, kids: React.ReactNode) => (
		<g>
			<path d={`M${x},${y} L${x - 90},${y + 120} M${x},${y} L${x + 90},${y + 120}`} stroke={INK_SOFT} strokeWidth={2.5} />
			<path d={`M${x - 120},${y + 120} Q${x},${y + 175} ${x + 120},${y + 120} Z`} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<g transform={`translate(${x},${y + 116})`}>{kids}</g>
		</g>
	);
	return (
		<Fade at={at}>
			<path d={`M${cx},${cy} L${cx - 70},${cy + 300} L${cx + 70},${cy + 300} Z`} fill="#efe6d6" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			<path d={`M${lx},${ly} L${rx},${ry}`} stroke={INK} strokeWidth={8} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={11} fill={INK} />
			{pan(lx, ly, left)}
			{pan(rx, ry, right)}
		</Fade>
	);
};

// ---------- Q against K gauge (C8 number line) ----------
export const QKGauge: React.FC<{ln: Ln; at: number; out?: number; q: (f: number) => number; qAt?: number; qLabel?: string; kLabel?: string}> = ({ln, at, out, q, qAt, qLabel = 'Q', kLabel = 'K'}) => (
	<g>
		<LogLine ln={ln} at={at} out={out} labels={false} />
		<KMarker k={1} ln={ln} at={at + 8} out={out} label={kLabel} />
		<QMarker ln={ln} at={qAt ?? at + 14} out={out} value={q} label={qLabel} side="mid" />
	</g>
);

/** Icon: one ion pulled from two neighbours (step 1) or wrapped in water (step 2). */
export const StepIcon: React.FC<{x: number; y: number; step: 1 | 2; at: number; s?: number}> = ({x, y, step, at, s = 1}) => {
	const f = useCurrentFrame();
	const u = smooth(((f - at) % 90) / 60);
	if (step === 1) {
		return (
			<Fade at={at}>
				<Ion x={x - 20 * s - u * 22 * s} y={y} kind="+" r={14 * s} />
				<Ion x={x + 20 * s + u * 22 * s} y={y} kind="-" r={18 * s} />
			</Fade>
		);
	}
	return <Fade at={at}><HydratedIon x={x} y={y} kind="+" shell={0.4 + 0.6 * u} ws={0.6 * s} n={6} r={14 * s} /></Fade>;
};

export {AMBER, AMBER_INK, INK, INK_SOFT, CAT, CAT_INK, AN, AN_INK, WATERC, WATER_INK, HOT, HOT_SOFT, COOL, COOL_SOFT, GLOW, LEFT, CROSS};
void DELTA_P;
