// Drawing parts for M6 C01 (acid and base models), reused by C02. One visual system with C11/C13: the equation line,
// chips, rings, lens frame, countdown and key notes board are the shared ones (re-exported from C13). New here:
// coded ball-and-stick molecules with a moving proton (teal H+ token), role outlines (acid amber, base violet), the
// dated name-card timeline (no portraits), formula tiles whose element letters glow, stamps, underlines for equation
// tokens and the worded question card (prose plus an equation line).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {Arrow, Chip, EqLine, Fade, HBracket, Ion, KeyNotesBoard, LensFrame, MistakeChip, Overlay, PauseHold, PicH, Pieces, Readout, Ring, Sx, TEAL, TaskLine, Tick, VBracket, eLayout, eWidth, fitSize, mw, picW, platePt, pulseAt, smooth, tw} from '../chem-m5-c13/parts';
import type {EItem, Piece} from '../chem-m5-c13/parts';
import {AN, AN_INK} from '../chem-m5-c11/common';
import {QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CROSS, GREEN, hexMix} from './common';
import type {PDef} from './assets';

export {AN, AN_INK, Arrow, Chip, EqLine, Fade, HBracket, Ion, KeyNotesBoard, LensFrame, MistakeChip, Overlay, PauseHold, PicH, Pieces, Readout, Ring, Sx, TEAL, TaskLine, Tick, VBracket, eLayout, eWidth, fitSize, mw, picW, platePt, pulseAt, smooth, tw, QText, qCheck, AMBER, AMBER_INK, INK, INK_SOFT, CROSS, GREEN, DrawPath};
export type {EItem, Piece, QBlock, QMark};
/** Caveat draws superscript charges too faintly: text carrying a charge (^{...}) is set in Inter instead. */
export const charged = (t: string) => /\^\{/.test(t);
export const handFor = (t: string, hand: boolean, size: number) => (hand && charged(t) ? {hand: false, size: size * 0.84} : {hand, size});
export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));

// ---------- colour key (design): proton teal, acid (donor) amber, base (acceptor) violet, water pale blue, spent grey ----------
export const PROTON = '#2a9d8f', PROTON_INK = '#1d6f66', PROTON_SOFT = '#cdeee8';
export const ACID = AMBER, ACID_INK = AMBER_INK;
export const BASE = AN, BASE_INK = AN_INK;
export const WATER_INK = '#4f86ad', WATER_SOFT = '#dcebf6';
export const GREYT = '#9a948a', GREY_INK = '#7a746a';
export const OXY = '#d65a4a';

// ---------- atoms and molecules ----------
type El = 'H' | 'N' | 'O' | 'Cl' | 'C';
const ATOM: Record<El, {r: number; fill: string; text: string}> = {
	H: {r: 15, fill: '#ffffff', text: INK},
	N: {r: 24, fill: '#5b7fd1', text: '#ffffff'},
	O: {r: 23, fill: '#d9604f', text: '#ffffff'},
	Cl: {r: 27, fill: '#5fae62', text: '#ffffff'},
	C: {r: 22, fill: '#4c4a47', text: '#ffffff'},
};
export const Atom: React.FC<{x: number; y: number; el: El; s?: number; o?: number; moved?: boolean; glow?: number; glowColor?: string; grey?: number}> = ({x, y, el, s = 1, o = 1, moved = false, glow = 0, glowColor = PROTON, grey = 0}) => {
	if (o <= 0.01) return null;
	const a = ATOM[el];
	const r = a.r * s;
	const fill = moved ? PROTON_SOFT : grey > 0 ? hexMix(a.fill, '#d6d1c7', grey) : a.fill;
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x} cy={y} r={r + 10 * s} fill={glowColor} opacity={0.45 * glow} /> : null}
			<circle cx={x} cy={y} r={r} fill={fill} stroke={moved ? PROTON_INK : INK} strokeWidth={2.4 * Math.max(0.8, s * 0.8)} />
			<ellipse cx={x - r * 0.32} cy={y - r * 0.36} rx={r * 0.34} ry={r * 0.2} fill="#ffffff" opacity={el === 'H' ? 0 : 0.28} />
			<text x={x} y={y + r * 0.36} textAnchor="middle" fill={moved ? PROTON_INK : a.text} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * (el === 'Cl' ? 0.82 : 0.98)}}>{el}</text>
		</g>
	);
};
export type MSpec = {atoms: {el: El; u: number; v: number}[]; bonds: [number, number][]; give?: number; slot?: {u: number; v: number; to: number}; q: number; R: number};
export const SPEC: Record<string, MSpec> = {
	H2O: {atoms: [{el: 'O', u: 0, v: 0}, {el: 'H', u: -0.8, v: 0.6}, {el: 'H', u: 0.8, v: 0.6}], bonds: [[0, 1], [0, 2]], give: 2, slot: {u: 0, v: -1.0, to: 0}, q: 0, R: 1.55},
	NH3: {atoms: [{el: 'N', u: 0, v: 0}, {el: 'H', u: -0.92, v: 0.42}, {el: 'H', u: 0.92, v: 0.42}, {el: 'H', u: 0, v: 1.0}], bonds: [[0, 1], [0, 2], [0, 3]], slot: {u: 0, v: -1.0, to: 0}, q: 0, R: 1.6},
	HCl: {atoms: [{el: 'H', u: -0.62, v: 0}, {el: 'Cl', u: 0.48, v: 0}], bonds: [[0, 1]], give: 0, q: 0, R: 1.4},
	CO3: {atoms: [{el: 'C', u: 0, v: 0}, {el: 'O', u: 0, v: -1.12}, {el: 'O', u: -0.98, v: 0.58}, {el: 'O', u: 0.98, v: 0.58}], bonds: [[0, 1], [0, 2], [0, 3]], slot: {u: 0.8, v: -1.75, to: 1}, q: -2, R: 1.8},
	CH4: {atoms: [{el: 'C', u: 0, v: 0}, {el: 'H', u: 0, v: -1}, {el: 'H', u: 0, v: 1}, {el: 'H', u: -1, v: 0}, {el: 'H', u: 1, v: 0}], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]], q: 0, R: 1.6},
	CO2: {atoms: [{el: 'C', u: 0, v: 0}, {el: 'O', u: -1.15, v: 0}, {el: 'O', u: 1.15, v: 0}], bonds: [[0, 1], [0, 2]], q: 0, R: 1.7},
	HCO3: {atoms: [{el: 'C', u: 0, v: 0}, {el: 'O', u: 0, v: -1.12}, {el: 'O', u: -0.98, v: 0.58}, {el: 'O', u: 0.98, v: 0.58}, {el: 'H', u: 0.8, v: -1.75}], bonds: [[0, 1], [0, 2], [0, 3], [1, 4]], slot: {u: -1.75, v: 1.0, to: 2}, q: -1, R: 1.9},
};
export const BOND = 44;
const chargeText = (q: number) => (q === 0 ? '' : q === 1 ? '+' : q === -1 ? '−' : q > 0 ? `${q}+` : `${-q}−`);
/** Ball-and-stick molecule. give 0..1: its leaving H goes (drawn by ProtonHop meanwhile); take 0..1: a moved (teal)
 *  H arrives at the slot. The charge badge follows the transfer. */
export const Mol: React.FC<{x: number; y: number; m: keyof typeof SPEC; s?: number; o?: number; give?: number; take?: number; grey?: number; glowH?: number; charge?: boolean; rot?: number}> = ({x, y, m, s = 1, o = 1, give = 0, take = 0, grey = 0, glowH = 0, charge = true, rot = 0}) => {
	if (o <= 0.01) return null;
	const sp = SPEC[m];
	const B = BOND * s;
	const c = Math.cos(rot), sn = Math.sin(rot);
	const P = (u: number, v: number): [number, number] => [x + (u * c - v * sn) * B, y + (u * sn + v * c) * B];
	const gone = give > 0.01;
	const q = sp.q + (take >= 0.5 ? 1 : 0) - (give >= 0.5 ? 1 : 0);
	const slotP = sp.slot ? P(sp.slot.u, sp.slot.v) : null;
	return (
		<g opacity={o}>
			{sp.bonds.map(([a, b], i) => {
				if (gone && (a === sp.give || b === sp.give)) return null;
				const [x1, y1] = P(sp.atoms[a].u, sp.atoms[a].v), [x2, y2] = P(sp.atoms[b].u, sp.atoms[b].v);
				return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth={6 * s} strokeLinecap="round" />;
			})}
			{slotP && take > 0.01 && sp.slot ? (() => {
				const [tx, ty] = P(sp.atoms[sp.slot.to].u, sp.atoms[sp.slot.to].v);
				return <line x1={tx} y1={ty} x2={slotP[0]} y2={slotP[1]} stroke={PROTON_INK} strokeWidth={6 * s} strokeLinecap="round" opacity={take} />;
			})() : null}
			{sp.atoms.map((a, i) => {
				if (gone && i === sp.give) return null;
				const [ax, ay] = P(a.u, a.v);
				return <Atom key={i} x={ax} y={ay} el={a.el} s={s} grey={grey} glow={a.el === 'H' ? glowH : 0} />;
			})}
			{slotP && take > 0.01 ? <Atom x={slotP[0]} y={slotP[1]} el="H" s={s} moved o={take} /> : null}
			{charge && q !== 0 ? <text x={x + sp.R * B * 0.66} y={y - sp.R * B * 0.58} textAnchor="middle" fill={q > 0 ? ACID_INK : BASE_INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30 * s}}>{chargeText(q)}</text> : null}
		</g>
	);
};
/** Where a molecule's leaving H sits, and where an arriving H lands. */
export const giveAt = (m: keyof typeof SPEC, x: number, y: number, s = 1, rot = 0): [number, number] => {
	const sp = SPEC[m];
	const a = sp.atoms[sp.give ?? 0];
	const c = Math.cos(rot), sn = Math.sin(rot);
	return [x + (a.u * c - a.v * sn) * BOND * s, y + (a.u * sn + a.v * c) * BOND * s];
};
export const slotAt = (m: keyof typeof SPEC, x: number, y: number, s = 1, rot = 0): [number, number] => {
	const sl = SPEC[m].slot ?? {u: 0, v: -1, to: 0};
	const c = Math.cos(rot), sn = Math.sin(rot);
	return [x + (sl.u * c - sl.v * sn) * BOND * s, y + (sl.u * sn + sl.v * c) * BOND * s];
};
/** The teal proton token. */
export const Proton: React.FC<{x: number; y: number; s?: number; o?: number; label?: boolean; dashed?: boolean}> = ({x, y, s = 1, o = 1, label = true, dashed = false}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={19 * s} fill={dashed ? 'none' : PROTON} stroke={dashed ? GREYT : PROTON_INK} strokeWidth={dashed ? 3 : 2.5} strokeDasharray={dashed ? '6 5' : undefined} />
		{label ? <Sx x={x} y={y + 7 * s} text="H^{+}" size={19 * s} color={dashed ? GREYT : '#ffffff'} anchor="middle" weight={800} at={-1000} /> : null}
	</g>
));
/** A proton hopping on an arc from a to b between frames at and at + dur. Visible only while in flight. */
export const ProtonHop: React.FC<{a: [number, number]; b: [number, number]; at: number; dur?: number; s?: number; bow?: number; trail?: boolean}> = ({a, b, at, dur = 26, s = 1, bow = -70, trail = true}) => {
	const f = useCurrentFrame();
	const p = smooth(clamp01((f - at) / dur));
	if (f < at || p >= 1) return null;
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	const x = (1 - p) * (1 - p) * a[0] + 2 * (1 - p) * p * mx + p * p * b[0];
	const y = (1 - p) * (1 - p) * a[1] + 2 * (1 - p) * p * my + p * p * b[1];
	return (
		<g>
			{trail ? <path d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} fill="none" stroke={PROTON} strokeWidth={3} strokeDasharray="7 7" opacity={0.5 * Math.sin(p * Math.PI)} /> : null}
			<Proton x={x} y={y} s={s} />
		</g>
	);
};
/** give/take progress for a hop starting at `at`: the H leaves at the start and lands at the end. */
export const hopState = (f: number, at: number, dur = 26) => ({give: f >= at ? 1 : 0, take: f >= at + dur ? 1 : 0});
/** Pen arrow drawn along the hop path (stays). */
export const HopArrow: React.FC<{a: [number, number]; b: [number, number]; at: number; bow?: number; color?: string}> = ({a, b, at, bow = -70, color = PROTON_INK}) => {
	const f = useCurrentFrame();
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	const ang = Math.atan2(b[1] - my, b[0] - mx), hl = 16;
	const hx = (k: number) => b[0] - Math.cos(ang + k) * hl, hy = (k: number) => b[1] - Math.sin(ang + k) * hl;
	return (
		<g>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={18} color={color} width={4} />
			<path d={`M${hx(0.5)},${hy(0.5)} L${b[0]},${b[1]} L${hx(-0.5)},${hy(-0.5)}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 14, 6)} />
		</g>
	);
};
/** Role outline round a molecule: acid (donor) amber, base (acceptor) violet, with a small tag under it. */
export const RoleRing: React.FC<{x: number; y: number; r: number; role: 'acid' | 'base'; at: number; out?: number; tag?: string; tagDy?: number; size?: number}> = ({x, y, r, role, at, out, tag, tagDy, size = 32}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const col = role === 'acid' ? ACID : BASE, ink = role === 'acid' ? ACID_INK : BASE_INK;
	const p = prog(f, at, 18);
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={r} fill="none" stroke={col} strokeWidth={6} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} transform={`rotate(-90 ${x} ${y})`} />
			{tag ? <Note x={x} y={y + r + (tagDy ?? size + 8)} text={tag} size={size} color={ink} anchor="middle" at={at + 6} /> : null}
		</g>
	);
};

// ---------- formula tiles with glowing element letters ----------
export type FSeg = {t: string; el?: string};
/** Parse a simple formula ("H_2SO_4") into element segments. */
export const fsegs = (formula: string): FSeg[] => {
	const out: FSeg[] = [];
	const re = /([A-Z][a-z]?)(_\d+)?|(\^\{[^}]*\})|(\)(?:_\d+)?)|(\()|(\d+)/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(formula))) {
		if (m[1]) out.push({t: m[1] + (m[2] ?? ''), el: m[1]});
		else out.push({t: m[0]});
	}
	return out;
};
export const tileW = (formula: string, size: number) => mw(formula, size, false, 800) + size * 0.9;
/** A formula on a rounded tile; letters of element `glow.el` light up in `glow.color` from `glow.at`. */
export const FTile: React.FC<{x: number; y: number; formula: string; size?: number; at: number; out?: number; glow?: {el: string; at: number; color: string; out?: number}[]; stroke?: string; dashed?: boolean; dy?: number}> = ({x, y, formula, size = 60, at, out, glow = [], stroke = 'rgba(60,45,20,0.25)', dashed = false, dy = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const w = tileW(formula, size), h = size * 1.5;
	let cx = x + size * 0.45;
	const segs = fsegs(formula);
	const lift = (1 - prog(f, at, 16)) * 24 + dy;
	return (
		<g opacity={o} transform={`translate(0,${lift})`}>
			<rect x={x} y={y - h * 0.68} width={w} height={h} rx={18} fill="#fffdf8" stroke={stroke} strokeWidth={3} strokeDasharray={dashed ? '10 7' : undefined} />
			{segs.map((sg, i) => {
				const sw = mw(sg.t, size, false, 800);
				const px = cx;
				cx += sw;
				const g = glow.filter(gg => gg.el === sg.el).reduce((acc, gg) => Math.max(acc, vis(f, gg.at, gg.out, 12)), 0);
				const col = glow.find(gg => gg.el === sg.el)?.color ?? INK;
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={px - 4} y={y - size * 0.86} width={sw + 8} height={size * 1.08} rx={10} fill={col} opacity={0.22 * g} /> : null}
						<Sx x={px} y={y} text={sg.t} size={size} color={g > 0.5 ? col : INK} weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- timeline of dated name cards ----------
export type TCard = {decade: string; lines: {t: string; size: number; weight?: number; hand?: boolean; color?: string}[]; stamp: string[]};
export const CARDS: TCard[] = [
	{decade: '1770s', lines: [{t: 'Antoine Lavoisier', size: 28, weight: 800}, {t: 'Paris, 1770s', size: 22, weight: 600, color: INK_SOFT}, {t: 'acids contain oxygen', size: 32, hand: true}], stamp: ['broken by: HCl']},
	{decade: '1810s', lines: [{t: 'Humphry Davy', size: 28, weight: 800}, {t: 'London, 1810s', size: 22, weight: 600, color: INK_SOFT}, {t: 'acids contain hydrogen', size: 32, hand: true}], stamp: ['limit: hydrogen alone does not', 'identify an acid; no base definition']},
	{decade: '1880s', lines: [{t: 'Svante Arrhenius', size: 28, weight: 800}, {t: 'Sweden, 1880s', size: 22, weight: 600, color: INK_SOFT}, {t: 'acid: releases H^{+} in water', size: 27, hand: true}, {t: 'base: releases its own OH^{-}', size: 27, hand: true}], stamp: ['limits: NH_3, carbonates,', 'reactions not in aqueous solution']},
	{decade: '1923', lines: [{t: 'Johannes Brønsted, Copenhagen', size: 22, weight: 800}, {t: 'Thomas Lowry, Cambridge', size: 22, weight: 800}, {t: 'acid: proton (H^{+}) donor', size: 27, hand: true}, {t: 'base: proton (H^{+}) acceptor', size: 27, hand: true}], stamp: ['limit: needs a proton to transfer']},
];
export const TL = {x: 96, y: 182, cw: 408, gap: 33, ch: 158};
export const cardX = (i: number) => TL.x + i * (TL.cw + TL.gap);
/** Timeline state for a scene. fill[i] / stamp[i]: frame the card or its stamp appears (undefined: not yet). slots: empty
 *  dashed slots are drawn from this frame. strip: 0 full size under the heading, 1 small and dim top-right. lit[i]:
 *  frame a stamp glows. */
export type TLProps = {fill: (number | undefined)[]; stamp?: (number | undefined)[]; slots?: number; strip?: number; dim?: number; lit?: (number | undefined)[]; arrows?: number; extra?: React.ReactNode; scale?: number};
export const Timeline: React.FC<TLProps> = ({fill, stamp = [], slots = -1000, strip = 0, dim = 0, lit = [], arrows, extra, scale = 1}) => {
	const f = useCurrentFrame();
	const k = smooth(strip);
	const sFull = scale, sStrip = 0.44;
	const s = lerp(sFull, sStrip, k);
	const tx = lerp(TL.x, 1824 - (4 * TL.cw + 3 * TL.gap) * sStrip, k), ty = lerp(TL.y, 66, k);
	const o = prog(f, slots, 14) * (1 - 0.5 * k) * (1 - 0.6 * clamp01(dim));
	if (o <= 0.01) return null;
	const total = 4 * TL.cw + 3 * TL.gap;
	return (
		<g opacity={o} transform={`translate(${tx},${ty}) scale(${s}) translate(${-TL.x},${-TL.y})`}>
			<DrawPath d={`M${TL.x},${TL.y + 14} L${TL.x + total},${TL.y + 14}`} at={slots} dur={30} color={INK_SOFT} width={3} />
			{CARDS.map((c, i) => {
				const x = cardX(i), y = TL.y + 34;
				const fo = fill[i] === undefined ? 0 : prog(f, fill[i] as number, 16);
				const so = stamp[i] === undefined ? 0 : prog(f, stamp[i] as number, 10);
				const pop = stamp[i] === undefined ? 1 : 1 + 0.25 * (1 - smooth(prog(f, stamp[i] as number, 14)));
				const g = lit[i] === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - (lit[i] as number)) / 40) * Math.PI));
				const sw = Math.max(...c.stamp.map(t => mw(t, 20, false, 700))) + 30;
				return (
					<g key={i}>
						<circle cx={x + 18} cy={TL.y + 14} r={8} fill={fo > 0.5 ? TEAL : '#fffdf8'} stroke={TEAL} strokeWidth={3} />
						<Sx x={x + 34} y={TL.y + 2} text={c.decade} size={24} color={TEAL} weight={800} at={-1000} />
						<rect x={x} y={y} width={TL.cw} height={TL.ch} rx={16} fill={fo > 0.01 ? '#fffdf8' : 'none'} stroke={fo > 0.01 ? 'rgba(60,45,20,0.25)' : INK_SOFT} strokeWidth={3} strokeDasharray={fo > 0.01 ? undefined : '10 8'} opacity={fo > 0.01 ? Math.max(0.4, fo) : 0.6} />
						<g opacity={fo}>
							{c.lines.map((l, j) => {
								const ly = y + 34 + c.lines.slice(0, j).reduce((a, q) => a + q.size * 1.16, 0) + (j >= 2 && c.lines.length === 3 ? 10 : j >= 2 ? 6 : 0);
								const h = handFor(l.t, !!l.hand, l.size);
								return <Sx key={j} x={x + 20} y={ly} text={l.t} size={h.size} color={l.color ?? INK} weight={l.weight ?? (h.hand ? 700 : 600)} hand={h.hand} at={-1000} />;
							})}
						</g>
						{so > 0.01 ? (
							<g opacity={so} transform={`translate(${x + 14},${y + TL.ch + 12}) rotate(-1.5) scale(${pop})`}>
								{g > 0.01 ? <rect x={-8} y={-8} width={sw + 16} height={c.stamp.length * 26 + 30} rx={14} fill="#f6d77a" opacity={0.7 * g} /> : null}
								<rect x={0} y={0} width={sw} height={c.stamp.length * 26 + 14} rx={10} fill="#fff8ea" stroke={ACID} strokeWidth={3} />
								{c.stamp.map((t, j) => <Sx key={j} x={15} y={27 + j * 26} text={t} size={20} color={ACID_INK} weight={700} at={-1000} />)}
							</g>
						) : null}
						{arrows !== undefined && i < 3 ? <Arrow x1={x + TL.cw - 30} y1={TL.y - 6} x2={x + TL.cw + TL.gap + 30} y2={TL.y - 6} at={arrows + i * 8} color={ACID} width={4} /> : null}
					</g>
				);
			})}
			{extra}
		</g>
	);
};
/** Main zone top under the full timeline (stamps included). */
export const MAIN_Y = 450;

// ---------- underlines and boxes on equation tokens ----------
const isOp = (it: EItem) => 'op' in it;
/** Box (x1, x2) of item i of an equation line drawn at x (anchor start or middle). */
export const eSpan = (items: EItem[], i: number, size: number, x: number, anchor: 'start' | 'middle' = 'start') => {
	const x0 = anchor === 'middle' ? x - eWidth(items, size) / 2 : x;
	const p = eLayout(items, size, x0).pos[i];
	return {x1: p.x, x2: p.x + p.w, cx: p.x + p.w / 2};
};
/** Hand-drawn underline (x1..x2 at baseline y + gap). */
export const Under: React.FC<{x1: number; x2: number; y: number; at: number; color?: string; width?: number; out?: number}> = ({x1, x2, y, at, color = AMBER, width = 5, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={`M${x1 - 3},${y + 1} C${x1 + (x2 - x1) * 0.3},${y + 5} ${x1 + (x2 - x1) * 0.7},${y - 2} ${x2 + 3},${y + 2}`} at={at} dur={Math.min(20, 8 + (x2 - x1) / 30)} color={color} width={width} /></g>;
};
/** Underline token i of an equation line. */
export const EqUnder: React.FC<{items: EItem[]; i: number; size: number; x: number; y: number; at: number; color?: string; anchor?: 'start' | 'middle'; out?: number}> = ({items, i, size, x, y, at, color = AMBER, anchor = 'start', out}) => {
	const sp = eSpan(items, i, size, x, anchor);
	return <Under x1={sp.x1 + 2} x2={sp.x2 - 4} y={y + size * 0.24} at={at} color={color} out={out} />;
};
/** Rounded outline round token i (role colour). */
export const EqBox: React.FC<{items: EItem[]; i: number; size: number; x: number; y: number; at: number; color: string; anchor?: 'start' | 'middle'; out?: number; tag?: string; tagBelow?: boolean}> = ({items, i, size, x, y, at, color, anchor = 'start', out, tag, tagBelow = true}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	const sp = eSpan(items, i, size, x, anchor);
	return (
		<g opacity={o}>
			<rect x={sp.x1 - 8} y={y - size * 0.98} width={sp.x2 - sp.x1 + 8} height={size * 1.36} rx={12} fill="none" stroke={color} strokeWidth={4.5} />
			{tag ? <Sx x={sp.cx - 2} y={tagBelow ? y + size * 0.4 + 34 : y - size - 16} text={tag} size={30} color={color === ACID ? ACID_INK : color === BASE ? BASE_INK : color} anchor="middle" hand at={at + 4} /> : null}
		</g>
	);
};
/** Centre point above (dy < 0) or below a token. */
export const eAnchor = (items: EItem[], i: number, size: number, x: number, y: number, dy: number, anchor: 'start' | 'middle' = 'start'): [number, number] => [eSpan(items, i, size, x, anchor).cx, y + dy];
/** Builds equation items: strings are tokens, '+' / '->' / '<=>' are operators. One `at` for all unless given per index. */
export const eq = (parts: (string | {t: string; color?: string})[], at: number | number[], rev?: number): EItem[] =>
	parts.map((p, i) => {
		const a = Array.isArray(at) ? (at[i] ?? at[at.length - 1]) : at;
		if (p === '+') return {op: '+', at: a};
		if (p === '->') return {op: '->', at: a};
		if (p === '<=>') return {op: '->', at: a, rev: rev ?? a};
		return typeof p === 'string' ? {t: p, at: a} : {t: p.t, color: p.color, at: a};
	});
void isOp;

// ---------- small text helpers ----------
export const Note: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; weight?: number}> = ({x, y, text, at, out, size = 34, color = INK, anchor = 'start', hand = true, weight}) => {
	const h = handFor(text, hand, size);
	return <Sx x={x} y={y} text={text} size={h.size} color={color} anchor={anchor} hand={h.hand} at={at} out={out} weight={weight ?? (h.hand ? 700 : 600)} />;
};
/** Auto-width chip. */
export const AChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; hand?: boolean; anchor?: 'start' | 'middle'}> = ({x, y, text, at, out, size = 34, color = TEAL, hand = true, anchor = 'start'}) => {
	const h = handFor(text, hand, size);
	const w = mw(text, h.size, h.hand, 700) + size * 1.4;
	return <Chip x={anchor === 'middle' ? x - w / 2 : x} y={y} w={w} text={text} at={at} out={out} size={h.size} color={color} h={size * 1.6} hand={h.hand} />;
};
/** A crossed classic-mistake chip (the shared MistakeChip look; text with charges is set in Inter). */
export const Mistake: React.FC<{x: number; y: number; text: string; at: number; out?: number; note?: string; size?: number}> = ({x, y, text, at, out, note, size = 32}) => {
	const t = handFor(text, true, size);
	const W = mw(text, t.size, t.hand, 700) + 110;
	const H = size + 30;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={W} height={H} rx={H / 2} fill="#fffdf8" stroke={CROSS} strokeWidth={3} />
			<Sx x={x + 26} y={y + H / 2 + t.size * 0.34} text={text} size={t.size} color={INK_SOFT} hand={t.hand} weight={t.hand ? 700 : 600} at={at} />
			<DrawPath d={`M${x + W - 56},${y + 12} L${x + W - 22},${y + H - 12}`} at={at + 12} dur={8} color={CROSS} width={7} />
			<DrawPath d={`M${x + W - 22},${y + 12} L${x + W - 56},${y + H - 12}`} at={at + 18} dur={8} color={CROSS} width={7} />
			{note ? <Note x={x + 26} y={y + H + 40} text={note} size={size * 0.98} color={TEAL} at={at + 20} /> : null}
		</Fade>
	);
};
/** A card with a soft outline. */
export const Card: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; stroke?: string; fill?: string; dashed?: boolean; sw?: number}> = ({x, y, w, h, at, out, stroke = 'rgba(60,45,20,0.22)', fill = '#fffdf8', dashed = false, sw = 3}) => (
	<Fade at={at} out={out}><rect x={x} y={y} width={w} height={h} rx={20} fill={fill} stroke={stroke} strokeWidth={sw} strokeDasharray={dashed ? '12 8' : undefined} /></Fade>
);
/** A plate fading in (and optionally out), placed by its visible box. */
export const PlateAt: React.FC<{p: PDef; x: number; y: number; h: number; at: number; out?: number; o?: number}> = ({p, x, y, h, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	return v > 0.01 ? <PicH p={p} x={x} y={y} h={h} o={v} /> : null;
};
/** Two aligned plates crossfading at `swap` over `dur` frames. */
export const PairAt: React.FC<{a: PDef; b: PDef; x: number; y: number; h: number; at: number; swap: number; dur?: number; out?: number}> = ({a, b, x, y, h, at, swap, dur = 30, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	const q = prog(f, swap, dur);
	return (
		<g opacity={v}>
			{q < 0.999 ? <PicH p={a} x={x} y={y} h={h} /> : null}
			{q > 0.001 ? <PicH p={b} x={x} y={y} h={h} o={q} /> : null}
		</g>
	);
};
/** Rule card: lines light (amber glow) while spoken. */
export type RLine = {t: string; at: number; lit?: [number, number]; size?: number; color?: string; hand?: boolean};
export const RuleCard: React.FC<{x: number; y: number; w: number; lines: RLine[]; at: number; title?: string; lh?: number; out?: number; stroke?: string}> = ({x, y, w, lines, at, title, lh = 70, out, stroke = TEAL}) => {
	const f = useCurrentFrame();
	const top = title ? 70 : 24;
	const h = top + lines.length * lh + 10;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill="#fffdf8" stroke={stroke} strokeWidth={3.5} />
			{title ? <Sx x={x + 30} y={y + 50} text={title} size={34} color={stroke} hand at={-1000} /> : null}
			{lines.map((l, i) => {
				const yy = y + top + i * lh + lh * 0.62;
				const g = l.lit ? vis(f, l.lit[0], l.lit[1], 10) : 0;
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={x + 12} y={yy - lh * 0.6} width={w - 24} height={lh * 0.86} rx={12} fill="#f6d77a" opacity={0.4 * g} /> : null}
						{(() => { const h = handFor(l.t, l.hand ?? true, l.size ?? 40); return <Sx x={x + 30} y={yy} text={l.t} size={h.size} color={l.color ?? INK} hand={h.hand} weight={h.hand ? 700 : 600} at={l.at} />; })()}
					</g>
				);
			})}
		</Fade>
	);
};
export const ruleCardH = (n: number, title = true, lh = 70) => (title ? 70 : 24) + n * lh + 10;

// ---------- the worded question card: prose, an optional equation line, more prose ----------
export type QPart = {blocks: QBlock[]; marks?: QMark[]} | {eq: EItem[]; size: number};
/** Lays out prose blocks (QText) and equation lines in one card. Returns geometry so feedback can point at the parts. */
export const qLayout = (parts: QPart[], y0: number, size: number) => {
	let y = y0;
	return parts.map(p => {
		if ('eq' in p) {
			const yy = y + p.size * 0.95;
			y = yy + p.size * 0.95;
			return {p, y: yy};
		}
		const lines = p.blocks.reduce((a, b) => a + Math.ceil(b.text.length / 70), 0);
		const yy = y + size;
		y = yy + lines * size * 1.32 + size * 0.2;
		return {p, y: yy};
	});
};
