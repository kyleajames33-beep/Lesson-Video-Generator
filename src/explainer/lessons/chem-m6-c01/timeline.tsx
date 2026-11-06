// Lesson-local timeline for M6 C01 (quality fix, 6 Nov 2026). The shared `Timeline` in ./parts is imported by many
// Module 7 lessons, so it stays unchanged. Differences here:
// - a card that has not been introduced yet is not drawn as an empty dashed box: only its decade marker shows, faintly,
//   and the card writes in, filled, when the narration reaches that model;
// - card and stamp text is 26 px or more (was 20 to 22 px), with shorter stamp wording so it fits.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {ACID, ACID_INK, Arrow, Sx, TEAL, clamp01, handFor, lerp, mw, smooth} from './parts';

type TCard = {decade: string; lines: {t: string; size: number; weight?: number; hand?: boolean; color?: string}[]; stamp: string[]};
const CARDS: TCard[] = [
	{decade: '1770s', lines: [{t: 'Antoine Lavoisier', size: 30, weight: 800}, {t: 'Paris, 1770s', size: 26, weight: 600, color: INK_SOFT}, {t: 'acids contain oxygen', size: 34, hand: true}], stamp: ['broken by: HCl']},
	{decade: '1810s', lines: [{t: 'Humphry Davy', size: 30, weight: 800}, {t: 'London, 1810s', size: 26, weight: 600, color: INK_SOFT}, {t: 'acids contain hydrogen', size: 34, hand: true}], stamp: ['limit: H alone is not enough;', 'no base definition']},
	{decade: '1880s', lines: [{t: 'Svante Arrhenius', size: 30, weight: 800}, {t: 'Sweden, 1880s', size: 26, weight: 600, color: INK_SOFT}, {t: 'acid: releases H^{+} in water', size: 28, hand: true}, {t: 'base: releases its own OH^{-}', size: 28, hand: true}], stamp: ['limits: NH_3, carbonates,', 'gas reactions']},
	{decade: '1923', lines: [{t: 'Brønsted (Copenhagen)', size: 28, weight: 800}, {t: 'Lowry (Cambridge)', size: 28, weight: 800}, {t: 'acid: proton (H^{+}) donor', size: 28, hand: true}, {t: 'base: proton (H^{+}) acceptor', size: 28, hand: true}], stamp: ['limit: needs a proton']},
];
const TL = {x: 96, y: 182, cw: 408, gap: 33, ch: 162};
const SS = 26;
export type TLProps = {fill: (number | undefined)[]; stamp?: (number | undefined)[]; slots?: number; strip?: number; dim?: number; lit?: (number | undefined)[]; arrows?: number; extra?: React.ReactNode};
export const Timeline: React.FC<TLProps> = ({fill, stamp = [], slots = -1000, strip = 0, dim = 0, lit = [], arrows, extra}) => {
	const f = useCurrentFrame();
	const k = smooth(strip);
	const s = lerp(1, 0.44, k);
	const tx = lerp(TL.x, 1824 - (4 * TL.cw + 3 * TL.gap) * 0.44, k), ty = lerp(TL.y, 66, k);
	const o = prog(f, slots, 14) * (1 - 0.5 * k) * (1 - 0.6 * clamp01(dim));
	if (o <= 0.01) return null;
	const total = 4 * TL.cw + 3 * TL.gap;
	return (
		<g opacity={o} transform={`translate(${tx},${ty}) scale(${s}) translate(${-TL.x},${-TL.y})`}>
			<DrawPath d={`M${TL.x},${TL.y + 14} L${TL.x + total},${TL.y + 14}`} at={slots} dur={30} color={INK_SOFT} width={3} />
			{CARDS.map((c, i) => {
				const x = TL.x + i * (TL.cw + TL.gap), y = TL.y + 34;
				const fo = fill[i] === undefined ? 0 : prog(f, fill[i] as number, 16);
				const rise = (1 - smooth(fo)) * 18;
				const so = stamp[i] === undefined ? 0 : prog(f, stamp[i] as number, 10);
				const pop = stamp[i] === undefined ? 1 : 1 + 0.25 * (1 - smooth(prog(f, stamp[i] as number, 14)));
				const g = lit[i] === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - (lit[i] as number)) / 40) * Math.PI));
				const sw = Math.max(...c.stamp.map(t => mw(t, SS, false, 700))) + 30;
				return (
					<g key={i}>
						<circle cx={x + 18} cy={TL.y + 14} r={8} fill={fo > 0.5 ? TEAL : '#fffdf8'} stroke={TEAL} strokeWidth={3} />
						<g opacity={0.45 + 0.55 * fo}><Sx x={x + 34} y={TL.y + 2} text={c.decade} size={26} color={TEAL} weight={800} at={-1000} /></g>
						{fo > 0.01 ? (
							<g opacity={fo} transform={`translate(0,${rise})`}>
								<rect x={x} y={y} width={TL.cw} height={TL.ch} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
								{c.lines.map((l, j) => {
									const ly = y + 36 + c.lines.slice(0, j).reduce((a, q) => a + q.size * 1.16, 0) + (j >= 2 && c.lines.length === 3 ? 10 : j >= 2 ? 6 : 0);
									const h = handFor(l.t, !!l.hand, l.size);
									return <Sx key={j} x={x + 20} y={ly} text={l.t} size={h.size} color={l.color ?? INK} weight={l.weight ?? (h.hand ? 700 : 600)} hand={h.hand} at={-1000} />;
								})}
							</g>
						) : null}
						{so > 0.01 ? (
							<g opacity={so} transform={`translate(${x + 10},${y + TL.ch + 12}) rotate(-1.5) scale(${pop})`}>
								{g > 0.01 ? <rect x={-8} y={-8} width={sw + 16} height={c.stamp.length * 32 + 30} rx={14} fill="#f6d77a" opacity={0.7 * g} /> : null}
								<rect x={0} y={0} width={sw} height={c.stamp.length * 32 + 14} rx={10} fill="#fff8ea" stroke={ACID} strokeWidth={3} />
								{c.stamp.map((t, j) => <Sx key={j} x={15} y={33 + j * 32} text={t} size={SS} color={ACID_INK} weight={700} at={-1000} />)}
							</g>
						) : null}
						{arrows !== undefined && i < 3 ? <Arrow x1={x + TL.cw - 30} y1={TL.y - 6} x2={x + TL.cw + TL.gap + 30} y2={TL.y - 6} at={arrows + i * 8} color={ACID} width={4} /> : null}
					</g>
				);
			})}
			{extra}
		</g>
	);
};
