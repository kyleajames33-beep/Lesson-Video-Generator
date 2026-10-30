// Drawing parts for M8 C01 (Mohr titration). Reuses M6 C12 (and through it C10 to C01: the burette fill, drops, titre
// table, task line, givens card, working lines, equation line, chips, crossed chips, lens frame, question text, countdown
// and key notes). New here:
// - Dot: a labelled coded ion (Ag+ pale grey, Cl- green, CrO4 2- yellow, H+ soft orange, OH- violet-grey);
// - IonSwap: the zoom inset where each Ag+ meets a Cl- and the pair drops as a white AgCl tile; later two Ag+ meet a
//   chromate and drop as a red-brown Ag2CrO4 tile; extra Ag+ float unpaired;
// - MohrRig: the burette over a flask on the white tile, with flask plates that cross-fade in place (the clip flasks
//   and the three Mohr flasks share one alpha box), optional desaturation (plain AgCl, no chromate yet) and drops;
// - Swirl: a pen arc that circles the flask once (swirling, no hands);
// - Ladder: the log scale of [Ag+] needed (10^-10 to 10^-4 mol/L) with sliding start markers;
// - PHStrip: a pH 0 to 14 strip with the valid window;
// - Hazard: a coded hazard band with two diamond marks (no people);
// - CompareBars: two horizontal bars (sample against seawater).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {BuretteFill, FallDrop, INK, INK_SOFT, NAVY, Sx, TEAL, burAt, clamp01, flaskW, lerp, mw, picW, smooth, vis} from '../chem-m6-c12/parts';
import {CFLASK, TILE} from './common';
import type {PDef} from '../chem-m6-c01/assets';

export * from '../chem-m6-c12/parts';

export const AGC = '#d4d4d0', AG_INK = '#55554f';
export const CLC = '#5aa469', CL_INK = '#2f6b3c';
export const CRC = '#e8cf3a', CR_INK = '#8a7410';
export const HC = '#f2a65a', H_INK = '#a8601c';
export const RB = '#9c4128', RB_INK = '#7a2f1a';
export const WHITE_T = '#fbfbf8';

// ---------- ions ----------
export const Dot: React.FC<{x: number; y: number; r?: number; fill: string; ink: string; label: string; o?: number; size?: number}> = ({x, y, r = 18, fill, ink, label, o = 1, size}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={fill} stroke={ink} strokeWidth={2.4} />
		<Sx x={x} y={y + (size ?? r * 0.62) * 0.36} text={label} size={size ?? r * 0.62} color={ink} anchor="middle" weight={800} at={-1000} />
	</g>
));
export const Ag: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => <Dot x={x} y={y} r={17 * s} fill={AGC} ink={AG_INK} label="Ag^{+}" o={o} size={12 * s} />;
export const Cl: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => <Dot x={x} y={y} r={20 * s} fill={CLC} ink={CL_INK} label="Cl^{−}" o={o} size={13 * s} />;
export const Cr: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => <Dot x={x} y={y} r={24 * s} fill={CRC} ink={CR_INK} label="CrO_4^{2−}" o={o} size={10.5 * s} />;
export const Hp: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => <Dot x={x} y={y} r={13 * s} fill={HC} ink={H_INK} label="H^{+}" o={o} size={11 * s} />;
export const Tile: React.FC<{x: number; y: number; red?: boolean; o?: number; s?: number}> = ({x, y, red = false, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<rect x={x - 13 * s} y={y - 9 * s} width={26 * s} height={18 * s} rx={3} fill={red ? RB : WHITE_T} stroke={red ? RB_INK : '#8a857a'} strokeWidth={2} opacity={o} />
));

// ---------- the ion swap inset ----------
export type Site = [number, number];
const wob = (f: number, ph: number, a = 5): [number, number] => [Math.sin(f * 0.05 + ph) * a, Math.cos(f * 0.043 + ph * 1.3) * a];
/**
 * Inside a LensFrame of centre (cx, cy), radius r. `cl[i]` meets its silver at clT[i] (Infinity: never); `cr[j]` meets
 * two silvers at crT[j]; `extra` are arrival times of unpaired Ag+. Tiles stack along the bottom in pairing order.
 */
export const IonSwap: React.FC<{cx: number; cy: number; r: number; cl: Site[]; clT: number[]; cr?: Site[]; crT?: number[]; extra?: number[]; s?: number; o?: number}> = ({cx, cy, r, cl, clT, cr = [], crT = [], extra = [], s = 1, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const P = (u: number, v: number): [number, number] => [cx + u * r, cy + v * r];
	const events = [...clT.map((t, i) => ({t, red: false, i})), ...crT.map((t, j) => ({t, red: true, i: j}))].filter(e => Number.isFinite(e.t)).sort((a, b) => a.t - b.t);
	const slot = (k: number): [number, number] => [cx - r * 0.56 + (k % 8) * 30 * s, cy + r * 0.66 - Math.floor(k / 8) * 22 * s];
	const top = cy - r - 30;
	return (
		<g opacity={o}>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#f3f6f2" />
			{cl.map(([u, v], i) => {
				const T = clT[i];
				const [x, y] = P(u, v);
				const [wx, wy] = wob(f, i * 1.7);
				if (!Number.isFinite(T) || f < T) {
					const a = Number.isFinite(T) ? clamp01((f - (T - 22)) / 22) : 0;
					return (
						<g key={'c' + i}>
							<Cl x={x + wx} y={y + wy} s={s} />
							{a > 0 ? <Ag x={lerp(x, x + wx, a) + 6} y={lerp(top, y + wy - 26 * s, smooth(a))} s={s} /> : null}
						</g>
					);
				}
				return null;
			})}
			{cr.map(([u, v], j) => {
				const T = crT[j] ?? Infinity;
				const [x, y] = P(u, v);
				const [wx, wy] = wob(f, j * 2.3 + 1);
				if (!Number.isFinite(T) || f < T) {
					const a1 = Number.isFinite(T) ? clamp01((f - (T - 30)) / 22) : 0, a2 = Number.isFinite(T) ? clamp01((f - (T - 20)) / 20) : 0;
					return (
						<g key={'r' + j}>
							<Cr x={x + wx} y={y + wy} s={s} />
							{a1 > 0 ? <Ag x={x - 24 * s} y={lerp(top, y + wy - 22 * s, smooth(a1))} s={s} /> : null}
							{a2 > 0 ? <Ag x={x + 24 * s} y={lerp(top, y + wy - 22 * s, smooth(a2))} s={s} /> : null}
						</g>
					);
				}
				return null;
			})}
			{events.map((e, k) => {
				const [x, y] = e.red ? P(...cr[e.i]) : P(...cl[e.i]);
				const [sx, sy] = slot(k);
				const p = smooth(clamp01((f - e.t) / 20));
				if (f < e.t) return null;
				const pop = f - e.t < 8 ? 1.25 : 1;
				return <Tile key={'t' + k} x={lerp(x, sx, p)} y={lerp(y, sy, p)} red={e.red} s={s * pop} />;
			})}
			{extra.map((t, k) => {
				if (f < t - 20) return null;
				const a = clamp01((f - (t - 20)) / 20);
				const hx = cx + (-0.45 + k * 0.32) * r, hy = cy - r * 0.18 + (k % 2) * r * 0.22;
				const [wx, wy] = wob(f, k * 3.1 + 2, 6);
				return <Ag key={'x' + k} x={hx + wx * a} y={lerp(top, hy + wy, smooth(a))} s={s} />;
			})}
		</g>
	);
};

// ---------- plates with an optional filter ----------
export const PicF: React.FC<{p: PDef; x: number; y: number; h: number; o?: number; filter?: string}> = ({p, x, y, h, o = 1, filter}) => {
	if (o <= 0.01) return null;
	const k = h / p.box[3];
	return <image href={staticFile(p.src)} x={x - p.box[0] * k} y={y - p.box[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} opacity={o} style={filter ? {filter} : undefined} />;
};
export type FState = {p: PDef; at: number; dur?: number; filter?: string};
/** Flask states cross-fading in place: each state fades in over the previous one from its `at`. */
export const FlaskStates: React.FC<{x: number; y: number; h: number; states: FState[]; o?: number}> = ({x, y, h, states, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const q = states.map(s => prog(f, s.at, s.dur ?? 26));
	return (
		<g opacity={o}>
			{states.map((s, i) => {
				const later = q.slice(i + 1).reduce((a, v) => Math.max(a, v), 0);
				const op = (i === 0 ? 1 : q[i]) * (later >= 0.999 ? 0 : 1);
				return op > 0.01 ? <PicF key={i} p={s.p} x={x} y={y} h={h} o={op} filter={s.filter} /> : null;
			})}
		</g>
	);
};
export const rigGeom = (tx: number, ty: number, fh: number, gap = 16) => ({x: tx - flaskW(fh) * 0.5, y: ty + gap, w: flaskW(fh), h: fh});
/** Burette over the flask on the tile. `drops`: [from, to, every] frames of falling drops at the tip. */
export const MohrRig: React.FC<{tx: number; ty: number; bh: number; fh: number; level: (f: number) => number; states: FState[]; at: number; out?: number; o?: number; drops?: [number, number, number][]; gap?: number; label?: {t: string; at: number}}> = ({tx, ty, bh, fh, level, states, at, out, o = 1, drops = [], gap = 16, label}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const b = burAt(tx, ty, bh);
	const G = rigGeom(tx, ty, fh, gap);
	const tw = G.w * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	const ds: number[] = [];
	drops.forEach(([a, z, e]) => { for (let t = a; t < z; t += e) ds.push(t); });
	return (
		<g opacity={v}>
			<PicF p={TILE} x={tx - tw / 2} y={G.y + fh - th * 0.55} h={th} />
			<BuretteFill x={b.x} y={b.y} h={bh} level={level} />
			<FlaskStates x={G.x} y={G.y} h={fh} states={states} />
			{ds.map((t, i) => <FallDrop key={i} x={tx} y0={ty - 4} y1={G.y + fh * 0.62} at={t} color="#dfe6ee" />)}
			{label ? <Sx x={tx + 46} y={b.y + bh * 0.22} text={label.t} size={32} color={NAVY} weight={800} at={label.at} /> : null}
		</g>
	);
};
/** A pen arc that circles the flask once (the swirl). */
export const Swirl: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; color?: string}> = ({cx, cy, rx, ry, at, color = TEAL}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const o = 1 - prog(f, at + 40, 14);
	const d = `M${cx - rx},${cy} A${rx},${ry} 0 1 0 ${cx + rx},${cy} A${rx},${ry} 0 1 0 ${cx - rx + 6},${cy - 8}`;
	return (
		<g opacity={o}>
			<DrawPath d={d} at={at} dur={34} color={color} width={4} />
			<path d={`M${cx - rx - 10},${cy - 14} L${cx - rx + 6},${cy - 8} L${cx - rx - 6},${cy + 6}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" opacity={prog(f, at + 30, 6)} />
		</g>
	);
};

// ---------- the silver-needed ladder ----------
export type LadderP = {x: number; y0: number; y1: number; lo: number; hi: number};
export const ladY = (L: LadderP, e: number) => L.y1 - ((e - L.lo) / (L.hi - L.lo)) * (L.y1 - L.y0);
export const Ladder: React.FC<{L: LadderP; at: number; out?: number; o?: number; label?: string}> = ({L, at, out, o = 1, label = '[Ag^{+}] needed to start forming'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 24));
	const ticks = Array.from({length: L.hi - L.lo + 1}, (_, i) => L.lo + i);
	return (
		<g opacity={v}>
			<Sx x={L.x} y={L.y0 - 40} text={label} size={30} color={INK} anchor="middle" weight={700} at={at} />
			<line x1={L.x} x2={L.x} y1={L.y1} y2={L.y1 - (L.y1 - L.y0) * d} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" />
			{ticks.map(e => (
				<g key={e} opacity={prog(f, at + 10 + (e - L.lo) * 3, 10)}>
					<line x1={L.x - 12} x2={L.x + 12} y1={ladY(L, e)} y2={ladY(L, e)} stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={L.x - 40} y={ladY(L, e) + 10} text={`10^{${e < 0 ? '−' + -e : e}}`} size={26} color={INK_SOFT} anchor="end" weight={600} at={-1000} />
				</g>
			))}
			<Sx x={L.x + 22} y={L.y0 + 8} text="mol/L" size={22} color={INK_SOFT} anchor="start" weight={600} at={-1000} />
		</g>
	);
};
/** A start marker on the ladder: a short bar with a label to the right; its height (log10 of [Ag+]) can slide. */
export const LMark: React.FC<{L: LadderP; e: (f: number) => number; at: number; color: string; ink: string; lines: string[]; out?: number; o?: number; flash?: number}> = ({L, e, at, color, ink, lines, out, o = 1, flash}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const y = ladY(L, e(f));
	const drop = (1 - smooth(prog(f, at, 16))) * -40;
	const fl = flash === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - flash) / 30) * Math.PI));
	return (
		<g opacity={v} transform={`translate(0,${drop})`}>
			{fl > 0.01 ? <circle cx={L.x} cy={y} r={34 + 20 * fl} fill={RB} opacity={0.35 * fl} /> : null}
			<rect x={L.x - 26} y={y - 9} width={52} height={18} rx={4} fill={color} stroke={ink} strokeWidth={2.5} />
			{lines.map((t, i) => <Sx key={i} x={L.x + 50} y={y + 10 + (i - (lines.length - 1) / 2) * 34} text={t} size={i === 0 ? 28 : 25} color={ink} weight={i === 0 ? 800 : 600} at={-1000} />)}
		</g>
	);
};

// ---------- pH strip ----------
export const PHStrip: React.FC<{x: number; y: number; w: number; at: number; win: [number, number]; winAt: number; out?: number; o?: number; lit?: {side: 'l' | 'r'; from: number; to?: number}[]}> = ({x, y, w, at, win, winAt, out, o = 1, lit = []}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const X = (p: number) => x + (p / 14) * w;
	const d = smooth(prog(f, at, 24));
	const wo = prog(f, winAt, 14);
	const gl = (s: 'l' | 'r') => lit.filter(l => l.side === s).reduce((a, l) => Math.max(a, vis(f, l.from, l.to, 10)), 0);
	return (
		<g opacity={v}>
			<defs>
				<linearGradient id="m8ph" x1="0" x2="1" y1="0" y2="0">
					<stop offset="0" stopColor="#e9907a" /><stop offset="0.5" stopColor="#e7e2d6" /><stop offset="1" stopColor="#8fa6cf" />
				</linearGradient>
			</defs>
			<rect x={x} y={y} width={w * d} height={40} rx={20} fill="url(#m8ph)" stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
			{gl('l') > 0.01 ? <rect x={x - 6} y={y - 6} width={X(win[0]) - x + 6} height={52} rx={24} fill="none" stroke={H_INK} strokeWidth={4} opacity={gl('l')} /> : null}
			{gl('r') > 0.01 ? <rect x={X(win[1])} y={y - 6} width={x + w - X(win[1]) + 6} height={52} rx={24} fill="none" stroke="#6d5aa0" strokeWidth={4} opacity={gl('r')} /> : null}
			{wo > 0.01 ? <g opacity={wo}><rect x={X(win[0])} y={y - 12} width={X(win[1]) - X(win[0])} height={64} rx={10} fill="#2f8a5b" opacity={0.18} stroke="#2f8a5b" strokeWidth={4} /><Sx x={(X(win[0]) + X(win[1])) / 2} y={y - 26} text="valid: about pH 6.5 to 10" size={32} color="#2f8a5b" anchor="middle" weight={800} at={-1000} /></g> : null}
			{[0, 7, 14].map(p => <Sx key={p} x={X(p)} y={y + 78} text={`${p}`} size={28} color={INK_SOFT} anchor="middle" weight={700} at={-1000} opacity={prog(f, at + 14, 10)} />)}
			<Sx x={x} y={y + 112} text="acid" size={28} color={H_INK} weight={700} hand at={at + 10} />
			<Sx x={x + w} y={y + 112} text="base" size={28} color="#6d5aa0" weight={700} anchor="end" hand at={at + 10} />
		</g>
	);
};

// ---------- hazard band ----------
export const Diamond: React.FC<{x: number; y: number; s?: number; mark: string; at: number}> = ({x, y, s = 1, mark, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	if (o <= 0.01) return null;
	const r = 46 * s;
	return (
		<g opacity={o}>
			<path d={`M${x},${y - r} L${x + r},${y} L${x},${y + r} L${x - r},${y} Z`} fill="#fffdf8" stroke="#c4432f" strokeWidth={6 * s} strokeLinejoin="round" />
			<Sx x={x} y={y + 14 * s} text={mark} size={36 * s} color={INK} anchor="middle" weight={900} at={-1000} />
		</g>
	);
};

// ---------- compare bars ----------
export const CompareBars: React.FC<{x: number; y: number; w: number; rows: {label: string; v: number; color: string}[]; max: number; at: number; o?: number}> = ({x, y, w, rows, max, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{rows.map((r, i) => {
				const p = smooth(prog(f, at + 6 + i * 12, 24));
				const yy = y + i * 70;
				return (
					<g key={i}>
						<rect x={x} y={yy} width={w * (r.v / max) * p} height={34} rx={8} fill={r.color} opacity={0.85} />
						<Sx x={x + w * (r.v / max) * p + 14} y={yy + 27} text={r.label} size={28} color={INK} weight={700} at={-1000} opacity={p} />
					</g>
				);
			})}
		</g>
	);
};
void mw; void picW; void CFLASK;
