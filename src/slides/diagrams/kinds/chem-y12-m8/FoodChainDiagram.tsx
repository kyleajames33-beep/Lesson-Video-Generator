// FoodChainDiagram — bioaccumulation vs biomagnification of mercury
// (Chem Y12 M8 L8 concept-biomag).
//
// Top panel, BIOACCUMULATION: the same fish shown three times as it ages; the
// mercury (dark dots) inside it builds up over time, while the water around it
// stays sparse. Bottom panel, BIOMAGNIFICATION: water (low) → plankton → small
// fish → predator on stone plinths; the mercury dots are packed denser at each
// level, and a concentration bar climbs level by level. Amber: the predator's
// high level. No numbers (the scene gives none); dot counts are drawings only.
//
// Beats (frames after `delay`): [bioaccumulation, biomagnification, mercury in
// water, plankton, small fish, predator, concentration climbs, key point]

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Beaker, clamp, ease, pop, ramp} from './shared';
import {Alga, Dot, Fish, Tag, WATER, wander} from './water-parts';

import {validatePriorityScienceDiagram} from '../../priority-science-models.mjs';

export type FoodChainProps = {
	/** Qualitative methylmercury example, with water uptake distinguished. */
	reviewedMethylmercury?: boolean;
	delay?: number;
	/** Frames after `delay`: [bioaccumulation, biomagnification, Hg in water, plankton, small fish, predator, climb, key]. */
	beats?: number[];
	/** Contaminant symbol shown in the legend. */
	contaminant?: string;
};

const ID = 'c12m8food';
const W = 760;
const H = 530;
const DEFAULT_BEATS = [117, 285, 411, 512, 546, 605, 757, 807];

export const FoodChainDiagram = ({delay = 62, beats, contaminant = 'Hg', reviewedMethylmercury = false}: FoodChainProps) => {
	validatePriorityScienceDiagram({type: 'diorama', kind: 'chem12m8FoodChain', props: {reviewedMethylmercury, contaminant}});
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const [tAcc, tMag, tHg, tPlank, tSmall, tPred, tClimb, tKey] = beats && beats.length >= 8 ? beats : DEFAULT_BEATS;
	const key = ramp(frame, tKey, 16);

	// ── top: one organism over time ──
	const ages = [
		{x: 170, s: 1.45, dots: 3},
		{x: 385, s: 1.6, dots: 8},
		{x: 600, s: 1.75, dots: 15},
	];

	// ── bottom: food chain ──
	const PY = 442;
	const stages = [
		{x: 100, label: 'Water', t: tHg, bar: 0.1},
		{x: 280, label: 'Plankton', t: tPlank, bar: 0.3},
		{x: 462, label: 'Small fish', t: tSmall, bar: 0.58},
		{x: 650, label: 'Predator', t: tPred, bar: 1},
	];
	const climb = (i: number) => ease(interpolate(frame, [tClimb + i * 14, tClimb + i * 14 + 30], [0, 1], clamp));
	const BAR_B = 334, BAR_H = 56;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={reviewedMethylmercury ? "Qualitative methylmercury example. Accumulation within one organism is distinct from uptake from water and dietary transfer between trophic levels. Water is not a trophic level; dots and bars are not measurements." : `Bioaccumulation: ${contaminant} builds up in one fish over time. Biomagnification: its concentration rises from water to plankton to small fish to predator.`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />

			{/* legend */}
			<g opacity={ramp(frame, 0)}>
				<Dot x={640} y={26} r={6} color={WATER.mercury} />
				<text x={654} y={33} fill={TOK.ink} fontSize={19} fontWeight={800}>= {contaminant}</text>
			</g>

			{/* ─ BIOACCUMULATION ─ */}
			<g opacity={ramp(frame, tAcc - 10, 16)}>
				<text x={30} y={32} fill={theme.accent} fontSize={23} fontWeight={800}>Bioaccumulation</text>
				<text x={30} y={57} fill={TOK.inkDim} fontSize={18} fontWeight={700}>builds up within one organism over time</text>
				<rect x={30} y={72} width={700} height={104} rx={16} fill="rgba(140,200,234,0.32)" stroke="rgba(79,151,198,0.35)" strokeWidth={2} />
				{Array.from({length: 5}, (_, i) => {
					const w = wander(i, frame, 44, 716, 82, 166, 0.5, 3);
					return <Dot key={i} x={w.x} y={w.y} r={4} color={WATER.mercury} opacity={0.8} />;
				})}
				{ages.map((a, i) => {
					const on = Math.min(1, pop(frame, fps, tAcc + i * 45));
					const shown = Math.round(a.dots * ramp(frame, tAcc + i * 45 + 6, 30));
					return (
						<g key={i} opacity={on}>
							<Fish x={a.x + idleBob(frame, i, 2)} y={124 + idleBob(frame, i + 3, 2)} s={a.s} dir={1} color={WATER.fish2} dots={shown} dotSeed={7} />
							{i < 2 && <Arrow x1={a.x + 64} y1={124} x2={ages[i + 1].x - 64} y2={124} color={TOK.inkMute} width={3} head={10} progress={ramp(frame, tAcc + i * 45 + 30, 16)} />}
						</g>
					);
				})}
				<text x={W / 2} y={198} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={ramp(frame, tAcc + 90, 16)}>
					{reviewedMethylmercury ? 'Illustrative build-up when uptake exceeds elimination' : <>the same fish, older → more {contaminant} inside</>}
				</text>
			</g>

			<line x1={30} y1={214} x2={730} y2={214} stroke={TOK.rule} strokeWidth={2} opacity={ramp(frame, tMag - 10, 16)} />

			{/* ─ BIOMAGNIFICATION ─ */}
			<g opacity={ramp(frame, tMag - 10, 16)}>
				<text x={30} y={246} fill={theme.accent} fontSize={23} fontWeight={800}>{reviewedMethylmercury ? 'Uptake and trophic transfer' : 'Biomagnification'}</text>
				<text x={30} y={271} fill={TOK.inkDim} fontSize={18} fontWeight={700}>{reviewedMethylmercury ? 'Schematic MeHg: water uptake, then food-chain transfer' : 'concentration rises at each higher level of a food chain'}</text>
			</g>

			{stages.map((st, i) => {
				const on = Math.min(1, pop(frame, fps, st.t));
				const isPred = i === 3;
				const c = climb(i);
				const barCol = isPred && key > 0.5 ? TOK.amber : theme.accent;
				return (
					<g key={i} opacity={on}>
						{i > 0 && (
							<Arrow x1={stages[i - 1].x + 58} y1={PY - 36} x2={st.x - 60} y2={PY - 36} color={TOK.inkDim} width={3} head={10} progress={ramp(frame, st.t - 6, 14)} />
						)}
						<DioramaPlinth id={`${ID}-p${i}`} cx={st.x} cy={PY} rx={70} />
						{i === 0 && (
							<Beaker cx={st.x} baseY={PY + 6} w={84} h={96} level={0.78}>
								{Array.from({length: 3}, (_, k) => {
									const w = wander(k, frame, st.x - 32, st.x + 32, PY - 60, PY - 4, 0.4, 8);
									return <Dot key={k} x={w.x} y={w.y} r={4} color={WATER.mercury} />;
								})}
							</Beaker>
						)}
						{i === 1 &&
							[{dx: -30, dy: -18}, {dx: 0, dy: -30}, {dx: 28, dy: -16}, {dx: -12, dy: -2}, {dx: 18, dy: 4}].map((p, k) => {
								const x = st.x + p.dx + idleBob(frame, k, 2.5);
								const y = PY - 22 + p.dy + idleBob(frame, k + 7, 2.5);
								return (
									<g key={k}>
										<Alga x={x} y={y} r={12} />
										<Dot x={x + 2} y={y + 2} r={3.4} color={WATER.mercury} />
									</g>
								);
							})}
						{i === 2 && <Fish x={st.x + idleBob(frame, 2, 2)} y={PY - 30} s={1.35} dir={1} color={WATER.fish} dots={9} dotSeed={3} />}
						{isPred && <Fish x={st.x - 4 + idleBob(frame, 3, 1.5)} y={PY - 42} s={2.05} dir={1} color="#6f8796" dots={34} dotSeed={5} />}
						<text x={st.x} y={PY + 60} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>{st.label}</text>

						{/* concentration bar */}
						<g opacity={ramp(frame, tClimb - 10, 14)}>
							<rect x={st.x - 13} y={BAR_B - BAR_H} width={26} height={BAR_H} rx={6} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
							<rect x={st.x - 10} y={BAR_B - 3 - (BAR_H - 6) * st.bar * c} width={20} height={(BAR_H - 6) * st.bar * c} rx={4} fill={barCol} opacity={c > 0 ? 1 : 0} />
						</g>
					</g>
				);
			})}
			<g opacity={ramp(frame, tClimb - 10, 14)}>
				<text x={stages[0].x - 22} y={BAR_B - 18} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={800}>[{contaminant}]</text>
				<text x={stages[0].x + 22} y={BAR_B - 2} fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={ramp(frame, tKey, 16)}>low</text>
			</g>
			<g opacity={key}>
				<Tag x={stages[3].x - 64} y={BAR_B - 30} lines={['high']} color={TOK.amber} textColor={TOK.amberInk} size={19} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
			</g>
		</svg>
	);
};
