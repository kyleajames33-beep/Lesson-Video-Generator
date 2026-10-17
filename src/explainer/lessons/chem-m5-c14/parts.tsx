// Drawing parts for C14 (Ksp expressions and molar solubility), shared with C15 (Qsp and the common ion effect).
// Reused: hydrated ions, lens frame, equation token line, text widths, chips and the "left out" tray (C11, C13, C10);
// the ICE table (C6), the E-row-first pen arrow and E - I bracket (C6a), the check ruler (C6b), the square root
// sign (C6), the log number line with K and Q markers (C8), the bracket builder rows (C5) and the countdown (kit).
// New here, ported as ideas only from the legacy KspDissolveDiagram (logic, not code): a ratio-true ion swarm lens in
// which whole formula units leave and rejoin the crystal floor in the salt's own ion ratio.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {Arrow, Chip, EqLine, Fade, HydratedIon, KeyNotesBoard, LensFrame, MistakeChip, Overlay, PauseHold, PicH, PiecesM, Readout, Ring, Sx, TEAL, TaskLine, Tick, Tray, KName, LogLine, KMarker, QMarker, GivensCard, Falling, TwoWay, HBracket, VBracket, eCentre, eLayout, eWidth, mw, picW, platePt, pulseAt, smooth, tw} from '../chem-m5-c11/parts';
import type {EItem, ETok, Kind, Ln, MPiece} from '../chem-m5-c11/parts';
import {Lock} from '../chem-m5-c11/parts';
import {SwapCross, RulesMini, fitSize} from '../chem-m5-c13/parts';
import {IceTable, iceCell, iceRowY, iceColX, LABEL_W, COL_W, HEAD_H, ROW_H} from '../chem-m5-c06/ice';
import type {IceCol, IceRow, IceCell} from '../chem-m5-c06/ice';
import {Radical, Tag} from '../chem-m5-c06/parts';
import {CurveArrow, EIBracket} from '../chem-m5-c06a/types';
import {CheckRuler} from '../chem-m5-c06b/parts';
import {Line, rowXs} from '../chem-m5-c05/parts';
import type {Term} from '../chem-m5-c05/parts';
import {AN_INK, CAT_INK, CROSS, LEFT, WHITE_INK, hexMix} from './common';

export {Arrow, Chip, EqLine, Fade, HydratedIon, KeyNotesBoard, LensFrame, MistakeChip, Overlay, PauseHold, PicH, PiecesM, Readout, Ring, Sx, TEAL, TaskLine, Tick, Tray, KName, LogLine, KMarker, QMarker, GivensCard, Falling, TwoWay, HBracket, VBracket, eCentre, eLayout, eWidth, mw, picW, platePt, pulseAt, smooth, tw, Lock};
export {SwapCross, RulesMini, fitSize, IceTable, iceCell, iceRowY, iceColX, LABEL_W, COL_W, HEAD_H, ROW_H, Radical, Tag, CurveArrow, EIBracket, CheckRuler, Line, rowXs};
export type {EItem, ETok, Kind, Ln, MPiece, IceCol, IceRow, IceCell, Term};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- board geometry (the same three zones in every calculation) ----------
export const BD = {
	task: {x: 96, y: 150, s: 52},
	strip: {x: 96, y: 250, s: 38},
	card: {x: 96, y: 290, w: 600, lh: 50, s: 30},
	ice: {x: 770, y: 196, s: 0.76},
	alg: {x: 770, y: 620, lh: 74, s: 42},
	lens: {cx: 1650, cy: 360, r: 160},
	plate: {x: 96, y: 600, h: 300},
};
export const cardH = (n: number) => 108 + (n - 1) * BD.card.lh + 30;
/** Baseline of givens card line i (card at BD.card). */
export const cardLineY = (i: number, y = BD.card.y) => y + 108 + i * BD.card.lh;

// ---------- labelled ions (a wider set than C13) ----------
export const IONS2: Record<string, {kind: Kind; r: number}> = {
	'Ba^{2+}': {kind: '+', r: 29}, 'Ca^{2+}': {kind: '+', r: 29}, 'Mg^{2+}': {kind: '+', r: 28}, 'Pb^{2+}': {kind: '+', r: 29},
	'Ag^{+}': {kind: '+', r: 26}, 'Na^{+}': {kind: '+', r: 26}, 'K^{+}': {kind: '+', r: 26},
	'SO_4^{2-}': {kind: '-', r: 34}, 'F^{-}': {kind: '-', r: 26}, 'OH^{-}': {kind: '-', r: 28}, 'Cl^{-}': {kind: '-', r: 30},
	'I^{-}': {kind: '-', r: 30}, 'CO_3^{2-}': {kind: '-', r: 33}, 'C_2O_4^{2-}': {kind: '-', r: 36}, 'NO_3^{-}': {kind: '-', r: 33},
};
/** A labelled ion: hydrated (shell 1) when dissolved, bare (shell 0) in the crystal. */
export const LIon: React.FC<{x: number; y: number; ion: string; shell?: number; o?: number; grey?: number; rot?: number; scale?: number; glow?: number}> = ({x, y, ion, shell = 1, o = 1, grey = 0, rot = 0, scale = 1, glow = 0}) => {
	const d = IONS2[ion] ?? {kind: '+' as Kind, r: 28};
	return <HydratedIon x={x} y={y} kind={d.kind} label={ion} shell={shell} r={d.r * scale} ws={0.5 * scale} n={6} o={o} grey={grey} rot={rot} labelSize={17 * scale} glow={glow} />;
};
export const drift = (f: number, ph: number, amp = 9): [number, number] => [Math.sin(f * 0.031 + ph) * amp, Math.cos(f * 0.027 + ph * 1.3) * amp];

// ---------- ratio-true swarm lens: crystal floor, dissolved ions, whole formula units leaving and rejoining ----------
export type Unit = {at: number; kind: 'leave' | 'join' | 'split'; slot?: number; ring?: number; tags?: number; life?: number};
export type Rain = {at: number; ion: string; n: number; every?: number; partner?: string};
export type SwarmProps = {
	cx: number; cy: number; r: number; at: number; out?: number;
	cat: string; an: string; k?: 1 | 2;
	/** dissolved formula units drifting (each is one cation and k anions, all separate) */
	nFree?: number | ((f: number) => number);
	units?: Unit[];
	/** automatic leave and join events at equal rates (a dynamic equilibrium) */
	cycle?: {from: number; to: number; period: number};
	rain?: Rain;
	specks?: number; title?: string; titleAt?: number; scale?: number; tint?: string; floorRows?: number;
};
const FREE_SLOTS = (() => {
	const rr = rng(31);
	const out: {u: number; v: number; ph: number}[] = [];
	const order = [7, 1, 13, 4, 10, 16, 2, 8, 19, 14, 0, 11, 5, 17, 3, 12, 6, 18, 9, 15];
	for (const k of order) {
		const col = k % 5, row = Math.floor(k / 5);
		out.push({u: -0.5 + col * 0.25 + (rr() - 0.5) * 0.1, v: -0.6 + row * 0.2 + (rr() - 0.5) * 0.06, ph: rr() * 6.28});
	}
	return out;
})();
export const SwarmLens: React.FC<SwarmProps> = ({cx, cy, r, at, out, cat, an, k = 1, nFree = 2, units = [], cycle, rain, specks = 0, title, titleAt, scale = 0.78, tint = '#f1f7fb', floorRows = 3}) => {
	const f = useCurrentFrame();
	const s = 60 * scale;
	const top = cy + r * 0.36;
	const cols = Math.ceil((2 * r) / s) + 2;
	const xs = Array.from({length: cols}, (_, i) => cx - r - s * 0.3 + i * s);
	const kindAt = (i: number, j: number) => (k === 1 ? ((i + j) % 2 === 0 ? cat : an) : ((i + 2 * j) % 3 === 0 ? cat : an));
	// events: explicit units plus the automatic cycle
	const ev: Unit[] = [...units];
	if (cycle) {
		let n = 0;
		for (let t = cycle.from; t < cycle.to; t += cycle.period) {
			ev.push({at: t, kind: n % 2 === 0 ? 'leave' : 'join', slot: 2 + ((n * 5) % Math.max(1, cols - 4))});
			n++;
		}
	}
	const hidden = new Set<number>();
	const movers: React.ReactNode[] = [];
	ev.forEach((e, idx) => {
		const life = e.life ?? 54;
		const u = (f - e.at) / life;
		if (u < 0) return;
		const keep = e.kind === 'split';
		if (!keep && u > 1.25) return;
		const j = Math.max(1, Math.min(cols - 2, e.slot ?? 2 + ((idx * 4) % Math.max(1, cols - 4))));
		const members: {ion: string; fx: number; fy: number; tx: number; ty: number}[] = [{ion: cat, fx: xs[j], fy: top, tx: xs[j], ty: top - r * 0.62}];
		const offs = k === 1 ? [1] : [-1, 1];
		offs.forEach((o, q) => members.push({ion: an, fx: xs[j + o], fy: top, tx: xs[j] + o * s * 1.5, ty: top - r * (0.42 + 0.12 * q)}));
		const join = e.kind === 'join';
		const p = smooth(clamp01(u));
		if (!(join && u >= 1)) members.forEach((_, q) => hidden.add(j + (q === 0 ? 0 : offs[q - 1])));
		const o = join ? smooth(clamp01(u / 0.2)) : keep ? 1 : 1 - smooth(clamp01((u - 0.95) / 0.3));
		members.forEach((m, q) => {
			const pp = join ? 1 - p : p;
			const x = m.fx + (m.tx - m.fx) * pp + Math.sin(pp * 3 + q) * 8 * (1 - Math.abs(pp - 0.5) * 2);
			const y = m.fy + (m.ty - m.fy) * pp;
			const [dx, dy] = keep && u > 1 ? drift(f - e.at, q * 2.1, 5) : [0, 0];
			movers.push(<LIon key={`u${idx}-${q}`} x={x + dx} y={y + dy} ion={m.ion} shell={pp * 1.2} scale={scale} o={o} rot={q} />);
			if (e.tags !== undefined && f >= e.tags) movers.push(<Sx key={`t${idx}-${q}`} x={m.tx + dx} y={m.ty + dy - 44 * scale - 18} text="1" size={30} color={q === 0 ? CAT_INK : AN_INK} anchor="middle" hand at={e.tags + q * 6} />);
			if (e.ring !== undefined && q > 0) movers.push(<Ring key={`r${idx}-${q}`} cx={m.tx + dx} cy={m.ty + dy} rx={46 * scale + 10} ry={46 * scale + 10} at={e.ring + q * 6} color={AMBER} seed={idx + q} width={4} />);
		});
	});
	const nf = typeof nFree === 'function' ? nFree(f) : nFree;
	const freeIons: React.ReactNode[] = [];
	const nIon = Math.ceil(nf) * (1 + k);
	for (let i = 0; i < Math.min(nIon, FREE_SLOTS.length); i++) {
		const unit = Math.floor(i / (1 + k));
		const o = clamp01(nf - unit);
		if (o <= 0.01) continue;
		const d = FREE_SLOTS[i];
		const [dx, dy] = drift(f, d.ph, 9);
		freeIons.push(<LIon key={'f' + i} x={cx + d.u * r + dx} y={cy + d.v * r + dy} ion={i % (1 + k) === 0 ? cat : an} scale={scale} o={o} rot={d.ph} />);
	}
	const rainIons: React.ReactNode[] = [];
	if (rain) {
		const rr = rng(77);
		for (let i = 0; i < rain.n; i++) {
			const t0 = rain.at + i * (rain.every ?? 8);
			const col = (i * 3) % 4, row = Math.floor(i / 4);
			const tx = cx + (-0.6 + col * 0.4 + (rr() - 0.5) * 0.08) * r, ty = cy + (-0.42 + row * 0.34 + (i % 2) * 0.1) * r, ph = rr() * 6.28;
			const px = tx + 48 * scale, py = ty + 40 * scale;
			if (f < t0) continue;
			const u = smooth(clamp01((f - t0) / 26));
			const y0 = cy - r - 40;
			const [dx, dy] = drift(f - t0, ph, 8 * u);
			rainIons.push(<LIon key={'ra' + i} x={tx + dx} y={y0 + (ty - y0) * u + dy} ion={rain.ion} scale={scale} rot={ph} />);
			if (rain.partner) rainIons.push(<LIon key={'rp' + i} x={px - dx} y={y0 - 30 + (py - y0 + 30) * u - dy} ion={rain.partner} scale={scale * 0.85} grey={0.7} rot={ph + 1} />);
		}
	}
	const speckEls: React.ReactNode[] = [];
	if (specks > 0) {
		const rr = rng(5);
		for (let i = 0; i < specks; i++) {
			const u0 = (rr() - 0.5) * 1.8, v0 = (rr() - 0.5) * 1.6, ph = rr() * 6.28, sz = 6 + rr() * 7;
			const [dx, dy] = drift(f, ph, 12);
			speckEls.push(<rect key={'s' + i} x={cx + u0 * r + dx - sz / 2} y={cy + v0 * r + dy - sz / 2} width={sz} height={sz} rx={2} fill="#ffffff" stroke="#b8c2c9" strokeWidth={1.4} transform={`rotate(${ph * 40},${cx + u0 * r + dx},${cy + v0 * r + dy})`} />);
		}
	}
	const floor: React.ReactNode[] = [];
	for (let jr = 0; jr < floorRows; jr++) for (let i = 0; i < cols; i++) {
		if (jr === 0 && hidden.has(i)) continue;
		floor.push(<LIon key={`c${jr}-${i}`} x={xs[i] + (jr % 2 ? s * 0.0 : 0)} y={top + jr * s * 0.92} ion={kindAt(i, jr)} shell={0} scale={scale} />);
	}
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title} titleAt={titleAt}>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill={tint} />
			{speckEls}
			{floor}
			{freeIons}
			{movers}
			{rainIons}
		</LensFrame>
	);
};

// ---------- ICE table with a greyed solid column (left out of Ksp) ----------
export type IceSProps = {x: number; y: number; s?: number; solid?: {name: string; at: number; ring?: number; ringOut?: number}; cols: IceCol[]; rows: IceRow[]; outlineAt?: number; opacity?: number; rowNames?: string[]};
const SOLID_FILL = '#ebe5d8';
export const IceS: React.FC<IceSProps> = ({x, y, s = BD.ice.s, solid, cols, rows, outlineAt, opacity = 1, rowNames}) => {
	const f = useCurrentFrame();
	const allCols = solid ? [{name: '', at: solid.at, color: LEFT}, ...cols] : cols;
	const sz = solid ? Math.min(48, (COL_W - 16) / Math.max(1, mw(solid.name, 1))) : 48;
	const allRows = solid ? rows.map(r => ({...r, cells: [null, ...r.cells]})) : rows;
	const so = solid ? prog(f, solid.at + 6, 14) : 0;
	const H = HEAD_H + 3 * ROW_H;
	return (
		<g opacity={opacity}>
			<IceTable x={x} y={y} s={s} cols={allCols} rows={allRows} outlineAt={outlineAt} rowNames={rowNames} />
			{solid && so > 0.01 ? (
				<g transform={`translate(${x},${y}) scale(${s})`} opacity={so}>
					<rect x={LABEL_W + 5} y={70} width={COL_W - 10} height={H - 75} rx={10} fill={SOLID_FILL} stroke={LEFT} strokeWidth={2.5} strokeDasharray="9 7" />
					{[0, 1, 2, 3, 4].map(i => <path key={i} d={`M${LABEL_W + 20},${HEAD_H + 30 + i * 60} L${LABEL_W + COL_W - 20},${HEAD_H + 10 + i * 60}`} stroke={LEFT} strokeWidth={2} opacity={0.35} />)}
					<Sx x={LABEL_W + COL_W / 2} y={102} text="left out" size={30} color={LEFT} anchor="middle" hand at={-1000} />
				</g>
			) : null}
			{solid ? (
				<g transform={`translate(${x},${y}) scale(${s})`} opacity={prog(f, solid.at, 12)}>
					<Sx x={LABEL_W + COL_W / 2} y={56} text={solid.name} size={sz} color={LEFT} anchor="middle" at={-1000} />
				</g>
			) : null}
			{solid && solid.ring !== undefined ? <Ring cx={x + s * (LABEL_W + COL_W / 2)} cy={y + s * (H / 2 + 20)} rx={s * COL_W * 0.62} ry={s * H * 0.56} at={solid.ring} out={solid.ringOut} color={AMBER} seed={6} width={5} /> : null}
		</g>
	);
};
/** Centre of an ion cell (row r, ion column c) in a table drawn with IceS (with its solid column). */
export const cellS = (x: number, y: number, s: number, r: number, c: number, solid = true): [number, number] => iceCell(x, y, s, r, solid ? c + 1 : c);
export const iceSW = (nIon: number, s = BD.ice.s, solid = true) => s * (LABEL_W + (nIon + (solid ? 1 : 0)) * COL_W);
export const iceSH = (s = BD.ice.s) => s * (HEAD_H + 3 * ROW_H);
/** Row letters that write first and expand into the full word on their cue (C6a motion). */
export const RowLetters: React.FC<{x: number; y: number; s?: number; letterAt: number; expand: [number, number, number]}> = ({x, y, s = BD.ice.s, letterAt, expand}) => (
	<g>
		{['I', 'C', 'E'].map((t, i) => <Sx key={t} x={x + s * 20} y={iceRowY(y, s, i) + s * 18} text={t} size={52 * s} color={INK} hand at={letterAt + i * 6} out={expand[i]} />)}
	</g>
);

// ---------- dissolving equation as a token line ----------
export type DissIdx = {solid: number; arrow: number; catCoef: number; cat: number; plus: number; anCoef: number; an: number};
/** Tokens for "solid ⇌ (c)cation + (a)anion". `ats` are the write-on frames of: solid, arrow, cation, plus, anion. */
export const dissEq = (solid: string, cat: string, an: string, ats: number[] | number, o: {catCoef?: string; anCoef?: string; out?: number; solidColor?: string} = {}): {items: EItem[]; ix: DissIdx} => {
	const A = (q: number) => (Array.isArray(ats) ? ats[Math.min(q, ats.length - 1)] : ats + q * 6);
	const items: EItem[] = [];
	const ix: DissIdx = {solid: -1, arrow: -1, catCoef: -1, cat: -1, plus: -1, anCoef: -1, an: -1};
	ix.solid = items.length; items.push({t: solid, color: o.solidColor ?? WHITE_INK, at: A(0), out: o.out});
	ix.arrow = items.length; items.push({op: '->', at: A(1), rev: -1000, out: o.out});
	if (o.catCoef) { ix.catCoef = items.length; items.push({t: o.catCoef, color: CAT_INK, at: A(2), out: o.out}); }
	ix.cat = items.length; items.push({t: cat, color: CAT_INK, at: A(2), out: o.out});
	ix.plus = items.length; items.push({op: '+', at: A(3), out: o.out});
	if (o.anCoef) { ix.anCoef = items.length; items.push({t: o.anCoef, color: AN_INK, at: A(4), out: o.out}); }
	ix.an = items.length; items.push({t: an, color: AN_INK, at: A(4), out: o.out});
	return {items, ix};
};
/** Centre of the subscript digit `sub` inside formula token i (for a pen line from subscript to coefficient). */
export const subPt = (items: EItem[], i: number, size: number, x0: number, y: number, before: string, sub: string): [number, number] => {
	const p = eLayout(items, size, x0).pos[i];
	const a = mw(before, size), b = mw(before + '_' + sub, size);
	return [p.x + a + (b - a) / 2, y + size * 0.12];
};

// ---------- algebra lines ----------
/** Left x and width of every piece of a PiecesM row. */
export const segXs = (items: MPiece[], x: number, size: number) => {
	let cx = x;
	return items.map(p => {
		const s = p.size ?? size;
		const w = mw(p.t, s, p.hand, p.weight ?? 700);
		const r = {x: cx, w};
		cx += w + (p.gap ?? s * 0.35);
		return r;
	});
};
export const segsW = (items: MPiece[], size: number) => {
	const xs = segXs(items, 0, size);
	return xs.length ? xs[xs.length - 1].x + xs[xs.length - 1].w : 0;
};
/** One algebra line; optional strike over the whole line (a slip). */
export const ALine: React.FC<{x: number; y: number; items: MPiece[]; size?: number; out?: number; strike?: number; strikeColor?: string}> = ({x, y, items, size = BD.alg.s, out, strike, strikeColor = '#9a948a'}) => {
	const w = segsW(items, size);
	return (
		<g>
			<PiecesM x={x} y={y} items={items} size={size} out={out} />
			{strike !== undefined ? <Fade at={strike} out={out}><DrawPath d={`M${x - 6},${y - size * 0.22} L${x + w + 6},${y - size * 0.42}`} at={strike} dur={14} color={strikeColor} width={Math.max(4, size * 0.1)} /></Fade> : null}
		</g>
	);
};
/** Square or cube root sign drawn over a span of text (x0..x0 + w) on baseline y. */
export const RootOver: React.FC<{x0: number; w: number; y: number; size: number; at: number; cube?: boolean; color?: string; out?: number}> = ({x0, w, y, size, at, cube = false, color = AMBER_INK, out}) => {
	const h = size * 1.3;
	const top = y - size * 1.14;
	const rx = x0 - h * 0.7;
	return (
		<Fade at={at} out={out}>
			<Radical x={rx} y={top} w={x0 + w + 6 - rx} h={h} at={at} color={color} />
			{cube ? <Sx x={rx - size * 0.12} y={top + h * 0.5} text="3" size={size * 0.5} color={color} at={at + 10} /> : null}
		</Fade>
	);
};
/** Text struck through with a grey line (and optionally turned red first). */
export const Struck: React.FC<{x: number; y: number; text: string; size: number; at: number; strike: number; color?: string; hand?: boolean; out?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, size, at, strike, color = CROSS, hand = false, out, anchor = 'start'}) => {
	const w = mw(text, size, hand);
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<Fade at={at} out={out}>
			<Sx x={x0} y={y} text={text} size={size} color={color} hand={hand} at={at} />
			<DrawPath d={`M${x0 - 6},${y - size * 0.22} L${x0 + w + 6},${y - size * 0.42}`} at={strike} dur={12} color="#9a948a" width={Math.max(4, size * 0.1)} />
		</Fade>
	);
};

// ---------- a coefficient chip that flies from the equation into a cell ----------
export const CoefChip: React.FC<{from: [number, number]; to: [number, number]; at: number; text?: string; dur?: number; stay?: number; color?: string}> = ({from, to, at, text = '2', dur = 30, stay = 26, color = AMBER_INK}) => {
	const f = useCurrentFrame();
	const e = smooth(clamp01((f - at) / dur));
	const o = prog(f, at, 6) * (1 - prog(f, at + dur + stay, 10));
	if (f < at || o <= 0.01) return null;
	const x = from[0] + (to[0] - from[0]) * e, y = from[1] + (to[1] - from[1]) * e - Math.sin(e * Math.PI) * 60;
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={24} fill="#fffdf8" stroke={color} strokeWidth={4} />
			<Sx x={x} y={y + 11} text={text} size={32} color={color} anchor="middle" hand at={-1000} />
		</g>
	);
};

// ---------- K or Q with a subscript name, then "=" ----------
export const xNameW = (base: string, name: string, size: number) => mw(base, size) + mw(name, size * 0.6) + 4;
export const XName: React.FC<{x: number; y: number; base?: string; name?: string; size: number; at: number; color?: string; nameAt?: number}> = ({x, y, base = 'K', name = 'sp', size, at, color = TEAL, nameAt}) => (
	<g>
		<Sx x={x} y={y} text={base} size={size} color={color} at={at} />
		<Sx x={x + mw(base, size) + 2} y={y + size * 0.22} text={name} size={size * 0.6} color={color} at={nameAt ?? at} />
	</g>
);
// ---------- bracket terms laid out with measured text widths (the C5 builder term, measured) ----------
const PADB = 0.3;
export const mTermW = (m: Term, size: number) => mw(m.t, size, m.hand) + 2 * size * PADB + (m.p ? mw(m.p, size * 0.64) + size * 0.08 : 0);
export const mRowXs = (ts: Term[], size: number, x: number, gap = 0.3) => {
	let cur = x;
	return ts.map(m => { const w = mTermW(m, size); const r = {x: cur, w}; cur += w + size * gap; return r; });
};
export const MTerm: React.FC<{m: Term; x: number; y: number; size: number}> = ({m, x, y, size}) => {
	const f = useCurrentFrame();
	const fly = !!m.from;
	const e = prog(f, m.at, m.dur ?? 28);
	const o = prog(f, m.at, fly ? 6 : 14) * (m.out === undefined ? 1 : 1 - prog(f, m.out, 10));
	if (o <= 0.01) return null;
	const pad = size * PADB;
	const iw = mw(m.t, size, m.hand);
	const tx = x + pad;
	const px = m.from ? m.from[0] + (tx - m.from[0]) * e : tx;
	const py = m.from ? m.from[1] + (y - m.from[1]) * e : y;
	const bo = fly ? clamp01((e - 0.55) / 0.45) : 1;
	const top = y - size * 0.86, bot = y + size * 0.28, sw = size * 0.075;
	const lx = x + size * 0.06, rx = x + iw + 2 * pad - size * 0.06, hk = size * 0.14;
	const endX = x + iw + 2 * pad;
	const pFinal: [number, number] = [endX + size * 0.06, y - size * 0.5];
	const pAt = m.pAt ?? m.at + 12;
	const pe = prog(f, pAt, 30);
	const pPos: [number, number] = m.pFrom ? [m.pFrom[0] + (pFinal[0] - m.pFrom[0]) * pe, m.pFrom[1] + (pFinal[1] - m.pFrom[1]) * pe] : pFinal;
	return (
		<g opacity={o}>
			<g opacity={bo} stroke={m.bc ?? INK} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none">
				<path d={`M${lx + hk},${top} L${lx},${top} L${lx},${bot} L${lx + hk},${bot}`} />
				<path d={`M${rx - hk},${top} L${rx},${top} L${rx},${bot} L${rx - hk},${bot}`} />
			</g>
			<Sx x={px} y={py} text={m.t} size={size} color={m.color ?? INK} at={-1000} hand={m.hand} />
			{m.p ? <Sx x={pPos[0]} y={pPos[1]} text={m.p} size={size * 0.64} color={m.pColor ?? m.color ?? INK} at={pAt} /> : null}
		</g>
	);
};
export const MLine: React.FC<{x: number; y: number; size: number; items: Term[]}> = ({x, y, size, items}) => {
	const xs = mRowXs(items, size, x);
	return <g>{items.map((m, i) => <MTerm key={i} m={m} x={xs[i].x} y={y} size={size} />)}</g>;
};
/** "Ksp = [..][..]" with measured bracket terms (powers can fly in with pFrom); exprTermX gives where the terms start. */
export const exprTermX = (x: number, size: number, base = 'K', name = 'sp') => x + xNameW(base, name, size) + size * 0.25 + mw('=', size) + size * 0.3;
export const Expr: React.FC<{x: number; y: number; size: number; at: number; terms: Term[]; base?: string; name?: string; color?: string; nameAt?: number; out?: number}> = ({x, y, size, at, terms, base = 'K', name = 'sp', color = TEAL, nameAt, out}) => (
	<Fade at={at} out={out}>
		<XName x={x} y={y} base={base} name={name} size={size} at={at} color={color} nameAt={nameAt} />
		<Sx x={x + xNameW(base, name, size) + size * 0.25} y={y} text="=" size={size} at={at} />
		<MLine x={exprTermX(x, size, base, name)} y={y} size={size} items={terms} />
	</Fade>
);

// ---------- log number line with power-of-ten labels ----------
export const lgx = (v: number, ln: Ln) => ln.x0 + ((Math.log10(v) - ln.lo) * (ln.x1 - ln.x0)) / (ln.hi - ln.lo);
export const ExpLabels: React.FC<{ln: Ln; at: number; out?: number; size?: number; every?: number}> = ({ln, at, out, size = 26, every = 1}) => (
	<Fade at={at} out={out}>
		{Array.from({length: ln.hi - ln.lo + 1}, (_, i) => ln.lo + i).filter(e => (e - ln.lo) % every === 0).map(e => <Sx key={e} x={lgx(10 ** e, ln)} y={ln.y + 52} text={e === 0 ? '1' : `10^{${String(e).replace('-', '−')}}`} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />)}
	</Fade>
);
/** A labelled pin on a log line (value label in marked-up text above the pin). */
export const Pin: React.FC<{ln: Ln; v: number; at: number; label: string; sub?: string; color?: string; up?: number; out?: number; size?: number; anchor?: 'start' | 'middle' | 'end'; ghost?: boolean}> = ({ln, v, at, label, sub, color = TEAL, up = 64, out, size = 30, anchor = 'middle', ghost = false}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const o = p * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	const x = lgx(v, ln), dy = -(1 - p) * 50;
	return (
		<g opacity={o * (ghost ? 0.7 : 1)} transform={`translate(0,${dy})`}>
			<path d={`M${x},${ln.y - 6} L${x - 15},${ln.y - 34} Q${x},${ln.y - 48} ${x + 15},${ln.y - 34} Z`} fill={ghost ? '#fffdf8' : color} stroke={color} strokeWidth={3} strokeDasharray={ghost ? '5 4' : undefined} />
			<Sx x={x} y={ln.y - up} text={label} size={size} color={color} anchor={anchor} weight={700} at={-1000} />
			{sub ? <Sx x={x} y={ln.y - up - size * 1.1} text={sub} size={size * 0.9} color={color} anchor={anchor} hand at={-1000} /> : null}
		</g>
	);
};

// ---------- a coded clock face (right now) ----------
export const Clock: React.FC<{x: number; y: number; r?: number; at: number}> = ({x, y, r = 30, at}) => {
	const f = useCurrentFrame();
	const a = ((f - at) * 0.08) % (Math.PI * 2);
	return (
		<Fade at={at}>
			<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<path d={`M${x},${y} L${x},${y - r * 0.55}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<path d={`M${x},${y} L${x + Math.sin(a) * r * 0.75},${y - Math.cos(a) * r * 0.75}`} stroke={AMBER_INK} strokeWidth={3} strokeLinecap="round" />
		</Fade>
	);
};

/** A soft yellow highlight behind a line of the decision card. */
export const Glow: React.FC<{x?: number; y: number; w?: number; h?: number; at: number; out: number}> = ({x = 110, y, w = 1300, h = 66, at, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10) * (1 - prog(f, out, 12));
	return o > 0.01 ? <rect x={x} y={y - h * 0.72} width={w} height={h} rx={14} fill="#f6d77a" opacity={0.35 * o} /> : null;
};

/** Two horizontal bars that compare two values (lengths in proportion). */
export const CompareBars: React.FC<{x: number; y: number; scale: number; rows: {label: string; v: number; color: string; at: number}[]; gap?: number; size?: number}> = ({x, y, scale, rows, gap = 86, size = 34}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{rows.map((r, i) => {
				const p = smooth(prog(f, r.at, 26));
				if (f < r.at) return null;
				const w = r.v * scale * p;
				return (
					<g key={i}>
						<Sx x={x} y={y + i * gap - 18} text={r.label} size={size * 0.85} color={r.color} hand at={r.at} />
						<rect x={x} y={y + i * gap} width={Math.max(4, w)} height={30} rx={8} fill={hexMix(r.color.length === 7 ? r.color : '#26231f', '#ffffff', 0.55)} stroke={r.color} strokeWidth={3} />
					</g>
				);
			})}
		</g>
	);
};

export {AMBER, AMBER_INK, INK, INK_SOFT, DrawPath};
