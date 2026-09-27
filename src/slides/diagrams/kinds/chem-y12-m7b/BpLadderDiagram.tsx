// BpLadderDiagram — a boiling-point ladder of stone columns.
//
// Each rung is a family, represented by one similar-sized molecule standing on
// a stone column. Columns rise left to right in boiling-point ORDER only (the
// heights are ordinal, no temperatures are implied), and the strongest
// intermolecular force for that family is written under its column. The
// scene's own family (`key`) is outlined in amber. A per-rung `note` chip
// (e.g. "no O–H: can't donate") can drop in on its own beat.
//
// Beats are frames after `delay`, so each column can rise when the narration
// names that family.

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, STONE, idleBob, idlePulse} from '../../diorama';
import {Arrow, Chip, ELEMENTS, Mol, Title, fadeAt, molSize, popAt} from './shared';
import type {MolSpec} from './molecules';

export type BpRung = {
	name: string;
	mol: string | MolSpec;
	force: string;
	at: number;
	key?: boolean;
	note?: {text: string; at: number};
	bond?: number;
};

export type BpLadderProps = {
	title?: string;
	subtitle?: string;
	rungs?: BpRung[];
	footer?: {text: string; at: number};
	delay?: number;
};

const ID = 'c12m7bp';
const W = 760;
const H = 530;
const BASE = 404;
const X0 = 58;
const X1 = 752;

export const BpLadderDiagram = ({title = 'Boiling point ladder', subtitle, rungs = [], footer, delay = 62}: BpLadderProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = Math.max(1, rungs.length);
	const colW = (X1 - X0) / n;
	const rx = Math.min(78, colW * 0.4);
	const minH = 46;
	const maxH = n >= 4 ? 176 : 190;
	const pulse = idlePulse(frame);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<Title text={title} opacity={fadeAt(frame, 0)} />
			{subtitle && (
				<text x={W / 2} y={62} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={fadeAt(frame, 6)}>
					{subtitle}
				</text>
			)}

			{/* axis: boiling point rises to the right */}
			<g opacity={fadeAt(frame, 8)}>
				<Arrow x1={30} y1={BASE + 4} x2={30} y2={BASE - maxH - 30} color={TOK.inkMute} width={3} />
				<text x={22} y={BASE - maxH / 2 - 10} fill={TOK.inkDim} fontSize={17} fontWeight={800} textAnchor="middle" transform={`rotate(-90, 22, ${BASE - maxH / 2 - 10})`}>
					boiling point
				</text>
			</g>
			<line x1={X0 - 8} y1={BASE + 6} x2={X1} y2={BASE + 6} stroke={STONE.sideDark} strokeWidth={2} opacity={0.4 * fadeAt(frame, 4)} />

			{rungs.map((r, i) => {
				const cx = X0 + colW * (i + 0.5);
				const hFull = n === 1 ? maxH : minH + ((maxH - minH) * i) / (n - 1);
				const grow = Math.max(0, Math.min(1.04, spring({frame: frame - r.at, fps, config: {damping: 15, stiffness: 110}})));
				const h = hFull * grow;
				const top = BASE - h;
				const ry = rx * 0.34;
				const bond = r.bond ?? (n >= 4 ? 40 : 48);
				const size = molSize(r.mol, bond);
				const molY = top - size.h / 2 - 34 + idleBob(frame, i, 1.4);
				const shown = Math.min(1, popAt(frame, fps, r.at + 12) * 1.2);
				const keyC = r.key ? TOK.amber : undefined;
				return (
					<g key={i} opacity={fadeAt(frame, r.at - 4, 8)}>
						{/* column body */}
						<path
							d={`M ${cx - rx} ${top} L ${cx - rx} ${BASE} A ${rx} ${ry} 0 0 0 ${cx + rx} ${BASE} L ${cx + rx} ${top} Z`}
							fill={`url(#${ID}-stone-side)`}
						/>
						<DioramaPlinth id={ID} cx={cx} cy={top} rx={rx} />
						{keyC && (
							<ellipse cx={cx} cy={top} rx={rx + 4} ry={ry + 4} fill="none" stroke={keyC} strokeWidth={3 + pulse * 1.5} opacity={fadeAt(frame, r.at + 20, 12)} />
						)}
						<g opacity={shown}>
							<Mol id={ID} mol={r.mol} x={cx} y={molY} bond={bond} ballScale={0.9} frame={frame} />
						</g>
						{r.note && (
							<Chip x={cx} y={molY - size.h / 2 - 40} text={r.note.text} color={TOK.amberInk} size={16} padX={10} opacity={fadeAt(frame, r.note.at, 12)} />
						)}
						<text x={cx} y={BASE + 44} textAnchor="middle" fill={r.key ? TOK.amberInk : TOK.ink} fontSize={n >= 4 ? 19 : 21} fontWeight={800} opacity={fadeAt(frame, r.at + 8, 12)}>
							{r.name}
						</text>
						<text x={cx} y={BASE + 68} textAnchor="middle" fill={theme.accent} fontSize={n >= 4 ? 16 : 18} fontWeight={800} opacity={fadeAt(frame, r.at + 20, 12)}>
							{r.force}
						</text>
					</g>
				);
			})}

			{footer && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800} opacity={fadeAt(frame, footer.at, 14)}>
					{footer.text}
				</text>
			)}
		</svg>
	);
};
