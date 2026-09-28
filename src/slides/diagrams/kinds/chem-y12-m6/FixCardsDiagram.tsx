// FixCardsDiagram — common errors, each struck out and fixed on its beat.
//
// Cards stand on small stone ledges in a grid. Each shows the error in amber;
// when the narration fixes it, a line strikes the error through and the
// correct version slides in beneath with a green tick. At the end the ticks
// pulse together as a checklist. All text from props.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, idlePulse} from '../../diorama';
import {ease, fadeAt, popAt, textWidth} from './shared';

export type FixCard = {title: string; wrong: string; right: string; at: number; fixAt: number};
export type FixCardsProps = {cards: FixCard[]; checklistAt?: number; delay?: number};

const ID = 'c12m6fix';
const W = 760;
const H = 530;
const GOOD = '#2f9a5a';

export const FixCardsDiagram = ({cards, checklistAt, delay = 62}: FixCardsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const cols = 2;
	const cw = 350, ch = 200;
	const all = checklistAt !== undefined ? fadeAt(frame, checklistAt) : 0;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Four common errors and their fixes" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{cards.map((c, i) => {
				const x = 22 + (i % cols) * (cw + 16), y = 14 + Math.floor(i / cols) * (ch + 58);
				const p = popAt(frame, fps, c.at);
				if (p <= 0) return null;
				const strike = ease(frame, c.fixAt, c.fixAt + 16);
				const fix = ease(frame, c.fixAt + 10, c.fixAt + 30);
				const ww = Math.min(cw - 50, textWidth(c.wrong, 21));
				const pulse = all > 0 ? idlePulse(frame) : 0;
				return (
					<g key={i} transform={`translate(${x + cw / 2},${y + ch / 2}) scale(${Math.min(1, p)}) translate(${-(x + cw / 2)},${-(y + ch / 2)})`}>
						<rect x={x - 6} y={y + ch - 6} width={cw + 12} height={18} rx={7} fill="#bdb8ae" />
						<rect x={x - 6} y={y + ch + 6} width={cw + 12} height={9} rx={4} fill="#8f8b83" />
						<rect x={x} y={y} width={cw} height={ch} rx={14} fill="#ffffff" stroke={fix > 0.5 ? GOOD : 'rgba(0,0,0,0.12)'} strokeWidth={fix > 0.5 ? 2.5 + pulse * 1.5 : 1.5} />
						<text x={x + 20} y={y + 34} fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.04em">{c.title}</text>
						<text x={x + 20} y={y + 82} fill={TOK.amberInk} fontSize={21} fontWeight={800} opacity={1 - 0.45 * strike}>✗ {c.wrong}</text>
						<line x1={x + 18} y1={y + 75} x2={x + 18 + (ww + 30) * strike} y2={y + 75} stroke={TOK.amberInk} strokeWidth={3} strokeLinecap="round" />
						<g opacity={fix} transform={`translate(${(1 - fix) * 20},0)`}>
							{c.right.split('\n').map((ln, k) => (
								<text key={k} x={x + 20} y={y + 128 + k * 28} fill={GOOD} fontSize={21} fontWeight={800}>{k === 0 ? '✓ ' : '   '}{ln}</text>
							))}
						</g>
					</g>
				);
			})}
		</svg>
	);
};
