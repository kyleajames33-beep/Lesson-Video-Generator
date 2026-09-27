// PkaLadderDiagram — acids placed on a stone pKa ruler.
//
// A long stone ruler carries a pKa scale (axis ticks only). Each acid drops a
// pin onto its pKa on its beat, with a structure standing above it (the acid,
// or its conjugate base with a charge cloud showing how far the negative
// charge spreads). Lower pKa is to the left, labelled "stronger acid". An
// optional span bracket between two pins states the strength ratio, computed
// from the pKa difference (each unit is ×10), so the number can't drift from
// the pins.
//
// Used for acid / phenol / alcohol (L14, L18) and the inductive effect of
// chlorine on ethanoic acid (L18).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Chip, ELEMENTS, Mol, Title, atomPos, fadeAt, molSize, popAt, resolveMol} from './shared';
import type {MolSpec} from './molecules';

export type PkaMarker = {
	name: string;
	pKa: number;
	/** Text for the value; omit to print "pKa ≈ {pKa}". Set "" to print nothing (position only). */
	valueText?: string;
	sub?: string;
	mol: string | MolSpec;
	bond?: number;
	glow?: number[];
	highlight?: number[];
	highlightAt?: number;
	key?: boolean;
	at: number;
};

export type PkaLadderProps = {
	title?: string;
	min?: number;
	max?: number;
	tickEvery?: number;
	markers?: PkaMarker[];
	span?: {from: number; to: number; at: number; text?: string};
	notes?: {text: string; at: number}[];
	delay?: number;
};

const ID = 'c12m7pka';
const W = 760;
const H = 530;
const RULER_Y = 392;
const X0 = 70;
const X1 = 690;

const SUP: Record<string, string> = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻'};
const sup = (n: number) => String(n).split('').map((c) => SUP[c] ?? c).join('');

export const PkaLadderDiagram = ({
	title = 'Lower pKa, stronger acid', min = 0, max = 18, tickEvery = 2, markers = [], span, notes = [], delay = 62,
}: PkaLadderProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const xOf = (v: number) => X0 + ((v - min) / (max - min)) * (X1 - X0);
	const pulse = idlePulse(frame, 70);
	const ticks: number[] = [];
	for (let v = min; v <= max + 1e-9; v += tickEvery) ticks.push(Math.round(v * 100) / 100);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<defs>
				<radialGradient id={`${ID}-glow`}>
					<stop offset="0%" stopColor={theme.accent2} stopOpacity={0.95} />
					<stop offset="100%" stopColor={theme.accent2} stopOpacity={0} />
				</radialGradient>
			</defs>
			<Title text={title} opacity={fadeAt(frame, 0)} />

			{/* the stone ruler: a long plinth squashed flat */}
			<g opacity={fadeAt(frame, 2, 12)} transform={`translate(0, ${RULER_Y}) scale(1, 0.5) translate(0, ${-RULER_Y})`}>
				<DioramaPlinth id={ID} cx={W / 2} cy={RULER_Y} rx={352} />
			</g>
			<g opacity={fadeAt(frame, 6, 12)}>
				<line x1={X0} y1={RULER_Y} x2={X1} y2={RULER_Y} stroke={TOK.inkDim} strokeWidth={3} strokeLinecap="round" />
				{ticks.map((v) => (
					<g key={v}>
						<line x1={xOf(v)} y1={RULER_Y - 7} x2={xOf(v)} y2={RULER_Y + 7} stroke={TOK.inkDim} strokeWidth={2.5} />
						<text x={xOf(v)} y={RULER_Y + 28} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>
							{v}
						</text>
					</g>
				))}
				<text x={X1 + 36} y={RULER_Y + 6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>pKa</text>
				<Arrow x1={X0 + 150} y1={H - 20} x2={X0} y2={H - 20} color={theme.accent} width={3} />
				<text x={X0 + 160} y={H - 14} fill={theme.accent} fontSize={17} fontWeight={800}>stronger acid</text>
				<Arrow x1={X1 - 110} y1={H - 20} x2={X1} y2={H - 20} color={TOK.inkMute} width={3} />
				<text x={X1 - 120} y={H - 14} textAnchor="end" fill={TOK.inkMute} fontSize={17} fontWeight={800}>weaker</text>
			</g>

			{markers.map((m, i) => {
				const x = xOf(m.pKa);
				const shown = Math.min(1, popAt(frame, fps, m.at) * 1.2);
				const bond = m.bond ?? 34;
				const spec = resolveMol(m.mol);
				const size = molSize(spec, bond);
				const my = RULER_Y - 58 - size.h / 2 - 14 + idleBob(frame, i, 1.3);
				const color = m.key ? TOK.amber : theme.accent;
				const value = m.valueText ?? `pKa ≈ ${m.pKa}`;
				const glowIn = m.glow ? fadeAt(frame, m.at + 20, 20) : 0;
				return (
					<g key={i} opacity={fadeAt(frame, m.at, 8)}>
						{/* pin */}
						<line x1={x} y1={RULER_Y - 50} x2={x} y2={RULER_Y - 4} stroke={color} strokeWidth={4} strokeLinecap="round" />
						<circle cx={x} cy={RULER_Y} r={8 + (m.key ? pulse * 2 : 0)} fill={color} stroke="#ffffff" strokeWidth={2} />
						{m.glow && glowIn > 0 &&
							m.glow.map((k) => {
								const p = atomPos(spec, k, x, my, bond);
								const share = 1 / m.glow!.length;
								return <circle key={k} cx={p.x} cy={p.y} r={24 + 10 * share + pulse * 3} fill={`url(#${ID}-glow)`} opacity={glowIn * (0.35 + 0.65 * share)} />;
							})}
						<g opacity={shown}>
							<Mol id={ID} mol={spec} x={x} y={my} bond={bond} ballScale={0.75} frame={frame} highlight={m.highlight ?? []} highlightOpacity={m.highlight ? fadeAt(frame, m.highlightAt ?? m.at + 30, 12) : 0} />
						</g>
						<text x={x} y={my - size.h / 2 - 56} textAnchor="middle" fill={m.key ? TOK.amberInk : TOK.ink} fontSize={19} fontWeight={800}>
							{m.name}
						</text>
						{value && (
							<text x={x} y={my - size.h / 2 - 34} textAnchor="middle" fill={m.key ? TOK.amberInk : theme.accent} fontSize={17} fontWeight={800}>
								{value}
							</text>
						)}
						{m.sub && (
							<text x={x} y={RULER_Y + 56} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={fadeAt(frame, m.at + 24, 12)}>
								{m.sub}
							</text>
						)}
					</g>
				);
			})}

			{span && markers[span.from] && markers[span.to] && (() => {
				const a = xOf(markers[span.from].pKa);
				const c = xOf(markers[span.to].pKa);
				const diff = Math.round(Math.abs(markers[span.to].pKa - markers[span.from].pKa));
				const y = RULER_Y + 58;
				const on = fadeAt(frame, span.at, 14);
				return (
					<g opacity={on}>
						<path d={`M ${a} ${y - 10} L ${a} ${y} L ${c} ${y} L ${c} ${y - 10}`} fill="none" stroke={TOK.amber} strokeWidth={3} />
						<text x={(a + c) / 2} y={y + 24} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>
							{diff} pKa units = 10{sup(diff)} × {span.text ?? ''}
						</text>
					</g>
				);
			})()}

			{notes.map((n, i) => (
				<Chip key={i} x={W / 2} y={78 + i * 40} text={n.text} color={theme.accent} size={17} opacity={fadeAt(frame, n.at, 12)} />
			))}
		</svg>
	);
};
