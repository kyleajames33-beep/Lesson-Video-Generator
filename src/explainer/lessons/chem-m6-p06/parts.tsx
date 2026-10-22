// Drawing parts for M6 P06 (the titration practical). One visual system with P02 to P05 and, through them, C01 to C16
// (re-exported from P05): the C12 burette fill, titre table, concordance strip and mole bridge; the C07 volumetric
// pipette and flask fill; the P02 risk table, cards and amber readout; chips, crossed chips, question card, countdown,
// key notes. New here (lesson-local):
// - MoFlask / TRig: the conical flask that crossfades empty, yellow, orange, red (brief 97 clips) and swirls about its
//   base (coded rotation, no hand), on the white tile under the burette with an amber coded fill (the unknown acid);
// - Bal: the analytical balance with a coded readout on its slanted display;
// - MenScale: the meniscus close-up with coded scale numerals; SightLine: the dashed line of sight that tilts and levels;
// - ChainV: the error chain (cause grey, titre violet, answer terracotta), one chip per cue with arrows between;
// - Table4: the titre table with initial, final and titre columns; StepCard: the right-zone step header;
// - PipUp: the volumetric pipette stood upright with a coded liquid along its axis; TapTurn: a turning-tap glyph;
//   Bubble: the coded air pocket in the burette tip; NeckLens / TipLens: coded close-ups inside a lens frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog} from '../../kit';
import {
	AChip, BuretteFill, CROSS, Fade, GREYX, INK, INK_SOFT, LensFrame, NAVY, PicH, PipettePlate, READ_BG, READ_TXT, RingAt, Sx, TEAL, burAt, burPt, clamp01,
	flaskW, lerp, mw, natP, picW, smooth, vis,
} from '../chem-m6-p05/parts';
import {BAL_G, BALANCE, BUR_G, CFLASK, MEN_G, MENISCUS, MO, PIPETTE_G, TILE} from './assets';
import type {PDef} from './assets';

export * from '../chem-m6-p05/parts';

export const ACIDFILL = '#efcf86';
export const UNKI = '#b07a12';
export const VIO = '#6f55a3';
export const TERRA = '#b5502b';
export const WATERB = '#9cc8e6';
export const RX = 1190;

// ---------- the conical flask: empty, yellow, orange, red; swirls about its base ----------
export type FState = {at: number; s: 'e' | 'y' | 'o' | 'r'; d?: number};
const plateOf = (s: FState['s']): PDef => (s === 'e' ? CFLASK : s === 'y' ? MO.yellow : s === 'o' ? MO.orange : MO.red);
export const MoFlask: React.FC<{x: number; y: number; h: number; states: FState[]; wob?: (f: number) => number; film?: number; o?: number}> = ({x, y, h, states, wob, film = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const w = states.map(() => 0);
	w[0] = 1;
	for (let k = 1; k < states.length; k++) {
		const t = prog(f, states[k].at, states[k].d ?? 20);
		for (let j = 0; j < k; j++) w[j] *= 1 - t;
		w[k] = t;
	}
	const fw = flaskW(h);
	const a = wob ? wob(f) : 0;
	return (
		<g opacity={o} transform={a ? `rotate(${a} ${x + fw / 2} ${y + h})` : undefined}>
			{states.map((s, i) => (w[i] > 0.01 ? <PicH key={i} p={plateOf(s.s)} x={x} y={y} h={h} o={w[i]} /> : null))}
			{film > 0.01 ? <ellipse cx={x + fw / 2} cy={y + h * 0.9} rx={fw * 0.36} ry={h * 0.045} fill={WATERB} opacity={0.55 * film} /> : null}
		</g>
	);
};
/** Swirl wobble: a short rock of the flask after each frame in `at`. */
export const wobAt = (ats: number[], deg = 5) => (f: number) => ats.reduce((a, t) => a + (f >= t && f < t + 24 ? Math.sin(((f - t) / 24) * Math.PI * 2) * deg * (1 - (f - t) / 24) : 0), 0);

/** Burette (amber coded fill) over a conical flask on the white tile. */
export const TRig: React.FC<{tx: number; ty: number; bh: number; fh: number; level: (f: number) => number; fill?: (f: number) => number; states?: FState[]; wob?: (f: number) => number; at: number; out?: number; o?: number; gap?: number; film?: number; color?: string}> = ({tx, ty, bh, fh, level, fill, states = [{at: -100, s: 'e'}], wob, at, out, o = 1, gap = 16, film, color = ACIDFILL}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const b = burAt(tx, ty, bh);
	const fw = flaskW(fh);
	const fx = tx - fw * 0.5, fy = ty + gap;
	const tw = fw * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	return (
		<g opacity={v}>
			<PicH p={TILE} x={tx - tw / 2} y={fy + fh - th * 0.55} h={th} />
			<BuretteFill x={b.x} y={b.y} h={bh} level={level} fill={fill} color={color} />
			<MoFlask x={fx} y={fy} h={fh} states={states} wob={wob} film={film} />
		</g>
	);
};
/** Useful points on a TRig: tube right edge at a natural y, the tap, the tip. */
export const rigPts = (tx: number, ty: number, bh: number) => {
	const b = burAt(tx, ty, bh);
	return {
		tube: (ny: number) => burPt(b.x, b.y, bh, BUR_G.tube[1] + 8, ny),
		tubeL: (ny: number) => burPt(b.x, b.y, bh, BUR_G.tube[0] - 8, ny),
		top: burPt(b.x, b.y, bh, (BUR_G.tube[0] + BUR_G.tube[1]) / 2, BUR_G.top),
		tap: burPt(b.x, b.y, bh, 1150, 1300),
		tip: burPt(b.x, b.y, bh, BUR_G.tip[0], BUR_G.tip[1]),
	};
};

/** A turning-tap glyph: a small curved arrow that spins while the tap is open. */
export const TapTurn: React.FC<{x: number; y: number; at: number; out: number; color?: string}> = ({x, y, at, out, color = TEAL}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 8);
	if (v <= 0.01) return null;
	const a = Math.min(90, (f - at) * 9);
	return (
		<g opacity={v} transform={`rotate(${a} ${x} ${y})`}>
			<path d={`M${x + 18},${y} A18,18 0 1 1 ${x},${y - 18}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
			<path d={`M${x - 8},${y - 26} L${x + 2},${y - 18} L${x - 8},${y - 10}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
		</g>
	);
};
/** Vertical stream from a burette tip (or pipette tip) down to y1, visible between at and out. */
export const Drip: React.FC<{x: number; y0: number; y1: number; at: number; out: number; color?: string; w?: number}> = ({x, y0, y1, at, out, color = ACIDFILL, w = 5}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 5);
	if (v <= 0.01) return null;
	const grow = smooth(prog(f, at, 8));
	return <line x1={x} y1={y0} x2={x} y2={lerp(y0, y1, grow)} stroke={color} strokeWidth={w} strokeLinecap="round" opacity={0.9 * v} />;
};
/** One falling drop. */
export const Drop: React.FC<{x: number; y0: number; y1: number; at: number; color?: string; r?: number}> = ({x, y0, y1, at, color = ACIDFILL, r = 7}) => {
	const f = useCurrentFrame();
	const q = clamp01((f - at) / 14);
	if (f < at || q >= 1) return null;
	const y = lerp(y0, y1, q * q);
	return <path d={`M${x},${y - r * 1.3} Q${x + r},${y} ${x},${y + r} Q${x - r},${y} ${x},${y - r * 1.3} Z`} fill={color} stroke="#8f6a1c" strokeWidth={1.2} />;
};

// ---------- analytical balance with a coded readout ----------
export const balW = (h: number) => picW(BALANCE, h);
export const Bal: React.FC<{x: number; y: number; h: number; read: (f: number) => string; at: number; out?: number; o?: number}> = ({x, y, h, read, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const q = BAL_G.screen.map(([nx, ny]) => natP(BALANCE, x, y, h, nx, ny));
	const cx = (q[0][0] + q[1][0] + q[2][0] + q[3][0]) / 4, cy = (q[0][1] + q[1][1] + q[2][1] + q[3][1]) / 4;
	const ang = (Math.atan2(q[1][1] - q[0][1], q[1][0] - q[0][0]) * 180) / Math.PI;
	const sh = Math.hypot(q[3][0] - q[0][0], q[3][1] - q[0][1]);
	const txt = read(f);
	return (
		<g opacity={v}>
			<PicH p={BALANCE} x={x} y={y} h={h} />
			<path d={`M${q.map(p => p.join(',')).join(' L')} Z`} fill={READ_BG} opacity={0.94} />
			{txt ? <text x={cx} y={cy + sh * 0.2} textAnchor="middle" fill={READ_TXT} transform={`rotate(${ang} ${cx} ${cy})`} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: sh * 0.58, fontVariantNumeric: 'tabular-nums'}}>{txt}</text> : null}
		</g>
	);
};

// ---------- meniscus close-up with coded scale numerals ----------
export const menW = (h: number) => picW(MENISCUS, h);
export const menPt = (x: number, y: number, h: number, nx: number, ny: number) => natP(MENISCUS, x, y, h, nx, ny);
/** y on screen of scale value v (mL) on the close-up placed at (x, y, h). */
export const menY = (y: number, h: number, v: number) => {
	const k = h / MENISCUS.box[3];
	const i = Math.round(v * 10);
	return y + (MEN_G.ticks[Math.max(0, Math.min(9, i))] - MENISCUS.box[1]) * k;
};
export const MenScale: React.FC<{x: number; y: number; h: number; at: number; numsAt: number; size?: number; o?: number}> = ({x, y, h, at, numsAt, size = 30, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 14) * o;
	if (v <= 0.01) return null;
	const nx = x + menW(h) + 22;
	return (
		<g opacity={v}>
			<PicH p={MENISCUS} x={x} y={y} h={h} />
			{MEN_G.ticks.map((t, i) => (
				<g key={i} opacity={prog(f, numsAt + i * 3, 10)}>
					<Sx x={nx} y={menY(y, h, i / 10) + size * 0.34} text={(i / 10).toFixed(1)} size={size} color={INK} weight={700} at={-1000} />
				</g>
			))}
		</g>
	);
};
/** A dashed sight line through pivot (px, py), at angle a(f) degrees above the horizontal, to the right for len px. */
export const SightLine: React.FC<{px: number; py: number; len: number; a: (f: number) => number; at: number; out?: number; color?: string; back?: number}> = ({px, py, len, a, at, out, color = INK_SOFT, back = 60}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const r = (a(f) * Math.PI) / 180;
	const ex = px + Math.cos(r) * len, ey = py - Math.sin(r) * len;
	const bx = px - Math.cos(r) * back, by = py + Math.sin(r) * back;
	const g = smooth(prog(f, at, 16));
	return (
		<g opacity={v}>
			<line x1={ex} y1={ey} x2={lerp(ex, bx, g)} y2={lerp(ey, by, g)} stroke={color} strokeWidth={4} strokeDasharray="14 10" strokeLinecap="round" />
			<circle cx={ex} cy={ey} r={9} fill={color} />
		</g>
	);
};
/** y where a sight line through (px, py) at angle a meets the vertical x = sx. */
export const sightY = (px: number, py: number, a: number, sx: number) => py - Math.tan((a * Math.PI) / 180) * (sx - px);

// ---------- error chain ----------
export type CItem = {t: string; color: string; at: number};
export const ChainV: React.FC<{x: number; y: number; items: CItem[]; gap?: number; size?: number; dim?: number; dimTo?: number; keepLast?: boolean; out?: number}> = ({x, y, items, gap = 104, size = 32, dim, dimTo = 0.4, keepLast = true, out}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	const vo = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (vo <= 0.01) return null;
	return (
		<g opacity={vo}>
			{items.map((it, i) => {
				const last = i === items.length - 1;
				const o = 1 - (1 - dimTo) * d * (last && keepLast ? 0 : 1);
				return (
					<g key={i} opacity={o}>
						{i > 0 ? (
							<g opacity={prog(f, it.at - 4, 8)}>
								<DrawPath d={`M${x + 34},${y + (i - 1) * gap + size * 1.62} L${x + 34},${y + i * gap - 6}`} at={it.at - 4} dur={8} color={INK_SOFT} width={4} />
								<path d={`M${x + 24},${y + i * gap - 16} L${x + 34},${y + i * gap - 4} L${x + 44},${y + i * gap - 16}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
							</g>
						) : null}
						<AChip x={x} y={y + i * gap} text={it.t} size={size} color={it.color} hand={false} at={it.at} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- four-column titre table ----------
export type T4Row = {cells: [string, string, string, string]; at: number; titreAt?: number; grey?: boolean; pulse?: number; ring?: number; cross?: number};
export const T4 = {cols: [0, 170, 400, 620], lh: 70};
export const t4Y = (y: number, i: number) => y + 24 + T4.lh * (i + 0.8);
export const Table4: React.FC<{x: number; y: number; rows: T4Row[]; at: number; out?: number; o?: number; size?: number}> = ({x, y, rows, at, out, o = 1, size = 38}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const head = ['run', 'initial (mL)', 'final (mL)', 'titre (mL)'];
	return (
		<g opacity={v}>
			{head.map((h, i) => <Sx key={i} x={x + T4.cols[i]} y={y} text={h} size={30} color={INK_SOFT} hand at={at} />)}
			<line x1={x} y1={y + 20} x2={x + T4.cols[3] + 230} y2={y + 20} stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
			{rows.map((r, i) => {
				const yy = t4Y(y, i);
				const cr = r.cross === undefined ? 0 : prog(f, r.cross, 12);
				const col = r.grey || cr > 0 ? GREYX : INK;
				const pg = r.pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - r.pulse) / 40) * Math.PI));
				const tx = x + T4.cols[3];
				const w = mw(r.cells[3], size, false, 700);
				return (
					<g key={i}>
						{pg > 0.01 ? <rect x={x - 14} y={yy - size * 0.95} width={T4.cols[3] + w + 40} height={size * 1.3} rx={10} fill="#f6d77a" opacity={0.45 * pg} /> : null}
						{r.cells.slice(0, 3).map((c, k) => <Sx key={k} x={x + T4.cols[k]} y={yy} text={c} size={k === 0 ? size * 0.85 : size} color={k === 0 ? (r.grey ? GREYX : INK_SOFT) : col} weight={k === 0 ? 600 : 600} at={r.at} />)}
						<Sx x={tx} y={yy} text={r.cells[3]} size={size} color={col} weight={800} at={r.titreAt ?? r.at} />
						{r.ring !== undefined ? <RingAt cx={tx + w / 2} cy={yy - size * 0.33} rx={w / 2 + 22} ry={size * 0.72} at={r.ring} /> : null}
						{r.cross !== undefined ? (
							<g>
								<DrawPath d={`M${x - 8},${yy - size * 0.35} L${tx + w + 12},${yy - size * 0.35}`} at={r.cross} dur={14} color={GREYX} width={4} />
							</g>
						) : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the right-zone step header ----------
export const StepCard: React.FC<{n: number; text: string; at: number; out?: number; x?: number; y?: number; w?: number}> = ({n, text, at, out, x = RX, y = 196, w = 640}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={76} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3.5} />
		<circle cx={x + 42} cy={y + 38} r={24} fill={TEAL} />
		<Sx x={x + 42} y={y + 49} text={String(n)} size={30} color="#fffdf8" anchor="middle" weight={800} at={-1000} />
		<Sx x={x + 84} y={y + 50} text={text} size={38} color={TEAL} hand at={at} />
	</Fade>
);

// ---------- the volumetric pipette stood upright, with a coded liquid along its axis ----------
const PAX = {tip: PIPETTE_G.tip, top: [1045, 700] as [number, number]};
const axisX = (ny: number) => PAX.tip[0] + ((PAX.tip[1] - ny) / (PAX.tip[1] - PAX.top[1])) * (PAX.top[0] - PAX.tip[0]);
export const PIP_MARK = 800;
/** level(f): natural y of the liquid top (1871 = empty, 800 = the mark). rot: extra tilt in degrees. */
export const PipUp: React.FC<{tip: (f: number) => [number, number]; h: number; level: (f: number) => number; rot?: (f: number) => number; color?: string; o?: number}> = ({tip, h, level, rot, color = NAVY, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const [tx, ty] = tip(f);
	const r = PIPETTE_G.tilt + (rot ? rot(f) : 0);
	const k = h / 1720;
	const L = level(f);
	const pt = (ny: number) => {
		const dx = (axisX(ny) - PAX.tip[0]) * k, dy = (ny - PAX.tip[1]) * k;
		const a = (r * Math.PI) / 180;
		return [tx + dx * Math.cos(a) - dy * Math.sin(a), ty + dx * Math.sin(a) + dy * Math.cos(a)];
	};
	const p0 = pt(PAX.tip[1] - 6), p1 = pt(Math.max(L, 760));
	const bulbFill = L < 1180 ? clamp01((1180 - L) / 160) : 0;
	const bc = pt(1100);
	return (
		<g opacity={o}>
			<PipettePlate tipX={tx} tipY={ty} h={h} rot={r} />
			{L < PAX.tip[1] - 8 ? <line x1={p0[0]} y1={p0[1]} x2={p1[0]} y2={p1[1]} stroke={color} strokeWidth={Math.max(3, 9 * k * 2.2)} strokeLinecap="round" opacity={0.75} /> : null}
			{bulbFill > 0.01 ? <ellipse cx={bc[0]} cy={bc[1]} rx={26 * k * 2.2} ry={80 * k * 2.2} fill={color} opacity={0.45 * bulbFill} /> : null}
		</g>
	);
};
export const pipAt = (tx: number, ty: number, h: number, ny: number, rot = 0): [number, number] => {
	const k = h / 1720;
	const dx = (axisX(ny) - PAX.tip[0]) * k, dy = (ny - PAX.tip[1]) * k;
	const a = ((PIPETTE_G.tilt + rot) * Math.PI) / 180;
	return [tx + dx * Math.cos(a) - dy * Math.sin(a), ty + dx * Math.sin(a) + dy * Math.cos(a)];
};

// ---------- the bubble in the burette tip ----------
export const Bubble: React.FC<{x: number; y: number; r: number; at: number; leave: number; dy?: number}> = ({x, y, r, at, leave, dy = 120}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, leave + 16, 8);
	if (v <= 0.01) return null;
	const q = smooth(prog(f, leave, 18));
	return <ellipse cx={x} cy={y + q * dy} rx={r * 0.8} ry={r} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} opacity={v} />;
};
/** Close-up of a narrow neck: glass walls, coded liquid with a curved surface whose bottom sits on the mark. */
export const NeckLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; title?: string; tint?: string}> = ({cx, cy, r, at, out, title, tint = '#bcd9ee'}) => (
	<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title}>
		<rect x={cx - r * 0.42} y={cy + 4} width={r * 0.84} height={r} fill={tint} opacity={0.6} />
		<path d={`M${cx - r * 0.42},${cy - 18} Q${cx},${cy + 26} ${cx + r * 0.42},${cy - 18} L${cx + r * 0.42},${cy + 6} L${cx - r * 0.42},${cy + 6} Z`} fill="#fffdf8" />
		<path d={`M${cx - r * 0.42},${cy - 18} Q${cx},${cy + 26} ${cx + r * 0.42},${cy - 18}`} fill="none" stroke="#4f86ad" strokeWidth={4} />
		<line x1={cx - r * 0.42} y1={cy - r} x2={cx - r * 0.42} y2={cy + r} stroke={INK_SOFT} strokeWidth={5} />
		<line x1={cx + r * 0.42} y1={cy - r} x2={cx + r * 0.42} y2={cy + r} stroke={INK_SOFT} strokeWidth={5} />
		<line x1={cx - r} y1={cy + 4} x2={cx + r} y2={cy + 4} stroke={INK} strokeWidth={3.5} />
	</LensFrame>
);
