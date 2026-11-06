// B8-07 coded parts (b08 reuses PathwayStrip, RiskDial and the small pieces read-only). Abstract diagrams only;
// organs, cells and objects stay painted plates. Nothing here draws people.
// - PathwayStrip: linked boxes "exposure -> change -> effect" (or b08's four-slot chain). Headers show from the first frame;
//   a box lights on its cue, rows write on cue, and a box can split into stacked slots (branch mode).
// - RiskDial: a semicircle gauge from "low" to "high" with no numbers; the needle follows a frame function.
// - Ticket, CellO: lottery tickets and coded cell outlines. Wisps: drifting smoke. Timeline and Bracket. Sparks.
// - Q1Graph: the attempt graph (two y axes, illustrative data), drawn in full; parts brighten on cue.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, DrawPath, EDGE, GREYT, GREY_FILL, INK, INK_SOFT, Sx, TEAL, clamp01, mw, prog, pulse, smooth, vis, wrapM} from '../bio-m8-g01/board';
import {LUNG, SMOKE} from './common';
import {FONT_DISPLAY, FONT_HAND} from '../../kit';

export * from '../bio-m8-g01/board';
export const RED = '#c4432f';
export const GREEN = '#2f8a5b';
export const SMOKE_C = '#8d969c';
export type P2 = [number, number];

// ---------- pathway strip ----------
export type SRow = {t: string; at: number; out?: number; slot?: number; dim?: number};
export type SBox = {head: string; w: number; showAt?: number; litAt?: number; slots?: number; splitAt?: number; rows?: SRow[]; thumbW?: number; thumb?: (x: number, y: number, w: number, h: number) => React.ReactNode; hot?: {slot: number; at: number; out?: number}[]};
export const PathwayStrip: React.FC<{x: number; y: number; h?: number; boxes: SBox[]; gap?: number; size?: number; at?: number; o?: number; headSize?: number}> = ({x, y, h = 180, boxes, gap = 54, size = 36, at = -1000, o = 1, headSize = 30}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 16) * o;
	if (v <= 0.01) return null;
	let bx = x;
	const out: React.ReactNode[] = [];
	boxes.forEach((b, i) => {
		const lit = b.litAt === undefined ? 1 : prog(f, b.litAt, 12);
		const shown = b.showAt === undefined ? 1 : prog(f, b.showAt, 14);
		const n = (b.slots ?? 1) > 1 && f >= (b.splitAt ?? -1000) ? (b.slots as number) : 1;
		const sp = (b.slots ?? 1) > 1 ? prog(f, b.splitAt ?? -1000, 14) : 1;
		const tw = b.thumbW ?? 0;
		const cx0 = bx + 18 + tw;
		const cw = b.w - 36 - tw;
		const top = y + 50, bot = y + h - 8, sh = (bot - top) / n;
		out.push(
			<g key={'b' + i} opacity={shown}>
				<rect x={bx} y={y} width={b.w} height={h} rx={18} fill={CARD} stroke={lit > 0.5 ? BLUE : EDGE} strokeWidth={lit > 0.5 ? 4 : 3} strokeDasharray={lit > 0.5 ? undefined : '10 8'} />
				<Sx x={bx + 18} y={y + 36} text={b.head} size={headSize} color={lit > 0.5 ? BLUE : GREYT} hand weight={700} at={-1000} />
				{b.thumb ? b.thumb(bx + 12, y + 58, tw, h - 68) : null}
				{(b.hot ?? []).map((hh, k) => { const g = vis(f, hh.at, hh.out, 10); const sy = top + sh * hh.slot; return g > 0.01 ? <rect key={'h' + k} x={cx0 - 8} y={sy + 2} width={cw + 10} height={sh - 4} rx={10} fill={AMBER} opacity={0.28 * g} /> : null; })}
				{n > 1 ? Array.from({length: n - 1}, (_, k) => <line key={'s' + k} x1={cx0} x2={cx0 + cw} y1={top + sh * (k + 1)} y2={top + sh * (k + 1)} stroke="rgba(60,45,20,0.25)" strokeWidth={2} strokeDasharray="6 6" opacity={sp} />) : null}
				{Array.from({length: n}, (_, s) => {
					const rows = (b.rows ?? []).filter(r => (r.slot ?? 0) === s && f >= r.at && (r.out === undefined || f < r.out + 12));
					const r = rows[rows.length - 1];
					const fs = n > 1 ? Math.min(size, 30) : size;
					if (!r) return n > 1 ? <Sx key={'q' + s} x={cx0 + 6} y={top + sh * s + sh / 2 + fs * 0.36} text="?" size={fs} color={GREYT} weight={800} at={-1000} opacity={sp} /> : null;
					const ov = vis(f, r.at, r.out, 12) * (r.dim === undefined ? 1 : 1 - 0.5 * prog(f, r.dim, 14));
					const lines = wrapM(r.t, fs, cw, true, 700).slice(0, n > 1 ? 1 : 2);
					const L = Math.round(fs * 1.1);
					const y0 = top + sh * s + sh / 2 - ((lines.length - 1) * L) / 2 + fs * 0.34;
					return <g key={'r' + s} opacity={ov}>{lines.map((ln, k) => <Sx key={k} x={cx0} y={y0 + k * L} text={ln} size={fs} color={INK} hand weight={700} at={-1000} />)}</g>;
				})}
			</g>,
		);
		if (i < boxes.length - 1) {
			const ax = bx + b.w + 8, ay = y + h / 2;
			const na = boxes[i + 1].showAt === undefined ? 1 : prog(f, boxes[i + 1].showAt as number, 14);
			out.push(<path key={'a' + i} opacity={na} d={`M${ax},${ay} L${ax + gap - 16},${ay} M${ax + gap - 30},${ay - 13} L${ax + gap - 16},${ay} L${ax + gap - 30},${ay + 13}`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />);
		}
		bx += b.w + gap;
	});
	return <g opacity={v}>{out}</g>;
};
/** x of box i's left edge. */
export const stripX = (x: number, ws: number[], i: number, gap = 54) => x + ws.slice(0, i).reduce((a, b) => a + b + gap, 0);

// ---------- risk dial ----------
export const RiskDial: React.FC<{cx: number; cy: number; r?: number; val: (f: number) => number; at?: number; o?: number; title?: string; label?: string; labelAt?: number; size?: number}> = ({cx, cy, r = 130, val, at = -1000, o = 1, title = 'risk', label, labelAt = -1000, size = 32}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const pt = (t: number, rr: number): P2 => [cx + rr * Math.cos(Math.PI + t * Math.PI), cy + rr * Math.sin(Math.PI + t * Math.PI)];
	const arc = (t0: number, t1: number) => { const [a, b] = pt(t0, r), [c, d] = pt(t1, r); return `M${a},${b} A${r},${r} 0 0 1 ${c},${d}`; };
	const t = clamp01(val(f));
	const [nx, ny] = pt(t, r - 26);
	return (
		<g opacity={v}>
			<path d={`M${cx - r - 30},${cy + 14} L${cx + r + 30},${cy + 14}`} stroke={EDGE} strokeWidth={3} />
			<path d={arc(0, 0.34)} fill="none" stroke="#8fbf98" strokeWidth={28} />
			<path d={arc(0.34, 0.67)} fill="none" stroke="#ecc56a" strokeWidth={28} />
			<path d={arc(0.67, 1)} fill="none" stroke="#d98a6b" strokeWidth={28} />
			<line x1={cx} y1={cy} x2={nx} y2={ny} stroke={INK} strokeWidth={8} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={14} fill={INK} />
			<Sx x={cx - r} y={cy + 52} text="low" size={size} color={INK} anchor="middle" hand at={-1000} />
			<Sx x={cx + r} y={cy + 52} text="high" size={size} color={INK} anchor="middle" hand at={-1000} />
			<Sx x={cx} y={cy - r - 34} text={title} size={size + 4} color={INK} anchor="middle" hand at={-1000} />
			{label ? <Sx x={cx} y={cy + 104} text={label} size={size + 4} color={AMBER_INK} anchor="middle" hand at={labelAt} /> : null}
		</g>
	);
};

// ---------- lottery tickets and cell outlines ----------
/** state 0 plain, 1 grey with a tick (repaired), 2 amber (an unlucky change). */
export const Ticket: React.FC<{x: number; y: number; w?: number; st?: number; amb?: number; o?: number}> = ({x, y, w = 58, st = 0, amb = 0, o = 1}) => {
	if (o <= 0.01) return null;
	const h = w * 0.62;
	const fill = amb > 0.5 ? '#f6d48c' : st > 0.5 ? GREY_FILL : CARD;
	const stroke = amb > 0.5 ? AMBER_INK : st > 0.5 ? '#aaa296' : INK_SOFT;
	return (
		<g opacity={o}>
			<path d={`M${x},${y} h${w} v${h * 0.32} a${h * 0.18},${h * 0.18} 0 0 0 0,${h * 0.36} v${h * 0.32} h${-w} v${-h * 0.32} a${h * 0.18},${h * 0.18} 0 0 0 0,${-h * 0.36} Z`} fill={fill} stroke={stroke} strokeWidth={3} />
			<line x1={x + w * 0.3} x2={x + w * 0.3} y1={y + 4} y2={y + h - 4} stroke={stroke} strokeWidth={2} strokeDasharray="4 4" />
			{st > 0.5 && amb < 0.5 ? <path d={`M${x + w * 0.45},${y + h * 0.5} l${w * 0.1},${h * 0.2} l${w * 0.2},${-h * 0.42}`} fill="none" stroke={GREEN} strokeWidth={4} strokeLinecap="round" /> : null}
		</g>
	);
};
/** A coded cell outline with a nucleus; `amb` tints it amber (cancer), `tick` adds a grey tick. */
export const CellO: React.FC<{x: number; y: number; r?: number; amb?: number; tick?: number; o?: number}> = ({x, y, r = 26, amb = 0, tick = 0, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={amb > 0.5 ? '#f6d48c' : '#fbf3ea'} stroke={amb > 0.5 ? AMBER_INK : '#b49f92'} strokeWidth={3} />
		<circle cx={x + r * 0.12} cy={y - r * 0.05} r={r * 0.34} fill={amb > 0.5 ? '#d08a2c' : '#c9b6c7'} />
		{tick > 0.5 && amb < 0.5 ? <path d={`M${x + r * 0.55},${y + r * 0.62} l${r * 0.22},${r * 0.24} l${r * 0.42},${-r * 0.5}`} fill="none" stroke="#8d857a" strokeWidth={3.5} strokeLinecap="round" /> : null}
	</g>
));

// ---------- smoke wisps ----------
/** n wavy grey wisps drifting from a towards b (dashes flow along them). */
export const Wisps: React.FC<{a: P2; b: P2; n?: number; spread?: number; at?: number; out?: number; o?: number; width?: number; color?: string}> = ({a, b, n = 3, spread = 26, at = -1000, out, o = 1, width = 6, color = SMOKE_C}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const off = (i - (n - 1) / 2) * spread;
				const pts = Array.from({length: 13}, (_, k) => { const t = k / 12; const w = Math.sin(t * 7 + i * 1.7 + f / 18) * 12; return [a[0] + dx * t + nx * (off + w), a[1] + dy * t + ny * (off + w)]; });
				return <path key={i} d={'M' + pts.map(p => p.join(',')).join(' L')} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray="22 14" strokeDashoffset={-(f * 1.6 + i * 9)} opacity={0.8} />;
			})}
		</g>
	);
};

// ---------- timeline, bracket ----------
export type TL = {x0: number; x1: number; y: number; yr0: number; yr1: number};
export const tlx = (t: TL, yr: number) => t.x0 + ((yr - t.yr0) / (t.yr1 - t.yr0)) * (t.x1 - t.x0);
export const Timeline: React.FC<{t: TL; ticks: number[]; at?: number; o?: number; size?: number}> = ({t, ticks, at = -1000, o = 1, size = 30}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 30));
	return (
		<g opacity={v}>
			<line x1={t.x0} x2={t.x0 + (t.x1 - t.x0) * d} y1={t.y} y2={t.y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{ticks.map((yr, i) => <g key={yr} opacity={prog(f, at + 6 + i * 3, 8)}><line x1={tlx(t, yr)} x2={tlx(t, yr)} y1={t.y - 10} y2={t.y + 10} stroke={INK} strokeWidth={4} /><Sx x={tlx(t, yr)} y={t.y + 44} text={`${yr}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
		</g>
	);
};
/** A bracket over [xa, xb] at y (ticks point down) with a label above; `stretch` animates xb from xa. */
export const Bracket: React.FC<{xa: number; xb: number; y: number; at: number; out?: number; label?: string; size?: number; color?: string; o?: number}> = ({xa, xb, y, at, out, label, size = 40, color = AMBER_INK, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<path d={`M${xa},${y + 16} L${xa},${y} L${xb},${y} L${xb},${y + 16}`} fill="none" stroke={color} strokeWidth={5} strokeLinejoin="round" />
			{label ? <Sx x={(xa + xb) / 2} y={y - 14} text={label} size={size} color={color} anchor="middle" hand at={at + 6} /> : null}
		</g>
	);
};

// ---------- sparks and dots ----------
/** Small dots travelling from a to each target, repeating every `every` frames. */
export const Sparks: React.FC<{a: P2; to: P2[]; at: number; out?: number; every?: number; dur?: number; color?: string; r?: number; o?: number}> = ({a, to, at, out, every = 40, dur = 34, color = AMBER, r = 8, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const dots: React.ReactNode[] = [];
	to.forEach((b, j) => {
		for (let t0 = at + j * 9; t0 <= f; t0 += every) {
			const u = (f - t0) / dur;
			if (u < 0 || u > 1) continue;
			const k = smooth(u);
			dots.push(<circle key={j + '-' + t0} cx={a[0] + (b[0] - a[0]) * k} cy={a[1] + (b[1] - a[1]) * k} r={r} fill={color} stroke="#fffdf8" strokeWidth={2} opacity={Math.sin(u * Math.PI) * 0.6 + 0.4} />);
		}
	});
	return <g opacity={v}>{dots}</g>;
};
/** Dots that drop from above to their resting points, one by one from `at` every `step` frames. */
export const DropDots: React.FC<{pts: P2[]; at: number; step?: number; r?: number; color?: string; stroke?: string; drop?: number; o?: number}> = ({pts, at, step = 6, r = 10, color = INK, stroke = '#fffdf8', drop = 60, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{pts.map(([x, y], i) => {
				const p = prog(f, at + i * step, 14);
				if (p <= 0.01) return null;
				return <circle key={i} cx={x} cy={y - (1 - smooth(p)) * drop} r={r} fill={color} stroke={stroke} strokeWidth={2} opacity={p} />;
			})}
		</g>
	);
};

// ---------- the attempt graph ----------
export type G2 = {x: number; y: number; w: number; h: number};
const gxv = (g: G2, yr: number) => g.x + ((yr - 1945) / (2020 - 1945)) * g.w;
const gyS = (g: G2, v: number) => g.y + g.h - (v / 80) * g.h;
const gyL = (g: G2, v: number) => g.y + g.h - (v / 100) * g.h;
export const q1x = gxv;
export const q1yL = gyL;
export const q1yS = gyS;
/** Men's smoking (grey, left axis 0 to 80 %) and male lung cancer (amber, right axis 0 to 100 per 100 000 per year). */
export const Q1Graph: React.FC<{g: G2; size?: number; hiS?: number; hiL?: number; dimAt?: number; o?: number}> = ({g, size = 26, hiS, hiL, dimAt, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const xt = [1945, 1960, 1975, 1990, 2005, 2020];
	const hs = hiS === undefined ? 0 : prog(f, hiS, 14);
	const hl = hiL === undefined ? 0 : prog(f, hiL, 14);
	const dm = dimAt === undefined ? 0 : prog(f, dimAt, 14);
	const path = (pts: [number, number][], fy: (g: G2, v: number) => number) => 'M' + pts.map(([a, b]) => `${gxv(g, a)},${fy(g, b)}`).join(' L');
	const SM = '#6f6a62';
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			{[0, 20, 40, 60, 80].map(v => <line key={'gl' + v} x1={g.x} x2={g.x + g.w} y1={gyS(g, v)} y2={gyS(g, v)} stroke="#e6ddcc" strokeWidth={1.5} />)}
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h} L${g.x + g.w},${g.y}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{xt.map(yr => <g key={yr}><line x1={gxv(g, yr)} x2={gxv(g, yr)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} /><Sx x={gxv(g, yr)} y={g.y + g.h + size * 1.35} text={`${yr}`} size={size} color={INK} anchor="middle" weight={600} at={-1000} /></g>)}
			{[0, 20, 40, 60, 80].map(v => <g key={'ys' + v}><line x1={g.x - 10} x2={g.x} y1={gyS(g, v)} y2={gyS(g, v)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 16} y={gyS(g, v) + size * 0.35} text={`${v}`} size={size} color={SM} anchor="end" weight={700} at={-1000} /></g>)}
			{[0, 25, 50, 75, 100].map(v => <g key={'yl' + v}><line x1={g.x + g.w} x2={g.x + g.w + 10} y1={gyL(g, v)} y2={gyL(g, v)} stroke={AMBER_INK} strokeWidth={3} /><Sx x={g.x + g.w + 16} y={gyL(g, v) + size * 0.35} text={`${v}`} size={size} color={AMBER_INK} weight={700} at={-1000} /></g>)}
			<Sx x={g.x + g.w / 2} y={g.y + g.h + size * 2.6} text="year" size={size} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={g.x - size * 1.6} y={g.y - size * 1.75} text="men who smoke (%)" size={size} color={SM} weight={800} at={-1000} />
			<Sx x={g.x + g.w + size * 1.6} y={g.y - size * 0.6} text="new lung cancer cases (per 100 000 per year)" size={size} color={AMBER_INK} anchor="end" weight={800} at={-1000} />
			<g opacity={1 - 0.5 * dm * (1 - hs)}>
				{hs > 0.01 ? <path d={path(SMOKE, gyS)} fill="none" stroke={AMBER} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" opacity={0.3 * hs} /> : null}
				<path d={path(SMOKE, gyS)} fill="none" stroke={SM} strokeWidth={5} strokeLinejoin="round" />
				{SMOKE.map(([a, b]) => <circle key={'s' + a} cx={gxv(g, a)} cy={gyS(g, b)} r={6} fill={SM} />)}
			</g>
			<g opacity={1 - 0.5 * dm * (1 - hl)}>
				{hl > 0.01 ? <path d={path(LUNG.filter(p => p[0] <= 1982), gyL)} fill="none" stroke={AMBER} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" opacity={0.35 * hl} /> : null}
				<path d={path(LUNG, gyL)} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinejoin="round" strokeDasharray="14 8" />
				{LUNG.map(([a, b]) => <rect key={'l' + a} x={gxv(g, a) - 6} y={gyL(g, b) - 6} width={12} height={12} fill={AMBER_INK} />)}
			</g>
		</g>
	);
};
/** Key for Q1Graph. */
export const Q1Key: React.FC<{x: number; y: number; size?: number}> = ({x, y, size = 26}) => (
	<g>
		<rect x={x} y={y} width={mw('lung cancer rate (right axis)', size, false, 700) + 96} height={size * 3.2} rx={10} fill={CARD} stroke={EDGE} strokeWidth={2} />
		<line x1={x + 14} x2={x + 62} y1={y + size * 1.1} y2={y + size * 1.1} stroke="#6f6a62" strokeWidth={5} />
		<Sx x={x + 74} y={y + size * 1.1 + size * 0.36} text="men who smoke (left axis)" size={size} color={INK} weight={700} at={-1000} />
		<line x1={x + 14} x2={x + 62} y1={y + size * 2.3} y2={y + size * 2.3} stroke={AMBER_INK} strokeWidth={5} strokeDasharray="12 6" />
		<Sx x={x + 74} y={y + size * 2.3 + size * 0.36} text="lung cancer rate (right axis)" size={size} color={INK} weight={700} at={-1000} />
	</g>
);
/** The countdown ring shown full ("10") from the "Pause here" cue until the shared Countdown takes over at its measured
 *  start, so the ring is on screen as soon as students are asked to pause. Same look as the kit's Countdown. */
export const PreRing: React.FC<{at: number; start: number; x: number; y: number; r?: number}> = ({at, start, x, y, r = 46}) => {
	const f = useCurrentFrame();
	if (f < at || f >= start - 10) return null;
	const v = prog(f, at, 12);
	return (
		<g opacity={v} transform={`translate(${x},${y})`}>
			<circle r={r + 16} fill="#fffdf8" stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
			<circle r={r} fill="none" stroke={AMBER} strokeWidth={14} />
			<text y={16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}} fill={INK}>10</text>
			<text y={r + 62} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>think it through</text>
		</g>
	);
};
export {GREYT, TEAL, pulse};
