// WorkedExampleSlide — gold-standard re-skin (Phase 3, 2026-05-01).
//
// Pattern: docs/design-canvas-reference/animated-scenes-v2.jsx.
// The working is the visual. Steps reveal like a teacher building a board,
// with the final answer and unit check landing as the proof.

import {interpolate, useCurrentFrame} from 'remotion';
import type {LessonData, WorkedExampleScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleMark} from '../animations/DoodlePrimitives';
import {DeltaMathText} from '../animations/FormulaBuild';
import {StampInTitle} from '../animations/MotionPrimitives';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {MathText} from './shared/MathText';
import {calculationStepLabel, getCalculationStepKind} from './shared/calculationSteps';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_MONO, TYPE, TOK} from '../styles/tokens';

type WorkedExampleSlideProps = {
	scene: WorkedExampleScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const WorkedExampleSlide = ({scene, lesson, sceneIndex, totalScenes}: WorkedExampleSlideProps) => {
	const n = scene.steps.length;
	const stepsStart = 116;
	const stepInterval = 86;
	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="WORKED EXAMPLE" sceneType="workedExample" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<div style={{position: 'absolute', top: 142, left: 64, right: 64}}>
				<Eyebrow color={TOK.inkDim}>PROBLEM · {scene.heading.toUpperCase()}</Eyebrow>
				<FadeUp delay={18} durationFrames={14} dy={18}>
					<StampInTitle delay={18} color={TOK.ink} underlineColor={TOK.amber}>
						<div
							style={{
								marginTop: 14,
								fontSize: TYPE.subhead.fontSize,
								fontWeight: TYPE.subhead.fontWeight,
								lineHeight: TYPE.subhead.lineHeight,
								letterSpacing: '-0.025em',
								maxWidth: 1350,
								color: TOK.ink,
							}}
						>
							{scene.question}
						</div>
					</StampInTitle>
				</FadeUp>
				{scene.coachNote ? (
					<FadeUp delay={42} durationFrames={14} dy={14}>
						<div
							style={{
								marginTop: 18,
								display: 'inline-flex',
								alignItems: 'center',
								gap: 14,
								fontSize: TYPE.body.fontSize,
								fontStyle: 'italic',
								fontWeight: TYPE.body.fontWeight,
								color: TOK.inkDim,
							}}
						>
							<span style={{fontFamily: FONT_MONO, fontStyle: 'normal', fontSize: 22}}>→</span>
							<span>{scene.coachNote}</span>
						</div>
					</FadeUp>
				) : null}
			</div>

			<div
				style={{
					position: 'absolute',
					top: 350,
					left: 64,
					right: 64,
					display: 'grid',
					gridTemplateColumns: 'minmax(0, 1fr)',
					gap: 22,
				}}
			>
				<AmbientGlow left="8%" top={300} width="84%" height={520} delay={260} opacity={0.07} speedSeconds={6.8} />
				{scene.steps.map((step, index) => {
					const delay = stepsStart + index * stepInterval;
					const kind = getCalculationStepKind(step, index, n);
					const isFinal = index === n - 1;

					return (
						<WorkedStep
							key={`${index}-${step}`}
							step={step}
							label={calculationStepLabel[kind] ?? `Step ${index + 1}`}
							delay={delay}
							index={index}
							isFinal={isFinal}
							unitCancel={isFinal ? scene.unitCancel : undefined}
						/>
					);
				})}
			</div>
		</SlideFrame>
	);
};

const WorkedStep = ({
	step,
	prevRest,
	label,
	delay,
	index,
	isFinal,
	unitCancel,
}: {
	step: string;
	prevRest?: string;
	label: string;
	delay: number;
	index: number;
	isFinal: boolean;
	unitCancel?: {left: string; right: string; result: string};
}) => {
	const {prefix, rest} = splitStep(step);

	return (
		<FadeUp delay={delay} durationFrames={16} dy={24}>
			<div
				style={{
					position: 'relative',
					display: 'grid',
					gridTemplateColumns: '120px minmax(0, 1fr) 64px',
					gap: 32,
					alignItems: isFinal ? 'start' : 'center',
					minHeight: isFinal ? 154 : 78,
					padding: '12px 18px 12px 0',
					borderBottom: `1px solid ${index < 4 ? TOK.rule : 'transparent'}`,
				}}
			>
				{isFinal ? (
					<AmbientBorderPulse
						delay={delay + 58}
						color={TOK.amber}
						opacity={0.12}
						style={{borderRadius: 10, inset: -6}}
					/>
				) : null}
				<div
					style={{
						fontFamily: FONT_MONO,
						fontSize: 22,
						color: TOK.inkMute,
						letterSpacing: '0.12em',
						textTransform: 'uppercase',
					}}
				>
					{label}
				</div>
				<div
					style={{
						fontFamily: FONT_MONO,
						fontSize: isFinal ? TYPE.mathFinal.fontSize : TYPE.math.fontSize,
						fontWeight: isFinal ? TYPE.mathFinal.fontWeight : TYPE.math.fontWeight,
						lineHeight: 1.2,
						color: isFinal ? TOK.amber : TOK.ink,
						letterSpacing: '-0.035em',
						whiteSpace: 'normal',
					}}
				>
					{prefix ? <span style={{color: TOK.inkDim}}>{prefix}: </span> : null}
					<MathText text={rest} isFinal={isFinal} />
					{unitCancel ? (
						<InlineUnitCheck
							left={unitCancel.left}
							right={unitCancel.right}
							result={unitCancel.result}
							delay={delay + 34}
						/>
					) : null}
				</div>
				{isFinal ? (
					<div style={{position: 'relative', width: 60, height: 60}}>
						<ScribbleMark
							kind="check"
							size={58}
							color={TOK.chem1}
							strokeWidth={6}
							seed={31}
							delay={delay + 20}
							durationFrames={14}
						/>
					</div>
				) : (
					<div />
				)}
			</div>
		</FadeUp>
	);
};

const InlineUnitCheck = ({
	left,
	right,
	result,
	delay,
}: {
	left: string;
	right: string;
	result: string;
	delay: number;
}) => {
	const frame = useCurrentFrame();
	const draw = interpolate(frame, [delay + 14, delay + 30], [0, 1], clamp);

	return (
		<FadeUp delay={delay} durationFrames={14} dy={14}>
			<div
				style={{
					marginTop: 16,
					width: 'fit-content',
					maxWidth: 1000,
					padding: '16px 20px',
					borderRadius: 10,
					border: `1px dashed ${TOK.chem2}`,
					background: 'rgba(15,22,20,0.7)',
					display: 'grid',
					gridTemplateColumns: 'auto minmax(0, 1fr)',
					alignItems: 'center',
					gap: 28,
				}}
			>
				<div style={{display: 'flex', alignItems: 'center', gap: 14, fontFamily: FONT_MONO, fontSize: 25, color: TOK.ink}}>
						<CrossedUnit text={left} draw={draw} />
						<span style={{color: TOK.inkMute}}>×</span>
						<CrossedUnit text={right} draw={draw} />
					</div>
					<div>
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 17,
								letterSpacing: '0.16em',
								color: TOK.chem2,
								marginBottom: 6,
								textTransform: 'uppercase',
							}}
						>
							check: units cancel
						</div>
						<div style={{fontSize: 24, color: TOK.inkDim, lineHeight: 1.25, letterSpacing: 0}}>{result}</div>
					</div>
				</div>
		</FadeUp>
	);
};

const CrossedUnit = ({text, draw}: {text: string; draw: number}) => (
	<span style={{position: 'relative', display: 'inline-block', minWidth: 92, textAlign: 'center', padding: '2px 8px'}}>
		{text}
		<svg
			viewBox="0 0 100 44"
			aria-hidden
			style={{position: 'absolute', inset: '-3px 0 0', width: '100%', height: 48, overflow: 'visible'}}
		>
			<path
				d="M12 36 L88 8"
				pathLength={1}
				strokeDasharray={1}
				strokeDashoffset={1 - draw}
				fill="none"
				stroke={TOK.amber}
				strokeWidth={5}
				strokeLinecap="round"
			/>
		</svg>
	</span>
);

const splitStep = (step: string) => {
	const match = step.match(/^([^:]+):\s*(.+)$/);
	if (!match) return {prefix: null, rest: step};
	return {prefix: match[1], rest: match[2]};
};
