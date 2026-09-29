// DoseLatencyDiagram — the three signatures of an environmental disease.
// 1 Exposure: an external agent on a stone plinth sends particles at a cell.
// 2 Dose-response: a self-drawing risk curve; as the pen moves to higher dose
//   the agent emits more and the cell's damage marks pile up (both read the
//   same dose value).
// 3 Latency: a timeline from first exposure, where mutations accumulate one at
//   a time before the disease appears years later.
// The graph is qualitative (no numbers) because the scene gives none; the
// timeline's span text comes from props.
//
// Beats are frames after `delay`. Hold: particles keep drifting, the disease
// marker breathes.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, clamp, fadeAt, hash01, polyD} from './shared';

export type DoseLatencyProps = {
	exposureAt: number;
	doseAt: number;
	doseDoneAt: number;
	doseLabel?: string;
	latencyAt: number;
	hitsAt: number;
	diseaseAt: number;
	spanLabel: string;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8dose';
const W = 760;
const H = 530;
const GX0 = 330, GX1 = 730, GY0 = 70, GY1 = 250;
const risk = (d: number) => 0.06 + 0.86 * d ** 1.4;

export const DoseLatencyDiagram = ({exposureAt, doseAt, doseDoneAt, doseLabel = 'exposure (dose) →', latencyAt, hitsAt, diseaseAt, spanLabel, notes = [], delay = 62}: DoseLatencyProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const expIn = fadeAt(frame, exposureAt, 14);
	const pen = interpolate(frame, [doseAt + 10, doseDoneAt], [0, 1], clamp);
	const dose = Math.max(0.15, pen);
	const gx = (d: number) => GX0 + d * (GX1 - GX0);
	const gy = (r: number) => GY1 - r * (GY1 - GY0);
	const pts = Array.from({length: 61}, (_, k) => (k / 60) * pen).map((d) => ({x: gx(d), y: gy(risk(d))}));

	// particles from the agent to the cell: more of them at higher dose
	const nP = Math.round(3 + 9 * dose);
	const src = {x: 70, y: 150}, cell = {x: 210, y: 150};
	const damage = Math.floor(1 + 5 * risk(dose));

	// timeline
	const TL = {x0: 70, x1: 700, y: 400};
	const tlIn = fadeAt(frame, latencyAt, 14);
	const nHits = 4;
	const hitX = (k: number) => TL.x0 + 90 + k * 120;
	const disease = fadeAt(frame, diseaseAt, 14);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Environmental disease: exposure, dose-response and latency" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{agent: '#8a8f99', cell: '#f2c4cf', p: '#6b7a8f'}} />

			{/* 1 exposure */}
			<g opacity={expIn}>
				<Pill x={20} y={26} text="1  external agent" color={theme.accent} size={16} anchor="start" />
				<DioramaPlinth id={`${ID}e`} cx={140} cy={196} rx={120} />
				{[0, 1, 2].map((k) => (
					<circle key={k} cx={src.x - 14 + k * 14} cy={src.y - 6 + (k % 2) * 10 + idleBob(frame, k, 2)} r={20 - k * 2} fill={`url(#${ID}-g-agent)`} opacity={0.9} />
				))}
				{Array.from({length: nP}, (_, k) => {
					const u = (((frame + k * (60 / nP) * 3) % 60) + 60) % 60 / 60;
					const x = src.x + 30 + (cell.x - 30 - src.x - 30) * u;
					const y = src.y + (hash01(k * 3.3) - 0.5) * 30 * (1 - u);
					return <circle key={k} cx={x} cy={y} r={3.5} fill={`url(#${ID}-g-p)`} opacity={Math.min(1, u * 5, (1 - u) * 5)} />;
				})}
				<circle cx={cell.x} cy={cell.y + idleBob(frame, 5, 1)} r={30} fill={`url(#${ID}-g-cell)`} stroke="#c98894" strokeWidth={2} />
				{Array.from({length: 6}, (_, k) => (
					<path key={k} d={`M ${cell.x - 14 + (k % 3) * 12} ${cell.y - 8 + Math.floor(k / 3) * 14} l 6 -5 l 0 10 l 6 -5`} stroke={COL.red} strokeWidth={2.5} fill="none" opacity={k < damage && pen > 0 ? 1 : 0} />
				))}
				<text x={src.x} y={src.y + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>agent</text>
				<text x={cell.x} y={cell.y + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>DNA damage</text>
			</g>

			{/* 2 dose-response */}
			<g opacity={fadeAt(frame, doseAt, 14)}>
				<Pill x={GX0} y={26} text="2  dose-response" color={theme.accent} size={16} anchor="start" />
				<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={GX0} y1={GY0} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={GX1} y={GY1 + 22} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{doseLabel}</text>
				<text x={GX0 + 8} y={GY0 + 4} fill={TOK.inkDim} fontSize={15} fontWeight={700}>risk</text>
				<path d={polyD(pts)} stroke={COL.red} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				{pen > 0 && <circle cx={gx(pen)} cy={gy(risk(pen))} r={7} fill={COL.red} stroke="#fff" strokeWidth={2} />}
			</g>

			{/* 3 latency */}
			<g opacity={tlIn}>
				<Pill x={20} y={306} text="3  latency" color={theme.accent} size={16} anchor="start" />
				<line x1={TL.x0} y1={TL.y} x2={TL.x1} y2={TL.y} stroke={TOK.inkMute} strokeWidth={4} strokeLinecap="round" />
				<circle cx={TL.x0} cy={TL.y} r={9} fill={COL.slate} />
				<text x={TL.x0} y={TL.y - 20} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800}>first exposure</text>
				{Array.from({length: nHits}, (_, k) => {
					const o = fadeAt(frame, hitsAt + k * 30, 10);
					return (
						<g key={k} opacity={o}>
							<path d={`M ${hitX(k) - 8} ${TL.y - 8} L ${hitX(k) + 8} ${TL.y + 8} M ${hitX(k) + 8} ${TL.y - 8} L ${hitX(k) - 8} ${TL.y + 8}`} stroke={COL.red} strokeWidth={3.5} strokeLinecap="round" />
						</g>
					);
				})}
				<text x={(hitX(0) + hitX(nHits - 1)) / 2} y={TL.y - 20} textAnchor="middle" fill={COL.red} fontSize={15} fontWeight={800} opacity={fadeAt(frame, hitsAt, 12)}>mutations accumulate in one cell lineage</text>
				<g opacity={disease}>
					<circle cx={TL.x1} cy={TL.y} r={12 + idlePulse(frame, 50) * 3} fill={TOK.amber} />
					<text x={TL.x1} y={TL.y - 24} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>disease</text>
				</g>
				<g opacity={fadeAt(frame, latencyAt + 30, 14)}>
					<path d={`M ${TL.x0} ${TL.y + 30} L ${TL.x0} ${TL.y + 40} L ${TL.x1} ${TL.y + 40} L ${TL.x1} ${TL.y + 30}`} stroke={theme.accent} strokeWidth={2.5} fill="none" />
					<text x={W / 2} y={TL.y + 62} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>{spanLabel}</text>
				</g>
			</g>

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
