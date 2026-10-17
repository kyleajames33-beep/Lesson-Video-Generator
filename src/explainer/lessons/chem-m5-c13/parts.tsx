// Drawing parts for C13 (solubility rules and net ionic equations): the painted reagent bottle with a coded label,
// labelled hydrated ions (the C11 drawing), the swap-partners cross with flying ion tokens, the rules card (full and
// compact), the abstract filter funnel and flask, composition cards and charge tallies. The equation stack is the
// C11 token line (flights, strikes, padlock on the solid). Countdown, chips and key notes are the shared ones.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {GivensCard} from '../chem-m5-c11/parts';
import {Arrow, Chip, EqLine, Fade, HBracket, HydratedIon, Ion, KeyNotesBoard, LensFrame, MistakeChip, Overlay, PauseHold, PicH, PiecesM, Readout, Ring, Sx, TEAL, TaskLine, Tick, VBracket, eCentre, eLayout, eWidth, mw, picW, platePt, pulseAt, smooth, tw} from '../chem-m5-c11/parts';
import type {EItem, ETok, Kind, MPiece} from '../chem-m5-c11/parts';
const Pieces = PiecesM;
type Piece = MPiece;
import {AN_INK, CAT_INK, GREEN, WATER_INK} from './common';
import {BOTTLE} from './assets';

export {GivensCard};
export {Arrow, Chip, EqLine, Fade, HBracket, HydratedIon, Ion, KeyNotesBoard, LensFrame, MistakeChip, Overlay, PauseHold, PicH, Readout, Ring, Sx, TEAL, TaskLine, Tick, VBracket, eCentre, eLayout, eWidth, picW, platePt, pulseAt, smooth, tw, mw, Pieces};
export type {EItem, ETok, Kind, Piece};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

/** Font size that fits an equation line into maxW (never above maxS). */
export const fitSize = (items: EItem[], maxW: number, maxS: number) => Math.min(maxS, maxW / eWidth(items, 1));

// ---------- reagent bottle with coded label text ----------
export const BOTTLE_W = (h: number) => picW(BOTTLE, h);
export const Bottle: React.FC<{x: number; y: number; h: number; formula: string; at: number; tint?: string; pulse?: number}> = ({x, y, h, formula, at, tint, pulse}) => {
	const f = useCurrentFrame();
	const w = BOTTLE_W(h);
	const [lx, ly] = platePt(BOTTLE, x, y, h, 0.5, 0.575);
	const lw = w * 0.82;
	const size = Math.min(h * 0.075, lw / Math.max(1, mw(formula, 1, false, 800)));
	const s = pulse === undefined ? 1 : pulseAt(f, pulse, 0.08, 26);
	return (
		<Fade at={at}>
			<g transform={`translate(${x + w / 2},${y + h / 2}) scale(${s}) translate(${-(x + w / 2)},${-(y + h / 2)})`}>
				<PicH p={BOTTLE} x={x} y={y} h={h} />
				{tint ? <rect x={x + w * 0.05} y={y + h * 0.37} width={w * 0.9} height={h * 0.4} rx={6} fill={tint} opacity={0.4} /> : null}
				<Sx x={lx} y={ly + size * 0.35} text={formula} size={size} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
		</Fade>
	);
};

// ---------- labelled ions ----------
export const IONS: Record<string, {kind: Kind; r: number}> = {
	'K^{+}': {kind: '+', r: 26}, 'Na^{+}': {kind: '+', r: 26}, 'Ag^{+}': {kind: '+', r: 26}, 'Pb^{2+}': {kind: '+', r: 29}, 'Ba^{2+}': {kind: '+', r: 29}, 'Cu^{2+}': {kind: '+', r: 28},
	'I^{-}': {kind: '-', r: 30}, 'Cl^{-}': {kind: '-', r: 30}, 'NO_3^{-}': {kind: '-', r: 33}, 'SO_4^{2-}': {kind: '-', r: 34}, 'OH^{-}': {kind: '-', r: 30},
};
/** A labelled hydrated ion (the C11 drawing, smaller water). shell 0 = bare. */
export const LIon: React.FC<{x: number; y: number; ion: string; shell?: number; o?: number; grey?: number; fill?: string; rot?: number; scale?: number}> = ({x, y, ion, shell = 1, o = 1, grey = 0, fill, rot = 0, scale = 1}) => {
	const d = IONS[ion];
	return <HydratedIon x={x} y={y} kind={d.kind} label={ion} shell={shell} r={d.r * scale} ws={0.5 * scale} n={6} o={o} grey={grey} fill={fill} rot={rot} labelSize={17 * scale} />;
};
/** Drift offset for an ion in a lens. */
export const drift = (f: number, ph: number, amp = 9): [number, number] => [Math.sin(f * 0.031 + ph) * amp, Math.cos(f * 0.027 + ph * 1.3) * amp];
export type LensIon = {ion: string; u: number; v: number; ph: number; grey?: number; o?: number; fill?: string; shell?: number};
/** Ions drifting inside a lens frame (unit coordinates u, v in -1..1). */
export const IonLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; ions: LensIon[]; title?: string; titleAt?: number; amp?: number; children?: React.ReactNode; scale?: number}> = ({cx, cy, r, at, out, ions, title, titleAt, amp = 9, children, scale = 1}) => {
	const f = useCurrentFrame();
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title} titleAt={titleAt}>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#f3f8fb" />
			{ions.map((d, i) => {
				const [dx, dy] = drift(f, d.ph, amp);
				return <LIon key={i} x={cx + d.u * r + dx} y={cy + d.v * r + dy} ion={d.ion} grey={d.grey ?? 0} o={d.o ?? 1} fill={d.fill} rot={d.ph} shell={d.shell ?? 1} scale={scale} />;
			})}
			{children}
		</LensFrame>
	);
};

// ---------- swap partners cross ----------
export type Pair = [string, string];
export type Verdict = {kind: 'ok' | 'ppt'; at: number; label?: string};
const tileGeom = (p: Pair, size: number) => {
	const wc = mw(p[0], size, false, 800), wa = mw(p[1], size, false, 800), pad = size * 0.5, gap = size * 0.55;
	return {w: wc + wa + gap + 2 * pad, cx: pad, ax: pad + wc + gap, h: size * 1.45};
};
export const tileW = (p: Pair, size: number) => tileGeom(p, size).w;
const TileBox: React.FC<{x: number; y: number; p: Pair; size: number; o: number; stroke?: string; sw?: number}> = ({x, y, p, size, o, stroke = 'rgba(60,45,20,0.25)', sw = 3}) => {
	const g = tileGeom(p, size);
	return <rect x={x} y={y - g.h * 0.62} width={g.w} height={g.h} rx={g.h / 2} fill="#fffdf8" stroke={stroke} strokeWidth={sw} opacity={o} />;
};
/** Left tiles (two compounds) at x; their cations cross to the other anion at xr. Result 1 = cation of tile 2 with the
 *  anion of tile 1 (at y1), result 2 = cation of tile 1 with the anion of tile 2 (at y2). */
export const SwapCross: React.FC<{x: number; xr: number; y1: number; y2: number; size?: number; left: [Pair, Pair]; leftAt: [number, number]; swap: number; resAt?: [number, number]; verdicts?: [Verdict | null, Verdict | null]; out?: number; arrows?: boolean}> = ({x, xr, y1, y2, size = 40, left, leftAt, swap, resAt, verdicts = [null, null], out, arrows = true}) => {
	const f = useCurrentFrame();
	const oAll = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (oAll <= 0.01) return null;
	const [L1, L2] = left;
	const R: [Pair, Pair] = [[L2[0], L1[1]], [L1[0], L2[1]]];
	const ra = resAt ?? [swap + 6, swap + 14];
	const gL = [tileGeom(L1, size), tileGeom(L2, size)], gR = [tileGeom(R[0], size), tileGeom(R[1], size)];
	const ys = [y1, y2];
	// sources for result tokens: [tile, part]
	const src: [[number, 'c' | 'a'], [number, 'c' | 'a']][] = [[[1, 'c'], [0, 'a']], [[0, 'c'], [1, 'a']]];
	const pos = (tile: number, part: 'c' | 'a'): [number, number] => [x + (part === 'c' ? gL[tile].cx : gL[tile].ax), ys[tile]];
	return (
		<g opacity={oAll}>
			{[0, 1].map(i => {
				const p = prog(f, leftAt[i], 14);
				if (p <= 0.01) return null;
				const L = left[i];
				return (
					<g key={'l' + i} opacity={p}>
						<TileBox x={x} y={ys[i]} p={L} size={size} o={1} />
						<Sx x={x + gL[i].cx} y={ys[i]} text={L[0]} size={size} color={CAT_INK} weight={800} at={-1000} />
						<Sx x={x + gL[i].ax} y={ys[i]} text={L[1]} size={size} color={AN_INK} weight={800} at={-1000} />
					</g>
				);
			})}
			{arrows ? <>
				<Arrow x1={x + gL[0].w + 16} y1={y1} x2={xr - 16} y2={y2 - size * 0.3} at={swap} color={CAT_INK} width={4} />
				<Arrow x1={x + gL[1].w + 16} y1={y2 - size * 0.3} x2={xr - 16} y2={y1} at={swap + 4} color={CAT_INK} width={4} />
			</> : null}
			{[0, 1].map(i => {
				const e = smooth(prog(f, ra[i], 30));
				if (f < ra[i]) return null;
				const tc: [number, number] = [xr + gR[i].cx, ys[i]], ta: [number, number] = [xr + gR[i].ax, ys[i]];
				const [sc0, sa0] = src[i];
				const fc = pos(sc0[0], sc0[1]), fa = pos(sa0[0], sa0[1]);
				const lift = Math.sin(e * Math.PI) * -40;
				const v = verdicts[i];
				const vo = v ? prog(f, v.at, 12) : 0;
				const stroke = v && v.kind === 'ppt' && vo > 0.01 ? AMBER : undefined;
				return (
					<g key={'r' + i}>
						<TileBox x={xr} y={ys[i]} p={R[i]} size={size} o={clamp01((e - 0.6) / 0.4)} stroke={stroke} sw={stroke ? 3 + 3 * vo : 3} />
						<Sx x={fc[0] + (tc[0] - fc[0]) * e} y={fc[1] + (tc[1] - fc[1]) * e + lift} text={R[i][0]} size={size} color={CAT_INK} weight={800} at={-1000} />
						<Sx x={fa[0] + (ta[0] - fa[0]) * e} y={fa[1] + (ta[1] - fa[1]) * e} text={R[i][1]} size={size} color={AN_INK} weight={800} at={-1000} />
						{v ? (v.kind === 'ok'
							? <Tick x={xr + gR[i].w + 36} y={ys[i] - size * 0.3} at={v.at} s={size * 0.9} />
							: <Sx x={xr + gR[i].w + 22} y={ys[i]} text="!" size={size * 1.2} color={AMBER_INK} weight={800} at={v.at} />) : null}
						{v && v.label ? <Sx x={xr + 10} y={ys[i] + size * 1.25} text={v.label} size={size * 0.78} color={v.kind === 'ok' ? GREEN : AMBER_INK} hand at={v.at + 4} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the rules card ----------
/** Compact rules card: rows can glow. Row ids: N, A, G, S, Ac, Hal, Ins. */
const MINI: {id: string; t: string}[] = [
	{id: 'N', t: 'N  nitrates: soluble'},
	{id: 'A', t: 'A  ammonium: soluble'},
	{id: 'G', t: 'G  Group 1: soluble'},
	{id: 'S', t: 'S  sulfates: soluble, except Ba^{2+}, Pb^{2+}'},
	{id: 'S', t: '     (Ca^{2+}, Ag^{+}: slightly soluble)'},
	{id: 'Ac', t: 'A  acetates: soluble'},
	{id: 'Hal', t: 'G  halides: soluble, except Ag^{+}, Pb^{2+}'},
	{id: 'Ins', t: 'others (CO_3^{2-}, OH^{-}): insoluble,'},
	{id: 'Ins', t: '     except Group 1, NH_4^{+}, Ba(OH)_2'},
];
export const RulesMini: React.FC<{x: number; y: number; at: number; out?: number; size?: number; hi?: {id: string; at: number; out?: number}[]; title?: string}> = ({x, y, at, out, size = 22, hi = [], title = 'solubility rules'}) => {
	const f = useCurrentFrame();
	const lh = size * 1.32;
	const w = Math.max(...MINI.map(m => mw(m.t, size, false, 600))) + 40;
	const h = 54 + MINI.length * lh + 10;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={x + 20} y={y + 36} text={title} size={size * 1.15} color={INK_SOFT} hand at={-1000} />
			{MINI.map((m, i) => {
				const g = hi.filter(hh => hh.id === m.id).reduce((a, hh) => Math.max(a, prog(f, hh.at, 10) * (hh.out === undefined ? 1 : 1 - prog(f, hh.out, 12))), 0);
				const yy = y + 54 + (i + 1) * lh - size * 0.32;
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={x + 8} y={yy - size * 0.95} width={w - 16} height={lh} rx={6} fill="#f6d77a" opacity={0.6 * g} /> : null}
						<Sx x={x + 20} y={yy} text={m.t} size={size} color={INK} weight={600} at={-1000} />
					</g>
				);
			})}
		</Fade>
	);
};
export const rulesMiniH = (size = 22) => 54 + MINI.length * size * 1.32 + 10;

// ---------- abstract filter funnel over a flask ----------
export const Funnel: React.FC<{x: number; y: number; at: number; solidAt?: number; dripAt?: number; solidColor?: string; fill?: number}> = ({x, y, at, solidAt, dripAt, solidColor = '#ffffff', fill = 0.35}) => {
	const f = useCurrentFrame();
	const sp = solidAt === undefined ? 0 : prog(f, solidAt, 30);
	const drip = dripAt !== undefined && f >= dripAt;
	const lv = dripAt === undefined ? fill : fill * (0.5 + 0.5 * prog(f, dripAt, 160));
	const fx0 = x + 30, fx1 = x + 230, fb = y + 540;
	const liqTop = fb - 150 * lv;
	const wAt = (yy: number) => 100 * (yy - (y + 380)) / (fb - (y + 380)) + 25;
	return (
		<Fade at={at}>
			{/* flask */}
			<path d={`M${x + 105},${y + 300} L${x + 105},${y + 380} L${fx0},${fb - 12} Q${fx0},${fb} ${fx0 + 14},${fb} L${fx1 - 14},${fb} Q${fx1},${fb} ${fx1},${fb - 12} L${x + 155},${y + 380} L${x + 155},${y + 300}`} fill="#eef5fa" fillOpacity={0.6} stroke={INK} strokeWidth={4.5} strokeLinejoin="round" />
			<path d={`M${x + 130 - wAt(liqTop)},${liqTop} L${fx0 + 6},${fb - 10} Q${fx0 + 6},${fb - 5} ${fx0 + 18},${fb - 5} L${fx1 - 18},${fb - 5} Q${fx1 - 6},${fb - 5} ${fx1 - 6},${fb - 10} L${x + 130 + wAt(liqTop)},${liqTop} Z`} fill="#cfe6f5" opacity={0.8} />
			{/* funnel */}
			<path d={`M${x},${y} L${x + 260},${y} L${x + 145},${y + 190} L${x + 145},${y + 280} L${x + 115},${y + 280} L${x + 115},${y + 190} Z`} fill="#eef5fa" fillOpacity={0.55} stroke={INK} strokeWidth={4.5} strokeLinejoin="round" />
			<path d={`M${x + 18},${y + 8} L${x + 130},${y + 176} L${x + 242},${y + 8}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 6" />
			{sp > 0.01 ? (
				<g opacity={sp}>
					{[[-34, 120, 26], [0, 132, 30], [34, 120, 26], [-14, 104, 22], [18, 100, 24], [0, 150, 20]].map(([dx, dy, r], i) => <ellipse key={i} cx={x + 130 + dx * sp} cy={y + dy} rx={r * (0.6 + 0.4 * sp)} ry={r * 0.7 * (0.6 + 0.4 * sp)} fill={solidColor} stroke="#9aa7b0" strokeWidth={2} />)}
				</g>
			) : null}
			{drip ? [0, 1, 2].map(k => {
				const t = ((f - (dripAt as number)) / 30 + k / 3) % 1;
				return <ellipse key={k} cx={x + 130} cy={y + 284 + t * (liqTop - y - 284)} rx={5} ry={7} fill="#9cc9e6" opacity={t < 0.95 ? 0.9 : 0} />;
			}) : null}
		</Fade>
	);
};
export const funnelPts = (x: number, y: number) => ({paper: [x + 130, y + 120] as [number, number], flask: [x + 130, y + 480] as [number, number]});

// ---------- composition card ----------
export type CardLine = {t: string; at: number; color?: string; size?: number; hand?: boolean};
export const CompCard: React.FC<{x: number; y: number; w: number; h: number; title: string; at: number; lines: CardLine[]; out?: number; lh?: number}> = ({x, y, w, h, title, at, lines, out, lh = 54}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={h} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
		<Sx x={x + 26} y={y + 50} text={title} size={36} color={TEAL} hand at={at} />
		{lines.map((l, i) => <Sx key={i} x={x + 26} y={y + 108 + i * lh} text={l.t} size={l.size ?? 36} color={l.color ?? INK} weight={700} hand={l.hand} at={l.at} />)}
	</Fade>
);

/** Labels a line of the equation stack (small, above it). */
export const LineLabel: React.FC<{x: number; y: number; text: string; at: number; out?: number}> = ({x, y, text, at, out}) => <Sx x={x} y={y} text={text} size={30} color={INK_SOFT} hand at={at} out={out} />;

/** Hand-drawn arc between two points, bowing by `bow` px (negative = above). */
export const ArcLink: React.FC<{a: [number, number]; b: [number, number]; at: number; bow?: number; color?: string}> = ({a, b, at, bow = 60, color = INK_SOFT}) => (
	<DrawPath d={`M${a[0]},${a[1]} Q${(a[0] + b[0]) / 2},${(a[1] + b[1]) / 2 + bow} ${b[0]},${b[1]}`} at={at} dur={20} color={color} width={4} />
);

export {AMBER, AMBER_INK, INK, INK_SOFT, WATER_INK};
