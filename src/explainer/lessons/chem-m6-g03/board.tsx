// M6 G03 (Chemistry) practice board, in the G01 layout and visual system: HSC-style tag top right, teal type badge under
// it (hidden during each attempt), the worded question card top left (full for the attempt, shrunk to a strip for the
// walkthrough, givens underlined on their cues, answer boxes filling), the check strip along the bottom (labels set per
// lesson, as G02 decided; ticks the row each scene uses, dims during every countdown). New here (lesson-local; G04
// imports the card, strip and chain pieces):
// - PCard: a question card made of text sections (stem, data, demands) with room for a table or plate between them;
// - ReadTable: Q1's burette-reading table; a "Titre (mL)" row fills under the two reading rows, columns ring, grey,
//   pulse or take a grey cross;
// - Bridge: the C12 mole bridge with any number of boxes (Q2 and Q3 add "× flask ÷ aliquot");
// - BandFlask: the painted volumetric flask with coded aliquot bands clipped to its inner outline, each band one
//   aliquot's volume (band heights from the flask's real cross-section, so the neck bands are taller);
// - PourBeaker: the painted beaker tilted about its spout with a coded stream (the 10.00 mL sample);
// - MassBox: the percentage-by-mass bars (substance inside sample) with the percentage on the dividing line;
// - ProtonChain: CO3 2- → HCO3 - → H2CO3 with its proton arrows lit;
// - ChainRow: a row of linked chips (the hook chain).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {AMBER, AChip, Fade, GREYX, INK, INK_SOFT, PicH, QText, ShrinkAt, Sx, TEAL, clamp01, flaskPt, lerp, mw, smooth, tw, vis} from './parts';
import type {QBlock, QMark} from './parts';
import {BEAKER, FLASK, FLASK_G, FLASK_IN} from './assets';

export {ChemBadge, CheckList, GLOW, HscTag, MiniCard} from '../chem-m6-g01/board';

// ---------- the check strip (bottom), labels per lesson ----------
const STRIP_Y = 1004;
const pillW = (label: string) => tw(label, 26, true) + 62;
export const ChecksL: React.FC<{labels: string[]; title?: string; ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number; out?: number}> = ({labels, title = 'checks:', ticks = {}, hold, at = -100, out}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * (1 - 0.78 * dim);
	if (o <= 0.01) return null;
	const rise = (1 - prog(f, at, 20)) * 40;
	let x = 96 + tw(title, 28, true) + 18;
	return (
		<g opacity={o} transform={`translate(0,${rise})`}>
			<Sx x={96} y={STRIP_Y + 34} text={title} size={28} color={INK_SOFT} hand at={-1000} />
			{labels.map((l, i) => {
				const px = x;
				const w = pillW(l);
				x = px + w + 14;
				const on = (ticks[i] ?? []).some(t => t <= f);
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i}>
						<rect x={px} y={STRIP_Y} width={w} height={48} rx={24} fill={flash > 0.01 ? '#f6d77a' : '#fffdf8'} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : dim > 0.5 ? 0 : 1} stroke={on ? TEAL : 'rgba(60,45,20,0.22)'} strokeWidth={on ? 3 : 2.5} />
						<rect x={px + 14} y={STRIP_Y + 12} width={24} height={24} rx={5} fill="#fffdf8" stroke={on ? TEAL : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 1).map((t, k) => <DrawPath key={k} d={`M${px + 14},${STRIP_Y + 24} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 48} y={STRIP_Y + 33} text={l} size={26} color={on ? TEAL : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
export const G03_CHECKS = ['titres chosen?', 'ratio from the equation?', 'scaled up?', 'units and sense?'];
export const Checks: React.FC<{ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number; out?: number}> = p => <ChecksL labels={G03_CHECKS} {...p} />;

// ---------- the question card ----------
export const CARD = {x: 100, y: 175, w: 1000, tx: 130, tw: 940, k: 0.62};
/** A point given in full-card coordinates, after the card has shrunk by e (0..1) to the strip. */
export const stripPt = (px: number, py: number, e = 1, k = CARD.k): [number, number] => {
	const s = 1 - (1 - k) * e;
	return [CARD.x + (px - CARD.x) * s, CARD.y + (py - CARD.y) * s];
};
export type QSec = {y: number; blocks: (t: number[]) => QBlock[]; size?: number; w?: number};
export type QDef = {secs: QSec[]; h: number; ans: {label: string; y: number; h?: number}[]; size?: number};
export type AFill = {i: number; text: string; at: number; size?: number; line?: number};
/** Throws at module load if a marked phrase is missing from the card. */
export const qMarksOk = (q: QDef, marks: string[]) => {
	const words = q.secs.flatMap(s => s.blocks(Array(12).fill(0))).flatMap(b => b.text.split(/\s+/).filter(Boolean)).map(w => w.toLowerCase().replace(/[^a-z0-9']/g, ''));
	for (const m of marks) {
		const t = m.split(/\s+/).map(w => w.toLowerCase().replace(/[^a-z0-9']/g, '')).filter(Boolean);
		let ok = false;
		for (let i = 0; i + t.length <= words.length && !ok; i++) ok = t.every((x, k) => words[i + k] === x);
		if (!ok) throw new Error(`G03/G04 card mark "${m}" not in the question`);
	}
};
/** The worded question, full size or shrunk to the strip (from `shrinkAt`, 22 frames). children draw in card space. */
export const PCard: React.FC<{q: QDef; t?: number[]; marks?: QMark[]; strip?: boolean; shrinkAt?: number; fills?: AFill[]; ansAt?: number[]; children?: React.ReactNode; k?: number}> = ({q, t = Array(12).fill(-100), marks = [], strip = false, shrinkAt, fills = [], ansAt = [], children, k = CARD.k}) => {
	const f = useCurrentFrame();
	const size = q.size ?? 32;
	const body = (
		<g>
			<Fade at={t[0] - 6}><rect x={CARD.x} y={CARD.y} width={CARD.w} height={q.h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
			{q.secs.map((s, i) => <QText key={i} q={{blocks: s.blocks(t), marks}} x={CARD.tx} y={s.y} w={s.w ?? CARD.tw} size={s.size ?? size} card={false} />)}
			{children}
			{q.ans.map((a, i) => {
				const at = ansAt[i] ?? t[t.length - 1];
				const h = a.h ?? 66;
				return (
					<g key={i} opacity={prog(f, at, 12)}>
						<rect x={CARD.tx} y={a.y} width={CARD.tw} height={h} rx={14} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
						<Sx x={CARD.tx + 18} y={a.y + 42} text={a.label} size={26} color={INK_SOFT} weight={700} at={-1000} />
						{fills.filter(x => x.i === i).map((x, j) => <Sx key={j} x={CARD.tx + 70} y={a.y + 46 + (x.line ?? 0) * 46} text={x.text} size={x.size ?? 36} color={TEAL} weight={800} at={x.at} />)}
					</g>
				);
			})}
		</g>
	);
	if (!strip) return body;
	return <ShrinkAt cx={CARD.x} cy={CARD.y} k={k} at={shrinkAt ?? -100}>{body}</ShrinkAt>;
};

// ---------- Q1's reading table ----------
export const RT = {lab: 290, col: 128, lh: 54, size: 28};
const colX = (i: number) => RT.lab + RT.col * (i + 0.5);
export type RCol = {grey?: number; pulse?: number; cross?: number; ring?: number};
/** Drawn at local origin (x, y) = left of the header baseline, scaled s about that point. */
export const ReadTable: React.FC<{x: number; y: number; s?: number; at: number; o?: number; titre?: {at: number; step?: number}; titreO?: number; under?: number; cols?: RCol[]; head?: boolean}> = ({x, y, s = 1, at, o = 1, titre, titreO = 1, under, cols = [], head = true}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const heads = ['Titration', 'Rough', '1', '2', '3', '4'];
	const fin = ['24.60', '24.55', '24.50', '25.20', '24.30'];
	const ini = ['0.00', '0.50', '0.10', '1.20', '0.35'];
	const tit = ['24.60', '24.05', '24.40', '24.00', '23.95'];
	const W = RT.lab + RT.col * 5;
	const rows = titre && titreO > 0.01 ? 4 : 3;
	const S = RT.size;
	const rowY = (r: number) => r * RT.lh;
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={-14} y={-S - 14} width={W + 28} height={rows * RT.lh + 6} rx={10} fill="#fffdf8" stroke="rgba(60,45,20,0.28)" strokeWidth={2} />
			{Array.from({length: rows - 1}, (_, r) => <line key={r} x1={-14} y1={rowY(r) + 16} x2={W + 14} y2={rowY(r) + 16} stroke="rgba(60,45,20,0.2)" strokeWidth={1.5} />)}
			<line x1={RT.lab - 10} y1={-S - 14} x2={RT.lab - 10} y2={rowY(rows - 1) + 20} stroke="rgba(60,45,20,0.2)" strokeWidth={1.5} />
			{head ? heads.map((h, i) => <Sx key={i} x={i === 0 ? 0 : colX(i - 1)} y={0} text={h} size={S} color={INK} anchor={i === 0 ? 'start' : 'middle'} weight={700} at={-1000} />) : null}
			<Sx x={0} y={rowY(1)} text="Final reading (mL)" size={S} color={INK} weight={500} at={-1000} />
			<Sx x={0} y={rowY(2)} text="Initial reading (mL)" size={S} color={INK} weight={500} at={-1000} />
			{fin.map((t, i) => {
				const g = cols[i]?.cross !== undefined && f >= cols[i].cross! ? GREYX : INK;
				return <Sx key={'f' + i} x={colX(i)} y={rowY(1)} text={t} size={S} color={g} anchor="middle" weight={500} at={-1000} />;
			})}
			{ini.map((t, i) => {
				const g = cols[i]?.cross !== undefined && f >= cols[i].cross! ? GREYX : INK;
				return <Sx key={'i' + i} x={colX(i)} y={rowY(2)} text={t} size={S} color={g} anchor="middle" weight={500} at={-1000} />;
			})}
			{under !== undefined ? [1, 2].map(r => <DrawPath key={r} d={`M${RT.lab},${rowY(r) + 8} L${W - 8},${rowY(r) + 8}`} at={under + (r - 1) * 8} dur={16} color={AMBER} width={4} />) : null}
			{titre && titreO > 0.01 ? (
				<g opacity={titreO}>
					<Sx x={0} y={rowY(3)} text="Titre (mL)" size={S} color={TEAL} weight={800} at={titre.at} />
					{tit.map((t, i) => {
						const c = cols[i] ?? {};
						const ta = titre.at + 8 + i * (titre.step ?? 12);
						const grey = (c.grey !== undefined && f >= c.grey) || (c.cross !== undefined && f >= c.cross);
						const pg = c.pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - c.pulse) / 36) * Math.PI));
						const cw = mw(t, S, false, 800);
						return (
							<g key={'t' + i}>
								{pg > 0.01 ? <rect x={colX(i) - cw / 2 - 12} y={rowY(3) - S} width={cw + 24} height={S * 1.35} rx={9} fill="#f6d77a" opacity={0.55 * pg} /> : null}
								<Sx x={colX(i)} y={rowY(3)} text={t} size={S} color={grey ? GREYX : INK} anchor="middle" weight={800} at={ta} />
								{c.ring !== undefined ? <RingE cx={colX(i)} cy={rowY(3) - S * 0.33} rx={cw / 2 + 16} ry={S * 0.78} at={c.ring} /> : null}
								{c.cross !== undefined ? <DrawPath d={`M${colX(i) - 40},${rowY(3) - S - 4} L${colX(i) + 40},${rowY(3) + 8}`} at={c.cross} dur={10} color={GREYX} width={4} /> : null}
								{c.cross !== undefined ? <DrawPath d={`M${colX(i) + 40},${rowY(3) - S - 4} L${colX(i) - 40},${rowY(3) + 8}`} at={c.cross + 6} dur={10} color={GREYX} width={4} /> : null}
							</g>
						);
					})}
				</g>
			) : null}
		</g>
	);
};
export const RT_W = RT.lab + RT.col * 5;
const RingE: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; color?: string}> = ({cx, cy, rx, ry, at, color = TEAL}) => (
	<DrawPath d={`M${cx - rx},${cy} A${rx},${ry} 0 1 1 ${cx + rx},${cy} A${rx},${ry} 0 1 1 ${cx - rx},${cy}`} at={at} dur={16} color={color} width={4} />
);
export const readColX = colX;

// ---------- the mole bridge with any number of boxes ----------
export type BB = {head: string; color: string; at: number; fill?: {t: string; at: number; size?: number}; lit?: number};
export const Bridge: React.FC<{x: number; y: number; boxes: BB[]; w?: number; h?: number; gap?: number; size?: number; o?: number}> = ({x, y, boxes, w = 300, h = 112, gap = 56, size = 28, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{boxes.map((b, i) => {
				const bx = x + i * (w + gap);
				const ap = prog(f, b.at, 12);
				if (ap <= 0.01) return null;
				const lg = b.lit === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - b.lit) / 40) * Math.PI));
				const fo = b.fill ? prog(f, b.fill.at, 12) : 0;
				return (
					<g key={i} opacity={ap}>
						{i > 0 ? (
							<g>
								<line x1={bx - gap + 8} y1={y + h / 2} x2={bx - 12} y2={y + h / 2} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
								<path d={`M${bx - 22},${y + h / 2 - 10} L${bx - 10},${y + h / 2} L${bx - 22},${y + h / 2 + 10}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
							</g>
						) : null}
						{lg > 0.01 ? <rect x={bx - 8} y={y - 8} width={w + 16} height={h + 16} rx={22} fill={b.color} opacity={0.25 * lg} /> : null}
						<rect x={bx} y={y} width={w} height={h} rx={18} fill="#fffdf8" stroke={b.color} strokeWidth={4} />
						<Sx x={bx + w / 2} y={y + (fo > 0.01 ? 42 : h / 2 + 11)} text={b.head} size={size * 0.9} color={b.color} anchor="middle" weight={800} at={-1000} />
						{b.fill ? <Sx x={bx + w / 2} y={y + 88} text={b.fill.t} size={b.fill.size ?? size} color={INK} anchor="middle" weight={700} at={b.fill.at} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the scale-up flask: painted volumetric flask, coded aliquot bands of equal volume ----------
const FLIN_L = FLASK_IN.filter(p => p[0] < 1024 && p[1] >= 340);
const FLIN_R = FLASK_IN.filter(p => p[0] > 1024 && p[1] >= 340);
const sideX = (pts: [number, number][], y: number) => {
	const s = [...pts].sort((a, b) => a[1] - b[1]);
	if (y <= s[0][1]) return s[0][0];
	for (let i = 0; i + 1 < s.length; i++) if (y <= s[i + 1][1]) return lerp(s[i][0], s[i + 1][0], (y - s[i][1]) / (s[i + 1][1] - s[i][1]));
	return s[s.length - 1][0];
};
/** Cumulative volume (natural units, solid of revolution) from the floor up to natural y. */
const VOL: {y: number; v: number}[] = (() => {
	const out: {y: number; v: number}[] = [];
	let v = 0;
	for (let y = 1846; y >= FLASK_G.ring; y -= 2) {
		const r = (sideX(FLIN_R, y) - sideX(FLIN_L, y)) / 2;
		v += r * r * 2;
		out.push({y, v});
	}
	return out;
})();
const VTOT = VOL[VOL.length - 1].v;
/** Natural y at which the liquid holds fraction q (0..1) of the volume to the ring. */
export const yAtFrac = (q: number) => {
	const t = q * VTOT;
	const i = VOL.findIndex(p => p.v >= t);
	return i < 0 ? FLASK_G.ring : VOL[i].y;
};
let bandId = 0;
/** n = aliquots' worth (12.5 or 5); bands appear one by one from `at` (`step` frames apart); dim greys them. */
export const BandFlask: React.FC<{x: number; y: number; h: number; n: number; at: number; step?: number; dim?: number; o?: number; label?: string; labelAt?: number}> = ({x, y, h, n, at, step = 4, dim, o = 1, label, labelAt}) => {
	const f = useCurrentFrame();
	const id = React.useMemo(() => `bandf-${++bandId}`, []);
	if (o <= 0.01) return null;
	const k = h / FLASK.box[3];
	const ix = x - FLASK.box[0] * k, iy = y - FLASK.box[1] * k;
	const cut = flaskPt(x, y, h, 0, FLASK_G.cropTop)[1];
	const inner = FLASK_IN.map(([nx, ny]) => flaskPt(x, y, h, nx, ny));
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	const nb = Math.ceil(n);
	const ringY = flaskPt(x, y, h, 0, FLASK_G.ring)[1];
	const neck = flaskPt(x, y, h, FLASK_G.neck[1], FLASK_G.ring);
	return (
		<g opacity={o}>
			<clipPath id={id + 'c'}><rect x={ix} y={cut} width={FLASK.nat[0] * k} height={FLASK.nat[1] * k} /></clipPath>
			<clipPath id={id + 'l'}><path d={`M${inner.map(q => q.join(',')).join(' L')} Z`} /></clipPath>
			<g clipPath={`url(#${id}c)`}><image href={staticFile(FLASK.src)} x={ix} y={iy} width={FLASK.nat[0] * k} height={FLASK.nat[1] * k} /></g>
			<g clipPath={`url(#${id}l)`}>
				{Array.from({length: nb}, (_, i) => {
					const q0 = i / n, q1 = Math.min(1, (i + 1) / n);
					const y0 = flaskPt(x, y, h, 0, yAtFrac(q0))[1], y1 = flaskPt(x, y, h, 0, yAtFrac(q1))[1];
					const p = smooth(prog(f, at + i * step, 8));
					if (p <= 0.01) return null;
					const col = d > 0.5 ? (i % 2 ? '#d6d1c8' : '#c4beb3') : i % 2 ? '#b9e0d6' : '#7fc4b3';
					return (
						<g key={i} opacity={p}>
							<rect x={ix} y={lerp(y0, y1, p)} width={FLASK.nat[0] * k} height={y0 - lerp(y0, y1, p)} fill={col} opacity={0.85} />
							<line x1={ix} y1={y1} x2={ix + FLASK.nat[0] * k} y2={y1} stroke="#fffdf8" strokeWidth={2} opacity={p} />
						</g>
					);
				})}
			</g>
			{label ? <Sx x={flaskPt(x, y, h, FLASK_G.neck[0], FLASK_G.ring)[0] - 14} y={ringY + 10} text={label} size={28} color={INK} anchor="end" weight={800} at={labelAt ?? -1000} /> : null}
		</g>
	);
};
export const bandFlaskW = (h: number) => (FLASK.box[2] / FLASK.box[3]) * h;
export const flaskNeckTop = (x: number, y: number, h: number) => flaskPt(x, y, h, (FLASK_G.neck[0] + FLASK_G.neck[1]) / 2, FLASK_G.cropTop + 10);

// ---------- the 10.00 mL sample: painted beaker tilted about its spout ----------
const SPOUT: [number, number] = [292, 382];
/** Beaker drawn so its spout sits at (sx, sy); tilt (deg, negative = spout down) from `tilt` over 24 frames; stream to y1. */
export const PourBeaker: React.FC<{sx: number; sy: number; h: number; at: number; tilt?: number; pour?: [number, number]; y1?: number; o?: number; label?: string}> = ({sx, sy, h, at, tilt, pour, y1, o = 1, label}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const k = h / BEAKER.box[3];
	const x = sx - (SPOUT[0] - BEAKER.box[0]) * k, y = sy - (SPOUT[1] - BEAKER.box[1]) * k;
	const a = tilt === undefined ? 0 : -48 * smooth(prog(f, tilt, 24));
	const fl = pour ? vis(f, pour[0], pour[1], 6) : 0;
	return (
		<g opacity={v}>
			<g transform={`rotate(${a} ${sx} ${sy})`}>
				<PicH p={BEAKER} x={x} y={y} h={h} />
				<rect x={x + (450 - BEAKER.box[0]) * k} y={y + (1180 - BEAKER.box[1]) * k} width={1130 * k} height={520 * k} rx={8} fill="#efcf86" opacity={0.6 * (1 - (pour ? prog(f, pour[0] + 6, Math.max(1, pour[1] - pour[0])) : 0))} />
			</g>
			{fl > 0.01 && y1 !== undefined ? <line x1={sx} y1={sy + 4} x2={sx} y2={lerp(sy, y1, smooth(prog(f, pour![0], 8)))} stroke="#e4c06e" strokeWidth={6} strokeLinecap="round" opacity={0.9 * fl} /> : null}
			{label ? <Sx x={sx + BEAKER.box[2] * k + 18} y={sy + h * 0.7} text={label} size={26} color={INK} weight={700} at={at} /> : null}
		</g>
	);
};

// ---------- percentage by mass: the substance's mass inside the sample's mass ----------
export const MassBox: React.FC<{x: number; y: number; w: number; h?: number; at: number; frac: number; fillAt: number; outer: string; inner: string; pct?: {t: string; at: number}; o?: number; size?: number}> = ({x, y, w, h = 84, at, frac, fillAt, outer, inner, pct, o = 1, size = 28}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const g = smooth(prog(f, at, 20));
	const fi = smooth(prog(f, fillAt, 22));
	const xi = x + w * frac * fi;
	return (
		<g opacity={v}>
			<Sx x={x} y={y - 16} text={outer} size={size} color={INK} weight={700} at={at} />
			<rect x={x} y={y} width={w * g} height={h} rx={12} fill="#f1ece2" stroke={INK_SOFT} strokeWidth={3} />
			{fi > 0.01 ? <rect x={x} y={y} width={xi - x} height={h} rx={12} fill={AMBER} opacity={0.85} /> : null}
			{fi > 0.01 ? <line x1={xi} y1={y - 8} x2={xi} y2={y + h + 8} stroke={INK} strokeWidth={3} /> : null}
			<Sx x={x} y={y + h + 40} text={inner} size={size} color="#8a5b0a" weight={800} at={fillAt} />
			{pct ? <Sx x={frac > 0.5 ? xi - 14 : xi + 14} y={y + h / 2 + 12} text={pct.t} size={size + 6} color={frac > 0.5 ? '#ffffff' : TEAL} anchor={frac > 0.5 ? 'end' : 'start'} weight={800} at={pct.at} /> : null}
		</g>
	);
};

// ---------- carbonate's proton steps ----------
export const ProtonChain: React.FC<{x: number; y: number; at: number; lit: {a: number; at: number; color?: string}[]; ring?: {i: number; at: number}; o?: number; size?: number; color?: string}> = ({x, y, at, lit, ring, o = 1, size = 34, color = INK}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const toks = ['CO_3^{2−}', 'HCO_3^{−}', 'H_2CO_3'];
	const gap = 150;
	const xs: number[] = [];
	let cx = x;
	toks.forEach(t => { xs.push(cx); cx += mw(t, size, false, 700) + gap; });
	return (
		<g opacity={v}>
			{toks.map((t, i) => <Sx key={i} x={xs[i]} y={y} text={t} size={size} color={color} weight={700} at={at + i * 6} />)}
			{[0, 1].map(a => {
				const x1 = xs[a] + mw(toks[a], size, false, 700) + 18, x2 = xs[a + 1] - 18;
				const l = lit.find(q => q.a === a);
				const on = l ? prog(f, l.at, 10) : 0;
				const c = on > 0.5 ? l!.color ?? TEAL : 'rgba(60,45,20,0.3)';
				return (
					<g key={a}>
						<line x1={x1} y1={y - size * 0.3} x2={x2 - 6} y2={y - size * 0.3} stroke={c} strokeWidth={on > 0.5 ? 5 : 3} />
						<path d={`M${x2 - 18},${y - size * 0.3 - 9} L${x2 - 4},${y - size * 0.3} L${x2 - 18},${y - size * 0.3 + 9}`} fill="none" stroke={c} strokeWidth={on > 0.5 ? 5 : 3} />
						<Sx x={(x1 + x2) / 2} y={y - size * 0.3 - 16} text="+H^{+}" size={size * 0.7} color={c} anchor="middle" weight={700} at={at + 8} />
					</g>
				);
			})}
			{ring ? <RingE cx={xs[ring.i] + mw(toks[ring.i], size, false, 700) / 2} cy={y - size * 0.3} rx={mw(toks[ring.i], size, false, 700) / 2 + 18} ry={size * 0.85} at={ring.at} /> : null}
		</g>
	);
};

// ---------- a row of linked chips ----------
export type CChip = {t: string; at: number};
export const ChainRow: React.FC<{x: number; y: number; chips: CChip[]; gap?: number; size?: number; grey?: (i: number) => number; out?: number; color?: string}> = ({x, y, chips, gap = 58, size = 32, grey, out, color = TEAL}) => {
	const f = useCurrentFrame();
	const vo = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (vo <= 0.01) return null;
	let cx = x;
	return (
		<g opacity={vo}>
			{chips.map((c, i) => {
				const w = mw(c.t, size, true, 700) + size * 1.4;
				const px = cx;
				cx += w + gap;
				const g = grey ? grey(i) : 0;
				return (
					<g key={i}>
						{i > 0 ? (
							<g opacity={prog(f, c.at - 4, 8) * (1 - 0.6 * g)}>
								<line x1={px - gap + 6} y1={y + size * 0.8} x2={px - 6} y2={y + size * 0.8} stroke={g > 0.5 ? GREYX : INK_SOFT} strokeWidth={6} strokeLinecap="round" />
								<circle cx={px - gap / 2} cy={y + size * 0.8} r={9} fill="none" stroke={g > 0.5 ? GREYX : INK_SOFT} strokeWidth={4} />
							</g>
						) : null}
						<g opacity={1 - 0.65 * g}><AChip x={px} y={y} text={c.t} size={size} color={g > 0.5 ? GREYX : color} hand at={c.at} /></g>
					</g>
				);
			})}
		</g>
	);
};
export const chainChipX = (x: number, chips: CChip[], i: number, gap = 58, size = 32) => {
	let cx = x;
	for (let k = 0; k < i; k++) cx += mw(chips[k].t, size, true, 700) + size * 1.4 + gap;
	return {x: cx, w: mw(chips[i].t, size, true, 700) + size * 1.4};
};
