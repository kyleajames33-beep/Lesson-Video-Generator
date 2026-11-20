// Drawing parts for Y11 Chem WS V03 (conducting investigations). Reuses the ws-v02 parts (and through them the M1 V08,
// V06, V01 and M2 V06 text, chips, framed answers, pen marks, plates, readouts, brackets, the balance with a large
// display, flames, the crucible bowl and the pause hold). New here: a lidded crucible whose painted lid (clipped from
// the lidded plate) can be knocked off and put back over any crucible body plate; the small plan card; the number
// line with dots, a gold accepted-value mark, spread and gap brackets; coded source cards (data sheet with a small
// periodic-table grid, safety data sheet with plain filler bars, handbook, online comment) and a check list row.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {CRU_LID, LID_POLY} from './common';
import type {PDef} from './common';
import {CARD, DrawPath, INK, NAVY_T, Plate, Rich, Sx, TickMark, plateMap, prog, smooth, vis} from '../chem-y11-ws-v02/parts';
import type {Seg} from '../chem-y11-ws-v02/parts';
import {PTable} from '../chem-y11-m1-v11/parts';
import type {PTG} from '../chem-y11-m1-v11/parts';

export * from '../chem-y11-ws-v02/parts';
export {PTable};
export type {PTG};

// ---------- colour key additions (design Revision 4) ----------
export const TERRA_T = '#a8421c'; // risk and hazard text
export const ROSE_S = '#b8325f';
export const GOLD_F = '#f6e7b8';
export const HILITE = '#fbe58a';

// ---------- the lidded crucible ----------
/** A crucible plate `body` drawn at (x, y) with height h, with the painted lid (clipped from the lidded plate) on top,
 *  moved by (dx, dy) native px and turned by rot degrees about its centre. With no movement and the lidded body it is
 *  the lidded plate exactly. */
export const Lidded: React.FC<{id: string; body: PDef; x: number; y: number; h: number; dx?: number; dy?: number; rot?: number; lid?: number; o?: number; body2?: PDef; mix?: number}> = ({id, body, x, y, h, dx = 0, dy = 0, rot = 0, lid = 1, o = 1, body2, mix = 0}) => {
	if (o <= 0.005) return null;
	const k = h / CRU_LID.box[3];
	const ox = x - CRU_LID.box[0] * k, oy = y - CRU_LID.box[1] * k;
	const still = dx === 0 && dy === 0 && rot === 0 && body.src === CRU_LID.src && !body2;
	return (
		<g opacity={o}>
			<Plate p={body} x={x} y={y} h={h} />
			{body2 && mix > 0.005 ? <Plate p={body2} x={x} y={y} h={h} o={mix} /> : null}
			{!still && lid > 0.005 ? (
				<g opacity={lid} transform={`translate(${ox + dx * k},${oy + dy * k}) scale(${k}) rotate(${rot},505,190)`}>
					<defs><clipPath id={id}><polygon points={LID_POLY.map(p => p.join(',')).join(' ')} /></clipPath></defs>
					<image href={staticFile(CRU_LID.src)} x={0} y={0} width={CRU_LID.nat[0]} height={CRU_LID.nat[1]} clipPath={`url(#${id})`} />
				</g>
			) : null}
		</g>
	);
};

// ---------- the small plan card ----------
export type MLine = {segs: Seg[]; at?: number; tick?: number; color?: string};
/** A small "Our plan" card: a title and short lines (30 px or more), each able to write on and gain a tick. */
export const PlanMini: React.FC<{x: number; y: number; w: number; h: number; lines: MLine[]; title?: string; size?: number; lh?: number; at?: number; out?: number; head?: string; headColor?: string}> = ({x, y, w, h, lines, title = 'Our plan', size = 32, lh = 46, at = -1000, out, head, headColor}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.005) return null;
	const y0 = y + 64 + (head ? 52 : 0);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill={CARD} stroke={INK} strokeWidth={4} />
			<Sx x={x + 24} y={y + 48} text={title} size={40} color={INK} hand weight={700} at={-1000} />
			<line x1={x + 24} x2={x + w - 24} y1={y + 62} y2={y + 62} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />
			{head ? <Sx x={x + 24} y={y + 106} text={head} size={size + 2} color={headColor ?? INK} weight={800} at={-1000} /> : null}
			{lines.map((l, i) => {
				const ly = y0 + 40 + i * lh;
				return (
					<g key={i}>
						<Rich x={x + 24} y={ly} segs={l.segs.map(s => ({...s, c: s.c ?? l.color ?? INK}))} size={size} weight={700} at={l.at ?? -1000} />
						{l.tick !== undefined ? <TickMark x={x + w - 34} y={ly - size * 0.3} at={l.tick} s={0.8} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the number line ----------
export type NL = {x0: number; x1: number; v0: number; v1: number; y: number};
export const nx = (g: NL, v: number) => g.x0 + ((v - g.v0) / (g.v1 - g.v0)) * (g.x1 - g.x0);
/** Axis with whole-number ticks (labels 34 px, with a unit), minor ticks every `minor`. */
export const NumberLine: React.FC<{g: NL; unit?: string; minor?: number; size?: number; o?: number; step?: number}> = ({g, unit = '%', minor = 0.2, size = 34, o = 1, step = 1}) => {
	if (o <= 0.005) return null;
	const majors: number[] = [];
	for (let v = g.v0; v <= g.v1 + 1e-6; v += step) majors.push(Math.round(v * 10) / 10);
	const minors: number[] = [];
	for (let v = g.v0; v <= g.v1 + 1e-6; v += minor) minors.push(Math.round(v * 100) / 100);
	return (
		<g opacity={o}>
			<line x1={g.x0 - 30} x2={g.x1 + 30} y1={g.y} y2={g.y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{minors.map(v => <line key={'m' + v} x1={nx(g, v)} x2={nx(g, v)} y1={g.y - 8} y2={g.y + 8} stroke={INK} strokeWidth={2.5} />)}
			{majors.map(v => (
				<g key={v}>
					<line x1={nx(g, v)} x2={nx(g, v)} y1={g.y - 16} y2={g.y + 16} stroke={INK} strokeWidth={4} />
					<Sx x={nx(g, v)} y={g.y + 16 + size + 4} text={`${v}${unit}`} size={size} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
		</g>
	);
};
/** The gold accepted-value mark with its label above. */
export const GoldMark: React.FC<{g: NL; v: number; label: string; top: number; size?: number; at?: number; pulse?: number; anchor?: 'start' | 'middle' | 'end'}> = ({g, v, label, top, size = 38, at = -1000, pulse = -1000, anchor = 'middle'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.005) return null;
	const x = nx(g, v);
	const pz = 1 + 0.25 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - pulse) / 24)));
	return (
		<g opacity={o}>
			<line x1={x} x2={x} y1={top + 12} y2={g.y + 20} stroke="#b08a1e" strokeWidth={7 * pz} strokeLinecap="round" />
			<circle cx={x} cy={g.y} r={12 * pz} fill="#e2b93b" stroke="#86650a" strokeWidth={3} />
			<Sx x={x} y={top} text={label} size={size} color="#86650a" anchor={anchor} weight={800} at={-1000} />
		</g>
	);
};
/** A result dot that drops onto the line (from `lift` px above) at frame `at`; `wait` shows it waiting above. */
export const Dot: React.FC<{g: NL; v: number; at: number; color: string; stroke?: string; r?: number; lift?: number; wait?: number; dy?: number; dxPush?: number}> = ({g, v, at, color, stroke = INK, r = 16, lift = 120, wait, dy = 0, dxPush = 0}) => {
	const f = useCurrentFrame();
	const shown = wait !== undefined ? prog(f, wait, 10) : prog(f, at - 10, 10);
	if (shown <= 0.005) return null;
	const u = smooth(prog(f, at, 14));
	const y = g.y - dy - lift * (1 - u);
	return <circle cx={nx(g, v) + dxPush} cy={y} r={r} fill={color} stroke={stroke} strokeWidth={3} opacity={shown} />;
};

// ---------- source cards ----------
/** A coded source card: a title bar and its body. */
export const SourceCard: React.FC<{x: number; y: number; w: number; h: number; title: string; sub?: string; color?: string; at?: number; out?: number; children?: React.ReactNode; size?: number; frame?: string; frameAt?: number}> = ({x, y, w, h, title, sub, color = NAVY_T, at = -1000, out, children, size = 34, frame, frameAt = -1000}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.005) return null;
	const fo = frame ? prog(f, frameAt, 10) : 0;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill={CARD} stroke={INK} strokeWidth={3.5} />
			<rect x={x} y={y} width={w} height={size * 1.55} rx={14} fill={color} />
			<rect x={x} y={y + size * 1.55 - 14} width={w} height={14} fill={color} />
			<Sx x={x + 20} y={y + size * 1.1} text={title} size={size} color="#ffffff" weight={800} at={-1000} />
			{sub ? <Sx x={x + 20} y={y + size * 1.55 + 40} text={sub} size={30} color={INK} weight={700} at={-1000} /> : null}
			{children}
			{fo > 0.01 ? <rect x={x - 8} y={y - 8} width={w + 16} height={h + 16} rx={18} fill="none" stroke={frame} strokeWidth={6} opacity={fo} /> : null}
		</g>
	);
};
/** Plain filler bars (stand-ins for small print; not real wording). */
export const Filler: React.FC<{x: number; y: number; w: number; n: number; gap?: number; seed?: number; h?: number}> = ({x, y, w, n, gap = 26, seed = 1, h = 10}) => (
	<g>
		{Array.from({length: n}, (_, i) => <rect key={i} x={x} y={y + i * gap} width={w * (0.62 + 0.36 * Math.abs(Math.sin((i + 1) * 1.7 + seed)))} height={h} rx={5} fill="#c9c1b2" />)}
	</g>
);
/** The data sheet's small periodic-table grid (plain cells) inside a card. */
export const MiniTable: React.FC<{x: number; y: number; cw: number; ch: number; o?: number}> = ({x, y, cw, ch, o = 1}) => <PTable g={{x, y, cw, ch}} plain zSize={0} o={o} />;

/** A pen cross (rose by default). */
export const PenCross: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 18, color = ROSE_S}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			<DrawPath d={`M${x - s},${y - s} L${x + s},${y + s}`} at={at} dur={8} color={color} width={7} />
			<DrawPath d={`M${x + s},${y - s} L${x - s},${y + s}`} at={at + 4} dur={8} color={color} width={7} />
		</g>
	);
};

/** Highlighter band behind a text line that sweeps on from `at`. */
export const Highlight: React.FC<{x: number; y: number; w: number; h: number; at: number; color?: string}> = ({x, y, w, h, at, color = HILITE}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, 14));
	if (p <= 0.005) return null;
	return <rect x={x} y={y} width={w * p} height={h} rx={6} fill={color} />;
};
export {plateMap};
