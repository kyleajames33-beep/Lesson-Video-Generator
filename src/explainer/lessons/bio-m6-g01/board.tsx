// M6 G01 practice board: the shared Biology practice layout (HSC-style tag and type badge top right, the three-check
// strip along the bottom that ticks the row each scene uses and dims during every countdown), typeset sequence rows on
// slim baselines (DNA in ink, mRNA in terracotta, codons spaced in threes, never tiles), answer boxes and model lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {Countdown, Sx} from '../bio-m5-b13/shared';
import {CheckStrip} from '../bio-m5-g01/board';
import {MRNA, MRNA_INK} from '../bio-m5-b06b/shared';
import {CardBox} from '../bio-m6-b01/parts';
import {Codons, cX, lx} from '../bio-m6-b03/parts';

export const CHECKS = ['what changed?', 'what does it do?', 'who inherits it?'];
export const Checks: React.FC<{ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number}> = ({ticks, hold, at = -100}) => (
	<CheckStrip labels={CHECKS} title="three checks:" ticks={ticks} hold={hold} at={at} />
);
/** "Pause here to answer." with the 10 s countdown ring. */
export const PauseHold: React.FC<{h: {startFrame: number; endFrame: number}; at: number; x: number; y: number; cx: number; cy: number}> = ({h, at, x, y, cx, cy}) => (
	<>
		<Sx x={x} y={y} text="Pause here to answer." size={46} color={AMBER_INK} hand at={at} />
		<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={56} />
	</>
);
export const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number; label: string}> = ({x, y, w, h, at, label}) => (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 18} y={y + 36} text={label} size={24} color={INK_SOFT} weight={700} at={at} />
	</>
);
export const Line: React.FC<{x: number; y: number; text: string; at: number; size?: number; color?: string; out?: number}> = ({x, y, text, at, size = 30, color = AMBER_INK, out}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand at={at} out={out} />
);
export const split3 = (s: string) => Array.from({length: Math.ceil(s.length / 3)}, (_, k) => s.slice(3 * k, 3 * k + 3));

/** One typeset sequence row: label, end marks, codons spaced in threes, a slim baseline (two thin lines for DNA). */
export type SeqOpts = {
	label: string; x0: number; y: number; codons: string[]; left: string; right: string; dna?: boolean; at?: number; o?: number;
	lp?: number; cg?: number; size?: number; labelX?: number; labelSize?: number;
	ring?: {i: number; at: number; out?: number}[]; color?: (i: number) => string | undefined; letterO?: (i: number) => number; hot?: (k: number) => number;
	under?: {at: number}; dim?: number;
};
export const SeqRow: React.FC<SeqOpts> = ({label, x0, y, codons, left, right, dna = false, at = -100, o = 1, lp = 30, cg = 22, size = 34, labelX = 140, labelSize, ring = [], color, letterO, hot, under, dim = 0}) => {
	const f = useCurrentFrame();
	const op = prog(f, at, 12) * o * (1 - 0.55 * dim);
	if (op <= 0.01) return null;
	const n = codons.join('').length;
	const last = lx(x0, n - 1, codons.length - 1, lp, cg);
	const base = dna ? INK : MRNA_INK;
	const ls = labelSize ?? size * 0.9;
	return (
		<g opacity={op}>
			<text x={labelX} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: ls}} fill={INK}>{label}</text>
			{under ? <DrawPath d={`M${labelX - 2},${y + 10} L${labelX + label.length * ls * 0.52},${y + 12}`} at={under.at} dur={12} color={AMBER} width={5} /> : null}
			<text x={x0 - lp * 0.9} y={y - 2} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size * 0.72}} fill={INK_SOFT}>{left}</text>
			<Codons x0={x0} y={y} codons={codons} lp={lp} cg={cg} size={size} brkO={() => 0} letterColor={i => color?.(i) ?? base} letterO={letterO} hot={hot} />
			<text x={last + lp * 0.9} y={y - 2} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size * 0.72}} fill={INK_SOFT}>{right}</text>
			{dna ? (
				<g>
					<line x1={x0 - lp / 2} y1={y + size * 0.3} x2={last + lp / 2} y2={y + size * 0.3} stroke="#9a8f80" strokeWidth={2.5} strokeLinecap="round" />
					<line x1={x0 - lp / 2} y1={y + size * 0.3 + 7} x2={last + lp / 2} y2={y + size * 0.3 + 7} stroke="#9a8f80" strokeWidth={2.5} strokeLinecap="round" />
				</g>
			) : (
				<line x1={x0 - lp / 2} y1={y + size * 0.32} x2={last + lp / 2} y2={y + size * 0.32} stroke={MRNA} strokeWidth={2.5} strokeLinecap="round" opacity={0.6} />
			)}
			{ring.map((r, k) => {
				const ro = prog(f, r.at, 10) * (r.out === undefined ? 1 : 1 - prog(f, r.out, 10));
				return ro > 0.01 ? <circle key={k} cx={lx(x0, r.i, Math.floor(r.i / 3), lp, cg)} cy={y - size * 0.36} r={size * 0.66} fill="none" stroke={AMBER} strokeWidth={4} opacity={ro} /> : null;
			})}
		</g>
	);
};
export const seqX = (x0: number, i: number, lp = 30, cg = 22) => lx(x0, i, Math.floor(i / 3), lp, cg);
export const codX = (x0: number, k: number, lp = 30, cg = 22) => cX(x0, k, lp, cg);
export {AMBER, AMBER_INK, INK, INK_SOFT, MRNA, MRNA_INK, prog};
