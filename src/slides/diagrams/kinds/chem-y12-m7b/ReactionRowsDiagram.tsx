// ReactionRowsDiagram — conversions laid out as rows of plinths joined by arrows.
//
// Each row is a short chain of stages (molecules on plinths). Between stages an
// arrow draws itself on its beat, carrying the reagent above and the
// technique/conditions below; the next molecule then pops onto its plinth. A
// link can instead be `blocked`: the arrow stops short and a ✗ with a reason
// appears (e.g. a ketone has no H on the carbonyl carbon to remove). Atoms that
// matter carry an amber ring.
//
// Used for oxidation chains (1° alcohol → aldehyde → acid; 2° alcohol → ketone
// ✗), the full conditions for key pathway steps, and distillation vs reflux.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, ELEMENTS, Mol, Title, clamp, fadeAt, molSize, popAt} from './shared';
import type {MolSpec} from './molecules';

export type RowStage = {mol: string | MolSpec; name: string; at: number; highlight?: number[]; highlightAt?: number; key?: boolean};
export type RowLink = {at: number; label?: string; sub?: string; blocked?: string; key?: boolean};
export type ReactionRow = {stages: RowStage[]; links?: RowLink[]; tag?: {text: string; at: number}};

export type ReactionRowsProps = {
	title?: string;
	rows?: ReactionRow[];
	footer?: {text: string; at: number};
	delay?: number;
	bond?: number;
};

const ID = 'c12m7rows';
const W = 760;
const H = 530;
const STOP = '#b3261e';

export const ReactionRowsDiagram = ({title = '', rows = [], footer, delay = 62, bond: bondProp}: ReactionRowsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 58 : 14;
	const bottom = footer ? H - 34 : H - 6;
	const rowH = (bottom - top) / Math.max(1, rows.length);
	const compact = rows.length >= 3;
	const bond = bondProp ?? (compact ? 36 : 50);
	const pulse = idlePulse(frame);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title || 'Reaction steps'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}

			{rows.map((row, ri) => {
				const n = row.stages.length;
				const y0 = top + ri * rowH;
				const slotW = W / n;
				// Compact two-stage rows: plinths pulled in, names beside them (outer sides).
				const side = compact && n === 2;
				const sx = (k: number) => (side ? W * (k === 0 ? 0.3 : 0.7) : slotW * (k + 0.5));
				const plinthY = y0 + rowH * (compact ? 0.7 : 0.62);
				const rx = side ? 62 : Math.min(compact ? 92 : 118, slotW * 0.36);
				const nameY = plinthY + rx * 0.34 + rx * 0.2 + (compact ? 20 : 26);
				const namePos = (k: number) =>
					side ? {x: sx(k) + (k === 0 ? -(rx + 12) : rx + 12), y: plinthY - 4, anchor: k === 0 ? 'end' : 'start'} : {x: sx(k), y: nameY, anchor: 'middle'};
				return (
					<g key={ri}>
						{row.stages.map((st, k) => {
							const shown = Math.min(1, popAt(frame, fps, st.at) * 1.2);
							const size = molSize(st.mol, bond);
							const my = plinthY - 10 - size.h / 2 - (compact ? 6 : 16) + idleBob(frame, ri * 3 + k, 1.3);
							return (
								<g key={k}>
									<g opacity={0.35 + 0.65 * fadeAt(frame, st.at - 6, 10)}>
										<DioramaPlinth id={ID} cx={sx(k)} cy={plinthY} rx={rx} />
									</g>
									<g opacity={shown}>
										<Mol
											id={ID}
											mol={st.mol}
											x={sx(k)}
											y={my}
											bond={bond}
											ballScale={compact ? 0.74 : 0.92}
											highlight={st.highlight ?? []}
											highlightOpacity={st.highlight ? fadeAt(frame, st.highlightAt ?? st.at + 30, 12) : 0}
											frame={frame}
										/>
									</g>
									<text x={namePos(k).x} y={namePos(k).y} textAnchor={namePos(k).anchor as 'end' | 'start' | 'middle'} fill={st.key ? TOK.amberInk : TOK.ink} fontSize={compact ? 17 : 20} fontWeight={800} opacity={fadeAt(frame, st.at + 4, 12)}>
										{st.name}
									</text>
								</g>
							);
						})}
						{(row.links ?? []).map((ln, k) => {
							if (k >= n - 1) return null;
							const x1 = sx(k) + rx * (side ? 1.05 : 0.9);
							const x2Full = sx(k + 1) - rx * (side ? 1.05 : 0.9);
							const ay = plinthY - (compact ? 22 : 36);
							const draw = interpolate(frame, [ln.at, ln.at + 22], [0, 1], clamp);
							const x2 = ln.blocked ? x1 + (x2Full - x1) * 0.55 * draw : x1 + (x2Full - x1) * draw;
							const mid = (x1 + x2Full) / 2;
							const blockIn = ln.blocked ? fadeAt(frame, ln.at + 20, 10) : 0;
							const col = ln.key ? TOK.amber : TOK.inkDim;
							return (
								<g key={`l${k}`}>
									{draw > 0.02 && <Arrow x1={x1} y1={ay} x2={Math.max(x1 + 12, x2)} y2={ay} color={col} width={4} head={12} />}
									{ln.label && (
										<text x={mid} y={ay - 14} textAnchor="middle" fill={ln.key ? TOK.amberInk : theme.accent} fontSize={compact ? 15 : 17} fontWeight={800} opacity={fadeAt(frame, ln.at + 6, 10)}>
											{ln.label}
										</text>
									)}
									{ln.sub && (
										<text x={mid} y={ay + (compact ? 22 : 26)} textAnchor="middle" fill={ln.key ? TOK.amberInk : TOK.inkDim} fontSize={compact ? 15 : 16} fontWeight={800} opacity={fadeAt(frame, ln.at + 10, 10)}>
											{ln.sub}
										</text>
									)}
									{ln.blocked && (
										<g opacity={blockIn}>
											<g transform={`translate(${x1 + (x2Full - x1) * 0.55 + 18}, ${ay}) scale(${1 + pulse * 0.06})`}>
												<circle r={17} fill={STOP} />
												<path d="M -7 -7 L 7 7 M 7 -7 L -7 7" stroke="#ffffff" strokeWidth={4} strokeLinecap="round" />
											</g>
											<text x={sx(k + 1)} y={plinthY - 30} textAnchor="middle" fill={STOP} fontSize={compact ? 16 : 19} fontWeight={800}>
												{ln.blocked}
											</text>
										</g>
									)}
								</g>
							);
						})}
						{row.tag && (
							<text x={14} y={y0 + 20} fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, row.tag.at, 10)}>
								{row.tag.text}
							</text>
						)}
					</g>
				);
			})}

			{footer && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800} opacity={fadeAt(frame, footer.at, 14)}>
					{footer.text}
				</text>
			)}
		</svg>
	);
};
