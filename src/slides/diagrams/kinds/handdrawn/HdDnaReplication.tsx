// hdDnaReplication — semi-conservative DNA replication, hand-drawn style.
//
// A short stretch of double-stranded DNA (the `sequence` prop is the top
// strand; the bottom is computed by base pairing, A–T and G–C) is unzipped by
// helicase moving left → right. Behind the fork, new nucleotides pair with each
// exposed template base: continuously on the leading strand, and in short
// backward-built fragments (Okazaki fragments) on the lagging strand, because
// new strands only grow 5′ → 3′. It ends as two double helices, each one
// original strand (graphite) + one new strand (accent).
//
// Beat plan (frames @30 fps, relative to `delay`, default 62):
//   +0    ladder draws on, 5′/3′ ends labelled
//   +30   helicase starts unzipping; leading strand follows the fork
//   +…    lagging-strand fragments fill in backwards behind the fork
//   end   caption: each new molecule = 1 original + 1 new strand
//
// Chemistry/biology checks: complementary pairing computed from the sequence;
// strands antiparallel (top 3′→5′ left to right, bottom 5′→3′); leading
// strand grows toward the fork (5′→3′), lagging strand grows away from it.

import {useCurrentFrame} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {Hand, HandSvg, PENCIL, ramp} from './shared';

const ID = 'hddna';
const PAIR: Record<string, string> = {A: 'T', T: 'A', G: 'C', C: 'G'};
const X0 = 88;
const DX = 50;
const FORK_FROM = 40;
const FORK_TO = 770; // past the right end + UNZIP, so the whole molecule opens
const Y = {top: 215, bot: 305, topUp: 104, topNew: 184, botNew: 336, botDown: 416};
const UNZIP = 70; // px behind the fork over which strands open

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

export type HdDnaReplicationProps = {
	delay?: number;
	/** Top-strand bases, 6–12 of A/T/G/C (default ATGCGTACCTGA). */
	sequence?: string;
	/** Frames for the fork to cross the molecule (default 200). */
	travelFrames?: number;
	/** Show leading/lagging strand labels (default true). */
	strandLabels?: boolean;
};

export const HdDnaReplication = ({delay = 62, sequence = 'ATGCGTACCTGA', travelFrames = 200, strandLabels = true}: HdDnaReplicationProps) => {
	const f = useCurrentFrame() - delay;
	const theme = useAccent();
	const top = sequence.toUpperCase().replace(/[^ATGC]/g, '').slice(0, 12).split('');
	const n = top.length;
	const xs = top.map((_, i) => X0 + i * DX + ((12 - n) * DX) / 2);

	const START = 30;
	const forkX = lerp(FORK_FROM, FORK_TO, ramp(f, START, START + travelFrames));
	const tPass = (x: number) => START + ((x - FORK_FROM) / (FORK_TO - FORK_FROM)) * travelFrames; // frame the fork reaches x
	const u = (x: number) => clamp01((forkX - x) / UNZIP); // how open the strands are at x

	const yTop = (x: number) => lerp(Y.top, Y.topUp, u(x));
	const yBot = (x: number) => lerp(Y.bot, Y.botDown, u(x));

	// When each new nucleotide arrives (frames relative to delay).
	const leadAt = xs.map((x) => tPass(x + UNZIP + 12));
	const lagAt = xs.map((_, i) => {
		const k = Math.floor(i / 3);
		const last = Math.min(n - 1, 3 * k + 2);
		return tPass(xs[last] + UNZIP + 12) + 4 + (last - i) * 6; // built backwards, away from the fork
	});
	const endAt = Math.max(...leadAt, ...lagAt) + 10;

	const draw = ramp(f, 0, 20);
	const pop = (t: number) => ramp(f, t, t + 6);
	const backbone = (fn: (x: number) => number, from: number, to: number) =>
		Array.from({length: Math.round((to - from) / 8) + 1}, (_, k) => {
			const x = from + k * 8;
			return `${k === 0 ? 'M' : 'L'}${x.toFixed(1)},${fn(x).toFixed(1)}`;
		}).join(' ');
	const xL = xs[0] - 34;
	const xR = xs[n - 1] + 34;

	// new-strand backbone segments between neighbouring nucleotides that exist
	const newSegs = (at: number[], y: number) =>
		xs.slice(0, -1).map((x, i) => {
			const o = Math.min(pop(at[i]), pop(at[i + 1]));
			return o > 0 ? <line key={i} x1={x} y1={y} x2={x + DX} y2={y} stroke={theme.accent} strokeWidth={6} strokeLinecap="round" opacity={o} /> : null;
		});

	const letter = (x: number, y: number, b: string, color: string, o = 1) => (
		<Hand x={x + 14} y={y + 8} size={22} color={color} anchor="start" o={o}>
			{b}
		</Hand>
	);

	return (
		<HandSvg id={ID}>
			{/* original strands (graphite) */}
			<g fill="none" stroke={PENCIL.ink} strokeWidth={6} strokeLinecap="round" pathLength={1}>
				<path d={backbone(yTop, xL, xR)} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - draw} />
				<path d={backbone(yBot, xL, xR)} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - draw} />
			</g>

			{/* original bases: half-rungs from each template toward its partner */}
			{xs.map((x, i) => {
				const o = ramp(f, i * 1.2, i * 1.2 + 8);
				const yt = yTop(x);
				const yb = yBot(x);
				const tl = lerp(45, 40, u(x));
				return (
					<g key={i} opacity={o}>
						<line x1={x} y1={yt} x2={x} y2={yt + tl} stroke={PENCIL.ink} strokeWidth={3.4} strokeLinecap="round" />
						{letter(x, yt + tl / 2 - 2, top[i], PENCIL.ink)}
						<line x1={x} y1={yb} x2={x} y2={yb - tl} stroke={PENCIL.ink} strokeWidth={3.4} strokeLinecap="round" />
						{letter(x, yb - tl / 2 + 2, PAIR[top[i]], PENCIL.ink)}
					</g>
				);
			})}

			{/* new nucleotides: leading (pairs with top template) + lagging (pairs with bottom) */}
			{newSegs(leadAt, Y.topNew)}
			{newSegs(lagAt, Y.botNew)}
			{xs.map((x, i) => (
				<g key={i}>
					<g opacity={pop(leadAt[i])}>
						<line x1={x} y1={Y.topNew} x2={x} y2={Y.topNew - 40} stroke={theme.accent} strokeWidth={3.4} strokeLinecap="round" />
						{letter(x, Y.topNew - 22, PAIR[top[i]], theme.accent)}
					</g>
					<g opacity={pop(lagAt[i])}>
						<line x1={x} y1={Y.botNew} x2={x} y2={Y.botNew + 40} stroke={theme.accent} strokeWidth={3.4} strokeLinecap="round" />
						{letter(x, Y.botNew + 22, top[i], theme.accent)}
					</g>
				</g>
			))}

			{/* helicase at the fork */}
			{f >= START && forkX < xR + UNZIP && (
				<g transform={`translate(${forkX}, 260)`}>
					<path d="M-26,-34 L22,0 L-26,34 Q-12,0 -26,-34 Z" fill={`url(#${ID}-hatch)`} stroke={PENCIL.ink} strokeWidth={3} />
					<path d="M-26,-34 L22,0 L-26,34 Q-12,0 -26,-34 Z" fill={TOK.amber} opacity={0.35} />
					<Hand x={-34} y={8} size={24} color={TOK.amberInk} anchor="end">helicase</Hand>
				</g>
			)}

			{/* 5′ / 3′ ends (antiparallel) */}
			<g opacity={draw}>
				<Hand x={xL - 14} y={yTop(xL) + 7} size={20} color={PENCIL.inkSoft} anchor="end">3′</Hand>
				<Hand x={xR + 12} y={yTop(xR) + 7} size={20} color={PENCIL.inkSoft} anchor="start">5′</Hand>
				<Hand x={xL - 14} y={yBot(xL) + 7} size={20} color={PENCIL.inkSoft} anchor="end">5′</Hand>
				<Hand x={xR + 12} y={yBot(xR) + 7} size={20} color={PENCIL.inkSoft} anchor="start">3′</Hand>
			</g>

			{/* strand labels once each new strand has started */}
			{strandLabels && (
				<>
					<Hand x={xL - 18} y={Y.topNew + 34} size={22} anchor="start" color={theme.accent} o={pop(tPass(xL + 290 + UNZIP))}>
						leading strand (continuous)
					</Hand>
					<Hand x={xL - 18} y={Y.botNew - 20} size={22} anchor="start" color={theme.accent} o={pop(tPass(xL + 290 + UNZIP) + 10)}>
						lagging strand (fragments)
					</Hand>
				</>
			)}

			{/* legend + caption */}
			<g opacity={ramp(f, 10, 20)}>
				<line x1={140} y1={462} x2={176} y2={462} stroke={PENCIL.ink} strokeWidth={6} strokeLinecap="round" />
				<Hand x={186} y={469} size={24} anchor="start">original strand</Hand>
				<line x1={420} y1={462} x2={456} y2={462} stroke={theme.accent} strokeWidth={6} strokeLinecap="round" />
				<Hand x={466} y={469} size={24} anchor="start">new strand</Hand>
			</g>
			<Hand x={380} y={512} size={28} color={TOK.amberInk} o={ramp(f, endAt, endAt + 9)}>
				semi-conservative: each new DNA = 1 original + 1 new strand
			</Hand>
		</HandSvg>
	);
};
