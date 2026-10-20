// Drawing parts for M6 C12 (direct titration). Reuses C10 (and through it C08 to C01: the board, task line, givens card,
// step chip, working lines, full meter, crossed chips, question card, countdown, key notes) and the C09 ionising lens.
// New here:
// - BuretteFill: the painted burette with a coded navy fill clipped to its tube (level in mL delivered), and helpers to
//   place points on it; Rig: burette over the flask on the white tile (the flask can crossfade empty, colourless, pink);
// - TitreTable: titre rows that write on cue, ring (concordant) or take a grey cross;
// - ConcStrip: the concordance number line with dots and a sliding 0.10 mL bracket;
// - MoleBridge: known → ratio → unknown boxes that fill on cue and light left to right;
// - CritCard: a criteria card whose rows take a tick or a cross as each is said.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {ACID_INK, An, Fade, H3O, HA, INK, INK_SOFT, PicH, Sx, TEAL, WATER_INK, WATER_SOFT, clamp01, hPos, lerp, mw, picW, smooth, vis} from '../chem-m6-c10/parts';
import {BURETTE, BUR_G, CFLASK, PHTH, TILE} from './assets';
import type {PDef} from './assets';

export * from '../chem-m6-c10/parts';
import {OHMeet} from '../chem-m6-c09/parts';
export {OHMeet};

export const NAVY = '#2c4a7a';
export const NAVY_SOFT = '#7f9cc8';
export const UNK = '#b07a12';
export const GREYX = '#9a948a';

// ---------- burette with a coded fill ----------
export const burK = (h: number) => h / BURETTE.box[3];
/** Natural point on the burette plate drawn at (x, y) with height h. */
export const burPt = (x: number, y: number, h: number, nx: number, ny: number): [number, number] => {
	const k = burK(h);
	return [x + (nx - BURETTE.box[0]) * k, y + (ny - BURETTE.box[1]) * k];
};
export const levelY = (v: number) => BUR_G.zero + (v / 50) * (BUR_G.v50 - BUR_G.zero);
/** Placement so the burette tip lands at (tx, ty). */
export const burAt = (tx: number, ty: number, h: number) => {
	const k = burK(h);
	return {x: tx - (BUR_G.tip[0] - BURETTE.box[0]) * k, y: ty - (BUR_G.tip[1] - BURETTE.box[1]) * k};
};
/** level(f): mL delivered (0 = full to the zero mark; 50+ = empty). fill(f): 0..1 opacity of the coded liquid. */
export const BuretteFill: React.FC<{x: number; y: number; h: number; level: (f: number) => number; fill?: (f: number) => number; o?: number; color?: string}> = ({x, y, h, level, fill = () => 1, o = 1, color = NAVY_SOFT}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const v = level(f);
	const fo = fill(f);
	const [x1, yTop] = burPt(x, y, h, BUR_G.tube[0], Math.min(BUR_G.bottom, levelY(v)));
	const [x2, yB] = burPt(x, y, h, BUR_G.tube[1], BUR_G.bottom);
	const [s1, sTop] = burPt(x, y, h, BUR_G.stem[0], BUR_G.bottom);
	const [s2, sB] = burPt(x, y, h, BUR_G.stem[1], BUR_G.tip[1] - 30);
	return (
		<g opacity={o}>
			<PicH p={BURETTE} x={x} y={y} h={h} />
			{fo > 0.01 ? (
				<g opacity={fo}>
					{levelY(v) < BUR_G.bottom ? <rect x={x1} y={yTop} width={x2 - x1} height={yB - yTop} fill={color} opacity={0.72} /> : null}
					{levelY(v) < BUR_G.bottom ? <line x1={x1} y1={yTop} x2={x2} y2={yTop} stroke={NAVY} strokeWidth={2.5} /> : null}
					<rect x={s1} y={sTop} width={s2 - s1} height={sB - sTop} fill={color} opacity={0.5} />
				</g>
			) : null}
		</g>
	);
};

// ---------- the rig: burette over a flask on the white tile ----------
export const flaskW = (h: number) => picW(CFLASK, h);
/** tip: burette tip; flask top sits `gap` px below it; flask h; burette h. swap: [colourless at, pink at]. */
export const Rig: React.FC<{tx: number; ty: number; bh: number; fh: number; level: (f: number) => number; fill?: (f: number) => number; at: number; out?: number; o?: number; clearAt?: number; pinkAt?: number; gap?: number}> = ({tx, ty, bh, fh, level, fill, at, out, o = 1, clearAt, pinkAt, gap = 16}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const b = burAt(tx, ty, bh);
	const fw = flaskW(fh);
	const fx = tx - fw * 0.5, fy = ty + gap;
	const tw = fw * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	const c = clearAt === undefined ? 0 : prog(f, clearAt, 24);
	const p = pinkAt === undefined ? 0 : prog(f, pinkAt, 30);
	const PH = (pd: PDef, oo: number) => (oo > 0.01 ? <PicH p={pd} x={fx} y={fy} h={fh} o={oo} /> : null);
	return (
		<g opacity={v}>
			<PicH p={TILE} x={tx - tw / 2} y={fy + fh - th * 0.55} h={th} />
			<BuretteFill x={b.x} y={b.y} h={bh} level={level} fill={fill} />
			{PH(CFLASK, 1 - c)}
			{PH(PHTH.clear, c * (1 - p))}
			{PH(PHTH.pink, p)}
		</g>
	);
};
export const rigFlask = (tx: number, ty: number, fh: number, gap = 16) => ({x: tx - flaskW(fh) * 0.5, y: ty + gap, w: flaskW(fh), h: fh});

// ---------- titre table ----------
export type TRow = {label: string; v: string; at: number; grey?: boolean; ring?: number; cross?: number; pulse?: number; tag?: string};
export const TitreTable: React.FC<{x: number; y: number; rows: TRow[]; at: number; out?: number; o?: number; lh?: number; size?: number; head?: string}> = ({x, y, rows, at, out, o = 1, lh = 66, size = 40, head = 'titre (mL)'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const VX = x + 200;
	return (
		<g opacity={v}>
			<Sx x={x} y={y} text="run" size={30} color={INK_SOFT} hand at={at} />
			<Sx x={VX} y={y} text={head} size={30} color={INK_SOFT} hand at={at} />
			<line x1={x} y1={y + 18} x2={VX + 230} y2={y + 18} stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
			{rows.map((r, i) => {
				const yy = y + 18 + lh * (i + 0.8);
				const cr = r.cross === undefined ? 0 : prog(f, r.cross, 12);
				const col = r.grey ? GREYX : cr > 0 ? GREYX : INK;
				const pg = r.pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - r.pulse) / 36) * Math.PI));
				const w = mw(r.v, size, false, 700);
				return (
					<g key={i}>
						{pg > 0.01 ? <rect x={VX - 14} y={yy - size * 0.95} width={w + 28} height={size * 1.3} rx={10} fill="#f6d77a" opacity={0.5 * pg} /> : null}
						<Sx x={x} y={yy} text={r.label} size={size * 0.85} color={r.grey ? GREYX : INK_SOFT} weight={600} at={r.at} />
						<Sx x={VX} y={yy} text={r.v} size={size} color={col} weight={700} at={r.at} />
						{r.tag ? <Sx x={VX + w + 26} y={yy - 4} text={r.tag} size={28} color={GREYX} hand at={r.at + 6} /> : null}
						{r.ring !== undefined ? <RingAt cx={VX + w / 2} cy={yy - size * 0.33} rx={w / 2 + 20} ry={size * 0.72} at={r.ring} /> : null}
						{r.cross !== undefined ? <DrawPath d={`M${VX - 8},${yy - size * 0.75} L${VX + w + 8},${yy + 4}`} at={r.cross} dur={10} color={GREYX} width={5} /> : null}
						{r.cross !== undefined ? <DrawPath d={`M${VX + w + 8},${yy - size * 0.75} L${VX - 8},${yy + 4}`} at={r.cross + 6} dur={10} color={GREYX} width={5} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const tRowY = (y: number, i: number, lh = 66) => y + 18 + lh * (i + 0.8);
/** A smooth teal ellipse ring that draws on. */
export const RingAt: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color?: string; width?: number}> = ({cx, cy, rx, ry, at, out, color = TEAL, width = 4}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (o <= 0.01) return null;
	const d = `M${cx - rx},${cy} A${rx},${ry} 0 1 1 ${cx + rx},${cy} A${rx},${ry} 0 1 1 ${cx - rx},${cy}`;
	return <g opacity={o}><DrawPath d={d} at={at} dur={16} color={color} width={width} /></g>;
};

// ---------- concordance strip ----------
export const ConcStrip: React.FC<{x: number; y: number; w: number; lo: number; hi: number; at: number; out?: number; o?: number; dots: {v: number; at: number; stack?: number; grey?: number}[]; ticks: number[]; bracket?: {a: number; b: number; at: number; from?: number; text: string}; size?: number}> = ({x, y, w, lo, hi, at, out, o = 1, dots, ticks, bracket, size = 26}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const X = (q: number) => x + ((q - lo) / (hi - lo)) * w;
	const d = smooth(prog(f, at, 20));
	let bx1 = 0, bx2 = 0, bo = 0;
	if (bracket) {
		const s = smooth(prog(f, bracket.at, 26));
		const off = (bracket.from ?? bracket.a) - bracket.a;
		bx1 = X(bracket.a + off * (1 - s));
		bx2 = X(bracket.b + off * (1 - s));
		bo = prog(f, bracket.at, 10);
	}
	return (
		<g opacity={v}>
			<line x1={x} y1={y} x2={x + w * d} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{ticks.map(t => (
				<g key={t} opacity={prog(f, at + 6, 10)}>
					<line x1={X(t)} y1={y - 10} x2={X(t)} y2={y + 10} stroke={INK_SOFT} strokeWidth={2.5} />
					<Sx x={X(t)} y={y + size * 1.6} text={t.toFixed(2)} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				</g>
			))}
			{bracket && bo > 0.01 ? (
				<g opacity={bo}>
					<rect x={bx1} y={y - 64} width={bx2 - bx1} height={64 + 8} rx={8} fill={TEAL} opacity={0.12} />
					<path d={`M${bx1},${y - 50} L${bx1},${y - 64} L${bx2},${y - 64} L${bx2},${y - 50}`} fill="none" stroke={TEAL} strokeWidth={4} />
					<Sx x={(bx1 + bx2) / 2} y={y - 78} text={bracket.text} size={size + 2} color={TEAL} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
			{dots.map((dt, i) => {
				const p = prog(f, dt.at, 10);
				if (p <= 0.01) return null;
				const g = dt.grey === undefined ? 0 : prog(f, dt.grey, 12);
				return <circle key={i} cx={X(dt.v)} cy={y - 20 - (dt.stack ?? 0) * 24} r={10 * (0.6 + 0.4 * p)} fill={g > 0.5 ? GREYX : INK} opacity={p} />;
			})}
		</g>
	);
};

// ---------- the mole bridge ----------
export type BBox = {head: string; color: string; fill?: {t: string; at: number}; lit?: number};
export const BR = {w: 470, h: 124, gap: 120};
export const MoleBridge: React.FC<{x: number; y: number; boxes: [BBox, BBox, BBox]; at: number; out?: number; o?: number; w?: number; h?: number; gap?: number; size?: number; arrows?: number}> = ({x, y, boxes, at, out, o = 1, w = BR.w, h = BR.h, gap = BR.gap, size = 34, arrows}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{boxes.map((b, i) => {
				const bx = x + i * (w + gap);
				const lg = b.lit === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - b.lit) / 40) * Math.PI));
				const fo = b.fill ? prog(f, b.fill.at, 12) : 0;
				return (
					<g key={i} opacity={prog(f, at + i * 6, 12)}>
						{lg > 0.01 ? <rect x={bx - 8} y={y - 8} width={w + 16} height={h + 16} rx={22} fill={b.color} opacity={0.25 * lg} /> : null}
						<rect x={bx} y={y} width={w} height={h} rx={18} fill="#fffdf8" stroke={b.color} strokeWidth={4} />
						<Sx x={bx + w / 2} y={y + (fo > 0.01 ? 44 : h / 2 + 12)} text={b.head} size={size * 0.9} color={b.color} anchor="middle" weight={800} at={-1000} />
						{b.fill ? <Sx x={bx + w / 2} y={y + 96} text={b.fill.t} size={size} color={INK} anchor="middle" weight={700} at={b.fill.at} /> : null}
					</g>
				);
			})}
			{[0, 1].map(i => {
				const ax = x + (i + 1) * w + i * gap + 14;
				const a = arrows === undefined ? at + 10 : arrows;
				return (
					<g key={'a' + i} opacity={prog(f, a + i * 6, 12)}>
						<line x1={ax} y1={y + h / 2} x2={ax + gap - 34} y2={y + h / 2} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" />
						<path d={`M${ax + gap - 46},${y + h / 2 - 12} L${ax + gap - 30},${y + h / 2} L${ax + gap - 46},${y + h / 2 + 12}`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					</g>
				);
			})}
		</g>
	);
};
export const bridgeBoxX = (x: number, i: number, w = BR.w, gap = BR.gap) => x + i * (w + gap);

// ---------- criteria card ----------
export type CRow = {t: string; at: number; mark?: 'tick' | 'cross'; markAt?: number};
export const CritCard: React.FC<{x: number; y: number; w: number; title: string; rows: CRow[]; at: number; out?: number; o?: number; color?: string; lh?: number; size?: number}> = ({x, y, w, title, rows, at, out, o = 1, color = TEAL, lh = 72, size = 36}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const h = 76 + rows.length * lh + 14;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill="#fffdf8" stroke={color} strokeWidth={3.5} />
			<Sx x={x + 30} y={y + 54} text={title} size={38} color={color} weight={800} at={-1000} />
			{rows.map((r, i) => {
				const yy = y + 76 + lh * (i + 0.62);
				const mx = x + w - 56;
				return (
					<g key={i}>
						<Sx x={x + 30} y={yy} text={r.t} size={size} color={INK} weight={600} at={r.at} />
						{r.mark === 'tick' && r.markAt !== undefined ? <DrawPath d={`M${mx - 18},${yy - 14} L${mx - 4},${yy} L${mx + 20},${yy - 30}`} at={r.markAt} dur={10} color="#2f8a5b" width={6} /> : null}
						{r.mark === 'cross' && r.markAt !== undefined ? (
							<g>
								<DrawPath d={`M${mx - 16},${yy - 30} L${mx + 16},${yy + 2}`} at={r.markAt} dur={8} color={GREYX} width={6} />
								<DrawPath d={`M${mx + 16},${yy - 30} L${mx - 16},${yy + 2}`} at={r.markAt + 5} dur={8} color={GREYX} width={6} />
							</g>
						) : null}
					</g>
				);
			})}
		</g>
	);
};
export const critH = (n: number, lh = 72) => 76 + n * lh + 14;

/** A coded drop falling from (x, y0) to y1 starting at `at`. */
export const FallDrop: React.FC<{x: number; y0: number; y1: number; at: number; color?: string; s?: number}> = ({x, y0, y1, at, color = '#c9dcef', s = 1}) => {
	const f = useCurrentFrame();
	const p = clamp01((f - at) / 16);
	if (f < at || p >= 1) return null;
	const y = lerp(y0, y1, p * p);
	return <path d={`M${x},${y} q${7 * s},${12 * s} 0,${18 * s} q${-7 * s},${-6 * s} 0,${-18 * s} Z`} fill={color} stroke="#4f86ad" strokeWidth={1.5} />;
};
// ---------- the C09 ionising site, with no heat ripple (this lesson is about amounts, not heat) ----------
/** One acid molecule that ionises at `ion` and whose hydronium is removed by hydroxide at `meet` (C09 IonSite). */
export const IonSite: React.FC<{x: number; y: number; ion: number; meet: number | null; from: [number, number]; s?: number; ang?: number; o?: number}> = ({x, y, ion, meet, from, s = 1.5, ang = -0.6, o = 1}) => {
	const f = useCurrentFrame();
	const p = smooth(clamp01((f - ion) / 22));
	const [hx, hy] = hPos(x, y, s, ang);
	const wx = x + Math.cos(ang) * 46 * s, wy = y + Math.sin(ang) * 46 * s;
	const gone = meet !== null && f >= meet;
	return (
		<g opacity={o}>
			{p <= 0.001 ? (
				<g>
					<circle cx={wx} cy={wy} r={9.5 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={1.6} opacity={0.85} />
					<HA x={x} y={y} s={s} a={ang} />
				</g>
			) : (
				<g>
					<An x={x} y={y} s={s} />
					{!gone ? (p < 1 ? (
						<g>
							<circle cx={wx} cy={wy} r={9.5 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={1.6} opacity={0.85} />
							<circle cx={lerp(hx, wx + 7 * s, p)} cy={lerp(hy, wy - 6 * s, p)} r={7 * s} fill="#2a9d8f" stroke="#1d6f66" strokeWidth={2} />
						</g>
					) : <H3O x={wx} y={wy} s={s} />) : null}
					{meet !== null ? <OHMeet from={from} to={[wx, wy]} at={meet - 26} s={s} ripple={false} /> : null}
				</g>
			)}
		</g>
	);
};
void Fade; void ACID_INK; void UNK;
