// M7 B03 drawing parts: the route chain board (two coded host circles, the leave, travel and enter stations, a lane
// whose length and contents change per mode), the mode tabs, coded droplets that fall within a short distance against
// specks that drift and linger, break marks cut across a lane, a host-cell membrane edge with surface molecules or a
// receptor row (one receptor shape matches the spike), a wavy gut wall, short teal grip ticks, and the clipped rod.
// B01 (M7), M6 B01/B07/B09 and M6 P01 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, DrawPath, EDGE, GREYT, GREY_INK, GTag, GreyCross, HChip, HostCircle, INK, INK_SOFT, Pl, Ring, Sx, Tg, clamp01, fitW, kOf,
	lerp, plH, prog, ptOf, pulse, scribbleEllipse, smooth, tw, vis,
} from '../bio-m7-b01/parts';
import {CTag, CrossChip, Fade, TEAL, TERRA, WText} from '../bio-m6-p01/parts';
import {PlateB} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import {rng} from '../../kit';
import {FEAT, PLATES} from './assets';

export {
	AMBER, AMBER_INK, CARD, DrawPath, EDGE, GREYT, GREY_INK, GTag, GreyCross, HChip, HostCircle, INK, INK_SOFT, Pl, Ring, Sx, Tg, clamp01, fitW, kOf,
	lerp, plH, prog, ptOf, pulse, scribbleEllipse, smooth, tw, vis, CTag, CrossChip, Fade, TEAL, TERRA, WText, PlateB, rng, FEAT, PLATES,
};
export type {PB};
export const DROP = '#4f86b8';
export const RED = '#b8322a';

// ---------- the route chain ----------
export type ChainProps = {
	lx: number; rx: number; y: number; r?: number; o?: number;
	leftO?: number; laneP?: number; rightO?: number;
	/** Pathogen glyph: shown in the left host; `glyphT` 0..1 moves it along the lane to the right host. */
	glyphO?: number; glyphT?: number;
	labels?: number;
	/** Station chips: opacity, lit amount and lit colour per station (leave, travel, enter). */
	st?: [number, number, number]; stLit?: [number, number, number]; stColor?: [string, string, string];
	/** The left host fades to a dashed outline (the infected host has left the room). */
	leftGone?: number;
	grey?: number;
	stY?: number;
};
export const ST_NAMES = ['leave', 'travel', 'enter'];
export const stX = (lx: number, rx: number, r = 80) => [lx + r + 80, (lx + rx) / 2, rx - r - 80];
export const Chain: React.FC<ChainProps> = ({lx, rx, y, r = 80, o = 1, leftO = 1, laneP = 1, rightO = 1, glyphO = 1, glyphT = -1, labels = 1, st = [1, 1, 1], stLit = [0, 0, 0], stColor = [AMBER, INK_SOFT, TEAL], leftGone = 0, grey = 0, stY}) => {
	if (o <= 0.01) return null;
	const a = lx + r, b = rx - r;
	const lw = Math.max(0, (b - a) * clamp01(laneP));
	const sx = stX(lx, rx, r);
	const sy = stY ?? y + r + 74;
	const g = clamp01(grey);
	const gx = glyphT < 0 ? lx : lerp(lx, rx, smooth(glyphT));
	const gy = glyphT < 0 ? y : y - Math.sin(clamp01(glyphT) * Math.PI) * 26;
	return (
		<g opacity={o * (1 - 0.5 * g)}>
			{lw > 1 ? (
				<g>
					<rect x={a} y={y - 30} width={lw} height={60} fill="#efe6d4" opacity={0.85} />
					<line x1={a} x2={a + lw} y1={y - 30} y2={y - 30} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={a} x2={a + lw} y1={y + 30} y2={y + 30} stroke={INK_SOFT} strokeWidth={3} />
				</g>
			) : null}
			<g opacity={leftO * (1 - leftGone)}><HostCircle x={lx} y={y} r={r} label="infected host" labelO={labels} /></g>
			{leftGone > 0.01 ? <circle cx={lx} cy={y} r={r} fill="none" stroke={GREYT} strokeWidth={3.5} strokeDasharray="10 9" opacity={leftGone * leftO} /> : null}
			<HostCircle x={rx} y={y} r={r} o={rightO} label="new host" labelO={labels} />
			{glyphO > 0.01 && leftO > 0.01 ? <PathGlyph x={lx} y={y} s={r / 90} o={glyphO * leftO * (1 - leftGone)} /> : null}
			{glyphO > 0.01 && glyphT > 0 ? <PathGlyph x={gx} y={gy} s={r / 90} o={glyphO * Math.min(1, glyphT * 8)} /> : null}
			{ST_NAMES.map((n, i) => {
				if (st[i] <= 0.01) return null;
				const lit = clamp01(stLit[i]);
				const w = tw(n, 26, true) + 40;
				return (
					<g key={n} opacity={st[i]}>
						<rect x={sx[i] - w / 2} y={sy - 22} width={w} height={44} rx={22} fill={lit > 0.5 ? '#fffaf0' : '#f3f2ee'} stroke={lit > 0.5 ? stColor[i] : GREYT} strokeWidth={lit > 0.5 ? 3.5 : 2} />
						<Sx x={sx[i]} y={sy + 9} text={n} size={26} color={lit > 0.5 ? INK : GREY_INK} hand weight={700} anchor="middle" at={-100} />
					</g>
				);
			})}
		</g>
	);
};

/** A coded, generic pathogen glyph (a small cluster of red-brown cells); no species is implied. */
export const PathGlyph: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{[[-16, -8, 20], [10, -14, -30], [2, 10, 60], [-20, 14, -10], [20, 8, 35]].map(([dx, dy, a], i) => (
			<ellipse key={i} cx={x + dx * s} cy={y + dy * s} rx={11 * s} ry={6.5 * s} fill="#c96a5a" stroke="#7a2f25" strokeWidth={2} transform={`rotate(${a} ${x + dx * s} ${y + dy * s})`} />
		))}
	</g>
));

/** The three mode tabs across the top (direct, indirect, vector), one lit. */
export const MODES = ['direct contact', 'indirect contact', 'vector'];
export const ModeTabs: React.FC<{lit: number; o?: number; y?: number}> = ({lit, o = 1, y = 70}) => {
	if (o <= 0.01) return null;
	const ws = MODES.map(m => tw(m, 34, true) + 56);
	const total = ws.reduce((s, w) => s + w, 0) + 40;
	let x = 960 - total / 2;
	return (
		<g opacity={o}>
			{MODES.map((m, i) => {
				const x0 = x;
				x += ws[i] + 20;
				const on = i === lit;
				return (
					<g key={m}>
						<rect x={x0} y={y} width={ws[i]} height={60} rx={30} fill={on ? '#fff3d9' : '#f3f2ee'} stroke={on ? AMBER : GREYT} strokeWidth={on ? 3.5 : 2} />
						<Sx x={x0 + ws[i] / 2} y={y + 42} text={m} size={34} color={on ? INK : GREY_INK} hand weight={700} anchor="middle" at={-100} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- droplets and drifting particles ----------
/** Coded respiratory droplets thrown out of a host from (sx, sy): they arc and fall to the ground within `range`. */
export const Droplets: React.FC<{sx: number; sy: number; ground: number; range: number; at: number; n?: number; o?: number; bursts?: number; gap?: number; seed?: number; s?: number}> = ({sx, sy, ground, range, at, n = 14, o = 1, bursts = 2, gap = 70, seed = 5, s = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const out: React.ReactNode[] = [];
	for (let b = 0; b < bursts; b++) {
		const r = rng(seed + b * 11);
		for (let i = 0; i < n; i++) {
			const t0 = at + b * gap + i * 2;
			if (f < t0) { r(); r(); continue; }
			const d = (0.25 + 0.75 * r()) * range;
			const lift = (20 + r() * 40) * s;
			const u = clamp01((f - t0) / 26);
			const x = sx + d * u;
			const y = sy + (ground - sy) * u * u - lift * Math.sin(u * Math.PI) * (1 - u * 0.4);
			const landed = u >= 1;
			out.push(<circle key={b + '-' + i} cx={x} cy={landed ? ground - 5 * s : y} r={(landed ? 5 : 7) * s} fill={DROP} stroke="#2c5b85" strokeWidth={1.2} opacity={landed ? 0.55 : 0.95} />);
		}
	}
	return <g opacity={o}>{out}</g>;
};
const SPECK = ['#7c8389', '#4f8f8a', '#8e8a80', '#5f7f86'];
/** Tiny airborne particles drifting from (sx, sy) toward x1, staying suspended (they bob, never settle). */
export const Drift: React.FC<{sx: number; sy: number; x1: number; band?: number; at: number; o?: number; n?: number; period?: number}> = ({sx, sy, x1, band = 70, at, o = 1, n = 22, period = 150}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const r = rng(41);
	return (
		<g opacity={o * prog(f, at, 14)}>
			{Array.from({length: n}, (_, i) => {
				const off = r(), yo = (r() - 0.5) * band * 2, wob = 6 + r() * 12;
				const born = at + i * 5;
				if (f < born) return null;
				const ph = ((f - at) / period + off) % 1;
				const x = lerp(sx, x1, ph);
				const y = sy + yo + Math.sin((f - at) / 18 + i) * wob;
				const fade = Math.min(1, ph * 8, (1 - ph) * 8) * prog(f, born, 8);
				return <circle key={i} cx={x} cy={y} r={4.5} fill={SPECK[i % 4]} stroke="#3d4247" strokeWidth={1} opacity={fade} />;
			})}
		</g>
	);
};

// ---------- break mark ----------
/** A scribble cut across a lane at x (vertical zigzag through y, height h). */
export const BreakMark: React.FC<{x: number; y: number; h?: number; at: number; out?: number; color?: string; pulseAt?: number; width?: number}> = ({x, y, h = 90, at, out, color = TERRA, pulseAt, width = 7}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 8);
	if (f < at || o <= 0.01) return null;
	const pts = [-0.5, -0.3, -0.1, 0.1, 0.3, 0.5].map((t, i) => `${i ? 'L' : 'M'}${x + (i % 2 ? 16 : -16)},${y + t * h}`).join(' ');
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	return (
		<g opacity={o}>
			{pu > 0.01 ? <circle cx={x} cy={y} r={h * 0.6} fill={color} opacity={0.18 * pu} /> : null}
			<DrawPath d={pts} at={at} dur={10} color={color} width={width + 4 * pu} />
		</g>
	);
};

// ---------- membranes, molecules, receptors, gut wall ----------
/** A host-cell surface edge (pale band, outer line). */
export const Membrane: React.FC<{x0: number; x1: number; y: number; at: number; o?: number; h?: number}> = ({x0, x1, y, at, o = 1, h = 200}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 18) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<rect x={x0} y={y} width={x1 - x0} height={h} fill="#f6e3dc" opacity={0.75} />
			<DrawPath d={`M${x0},${y} L${x1},${y}`} at={at} dur={18} color="#b9786a" width={5} />
			<DrawPath d={`M${x0},${y + 14} L${x1},${y + 14}`} at={at} dur={18} color="#c99a92" width={2.5} />
		</g>
	);
};
/** Small coded surface molecules (stalk and knob) standing on a membrane at y. */
export const Molecules: React.FC<{xs: number[]; y: number; at: number; o?: number; lit?: number[]}> = ({xs, y, at, o = 1, lit = []}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{xs.map((x, i) => {
				const p = prog(f, at + i * 3, 10);
				if (p <= 0.01) return null;
				const l = clamp01(lit[i] ?? 0);
				return (
					<g key={i} opacity={p}>
						<line x1={x} x2={x} y1={y} y2={y - 22} stroke={l > 0.5 ? TEAL : '#8d6a94'} strokeWidth={3.5} />
						<circle cx={x} cy={y - 28} r={8} fill={l > 0.5 ? TEAL : '#c8b0d0'} stroke={l > 0.5 ? TEAL : '#8d6a94'} strokeWidth={2} />
					</g>
				);
			})}
		</g>
	);
};
export type RKind = 'cup' | 'square' | 'tri' | 'fork';
/** A receptor glyph standing on a membrane; the 'cup' fits the spike. */
const receptorPath = (k: RKind, x: number, y: number) => {
	const t = y - 40;
	if (k === 'cup') return `M${x - 22},${t} L${x - 22},${y} L${x + 22},${y} L${x + 22},${t} M${x - 22},${t} Q${x - 22},${t + 26} ${x},${t + 26} Q${x + 22},${t + 26} ${x + 22},${t}`;
	if (k === 'square') return `M${x - 18},${y} L${x - 18},${t} L${x + 18},${t} L${x + 18},${y}`;
	if (k === 'tri') return `M${x - 20},${y} L${x},${t} L${x + 20},${y}`;
	return `M${x},${y} L${x},${t + 14} M${x},${t + 14} L${x - 16},${t} M${x},${t + 14} L${x + 16},${t}`;
};
export const Receptors: React.FC<{items: {x: number; k: RKind}[]; y: number; at: number; o?: number; match?: number; glow?: number}> = ({items, y, at, o = 1, match = -1, glow = 0}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{items.map((it, i) => {
				const p = prog(f, at + i * 4, 10);
				if (p <= 0.01) return null;
				const hot = i === match ? clamp01(glow) : 0;
				return (
					<g key={i} opacity={p}>
						{hot > 0.01 ? <circle cx={it.x} cy={y - 22} r={40} fill={TEAL} opacity={0.22 * hot} /> : null}
						<path d={receptorPath(it.k, it.x, y)} fill="none" stroke={hot > 0.3 ? TEAL : '#7a6a8c'} strokeWidth={hot > 0.3 ? 6 : 4.5} strokeLinecap="round" strokeLinejoin="round" />
					</g>
				);
			})}
		</g>
	);
};
/** A vertical wavy gut-wall edge at x from y0 to y1 (lumen side faces `side`). */
export const GutWall: React.FC<{x: number; y0: number; y1: number; at: number; side?: 1 | -1; o?: number}> = ({x, y0, y1, at, side = 1, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const n = 9;
	const d = Array.from({length: n * 4 + 1}, (_, i) => {
		const yy = lerp(y0, y1, i / (n * 4));
		const xx = x + side * 12 * Math.sin((i / 4) * Math.PI * 2 / 2);
		return `${i ? 'L' : 'M'}${xx.toFixed(1)},${yy.toFixed(1)}`;
	}).join(' ');
	return (
		<g opacity={o * prog(f, at, 12)}>
			<rect x={side > 0 ? x - 70 : x} y={y0} width={70} height={y1 - y0} fill="#f2cfc4" opacity={0.6} />
			<DrawPath d={d} at={at} dur={22} color="#b9786a" width={5} />
		</g>
	);
};
/** Short teal grip ticks from points a[i] to b[i]. */
export const GripTicks: React.FC<{a: [number, number][]; b: [number, number][]; at: number; o?: number; step?: number}> = ({a, b, at, o = 1, step = 6}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}>{a.map((p, i) => <DrawPath key={i} d={`M${p[0]},${p[1]} L${b[i][0]},${b[i][1]}`} at={at + i * step} dur={8} color={TEAL} width={6} />)}</g>;
};

// ---------- plate helpers ----------
/** The fimbriated rod alone (the coccus clipped off), scaled uniformly. */
export const Rod: React.FC<{cx: number; cy: number; w: number; o?: number; id: string; dim?: number}> = ({cx, cy, w, o = 1, id, dim = 0}) => (o <= 0.01 ? null : (
	<g opacity={1 - 0.55 * clamp01(dim)}><PlateB p={PLATES.rod} cx={cx} cy={cy} w={w} o={o} id={id} filter={dim > 0.01 ? `grayscale(${clamp01(dim)})` : undefined} /></g>
));
/** A plate fitted into a max box. */
export const Fit: React.FC<{p: PB; cx: number; cy: number; mw: number; mh: number; o?: number; dim?: number}> = ({p, cx, cy, mw, mh, o = 1, dim = 0}) => <Pl p={p} cx={cx} cy={cy} w={fitW(p, mw, mh)} o={o} dim={dim} />;
/** A small amber or teal kind tag ("entry" or "transmission"). */
export const KindTag: React.FC<{x: number; y: number; kind: 'entry' | 'transmission'; at: number; out?: number; dim?: number}> = ({x, y, kind, at, out, dim = 0}) => (
	<CTag x={x} y={y} text={kind} at={at} out={out} color={kind === 'entry' ? TEAL : AMBER_INK} size={24} dim={dim} />
);
/** A mini droplet fan (the coughing thumbnail): a host circle and a few blue droplets. */
export const MiniBurst: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x - 34 * s} cy={y} r={26 * s} fill="#f4efe4" stroke={INK_SOFT} strokeWidth={3} />
		{[[0, -10], [14, 2], [26, 14], [8, 18], [34, 30], [20, 34]].map(([dx, dy], i) => <circle key={i} cx={x + dx * s} cy={y + dy * s} r={5 * s} fill={DROP} stroke="#2c5b85" strokeWidth={1} />)}
	</g>
));
export const useF = () => useCurrentFrame();
void scribbleEllipse; void Ring; void GTag; void GreyCross; void Tg; void plH; void kOf; void ptOf; void HChip; void CARD; void EDGE; void GREY_INK; void CrossChip; void WText; void Fade; void FEAT;
