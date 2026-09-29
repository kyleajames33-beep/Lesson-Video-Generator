// WeighDiagram (bio11m1bWeigh) — an evaluation as a balance on a stone plinth.
//
// Cards drop onto the left pan (e.g. strengths) and the right pan (e.g.
// limitations) on their beats; the beam tilts toward the heavier side, with
// the tilt computed from the summed card weights (default weight 1), so an
// even list leaves the beam level. Each pan's cards are also listed in a
// column beside it so the text stays readable. A verdict banner (amber) lands
// at the end: the judgement is the point of an "assess" or "evaluate" answer.
//
// Props: `left` {title, cards: [{text, at, weight?}]}, `right` (same),
// `verdict` {text, at}, `title` {text, at}.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {fadeAt, ease, lerp, CORAL, Verdict, wrap} from './shared';

type Card = {text: string; at: number; weight?: number};
type Side = {title: string; cards: Card[]};
export type WeighProps = {
	title?: {text: string; at: number};
	left: Side;
	right: Side;
	verdict?: {text: string; at: number};
	delay?: number;
};

const ID = 'b11m1bWeigh';
const W = 760, H = 530;
const PX = 380, PY = 128; // pivot

export const WeighDiagram = ({title, left, right, verdict, delay = 62}: WeighProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const pulse = idlePulse(frame, 50);
	const landed = (c: Card) => ease(frame, c.at, c.at + 18);
	const wL = left.cards.reduce((a, c) => a + (c.weight ?? 1) * landed(c), 0);
	const wR = right.cards.reduce((a, c) => a + (c.weight ?? 1) * landed(c), 0);
	const tilt = Math.max(-10, Math.min(10, (wR - wL) * 4)); // degrees; positive = right side down
	const arm = 150;
	const rad = (tilt * Math.PI) / 180;
	const lEnd = {x: PX - arm * Math.cos(rad), y: PY - arm * Math.sin(rad)};
	const rEnd = {x: PX + arm * Math.cos(rad), y: PY + arm * Math.sin(rad)};

	const column = (side: Side, x: number, anchor: 'start' | 'end', ok: boolean) => {
		let y = 240;
		return side.cards.map((c, i) => {
			const lines = wrap(c.text, 30);
			const yy = y;
			y += lines.length * 20 + 16;
			const op = fadeAt(frame, c.at, 12);
			const dx = anchor === 'start' ? 26 : -26;
			return (
				<g key={i} opacity={op} transform={`translate(0,${lerp(-10, 0, op)})`}>
					<Verdict x={x} y={yy - 6} ok={ok} r={10} />
					{lines.map((ln, k) => (
						<text key={k} x={x + dx} y={yy + k * 20} textAnchor={anchor} fill={TOK.ink} fontSize={16} fontWeight={700}>{ln}</text>
					))}
				</g>
			);
		});
	};

	const pan = (end: {x: number; y: number}, side: Side, col: string) => (
		<g>
			<line x1={end.x - 40} y1={end.y + 50} x2={end.x} y2={end.y} stroke="#8f8b83" strokeWidth={2} />
			<line x1={end.x + 40} y1={end.y + 50} x2={end.x} y2={end.y} stroke="#8f8b83" strokeWidth={2} />
			<path d={`M ${end.x - 52} ${end.y + 50} Q ${end.x} ${end.y + 74} ${end.x + 52} ${end.y + 50} Z`} fill="#d3cfc7" stroke="#8f8b83" strokeWidth={2} />
			{side.cards.map((c, i) => {
				const p = landed(c);
				return p > 0 ? <rect key={i} x={end.x - 26 + (i % 2) * 8} y={lerp(end.y - 60, end.y + 38 - i * 11, p)} width={44} height={9} rx={3} fill={col} stroke="rgba(0,0,0,0.2)" opacity={Math.min(1, p * 2)} /> : null;
			})}
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Weighing strengths against limitations to reach a judgement" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{title && <text x={W / 2} y={30} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, title.at)}>{title.text}</text>}
			{/* stand */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={PX} cy={200} rx={60} />
				<rect x={PX - 5} y={PY} width={10} height={72} fill="#8f8b83" />
				<line x1={lEnd.x} y1={lEnd.y} x2={rEnd.x} y2={rEnd.y} stroke="#6f6b63" strokeWidth={7} strokeLinecap="round" />
				<circle cx={PX} cy={PY} r={9} fill="#cfccc5" stroke="#6f6b63" strokeWidth={3} />
				{pan(lEnd, left, theme.accent)}
				{pan(rEnd, right, CORAL)}
			</g>
			{/* side titles */}
			<text x={40} y={212} fill={theme.accent} fontSize={19} fontWeight={800} opacity={fadeAt(frame, left.cards[0]?.at ?? 0)}>{left.title}</text>
			<text x={W - 40} y={212} textAnchor="end" fill={CORAL} fontSize={19} fontWeight={800} opacity={fadeAt(frame, right.cards[0]?.at ?? 0)}>{right.title}</text>
			{column(left, 52, 'start', true)}
			{column(right, W - 52, 'end', false)}
			{verdict && (
				<g opacity={fadeAt(frame, verdict.at)}>
					{wrap(verdict.text, 62).map((ln, k, arr) => (
						<text key={k} x={W / 2} y={H - 14 - (arr.length - 1 - k) * 24} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={0.82 + 0.18 * pulse}>{ln}</text>
					))}
				</g>
			)}
		</svg>
	);
};
