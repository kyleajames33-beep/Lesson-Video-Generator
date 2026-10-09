// ForkDiagram: replication fork, primer replacement, then nick sealing.
//
// Geometry (fork opening to the right; the unopened duplex is on the right):
//   top template     3′ (left) … 5′ (duplex)   → its new strand is built
//                    5′→3′ rightwards, TOWARD the fork, continuously, from
//                    one primer: the leading strand.
//   bottom template  5′ (left) … 3′ (duplex)   → its new strand must be built
//                    5′→3′ leftwards, AWAY from the fork, so it is made in
//                    short Okazaki fragments, each starting from its own
//                    primer; ligase then joins them: the lagging strand.
// Both new strands are built 5′→3′; only the lagging strand is in pieces.
// Colours: templates slate, new DNA in the accent, primers coral; the ligase
// joins are the one amber thing.
//
// Props: `at` (frames after `delay`): fork / direction / opposite / leading /
// lagging / fragments / primers / ligase / rule.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {Arrow, CORAL, GlossDefs, Ledge, Pill, SLATE, ease, fadeAt, lerp, popAt} from './shared';
import {forkProcessingTimes} from '../../scientific-models.mjs';

export type ForkProps = {
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5fork';
const W = 760, H = 530;
const YT = 150, YB = 372; // template arms
const XL = 50, XA = 420; // arms run from XL to XA, then converge on the fork
const FORK = {x: 516, y: 261};
const YD1 = 245, YD2 = 277; // unopened duplex strands
const NEW_T = YT + 30, NEW_B = YB - 30; // new strands sit just inside the arms
// Lagging fragments (x ranges), oldest (farthest from the fork) first.
const FRAGS = [
	{x0: 70, x1: 176},
	{x0: 190, x1: 296},
	{x0: 310, x1: 410},
];

const Tube = ({d, color, w = 9, opacity = 1}: {d: string; color: string; w?: number; opacity?: number}) => (
	<g opacity={opacity}>
		<path d={d} fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth={w + 3} strokeLinecap="round" strokeLinejoin="round" />
		<path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
		<path d={d} fill="none" stroke="#ffffff" strokeOpacity={0.35} strokeWidth={w * 0.3} strokeLinecap="round" transform="translate(0,-2)" />
	</g>
);

export const ForkDiagram = ({at = {}, delay = 62}: ForkProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tFork = at.fork ?? 20, tDir = at.direction ?? 120, tOpp = at.opposite ?? 200, tLead = at.leading ?? 300, tLag = at.lagging ?? 500, tFrag = at.fragments ?? 640, tPrim = at.primers ?? 700;
	const stages = forkProcessingTimes(at);
	const tProcessing = stages.replace, tLig = stages.seal, tRule = stages.rule;

	const lead = ease(frame, tLead - 40, tLead + 140); // leading strand growth (toward the fork)
	const fragT = (k: number) => ease(frame, tLag + k * 70, tLag + k * 70 + 60);
	const ligate = ease(frame, tLig, tLig + 40);
	const replacement = ease(frame, tProcessing, tProcessing + 40);

	const topArm = `M ${XL} ${YT} L ${XA} ${YT} Q ${XA + 60} ${YT} ${FORK.x - 10} ${YD1}`;
	const botArm = `M ${XL} ${YB} L ${XA} ${YB} Q ${XA + 60} ${YB} ${FORK.x - 10} ${YD2}`;
	const leadX1 = lerp(90, XA - 6, lead);
	const polymerase = (x: number, y: number, show: number) => (
		<g opacity={show}>
			<ellipse cx={x} cy={y} rx={17} ry={14} fill={`url(#${ID}-g-pol)`} stroke="rgba(0,0,0,0.25)" />
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Replication fork: leading strand built continuously toward the fork, lagging strand built away from the fork in Okazaki fragments joined by ligase" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<text x={W / 2} y={24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>Simplified fork model; proofreading and repair omitted</text>
			<GlossDefs id={ID} colors={{pol: '#9aa7b4', heli: '#c9a24a'}} />
			<Ledge x={30} y={470} w={700} opacity={fadeAt(frame, 0)} />

			{/* Templates + unopened duplex */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<Tube d={topArm} color={SLATE} />
				<Tube d={botArm} color={SLATE} />
				<Tube d={`M ${FORK.x - 12} ${YD1} L ${W - 30} ${YD1}`} color={SLATE} />
				<Tube d={`M ${FORK.x - 12} ${YD2} L ${W - 30} ${YD2}`} color={SLATE} />
				{Array.from({length: 7}, (_, k) => (
					<line key={k} x1={FORK.x + 22 + k * 30} y1={YD1 + 6} x2={FORK.x + 22 + k * 30} y2={YD2 - 6} stroke="#9a948a" strokeWidth={3} />
				))}
				{Array.from({length: 12}, (_, k) => (
					<g key={k}>
						<line x1={XL + 16 + k * 30} y1={YT + 6} x2={XL + 16 + k * 30} y2={YT + 16} stroke="#9a948a" strokeWidth={3} />
						<line x1={XL + 16 + k * 30} y1={YB - 6} x2={XL + 16 + k * 30} y2={YB - 16} stroke="#9a948a" strokeWidth={3} />
					</g>
				))}
			</g>
			{/* template polarity */}
			<g opacity={fadeAt(frame, tOpp)}>
				<text x={XL - 16} y={YT + 6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>3′</text>
				<text x={W - 16} y={YD1 + 6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>5′</text>
				<text x={XL - 16} y={YB + 6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>5′</text>
				<text x={W - 16} y={YD2 + 6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>3′</text>
				<text x={235} y={YT - 22} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>template strands point opposite ways</text>
			</g>

			{/* Helicase at the fork */}
			<g opacity={popAt(frame, fps, tFork)}>
				<circle cx={FORK.x} cy={FORK.y} r={24} fill={`url(#${ID}-g-heli)`} stroke="rgba(0,0,0,0.25)" />
				<circle cx={FORK.x} cy={FORK.y} r={9} fill="#f7f7f5" />
				<text x={FORK.x + 36} y={FORK.y + 64} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>helicase</text>
				<Arrow x1={FORK.x + 40} y1={FORK.y + 40} x2={FORK.x + 110} y2={FORK.y + 40} color={TOK.inkMute} width={2.5} head={9} t={ease(frame, tFork + 10, tFork + 40)} />
				<text x={FORK.x + 150} y={FORK.y + 46} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>fork opens</text>
			</g>

			{/* Leading strand: one primer, continuous, toward the fork */}
			<g opacity={fadeAt(frame, tLead - 40)}>
				<Tube d={`M 90 ${NEW_T} L ${leadX1} ${NEW_T}`} color={theme.accent} w={8} />
				<Tube d={`M 66 ${NEW_T} L 90 ${NEW_T}`} color={CORAL} w={8} opacity={1 - replacement} />
				<Tube d={`M 66 ${NEW_T} L 90 ${NEW_T}`} color={theme.accent} w={8} opacity={replacement} />
				{polymerase(leadX1 + 14, NEW_T, lead < 1 ? 1 : 1 - fadeAt(frame, tLead + 160))}
				<Arrow x1={leadX1 - 60} y1={NEW_T + 26} x2={leadX1 - 4} y2={NEW_T + 26} color={theme.accent} width={3} head={10} t={lead > 0.3 ? 1 : 0} />
				<text x={90} y={NEW_T + 30} fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tLead)}>5′→3′</text>
			</g>
			<g opacity={fadeAt(frame, tLead)}>
				<Pill x={240} y={NEW_T + 62} text="leading strand: continuous, toward the fork" color={theme.accent} fill={theme.soft} size={15} />
			</g>

			{/* Lagging strand: fragments built away from the fork, each from its own primer */}
			{FRAGS.map((f, k) => {
				const t = fragT(k);
				if (t <= 0) return null;
				const x0 = lerp(f.x1 - 20, f.x0, t);
				return (
					<g key={k}>
						<Tube d={`M ${f.x1 - 20} ${NEW_B} L ${x0} ${NEW_B}`} color={theme.accent} w={8} />
						<Tube d={`M ${f.x1} ${NEW_B} L ${f.x1 - 20} ${NEW_B}`} color={CORAL} w={8} opacity={1 - replacement} />
						<Tube d={`M ${f.x1} ${NEW_B} L ${f.x1 - 20} ${NEW_B}`} color={theme.accent} w={8} opacity={replacement} />
						{polymerase(x0 - 14, NEW_B, t < 1 ? 1 : 0)}
						<Arrow x1={f.x1 - 20} y1={NEW_B - 24} x2={f.x0 + 10} y2={NEW_B - 24} color={theme.accent} width={2.5} head={9} t={t > 0.5 ? 1 : 0} />
					</g>
				);
			})}
			{/* first fragment's primer labels + fragment name */}
			<g opacity={fadeAt(frame, tFrag)}>
				<Pill x={240} y={NEW_B - 62} text="lagging strand: Okazaki fragments, away from the fork" color={theme.accent} fill={theme.soft} size={15} />
			</g>
			<g opacity={fadeAt(frame, tPrim) * (1 - replacement)}>
				<text x={FRAGS[2].x1 - 10} y={YB + 32} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800}>primer</text>
				<text x={FRAGS[1].x1 - 10} y={YB + 32} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800}>primer</text>
				<text x={FRAGS[0].x1 - 10} y={YB + 32} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800}>primer</text>
			</g>
			<text x={380} y={438} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tProcessing) * (1 - fadeAt(frame, tLig))}>RNA primers removed and replaced with DNA</text>
			{/* Ligase seals remaining nicks after primer replacement. Spacing is schematic. */}
			{FRAGS.slice(0, -1).map((f, k) => {
				const gx = (f.x1 + FRAGS[k + 1].x0) / 2;
				return (
					<g key={k} opacity={ligate}>
						<Tube d={`M ${f.x1 - 2} ${NEW_B} L ${FRAGS[k + 1].x0 + 2} ${NEW_B}`} color={theme.accent} w={8} />
						<circle cx={gx} cy={NEW_B} r={11 + idlePulse(frame, 40) * 3} fill="none" stroke={TOK.amber} strokeWidth={3} />
					</g>
				);
			})}
			<g opacity={fadeAt(frame, tLig + 20)}>
				<text x={(FRAGS[0].x1 + FRAGS[1].x0) / 2} y={YB + 32} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>ligase</text>
				<text x={(FRAGS[1].x1 + FRAGS[2].x0) / 2} y={YB + 32} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>ligase</text>
			</g>

			{/* Polymerase key */}
			<g opacity={fadeAt(frame, tDir)}>
				<ellipse cx={560} cy={120} rx={13} ry={11} fill={`url(#${ID}-g-pol)`} stroke="rgba(0,0,0,0.25)" />
				<text x={582} y={126} fill={TOK.inkDim} fontSize={15} fontWeight={800}>DNA polymerase</text>
				<text x={560} y={150} fill={TOK.inkDim} fontSize={15} fontWeight={800}>builds 5′→3′ only</text>
			</g>

			<g opacity={fadeAt(frame, tRule)}>
				<text x={380} y={510} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>Both built 5′→3′. Only the lagging strand is made in pieces.</text>
			</g>
		</svg>
	);
};
