// UsesDiagram (bio11m3Uses) — an organism's adaptation, put to a specific
// purpose.
//
// One row per case. On the row's beats: the organism stands on its plinth
// (with the People and Country the knowledge belongs to, from props); the
// adaptation card appears with its type chip (structural / physiological /
// behavioural); then the arrow draws across, carrying what had to be KNOWN or
// DONE to use it (e.g. "crushed into a still pool"), and the purpose lands on
// its own plinth. The adaptation is always the organism's own; the method is
// the human response to it. All text comes from props (the site lesson's
// published, cited examples); nothing is invented here.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Footer, H, Lines, Pill, Title, W, easeT, fadeAt, popAt, wrap, type FooterLine} from './shared';
import {EcoGloss, EcoIcon, type AnyIconName} from './icons';

export type UseRow = {
	organism: AnyIconName;
	name: string;
	people?: string;
	adaptation: string;
	type: 'structural' | 'physiological' | 'behavioural';
	method: string;
	purpose: string;
	purposeIcon: AnyIconName;
	at: number;
	adaptAt: number;
	useAt: number;
	amber?: boolean;
};
export type UsesProps = {title?: string; rows: UseRow[]; footer?: FooterLine[]; delay?: number};

const ID = 'b11m3uses';
const TYPE_COL = {structural: '#6a5acd', physiological: '#1f8a7a', behavioural: '#c0562e'};

export const UsesDiagram = ({title, rows, footer = [], delay = 62}: UsesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 48 : 8;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const n = rows.length;
	const rowH = (H - top - footH) / n;
	const pulse = idlePulse(frame);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Adaptations and purposes'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{rows.map((r, i) => {
				const cy = top + rowH * i + rowH * 0.58;
				const p = popAt(frame, fps, r.at);
				const on = Math.min(1, p);
				const a = fadeAt(frame, r.adaptAt, 14);
				const u = easeT(frame, r.useAt, r.useAt + 26);
				const pu = popAt(frame, fps, r.useAt + 20);
				const cardX = 170;
				const cardW = 220;
				const adaptL = wrap(r.adaptation, 26);
				const methodL = wrap(r.method, 20);
				const purposeL = wrap(r.purpose, 16);
				const px = 650;
				return (
					<g key={i}>
						{i > 0 && <line x1={20} y1={top + rowH * i + 4} x2={W - 20} y2={top + rowH * i + 4} stroke={TOK.rule} strokeWidth={2} />}
						{/* organism */}
						<g opacity={on} transform={`translate(0, ${(1 - on) * 20})`}>
							<DioramaPlinth id={`${ID}o${i}`} cx={82} cy={cy + 10} rx={60} />
							<EcoIcon id={ID} name={r.organism} x={82} y={cy - 26 + idleBob(frame, i, 1.2)} s={0.95} frame={frame} />
							<Lines x={82} y={cy + 64} lines={wrap(r.name, 16)} size={16} color={theme.accent} />
							{r.people && <Lines x={82} y={cy + 64 + wrap(r.name, 16).length * 19} lines={wrap(r.people, 20)} size={13} color={TOK.inkDim} weight={700} />}
						</g>
						{/* adaptation card */}
						<g opacity={a} transform={`translate(0, ${(1 - a) * 8})`}>
							<rect x={cardX} y={cy - 46} width={cardW} height={adaptL.length * 19 + 50} rx={12} fill="#ffffff" stroke={TYPE_COL[r.type]} strokeWidth={2.5} />
							<Pill x={cardX + cardW / 2} y={cy - 46} text={`${r.type} adaptation`} size={14} color={TYPE_COL[r.type]} />
							<Lines x={cardX + cardW / 2} y={cy - 8} lines={adaptL} size={15} color={TOK.ink} weight={700} />
						</g>
						{/* arrow + method */}
						{u > 0 && (
							<g>
								<Arrow x1={cardX + cardW + 8} y1={cy - 8} x2={cardX + cardW + 8 + (px - 64 - cardX - cardW - 8) * u} y2={cy - 8} color={r.amber ? TOK.amber : TOK.inkMute} width={3.5} head={12} />
								<Lines x={(cardX + cardW + px - 60) / 2 + 2} y={cy + 16} lines={methodL} size={14} color={TOK.inkDim} weight={800} lh={1.15} opacity={fadeAt(frame, r.useAt + 10, 12)} />
							</g>
						)}
						{/* purpose */}
						<g opacity={Math.min(1, pu)}>
							{r.amber && <ellipse cx={px} cy={cy - 6} rx={70} ry={50} fill={TOK.amber} opacity={0.08 + 0.1 * pulse} />}
							<DioramaPlinth id={`${ID}p${i}`} cx={px} cy={cy + 10} rx={58} />
							<EcoIcon id={ID} name={r.purposeIcon} x={px} y={cy - 24 + idleBob(frame, i + 9, 1.2)} s={0.9 * Math.min(1, pu)} frame={frame} />
							<Lines x={px} y={cy + 64} lines={purposeL} size={16} color={r.amber ? TOK.amberInk : theme.accent} />
						</g>
					</g>
				);
			})}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
