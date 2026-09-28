// SorterDiagram — sort things onto labelled stone plinths.
//
// A question (or a row of criteria chips) sits at the top; each item drops in
// on its beat and stacks on its bin's plinth, so the classification builds up
// in the order the narration names things. One item can be the amber trap,
// and footer lines carry the one-sentence reasons. All text from props.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {BLUE, fadeAt, popAt, textWidth} from './shared';

export type SortBin = {title: string; sub?: string; tone?: 'accent' | 'blue' | 'grey'};
export type SortItem = {text: string; bin: number; at: number; amber?: boolean};
export type SorterProps = {
	question?: {text: string; at: number};
	criteria?: {text: string; at: number}[];
	bins: SortBin[];
	items: SortItem[];
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'c12m6sort';
const W = 760;
const H = 530;

export const SorterDiagram = ({question, criteria, bins, items, footer = [], delay = 62}: SorterProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = bins.length;
	const colW = (W - 20) / n;
	const plinthY = footer.length > 1 ? 318 : 334;
	const toneColor = (t?: string) => (t === 'blue' ? BLUE : t === 'grey' ? TOK.inkMute : theme.accent);
	const perBin = bins.map(() => 0);
	const maxPer = Math.max(...bins.map((_, b) => items.filter((it) => it.bin === b).length));
	const step = Math.min(42, (plinthY - 100) / Math.max(1, maxPer));
	const size = n >= 3 ? 18 : 19;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Sorting into groups" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{question && (
				<g opacity={fadeAt(frame, question.at)}>
					<rect x={W / 2 - textWidth(question.text, 22) / 2 - 22} y={16} width={textWidth(question.text, 22) + 44} height={46} rx={23} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame)} />
					<text x={W / 2} y={47} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{question.text}</text>
				</g>
			)}
			{criteria && (() => {
				const ws = criteria.map((c) => textWidth(c.text, 16) + 26);
				const total = ws.reduce((s, w) => s + w, 0) + (criteria.length - 1) * 10;
				let x = W / 2 - total / 2;
				return criteria.map((c, i) => {
					const cx = x + ws[i] / 2;
					x += ws[i] + 10;
					const p = popAt(frame, fps, c.at);
					return (
						<g key={i} transform={`translate(${cx},38) scale(${Math.min(1, p)})`}>
							<rect x={-ws[i] / 2} y={-16} width={ws[i]} height={32} rx={16} fill={theme.accent} opacity={0.12} stroke={theme.accent} strokeWidth={2} />
							<text y={6} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>{c.text}</text>
						</g>
					);
				});
			})()}
			{bins.map((b, i) => {
				const cx = 10 + colW * (i + 0.5);
				const c = toneColor(b.tone);
				return (
					<g key={i} opacity={fadeAt(frame, 0, 14)}>
						<DioramaPlinth id={`${ID}${i}`} cx={cx} cy={plinthY} rx={Math.min(160, colW / 2 - 14)} />
						<text x={cx} y={plinthY + 112} textAnchor="middle" fill={c} fontSize={20} fontWeight={800}>{b.title}</text>
						{b.sub && <text x={cx} y={plinthY + 136} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{b.sub}</text>}
					</g>
				);
			})}
			{items.map((it, k) => {
				const slot = perBin[it.bin]++;
				const p = popAt(frame, fps, it.at);
				if (p <= 0) return null;
				const cx = 10 + colW * (it.bin + 0.5);
				const yRest = plinthY - 20 - slot * step;
				const y = yRest - (1 - Math.min(1, p)) * 80 + idleBob(frame, k, 1.2);
				const w = textWidth(it.text, size) + 28;
				const c = it.amber ? TOK.amber : toneColor(bins[it.bin].tone);
				return (
					<g key={k} opacity={Math.min(1, p * 1.5)}>
						<rect x={cx - w / 2} y={y - 17} width={w} height={34} rx={10} fill={it.amber ? '#fff6e6' : '#ffffff'} stroke={c} strokeWidth={it.amber ? 2.5 + idlePulse(frame) : 2} />
						<rect x={cx - w / 2 + 4} y={y + 13} width={w - 8} height={4} rx={2} fill="rgba(0,0,0,0.08)" />
						<text x={cx} y={y + 6} textAnchor="middle" fill={it.amber ? TOK.amberInk : TOK.ink} fontSize={size} fontWeight={800}>{it.text}</text>
					</g>
				);
			})}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 12 - (footer.length - 1 - i) * 26} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
		</svg>
	);
};
