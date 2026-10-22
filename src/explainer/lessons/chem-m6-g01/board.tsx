// M6 G01 (Chemistry) practice board: the bio-m6-g01 layout in the Chemistry visual system. HSC-style tag top right, a
// teal type badge under it (hidden during each attempt), the worded question card top left (full for the attempt, then
// shrunk to a strip for the walkthrough, with each given underlined on its cue and the answer boxes filling), the
// three-check strip along the bottom (ticks the row each scene uses, dims during every countdown), the hook checklist
// that shrinks into it, the decision board and a small pH-scale ruler for Q2's check. Working lines, chips, crossed
// chips, IonBars, PHTrack, VolBox, the pipette and flask come from C07 and P05 (re-exported).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {Fade, INK, INK_SOFT, QText, ShrinkAt, Sx, TEAL, tw} from './parts';
import type {QBlock, QMark} from './parts';

export {HscTag} from '../bio-m5-g01/board';
export {QCard as MiniCard} from '../chem-m5-g03c/board';
export const GLOW = '#f6d77a';

/** Teal type badge, right-aligned under the HSC tag. */
export const ChemBadge: React.FC<{text: string; at: number; out?: number}> = ({text, at, out}) => {
	const w = tw(text, 30, true) + 48;
	return (
		<Fade at={at} out={out}>
			<rect x={1824 - w} y={92} width={w} height={50} rx={25} fill={TEAL} />
			<Sx x={1824 - w / 2} y={127} text={text} size={30} color="#fffdf8" anchor="middle" hand at={-1000} />
		</Fade>
	);
};

// ---------- the three-check strip (bottom) ----------
export const CHECKS = ["what's in there?", 'in what volume?', 'does it make sense?'];
const STRIP_Y = 1004;
const pillW = (label: string) => tw(label, 26, true) + 62;
export const Checks: React.FC<{ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number; out?: number}> = ({ticks = {}, hold, at = -100, out}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * (1 - 0.78 * dim);
	if (o <= 0.01) return null;
	const rise = (1 - prog(f, at, 20)) * 40;
	let x = 96 + tw('three checks:', 28, true) + 18;
	return (
		<g opacity={o} transform={`translate(0,${rise})`}>
			<Sx x={96} y={STRIP_Y + 34} text="three checks:" size={28} color={INK_SOFT} hand at={-1000} />
			{CHECKS.map((l, i) => {
				const px = x;
				const w = pillW(l);
				x = px + w + 14;
				const on = (ticks[i] ?? []).some(t => t <= f);
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i}>
						<rect x={px} y={STRIP_Y} width={w} height={48} rx={24} fill={flash > 0.01 ? GLOW : '#fffdf8'} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : dim > 0.5 ? 0 : 1} stroke={on ? TEAL : 'rgba(60,45,20,0.22)'} strokeWidth={on ? 3 : 2.5} />
						<rect x={px + 14} y={STRIP_Y + 12} width={24} height={24} rx={5} fill="#fffdf8" stroke={on ? TEAL : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 1).map((t, k) => <DrawPath key={k} d={`M${px + 14},${STRIP_Y + 24} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 48} y={STRIP_Y + 33} text={l} size={26} color={on ? TEAL : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** The hook checklist: one row per check with an icon, written on its cue; it shrinks into the strip at `shrink`. */
export const CheckList: React.FC<{rows: {text: string; at: number; icon: React.ReactNode}[]; x?: number; y?: number; lh?: number; size?: number; shrink: number}> = ({rows, x = 96, y = 340, lh = 140, size = 50, shrink}) => {
	const f = useCurrentFrame();
	const s = prog(f, shrink, 22);
	if (s >= 1) return null;
	const sc = 1 - 0.55 * s;
	return (
		<g opacity={1 - s} transform={`translate(${x},${y + s * 600}) scale(${sc}) translate(${-x},${-y})`}>
			{rows.map((r, i) => (
				<Fade key={i} at={r.at}>
					<rect x={x} y={y + i * lh - 4} width={110} height={90} rx={16} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<g transform={`translate(${x + 55},${y + i * lh + 41})`}>{r.icon}</g>
					<Sx x={x + 140} y={y + i * lh + 58} text={r.text} size={size} hand at={r.at} />
				</Fade>
			))}
		</g>
	);
};

// ---------- the question card ----------
export type QDef = {blocks: (t: number[]) => QBlock[]; h: number; ans: {label: string; y: number}[]};
export const CARD = {x: 100, y: 175, w: 1000, tx: 130, ty: 238, tw: 940, size: 32, k: 0.62};
/** The worded question (full card), or the strip (scaled to 0.62 about the top-left; animated from `shrinkAt`). */
export const QCardC: React.FC<{q: QDef; t?: number[]; marks?: QMark[]; strip?: boolean; shrinkAt?: number; fills?: {i: number; text: string; at: number}[]; ansAt?: number[]}> = ({q, t = [-100, -100, -100, -100, -100], marks = [], strip = false, shrinkAt, fills = [], ansAt = []}) => {
	const f = useCurrentFrame();
	const blocks = q.blocks(t);
	const body = (
		<g>
			<Fade at={t[0] - 6}><rect x={CARD.x} y={CARD.y} width={CARD.w} height={q.h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
			<QText q={{blocks, marks}} x={CARD.tx} y={CARD.ty} w={CARD.tw} size={CARD.size} card={false} />
			{q.ans.map((a, i) => {
				const at = ansAt[i] ?? t[t.length - 1];
				const fl = fills.filter(x => x.i === i);
				return (
					<g key={i} opacity={prog(f, at, 12)}>
						<rect x={CARD.tx} y={a.y} width={CARD.tw} height={66} rx={14} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
						<Sx x={CARD.tx + 18} y={a.y + 42} text={a.label} size={26} color={INK_SOFT} weight={700} at={-1000} />
						{fl.map((x, k) => <Sx key={k} x={CARD.tx + 80} y={a.y + 47} text={x.text} size={40} color={TEAL} weight={800} at={x.at} />)}
					</g>
				);
			})}
		</g>
	);
	if (!strip) return body;
	return <ShrinkAt cx={CARD.x} cy={CARD.y} k={CARD.k} at={shrinkAt ?? -100}>{body}</ShrinkAt>;
};

// ---------- a short pH ruler (concentrations above, pH below) for Q2's check ----------
export const MiniRuler: React.FC<{x: number; y: number; w: number; lo: number; hi: number; at: number; out?: number}> = ({x, y, w, lo, hi, at, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	if (o <= 0.01) return null;
	const X = (p: number) => x + ((p - lo) / (hi - lo)) * w;
	const n = hi - lo;
	return (
		<g opacity={o}>
			<line x1={x} y1={y} x2={x + w * prog(f, at, 20)} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			<Sx x={x - 30} y={y - 52} text="[H_3O^{+}] (mol/L)" size={26} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
			<Sx x={x - 30} y={y + 52} text="pH" size={30} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
			{Array.from({length: n + 1}, (_, i) => (
				<g key={i}>
					<line x1={X(lo + i)} y1={y - 12} x2={X(lo + i)} y2={y + 12} stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={X(lo + i)} y={y - 30} text={`10^{${lo + i === 0 ? '0' : '−' + (lo + i)}}`} size={28} color={INK} anchor="middle" weight={600} at={-1000} />
					<Sx x={X(lo + i)} y={y + 48} text={String(lo + i)} size={32} color={INK} anchor="middle" weight={600} at={-1000} />
				</g>
			))}
		</g>
	);
};
export const rulerX = (x: number, w: number, lo: number, hi: number, p: number) => x + ((p - lo) / (hi - lo)) * w;
