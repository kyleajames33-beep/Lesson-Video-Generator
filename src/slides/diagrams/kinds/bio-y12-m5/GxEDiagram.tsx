// GxEDiagram — same genotype, different environment, different phenotype.
//
// Two figures on stone plinths carry the same genotype card. A dashed line
// marks the height their genes allow (the "potential"). Growing up well
// nourished, one reaches it; poorly nourished, the other stops short. The
// genotype cards never change (they pulse "unchanged" at the end): the
// environment changes how the trait is expressed, not the DNA. No heights are
// given in the scene, so none are printed: only the potential line and the gap.
//
// Props: `envs` [label, label], `trait`, `at`.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CORAL, GlossDefs, Pill, ease, fadeAt, lerp} from './shared';

export type GxEProps = {
	envs?: [string, string];
	shortfall?: number; // fraction of potential reached by the second figure (schematic)
	at?: {genes?: number; potential?: number; env?: number; grow?: number; interaction?: number; dna?: number; rule?: number};
	delay?: number;
};

const ID = 'b12m5gxe';
const W = 760, H = 530;
const BASE = 380, FULL = 250;

const Figure = ({x, h, frame, seed, color}: {x: number; h: number; frame: number; seed: number; color: string}) => {
	const head = h * 0.12;
	const top = BASE - h;
	const sway = idleBob(frame, seed, 0.8);
	return (
		<g transform={`translate(${sway},0)`}>
			<rect x={x - h * 0.12} y={top + head * 2 + 2} width={h * 0.24} height={h - head * 2 - 2} rx={h * 0.11} fill={`url(#${ID}-r-${color})`} stroke="rgba(0,0,0,0.2)" />
			<circle cx={x} cy={top + head} r={head} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.2)" />
		</g>
	);
};

export const GxEDiagram = ({envs = ['well nourished', 'poorly nourished'], shortfall = 0.78, at = {}, delay = 62}: GxEProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const tGenes = at.genes ?? 20, tPot = at.potential ?? 120, tEnv = at.env ?? 220, tGrow = at.grow ?? 300, tInt = at.interaction ?? 600, tDna = at.dna ?? 800, tRule = at.rule ?? 900;
	const grow = ease(frame, tGrow, tGrow + 120);
	const xs = [230, 530];
	const heights = [FULL, FULL * shortfall].map((hh) => lerp(FULL * 0.45, hh, grow));
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Same genotype, different environments, different adult height" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{fig: theme.accent, fig2: CORAL}} />
			{/* potential line */}
			<g opacity={fadeAt(frame, tPot)}>
				<line x1={110} y1={BASE - FULL} x2={650} y2={BASE - FULL} stroke={TOK.inkDim} strokeWidth={2.5} strokeDasharray="8 7" />
				<text x={654} y={BASE - FULL - 10} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>genetic potential</text>
			</g>
			{xs.map((x, i) => (
				<g key={i} opacity={fadeAt(frame, i * 8)}>
					<DioramaPlinth id={`${ID}${i}`} cx={x} cy={BASE} rx={110}>
						<Figure x={x} h={heights[i]} frame={frame} seed={i} color={i === 0 ? 'fig' : 'fig2'} />
					</DioramaPlinth>
					{/* genotype card */}
					<g opacity={fadeAt(frame, tGenes)}>
						<Pill x={x} y={BASE + 70} text="same genotype" color={theme.accent} fill={theme.soft} size={15} strokeWidth={2 + (frame > tDna ? idlePulse(frame) * 1.5 : 0)} />
					</g>
					<g opacity={fadeAt(frame, tEnv + i * 20)}>
						<text x={x} y={BASE + 112} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{envs[i]}</text>
					</g>
				</g>
			))}
			{/* the gap */}
			<g opacity={fadeAt(frame, tGrow + 130)}>
				<line x1={xs[1] + 40} y1={BASE - FULL} x2={xs[1] + 40} y2={BASE - heights[1]} stroke={TOK.amber} strokeWidth={3} />
				<text x={xs[1] + 50} y={BASE - (FULL + heights[1]) / 2 + 6} fill={TOK.amberInk} fontSize={16} fontWeight={800}>not reached</text>
			</g>
			<text x={380} y={60} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, tInt)}>phenotype: genotype and environment together</text>
			<text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>the DNA sequence is unchanged; the outcome differs</text>
		</svg>
	);
};
