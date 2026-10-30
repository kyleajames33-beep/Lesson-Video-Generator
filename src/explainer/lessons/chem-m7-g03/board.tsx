// M7 G03 (chemistry) practice board, in the G02 layout with C13's flow-chart kit. README for Claude:
// - Checks: the four-check strip along the bottom ("count carbons?", "group on the right carbon?", "conditions on every
//   arrow?", "every box and arrow possible?"); lesson-local copy of G02's Checks4; ticks the row a scene uses and dims to
//   an outline during each countdown (pass the hold).
// - Strip: the worded question card as a strip across the top (C01's QCardX, scaling in), at a chosen text size.
// - zz / eneM / olM / ketM: skeletal chains in the C08a style (same zigzag as C08a's carb, so an alcohol and its ketone
//   share carbon positions). Ruler: numbered carbons with an amber ring. Docker: water's OH docking on a C=C carbon
//   (bold main product, faint minor one).
// - StudentChart: Q3's student flow chart, drawn as printed in grey ink, with per-part brightness, rings, a ghost box
//   and a chip underline; cpt() maps a chart point to the screen.
// - AnsLines: a dashed answer box holding several model-answer lines (lit lines teal).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, TEAL, mw, smooth} from '../chem-m6-c01/parts';
import {CARDC, Locants, MULTI, QCardX, outward, zig} from '../chem-m7-c01/molecules';
import type {Bond, ULine, V2} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import type {Mol2} from '../chem-m7-c02/parts';
import {vis} from '../chem-m7-c04a/parts';
import {carb} from '../chem-m7-c08a/parts';
import {GLOW} from '../chem-m7-g01/board';
import {AMB, GREY, NAVY, RED} from '../chem-m7-c13/parts';

export {AMB, GREY, NAVY, RED, INK, INK_SOFT, TEAL};
export const TEALD = '#0d6b52', OHC = '#8f3f26';

// ---------- check strip ----------
export const CHECKS = ['count carbons?', 'group on the right carbon?', 'conditions on every arrow?', 'every box and arrow possible?'];
const STRIP_Y = 1004, CS = 24;
export const Checks: React.FC<{ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number; out?: number}> = ({ticks = {}, hold, at = -100, out}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * (1 - 0.72 * dim);
	if (o <= 0.01) return null;
	let x = 96 + mw('four checks:', 26, true, 700) + 14;
	return (
		<g opacity={o} transform={`translate(0,${(1 - prog(f, at, 20)) * 40})`}>
			<Sx x={96} y={STRIP_Y + 33} text="four checks:" size={26} color={INK_SOFT} hand at={-1000} />
			{CHECKS.map((l, i) => {
				const px = x;
				const w = mw(l, CS, true, 700) + 56;
				x = px + w + 10;
				const on = (ticks[i] ?? []).some(t => t <= f);
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i}>
						<rect x={px} y={STRIP_Y} width={w} height={46} rx={23} fill={flash > 0.01 ? GLOW : CARDC} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : dim > 0.5 ? 0 : 1} stroke={on ? TEAL : 'rgba(60,45,20,0.22)'} strokeWidth={on ? 3 : 2.5} />
						<rect x={px + 12} y={STRIP_Y + 11} width={24} height={24} rx={5} fill={CARDC} stroke={on ? TEAL : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 1).map((t, k) => <DrawPath key={k} d={`M${px + 12},${STRIP_Y + 23} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 44} y={STRIP_Y + 31} text={l} size={CS} color={on ? TEAL : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- question strip ----------
export const Strip: React.FC<{lines: string[]; size?: number; under?: ULine[]; gaps?: number[]; y?: number; children?: React.ReactNode}> = ({lines, size = 26, under = [], gaps = [], y = 70, children}) => {
	const f = useCurrentFrame();
	const k = 1 + 0.08 * (1 - prog(f, 0, 16));
	return (
		<g transform={`translate(140,${y}) scale(${k}) translate(-140,${-y})`}>
			<QCardX lines={lines} at={-100} y={y} size={size} under={under} gaps={gaps} />
			{children}
		</g>
	);
};
export const uA = (line: number, phrase: string, at: number): ULine => ({line, phrase, at, color: AMB});

// ---------- skeletal chains (C08a geometry) ----------
const DX = 100, DY = 58;
export const zz = (n: number): V2[] => zig(n, (-(n - 1) * DX) / 2, 0, DX, DY);
const chainB = (n: number): Bond[] => Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));
/** Alkene: C=C between carbon b and b + 1 (0-based), teal. */
export const eneM = (n: number, b: number): Mol2 => ({pts: zz(n), bonds: chainB(n).map((x, k) => (k === b ? {...x, order: 2 as const, color: MULTI} : x))});
/** Alcohol: OH on carbon c (0-based). */
export const olM = (n: number, c: number): Mol2 => { const Z = zz(n); return {pts: [...Z, outward(Z, c, DX * 0.95)], bonds: [...chainB(n), {a: c, b: n}], labels: [{i: n, text: 'OH'}]}; };
/** Ketone or aldehyde: C=O on carbon c (C08a's carb). */
export const ketM = (n: number, c: number) => carb(n, c);
export const cAt = (n: number, x: number, y: number, s: number): V2[] => zz(n).map(p => [x + p[0] * s, y + p[1] * s]);

/** Numbered carbons, all a fixed distance above (dy < 0) or below each carbon, with an amber ring on chosen carbons. */
export const Ruler: React.FC<{n: number; x: number; y: number; s: number; at: number; out?: number; ring?: {i: number; at: number}[]; o?: number; dy?: number}> = ({n, x, y, s, at, out, ring = [], o = 1, dy = -64}) => {
	const P = cAt(n, x, y, s);
	return <Locants pts={P} at={at} out={out} offs={P.map(() => [0, dy] as V2)} size={22} ring={ring} o={o} step={5} />;
};

/** Water's OH docking on carbon `main` (bold) and, from `minorAt`, a faint OH on carbon `minor`. */
export const Docker: React.FC<{n: number; x: number; y: number; s: number; main: number; at: number; minor?: number; minorAt?: number; minorO?: number; o?: number}> = ({n, x, y, s, main, at, minor, minorAt, minorO = 0.35, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const P = cAt(n, x, y, s);
	const one = (i: number, t: number, op: number, k: string) => {
		const q = prog(f, t, 24);
		if (q <= 0.01) return null;
		const tgt = outward(P, i, 80 * s);
		const src: V2 = [P[i][0], P[i][1] - 190 * s];
		const e = smooth(q);
		const p: V2 = [src[0] + (tgt[0] - src[0]) * e, src[1] + (tgt[1] - src[1]) * e];
		return (
			<g key={k} opacity={op * Math.min(1, q * 3)}>
				{q >= 1 ? <line x1={P[i][0]} y1={P[i][1]} x2={tgt[0]} y2={tgt[1] + 14 * s} stroke={OHC} strokeWidth={4} strokeDasharray={op < 0.6 ? '6 5' : undefined} /> : null}
				<rect x={p[0] - 30 * s} y={p[1] - 26 * s} width={60 * s} height={40 * s} rx={10} fill={CARDC} />
				<Sx x={p[0]} y={p[1] + 6 * s} text="OH" size={34 * s} color={OHC} anchor="middle" weight={800} at={-1000} />
			</g>
		);
	};
	return <g opacity={o}>{one(main, at, 1, 'm')}{minor !== undefined && minorAt !== undefined ? one(minor, minorAt, minorO, 'n') : null}</g>;
};

/** A small skeletal molecule with a name under it. */
export const Named: React.FC<{m: Mol2; x: number; y: number; s: number; name: string; at: number; out?: number; o?: number; size?: number; color?: string; dy?: number}> = ({m, x, y, s, name, at, out, o = 1, size = 26, color = INK, dy = 90}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<SkelAt m={m} x={x} y={y} s={s} at={at} width={5} />
			<Sx x={x} y={y + dy * s + size} text={name} size={size} color={color} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- the student's chart (Q3) ----------
type CB = {k: string; x: number; y: number; w: number; t: string};
const SB: CB[] = [
	{k: 'b1', x: 0, y: 0, w: 200, t: 'but-1-ene'}, {k: 'b2', x: 480, y: 0, w: 210, t: 'butan-1-ol'}, {k: 'b3', x: 970, y: 0, w: 240, t: 'butanoic acid'},
	{k: 'b4', x: 150, y: 150, w: 280, t: '1-chloropropane'}, {k: 'b5', x: 710, y: 150, w: 230, t: 'propan-1-ol'}, {k: 'b6', x: 1520, y: 80, w: 350, t: 'propyl butanoate + H₂O'},
];
type CA = {k: string; a: V2; b: V2; chips: string[]; eq?: boolean};
const BH = 42;
const SA: CA[] = [
	{k: 'a1', a: [210, 21], b: [470, 21], chips: ['H₂O, dilute acid catalyst,', 'heat, ⇌']},
	{k: 'a2', a: [700, 21], b: [960, 21], chips: ['K₂Cr₂O₇ / H⁺,', 'heat, distil']},
	{k: 'a3', a: [440, 171], b: [700, 171], chips: ['NaOH(aq),', 'heat under reflux']},
	{k: 'j1', a: [1220, 21], b: [1296, 92], chips: []},
	{k: 'j2', a: [950, 171], b: [1296, 108], chips: []},
	{k: 'a4', a: [1306, 101], b: [1510, 101], chips: ['conc. H₂SO₄,', 'heat under reflux, ⇌']},
];
export type ChartPos = {x: number; y: number; s: number};
export const cpt = (C: ChartPos, p: V2): V2 => [C.x + p[0] * C.s, C.y + p[1] * C.s];
/** Chart-local anchors: the two error sites and the boxes' centres. */
export const SCH = {b2: [585, 21] as V2, distil: [870, -12] as V2, a2mid: [830, 21] as V2, b1: [100, 21] as V2, b3: [1090, 21] as V2, b5: [825, 171] as V2, b4: [290, 171] as V2};
export const StudentChart: React.FC<{C: ChartPos; at?: number; o?: number; lit?: (k: string) => number; ghost?: number; ring?: {k: 'b2' | 'distil'; at: number; n: string}[]; under?: number; color?: string}> = ({C, at = -1000, o = 1, lit, ghost, ring = [], under, color = '#7a746a'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const L = (k: string) => (lit ? lit(k) : 1);
	return (
		<g opacity={v} transform={`translate(${C.x},${C.y}) scale(${C.s})`}>
			{SA.map(a => {
				const ang = Math.atan2(a.b[1] - a.a[1], a.b[0] - a.a[0]);
				const h = (k: number): V2 => [a.b[0] - Math.cos(ang + k) * 14, a.b[1] - Math.sin(ang + k) * 14];
				const m: V2 = [(a.a[0] + a.b[0]) / 2, (a.a[1] + a.b[1]) / 2];
				return (
					<g key={a.k} opacity={L(a.k)}>
						<path d={`M${a.a[0]},${a.a[1]} L${a.b[0]},${a.b[1]} M${h(0.45)[0]},${h(0.45)[1]} L${a.b[0]},${a.b[1]} L${h(-0.45)[0]},${h(-0.45)[1]}`} fill="none" stroke={color} strokeWidth={3.5} strokeLinecap="round" />
						{a.chips.map((c, i) => <Sx key={i} x={m[0]} y={m[1] - 12 - (a.chips.length - 1 - i) * 24} text={c} size={20} color={color} anchor="middle" weight={700} at={-1000} />)}
					</g>
				);
			})}
			{SB.map(b => (
				<g key={b.k} opacity={L(b.k)}>
					<rect x={b.x} y={b.y} width={b.w} height={BH} rx={10} fill={CARDC} stroke={color} strokeWidth={2.5} />
					<Sx x={b.x + b.w / 2} y={b.y + 29} text={b.t} size={24} color={color} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			{ghost !== undefined ? <g opacity={prog(f, ghost, 12)}><rect x={474} y={-6} width={222} height={BH + 12} rx={14} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="9 7" /></g> : null}
			{under !== undefined ? <DrawPath d={`M${830 - 52},${-4} L${830 + 56},${-4}`} at={under} dur={10} color={RED} width={3.5} /> : null}
			{ring.map((r, i) => {
				const c: V2 = r.k === 'b2' ? [585, 21] : [866, -12];
				const rx = r.k === 'b2' ? 128 : 80, ry = r.k === 'b2' ? 38 : 22;
				const q = prog(f, r.at, 14);
				if (q <= 0.01) return null;
				return (
					<g key={i}>
						<DrawPath d={`M${c[0]},${c[1] - ry} A${rx},${ry} 0 1 1 ${c[0] - 1},${c[1] - ry}`} at={r.at} dur={14} color={RED} width={4} />
						<g opacity={q}><circle cx={c[0] + rx + 4} cy={c[1] - ry - 4} r={17} fill={RED} /><Sx x={c[0] + rx + 4} y={c[1] - ry + 4} text={r.n} size={22} color="#fffdf8" anchor="middle" weight={800} at={-1000} /></g>
					</g>
				);
			})}
		</g>
	);
};

// ---------- answer lines ----------
export type ALine = {t: string; at: number; lit?: boolean; o?: number};
export const AnsLines: React.FC<{x: number; y: number; w: number; label: string; lines: ALine[]; at: number; size?: number; lh?: number; o?: number}> = ({x, y, w, label, lines, at, size = 23, lh = 34, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const h = 24 + lines.length * lh;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill={CARDC} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
			<Sx x={x + 18} y={y + 12 + lh * 0.72} text={label} size={22} color={INK_SOFT} weight={700} at={-1000} />
			{lines.map((l, i) => <Sx key={i} x={x + 62} y={y + 12 + lh * (i + 0.72)} text={l.t} size={size} color={l.lit ? TEAL : '#8f897f'} weight={l.lit ? 800 : 600} at={l.at} opacity={l.o ?? 1} />)}
		</g>
	);
};

/** A small red "≠". */
export const Neq: React.FC<{x: number; y: number; at: number; o?: number}> = ({x, y, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10) * o;
	if (v <= 0.01) return null;
	return <g opacity={v} stroke={RED} strokeWidth={5} strokeLinecap="round"><line x1={x - 20} y1={y - 8} x2={x + 20} y2={y - 8} /><line x1={x - 20} y1={y + 8} x2={x + 20} y2={y + 8} /><line x1={x + 10} y1={y - 22} x2={x - 10} y2={y + 22} /></g>;
};
