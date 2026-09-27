// FizzBeakersDiagram — acid reaction patterns side by side, told by their gas.
//
// A row of beakers on stone plinths, each one reaction from the props: a
// solid (carbonate chip, metal strip or hydroxide powder) sits in acid, the
// equation is written under it, and on its beat the beaker either fizzes
// (bubbles rise and a gas tag pops out: CO₂ or H₂) or stays calm with a
// "no gas" tag. The gas tag that matters most can be amber.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Beaker, Pill, clamp, fadeAt, hash01, popAt} from './shared';

export type FizzBeaker = {
	title: string;
	/** Equation lines under the beaker. */
	lines: string[];
	solid?: 'chip' | 'metal' | 'powder' | 'none';
	solidLabel?: string;
	gas?: string | null;
	gasNote?: string;
	amber?: boolean;
	at: number;
	gasAt?: number;
};
export type FizzBeakersProps = {beakers: FizzBeaker[]; footer?: {text: string; at: number}; delay?: number};

const ID = 'c12m6fizz';
const W = 760;
const H = 530;

export const FizzBeakersDiagram = ({beakers, footer, delay = 62}: FizzBeakersProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = beakers.length;
	const colW = W / n;
	const baseY = 300;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Acid reaction patterns and the gas each gives" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{beakers.map((b, i) => {
				const cx = colW * (i + 0.5);
				const on = fadeAt(frame, b.at, 14);
				const gasAt = b.gasAt ?? b.at + 40;
				const fizz = b.gas ? interpolate(frame, [gasAt, gasAt + 20], [0, 1], clamp) : 0;
				const tag = popAt(frame, fps, gasAt + 16);
				const bw = Math.min(170, colW - 60), bh = 170;
				const solidY = baseY - 18;
				return (
					<g key={i} opacity={on}>
						<text x={cx} y={34} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{b.title}</text>
						<DioramaPlinth id={`${ID}${i}`} cx={cx} cy={baseY + 14} rx={bw * 0.66} />
						<Beaker cx={cx} baseY={baseY} w={bw} h={bh} level={0.66} liquid="rgba(150,190,225,0.28)">
							{b.solid === 'chip' && <path d={`M ${cx - 26} ${solidY + 10} L ${cx - 18} ${solidY - 10} L ${cx + 8} ${solidY - 14} L ${cx + 26} ${solidY + 2} L ${cx + 18} ${solidY + 12} Z`} fill="#f1efe8" stroke="#b7b2a6" strokeWidth={2} />}
							{b.solid === 'metal' && <rect x={cx - 8} y={solidY - 60} width={16} height={72} rx={3} fill="#b9c2bd" stroke="#7d8680" strokeWidth={2} />}
							{b.solid === 'powder' && <ellipse cx={cx} cy={solidY + 8} rx={36} ry={9} fill="#f4f4f0" stroke="#c9c5bb" strokeWidth={2} />}
							{b.solidLabel && <text x={cx + (b.solid === 'metal' ? 20 : 0)} y={b.solid === 'metal' ? solidY - 30 : solidY + 34} textAnchor={b.solid === 'metal' ? 'start' : 'middle'} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{b.solidLabel}</text>}
							{fizz > 0 && Array.from({length: 12}, (_, k) => {
								const period = 34 + hash01(k * 3 + i) * 20;
								const u = (((frame - gasAt) / period + hash01(k * 7 + i)) % 1 + 1) % 1;
								const x = cx + (hash01(k * 11 + i) - 0.5) * (b.solid === 'metal' ? 30 : 60) + Math.sin(u * 7 + k) * 4;
								const y = solidY - 8 - u * (bh * 0.6);
								return <circle key={k} cx={x} cy={y} r={3 + u * 4} fill="rgba(255,255,255,0.75)" stroke="rgba(70,90,110,0.55)" strokeWidth={1.4} opacity={fizz * (1 - u * 0.6)} />;
							})}
						</Beaker>
						{/* gas tag */}
						{b.gas ? (
							<g transform={`translate(${cx},${baseY - bh - 30 + idleBob(frame, i, 2)}) scale(${Math.min(1, tag)})`}>
								<Pill x={0} y={0} text={`${b.gas} gas`} color={b.amber ? TOK.amberInk : theme.accent} fill={b.amber ? '#fff6e6' : '#ffffff'} size={19} strokeWidth={b.amber ? 2.5 + idlePulse(frame) : 2.5} />
							</g>
						) : (
							<g opacity={fadeAt(frame, gasAt + 10)}>
								<Pill x={cx} y={baseY - bh - 30} text="no gas" color={TOK.inkMute} size={18} />
							</g>
						)}
						{b.gasNote && (
							<text x={cx} y={baseY - bh - 60} textAnchor="middle" fill={b.amber ? TOK.amberInk : TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, gasAt + 30)}>{b.gasNote}</text>
						)}
						{b.lines.map((ln, k) => (
							<text key={k} x={cx} y={baseY + 80 + k * 26} textAnchor="middle" fill={k === 0 ? TOK.ink : TOK.inkDim} fontSize={k === 0 ? 18 : 17} fontWeight={800} opacity={fadeAt(frame, b.at + 10 + k * 10)}>{ln}</text>
						))}
					</g>
				);
			})}
			{footer && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
			)}
		</svg>
	);
};
