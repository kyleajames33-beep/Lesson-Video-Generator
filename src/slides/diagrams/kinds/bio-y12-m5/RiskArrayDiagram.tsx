// RiskArrayDiagram — a group trend is reliable; one person's outcome is not.
//
// A row of people who all carry the same risk variant stands on a stone ledge.
// The group statistic (from props, e.g. this lesson's "roughly 70%" lifetime
// risk for a harmful BRCA1 variant → 7 of 10) is shown as a count that is
// computed from `affected / total`. But the figures are anonymous: while the
// narration says we can't predict one particular person, the highlight hops
// from figure to figure with a "?" — the data can't say WHICH ones. Then the
// other influences (environment, other genes, chance) and the scope rule.
//
// Props: `total`, `affected`, `source`, `at`.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {CORAL, GlossDefs, Ledge, Pill, fadeAt, popAt} from './shared';

export type RiskArrayProps = {
	total?: number;
	affected?: number;
	group?: string;
	outcome?: string;
	source?: string;
	at?: {group?: number; trend?: number; one?: number; factors?: number; probability?: number; rule?: number};
	delay?: number;
};

const ID = 'b12m5risk';
const W = 760, H = 530;

const Person = ({x, y, color, frame, seed, s = 1}: {x: number; y: number; color: string; frame: number; seed: number; s?: number}) => (
	<g transform={`translate(${x},${y + idleBob(frame, seed, 1)}) scale(${s})`}>
		<rect x={-14} y={-20} width={28} height={46} rx={13} fill={`url(#${ID}-r-${color})`} stroke="rgba(0,0,0,0.2)" />
		<circle cx={0} cy={-34} r={12} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.2)" />
	</g>
);

export const RiskArrayDiagram = ({total = 10, affected = 7, group = 'carry a harmful BRCA1 variant', outcome = 'develop breast cancer over a lifetime', source = "this lesson's BRCA1 example: roughly 70%", at = {}, delay = 62}: RiskArrayProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tGroup = at.group ?? 20, tTrend = at.trend ?? 200, tOne = at.one ?? 400, tFac = at.factors ?? 550, tProb = at.probability ?? 700, tRule = at.rule ?? 900;
	const xs = Array.from({length: total}, (_, k) => 380 + (k - (total - 1) / 2) * 64);
	const Y = 250;
	const pct = Math.round((100 * affected) / total);
	const hop = frame > tOne ? Math.floor((frame - tOne) / 26) % total : -1;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Population data predicts group risk, not which individual will be affected" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{p: '#b9c2cc', pa: CORAL}} />
			<text x={380} y={50} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tGroup)}>{total} people who all {group}</text>
			<Ledge x={30} y={Y + 32} w={700} opacity={fadeAt(frame, tGroup)} />
			{xs.map((x, k) => (
				<g key={k} opacity={popAt(frame, fps, tGroup + k * 4)}>
					<Person x={x} y={Y} color="p" frame={frame} seed={k} />
					{hop === k && (
						<g>
							<circle cx={x} cy={Y - 76} r={16} fill="#ffffff" stroke={TOK.amber} strokeWidth={3} />
							<text x={x} y={Y - 70} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>?</text>
						</g>
					)}
				</g>
			))}
			{/* the group trend, as a tally that is not attached to anyone in particular */}
			<g opacity={fadeAt(frame, tTrend)}>
				<rect x={380 - 260} y={342} width={520} height={24} rx={12} fill="#eeece7" />
				<rect x={380 - 260} y={342} width={(520 * affected) / total} height={24} rx={12} fill={`url(#${ID}-r-pa)`} />
				<text x={380} y={330} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>about {affected} in {total} {outcome}</text>
				<text x={380} y={394} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{source} ({pct}%)</text>
			</g>
			<g opacity={fadeAt(frame, tOne)}>
				<text x={380} y={106} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>reliable for the group · unknown for any one person</text>
			</g>
			<g opacity={popAt(frame, fps, tFac)}>
				<Pill x={380} y={430} text="environment · lifestyle · other genes · chance" color={theme.accent} fill={theme.soft} size={15} />
			</g>
			<g opacity={fadeAt(frame, tProb)}>
				<text x={380} y={470} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>a risk variant raises probability; it doesn't guarantee</text>
			</g>
			<text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tRule)}>
				<tspan opacity={0.9 + idlePulse(frame) * 0.1}>match the scope of the claim to the scope of the data</tspan>
			</text>
		</svg>
	);
};
