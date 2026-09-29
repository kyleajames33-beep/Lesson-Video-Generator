// SorterDiagram (bio12m7Sorter) — sort things onto labelled stone plinths.
//
// Like chem12m6Sorter, but each item can carry a glossy icon (virus, bacterium,
// mosquito, …), so a classification is seen as well as read. Items drop onto
// their bin's plinth on their narration beat and stack; an optional question
// chip (the scene's test) and footer lines carry the takeaway. All text from
// props; nothing is computed.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Title, W, fadeAt, popAt, textWidth} from './shared';
import {Icon, type IconName, type IconOpts} from './icons';

export type SortBin = {title: string; sub?: string; tone?: 'accent' | 'grey' | 'warm'};
export type SortItem = {text: string; bin: number; at: number; icon?: IconName; iconOpts?: IconOpts; amber?: boolean};
export type SorterProps = {
	title?: string;
	question?: {text: string; at: number};
	bins: SortBin[];
	items: SortItem[];
	footer?: {text: string; at: number; amber?: boolean}[];
	size?: number;
	delay?: number;
};

const ID = 'b12m7sort';

export const SorterDiagram = ({title, question, bins, items, footer = [], size: sizeProp, delay = 62}: SorterProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = bins.length;
	const colW = (W - 20) / n;
	const top = title || question ? 84 : 30;
	const rx = Math.min(150, colW / 2 - 12);
	const hasSub = bins.some((b) => b.sub);
	const plinthY = H - 0.54 * rx - (hasSub ? 50 : 30) - footer.length * 26 - 10;
	const toneColor = (t?: string) => (t === 'grey' ? TOK.inkDim : t === 'warm' ? '#b5562e' : theme.accent);
	const perBin = bins.map(() => 0);
	const maxPer = Math.max(1, ...bins.map((_, b) => items.filter((it) => it.bin === b).length));
	const step = Math.min(64, (plinthY - top - 20) / maxPer);
	const size = sizeProp ?? (n >= 3 ? 18 : 22);
	const chipH = Math.min(52, step - 8);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Sorting into groups'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{question && (
				<g opacity={fadeAt(frame, question.at)}>
					<rect x={W / 2 - textWidth(question.text, 21) / 2 - 22} y={title ? 46 : 12} width={textWidth(question.text, 21) + 44} height={42} rx={21} fill="#fff6e6" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
					<text x={W / 2} y={(title ? 46 : 12) + 28} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>{question.text}</text>
				</g>
			)}
			{bins.map((b, i) => {
				const cx = 10 + colW * (i + 0.5);
				const c = toneColor(b.tone);
				return (
					<g key={i} opacity={fadeAt(frame, 0, 14)}>
						<DioramaPlinth id={`${ID}${i}`} cx={cx} cy={plinthY} rx={rx} />
						<text x={cx} y={plinthY + 0.54 * rx + 24} textAnchor="middle" fill={c} fontSize={20} fontWeight={800}>{b.title}</text>
						{b.sub && <text x={cx} y={plinthY + 0.54 * rx + 44} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{b.sub}</text>}
					</g>
				);
			})}
			{items.map((it, k) => {
				const slot = perBin[it.bin]++;
				const p = popAt(frame, fps, it.at);
				if (p <= 0) return null;
				const cx = 10 + colW * (it.bin + 0.5);
				const yRest = plinthY - 14 - chipH / 2 - slot * step;
				const y = yRest - (1 - Math.min(1, p)) * 70 + idleBob(frame, k, 1.1);
				const iconW = it.icon ? chipH + 2 : 0;
				const fs = Math.min(size, (colW - 14 - 24 - iconW) / textWidth(it.text, 1));
				const w = textWidth(it.text, fs) + 24 + iconW;
				const c = it.amber ? TOK.amber : toneColor(bins[it.bin].tone);
				const x0 = cx - w / 2;
				return (
					<g key={k} opacity={Math.min(1, p * 1.5)}>
						<rect x={x0} y={y - chipH / 2} width={w} height={chipH} rx={10} fill={it.amber ? '#fff6e6' : '#ffffff'} stroke={c} strokeWidth={it.amber ? 2.5 + idlePulse(frame) : 2} />
						<rect x={x0 + 4} y={y + chipH / 2 - 4} width={w - 8} height={4} rx={2} fill="rgba(0,0,0,0.07)" />
						{it.icon && <Icon id={ID} name={it.icon} x={x0 + 8 + chipH / 2} y={y - 1} s={(chipH - 4) / 80} frame={frame} opts={it.iconOpts} />}
						<text x={x0 + 12 + iconW + (w - 24 - iconW) / 2} y={y + fs * 0.36} textAnchor="middle" fill={it.amber ? TOK.amberInk : TOK.ink} fontSize={fs} fontWeight={800}>{it.text}</text>
					</g>
				);
			})}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 10 - (footer.length - 1 - i) * 26} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
		</svg>
	);
};
