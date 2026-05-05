// QuickCheckSlide — gold-standard re-skin (Phase 1.10, 2026-05-01).
//
// Active recall moment: question first, explicit pause, then answer board.
// Uses the Claude quiz reference for timing/handwritten pause treatment, but
// keeps the HSC calculation answer restrained and copyable.

import {interpolate, useCurrentFrame} from 'remotion';
import type {LessonData, QuickCheckScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleMark, ScribbleStar, ScribbleUnderline} from '../animations/DoodlePrimitives';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {calculationStepLabel, getCalculationStepKind} from './shared/calculationSteps';
import {StampInTitle} from '../animations/MotionPrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_HAND, FONT_MONO, TYPE, TOK} from '../styles/tokens';

type QuickCheckSlideProps = {
	scene: QuickCheckScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const QuickCheckSlide = ({scene, lesson, sceneIndex, totalScenes}: QuickCheckSlideProps) => {
	const frame = useCurrentFrame();
	const answerStart = 360;
	const answerProgress = interpolate(frame, [answerStart - 24, answerStart + 24], [0, 1], clamp);
	const pauseOpacity = interpolate(frame, [answerStart - 28, answerStart + 8], [1, 0], clamp);

	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="YOUR TURN" sceneType="quickCheck" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<FadeUp
				delay={14}
				durationFrames={16}
				dy={26}
				style={{
					position: 'absolute',
					top: 128,
					right: 88,
					transform: 'rotate(7deg)',
					opacity: pauseOpacity,
				}}
			>
				<PauseBadge />
			</FadeUp>

			<div style={{position: 'absolute', top: 180, left: 64, right: 64}}>
				<Eyebrow color={TOK.inkDim}>QUICK CHECK · TRY IT FIRST</Eyebrow>

				<FadeUp delay={24} durationFrames={16} dy={24}>
					<StampInTitle delay={24} color={TOK.ink} underlineColor={TOK.amber}>
						<div
							style={{
								marginTop: 18,
								fontSize: fitQuestionSize(scene.question),
								fontWeight: 820,
								lineHeight: 0.98,
								letterSpacing: '-0.035em',
								color: TOK.ink,
								maxWidth: 1480,
							}}
						>
							{scene.question}
						</div>
					</StampInTitle>
				</FadeUp>

				{scene.pausePrompt ? (
					<div
						style={{
							marginTop: 28,
							opacity: pauseOpacity,
						}}
					>
						<FadeUp delay={70} durationFrames={14} dy={18}>
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: 14,
									fontSize: TYPE.callout.fontSize,
									color: TOK.inkDim,
									fontWeight: TYPE.callout.fontWeight,
									fontStyle: 'italic',
								}}
							>
								<span style={{fontFamily: FONT_MONO, fontStyle: 'normal', fontSize: 24}}>→</span>
								<span>{scene.pausePrompt}</span>
							</div>
						</FadeUp>
					</div>
				) : null}
			</div>

			{answerProgress < 0.98 ? (
				<PauseInstruction opacity={pauseOpacity} />
			) : null}

			<div
				style={{
					position: 'absolute',
					left: 64,
					right: 64,
					top: 462,
					opacity: answerProgress,
				}}
			>
				<AmbientGlow left="10%" top={-16} width="80%" height={430} delay={answerStart + 260} opacity={0.07} speedSeconds={6.2} />
				<AnswerBoard steps={scene.answerSteps} startDelay={answerStart} />
			</div>
		</SlideFrame>
	);
};

const PauseBadge = () => (
	<div
		style={{
			position: 'relative',
			fontFamily: FONT_HAND,
			fontSize: 96,
			color: TOK.amber,
			fontWeight: 700,
			lineHeight: 1,
		}}
	>
		pause!
		<div style={{position: 'absolute', left: -24, top: 28, transform: 'rotate(-15deg)'}}>
			<ScribbleStar size={62} color={TOK.amber} seed={2} delay={28} durationFrames={16} />
		</div>
	</div>
);

const PauseInstruction = ({opacity}: {opacity: number}) => (
	<div
		style={{
			position: 'absolute',
			left: 64,
			right: 64,
			bottom: 168,
			opacity,
		}}
	>
		<FadeUp delay={112} durationFrames={14} dy={18}>
			<div
				style={{
					width: 'fit-content',
					margin: '0 auto',
					fontFamily: FONT_HAND,
					fontSize: 42,
					color: TOK.inkDim,
					transform: 'rotate(-1deg)',
				}}
			>
				take the pause — then keep watching
			</div>
		</FadeUp>
	</div>
);

const AnswerBoard = ({steps, startDelay}: {steps: string[]; startDelay: number}) => {
	const n = steps.length;

	return (
		<div
			style={{
				display: 'grid',
				gap: 22,
				maxWidth: 1580,
				margin: '0 auto',
			}}
		>
			{steps.map((step, index) => {
				const delay = startDelay + 16 + index * 68;
				const isFinal = index === n - 1;
				const kind = getCalculationStepKind(step, index, n);

				return (
					<AnswerStep
						key={`${index}-${step}`}
						step={step}
						label={calculationStepLabel[kind] ?? `Step ${index + 1}`}
						delay={delay}
						isFinal={isFinal}
					/>
				);
			})}
		</div>
	);
};

const AnswerStep = ({
	step,
	label,
	delay,
	isFinal,
}: {
	step: string;
	label: string;
	delay: number;
	isFinal: boolean;
}) => {
	return (
		<FadeUp delay={delay} durationFrames={16} dy={22}>
			<div
				style={{
					position: 'relative',
					display: 'grid',
					gridTemplateColumns: '128px minmax(0, 1fr) 64px',
					gap: 30,
					alignItems: 'center',
					minHeight: isFinal ? 98 : 82,
					padding: '10px 16px 10px 0',
					borderBottom: `1px solid ${isFinal ? 'transparent' : TOK.rule}`,
				}}
			>
				{isFinal ? (
					<AmbientBorderPulse
						delay={delay + 42}
						color={TOK.amber}
						opacity={0.12}
						style={{borderRadius: 8, inset: -6}}
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
						fontSize: isFinal ? 44 : 38,
						fontWeight: isFinal ? 760 : 600,
						lineHeight: 1.2,
						color: isFinal ? TOK.amber : TOK.ink,
						letterSpacing: '-0.035em',
					}}
				>
					<MathText text={step} isFinal={isFinal} />
					{isFinal ? (
						<div style={{position: 'relative', height: 18, marginTop: 2, width: Math.min(980, step.length * 18)}}>
							<ScribbleUnderline
								width={Math.min(980, Math.max(360, step.length * 18))}
								color={TOK.amber}
								strokeWidth={4}
								seed={22}
								strokes={2}
								delay={delay + 22}
								durationFrames={16}
							/>
						</div>
					) : null}
				</div>
				{isFinal ? (
					<ScribbleMark
						kind="check"
						size={58}
						color={TOK.chem1}
						strokeWidth={6}
						seed={24}
						delay={delay + 18}
						durationFrames={14}
					/>
				) : (
					<div />
				)}
			</div>
		</FadeUp>
	);
};

const MathText = ({text, isFinal}: {text: string; isFinal: boolean}) => {
	const pieces = text.split(/(Nₐ|N|n|mol⁻¹|mol|formula units|atoms|molecules|=|×|÷|\?)/g).filter(Boolean);

	return (
		<>
			{pieces.map((piece, index) => (
				<span key={`${piece}-${index}`} style={{color: colorForPiece(piece, isFinal)}}>
					{piece}
				</span>
			))}
		</>
	);
};

const colorForPiece = (piece: string, isFinal: boolean) => {
	if (piece === 'Nₐ') return TOK.amber;
	if (piece === 'N' || piece === 'n') return isFinal ? TOK.amber : TOK.chem2;
	if (['mol', 'mol⁻¹'].includes(piece)) return TOK.chem2;
	if (['atoms', 'molecules', 'formula units'].includes(piece)) return TOK.amber;
	if (['=', '×', '÷'].includes(piece)) return TOK.inkDim;
	return undefined;
};

const fitQuestionSize = (question: string) => {
	if (question.length > 88) return TYPE.h4.fontSize;
	if (question.length > 70) return TYPE.h3.fontSize;
	return TYPE.h2.fontSize;
};
