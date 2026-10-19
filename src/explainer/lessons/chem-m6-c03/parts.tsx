// Drawing parts for M6 C03 (enthalpy of neutralisation calculations), reused by C04. One visual system with C01 and
// C02 (re-exported): proton token, ions, equation line, chips, crossed mistake, rule card, question card, countdown.
// New here: heat ripples (warm orange), the amber-digit temperature readout, the calorimeter plate with a liftable lid,
// coded cup outlines, the energy step, solution tokens (H+ on water, OH-, spectators, water), the givens card with
// underlines and lit lines, working lines that dim, the two-bar "runs out first" comparison and a short number line.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog} from '../../kit';
import {AMBER, AMBER_INK, Fade, INK, INK_SOFT, Ion, Pieces, Proton, Sx, TEAL, Under, WATER_INK, WATER_SOFT, clamp01, mw, platePt, smooth, vis} from '../chem-m6-c01/parts';
import type {Piece} from '../chem-m6-c01/parts';
import type {PDef} from '../chem-m6-c01/assets';
import {CAL, CAL_G} from './assets';

export * from '../chem-m6-c01/parts';

// ---------- colours: heat warm orange; spectators grey; readout dark with amber digits ----------
export const HEAT = '#e07b2e', HEAT_INK = '#b5561a', HEAT_SOFT = '#fbe2cc';
export const READ_BG = '#2b2723', READ_TXT = '#f2b84b';
export const SPECT = '#bdb6aa';
export const CLC = '#7fbf8a';

// ---------- heat ripples ----------
/** Warm orange rings spreading from a point, repeating from `at` until `until`. */
export const Ripples: React.FC<{x: number; y: number; at: number; until?: number; r?: number; n?: number; period?: number; color?: string; w?: number; o?: number}> = ({x, y, at, until, r = 60, n = 3, period = 42, color = HEAT, w = 4, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const fade = (until === undefined ? 1 : 1 - prog(f, until, 20)) * o;
	if (fade <= 0.01) return null;
	return (
		<g opacity={fade}>
			{Array.from({length: n}, (_, i) => {
				const e = f - at - (i * period) / n;
				if (e < 0) return null;
				const t = (e % period) / period;
				return <circle key={i} cx={x} cy={y} r={r * (0.22 + 0.78 * t)} fill="none" stroke={color} strokeWidth={w * (1 - t * 0.5)} opacity={0.9 * (1 - t)} />;
			})}
		</g>
	);
};
/** Short orange arrows leaving a point along an angle (heat loss), repeating. */
export const HeatOut: React.FC<{pts: [number, number, number][]; at: number; out?: number; len?: number}> = ({pts, at, out, len = 70}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{pts.map(([x, y, a], i) => {
				const t = ((f - at + i * 9) % 40) / 40;
				const d0 = 8 + t * 34, d1 = d0 + len * 0.6;
				const ca = Math.cos(a), sa = Math.sin(a);
				const x0 = x + ca * d0, y0 = y + sa * d0, x1 = x + ca * d1, y1 = y + sa * d1;
				const hx = (k: number) => x1 - Math.cos(a + k) * 14, hy = (k: number) => y1 - Math.sin(a + k) * 14;
				return (
					<g key={i} opacity={Math.sin(t * Math.PI)} fill="none" stroke={HEAT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
						<path d={`M${x0},${y0} L${x1},${y1}`} />
						<path d={`M${hx(0.55)},${hy(0.55)} L${x1},${y1} L${hx(-0.55)},${hy(-0.55)}`} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- temperature readout ----------
export const readW = (size = 34) => mw('28.0 °C', size, false, 800) + size * 1.4;
/** A dark readout with amber digits. It counts from `from` to `to` between `rise` and `rise + dur`. `up` pulses a small up arrow. */
export const TempChip: React.FC<{x: number; y: number; from: number; to?: number; at: number; rise?: number; dur?: number; out?: number; size?: number; up?: number}> = ({x, y, from, to, at, rise = 1e9, dur = 60, out, size = 34, up}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	const v = to === undefined ? from : from + (to - from) * smooth(prog(f, rise, dur));
	const w = readW(size), h = size * 1.55;
	const pu = up === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - up) / 50) * Math.PI));
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={12} fill={READ_BG} stroke={INK} strokeWidth={2} />
			<text x={x + w / 2} y={y + h / 2 + size * 0.35} textAnchor="middle" fill={READ_TXT} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontVariantNumeric: 'tabular-nums'}}>{v.toFixed(1) + ' °C'}</text>
			{pu > 0.01 ? (
				<g opacity={pu} transform={`translate(${x + w + 26},${y + h / 2 - 8 * pu})`} fill="none" stroke={AMBER} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
					<path d="M0,22 L0,-20 M-13,-6 L0,-20 L13,-6" />
				</g>
			) : null}
		</g>
	);
};

// ---------- the calorimeter plate, with a liftable lid and a warm glow ----------
let calId = 0;
export const calPt = (x: number, y: number, h: number, uv: [number, number]) => platePt(CAL, x, y, h, uv[0], uv[1]);
export const calW = (h: number) => (CAL.box[2] / CAL.box[3]) * h;
/** The foam cup plate placed by its visible box. lift: lid raised by this many px. glow 0..1: warm wash in the window. */
export const CalCup: React.FC<{x: number; y: number; h: number; lift?: number; glow?: number; o?: number}> = ({x, y, h, lift = 0, glow = 0, o = 1}) => {
	const id = React.useMemo(() => `calclip-${++calId}`, []);
	if (o <= 0.01) return null;
	const p: PDef = CAL;
	const k = h / p.box[3];
	const ix = x - p.box[0] * k, iy = y - p.box[1] * k, iw = p.nat[0] * k, ih = p.nat[1] * k;
	const cut = y + CAL_G.cutV * h;
	const [wx, wy] = calPt(x, y, h, CAL_G.win);
	const img = <image href={staticFile(p.src)} x={ix} y={iy} width={iw} height={ih} />;
	return (
		<g opacity={o}>
			<clipPath id={id + 'b'}><rect x={ix} y={cut} width={iw} height={ih} /></clipPath>
			<clipPath id={id + 't'}><rect x={ix} y={iy} width={iw} height={cut - iy} /></clipPath>
			<g clipPath={`url(#${id}b)`}>{img}</g>
			{glow > 0.01 ? <ellipse cx={wx} cy={wy + 8} rx={CAL_G.winR[0] * calW(h) * 0.82} ry={CAL_G.winR[1] * h * 0.75} fill={HEAT} opacity={0.32 * glow} /> : null}
			<g transform={`translate(0,${-lift})`} clipPath={`url(#${id}t)`}>{img}</g>
		</g>
	);
};

// ---------- coded cup outline (scaling comparisons) ----------
/** A plain coded cup: trapezoid outline, pale blue liquid to `fill` (0..1). Children draw inside. */
export const CupOutline: React.FC<{x: number; y: number; w: number; h: number; fill?: number; at: number; out?: number; dashed?: boolean; stroke?: string; children?: React.ReactNode; glow?: number}> = ({x, y, w, h, fill = 0.6, at, out, dashed = false, stroke = INK, children, glow = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const b = w * 0.11;
	const xl = (t: number) => x + b * t, xr = (t: number) => x + w - b * t; // t: 0 at top, 1 at bottom
	const ly = y + h * (1 - fill);
	const tl = (ly - y) / h;
	return (
		<g opacity={o}>
			{fill > 0.001 ? <path d={`M${xl(tl)},${ly} L${xr(tl)},${ly} L${xr(1)},${y + h} L${xl(1)},${y + h} Z`} fill={glow > 0.01 ? '#f6e3cf' : WATER_SOFT} opacity={0.95} /> : null}
			{children}
			<path d={`M${x},${y} L${xl(1)},${y + h} L${xr(1)},${y + h} L${x + w},${y}`} fill="none" stroke={stroke} strokeWidth={5} strokeLinejoin="round" strokeDasharray={dashed ? '14 10' : undefined} />
		</g>
	);
};

// ---------- energy step ----------
/** Two energy levels with a drop between them: reactants high (left), water low (right), the drop labelled. */
export const EnergyStep: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; top: string; bot: string; dropAt: number; gap?: {text: string; at: number}; dh?: {text: string; at: number}; o?: number; size?: number}> = ({x, y, w, h, at, out, top, bot, dropAt, gap, dh, o = 1, size = 40}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const ax = x + w * 0.5;
	const pd = prog(f, dropAt, 22);
	return (
		<g opacity={v}>
			<DrawPath d={`M${x},${y + h + 30} L${x},${y - 40}`} at={at} dur={16} color={INK_SOFT} width={3.5} />
			<path d={`M${x - 10},${y - 26} L${x},${y - 42} L${x + 10},${y - 26}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} opacity={prog(f, at + 12, 8)} />
			<Sx x={x - 14} y={y - 20} text="energy" size={28} color={INK_SOFT} anchor="end" hand at={at} />
			<DrawPath d={`M${x + 24},${y} L${ax + 30},${y}`} at={at + 4} dur={14} color={INK} width={6} />
			<Sx x={x + 30} y={y - 18} text={top} size={size} color={INK} weight={700} at={at + 6} />
			<DrawPath d={`M${ax - 30},${y + h} L${x + w},${y + h}`} at={dropAt} dur={14} color={WATER_INK} width={6} />
			<Sx x={x + w - 10} y={y + h - 18} text={bot} size={size} color={WATER_INK} anchor="end" weight={700} at={dropAt + 6} />
			<line x1={ax} y1={y + 8} x2={ax} y2={y + 8 + (h - 30) * pd} stroke={HEAT} strokeWidth={6} strokeLinecap="round" opacity={pd > 0.01 ? 1 : 0} />
			<path d={`M${ax - 14},${y + h - 30} L${ax},${y + h - 10} L${ax + 14},${y + h - 30}`} fill="none" stroke={HEAT} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, dropAt + 18, 6)} />
			{gap ? <Sx x={ax - 24} y={y + h * 0.55} text={gap.text} size={size * 0.9} color={HEAT_INK} anchor="end" hand at={gap.at} /> : null}
			{dh ? <Sx x={ax + 24} y={y + h * 0.55} text={dh.text} size={size * 0.95} color={TEAL} weight={800} at={dh.at} /> : null}
		</g>
	);
};

// ---------- solution tokens ----------
/** H+(aq): a teal proton token sitting on a pale blue water (the H3O+ idea). */
export const HTok: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x - 6 * s} cy={y + 6 * s} r={22 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={2.5} />
		<Proton x={x + 10 * s} y={y - 8 * s} s={0.82 * s} />
	</g>
));
export const OHTok: React.FC<{x: number; y: number; s?: number; o?: number; grey?: number}> = ({x, y, s = 1, o = 1, grey = 0}) => <Ion x={x} y={y} kind="-" r={25 * s} label="OH^{-}" labelSize={17 * s} o={o} grey={grey} />;
export const NaTok: React.FC<{x: number; y: number; s?: number; o?: number; grey?: number; label?: string}> = ({x, y, s = 1, o = 1, grey = 0, label = 'Na^{+}'}) => <Ion x={x} y={y} kind="+" r={22 * s} label={label} labelSize={17 * s} o={o} grey={grey} />;
export const ClTok: React.FC<{x: number; y: number; s?: number; o?: number; grey?: number; label?: string}> = ({x, y, s = 1, o = 1, grey = 0, label = 'Cl^{-}'}) => <Ion x={x} y={y} kind="-" r={25 * s} label={label} labelSize={17 * s} o={o} grey={grey} fill={CLC} />;
export const WTok: React.FC<{x: number; y: number; s?: number; o?: number; pop?: number}> = ({x, y, s = 1, o = 1, pop = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${pop}) translate(${-x},${-y})`}>
		<circle cx={x} cy={y} r={27 * s} fill="#cfe4f3" stroke={WATER_INK} strokeWidth={3} />
		<Sx x={x} y={y + 7 * s} text="H_2O" size={19 * s} color={WATER_INK} anchor="middle" weight={800} at={-1000} />
	</g>
));

// ---------- givens card with underlines and lit lines ----------
export type GMark = {sub: string; at: number; out?: number; occ?: number; color?: string};
export type GLine = {t: string; at: number; grey?: boolean; lit?: [number, number]; marks?: GMark[]};
export const gcardH = (n: number, lh = 64) => 70 + n * lh + 14;
export const gLineY = (y: number, i: number, lh = 64) => y + 70 + lh * (i + 0.62);
/** The givens card: one group per line, units attached; "assume" lines grey. Marks underline a substring of a line. */
export const GCard: React.FC<{x: number; y: number; w: number; lines: GLine[]; at: number; out?: number; title?: string; lh?: number; size?: number}> = ({x, y, w, lines, at, out, title = 'givens', lh = 64, size = 34}) => {
	const f = useCurrentFrame();
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={gcardH(lines.length, lh)} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
			<Sx x={x + 26} y={y + 48} text={title} size={34} color={INK_SOFT} hand at={-1000} />
			{lines.map((l, i) => {
				const ly = gLineY(y, i, lh);
				const s = l.grey ? size * 0.82 : size;
				const g = l.lit ? vis(f, l.lit[0], l.lit[1], 10) : 0;
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={x + 12} y={ly - s * 1.0} width={w - 24} height={s * 1.45} rx={10} fill="#f6d77a" opacity={0.42 * g} /> : null}
						<Sx x={x + 28} y={ly} text={l.t} size={s} color={l.grey ? INK_SOFT : INK} weight={600} at={l.at} />
						{(l.marks ?? []).map((m, k) => {
							let idx = -1;
							for (let n = 0; n < (m.occ ?? 1); n++) idx = l.t.indexOf(m.sub, idx + 1);
							if (idx < 0) throw new Error(`givens mark "${m.sub}" not in "${l.t}"`);
							const x1 = x + 28 + mw(l.t.slice(0, idx), s, false, 600), x2 = x1 + mw(m.sub, s, false, 600);
							return <Under key={k} x1={x1 + 2} x2={x2 - 2} y={ly + 9} at={m.at} out={m.out} color={m.color ?? AMBER} />;
						})}
					</g>
				);
			})}
		</Fade>
	);
};

// ---------- working lines ----------
export const piecesW = (items: Piece[], size: number) => {
	let w = 0;
	items.forEach((p, i) => {
		const s = p.size ?? size;
		w += mw(p.t, s, p.hand, p.weight ?? 700) + (i < items.length - 1 ? (p.gap ?? s * 0.35) : 0);
	});
	return w;
};
/** One working line: pieces write on their own cues; the whole line dims (to `dimTo`) from `dim` and leaves at `out`. */
export const WLine: React.FC<{x: number; y: number; items: Piece[]; size?: number; dim?: number; dimTo?: number; out?: number; undim?: number}> = ({x, y, items, size = 42, dim, dimTo = 0.32, out, undim}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 0 : prog(f, dim, 14) * (undim === undefined ? 1 : 1 - prog(f, undim, 14));
	const o = (1 - (1 - dimTo) * d) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	if (o <= 0.01) return null;
	return <g opacity={o}><Pieces x={x} y={y} items={items} size={size} /></g>;
};
/** Split "a = b" style text into pieces with their own times: P('m = 50.0 + 50.0', 10, '= 100.0 g', 40). */
export const P = (...args: (string | number | {t: string; color?: string})[]): Piece[] => {
	const out: Piece[] = [];
	for (let i = 0; i < args.length; i += 2) {
		const a = args[i], at = args[i + 1] as number;
		if (typeof a === 'string') out.push({t: a, at});
		else if (typeof a === 'object') out.push({t: a.t, at, color: a.color});
	}
	return out;
};

// ---------- two-bar "runs out first" comparison ----------
export type BarSpec = {label: string; n: number; color: string; ink: string};
/** Two bars, lengths n × k. From `use` the same length empties from both, leaving the larger bar's stub. */
export const LimitBars: React.FC<{x: number; y: number; k: number; a: BarSpec; b: BarSpec; at: number; use?: number; useDur?: number; out?: number; s?: number; size?: number; stub?: {text: string; at: number; out?: number}; glowStub?: number; labels?: boolean; o?: number}> = ({x, y, k, a, b, at, use = 1e9, useDur = 50, out, s = 1, size = 32, stub, glowStub, labels = true, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const H = 40, gap = 22;
	const used = Math.min(a.n, b.n) * smooth(prog(f, use, useDur));
	const g = glowStub === undefined ? 0 : vis(f, glowStub, undefined, 16);
	const bar = (sp: BarSpec, yy: number, i: number) => {
		const full = sp.n * k, left = (sp.n - used) * k;
		const grow = smooth(prog(f, at + i * 8, 18));
		return (
			<g key={i}>
				<rect x={x} y={yy} width={full * grow} height={H} rx={10} fill="none" stroke={sp.color} strokeWidth={3} strokeDasharray="8 6" opacity={0.7} />
				{left > 0.5 ? <rect x={x} y={yy} width={left * grow} height={H} rx={10} fill={sp.color} opacity={0.9} /> : null}
				{i === 1 && g > 0.01 && left > 0.5 ? <rect x={x - 6} y={yy - 6} width={left + 12} height={H + 12} rx={14} fill="none" stroke={HEAT} strokeWidth={5} opacity={g} /> : null}
				{labels ? <Sx x={x + full + 18} y={yy + H * 0.78} text={sp.label} size={size} color={sp.ink} weight={700} at={at + i * 8 + 10} /> : null}
			</g>
		);
	};
	const by = y + H + gap;
	return (
		<g opacity={v} transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			{bar(a, y, 0)}
			{bar(b, by, 1)}
			{stub ? <Sx x={x} y={by + H + 40} text={stub.text} size={size * 0.85} color={b.n > a.n ? b.ink : a.ink} weight={600} at={stub.at} out={stub.out} /> : null}
		</g>
	);
};

// ---------- number line ----------
export const NumLine: React.FC<{x: number; y: number; w: number; lo: number; hi: number; at: number; out?: number; ticks?: number[]; marks: {v: number; label: string; color: string; at: number}[]; bracket?: {a: number; b: number; text: string; at: number}}> = ({x, y, w, lo, hi, at, out, ticks = [], marks, bracket}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	const X = (v: number) => x + ((v - lo) / (hi - lo)) * w;
	return (
		<g opacity={o}>
			<DrawPath d={`M${x},${y} L${x + w},${y}`} at={at} dur={16} color={INK_SOFT} width={4} />
			{ticks.map(t => <g key={t}><line x1={X(t)} y1={y - 10} x2={X(t)} y2={y + 10} stroke={INK_SOFT} strokeWidth={3} /><Sx x={X(t)} y={y + 44} text={String(t).replace('-', '−')} size={26} color={INK_SOFT} anchor="middle" weight={600} at={at + 6} /></g>)}
			{marks.map((m, i) => (
				<Fade key={i} at={m.at}>
					<circle cx={X(m.v)} cy={y} r={11} fill={m.color} stroke={INK} strokeWidth={2} />
					<Sx x={X(m.v)} y={y - 26} text={m.label} size={32} color={m.color} anchor="middle" weight={800} at={-1000} />
				</Fade>
			))}
			{bracket ? (
				<Fade at={bracket.at}>
					<DrawPath d={`M${X(bracket.a)},${y + 58} L${X(bracket.a)},${y + 70} L${X(bracket.b)},${y + 70} L${X(bracket.b)},${y + 58}`} at={bracket.at} dur={14} color={AMBER_INK} width={4} />
					<Sx x={(X(bracket.a) + X(bracket.b)) / 2} y={y + 110} text={bracket.text} size={32} color={AMBER_INK} anchor="middle" hand at={bracket.at + 6} />
				</Fade>
			) : null}
		</g>
	);
};

/** Simple drift for tokens in a lens. */
export const wob = (f: number, ph: number, amp = 6): [number, number] => [Math.sin(f * 0.033 + ph) * amp, Math.cos(f * 0.029 + ph * 1.4) * amp];
